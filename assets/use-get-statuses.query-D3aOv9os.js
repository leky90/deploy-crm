import{u as e}from"./useQuery-GJg87iXi.js";import{k as u}from"./index-f67wLNBR.js";import{r as o,Q as s}from"./index-iY8wkAMF.js";import{a}from"./api-client-vqFb5rA2.js";function i(){return a({url:"/customer_history/ListStatus"})}function S(){const{data:t}=e({queryKey:s.STATUSES,queryFn:i}),r=o.useMemo(()=>t!=null&&t.status?u(t.result,"id"):{},[t==null?void 0:t.status]);return{statuses:t==null?void 0:t.result,statusesByKey:r}}export{S as u};
