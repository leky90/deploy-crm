import{j as e,R as n,r as u,Q as d}from"./index-iY8wkAMF.js";import{R as p}from"./role-redirect.component-mxZR09XC.js";import{u as f,D as b}from"./index-CpYrwO6r.js";import{E as N}from"./react-icons.esm-BEn0DA9k.js";import{B as o}from"./button-C2YC4vcZ.js";import{D as g}from"./dialog-D7u3yXXg.js";import{C as a}from"./cell-currency-CItaEPA6.js";import{C as r}from"./cell-text-aG8WFiox.js";import{D as x}from"./dialog-button.component-gdzATSzk.js";import{L as _}from"./label-By2TmoQV.js";import{C as h}from"./cell-bank-DoDcNBy8.js";import{C as c}from"./cell-link-DHzeqPE6.js";import{u as y}from"./use-get-vn-banks.query-BM5CMNTl.js";import{u as P}from"./useQuery-GJg87iXi.js";import{a as V}from"./api-client-vqFb5rA2.js";import{H as k}from"./Helmet-CGO9PIu9.js";import"./use-auth.cache-BXmm1xjT.js";import"./index-Bi7vddj2.js";import"./Combination-Dlom6zUs.js";import"./index-Dax93bta.js";import"./select-CmovXi16.js";import"./dropdown-menu-Biaw4FGd.js";import"./index-iC2c6L0c.js";import"./index-C65_wQcw.js";import"./format-currency-DwwnROlR.js";import"./get-yes-no.util-C-N_EnQX.js";import"./index-f67wLNBR.js";function D({row:l,vnBanks:s}){return e.jsxDEV("div",{className:"grid sm:grid-cols-[200px_1fr] items-center gap-4 max-h-96 px-4 overflow-auto",children:l.getAllCells().map(i=>{let t=e.jsxDEV(r,{children:i.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:21,columnNumber:25},this);if(i.column.id!=="actions"){switch(i.column.id){case"id_pos_info":t=e.jsxDEV(c,{to:n.STATISTICS_POS_USED.replace(":id",i.getValue()),children:i.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:28,columnNumber:15},this);break;case"id_vietnamese_banks":t=e.jsxDEV(h,{value:i.getValue(),vnBanks:s},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:41,columnNumber:15},this);break;case"tong_tien_chua_tru_phi":case"tong_tien_da_tru_phi":case"fee":t=e.jsxDEV(a,{value:i.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:47,columnNumber:25},this);break}return e.jsxDEV(u.Fragment,{children:[e.jsxDEV(_,{className:"text-muted-foreground",children:i.column.columnDef.header},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:54,columnNumber:13},this),e.jsxDEV("div",{children:t},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:57,columnNumber:13},this)]},i.id,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:53,columnNumber:11},this)}})},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:19,columnNumber:5},this)}const U={tid:!0,pos_name:!0,total:!0,fee:!0,tong_tien_da_tru_phi:!0,tong_tien_chua_tru_phi:!0,tong_so_giao_dich_da_duoc_bank_tra_tien:!0,tong_so_giao_dich_chua_duoc_bank_tra_tien:!0,id_vietnamese_banks:!0,id_pos_info:!0},T=({vnBanks:l})=>[{accessorKey:"id_pos_info",header:"POS ID",enableHiding:!1,cell:s=>e.jsxDEV(c,{to:n.STATISTICS_POS_USED.replace(":id",s.getValue()),children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:38,columnNumber:9},void 0)},{accessorKey:"tid",header:"TID",cell:s=>e.jsxDEV(r,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:53,columnNumber:14},void 0)},{accessorKey:"pos_name",header:"POS Name",cell:s=>e.jsxDEV(r,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:60,columnNumber:14},void 0)},{accessorKey:"tong_tien_chua_tru_phi",header:"Total Money",cell:s=>e.jsxDEV(a,{value:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:67,columnNumber:14},void 0)},{accessorKey:"fee",header:"Fee",cell:s=>e.jsxDEV(a,{value:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:74,columnNumber:14},void 0)},{accessorKey:"tong_tien_da_tru_phi",header:"Total Money (- Fee)",cell:s=>e.jsxDEV(a,{value:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:81,columnNumber:14},void 0)},{accessorKey:"total",header:"All Bank Payment",cell:s=>e.jsxDEV(r,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:88,columnNumber:14},void 0)},{accessorKey:"tong_so_giao_dich_chua_duoc_bank_tra_tien",header:"Processing Bank Payment",cell:s=>e.jsxDEV(r,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:95,columnNumber:14},void 0)},{accessorKey:"tong_so_giao_dich_da_duoc_bank_tra_tien",header:"Completed Bank Payment",cell:s=>e.jsxDEV(r,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:102,columnNumber:14},void 0)},{accessorKey:"id_vietnamese_banks",header:"Bank Name",cell:s=>{var i;return e.jsxDEV(r,{children:(i=l==null?void 0:l[s.getValue()])==null?void 0:i.short_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:110,columnNumber:9},void 0)}},{id:"actions",enableHiding:!1,cell:({row:s})=>e.jsxDEV(x,{title:"Detail Info",description:"Detail info's statistic POS used.",trigger:e.jsxDEV(o,{variant:"outline",size:"icon",children:e.jsxDEV(N,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:124,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:123,columnNumber:13},void 0),actionButtons:e.jsxDEV(g,{asChild:!0,children:e.jsxDEV(o,{type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:129,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:128,columnNumber:13},void 0),children:e.jsxDEV(D,{row:s,vnBanks:l},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:135,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:119,columnNumber:9},void 0)}];function v(){return V({url:"/statistics/Get_All_Pos_Used"})}function E(){const{data:l}=P({queryKey:d.ALL_POS_USED,queryFn:v,gcTime:1e4});return{allPosUsed:l==null?void 0:l.result}}function j(){const[l,s]=f("all-pos-used-columns",{defaultValue:U}),{allPosUsed:i}=E(),{vnBanksByKey:t}=y(),m=u.useMemo(()=>T({vnBanks:t}),[t]);return e.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[e.jsxDEV("div",{className:"flex items-center flex-col lg:flex-row justify-between space-y-2",children:e.jsxDEV("h2",{className:"text-2xl lg:text-3xl font-bold tracking-tight",children:"Statistic All POS Used"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/statistic-all-pos-used.container.tsx",lineNumber:36,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/statistic-all-pos-used.container.tsx",lineNumber:35,columnNumber:7},this),e.jsxDEV(b,{data:i,columns:m,columnVisibility:l,rowCount:i==null?void 0:i.length,onColumnVisibilityChange:s,hidePagination:!0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/statistic-all-pos-used.container.tsx",lineNumber:41,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/statistic-all-pos-used.container.tsx",lineNumber:34,columnNumber:5},this)}function te(){return e.jsxDEV(p,{type:"admin",children:[e.jsxDEV(k,{children:e.jsxDEV("title",{children:"POS System - Statistic All POS Used"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/statistic-all-pos-used.page.tsx",lineNumber:9,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/statistic-all-pos-used.page.tsx",lineNumber:8,columnNumber:7},this),e.jsxDEV(j,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/statistic-all-pos-used.page.tsx",lineNumber:11,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/statistic-all-pos-used.page.tsx",lineNumber:7,columnNumber:5},this)}export{te as default};
