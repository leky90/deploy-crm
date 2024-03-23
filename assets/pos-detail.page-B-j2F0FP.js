import{u,j as e,L as p,R as N}from"./index-BW3fkt-M.js";import{B as b,H as f}from"./Helmet-OaKBlYli.js";import{u as x}from"./use-get-pos-by-id.query-73zI8mR_.js";import{L as s}from"./label-e6HV52G4.js";import{C as r}from"./cell-text-Ct9D4_Tw.js";import{C as l,a,b as o,c}from"./card-DS7SZm9E.js";import{g as h}from"./get-yes-no.util-C-N_EnQX.js";import{u as g}from"./use-get-vn-banks.query-BytOnmjE.js";import{C as m}from"./cell-list-BwWgy6gq.js";import{C as k}from"./cell-bank-B0BFChEt.js";import{R as y}from"./role.component-BGMCmEb0.js";import{d as v}from"./react-icons.esm-O1iptPrg.js";import{C as t}from"./cell-currency-BzQ4QuBG.js";import"./index-DSdWNMLF.js";import"./useQuery-B6B7ipRg.js";import"./index-DzMN1AwG.js";import"./use-auth.cache-CfY9Lrr3.js";import"./index-VWaDGczM.js";import"./format-currency-DwwnROlR.js";function P(){const n=u(),{vnBanksByKey:d}=g(),{pos:i}=x(Number(n.id));return e.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[e.jsxDEV("div",{className:"flex items-center justify-between space-y-2",children:[e.jsxDEV("h2",{className:"text-3xl font-bold tracking-tight",children:["POS: ",n.id]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:24,columnNumber:9},this),e.jsxDEV(y,{type:"admin",children:e.jsxDEV(p,{to:N.POS_UPDATE.replace(":id",String(n.id)),className:"text-primary",children:e.jsxDEV(b,{variant:"outline",size:"icon",children:e.jsxDEV(v,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:31,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:30,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:26,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:25,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:23,columnNumber:7},this),e.jsxDEV("div",{className:"grid grid-cols-2 gap-8",children:[e.jsxDEV(l,{children:[e.jsxDEV(a,{children:e.jsxDEV(o,{children:"POS Info"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:39,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:38,columnNumber:11},this),e.jsxDEV(c,{children:e.jsxDEV("div",{className:"grid grid-cols-[200px_1fr] items-center gap-4",children:[e.jsxDEV(s,{className:"text-muted-foreground",children:"Pos ID"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:43,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.id},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:44,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"TID"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:46,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.tid},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:47,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"POS name"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:49,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.pos_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:50,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"POS pass"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:52,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.pos_pass},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:53,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Day received POS"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:55,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.day_received_pos},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:56,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Time waiting for next order"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:58,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.time_waiting_next_order},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:61,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Confirm message"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:63,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.confirm_message},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:64,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Note"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:66,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.note},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:67,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Active"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:69,columnNumber:15},this),e.jsxDEV(r,{children:h(i==null?void 0:i.is_active)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:70,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Last update"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:72,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.last_update},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:73,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Created time"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:75,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.time_insert},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:76,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:42,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:41,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:37,columnNumber:9},this),e.jsxDEV(l,{children:[e.jsxDEV(a,{children:e.jsxDEV(o,{children:"Bank Info"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:82,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:81,columnNumber:11},this),e.jsxDEV(c,{children:e.jsxDEV("div",{className:"grid grid-cols-[240px_1fr] items-center gap-4",children:[e.jsxDEV(s,{className:"text-muted-foreground",children:"Bank info"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:86,columnNumber:15},this),e.jsxDEV(k,{value:Number(i==null?void 0:i.id_vietnamese_banks),vnBanks:d},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:87,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"User login bank"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:92,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.user_login_bank},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:93,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Pass login bank"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:95,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.pass_login_bank},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:96,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Account bank name"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:98,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.account_bank_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:99,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Account number"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:101,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.account_number},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:102,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Timestone bank request money"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:104,columnNumber:15},this),e.jsxDEV(m,{list:i==null?void 0:i.timestone_bank_request_money},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:107,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Bank working time"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:109,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.bank_working_time},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:110,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Percent Bank Charge"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:112,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.percent_bank_charge},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:115,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:85,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:84,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:80,columnNumber:9},this),e.jsxDEV(l,{children:[e.jsxDEV(a,{children:e.jsxDEV(o,{children:"Card Info"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:121,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:120,columnNumber:11},this),e.jsxDEV(c,{children:e.jsxDEV("div",{className:"grid grid-cols-[280px_1fr] items-center gap-4",children:[e.jsxDEV(s,{className:"text-muted-foreground",children:"Type card allowed"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:125,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.type_card_allowed},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:126,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Credit limit charge"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:128,columnNumber:15},this),e.jsxDEV(m,{list:i==null?void 0:i.credit_limit_charge},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:131,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Credit limit charge per day"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:133,columnNumber:15},this),e.jsxDEV(t,{value:Number(i==null?void 0:i.credit_limit_charge_per_day)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:136,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Credit limit charge per month"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:138,columnNumber:15},this),e.jsxDEV(t,{value:Number(i==null?void 0:i.credit_limit_charge_per_month)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:141,columnNumber:15},this),e.jsxDEV(s,{className:"text-muted-foreground",children:"Credit limit customer card charge per day"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:145,columnNumber:15},this),e.jsxDEV(r,{children:i==null?void 0:i.credit_limit_customer_card_charge_per_day},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:148,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:124,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:123,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:119,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:36,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/containers/pos-detail.container.tsx",lineNumber:22,columnNumber:5},this)}function Q(){return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(f,{children:e.jsxDEV("title",{children:"POS System - POS Detail"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-detail.page.tsx",lineNumber:8,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-detail.page.tsx",lineNumber:7,columnNumber:7},this),e.jsxDEV(P,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-detail.page.tsx",lineNumber:10,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/pages/pos-detail.page.tsx",lineNumber:6,columnNumber:5},this)}export{Q as default};
