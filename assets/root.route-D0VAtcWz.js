import{j as n,N as w,R as P,r as t,$ as Ae,u as Le,a as Fe,Q as Ke,O as ze}from"./index-CrgaQZZi.js";import{D as Be,a as He,b as Ge,c as Ye,d as We,e as ae}from"./dropdown-menu-2K5Ff67t.js";import{C as ue,a as Qe,H as qe}from"./react-icons.esm-DuamYfJ8.js";import{u as de}from"./use-auth.cache-6c4ifGiC.js";import{$ as z,a as _,_ as D,b as Xe,c as ie,d as V,e as me,B as Je}from"./button-CrLqvpvw.js";import{$ as Ze,a as et,b as fe,c as A,d as k,e as W,f as q,g as tt}from"./Combination-D6Jm7gtk.js";import{$ as be,a as nt,b as rt,c as at}from"./index-7iSC9myz.js";import{R as H}from"./role.component-CWVs5417.js";import{$ as ve,a as pe,b as it,c as Ne,d as ge,e as st,f as ot,g as ct}from"./index-D3Fi_Hth.js";function lt(){const{auth:e,signOut:r}=de();return n.jsxDEV(Be,{children:[n.jsxDEV(He,{className:"flex gap-1 items-center",children:["My Account ",n.jsxDEV(ue,{className:"ml-auto h-4 w-4"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/profile-dropdown.feature.tsx",lineNumber:20,columnNumber:20},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/profile-dropdown.feature.tsx",lineNumber:19,columnNumber:7},this),n.jsxDEV(Ge,{children:[n.jsxDEV(Ye,{children:e==null?void 0:e.full_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/profile-dropdown.feature.tsx",lineNumber:23,columnNumber:9},this),n.jsxDEV(We,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/profile-dropdown.feature.tsx",lineNumber:24,columnNumber:9},this),n.jsxDEV(ae,{children:n.jsxDEV(w,{to:P.PROFILE,className:"text-primary",children:"Profile"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/profile-dropdown.feature.tsx",lineNumber:26,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/profile-dropdown.feature.tsx",lineNumber:25,columnNumber:9},this),n.jsxDEV(ae,{onClick:r,children:"Logout"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/profile-dropdown.feature.tsx",lineNumber:30,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/profile-dropdown.feature.tsx",lineNumber:22,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/profile-dropdown.feature.tsx",lineNumber:18,columnNumber:5},this)}const B="NavigationMenu",[ee,xe,ut]=be(B),[X,dt,mt]=be(B),[te,tn]=Ze(B,[ut,mt]),[ft,U]=te(B),[bt,vt]=te(B),pt=t.forwardRef((e,r)=>{const{__scopeNavigationMenu:a,value:i,onValueChange:s,defaultValue:o,delayDuration:c=200,skipDelayDuration:f=300,orientation:l="horizontal",dir:E,...u}=e,[N,y]=t.useState(null),x=z(r,v=>y(v)),g=nt(E),p=t.useRef(0),h=t.useRef(0),T=t.useRef(0),[j,m]=t.useState(!0),[b="",d]=et({prop:i,onChange:v=>{const I=v!=="",Q=f>0;I?(window.clearTimeout(T.current),Q&&m(!1)):(window.clearTimeout(T.current),T.current=window.setTimeout(()=>m(!0),f)),s==null||s(v)},defaultProp:o}),$=t.useCallback(()=>{window.clearTimeout(h.current),h.current=window.setTimeout(()=>d(""),150)},[d]),M=t.useCallback(v=>{window.clearTimeout(h.current),d(v)},[d]),S=t.useCallback(v=>{b===v?window.clearTimeout(h.current):p.current=window.setTimeout(()=>{window.clearTimeout(h.current),d(v)},c)},[b,d,c]);return t.useEffect(()=>()=>{window.clearTimeout(p.current),window.clearTimeout(h.current),window.clearTimeout(T.current)},[]),t.createElement(Nt,{scope:a,isRootMenu:!0,value:b,dir:g,orientation:l,rootNavigationMenu:N,onTriggerEnter:v=>{window.clearTimeout(p.current),j?S(v):M(v)},onTriggerLeave:()=>{window.clearTimeout(p.current),$()},onContentEnter:()=>window.clearTimeout(h.current),onContentLeave:$,onItemSelect:v=>{d(I=>I===v?"":v)},onItemDismiss:()=>d("")},t.createElement(_.nav,D({"aria-label":"Main","data-orientation":l,dir:g},u,{ref:x})))}),Nt=e=>{const{scope:r,isRootMenu:a,rootNavigationMenu:i,dir:s,orientation:o,children:c,value:f,onItemSelect:l,onItemDismiss:E,onTriggerEnter:u,onTriggerLeave:N,onContentEnter:y,onContentLeave:x}=e,[g,p]=t.useState(null),[h,T]=t.useState(new Map),[j,m]=t.useState(null);return t.createElement(ft,{scope:r,isRootMenu:a,rootNavigationMenu:i,value:f,previousValue:rt(f),baseId:fe(),dir:s,orientation:o,viewport:g,onViewportChange:p,indicatorTrack:j,onIndicatorTrackChange:m,onTriggerEnter:A(u),onTriggerLeave:A(N),onContentEnter:A(y),onContentLeave:A(x),onItemSelect:A(l),onItemDismiss:A(E),onViewportContentChange:t.useCallback((b,d)=>{T($=>($.set(b,d),new Map($)))},[]),onViewportContentRemove:t.useCallback(b=>{T(d=>d.has(b)?(d.delete(b),new Map(d)):d)},[])},t.createElement(ee.Provider,{scope:r},t.createElement(bt,{scope:r,items:h},c)))},gt="NavigationMenuList",xt=t.forwardRef((e,r)=>{const{__scopeNavigationMenu:a,...i}=e,s=U(gt,a),o=t.createElement(_.ul,D({"data-orientation":s.orientation},i,{ref:r}));return t.createElement(_.div,{style:{position:"relative"},ref:s.onIndicatorTrackChange},t.createElement(ee.Slot,{scope:a},s.isRootMenu?t.createElement(Te,{asChild:!0},o):o))}),ht="NavigationMenuItem",[$t,he]=te(ht),Et=t.forwardRef((e,r)=>{const{__scopeNavigationMenu:a,value:i,...s}=e,o=fe(),c=i||o||"LEGACY_REACT_AUTO_VALUE",f=t.useRef(null),l=t.useRef(null),E=t.useRef(null),u=t.useRef(()=>{}),N=t.useRef(!1),y=t.useCallback((g="start")=>{if(f.current){u.current();const p=J(f.current);p.length&&ne(g==="start"?p:p.reverse())}},[]),x=t.useCallback(()=>{if(f.current){const g=J(f.current);g.length&&(u.current=Ut(g))}},[]);return t.createElement($t,{scope:a,value:c,triggerRef:l,contentRef:f,focusProxyRef:E,wasEscapeCloseRef:N,onEntryKeyDown:y,onFocusProxyEnter:y,onRootContentClose:x,onContentFocusOutside:x},t.createElement(_.li,D({},s,{ref:r})))}),se="NavigationMenuTrigger",yt=t.forwardRef((e,r)=>{const{__scopeNavigationMenu:a,disabled:i,...s}=e,o=U(se,e.__scopeNavigationMenu),c=he(se,e.__scopeNavigationMenu),f=t.useRef(null),l=z(f,c.triggerRef,r),E=Pe(o.baseId,c.value),u=Ce(o.baseId,c.value),N=t.useRef(!1),y=t.useRef(!1),x=c.value===o.value;return t.createElement(t.Fragment,null,t.createElement(ee.ItemSlot,{scope:a,value:c.value},t.createElement(we,{asChild:!0},t.createElement(_.button,D({id:E,disabled:i,"data-disabled":i?"":void 0,"data-state":re(x),"aria-expanded":x,"aria-controls":u},s,{ref:l,onPointerEnter:k(e.onPointerEnter,()=>{y.current=!1,c.wasEscapeCloseRef.current=!1}),onPointerMove:k(e.onPointerMove,Y(()=>{i||y.current||c.wasEscapeCloseRef.current||N.current||(o.onTriggerEnter(c.value),N.current=!0)})),onPointerLeave:k(e.onPointerLeave,Y(()=>{i||(o.onTriggerLeave(),N.current=!1)})),onClick:k(e.onClick,()=>{o.onItemSelect(c.value),y.current=x}),onKeyDown:k(e.onKeyDown,g=>{const h={horizontal:"ArrowDown",vertical:o.dir==="rtl"?"ArrowLeft":"ArrowRight"}[o.orientation];x&&g.key===h&&(c.onEntryKeyDown(),g.preventDefault())})})))),x&&t.createElement(t.Fragment,null,t.createElement(at,{"aria-hidden":!0,tabIndex:0,ref:c.focusProxyRef,onFocus:g=>{const p=c.contentRef.current,h=g.relatedTarget,T=h===f.current,j=p==null?void 0:p.contains(h);(T||!j)&&c.onFocusProxyEnter(T?"start":"end")}}),o.viewport&&t.createElement("span",{"aria-owns":u})))}),oe="navigationMenu.linkSelect",Tt=t.forwardRef((e,r)=>{const{__scopeNavigationMenu:a,active:i,onSelect:s,...o}=e;return t.createElement(we,{asChild:!0},t.createElement(_.a,D({"data-active":i?"":void 0,"aria-current":i?"page":void 0},o,{ref:r,onClick:k(e.onClick,c=>{const f=c.target,l=new CustomEvent(oe,{bubbles:!0,cancelable:!0});if(f.addEventListener(oe,E=>s==null?void 0:s(E),{once:!0}),ie(f,l),!l.defaultPrevented&&!c.metaKey){const E=new CustomEvent(G,{bubbles:!0,cancelable:!0});ie(f,E)}},{checkForDefaultPrevented:!1})})))}),$e="NavigationMenuIndicator",wt=t.forwardRef((e,r)=>{const{forceMount:a,...i}=e,s=U($e,e.__scopeNavigationMenu),o=!!s.value;return s.indicatorTrack?Ae.createPortal(t.createElement(W,{present:a||o},t.createElement(Pt,D({},i,{ref:r}))),s.indicatorTrack):null}),Pt=t.forwardRef((e,r)=>{const{__scopeNavigationMenu:a,...i}=e,s=U($e,a),o=xe(a),[c,f]=t.useState(null),[l,E]=t.useState(null),u=s.orientation==="horizontal",N=!!s.value;t.useEffect(()=>{var x;const p=(x=o().find(h=>h.value===s.value))===null||x===void 0?void 0:x.ref.current;p&&f(p)},[o,s.value]);const y=()=>{c&&E({size:u?c.offsetWidth:c.offsetHeight,offset:u?c.offsetLeft:c.offsetTop})};return Z(c,y),Z(s.indicatorTrack,y),l?t.createElement(_.div,D({"aria-hidden":!0,"data-state":N?"visible":"hidden","data-orientation":s.orientation},i,{ref:r,style:{position:"absolute",...u?{left:0,width:l.size+"px",transform:`translateX(${l.offset}px)`}:{top:0,height:l.size+"px",transform:`translateY(${l.offset}px)`},...i.style}})):null}),K="NavigationMenuContent",Ct=t.forwardRef((e,r)=>{const{forceMount:a,...i}=e,s=U(K,e.__scopeNavigationMenu),o=he(K,e.__scopeNavigationMenu),c=z(o.contentRef,r),f=o.value===s.value,l={value:o.value,triggerRef:o.triggerRef,focusProxyRef:o.focusProxyRef,wasEscapeCloseRef:o.wasEscapeCloseRef,onContentFocusOutside:o.onContentFocusOutside,onRootContentClose:o.onRootContentClose,...i};return s.viewport?t.createElement(kt,D({forceMount:a},l,{ref:c})):t.createElement(W,{present:a||f},t.createElement(Ee,D({"data-state":re(f)},l,{ref:c,onPointerEnter:k(e.onPointerEnter,s.onContentEnter),onPointerLeave:k(e.onPointerLeave,Y(s.onContentLeave)),style:{pointerEvents:!f&&s.isRootMenu?"none":void 0,...l.style}})))}),kt=t.forwardRef((e,r)=>{const a=U(K,e.__scopeNavigationMenu),{onViewportContentChange:i,onViewportContentRemove:s}=a;return q(()=>{i(e.value,{ref:r,...e})},[e,r,i]),q(()=>()=>s(e.value),[e.value,s]),null}),G="navigationMenu.rootContentDismiss",Ee=t.forwardRef((e,r)=>{const{__scopeNavigationMenu:a,value:i,triggerRef:s,focusProxyRef:o,wasEscapeCloseRef:c,onRootContentClose:f,onContentFocusOutside:l,...E}=e,u=U(K,a),N=t.useRef(null),y=z(N,r),x=Pe(u.baseId,i),g=Ce(u.baseId,i),p=xe(a),h=t.useRef(null),{onItemDismiss:T}=u;t.useEffect(()=>{const m=N.current;if(u.isRootMenu&&m){const b=()=>{var d;T(),f(),m.contains(document.activeElement)&&((d=s.current)===null||d===void 0||d.focus())};return m.addEventListener(G,b),()=>m.removeEventListener(G,b)}},[u.isRootMenu,e.value,s,T,f]);const j=t.useMemo(()=>{const b=p().map(I=>I.value);u.dir==="rtl"&&b.reverse();const d=b.indexOf(u.value),$=b.indexOf(u.previousValue),M=i===u.value,S=$===b.indexOf(i);if(!M&&!S)return h.current;const v=(()=>{if(d!==$){if(M&&$!==-1)return d>$?"from-end":"from-start";if(S&&d!==-1)return d>$?"to-start":"to-end"}return null})();return h.current=v,v},[u.previousValue,u.value,u.dir,p,i]);return t.createElement(Te,{asChild:!0},t.createElement(tt,D({id:g,"aria-labelledby":x,"data-motion":j,"data-orientation":u.orientation},E,{ref:y,onDismiss:()=>{var m;const b=new Event(G,{bubbles:!0,cancelable:!0});(m=N.current)===null||m===void 0||m.dispatchEvent(b)},onFocusOutside:k(e.onFocusOutside,m=>{var b;l();const d=m.target;(b=u.rootNavigationMenu)!==null&&b!==void 0&&b.contains(d)&&m.preventDefault()}),onPointerDownOutside:k(e.onPointerDownOutside,m=>{var b;const d=m.target,$=p().some(S=>{var v;return(v=S.ref.current)===null||v===void 0?void 0:v.contains(d)}),M=u.isRootMenu&&((b=u.viewport)===null||b===void 0?void 0:b.contains(d));($||M||!u.isRootMenu)&&m.preventDefault()}),onKeyDown:k(e.onKeyDown,m=>{const b=m.altKey||m.ctrlKey||m.metaKey;if(m.key==="Tab"&&!b){const M=J(m.currentTarget),S=document.activeElement,v=M.findIndex(Oe=>Oe===S),Q=m.shiftKey?M.slice(0,v).reverse():M.slice(v+1,M.length);if(ne(Q))m.preventDefault();else{var $;($=o.current)===null||$===void 0||$.focus()}}}),onEscapeKeyDown:k(e.onEscapeKeyDown,m=>{c.current=!0})})))}),ye="NavigationMenuViewport",Dt=t.forwardRef((e,r)=>{const{forceMount:a,...i}=e,o=!!U(ye,e.__scopeNavigationMenu).value;return t.createElement(W,{present:a||o},t.createElement(Rt,D({},i,{ref:r})))}),Rt=t.forwardRef((e,r)=>{const{__scopeNavigationMenu:a,children:i,...s}=e,o=U(ye,a),c=z(r,o.onViewportChange),f=vt(K,e.__scopeNavigationMenu),[l,E]=t.useState(null),[u,N]=t.useState(null),y=l?(l==null?void 0:l.width)+"px":void 0,x=l?(l==null?void 0:l.height)+"px":void 0,g=!!o.value,p=g?o.value:o.previousValue;return Z(u,()=>{u&&E({width:u.offsetWidth,height:u.offsetHeight})}),t.createElement(_.div,D({"data-state":re(g),"data-orientation":o.orientation},s,{ref:c,style:{pointerEvents:!g&&o.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":y,"--radix-navigation-menu-viewport-height":x,...s.style},onPointerEnter:k(e.onPointerEnter,o.onContentEnter),onPointerLeave:k(e.onPointerLeave,Y(o.onContentLeave))}),Array.from(f.items).map(([T,{ref:j,forceMount:m,...b}])=>{const d=p===T;return t.createElement(W,{key:T,present:m||d},t.createElement(Ee,D({},b,{ref:Xe(j,$=>{d&&$&&N($)})})))}))}),Vt="FocusGroup",Te=t.forwardRef((e,r)=>{const{__scopeNavigationMenu:a,...i}=e,s=U(Vt,a);return t.createElement(X.Provider,{scope:a},t.createElement(X.Slot,{scope:a},t.createElement(_.div,D({dir:s.dir},i,{ref:r}))))}),ce=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],Mt="FocusGroupItem",we=t.forwardRef((e,r)=>{const{__scopeNavigationMenu:a,...i}=e,s=dt(a),o=U(Mt,a);return t.createElement(X.ItemSlot,{scope:a},t.createElement(_.button,D({},i,{ref:r,onKeyDown:k(e.onKeyDown,c=>{if(["Home","End",...ce].includes(c.key)){let l=s().map(N=>N.ref.current);if([o.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(c.key)&&l.reverse(),ce.includes(c.key)){const N=l.indexOf(c.currentTarget);l=l.slice(N+1)}setTimeout(()=>ne(l)),c.preventDefault()}})})))});function J(e){const r=[],a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const s=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||s?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;a.nextNode();)r.push(a.currentNode);return r}function ne(e){const r=document.activeElement;return e.some(a=>a===r?!0:(a.focus(),document.activeElement!==r))}function Ut(e){return e.forEach(r=>{r.dataset.tabindex=r.getAttribute("tabindex")||"",r.setAttribute("tabindex","-1")}),()=>{e.forEach(r=>{const a=r.dataset.tabindex;r.setAttribute("tabindex",a)})}}function Z(e,r){const a=A(r);q(()=>{let i=0;if(e){const s=new ResizeObserver(()=>{cancelAnimationFrame(i),i=window.requestAnimationFrame(a)});return s.observe(e),()=>{window.cancelAnimationFrame(i),s.unobserve(e)}}},[e,a])}function re(e){return e?"open":"closed"}function Pe(e,r){return`${e}-trigger-${r}`}function Ce(e,r){return`${e}-content-${r}`}function Y(e){return r=>r.pointerType==="mouse"?e(r):void 0}const ke=pt,De=xt,_t=Et,Re=yt,jt=Tt,Ve=wt,Me=Ct,Ue=Dt,_e=t.forwardRef(({className:e,children:r,...a},i)=>n.jsxDEV(ke,{ref:i,className:V("relative","z-10","flex","flex-1","items-center","justify-center",'data-[orientation="vertical"]:block',e),...a,children:r},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/navigation-menu.tsx",lineNumber:12,columnNumber:3},void 0));_e.displayName=ke.displayName;const je=t.forwardRef(({className:e,...r},a)=>n.jsxDEV(De,{ref:a,className:V("group","flex","flex-1","list-none","items-center","justify-center","space-x-1",'data-[orientation="vertical"]:block','data-[orientation="vertical"]:space-x-0','[&[data-orientation="vertical"]_.nav-content]:static','[&[data-orientation="vertical"]_.nav-content]:animate-none',e),...r},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/navigation-menu.tsx",lineNumber:36,columnNumber:3},void 0));je.displayName=De.displayName;const O=t.forwardRef(({children:e,className:r,...a},i)=>n.jsxDEV(_t,{ref:i,className:V("group/menu-item","relative","flex","items-center",'group-data-[orientation="vertical"]:block',r),...a,children:e},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/navigation-menu.tsx",lineNumber:61,columnNumber:3},void 0)),C=me(["group/menu-link","flex","h-9","text-primary","no-underline","w-full","truncate","items-center","justify-between","rounded-md","bg-background","px-4","py-2","text-sm","font-medium","transition-colors","hover:bg-accent","hover:text-accent-foreground","focus:bg-accent","focus:text-accent-foreground","focus:outline-none","disabled:pointer-events-none","disabled:opacity-50","data-[active]:bg-accent/50","data-[state=open]:bg-accent/50"]),L=t.forwardRef(({className:e,children:r,...a},i)=>n.jsxDEV(Re,{ref:i,className:V(C(),"group",e),...a,children:[r," ",n.jsxDEV(ue,{className:"relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180","aria-hidden":"true"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/navigation-menu.tsx",lineNumber:115,columnNumber:5},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/navigation-menu.tsx",lineNumber:109,columnNumber:3},void 0));L.displayName=Re.displayName;const F=t.forwardRef(({className:e,...r},a)=>n.jsxDEV(Me,{ref:a,className:V("nav-content","absolute","shadow","mt-2","left-0","top-full","w-full","data-[motion^=from-]:animate-in","data-[motion^=to-]:animate-out","data-[motion^=from-]:fade-in","data-[motion^=to-]:fade-out","data-[motion=from-end]:slide-in-from-right-52","data-[motion=from-start]:slide-in-from-left-52","data-[motion=to-end]:slide-out-to-right-52","data-[motion=to-start]:slide-out-to-left-52","md:absolute","md:w-auto",e),...r},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/navigation-menu.tsx",lineNumber:127,columnNumber:3},void 0));F.displayName=Me.displayName;const R=jt,St=t.forwardRef(({className:e,...r},a)=>n.jsxDEV("div",{className:V("absolute left-0 top-full flex justify-center"),children:n.jsxDEV(Ue,{className:V("origin-top-center","relative","mt-1.5","h-[var(--radix-navigation-menu-viewport-height)]","w-full","overflow-hidden","rounded-md","border","bg-popover","text-popover-foreground","shadow","data-[state=open]:animate-in","data-[state=closed]:animate-out","data-[state=closed]:zoom-out-95","data-[state=open]:zoom-in-90","md:w-[var(--radix-navigation-menu-viewport-width)]",e),ref:a,...r},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/navigation-menu.tsx",lineNumber:161,columnNumber:5},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/navigation-menu.tsx",lineNumber:160,columnNumber:3},void 0));St.displayName=Ue.displayName;const It=t.forwardRef(({className:e,...r},a)=>n.jsxDEV(Ve,{ref:a,className:V("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",e),...r,children:n.jsxDEV("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/navigation-menu.tsx",lineNumber:201,columnNumber:5},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/navigation-menu.tsx",lineNumber:193,columnNumber:3},void 0));It.displayName=Ve.displayName;function le({className:e,orientation:r="horizontal"}){return n.jsxDEV(_e,{className:V(e),orientation:r,children:n.jsxDEV(je,{children:[n.jsxDEV(H,{type:"admin",children:n.jsxDEV(O,{children:[n.jsxDEV(L,{children:"Statistics"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:26,columnNumber:13},this),n.jsxDEV(F,{children:[n.jsxDEV(R,{className:C(),asChild:!0,children:n.jsxDEV(w,{to:P.STATISTICS_CUSTOMER_HISTORY,children:"Customer history by date"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:32,columnNumber:17},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:28,columnNumber:15},this),n.jsxDEV(R,{className:C(),asChild:!0,children:n.jsxDEV(w,{to:P.STATISTICS_BANK_PAYMENT,children:"Bank payment by date"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:41,columnNumber:17},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:37,columnNumber:15},this),n.jsxDEV(R,{className:C(),asChild:!0,children:n.jsxDEV(w,{to:P.STATISTICS_ALL_POS_USED,children:"All POS used"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:50,columnNumber:17},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:46,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:27,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:25,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:24,columnNumber:9},this),n.jsxDEV(H,{type:"admin",children:n.jsxDEV(O,{children:n.jsxDEV(R,{className:C(),asChild:!0,children:n.jsxDEV(w,{to:P.USERS,children:"Users"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:64,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:60,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:59,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:58,columnNumber:9},this),n.jsxDEV(O,{children:[n.jsxDEV(L,{children:"POS"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:70,columnNumber:11},this),n.jsxDEV(F,{children:[n.jsxDEV(R,{className:C(),asChild:!0,children:n.jsxDEV(w,{to:P.POS,children:"List of POS"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:76,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:72,columnNumber:13},this),n.jsxDEV(H,{type:"admin",children:n.jsxDEV(R,{className:C(),asChild:!0,children:n.jsxDEV(w,{to:P.POS_CREATE,children:"Create new POS"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:84,columnNumber:17},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:80,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:79,columnNumber:13},this),n.jsxDEV(R,{className:C(),asChild:!0,children:n.jsxDEV(w,{to:P.POS_ERRORS,children:"POS Errors"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:92,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:88,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:71,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:69,columnNumber:9},this),n.jsxDEV(O,{children:[n.jsxDEV(L,{children:"Customers"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:98,columnNumber:11},this),n.jsxDEV(F,{children:[n.jsxDEV(R,{className:C(),asChild:!0,children:n.jsxDEV(w,{to:P.CUSTOMERS,children:"Customer infos"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:104,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:100,columnNumber:13},this),n.jsxDEV(R,{className:C(),asChild:!0,children:n.jsxDEV(w,{to:P.CUSTOMER_HISTORIES,children:"Customer histories"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:111,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:107,columnNumber:13},this),n.jsxDEV(R,{className:C(),asChild:!0,children:n.jsxDEV(w,{to:P.CUSTOMER_CC,children:"Customer credit cards"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:120,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:116,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:99,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:97,columnNumber:9},this),n.jsxDEV(O,{children:n.jsxDEV(R,{className:C(),asChild:!0,children:n.jsxDEV(w,{to:P.LEVEL_RATES,children:"Level Rates"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:127,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:126,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:125,columnNumber:9},this),n.jsxDEV(H,{type:"admin",children:n.jsxDEV(O,{children:n.jsxDEV(R,{className:C(),asChild:!0,children:n.jsxDEV(w,{to:P.BANK_PAYMENTS,children:"Bank Payments"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:137,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:133,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:132,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:131,columnNumber:9},this),n.jsxDEV(O,{children:[n.jsxDEV(L,{children:"Tools"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:143,columnNumber:11},this),n.jsxDEV(F,{children:[n.jsxDEV(R,{className:C(),asChild:!0,children:n.jsxDEV(w,{to:P.TOOLS_VN_BANKS,children:"VN Banks"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:149,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:145,columnNumber:13},this),n.jsxDEV(R,{className:C(),asChild:!0,children:n.jsxDEV(w,{to:P.TOOLS_CACULATORS,children:"Calculators"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:155,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:151,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:144,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:142,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:23,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/features/main-nav.feature.tsx",lineNumber:22,columnNumber:5},this)}const Ot=ot,At=ct,Lt=st,Se=t.forwardRef(({className:e,...r},a)=>n.jsxDEV(ve,{className:V("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...r,ref:a},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/sheet.tsx",lineNumber:20,columnNumber:3},void 0));Se.displayName=ve.displayName;const Ft=me("fixed z-50 gap-4 bg-background px-2 py-10 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),Ie=t.forwardRef(({side:e="right",className:r,children:a,...i},s)=>n.jsxDEV(Lt,{children:[n.jsxDEV(Se,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/sheet.tsx",lineNumber:59,columnNumber:5},void 0),n.jsxDEV(pe,{ref:s,className:V(Ft({side:e}),r),...i,children:[a,n.jsxDEV(it,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[n.jsxDEV(Qe,{className:"h-4 w-4"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/sheet.tsx",lineNumber:67,columnNumber:9},void 0),n.jsxDEV("span",{className:"sr-only",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/sheet.tsx",lineNumber:68,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/sheet.tsx",lineNumber:66,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/sheet.tsx",lineNumber:60,columnNumber:5},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/sheet.tsx",lineNumber:58,columnNumber:3},void 0));Ie.displayName=pe.displayName;const Kt=t.forwardRef(({className:e,...r},a)=>n.jsxDEV(Ne,{ref:a,className:V("text-lg font-semibold text-foreground",e),...r},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/sheet.tsx",lineNumber:107,columnNumber:3},void 0));Kt.displayName=Ne.displayName;const zt=t.forwardRef(({className:e,...r},a)=>n.jsxDEV(ge,{ref:a,className:V("text-sm text-muted-foreground",e),...r},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/sheet.tsx",lineNumber:119,columnNumber:3},void 0));zt.displayName=ge.displayName;function Bt(){const[e,r]=t.useState(!1),a=Le();return t.useEffect(()=>{r(!1)},[a]),n.jsxDEV("header",{className:"sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6",children:[n.jsxDEV("nav",{className:"hidden flex-col gap-6 text-lg font-medium lg:flex lg:flex-row lg:items-center md:gap-5 md:text-sm lg:gap-6",children:n.jsxDEV(le,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/sections/header.section.tsx",lineNumber:20,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/sections/header.section.tsx",lineNumber:19,columnNumber:7},this),n.jsxDEV(Ot,{open:e,onOpenChange:r,children:[n.jsxDEV(At,{asChild:!0,children:n.jsxDEV(Je,{variant:"outline",size:"icon",className:"shrink-0 lg:hidden",children:[n.jsxDEV(qe,{className:"h-5 w-5"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/sections/header.section.tsx",lineNumber:25,columnNumber:13},this),n.jsxDEV("span",{className:"sr-only",children:"Toggle navigation menu"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/sections/header.section.tsx",lineNumber:26,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/sections/header.section.tsx",lineNumber:24,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/sections/header.section.tsx",lineNumber:23,columnNumber:9},this),n.jsxDEV(Ie,{side:"left",children:n.jsxDEV(le,{orientation:"vertical"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/sections/header.section.tsx",lineNumber:30,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/sections/header.section.tsx",lineNumber:29,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/sections/header.section.tsx",lineNumber:22,columnNumber:7},this),n.jsxDEV("div",{className:"flex w-full items-center gap-4 lg:ml-auto md:gap-2 lg:gap-4",children:[n.jsxDEV("div",{className:"flex-1"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/sections/header.section.tsx",lineNumber:34,columnNumber:9},this),n.jsxDEV(lt,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/sections/header.section.tsx",lineNumber:35,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/sections/header.section.tsx",lineNumber:33,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/sections/header.section.tsx",lineNumber:18,columnNumber:5},this)}function Ht({children:e}){return n.jsxDEV("div",{className:"space-y-4",children:[n.jsxDEV(Bt,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/layouts/dashboard.layout.tsx",lineNumber:9,columnNumber:7},this),n.jsxDEV("main",{className:"px-4",children:e},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/layouts/dashboard.layout.tsx",lineNumber:10,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/layouts/dashboard.layout.tsx",lineNumber:8,columnNumber:5},this)}function nn(){const{auth:e,signOut:r,wasTokenExpired:a}=de();return t.useEffect(()=>{const i=Fe.getQueryCache().subscribe(s=>{s.type==="removed"&&s.query.queryKey===Ke.AUTH_INFO&&r()});return()=>i()},[]),t.useEffect(()=>{if(!e||!(e!=null&&e.status))r();else try{a()&&r()}catch{r()}},[e]),e?n.jsxDEV(Ht,{children:n.jsxDEV(ze,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/routes/root.route.tsx",lineNumber:42,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/routes/root.route.tsx",lineNumber:41,columnNumber:5},this):n.jsxDEV(n.Fragment,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/routes/root.route.tsx",lineNumber:38,columnNumber:21},this)}export{nn as default};
