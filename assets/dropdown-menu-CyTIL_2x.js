import{r as n,j as w}from"./index-Do2QKNGk.js";import{_ as $,$ as F,a as K,b as $e,h as ze,c as Xe,d as D}from"./button-e30OhjXb.js";import{$ as me,e as W,h as We,i as He,d as b,k as Ze,l as qe,g as Je,j as Qe,c as en,a as nn,b as fe}from"./Combination-JqIHk-Nq.js";import{$ as tn,d as be,e as on,g as rn,a as cn,f as an}from"./index-CqFAmLPO.js";import{$ as xe,a as sn,b as dn}from"./index-C8rZtZ50.js";import{c as un,h as ln,l as fn}from"./react-icons.esm-Di3OhqCb.js";const Q=["Enter"," "],pn=["ArrowDown","PageUp","Home"],ve=["ArrowUp","PageDown","End"],$n=[...pn,...ve],mn={ltr:[...Q,"ArrowRight"],rtl:[...Q,"ArrowLeft"]},bn={ltr:["ArrowLeft"],rtl:["ArrowRight"]},H="Menu",[O,xn,vn]=tn(H),[y,ge]=me(H,[vn,be,xe]),ne=be(),we=xe(),[gn,P]=y(H),[wn,U]=y(H),hn=e=>{const{__scopeMenu:o,open:t=!1,children:r,dir:c,onOpenChange:a,modal:d=!0}=e,u=ne(o),[p,m]=n.useState(null),l=n.useRef(!1),s=en(a),f=cn(c);return n.useEffect(()=>{const x=()=>{l.current=!0,document.addEventListener("pointerdown",v,{capture:!0,once:!0}),document.addEventListener("pointermove",v,{capture:!0,once:!0})},v=()=>l.current=!1;return document.addEventListener("keydown",x,{capture:!0}),()=>{document.removeEventListener("keydown",x,{capture:!0}),document.removeEventListener("pointerdown",v,{capture:!0}),document.removeEventListener("pointermove",v,{capture:!0})}},[]),n.createElement(an,u,n.createElement(gn,{scope:o,open:t,onOpenChange:s,content:p,onContentChange:m},n.createElement(wn,{scope:o,onClose:n.useCallback(()=>s(!1),[s]),isUsingKeyboardRef:l,dir:f,modal:d},r)))},he=n.forwardRef((e,o)=>{const{__scopeMenu:t,...r}=e,c=ne(t);return n.createElement(rn,$({},c,r,{ref:o}))}),_e="MenuPortal",[_n,Me]=y(_e,{forceMount:void 0}),Mn=e=>{const{__scopeMenu:o,forceMount:t,children:r,container:c}=e,a=P(_e,o);return n.createElement(_n,{scope:o,forceMount:t},n.createElement(W,{present:t||a.open},n.createElement(We,{asChild:!0,container:c},r)))},E="MenuContent",[En,te]=y(E),Cn=n.forwardRef((e,o)=>{const t=Me(E,e.__scopeMenu),{forceMount:r=t.forceMount,...c}=e,a=P(E,e.__scopeMenu),d=U(E,e.__scopeMenu);return n.createElement(O.Provider,{scope:e.__scopeMenu},n.createElement(W,{present:r||a.open},n.createElement(O.Slot,{scope:e.__scopeMenu},d.modal?n.createElement(Dn,$({},c,{ref:o})):n.createElement(Rn,$({},c,{ref:o})))))}),Dn=n.forwardRef((e,o)=>{const t=P(E,e.__scopeMenu),r=n.useRef(null),c=F(o,r);return n.useEffect(()=>{const a=r.current;if(a)return He(a)},[]),n.createElement(oe,$({},e,{ref:c,trapFocus:t.open,disableOutsidePointerEvents:t.open,disableOutsideScroll:!0,onFocusOutside:b(e.onFocusOutside,a=>a.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>t.onOpenChange(!1)}))}),Rn=n.forwardRef((e,o)=>{const t=P(E,e.__scopeMenu);return n.createElement(oe,$({},e,{ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>t.onOpenChange(!1)}))}),oe=n.forwardRef((e,o)=>{const{__scopeMenu:t,loop:r=!1,trapFocus:c,onOpenAutoFocus:a,onCloseAutoFocus:d,disableOutsidePointerEvents:u,onEntryFocus:p,onEscapeKeyDown:m,onPointerDownOutside:l,onFocusOutside:s,onInteractOutside:f,onDismiss:x,disableOutsideScroll:v,..._}=e,N=P(E,t),T=U(E,t),L=ne(t),G=we(t),ae=xn(t),[Le,se]=n.useState(null),V=n.useRef(null),Ge=F(o,V,N.onContentChange),j=n.useRef(0),B=n.useRef(""),Ve=n.useRef(0),Z=n.useRef(null),de=n.useRef("right"),q=n.useRef(0),je=v?Qe:n.Fragment,Be=v?{as:ze,allowPinchZoom:!0}:void 0,Ye=i=>{var g,M;const R=B.current+i,S=ae().filter(C=>!C.disabled),J=document.activeElement,ie=(g=S.find(C=>C.ref.current===J))===null||g===void 0?void 0:g.textValue,Y=S.map(C=>C.textValue),k=jn(Y,R,ie),ue=(M=S.find(C=>C.textValue===k))===null||M===void 0?void 0:M.ref.current;(function C(le){B.current=le,window.clearTimeout(j.current),le!==""&&(j.current=window.setTimeout(()=>C(""),1e3))})(R),ue&&setTimeout(()=>ue.focus())};n.useEffect(()=>()=>window.clearTimeout(j.current),[]),Ze();const I=n.useCallback(i=>{var g,M;return de.current===((g=Z.current)===null||g===void 0?void 0:g.side)&&Yn(i,(M=Z.current)===null||M===void 0?void 0:M.area)},[]);return n.createElement(En,{scope:t,searchRef:B,onItemEnter:n.useCallback(i=>{I(i)&&i.preventDefault()},[I]),onItemLeave:n.useCallback(i=>{var g;I(i)||((g=V.current)===null||g===void 0||g.focus(),se(null))},[I]),onTriggerLeave:n.useCallback(i=>{I(i)&&i.preventDefault()},[I]),pointerGraceTimerRef:Ve,onPointerGraceIntentChange:n.useCallback(i=>{Z.current=i},[])},n.createElement(je,Be,n.createElement(qe,{asChild:!0,trapped:c,onMountAutoFocus:b(a,i=>{var g;i.preventDefault(),(g=V.current)===null||g===void 0||g.focus()}),onUnmountAutoFocus:d},n.createElement(Je,{asChild:!0,disableOutsidePointerEvents:u,onEscapeKeyDown:m,onPointerDownOutside:l,onFocusOutside:s,onInteractOutside:f,onDismiss:x},n.createElement(sn,$({asChild:!0},G,{dir:T.dir,orientation:"vertical",loop:r,currentTabStopId:Le,onCurrentTabStopIdChange:se,onEntryFocus:b(p,i=>{T.isUsingKeyboardRef.current||i.preventDefault()})}),n.createElement(on,$({role:"menu","aria-orientation":"vertical","data-state":ye(N.open),"data-radix-menu-content":"",dir:T.dir},L,_,{ref:Ge,style:{outline:"none",..._.style},onKeyDown:b(_.onKeyDown,i=>{const M=i.target.closest("[data-radix-menu-content]")===i.currentTarget,R=i.ctrlKey||i.altKey||i.metaKey,S=i.key.length===1;M&&(i.key==="Tab"&&i.preventDefault(),!R&&S&&Ye(i.key));const J=V.current;if(i.target!==J||!$n.includes(i.key))return;i.preventDefault();const Y=ae().filter(k=>!k.disabled).map(k=>k.ref.current);ve.includes(i.key)&&Y.reverse(),Gn(Y)}),onBlur:b(e.onBlur,i=>{i.currentTarget.contains(i.target)||(window.clearTimeout(j.current),B.current="")}),onPointerMove:b(e.onPointerMove,A(i=>{const g=i.target,M=q.current!==i.clientX;if(i.currentTarget.contains(g)&&M){const R=i.clientX>q.current?"right":"left";de.current=R,q.current=i.clientX}}))})))))))}),yn=n.forwardRef((e,o)=>{const{__scopeMenu:t,...r}=e;return n.createElement(K.div,$({},r,{ref:o}))}),ee="MenuItem",pe="menu.itemSelect",re=n.forwardRef((e,o)=>{const{disabled:t=!1,onSelect:r,...c}=e,a=n.useRef(null),d=U(ee,e.__scopeMenu),u=te(ee,e.__scopeMenu),p=F(o,a),m=n.useRef(!1),l=()=>{const s=a.current;if(!t&&s){const f=new CustomEvent(pe,{bubbles:!0,cancelable:!0});s.addEventListener(pe,x=>r==null?void 0:r(x),{once:!0}),Xe(s,f),f.defaultPrevented?m.current=!1:d.onClose()}};return n.createElement(Ee,$({},c,{ref:p,disabled:t,onClick:b(e.onClick,l),onPointerDown:s=>{var f;(f=e.onPointerDown)===null||f===void 0||f.call(e,s),m.current=!0},onPointerUp:b(e.onPointerUp,s=>{var f;m.current||(f=s.currentTarget)===null||f===void 0||f.click()}),onKeyDown:b(e.onKeyDown,s=>{const f=u.searchRef.current!=="";t||f&&s.key===" "||Q.includes(s.key)&&(s.currentTarget.click(),s.preventDefault())})}))}),Ee=n.forwardRef((e,o)=>{const{__scopeMenu:t,disabled:r=!1,textValue:c,...a}=e,d=te(ee,t),u=we(t),p=n.useRef(null),m=F(o,p),[l,s]=n.useState(!1),[f,x]=n.useState("");return n.useEffect(()=>{const v=p.current;if(v){var _;x(((_=v.textContent)!==null&&_!==void 0?_:"").trim())}},[a.children]),n.createElement(O.ItemSlot,{scope:t,disabled:r,textValue:c??f},n.createElement(dn,$({asChild:!0},u,{focusable:!r}),n.createElement(K.div,$({role:"menuitem","data-highlighted":l?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0},a,{ref:m,onPointerMove:b(e.onPointerMove,A(v=>{r?d.onItemLeave(v):(d.onItemEnter(v),v.defaultPrevented||v.currentTarget.focus())})),onPointerLeave:b(e.onPointerLeave,A(v=>d.onItemLeave(v))),onFocus:b(e.onFocus,()=>s(!0)),onBlur:b(e.onBlur,()=>s(!1))}))))}),Pn=n.forwardRef((e,o)=>{const{checked:t=!1,onCheckedChange:r,...c}=e;return n.createElement(De,{scope:e.__scopeMenu,checked:t},n.createElement(re,$({role:"menuitemcheckbox","aria-checked":X(t)?"mixed":t},c,{ref:o,"data-state":ce(t),onSelect:b(c.onSelect,()=>r==null?void 0:r(X(t)?!0:!t),{checkForDefaultPrevented:!1})})))}),Nn="MenuRadioGroup",[Ft,In]=y(Nn,{value:void 0,onValueChange:()=>{}}),Tn="MenuRadioItem",Sn=n.forwardRef((e,o)=>{const{value:t,...r}=e,c=In(Tn,e.__scopeMenu),a=t===c.value;return n.createElement(De,{scope:e.__scopeMenu,checked:a},n.createElement(re,$({role:"menuitemradio","aria-checked":a},r,{ref:o,"data-state":ce(a),onSelect:b(r.onSelect,()=>{var d;return(d=c.onValueChange)===null||d===void 0?void 0:d.call(c,t)},{checkForDefaultPrevented:!1})})))}),Ce="MenuItemIndicator",[De,kn]=y(Ce,{checked:!1}),On=n.forwardRef((e,o)=>{const{__scopeMenu:t,forceMount:r,...c}=e,a=kn(Ce,t);return n.createElement(W,{present:r||X(a.checked)||a.checked===!0},n.createElement(K.span,$({},c,{ref:o,"data-state":ce(a.checked)})))}),An=n.forwardRef((e,o)=>{const{__scopeMenu:t,...r}=e;return n.createElement(K.div,$({role:"separator","aria-orientation":"horizontal"},r,{ref:o}))}),Fn="MenuSub",[Kt,Re]=y(Fn),z="MenuSubTrigger",Kn=n.forwardRef((e,o)=>{const t=P(z,e.__scopeMenu),r=U(z,e.__scopeMenu),c=Re(z,e.__scopeMenu),a=te(z,e.__scopeMenu),d=n.useRef(null),{pointerGraceTimerRef:u,onPointerGraceIntentChange:p}=a,m={__scopeMenu:e.__scopeMenu},l=n.useCallback(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return n.useEffect(()=>l,[l]),n.useEffect(()=>{const s=u.current;return()=>{window.clearTimeout(s),p(null)}},[u,p]),n.createElement(he,$({asChild:!0},m),n.createElement(Ee,$({id:c.triggerId,"aria-haspopup":"menu","aria-expanded":t.open,"aria-controls":c.contentId,"data-state":ye(t.open)},e,{ref:$e(o,c.onTriggerChange),onClick:s=>{var f;(f=e.onClick)===null||f===void 0||f.call(e,s),!(e.disabled||s.defaultPrevented)&&(s.currentTarget.focus(),t.open||t.onOpenChange(!0))},onPointerMove:b(e.onPointerMove,A(s=>{a.onItemEnter(s),!s.defaultPrevented&&!e.disabled&&!t.open&&!d.current&&(a.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{t.onOpenChange(!0),l()},100))})),onPointerLeave:b(e.onPointerLeave,A(s=>{var f;l();const x=(f=t.content)===null||f===void 0?void 0:f.getBoundingClientRect();if(x){var v;const _=(v=t.content)===null||v===void 0?void 0:v.dataset.side,N=_==="right",T=N?-5:5,L=x[N?"left":"right"],G=x[N?"right":"left"];a.onPointerGraceIntentChange({area:[{x:s.clientX+T,y:s.clientY},{x:L,y:x.top},{x:G,y:x.top},{x:G,y:x.bottom},{x:L,y:x.bottom}],side:_}),window.clearTimeout(u.current),u.current=window.setTimeout(()=>a.onPointerGraceIntentChange(null),300)}else{if(a.onTriggerLeave(s),s.defaultPrevented)return;a.onPointerGraceIntentChange(null)}})),onKeyDown:b(e.onKeyDown,s=>{const f=a.searchRef.current!=="";if(!(e.disabled||f&&s.key===" ")&&mn[r.dir].includes(s.key)){var x;t.onOpenChange(!0),(x=t.content)===null||x===void 0||x.focus(),s.preventDefault()}})})))}),Un="MenuSubContent",Ln=n.forwardRef((e,o)=>{const t=Me(E,e.__scopeMenu),{forceMount:r=t.forceMount,...c}=e,a=P(E,e.__scopeMenu),d=U(E,e.__scopeMenu),u=Re(Un,e.__scopeMenu),p=n.useRef(null),m=F(o,p);return n.createElement(O.Provider,{scope:e.__scopeMenu},n.createElement(W,{present:r||a.open},n.createElement(O.Slot,{scope:e.__scopeMenu},n.createElement(oe,$({id:u.contentId,"aria-labelledby":u.triggerId},c,{ref:m,align:"start",side:d.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:l=>{var s;d.isUsingKeyboardRef.current&&((s=p.current)===null||s===void 0||s.focus()),l.preventDefault()},onCloseAutoFocus:l=>l.preventDefault(),onFocusOutside:b(e.onFocusOutside,l=>{l.target!==u.trigger&&a.onOpenChange(!1)}),onEscapeKeyDown:b(e.onEscapeKeyDown,l=>{d.onClose(),l.preventDefault()}),onKeyDown:b(e.onKeyDown,l=>{const s=l.currentTarget.contains(l.target),f=bn[d.dir].includes(l.key);if(s&&f){var x;a.onOpenChange(!1),(x=u.trigger)===null||x===void 0||x.focus(),l.preventDefault()}})})))))});function ye(e){return e?"open":"closed"}function X(e){return e==="indeterminate"}function ce(e){return X(e)?"indeterminate":e?"checked":"unchecked"}function Gn(e){const o=document.activeElement;for(const t of e)if(t===o||(t.focus(),document.activeElement!==o))return}function Vn(e,o){return e.map((t,r)=>e[(o+r)%e.length])}function jn(e,o,t){const c=o.length>1&&Array.from(o).every(m=>m===o[0])?o[0]:o,a=t?e.indexOf(t):-1;let d=Vn(e,Math.max(a,0));c.length===1&&(d=d.filter(m=>m!==t));const p=d.find(m=>m.toLowerCase().startsWith(c.toLowerCase()));return p!==t?p:void 0}function Bn(e,o){const{x:t,y:r}=e;let c=!1;for(let a=0,d=o.length-1;a<o.length;d=a++){const u=o[a].x,p=o[a].y,m=o[d].x,l=o[d].y;p>r!=l>r&&t<(m-u)*(r-p)/(l-p)+u&&(c=!c)}return c}function Yn(e,o){if(!o)return!1;const t={x:e.clientX,y:e.clientY};return Bn(t,o)}function A(e){return o=>o.pointerType==="mouse"?e(o):void 0}const zn=hn,Xn=he,Wn=Mn,Hn=Cn,Zn=yn,qn=re,Jn=Pn,Qn=Sn,et=On,nt=An,tt=Kn,ot=Ln,Pe="DropdownMenu",[rt,Ut]=me(Pe,[ge]),h=ge(),[ct,Ne]=rt(Pe),at=e=>{const{__scopeDropdownMenu:o,children:t,dir:r,open:c,defaultOpen:a,onOpenChange:d,modal:u=!0}=e,p=h(o),m=n.useRef(null),[l=!1,s]=nn({prop:c,defaultProp:a,onChange:d});return n.createElement(ct,{scope:o,triggerId:fe(),triggerRef:m,contentId:fe(),open:l,onOpenChange:s,onOpenToggle:n.useCallback(()=>s(f=>!f),[s]),modal:u},n.createElement(zn,$({},p,{open:l,onOpenChange:s,dir:r,modal:u}),t))},st="DropdownMenuTrigger",dt=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,disabled:r=!1,...c}=e,a=Ne(st,t),d=h(t);return n.createElement(Xn,$({asChild:!0},d),n.createElement(K.button,$({type:"button",id:a.triggerId,"aria-haspopup":"menu","aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":a.open?"open":"closed","data-disabled":r?"":void 0,disabled:r},c,{ref:$e(o,a.triggerRef),onPointerDown:b(e.onPointerDown,u=>{!r&&u.button===0&&u.ctrlKey===!1&&(a.onOpenToggle(),a.open||u.preventDefault())}),onKeyDown:b(e.onKeyDown,u=>{r||(["Enter"," "].includes(u.key)&&a.onOpenToggle(),u.key==="ArrowDown"&&a.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})))}),it=e=>{const{__scopeDropdownMenu:o,...t}=e,r=h(o);return n.createElement(Wn,$({},r,t))},ut="DropdownMenuContent",lt=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=Ne(ut,t),a=h(t),d=n.useRef(!1);return n.createElement(Hn,$({id:c.contentId,"aria-labelledby":c.triggerId},a,r,{ref:o,onCloseAutoFocus:b(e.onCloseAutoFocus,u=>{var p;d.current||(p=c.triggerRef.current)===null||p===void 0||p.focus(),d.current=!1,u.preventDefault()}),onInteractOutside:b(e.onInteractOutside,u=>{const p=u.detail.originalEvent,m=p.button===0&&p.ctrlKey===!0,l=p.button===2||m;(!c.modal||l)&&(d.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),ft=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=h(t);return n.createElement(Zn,$({},c,r,{ref:o}))}),pt=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=h(t);return n.createElement(qn,$({},c,r,{ref:o}))}),$t=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=h(t);return n.createElement(Jn,$({},c,r,{ref:o}))}),mt=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=h(t);return n.createElement(Qn,$({},c,r,{ref:o}))}),bt=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=h(t);return n.createElement(et,$({},c,r,{ref:o}))}),xt=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=h(t);return n.createElement(nt,$({},c,r,{ref:o}))}),vt=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=h(t);return n.createElement(tt,$({},c,r,{ref:o}))}),gt=n.forwardRef((e,o)=>{const{__scopeDropdownMenu:t,...r}=e,c=h(t);return n.createElement(ot,$({},c,r,{ref:o,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),wt=at,ht=dt,_t=it,Ie=lt,Te=ft,Se=pt,ke=$t,Oe=mt,Ae=bt,Fe=xt,Ke=vt,Ue=gt,Lt=wt,Gt=ht,Mt=n.forwardRef(({className:e,inset:o,children:t,...r},c)=>w.jsxDEV(Ke,{ref:c,className:D("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",o&&"pl-8",e),...r,children:[t,w.jsxDEV(un,{className:"ml-auto h-4 w-4"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:39,columnNumber:5},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:29,columnNumber:3},void 0));Mt.displayName=Ke.displayName;const Et=n.forwardRef(({className:e,...o},t)=>w.jsxDEV(Ue,{ref:t,className:D("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...o},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:49,columnNumber:3},void 0));Et.displayName=Ue.displayName;const Ct=n.forwardRef(({className:e,sideOffset:o=4,...t},r)=>w.jsxDEV(_t,{children:w.jsxDEV(Ie,{ref:r,sideOffset:o,className:D("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...t},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:66,columnNumber:5},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:65,columnNumber:3},void 0));Ct.displayName=Ie.displayName;const Dt=n.forwardRef(({className:e,inset:o,...t},r)=>w.jsxDEV(Se,{ref:r,className:D("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",o&&"pl-8",e),...t},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:86,columnNumber:3},void 0));Dt.displayName=Se.displayName;const Rt=n.forwardRef(({className:e,children:o,checked:t,...r},c)=>w.jsxDEV(ke,{ref:c,className:D("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:t,...r,children:[w.jsxDEV("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:w.jsxDEV(Ae,{children:w.jsxDEV(ln,{className:"h-4 w-4"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:113,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:112,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:111,columnNumber:5},void 0),o]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:102,columnNumber:3},void 0));Rt.displayName=ke.displayName;const yt=n.forwardRef(({className:e,children:o,...t},r)=>w.jsxDEV(Oe,{ref:r,className:D("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...t,children:[w.jsxDEV("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:w.jsxDEV(Ae,{children:w.jsxDEV(fn,{className:"h-4 w-4 fill-current"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:136,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:135,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:134,columnNumber:5},void 0),o]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:126,columnNumber:3},void 0));yt.displayName=Oe.displayName;const Pt=n.forwardRef(({className:e,inset:o,...t},r)=>w.jsxDEV(Te,{ref:r,className:D("px-2 py-1.5 text-sm font-semibold",o&&"pl-8",e),...t},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:150,columnNumber:3},void 0));Pt.displayName=Te.displayName;const Nt=n.forwardRef(({className:e,...o},t)=>w.jsxDEV(Fe,{ref:t,className:D("-mx-1 my-1 h-px bg-muted",e),...o},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/dropdown-menu.tsx",lineNumber:166,columnNumber:3},void 0));Nt.displayName=Fe.displayName;export{Lt as D,Gt as a,Ct as b,Pt as c,Nt as d,Dt as e,Rt as f};
