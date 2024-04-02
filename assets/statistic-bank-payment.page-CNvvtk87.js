import{j as t,Q as g,k,r as c,D as d}from"./index-t7OYz95J.js";import{a as N,H as x}from"./Helmet-BEcAHiBf.js";import{R as _}from"./role-redirect.component-D0Ix72py.js";import{u as h,D as v}from"./index-CsqDcaW-.js";import{S as n,g as P,a as T,f as b,D as E}from"./statistic-card.component-BhNCoRZJ.js";import{b as V,g as j}from"./bank-payment.column-D-ClDvqv.js";import{u as D}from"./use-get-vn-banks.query-B1EgtabZ.js";import{f as r}from"./format-currency-DwwnROlR.js";import{u as C}from"./useQuery-DZ2vwnUj.js";import"./use-auth.cache-BeZrLh6E.js";import"./button-BYxa0xOq.js";import"./Combination-DmLGwOlh.js";import"./index-C3wprRim.js";import"./react-icons.esm-Dq42PWTJ.js";import"./select-B58GAZ8W.js";import"./dropdown-menu-c7oOOwWV.js";import"./index-AyV9dw1W.js";import"./popover-DTwQmG5l.js";import"./card-CMa3VLC7.js";import"./badge-CNUZYIab.js";import"./dialog-C00BHsPB.js";import"./index-ChIE4b1x.js";import"./cell-currency-ahKxfAiV.js";import"./cell-percent-DvZM02I2.js";import"./format-percent-Ca7gawAv.js";import"./cell-text-rOUdJa-1.js";import"./dialog-button.component-DaQbbkws.js";import"./label-lpU_fvmq.js";import"./cell-bank-Dio22WuE.js";import"./get-yes-no.util-C-N_EnQX.js";import"./useMutation-DXxtvDVZ.js";import"./cell-link--KBOF4Jq.js";import"./customer-cc-info.feature-R4_frQri.js";import"./use-get-customer-cc-by-id.query-ZRA_Dtxk.js";import"./index-cF7q6lRK.js";function U({totalBankPaymentCompleted:a,totalBankPaymentProcessing:i,totalMoneyCompleted:s,totalMoneyCompletedMinusFee:m,totalMoneyProcessing:o,totalMoneyProcessingMinusFee:l}){return t.jsxDEV("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4",children:[t.jsxDEV("div",{className:"lg:col-span-2 font-medium text-lg",children:["Total Bank Payment Completed: ",a]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/statistic-bank-payment-cards.feature.tsx",lineNumber:23,columnNumber:7},this),t.jsxDEV("div",{className:"lg:col-span-2 font-medium text-lg",children:["Total Bank Payment Processing: ",i]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/statistic-bank-payment-cards.feature.tsx",lineNumber:26,columnNumber:7},this),t.jsxDEV(n,{label:"Total Money Completed",value:r(s)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/statistic-bank-payment-cards.feature.tsx",lineNumber:29,columnNumber:7},this),t.jsxDEV(n,{label:"Total Money Completed (- Fee)",value:r(m)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/statistic-bank-payment-cards.feature.tsx",lineNumber:34,columnNumber:7},this),t.jsxDEV(n,{label:"Total Money Processing",value:r(o)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/statistic-bank-payment-cards.feature.tsx",lineNumber:39,columnNumber:7},this),t.jsxDEV(n,{label:"Total Money Processing (- Fee)",value:r(l)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/statistic-bank-payment-cards.feature.tsx",lineNumber:44,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/statistic-bank-payment-cards.feature.tsx",lineNumber:22,columnNumber:5},this)}function S(a){return N({url:"/statistics/Get_BankPayment_By_Date",params:a})}function M(a){const i=["BY_DATE",a._from,a._to,a.page,a.page_limit].join("_"),{data:s}=C({queryKey:[...g.BANK_PAYMENT,i],queryFn:()=>S(a),placeholderData:k,gcTime:1e3*10});return{bankPaymentByDate:s}}function B(){const[a,i]=c.useState({from:P(30),to:T()}),[s,m]=c.useState({pageIndex:0,pageSize:10}),[o,l]=h("statistic-bank-payment-columns",{defaultValue:V}),{bankPaymentByDate:e}=M({_from:b(a.from||new Date,d),_to:b(a.to||new Date,d),page:s.pageIndex+1,page_limit:s.pageSize}),{vnBanksByKey:u}=D(),y=c.useMemo(()=>j({vnBanks:u}),[u]),f=(p,...F)=>{p&&i(p)};return t.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[t.jsxDEV("div",{className:"flex items-center flex-col lg:flex-row justify-between space-y-2",children:[t.jsxDEV("h2",{className:"text-2xl lg:text-3xl font-bold tracking-tight",children:"Statistic Bank Payment"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/statistic-bank-payment.container.tsx",lineNumber:66,columnNumber:9},this),t.jsxDEV("div",{className:"flex items-center space-x-2",children:t.jsxDEV(E,{date:a,onSelect:f},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/statistic-bank-payment.container.tsx",lineNumber:70,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/statistic-bank-payment.container.tsx",lineNumber:69,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/statistic-bank-payment.container.tsx",lineNumber:65,columnNumber:7},this),t.jsxDEV(U,{totalBankPaymentCompleted:e==null?void 0:e.count_bank_completed,totalBankPaymentProcessing:e==null?void 0:e.count_bank_processing,totalMoneyCompleted:e==null?void 0:e.total_money_bank_payment_completed,totalMoneyCompletedMinusFee:e==null?void 0:e.total_money_bank_payment_completed_minus_fee,totalMoneyProcessing:e==null?void 0:e.total_money_bank_payment_processing,totalMoneyProcessingMinusFee:e==null?void 0:e.total_money_bank_payment_processing_minus_fee},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/statistic-bank-payment.container.tsx",lineNumber:73,columnNumber:7},this),t.jsxDEV(v,{data:e==null?void 0:e.result,columns:y,columnVisibility:o,rowCount:e==null?void 0:e.total_data,pagination:s,onColumnVisibilityChange:l,onPaginationChange:m},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/statistic-bank-payment.container.tsx",lineNumber:89,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/containers/statistic-bank-payment.container.tsx",lineNumber:64,columnNumber:5},this)}function ge(){return t.jsxDEV(_,{type:"admin",children:[t.jsxDEV(x,{children:t.jsxDEV("title",{children:"POS System - Statistic Bank Payment"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/pages/statistic-bank-payment.page.tsx",lineNumber:9,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/pages/statistic-bank-payment.page.tsx",lineNumber:8,columnNumber:7},this),t.jsxDEV(B,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/pages/statistic-bank-payment.page.tsx",lineNumber:11,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/pages/statistic-bank-payment.page.tsx",lineNumber:7,columnNumber:5},this)}export{ge as default};
