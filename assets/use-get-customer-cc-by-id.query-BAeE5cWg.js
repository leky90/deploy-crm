import{Q as o,k as u}from"./index-D1JUiLua.js";import{u as a}from"./useQuery-DYc45dXL.js";import{a as s}from"./Helmet-BSeNyQbR.js";function c(e){return s({url:"/customer_creditcard/get_customer_creditcard_by_id",params:e})}function d(e){var t;const{data:r}=a({queryKey:[...o.CUSTOMER_CC,e],queryFn:()=>c({id:e}),placeholderData:u,gcTime:1e4,enabled:!!e});return{customerCc:(t=r==null?void 0:r.result)==null?void 0:t[0]}}export{d as u};
