import{j as e,L as c,ak as U,al as j,am as k,an as T,ao as _,P as d,B as N,ae as h,A as E,Q as g,r as p,M as P,aq as V,T as y,G as a,E as S,W as C,ap as O,a2 as R,a5 as F}from"./index-ClphHpRy.js";import{z as m,u as M,t as I,I as f,F as t}from"./index-Dov3n5QL.js";import{R as x}from"./role.component-CBnP8Hiz.js";const K=m.object({id:m.coerce.number().optional(),active:m.coerce.number(),note:m.coerce.string(),pos_error_code:m.coerce.string(),pos_error_message_en:m.coerce.string(),pos_error_message_vi:m.coerce.string()});function v({defaultValues:r,mutation:o,onClose:l}){const{register:s,handleSubmit:i,formState:{errors:n}}=M({defaultValues:r,resolver:I(K)}),D=async u=>{(await o(u)).status&&l&&l()};return e.jsxDEV("form",{onSubmit:i(D),className:"space-y-4",autoComplete:"off",children:[e.jsxDEV("div",{children:[e.jsxDEV(c,{htmlFor:"pos_error_code",children:"POS Error Code"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:50,columnNumber:9},this),e.jsxDEV(f,{placeholder:"POS Error Code",...s("pos_error_code")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:51,columnNumber:9},this),e.jsxDEV(t,{error:n.pos_error_code},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:52,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:49,columnNumber:7},this),e.jsxDEV("div",{children:[e.jsxDEV(c,{htmlFor:"pos_error_message_en",children:"POS Error Message (EN)"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:56,columnNumber:9},this),e.jsxDEV(f,{placeholder:"POS Error Message (EN)",...s("pos_error_message_en")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:57,columnNumber:9},this),e.jsxDEV(t,{error:n.pos_error_message_en},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:61,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:55,columnNumber:7},this),e.jsxDEV("div",{children:[e.jsxDEV(c,{htmlFor:"pos_error_message_vi",children:"POS Error Message (VI)"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:65,columnNumber:9},this),e.jsxDEV(f,{placeholder:"POS Error Message (VI)",...s("pos_error_message_vi")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:66,columnNumber:9},this),e.jsxDEV(t,{error:n.pos_error_message_vi},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:70,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:64,columnNumber:7},this),e.jsxDEV("div",{children:[e.jsxDEV(c,{htmlFor:"note",children:"Note"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:74,columnNumber:9},this),e.jsxDEV(f,{placeholder:"Note",...s("note")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:75,columnNumber:9},this),e.jsxDEV(t,{error:n.note},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:76,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:73,columnNumber:7},this),e.jsxDEV("div",{children:[e.jsxDEV(c,{htmlFor:"active",children:"Active"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:80,columnNumber:9},this),e.jsxDEV(U,{...s("active"),defaultValue:typeof(r==null?void 0:r.active)>"u"?r==null?void 0:r.active:String(r==null?void 0:r.active),onValueChange:u=>s("active").onChange({target:{name:"active",value:u}}),children:[e.jsxDEV(j,{className:"h-8 w-40",children:e.jsxDEV(k,{placeholder:"Set status"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:95,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:94,columnNumber:11},this),e.jsxDEV(T,{children:[{label:"No",value:"0"},{label:"Yes",value:"1"}].map(({label:u,value:b})=>e.jsxDEV(_,{value:b,children:u},b,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:102,columnNumber:15},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:97,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:81,columnNumber:9},this),e.jsxDEV(t,{error:n.active},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:108,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:79,columnNumber:7},this),e.jsxDEV(d,{className:"w-full",children:"Submit"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:111,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos-error/pos-error.form.tsx",lineNumber:44,columnNumber:5},this)}function w(r){return N({method:"patch",url:"/pos_error_code",data:r})}function Q(){const{mutateAsync:r}=h({mutationFn:w,onSuccess:()=>{E.invalidateQueries({queryKey:g.POS_ERRORS})}});return{mutationUpdatePosError:r}}function q({row:r}){const o=p.useRef(null);function l(){var i;(i=o.current)==null||i.click()}const{mutationUpdatePosError:s}=Q();return e.jsxDEV(x,{type:"admin",children:e.jsxDEV(P,{title:"Update POS error",className:"w-96",trigger:e.jsxDEV(d,{variant:"outline",size:"icon",children:e.jsxDEV(V,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/update-pos-error.feature.tsx",lineNumber:32,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/update-pos-error.feature.tsx",lineNumber:31,columnNumber:11},this),actionButtons:e.jsxDEV(y,{asChild:!0,children:e.jsxDEV(d,{ref:o,type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/update-pos-error.feature.tsx",lineNumber:37,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/update-pos-error.feature.tsx",lineNumber:36,columnNumber:11},this),children:e.jsxDEV(v,{defaultValues:r.original,onClose:l,mutation:s},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/update-pos-error.feature.tsx",lineNumber:43,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/update-pos-error.feature.tsx",lineNumber:27,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/update-pos-error.feature.tsx",lineNumber:26,columnNumber:5},this)}const A={id:!0,active:!0,note:!0,pos_error_code:!0,pos_error_message_en:!0,pos_error_message_vi:!0},B=()=>[{accessorKey:"id",header:"ID",enableHiding:!1,cell:r=>e.jsxDEV(a,{children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos-error.column.tsx",lineNumber:24,columnNumber:14},void 0)},{accessorKey:"note",header:"Note",cell:r=>e.jsxDEV(a,{children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos-error.column.tsx",lineNumber:31,columnNumber:14},void 0)},{accessorKey:"active",header:"Active",cell:r=>e.jsxDEV(a,{children:r.getValue()?"Yes":"No"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos-error.column.tsx",lineNumber:38,columnNumber:14},void 0)},{accessorKey:"pos_error_code",header:"POS Error Code",cell:r=>e.jsxDEV(a,{children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos-error.column.tsx",lineNumber:45,columnNumber:14},void 0)},{accessorKey:"pos_error_message_en",header:"Error Message (EN)",cell:r=>e.jsxDEV(a,{children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos-error.column.tsx",lineNumber:52,columnNumber:14},void 0)},{accessorKey:"pos_error_message_vi",header:"Error Message (VI)",cell:r=>e.jsxDEV(a,{children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos-error.column.tsx",lineNumber:59,columnNumber:14},void 0)},{id:"actions",enableHiding:!1,cell:({row:r})=>e.jsxDEV(x,{type:"admin",children:e.jsxDEV("div",{className:"space-x-2",children:e.jsxDEV(q,{row:r},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos-error.column.tsx",lineNumber:68,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos-error.column.tsx",lineNumber:67,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos-error.column.tsx",lineNumber:66,columnNumber:7},void 0)}];function z(r){return N({url:"/pos_error_code",params:r})}function Y(r){const o=[r.page,r.page_limit].join("_"),{data:l}=S({queryKey:[...g.POS_ERRORS,o],queryFn:()=>z(r),placeholderData:C,gcTime:1e3*10});return{posErrors:l}}function H(r){return N({method:"post",url:"/pos_error_code",data:r})}function L(){const{mutateAsync:r}=h({mutationFn:H,onSuccess:o=>{o.status&&E.invalidateQueries({queryKey:g.POS_ERRORS})}});return{mutationCreatePosError:r}}function G(){const r=p.useRef(null);function o(){var s;(s=r.current)==null||s.click()}const{mutationCreatePosError:l}=L();return e.jsxDEV(x,{type:"admin",children:e.jsxDEV(P,{title:"Create POS error",className:"w-96",trigger:e.jsxDEV(d,{className:"gap-2",children:[e.jsxDEV(O,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/create-pos-error.feature.tsx",lineNumber:26,columnNumber:13},this)," Create POS error"]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/create-pos-error.feature.tsx",lineNumber:25,columnNumber:11},this),actionButtons:e.jsxDEV(y,{asChild:!0,children:e.jsxDEV(d,{ref:r,type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/create-pos-error.feature.tsx",lineNumber:31,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/create-pos-error.feature.tsx",lineNumber:30,columnNumber:11},this),children:e.jsxDEV(v,{onClose:o,mutation:l},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/create-pos-error.feature.tsx",lineNumber:37,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/create-pos-error.feature.tsx",lineNumber:21,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/create-pos-error.feature.tsx",lineNumber:20,columnNumber:5},this)}function W(){const[r,o]=p.useState({pageIndex:0,pageSize:10}),[l,s]=p.useState(A),{posErrors:i}=Y({page:r.pageIndex+1,page_limit:r.pageSize}),n=p.useMemo(()=>B(),[]);return e.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[e.jsxDEV("div",{className:"flex items-center justify-between space-y-2",children:[e.jsxDEV("h2",{className:"text-3xl font-bold tracking-tight",children:"POS Errors"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-errors.container.tsx",lineNumber:31,columnNumber:9},this),e.jsxDEV("div",{className:"flex items-center space-x-2",children:e.jsxDEV(G,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-errors.container.tsx",lineNumber:33,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-errors.container.tsx",lineNumber:32,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-errors.container.tsx",lineNumber:30,columnNumber:7},this),e.jsxDEV(R,{data:i==null?void 0:i.result,columns:n,columnVisibility:l,rowCount:i==null?void 0:i.total_data,onColumnVisibilityChange:s,pagination:r,onPaginationChange:o},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-errors.container.tsx",lineNumber:37,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-errors.container.tsx",lineNumber:29,columnNumber:5},this)}function $(){return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(F,{children:e.jsxDEV("title",{children:"POS System - List of POS errors"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-errors.page.tsx",lineNumber:8,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-errors.page.tsx",lineNumber:7,columnNumber:7},this),e.jsxDEV(W,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-errors.page.tsx",lineNumber:10,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-errors.page.tsx",lineNumber:6,columnNumber:5},this)}export{$ as default};
