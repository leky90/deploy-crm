import{r as e,j as x}from"./index-iY8wkAMF.js";import{_ as p,$ as h,g as D,a as N,d as I}from"./index-Bi7vddj2.js";import{$ as M,e as C,h as k,i as y,j as T,d as m,k as S,l as j,g as K,a as z,b as U}from"./Combination-Dlom6zUs.js";import{e as E,f as V,g as G,h as L}from"./index-Dax93bta.js";const O="Popover",[_,ie]=M(O,[E]),P=E(),[H,l]=_(O),Z=o=>{const{__scopePopover:s,children:a,open:d,defaultOpen:c,onOpenChange:t,modal:r=!1}=o,n=P(s),i=e.useRef(null),[u,b]=e.useState(!1),[v=!1,f]=z({prop:d,defaultProp:c,onChange:t});return e.createElement(G,n,e.createElement(H,{scope:s,contentId:U(),triggerRef:i,open:v,onOpenChange:f,onOpenToggle:e.useCallback(()=>f(g=>!g),[f]),hasCustomAnchor:u,onCustomAnchorAdd:e.useCallback(()=>b(!0),[]),onCustomAnchorRemove:e.useCallback(()=>b(!1),[]),modal:r},a))},q="PopoverTrigger",B=e.forwardRef((o,s)=>{const{__scopePopover:a,...d}=o,c=l(q,a),t=P(a),r=h(s,c.triggerRef),n=e.createElement(N.button,p({type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":w(c.open)},d,{ref:r,onClick:m(o.onClick,c.onOpenToggle)}));return c.hasCustomAnchor?n:e.createElement(L,p({asChild:!0},t),n)}),R="PopoverPortal",[J,Q]=_(R,{forceMount:void 0}),W=o=>{const{__scopePopover:s,forceMount:a,children:d,container:c}=o,t=l(R,s);return e.createElement(J,{scope:s,forceMount:a},e.createElement(C,{present:a||t.open},e.createElement(k,{asChild:!0,container:c},d)))},$="PopoverContent",X=e.forwardRef((o,s)=>{const a=Q($,o.__scopePopover),{forceMount:d=a.forceMount,...c}=o,t=l($,o.__scopePopover);return e.createElement(C,{present:d||t.open},t.modal?e.createElement(Y,p({},c,{ref:s})):e.createElement(ee,p({},c,{ref:s})))}),Y=e.forwardRef((o,s)=>{const a=l($,o.__scopePopover),d=e.useRef(null),c=h(s,d),t=e.useRef(!1);return e.useEffect(()=>{const r=d.current;if(r)return y(r)},[]),e.createElement(T,{as:D,allowPinchZoom:!0},e.createElement(A,p({},o,{ref:c,trapFocus:a.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:m(o.onCloseAutoFocus,r=>{var n;r.preventDefault(),t.current||(n=a.triggerRef.current)===null||n===void 0||n.focus()}),onPointerDownOutside:m(o.onPointerDownOutside,r=>{const n=r.detail.originalEvent,i=n.button===0&&n.ctrlKey===!0,u=n.button===2||i;t.current=u},{checkForDefaultPrevented:!1}),onFocusOutside:m(o.onFocusOutside,r=>r.preventDefault(),{checkForDefaultPrevented:!1})})))}),ee=e.forwardRef((o,s)=>{const a=l($,o.__scopePopover),d=e.useRef(!1),c=e.useRef(!1);return e.createElement(A,p({},o,{ref:s,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r;if((r=o.onCloseAutoFocus)===null||r===void 0||r.call(o,t),!t.defaultPrevented){var n;d.current||(n=a.triggerRef.current)===null||n===void 0||n.focus(),t.preventDefault()}d.current=!1,c.current=!1},onInteractOutside:t=>{var r,n;(r=o.onInteractOutside)===null||r===void 0||r.call(o,t),t.defaultPrevented||(d.current=!0,t.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const i=t.target;((n=a.triggerRef.current)===null||n===void 0?void 0:n.contains(i))&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&c.current&&t.preventDefault()}}))}),A=e.forwardRef((o,s)=>{const{__scopePopover:a,trapFocus:d,onOpenAutoFocus:c,onCloseAutoFocus:t,disableOutsidePointerEvents:r,onEscapeKeyDown:n,onPointerDownOutside:i,onFocusOutside:u,onInteractOutside:b,...v}=o,f=l($,a),g=P(a);return S(),e.createElement(j,{asChild:!0,loop:!0,trapped:d,onMountAutoFocus:c,onUnmountAutoFocus:t},e.createElement(K,{asChild:!0,disableOutsidePointerEvents:r,onInteractOutside:b,onEscapeKeyDown:n,onPointerDownOutside:i,onFocusOutside:u,onDismiss:()=>f.onOpenChange(!1)},e.createElement(V,p({"data-state":w(f.open),role:"dialog",id:f.contentId},g,v,{ref:s,style:{...v.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}}))))});function w(o){return o?"open":"closed"}const oe=Z,te=B,ce=W,F=X,fe=oe,pe=te,re=e.forwardRef(({className:o,align:s="center",sideOffset:a=4,container:d,...c},t)=>x.jsxDEV(ce,{container:d,children:x.jsxDEV(F,{ref:t,align:s,sideOffset:a,className:I("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",o),...c},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/popover.tsx",lineNumber:24,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/popover.tsx",lineNumber:23,columnNumber:7},void 0));re.displayName=F.displayName;export{fe as P,pe as a,re as b};
