import{a as h,Q as p,j as e,r as b}from"./index-CJ4aojTS.js";import{a as N,H as U}from"./Helmet-CQJxFuV9.js";import{R as v}from"./role-redirect.component-DTyU-cAr.js";import{T as D,a as V,b as k,c as E,u as T,D as P}from"./index-BmIi7Ov-.js";import{C as a}from"./cell-text-CM1Jten_.js";import{g as j,a as S}from"./get-status.util-DC1d3cyY.js";import{B as C}from"./badge-C_94xrZ-.js";import{U as w,P as F}from"./react-icons.esm-DY0tv6xu.js";import{B as d}from"./button-C7e1d5xZ.js";import{u as x}from"./useMutation-5gSZwTnf.js";import{A as R,a as _,b as A,c as B,d as K,e as I,f as q,g as Q,h as M}from"./alert-dialog-xGKsAhOS.js";import{u as H}from"./useQuery-DY6s3jgh.js";import{k as L}from"./index-CmOA9PUo.js";import{D as W}from"./dialog-button.component-Ztd2_n_g.js";import{D as z}from"./dialog-CRrJ1IH6.js";import{z as l,u as Y,t as G,F as n}from"./index-D8SDuPEw.js";import{I as c}from"./input-8Nyj8SBJ.js";import{S as O,a as J,b as X,c as Z,d as $}from"./select-CRLuTXUs.js";import{L as t}from"./label-DHIBfv39.js";import{R as ee}from"./role.component-CwBRz00r.js";import"./use-auth.cache--d25v-3P.js";import"./Combination-BfeDkqor.js";import"./index-BpO2Y5GS.js";import"./dropdown-menu-BEcUP2XE.js";import"./index-B3aP1jZr.js";import"./index-CBzUkH_N.js";import"./index-dwtWVcVM.js";function re(r){return N({method:"patch",url:"/user/set_active",data:r})}function se(){const{mutateAsync:r}=x({mutationFn:re,onSettled:()=>{h.invalidateQueries({queryKey:p.USERS})}});return{mutationUpdateUserStatusById:r}}function ue({status:r,id:u}){const{mutationUpdateUserStatusById:i}=se(),s=()=>{i({id_user:u,active:!r})};return e.jsxDEV(D,{children:e.jsxDEV(V,{children:[e.jsxDEV(k,{children:e.jsxDEV(R,{children:[e.jsxDEV(_,{asChild:!0,children:e.jsxDEV(d,{variant:"outline",size:"icon",children:e.jsxDEV(w,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:44,columnNumber:17},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:43,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:42,columnNumber:13},this),e.jsxDEV(A,{children:[e.jsxDEV(B,{children:[e.jsxDEV(K,{children:"Changing status"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:49,columnNumber:17},this),e.jsxDEV(I,{children:["Confirm to change user status to"," ",r?"inactive":"active"]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:50,columnNumber:17},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:48,columnNumber:15},this),e.jsxDEV(q,{children:[e.jsxDEV(Q,{children:"Cancel"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:56,columnNumber:17},this),e.jsxDEV(M,{onClick:s,children:"Confirm"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:57,columnNumber:17},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:55,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:47,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:41,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:40,columnNumber:9},this),e.jsxDEV(E,{children:e.jsxDEV("p",{children:["Change user to ",r?"inactive":"active","."]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:65,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:64,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:39,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/update-user-status.feature.tsx",lineNumber:38,columnNumber:5},this)}const ie={id:!0,active:!0,full_name:!0,public_id:!1,role:!0,token:!1,username:!0,working_address:!0,phonenumber:!0},le=()=>[{accessorKey:"id",header:"ID",enableHiding:!1,cell:r=>e.jsxDEV(a,{children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/columns/user.column.tsx",lineNumber:29,columnNumber:14},void 0)},{accessorKey:"username",header:"Username",cell:r=>e.jsxDEV(a,{children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/columns/user.column.tsx",lineNumber:36,columnNumber:14},void 0)},{accessorKey:"full_name",header:"Full Name",cell:r=>e.jsxDEV(a,{children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/columns/user.column.tsx",lineNumber:43,columnNumber:14},void 0)},{accessorKey:"role",header:"Role",cell:r=>e.jsxDEV(a,{children:j(r.getValue())},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/columns/user.column.tsx",lineNumber:51,columnNumber:14},void 0)},{accessorKey:"active",header:"Status",cell:r=>e.jsxDEV("div",{className:"space-x-2 truncate",children:[e.jsxDEV(C,{variant:r.getValue()?"success":"destructive",children:S(r.getValue())},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/columns/user.column.tsx",lineNumber:61,columnNumber:11},void 0),e.jsxDEV(ue,{id:r.row.original.id,status:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/columns/user.column.tsx",lineNumber:65,columnNumber:11},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/columns/user.column.tsx",lineNumber:60,columnNumber:9},void 0)},{accessorKey:"phonenumber",header:"Phone",cell:r=>e.jsxDEV(a,{children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/columns/user.column.tsx",lineNumber:77,columnNumber:14},void 0)},{accessorKey:"working_address",header:"Working Address",cell:r=>e.jsxDEV(a,{children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/columns/user.column.tsx",lineNumber:84,columnNumber:14},void 0)}];function me(){return N({url:"/user/get_all"})}function ae(){const{data:r}=H({queryKey:p.USERS,queryFn:me,gcTime:1e4}),u=b.useMemo(()=>r!=null&&r.status?L(r.result,"id"):{},[r==null?void 0:r.status]);return{users:r==null?void 0:r.result,usersByKey:u}}const ne=l.object({id:l.coerce.number().optional(),role:l.coerce.number({invalid_type_error:"Required."}).min(1,"Required.").max(2,"Required."),username:l.string().nonempty(),full_name:l.string().nonempty(),password:l.string().nonempty(),phonenumber:l.string(),working_address:l.string().nonempty()});function te({defaultValues:r,mutation:u,onClose:i}){const{register:s,handleSubmit:g,formState:{errors:m}}=Y({defaultValues:r,resolver:G(ne)}),y=async o=>{(await u(o)).status&&i&&i()};return e.jsxDEV("form",{onSubmit:g(y),className:"space-y-4",autoComplete:"off",children:[e.jsxDEV("div",{children:[e.jsxDEV(t,{htmlFor:"username",children:"Username"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:49,columnNumber:9},this),e.jsxDEV(c,{placeholder:"Username",...s("username")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:50,columnNumber:9},this),e.jsxDEV(n,{error:m.username},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:51,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:48,columnNumber:7},this),e.jsxDEV("div",{children:[e.jsxDEV(t,{htmlFor:"fullname",children:"Full name"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:55,columnNumber:9},this),e.jsxDEV(c,{placeholder:"Full name",...s("full_name")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:56,columnNumber:9},this),e.jsxDEV(n,{error:m.full_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:57,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:54,columnNumber:7},this),e.jsxDEV("div",{children:[e.jsxDEV(t,{htmlFor:"password",children:"Password"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:61,columnNumber:9},this),e.jsxDEV(c,{type:"password",placeholder:"Password",...s("password")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:62,columnNumber:9},this),e.jsxDEV(n,{error:m.password},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:67,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:60,columnNumber:7},this),e.jsxDEV("div",{children:[e.jsxDEV(t,{htmlFor:"role",children:"Role"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:71,columnNumber:9},this),e.jsxDEV(O,{...s("role"),defaultValue:"1",onValueChange:o=>s("role").onChange({target:{name:"role",value:o}}),children:[e.jsxDEV(J,{className:"h-8 w-20",children:e.jsxDEV(X,{placeholder:"Set role"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:80,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:79,columnNumber:11},this),e.jsxDEV(Z,{children:[{role:"User",value:"1"},{role:"Admin",value:"2"}].map(({role:o,value:f})=>e.jsxDEV($,{value:f,children:o},f,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:87,columnNumber:15},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:82,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:72,columnNumber:9},this),e.jsxDEV(n,{error:m.role},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:93,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:70,columnNumber:7},this),e.jsxDEV("div",{children:[e.jsxDEV(t,{htmlFor:"phonenumber",children:"Phone number"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:97,columnNumber:9},this),e.jsxDEV(c,{placeholder:"Phone number",...s("phonenumber")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:98,columnNumber:9},this),e.jsxDEV(n,{error:m.phonenumber},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:99,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:96,columnNumber:7},this),e.jsxDEV("div",{children:[e.jsxDEV(t,{htmlFor:"working_address",children:"Working address"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:103,columnNumber:9},this),e.jsxDEV(c,{placeholder:"Working address",...s("working_address")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:104,columnNumber:9},this),e.jsxDEV(n,{error:m.working_address},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:105,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:102,columnNumber:7},this),e.jsxDEV(d,{className:"w-full",children:"Submit"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:108,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/user/user.form.tsx",lineNumber:43,columnNumber:5},this)}function oe(r){return N({url:"/user/signup",method:"post",data:r})}function ce(){const{mutateAsync:r}=x({mutationFn:oe,onSuccess:u=>{u.status&&h.invalidateQueries({queryKey:p.USERS})}});return{mutationSignUp:r}}function de(){const r=b.useRef(null);function u(){var s;(s=r.current)==null||s.click()}const{mutationSignUp:i}=ce();return e.jsxDEV(ee,{type:"admin",children:e.jsxDEV(W,{title:"Create new user",className:"w-96",trigger:e.jsxDEV(d,{className:"gap-2",children:[e.jsxDEV(F,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/create-user.feature.tsx",lineNumber:26,columnNumber:13},this)," Create new user"]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/create-user.feature.tsx",lineNumber:25,columnNumber:11},this),actionButtons:e.jsxDEV(z,{asChild:!0,children:e.jsxDEV(d,{ref:r,type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/create-user.feature.tsx",lineNumber:31,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/create-user.feature.tsx",lineNumber:30,columnNumber:11},this),children:e.jsxDEV(te,{defaultValues:{role:1},onClose:u,mutation:i},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/create-user.feature.tsx",lineNumber:37,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/create-user.feature.tsx",lineNumber:21,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/features/create-user.feature.tsx",lineNumber:20,columnNumber:5},this)}function fe(){const[r,u]=T("user-columns",{defaultValue:ie}),{users:i}=ae(),s=b.useMemo(()=>le(),[]);return e.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[e.jsxDEV("div",{className:"flex items-center flex-col lg:flex-row justify-between space-y-2",children:[e.jsxDEV("h2",{className:"text-2xl lg:text-3xl font-bold tracking-tight",children:"Users"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/containers/users.container.tsx",lineNumber:25,columnNumber:9},this),e.jsxDEV("div",{className:"flex items-center space-x-2",children:e.jsxDEV(de,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/containers/users.container.tsx",lineNumber:27,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/containers/users.container.tsx",lineNumber:26,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/containers/users.container.tsx",lineNumber:24,columnNumber:7},this),e.jsxDEV(P,{data:i,columns:s,columnVisibility:r,rowCount:i==null?void 0:i.length,onColumnVisibilityChange:u,hidePagination:!0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/containers/users.container.tsx",lineNumber:31,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/containers/users.container.tsx",lineNumber:23,columnNumber:5},this)}function Qe(){return e.jsxDEV(v,{type:"admin",children:[e.jsxDEV(U,{children:e.jsxDEV("title",{children:"POS System - List of Users"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/users.page.tsx",lineNumber:9,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/users.page.tsx",lineNumber:8,columnNumber:7},this),e.jsxDEV(fe,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/users.page.tsx",lineNumber:11,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/users.page.tsx",lineNumber:7,columnNumber:5},this)}export{Qe as default};
