import{r as n,j as h}from"./index-BwT9pd9i.js";import{_ as b,$ as G,a as k,b as Ee,f as nn,c as tn,d as T}from"./index-C2_1S1yO.js";import{$ as le,a as he,c as Me,d as v,b as se,e as Q,h as on,i as rn,k as cn,l as an,g as sn,j as dn}from"./Combination-BG6guUSd.js";import{$ as Ce,a as Re,e as De,f as un,h as ln,g as fn}from"./index-_9pz3Ma7.js";import{c as pn,f as $n,j as mn}from"./react-icons.esm-srfArUxB.js";const ae="rovingFocusGroup.onEntryFocus",bn={bubbles:!1,cancelable:!0},fe="RovingFocusGroup",[de,Ie,vn]=Ce(fe),[gn,Pe]=le(fe,[vn]),[xn,wn]=gn(fe),_n=n.forwardRef((e,o)=>n.createElement(de.Provider,{scope:e.__scopeRovingFocusGroup},n.createElement(de.Slot,{scope:e.__scopeRovingFocusGroup},n.createElement(En,b({},e,{ref:o}))))),En=n.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:t,orientation:r,loop:c=!1,dir:a,currentTabStopId:d,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:f,onEntryFocus:p,...l}=e,s=n.useRef(null),$=G(o,s),g=Re(a),[m=null,x]=he({prop:d,defaultProp:i,onChange:f}),[I,E]=n.useState(!1),M=Me(p),U=Ie(t),K=n.useRef(!1),[ne,V]=n.useState(0);return n.useEffect(()=>{const w=s.current;if(w)return w.addEventListener(ae,M),()=>w.removeEventListener(ae,M)},[M]),n.createElement(xn,{scope:t,orientation:r,dir:g,loop:c,currentTabStopId:m,onItemFocus:n.useCallback(w=>x(w),[x]),onItemShiftTab:n.useCallback(()=>E(!0),[]),onFocusableItemAdd:n.useCallback(()=>V(w=>w+1),[]),onFocusableItemRemove:n.useCallback(()=>V(w=>w-1),[])},n.createElement(k.div,b({tabIndex:I||ne===0?-1:0,"data-orientation":r},l,{ref:$,style:{outline:"none",...e.style},onMouseDown:v(e.onMouseDown,()=>{K.current=!0}),onFocus:v(e.onFocus,w=>{const te=!K.current;if(w.target===w.currentTarget&&te&&!I){const S=new CustomEvent(ae,bn);if(w.currentTarget.dispatchEvent(S),!S.defaultPrevented){const N=U().filter(P=>P.focusable),oe=N.find(P=>P.active),j=N.find(P=>P.id===m),B=[oe,j,...N].filter(Boolean).map(P=>P.ref.current);ye(B)}}K.current=!1}),onBlur:v(e.onBlur,()=>E(!1))})))}),hn="RovingFocusGroupItem",Mn=n.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:t,focusable:r=!0,active:c=!1,tabStopId:a,...d}=e,i=se(),f=a||i,p=wn(hn,t),l=p.currentTabStopId===f,s=Ie(t),{onFocusableItemAdd:$,onFocusableItemRemove:g}=p;return n.useEffect(()=>{if(r)return $(),()=>g()},[r,$,g]),n.createElement(de.ItemSlot,{scope:t,id:f,focusable:r,active:c},n.createElement(k.span,b({tabIndex:l?0:-1,"data-orientation":p.orientation},d,{ref:o,onMouseDown:v(e.onMouseDown,m=>{r?p.onItemFocus(f):m.preventDefault()}),onFocus:v(e.onFocus,()=>p.onItemFocus(f)),onKeyDown:v(e.onKeyDown,m=>{if(m.key==="Tab"&&m.shiftKey){p.onItemShiftTab();return}if(m.target!==m.currentTarget)return;const x=Dn(m,p.orientation,p.dir);if(x!==void 0){m.preventDefault();let E=s().filter(M=>M.focusable).map(M=>M.ref.current);if(x==="last")E.reverse();else if(x==="prev"||x==="next"){x==="prev"&&E.reverse();const M=E.indexOf(m.currentTarget);E=p.loop?In(E,M+1):E.slice(M+1)}setTimeout(()=>ye(E))}})})))}),Cn={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Rn(e,o){return o!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function Dn(e,o,t){const r=Rn(e.key,t);if(!(o==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(o==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return Cn[r]}function ye(e){const o=document.activeElement;for(const t of e)if(t===o||(t.focus(),document.activeElement!==o))return}function In(e,o){return e.map((t,r)=>e[(o+r)%e.length])}const Pn=_n,yn=Mn,ie=["Enter"," "],Nn=["ArrowDown","PageUp","Home"],Ne=["ArrowUp","PageDown","End"],Tn=[...Nn,...Ne],Sn={ltr:[...ie,"ArrowRight"],rtl:[...ie,"ArrowLeft"]},On={ltr:["ArrowLeft"],rtl:["ArrowRight"]},ee="Menu",[X,kn,Fn]=Ce(ee),[F,Te]=le(ee,[Fn,De,Pe]),pe=De(),Se=Pe(),[An,A]=F(ee),[Un,H]=F(ee),Kn=e=>{const{__scopeMenu:o,open:t=!1,children:r,dir:c,onOpenChange:a,modal:d=!0}=e,i=pe(o),[f,p]=n.useState(null),l=n.useRef(!1),s=Me(a),$=Re(c);return n.useEffect(()=>{const g=()=>{l.current=!0,document.addEventListener("pointerdown",m,{capture:!0,once:!0}),document.addEventListener("pointermove",m,{capture:!0,once:!0})},m=()=>l.current=!1;return document.addEventListener("keydown",g,{capture:!0}),()=>{document.removeEventListener("keydown",g,{capture:!0}),document.removeEventListener("pointerdown",m,{capture:!0}),document.removeEventListener("pointermove",m,{capture:!0})}},[]),n.createElement(fn,i,n.createElement(An,{scope:o,open:t,onOpenChange:s,content:f,onContentChange:p},n.createElement(Un,{scope:o,onClose:n.useCallback(()=>s(!1),[s]),isUsingKeyboardRef:l,dir:$,modal:d},r)))},Oe=n.forwardRef((e,o)=>{const{__scopeMenu:t,...r}=e,c=pe(t);return n.createElement(ln,b({},c,r,{ref:o}))}),ke="MenuPortal",[Ln,Fe]=F(ke,{forceMount:void 0}),Gn=e=>{const{__scopeMenu:o,forceMount:t,children:r,container:c}=e,a=A(ke,o);return n.createElement(Ln,{scope:o,forceMount:t},n.createElement(Q,{present:t||a.open},n.createElement(on,{asChild:!0,container:c},r)))},D="MenuContent",[Vn,$e]=F(D),jn=n.forwardRef((e,o)=>{const t=Fe(D,e.__scopeMenu),{forceMount:r=t.forceMount,...c}=e,a=A(D,e.__scopeMenu),d=H(D,e.__scopeMenu);return n.createElement(X.Provider,{scope:e.__scopeMenu},n.createElement(Q,{present:r||a.open},n.createElement(X.Slot,{scope:e.__scopeMenu},d.modal?n.createElement(Bn,b({},c,{ref:o})):n.createElement(Yn,b({},c,{ref:o})))))}),Bn=n.forwardRef((e,o)=>{const t=A(D,e.__scopeMenu),r=n.useRef(null),c=G(o,r);return n.useEffect(()=>{const a=r.current;if(a)return rn(a)},[]),n.createElement(me,b({},e,{ref:c,trapFocus:t.open,disableOutsidePointerEvents:t.open,disableOutsideScroll:!0,onFocusOutside:v(e.onFocusOutside,a=>a.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>t.onOpenChange(!1)}))}),Yn=n.forwardRef((e,o)=>{const t=A(D,e.__scopeMenu);return n.createElement(me,b({},e,{ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>t.onOpenChange(!1)}))}),me=n.forwardRef((e,o)=>{const{__scopeMenu:t,loop:r=!1,trapFocus:c,onOpenAutoFocus:a,onCloseAutoFocus:d,disableOutsidePointerEvents:i,onEntryFocus:f,onEscapeKeyDown:p,onPointerDownOutside:l,onFocusOutside:s,onInteractOutside:$,onDismiss:g,disableOutsideScroll:m,...x}=e,I=A(D,t),E=H(D,t),M=pe(t),U=Se(t),K=kn(t),[ne,V]=n.useState(null),w=n.useRef(null),te=G(o,w,I.onContentChange),S=n.useRef(0),N=n.useRef(""),oe=n.useRef(0),j=n.useRef(null),re=n.useRef("right"),B=n.useRef(0),P=m?dn:n.Fragment,Qe=m?{as:nn,allowPinchZoom:!0}:void 0,en=u=>{var _,R;const O=N.current+u,Y=K().filter(y=>!y.disabled),ce=document.activeElement,ge=(_=Y.find(y=>y.ref.current===ce))===null||_===void 0?void 0:_.textValue,Z=Y.map(y=>y.textValue),z=st(Z,O,ge),xe=(R=Y.find(y=>y.textValue===z))===null||R===void 0?void 0:R.ref.current;(function y(we){N.current=we,window.clearTimeout(S.current),we!==""&&(S.current=window.setTimeout(()=>y(""),1e3))})(O),xe&&setTimeout(()=>xe.focus())};n.useEffect(()=>()=>window.clearTimeout(S.current),[]),cn();const L=n.useCallback(u=>{var _,R;return re.current===((_=j.current)===null||_===void 0?void 0:_.side)&&it(u,(R=j.current)===null||R===void 0?void 0:R.area)},[]);return n.createElement(Vn,{scope:t,searchRef:N,onItemEnter:n.useCallback(u=>{L(u)&&u.preventDefault()},[L]),onItemLeave:n.useCallback(u=>{var _;L(u)||((_=w.current)===null||_===void 0||_.focus(),V(null))},[L]),onTriggerLeave:n.useCallback(u=>{L(u)&&u.preventDefault()},[L]),pointerGraceTimerRef:oe,onPointerGraceIntentChange:n.useCallback(u=>{j.current=u},[])},n.createElement(P,Qe,n.createElement(an,{asChild:!0,trapped:c,onMountAutoFocus:v(a,u=>{var _;u.preventDefault(),(_=w.current)===null||_===void 0||_.focus()}),onUnmountAutoFocus:d},n.createElement(sn,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:p,onPointerDownOutside:l,onFocusOutside:s,onInteractOutside:$,onDismiss:g},n.createElement(Pn,b({asChild:!0},U,{dir:E.dir,orientation:"vertical",loop:r,currentTabStopId:ne,onCurrentTabStopIdChange:V,onEntryFocus:v(f,u=>{E.isUsingKeyboardRef.current||u.preventDefault()})}),n.createElement(un,b({role:"menu","aria-orientation":"vertical","data-state":Ge(I.open),"data-radix-menu-content":"",dir:E.dir},M,x,{ref:te,style:{outline:"none",...x.style},onKeyDown:v(x.onKeyDown,u=>{const R=u.target.closest("[data-radix-menu-content]")===u.currentTarget,O=u.ctrlKey||u.altKey||u.metaKey,Y=u.key.length===1;R&&(u.key==="Tab"&&u.preventDefault(),!O&&Y&&en(u.key));const ce=w.current;if(u.target!==ce||!Tn.includes(u.key))return;u.preventDefault();const Z=K().filter(z=>!z.disabled).map(z=>z.ref.current);Ne.includes(u.key)&&Z.reverse(),ct(Z)}),onBlur:v(e.onBlur,u=>{u.currentTarget.contains(u.target)||(window.clearTimeout(S.current),N.current="")}),onPointerMove:v(e.onPointerMove,W(u=>{const _=u.target,R=B.current!==u.clientX;if(u.currentTarget.contains(_)&&R){const O=u.clientX>B.current?"right":"left";re.current=O,B.current=u.clientX}}))})))))))}),zn=n.forwardRef((e,o)=>{const{__scopeMenu:t,...r}=e;return n.createElement(k.div,b({},r,{ref:o}))}),ue="MenuItem",_e="menu.itemSelect",be=n.forwardRef((e,o)=>{const{disabled:t=!1,onSelect:r,...c}=e,a=n.useRef(null),d=H(ue,e.__scopeMenu),i=$e(ue,e.__scopeMenu),f=G(o,a),p=n.useRef(!1),l=()=>{const s=a.current;if(!t&&s){const $=new CustomEvent(_e,{bubbles:!0,cancelable:!0});s.addEventListener(_e,g=>r==null?void 0:r(g),{once:!0}),tn(s,$),$.defaultPrevented?p.current=!1:d.onClose()}};return n.createElement(Ae,b({},c,{ref:f,disabled:t,onClick:v(e.onClick,l),onPointerDown:s=>{var $;($=e.onPointerDown)===null||$===void 0||$.call(e,s),p.current=!0},onPointerUp:v(e.onPointerUp,s=>{var $;p.current||($=s.currentTarget)===null||$===void 0||$.click()}),onKeyDown:v(e.onKeyDown,s=>{const $=i.searchRef.current!=="";t||$&&s.key===" "||ie.includes(s.key)&&(s.currentTarget.click(),s.preventDefault())})}))}),Ae=n.forwardRef((e,o)=>{const{__scopeMenu:t,disabled:r=!1,textValue:c,...a}=e,d=$e(ue,t),i=Se(t),f=n.useRef(null),p=G(o,f),[l,s]=n.useState(!1),[$,g]=n.useState("");return n.useEffect(()=>{const m=f.current;if(m){var x;g(((x=m.textContent)!==null&&x!==void 0?x:"").trim())}},[a.children]),n.createElement(X.ItemSlot,{scope:t,disabled:r,textValue:c??$},n.createElement(yn,b({asChild:!0},i,{focusable:!r}),n.createElement(k.div,b({role:"menuitem","data-highlighted":l?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0},a,{ref:p,onPointerMove:v(e.onPointerMove,W(m=>{r?d.onItemLeave(m):(d.onItemEnter(m),m.defaultPrevented||m.currentTarget.focus())})),onPointerLeave:v(e.onPointerLeave,W(m=>d.onItemLeave(m))),onFocus:v(e.onFocus,()=>s(!0)),onBlur:v(e.onBlur,()=>s(!1))}))))}),Xn=n.forwardRef((e,o)=>{const{checked:t=!1,onCheckedChange:r,...c}=e;return n.createElement(Ke,{scope:e.__scopeMenu,checked:t},n.createElement(be,b({role:"menuitemcheckbox","aria-checked":J(t)?"mixed":t},c,{ref:o,"data-state":ve(t),onSelect:v(c.onSelect,()=>r==null?void 0:r(J(t)?!0:!t),{checkForDefaultPrevented:!1})})))}),Wn="MenuRadioGroup",[eo,Hn]=F(Wn,{value:void 0,onValueChange:()=>{}}),Zn="MenuRadioItem",qn=n.forwardRef((e,o)=>{const{value:t,...r}=e,c=Hn(Zn,e.__scopeMenu),a=t===c.value;return n.createElement(Ke,{scope:e.__scopeMenu,checked:a},n.createElement(be,b({role:"menuitemradio","aria-checked":a},r,{ref:o,"data-state":ve(a),onSelect:v(r.onSelect,()=>{var d;return(d=c.onValueChange)===null||d===void 0?void 0:d.call(c,t)},{checkForDefaultPrevented:!1})})))}),Ue="MenuItemIndicator",[Ke,Jn]=F(Ue,{checked:!1}),Qn=n.forwardRef((e,o)=>{const{__scopeMenu:t,forceMount:r,...c}=e,a=Jn(Ue,t);return n.createElement(Q,{present:r||J(a.checked)||a.checked===!0},n.createElement(k.span,b({},c,{ref:o,"data-state":ve(a.checked)})))}),et=n.forwardRef((e,o)=>{const{__scopeMenu:t,...r}=e;return n.createElement(k.div,b({role:"separator","aria-orientation":"horizontal"},r,{ref:o}))}),nt="MenuSub",[no,Le]=F(nt),q="MenuSubTrigger",tt=n.forwardRef((e,o)=>{const t=A(q,e.__scopeMenu),r=H(q,e.__scopeMenu),c=Le(q,e.__scopeMenu),a=$e(q,e.__scopeMenu),d=n.useRef(null),{pointerGraceTimerRef:i,onPointerGraceIntentChange:f}=a,p={__scopeMenu:e.__scopeMenu},l=n.useCallback(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return n.useEffect(()=>l,[l]),n.useEffect(()=>{const s=i.current;return()=>{window.clearTimeout(s),f(null)}},[i,f]),n.createElement(Oe,b({asChild:!0},p),n.createElement(Ae,b({id:c.triggerId,"aria-haspopup":"menu","aria-expanded":t.open,"aria-controls":c.contentId,"data-state":Ge(t.open)},e,{ref:Ee(o,c.onTriggerChange),onClick:s=>{var $;($=e.onClick)===null||$===void 0||$.call(e,s),!(e.disabled||s.defaultPrevented)&&(s.currentTarget.focus(),t.open||t.onOpenChange(!0))},onPointerMove:v(e.onPointerMove,W(s=>{a.onItemEnter(s),!s.defaultPrevented&&!e.disabled&&!t.open&&!d.current&&(a.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{t.onOpenChange(!0),l()},100))})),onPointerLeave:v(e.onPointerLeave,W(s=>{var $;l();const g=($=t.content)===null||$===void 0?void 0:$.getBoundingClientRect();if(g){var m;const x=(m=t.content)===null||m===void 0?void 0:m.dataset.side,I=x==="right",E=I?-5:5,M=g[I?"left":"right"],U=g[I?"right":"left"];a.onPointerGraceIntentChange({area:[{x:s.clientX+E,y:s.clientY},{x:M,y:g.top},{x:U,y:g.top},{x:U,y:g.bottom},{x:M,y:g.bottom}],side:x}),window.clearTimeout(i.current),i.current=window.setTimeout(()=>a.onPointerGraceIntentChange(null),300)}else{if(a.onTriggerLeave(s),s.defaultPrevented)return;a.onPointerGraceIntentChange(null)}})),onKeyDown:v(e.onKeyDown,s=>{const $=a.searchRef.current!=="";if(!(e.disabled||$&&s.key===" ")&&Sn[r.dir].includes(s.key)){var g;t.onOpenChange(!0),(g=t.content)===null||g===void 0||g.focus(),s.preventDefault()}})})))}),ot="MenuSubContent",rt=n.forwardRef((e,o)=>{const t=Fe(D,e.__scopeMenu),{forceMount:r=t.forceMount,...c}=e,a=A(D,e.__scopeMenu),d=H(D,e.__scopeMenu),i=Le(ot,e.__scopeMenu),f=n.useRef(null),p=G(o,f);return n.createElement(X.Provider,{scope:e.__scopeMenu},n.createElement(Q,{present:r||a.open},n.createElement(X.Slot,{scope:e.__scopeMenu},n.createElement(me,b({id:i.contentId,"aria-labelledby":i.triggerId},c,{ref:p,align:"start",side:d.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:l=>{var s;d.isUsingKeyboardRef.current&&((s=f.current)===null||s===void 0||s.focus()),l.preventDefault()},onCloseAutoFocus:l=>l.preventDefault(),onFocusOutside:v(e.onFocusOutside,l=>{l.target!==i.trigger&&a.onOpenChange(!1)}),onEscapeKeyDown:v(e.onEscapeKeyDown,l=>{d.onClose(),l.preventDefault()}),onKeyDown:v(e.onKeyDown,l=>{const s=l.currentTarget.contains(l.target),$=On[d.dir].includes(l.key);if(s&&$){var g;a.onOpenChange(!1),(g=i.trigger)===null||g===void 0||g.focus(),l.preventDefault()}})})))))});function Ge(e){return e?"open":"closed"}function J(e){return e==="indeterminate"}function ve(e){return J(e)?"indeterminate":e?"checked":"unchecked"}function ct(e){const o=document.activeElement;for(const t of e)if(t===o||(t.focus(),document.activeElement!==o))return}function at(e,o){return e.map((t,r)=>e[(o+r)%e.length])}function st(e,o,t){const c=o.length>1&&Array.from(o).every(p=>p===o[0])?o[0]:o,a=t?e.indexOf(t):-1;let d=at(e,Math.max(a,0));c.length===1&&(d=d.filter(p=>p!==t));const f=d.find(p=>p.toLowerCase().startsWith(c.toLowerCase()));return f!==t?f:void 0}function dt(e,o){const{x:t,y:r}=e;let c=!1;for(let a=0,d=o.length-1;a<o.length;d=a++){const i=o[a].x,f=o[a].y,p=o[d].x,l=o[d].y;f>r!=l>r&&t<(p-i)*(r-f)/(l-f)+i&&(c=!c)}return c}function it(e,o){if(!o)return!1;const t={x:e.clientX,y:e.clientY};return dt(t,o)}function W(e){return o=>o.pointerType==="mouse"?e(o):void 0}const ut=Kn,lt=Oe,ft=Gn,pt=jn,$t=zn,mt=be,bt=Xn,vt=qn,gt=Qn,xt=et,wt=tt,_t=rt,Ve="DropdownMenu",[Et,to]=le(Ve,[Te]),C=Te(),[ht,je]=Et(Ve),Mt=e=>{const{__scopeDropdownMenu:o,children:t,dir:r,open:c,defaultOpen:a,onOpenChange:d,modal:i=!0}=e,f=C(o),p=n.useRef(null),[l=!1,s]=he({prop:c,defaultProp:a,onChange:d});return n.createElement(ht,{scope:o,triggerId:se(),triggerRef:p,contentId:se(),open:l,onOpenChange:s,onOpenToggle:n.useCallback(()=>s($=>!$),[s]),modal:i},n.createElement(ut,b({},f,{open:l,onOpenChange:s,dir:r,modal:i}),t))},Ct="DropdownMenuTrigger",Rt=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,disabled:r=!1,...c}=e,a=je(Ct,t),d=C(t);return n.createElement(lt,b({asChild:!0},d),n.createElement(k.button,b({type:"button",id:a.triggerId,"aria-haspopup":"menu","aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":a.open?"open":"closed","data-disabled":r?"":void 0,disabled:r},c,{ref:Ee(o,a.triggerRef),onPointerDown:v(e.onPointerDown,i=>{!r&&i.button===0&&i.ctrlKey===!1&&(a.onOpenToggle(),a.open||i.preventDefault())}),onKeyDown:v(e.onKeyDown,i=>{r||(["Enter"," "].includes(i.key)&&a.onOpenToggle(),i.key==="ArrowDown"&&a.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(i.key)&&i.preventDefault())})})))}),Dt=e=>{const{__scopeDropdownMenu:o,...t}=e,r=C(o);return n.createElement(ft,b({},r,t))},It="DropdownMenuContent",Pt=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=je(It,t),a=C(t),d=n.useRef(!1);return n.createElement(pt,b({id:c.contentId,"aria-labelledby":c.triggerId},a,r,{ref:o,onCloseAutoFocus:v(e.onCloseAutoFocus,i=>{var f;d.current||(f=c.triggerRef.current)===null||f===void 0||f.focus(),d.current=!1,i.preventDefault()}),onInteractOutside:v(e.onInteractOutside,i=>{const f=i.detail.originalEvent,p=f.button===0&&f.ctrlKey===!0,l=f.button===2||p;(!c.modal||l)&&(d.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),yt=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=C(t);return n.createElement($t,b({},c,r,{ref:o}))}),Nt=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=C(t);return n.createElement(mt,b({},c,r,{ref:o}))}),Tt=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=C(t);return n.createElement(bt,b({},c,r,{ref:o}))}),St=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=C(t);return n.createElement(vt,b({},c,r,{ref:o}))}),Ot=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=C(t);return n.createElement(gt,b({},c,r,{ref:o}))}),kt=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=C(t);return n.createElement(xt,b({},c,r,{ref:o}))}),Ft=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=C(t);return n.createElement(wt,b({},c,r,{ref:o}))}),At=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=C(t);return n.createElement(_t,b({},c,r,{ref:o,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),Ut=Mt,Kt=Rt,Lt=Dt,Be=Pt,Ye=yt,ze=Nt,Xe=Tt,We=St,He=Ot,Ze=kt,qe=Ft,Je=At,oo=Ut,ro=Kt,Gt=n.forwardRef(({className:e,inset:o,children:t,...r},c)=>h.jsxDEV(qe,{ref:c,className:T("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",o&&"pl-8",e),...r,children:[t,h.jsxDEV(pn,{className:"ml-auto h-4 w-4"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:39,columnNumber:5},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:29,columnNumber:3},void 0));Gt.displayName=qe.displayName;const Vt=n.forwardRef(({className:e,...o},t)=>h.jsxDEV(Je,{ref:t,className:T("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...o},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:49,columnNumber:3},void 0));Vt.displayName=Je.displayName;const jt=n.forwardRef(({className:e,sideOffset:o=4,...t},r)=>h.jsxDEV(Lt,{children:h.jsxDEV(Be,{ref:r,sideOffset:o,className:T("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:66,columnNumber:5},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:65,columnNumber:3},void 0));jt.displayName=Be.displayName;const Bt=n.forwardRef(({className:e,inset:o,...t},r)=>h.jsxDEV(ze,{ref:r,className:T("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",o&&"pl-8",e),...t},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:86,columnNumber:3},void 0));Bt.displayName=ze.displayName;const Yt=n.forwardRef(({className:e,children:o,checked:t,...r},c)=>h.jsxDEV(Xe,{ref:c,className:T("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:t,...r,children:[h.jsxDEV("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:h.jsxDEV(He,{children:h.jsxDEV($n,{className:"h-4 w-4"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:113,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:112,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:111,columnNumber:5},void 0),o]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:102,columnNumber:3},void 0));Yt.displayName=Xe.displayName;const zt=n.forwardRef(({className:e,children:o,...t},r)=>h.jsxDEV(We,{ref:r,className:T("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...t,children:[h.jsxDEV("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:h.jsxDEV(He,{children:h.jsxDEV(mn,{className:"h-4 w-4 fill-current"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:136,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:135,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:134,columnNumber:5},void 0),o]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:126,columnNumber:3},void 0));zt.displayName=We.displayName;const Xt=n.forwardRef(({className:e,inset:o,...t},r)=>h.jsxDEV(Ye,{ref:r,className:T("px-2 py-1.5 text-sm font-semibold",o&&"pl-8",e),...t},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:150,columnNumber:3},void 0));Xt.displayName=Ye.displayName;const Wt=n.forwardRef(({className:e,...o},t)=>h.jsxDEV(Ze,{ref:t,className:T("-mx-1 my-1 h-px bg-muted",e),...o},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:166,columnNumber:3},void 0));Wt.displayName=Ze.displayName;export{oo as D,ro as a,jt as b,Xt as c,Wt as d,Bt as e,Yt as f};
