import{u as x}from"./useMutation-Cv1PQFpo.js";import{a as c}from"./api-client-axGC5cZc.js";import{r as m,Q as g,j as r,k as E,a as P}from"./index-DtKAakRc.js";import{S as d,a as f,b as p,c as b,d as N}from"./select-BrPI7tth.js";import{d as h}from"./index-BNgByyD0.js";import{u as v}from"./useQuery-BLloIvPX.js";import{k as V}from"./index-j9Y1WKZp.js";import{u as D}from"./index-765l_sCq.js";import{a as U,u as k}from"./use-get-user-options.query-HtCrhQjE.js";function j(e){return c({url:"/Money_Percent_Calculation/Calculation_LevelRate_Priv",params:e})}function K(){const{mutateAsync:e}=x({mutationFn:j});return{mutationCalculateByLevelRate:e}}function T(){return c({url:"/customer_history/card_type"})}function C(){const{data:e}=v({queryKey:g.CARD_TYPES,queryFn:T}),l=m.useMemo(()=>e!=null&&e.status?V(e.result,"id"):{},[e==null?void 0:e.status]);return{cardTypes:e==null?void 0:e.result,cardTypesByKey:l}}const Y=m.forwardRef(function({onChange:e,name:l,readOnly:t,...n},o){const{cardTypes:a}=C();return r.jsxDEV(d,{...n,onValueChange:s=>e({target:{name:l,value:s}}),children:[r.jsxDEV(f,{className:h("h-8",t&&"pointer-events-none"),children:r.jsxDEV(p,{placeholder:"Select a card type"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/card-type.field.tsx",lineNumber:35,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/card-type.field.tsx",lineNumber:34,columnNumber:7},this),r.jsxDEV(b,{children:a==null?void 0:a.map(s=>r.jsxDEV(N,{value:s,children:s},s,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/card-type.field.tsx",lineNumber:39,columnNumber:11},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/card-type.field.tsx",lineNumber:37,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/card-type.field.tsx",lineNumber:26,columnNumber:5},this)});function w({name:e,onChange:l,onSelectCard:t,readOnly:n,listCustomerCreditcards:o,...a}){return r.jsxDEV(d,{...a,onValueChange:s=>{t&&t(s),l({target:{name:e,value:s}})},children:[r.jsxDEV(f,{className:h("h-8",n&&"bg-muted pointer-events-none"),children:r.jsxDEV(p,{placeholder:"Select a Credit Card"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/credit-card.field.tsx",lineNumber:41,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/credit-card.field.tsx",lineNumber:38,columnNumber:7},this),r.jsxDEV(b,{children:o==null?void 0:o.map(({id:s,creditcard_number:i})=>r.jsxDEV(N,{value:String(s),children:i},s,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/credit-card.field.tsx",lineNumber:45,columnNumber:11},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/credit-card.field.tsx",lineNumber:43,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/credit-card.field.tsx",lineNumber:29,columnNumber:5},this)}function S(e){return c({url:"/customer_history/GetListPos_Available_By_ID_Customer_Creditcard",params:e})}function _(e){const{data:l,refetch:t,isFetching:n}=v({queryKey:[...g.POS,"AVAILABLE",e],queryFn:()=>S({id_customer_creditcard:e}),placeholderData:E,gcTime:1e4,enabled:!!e});return{posAvailable:l==null?void 0:l.result,isFetchingPosAvailable:n,refetchPosAvailable:t}}function H({onChange:e,idCustomerCreditcard:l,defaultValue:t,onSelectPos:n,...o}){const[a,s]=m.useState(String(t)),{posAvailable:i}=_(l);return D(()=>{s("")},[l]),m.useEffect(()=>{i&&n&&n(i==null?void 0:i.find(u=>u.id===t))},[i]),r.jsxDEV(d,{value:a,onValueChange:u=>{s(u),n&&n(i==null?void 0:i.find(y=>y.id===Number(u))),e({target:{name:"id_pos_info",value:u}})},children:[r.jsxDEV(f,{className:"h-8",children:r.jsxDEV(p,{placeholder:"Select a POS"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/pos-available.field.tsx",lineNumber:58,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/pos-available.field.tsx",lineNumber:57,columnNumber:7},this),r.jsxDEV(b,{children:i==null?void 0:i.map(({id:u,pos_name:y})=>r.jsxDEV(N,{value:String(u),children:y},u,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/pos-available.field.tsx",lineNumber:62,columnNumber:11},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/pos-available.field.tsx",lineNumber:60,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/pos-available.field.tsx",lineNumber:46,columnNumber:5},this)}const z=m.forwardRef(function({onChange:e,name:l,readOnly:t,onSelectRate:n,...o},a){const{rateOptions:s}=U();return r.jsxDEV(d,{...o,onValueChange:i=>{n&&n(i),e({target:{name:l,value:i}})},children:[r.jsxDEV(f,{className:h("h-8",t&&"pointer-events-none"),children:r.jsxDEV(p,{placeholder:"Select a rate option"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/rate-option.field.tsx",lineNumber:37,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/rate-option.field.tsx",lineNumber:36,columnNumber:7},this),r.jsxDEV(b,{children:s==null?void 0:s.map(({id:i,name:u})=>r.jsxDEV(N,{value:String(i),children:u},i,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/rate-option.field.tsx",lineNumber:41,columnNumber:11},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/rate-option.field.tsx",lineNumber:39,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/rate-option.field.tsx",lineNumber:27,columnNumber:5},this)}),J=m.forwardRef(function({onChange:e,name:l,readOnly:t,...n},o){const{userOptions:a}=k();return r.jsxDEV(d,{...n,onValueChange:s=>e({target:{name:l,value:s}}),children:[r.jsxDEV(f,{className:h("h-8",t&&"pointer-events-none"),children:r.jsxDEV(p,{placeholder:"Select a user option"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/user-option.field.tsx",lineNumber:35,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/user-option.field.tsx",lineNumber:34,columnNumber:7},this),r.jsxDEV(b,{children:a==null?void 0:a.map(({id:s,name:i})=>r.jsxDEV(N,{value:String(s),children:i},s,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/user-option.field.tsx",lineNumber:39,columnNumber:11},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/user-option.field.tsx",lineNumber:37,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/fields/user-option.field.tsx",lineNumber:26,columnNumber:5},this)});function F(e){return c({url:"/Money_Percent_Calculation/Calculation_Manual_Priv",params:e})}function W(){const{mutateAsync:e}=x({mutationFn:F});return{mutationCalculateManual:e}}function R(e){return c({method:"post",url:"/customer_history/order_cancel",data:e})}function X(){const{mutateAsync:e}=x({mutationFn:R,onSuccess:()=>{P.invalidateQueries({queryKey:g.CUSTOMER_HISTORY})}});return{mutationCancelOrder:e}}export{w as F,K as a,H as b,J as c,z as d,Y as e,X as f,W as u};
