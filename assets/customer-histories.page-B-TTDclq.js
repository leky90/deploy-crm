import{j as r,R as a,L as h,Q as V,k as D,r as t}from"./index-DtKAakRc.js";import{H as v}from"./Helmet-DJWz6KFO.js";import{e as E,P}from"./react-icons.esm-CNQoRNEM.js";import{B as N}from"./button-BGRJ0Mg8.js";import{u as T,D as k}from"./index--x9GPfEa.js";import{u as U,a as j}from"./use-get-user-options.query-HtCrhQjE.js";import{u as C}from"./use-get-statuses.query-KvD1ZuU6.js";import{u as K}from"./use-get-vn-banks.query-BlJ42q5N.js";import{B as b}from"./badge-teMzIrN4.js";import{C as m}from"./cell-currency-BjxuAUk5.js";import{C as S}from"./cell-percent-Ufxu7soR.js";import{C as s}from"./cell-text-B6irVOmb.js";import{C as I}from"./cell-link-EJyhjKho.js";import{F as w}from"./customer-cc-info.feature-lBFd3J7Y.js";import{F as H}from"./customer-info.feature-yN0EHG8f.js";import{u as R}from"./useQuery-BLloIvPX.js";import{a as O}from"./api-client-axGC5cZc.js";import{I as B}from"./input-B-tuV2mB.js";import"./index-BNgByyD0.js";import"./Combination-DAgetaI7.js";import"./index-C1vx-IRk.js";import"./select-BrPI7tth.js";import"./dropdown-menu-CbsvQdp5.js";import"./index-765l_sCq.js";import"./index-j9Y1WKZp.js";import"./format-currency-DwwnROlR.js";import"./format-percent-Ca7gawAv.js";import"./label-DXZhCP0j.js";import"./dialog-button.component-CHFyoxy-.js";import"./dialog-DRmCyBys.js";import"./index-mEQ1JhiA.js";import"./use-get-customer-cc-by-id.query-BspkF_qL.js";import"./get-yes-no.util-C-N_EnQX.js";import"./use-get-customer-by-id.query-B3n07Npk.js";const Q={id:!0,card_type:!0,date_coming_due:!0,date_due:!1,date_withdrawn:!0,days_coming_due:!0,days_remaining_due:!0,fee:!0,id_customer_creditcard:!1,id_customer_info:!1,id_pos_info:!1,id_users:!1,id_vietnamese_bank:!1,images_creditcard_due_withdrawn:!1,images_transfer_money_to_customer:!1,is_bank_payment_complete:!0,last_update:!1,money_applied_percent:!0,money_total:!0,note:!1,percent_to_charge:!0,rate_option:!0,status:!0,time_insert:!1,user_option:!0,uuid_id:!1,tid_pos:!1},F=({userOptions:i,rateOptions:o,statuses:l,vnBanks:n})=>[{id:"id",accessorKey:"id",header:"ID",enableHiding:!1,enablePinning:!0,cell:e=>r.jsxDEV(s,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:71,columnNumber:14},void 0)},{accessorKey:"uuid_id",header:"UUID",cell:e=>r.jsxDEV(s,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:78,columnNumber:14},void 0)},{accessorKey:"id_users",header:"User ID",cell:e=>r.jsxDEV(s,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:85,columnNumber:14},void 0)},{accessorKey:"rate_option",header:"Rate option",cell:e=>{var u;return r.jsxDEV(s,{children:(u=o==null?void 0:o[e.getValue()])==null?void 0:u.name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:93,columnNumber:9},void 0)}},{accessorKey:"user_option",header:"User option",cell:e=>{var u;return r.jsxDEV(s,{children:(u=i==null?void 0:i[e.getValue()])==null?void 0:u.name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:102,columnNumber:9},void 0)}},{accessorKey:"status",header:"Status",cell:e=>{var u,c;return r.jsxDEV(b,{variant:(u=l==null?void 0:l[e.getValue()])==null?void 0:u.status,children:(c=l==null?void 0:l[e.getValue()])==null?void 0:c.status},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:111,columnNumber:9},void 0)}},{accessorKey:"id_customer_creditcard",header:"Customer CCID",cell:e=>r.jsxDEV(w,{id:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:123,columnNumber:14},void 0)},{accessorKey:"id_customer_info",header:"Customer Info ID",cell:e=>r.jsxDEV(H,{id:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:130,columnNumber:14},void 0)},{accessorKey:"tid_pos",header:"POS TID",cell:e=>r.jsxDEV(s,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:137,columnNumber:14},void 0)},{accessorKey:"id_pos_info",header:"POS ID",cell:e=>r.jsxDEV(I,{to:a.POS_DETAIL.replace(":id",e.getValue()),children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:145,columnNumber:9},void 0)},{accessorKey:"id_vietnamese_bank",header:"Bank Name",cell:e=>{var u;return r.jsxDEV(s,{children:(u=n==null?void 0:n[e.getValue()])==null?void 0:u.short_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:158,columnNumber:9},void 0)}},{accessorKey:"is_bank_payment_complete",header:"Is bank payment complete?",cell:e=>r.jsxDEV(b,{variant:e.getValue()?"success":"destructive",children:e.getValue()?"Đã chuyển":"Chưa chuyển"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:167,columnNumber:9},void 0)},{accessorKey:"date_due",header:"Date due",cell:e=>r.jsxDEV(s,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:177,columnNumber:14},void 0)},{accessorKey:"date_coming_due",header:"Date coming due",cell:e=>r.jsxDEV(s,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:184,columnNumber:14},void 0)},{accessorKey:"days_coming_due",header:"Days coming due",cell:e=>r.jsxDEV(s,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:191,columnNumber:14},void 0)},{accessorKey:"days_remaining_due",header:"Date remaining due",cell:e=>r.jsxDEV(s,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:198,columnNumber:14},void 0)},{accessorKey:"date_withdrawn",header:"Date withdrawn",cell:e=>r.jsxDEV(s,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:205,columnNumber:14},void 0)},{accessorKey:"card_type",header:"Card type",cell:e=>r.jsxDEV(s,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:212,columnNumber:14},void 0)},{accessorKey:"money_total",header:"Revenue",cell:e=>r.jsxDEV(m,{value:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:219,columnNumber:14},void 0)},{accessorKey:"percent_to_charge",header:"Percent to charge",cell:e=>r.jsxDEV(S,{value:e.getValue()/100},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:226,columnNumber:14},void 0)},{accessorKey:"fee",header:"Fee",cell:e=>r.jsxDEV(m,{value:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:233,columnNumber:14},void 0)},{accessorKey:"money_applied_percent",header:"Net profit",cell:e=>r.jsxDEV(m,{value:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:240,columnNumber:14},void 0)},{accessorKey:"note",header:"Note",cell:e=>r.jsxDEV(s,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:247,columnNumber:14},void 0)},{accessorKey:"last_update",header:"Last update",cell:e=>r.jsxDEV(s,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:254,columnNumber:14},void 0)},{accessorKey:"time_insert",header:"Created time",cell:e=>r.jsxDEV(s,{children:e.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:261,columnNumber:14},void 0)},{id:"actions",enableHiding:!1,cell:({row:e})=>r.jsxDEV("div",{className:"space-x-2 truncate h-9",children:e.original.status!==4&&r.jsxDEV(h,{to:a.CUSTOMER_HISTORIES_UPDATE.replace(":id",String(e.original.id)),className:"text-primary",children:r.jsxDEV(N,{variant:"outline",size:"icon",children:r.jsxDEV(E,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:279,columnNumber:17},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:278,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:271,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/columns/customer-history.column.tsx",lineNumber:269,columnNumber:9},void 0)}];function L(i){let o="get_all_order_history";return i.keywords&&(o="searchHistory"),O({url:"/customer_history/"+o,params:i})}function G(i){const o=[i.order_by,i.page,i.page_limit,i.keywords].join("_"),{data:l}=R({queryKey:[...V.CUSTOMER_HISTORY,o],queryFn:()=>L(i),placeholderData:D,gcTime:1e3*10});return{customerHistories:l}}function M(){const[i,o]=t.useState(),[l,n]=t.useState({pageIndex:0,pageSize:10}),[e,u]=T("customer-history-columns",{defaultValue:Q}),{customerHistories:c}=G({page:l.pageIndex+1,page_limit:l.pageSize,order_by:"DESC",keywords:i}),{userOptionsByKey:d}=U(),{rateOptionsByKey:p}=j(),{statusesByKey:f}=C(),{vnBanksByKey:y}=K(),g=t.useMemo(()=>F({userOptions:d,rateOptions:p,statuses:f,vnBanks:y}),[d,p,f,y]),x=_=>{o(_.target.value)};return r.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[r.jsxDEV("div",{className:"flex items-center flex-col lg:flex-row justify-between space-y-2",children:[r.jsxDEV("h2",{className:"text-2xl lg:text-3xl font-bold tracking-tight",children:"Customer Histories"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-histories.container.tsx",lineNumber:68,columnNumber:9},this),r.jsxDEV("div",{className:"flex items-center flex-col md:flex-row gap-2",children:[r.jsxDEV(B,{type:"search",placeholder:"Search customer histories",value:i,onChange:x,className:"w-80"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-histories.container.tsx",lineNumber:72,columnNumber:11},this),r.jsxDEV(h,{to:a.CUSTOMER_HISTORIES_CREATE,children:r.jsxDEV(N,{className:"gap-2",children:[r.jsxDEV(P,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-histories.container.tsx",lineNumber:81,columnNumber:15},this)," Create new order"]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-histories.container.tsx",lineNumber:80,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-histories.container.tsx",lineNumber:79,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-histories.container.tsx",lineNumber:71,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-histories.container.tsx",lineNumber:67,columnNumber:7},this),r.jsxDEV(k,{data:c==null?void 0:c.result,columns:g,columnVisibility:e,rowCount:c==null?void 0:c.total_data,pagination:l,onColumnVisibilityChange:u,onPaginationChange:n},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-histories.container.tsx",lineNumber:86,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-histories.container.tsx",lineNumber:66,columnNumber:5},this)}function Ee(){return r.jsxDEV(r.Fragment,{children:[r.jsxDEV(v,{children:r.jsxDEV("title",{children:"POS System - Customer Histories"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/customer-histories.page.tsx",lineNumber:8,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/customer-histories.page.tsx",lineNumber:7,columnNumber:7},this),r.jsxDEV(M,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/customer-histories.page.tsx",lineNumber:10,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/customer-histories.page.tsx",lineNumber:6,columnNumber:5},this)}export{Ee as default};
