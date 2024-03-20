import{j as r,M as p,ak as P,al as j,am as k,an as C,ao as V,S as a,B as h,ae as y,A as v,Q as g,r as c,P as E,aq as _,U as D,G as n,ar as S,as as F,R as I,T as M,E as R,X as w,ap as A,a3 as K,a6 as q}from"./index-Be0YMae2.js";import{z as l,u as O,t as Q,I as N,F as b}from"./index-D9-DBdEl.js";import{M as B,A as z}from"./upload.constant-sHXMtF6P.js";import{G,g as L}from"./get-customer-image-url.util-BK3vNBZh.js";const Y=l.object({id:l.coerce.number().optional(),full_name:l.coerce.string().nonempty(),phonenumber:l.coerce.string(),is_active:l.coerce.number({invalid_type_error:"Required."}).min(0,"Required.").max(1,"Required."),images_identify_card:l.any().refine(e=>{var s;return!(e!=null&&e.length)||!((s=Array.from(e))!=null&&s.some(m=>m.size>B))},"Max file size is 5MB.").refine(e=>{var s;return!(e!=null&&e.length)||!((s=Array.from(e))!=null&&s.some(m=>!z.includes(m.type)))},".jpg, .jpeg, .png and .webp files are accepted.").optional()});function U({defaultValues:e,mutation:s,onClose:m}){var f;const{register:u,handleSubmit:t,formState:{errors:i}}=O({defaultValues:e,resolver:Q(Y)}),x=async o=>{(await s(o)).status&&m&&m()};return r.jsxDEV("form",{onSubmit:t(x),className:"space-y-4",autoComplete:"off",children:[r.jsxDEV("div",{children:[r.jsxDEV(p,{htmlFor:"full_name",children:"Full name"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:57,columnNumber:9},this),r.jsxDEV(N,{placeholder:"Full name",...u("full_name")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:58,columnNumber:9},this),r.jsxDEV(b,{error:i.full_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:59,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:56,columnNumber:7},this),r.jsxDEV("div",{children:[r.jsxDEV(p,{htmlFor:"phonenumber",children:"Phone number"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:63,columnNumber:9},this),r.jsxDEV(N,{placeholder:"Phone number",...u("phonenumber")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:64,columnNumber:9},this),r.jsxDEV(b,{error:i.phonenumber},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:65,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:62,columnNumber:7},this),r.jsxDEV("div",{children:[r.jsxDEV(p,{htmlFor:"is_active",children:"Active"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:69,columnNumber:9},this),r.jsxDEV(P,{...u("is_active"),defaultValue:typeof(e==null?void 0:e.is_active)>"u"?e==null?void 0:e.is_active:String(e==null?void 0:e.is_active),onValueChange:o=>u("is_active").onChange({target:{name:"is_active",value:o}}),children:[r.jsxDEV(j,{className:"h-8 w-40",children:r.jsxDEV(k,{placeholder:"Set status"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:84,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:83,columnNumber:11},this),r.jsxDEV(C,{children:[{label:"No",value:"0"},{label:"Yes",value:"1"}].map(({label:o,value:d})=>r.jsxDEV(V,{value:d,children:o},d,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:91,columnNumber:15},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:86,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:70,columnNumber:9},this),r.jsxDEV(b,{error:i.is_active},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:97,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:68,columnNumber:7},this),r.jsxDEV("div",{className:"space-y-1",children:[r.jsxDEV(p,{htmlFor:"images_identify_card",children:"Customer Images"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:101,columnNumber:9},this),r.jsxDEV(G,{images:(f=e==null?void 0:e.images_identify_card)==null?void 0:f.map(L)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:102,columnNumber:9},this),r.jsxDEV(N,{type:"file",multiple:!0,accept:"image/*",...u("images_identify_card")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:107,columnNumber:9},this),r.jsxDEV(b,{error:i.images_identify_card},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:113,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:100,columnNumber:7},this),r.jsxDEV(a,{className:"w-full",children:"Submit"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:118,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:51,columnNumber:5},this)}function T(e){var m;const s=new FormData;for(const u in e)if(((m=e[u])==null?void 0:m.constructor.name)==="FileList"){const t=e[u];for(let i=0;i<t.length;i++)s.append(u,t.item(i))}else s.append(u,e[u]);return s}function H(e){const s=T(e);return h({method:"patch",url:"/customer_info/update_customers",data:s,headers:{"Content-Type":"multipart/form-data"}})}function X(){const{mutateAsync:e}=y({mutationFn:H,onSuccess:()=>{v.invalidateQueries({queryKey:g.CUSTOMER})}});return{mutationUpdateCustomer:e}}function Z({row:e}){const s=c.useRef(null);function m(){var t;(t=s.current)==null||t.click()}const{mutationUpdateCustomer:u}=X();return r.jsxDEV(E,{title:"Update customer info",className:"w-96",trigger:r.jsxDEV(a,{variant:"outline",size:"icon",children:r.jsxDEV(_,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/update-customer.feature.tsx",lineNumber:30,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/update-customer.feature.tsx",lineNumber:29,columnNumber:9},this),actionButtons:r.jsxDEV(D,{asChild:!0,children:r.jsxDEV(a,{ref:s,type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/update-customer.feature.tsx",lineNumber:35,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/update-customer.feature.tsx",lineNumber:34,columnNumber:9},this),children:r.jsxDEV(U,{defaultValues:e.original,onClose:m,mutation:u},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/update-customer.feature.tsx",lineNumber:41,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/update-customer.feature.tsx",lineNumber:25,columnNumber:5},this)}const J={id:!0,full_name:!0,is_active:!0,phonenumber:!0,images_identify_card:!0,uuid_id:!0},W=()=>[{accessorKey:"id",header:"ID",enableHiding:!1,cell:e=>r.jsxDEV(n,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:28,columnNumber:14},void 0)},{accessorKey:"full_name",header:"Full Name",cell:e=>r.jsxDEV(n,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:35,columnNumber:14},void 0)},{accessorKey:"is_active",header:"Active",cell:e=>r.jsxDEV(n,{children:S(e.getValue())},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:42,columnNumber:14},void 0)},{accessorKey:"phonenumber",header:"Phone Number",cell:e=>r.jsxDEV(n,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:49,columnNumber:14},void 0)},{accessorKey:"images_identify_card",header:"Identify Images",cell:e=>r.jsxDEV(n,{children:e.getValue().length},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:56,columnNumber:14},void 0)},{accessorKey:"uuid_id",header:"UUID",cell:e=>r.jsxDEV(n,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:63,columnNumber:14},void 0)},{id:"actions",enableHiding:!1,cell:({row:e})=>r.jsxDEV("div",{className:"space-x-2",children:[r.jsxDEV(Z,{row:e},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:72,columnNumber:11},void 0),r.jsxDEV(F,{to:I.CUSTOMER_DETAIL.replace(":id",String(e.original.id)),className:"text-primary",children:r.jsxDEV(a,{variant:"outline",size:"icon",children:r.jsxDEV(M,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:78,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:77,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:73,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:71,columnNumber:9},void 0)}];function $(){return h({url:"/customer_info/get_all"})}function ee(e){return h({url:"/customer_info/search",params:{keywords:e}})}function re(e){const{data:s,refetch:m}=R({queryKey:g.CUSTOMER,queryFn:e?()=>ee(e):$,placeholderData:w,gcTime:1e4});return{customers:s==null?void 0:s.result,refetchCustomers:m}}function se(e){const s=T(e);return h({method:"post",url:"/customer_info/add_customers",data:s,headers:{"Content-Type":"multipart/form-data"}})}function me(){const{mutateAsync:e}=y({mutationFn:se,onSuccess:s=>{s.status&&v.invalidateQueries({queryKey:g.CUSTOMER})}});return{mutationCreateCustomer:e}}function ue(){const e=c.useRef(null);function s(){var u;(u=e.current)==null||u.click()}const{mutationCreateCustomer:m}=me();return r.jsxDEV(E,{title:"Create new customer",className:"w-96",trigger:r.jsxDEV(a,{className:"gap-2",children:[r.jsxDEV(A,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/create-customer.feature.tsx",lineNumber:24,columnNumber:11},this)," Create new customer"]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/create-customer.feature.tsx",lineNumber:23,columnNumber:9},this),actionButtons:r.jsxDEV(D,{asChild:!0,children:r.jsxDEV(a,{ref:e,type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/create-customer.feature.tsx",lineNumber:29,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/create-customer.feature.tsx",lineNumber:28,columnNumber:9},this),children:r.jsxDEV(U,{onClose:s,mutation:m},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/create-customer.feature.tsx",lineNumber:35,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/create-customer.feature.tsx",lineNumber:19,columnNumber:5},this)}function ie(){const[e,s]=c.useState(J),[m,u]=c.useState(),t=c.useDeferredValue(m),{customers:i,refetchCustomers:x}=re(t),f=c.useMemo(()=>W(),[]),o=d=>{u(d.target.value)};return c.useEffect(()=>{x()},[t]),r.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[r.jsxDEV("div",{className:"flex items-center justify-between space-y-2",children:[r.jsxDEV("h2",{className:"text-3xl font-bold tracking-tight",children:"Customers"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customers.container.tsx",lineNumber:41,columnNumber:9},this),r.jsxDEV("div",{className:"flex items-center space-x-2",children:[r.jsxDEV(N,{type:"search",placeholder:"Search customers",value:m,onChange:o},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customers.container.tsx",lineNumber:43,columnNumber:11},this),r.jsxDEV(ue,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customers.container.tsx",lineNumber:49,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customers.container.tsx",lineNumber:42,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customers.container.tsx",lineNumber:40,columnNumber:7},this),r.jsxDEV(K,{data:i,columns:f,columnVisibility:e,rowCount:i==null?void 0:i.length,onColumnVisibilityChange:s,hidePagination:!0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customers.container.tsx",lineNumber:52,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customers.container.tsx",lineNumber:39,columnNumber:5},this)}function le(){return r.jsxDEV(r.Fragment,{children:[r.jsxDEV(q,{children:r.jsxDEV("title",{children:"POS System - Customers"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/customers.page.tsx",lineNumber:8,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/customers.page.tsx",lineNumber:7,columnNumber:7},this),r.jsxDEV(ie,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/customers.page.tsx",lineNumber:10,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/customers.page.tsx",lineNumber:6,columnNumber:5},this)}export{le as default};
