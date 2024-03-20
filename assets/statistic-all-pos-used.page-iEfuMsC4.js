import{j as e,G as a,H as n,K as d,R as o,r,L as p,M as f,P as u,S as b,T as N,B as g,E as _,Q as x,a0 as h,a2 as y,a4 as V,a5 as P}from"./index-cmrs5-26.js";import{C as c}from"./cell-link-ykILuZXO.js";function k({row:l,vnBanks:s}){return e.jsxDEV("div",{className:"grid grid-cols-2 items-center gap-4 max-h-96 px-4 overflow-auto",children:l.getAllCells().map(i=>{let t=e.jsxDEV(a,{children:i.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:21,columnNumber:25},this);if(i.column.id!=="actions"){switch(i.column.id){case"id_pos_info":t=e.jsxDEV(c,{to:o.STATISTICS_POS_USED.replace(":id",i.getValue()),children:i.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:28,columnNumber:15},this);break;case"id_vietnamese_banks":t=e.jsxDEV(d,{value:i.getValue(),vnBanks:s},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:41,columnNumber:15},this);break;case"tong_tien_chua_tru_phi":case"tong_tien_da_tru_phi":case"fee":t=e.jsxDEV(n,{value:i.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:47,columnNumber:25},this);break}return e.jsxDEV(r.Fragment,{children:[e.jsxDEV(p,{className:"text-muted-foreground",children:i.column.columnDef.header},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:54,columnNumber:13},this),e.jsxDEV("div",{children:t},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:57,columnNumber:13},this)]},i.id,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:53,columnNumber:11},this)}})},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-info.feature.tsx",lineNumber:19,columnNumber:5},this)}const T={tid:!0,pos_name:!0,total:!0,fee:!0,tong_tien_da_tru_phi:!0,tong_tien_chua_tru_phi:!0,tong_so_giao_dich_da_duoc_bank_tra_tien:!0,tong_so_giao_dich_chua_duoc_bank_tra_tien:!0,id_vietnamese_banks:!0,id_pos_info:!0},U=({vnBanks:l})=>[{accessorKey:"id_pos_info",header:"POS ID",enableHiding:!1,cell:s=>e.jsxDEV(c,{to:o.STATISTICS_POS_USED.replace(":id",s.getValue()),children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:38,columnNumber:9},void 0)},{accessorKey:"tid",header:"TID",cell:s=>e.jsxDEV(a,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:53,columnNumber:14},void 0)},{accessorKey:"pos_name",header:"POS Name",cell:s=>e.jsxDEV(a,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:60,columnNumber:14},void 0)},{accessorKey:"tong_tien_chua_tru_phi",header:"Total Money",cell:s=>e.jsxDEV(n,{value:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:67,columnNumber:14},void 0)},{accessorKey:"fee",header:"Fee",cell:s=>e.jsxDEV(n,{value:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:74,columnNumber:14},void 0)},{accessorKey:"tong_tien_da_tru_phi",header:"Total Money (- Fee)",cell:s=>e.jsxDEV(n,{value:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:81,columnNumber:14},void 0)},{accessorKey:"total",header:"All Bank Payment",cell:s=>e.jsxDEV(a,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:88,columnNumber:14},void 0)},{accessorKey:"tong_so_giao_dich_chua_duoc_bank_tra_tien",header:"Processing Bank Payment",cell:s=>e.jsxDEV(a,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:95,columnNumber:14},void 0)},{accessorKey:"tong_so_giao_dich_da_duoc_bank_tra_tien",header:"Completed Bank Payment",cell:s=>e.jsxDEV(a,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:102,columnNumber:14},void 0)},{accessorKey:"id_vietnamese_banks",header:"VN Bank",cell:s=>e.jsxDEV(a,{children:l==null?void 0:l[s.getValue()].short_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:110,columnNumber:9},void 0)},{id:"actions",enableHiding:!1,cell:({row:s})=>e.jsxDEV(f,{title:"Detail Info",description:"Detail info's statistic bank payment.",className:"max-w-max",trigger:e.jsxDEV(u,{variant:"outline",size:"icon",children:e.jsxDEV(b,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:125,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:124,columnNumber:13},void 0),actionButtons:e.jsxDEV(N,{asChild:!0,children:e.jsxDEV(u,{type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:130,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:129,columnNumber:13},void 0),children:e.jsxDEV(k,{row:s,vnBanks:l},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:136,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/statistic-pos.column.tsx",lineNumber:119,columnNumber:9},void 0)}];function v(){return g({url:"/statistics/Get_All_Pos_Used"})}function D(){const{data:l}=_({queryKey:x.ALL_POS_USED,queryFn:v,gcTime:1e4});return{allPosUsed:l}}function E(){const[l,s]=r.useState(T),{allPosUsed:i}=D(),{vnBanksByKey:t}=h(),m=r.useMemo(()=>U({vnBanks:t}),[t]);return e.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[e.jsxDEV("div",{className:"flex items-center justify-between space-y-2",children:e.jsxDEV("h2",{className:"text-3xl font-bold tracking-tight",children:"Statistic All POS Used"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/statistic-all-pos-used.container.tsx",lineNumber:32,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/statistic-all-pos-used.container.tsx",lineNumber:31,columnNumber:7},this),e.jsxDEV(y,{data:i==null?void 0:i.result,columns:m,columnVisibility:l,rowCount:i==null?void 0:i.result.length,onColumnVisibilityChange:s,hidePagination:!0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/statistic-all-pos-used.container.tsx",lineNumber:37,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/statistic-all-pos-used.container.tsx",lineNumber:30,columnNumber:5},this)}function C(){return e.jsxDEV(V,{type:"admin",children:[e.jsxDEV(P,{children:e.jsxDEV("title",{children:"POS System - Statistic All POS Used"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/statistic-all-pos-used.page.tsx",lineNumber:9,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/statistic-all-pos-used.page.tsx",lineNumber:8,columnNumber:7},this),e.jsxDEV(E,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/statistic-all-pos-used.page.tsx",lineNumber:11,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/statistic-all-pos-used.page.tsx",lineNumber:7,columnNumber:5},this)}export{C as default};
