import{j as n,N as w,R as C,r as t,$ as Me,a as Ve,Q as _e,O as Ue}from"./index-BY9egYhW.js";import{D as je,a as Ie,b as Se,c as Oe,d as Ae,e as ae,$ as W}from"./dropdown-menu-s5hM6OTG.js";import{C as ue}from"./react-icons.esm-DO47ONlk.js";import{u as le}from"./use-auth.cache-Ef2_jiTx.js";import{$ as z,a as _,_ as R,b as Le,c as ie,d as I,e as Fe}from"./index-CGDEZ85P.js";import{$ as me,a as Ke,b as ze,c as Ge,d as Be,e as de,f as A,g as D,h as He,i as q,j as Ye}from"./index-D85UzQdK.js";import{R as B}from"./role.component-0bfogwXn.js";import"./index-VWaDGczM.js";function We(){const{auth:e,signOut:r}=le();return n.jsxDEV(je,{children:[n.jsxDEV(Ie,{className:"flex gap-1 items-center",children:["My Account ",n.jsxDEV(ue,{className:"ml-auto h-4 w-4"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/profile-dropdown.feature.tsx",lineNumber:20,columnNumber:20},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/profile-dropdown.feature.tsx",lineNumber:19,columnNumber:7},this),n.jsxDEV(Se,{children:[n.jsxDEV(Oe,{children:e==null?void 0:e.full_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/profile-dropdown.feature.tsx",lineNumber:23,columnNumber:9},this),n.jsxDEV(Ae,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/profile-dropdown.feature.tsx",lineNumber:24,columnNumber:9},this),n.jsxDEV(ae,{children:n.jsxDEV(w,{to:C.PROFILE,className:"text-primary",children:"Profile"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/profile-dropdown.feature.tsx",lineNumber:26,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/profile-dropdown.feature.tsx",lineNumber:25,columnNumber:9},this),n.jsxDEV(ae,{onClick:r,children:"Logout"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/profile-dropdown.feature.tsx",lineNumber:30,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/profile-dropdown.feature.tsx",lineNumber:22,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/profile-dropdown.feature.tsx",lineNumber:18,columnNumber:5},this)}const G="NavigationMenu",[ee,fe,Qe]=me(G),[X,qe,Xe]=me(G),[te,Ut]=Ke(G,[Qe,Xe]),[Je,V]=te(G),[Ze,et]=te(G),tt=t.forwardRef((e,r)=>{const{__scopeNavigationMenu:a,value:i,onValueChange:s,defaultValue:o,delayDuration:c=200,skipDelayDuration:f=300,orientation:u="horizontal",dir:E,...l}=e,[N,y]=t.useState(null),x=z(r,v=>y(v)),g=ze(E),p=t.useRef(0),h=t.useRef(0),T=t.useRef(0),[U,d]=t.useState(!0),[b="",m]=Ge({prop:i,onChange:v=>{const S=v!=="",Q=f>0;S?(window.clearTimeout(T.current),Q&&d(!1)):(window.clearTimeout(T.current),T.current=window.setTimeout(()=>d(!0),f)),s==null||s(v)},defaultProp:o}),$=t.useCallback(()=>{window.clearTimeout(h.current),h.current=window.setTimeout(()=>m(""),150)},[m]),M=t.useCallback(v=>{window.clearTimeout(h.current),m(v)},[m]),j=t.useCallback(v=>{b===v?window.clearTimeout(h.current):p.current=window.setTimeout(()=>{window.clearTimeout(h.current),m(v)},c)},[b,m,c]);return t.useEffect(()=>()=>{window.clearTimeout(p.current),window.clearTimeout(h.current),window.clearTimeout(T.current)},[]),t.createElement(nt,{scope:a,isRootMenu:!0,value:b,dir:g,orientation:u,rootNavigationMenu:N,onTriggerEnter:v=>{window.clearTimeout(p.current),U?j(v):M(v)},onTriggerLeave:()=>{window.clearTimeout(p.current),$()},onContentEnter:()=>window.clearTimeout(h.current),onContentLeave:$,onItemSelect:v=>{m(S=>S===v?"":v)},onItemDismiss:()=>m("")},t.createElement(_.nav,R({"aria-label":"Main","data-orientation":u,dir:g},l,{ref:x})))}),nt=e=>{const{scope:r,isRootMenu:a,rootNavigationMenu:i,dir:s,orientation:o,children:c,value:f,onItemSelect:u,onItemDismiss:E,onTriggerEnter:l,onTriggerLeave:N,onContentEnter:y,onContentLeave:x}=e,[g,p]=t.useState(null),[h,T]=t.useState(new Map),[U,d]=t.useState(null);return t.createElement(Je,{scope:r,isRootMenu:a,rootNavigationMenu:i,value:f,previousValue:Be(f),baseId:de(),dir:s,orientation:o,viewport:g,onViewportChange:p,indicatorTrack:U,onIndicatorTrackChange:d,onTriggerEnter:A(l),onTriggerLeave:A(N),onContentEnter:A(y),onContentLeave:A(x),onItemSelect:A(u),onItemDismiss:A(E),onViewportContentChange:t.useCallback((b,m)=>{T($=>($.set(b,m),new Map($)))},[]),onViewportContentRemove:t.useCallback(b=>{T(m=>m.has(b)?(m.delete(b),new Map(m)):m)},[])},t.createElement(ee.Provider,{scope:r},t.createElement(Ze,{scope:r,items:h},c)))},rt="NavigationMenuList",at=t.forwardRef((e,r)=>{const{__scopeNavigationMenu:a,...i}=e,s=V(rt,a),o=t.createElement(_.ul,R({"data-orientation":s.orientation},i,{ref:r}));return t.createElement(_.div,{style:{position:"relative"},ref:s.onIndicatorTrackChange},t.createElement(ee.Slot,{scope:a},s.isRootMenu?t.createElement(ge,{asChild:!0},o):o))}),it="NavigationMenuItem",[st,be]=te(it),ot=t.forwardRef((e,r)=>{const{__scopeNavigationMenu:a,value:i,...s}=e,o=de(),c=i||o||"LEGACY_REACT_AUTO_VALUE",f=t.useRef(null),u=t.useRef(null),E=t.useRef(null),l=t.useRef(()=>{}),N=t.useRef(!1),y=t.useCallback((g="start")=>{if(f.current){l.current();const p=J(f.current);p.length&&ne(g==="start"?p:p.reverse())}},[]),x=t.useCallback(()=>{if(f.current){const g=J(f.current);g.length&&(l.current=gt(g))}},[]);return t.createElement(st,{scope:a,value:c,triggerRef:u,contentRef:f,focusProxyRef:E,wasEscapeCloseRef:N,onEntryKeyDown:y,onFocusProxyEnter:y,onRootContentClose:x,onContentFocusOutside:x},t.createElement(_.li,R({},s,{ref:r})))}),se="NavigationMenuTrigger",ct=t.forwardRef((e,r)=>{const{__scopeNavigationMenu:a,disabled:i,...s}=e,o=V(se,e.__scopeNavigationMenu),c=be(se,e.__scopeNavigationMenu),f=t.useRef(null),u=z(f,c.triggerRef,r),E=he(o.baseId,c.value),l=$e(o.baseId,c.value),N=t.useRef(!1),y=t.useRef(!1),x=c.value===o.value;return t.createElement(t.Fragment,null,t.createElement(ee.ItemSlot,{scope:a,value:c.value},t.createElement(xe,{asChild:!0},t.createElement(_.button,R({id:E,disabled:i,"data-disabled":i?"":void 0,"data-state":re(x),"aria-expanded":x,"aria-controls":l},s,{ref:u,onPointerEnter:D(e.onPointerEnter,()=>{y.current=!1,c.wasEscapeCloseRef.current=!1}),onPointerMove:D(e.onPointerMove,Y(()=>{i||y.current||c.wasEscapeCloseRef.current||N.current||(o.onTriggerEnter(c.value),N.current=!0)})),onPointerLeave:D(e.onPointerLeave,Y(()=>{i||(o.onTriggerLeave(),N.current=!1)})),onClick:D(e.onClick,()=>{o.onItemSelect(c.value),y.current=x}),onKeyDown:D(e.onKeyDown,g=>{const h={horizontal:"ArrowDown",vertical:o.dir==="rtl"?"ArrowLeft":"ArrowRight"}[o.orientation];x&&g.key===h&&(c.onEntryKeyDown(),g.preventDefault())})})))),x&&t.createElement(t.Fragment,null,t.createElement(He,{"aria-hidden":!0,tabIndex:0,ref:c.focusProxyRef,onFocus:g=>{const p=c.contentRef.current,h=g.relatedTarget,T=h===f.current,U=p==null?void 0:p.contains(h);(T||!U)&&c.onFocusProxyEnter(T?"start":"end")}}),o.viewport&&t.createElement("span",{"aria-owns":l})))}),oe="navigationMenu.linkSelect",ut=t.forwardRef((e,r)=>{const{__scopeNavigationMenu:a,active:i,onSelect:s,...o}=e;return t.createElement(xe,{asChild:!0},t.createElement(_.a,R({"data-active":i?"":void 0,"aria-current":i?"page":void 0},o,{ref:r,onClick:D(e.onClick,c=>{const f=c.target,u=new CustomEvent(oe,{bubbles:!0,cancelable:!0});if(f.addEventListener(oe,E=>s==null?void 0:s(E),{once:!0}),ie(f,u),!u.defaultPrevented&&!c.metaKey){const E=new CustomEvent(H,{bubbles:!0,cancelable:!0});ie(f,E)}},{checkForDefaultPrevented:!1})})))}),ve="NavigationMenuIndicator",lt=t.forwardRef((e,r)=>{const{forceMount:a,...i}=e,s=V(ve,e.__scopeNavigationMenu),o=!!s.value;return s.indicatorTrack?Me.createPortal(t.createElement(W,{present:a||o},t.createElement(mt,R({},i,{ref:r}))),s.indicatorTrack):null}),mt=t.forwardRef((e,r)=>{const{__scopeNavigationMenu:a,...i}=e,s=V(ve,a),o=fe(a),[c,f]=t.useState(null),[u,E]=t.useState(null),l=s.orientation==="horizontal",N=!!s.value;t.useEffect(()=>{var x;const p=(x=o().find(h=>h.value===s.value))===null||x===void 0?void 0:x.ref.current;p&&f(p)},[o,s.value]);const y=()=>{c&&E({size:l?c.offsetWidth:c.offsetHeight,offset:l?c.offsetLeft:c.offsetTop})};return Z(c,y),Z(s.indicatorTrack,y),u?t.createElement(_.div,R({"aria-hidden":!0,"data-state":N?"visible":"hidden","data-orientation":s.orientation},i,{ref:r,style:{position:"absolute",...l?{left:0,width:u.size+"px",transform:`translateX(${u.offset}px)`}:{top:0,height:u.size+"px",transform:`translateY(${u.offset}px)`},...i.style}})):null}),K="NavigationMenuContent",dt=t.forwardRef((e,r)=>{const{forceMount:a,...i}=e,s=V(K,e.__scopeNavigationMenu),o=be(K,e.__scopeNavigationMenu),c=z(o.contentRef,r),f=o.value===s.value,u={value:o.value,triggerRef:o.triggerRef,focusProxyRef:o.focusProxyRef,wasEscapeCloseRef:o.wasEscapeCloseRef,onContentFocusOutside:o.onContentFocusOutside,onRootContentClose:o.onRootContentClose,...i};return s.viewport?t.createElement(ft,R({forceMount:a},u,{ref:c})):t.createElement(W,{present:a||f},t.createElement(pe,R({"data-state":re(f)},u,{ref:c,onPointerEnter:D(e.onPointerEnter,s.onContentEnter),onPointerLeave:D(e.onPointerLeave,Y(s.onContentLeave)),style:{pointerEvents:!f&&s.isRootMenu?"none":void 0,...u.style}})))}),ft=t.forwardRef((e,r)=>{const a=V(K,e.__scopeNavigationMenu),{onViewportContentChange:i,onViewportContentRemove:s}=a;return q(()=>{i(e.value,{ref:r,...e})},[e,r,i]),q(()=>()=>s(e.value),[e.value,s]),null}),H="navigationMenu.rootContentDismiss",pe=t.forwardRef((e,r)=>{const{__scopeNavigationMenu:a,value:i,triggerRef:s,focusProxyRef:o,wasEscapeCloseRef:c,onRootContentClose:f,onContentFocusOutside:u,...E}=e,l=V(K,a),N=t.useRef(null),y=z(N,r),x=he(l.baseId,i),g=$e(l.baseId,i),p=fe(a),h=t.useRef(null),{onItemDismiss:T}=l;t.useEffect(()=>{const d=N.current;if(l.isRootMenu&&d){const b=()=>{var m;T(),f(),d.contains(document.activeElement)&&((m=s.current)===null||m===void 0||m.focus())};return d.addEventListener(H,b),()=>d.removeEventListener(H,b)}},[l.isRootMenu,e.value,s,T,f]);const U=t.useMemo(()=>{const b=p().map(S=>S.value);l.dir==="rtl"&&b.reverse();const m=b.indexOf(l.value),$=b.indexOf(l.previousValue),M=i===l.value,j=$===b.indexOf(i);if(!M&&!j)return h.current;const v=(()=>{if(m!==$){if(M&&$!==-1)return m>$?"from-end":"from-start";if(j&&m!==-1)return m>$?"to-start":"to-end"}return null})();return h.current=v,v},[l.previousValue,l.value,l.dir,p,i]);return t.createElement(ge,{asChild:!0},t.createElement(Ye,R({id:g,"aria-labelledby":x,"data-motion":U,"data-orientation":l.orientation},E,{ref:y,onDismiss:()=>{var d;const b=new Event(H,{bubbles:!0,cancelable:!0});(d=N.current)===null||d===void 0||d.dispatchEvent(b)},onFocusOutside:D(e.onFocusOutside,d=>{var b;u();const m=d.target;(b=l.rootNavigationMenu)!==null&&b!==void 0&&b.contains(m)&&d.preventDefault()}),onPointerDownOutside:D(e.onPointerDownOutside,d=>{var b;const m=d.target,$=p().some(j=>{var v;return(v=j.ref.current)===null||v===void 0?void 0:v.contains(m)}),M=l.isRootMenu&&((b=l.viewport)===null||b===void 0?void 0:b.contains(m));($||M||!l.isRootMenu)&&d.preventDefault()}),onKeyDown:D(e.onKeyDown,d=>{const b=d.altKey||d.ctrlKey||d.metaKey;if(d.key==="Tab"&&!b){const M=J(d.currentTarget),j=document.activeElement,v=M.findIndex(ke=>ke===j),Q=d.shiftKey?M.slice(0,v).reverse():M.slice(v+1,M.length);if(ne(Q))d.preventDefault();else{var $;($=o.current)===null||$===void 0||$.focus()}}}),onEscapeKeyDown:D(e.onEscapeKeyDown,d=>{c.current=!0})})))}),Ne="NavigationMenuViewport",bt=t.forwardRef((e,r)=>{const{forceMount:a,...i}=e,o=!!V(Ne,e.__scopeNavigationMenu).value;return t.createElement(W,{present:a||o},t.createElement(vt,R({},i,{ref:r})))}),vt=t.forwardRef((e,r)=>{const{__scopeNavigationMenu:a,children:i,...s}=e,o=V(Ne,a),c=z(r,o.onViewportChange),f=et(K,e.__scopeNavigationMenu),[u,E]=t.useState(null),[l,N]=t.useState(null),y=u?(u==null?void 0:u.width)+"px":void 0,x=u?(u==null?void 0:u.height)+"px":void 0,g=!!o.value,p=g?o.value:o.previousValue;return Z(l,()=>{l&&E({width:l.offsetWidth,height:l.offsetHeight})}),t.createElement(_.div,R({"data-state":re(g),"data-orientation":o.orientation},s,{ref:c,style:{pointerEvents:!g&&o.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":y,"--radix-navigation-menu-viewport-height":x,...s.style},onPointerEnter:D(e.onPointerEnter,o.onContentEnter),onPointerLeave:D(e.onPointerLeave,Y(o.onContentLeave))}),Array.from(f.items).map(([T,{ref:U,forceMount:d,...b}])=>{const m=p===T;return t.createElement(W,{key:T,present:d||m},t.createElement(pe,R({},b,{ref:Le(U,$=>{m&&$&&N($)})})))}))}),pt="FocusGroup",ge=t.forwardRef((e,r)=>{const{__scopeNavigationMenu:a,...i}=e,s=V(pt,a);return t.createElement(X.Provider,{scope:a},t.createElement(X.Slot,{scope:a},t.createElement(_.div,R({dir:s.dir},i,{ref:r}))))}),ce=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],Nt="FocusGroupItem",xe=t.forwardRef((e,r)=>{const{__scopeNavigationMenu:a,...i}=e,s=qe(a),o=V(Nt,a);return t.createElement(X.ItemSlot,{scope:a},t.createElement(_.button,R({},i,{ref:r,onKeyDown:D(e.onKeyDown,c=>{if(["Home","End",...ce].includes(c.key)){let u=s().map(N=>N.ref.current);if([o.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(c.key)&&u.reverse(),ce.includes(c.key)){const N=u.indexOf(c.currentTarget);u=u.slice(N+1)}setTimeout(()=>ne(u)),c.preventDefault()}})})))});function J(e){const r=[],a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const s=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||s?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;a.nextNode();)r.push(a.currentNode);return r}function ne(e){const r=document.activeElement;return e.some(a=>a===r?!0:(a.focus(),document.activeElement!==r))}function gt(e){return e.forEach(r=>{r.dataset.tabindex=r.getAttribute("tabindex")||"",r.setAttribute("tabindex","-1")}),()=>{e.forEach(r=>{const a=r.dataset.tabindex;r.setAttribute("tabindex",a)})}}function Z(e,r){const a=A(r);q(()=>{let i=0;if(e){const s=new ResizeObserver(()=>{cancelAnimationFrame(i),i=window.requestAnimationFrame(a)});return s.observe(e),()=>{window.cancelAnimationFrame(i),s.unobserve(e)}}},[e,a])}function re(e){return e?"open":"closed"}function he(e,r){return`${e}-trigger-${r}`}function $e(e,r){return`${e}-content-${r}`}function Y(e){return r=>r.pointerType==="mouse"?e(r):void 0}const Ee=tt,ye=at,xt=ot,Te=ct,ht=ut,we=lt,Ce=dt,Pe=bt,De=t.forwardRef(({className:e,children:r,...a},i)=>n.jsxDEV(Ee,{ref:i,className:I("relative z-10 flex max-w-max flex-1 items-center justify-center",e),...a,children:r},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/navigation-menu.tsx",lineNumber:12,columnNumber:3},void 0));De.displayName=Ee.displayName;const Re=t.forwardRef(({className:e,...r},a)=>n.jsxDEV(ye,{ref:a,className:I("group flex flex-1 list-none items-center justify-center space-x-1",e),...r},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/navigation-menu.tsx",lineNumber:30,columnNumber:3},void 0));Re.displayName=ye.displayName;const O=t.forwardRef(({children:e,className:r,...a},i)=>n.jsxDEV(xt,{ref:i,className:I("group/menu-item relative flex items-center",r),...a,children:e},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/navigation-menu.tsx",lineNumber:45,columnNumber:3},void 0)),P=Fe("group flex h-9 text-primary no-underline w-full truncate items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"),L=t.forwardRef(({className:e,children:r,...a},i)=>n.jsxDEV(Te,{ref:i,className:I(P(),"group",e),...a,children:[r," ",n.jsxDEV(ue,{className:"relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180","aria-hidden":"true"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/navigation-menu.tsx",lineNumber:68,columnNumber:5},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/navigation-menu.tsx",lineNumber:62,columnNumber:3},void 0));L.displayName=Te.displayName;const F=t.forwardRef(({className:e,...r},a)=>n.jsxDEV(Ce,{ref:a,className:I("absolute shadow mt-2 left-0 top-full w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",e),...r},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/navigation-menu.tsx",lineNumber:80,columnNumber:3},void 0));F.displayName=Ce.displayName;const k=ht,$t=t.forwardRef(({className:e,...r},a)=>n.jsxDEV("div",{className:I("absolute left-0 top-full flex justify-center"),children:n.jsxDEV(Pe,{className:I("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",e),ref:a,...r},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/navigation-menu.tsx",lineNumber:98,columnNumber:5},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/navigation-menu.tsx",lineNumber:97,columnNumber:3},void 0));$t.displayName=Pe.displayName;const Et=t.forwardRef(({className:e,...r},a)=>n.jsxDEV(we,{ref:a,className:I("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",e),...r,children:n.jsxDEV("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/navigation-menu.tsx",lineNumber:123,columnNumber:5},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/navigation-menu.tsx",lineNumber:115,columnNumber:3},void 0));Et.displayName=we.displayName;function yt(){return n.jsxDEV(De,{children:n.jsxDEV(Re,{children:[n.jsxDEV(B,{type:"admin",children:n.jsxDEV(O,{children:[n.jsxDEV(L,{children:"Statistics"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:20,columnNumber:13},this),n.jsxDEV(F,{children:[n.jsxDEV(k,{className:P(),asChild:!0,children:n.jsxDEV(w,{to:C.STATISTICS_CUSTOMER_HISTORY,children:"Customer history by date"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:26,columnNumber:17},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:22,columnNumber:15},this),n.jsxDEV(k,{className:P(),asChild:!0,children:n.jsxDEV(w,{to:C.STATISTICS_BANK_PAYMENT,children:"Bank payment by date"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:35,columnNumber:17},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:31,columnNumber:15},this),n.jsxDEV(k,{className:P(),asChild:!0,children:n.jsxDEV(w,{to:C.STATISTICS_ALL_POS_USED,children:"All POS used"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:44,columnNumber:17},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:40,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:21,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:19,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:18,columnNumber:9},this),n.jsxDEV(B,{type:"admin",children:n.jsxDEV(O,{children:n.jsxDEV(k,{className:P(),asChild:!0,children:n.jsxDEV(w,{to:C.USERS,children:"Users"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:58,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:54,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:53,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:52,columnNumber:9},this),n.jsxDEV(O,{children:[n.jsxDEV(L,{children:"POS"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:64,columnNumber:11},this),n.jsxDEV(F,{children:[n.jsxDEV(k,{className:P(),asChild:!0,children:n.jsxDEV(w,{to:C.POS,children:"List of POS"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:70,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:66,columnNumber:13},this),n.jsxDEV(B,{type:"admin",children:n.jsxDEV(k,{className:P(),asChild:!0,children:n.jsxDEV(w,{to:C.POS_CREATE,children:"Create new POS"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:78,columnNumber:17},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:74,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:73,columnNumber:13},this),n.jsxDEV(k,{className:P(),asChild:!0,children:n.jsxDEV(w,{to:C.POS_ERRORS,children:"POS Errors"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:86,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:82,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:65,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:63,columnNumber:9},this),n.jsxDEV(O,{children:[n.jsxDEV(L,{children:"Customers"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:92,columnNumber:11},this),n.jsxDEV(F,{children:[n.jsxDEV(k,{className:P(),asChild:!0,children:n.jsxDEV(w,{to:C.CUSTOMERS,children:"Customer infos"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:98,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:94,columnNumber:13},this),n.jsxDEV(k,{className:P(),asChild:!0,children:n.jsxDEV(w,{to:C.CUSTOMER_HISTORIES,children:"Customer histories"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:105,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:101,columnNumber:13},this),n.jsxDEV(k,{className:P(),asChild:!0,children:n.jsxDEV(w,{to:C.CUSTOMER_CC,children:"Customer credit cards"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:114,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:110,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:93,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:91,columnNumber:9},this),n.jsxDEV(O,{children:n.jsxDEV(k,{className:P(),asChild:!0,children:n.jsxDEV(w,{to:C.LEVEL_RATES,children:"Level Rates"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:121,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:120,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:119,columnNumber:9},this),n.jsxDEV(B,{type:"admin",children:n.jsxDEV(O,{children:n.jsxDEV(k,{className:P(),asChild:!0,children:n.jsxDEV(w,{to:C.BANK_PAYMENTS,children:"Bank Payments"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:131,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:127,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:126,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:125,columnNumber:9},this),n.jsxDEV(O,{children:[n.jsxDEV(L,{children:"Tools"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:137,columnNumber:11},this),n.jsxDEV(F,{children:[n.jsxDEV(k,{className:P(),asChild:!0,children:n.jsxDEV(w,{to:C.TOOLS_VN_BANKS,children:"VN Banks"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:143,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:139,columnNumber:13},this),n.jsxDEV(k,{className:P(),asChild:!0,children:n.jsxDEV(w,{to:C.TOOLS_CACULATORS,children:"Calculators"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:149,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:145,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:138,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:136,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:17,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:16,columnNumber:5},this)}function Tt(){return n.jsxDEV("div",{className:"flex items-center justify-between gap-4 py-2 px-4 shadow",children:[n.jsxDEV("div",{children:n.jsxDEV(yt,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/sections/header.section.tsx",lineNumber:8,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/sections/header.section.tsx",lineNumber:7,columnNumber:7},this),n.jsxDEV("div",{children:n.jsxDEV(We,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/sections/header.section.tsx",lineNumber:11,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/sections/header.section.tsx",lineNumber:10,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/sections/header.section.tsx",lineNumber:6,columnNumber:5},this)}function wt({children:e}){return n.jsxDEV("div",{className:"space-y-4",children:[n.jsxDEV(Tt,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/layouts/dashboard.layout.tsx",lineNumber:9,columnNumber:7},this),n.jsxDEV("main",{className:"px-4",children:e},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/layouts/dashboard.layout.tsx",lineNumber:10,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/layouts/dashboard.layout.tsx",lineNumber:8,columnNumber:5},this)}function jt(){const{auth:e,signOut:r,wasTokenExpired:a}=le();return t.useEffect(()=>{const i=Ve.getQueryCache().subscribe(s=>{s.type==="removed"&&s.query.queryKey===_e.AUTH_INFO&&r()});return()=>i()},[]),t.useEffect(()=>{if(!e||!(e!=null&&e.status))r();else try{a()&&r()}catch{r()}},[e]),e?n.jsxDEV(wt,{children:n.jsxDEV(Ue,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/routes/root.route.tsx",lineNumber:42,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/routes/root.route.tsx",lineNumber:41,columnNumber:5},this):n.jsxDEV(n.Fragment,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/routes/root.route.tsx",lineNumber:38,columnNumber:21},this)}export{jt as default};
