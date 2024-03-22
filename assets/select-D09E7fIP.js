import{r as e,e as Ne,j as E}from"./index-BdjeCpkh.js";import{j as Ke,k as ze,C as qe,h as Ge}from"./react-icons.esm-CsDXENB9.js";import{$ as U,_ as N,a as M,f as Ye,d as K}from"./index-Co--pDyh.js";import{$ as Xe,a as Ze,k as Te,s as Je,g as I,l as Qe,i as z,m as et,o as tt,n as ot,p as nt,j as ct,e as Pe,d as rt,t as at,f as st,q as lt,b as it,c as be,r as dt}from"./index-DlnaK11U.js";function we(o,[n,t]){return Math.min(t,Math.max(n,o))}const ut=[" ","Enter","ArrowUp","ArrowDown"],ft=[" ","Enter"],le="Select",[ie,de,pt]=Xe(le),[te,co]=Ze(le,[pt,Te]),ge=Te(),[mt,Y]=te(le),[$t,ht]=te(le),vt=o=>{const{__scopeSelect:n,children:t,open:r,defaultOpen:l,onOpenChange:u,value:a,defaultValue:c,onValueChange:s,dir:i,name:$,autoComplete:y,disabled:T,required:C}=o,p=ge(n),[h,b]=e.useState(null),[m,d]=e.useState(null),[v,oe]=e.useState(!1),k=it(i),[ne=!1,_]=be({prop:r,defaultProp:l,onChange:u}),[D,q]=be({prop:a,defaultProp:c,onChange:s}),Z=e.useRef(null),G=h?!!h.closest("form"):!0,[A,j]=e.useState(new Set),W=Array.from(A).map(P=>P.props.value).join(";");return e.createElement(dt,p,e.createElement(mt,{required:C,scope:n,trigger:h,onTriggerChange:b,valueNode:m,onValueNodeChange:d,valueNodeHasChildren:v,onValueNodeHasChildrenChange:oe,contentId:Pe(),value:D,onValueChange:q,open:ne,onOpenChange:_,dir:k,triggerPointerDownPosRef:Z,disabled:T},e.createElement(ie.Provider,{scope:n},e.createElement($t,{scope:o.__scopeSelect,onNativeOptionAdd:e.useCallback(P=>{j(L=>new Set(L).add(P))},[]),onNativeOptionRemove:e.useCallback(P=>{j(L=>{const H=new Set(L);return H.delete(P),H})},[])},t)),G?e.createElement(ke,{key:W,"aria-hidden":!0,required:C,tabIndex:-1,name:$,autoComplete:y,value:D,onChange:P=>q(P.target.value),disabled:T},D===void 0?e.createElement("option",{value:""}):null,Array.from(A)):null))},gt="SelectTrigger",xt=e.forwardRef((o,n)=>{const{__scopeSelect:t,disabled:r=!1,...l}=o,u=ge(t),a=Y(gt,t),c=a.disabled||r,s=U(n,a.onTriggerChange),i=de(t),[$,y,T]=Oe(p=>{const h=i().filter(d=>!d.disabled),b=h.find(d=>d.value===a.value),m=Ve(h,p,b);m!==void 0&&a.onValueChange(m.value)}),C=()=>{c||(a.onOpenChange(!0),T())};return e.createElement(Je,N({asChild:!0},u),e.createElement(M.button,N({type:"button",role:"combobox","aria-controls":a.contentId,"aria-expanded":a.open,"aria-required":a.required,"aria-autocomplete":"none",dir:a.dir,"data-state":a.open?"open":"closed",disabled:c,"data-disabled":c?"":void 0,"data-placeholder":De(a.value)?"":void 0},l,{ref:s,onClick:I(l.onClick,p=>{p.currentTarget.focus()}),onPointerDown:I(l.onPointerDown,p=>{const h=p.target;h.hasPointerCapture(p.pointerId)&&h.releasePointerCapture(p.pointerId),p.button===0&&p.ctrlKey===!1&&(C(),a.triggerPointerDownPosRef.current={x:Math.round(p.pageX),y:Math.round(p.pageY)},p.preventDefault())}),onKeyDown:I(l.onKeyDown,p=>{const h=$.current!=="";!(p.ctrlKey||p.altKey||p.metaKey)&&p.key.length===1&&y(p.key),!(h&&p.key===" ")&&ut.includes(p.key)&&(C(),p.preventDefault())})})))}),bt="SelectValue",wt=e.forwardRef((o,n)=>{const{__scopeSelect:t,className:r,style:l,children:u,placeholder:a="",...c}=o,s=Y(bt,t),{onValueNodeHasChildrenChange:i}=s,$=u!==void 0,y=U(n,s.onValueNodeChange);return z(()=>{i($)},[i,$]),e.createElement(M.span,N({},c,{ref:y,style:{pointerEvents:"none"}}),De(s.value)?e.createElement(e.Fragment,null,a):u)}),St=e.forwardRef((o,n)=>{const{__scopeSelect:t,children:r,...l}=o;return e.createElement(M.span,N({"aria-hidden":!0},l,{ref:n}),r||"▼")}),yt=o=>e.createElement(Qe,N({asChild:!0},o)),ee="SelectContent",Ct=e.forwardRef((o,n)=>{const t=Y(ee,o.__scopeSelect),[r,l]=e.useState();if(z(()=>{l(new DocumentFragment)},[]),!t.open){const u=r;return u?Ne.createPortal(e.createElement(Ie,{scope:o.__scopeSelect},e.createElement(ie.Slot,{scope:o.__scopeSelect},e.createElement("div",null,o.children))),u):null}return e.createElement(Et,N({},o,{ref:n}))}),B=10,[Ie,X]=te(ee),Et=e.forwardRef((o,n)=>{const{__scopeSelect:t,position:r="item-aligned",onCloseAutoFocus:l,onEscapeKeyDown:u,onPointerDownOutside:a,side:c,sideOffset:s,align:i,alignOffset:$,arrowPadding:y,collisionBoundary:T,collisionPadding:C,sticky:p,hideWhenDetached:h,avoidCollisions:b,...m}=o,d=Y(ee,t),[v,oe]=e.useState(null),[k,ne]=e.useState(null),_=U(n,f=>oe(f)),[D,q]=e.useState(null),[Z,G]=e.useState(null),A=de(t),[j,W]=e.useState(!1),P=e.useRef(!1);e.useEffect(()=>{if(v)return et(v)},[v]),tt();const L=e.useCallback(f=>{const[w,...R]=A().map(x=>x.ref.current),[S]=R.slice(-1),g=document.activeElement;for(const x of f)if(x===g||(x==null||x.scrollIntoView({block:"nearest"}),x===w&&k&&(k.scrollTop=0),x===S&&k&&(k.scrollTop=k.scrollHeight),x==null||x.focus(),document.activeElement!==g))return},[A,k]),H=e.useCallback(()=>L([D,v]),[L,D,v]);e.useEffect(()=>{j&&H()},[j,H]);const{onOpenChange:J,triggerPointerDownPosRef:F}=d;e.useEffect(()=>{if(v){let f={x:0,y:0};const w=S=>{var g,x,O,V;f={x:Math.abs(Math.round(S.pageX)-((g=(x=F.current)===null||x===void 0?void 0:x.x)!==null&&g!==void 0?g:0)),y:Math.abs(Math.round(S.pageY)-((O=(V=F.current)===null||V===void 0?void 0:V.y)!==null&&O!==void 0?O:0))}},R=S=>{f.x<=10&&f.y<=10?S.preventDefault():v.contains(S.target)||J(!1),document.removeEventListener("pointermove",w),F.current=null};return F.current!==null&&(document.addEventListener("pointermove",w),document.addEventListener("pointerup",R,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",R,{capture:!0})}}},[v,J,F]),e.useEffect(()=>{const f=()=>J(!1);return window.addEventListener("blur",f),window.addEventListener("resize",f),()=>{window.removeEventListener("blur",f),window.removeEventListener("resize",f)}},[J]);const[ue,re]=Oe(f=>{const w=A().filter(g=>!g.disabled),R=w.find(g=>g.ref.current===document.activeElement),S=Ve(w,f,R);S&&setTimeout(()=>S.ref.current.focus())}),fe=e.useCallback((f,w,R)=>{const S=!P.current&&!R;(d.value!==void 0&&d.value===w||S)&&(q(f),S&&(P.current=!0))},[d.value]),pe=e.useCallback(()=>v==null?void 0:v.focus(),[v]),Q=e.useCallback((f,w,R)=>{const S=!P.current&&!R;(d.value!==void 0&&d.value===w||S)&&G(f)},[d.value]),ae=r==="popper"?Se:Nt,ce=ae===Se?{side:c,sideOffset:s,align:i,alignOffset:$,arrowPadding:y,collisionBoundary:T,collisionPadding:C,sticky:p,hideWhenDetached:h,avoidCollisions:b}:{};return e.createElement(Ie,{scope:t,content:v,viewport:k,onViewportChange:ne,itemRefCallback:fe,selectedItem:D,onItemLeave:pe,itemTextRefCallback:Q,focusSelectedItem:H,selectedItemText:Z,position:r,isPositioned:j,searchRef:ue},e.createElement(ot,{as:Ye,allowPinchZoom:!0},e.createElement(nt,{asChild:!0,trapped:d.open,onMountAutoFocus:f=>{f.preventDefault()},onUnmountAutoFocus:I(l,f=>{var w;(w=d.trigger)===null||w===void 0||w.focus({preventScroll:!0}),f.preventDefault()})},e.createElement(ct,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:u,onPointerDownOutside:a,onFocusOutside:f=>f.preventDefault(),onDismiss:()=>d.onOpenChange(!1)},e.createElement(ae,N({role:"listbox",id:d.contentId,"data-state":d.open?"open":"closed",dir:d.dir,onContextMenu:f=>f.preventDefault()},m,ce,{onPlaced:()=>W(!0),ref:_,style:{display:"flex",flexDirection:"column",outline:"none",...m.style},onKeyDown:I(m.onKeyDown,f=>{const w=f.ctrlKey||f.altKey||f.metaKey;if(f.key==="Tab"&&f.preventDefault(),!w&&f.key.length===1&&re(f.key),["ArrowUp","ArrowDown","Home","End"].includes(f.key)){let S=A().filter(g=>!g.disabled).map(g=>g.ref.current);if(["ArrowUp","End"].includes(f.key)&&(S=S.slice().reverse()),["ArrowUp","ArrowDown"].includes(f.key)){const g=f.target,x=S.indexOf(g);S=S.slice(x+1)}setTimeout(()=>L(S)),f.preventDefault()}})}))))))}),Nt=e.forwardRef((o,n)=>{const{__scopeSelect:t,onPlaced:r,...l}=o,u=Y(ee,t),a=X(ee,t),[c,s]=e.useState(null),[i,$]=e.useState(null),y=U(n,_=>$(_)),T=de(t),C=e.useRef(!1),p=e.useRef(!0),{viewport:h,selectedItem:b,selectedItemText:m,focusSelectedItem:d}=a,v=e.useCallback(()=>{if(u.trigger&&u.valueNode&&c&&i&&h&&b&&m){const _=u.trigger.getBoundingClientRect(),D=i.getBoundingClientRect(),q=u.valueNode.getBoundingClientRect(),Z=m.getBoundingClientRect();if(u.dir!=="rtl"){const g=Z.left-D.left,x=q.left-g,O=_.left-x,V=_.width+O,me=Math.max(V,D.width),$e=window.innerWidth-B,he=we(x,[B,$e-me]);c.style.minWidth=V+"px",c.style.left=he+"px"}else{const g=D.right-Z.right,x=window.innerWidth-q.right-g,O=window.innerWidth-_.right-x,V=_.width+O,me=Math.max(V,D.width),$e=window.innerWidth-B,he=we(x,[B,$e-me]);c.style.minWidth=V+"px",c.style.right=he+"px"}const G=T(),A=window.innerHeight-B*2,j=h.scrollHeight,W=window.getComputedStyle(i),P=parseInt(W.borderTopWidth,10),L=parseInt(W.paddingTop,10),H=parseInt(W.borderBottomWidth,10),J=parseInt(W.paddingBottom,10),F=P+L+j+J+H,ue=Math.min(b.offsetHeight*5,F),re=window.getComputedStyle(h),fe=parseInt(re.paddingTop,10),pe=parseInt(re.paddingBottom,10),Q=_.top+_.height/2-B,ae=A-Q,ce=b.offsetHeight/2,f=b.offsetTop+ce,w=P+L+f,R=F-w;if(w<=Q){const g=b===G[G.length-1].ref.current;c.style.bottom="0px";const x=i.clientHeight-h.offsetTop-h.offsetHeight,O=Math.max(ae,ce+(g?pe:0)+x+H),V=w+O;c.style.height=V+"px"}else{const g=b===G[0].ref.current;c.style.top="0px";const O=Math.max(Q,P+h.offsetTop+(g?fe:0)+ce)+R;c.style.height=O+"px",h.scrollTop=w-Q+h.offsetTop}c.style.margin=`${B}px 0`,c.style.minHeight=ue+"px",c.style.maxHeight=A+"px",r==null||r(),requestAnimationFrame(()=>C.current=!0)}},[T,u.trigger,u.valueNode,c,i,h,b,m,u.dir,r]);z(()=>v(),[v]);const[oe,k]=e.useState();z(()=>{i&&k(window.getComputedStyle(i).zIndex)},[i]);const ne=e.useCallback(_=>{_&&p.current===!0&&(v(),d==null||d(),p.current=!1)},[v,d]);return e.createElement(Tt,{scope:t,contentWrapper:c,shouldExpandOnScrollRef:C,onScrollButtonChange:ne},e.createElement("div",{ref:s,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:oe}},e.createElement(M.div,N({},l,{ref:y,style:{boxSizing:"border-box",maxHeight:"100%",...l.style}}))))}),Se=e.forwardRef((o,n)=>{const{__scopeSelect:t,align:r="start",collisionPadding:l=B,...u}=o,a=ge(t);return e.createElement(lt,N({},a,u,{ref:n,align:r,collisionPadding:l,style:{boxSizing:"border-box",...u.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[Tt,xe]=te(ee,{}),ye="SelectViewport",Pt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o,l=X(ye,t),u=xe(ye,t),a=U(n,l.onViewportChange),c=e.useRef(0);return e.createElement(e.Fragment,null,e.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),e.createElement(ie.Slot,{scope:t},e.createElement(M.div,N({"data-radix-select-viewport":"",role:"presentation"},r,{ref:a,style:{position:"relative",flex:1,overflow:"auto",...r.style},onScroll:I(r.onScroll,s=>{const i=s.currentTarget,{contentWrapper:$,shouldExpandOnScrollRef:y}=u;if(y!=null&&y.current&&$){const T=Math.abs(c.current-i.scrollTop);if(T>0){const C=window.innerHeight-B*2,p=parseFloat($.style.minHeight),h=parseFloat($.style.height),b=Math.max(p,h);if(b<C){const m=b+T,d=Math.min(C,m),v=m-d;$.style.height=d+"px",$.style.bottom==="0px"&&(i.scrollTop=v>0?v:0,$.style.justifyContent="flex-end")}}}c.current=i.scrollTop})}))))}),It="SelectGroup",[ro,_t]=te(It),Rt="SelectLabel",Dt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o,l=_t(Rt,t);return e.createElement(M.div,N({id:l.id},r,{ref:n}))}),ve="SelectItem",[kt,_e]=te(ve),Ot=e.forwardRef((o,n)=>{const{__scopeSelect:t,value:r,disabled:l=!1,textValue:u,...a}=o,c=Y(ve,t),s=X(ve,t),i=c.value===r,[$,y]=e.useState(u??""),[T,C]=e.useState(!1),p=U(n,m=>{var d;return(d=s.itemRefCallback)===null||d===void 0?void 0:d.call(s,m,r,l)}),h=Pe(),b=()=>{l||(c.onValueChange(r),c.onOpenChange(!1))};if(r==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return e.createElement(kt,{scope:t,value:r,disabled:l,textId:h,isSelected:i,onItemTextChange:e.useCallback(m=>{y(d=>{var v;return d||((v=m==null?void 0:m.textContent)!==null&&v!==void 0?v:"").trim()})},[])},e.createElement(ie.ItemSlot,{scope:t,value:r,disabled:l,textValue:$},e.createElement(M.div,N({role:"option","aria-labelledby":h,"data-highlighted":T?"":void 0,"aria-selected":i&&T,"data-state":i?"checked":"unchecked","aria-disabled":l||void 0,"data-disabled":l?"":void 0,tabIndex:l?void 0:-1},a,{ref:p,onFocus:I(a.onFocus,()=>C(!0)),onBlur:I(a.onBlur,()=>C(!1)),onPointerUp:I(a.onPointerUp,b),onPointerMove:I(a.onPointerMove,m=>{if(l){var d;(d=s.onItemLeave)===null||d===void 0||d.call(s)}else m.currentTarget.focus({preventScroll:!0})}),onPointerLeave:I(a.onPointerLeave,m=>{if(m.currentTarget===document.activeElement){var d;(d=s.onItemLeave)===null||d===void 0||d.call(s)}}),onKeyDown:I(a.onKeyDown,m=>{var d;((d=s.searchRef)===null||d===void 0?void 0:d.current)!==""&&m.key===" "||(ft.includes(m.key)&&b(),m.key===" "&&m.preventDefault())})}))))}),se="SelectItemText",Vt=e.forwardRef((o,n)=>{const{__scopeSelect:t,className:r,style:l,...u}=o,a=Y(se,t),c=X(se,t),s=_e(se,t),i=ht(se,t),[$,y]=e.useState(null),T=U(n,m=>y(m),s.onItemTextChange,m=>{var d;return(d=c.itemTextRefCallback)===null||d===void 0?void 0:d.call(c,m,s.value,s.disabled)}),C=$==null?void 0:$.textContent,p=e.useMemo(()=>e.createElement("option",{key:s.value,value:s.value,disabled:s.disabled},C),[s.disabled,s.value,C]),{onNativeOptionAdd:h,onNativeOptionRemove:b}=i;return z(()=>(h(p),()=>b(p)),[h,b,p]),e.createElement(e.Fragment,null,e.createElement(M.span,N({id:s.textId},u,{ref:T})),s.isSelected&&a.valueNode&&!a.valueNodeHasChildren?Ne.createPortal(u.children,a.valueNode):null)}),Mt="SelectItemIndicator",At=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o;return _e(Mt,t).isSelected?e.createElement(M.span,N({"aria-hidden":!0},r,{ref:n})):null}),Ce="SelectScrollUpButton",Lt=e.forwardRef((o,n)=>{const t=X(Ce,o.__scopeSelect),r=xe(Ce,o.__scopeSelect),[l,u]=e.useState(!1),a=U(n,r.onScrollButtonChange);return z(()=>{if(t.viewport&&t.isPositioned){let s=function(){const i=c.scrollTop>0;u(i)};const c=t.viewport;return s(),c.addEventListener("scroll",s),()=>c.removeEventListener("scroll",s)}},[t.viewport,t.isPositioned]),l?e.createElement(Re,N({},o,{ref:a,onAutoScroll:()=>{const{viewport:c,selectedItem:s}=t;c&&s&&(c.scrollTop=c.scrollTop-s.offsetHeight)}})):null}),Ee="SelectScrollDownButton",Ut=e.forwardRef((o,n)=>{const t=X(Ee,o.__scopeSelect),r=xe(Ee,o.__scopeSelect),[l,u]=e.useState(!1),a=U(n,r.onScrollButtonChange);return z(()=>{if(t.viewport&&t.isPositioned){let s=function(){const i=c.scrollHeight-c.clientHeight,$=Math.ceil(c.scrollTop)<i;u($)};const c=t.viewport;return s(),c.addEventListener("scroll",s),()=>c.removeEventListener("scroll",s)}},[t.viewport,t.isPositioned]),l?e.createElement(Re,N({},o,{ref:a,onAutoScroll:()=>{const{viewport:c,selectedItem:s}=t;c&&s&&(c.scrollTop=c.scrollTop+s.offsetHeight)}})):null}),Re=e.forwardRef((o,n)=>{const{__scopeSelect:t,onAutoScroll:r,...l}=o,u=X("SelectScrollButton",t),a=e.useRef(null),c=de(t),s=e.useCallback(()=>{a.current!==null&&(window.clearInterval(a.current),a.current=null)},[]);return e.useEffect(()=>()=>s(),[s]),z(()=>{var i;const $=c().find(y=>y.ref.current===document.activeElement);$==null||(i=$.ref.current)===null||i===void 0||i.scrollIntoView({block:"nearest"})},[c]),e.createElement(M.div,N({"aria-hidden":!0},l,{ref:n,style:{flexShrink:0,...l.style},onPointerDown:I(l.onPointerDown,()=>{a.current===null&&(a.current=window.setInterval(r,50))}),onPointerMove:I(l.onPointerMove,()=>{var i;(i=u.onItemLeave)===null||i===void 0||i.call(u),a.current===null&&(a.current=window.setInterval(r,50))}),onPointerLeave:I(l.onPointerLeave,()=>{s()})}))}),Ht=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o;return e.createElement(M.div,N({"aria-hidden":!0},r,{ref:n}))});function De(o){return o===""||o===void 0}const ke=e.forwardRef((o,n)=>{const{value:t,...r}=o,l=e.useRef(null),u=U(n,l),a=rt(t);return e.useEffect(()=>{const c=l.current,s=window.HTMLSelectElement.prototype,$=Object.getOwnPropertyDescriptor(s,"value").set;if(a!==t&&$){const y=new Event("change",{bubbles:!0});$.call(c,t),c.dispatchEvent(y)}},[a,t]),e.createElement(at,{asChild:!0},e.createElement("select",N({},r,{ref:u,defaultValue:t})))});ke.displayName="BubbleSelect";function Oe(o){const n=st(o),t=e.useRef(""),r=e.useRef(0),l=e.useCallback(a=>{const c=t.current+a;n(c),function s(i){t.current=i,window.clearTimeout(r.current),i!==""&&(r.current=window.setTimeout(()=>s(""),1e3))}(c)},[n]),u=e.useCallback(()=>{t.current="",window.clearTimeout(r.current)},[]);return e.useEffect(()=>()=>window.clearTimeout(r.current),[]),[t,l,u]}function Ve(o,n,t){const l=n.length>1&&Array.from(n).every(i=>i===n[0])?n[0]:n,u=t?o.indexOf(t):-1;let a=Bt(o,Math.max(u,0));l.length===1&&(a=a.filter(i=>i!==t));const s=a.find(i=>i.textValue.toLowerCase().startsWith(l.toLowerCase()));return s!==t?s:void 0}function Bt(o,n){return o.map((t,r)=>o[(n+r)%o.length])}const jt=vt,Me=xt,Wt=wt,Ft=St,Kt=yt,Ae=Ct,zt=Pt,Le=Dt,Ue=Ot,qt=Vt,Gt=At,He=Lt,Be=Ut,je=Ht,ao=jt,so=Wt,Yt=e.forwardRef(({className:o,children:n,...t},r)=>E.jsxDEV(Me,{ref:r,className:K("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",o),...t,children:[n,E.jsxDEV(Ft,{asChild:!0,children:E.jsxDEV(Ke,{className:"h-4 w-4 opacity-50"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/select.tsx",lineNumber:32,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/select.tsx",lineNumber:31,columnNumber:5},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/select.tsx",lineNumber:22,columnNumber:3},void 0));Yt.displayName=Me.displayName;const We=e.forwardRef(({className:o,...n},t)=>E.jsxDEV(He,{ref:t,className:K("flex cursor-default items-center justify-center py-1",o),...n,children:E.jsxDEV(ze,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/select.tsx",lineNumber:50,columnNumber:5},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/select.tsx",lineNumber:42,columnNumber:3},void 0));We.displayName=He.displayName;const Fe=e.forwardRef(({className:o,...n},t)=>E.jsxDEV(Be,{ref:t,className:K("flex cursor-default items-center justify-center py-1",o),...n,children:E.jsxDEV(qe,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/select.tsx",lineNumber:67,columnNumber:5},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/select.tsx",lineNumber:59,columnNumber:3},void 0));Fe.displayName=Be.displayName;const Xt=e.forwardRef(({className:o,children:n,position:t="popper",...r},l)=>E.jsxDEV(Kt,{children:E.jsxDEV(Ae,{ref:l,className:K("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",o),position:t,...r,children:[E.jsxDEV(We,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/select.tsx",lineNumber:89,columnNumber:7},void 0),E.jsxDEV(zt,{className:K("p-1",t==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/select.tsx",lineNumber:90,columnNumber:7},void 0),E.jsxDEV(Fe,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/select.tsx",lineNumber:99,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/select.tsx",lineNumber:78,columnNumber:5},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/select.tsx",lineNumber:77,columnNumber:3},void 0));Xt.displayName=Ae.displayName;const Zt=e.forwardRef(({className:o,...n},t)=>E.jsxDEV(Le,{ref:t,className:K("px-2 py-1.5 text-sm font-semibold",o),...n},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/select.tsx",lineNumber:109,columnNumber:3},void 0));Zt.displayName=Le.displayName;const Jt=e.forwardRef(({className:o,children:n,...t},r)=>E.jsxDEV(Ue,{ref:r,className:K("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",o),...t,children:[E.jsxDEV("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:E.jsxDEV(Gt,{children:E.jsxDEV(Ge,{className:"h-4 w-4"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/select.tsx",lineNumber:131,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/select.tsx",lineNumber:130,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/select.tsx",lineNumber:129,columnNumber:5},void 0),E.jsxDEV(qt,{children:n},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/select.tsx",lineNumber:134,columnNumber:5},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/select.tsx",lineNumber:121,columnNumber:3},void 0));Jt.displayName=Ue.displayName;const Qt=e.forwardRef(({className:o,...n},t)=>E.jsxDEV(je,{ref:t,className:K("-mx-1 my-1 h-px bg-muted",o),...n},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/select.tsx",lineNumber:143,columnNumber:3},void 0));Qt.displayName=je.displayName;export{we as $,ao as S,Yt as a,so as b,Xt as c,Jt as d};
