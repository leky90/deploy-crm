import{u}from"./useQuery-GjGINsWo.js";import{Q as a,k as i}from"./index-D1beO7r7.js";import{a as n}from"./Helmet-BaN_M3Ba.js";function y(e){return n({url:"/POS_INFO/get_POS_INFO_by_id",params:e})}function d(e){var o;const{data:r,isSuccess:s,isError:t}=u({queryKey:[...a.POS,e],queryFn:()=>y({id:e}),placeholderData:i,gcTime:1e4});return{pos:(o=r==null?void 0:r.result)==null?void 0:o[0],isPosNotFound:t,isPosReady:s}}export{d as u};
