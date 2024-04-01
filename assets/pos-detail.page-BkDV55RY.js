import{u,j as e,L as p,R as N}from"./index-BwT9pd9i.js";import{H as b}from"./Helmet-BD19MAXm.js";import{u as f}from"./use-get-pos-by-id.query-B07SdO8n.js";import{L as s}from"./label-r_FXmdAx.js";import{C as r}from"./cell-text-DkpivG0U.js";import{C as l,a,b as o,c}from"./card-CZwsrlzR.js";import{g as x}from"./get-yes-no.util-C-N_EnQX.js";import{u as h}from"./use-get-vn-banks.query-9hKaHvT7.js";import{C as m}from"./cell-list-BqOMTcxo.js";import{C as g}from"./cell-bank-XvRW5Nd5.js";import{R as k}from"./role.component-DQNH9q8e.js";import{B as y}from"./button-DX2qHQAB.js";import{e as v}from"./react-icons.esm-srfArUxB.js";import{C as t}from"./cell-currency-DR9Ony-4.js";import"./useQuery-DaovVBEs.js";import"./api-client-Dl6Z7Gjw.js";import"./index-C2_1S1yO.js";import"./index-CdRcM393.js";import"./use-auth.cache-B81cjLEt.js";import"./format-currency-DwwnROlR.js";function P(){const n=u(),{vnBanksByKey:d}=h(),{pos:i}=f(Number(n.id));return e.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[e.jsxDEV("div",{className:"flex items-center flex-col lg:flex-row justify-between space-y-2",children:[e.jsxDEV("h2",{className:"text-2xl lg:text-3xl font-bold tracking-tight",children:["POS: ",n.id]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:24,columnNumber:9},this),e.jsxDEV(k,{type:"admin",children:e.jsxDEV(p,{to:N.POS_UPDATE.replace(":id",String(n.id)),className:"text-primary",children:e.jsxDEV(y,{variant:"outline",size:"icon",children:e.jsxDEV(v,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:33,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:32,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:28,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:27,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:23,columnNumber:7},this),e.jsxDEV("div",{className:"grid grid-cols-2 gap-8",children:[e.jsxDEV(l,{children:[e.jsxDEV(a,{children:e.jsxDEV(o,{children:"POS Info"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:41,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:40,columnNumber:11},this),e.jsxDEV(c,{children:e.jsxDEV("div",{className:"grid grid-cols-[200px_1fr] items-center gap-4",children:[e.jsxDEV(s,{className:"text-muted-foreground",children:"Pos ID"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:45,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.id},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:46,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"TID"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:48,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.tid},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:49,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"POS name"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:51,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.pos_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:52,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"POS pass"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:54,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.pos_pass},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:55,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Day received POS"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:57,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.day_received_pos},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:58,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Time waiting for next order"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:60,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.time_waiting_next_order},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:63,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Confirm message"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:65,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.confirm_message},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:66,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Note"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:68,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.note},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:69,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Active"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:71,columnNumber:15},this),e.jsxDEV(r,{children:x(i==null?void 0:i.is_active)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:72,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Last update"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:74,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.last_update},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:75,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Created time"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:77,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.time_insert},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:78,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:44,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:43,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:39,columnNumber:9},this),e.jsxDEV(l,{children:[e.jsxDEV(a,{children:e.jsxDEV(o,{children:"Bank Info"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:84,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:83,columnNumber:11},this),e.jsxDEV(c,{children:e.jsxDEV("div",{className:"grid grid-cols-[240px_1fr] items-center gap-4",children:[e.jsxDEV(s,{className:"text-muted-foreground",children:"Bank info"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:88,columnNumber:15},this),e.jsxDEV(g,{value:Number(i==null?void 0:i.id_vietnamese_banks),vnBanks:d},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:89,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"User login bank"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:94,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.user_login_bank},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:95,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Pass login bank"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:97,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.pass_login_bank},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:98,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Account bank name"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:100,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.account_bank_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:101,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Account number"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:103,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.account_number},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:104,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Timestone bank request money"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:106,columnNumber:15},this),e.jsxDEV(m,{list:i==null?void 0:i.timestone_bank_request_money},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:109,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Bank working time"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:111,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.bank_working_time},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:112,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Percent Bank Charge"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:114,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.percent_bank_charge},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:117,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:87,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:86,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:82,columnNumber:9},this),e.jsxDEV(l,{children:[e.jsxDEV(a,{children:e.jsxDEV(o,{children:"Card Info"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:123,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:122,columnNumber:11},this),e.jsxDEV(c,{children:e.jsxDEV("div",{className:"grid grid-cols-[280px_1fr] items-center gap-4",children:[e.jsxDEV(s,{className:"text-muted-foreground",children:"Type card allowed"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:127,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.type_card_allowed},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:128,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Credit limit charge"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:130,columnNumber:15},this),e.jsxDEV(m,{list:i==null?void 0:i.credit_limit_charge},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:133,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Credit limit charge per day"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:135,columnNumber:15},this),e.jsxDEV(t,{value:Number(i==null?void 0:i.credit_limit_charge_per_day)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:138,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Credit limit charge per month"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:140,columnNumber:15},this),e.jsxDEV(t,{value:Number(i==null?void 0:i.credit_limit_charge_per_month)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:143,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Credit limit customer card charge per day"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:147,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.credit_limit_customer_card_charge_per_day},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:150,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:126,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:125,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:121,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:38,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:22,columnNumber:5},this)}function z(){return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(b,{children:e.jsxDEV("title",{children:"POS System - POS Detail"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-detail.page.tsx",lineNumber:8,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-detail.page.tsx",lineNumber:7,columnNumber:7},this),e.jsxDEV(P,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-detail.page.tsx",lineNumber:10,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-detail.page.tsx",lineNumber:6,columnNumber:5},this)}export{z as default};
