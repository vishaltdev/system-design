import {read,save} from './storage.js';
import {scenarios} from '../sim/scenarios.js';
const lesson=!!document.body.dataset.lesson,base=lesson?'../':'./';
const theme=read('theme',matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=theme;
document.querySelector('#nav').innerHTML=`<header><a class="brand" href="${base}index.html"><span class="brand-icon">S<span>↗</span></span> systems<span class="muted">/</span>lab</a><nav aria-label="Main"><a href="${base}index.html">The course</a><button id="theme" class="subtle" aria-label="Switch color theme">◐ <span>Theme</span></button></nav></header>`;
document.querySelector('#theme').onclick=()=>{const t=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=t;save('theme',t);};
export function lessonNav(){return `<a href="../index.html" class="back">← All lessons</a><div class="side-label">THE LEARNING PATH</div>${scenarios.map(s=>`<a class="side-link ${s.id===document.body.dataset.lesson?'selected':''}" href="${s.number}-${s.id}.html"><span>${s.number}</span>${s.title}<small>${read(s.id,{ }).complete?'✓':''}</small></a>`).join('')}<div class="side-note">Learn by breaking things.<br>Every experiment is safe to reset.</div>`;}
