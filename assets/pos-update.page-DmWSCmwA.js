import{a as m,Q as p,b as l,e as u,r as c,R as r,j as e,L as d}from"./index-By_MqxwU.js";import{a as N,H as f}from"./Helmet-k4G6Y4e8.js";import{R as b}from"./role-redirect.component-Dd7mRcbP.js";import{u as x}from"./use-get-pos-by-id.query-CFj5uU1L.js";import{R as P}from"./role.component-CW2YcUai.js";import{B as g}from"./button-DQm-mP38.js";import{E as y}from"./react-icons.esm-CCD_7Esj.js";import{F as h}from"./pos.form-CUmEAow4.js";import{u as E}from"./useMutation-uUMxTRoT.js";import"./use-auth.cache-AZKXVsWK.js";import"./useQuery-BkAUE7Xx.js";import"./index-dMlCCAaQ.js";import"./label-BwwYkI0V.js";import"./input-oPWuCtXy.js";import"./card-luLq1lJs.js";import"./select-BNrkaJQ5.js";import"./Combination-hpcmFLoC.js";import"./index-DtHC8X5T.js";import"./textarea-B9JZAdQR.js";import"./vn-bank.field-Dv1hLap8.js";import"./use-get-vn-banks.query-DSAVYBK9.js";import"./index-F-kXlb2o.js";import"./popover-9-4RV2Yy.js";import"./index-DRDuA02g.js";import"./dialog-DG3LMp1C.js";function U(s){return N({method:"patch",url:"/POS_INFO",data:s})}function v(){const{mutateAsync:s}=E({mutationFn:U,onSuccess:()=>{m.invalidateQueries({queryKey:p.POS})}});return{mutationUpdatePos:s}}function j(){const s=l(),t=u(),{pos:o,isPosNotFound:i,isPosReady:a}=x(Number(s.id)),{mutationUpdatePos:n}=v();return c.useEffect(()=>{i&&t(r.POS)},[i]),e.jsxDEV("div",{className:"space-y-6 px-4 py-4 mb-20",children:[e.jsxDEV("div",{className:"flex items-center flex-col lg:flex-row justify-between space-y-2",children:[e.jsxDEV("h2",{className:"text-2xl lg:text-3xl font-bold tracking-tight",children:["Update POS: ",s.id]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-update.container.tsx",lineNumber:27,columnNumber:9},this),e.jsxDEV(P,{type:"admin",children:e.jsxDEV(d,{to:r.POS_DETAIL.replace(":id",String(s.id)),className:"text-primary",children:e.jsxDEV(g,{variant:"outline",size:"icon",children:e.jsxDEV(y,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-update.container.tsx",lineNumber:36,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-update.container.tsx",lineNumber:35,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-update.container.tsx",lineNumber:31,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-update.container.tsx",lineNumber:30,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-update.container.tsx",lineNumber:26,columnNumber:7},this),a&&e.jsxDEV(h,{defaultValues:o,mutation:n},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-update.container.tsx",lineNumber:42,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-update.container.tsx",lineNumber:25,columnNumber:5},this)}function X(){return e.jsxDEV(b,{type:"admin",children:[e.jsxDEV(f,{children:e.jsxDEV("title",{children:"POS System - POS Update"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-update.page.tsx",lineNumber:9,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-update.page.tsx",lineNumber:8,columnNumber:7},this),e.jsxDEV(j,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-update.page.tsx",lineNumber:11,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-update.page.tsx",lineNumber:7,columnNumber:5},this)}export{X as default};
