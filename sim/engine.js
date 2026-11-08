export class RNG {
  constructor(seed=42){this.seed=seed>>>0;}
  next(){this.seed=(1664525*this.seed+1013904223)>>>0;return this.seed/4294967296;}
}
export class Request {constructor(id,time){this.id=id;this.created=time;}}
export class Node {
 constructor(id,workers=8,service=.1){Object.assign(this,{id,workers,service,queue:[],active:[],failed:false});}
}
export class Metrics {
 constructor(){this.arrived=0;this.completed=0;this.dropped=0;this.latencies=[];this.history=[];}
 record(latency){this.completed++;this.latencies.push(latency);if(this.latencies.length>5000)this.latencies.shift();}
 percentile(p){const a=[...this.latencies].sort((a,b)=>a-b);return a.length?a[Math.min(a.length-1,Math.floor(a.length*p))]*1000:0;}
}
export class Sim {
 constructor(scenario,config={}){this.scenario=scenario;this.config={...scenario.defaults,...config};this.reset();}
 reset(){this.time=0;this.rng=new RNG();this.metrics=new Metrics();this.nodes=this.scenario.topology(this.config);this.state={};this.credit=0;this.serial=0;this.lastSample=0;}
 configure(key,value){this.config[key]=value;this.scenario.configure?.(this,key);}
 enqueue(req,index=0){const n=this.nodes[index];if(!n||n.failed||n.queue.length>=this.config.queueLimit){this.metrics.dropped++;return false;}n.queue.push(req);return true;}
 complete(req){this.metrics.record(this.time-req.created);this.scenario.complete?.(this,req);}
 step(dt=.05){
 this.time+=dt;this.scenario.before?.(this,dt);
 for(const n of this.nodes){if(n.failed)continue;for(let i=n.active.length-1;i>=0;i--){const job=n.active[i];job.remaining-=dt;if(job.remaining<=1e-9){n.active.splice(i,1);this.complete(job.req);}}while(n.active.length<n.workers&&n.queue.length){n.active.push({req:n.queue.shift(),remaining:n.service*(.8+.4*this.rng.next())});}}
 this.credit+=this.config.rate*dt;while(this.credit>=1){this.credit--;const req=new Request(++this.serial,this.time);this.metrics.arrived++;this.scenario.arrive(this,req);}
 if(this.time-this.lastSample>=.5){this.lastSample=this.time;this.metrics.history.push({time:this.time,queue:this.nodes.reduce((a,n)=>a+n.queue.length,0)});if(this.metrics.history.length>100)this.metrics.history.shift();}
 }
 get stats(){const m=this.metrics;return {queue:this.nodes.reduce((a,n)=>a+n.queue.length,0),util:this.nodes.reduce((a,n)=>a+(n.failed?0:n.active.length),0)/this.nodes.reduce((a,n)=>a+n.workers,0),p95:m.percentile(.95),throughput:m.completed/Math.max(this.time,.05),errors:m.dropped/Math.max(m.arrived,1)*100};}
}
