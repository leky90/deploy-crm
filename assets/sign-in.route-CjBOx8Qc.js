import{j as s,a as d,Q as p,e as g,R as f}from"./index-D1JUiLua.js";import{C as N,a as b,b as x,c as h}from"./card-DKsoEjrF.js";import{z as i,u as y,t as E,F as u}from"./index-ChGI5FC_.js";import{B as v}from"./button-H_a97MWm.js";import{I as l}from"./input-0LYyBTNL.js";import{u as U}from"./useMutation-olpSmLLZ.js";import{a as T,H as j}from"./Helmet-BSeNyQbR.js";import{L as a}from"./label-BoYFazvv.js";function P({children:e}){return s.jsxDEV("div",{className:"h-screen flex justify-center items-center",children:s.jsxDEV("main",{children:e},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/layouts/auth.layout.tsx",lineNumber:8,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/layouts/auth.layout.tsx",lineNumber:7,columnNumber:5},this)}function D(e){return T({url:"/user/login",method:"post",data:e})}function k(){const{mutateAsync:e}=U({mutationFn:D,onSuccess:r=>(d.setQueryData(p.AUTH_INFO,()=>r),r)});return{mutationSignIn:e}}const V=i.object({username:i.string().nonempty(),password:i.string().nonempty()});function S(){const e=g(),{mutationSignIn:r}=k(),{register:n,handleSubmit:o,formState:{errors:m}}=y({resolver:E(V)}),t=async c=>{(await r(c)).status&&e(f.CUSTOMER_HISTORIES)};return s.jsxDEV("form",{onSubmit:o(t),className:"space-y-4 w-80",autoComplete:"off",children:[s.jsxDEV("div",{children:[s.jsxDEV(a,{htmlFor:"username",children:"Username"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/sign-in/sign-in.form.tsx",lineNumber:37,columnNumber:9},this),s.jsxDEV(l,{placeholder:"Username",...n("username")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/sign-in/sign-in.form.tsx",lineNumber:38,columnNumber:9},this),s.jsxDEV(u,{error:m.username},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/sign-in/sign-in.form.tsx",lineNumber:39,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/sign-in/sign-in.form.tsx",lineNumber:36,columnNumber:7},this),s.jsxDEV("div",{children:[s.jsxDEV(a,{htmlFor:"password",children:"Password"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/sign-in/sign-in.form.tsx",lineNumber:43,columnNumber:9},this),s.jsxDEV(l,{type:"password",placeholder:"Password",...n("password")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/sign-in/sign-in.form.tsx",lineNumber:44,columnNumber:9},this),s.jsxDEV(u,{error:m.password},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/sign-in/sign-in.form.tsx",lineNumber:49,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/sign-in/sign-in.form.tsx",lineNumber:42,columnNumber:7},this),s.jsxDEV(v,{className:"w-full",children:"Submit"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/sign-in/sign-in.form.tsx",lineNumber:51,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/forms/sign-in/sign-in.form.tsx",lineNumber:31,columnNumber:5},this)}function I(){return s.jsxDEV(s.Fragment,{children:[s.jsxDEV(j,{children:s.jsxDEV("title",{children:"POS System - Sign In"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/sign-in.page.tsx",lineNumber:9,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/sign-in.page.tsx",lineNumber:8,columnNumber:7},this),s.jsxDEV(N,{children:[s.jsxDEV(b,{children:s.jsxDEV(x,{className:"text-center",children:"SIGN IN"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/sign-in.page.tsx",lineNumber:13,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/sign-in.page.tsx",lineNumber:12,columnNumber:9},this),s.jsxDEV(h,{children:s.jsxDEV(S,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/sign-in.page.tsx",lineNumber:16,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/sign-in.page.tsx",lineNumber:15,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/sign-in.page.tsx",lineNumber:11,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/pages/sign-in.page.tsx",lineNumber:7,columnNumber:5},this)}function L(){return s.jsxDEV(P,{children:s.jsxDEV(I,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/routes/sign-in.route.tsx",lineNumber:7,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/user/routes/sign-in.route.tsx",lineNumber:6,columnNumber:5},this)}export{L as default};
