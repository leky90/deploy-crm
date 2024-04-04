import{c as H,r as $,i as wt}from"./index-B_ytu5vn.js";import{$ as Ve,c as xt,f as Me}from"./Combination-CkrLVZbR.js";import{$ as de,h as _e,a as ve,_ as be}from"./button-CGE2OTtm.js";import{a as yt}from"./index-C7tRwe3w.js";function Cn(e){const t=e+"CollectionProvider",[n,o]=Ve(t),[r,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=f=>{const{scope:u,children:w}=f,g=H.useRef(null),m=H.useRef(new Map).current;return H.createElement(r,{scope:u,itemMap:m,collectionRef:g},w)},l=e+"CollectionSlot",c=H.forwardRef((f,u)=>{const{scope:w,children:g}=f,m=i(l,w),x=de(u,m.collectionRef);return H.createElement(_e,{ref:x},g)}),a=e+"CollectionItemSlot",p="data-radix-collection-item",d=H.forwardRef((f,u)=>{const{scope:w,children:g,...m}=f,x=H.useRef(null),v=de(u,x),y=i(a,w);return H.useEffect(()=>(y.itemMap.set(x,{ref:x,...m}),()=>void y.itemMap.delete(x))),H.createElement(_e,{[p]:"",ref:v},g)});function h(f){const u=i(e+"CollectionConsumer",f);return H.useCallback(()=>{const g=u.collectionRef.current;if(!g)return[];const m=Array.from(g.querySelectorAll(`[${p}]`));return Array.from(u.itemMap.values()).sort((y,b)=>m.indexOf(y.ref.current)-m.indexOf(b.ref.current))},[u.collectionRef,u.itemMap])}return[{Provider:s,Slot:c,ItemSlot:d},h,o]}const vt=$.createContext(void 0);function On(e){const t=$.useContext(vt);return e||t||"ltr"}const bt=["top","right","bottom","left"],j=Math.min,_=Math.max,ue=Math.round,ae=Math.floor,q=e=>({x:e,y:e}),$t={left:"right",right:"left",bottom:"top",top:"bottom"},At={start:"end",end:"start"};function xe(e,t,n){return _(e,j(t,n))}function B(e,t){return typeof e=="function"?e(t):e}function V(e){return e.split("-")[0]}function Q(e){return e.split("-")[1]}function $e(e){return e==="x"?"y":"x"}function Ae(e){return e==="y"?"height":"width"}function ee(e){return["top","bottom"].includes(V(e))?"y":"x"}function Re(e){return $e(ee(e))}function Rt(e,t,n){n===void 0&&(n=!1);const o=Q(e),r=Re(e),i=Ae(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=pe(s)),[s,pe(s)]}function Ct(e){const t=pe(e);return[ye(e),t,ye(t)]}function ye(e){return e.replace(/start|end/g,t=>At[t])}function Ot(e,t,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?i:s;default:return[]}}function Pt(e,t,n,o){const r=Q(e);let i=Ot(V(e),n==="start",o);return r&&(i=i.map(s=>s+"-"+r),t&&(i=i.concat(i.map(ye)))),i}function pe(e){return e.replace(/left|right|bottom|top/g,t=>$t[t])}function Et(e){return{top:0,right:0,bottom:0,left:0,...e}}function ze(e){return typeof e!="number"?Et(e):{top:e,right:e,bottom:e,left:e}}function me(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Te(e,t,n){let{reference:o,floating:r}=e;const i=ee(t),s=Re(t),l=Ae(s),c=V(t),a=i==="y",p=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,h=o[l]/2-r[l]/2;let f;switch(c){case"top":f={x:p,y:o.y-r.height};break;case"bottom":f={x:p,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:d};break;case"left":f={x:o.x-r.width,y:d};break;default:f={x:o.x,y:o.y}}switch(Q(t)){case"start":f[s]-=h*(n&&a?-1:1);break;case"end":f[s]+=h*(n&&a?-1:1);break}return f}const St=async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,l=i.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(t));let a=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:p,y:d}=Te(a,o,c),h=o,f={},u=0;for(let w=0;w<l.length;w++){const{name:g,fn:m}=l[w],{x,y:v,data:y,reset:b}=await m({x:p,y:d,initialPlacement:o,placement:h,strategy:r,middlewareData:f,rects:a,platform:s,elements:{reference:e,floating:t}});p=x??p,d=v??d,f={...f,[g]:{...f[g],...y}},b&&u<=50&&(u++,typeof b=="object"&&(b.placement&&(h=b.placement),b.rects&&(a=b.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):b.rects),{x:p,y:d}=Te(a,h,c)),w=-1)}return{x:p,y:d,placement:h,strategy:r,middlewareData:f}};async function ne(e,t){var n;t===void 0&&(t={});const{x:o,y:r,platform:i,rects:s,elements:l,strategy:c}=e,{boundary:a="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:h=!1,padding:f=0}=B(t,e),u=ze(f),g=l[h?d==="floating"?"reference":"floating":d],m=me(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(g)))==null||n?g:g.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:a,rootBoundary:p,strategy:c})),x=d==="floating"?{...s.floating,x:o,y:r}:s.reference,v=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),y=await(i.isElement==null?void 0:i.isElement(v))?await(i.getScale==null?void 0:i.getScale(v))||{x:1,y:1}:{x:1,y:1},b=me(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:v,strategy:c}):x);return{top:(m.top-b.top+u.top)/y.y,bottom:(b.bottom-m.bottom+u.bottom)/y.y,left:(m.left-b.left+u.left)/y.x,right:(b.right-m.right+u.right)/y.x}}const Dt=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:r,rects:i,platform:s,elements:l,middlewareData:c}=t,{element:a,padding:p=0}=B(e,t)||{};if(a==null)return{};const d=ze(p),h={x:n,y:o},f=Re(r),u=Ae(f),w=await s.getDimensions(a),g=f==="y",m=g?"top":"left",x=g?"bottom":"right",v=g?"clientHeight":"clientWidth",y=i.reference[u]+i.reference[f]-h[f]-i.floating[u],b=h[f]-i.reference[f],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let C=A?A[v]:0;(!C||!await(s.isElement==null?void 0:s.isElement(A)))&&(C=l.floating[v]||i.floating[u]);const S=y/2-b/2,M=C/2-w[u]/2-1,k=j(d[m],M),N=j(d[x],M),P=k,W=C-w[u]-N,O=C/2-w[u]/2+S,E=xe(P,O,W),D=!c.arrow&&Q(r)!=null&&O!==E&&i.reference[u]/2-(O<P?k:N)-w[u]/2<0,R=D?O<P?O-P:O-W:0;return{[f]:h[f]+R,data:{[f]:E,centerOffset:O-E-R,...D&&{alignmentOffset:R}},reset:D}}}),Mt=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:r,middlewareData:i,rects:s,initialPlacement:l,platform:c,elements:a}=t,{mainAxis:p=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:u="none",flipAlignment:w=!0,...g}=B(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const m=V(r),x=V(l)===l,v=await(c.isRTL==null?void 0:c.isRTL(a.floating)),y=h||(x||!w?[pe(l)]:Ct(l));!h&&u!=="none"&&y.push(...Pt(l,w,u,v));const b=[l,...y],A=await ne(t,g),C=[];let S=((o=i.flip)==null?void 0:o.overflows)||[];if(p&&C.push(A[m]),d){const P=Rt(r,s,v);C.push(A[P[0]],A[P[1]])}if(S=[...S,{placement:r,overflows:C}],!C.every(P=>P<=0)){var M,k;const P=(((M=i.flip)==null?void 0:M.index)||0)+1,W=b[P];if(W)return{data:{index:P,overflows:S},reset:{placement:W}};let O=(k=S.filter(E=>E.overflows[0]<=0).sort((E,D)=>E.overflows[1]-D.overflows[1])[0])==null?void 0:k.placement;if(!O)switch(f){case"bestFit":{var N;const E=(N=S.map(D=>[D.placement,D.overflows.filter(R=>R>0).reduce((R,X)=>R+X,0)]).sort((D,R)=>D[1]-R[1])[0])==null?void 0:N[0];E&&(O=E);break}case"initialPlacement":O=l;break}if(r!==O)return{reset:{placement:O}}}return{}}}};function Le(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function ke(e){return bt.some(t=>e[t]>=0)}const _t=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:o="referenceHidden",...r}=B(e,t);switch(o){case"referenceHidden":{const i=await ne(t,{...r,elementContext:"reference"}),s=Le(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:ke(s)}}}case"escaped":{const i=await ne(t,{...r,altBoundary:!0}),s=Le(i,n.floating);return{data:{escapedOffsets:s,escaped:ke(s)}}}default:return{}}}}};async function Tt(e,t){const{placement:n,platform:o,elements:r}=e,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=V(n),l=Q(n),c=ee(n)==="y",a=["left","top"].includes(s)?-1:1,p=i&&c?-1:1,d=B(t,e);let{mainAxis:h,crossAxis:f,alignmentAxis:u}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof u=="number"&&(f=l==="end"?u*-1:u),c?{x:f*p,y:h*a}:{x:h*a,y:f*p}}const Lt=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:r,y:i,placement:s,middlewareData:l}=t,c=await Tt(t,e);return s===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:r+c.x,y:i+c.y,data:{...c,placement:s}}}}},kt=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:l={fn:g=>{let{x:m,y:x}=g;return{x:m,y:x}}},...c}=B(e,t),a={x:n,y:o},p=await ne(t,c),d=ee(V(r)),h=$e(d);let f=a[h],u=a[d];if(i){const g=h==="y"?"top":"left",m=h==="y"?"bottom":"right",x=f+p[g],v=f-p[m];f=xe(x,f,v)}if(s){const g=d==="y"?"top":"left",m=d==="y"?"bottom":"right",x=u+p[g],v=u-p[m];u=xe(x,u,v)}const w=l.fn({...t,[h]:f,[d]:u});return{...w,data:{x:w.x-n,y:w.y-o}}}}},Nt=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:o,placement:r,rects:i,middlewareData:s}=t,{offset:l=0,mainAxis:c=!0,crossAxis:a=!0}=B(e,t),p={x:n,y:o},d=ee(r),h=$e(d);let f=p[h],u=p[d];const w=B(l,t),g=typeof w=="number"?{mainAxis:w,crossAxis:0}:{mainAxis:0,crossAxis:0,...w};if(c){const v=h==="y"?"height":"width",y=i.reference[h]-i.floating[v]+g.mainAxis,b=i.reference[h]+i.reference[v]-g.mainAxis;f<y?f=y:f>b&&(f=b)}if(a){var m,x;const v=h==="y"?"width":"height",y=["top","left"].includes(V(r)),b=i.reference[d]-i.floating[v]+(y&&((m=s.offset)==null?void 0:m[d])||0)+(y?0:g.crossAxis),A=i.reference[d]+i.reference[v]+(y?0:((x=s.offset)==null?void 0:x[d])||0)-(y?g.crossAxis:0);u<b?u=b:u>A&&(u=A)}return{[h]:f,[d]:u}}}},Wt=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:o,platform:r,elements:i}=t,{apply:s=()=>{},...l}=B(e,t),c=await ne(t,l),a=V(n),p=Q(n),d=ee(n)==="y",{width:h,height:f}=o.floating;let u,w;a==="top"||a==="bottom"?(u=a,w=p===(await(r.isRTL==null?void 0:r.isRTL(i.floating))?"start":"end")?"left":"right"):(w=a,u=p==="end"?"top":"bottom");const g=f-c[u],m=h-c[w],x=!t.middlewareData.shift;let v=g,y=m;if(d){const A=h-c.left-c.right;y=p||x?j(m,A):A}else{const A=f-c.top-c.bottom;v=p||x?j(g,A):A}if(x&&!p){const A=_(c.left,0),C=_(c.right,0),S=_(c.top,0),M=_(c.bottom,0);d?y=h-2*(A!==0||C!==0?A+C:_(c.left,c.right)):v=f-2*(S!==0||M!==0?S+M:_(c.top,c.bottom))}await s({...t,availableWidth:y,availableHeight:v});const b=await r.getDimensions(i.floating);return h!==b.width||f!==b.height?{reset:{rects:!0}}:{}}}};function U(e){return Ye(e)?(e.nodeName||"").toLowerCase():"#document"}function T(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Y(e){var t;return(t=(Ye(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ye(e){return e instanceof Node||e instanceof T(e).Node}function z(e){return e instanceof Element||e instanceof T(e).Element}function F(e){return e instanceof HTMLElement||e instanceof T(e).HTMLElement}function Ne(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof T(e).ShadowRoot}function re(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=L(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function Ht(e){return["table","td","th"].includes(U(e))}function Ce(e){const t=Oe(),n=L(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Ft(e){let t=J(e);for(;F(t)&&!ge(t);){if(Ce(t))return t;t=J(t)}return null}function Oe(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ge(e){return["html","body","#document"].includes(U(e))}function L(e){return T(e).getComputedStyle(e)}function we(e){return z(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function J(e){if(U(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ne(e)&&e.host||Y(e);return Ne(t)?t.host:t}function Xe(e){const t=J(e);return ge(t)?e.ownerDocument?e.ownerDocument.body:e.body:F(t)&&re(t)?t:Xe(t)}function oe(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=Xe(e),i=r===((o=e.ownerDocument)==null?void 0:o.body),s=T(r);return i?t.concat(s,s.visualViewport||[],re(r)?r:[],s.frameElement&&n?oe(s.frameElement):[]):t.concat(r,oe(r,[],n))}function je(e){const t=L(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=F(e),i=r?e.offsetWidth:n,s=r?e.offsetHeight:o,l=ue(n)!==i||ue(o)!==s;return l&&(n=i,o=s),{width:n,height:o,$:l}}function Pe(e){return z(e)?e:e.contextElement}function G(e){const t=Pe(e);if(!F(t))return q(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:i}=je(t);let s=(i?ue(n.width):n.width)/o,l=(i?ue(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const It=q(0);function qe(e){const t=T(e);return!Oe()||!t.visualViewport?It:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Bt(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==T(e)?!1:t}function Z(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=Pe(e);let s=q(1);t&&(o?z(o)&&(s=G(o)):s=G(e));const l=Bt(i,n,o)?qe(i):q(0);let c=(r.left+l.x)/s.x,a=(r.top+l.y)/s.y,p=r.width/s.x,d=r.height/s.y;if(i){const h=T(i),f=o&&z(o)?T(o):o;let u=h,w=u.frameElement;for(;w&&o&&f!==u;){const g=G(w),m=w.getBoundingClientRect(),x=L(w),v=m.left+(w.clientLeft+parseFloat(x.paddingLeft))*g.x,y=m.top+(w.clientTop+parseFloat(x.paddingTop))*g.y;c*=g.x,a*=g.y,p*=g.x,d*=g.y,c+=v,a+=y,u=T(w),w=u.frameElement}}return me({width:p,height:d,x:c,y:a})}const Vt=[":popover-open",":modal"];function Ue(e){return Vt.some(t=>{try{return e.matches(t)}catch{return!1}})}function zt(e){let{elements:t,rect:n,offsetParent:o,strategy:r}=e;const i=r==="fixed",s=Y(o),l=t?Ue(t.floating):!1;if(o===s||l&&i)return n;let c={scrollLeft:0,scrollTop:0},a=q(1);const p=q(0),d=F(o);if((d||!d&&!i)&&((U(o)!=="body"||re(s))&&(c=we(o)),F(o))){const h=Z(o);a=G(o),p.x=h.x+o.clientLeft,p.y=h.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-c.scrollLeft*a.x+p.x,y:n.y*a.y-c.scrollTop*a.y+p.y}}function Yt(e){return Array.from(e.getClientRects())}function Ze(e){return Z(Y(e)).left+we(e).scrollLeft}function Xt(e){const t=Y(e),n=we(e),o=e.ownerDocument.body,r=_(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=_(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Ze(e);const l=-n.scrollTop;return L(o).direction==="rtl"&&(s+=_(t.clientWidth,o.clientWidth)-r),{width:r,height:i,x:s,y:l}}function jt(e,t){const n=T(e),o=Y(e),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,l=0,c=0;if(r){i=r.width,s=r.height;const a=Oe();(!a||a&&t==="fixed")&&(l=r.offsetLeft,c=r.offsetTop)}return{width:i,height:s,x:l,y:c}}function qt(e,t){const n=Z(e,!0,t==="fixed"),o=n.top+e.clientTop,r=n.left+e.clientLeft,i=F(e)?G(e):q(1),s=e.clientWidth*i.x,l=e.clientHeight*i.y,c=r*i.x,a=o*i.y;return{width:s,height:l,x:c,y:a}}function We(e,t,n){let o;if(t==="viewport")o=jt(e,n);else if(t==="document")o=Xt(Y(e));else if(z(t))o=qt(t,n);else{const r=qe(e);o={...t,x:t.x-r.x,y:t.y-r.y}}return me(o)}function Ke(e,t){const n=J(e);return n===t||!z(n)||ge(n)?!1:L(n).position==="fixed"||Ke(n,t)}function Ut(e,t){const n=t.get(e);if(n)return n;let o=oe(e,[],!1).filter(l=>z(l)&&U(l)!=="body"),r=null;const i=L(e).position==="fixed";let s=i?J(e):e;for(;z(s)&&!ge(s);){const l=L(s),c=Ce(s);!c&&l.position==="fixed"&&(r=null),(i?!c&&!r:!c&&l.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||re(s)&&!c&&Ke(e,s))?o=o.filter(p=>p!==s):r=l,s=J(s)}return t.set(e,o),o}function Zt(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const s=[...n==="clippingAncestors"?Ut(t,this._c):[].concat(n),o],l=s[0],c=s.reduce((a,p)=>{const d=We(t,p,r);return a.top=_(d.top,a.top),a.right=j(d.right,a.right),a.bottom=j(d.bottom,a.bottom),a.left=_(d.left,a.left),a},We(t,l,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Kt(e){const{width:t,height:n}=je(e);return{width:t,height:n}}function Gt(e,t,n){const o=F(t),r=Y(t),i=n==="fixed",s=Z(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const c=q(0);if(o||!o&&!i)if((U(t)!=="body"||re(r))&&(l=we(t)),o){const d=Z(t,!0,i,t);c.x=d.x+t.clientLeft,c.y=d.y+t.clientTop}else r&&(c.x=Ze(r));const a=s.left+l.scrollLeft-c.x,p=s.top+l.scrollTop-c.y;return{x:a,y:p,width:s.width,height:s.height}}function He(e,t){return!F(e)||L(e).position==="fixed"?null:t?t(e):e.offsetParent}function Ge(e,t){const n=T(e);if(!F(e)||Ue(e))return n;let o=He(e,t);for(;o&&Ht(o)&&L(o).position==="static";)o=He(o,t);return o&&(U(o)==="html"||U(o)==="body"&&L(o).position==="static"&&!Ce(o))?n:o||Ft(e)||n}const Jt=async function(e){const t=this.getOffsetParent||Ge,n=this.getDimensions;return{reference:Gt(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await n(e.floating)}}};function Qt(e){return L(e).direction==="rtl"}const en={convertOffsetParentRelativeRectToViewportRelativeRect:zt,getDocumentElement:Y,getClippingRect:Zt,getOffsetParent:Ge,getElementRects:Jt,getClientRects:Yt,getDimensions:Kt,getScale:G,isElement:z,isRTL:Qt};function tn(e,t){let n=null,o;const r=Y(e);function i(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),i();const{left:a,top:p,width:d,height:h}=e.getBoundingClientRect();if(l||t(),!d||!h)return;const f=ae(p),u=ae(r.clientWidth-(a+d)),w=ae(r.clientHeight-(p+h)),g=ae(a),x={rootMargin:-f+"px "+-u+"px "+-w+"px "+-g+"px",threshold:_(0,j(1,c))||1};let v=!0;function y(b){const A=b[0].intersectionRatio;if(A!==c){if(!v)return s();A?s(!1,A):o=setTimeout(()=>{s(!1,1e-7)},100)}v=!1}try{n=new IntersectionObserver(y,{...x,root:r.ownerDocument})}catch{n=new IntersectionObserver(y,x)}n.observe(e)}return s(!0),i}function nn(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=Pe(e),p=r||i?[...a?oe(a):[],...oe(t)]:[];p.forEach(m=>{r&&m.addEventListener("scroll",n,{passive:!0}),i&&m.addEventListener("resize",n)});const d=a&&l?tn(a,n):null;let h=-1,f=null;s&&(f=new ResizeObserver(m=>{let[x]=m;x&&x.target===a&&f&&(f.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var v;(v=f)==null||v.observe(t)})),n()}),a&&!c&&f.observe(a),f.observe(t));let u,w=c?Z(e):null;c&&g();function g(){const m=Z(e);w&&(m.x!==w.x||m.y!==w.y||m.width!==w.width||m.height!==w.height)&&n(),w=m,u=requestAnimationFrame(g)}return n(),()=>{var m;p.forEach(x=>{r&&x.removeEventListener("scroll",n),i&&x.removeEventListener("resize",n)}),d==null||d(),(m=f)==null||m.disconnect(),f=null,c&&cancelAnimationFrame(u)}}const on=kt,rn=Mt,sn=Wt,cn=_t,Fe=Dt,ln=Nt,an=(e,t,n)=>{const o=new Map,r={platform:en,...n},i={...r.platform,_c:o};return St(e,t,{...r,platform:i})},fn=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:o,padding:r}=typeof e=="function"?e(n):e;return o&&t(o)?o.current!=null?Fe({element:o.current,padding:r}).fn(n):{}:o?Fe({element:o,padding:r}).fn(n):{}}}};var fe=typeof document<"u"?$.useLayoutEffect:$.useEffect;function he(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(o=n;o--!==0;)if(!he(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&e.$$typeof)&&!he(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function Je(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ie(e,t){const n=Je(e);return Math.round(t*n)/n}function Be(e){const t=$.useRef(e);return fe(()=>{t.current=e}),t}function dn(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:i,floating:s}={},transform:l=!0,whileElementsMounted:c,open:a}=e,[p,d]=$.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,f]=$.useState(o);he(h,o)||f(o);const[u,w]=$.useState(null),[g,m]=$.useState(null),x=$.useCallback(R=>{R!==A.current&&(A.current=R,w(R))},[]),v=$.useCallback(R=>{R!==C.current&&(C.current=R,m(R))},[]),y=i||u,b=s||g,A=$.useRef(null),C=$.useRef(null),S=$.useRef(p),M=c!=null,k=Be(c),N=Be(r),P=$.useCallback(()=>{if(!A.current||!C.current)return;const R={placement:t,strategy:n,middleware:h};N.current&&(R.platform=N.current),an(A.current,C.current,R).then(X=>{const I={...X,isPositioned:!0};W.current&&!he(S.current,I)&&(S.current=I,wt.flushSync(()=>{d(I)}))})},[h,t,n,N]);fe(()=>{a===!1&&S.current.isPositioned&&(S.current.isPositioned=!1,d(R=>({...R,isPositioned:!1})))},[a]);const W=$.useRef(!1);fe(()=>(W.current=!0,()=>{W.current=!1}),[]),fe(()=>{if(y&&(A.current=y),b&&(C.current=b),y&&b){if(k.current)return k.current(y,b,P);P()}},[y,b,P,k,M]);const O=$.useMemo(()=>({reference:A,floating:C,setReference:x,setFloating:v}),[x,v]),E=$.useMemo(()=>({reference:y,floating:b}),[y,b]),D=$.useMemo(()=>{const R={position:n,left:0,top:0};if(!E.floating)return R;const X=Ie(E.floating,p.x),I=Ie(E.floating,p.y);return l?{...R,transform:"translate("+X+"px, "+I+"px)",...Je(E.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:X,top:I}},[n,l,E.floating,p.x,p.y]);return $.useMemo(()=>({...p,update:P,refs:O,elements:E,floatingStyles:D}),[p,P,O,E,D])}const Qe="Popper",[et,Pn]=Ve(Qe),[un,tt]=et(Qe),pn=e=>{const{__scopePopper:t,children:n}=e,[o,r]=$.useState(null);return $.createElement(un,{scope:t,anchor:o,onAnchorChange:r},n)},mn="PopperAnchor",hn=$.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:o,...r}=e,i=tt(mn,n),s=$.useRef(null),l=de(t,s);return $.useEffect(()=>{i.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:$.createElement(ve.div,be({},r,{ref:l}))}),nt="PopperContent",[gn,En]=et(nt),wn=$.forwardRef((e,t)=>{var n,o,r,i,s,l,c,a;const{__scopePopper:p,side:d="bottom",sideOffset:h=0,align:f="center",alignOffset:u=0,arrowPadding:w=0,avoidCollisions:g=!0,collisionBoundary:m=[],collisionPadding:x=0,sticky:v="partial",hideWhenDetached:y=!1,updatePositionStrategy:b="optimized",onPlaced:A,...C}=e,S=tt(nt,p),[M,k]=$.useState(null),N=de(t,te=>k(te)),[P,W]=$.useState(null),O=yt(P),E=(n=O==null?void 0:O.width)!==null&&n!==void 0?n:0,D=(o=O==null?void 0:O.height)!==null&&o!==void 0?o:0,R=d+(f!=="center"?"-"+f:""),X=typeof x=="number"?x:{top:0,right:0,bottom:0,left:0,...x},I=Array.isArray(m)?m:[m],rt=I.length>0,ie={padding:X,boundary:I.filter(xn),altBoundary:rt},{refs:it,floatingStyles:Ee,placement:st,isPositioned:se,middlewareData:K}=dn({strategy:"fixed",placement:R,whileElementsMounted:(...te)=>nn(...te,{animationFrame:b==="always"}),elements:{reference:S.anchor},middleware:[Lt({mainAxis:h+D,alignmentAxis:u}),g&&on({mainAxis:!0,crossAxis:!1,limiter:v==="partial"?ln():void 0,...ie}),g&&rn({...ie}),sn({...ie,apply:({elements:te,rects:De,availableWidth:pt,availableHeight:mt})=>{const{width:ht,height:gt}=De.reference,le=te.floating.style;le.setProperty("--radix-popper-available-width",`${pt}px`),le.setProperty("--radix-popper-available-height",`${mt}px`),le.setProperty("--radix-popper-anchor-width",`${ht}px`),le.setProperty("--radix-popper-anchor-height",`${gt}px`)}}),P&&fn({element:P,padding:w}),yn({arrowWidth:E,arrowHeight:D}),y&&cn({strategy:"referenceHidden",...ie})]}),[Se,ct]=ot(st),ce=xt(A);Me(()=>{se&&(ce==null||ce())},[se,ce]);const lt=(r=K.arrow)===null||r===void 0?void 0:r.x,at=(i=K.arrow)===null||i===void 0?void 0:i.y,ft=((s=K.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[dt,ut]=$.useState();return Me(()=>{M&&ut(window.getComputedStyle(M).zIndex)},[M]),$.createElement("div",{ref:it.setFloating,"data-radix-popper-content-wrapper":"",style:{...Ee,transform:se?Ee.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:dt,"--radix-popper-transform-origin":[(l=K.transformOrigin)===null||l===void 0?void 0:l.x,(c=K.transformOrigin)===null||c===void 0?void 0:c.y].join(" ")},dir:e.dir},$.createElement(gn,{scope:p,placedSide:Se,onArrowChange:W,arrowX:lt,arrowY:at,shouldHideArrow:ft},$.createElement(ve.div,be({"data-side":Se,"data-align":ct},C,{ref:N,style:{...C.style,animation:se?void 0:"none",opacity:(a=K.hide)!==null&&a!==void 0&&a.referenceHidden?0:void 0}}))))});function xn(e){return e!==null}const yn=e=>({name:"transformOrigin",options:e,fn(t){var n,o,r,i,s;const{placement:l,rects:c,middlewareData:a}=t,d=((n=a.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,h=d?0:e.arrowWidth,f=d?0:e.arrowHeight,[u,w]=ot(l),g={start:"0%",center:"50%",end:"100%"}[w],m=((o=(r=a.arrow)===null||r===void 0?void 0:r.x)!==null&&o!==void 0?o:0)+h/2,x=((i=(s=a.arrow)===null||s===void 0?void 0:s.y)!==null&&i!==void 0?i:0)+f/2;let v="",y="";return u==="bottom"?(v=d?g:`${m}px`,y=`${-f}px`):u==="top"?(v=d?g:`${m}px`,y=`${c.floating.height+f}px`):u==="right"?(v=`${-f}px`,y=d?g:`${x}px`):u==="left"&&(v=`${c.floating.width+f}px`,y=d?g:`${x}px`),{data:{x:v,y}}}});function ot(e){const[t,n="center"]=e.split("-");return[t,n]}const Sn=pn,Dn=hn,Mn=wn,vn=$.forwardRef((e,t)=>$.createElement(ve.span,be({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),_n=vn;export{Cn as $,On as a,_n as b,Pn as c,Mn as d,Sn as e,Dn as f,vn as g};
