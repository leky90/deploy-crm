import{u as y}from"./useMutation-CMVljaSD.js";import{a as c}from"./api-client-qBA4DTQv.js";import{r as o,Q as x,j as r,k as E,a as P}from"./index-BfH-S7tZ.js";import{S as d,a as f,b as p,c as b,d as N}from"./select-CPwPHD76.js";import{d as h}from"./index-CTTdkZ8N.js";import{u as g}from"./useQuery-D0chCk74.js";import{k as V}from"./index-BNAVSFPS.js";import{a as D,u as k}from"./use-get-user-options.query-BjdlKsCD.js";function U(e){return c({url:"/Money_Percent_Calculation/Calculation_LevelRate_Priv",params:e})}function q(){const{mutateAsync:e}=y({mutationFn:U});return{mutationCalculateByLevelRate:e}}function j(){return c({url:"/customer_history/card_type"})}function T(){const{data:e}=g({queryKey:x.CARD_TYPES,queryFn:j}),n=o.useMemo(()=>e!=null&&e.status?V(e.result,"id"):{},[e==null?void 0:e.status]);return{cardTypes:e==null?void 0:e.result,cardTypesByKey:n}}const w=o.forwardRef(function({onChange:e,name:n,readOnly:a,...t},m){const{cardTypes:s}=T();return r.jsxDEV(d,{...t,onValueChange:i=>e({target:{name:n,value:i}}),children:[r.jsxDEV(f,{className:h("h-8",a&&"pointer-events-none"),children:r.jsxDEV(p,{placeholder:"Select a card type"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/card-type.field.tsx",lineNumber:35,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/card-type.field.tsx",lineNumber:34,columnNumber:7},this),r.jsxDEV(b,{children:s==null?void 0:s.map(i=>r.jsxDEV(N,{value:i,children:i},i,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/card-type.field.tsx",lineNumber:39,columnNumber:11},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/card-type.field.tsx",lineNumber:37,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/card-type.field.tsx",lineNumber:26,columnNumber:5},this)}),G=o.forwardRef(function({name:n,onChange:a,onSelectCard:t,readOnly:m,listCustomerCreditcards:s,...i},l){return r.jsxDEV(d,{...i,onValueChange:u=>{t&&t(u),a({target:{name:n,value:u}})},children:[r.jsxDEV(f,{className:h("h-8",m&&"bg-muted pointer-events-none"),children:r.jsxDEV(p,{placeholder:"Select a Credit Card"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/credit-card.field.tsx",lineNumber:45,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/credit-card.field.tsx",lineNumber:42,columnNumber:9},this),r.jsxDEV(b,{children:s==null?void 0:s.map(({id:u,creditcard_number:v})=>r.jsxDEV(N,{value:String(u),children:v},u,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/credit-card.field.tsx",lineNumber:49,columnNumber:13},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/credit-card.field.tsx",lineNumber:47,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/credit-card.field.tsx",lineNumber:33,columnNumber:7},this)});function C(e){return c({url:"/customer_history/GetListPos_Available_By_ID_Customer_Creditcard",params:e})}function _(e){const{data:n,refetch:a,isLoading:t}=g({queryKey:[...x.POS,"AVAILABLE",e],queryFn:()=>C({id_customer_creditcard:e}),placeholderData:E,gcTime:1e4,enabled:!!e});return{posAvailable:n==null?void 0:n.result,isLoadingPosAvailable:t,refetchPosAvailable:a}}const K=o.forwardRef(function({onChange:e,idCustomerCreditcard:n,onSelectPos:a,...t},m){const{posAvailable:s,isLoadingPosAvailable:i}=_(n);return o.useEffect(()=>{i||a&&a(s==null?void 0:s.find(l=>l.id===Number(t.defaultValue)))},[i]),r.jsxDEV(d,{...t,onValueChange:l=>{a&&a(s==null?void 0:s.find(u=>u.id===Number(l))),e({target:{name:"id_pos_info",value:l}})},children:[r.jsxDEV(f,{className:"h-8",children:r.jsxDEV(p,{placeholder:"Select a POS"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/pos-available.field.tsx",lineNumber:45,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/pos-available.field.tsx",lineNumber:44,columnNumber:9},this),r.jsxDEV(b,{children:s==null?void 0:s.map(({id:l,pos_name:u})=>r.jsxDEV(N,{value:String(l),children:u},l,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/pos-available.field.tsx",lineNumber:49,columnNumber:13},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/pos-available.field.tsx",lineNumber:47,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/pos-available.field.tsx",lineNumber:34,columnNumber:7},this)}),Y=o.forwardRef(function({onChange:e,name:n,readOnly:a,onSelectRate:t,...m},s){const{rateOptions:i}=D();return r.jsxDEV(d,{...m,onValueChange:l=>{t&&t(l),e({target:{name:n,value:l}})},children:[r.jsxDEV(f,{className:h("h-8",a&&"pointer-events-none"),children:r.jsxDEV(p,{placeholder:"Select a rate option"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/rate-option.field.tsx",lineNumber:37,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/rate-option.field.tsx",lineNumber:36,columnNumber:7},this),r.jsxDEV(b,{children:i==null?void 0:i.map(({id:l,name:u})=>r.jsxDEV(N,{value:String(l),children:u},l,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/rate-option.field.tsx",lineNumber:41,columnNumber:11},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/rate-option.field.tsx",lineNumber:39,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/rate-option.field.tsx",lineNumber:27,columnNumber:5},this)}),H=o.forwardRef(function({onChange:e,name:n,readOnly:a,...t},m){const{userOptions:s}=k();return r.jsxDEV(d,{...t,onValueChange:i=>e({target:{name:n,value:i}}),children:[r.jsxDEV(f,{className:h("h-8",a&&"pointer-events-none"),children:r.jsxDEV(p,{placeholder:"Select a user option"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/user-option.field.tsx",lineNumber:35,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/user-option.field.tsx",lineNumber:34,columnNumber:7},this),r.jsxDEV(b,{children:s==null?void 0:s.map(({id:i,name:l})=>r.jsxDEV(N,{value:String(i),children:l},i,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/user-option.field.tsx",lineNumber:39,columnNumber:11},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/user-option.field.tsx",lineNumber:37,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/user-option.field.tsx",lineNumber:26,columnNumber:5},this)});function S(e){return c({url:"/Money_Percent_Calculation/Calculation_Manual_Priv",params:e})}function z(){const{mutateAsync:e}=y({mutationFn:S});return{mutationCalculateManual:e}}function R(e){return c({method:"post",url:"/customer_history/order_cancel",data:e})}function J(){const{mutateAsync:e}=y({mutationFn:R,onSuccess:()=>{P.invalidateQueries({queryKey:x.CUSTOMER_HISTORY})}});return{mutationCancelOrder:e}}export{K as F,q as a,H as b,Y as c,G as d,w as e,J as f,z as u};
