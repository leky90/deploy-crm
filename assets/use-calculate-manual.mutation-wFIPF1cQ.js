import{u as _}from"./useMutation-Czv1wBp1.js";import{a as j}from"./Helmet-DUuvCvTm.js";import{r as h,Q as S,j as t,k as P}from"./index-XwE6gQmn.js";import{S as m,a as f,b as d,c as p,d as x}from"./select-BLsJIQQv.js";import{d as g}from"./button-C4HOWXLM.js";import{u as v}from"./useQuery-BXJOiSOe.js";import{k as E}from"./index-CwCgg0f3.js";import{u as F}from"./index-Dwx9NaXw.js";import{a as R,u as B}from"./use-get-user-options.query-B2W5Dekj.js";function M(e){return j({url:"/Money_Percent_Calculation/Calculation_LevelRate_Priv",params:e})}function w(){const{mutateAsync:e}=_({mutationFn:M});return{mutationCalculateByLevelRate:e}}function L(){return j({url:"/customer_history/card_type"})}function V(){const{data:e}=v({queryKey:S.CARD_TYPES,queryFn:L}),a=h.useMemo(()=>e!=null&&e.status?E(e.result,"id"):{},[e==null?void 0:e.status]);return{cardTypes:e==null?void 0:e.result,cardTypesByKey:a}}const Y=h.forwardRef(function({onChange:e,name:a,readOnly:s,...r},c){const{cardTypes:l}=V();return t.jsxs(m,{...r,onValueChange:n=>e({target:{name:a,value:n}}),children:[t.jsx(f,{className:g("h-8",s&&"pointer-events-none"),children:t.jsx(d,{placeholder:"Select a card type"})}),t.jsx(p,{children:l==null?void 0:l.map(n=>t.jsx(x,{value:n,children:n},n))})]})});function z({name:e,onChange:a,onSelectCard:s,readOnly:r,listCustomerCreditcards:c,...l}){return t.jsxs(m,{...l,onValueChange:n=>{s&&s(n),a({target:{name:e,value:n}})},children:[t.jsx(f,{className:g("h-8",r&&"bg-muted pointer-events-none"),children:t.jsx(d,{placeholder:"Select a Credit Card"})}),t.jsx(p,{children:c==null?void 0:c.map(({id:n,creditcard_number:o})=>t.jsx(x,{value:String(n),children:o},n))})]})}function Q(e){return j({url:"/customer_history/GetListPos_Available_By_ID_Customer_Creditcard",params:e})}function b(e){const{data:a,refetch:s,isFetching:r}=v({queryKey:[...S.POS,"AVAILABLE",e],queryFn:()=>Q({id_customer_creditcard:e}),placeholderData:P,gcTime:1e4,enabled:!!e});return{posAvailable:a==null?void 0:a.result,lastPercentChange:a==null?void 0:a.last_percent_charge,isFetchingPosAvailable:r,refetchPosAvailable:s}}function H({onChange:e,idCustomerCreditcard:a,defaultValue:s,onSelectPos:r,readOnly:c,...l}){const[n,o]=h.useState(String(s)),{posAvailable:u,lastPercentChange:C}=b(a);return F(()=>{o("")},[a]),h.useEffect(()=>{u&&r&&r(u==null?void 0:u.find(i=>i.id===s),C)},[u,C]),t.jsxs(m,{value:n,onValueChange:i=>{o(i),r&&r(u==null?void 0:u.find(y=>y.id===Number(i))),e({target:{name:"id_pos_info",value:i}})},children:[t.jsx(f,{className:g("h-8",c&&"bg-muted pointer-events-none"),children:t.jsx(d,{placeholder:"Select a POS"})}),t.jsx(p,{children:u==null?void 0:u.map(({id:i,pos_name:y})=>t.jsx(x,{value:String(i),children:y},i))})]})}const J=h.forwardRef(function({onChange:e,name:a,readOnly:s,onSelectRate:r,...c},l){const{rateOptions:n}=R();return t.jsxs(m,{...c,onValueChange:o=>{r&&r(o),e({target:{name:a,value:o}})},children:[t.jsx(f,{className:g("h-8",s&&"bg-muted pointer-events-none"),children:t.jsx(d,{placeholder:"Select a rate option"})}),t.jsx(p,{children:n==null?void 0:n.map(({id:o,name:u})=>t.jsx(x,{value:String(o),children:u},o))})]})}),T=h.forwardRef(function({onChange:e,name:a,readOnly:s,...r},c){const{userOptions:l}=B();return t.jsxs(m,{...r,onValueChange:n=>e({target:{name:a,value:n}}),children:[t.jsx(f,{className:g("h-8",s&&"pointer-events-none"),children:t.jsx(d,{placeholder:"Select a user option"})}),t.jsx(p,{children:l==null?void 0:l.map(({id:n,name:o})=>t.jsx(x,{value:String(n),children:o},n))})]})});function N(e){return j({url:"/Money_Percent_Calculation/Calculation_Manual_Priv",params:e})}function W(){const{mutateAsync:e}=_({mutationFn:N});return{mutationCalculateManual:e}}export{z as F,w as a,H as b,T as c,J as d,Y as e,W as u};
