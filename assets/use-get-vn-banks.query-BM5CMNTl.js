import{u as r}from"./useQuery-GJg87iXi.js";import{k as s}from"./index-f67wLNBR.js";import{r as u,Q as o}from"./index-iY8wkAMF.js";import{a}from"./api-client-vqFb5rA2.js";function n(){return a({url:"/vietnamese_banks/getall"})}function f(){const{data:t}=r({queryKey:o.VN_BANKS,queryFn:n}),e=u.useMemo(()=>t!=null&&t.status?s(t.result,"id"):{},[t==null?void 0:t.status]);return{vnBanks:t==null?void 0:t.result,vnBanksByKey:e}}export{f as u};
