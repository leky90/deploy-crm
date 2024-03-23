import{j as e,R as u,r as n,Q as d}from"./index-BW3fkt-M.js";import{R as p}from"./role-redirect.component-CNMkwbHK.js";import{D as f}from"./data-table-DHH-aJHd.js";import{E as b}from"./react-icons.esm-O1iptPrg.js";import{B as o,a as N,H as g}from"./Helmet-OaKBlYli.js";import{D as _,a as x}from"./dialog-button.component-BEbti0L2.js";import{C as a}from"./cell-currency-BzQ4QuBG.js";import{C as r}from"./cell-text-Ct9D4_Tw.js";import{L as h}from"./label-e6HV52G4.js";import{C as y}from"./cell-bank-B0BFChEt.js";import{C as c}from"./cell-link-C6ruerWZ.js";import{u as P}from"./use-get-vn-banks.query-BytOnmjE.js";import{u as V}from"./useQuery-B6B7ipRg.js";import"./use-auth.cache-CfY9Lrr3.js";import"./index-VWaDGczM.js";import"./index-DSdWNMLF.js";import"./index-Ds76rKtd.js";import"./dropdown-menu-UbXtKa9_.js";import"./select-BBzsPk14.js";import"./format-currency-DwwnROlR.js";import"./get-yes-no.util-C-N_EnQX.js";import"./index-DzMN1AwG.js";function k({row:l,vnBanks:s}){return e.jsxDEV("div",{className:"grid grid-cols-2 items-center gap-4 max-h-96 px-4 overflow-auto",children:l.getAllCells().map(i=>{let t=e.jsxDEV(r,{children:i.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:21,columnNumber:25},this);if(i.column.id!=="actions"){switch(i.column.id){case"id_pos_info":t=e.jsxDEV(c,{to:u.STATISTICS_POS_USED.replace(":id",i.getValue()),children:i.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:28,columnNumber:15},this);break;case"id_vietnamese_banks":t=e.jsxDEV(y,{value:i.getValue(),vnBanks:s},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:41,columnNumber:15},this);break;case"tong_tien_chua_tru_phi":case"tong_tien_da_tru_phi":case"fee":t=e.jsxDEV(a,{value:i.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:47,columnNumber:25},this);break}return e.jsxDEV(n.Fragment,{children:[e.jsxDEV(h,{className:"text-muted-foreground",children:i.column.columnDef.header},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:54,columnNumber:13},this),e.jsxDEV("div",{children:t},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:57,columnNumber:13},this)]},i.id,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:53,columnNumber:11},this)}})},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:19,columnNumber:5},this)}const D={tid:!0,pos_name:!0,total:!0,fee:!0,tong_tien_da_tru_phi:!0,tong_tien_chua_tru_phi:!0,tong_so_giao_dich_da_duoc_bank_tra_tien:!0,tong_so_giao_dich_chua_duoc_bank_tra_tien:!0,id_vietnamese_banks:!0,id_pos_info:!0},U=({vnBanks:l})=>[{accessorKey:"id_pos_info",header:"POS ID",enableHiding:!1,cell:s=>e.jsxDEV(c,{to:u.STATISTICS_POS_USED.replace(":id",s.getValue()),children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:38,columnNumber:9},void 0)},{accessorKey:"tid",header:"TID",cell:s=>e.jsxDEV(r,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:53,columnNumber:14},void 0)},{accessorKey:"pos_name",header:"POS Name",cell:s=>e.jsxDEV(r,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:60,columnNumber:14},void 0)},{accessorKey:"tong_tien_chua_tru_phi",header:"Total Money",cell:s=>e.jsxDEV(a,{value:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:67,columnNumber:14},void 0)},{accessorKey:"fee",header:"Fee",cell:s=>e.jsxDEV(a,{value:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:74,columnNumber:14},void 0)},{accessorKey:"tong_tien_da_tru_phi",header:"Total Money (- Fee)",cell:s=>e.jsxDEV(a,{value:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:81,columnNumber:14},void 0)},{accessorKey:"total",header:"All Bank Payment",cell:s=>e.jsxDEV(r,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:88,columnNumber:14},void 0)},{accessorKey:"tong_so_giao_dich_chua_duoc_bank_tra_tien",header:"Processing Bank Payment",cell:s=>e.jsxDEV(r,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:95,columnNumber:14},void 0)},{accessorKey:"tong_so_giao_dich_da_duoc_bank_tra_tien",header:"Completed Bank Payment",cell:s=>e.jsxDEV(r,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:102,columnNumber:14},void 0)},{accessorKey:"id_vietnamese_banks",header:"Bank Name",cell:s=>{var i;return e.jsxDEV(r,{children:(i=l==null?void 0:l[s.getValue()])==null?void 0:i.short_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:110,columnNumber:9},void 0)}},{id:"actions",enableHiding:!1,cell:({row:s})=>e.jsxDEV(_,{title:"Detail Info",description:"Detail info's statistic bank payment.",className:"max-w-max",trigger:e.jsxDEV(o,{variant:"outline",size:"icon",children:e.jsxDEV(b,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:125,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:124,columnNumber:13},void 0),actionButtons:e.jsxDEV(x,{asChild:!0,children:e.jsxDEV(o,{type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:130,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:129,columnNumber:13},void 0),children:e.jsxDEV(k,{row:s,vnBanks:l},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:136,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:119,columnNumber:9},void 0)}];function T(){return N({url:"/statistics/Get_All_Pos_Used"})}function v(){const{data:l}=V({queryKey:d.ALL_POS_USED,queryFn:T,gcTime:1e4});return{allPosUsed:l==null?void 0:l.result}}function E(){const[l,s]=n.useState(D),{allPosUsed:i}=v(),{vnBanksByKey:t}=P(),m=n.useMemo(()=>U({vnBanks:t}),[t]);return e.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[e.jsxDEV("div",{className:"flex items-center justify-between space-y-2",children:e.jsxDEV("h2",{className:"text-3xl font-bold tracking-tight",children:"Statistic All POS Used"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/statistic-all-pos-used.container.tsx",lineNumber:32,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/statistic-all-pos-used.container.tsx",lineNumber:31,columnNumber:7},this),e.jsxDEV(f,{data:i,columns:m,columnVisibility:l,rowCount:i==null?void 0:i.length,onColumnVisibilityChange:s,hidePagination:!0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/statistic-all-pos-used.container.tsx",lineNumber:37,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/statistic-all-pos-used.container.tsx",lineNumber:30,columnNumber:5},this)}function Z(){return e.jsxDEV(p,{type:"admin",children:[e.jsxDEV(g,{children:e.jsxDEV("title",{children:"POS System - Statistic All POS Used"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/statistic-all-pos-used.page.tsx",lineNumber:9,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/statistic-all-pos-used.page.tsx",lineNumber:8,columnNumber:7},this),e.jsxDEV(E,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/statistic-all-pos-used.page.tsx",lineNumber:11,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/statistic-all-pos-used.page.tsx",lineNumber:7,columnNumber:5},this)}export{Z as default};
