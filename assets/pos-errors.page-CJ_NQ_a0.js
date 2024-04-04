import{j as r,a as E,Q as g,r as c,k as V}from"./index-BBOSr7wM.js";import{a as x,H as T}from"./Helmet-B_Qq3Yxz.js";import{u as _,D as S}from"./index-BD4JkVE2.js";import{C as u}from"./cell-text-ChSs_gCg.js";import{D as y}from"./dialog-button.component-C7zQarz6.js";import{B as b}from"./button-DqtCoJ9q.js";import{e as C,P as O}from"./react-icons.esm-EA0c0Jq7.js";import{D as P}from"./dialog-CznRd4sf.js";import{z as n,u as R,t as F,F as p}from"./index-CLhdQBHv.js";import{I as f}from"./input-BNsxhIvX.js";import{S as w,a as K,b as I,c as M,d as Q}from"./select-B7uF1bcd.js";import{L as d}from"./label-Dlj4BwLN.js";import{R as h}from"./role.component-DENX05V3.js";import{u as v}from"./useMutation-Cup4ynIy.js";import{g as B}from"./get-yes-no.util-C-N_EnQX.js";import{u as q}from"./useQuery-Cl3Ng3qM.js";import{u as z}from"./index-rqYQCcQn.js";import"./Combination-hPdF80R-.js";import"./index-Bhch_G2P.js";import"./index-Dp3eeLKn.js";import"./dropdown-menu-A9y-Y3_2.js";import"./index-DChdG50K.js";import"./use-auth.cache-CrBnsGvB.js";const A=n.object({id:n.coerce.number().optional(),active:n.coerce.number(),note:n.coerce.string(),pos_error_code:n.coerce.string(),pos_error_message_en:n.coerce.string(),pos_error_message_vi:n.coerce.string()});function D({defaultValues:e,mutation:o,onClose:l}){const{register:s,handleSubmit:a,formState:{errors:m}}=R({defaultValues:e,resolver:F(A)}),N=async i=>{(await o(i)).status&&l&&l()};return r.jsxDEV("form",{onSubmit:a(N),className:"space-y-4",autoComplete:"off",children:[r.jsxDEV("div",{children:[r.jsxDEV(d,{htmlFor:"pos_error_code",children:"POS Error Code"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:50,columnNumber:9},this),r.jsxDEV(f,{placeholder:"POS Error Code",...s("pos_error_code")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:51,columnNumber:9},this),r.jsxDEV(p,{error:m.pos_error_code},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:52,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:49,columnNumber:7},this),r.jsxDEV("div",{children:[r.jsxDEV(d,{htmlFor:"pos_error_message_en",children:"POS Error Message (EN)"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:56,columnNumber:9},this),r.jsxDEV(f,{placeholder:"POS Error Message (EN)",...s("pos_error_message_en")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:57,columnNumber:9},this),r.jsxDEV(p,{error:m.pos_error_message_en},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:61,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:55,columnNumber:7},this),r.jsxDEV("div",{children:[r.jsxDEV(d,{htmlFor:"pos_error_message_vi",children:"POS Error Message (VI)"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:65,columnNumber:9},this),r.jsxDEV(f,{placeholder:"POS Error Message (VI)",...s("pos_error_message_vi")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:66,columnNumber:9},this),r.jsxDEV(p,{error:m.pos_error_message_vi},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:70,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:64,columnNumber:7},this),r.jsxDEV("div",{children:[r.jsxDEV(d,{htmlFor:"note",children:"Note"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:74,columnNumber:9},this),r.jsxDEV(f,{placeholder:"Note",...s("note")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:75,columnNumber:9},this),r.jsxDEV(p,{error:m.note},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:76,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:73,columnNumber:7},this),r.jsxDEV("div",{children:[r.jsxDEV(d,{htmlFor:"active",children:"Active"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:80,columnNumber:9},this),r.jsxDEV(w,{...s("active"),defaultValue:typeof(e==null?void 0:e.active)>"u"?e==null?void 0:e.active:String(e==null?void 0:e.active),onValueChange:i=>s("active").onChange({target:{name:"active",value:i}}),children:[r.jsxDEV(K,{className:"h-8 w-40",children:r.jsxDEV(I,{placeholder:"Set status"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:95,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:94,columnNumber:11},this),r.jsxDEV(M,{children:[{label:"No",value:"0"},{label:"Yes",value:"1"}].map(({label:i,value:t})=>r.jsxDEV(Q,{value:t,children:i},t,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:102,columnNumber:15},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:97,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:81,columnNumber:9},this),r.jsxDEV(p,{error:m.active},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:108,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:79,columnNumber:7},this),r.jsxDEV(b,{className:"w-full",children:"Submit"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:111,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:44,columnNumber:5},this)}function H(e){return x({method:"patch",url:"/pos_error_code",data:e})}function L(){const{mutateAsync:e}=v({mutationFn:H,onSuccess:()=>{E.invalidateQueries({queryKey:g.POS_ERRORS})}});return{mutationUpdatePosError:e}}function Y({row:e}){const o=c.useRef(null);function l(){var a;(a=o.current)==null||a.click()}const{mutationUpdatePosError:s}=L();return r.jsxDEV(h,{type:"admin",children:r.jsxDEV(y,{title:"Update POS error",className:"w-96",trigger:r.jsxDEV(b,{variant:"outline",size:"icon",children:r.jsxDEV(C,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/update-pos-error.feature.tsx",lineNumber:32,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/update-pos-error.feature.tsx",lineNumber:31,columnNumber:11},this),actionButtons:r.jsxDEV(P,{asChild:!0,children:r.jsxDEV(b,{ref:o,type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/update-pos-error.feature.tsx",lineNumber:37,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/update-pos-error.feature.tsx",lineNumber:36,columnNumber:11},this),children:r.jsxDEV(D,{defaultValues:e.original,onClose:l,mutation:s},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/update-pos-error.feature.tsx",lineNumber:43,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/update-pos-error.feature.tsx",lineNumber:27,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/update-pos-error.feature.tsx",lineNumber:26,columnNumber:5},this)}const G={id:!0,active:!0,note:!0,pos_error_code:!0,pos_error_message_en:!0,pos_error_message_vi:!0},J=()=>[{accessorKey:"id",header:"ID",enableHiding:!1,cell:e=>r.jsxDEV(u,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos-error.column.tsx",lineNumber:25,columnNumber:14},void 0)},{accessorKey:"note",header:"Note",cell:e=>r.jsxDEV(u,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos-error.column.tsx",lineNumber:32,columnNumber:14},void 0)},{accessorKey:"active",header:"Active",cell:e=>r.jsxDEV(u,{children:B(e.getValue())},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos-error.column.tsx",lineNumber:39,columnNumber:14},void 0)},{accessorKey:"pos_error_code",header:"POS Error Code",cell:e=>r.jsxDEV(u,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos-error.column.tsx",lineNumber:46,columnNumber:14},void 0)},{accessorKey:"pos_error_message_en",header:"Error Message (EN)",cell:e=>r.jsxDEV(u,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos-error.column.tsx",lineNumber:53,columnNumber:14},void 0)},{accessorKey:"pos_error_message_vi",header:"Error Message (VI)",cell:e=>r.jsxDEV(u,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos-error.column.tsx",lineNumber:60,columnNumber:14},void 0)},{id:"actions",enableHiding:!1,cell:({row:e})=>r.jsxDEV(h,{type:"admin",children:r.jsxDEV("div",{className:"space-x-2",children:r.jsxDEV(Y,{row:e},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos-error.column.tsx",lineNumber:69,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos-error.column.tsx",lineNumber:68,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos-error.column.tsx",lineNumber:67,columnNumber:7},void 0)}];function W(e){return x({url:"/pos_error_code"+(e.keywords?"/search":""),params:e})}function X(e){const o=[e.page,e.page_limit].join("_"),{data:l,refetch:s}=q({queryKey:[...g.POS_ERRORS,o],queryFn:()=>W(e),placeholderData:V,gcTime:1e3*10});return{posErrors:l,refetchPosErrors:s}}function Z(e){return x({method:"post",url:"/pos_error_code",data:e})}function $(){const{mutateAsync:e}=v({mutationFn:Z,onSuccess:o=>{o.status&&E.invalidateQueries({queryKey:g.POS_ERRORS})}});return{mutationCreatePosError:e}}function rr(){const e=c.useRef(null);function o(){var s;(s=e.current)==null||s.click()}const{mutationCreatePosError:l}=$();return r.jsxDEV(h,{type:"admin",children:r.jsxDEV(y,{title:"Create POS error",className:"w-96",trigger:r.jsxDEV(b,{className:"gap-2",children:[r.jsxDEV(O,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/create-pos-error.feature.tsx",lineNumber:26,columnNumber:13},this)," Create POS error"]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/create-pos-error.feature.tsx",lineNumber:25,columnNumber:11},this),actionButtons:r.jsxDEV(P,{asChild:!0,children:r.jsxDEV(b,{ref:e,type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/create-pos-error.feature.tsx",lineNumber:31,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/create-pos-error.feature.tsx",lineNumber:30,columnNumber:11},this),children:r.jsxDEV(D,{defaultValues:{active:1},onClose:o,mutation:l},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/create-pos-error.feature.tsx",lineNumber:37,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/create-pos-error.feature.tsx",lineNumber:21,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/create-pos-error.feature.tsx",lineNumber:20,columnNumber:5},this)}function er(){const[e,o]=c.useState(),l=c.useDeferredValue(e),[s,a]=c.useState({pageIndex:0,pageSize:10}),[m,N]=_("pos-error-columns",{defaultValue:G}),{posErrors:i,refetchPosErrors:t}=X({keywords:l,page:s.pageIndex+1,page_limit:s.pageSize}),k=c.useMemo(()=>J(),[]),U=j=>{o(j.target.value)};return z(()=>{t()},[l]),r.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[r.jsxDEV("div",{className:"flex items-center flex-col lg:flex-row justify-between space-y-2",children:[r.jsxDEV("h2",{className:"text-2xl lg:text-3xl font-bold tracking-tight",children:"POS Errors"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-errors.container.tsx",lineNumber:51,columnNumber:9},this),r.jsxDEV("div",{className:"flex items-center space-x-2",children:[r.jsxDEV(f,{type:"search",placeholder:"Search pos errors",value:e,onChange:U},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-errors.container.tsx",lineNumber:55,columnNumber:11},this),r.jsxDEV(rr,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-errors.container.tsx",lineNumber:61,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-errors.container.tsx",lineNumber:54,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-errors.container.tsx",lineNumber:50,columnNumber:7},this),r.jsxDEV(S,{data:i==null?void 0:i.result,columns:k,columnVisibility:m,rowCount:i==null?void 0:i.total_data,onColumnVisibilityChange:N,pagination:s,onPaginationChange:a},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-errors.container.tsx",lineNumber:65,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-errors.container.tsx",lineNumber:49,columnNumber:5},this)}function kr(){return r.jsxDEV(r.Fragment,{children:[r.jsxDEV(T,{children:r.jsxDEV("title",{children:"POS System - List of POS errors"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-errors.page.tsx",lineNumber:8,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-errors.page.tsx",lineNumber:7,columnNumber:7},this),r.jsxDEV(er,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-errors.page.tsx",lineNumber:10,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-errors.page.tsx",lineNumber:6,columnNumber:5},this)}export{kr as default};
