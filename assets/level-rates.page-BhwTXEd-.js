import{j as e,a as p,Q as o,r as m}from"./index-CJ4aojTS.js";import{a as c,H as V}from"./Helmet-CQJxFuV9.js";import{u as T,D as k}from"./index-BmIi7Ov-.js";import{C as P}from"./cell-text-CM1Jten_.js";import{D as b}from"./dialog-button.component-Ztd2_n_g.js";import{B as a}from"./button-C7e1d5xZ.js";import{e as U,T as j,P as R}from"./react-icons.esm-DY0tv6xu.js";import{D as N}from"./dialog-CRrJ1IH6.js";import{z as n,u as L,t as C,F as d}from"./index-D8SDuPEw.js";import{I as f}from"./input-8Nyj8SBJ.js";import{L as v}from"./label-DHIBfv39.js";import{R as x}from"./role.component-CwBRz00r.js";import{u as h}from"./useMutation-5gSZwTnf.js";import{C as S}from"./cell-percent-BSXB9IBG.js";import{C as y}from"./cell-currency-mQusPvtk.js";import{u as F}from"./useQuery-DY6s3jgh.js";import{k as M}from"./index-CmOA9PUo.js";import"./Combination-BfeDkqor.js";import"./index-BpO2Y5GS.js";import"./select-CRLuTXUs.js";import"./dropdown-menu-BEcUP2XE.js";import"./index-B3aP1jZr.js";import"./index-CBzUkH_N.js";import"./index-dwtWVcVM.js";import"./use-auth.cache--d25v-3P.js";import"./format-percent-Ca7gawAv.js";import"./format-currency-DwwnROlR.js";const K=n.object({id:n.coerce.number().optional(),min:n.coerce.number(),max:n.coerce.number(),rate:n.coerce.number()});function g({defaultValues:l,mutation:r,onClose:s}){const{register:t,handleSubmit:u,formState:{errors:i}}=L({defaultValues:l,resolver:C(K)}),E=async D=>{(await r(D)).status&&s&&s()};return e.jsxDEV("form",{onSubmit:u(E),className:"space-y-4",autoComplete:"off",children:[e.jsxDEV("div",{children:[e.jsxDEV(v,{htmlFor:"max",children:"Max"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:43,columnNumber:9},this),e.jsxDEV(f,{placeholder:"Max",...t("max")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:44,columnNumber:9},this),e.jsxDEV(d,{error:i.max},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:45,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:42,columnNumber:7},this),e.jsxDEV("div",{children:[e.jsxDEV(v,{htmlFor:"min",children:"Min"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:49,columnNumber:9},this),e.jsxDEV(f,{placeholder:"Min",...t("min")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:50,columnNumber:9},this),e.jsxDEV(d,{error:i.min},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:51,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:48,columnNumber:7},this),e.jsxDEV("div",{children:[e.jsxDEV(v,{htmlFor:"rate",children:"Rate"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:55,columnNumber:9},this),e.jsxDEV(f,{placeholder:"Rate",...t("rate")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:56,columnNumber:9},this),e.jsxDEV(d,{error:i.rate},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:57,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:54,columnNumber:7},this),e.jsxDEV(a,{className:"w-full",children:"Submit"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:60,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:37,columnNumber:5},this)}function _(l){return c({method:"patch",url:"/level_rate",data:l})}function B(){const{mutateAsync:l}=h({mutationFn:_,onSuccess:()=>{p.invalidateQueries({queryKey:o.LEVEL_RATES})}});return{mutationUpdateLevelRate:l}}function Q({row:l}){const r=m.useRef(null);function s(){var u;(u=r.current)==null||u.click()}const{mutationUpdateLevelRate:t}=B();return e.jsxDEV(x,{type:"admin",children:e.jsxDEV(b,{title:"Update level rate",trigger:e.jsxDEV(a,{variant:"outline",size:"icon",children:e.jsxDEV(U,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/update-level-rate.feature.tsx",lineNumber:31,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/update-level-rate.feature.tsx",lineNumber:30,columnNumber:11},this),actionButtons:e.jsxDEV(N,{asChild:!0,children:e.jsxDEV(a,{ref:r,type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/update-level-rate.feature.tsx",lineNumber:36,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/update-level-rate.feature.tsx",lineNumber:35,columnNumber:11},this),children:e.jsxDEV(g,{defaultValues:l.original,onClose:s,mutation:t},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/update-level-rate.feature.tsx",lineNumber:42,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/update-level-rate.feature.tsx",lineNumber:27,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/update-level-rate.feature.tsx",lineNumber:26,columnNumber:5},this)}function A(l){return c({method:"delete",url:"/level_rate",data:l})}function I(){const{mutateAsync:l}=h({mutationFn:A,onSuccess:()=>{p.invalidateQueries({queryKey:o.LEVEL_RATES})}});return{mutationDeleteLevelRate:l}}function q({row:l}){const r=m.useRef(null);function s(){var i;(i=r.current)==null||i.click()}const{mutationDeleteLevelRate:t}=I();async function u(){(await t({id:l.original.id})).status&&s()}return e.jsxDEV(x,{type:"admin",children:e.jsxDEV(b,{title:`Delete level rate: ${l.original.id}`,trigger:e.jsxDEV(a,{variant:"destructive",size:"icon",children:e.jsxDEV(j,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/delete-level-rate.feature.tsx",lineNumber:36,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/delete-level-rate.feature.tsx",lineNumber:35,columnNumber:11},this),actionButtons:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(a,{type:"button",variant:"destructive",onClick:u,children:"Delete"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/delete-level-rate.feature.tsx",lineNumber:41,columnNumber:13},this),e.jsxDEV(N,{asChild:!0,children:e.jsxDEV(a,{ref:r,type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/delete-level-rate.feature.tsx",lineNumber:45,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/delete-level-rate.feature.tsx",lineNumber:44,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/delete-level-rate.feature.tsx",lineNumber:40,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/delete-level-rate.feature.tsx",lineNumber:32,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/delete-level-rate.feature.tsx",lineNumber:31,columnNumber:5},this)}const w={id:!0,max:!0,min:!0,rate:!0},H=()=>[{accessorKey:"id",header:"ID",enableHiding:!1,cell:l=>e.jsxDEV(P,{children:l.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/columns/level-rate.column.tsx",lineNumber:24,columnNumber:14},void 0)},{accessorKey:"min",header:"Min",cell:l=>e.jsxDEV(y,{value:l.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/columns/level-rate.column.tsx",lineNumber:31,columnNumber:14},void 0)},{accessorKey:"max",header:"Max",cell:l=>e.jsxDEV(y,{value:l.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/columns/level-rate.column.tsx",lineNumber:38,columnNumber:14},void 0)},{accessorKey:"rate",header:"Rate",cell:l=>e.jsxDEV(S,{value:l.getValue()/100},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/columns/level-rate.column.tsx",lineNumber:45,columnNumber:14},void 0)},{id:"actions",enableHiding:!1,cell:({row:l})=>e.jsxDEV("div",{className:"space-x-2 truncate",children:[e.jsxDEV(Q,{row:l},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/columns/level-rate.column.tsx",lineNumber:53,columnNumber:9},void 0),e.jsxDEV(q,{row:l},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/columns/level-rate.column.tsx",lineNumber:54,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/columns/level-rate.column.tsx",lineNumber:52,columnNumber:7},void 0)}];function z(){return c({url:"/level_rate"})}function Y(){const{data:l}=F({queryKey:o.LEVEL_RATES,queryFn:z,gcTime:1e4}),r=m.useMemo(()=>l!=null&&l.status?M(l.result,"id"):{},[l==null?void 0:l.status]);return{levelRates:l==null?void 0:l.result,levelRatesByKey:r}}function G(l){return c({method:"post",url:"/level_rate",data:l})}function O(){const{mutateAsync:l}=h({mutationFn:G,onSuccess:r=>{r.status&&p.invalidateQueries({queryKey:o.LEVEL_RATES})}});return{mutationCreateLevelRate:l}}function $(){const l=m.useRef(null);function r(){var t;(t=l.current)==null||t.click()}const{mutationCreateLevelRate:s}=O();return e.jsxDEV(x,{type:"admin",children:e.jsxDEV(b,{title:"Create level rate",trigger:e.jsxDEV(a,{className:"gap-2",children:[e.jsxDEV(R,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/create-level-rate.feature.tsx",lineNumber:25,columnNumber:13},this)," Create level rate"]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/create-level-rate.feature.tsx",lineNumber:24,columnNumber:11},this),actionButtons:e.jsxDEV(N,{asChild:!0,children:e.jsxDEV(a,{ref:l,type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/create-level-rate.feature.tsx",lineNumber:30,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/create-level-rate.feature.tsx",lineNumber:29,columnNumber:11},this),children:e.jsxDEV(g,{onClose:r,mutation:s},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/create-level-rate.feature.tsx",lineNumber:36,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/create-level-rate.feature.tsx",lineNumber:21,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/create-level-rate.feature.tsx",lineNumber:20,columnNumber:5},this)}function J(){const[l,r]=T("level-rate-columns",{defaultValue:w}),{levelRates:s}=Y(),t=m.useMemo(()=>H(),[]);return e.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[e.jsxDEV("div",{className:"flex items-center flex-col lg:flex-row justify-between space-y-2",children:[e.jsxDEV("h2",{className:"text-2xl lg:text-3xl font-bold tracking-tight",children:"Level Rates"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/containers/level-rates.container.tsx",lineNumber:28,columnNumber:9},this),e.jsxDEV("div",{className:"flex items-center space-x-2",children:e.jsxDEV($,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/containers/level-rates.container.tsx",lineNumber:32,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/containers/level-rates.container.tsx",lineNumber:31,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/containers/level-rates.container.tsx",lineNumber:27,columnNumber:7},this),e.jsxDEV(k,{data:s,columns:t,columnVisibility:l,rowCount:s==null?void 0:s.length,onColumnVisibilityChange:r,hidePagination:!0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/containers/level-rates.container.tsx",lineNumber:36,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/containers/level-rates.container.tsx",lineNumber:26,columnNumber:5},this)}function Te(){return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(V,{children:e.jsxDEV("title",{children:"POS System - List of Users"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/pages/level-rates.page.tsx",lineNumber:8,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/pages/level-rates.page.tsx",lineNumber:7,columnNumber:7},this),e.jsxDEV(J,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/pages/level-rates.page.tsx",lineNumber:10,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/pages/level-rates.page.tsx",lineNumber:6,columnNumber:5},this)}export{Te as default};
