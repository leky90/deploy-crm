import{u as r}from"./useQuery-DYc45dXL.js";import{k as u}from"./index-Bac5iG0s.js";import{r as s,Q as o}from"./index-D1JUiLua.js";import{a as n}from"./Helmet-BSeNyQbR.js";function a(){return n({url:"/customer_history/rate_option"})}function f(){const{data:t}=r({queryKey:o.RATE_OPTIONS,queryFn:a}),e=s.useMemo(()=>t!=null&&t.status?u(t.result,"id"):{},[t==null?void 0:t.status]);return{rateOptions:t==null?void 0:t.result,rateOptionsByKey:e}}function y(){return n({url:"/customer_history/user_option"})}function l(){const{data:t}=r({queryKey:o.USER_OPTIONS,queryFn:y}),e=s.useMemo(()=>t!=null&&t.status?u(t.result,"id"):{},[t==null?void 0:t.status]);return{userOptions:t==null?void 0:t.result,userOptionsByKey:e}}export{f as a,l as u};
