import{r as t,j as E}from"./index-XwE6gQmn.js";import{_ as m,$ as U,a as N,b as he,h as tt,c as nt,d as T}from"./button-C4HOWXLM.js";import{$ as fe,a as Ee,c as Me,d as v,b as se,e as Q,h as ot,i as rt,k as ct,l as at,g as st,j as dt}from"./Combination-WE48jzIv.js";import{$ as Ce,a as Re,c as Ie,d as it,f as ut,e as ft}from"./index-DWR91OCR.js";import{c as lt,g as pt,l as $t}from"./react-icons.esm-5SUvy-NO.js";const ae="rovingFocusGroup.onEntryFocus",bt={bubbles:!1,cancelable:!0},le="RovingFocusGroup",[de,De,mt]=Ce(le),[vt,Pe]=fe(le,[mt]),[gt,xt]=vt(le),wt=t.forwardRef((e,o)=>t.createElement(de.Provider,{scope:e.__scopeRovingFocusGroup},t.createElement(de.Slot,{scope:e.__scopeRovingFocusGroup},t.createElement(_t,m({},e,{ref:o}))))),_t=t.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:c=!1,dir:a,currentTabStopId:d,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:l,onEntryFocus:p,...f}=e,s=t.useRef(null),$=U(o,s),g=Re(a),[b=null,x]=Ee({prop:d,defaultProp:i,onChange:l}),[D,h]=t.useState(!1),M=Me(p),K=De(n),L=t.useRef(!1),[te,j]=t.useState(0);return t.useEffect(()=>{const w=s.current;if(w)return w.addEventListener(ae,M),()=>w.removeEventListener(ae,M)},[M]),t.createElement(gt,{scope:n,orientation:r,dir:g,loop:c,currentTabStopId:b,onItemFocus:t.useCallback(w=>x(w),[x]),onItemShiftTab:t.useCallback(()=>h(!0),[]),onFocusableItemAdd:t.useCallback(()=>j(w=>w+1),[]),onFocusableItemRemove:t.useCallback(()=>j(w=>w-1),[])},t.createElement(N.div,m({tabIndex:D||te===0?-1:0,"data-orientation":r},f,{ref:$,style:{outline:"none",...e.style},onMouseDown:v(e.onMouseDown,()=>{L.current=!0}),onFocus:v(e.onFocus,w=>{const ne=!L.current;if(w.target===w.currentTarget&&ne&&!D){const O=new CustomEvent(ae,bt);if(w.currentTarget.dispatchEvent(O),!O.defaultPrevented){const S=K().filter(P=>P.focusable),oe=S.find(P=>P.active),B=S.find(P=>P.id===b),V=[oe,B,...S].filter(Boolean).map(P=>P.ref.current);ye(V)}}L.current=!1}),onBlur:v(e.onBlur,()=>h(!1))})))}),ht="RovingFocusGroupItem",Et=t.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:c=!1,tabStopId:a,...d}=e,i=se(),l=a||i,p=xt(ht,n),f=p.currentTabStopId===l,s=De(n),{onFocusableItemAdd:$,onFocusableItemRemove:g}=p;return t.useEffect(()=>{if(r)return $(),()=>g()},[r,$,g]),t.createElement(de.ItemSlot,{scope:n,id:l,focusable:r,active:c},t.createElement(N.span,m({tabIndex:f?0:-1,"data-orientation":p.orientation},d,{ref:o,onMouseDown:v(e.onMouseDown,b=>{r?p.onItemFocus(l):b.preventDefault()}),onFocus:v(e.onFocus,()=>p.onItemFocus(l)),onKeyDown:v(e.onKeyDown,b=>{if(b.key==="Tab"&&b.shiftKey){p.onItemShiftTab();return}if(b.target!==b.currentTarget)return;const x=Rt(b,p.orientation,p.dir);if(x!==void 0){b.preventDefault();let h=s().filter(M=>M.focusable).map(M=>M.ref.current);if(x==="last")h.reverse();else if(x==="prev"||x==="next"){x==="prev"&&h.reverse();const M=h.indexOf(b.currentTarget);h=p.loop?It(h,M+1):h.slice(M+1)}setTimeout(()=>ye(h))}})})))}),Mt={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Ct(e,o){return o!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function Rt(e,o,n){const r=Ct(e.key,n);if(!(o==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(o==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return Mt[r]}function ye(e){const o=document.activeElement;for(const n of e)if(n===o||(n.focus(),document.activeElement!==o))return}function It(e,o){return e.map((n,r)=>e[(o+r)%e.length])}const Dt=wt,Pt=Et,ie=["Enter"," "],yt=["ArrowDown","PageUp","Home"],Se=["ArrowUp","PageDown","End"],St=[...yt,...Se],Tt={ltr:[...ie,"ArrowRight"],rtl:[...ie,"ArrowLeft"]},Ot={ltr:["ArrowLeft"],rtl:["ArrowRight"]},ee="Menu",[X,Ft,Nt]=Ce(ee),[k,Te]=fe(ee,[Nt,Ie,Pe]),pe=Ie(),Oe=Pe(),[kt,A]=k(ee),[At,H]=k(ee),Kt=e=>{const{__scopeMenu:o,open:n=!1,children:r,dir:c,onOpenChange:a,modal:d=!0}=e,i=pe(o),[l,p]=t.useState(null),f=t.useRef(!1),s=Me(a),$=Re(c);return t.useEffect(()=>{const g=()=>{f.current=!0,document.addEventListener("pointerdown",b,{capture:!0,once:!0}),document.addEventListener("pointermove",b,{capture:!0,once:!0})},b=()=>f.current=!1;return document.addEventListener("keydown",g,{capture:!0}),()=>{document.removeEventListener("keydown",g,{capture:!0}),document.removeEventListener("pointerdown",b,{capture:!0}),document.removeEventListener("pointermove",b,{capture:!0})}},[]),t.createElement(ft,i,t.createElement(kt,{scope:o,open:n,onOpenChange:s,content:l,onContentChange:p},t.createElement(At,{scope:o,onClose:t.useCallback(()=>s(!1),[s]),isUsingKeyboardRef:f,dir:$,modal:d},r)))},Fe=t.forwardRef((e,o)=>{const{__scopeMenu:n,...r}=e,c=pe(n);return t.createElement(ut,m({},c,r,{ref:o}))}),Ne="MenuPortal",[Lt,ke]=k(Ne,{forceMount:void 0}),Gt=e=>{const{__scopeMenu:o,forceMount:n,children:r,container:c}=e,a=A(Ne,o);return t.createElement(Lt,{scope:o,forceMount:n},t.createElement(Q,{present:n||a.open},t.createElement(ot,{asChild:!0,container:c},r)))},I="MenuContent",[Ut,$e]=k(I),jt=t.forwardRef((e,o)=>{const n=ke(I,e.__scopeMenu),{forceMount:r=n.forceMount,...c}=e,a=A(I,e.__scopeMenu),d=H(I,e.__scopeMenu);return t.createElement(X.Provider,{scope:e.__scopeMenu},t.createElement(Q,{present:r||a.open},t.createElement(X.Slot,{scope:e.__scopeMenu},d.modal?t.createElement(Bt,m({},c,{ref:o})):t.createElement(Vt,m({},c,{ref:o})))))}),Bt=t.forwardRef((e,o)=>{const n=A(I,e.__scopeMenu),r=t.useRef(null),c=U(o,r);return t.useEffect(()=>{const a=r.current;if(a)return rt(a)},[]),t.createElement(be,m({},e,{ref:c,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:v(e.onFocusOutside,a=>a.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)}))}),Vt=t.forwardRef((e,o)=>{const n=A(I,e.__scopeMenu);return t.createElement(be,m({},e,{ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)}))}),be=t.forwardRef((e,o)=>{const{__scopeMenu:n,loop:r=!1,trapFocus:c,onOpenAutoFocus:a,onCloseAutoFocus:d,disableOutsidePointerEvents:i,onEntryFocus:l,onEscapeKeyDown:p,onPointerDownOutside:f,onFocusOutside:s,onInteractOutside:$,onDismiss:g,disableOutsideScroll:b,...x}=e,D=A(I,n),h=H(I,n),M=pe(n),K=Oe(n),L=Ft(n),[te,j]=t.useState(null),w=t.useRef(null),ne=U(o,w,D.onContentChange),O=t.useRef(0),S=t.useRef(""),oe=t.useRef(0),B=t.useRef(null),re=t.useRef("right"),V=t.useRef(0),P=b?dt:t.Fragment,Qe=b?{as:tt,allowPinchZoom:!0}:void 0,et=u=>{var _,R;const F=S.current+u,Y=L().filter(y=>!y.disabled),ce=document.activeElement,ge=(_=Y.find(y=>y.ref.current===ce))===null||_===void 0?void 0:_.textValue,Z=Y.map(y=>y.textValue),z=an(Z,F,ge),xe=(R=Y.find(y=>y.textValue===z))===null||R===void 0?void 0:R.ref.current;(function y(we){S.current=we,window.clearTimeout(O.current),we!==""&&(O.current=window.setTimeout(()=>y(""),1e3))})(F),xe&&setTimeout(()=>xe.focus())};t.useEffect(()=>()=>window.clearTimeout(O.current),[]),ct();const G=t.useCallback(u=>{var _,R;return re.current===((_=B.current)===null||_===void 0?void 0:_.side)&&dn(u,(R=B.current)===null||R===void 0?void 0:R.area)},[]);return t.createElement(Ut,{scope:n,searchRef:S,onItemEnter:t.useCallback(u=>{G(u)&&u.preventDefault()},[G]),onItemLeave:t.useCallback(u=>{var _;G(u)||((_=w.current)===null||_===void 0||_.focus(),j(null))},[G]),onTriggerLeave:t.useCallback(u=>{G(u)&&u.preventDefault()},[G]),pointerGraceTimerRef:oe,onPointerGraceIntentChange:t.useCallback(u=>{B.current=u},[])},t.createElement(P,Qe,t.createElement(at,{asChild:!0,trapped:c,onMountAutoFocus:v(a,u=>{var _;u.preventDefault(),(_=w.current)===null||_===void 0||_.focus()}),onUnmountAutoFocus:d},t.createElement(st,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:p,onPointerDownOutside:f,onFocusOutside:s,onInteractOutside:$,onDismiss:g},t.createElement(Dt,m({asChild:!0},K,{dir:h.dir,orientation:"vertical",loop:r,currentTabStopId:te,onCurrentTabStopIdChange:j,onEntryFocus:v(l,u=>{h.isUsingKeyboardRef.current||u.preventDefault()})}),t.createElement(it,m({role:"menu","aria-orientation":"vertical","data-state":Ue(D.open),"data-radix-menu-content":"",dir:h.dir},M,x,{ref:ne,style:{outline:"none",...x.style},onKeyDown:v(x.onKeyDown,u=>{const R=u.target.closest("[data-radix-menu-content]")===u.currentTarget,F=u.ctrlKey||u.altKey||u.metaKey,Y=u.key.length===1;R&&(u.key==="Tab"&&u.preventDefault(),!F&&Y&&et(u.key));const ce=w.current;if(u.target!==ce||!St.includes(u.key))return;u.preventDefault();const Z=L().filter(z=>!z.disabled).map(z=>z.ref.current);Se.includes(u.key)&&Z.reverse(),rn(Z)}),onBlur:v(e.onBlur,u=>{u.currentTarget.contains(u.target)||(window.clearTimeout(O.current),S.current="")}),onPointerMove:v(e.onPointerMove,W(u=>{const _=u.target,R=V.current!==u.clientX;if(u.currentTarget.contains(_)&&R){const F=u.clientX>V.current?"right":"left";re.current=F,V.current=u.clientX}}))})))))))}),Yt=t.forwardRef((e,o)=>{const{__scopeMenu:n,...r}=e;return t.createElement(N.div,m({},r,{ref:o}))}),ue="MenuItem",_e="menu.itemSelect",me=t.forwardRef((e,o)=>{const{disabled:n=!1,onSelect:r,...c}=e,a=t.useRef(null),d=H(ue,e.__scopeMenu),i=$e(ue,e.__scopeMenu),l=U(o,a),p=t.useRef(!1),f=()=>{const s=a.current;if(!n&&s){const $=new CustomEvent(_e,{bubbles:!0,cancelable:!0});s.addEventListener(_e,g=>r==null?void 0:r(g),{once:!0}),nt(s,$),$.defaultPrevented?p.current=!1:d.onClose()}};return t.createElement(Ae,m({},c,{ref:l,disabled:n,onClick:v(e.onClick,f),onPointerDown:s=>{var $;($=e.onPointerDown)===null||$===void 0||$.call(e,s),p.current=!0},onPointerUp:v(e.onPointerUp,s=>{var $;p.current||($=s.currentTarget)===null||$===void 0||$.click()}),onKeyDown:v(e.onKeyDown,s=>{const $=i.searchRef.current!=="";n||$&&s.key===" "||ie.includes(s.key)&&(s.currentTarget.click(),s.preventDefault())})}))}),Ae=t.forwardRef((e,o)=>{const{__scopeMenu:n,disabled:r=!1,textValue:c,...a}=e,d=$e(ue,n),i=Oe(n),l=t.useRef(null),p=U(o,l),[f,s]=t.useState(!1),[$,g]=t.useState("");return t.useEffect(()=>{const b=l.current;if(b){var x;g(((x=b.textContent)!==null&&x!==void 0?x:"").trim())}},[a.children]),t.createElement(X.ItemSlot,{scope:n,disabled:r,textValue:c??$},t.createElement(Pt,m({asChild:!0},i,{focusable:!r}),t.createElement(N.div,m({role:"menuitem","data-highlighted":f?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0},a,{ref:p,onPointerMove:v(e.onPointerMove,W(b=>{r?d.onItemLeave(b):(d.onItemEnter(b),b.defaultPrevented||b.currentTarget.focus())})),onPointerLeave:v(e.onPointerLeave,W(b=>d.onItemLeave(b))),onFocus:v(e.onFocus,()=>s(!0)),onBlur:v(e.onBlur,()=>s(!1))}))))}),zt=t.forwardRef((e,o)=>{const{checked:n=!1,onCheckedChange:r,...c}=e;return t.createElement(Le,{scope:e.__scopeMenu,checked:n},t.createElement(me,m({role:"menuitemcheckbox","aria-checked":J(n)?"mixed":n},c,{ref:o,"data-state":ve(n),onSelect:v(c.onSelect,()=>r==null?void 0:r(J(n)?!0:!n),{checkForDefaultPrevented:!1})})))}),Xt="MenuRadioGroup",[eo,Wt]=k(Xt,{value:void 0,onValueChange:()=>{}}),Ht="MenuRadioItem",Zt=t.forwardRef((e,o)=>{const{value:n,...r}=e,c=Wt(Ht,e.__scopeMenu),a=n===c.value;return t.createElement(Le,{scope:e.__scopeMenu,checked:a},t.createElement(me,m({role:"menuitemradio","aria-checked":a},r,{ref:o,"data-state":ve(a),onSelect:v(r.onSelect,()=>{var d;return(d=c.onValueChange)===null||d===void 0?void 0:d.call(c,n)},{checkForDefaultPrevented:!1})})))}),Ke="MenuItemIndicator",[Le,qt]=k(Ke,{checked:!1}),Jt=t.forwardRef((e,o)=>{const{__scopeMenu:n,forceMount:r,...c}=e,a=qt(Ke,n);return t.createElement(Q,{present:r||J(a.checked)||a.checked===!0},t.createElement(N.span,m({},c,{ref:o,"data-state":ve(a.checked)})))}),Qt=t.forwardRef((e,o)=>{const{__scopeMenu:n,...r}=e;return t.createElement(N.div,m({role:"separator","aria-orientation":"horizontal"},r,{ref:o}))}),en="MenuSub",[to,Ge]=k(en),q="MenuSubTrigger",tn=t.forwardRef((e,o)=>{const n=A(q,e.__scopeMenu),r=H(q,e.__scopeMenu),c=Ge(q,e.__scopeMenu),a=$e(q,e.__scopeMenu),d=t.useRef(null),{pointerGraceTimerRef:i,onPointerGraceIntentChange:l}=a,p={__scopeMenu:e.__scopeMenu},f=t.useCallback(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return t.useEffect(()=>f,[f]),t.useEffect(()=>{const s=i.current;return()=>{window.clearTimeout(s),l(null)}},[i,l]),t.createElement(Fe,m({asChild:!0},p),t.createElement(Ae,m({id:c.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":c.contentId,"data-state":Ue(n.open)},e,{ref:he(o,c.onTriggerChange),onClick:s=>{var $;($=e.onClick)===null||$===void 0||$.call(e,s),!(e.disabled||s.defaultPrevented)&&(s.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:v(e.onPointerMove,W(s=>{a.onItemEnter(s),!s.defaultPrevented&&!e.disabled&&!n.open&&!d.current&&(a.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{n.onOpenChange(!0),f()},100))})),onPointerLeave:v(e.onPointerLeave,W(s=>{var $;f();const g=($=n.content)===null||$===void 0?void 0:$.getBoundingClientRect();if(g){var b;const x=(b=n.content)===null||b===void 0?void 0:b.dataset.side,D=x==="right",h=D?-5:5,M=g[D?"left":"right"],K=g[D?"right":"left"];a.onPointerGraceIntentChange({area:[{x:s.clientX+h,y:s.clientY},{x:M,y:g.top},{x:K,y:g.top},{x:K,y:g.bottom},{x:M,y:g.bottom}],side:x}),window.clearTimeout(i.current),i.current=window.setTimeout(()=>a.onPointerGraceIntentChange(null),300)}else{if(a.onTriggerLeave(s),s.defaultPrevented)return;a.onPointerGraceIntentChange(null)}})),onKeyDown:v(e.onKeyDown,s=>{const $=a.searchRef.current!=="";if(!(e.disabled||$&&s.key===" ")&&Tt[r.dir].includes(s.key)){var g;n.onOpenChange(!0),(g=n.content)===null||g===void 0||g.focus(),s.preventDefault()}})})))}),nn="MenuSubContent",on=t.forwardRef((e,o)=>{const n=ke(I,e.__scopeMenu),{forceMount:r=n.forceMount,...c}=e,a=A(I,e.__scopeMenu),d=H(I,e.__scopeMenu),i=Ge(nn,e.__scopeMenu),l=t.useRef(null),p=U(o,l);return t.createElement(X.Provider,{scope:e.__scopeMenu},t.createElement(Q,{present:r||a.open},t.createElement(X.Slot,{scope:e.__scopeMenu},t.createElement(be,m({id:i.contentId,"aria-labelledby":i.triggerId},c,{ref:p,align:"start",side:d.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:f=>{var s;d.isUsingKeyboardRef.current&&((s=l.current)===null||s===void 0||s.focus()),f.preventDefault()},onCloseAutoFocus:f=>f.preventDefault(),onFocusOutside:v(e.onFocusOutside,f=>{f.target!==i.trigger&&a.onOpenChange(!1)}),onEscapeKeyDown:v(e.onEscapeKeyDown,f=>{d.onClose(),f.preventDefault()}),onKeyDown:v(e.onKeyDown,f=>{const s=f.currentTarget.contains(f.target),$=Ot[d.dir].includes(f.key);if(s&&$){var g;a.onOpenChange(!1),(g=i.trigger)===null||g===void 0||g.focus(),f.preventDefault()}})})))))});function Ue(e){return e?"open":"closed"}function J(e){return e==="indeterminate"}function ve(e){return J(e)?"indeterminate":e?"checked":"unchecked"}function rn(e){const o=document.activeElement;for(const n of e)if(n===o||(n.focus(),document.activeElement!==o))return}function cn(e,o){return e.map((n,r)=>e[(o+r)%e.length])}function an(e,o,n){const c=o.length>1&&Array.from(o).every(p=>p===o[0])?o[0]:o,a=n?e.indexOf(n):-1;let d=cn(e,Math.max(a,0));c.length===1&&(d=d.filter(p=>p!==n));const l=d.find(p=>p.toLowerCase().startsWith(c.toLowerCase()));return l!==n?l:void 0}function sn(e,o){const{x:n,y:r}=e;let c=!1;for(let a=0,d=o.length-1;a<o.length;d=a++){const i=o[a].x,l=o[a].y,p=o[d].x,f=o[d].y;l>r!=f>r&&n<(p-i)*(r-l)/(f-l)+i&&(c=!c)}return c}function dn(e,o){if(!o)return!1;const n={x:e.clientX,y:e.clientY};return sn(n,o)}function W(e){return o=>o.pointerType==="mouse"?e(o):void 0}const un=Kt,fn=Fe,ln=Gt,pn=jt,$n=Yt,bn=me,mn=zt,vn=Zt,gn=Jt,xn=Qt,wn=tn,_n=on,je="DropdownMenu",[hn,no]=fe(je,[Te]),C=Te(),[En,Be]=hn(je),Mn=e=>{const{__scopeDropdownMenu:o,children:n,dir:r,open:c,defaultOpen:a,onOpenChange:d,modal:i=!0}=e,l=C(o),p=t.useRef(null),[f=!1,s]=Ee({prop:c,defaultProp:a,onChange:d});return t.createElement(En,{scope:o,triggerId:se(),triggerRef:p,contentId:se(),open:f,onOpenChange:s,onOpenToggle:t.useCallback(()=>s($=>!$),[s]),modal:i},t.createElement(un,m({},l,{open:f,onOpenChange:s,dir:r,modal:i}),n))},Cn="DropdownMenuTrigger",Rn=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,disabled:r=!1,...c}=e,a=Be(Cn,n),d=C(n);return t.createElement(fn,m({asChild:!0},d),t.createElement(N.button,m({type:"button",id:a.triggerId,"aria-haspopup":"menu","aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":a.open?"open":"closed","data-disabled":r?"":void 0,disabled:r},c,{ref:he(o,a.triggerRef),onPointerDown:v(e.onPointerDown,i=>{!r&&i.button===0&&i.ctrlKey===!1&&(a.onOpenToggle(),a.open||i.preventDefault())}),onKeyDown:v(e.onKeyDown,i=>{r||(["Enter"," "].includes(i.key)&&a.onOpenToggle(),i.key==="ArrowDown"&&a.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(i.key)&&i.preventDefault())})})))}),In=e=>{const{__scopeDropdownMenu:o,...n}=e,r=C(o);return t.createElement(ln,m({},r,n))},Dn="DropdownMenuContent",Pn=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...r}=e,c=Be(Dn,n),a=C(n),d=t.useRef(!1);return t.createElement(pn,m({id:c.contentId,"aria-labelledby":c.triggerId},a,r,{ref:o,onCloseAutoFocus:v(e.onCloseAutoFocus,i=>{var l;d.current||(l=c.triggerRef.current)===null||l===void 0||l.focus(),d.current=!1,i.preventDefault()}),onInteractOutside:v(e.onInteractOutside,i=>{const l=i.detail.originalEvent,p=l.button===0&&l.ctrlKey===!0,f=l.button===2||p;(!c.modal||f)&&(d.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),yn=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...r}=e,c=C(n);return t.createElement($n,m({},c,r,{ref:o}))}),Sn=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...r}=e,c=C(n);return t.createElement(bn,m({},c,r,{ref:o}))}),Tn=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...r}=e,c=C(n);return t.createElement(mn,m({},c,r,{ref:o}))}),On=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...r}=e,c=C(n);return t.createElement(vn,m({},c,r,{ref:o}))}),Fn=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...r}=e,c=C(n);return t.createElement(gn,m({},c,r,{ref:o}))}),Nn=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...r}=e,c=C(n);return t.createElement(xn,m({},c,r,{ref:o}))}),kn=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...r}=e,c=C(n);return t.createElement(wn,m({},c,r,{ref:o}))}),An=t.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...r}=e,c=C(n);return t.createElement(_n,m({},c,r,{ref:o,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),Kn=Mn,Ln=Rn,Gn=In,Ve=Pn,Ye=yn,ze=Sn,Xe=Tn,We=On,He=Fn,Ze=Nn,qe=kn,Je=An,oo=Kn,ro=Ln,Un=t.forwardRef(({className:e,inset:o,children:n,...r},c)=>E.jsxs(qe,{ref:c,className:T("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",o&&"pl-8",e),...r,children:[n,E.jsx(lt,{className:"ml-auto h-4 w-4"})]}));Un.displayName=qe.displayName;const jn=t.forwardRef(({className:e,...o},n)=>E.jsx(Je,{ref:n,className:T("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...o}));jn.displayName=Je.displayName;const Bn=t.forwardRef(({className:e,sideOffset:o=4,...n},r)=>E.jsx(Gn,{children:E.jsx(Ve,{ref:r,sideOffset:o,className:T("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n})}));Bn.displayName=Ve.displayName;const Vn=t.forwardRef(({className:e,inset:o,...n},r)=>E.jsx(ze,{ref:r,className:T("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",o&&"pl-8",e),...n}));Vn.displayName=ze.displayName;const Yn=t.forwardRef(({className:e,children:o,checked:n,...r},c)=>E.jsxs(Xe,{ref:c,className:T("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:n,...r,children:[E.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:E.jsx(He,{children:E.jsx(pt,{className:"h-4 w-4"})})}),o]}));Yn.displayName=Xe.displayName;const zn=t.forwardRef(({className:e,children:o,...n},r)=>E.jsxs(We,{ref:r,className:T("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n,children:[E.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:E.jsx(He,{children:E.jsx($t,{className:"h-4 w-4 fill-current"})})}),o]}));zn.displayName=We.displayName;const Xn=t.forwardRef(({className:e,inset:o,...n},r)=>E.jsx(Ye,{ref:r,className:T("px-2 py-1.5 text-sm font-semibold",o&&"pl-8",e),...n}));Xn.displayName=Ye.displayName;const Wn=t.forwardRef(({className:e,...o},n)=>E.jsx(Ze,{ref:n,className:T("-mx-1 my-1 h-px bg-muted",e),...o}));Wn.displayName=Ze.displayName;export{oo as D,ro as a,Bn as b,Xn as c,Wn as d,Vn as e,Yn as f};
