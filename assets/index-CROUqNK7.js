import{r as n}from"./index-XwE6gQmn.js";import{f as b}from"./Combination-WE48jzIv.js";function p(r){const[e,t]=n.useState(void 0);return b(()=>{if(r){t({width:r.offsetWidth,height:r.offsetHeight});const c=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const u=i[0];let o,s;if("borderBoxSize"in u){const f=u.borderBoxSize,d=Array.isArray(f)?f[0]:f;o=d.inlineSize,s=d.blockSize}else o=r.offsetWidth,s=r.offsetHeight;t({width:o,height:s})});return c.observe(r,{box:"border-box"}),()=>c.unobserve(r)}else t(void 0)},[r]),e}function z(r){const e=n.useRef({value:r,previous:r});return n.useMemo(()=>(e.current.value!==r&&(e.current.previous=e.current.value,e.current.value=r),e.current.previous),[r])}export{z as $,p as a};
