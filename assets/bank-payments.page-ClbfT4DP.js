import{Q as l,k as p,r,j as a}from"./index-BfH-S7tZ.js";import{H as u}from"./Helmet-DIdbsKPJ.js";import{R as c}from"./role-redirect.component-CSNU-rB8.js";import{u as y,D as b}from"./index-WdKf6Ges.js";import{b as d,g as k}from"./bank-payment.column-D71cDJcU.js";import{u as g}from"./use-get-vn-banks.query-VZso9b-u.js";import{u as f}from"./useQuery-D0chCk74.js";import{a as N}from"./api-client-qBA4DTQv.js";import"./use-auth.cache-ClKKv6eS.js";import"./index-VWaDGczM.js";import"./index-CTTdkZ8N.js";import"./index-Vl8o0M7C.js";import"./react-icons.esm-XcE--LT7.js";import"./select-CPwPHD76.js";import"./dropdown-menu-CWT_rE4C.js";import"./badge-DqSx5fF-.js";import"./dialog-Dzi-kAH7.js";import"./cell-currency-CNhZ3DS_.js";import"./format-currency-DwwnROlR.js";import"./cell-percent-DCuNJry1.js";import"./format-percent-Ca7gawAv.js";import"./cell-text-ChfqjlM6.js";import"./dialog-button.component-DTC0oagy.js";import"./label-BdL-3MWI.js";import"./cell-bank-DNV0qyrK.js";import"./get-yes-no.util-C-N_EnQX.js";import"./useMutation-CMVljaSD.js";import"./cell-link-DEuFrnYI.js";import"./index-BNAVSFPS.js";function x(e){return N({url:"/customer_history/bankPayments",params:e})}function h(e){const t=[e.page,e.page_limit].join("_"),{data:i}=f({queryKey:[...l.BANK_PAYMENT,t],queryFn:()=>x(e),placeholderData:p,gcTime:1e3*10});return{bankPayments:i}}function P(){const[e,t]=r.useState({pageIndex:0,pageSize:10}),[i,m]=y("bank-payment-columns",{defaultValue:d}),{bankPayments:n}=h({page:e.pageIndex+1,page_limit:e.pageSize}),{vnBanksByKey:s}=g(),o=r.useMemo(()=>k({vnBanks:s,showUpdateStatus:!0}),[s]);return a.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[a.jsxDEV("div",{className:"flex items-center justify-between space-y-2",children:a.jsxDEV("h2",{className:"text-3xl font-bold tracking-tight",children:"Bank Payments"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/bank-payment.container.tsx",lineNumber:48,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/bank-payment.container.tsx",lineNumber:47,columnNumber:7},this),a.jsxDEV(b,{data:n==null?void 0:n.result,columns:o,columnVisibility:i,rowCount:n==null?void 0:n.total_data,pagination:e,onColumnVisibilityChange:m,onPaginationChange:t},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/bank-payment.container.tsx",lineNumber:50,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/bank-payment.container.tsx",lineNumber:46,columnNumber:5},this)}function Z(){return a.jsxDEV(c,{type:"admin",children:[a.jsxDEV(u,{children:a.jsxDEV("title",{children:"POS System - List of Bank payments"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/pages/bank-payments.page.tsx",lineNumber:9,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/pages/bank-payments.page.tsx",lineNumber:8,columnNumber:7},this),a.jsxDEV(P,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/pages/bank-payments.page.tsx",lineNumber:11,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/pages/bank-payments.page.tsx",lineNumber:7,columnNumber:5},this)}export{Z as default};
