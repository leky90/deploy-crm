import{j as e,R as o,r as m,Q as E,k as P,D as _}from"./index-By_MqxwU.js";import{R as U}from"./role-redirect.component-Dd7mRcbP.js";import{u as j,D as C}from"./index-DywgBoDW.js";import{S as p,g as S,a as K,f as V,D as I}from"./statistic-card.component-C8s0ho_b.js";import{u as w,a as R}from"./use-get-user-options.query-CxbgN8Ch.js";import{u as F}from"./use-get-statuses.query-DG6pVDOT.js";import{u as H}from"./use-get-vn-banks.query-DSAVYBK9.js";import{I as A,E as Q}from"./react-icons.esm-CCD_7Esj.js";import{B as f}from"./badge-DBoWBBYm.js";import{B as D}from"./button-DQm-mP38.js";import{D as B}from"./dialog-DG3LMp1C.js";import{C as n}from"./cell-currency-BnHiPO7q.js";import{C as v}from"./cell-percent-Df_DgkCd.js";import{C as c}from"./cell-text-CXOXFKkB.js";import{D as L}from"./dialog-button.component-B8myB9UA.js";import{L as G}from"./label-BwwYkI0V.js";import{C as M}from"./cell-bank-AG6hJMoO.js";import{C as d}from"./cell-link-QhG4MiGF.js";import{F as Y}from"./customer-cc-info.feature-BlcS2fRn.js";import{F as z}from"./customer-info.feature-VlRJPfpH.js";import{f as b}from"./format-currency-DwwnROlR.js";import{u as q}from"./useQuery-BkAUE7Xx.js";import{a as X,H as J}from"./Helmet-k4G6Y4e8.js";import"./use-auth.cache-AZKXVsWK.js";import"./Combination-hpcmFLoC.js";import"./index-DtHC8X5T.js";import"./select-BNrkaJQ5.js";import"./dropdown-menu-DgVxZY2d.js";import"./index-BBKQ8zMW.js";import"./popover-9-4RV2Yy.js";import"./card-luLq1lJs.js";import"./index-F-kXlb2o.js";import"./index-DRDuA02g.js";import"./format-percent-Ca7gawAv.js";import"./get-yes-no.util-C-N_EnQX.js";import"./use-get-customer-cc-by-id.query-DtHRGhav.js";import"./use-get-customer-by-id.query-CiiA7vXc.js";function O({row:t,userOptions:l,rateOptions:u,statuses:a,vnBanks:s}){return e.jsxDEV("div",{className:"grid grid-cols-[200px_1fr] gap-4 max-h-96 px-4 overflow-auto items-center",children:t.getAllCells().map(r=>{let i=e.jsxDEV(c,{children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:38,columnNumber:25},this);if(r.column.id!=="actions"){switch(r.column.id){case"id_customer_info":i=e.jsxDEV(d,{to:o.CUSTOMER_DETAIL.replace(":id",r.getValue()),children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:45,columnNumber:15},this);break;case"id_customer_creditcard":i=e.jsxDEV(d,{to:o.CUSTOMER_CC_DETAIL.replace(":id",r.getValue()),children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:58,columnNumber:15},this);break;case"id_pos_info":i=e.jsxDEV(d,{to:o.STATISTICS_POS_USED.replace(":id",r.getValue()),children:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:71,columnNumber:15},this);break;case"id_vietnamese_bank":i=e.jsxDEV(M,{value:r.getValue(),vnBanks:s},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:84,columnNumber:15},this);break;case"status":i=e.jsxDEV(e.Fragment,{children:[e.jsxDEV(f,{variant:a==null?void 0:a[r.getValue()].status,children:a==null?void 0:a[r.getValue()].status},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:90,columnNumber:17},this),e.jsxDEV("p",{className:"italic text-xs mt-2 flex gap-2",children:[e.jsxDEV(A,{className:"w-4 mt-0.5"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:98,columnNumber:19},this)," ",a==null?void 0:a[r.getValue()].description]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:97,columnNumber:17},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:89,columnNumber:15},this);break;case"user_option":i=e.jsxDEV(c,{children:l==null?void 0:l[r.getValue()].name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:106,columnNumber:15},this);break;case"rate_option":i=e.jsxDEV(c,{children:u==null?void 0:u[r.getValue()].name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:111,columnNumber:15},this);break;case"is_bank_payment_complete":i=e.jsxDEV(f,{variant:r.getValue()?"success":"destructive",children:r.getValue()?"Đã chuyển":"Chưa chuyển"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:116,columnNumber:15},this);break;case"percent_to_charge":i=e.jsxDEV(v,{value:r.getValue()/100},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:124,columnNumber:25},this);break;case"money_total":case"money_applied_percent":case"fee":i=e.jsxDEV(n,{value:r.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:129,columnNumber:25},this);break}return e.jsxDEV(m.Fragment,{children:[e.jsxDEV(G,{className:"text-muted-foreground",children:r.column.columnDef.header},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:136,columnNumber:13},this),e.jsxDEV("div",{children:i},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:139,columnNumber:13},this)]},r.id,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:135,columnNumber:11},this)}})},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-info.feature.tsx",lineNumber:36,columnNumber:5},this)}const W={id:!0,card_type:!0,date_coming_due:!0,date_due:!1,date_withdrawn:!0,days_coming_due:!0,fee:!0,id_customer_creditcard:!1,id_customer_info:!1,id_pos_info:!1,id_users:!1,id_vietnamese_bank:!1,images_creditcard_due_withdrawn:!1,images_transfer_money_to_customer:!1,is_bank_payment_complete:!0,last_update:!1,money_applied_percent:!0,money_total:!0,note:!1,percent_to_charge:!0,rate_option:!0,status:!0,time_insert:!1,user_option:!0,uuid_id:!1,tid_pos:!1},Z=({userOptions:t,rateOptions:l,statuses:u,vnBanks:a})=>[{accessorKey:"id",header:"ID",enableHiding:!1,cell:s=>e.jsxDEV(c,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:70,columnNumber:14},void 0)},{accessorKey:"uuid_id",header:"UUID",cell:s=>e.jsxDEV(c,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:77,columnNumber:14},void 0)},{accessorKey:"id_users",header:"User ID",cell:s=>e.jsxDEV(c,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:84,columnNumber:14},void 0)},{accessorKey:"rate_option",header:"Rate option",cell:s=>{var r;return e.jsxDEV(c,{children:(r=l==null?void 0:l[s.getValue()])==null?void 0:r.name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:92,columnNumber:9},void 0)}},{accessorKey:"user_option",header:"User option",cell:s=>{var r;return e.jsxDEV(c,{children:(r=t==null?void 0:t[s.getValue()])==null?void 0:r.name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:101,columnNumber:9},void 0)}},{accessorKey:"status",header:"Status",cell:s=>{var r,i;return e.jsxDEV(f,{variant:(r=u==null?void 0:u[s.getValue()])==null?void 0:r.status,children:(i=u==null?void 0:u[s.getValue()])==null?void 0:i.status},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:110,columnNumber:9},void 0)}},{accessorKey:"id_customer_creditcard",header:"Customer CCID",cell:s=>e.jsxDEV(Y,{id:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:122,columnNumber:14},void 0)},{accessorKey:"id_customer_info",header:"Customer Info ID",cell:s=>e.jsxDEV(z,{id:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:129,columnNumber:14},void 0)},{accessorKey:"tid_pos",header:"POS TID",cell:s=>e.jsxDEV(c,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:136,columnNumber:14},void 0)},{accessorKey:"id_pos_info",header:"POS ID",cell:s=>e.jsxDEV(d,{to:o.STATISTICS_POS_USED.replace(":id",s.getValue()),children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:144,columnNumber:9},void 0)},{accessorKey:"id_vietnamese_bank",header:"Bank Name",cell:s=>{var r;return e.jsxDEV(c,{children:(r=a==null?void 0:a[s.getValue()])==null?void 0:r.short_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:160,columnNumber:9},void 0)}},{accessorKey:"is_bank_payment_complete",header:"Is bank payment complete?",cell:s=>e.jsxDEV(f,{variant:s.getValue()?"success":"destructive",children:s.getValue()?"Đã chuyển":"Chưa chuyển"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:169,columnNumber:9},void 0)},{accessorKey:"date_due",header:"Date due",cell:s=>e.jsxDEV(c,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:179,columnNumber:14},void 0)},{accessorKey:"date_coming_due",header:"Date coming due",cell:s=>e.jsxDEV(c,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:186,columnNumber:14},void 0)},{accessorKey:"days_coming_due",header:"Days coming due",cell:s=>e.jsxDEV(c,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:193,columnNumber:14},void 0)},{accessorKey:"date_withdrawn",header:"Date withdrawn",cell:s=>e.jsxDEV(c,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:200,columnNumber:14},void 0)},{accessorKey:"card_type",header:"Card type",cell:s=>e.jsxDEV(c,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:208,columnNumber:14},void 0)},{accessorKey:"money_total",header:"Revenue",cell:s=>e.jsxDEV(n,{value:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:215,columnNumber:14},void 0)},{accessorKey:"percent_to_charge",header:"Percent to charge",cell:s=>e.jsxDEV(v,{value:s.getValue()/100},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:222,columnNumber:14},void 0)},{accessorKey:"fee",header:"Fee",cell:s=>e.jsxDEV(n,{value:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:229,columnNumber:14},void 0)},{accessorKey:"money_applied_percent",header:"Net profit",cell:s=>e.jsxDEV(n,{value:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:236,columnNumber:14},void 0)},{accessorKey:"note",header:"Note",cell:s=>e.jsxDEV(c,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:243,columnNumber:14},void 0)},{accessorKey:"last_update",header:"Last update",cell:s=>e.jsxDEV(c,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:250,columnNumber:14},void 0)},{accessorKey:"time_insert",header:"Created time",cell:s=>e.jsxDEV(c,{children:s.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:257,columnNumber:14},void 0)},{id:"actions",enableHiding:!1,cell:({row:s})=>e.jsxDEV(L,{title:"Detail Info",description:"Detail info's statistic customer history.",className:"max-w-3xl",trigger:e.jsxDEV(D,{variant:"outline",size:"icon",children:e.jsxDEV(Q,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:271,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:270,columnNumber:13},void 0),actionButtons:e.jsxDEV(B,{asChild:!0,children:e.jsxDEV(D,{type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:276,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:275,columnNumber:13},void 0),children:e.jsxDEV(O,{row:s,userOptions:t,rateOptions:l,statuses:u,vnBanks:a},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:282,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/statistic-customer-history.column.tsx",lineNumber:265,columnNumber:9},void 0)}];function $({totalRevenue:t,totalNetProfit:l,totalFee:u}){return e.jsxDEV("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsxDEV(p,{label:"Total Revenue",value:b(t)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-cards.feature.tsx",lineNumber:17,columnNumber:7},this),e.jsxDEV(p,{label:"Total Net Profit",value:b(l)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-cards.feature.tsx",lineNumber:22,columnNumber:7},this),e.jsxDEV(p,{label:"Total Fee",value:b(u)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-cards.feature.tsx",lineNumber:27,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/features/statistic-customer-history-cards.feature.tsx",lineNumber:16,columnNumber:5},this)}function ee(t){return X({url:"/statistics/Get_Customer_History_By_Date",params:t})}function se(t){const l=["BY_DATE",t._from,t._to,t.page,t.page_limit].join("_"),{data:u}=q({queryKey:[...E.CUSTOMER_HISTORY,l],queryFn:()=>ee(t),placeholderData:P,gcTime:1e3*10});return{customerHistoryByDate:u}}function re(){const[t,l]=m.useState({from:S(30),to:K()}),[u,a]=m.useState({pageIndex:0,pageSize:10}),[s,r]=j("statistic-customer-history-columns",{defaultValue:W}),{customerHistoryByDate:i}=se({_from:V(t.from||new Date,_),_to:V(t.to||new Date,_),page:u.pageIndex+1,page_limit:u.pageSize}),{userOptionsByKey:y}=w(),{rateOptionsByKey:N}=R(),{statusesByKey:h}=F(),{vnBanksByKey:g}=H(),T=m.useMemo(()=>Z({userOptions:y,rateOptions:N,statuses:h,vnBanks:g}),[y,N,h,g]),k=(x,...ie)=>{x&&l(x)};return e.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[e.jsxDEV("div",{className:"flex items-center flex-col lg:flex-row justify-between space-y-2",children:[e.jsxDEV("h2",{className:"text-2xl lg:text-3xl font-bold tracking-tight",children:"Statistic Customer History"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/statistic-customer-history.container.tsx",lineNumber:75,columnNumber:9},this),e.jsxDEV("div",{className:"flex items-center space-x-2",children:e.jsxDEV(I,{date:t,onSelect:k},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/statistic-customer-history.container.tsx",lineNumber:79,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/statistic-customer-history.container.tsx",lineNumber:78,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/statistic-customer-history.container.tsx",lineNumber:74,columnNumber:7},this),e.jsxDEV($,{totalRevenue:i==null?void 0:i.money_total_in_date,totalNetProfit:i==null?void 0:i.money_applied_percent_in_date,totalFee:i==null?void 0:i.fee_in_date},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/statistic-customer-history.container.tsx",lineNumber:82,columnNumber:7},this),e.jsxDEV(C,{data:i==null?void 0:i.result,columns:T,columnVisibility:s,rowCount:i==null?void 0:i.total_data,pagination:u,onColumnVisibilityChange:r,onPaginationChange:a},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/statistic-customer-history.container.tsx",lineNumber:87,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/statistic-customer-history.container.tsx",lineNumber:73,columnNumber:5},this)}function Be(){return e.jsxDEV(U,{type:"admin",children:[e.jsxDEV(J,{children:e.jsxDEV("title",{children:"POS System - Statistic Customer History"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/statistic-customer-history.page.tsx",lineNumber:9,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/statistic-customer-history.page.tsx",lineNumber:8,columnNumber:7},this),e.jsxDEV(re,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/statistic-customer-history.page.tsx",lineNumber:11,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/statistic-customer-history.page.tsx",lineNumber:7,columnNumber:5},this)}export{Be as default};
