import{a as t,Q as a,u as o,j as e,L as n,R as m}from"./index-BdjeCpkh.js";import{a as p,B as u,H as l}from"./Helmet-kVct0yGF.js";import{R as c}from"./role-redirect.component-CjAkiIBd.js";import{u as d}from"./use-get-pos-by-id.query-BbyjwORN.js";import{R as N}from"./role.component-DRl1l1zY.js";import{E as b}from"./react-icons.esm-CsDXENB9.js";import{F as f}from"./pos.form-BWn1M7K-.js";import{u as x}from"./useMutation-Pdd3Y3WP.js";import"./index-Co--pDyh.js";import"./use-auth.cache-DatUc_I8.js";import"./index-VWaDGczM.js";import"./useQuery-CnkawhXi.js";import"./index-CkrijSnO.js";import"./label-C2AW7_0h.js";import"./card-sI4VagSQ.js";import"./use-get-vn-banks.query-eEN215UD.js";import"./index-CIvGbyhS.js";import"./select-D09E7fIP.js";import"./index-DlnaK11U.js";function P(s){return p({method:"patch",url:"/POS_INFO",data:s})}function y(){const{mutateAsync:s}=x({mutationFn:P,onSuccess:()=>{t.invalidateQueries({queryKey:a.POS})}});return{mutationUpdatePos:s}}function h(){const s=o(),{pos:i}=d(Number(s.id)),{mutationUpdatePos:r}=y();return e.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[e.jsxDEV("div",{className:"flex items-center justify-between space-y-2",children:[e.jsxDEV("h2",{className:"text-3xl font-bold tracking-tight",children:["Update POS: ",s.id]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-update.container.tsx",lineNumber:19,columnNumber:9},this),e.jsxDEV(N,{type:"admin",children:e.jsxDEV(n,{to:m.POS_DETAIL.replace(":id",String(s.id)),className:"text-primary",children:e.jsxDEV(u,{variant:"outline",size:"icon",children:e.jsxDEV(b,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-update.container.tsx",lineNumber:28,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-update.container.tsx",lineNumber:27,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-update.container.tsx",lineNumber:23,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-update.container.tsx",lineNumber:22,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-update.container.tsx",lineNumber:18,columnNumber:7},this),e.jsxDEV(f,{defaultValues:i,mutation:r},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-update.container.tsx",lineNumber:33,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-update.container.tsx",lineNumber:17,columnNumber:5},this)}function A(){return e.jsxDEV(c,{type:"admin",children:[e.jsxDEV(l,{children:e.jsxDEV("title",{children:"POS System - POS Update"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-update.page.tsx",lineNumber:9,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-update.page.tsx",lineNumber:8,columnNumber:7},this),e.jsxDEV(h,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-update.page.tsx",lineNumber:11,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-update.page.tsx",lineNumber:7,columnNumber:5},this)}export{A as default};
