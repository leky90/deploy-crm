import{u as r}from"./useQuery-lrpO5rpq.js";import{k as s}from"./index-Bk1FUpaF.js";import{r as u,Q as o}from"./index-CrgaQZZi.js";import{a}from"./Helmet-BtZ7U0QR.js";function n(){return a({url:"/vietnamese_banks/getall"})}function f(){const{data:t}=r({queryKey:o.VN_BANKS,queryFn:n}),e=u.useMemo(()=>t!=null&&t.status?s(t.result,"id"):{},[t==null?void 0:t.status]);return{vnBanks:t==null?void 0:t.result,vnBanksByKey:e}}export{f as u};
