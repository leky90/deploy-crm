import{u as h}from"./useMutation-Dd67b7hD.js";import{a as b}from"./Helmet-BtZ7U0QR.js";import{r as l,Q as v,j as t,k as F,a as O}from"./index-CrgaQZZi.js";import{S as N,a as g,b as $,c as x,d as y}from"./select-DrFuJnQx.js";import{d as u,_ as f,$ as E,g as M,f as _}from"./button-CrLqvpvw.js";import{u as P}from"./useQuery-lrpO5rpq.js";import{k as B}from"./index-Bk1FUpaF.js";import{u as L}from"./index-BD-Wf0QL.js";import{a as Q,u as I}from"./use-get-user-options.query-DDyBifAa.js";import{$ as q,d as G}from"./Combination-D6Jm7gtk.js";import{h as A,$ as K,i as z,a as Y,c as H,d as J,b as T,e as W,f as X,g as Z}from"./index-D3Fi_Hth.js";function ee(e){return b({url:"/Money_Percent_Calculation/Calculation_LevelRate_Priv",params:e})}function qe(){const{mutateAsync:e}=h({mutationFn:ee});return{mutationCalculateByLevelRate:e}}function ae(){return b({url:"/customer_history/card_type"})}function re(){const{data:e}=P({queryKey:v.CARD_TYPES,queryFn:ae}),a=l.useMemo(()=>e!=null&&e.status?B(e.result,"id"):{},[e==null?void 0:e.status]);return{cardTypes:e==null?void 0:e.result,cardTypesByKey:a}}const Ge=l.forwardRef(function({onChange:e,name:a,readOnly:r,...s},i){const{cardTypes:c}=re();return t.jsxDEV(N,{...s,onValueChange:o=>e({target:{name:a,value:o}}),children:[t.jsxDEV(g,{className:u("h-8",r&&"pointer-events-none"),children:t.jsxDEV($,{placeholder:"Select a card type"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/card-type.field.tsx",lineNumber:35,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/card-type.field.tsx",lineNumber:34,columnNumber:7},this),t.jsxDEV(x,{children:c==null?void 0:c.map(o=>t.jsxDEV(y,{value:o,children:o},o,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/card-type.field.tsx",lineNumber:39,columnNumber:11},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/card-type.field.tsx",lineNumber:37,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/card-type.field.tsx",lineNumber:26,columnNumber:5},this)});function Ke({name:e,onChange:a,onSelectCard:r,readOnly:s,listCustomerCreditcards:i,...c}){return t.jsxDEV(N,{...c,onValueChange:o=>{r&&r(o),a({target:{name:e,value:o}})},children:[t.jsxDEV(g,{className:u("h-8",s&&"bg-muted pointer-events-none"),children:t.jsxDEV($,{placeholder:"Select a Credit Card"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/credit-card.field.tsx",lineNumber:41,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/credit-card.field.tsx",lineNumber:38,columnNumber:7},this),t.jsxDEV(x,{children:i==null?void 0:i.map(({id:o,creditcard_number:n})=>t.jsxDEV(y,{value:String(o),children:n},o,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/credit-card.field.tsx",lineNumber:45,columnNumber:11},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/credit-card.field.tsx",lineNumber:43,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/credit-card.field.tsx",lineNumber:29,columnNumber:5},this)}function se(e){return b({url:"/customer_history/GetListPos_Available_By_ID_Customer_Creditcard",params:e})}function te(e){const{data:a,refetch:r,isFetching:s}=P({queryKey:[...v.POS,"AVAILABLE",e],queryFn:()=>se({id_customer_creditcard:e}),placeholderData:F,gcTime:1e4,enabled:!!e});return{posAvailable:a==null?void 0:a.result,isFetchingPosAvailable:s,refetchPosAvailable:r}}function ze({onChange:e,idCustomerCreditcard:a,defaultValue:r,onSelectPos:s,...i}){const[c,o]=l.useState(String(r)),{posAvailable:n}=te(a);return L(()=>{o("")},[a]),l.useEffect(()=>{n&&s&&s(n==null?void 0:n.find(d=>d.id===r))},[n]),t.jsxDEV(N,{value:c,onValueChange:d=>{o(d),s&&s(n==null?void 0:n.find(m=>m.id===Number(d))),e({target:{name:"id_pos_info",value:d}})},children:[t.jsxDEV(g,{className:"h-8",children:t.jsxDEV($,{placeholder:"Select a POS"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/pos-available.field.tsx",lineNumber:58,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/pos-available.field.tsx",lineNumber:57,columnNumber:7},this),t.jsxDEV(x,{children:n==null?void 0:n.map(({id:d,pos_name:m})=>t.jsxDEV(y,{value:String(d),children:m},d,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/pos-available.field.tsx",lineNumber:62,columnNumber:11},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/pos-available.field.tsx",lineNumber:60,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/pos-available.field.tsx",lineNumber:46,columnNumber:5},this)}const Ye=l.forwardRef(function({onChange:e,name:a,readOnly:r,onSelectRate:s,...i},c){const{rateOptions:o}=Q();return t.jsxDEV(N,{...i,onValueChange:n=>{s&&s(n),e({target:{name:a,value:n}})},children:[t.jsxDEV(g,{className:u("h-8",r&&"pointer-events-none"),children:t.jsxDEV($,{placeholder:"Select a rate option"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/rate-option.field.tsx",lineNumber:37,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/rate-option.field.tsx",lineNumber:36,columnNumber:7},this),t.jsxDEV(x,{children:o==null?void 0:o.map(({id:n,name:d})=>t.jsxDEV(y,{value:String(n),children:d},n,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/rate-option.field.tsx",lineNumber:41,columnNumber:11},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/rate-option.field.tsx",lineNumber:39,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/rate-option.field.tsx",lineNumber:27,columnNumber:5},this)}),He=l.forwardRef(function({onChange:e,name:a,readOnly:r,...s},i){const{userOptions:c}=I();return t.jsxDEV(N,{...s,onValueChange:o=>e({target:{name:a,value:o}}),children:[t.jsxDEV(g,{className:u("h-8",r&&"pointer-events-none"),children:t.jsxDEV($,{placeholder:"Select a user option"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/user-option.field.tsx",lineNumber:35,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/user-option.field.tsx",lineNumber:34,columnNumber:7},this),t.jsxDEV(x,{children:c==null?void 0:c.map(({id:o,name:n})=>t.jsxDEV(y,{value:String(o),children:n},o,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/user-option.field.tsx",lineNumber:39,columnNumber:11},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/user-option.field.tsx",lineNumber:37,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/user-option.field.tsx",lineNumber:26,columnNumber:5},this)});function le(e){return b({url:"/Money_Percent_Calculation/Calculation_Manual_Priv",params:e})}function Je(){const{mutateAsync:e}=h({mutationFn:le});return{mutationCalculateManual:e}}function oe(e){return b({method:"post",url:"/customer_history/order_cancel",data:e})}function We(){const{mutateAsync:e}=h({mutationFn:oe,onSuccess:()=>{O.invalidateQueries({queryKey:v.CUSTOMER_HISTORY})}});return{mutationCancelOrder:e}}const ie="AlertDialog",[ne,Xe]=q(ie,[A]),p=A(),ce=e=>{const{__scopeAlertDialog:a,...r}=e,s=p(a);return l.createElement(X,f({},s,r,{modal:!0}))},de=l.forwardRef((e,a)=>{const{__scopeAlertDialog:r,...s}=e,i=p(r);return l.createElement(Z,f({},i,s,{ref:a}))}),ue=e=>{const{__scopeAlertDialog:a,...r}=e,s=p(a);return l.createElement(W,f({},s,r))},me=l.forwardRef((e,a)=>{const{__scopeAlertDialog:r,...s}=e,i=p(r);return l.createElement(K,f({},i,s,{ref:a}))}),V="AlertDialogContent",[fe,pe]=ne(V),be=l.forwardRef((e,a)=>{const{__scopeAlertDialog:r,children:s,...i}=e,c=p(r),o=l.useRef(null),n=E(a,o),d=l.useRef(null);return l.createElement(z,{contentName:V,titleName:Ne,docsSlug:"alert-dialog"},l.createElement(fe,{scope:r,cancelRef:d},l.createElement(Y,f({role:"alertdialog"},c,i,{ref:n,onOpenAutoFocus:G(i.onOpenAutoFocus,m=>{var D;m.preventDefault(),(D=d.current)===null||D===void 0||D.focus({preventScroll:!0})}),onPointerDownOutside:m=>m.preventDefault(),onInteractOutside:m=>m.preventDefault()}),l.createElement(M,null,s),!1)))}),Ne="AlertDialogTitle",ge=l.forwardRef((e,a)=>{const{__scopeAlertDialog:r,...s}=e,i=p(r);return l.createElement(H,f({},i,s,{ref:a}))}),$e=l.forwardRef((e,a)=>{const{__scopeAlertDialog:r,...s}=e,i=p(r);return l.createElement(J,f({},i,s,{ref:a}))}),xe=l.forwardRef((e,a)=>{const{__scopeAlertDialog:r,...s}=e,i=p(r);return l.createElement(T,f({},i,s,{ref:a}))}),ye="AlertDialogCancel",De=l.forwardRef((e,a)=>{const{__scopeAlertDialog:r,...s}=e,{cancelRef:i}=pe(ye,r),c=p(r),o=E(a,i);return l.createElement(T,f({},c,s,{ref:o}))}),he=ce,ve=de,Ee=ue,k=me,U=be,j=xe,R=De,C=ge,S=$e,Ze=he,ea=ve,_e=Ee,w=l.forwardRef(({className:e,...a},r)=>t.jsxDEV(k,{className:u("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...a,ref:r},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/alert-dialog.tsx",lineNumber:18,columnNumber:3},void 0));w.displayName=k.displayName;const Pe=l.forwardRef(({className:e,...a},r)=>t.jsxDEV(_e,{children:[t.jsxDEV(w,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/alert-dialog.tsx",lineNumber:34,columnNumber:5},void 0),t.jsxDEV(U,{ref:r,className:u("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...a},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/alert-dialog.tsx",lineNumber:35,columnNumber:5},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/alert-dialog.tsx",lineNumber:33,columnNumber:3},void 0));Pe.displayName=U.displayName;const Ae=({className:e,...a})=>t.jsxDEV("div",{className:u("flex flex-col space-y-2 text-center sm:text-left",e),...a},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/alert-dialog.tsx",lineNumber:51,columnNumber:3},void 0);Ae.displayName="AlertDialogHeader";const Te=({className:e,...a})=>t.jsxDEV("div",{className:u("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...a},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/alert-dialog.tsx",lineNumber:65,columnNumber:3},void 0);Te.displayName="AlertDialogFooter";const Ve=l.forwardRef(({className:e,...a},r)=>t.jsxDEV(C,{ref:r,className:u("text-lg font-semibold",e),...a},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/alert-dialog.tsx",lineNumber:79,columnNumber:3},void 0));Ve.displayName=C.displayName;const ke=l.forwardRef(({className:e,...a},r)=>t.jsxDEV(S,{ref:r,className:u("text-sm text-muted-foreground",e),...a},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/alert-dialog.tsx",lineNumber:91,columnNumber:3},void 0));ke.displayName=S.displayName;const Ue=l.forwardRef(({className:e,variant:a,...r},s)=>t.jsxDEV(j,{ref:s,className:u(_({variant:a}),e),...r},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/alert-dialog.tsx",lineNumber:105,columnNumber:3},void 0));Ue.displayName=j.displayName;const je=l.forwardRef(({className:e,...a},r)=>t.jsxDEV(R,{ref:r,className:u(_({variant:"outline"}),"mt-2 sm:mt-0",e),...a},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/alert-dialog.tsx",lineNumber:117,columnNumber:3},void 0));je.displayName=R.displayName;export{Ze as A,Ke as F,qe as a,ze as b,He as c,Ye as d,Ge as e,We as f,ea as g,Pe as h,Ae as i,Ve as j,ke as k,Te as l,je as m,Ue as n,Je as u};
