import{j as t,Q as g,k,r as c,D as d}from"./index-D1beO7r7.js";import{a as N,H as x}from"./Helmet-BaN_M3Ba.js";import{R as _}from"./role-redirect.component-DjZxtvYt.js";import{u as h,D as v}from"./index-BaxUC5aZ.js";import{S as n,g as P,a as T,f as b,D as E}from"./statistic-card.component-D23FTsJb.js";import{b as V,g as j}from"./bank-payment.column-D6b2b45K.js";import{u as D}from"./use-get-vn-banks.query-CSz3vbek.js";import{f as r}from"./format-currency-DwwnROlR.js";import{u as C}from"./useQuery-GjGINsWo.js";import"./use-auth.cache-BxWCwmKT.js";import"./button-DU_v_X_n.js";import"./Combination-fE3Ln8g-.js";import"./index-VUgEPe8J.js";import"./react-icons.esm-PGssN9Bi.js";import"./select-BK5PsR7I.js";import"./dropdown-menu-12MlfKPz.js";import"./index-CB4y1Zte.js";import"./popover-CqX35u60.js";import"./card-DVgeBZCn.js";import"./badge-BB5OmAqI.js";import"./dialog-C-WKNhFo.js";import"./index-CdQ-xcTN.js";import"./cell-currency-C_wIGCsj.js";import"./cell-percent-D0bVwa6U.js";import"./format-percent-Ca7gawAv.js";import"./cell-text-DG9NPTpx.js";import"./dialog-button.component-BkMK83UA.js";import"./label-DT4jKbDb.js";import"./cell-bank-B3J5_XHZ.js";import"./get-yes-no.util-C-N_EnQX.js";import"./useMutation-Bt2_Gddy.js";import"./cell-link-iHBKzyzS.js";import"./customer-cc-info.feature-CqB43o9V.js";import"./use-get-customer-cc-by-id.query-BEk-0M49.js";import"./index-CXLB4ASJ.js";function U({totalBankPaymentCompleted:a,totalBankPaymentProcessing:i,totalMoneyCompleted:s,totalMoneyCompletedMinusFee:m,totalMoneyProcessing:o,totalMoneyProcessingMinusFee:l}){return t.jsxDEV("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4",children:[t.jsxDEV("div",{className:"lg:col-span-2 font-medium text-lg",children:["Total Bank Payment Completed: ",a]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/statistic-bank-payment-cards.feature.tsx",lineNumber:23,columnNumber:7},this),t.jsxDEV("div",{className:"lg:col-span-2 font-medium text-lg",children:["Total Bank Payment Processing: ",i]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/statistic-bank-payment-cards.feature.tsx",lineNumber:26,columnNumber:7},this),t.jsxDEV(n,{label:"Total Money Completed",value:r(s)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/statistic-bank-payment-cards.feature.tsx",lineNumber:29,columnNumber:7},this),t.jsxDEV(n,{label:"Total Money Completed (- Fee)",value:r(m)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/statistic-bank-payment-cards.feature.tsx",lineNumber:34,columnNumber:7},this),t.jsxDEV(n,{label:"Total Money Processing",value:r(o)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/statistic-bank-payment-cards.feature.tsx",lineNumber:39,columnNumber:7},this),t.jsxDEV(n,{label:"Total Money Processing (- Fee)",value:r(l)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/statistic-bank-payment-cards.feature.tsx",lineNumber:44,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/statistic-bank-payment-cards.feature.tsx",lineNumber:22,columnNumber:5},this)}function S(a){return N({url:"/statistics/Get_BankPayment_By_Date",params:a})}function M(a){const i=["BY_DATE",a._from,a._to,a.page,a.page_limit].join("_"),{data:s}=C({queryKey:[...g.BANK_PAYMENT,i],queryFn:()=>S(a),placeholderData:k,gcTime:1e3*10});return{bankPaymentByDate:s}}function B(){const[a,i]=c.useState({from:P(30),to:T()}),[s,m]=c.useState({pageIndex:0,pageSize:10}),[o,l]=h("statistic-bank-payment-columns",{defaultValue:V}),{bankPaymentByDate:e}=M({_from:b(a.from||new Date,d),_to:b(a.to||new Date,d),page:s.pageIndex+1,page_limit:s.pageSize}),{vnBanksByKey:u}=D(),y=c.useMemo(()=>j({vnBanks:u}),[u]),f=(p,...F)=>{p&&i(p)};return t.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[t.jsxDEV("div",{className:"flex items-center flex-col lg:flex-row justify-between space-y-2",children:[t.jsxDEV("h2",{className:"text-2xl lg:text-3xl font-bold tracking-tight",children:"Statistic Bank Payment"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/statistic-bank-payment.container.tsx",lineNumber:66,columnNumber:9},this),t.jsxDEV("div",{className:"flex items-center space-x-2",children:t.jsxDEV(E,{date:a,onSelect:f},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/statistic-bank-payment.container.tsx",lineNumber:70,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/statistic-bank-payment.container.tsx",lineNumber:69,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/statistic-bank-payment.container.tsx",lineNumber:65,columnNumber:7},this),t.jsxDEV(U,{totalBankPaymentCompleted:e==null?void 0:e.count_bank_completed,totalBankPaymentProcessing:e==null?void 0:e.count_bank_processing,totalMoneyCompleted:e==null?void 0:e.total_money_bank_payment_completed,totalMoneyCompletedMinusFee:e==null?void 0:e.total_money_bank_payment_completed_minus_fee,totalMoneyProcessing:e==null?void 0:e.total_money_bank_payment_processing,totalMoneyProcessingMinusFee:e==null?void 0:e.total_money_bank_payment_processing_minus_fee},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/statistic-bank-payment.container.tsx",lineNumber:73,columnNumber:7},this),t.jsxDEV(v,{data:e==null?void 0:e.result,columns:y,columnVisibility:o,rowCount:e==null?void 0:e.total_data,pagination:s,onColumnVisibilityChange:l,onPaginationChange:m},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/statistic-bank-payment.container.tsx",lineNumber:89,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/statistic-bank-payment.container.tsx",lineNumber:64,columnNumber:5},this)}function ge(){return t.jsxDEV(_,{type:"admin",children:[t.jsxDEV(x,{children:t.jsxDEV("title",{children:"POS System - Statistic Bank Payment"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/pages/statistic-bank-payment.page.tsx",lineNumber:9,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/pages/statistic-bank-payment.page.tsx",lineNumber:8,columnNumber:7},this),t.jsxDEV(B,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/pages/statistic-bank-payment.page.tsx",lineNumber:11,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/pages/statistic-bank-payment.page.tsx",lineNumber:7,columnNumber:5},this)}export{ge as default};
