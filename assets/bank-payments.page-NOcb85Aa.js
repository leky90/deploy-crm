import{Q as p,k as l,r,j as e}from"./index-XwE6gQmn.js";import{a as u,H as c}from"./Helmet-DUuvCvTm.js";import{R as y}from"./role-redirect.component-B-7d_oPr.js";import{u as g,D as x}from"./index-BsOMOp0z.js";import{b as d,g as f}from"./bank-payment.column-CY-NhKan.js";import{u as k}from"./use-get-vn-banks.query-F2BXTXzV.js";import{u as h}from"./useQuery-BXJOiSOe.js";import"./use-auth.cache-CFuprbIQ.js";import"./button-C4HOWXLM.js";import"./Combination-WE48jzIv.js";import"./index-DWR91OCR.js";import"./index-CROUqNK7.js";import"./react-icons.esm-5SUvy-NO.js";import"./select-BLsJIQQv.js";import"./dropdown-menu-oMbE38VB.js";import"./index-Dwx9NaXw.js";import"./badge-DmV7fwsG.js";import"./dialog-Cq2VxrqT.js";import"./index-DrW2nO8L.js";import"./cell-currency-D6tOSgAE.js";import"./format-currency-DwwnROlR.js";import"./cell-percent-DV96QzFN.js";import"./format-percent-Ca7gawAv.js";import"./cell-text-H3JibL2T.js";import"./dialog-button.component-msJRMg9P.js";import"./label-DhoCOihp.js";import"./cell-bank-ajtKXmsI.js";import"./get-yes-no.util-C-N_EnQX.js";import"./useMutation-Czv1wBp1.js";import"./alert-dialog-BeURQn3I.js";import"./cell-link-Dxt7hr8a.js";import"./customer-cc-info.feature-mi_TeN3z.js";import"./use-get-customer-cc-by-id.query-ajBfmNNj.js";import"./index-CwCgg0f3.js";function P(t){return u({url:"/customer_history/bankPayments",params:t})}function j(t){const o=[t.page,t.page_limit].join("_"),{data:a}=h({queryKey:[...p.BANK_PAYMENT,o],queryFn:()=>P(t),placeholderData:l,gcTime:1e3*10});return{bankPayments:a}}function B(){const[t,o]=r.useState({pageIndex:0,pageSize:10}),[a,s]=g("bank-payment-columns",{defaultValue:d}),{bankPayments:i}=j({page:t.pageIndex+1,page_limit:t.pageSize}),{vnBanksByKey:n}=k(),m=r.useMemo(()=>f({vnBanks:n,showUpdateStatus:!0}),[n]);return e.jsxs("div",{className:"space-y-6 px-4 py-4",children:[e.jsx("div",{className:"flex items-center flex-col lg:flex-row justify-between space-y-2",children:e.jsx("h2",{className:"text-2xl lg:text-3xl font-bold tracking-tight",children:"Bank Payments"})}),e.jsx(x,{data:i==null?void 0:i.result,columns:m,columnVisibility:a,rowCount:i==null?void 0:i.total_data,pagination:t,onColumnVisibilityChange:s,onPaginationChange:o})]})}function ot(){return e.jsxs(y,{type:"admin",children:[e.jsx(c,{children:e.jsx("title",{children:"POS System - List of Bank payments"})}),e.jsx(B,{})]})}export{ot as default};
