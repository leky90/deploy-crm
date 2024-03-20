import{r as o,Q as y,j as e,R as m,k as C,D as v}from"./index-f2VhjHM4.js";import{R as S}from"./role-redirect.component-D-uz4ls2.js";import{D as K}from"./data-table-tXgpZLlk.js";import{S as N,g as I,a as R,f as E,D as w}from"./statistic-card.component-Df-nvOAS.js";import{u as b,C as a}from"./cell-text-Cq1oX9CR.js";import{k as g}from"./index-f796fQww.js";import{a as p,B as k}from"./api-client-CpO0KqWb.js";import{u as A}from"./use-get-vn-banks.query-SdtvK60F.js";import{E as F}from"./react-icons.esm-DzWb6zRd.js";import{B as f}from"./badge-IRz1radI.js";import{D as B,a as M}from"./dialog-button.component-HLUr6rwj.js";import{C as d}from"./cell-currency-D2iR4Lnf.js";import{C as U}from"./cell-percent-1pnOjpuj.js";import{L as H}from"./label-CaHAlyiK.js";import{C as L}from"./cell-bank-CHG5qNwA.js";import{C as n}from"./cell-link-BsPUbX2B.js";import{f as h}from"./format-currency-DwwnROlR.js";import{H as q}from"./Helmet-DHwxXz5R.js";import"./use-auth.cache-B9lWy6Ij.js";import"./index-VWaDGczM.js";import"./index-M863FL3W.js";import"./index-CN8LCxPD.js";import"./card-zFnvhKA4.js";import"./format-percent-Ca7gawAv.js";import"./get-yes-no.util-C-N_EnQX.js";function Q(){return p({url:"/customer_history/rate_option"})}function G(){const{data:r}=b({queryKey:y.RATE_OPTIONS,queryFn:Q}),u=o.useMemo(()=>r!=null&&r.status?g(r.result,"id"):{},[r==null?void 0:r.status]);return{rateOptions:r==null?void 0:r.result,rateOptionsByKey:u}}function Y(){return p({url:"/customer_history/ListStatus"})}function z(){const{data:r}=b({queryKey:y.STATUSES,queryFn:Y}),u=o.useMemo(()=>r!=null&&r.status?g(r.result,"id"):{},[r==null?void 0:r.status]);return{statuses:r==null?void 0:r.result,statusesByKey:u}}function O(){return p({url:"/customer_history/user_option"})}function X(){const{data:r}=b({queryKey:y.USER_OPTIONS,queryFn:O}),u=o.useMemo(()=>r!=null&&r.status?g(r.result,"id"):{},[r==null?void 0:r.status]);return{userOptions:r==null?void 0:r.result,userOptionsByKey:u}}function J({row:r,userOptions:u,rateOptions:c,statuses:l,vnBanks:s}){return e.jsxDEV("div",{className:"grid grid-cols-2 gap-4 max-h-96 px-4 overflow-auto items-center",children:r.getAllCells().map(i=>{let t=e.jsxDEV(a,{children:i.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:37,columnNumber:25},this);if(i.column.id!=="actions"){switch(i.column.id){case"id_customer_info":t=e.jsxDEV(n,{to:m.CUSTOMER_DETAIL.replace(":id",i.getValue()),children:i.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:44,columnNumber:15},this);break;case"id_customer_creditcard":t=e.jsxDEV(n,{to:m.CUSTOMER_CC_DETAIL.replace(":id",i.getValue()),children:i.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:57,columnNumber:15},this);break;case"id_pos_info":t=e.jsxDEV(n,{to:m.STATISTICS_POS_USED.replace(":id",i.getValue()),children:i.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:70,columnNumber:15},this);break;case"id_vietnamese_bank":t=e.jsxDEV(L,{value:i.getValue(),vnBanks:s},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:83,columnNumber:15},this);break;case"status":t=e.jsxDEV(f,{variant:l==null?void 0:l[i.getValue()].status,children:l==null?void 0:l[i.getValue()].status},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:88,columnNumber:15},this);break;case"user_option":t=e.jsxDEV(a,{children:u==null?void 0:u[i.getValue()].name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:99,columnNumber:15},this);break;case"rate_option":t=e.jsxDEV(a,{children:c==null?void 0:c[i.getValue()].name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:104,columnNumber:15},this);break;case"is_bank_payment_complete":t=e.jsxDEV(f,{variant:i.getValue()?"success":"destructive",children:i.getValue()?"Đã chuyển":"Chưa chuyển"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:109,columnNumber:15},this);break;case"percent_to_charge":t=e.jsxDEV(U,{value:i.getValue()/100},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:117,columnNumber:25},this);break;case"money_total":case"money_applied_percent":case"fee":t=e.jsxDEV(d,{value:i.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:122,columnNumber:25},this);break}return e.jsxDEV(o.Fragment,{children:[e.jsxDEV(H,{className:"text-muted-foreground",children:i.column.columnDef.header},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:129,columnNumber:13},this),e.jsxDEV("div",{children:t},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:132,columnNumber:13},this)]},i.id,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:128,columnNumber:11},this)}})},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:35,columnNumber:5},this)}const W={id:!0,card_type:!0,date_coming_due:!0,date_due:!1,date_withdrawn:!0,days_coming_due:!0,fee:!0,id_customer_creditcard:!1,id_customer_info:!1,id_pos_info:!1,id_users:!1,id_vietnamese_bank:!1,images_creditcard_due_withdrawn:!1,images_transfer_money_to_customer:!1,is_bank_payment_complete:!0,last_update:!1,money_applied_percent:!0,money_total:!0,note:!1,percent_to_charge:!0,rate_option:!0,status:!0,time_insert:!1,user_option:!0,uuid_id:!1,tid_pos:!1},Z=({userOptions:r,rateOptions:u,statuses:c,vnBanks:l})=>[{accessorKey:"id",header:"ID",enableHiding:!1,cell:s=>e.jsxDEV(a,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:68,columnNumber:14},void 0)},{accessorKey:"uuid_id",header:"UUID",cell:s=>e.jsxDEV(a,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:75,columnNumber:14},void 0)},{accessorKey:"id_users",header:"User ID",cell:s=>e.jsxDEV(a,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:82,columnNumber:14},void 0)},{accessorKey:"rate_option",header:"Rate option",cell:s=>e.jsxDEV(a,{children:u==null?void 0:u[s.getValue()].name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:90,columnNumber:9},void 0)},{accessorKey:"user_option",header:"User option",cell:s=>e.jsxDEV(a,{children:r==null?void 0:r[s.getValue()].name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:99,columnNumber:9},void 0)},{accessorKey:"status",header:"Status",cell:s=>e.jsxDEV(f,{variant:c==null?void 0:c[s.getValue()].status,children:c==null?void 0:c[s.getValue()].status},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:108,columnNumber:9},void 0)},{accessorKey:"id_customer_creditcard",header:"Customer CCID",cell:s=>e.jsxDEV(n,{to:m.CUSTOMER_CC_DETAIL.replace(":id",s.getValue()),children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:121,columnNumber:9},void 0)},{accessorKey:"id_customer_info",header:"Customer Info ID",cell:s=>e.jsxDEV(n,{to:m.CUSTOMER_DETAIL.replace(":id",s.getValue()),children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:137,columnNumber:9},void 0)},{accessorKey:"tid_pos",header:"POS TID",cell:s=>e.jsxDEV(a,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:149,columnNumber:14},void 0)},{accessorKey:"id_pos_info",header:"POS ID",cell:s=>e.jsxDEV(n,{to:m.STATISTICS_POS_USED.replace(":id",s.getValue()),children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:157,columnNumber:9},void 0)},{accessorKey:"id_vietnamese_bank",header:"Bank Name",cell:s=>{var i;return e.jsxDEV(a,{children:(i=l==null?void 0:l[s.getValue()])==null?void 0:i.short_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:173,columnNumber:9},void 0)}},{accessorKey:"is_bank_payment_complete",header:"Is bank payment complete?",cell:s=>e.jsxDEV(f,{variant:s.getValue()?"success":"destructive",children:s.getValue()?"Đã chuyển":"Chưa chuyển"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:182,columnNumber:9},void 0)},{accessorKey:"date_due",header:"Date due",cell:s=>e.jsxDEV(a,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:192,columnNumber:14},void 0)},{accessorKey:"date_coming_due",header:"Date coming due",cell:s=>e.jsxDEV(a,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:199,columnNumber:14},void 0)},{accessorKey:"days_coming_due",header:"Days coming due",cell:s=>e.jsxDEV(a,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:206,columnNumber:14},void 0)},{accessorKey:"date_withdrawn",header:"Date withdrawn",cell:s=>e.jsxDEV(a,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:213,columnNumber:14},void 0)},{accessorKey:"card_type",header:"Card type",cell:s=>e.jsxDEV(a,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:221,columnNumber:14},void 0)},{accessorKey:"money_total",header:"Revenue",cell:s=>e.jsxDEV(d,{value:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:228,columnNumber:14},void 0)},{accessorKey:"percent_to_charge",header:"Percent to charge",cell:s=>e.jsxDEV(U,{value:s.getValue()/100},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:235,columnNumber:14},void 0)},{accessorKey:"fee",header:"Fee",cell:s=>e.jsxDEV(d,{value:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:242,columnNumber:14},void 0)},{accessorKey:"money_applied_percent",header:"Net profit",cell:s=>e.jsxDEV(d,{value:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:249,columnNumber:14},void 0)},{accessorKey:"note",header:"Note",cell:s=>e.jsxDEV(a,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:256,columnNumber:14},void 0)},{accessorKey:"last_update",header:"Last update",cell:s=>e.jsxDEV(a,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:263,columnNumber:14},void 0)},{accessorKey:"time_insert",header:"Created time",cell:s=>e.jsxDEV(a,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:270,columnNumber:14},void 0)},{id:"actions",enableHiding:!1,cell:({row:s})=>e.jsxDEV(B,{title:"Detail Info",description:"Detail info's statistic customer history.",className:"max-w-max",trigger:e.jsxDEV(k,{variant:"outline",size:"icon",children:e.jsxDEV(F,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:284,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:283,columnNumber:13},void 0),actionButtons:e.jsxDEV(M,{asChild:!0,children:e.jsxDEV(k,{type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:289,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:288,columnNumber:13},void 0),children:e.jsxDEV(J,{row:s,userOptions:r,rateOptions:u,statuses:c,vnBanks:l},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:295,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:278,columnNumber:9},void 0)}];function $({totalRevenue:r,totalNetProfit:u,totalFee:c}){return e.jsxDEV("div",{className:"grid grid-cols-3 gap-8",children:[e.jsxDEV(N,{label:"Total Revenue",value:h(r)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-cards.feature.tsx",lineNumber:17,columnNumber:7},this),e.jsxDEV(N,{label:"Total Net Profit",value:h(u)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-cards.feature.tsx",lineNumber:22,columnNumber:7},this),e.jsxDEV(N,{label:"Total Fee",value:h(c)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-cards.feature.tsx",lineNumber:27,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-cards.feature.tsx",lineNumber:16,columnNumber:5},this)}function ee(r){return p({url:"/statistics/Get_Customer_History_By_Date",params:r})}function se(r){const u=["BY_DATE",r._from,r._to,r.page,r.page_limit].join("_"),{data:c}=b({queryKey:[...y.CUSTOMER_HISTORY,u],queryFn:()=>ee(r),placeholderData:C,gcTime:1e3*10});return{customerHistoryByDate:c}}function re(){const[r,u]=o.useState({from:I(30),to:R()}),[c,l]=o.useState({pageIndex:0,pageSize:10}),[s,i]=o.useState(W),{customerHistoryByDate:t}=se({_from:E(r.from||new Date,v),_to:E(r.to||new Date,v),page:c.pageIndex+1,page_limit:c.pageSize}),{userOptionsByKey:x}=X(),{rateOptionsByKey:_}=G(),{statusesByKey:V}=z(),{vnBanksByKey:D}=A(),P=o.useMemo(()=>Z({userOptions:x,rateOptions:_,statuses:V,vnBanks:D}),[x,_,V,D]),j=(T,...te)=>{T&&u(T)};return e.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[e.jsxDEV("div",{className:"flex items-center justify-between space-y-2",children:[e.jsxDEV("h2",{className:"text-3xl font-bold tracking-tight",children:"Statistic Customer History"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/statistic-customer-history.container.tsx",lineNumber:67,columnNumber:9},this),e.jsxDEV("div",{className:"flex items-center space-x-2",children:e.jsxDEV(w,{date:r,onSelect:j},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/statistic-customer-history.container.tsx",lineNumber:71,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/statistic-customer-history.container.tsx",lineNumber:70,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/statistic-customer-history.container.tsx",lineNumber:66,columnNumber:7},this),e.jsxDEV($,{totalRevenue:t==null?void 0:t.money_total_in_date,totalNetProfit:t==null?void 0:t.money_applied_percent_in_date,totalFee:t==null?void 0:t.fee_in_date},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/statistic-customer-history.container.tsx",lineNumber:74,columnNumber:7},this),e.jsxDEV(K,{data:t==null?void 0:t.result,columns:P,columnVisibility:s,rowCount:t==null?void 0:t.total_data,pagination:c,onColumnVisibilityChange:i,onPaginationChange:l},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/statistic-customer-history.container.tsx",lineNumber:79,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/statistic-customer-history.container.tsx",lineNumber:65,columnNumber:5},this)}function Pe(){return e.jsxDEV(S,{type:"admin",children:[e.jsxDEV(q,{children:e.jsxDEV("title",{children:"POS System - Statistic Customer History"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/statistic-customer-history.page.tsx",lineNumber:9,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/statistic-customer-history.page.tsx",lineNumber:8,columnNumber:7},this),e.jsxDEV(re,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/statistic-customer-history.page.tsx",lineNumber:11,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/statistic-customer-history.page.tsx",lineNumber:7,columnNumber:5},this)}export{Pe as default};
