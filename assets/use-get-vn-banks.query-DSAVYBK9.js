import{u as r}from"./useQuery-BkAUE7Xx.js";import{k as s}from"./index-F-kXlb2o.js";import{r as u,Q as o}from"./index-By_MqxwU.js";import{a}from"./Helmet-k4G6Y4e8.js";function n(){return a({url:"/vietnamese_banks/getall"})}function f(){const{data:t}=r({queryKey:o.VN_BANKS,queryFn:n}),e=u.useMemo(()=>t!=null&&t.status?s(t.result,"id"):{},[t==null?void 0:t.status]);return{vnBanks:t==null?void 0:t.result,vnBanksByKey:e}}export{f as u};
