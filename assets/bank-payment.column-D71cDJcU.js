import{a as b,Q as f,j as e,R as u,r as y}from"./index-BfH-S7tZ.js";import{U as k,E as N}from"./react-icons.esm-XcE--LT7.js";import{B as c}from"./badge-DqSx5fF-.js";import{a as x,B as i}from"./api-client-qBA4DTQv.js";import{D as g}from"./dialog-Dzi-kAH7.js";import{C as l}from"./cell-currency-CNhZ3DS_.js";import{C as o}from"./cell-percent-DCuNJry1.js";import{C as m}from"./cell-text-ChfqjlM6.js";import{D as h}from"./dialog-button.component-DTC0oagy.js";import{L as V}from"./label-BdL-3MWI.js";import{C as v}from"./cell-bank-DNV0qyrK.js";import{T as _,a as T,b as P,c as D}from"./index-WdKf6Ges.js";import{u as E}from"./useMutation-CMVljaSD.js";import{C as d}from"./cell-link-DEuFrnYI.js";function U(r){return x({method:"patch",url:"/customer_history/bankPayments/update_bank_payment_complete",data:r})}function j(){const{mutateAsync:r}=E({mutationFn:U,onSettled:()=>{b.invalidateQueries({queryKey:f.BANK_PAYMENT})}});return{mutationUpdateBankPaymentStatusById:r}}function p({status:r,id:s}){const{mutationUpdateBankPaymentStatusById:a}=j(),n=()=>{a({id:s,is_bank_payment_complete:!r})};return e.jsxDEV(_,{children:e.jsxDEV(T,{children:[e.jsxDEV(P,{asChild:!0,children:e.jsxDEV(i,{variant:"outline",size:"icon",onClick:n,children:e.jsxDEV(k,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/update-bank-payment-status.feature.tsx",lineNumber:36,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/update-bank-payment-status.feature.tsx",lineNumber:31,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/update-bank-payment-status.feature.tsx",lineNumber:30,columnNumber:9},this),e.jsxDEV(D,{children:e.jsxDEV("p",{children:["Update bank payment to ",r?"uncomplete":"complete","."]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/update-bank-payment-status.feature.tsx",lineNumber:40,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/update-bank-payment-status.feature.tsx",lineNumber:39,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/update-bank-payment-status.feature.tsx",lineNumber:29,columnNumber:7},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/update-bank-payment-status.feature.tsx",lineNumber:28,columnNumber:5},this)}function C({row:r,vnBanks:s,showUpdateStatus:a}){return e.jsxDEV("div",{className:"grid grid-cols-2 items-center gap-4 max-h-96 px-4 overflow-auto",children:r.getAllCells().map(n=>{let t=e.jsxDEV(m,{children:n.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:30,columnNumber:25},this);if(n.column.id!=="actions"){switch(n.column.id){case"id_customer_creditcard":t=e.jsxDEV(d,{to:u.CUSTOMER_CC_DETAIL.replace(":id",n.getValue()),children:n.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:37,columnNumber:15},this);break;case"id_vietnamese_bank":t=e.jsxDEV(v,{value:n.getValue(),vnBanks:s},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:50,columnNumber:15},this);break;case"is_bank_payment_complete":t=e.jsxDEV("div",{className:"space-x-2",children:[e.jsxDEV(c,{variant:n.getValue()?"success":"destructive",children:n.getValue()?"Đã chuyển":"Chưa chuyển"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:56,columnNumber:17},this),a&&e.jsxDEV(p,{id:n.row.original.id,status:n.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:62,columnNumber:19},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:55,columnNumber:15},this);break;case"percent_to_charge":t=e.jsxDEV(o,{value:n.getValue()/100},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:71,columnNumber:25},this);break;case"money_total":case"money_applied_percent":t=e.jsxDEV(l,{value:n.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:75,columnNumber:25},this);break}return e.jsxDEV(y.Fragment,{children:[e.jsxDEV(V,{className:"text-muted-foreground",children:n.column.columnDef.header},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:82,columnNumber:13},this),e.jsxDEV("div",{children:t},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:85,columnNumber:13},this)]},n.id,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:81,columnNumber:11},this)}})},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/features/bank-payment-info.feature.tsx",lineNumber:28,columnNumber:5},this)}const H={id:!0,id_customer_creditcard:!0,id_vietnamese_bank:!0,is_bank_payment_complete:!0,money_applied_percent:!0,money_total:!0,percent_to_charge:!0,tid_pos:!0},q=({vnBanks:r,showUpdateStatus:s})=>[{accessorKey:"id",header:"ID",enableHiding:!1,cell:a=>e.jsxDEV(m,{children:a.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:39,columnNumber:14},void 0)},{accessorKey:"id_customer_creditcard",header:"Customer CCID",cell:a=>e.jsxDEV(d,{to:u.CUSTOMER_CC_DETAIL.replace(":id",a.getValue()),children:a.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:47,columnNumber:9},void 0)},{accessorKey:"tid_pos",header:"POS TID",cell:a=>e.jsxDEV(m,{children:a.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:62,columnNumber:14},void 0)},{accessorKey:"id_vietnamese_bank",header:"Bank Name",cell:a=>{var n;return e.jsxDEV(m,{children:(n=r==null?void 0:r[a.getValue()])==null?void 0:n.short_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:70,columnNumber:9},void 0)}},{accessorKey:"is_bank_payment_complete",header:"Is bank payment complete?",cell:a=>e.jsxDEV("div",{className:"space-x-2",children:[e.jsxDEV(c,{variant:a.getValue()?"success":"destructive",children:a.getValue()?"Đã chuyển":"Chưa chuyển"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:80,columnNumber:11},void 0),s&&e.jsxDEV(p,{id:a.row.original.id,status:a.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:84,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:79,columnNumber:9},void 0)},{accessorKey:"money_total",header:"Total Money",cell:a=>e.jsxDEV(l,{value:a.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:97,columnNumber:14},void 0)},{accessorKey:"percent_to_charge",header:"Percent to charge",cell:a=>e.jsxDEV(o,{value:a.getValue()/100},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:104,columnNumber:14},void 0)},{accessorKey:"money_applied_percent",header:"Total Money (- Fee)",cell:a=>e.jsxDEV(l,{value:a.getValue()},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:111,columnNumber:14},void 0)},{id:"actions",enableHiding:!1,cell:({row:a})=>e.jsxDEV(h,{title:"Detail Info",description:"Detail info's statistic bank payment.",className:"max-w-max",trigger:e.jsxDEV(i,{variant:"outline",size:"icon",children:e.jsxDEV(N,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:125,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:124,columnNumber:13},void 0),actionButtons:e.jsxDEV(g,{asChild:!0,children:e.jsxDEV(i,{type:"button",variant:"secondary",children:"Close"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:130,columnNumber:15},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:129,columnNumber:13},void 0),children:e.jsxDEV(C,{row:a,vnBanks:r,showUpdateStatus:s},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:136,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/bank-payment/columns/bank-payment.column.tsx",lineNumber:119,columnNumber:9},void 0)}];export{H as b,q as g};
