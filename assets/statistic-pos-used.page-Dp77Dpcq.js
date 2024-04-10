import{Q as x,k as P,j as s,b as _,r as l,D as d}from"./index-CJ4aojTS.js";import{R as y}from"./role-redirect.component-DTyU-cAr.js";import{a as h,H as k}from"./Helmet-CQJxFuV9.js";import{u as v,D as T}from"./index-BmIi7Ov-.js";import{S as m,g as E,a as V,f,D as j}from"./statistic-card.component-Cx8O3Imu.js";import{u as D}from"./use-get-vn-banks.query-BlDHlsht.js";import{u as C}from"./useQuery-DY6s3jgh.js";import{b as S,g as U}from"./bank-payment.column-DVrearKW.js";import{f as u}from"./format-currency-DwwnROlR.js";import"./use-auth.cache--d25v-3P.js";import"./button-C7e1d5xZ.js";import"./Combination-BfeDkqor.js";import"./index-BpO2Y5GS.js";import"./react-icons.esm-DY0tv6xu.js";import"./select-CRLuTXUs.js";import"./dropdown-menu-BEcUP2XE.js";import"./index-B3aP1jZr.js";import"./index-CBzUkH_N.js";import"./popover-CaKhNzu_.js";import"./card-DKsQ3IgN.js";import"./index-CmOA9PUo.js";import"./badge-C_94xrZ-.js";import"./dialog-CRrJ1IH6.js";import"./index-dwtWVcVM.js";import"./cell-currency-mQusPvtk.js";import"./cell-percent-BSXB9IBG.js";import"./format-percent-Ca7gawAv.js";import"./cell-text-CM1Jten_.js";import"./dialog-button.component-Ztd2_n_g.js";import"./label-DHIBfv39.js";import"./cell-bank-DZod-G-2.js";import"./get-yes-no.util-C-N_EnQX.js";import"./useMutation-5gSZwTnf.js";import"./alert-dialog-xGKsAhOS.js";import"./cell-link-BQ8TPq3f.js";import"./customer-cc-info.feature-W6cCLnq0.js";import"./use-get-customer-cc-by-id.query-Chyey2jD.js";function F(t){return h({url:"/statistics/Get_Pos_Used_By_Date",params:t})}function M(t){const i=["BY_DATE",t.id_pos_info,t._from,t._to,t.page,t.page_limit].join("_"),{data:a}=C({queryKey:[...x.POS_USED,i],queryFn:()=>F(t),placeholderData:P,gcTime:1e3*10});return{posUsedByDate:a}}function R({totalBankPayment:t,totalBankPaymentCompleted:i,totalBankPaymentProcessing:a,totalMoneyCompleted:r,totalMoneyCompletedMinusFee:o,fee:n}){return s.jsxDEV("div",{className:"grid md:grid-cols-3 gap-x-8 gap-y-4",children:[s.jsxDEV("div",{className:"font-medium text-lg",children:["Total Bank Payment: ",t]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-used-cards.feature.tsx",lineNumber:23,columnNumber:7},this),s.jsxDEV("div",{className:"font-medium text-lg",children:["Total Bank Payment Completed: ",i]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-used-cards.feature.tsx",lineNumber:26,columnNumber:7},this),s.jsxDEV("div",{className:"font-medium text-lg",children:["Total Bank Payment Processing: ",a]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-used-cards.feature.tsx",lineNumber:29,columnNumber:7},this),s.jsxDEV(m,{label:"Total Money Completed",value:u(r)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-used-cards.feature.tsx",lineNumber:32,columnNumber:7},this),s.jsxDEV(m,{label:"Fee",value:u(n)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-used-cards.feature.tsx",lineNumber:36,columnNumber:7},this),s.jsxDEV(m,{label:"Total Money Completed (- Fee)",value:u(o)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-used-cards.feature.tsx",lineNumber:37,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/features/statistic-pos-used-cards.feature.tsx",lineNumber:22,columnNumber:5},this)}function w(){const{id:t}=_(),[i,a]=l.useState({from:E(30),to:V()}),[r,o]=l.useState({pageIndex:0,pageSize:10}),[n,b]=v("pos-used-columns",{defaultValue:S}),{posUsedByDate:e}=M({_from:f(i.from||new Date,d),_to:f(i.to||new Date,d),id_pos_info:String(t),page:r.pageIndex+1,page_limit:r.pageSize}),{vnBanksByKey:c}=D(),g=l.useMemo(()=>U({vnBanks:c}),[c]),N=(p,...O)=>{p&&a(p)};return s.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[s.jsxDEV("div",{className:"flex items-center flex-col lg:flex-row justify-between space-y-2",children:[s.jsxDEV("h2",{className:"text-2xl lg:text-3xl font-bold tracking-tight",children:"Statistic POS Used"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/statistic-pos-used.container.tsx",lineNumber:69,columnNumber:9},this),s.jsxDEV("div",{className:"flex items-center space-x-2",children:s.jsxDEV(j,{date:i,onSelect:N},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/statistic-pos-used.container.tsx",lineNumber:73,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/statistic-pos-used.container.tsx",lineNumber:72,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/statistic-pos-used.container.tsx",lineNumber:68,columnNumber:7},this),s.jsxDEV(R,{totalBankPayment:e==null?void 0:e.total,totalBankPaymentCompleted:e==null?void 0:e.tong_so_giao_dich_da_duoc_bank_tra_tien,totalBankPaymentProcessing:e==null?void 0:e.tong_so_giao_dich_chua_duoc_bank_tra_tien,totalMoneyCompleted:e==null?void 0:e.tong_tien_chua_tru_phi,totalMoneyCompletedMinusFee:e==null?void 0:e.tong_tien_da_tru_phi,fee:e==null?void 0:e.fee},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/statistic-pos-used.container.tsx",lineNumber:77,columnNumber:7},this),s.jsxDEV(T,{data:e==null?void 0:e.result,columns:g,rowCount:e==null?void 0:e.total_data,columnVisibility:n,onColumnVisibilityChange:b,pagination:r,onPaginationChange:o},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/statistic-pos-used.container.tsx",lineNumber:90,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/statistic-pos-used.container.tsx",lineNumber:67,columnNumber:5},this)}function ye(){return s.jsxDEV(y,{type:"admin",children:[s.jsxDEV(k,{children:s.jsxDEV("title",{children:"POS System - Statistic POS Used"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/statistic-pos-used.page.tsx",lineNumber:9,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/statistic-pos-used.page.tsx",lineNumber:8,columnNumber:7},this),s.jsxDEV(w,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/statistic-pos-used.page.tsx",lineNumber:11,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/statistic-pos-used.page.tsx",lineNumber:7,columnNumber:5},this)}export{ye as default};
