import{j as e,a as x,Q as g,r as c,L as P,R as j}from"./index-xDYarw1b.js";import{H as k}from"./Helmet-DpZVI66e.js";import{D as C}from"./data-table-JlQ4Eouv.js";import{C as l}from"./cell-text-B6MDQY_0.js";import{D as y,a as v}from"./dialog-button.component-PCV-9YuA.js";import{B as a,a as E}from"./api-client-CwwcObB-.js";import{d as V,E as _,P as S}from"./react-icons.esm-Cl8tMfv6.js";import{z as n,u as F,t as I,F as p}from"./index-DItwitxo.js";import{I as N}from"./input-DJhrRHsh.js";import{M as R,A as M}from"./upload.constant-D3d5R5uO.js";import{S as w,a as A,b as K,c as B,d as L}from"./select-DShSM5nG.js";import{L as b}from"./label-rPC5FL3x.js";import{G as O}from"./grid-images-BORwpR3T.js";import{g as Q}from"./get-customer-image-url.util-dqnr5XYm.js";import{u as D}from"./useMutation-4ODOkRpf.js";import{c as U,u as q}from"./use-get-customers.query-TK1GQr7L.js";import{g as z}from"./get-yes-no.util-C-N_EnQX.js";import"./index-D5vWOHvA.js";import"./index-ya9CvK1x.js";import"./index-C76uRi-j.js";import"./dropdown-menu-CQWqVCJh.js";import"./useQuery-CQ1CcVzz.js";const Y=n.object({id:n.coerce.number().optional(),full_name:n.coerce.string().nonempty(),phonenumber:n.coerce.string(),is_active:n.coerce.number({invalid_type_error:"Required."}).min(0,"Required.").max(1,"Required."),images_identify_card:n.any().refine(r=>{var s;return!(r!=null&&r.length)||!((s=Array.from(r))!=null&&s.some(m=>m.size>R))},"Max file size is 5MB.").refine(r=>{var s;return!(r!=null&&r.length)||!((s=Array.from(r))!=null&&s.some(m=>!M.includes(m.type)))},".jpg, .jpeg, .png and .webp files are accepted.").optional()});function T({defaultValues:r,mutation:s,onClose:m}){var f;const{register:i,handleSubmit:o,formState:{errors:u}}=F({defaultValues:r,resolver:I(Y)}),h=async t=>{(await s(t)).status&&m&&m()};return e.jsxDEV("form",{onSubmit:o(h),className:"space-y-4",autoComplete:"off",children:[e.jsxDEV("div",{children:[e.jsxDEV(b,{htmlFor:"full_name",children:"Full name"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:57,columnNumber:9},this),e.jsxDEV(N,{placeholder:"Full name",...i("full_name")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:58,columnNumber:9},this),e.jsxDEV(p,{error:u.full_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:59,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:56,columnNumber:7},this),e.jsxDEV("div",{children:[e.jsxDEV(b,{htmlFor:"phonenumber",children:"Phone number"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:63,columnNumber:9},this),e.jsxDEV(N,{placeholder:"Phone number",...i("phonenumber")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:64,columnNumber:9},this),e.jsxDEV(p,{error:u.phonenumber},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:65,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:62,columnNumber:7},this),e.jsxDEV("div",{children:[e.jsxDEV(b,{htmlFor:"is_active",children:"Active"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:69,columnNumber:9},this),e.jsxDEV(w,{...i("is_active"),defaultValue:typeof(r==null?void 0:r.is_active)>"u"?r==null?void 0:r.is_active:String(r==null?void 0:r.is_active),onValueChange:t=>i("is_active").onChange({target:{name:"is_active",value:t}}),children:[e.jsxDEV(A,{className:"h-8 w-40",children:e.jsxDEV(K,{placeholder:"Set status"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:84,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:83,columnNumber:11},this),e.jsxDEV(B,{children:[{label:"No",value:"0"},{label:"Yes",value:"1"}].map(({label:t,value:d})=>e.jsxDEV(L,{value:d,children:t},d,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:91,columnNumber:15},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:86,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:70,columnNumber:9},this),e.jsxDEV(p,{error:u.is_active},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:97,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:68,columnNumber:7},this),e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV(b,{htmlFor:"images_identify_card",children:"Customer Images"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:101,columnNumber:9},this),e.jsxDEV(O,{images:(f=r==null?void 0:r.images_identify_card)==null?void 0:f.map(Q)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:102,columnNumber:9},this),e.jsxDEV(N,{type:"file",multiple:!0,accept:"image/*",...i("images_identify_card")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:107,columnNumber:9},this),e.jsxDEV(p,{error:u.images_identify_card},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:113,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:100,columnNumber:7},this),e.jsxDEV(a,{className:"w-full",children:"Submit"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:118,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer/customer.form.tsx",lineNumber:51,columnNumber:5},this)}function G(r){const s=U(r);return E({method:"patch",url:"/customer_info/update_customers",data:s,headers:{"Content-Type":"multipart/form-data"}})}function H(){const{mutateAsync:r}=D({mutationFn:G,onSuccess:()=>{x.invalidateQueries({queryKey:g.CUSTOMER})}});return{mutationUpdateCustomer:r}}function X({row:r}){const s=c.useRef(null);function m(){var o;(o=s.current)==null||o.click()}const{mutationUpdateCustomer:i}=H();return e.jsxDEV(y,{title:"Update customer info",className:"w-96",trigger:e.jsxDEV(a,{variant:"outline",size:"icon",children:e.jsxDEV(V,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/update-customer.feature.tsx",lineNumber:30,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/update-customer.feature.tsx",lineNumber:29,columnNumber:9},this),actionButtons:e.jsxDEV(v,{asChild:!0,children:e.jsxDEV(a,{ref:s,type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/update-customer.feature.tsx",lineNumber:35,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/update-customer.feature.tsx",lineNumber:34,columnNumber:9},this),children:e.jsxDEV(T,{defaultValues:r.original,onClose:m,mutation:i},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/update-customer.feature.tsx",lineNumber:41,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/update-customer.feature.tsx",lineNumber:25,columnNumber:5},this)}const Z={id:!0,full_name:!0,is_active:!0,phonenumber:!0,images_identify_card:!0,uuid_id:!0},J=()=>[{accessorKey:"id",header:"ID",enableHiding:!1,cell:r=>e.jsxDEV(l,{children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:28,columnNumber:14},void 0)},{accessorKey:"full_name",header:"Full Name",cell:r=>e.jsxDEV(l,{children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:35,columnNumber:14},void 0)},{accessorKey:"is_active",header:"Active",cell:r=>e.jsxDEV(l,{children:z(r.getValue())},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:42,columnNumber:14},void 0)},{accessorKey:"phonenumber",header:"Phone Number",cell:r=>e.jsxDEV(l,{children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:49,columnNumber:14},void 0)},{accessorKey:"images_identify_card",header:"Identify Images",cell:r=>e.jsxDEV(l,{children:r.getValue().length},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:56,columnNumber:14},void 0)},{accessorKey:"uuid_id",header:"UUID",cell:r=>e.jsxDEV(l,{children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:63,columnNumber:14},void 0)},{id:"actions",enableHiding:!1,cell:({row:r})=>e.jsxDEV("div",{className:"space-x-2",children:[e.jsxDEV(X,{row:r},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:72,columnNumber:11},void 0),e.jsxDEV(P,{to:j.CUSTOMER_DETAIL.replace(":id",String(r.original.id)),className:"text-primary",children:e.jsxDEV(a,{variant:"outline",size:"icon",children:e.jsxDEV(_,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:78,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:77,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:73,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer.column.tsx",lineNumber:71,columnNumber:9},void 0)}];function W(r){const s=U(r);return E({method:"post",url:"/customer_info/add_customers",data:s,headers:{"Content-Type":"multipart/form-data"}})}function $(){const{mutateAsync:r}=D({mutationFn:W,onSuccess:s=>{s.status&&x.invalidateQueries({queryKey:g.CUSTOMER})}});return{mutationCreateCustomer:r}}function ee(){const r=c.useRef(null);function s(){var i;(i=r.current)==null||i.click()}const{mutationCreateCustomer:m}=$();return e.jsxDEV(y,{title:"Create new customer",className:"w-96",trigger:e.jsxDEV(a,{className:"gap-2",children:[e.jsxDEV(S,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/create-customer.feature.tsx",lineNumber:24,columnNumber:11},this)," Create new customer"]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/create-customer.feature.tsx",lineNumber:23,columnNumber:9},this),actionButtons:e.jsxDEV(v,{asChild:!0,children:e.jsxDEV(a,{ref:r,type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/create-customer.feature.tsx",lineNumber:29,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/create-customer.feature.tsx",lineNumber:28,columnNumber:9},this),children:e.jsxDEV(T,{defaultValues:{is_active:1},onClose:s,mutation:m},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/create-customer.feature.tsx",lineNumber:35,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/create-customer.feature.tsx",lineNumber:19,columnNumber:5},this)}function re(){const[r,s]=c.useState(Z),[m,i]=c.useState(),o=c.useDeferredValue(m),{customers:u,refetchCustomers:h}=q(o),f=c.useMemo(()=>J(),[]),t=d=>{i(d.target.value)};return c.useEffect(()=>{h()},[o]),e.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[e.jsxDEV("div",{className:"flex items-center justify-between space-y-2",children:[e.jsxDEV("h2",{className:"text-3xl font-bold tracking-tight",children:"Customers"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customers.container.tsx",lineNumber:41,columnNumber:9},this),e.jsxDEV("div",{className:"flex items-center space-x-2",children:[e.jsxDEV(N,{type:"search",placeholder:"Search customers",value:m,onChange:t},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customers.container.tsx",lineNumber:43,columnNumber:11},this),e.jsxDEV(ee,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customers.container.tsx",lineNumber:49,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customers.container.tsx",lineNumber:42,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customers.container.tsx",lineNumber:40,columnNumber:7},this),e.jsxDEV(C,{data:u,columns:f,columnVisibility:r,rowCount:u==null?void 0:u.length,onColumnVisibilityChange:s,hidePagination:!0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customers.container.tsx",lineNumber:52,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customers.container.tsx",lineNumber:39,columnNumber:5},this)}function Ue(){return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(k,{children:e.jsxDEV("title",{children:"POS System - Customers"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/customers.page.tsx",lineNumber:8,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/customers.page.tsx",lineNumber:7,columnNumber:7},this),e.jsxDEV(re,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/customers.page.tsx",lineNumber:10,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/customers.page.tsx",lineNumber:6,columnNumber:5},this)}export{Ue as default};
