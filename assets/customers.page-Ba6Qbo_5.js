import{j as e,a as j,Q as C,r as d,L as w,R as I}from"./index-XwE6gQmn.js";import{a as y,H as U}from"./Helmet-DUuvCvTm.js";import{u as D,D as R}from"./index-BsOMOp0z.js";import{C as u}from"./cell-text-H3JibL2T.js";import{D as _}from"./dialog-button.component-msJRMg9P.js";import{B as m}from"./button-C4HOWXLM.js";import{e as M,E as T,P as A}from"./react-icons.esm-5SUvy-NO.js";import{D as v}from"./dialog-Cq2VxrqT.js";import{z as c,u as K,t as P,F as h}from"./index-MxbznExh.js";import{I as g}from"./input-BFqvYdSA.js";import{M as L,A as B}from"./upload.constant-D3d5R5uO.js";import{S as O,a as Q,b as k,c as q,d as z}from"./select-BLsJIQQv.js";import{L as x}from"./label-DhoCOihp.js";import{G as b}from"./grid-images-D-VjJXus.js";import{g as S}from"./get-customer-image-url.util-dqnr5XYm.js";import{u as E}from"./useMutation-Czv1wBp1.js";import{c as N}from"./convert-data-to-form-data.util-CYcIkezp.js";import{g as Y}from"./get-yes-no.util-C-N_EnQX.js";import{u as G}from"./use-get-customers.query-CnOE94fL.js";import{u as H}from"./index-Dwx9NaXw.js";import"./Combination-WE48jzIv.js";import"./index-DWR91OCR.js";import"./index-CROUqNK7.js";import"./dropdown-menu-oMbE38VB.js";import"./index-DrW2nO8L.js";import"./useQuery-BXJOiSOe.js";const X=c.object({id:c.coerce.number().optional(),full_name:c.coerce.string().nonempty(),phonenumber:c.coerce.string(),is_active:c.coerce.number({invalid_type_error:"Required."}).min(0,"Required.").max(1,"Required."),images_identify_card:c.any().refine(t=>{var r;return!(t!=null&&t.length)||!((r=Array.from(t))!=null&&r.some(s=>s.size>L))},"Max file size is 5MB.").refine(t=>{var r;return!(t!=null&&t.length)||!((r=Array.from(t))!=null&&r.some(s=>!B.includes(s.type)))},".jpg, .jpeg, .png and .webp files are accepted.").optional()});function F({defaultValues:t,mutation:r,onClose:s}){var p;const{register:n,handleSubmit:i,formState:{errors:o}}=K({defaultValues:t,resolver:P(X)}),f=async a=>{(await r(a)).status&&s&&s()};return e.jsxs("form",{onSubmit:i(f),className:"space-y-4",autoComplete:"off",children:[e.jsxs("div",{children:[e.jsx(x,{htmlFor:"full_name",children:"Full name"}),e.jsx(g,{placeholder:"Full name",...n("full_name")}),e.jsx(h,{error:o.full_name})]}),e.jsxs("div",{children:[e.jsx(x,{htmlFor:"phonenumber",children:"Phone number"}),e.jsx(g,{placeholder:"Phone number",...n("phonenumber")}),e.jsx(h,{error:o.phonenumber})]}),e.jsxs("div",{children:[e.jsx(x,{htmlFor:"is_active",children:"Active"}),e.jsxs(O,{...n("is_active"),defaultValue:typeof(t==null?void 0:t.is_active)>"u"?t==null?void 0:t.is_active:String(t==null?void 0:t.is_active),onValueChange:a=>n("is_active").onChange({target:{name:"is_active",value:a}}),children:[e.jsx(Q,{className:"h-8 w-40",children:e.jsx(k,{placeholder:"Set status"})}),e.jsx(q,{children:[{label:"No",value:"0"},{label:"Yes",value:"1"}].map(({label:a,value:l})=>e.jsx(z,{value:l,children:a},l))})]}),e.jsx(h,{error:o.is_active})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(x,{htmlFor:"images_identify_card",children:"Customer Images"}),e.jsx(b,{images:(p=t==null?void 0:t.images_identify_card)==null?void 0:p.map(S)}),e.jsx(g,{type:"file",multiple:!0,accept:"image/*",...n("images_identify_card")}),e.jsx(h,{error:o.images_identify_card})]}),e.jsx(m,{className:"w-full",children:"Submit"})]})}function Z(t){const r=N(t);return y({method:"patch",url:"/customer_info/update_customers",data:r,headers:{"Content-Type":"multipart/form-data"}})}function J(){const{mutateAsync:t}=E({mutationFn:Z,onSuccess:()=>{j.invalidateQueries({queryKey:C.CUSTOMER})}});return{mutationUpdateCustomer:t}}function W({row:t}){const r=d.useRef(null);function s(){var i;(i=r.current)==null||i.click()}const{mutationUpdateCustomer:n}=J();return e.jsx(_,{title:"Update customer info",className:"w-96",trigger:e.jsx(m,{variant:"outline",size:"icon",children:e.jsx(M,{})}),actionButtons:e.jsx(v,{asChild:!0,children:e.jsx(m,{ref:r,type:"button",variant:"secondary",children:"Close"})}),children:e.jsx(F,{defaultValues:t.original,onClose:s,mutation:n})})}const $={id:!0,full_name:!0,is_active:!0,phonenumber:!0,images_identify_card:!0,uuid_id:!1},V=()=>[{accessorKey:"id",header:"ID",enableHiding:!1,cell:t=>e.jsx(u,{children:t.getValue()})},{accessorKey:"full_name",header:"Full Name",cell:t=>e.jsx(u,{children:t.getValue()})},{accessorKey:"is_active",header:"Active",cell:t=>e.jsx(u,{children:Y(t.getValue())})},{accessorKey:"phonenumber",header:"Phone Number",cell:t=>e.jsx(u,{children:t.getValue()})},{accessorKey:"images_identify_card",header:"Identify Images",cell:t=>e.jsx(b,{className:"grid-cols-2 max-w-xs min-w-[180px]",images:t.getValue().map(S)})},{accessorKey:"uuid_id",header:"UUID",cell:t=>e.jsx(u,{className:"w-20",children:t.getValue()})},{id:"actions",enableHiding:!1,cell:({row:t})=>e.jsxs("div",{className:"space-x-2 truncate",children:[e.jsx(W,{row:t}),e.jsx(w,{to:I.CUSTOMER_DETAIL.replace(":id",String(t.original.id)),className:"text-primary",children:e.jsx(m,{variant:"outline",size:"icon",children:e.jsx(T,{})})})]})}];function ee(t){const r=N(t);return y({method:"post",url:"/customer_info/add_customers",data:r,headers:{"Content-Type":"multipart/form-data"}})}function te(){const{mutateAsync:t}=E({mutationFn:ee,onSuccess:r=>{r.status&&j.invalidateQueries({queryKey:C.CUSTOMER})}});return{mutationCreateCustomer:t}}function re(){const t=d.useRef(null);function r(){var n;(n=t.current)==null||n.click()}const{mutationCreateCustomer:s}=te();return e.jsx(_,{title:"Create new customer",className:"w-96",trigger:e.jsxs(m,{className:"gap-2",children:[e.jsx(A,{})," Create new customer"]}),actionButtons:e.jsx(v,{asChild:!0,children:e.jsx(m,{ref:t,type:"button",variant:"secondary",children:"Close"})}),children:e.jsx(F,{defaultValues:{is_active:1},onClose:r,mutation:s})})}function se(){const[t,r]=D("customer-columns",{defaultValue:$}),[s,n]=d.useState(),i=d.useDeferredValue(s),{customers:o,refetchCustomers:f}=G(i),p=d.useMemo(()=>V(),[]),a=l=>{n(l.target.value)};return H(()=>{f()},[i]),e.jsxs("div",{className:"space-y-6 px-4 py-4",children:[e.jsxs("div",{className:"flex items-center flex-col lg:flex-row justify-between space-y-2",children:[e.jsx("h2",{className:"text-2xl lg:text-3xl font-bold tracking-tight",children:"Customers"}),e.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-2",children:[e.jsx(g,{type:"search",placeholder:"Search customers",value:s,onChange:a}),e.jsx(re,{})]})]}),e.jsx(R,{data:o,columns:p,columnVisibility:t,rowCount:o==null?void 0:o.length,onColumnVisibilityChange:r,hidePagination:!0})]})}function Ue(){return e.jsxs(e.Fragment,{children:[e.jsx(U,{children:e.jsx("title",{children:"POS System - Customers"})}),e.jsx(se,{})]})}export{Ue as default};
