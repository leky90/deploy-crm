import{u as o}from"./useQuery-BXJOiSOe.js";import{Q as u,k as a}from"./index-XwE6gQmn.js";import{a as n}from"./Helmet-DUuvCvTm.js";function s(e){return n({url:"/customer_info/get_customer_info_by_id",params:e})}function y(e){var t;const{data:r}=o({queryKey:[...u.CUSTOMER,e],queryFn:()=>s({id:e}),placeholderData:a,gcTime:1e4,enabled:!!e});return{customer:(t=r==null?void 0:r.result)==null?void 0:t[0]}}export{y as u};
