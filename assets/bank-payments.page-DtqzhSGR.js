import{Q as l,k as p,r as s,j as n}from"./index-BdjeCpkh.js";import{a as u,H as c}from"./Helmet-kVct0yGF.js";import{R as y}from"./role-redirect.component-CjAkiIBd.js";import{D as b}from"./data-table-DXqxn081.js";import{b as d,g as k}from"./bank-payment.column-BUtcjpR5.js";import{u as g}from"./use-get-vn-banks.query-eEN215UD.js";import{u as f}from"./useQuery-CnkawhXi.js";import"./index-Co--pDyh.js";import"./use-auth.cache-DatUc_I8.js";import"./index-VWaDGczM.js";import"./index-DlnaK11U.js";import"./dropdown-menu-DBp7W44s.js";import"./react-icons.esm-CsDXENB9.js";import"./select-D09E7fIP.js";import"./badge-DDlYnqD_.js";import"./dialog-button.component-DIjKy6kw.js";import"./cell-currency-o8m9mXR4.js";import"./format-currency-DwwnROlR.js";import"./cell-percent-CAqALKqN.js";import"./format-percent-Ca7gawAv.js";import"./cell-text-J-sXNYRD.js";import"./label-C2AW7_0h.js";import"./cell-bank-D5meqSN9.js";import"./get-yes-no.util-C-N_EnQX.js";import"./useMutation-Pdd3Y3WP.js";import"./cell-link-aNpXGj1N.js";import"./index-CIvGbyhS.js";function N(e){return u({url:"/customer_history/bankPayments",params:e})}function x(e){const t=[e.page,e.page_limit].join("_"),{data:i}=f({queryKey:[...l.BANK_PAYMENT,t],queryFn:()=>N(e),placeholderData:p,gcTime:1e3*10});return{bankPayments:i}}function h(){const[e,t]=s.useState({pageIndex:0,pageSize:10}),[i,m]=s.useState(d),{bankPayments:a}=x({page:e.pageIndex+1,page_limit:e.pageSize}),{vnBanksByKey:r}=g(),o=s.useMemo(()=>k({vnBanks:r,showUpdateStatus:!0}),[r]);return n.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[n.jsxDEV("div",{className:"flex items-center justify-between space-y-2",children:n.jsxDEV("h2",{className:"text-3xl font-bold tracking-tight",children:"Bank Payments"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/bank-payment.container.tsx",lineNumber:40,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/bank-payment.container.tsx",lineNumber:39,columnNumber:7},this),n.jsxDEV(b,{data:a==null?void 0:a.result,columns:o,columnVisibility:i,rowCount:a==null?void 0:a.total_data,pagination:e,onColumnVisibilityChange:m,onPaginationChange:t},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/bank-payment.container.tsx",lineNumber:42,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/bank-payment.container.tsx",lineNumber:38,columnNumber:5},this)}function J(){return n.jsxDEV(y,{type:"admin",children:[n.jsxDEV(c,{children:n.jsxDEV("title",{children:"POS System - List of Bank payments"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/pages/bank-payments.page.tsx",lineNumber:9,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/pages/bank-payments.page.tsx",lineNumber:8,columnNumber:7},this),n.jsxDEV(h,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/pages/bank-payments.page.tsx",lineNumber:11,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/pages/bank-payments.page.tsx",lineNumber:7,columnNumber:5},this)}export{J as default};
