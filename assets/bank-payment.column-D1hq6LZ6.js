import{a as d,Q as p,j as e,R as b,r as f}from"./index-DtKAakRc.js";import{U as y,E as k}from"./react-icons.esm-CNQoRNEM.js";import{B as l}from"./badge-teMzIrN4.js";import{B as i}from"./button-BGRJ0Mg8.js";import{D as N}from"./dialog-DRmCyBys.js";import{C as u}from"./cell-currency-BjxuAUk5.js";import{C as c}from"./cell-percent-Ufxu7soR.js";import{C as m}from"./cell-text-B6irVOmb.js";import{D as x}from"./dialog-button.component-CHFyoxy-.js";import{L as g}from"./label-DXZhCP0j.js";import{C as h}from"./cell-bank-B2UeGoLG.js";import{T as V,a as v,b as _,c as P}from"./index--x9GPfEa.js";import{u as T}from"./useMutation-Cv1PQFpo.js";import{a as D}from"./api-client-axGC5cZc.js";import{C as E}from"./cell-link-EJyhjKho.js";import{F as U}from"./customer-cc-info.feature-lBFd3J7Y.js";function j(r){return D({method:"patch",url:"/customer_history/bankPayments/update_bank_payment_complete",data:r})}function C(){const{mutateAsync:r}=T({mutationFn:j,onSettled:()=>{d.invalidateQueries({queryKey:p.BANK_PAYMENT})}});return{mutationUpdateBankPaymentStatusById:r}}function o({status:r,id:s}){const{mutationUpdateBankPaymentStatusById:a}=C(),n=()=>{a({id:s,is_bank_payment_complete:!r})};return e.jsxDEV(V,{children:e.jsxDEV(v,{children:[e.jsxDEV(_,{asChild:!0,children:e.jsxDEV(i,{variant:"outline",size:"icon",onClick:n,children:e.jsxDEV(y,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/update-bank-payment-status.feature.tsx",lineNumber:36,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/update-bank-payment-status.feature.tsx",lineNumber:31,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/update-bank-payment-status.feature.tsx",lineNumber:30,columnNumber:9},this),e.jsxDEV(P,{children:e.jsxDEV("p",{children:["Update bank payment to ",r?"uncomplete":"complete","."]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/update-bank-payment-status.feature.tsx",lineNumber:40,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/update-bank-payment-status.feature.tsx",lineNumber:39,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/update-bank-payment-status.feature.tsx",lineNumber:29,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/update-bank-payment-status.feature.tsx",lineNumber:28,columnNumber:5},this)}function B({row:r,vnBanks:s,showUpdateStatus:a}){return e.jsxDEV("div",{className:"grid sm:grid-cols-[200px_1fr] items-center gap-4 max-h-96 px-4 overflow-auto",children:r.getAllCells().map(n=>{let t=e.jsxDEV(m,{children:n.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:30,columnNumber:25},this);if(n.column.id!=="actions"){switch(n.column.id){case"id_customer_creditcard":t=e.jsxDEV(E,{to:b.CUSTOMER_CC_DETAIL.replace(":id",n.getValue()),children:n.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:37,columnNumber:15},this);break;case"id_vietnamese_bank":t=e.jsxDEV(h,{value:n.getValue(),vnBanks:s},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:50,columnNumber:15},this);break;case"is_bank_payment_complete":t=e.jsxDEV("div",{className:"space-x-2",children:[e.jsxDEV(l,{variant:n.getValue()?"success":"destructive",children:n.getValue()?"Đã chuyển":"Chưa chuyển"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:56,columnNumber:17},this),a&&e.jsxDEV(o,{id:n.row.original.id,status:n.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:62,columnNumber:19},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:55,columnNumber:15},this);break;case"percent_to_charge":t=e.jsxDEV(c,{value:n.getValue()/100},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:71,columnNumber:25},this);break;case"money_total":case"money_applied_percent":t=e.jsxDEV(u,{value:n.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:75,columnNumber:25},this);break}return e.jsxDEV(f.Fragment,{children:[e.jsxDEV(g,{className:"text-muted-foreground",children:n.column.columnDef.header},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:82,columnNumber:13},this),e.jsxDEV("div",{children:t},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:85,columnNumber:13},this)]},n.id,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:81,columnNumber:11},this)}})},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:28,columnNumber:5},this)}const J={id:!0,id_customer_creditcard:!0,id_vietnamese_bank:!0,is_bank_payment_complete:!0,money_applied_percent:!0,money_total:!0,percent_to_charge:!0,tid_pos:!0},W=({vnBanks:r,showUpdateStatus:s})=>[{accessorKey:"id",header:"ID",enableHiding:!1,cell:a=>e.jsxDEV(m,{children:a.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:38,columnNumber:14},void 0)},{accessorKey:"id_customer_creditcard",header:"Customer CCID",cell:a=>e.jsxDEV(U,{id:a.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:45,columnNumber:14},void 0)},{accessorKey:"tid_pos",header:"POS TID",cell:a=>e.jsxDEV(m,{children:a.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:52,columnNumber:14},void 0)},{accessorKey:"id_vietnamese_bank",header:"Bank Name",cell:a=>{var n;return e.jsxDEV(m,{children:(n=r==null?void 0:r[a.getValue()])==null?void 0:n.short_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:60,columnNumber:9},void 0)}},{accessorKey:"is_bank_payment_complete",header:"Is bank payment complete?",cell:a=>e.jsxDEV("div",{className:"space-x-2 truncate",children:[e.jsxDEV(l,{variant:a.getValue()?"success":"destructive",children:a.getValue()?"Đã chuyển":"Chưa chuyển"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:70,columnNumber:11},void 0),s&&e.jsxDEV(o,{id:a.row.original.id,status:a.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:74,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:69,columnNumber:9},void 0)},{accessorKey:"money_total",header:"Total Money",cell:a=>e.jsxDEV(u,{value:a.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:87,columnNumber:14},void 0)},{accessorKey:"percent_to_charge",header:"Percent to charge",cell:a=>e.jsxDEV(c,{value:a.getValue()/100},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:94,columnNumber:14},void 0)},{accessorKey:"money_applied_percent",header:"Total Money (- Fee)",cell:a=>e.jsxDEV(u,{value:a.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:101,columnNumber:14},void 0)},{id:"actions",enableHiding:!1,cell:({row:a})=>e.jsxDEV(x,{title:"Detail Info",description:"Detail info's bank payment.",trigger:e.jsxDEV(i,{variant:"outline",size:"icon",children:e.jsxDEV(k,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:114,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:113,columnNumber:13},void 0),actionButtons:e.jsxDEV(N,{asChild:!0,children:e.jsxDEV(i,{type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:119,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:118,columnNumber:13},void 0),children:e.jsxDEV(B,{row:a,vnBanks:r,showUpdateStatus:s},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:125,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:109,columnNumber:9},void 0)}];export{J as b,W as g};
