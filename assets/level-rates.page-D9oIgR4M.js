import{j as e,L as f,P as t,B as o,ae as N,A as p,Q as d,r as u,M as x,aq as D,T as h,ar as T,G as c,E as U,F as k,ap as P,a2 as j,a5 as R}from"./index-cmrs5-26.js";import{z as m,u as L,t as C,I as v,F as b}from"./index-CWsfpnlA.js";import{R as y}from"./role.component-BfsrxMoJ.js";const F=m.object({id:m.coerce.number().optional(),min:m.coerce.number(),max:m.coerce.number(),rate:m.coerce.number()});function g({defaultValues:l,mutation:r,onClose:s}){const{register:a,handleSubmit:n,formState:{errors:i}}=L({defaultValues:l,resolver:C(F)}),E=async V=>{(await r(V)).status&&s&&s()};return e.jsxDEV("form",{onSubmit:n(E),className:"space-y-4",autoComplete:"off",children:[e.jsxDEV("div",{children:[e.jsxDEV(f,{htmlFor:"max",children:"Max"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:43,columnNumber:9},this),e.jsxDEV(v,{placeholder:"Max",...a("max")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:44,columnNumber:9},this),e.jsxDEV(b,{error:i.max},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:45,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:42,columnNumber:7},this),e.jsxDEV("div",{children:[e.jsxDEV(f,{htmlFor:"min",children:"Min"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:49,columnNumber:9},this),e.jsxDEV(v,{placeholder:"Min",...a("min")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:50,columnNumber:9},this),e.jsxDEV(b,{error:i.min},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:51,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:48,columnNumber:7},this),e.jsxDEV("div",{children:[e.jsxDEV(f,{htmlFor:"rate",children:"Rate"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:55,columnNumber:9},this),e.jsxDEV(v,{placeholder:"Rate",...a("rate")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:56,columnNumber:9},this),e.jsxDEV(b,{error:i.rate},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:57,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:54,columnNumber:7},this),e.jsxDEV(t,{className:"w-full",children:"Submit"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:60,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/forms/level-rate.form.tsx",lineNumber:37,columnNumber:5},this)}function S(l){return o({method:"patch",url:"/level_rate",data:l})}function M(){const{mutateAsync:l}=N({mutationFn:S,onSuccess:()=>{p.invalidateQueries({queryKey:d.LEVEL_RATES})}});return{mutationUpdateLevelRate:l}}function K({row:l}){const r=u.useRef(null);function s(){var n;(n=r.current)==null||n.click()}const{mutationUpdateLevelRate:a}=M();return e.jsxDEV(y,{type:"admin",children:e.jsxDEV(x,{title:"Update level rate",className:"max-w-max",trigger:e.jsxDEV(t,{variant:"outline",size:"icon",children:e.jsxDEV(D,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/update-level-rate.feature.tsx",lineNumber:32,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/update-level-rate.feature.tsx",lineNumber:31,columnNumber:11},this),actionButtons:e.jsxDEV(h,{asChild:!0,children:e.jsxDEV(t,{ref:r,type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/update-level-rate.feature.tsx",lineNumber:37,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/update-level-rate.feature.tsx",lineNumber:36,columnNumber:11},this),children:e.jsxDEV(g,{defaultValues:l.original,onClose:s,mutation:a},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/update-level-rate.feature.tsx",lineNumber:43,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/update-level-rate.feature.tsx",lineNumber:27,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/update-level-rate.feature.tsx",lineNumber:26,columnNumber:5},this)}function _(l){return o({method:"delete",url:"/level_rate",data:l})}function A(){const{mutateAsync:l}=N({mutationFn:_,onSuccess:()=>{p.invalidateQueries({queryKey:d.LEVEL_RATES})}});return{mutationDeleteLevelRate:l}}function B({row:l}){const r=u.useRef(null);function s(){var i;(i=r.current)==null||i.click()}const{mutationDeleteLevelRate:a}=A();async function n(){(await a({id:l.original.id})).status&&s()}return e.jsxDEV(y,{type:"admin",children:e.jsxDEV(x,{title:`Delete level rate: ${l.original.id}`,className:"max-w-max",trigger:e.jsxDEV(t,{variant:"destructive",size:"icon",children:e.jsxDEV(T,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/delete-level-rate.feature.tsx",lineNumber:37,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/delete-level-rate.feature.tsx",lineNumber:36,columnNumber:11},this),actionButtons:e.jsxDEV(e.Fragment,{children:[e.jsxDEV(t,{type:"button",variant:"destructive",onClick:n,children:"Delete"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/delete-level-rate.feature.tsx",lineNumber:42,columnNumber:13},this),e.jsxDEV(h,{asChild:!0,children:e.jsxDEV(t,{ref:r,type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/delete-level-rate.feature.tsx",lineNumber:46,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/delete-level-rate.feature.tsx",lineNumber:45,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/delete-level-rate.feature.tsx",lineNumber:41,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/delete-level-rate.feature.tsx",lineNumber:32,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/delete-level-rate.feature.tsx",lineNumber:31,columnNumber:5},this)}const Q={id:!0,max:!0,min:!0,rate:!0},q=()=>[{accessorKey:"id",header:"ID",enableHiding:!1,cell:l=>e.jsxDEV(c,{children:l.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/columns/level-rate.column.tsx",lineNumber:22,columnNumber:14},void 0)},{accessorKey:"max",header:"Max",cell:l=>e.jsxDEV(c,{children:l.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/columns/level-rate.column.tsx",lineNumber:29,columnNumber:14},void 0)},{accessorKey:"min",header:"Min",cell:l=>e.jsxDEV(c,{children:l.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/columns/level-rate.column.tsx",lineNumber:36,columnNumber:14},void 0)},{accessorKey:"rate",header:"Rate",cell:l=>e.jsxDEV(c,{children:l.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/columns/level-rate.column.tsx",lineNumber:43,columnNumber:14},void 0)},{id:"actions",enableHiding:!1,cell:({row:l})=>e.jsxDEV("div",{className:"space-x-2",children:[e.jsxDEV(K,{row:l},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/columns/level-rate.column.tsx",lineNumber:51,columnNumber:9},void 0),e.jsxDEV(B,{row:l},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/columns/level-rate.column.tsx",lineNumber:52,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/columns/level-rate.column.tsx",lineNumber:50,columnNumber:7},void 0)}];function w(){return o({url:"/level_rate"})}function I(){const{data:l}=U({queryKey:d.LEVEL_RATES,queryFn:w,gcTime:1e4}),r=u.useMemo(()=>l!=null&&l.status?k(l.result,"id"):{},[l==null?void 0:l.status]);return{levelRates:l==null?void 0:l.result,levelRatesByKey:r}}function z(l){return o({method:"post",url:"/level_rate",data:l})}function H(){const{mutateAsync:l}=N({mutationFn:z,onSuccess:r=>{r.status&&p.invalidateQueries({queryKey:d.LEVEL_RATES})}});return{mutationCreateLevelRate:l}}function G(){const l=u.useRef(null);function r(){var a;(a=l.current)==null||a.click()}const{mutationCreateLevelRate:s}=H();return e.jsxDEV(y,{type:"admin",children:e.jsxDEV(x,{title:"Create level rate",className:"max-w-max",trigger:e.jsxDEV(t,{className:"gap-2",children:[e.jsxDEV(P,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/create-level-rate.feature.tsx",lineNumber:26,columnNumber:13},this)," Create level rate"]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/create-level-rate.feature.tsx",lineNumber:25,columnNumber:11},this),actionButtons:e.jsxDEV(h,{asChild:!0,children:e.jsxDEV(t,{ref:l,type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/create-level-rate.feature.tsx",lineNumber:31,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/create-level-rate.feature.tsx",lineNumber:30,columnNumber:11},this),children:e.jsxDEV(g,{onClose:r,mutation:s},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/create-level-rate.feature.tsx",lineNumber:37,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/create-level-rate.feature.tsx",lineNumber:21,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/features/create-level-rate.feature.tsx",lineNumber:20,columnNumber:5},this)}function Y(){const[l,r]=u.useState(Q),{levelRates:s}=I(),a=u.useMemo(()=>q(),[]);return e.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[e.jsxDEV("div",{className:"flex items-center justify-between space-y-2",children:[e.jsxDEV("h2",{className:"text-3xl font-bold tracking-tight",children:"Level Rates"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/containers/level-rates.container.tsx",lineNumber:24,columnNumber:9},this),e.jsxDEV("div",{className:"flex items-center space-x-2",children:e.jsxDEV(G,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/containers/level-rates.container.tsx",lineNumber:26,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/containers/level-rates.container.tsx",lineNumber:25,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/containers/level-rates.container.tsx",lineNumber:23,columnNumber:7},this),e.jsxDEV(j,{data:s,columns:a,columnVisibility:l,rowCount:s==null?void 0:s.length,onColumnVisibilityChange:r,hidePagination:!0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/containers/level-rates.container.tsx",lineNumber:30,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/containers/level-rates.container.tsx",lineNumber:22,columnNumber:5},this)}function X(){return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(R,{children:e.jsxDEV("title",{children:"POS System - List of Users"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/pages/level-rates.page.tsx",lineNumber:8,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/pages/level-rates.page.tsx",lineNumber:7,columnNumber:7},this),e.jsxDEV(Y,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/pages/level-rates.page.tsx",lineNumber:10,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/level-rate/pages/level-rates.page.tsx",lineNumber:6,columnNumber:5},this)}export{X as default};
