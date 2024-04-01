import{j as s,a as d,Q as p,c as g,R as f}from"./index-BwT9pd9i.js";import{C as N,a as b,b as x,c as h}from"./card-CZwsrlzR.js";import{z as i,u as y,F as u,t as E}from"./index-BzhSKmmI.js";import{B as v}from"./button-DX2qHQAB.js";import{I as l}from"./input-qxVMlR_M.js";import{u as U}from"./useMutation-NTuPPSTW.js";import{a as T}from"./api-client-Dl6Z7Gjw.js";import{L as a}from"./label-r_FXmdAx.js";import{H as j}from"./Helmet-BD19MAXm.js";import"./index-C2_1S1yO.js";function P({children:e}){return s.jsxDEV("div",{className:"h-screen flex justify-center items-center",children:s.jsxDEV("main",{children:e},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/layouts/auth.layout.tsx",lineNumber:8,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/layouts/auth.layout.tsx",lineNumber:7,columnNumber:5},this)}function D(e){return T({url:"/user/login",method:"post",data:e})}function V(){const{mutateAsync:e}=U({mutationFn:D,onSuccess:r=>(d.setQueryData(p.AUTH_INFO,()=>r),r)});return{mutationSignIn:e}}const k=i.object({username:i.string().nonempty(),password:i.string().nonempty()});function S(){const e=g(),{mutationSignIn:r}=V(),{register:n,handleSubmit:o,formState:{errors:m}}=y({defaultValues:{username:"tomtom1",password:"Abc123456!@#"},resolver:E(k)}),t=async c=>{(await r(c)).status&&e(f.CUSTOMER_HISTORIES)};return s.jsxDEV("form",{onSubmit:o(t),className:"space-y-4 w-80",autoComplete:"off",children:[s.jsxDEV("div",{children:[s.jsxDEV(a,{htmlFor:"username",children:"Username"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/sign-in/sign-in.form.tsx",lineNumber:41,columnNumber:9},this),s.jsxDEV(l,{placeholder:"Username",...n("username")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/sign-in/sign-in.form.tsx",lineNumber:42,columnNumber:9},this),s.jsxDEV(u,{error:m.username},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/sign-in/sign-in.form.tsx",lineNumber:43,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/sign-in/sign-in.form.tsx",lineNumber:40,columnNumber:7},this),s.jsxDEV("div",{children:[s.jsxDEV(a,{htmlFor:"password",children:"Password"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/sign-in/sign-in.form.tsx",lineNumber:47,columnNumber:9},this),s.jsxDEV(l,{type:"password",placeholder:"Password",...n("password")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/sign-in/sign-in.form.tsx",lineNumber:48,columnNumber:9},this),s.jsxDEV(u,{error:m.password},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/sign-in/sign-in.form.tsx",lineNumber:53,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/sign-in/sign-in.form.tsx",lineNumber:46,columnNumber:7},this),s.jsxDEV(v,{className:"w-full",children:"Submit"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/sign-in/sign-in.form.tsx",lineNumber:55,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/sign-in/sign-in.form.tsx",lineNumber:35,columnNumber:5},this)}function I(){return s.jsxDEV(s.Fragment,{children:[s.jsxDEV(j,{children:s.jsxDEV("title",{children:"POS System - Sign In"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/sign-in.page.tsx",lineNumber:9,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/sign-in.page.tsx",lineNumber:8,columnNumber:7},this),s.jsxDEV(N,{children:[s.jsxDEV(b,{children:s.jsxDEV(x,{className:"text-center",children:"SIGN IN"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/sign-in.page.tsx",lineNumber:13,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/sign-in.page.tsx",lineNumber:12,columnNumber:9},this),s.jsxDEV(h,{children:s.jsxDEV(S,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/sign-in.page.tsx",lineNumber:16,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/sign-in.page.tsx",lineNumber:15,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/sign-in.page.tsx",lineNumber:11,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/sign-in.page.tsx",lineNumber:7,columnNumber:5},this)}function B(){return s.jsxDEV(P,{children:s.jsxDEV(I,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/routes/sign-in.route.tsx",lineNumber:7,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/routes/sign-in.route.tsx",lineNumber:6,columnNumber:5},this)}export{B as default};
