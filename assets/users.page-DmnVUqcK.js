import{a as x,Q as p,j as e,r as b}from"./index-CrgaQZZi.js";import{a as N,H as U}from"./Helmet-BtZ7U0QR.js";import{R as v}from"./role-redirect.component-RALV01hT.js";import{T as V,a as k,b as E,c as P,u as T,D}from"./index-DCPbyJaZ.js";import{C as n}from"./cell-text-BNg_TNdP.js";import{g as j,a as S}from"./get-status.util-DC1d3cyY.js";import{B as C}from"./badge-B36O0rUq.js";import{U as w,P as F}from"./react-icons.esm-DuamYfJ8.js";import{B as d}from"./button-CrLqvpvw.js";import{u as h}from"./useMutation-Dd67b7hD.js";import{u as R}from"./useQuery-lrpO5rpq.js";import{k as _}from"./index-Bk1FUpaF.js";import{D as B}from"./dialog-button.component-B5eUm09p.js";import{D as K}from"./dialog-BlCK8-DU.js";import{z as l,u as I,t as q,F as a}from"./index-DqrNToSo.js";import{I as c}from"./input-BZy6TJT9.js";import{S as Q,a as M,b as A,c as L,d as H}from"./select-DrFuJnQx.js";import{L as o}from"./label-BrUVK09T.js";import{R as W}from"./role.component-CWVs5417.js";import"./use-auth.cache-6c4ifGiC.js";import"./Combination-D6Jm7gtk.js";import"./index-7iSC9myz.js";import"./dropdown-menu-2K5Ff67t.js";import"./index-BD-Wf0QL.js";import"./index-D3Fi_Hth.js";function z(r){return N({method:"patch",url:"/user/set_active",data:r})}function Y(){const{mutateAsync:r}=h({mutationFn:z,onSettled:()=>{x.invalidateQueries({queryKey:p.USERS})}});return{mutationUpdateUserStatusById:r}}function G({status:r,id:u}){const{mutationUpdateUserStatusById:i}=Y(),s=()=>{i({id_user:u,active:!r})};return e.jsxDEV(V,{children:e.jsxDEV(k,{children:[e.jsxDEV(E,{asChild:!0,children:e.jsxDEV(d,{variant:"outline",size:"icon",onClick:s,children:e.jsxDEV(w,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:35,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:30,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:29,columnNumber:9},this),e.jsxDEV(P,{children:e.jsxDEV("p",{children:["Change user to ",r?"inactive":"active","."]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:39,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:38,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:28,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:27,columnNumber:5},this)}const O={id:!0,active:!0,full_name:!0,public_id:!1,role:!0,token:!1,username:!0,working_address:!0,phonenumber:!0},J=()=>[{accessorKey:"id",header:"ID",enableHiding:!1,cell:r=>e.jsxDEV(n,{children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/columns/user.column.tsx",lineNumber:29,columnNumber:14},void 0)},{accessorKey:"username",header:"Username",cell:r=>e.jsxDEV(n,{children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/columns/user.column.tsx",lineNumber:36,columnNumber:14},void 0)},{accessorKey:"full_name",header:"Full Name",cell:r=>e.jsxDEV(n,{children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/columns/user.column.tsx",lineNumber:43,columnNumber:14},void 0)},{accessorKey:"role",header:"Role",cell:r=>e.jsxDEV(n,{children:j(r.getValue())},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/columns/user.column.tsx",lineNumber:51,columnNumber:14},void 0)},{accessorKey:"active",header:"Status",cell:r=>e.jsxDEV("div",{className:"space-x-2 truncate",children:[e.jsxDEV(C,{variant:r.getValue()?"success":"destructive",children:S(r.getValue())},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/columns/user.column.tsx",lineNumber:61,columnNumber:11},void 0),e.jsxDEV(G,{id:r.row.original.id,status:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/columns/user.column.tsx",lineNumber:65,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/columns/user.column.tsx",lineNumber:60,columnNumber:9},void 0)},{accessorKey:"phonenumber",header:"Phone",cell:r=>e.jsxDEV(n,{children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/columns/user.column.tsx",lineNumber:77,columnNumber:14},void 0)},{accessorKey:"working_address",header:"Working Address",cell:r=>e.jsxDEV(n,{children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/columns/user.column.tsx",lineNumber:84,columnNumber:14},void 0)}];function X(){return N({url:"/user/get_all"})}function Z(){const{data:r}=R({queryKey:p.USERS,queryFn:X,gcTime:1e4}),u=b.useMemo(()=>r!=null&&r.status?_(r.result,"id"):{},[r==null?void 0:r.status]);return{users:r==null?void 0:r.result,usersByKey:u}}const $=l.object({id:l.coerce.number().optional(),role:l.coerce.number({invalid_type_error:"Required."}).min(1,"Required.").max(2,"Required."),username:l.string().nonempty(),full_name:l.string().nonempty(),password:l.string().nonempty(),phonenumber:l.string(),working_address:l.string().nonempty()});function ee({defaultValues:r,mutation:u,onClose:i}){const{register:s,handleSubmit:g,formState:{errors:m}}=I({defaultValues:r,resolver:q($)}),y=async t=>{(await u(t)).status&&i&&i()};return e.jsxDEV("form",{onSubmit:g(y),className:"space-y-4",autoComplete:"off",children:[e.jsxDEV("div",{children:[e.jsxDEV(o,{htmlFor:"username",children:"Username"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:49,columnNumber:9},this),e.jsxDEV(c,{placeholder:"Username",...s("username")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:50,columnNumber:9},this),e.jsxDEV(a,{error:m.username},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:51,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:48,columnNumber:7},this),e.jsxDEV("div",{children:[e.jsxDEV(o,{htmlFor:"fullname",children:"Full name"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:55,columnNumber:9},this),e.jsxDEV(c,{placeholder:"Full name",...s("full_name")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:56,columnNumber:9},this),e.jsxDEV(a,{error:m.full_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:57,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:54,columnNumber:7},this),e.jsxDEV("div",{children:[e.jsxDEV(o,{htmlFor:"password",children:"Password"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:61,columnNumber:9},this),e.jsxDEV(c,{type:"password",placeholder:"Password",...s("password")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:62,columnNumber:9},this),e.jsxDEV(a,{error:m.password},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:67,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:60,columnNumber:7},this),e.jsxDEV("div",{children:[e.jsxDEV(o,{htmlFor:"role",children:"Role"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:71,columnNumber:9},this),e.jsxDEV(Q,{...s("role"),defaultValue:"1",onValueChange:t=>s("role").onChange({target:{name:"role",value:t}}),children:[e.jsxDEV(M,{className:"h-8 w-20",children:e.jsxDEV(A,{placeholder:"Set role"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:80,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:79,columnNumber:11},this),e.jsxDEV(L,{children:[{role:"User",value:"1"},{role:"Admin",value:"2"}].map(({role:t,value:f})=>e.jsxDEV(H,{value:f,children:t},f,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:87,columnNumber:15},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:82,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:72,columnNumber:9},this),e.jsxDEV(a,{error:m.role},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:93,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:70,columnNumber:7},this),e.jsxDEV("div",{children:[e.jsxDEV(o,{htmlFor:"phonenumber",children:"Phone number"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:97,columnNumber:9},this),e.jsxDEV(c,{placeholder:"Phone number",...s("phonenumber")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:98,columnNumber:9},this),e.jsxDEV(a,{error:m.phonenumber},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:99,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:96,columnNumber:7},this),e.jsxDEV("div",{children:[e.jsxDEV(o,{htmlFor:"working_address",children:"Working address"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:103,columnNumber:9},this),e.jsxDEV(c,{placeholder:"Working address",...s("working_address")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:104,columnNumber:9},this),e.jsxDEV(a,{error:m.working_address},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:105,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:102,columnNumber:7},this),e.jsxDEV(d,{className:"w-full",children:"Submit"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:108,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:43,columnNumber:5},this)}function re(r){return N({url:"/user/signup",method:"post",data:r})}function se(){const{mutateAsync:r}=h({mutationFn:re,onSuccess:u=>{u.status&&x.invalidateQueries({queryKey:p.USERS})}});return{mutationSignUp:r}}function ue(){const r=b.useRef(null);function u(){var s;(s=r.current)==null||s.click()}const{mutationSignUp:i}=se();return e.jsxDEV(W,{type:"admin",children:e.jsxDEV(B,{title:"Create new user",className:"w-96",trigger:e.jsxDEV(d,{className:"gap-2",children:[e.jsxDEV(F,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/create-user.feature.tsx",lineNumber:26,columnNumber:13},this)," Create new user"]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/create-user.feature.tsx",lineNumber:25,columnNumber:11},this),actionButtons:e.jsxDEV(K,{asChild:!0,children:e.jsxDEV(d,{ref:r,type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/create-user.feature.tsx",lineNumber:31,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/create-user.feature.tsx",lineNumber:30,columnNumber:11},this),children:e.jsxDEV(ee,{defaultValues:{role:1},onClose:u,mutation:i},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/create-user.feature.tsx",lineNumber:37,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/create-user.feature.tsx",lineNumber:21,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/create-user.feature.tsx",lineNumber:20,columnNumber:5},this)}function ie(){const[r,u]=T("user-columns",{defaultValue:O}),{users:i}=Z(),s=b.useMemo(()=>J(),[]);return e.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[e.jsxDEV("div",{className:"flex items-center flex-col lg:flex-row justify-between space-y-2",children:[e.jsxDEV("h2",{className:"text-2xl lg:text-3xl font-bold tracking-tight",children:"Users"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/containers/users.container.tsx",lineNumber:25,columnNumber:9},this),e.jsxDEV("div",{className:"flex items-center space-x-2",children:e.jsxDEV(ue,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/containers/users.container.tsx",lineNumber:27,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/containers/users.container.tsx",lineNumber:26,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/containers/users.container.tsx",lineNumber:24,columnNumber:7},this),e.jsxDEV(D,{data:i,columns:s,columnVisibility:r,rowCount:i==null?void 0:i.length,onColumnVisibilityChange:u,hidePagination:!0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/containers/users.container.tsx",lineNumber:31,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/containers/users.container.tsx",lineNumber:23,columnNumber:5},this)}function Se(){return e.jsxDEV(v,{type:"admin",children:[e.jsxDEV(U,{children:e.jsxDEV("title",{children:"POS System - List of Users"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/users.page.tsx",lineNumber:9,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/users.page.tsx",lineNumber:8,columnNumber:7},this),e.jsxDEV(ie,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/users.page.tsx",lineNumber:11,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/users.page.tsx",lineNumber:7,columnNumber:5},this)}export{Se as default};
