import{u as r}from"./cell-text-Cq1oX9CR.js";import{k as s}from"./index-f796fQww.js";import{r as u,Q as o}from"./index-f2VhjHM4.js";import{a}from"./api-client-CpO0KqWb.js";function n(){return a({url:"/vietnamese_banks/getall"})}function f(){const{data:t}=r({queryKey:o.VN_BANKS,queryFn:n}),e=u.useMemo(()=>t!=null&&t.status?s(t.result,"id"):{},[t==null?void 0:t.status]);return{vnBanks:t==null?void 0:t.result,vnBanksByKey:e}}export{f as u};
