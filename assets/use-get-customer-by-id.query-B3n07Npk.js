import{u as o}from"./useQuery-BLloIvPX.js";import{Q as u,k as a}from"./index-DtKAakRc.js";import{a as n}from"./api-client-axGC5cZc.js";function s(e){return n({url:"/customer_info/get_customer_info_by_id",params:e})}function y(e){var t;const{data:r}=o({queryKey:[...u.CUSTOMER,e],queryFn:()=>s({id:e}),placeholderData:a,gcTime:1e4,enabled:!!e});return{customer:(t=r==null?void 0:r.result)==null?void 0:t[0]}}export{y as u};
