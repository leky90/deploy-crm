import{j as s,L as n,R as o,Q as p,k as b,r as f}from"./index-By_MqxwU.js";import{a as N,H as g}from"./Helmet-k4G6Y4e8.js";import{u as x,D as y}from"./index-DywgBoDW.js";import{E as h,e as _,P as V}from"./react-icons.esm-CCD_7Esj.js";import{B as a}from"./button-DQm-mP38.js";import{C as u}from"./cell-list-wLT7mE0P.js";import{C as r}from"./cell-text-CXOXFKkB.js";import{R as t}from"./role.component-CW2YcUai.js";import{g as P}from"./get-yes-no.util-C-N_EnQX.js";import{C as m}from"./cell-currency-BnHiPO7q.js";import{u as k}from"./useQuery-BkAUE7Xx.js";import{u as v}from"./use-get-vn-banks.query-DSAVYBK9.js";import"./Combination-hpcmFLoC.js";import"./index-DtHC8X5T.js";import"./select-BNrkaJQ5.js";import"./dropdown-menu-DgVxZY2d.js";import"./index-BBKQ8zMW.js";import"./use-auth.cache-AZKXVsWK.js";import"./format-currency-DwwnROlR.js";import"./index-F-kXlb2o.js";const E={id:!0,tid:!0,pos_name:!0,pos_pass:!0,is_active:!0,day_received_pos:!0,time_waiting_next_order:!0,timestone_bank_request_money:!1,account_bank_name:!0,account_number:!1,bank_working_time:!0,id_vietnamese_banks:!0,percent_bank_charge:!1,type_card_allowed:!0,credit_limit_charge:!1,credit_limit_charge_per_day:!1,credit_limit_charge_per_month:!1,credit_limit_customer_card_charge_per_day:!1,user_login_bank:!1,pass_login_bank:!1,confirm_message:!1,note:!1,last_update:!1,time_insert:!1},T=({vnBanks:l})=>[{accessorKey:"id",header:"ID",enableHiding:!1,cell:e=>s.jsxDEV(r,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:51,columnNumber:14},void 0)},{accessorKey:"tid",header:"TID",cell:e=>s.jsxDEV(r,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:58,columnNumber:14},void 0)},{accessorKey:"pos_name",header:"POS  Name",cell:e=>s.jsxDEV(r,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:65,columnNumber:14},void 0)},{accessorKey:"pos_pass",header:"POS Pass",cell:e=>s.jsxDEV(r,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:72,columnNumber:14},void 0)},{accessorKey:"is_active",header:"Active",cell:e=>s.jsxDEV(r,{children:P(e.getValue())},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:79,columnNumber:14},void 0)},{accessorKey:"day_received_pos",header:"Day received pos",cell:e=>s.jsxDEV(r,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:86,columnNumber:14},void 0)},{accessorKey:"time_waiting_next_order",header:"Time waiting next Order",cell:e=>s.jsxDEV(r,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:93,columnNumber:14},void 0)},{accessorKey:"timestone_bank_request_money",header:"Timestone Bank Request Money",cell:e=>s.jsxDEV(u,{list:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:100,columnNumber:14},void 0)},{accessorKey:"account_bank_name",header:"Account Bank Name",cell:e=>s.jsxDEV(r,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:107,columnNumber:14},void 0)},{accessorKey:"account_number",header:"Account Number",cell:e=>s.jsxDEV(r,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:114,columnNumber:14},void 0)},{accessorKey:"bank_working_time",header:"Bank Working Time",cell:e=>s.jsxDEV(r,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:121,columnNumber:14},void 0)},{accessorKey:"id_vietnamese_banks",header:"Bank Name",cell:e=>{var i;return s.jsxDEV(r,{children:(i=l==null?void 0:l[e.getValue()])==null?void 0:i.short_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:129,columnNumber:9},void 0)}},{accessorKey:"percent_bank_charge",header:"Percent Bank Charge",cell:e=>s.jsxDEV(r,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:137,columnNumber:14},void 0)},{accessorKey:"type_card_allowed",header:"Type Card Allowed",cell:e=>s.jsxDEV(r,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:144,columnNumber:14},void 0)},{accessorKey:"credit_limit_charge",header:"Credit Limit Charge",cell:e=>s.jsxDEV(u,{list:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:151,columnNumber:14},void 0)},{accessorKey:"credit_limit_charge_per_day",header:"Credit Limit Charge Per Day",cell:e=>s.jsxDEV(m,{value:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:158,columnNumber:14},void 0)},{accessorKey:"credit_limit_charge_per_month",header:"Credit Limit Charge Per Month",cell:e=>s.jsxDEV(m,{value:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:165,columnNumber:14},void 0)},{accessorKey:"credit_limit_customer_card_charge_per_day",header:"Credit Limit Customer Card Charge Per Day",cell:e=>s.jsxDEV(r,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:172,columnNumber:14},void 0)},{accessorKey:"user_login_bank",header:"User Login Bank",cell:e=>s.jsxDEV(r,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:179,columnNumber:14},void 0)},{accessorKey:"pass_login_bank",header:"Pass Login Bank",cell:e=>s.jsxDEV(r,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:186,columnNumber:14},void 0)},{accessorKey:"confirm_message",header:"Confirm message",cell:e=>s.jsxDEV(r,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:193,columnNumber:14},void 0)},{accessorKey:"note",header:"Note",cell:e=>s.jsxDEV(r,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:200,columnNumber:14},void 0)},{accessorKey:"last_update",header:"Last Update",cell:e=>s.jsxDEV(r,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:207,columnNumber:14},void 0)},{accessorKey:"time_insert",header:"Created Time",cell:e=>s.jsxDEV(r,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:214,columnNumber:14},void 0)},{id:"actions",enableHiding:!1,cell:({row:e})=>s.jsxDEV("div",{className:"space-x-2 truncate",children:[s.jsxDEV(n,{to:o.POS_DETAIL.replace(":id",String(e.original.id)),className:"text-primary",children:s.jsxDEV(a,{variant:"outline",size:"icon",children:s.jsxDEV(h,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:227,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:226,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:222,columnNumber:9},void 0),s.jsxDEV(t,{type:"admin",children:s.jsxDEV(n,{to:o.POS_UPDATE.replace(":id",String(e.original.id)),className:"text-primary",children:s.jsxDEV(a,{variant:"outline",size:"icon",children:s.jsxDEV(_,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:236,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:235,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:231,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:230,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/columns/pos.column.tsx",lineNumber:221,columnNumber:7},void 0)}];function D(){return N({url:"/POS_INFO"})}function U(){const{data:l}=k({queryKey:p.POS,queryFn:D,placeholderData:b,gcTime:1e4});return{poss:l==null?void 0:l.result}}function j(){const[l,e]=x("pos-columns",{defaultValue:E}),{poss:i}=U(),{vnBanksByKey:c}=v(),d=f.useMemo(()=>T({vnBanks:c}),[c]);return s.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[s.jsxDEV("div",{className:"flex items-center flex-col lg:flex-row justify-between space-y-2",children:[s.jsxDEV("h2",{className:"text-2xl lg:text-3xl font-bold tracking-tight",children:"POS"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/poss.container.tsx",lineNumber:35,columnNumber:9},this),s.jsxDEV("div",{className:"flex items-center space-x-2",children:s.jsxDEV(t,{type:"admin",children:s.jsxDEV(n,{to:o.POS_CREATE,children:s.jsxDEV(a,{className:"gap-2",children:[s.jsxDEV(V,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/poss.container.tsx",lineNumber:40,columnNumber:17},this)," Create new POS"]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/poss.container.tsx",lineNumber:39,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/poss.container.tsx",lineNumber:38,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/poss.container.tsx",lineNumber:37,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/poss.container.tsx",lineNumber:36,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/poss.container.tsx",lineNumber:34,columnNumber:7},this),s.jsxDEV(y,{data:i,columns:d,columnVisibility:l,rowCount:i==null?void 0:i.length,onColumnVisibilityChange:e,hidePagination:!0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/poss.container.tsx",lineNumber:47,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/poss.container.tsx",lineNumber:33,columnNumber:5},this)}function X(){return s.jsxDEV(s.Fragment,{children:[s.jsxDEV(g,{children:s.jsxDEV("title",{children:"POS System - POSs"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos.page.tsx",lineNumber:8,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos.page.tsx",lineNumber:7,columnNumber:7},this),s.jsxDEV(j,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos.page.tsx",lineNumber:10,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos.page.tsx",lineNumber:6,columnNumber:5},this)}export{X as default};
