import{u as s}from"./useQuery-Cl3Ng3qM.js";import{Q as a,k as c}from"./index-BBOSr7wM.js";import{a as t}from"./Helmet-B_Qq3Yxz.js";function o(){return t({url:"/customer_creditcard"})}function n(r){return t({url:"/customer_creditcard/Search_CreditcardNumber",params:{cc_num:r}})}function d(r){const{data:e,refetch:u}=s({queryKey:a.CUSTOMER_CC,queryFn:r?()=>n(r):o,placeholderData:c,gcTime:1e4});return{customerCcs:e==null?void 0:e.result,refetchCustomerCcs:u}}export{d as u};
