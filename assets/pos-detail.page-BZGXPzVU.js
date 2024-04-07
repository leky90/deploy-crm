import{b as o,j as e,L as u,R as h}from"./index-XwE6gQmn.js";import{H as j}from"./Helmet-DUuvCvTm.js";import{u as g}from"./use-get-pos-by-id.query-DSytBAUX.js";import{L as t}from"./label-DhoCOihp.js";import{C as i}from"./cell-text-H3JibL2T.js";import{C as n,a,b as d,c}from"./card-BA5oHXKG.js";import{g as f}from"./get-yes-no.util-C-N_EnQX.js";import{u as _}from"./use-get-vn-banks.query-F2BXTXzV.js";import{C as l}from"./cell-list-YOE9KrGg.js";import{C as N}from"./cell-bank-ajtKXmsI.js";import{R as C}from"./role.component-D8MaKBYp.js";import{B as k}from"./button-C4HOWXLM.js";import{e as y}from"./react-icons.esm-5SUvy-NO.js";import{C as m}from"./cell-currency-D6tOSgAE.js";import"./useQuery-BXJOiSOe.js";import"./index-CwCgg0f3.js";import"./use-auth.cache-CFuprbIQ.js";import"./format-currency-DwwnROlR.js";function b(){const s=o(),{vnBanksByKey:x}=_(),{pos:r}=g(Number(s.id));return e.jsxs("div",{className:"space-y-6 px-4 py-4",children:[e.jsxs("div",{className:"flex items-center flex-col lg:flex-row justify-between space-y-2",children:[e.jsxs("h2",{className:"text-2xl lg:text-3xl font-bold tracking-tight",children:["POS: ",s.id]}),e.jsx(C,{type:"admin",children:e.jsx(u,{to:h.POS_UPDATE.replace(":id",String(s.id)),className:"text-primary",children:e.jsx(k,{variant:"outline",size:"icon",children:e.jsx(y,{})})})})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[e.jsxs(n,{children:[e.jsx(a,{children:e.jsx(d,{children:"POS Info"})}),e.jsx(c,{children:e.jsxs("div",{className:"grid md:grid-cols-[200px_1fr] items-center gap-4",children:[e.jsx(t,{className:"text-muted-foreground",children:"Pos ID"}),e.jsx(i,{children:r==null?void 0:r.id}),e.jsx(t,{className:"text-muted-foreground",children:"TID"}),e.jsx(i,{children:r==null?void 0:r.tid}),e.jsx(t,{className:"text-muted-foreground",children:"POS name"}),e.jsx(i,{children:r==null?void 0:r.pos_name}),e.jsx(t,{className:"text-muted-foreground",children:"POS pass"}),e.jsx(i,{children:r==null?void 0:r.pos_pass}),e.jsx(t,{className:"text-muted-foreground",children:"Day received POS"}),e.jsx(i,{children:r==null?void 0:r.day_received_pos}),e.jsx(t,{className:"text-muted-foreground",children:"Time waiting for next order"}),e.jsx(i,{children:r==null?void 0:r.time_waiting_next_order}),e.jsx(t,{className:"text-muted-foreground",children:"Confirm message"}),e.jsx(i,{children:r==null?void 0:r.confirm_message}),e.jsx(t,{className:"text-muted-foreground",children:"Note"}),e.jsx(i,{children:r==null?void 0:r.note}),e.jsx(t,{className:"text-muted-foreground",children:"Active"}),e.jsx(i,{children:f(r==null?void 0:r.is_active)}),e.jsx(t,{className:"text-muted-foreground",children:"Last update"}),e.jsx(i,{children:r==null?void 0:r.last_update}),e.jsx(t,{className:"text-muted-foreground",children:"Created time"}),e.jsx(i,{children:r==null?void 0:r.time_insert})]})})]}),e.jsxs(n,{children:[e.jsx(a,{children:e.jsx(d,{children:"Bank Info"})}),e.jsx(c,{children:e.jsxs("div",{className:"grid md:grid-cols-[240px_1fr] items-center gap-4",children:[e.jsx(t,{className:"text-muted-foreground",children:"Bank info"}),e.jsx(N,{value:Number(r==null?void 0:r.id_vietnamese_banks),vnBanks:x}),e.jsx(t,{className:"text-muted-foreground",children:"User login bank"}),e.jsx(i,{children:r==null?void 0:r.user_login_bank}),e.jsx(t,{className:"text-muted-foreground",children:"Pass login bank"}),e.jsx(i,{children:r==null?void 0:r.pass_login_bank}),e.jsx(t,{className:"text-muted-foreground",children:"Account bank name"}),e.jsx(i,{children:r==null?void 0:r.account_bank_name}),e.jsx(t,{className:"text-muted-foreground",children:"Account number"}),e.jsx(i,{children:r==null?void 0:r.account_number}),e.jsx(t,{className:"text-muted-foreground",children:"Timestone bank request money"}),e.jsx(l,{list:r==null?void 0:r.timestone_bank_request_money}),e.jsx(t,{className:"text-muted-foreground",children:"Bank working time"}),e.jsx(i,{children:r==null?void 0:r.bank_working_time}),e.jsx(t,{className:"text-muted-foreground",children:"Percent Bank Charge"}),e.jsx(i,{children:r==null?void 0:r.percent_bank_charge})]})})]}),e.jsxs(n,{children:[e.jsx(a,{children:e.jsx(d,{children:"Card Info"})}),e.jsx(c,{children:e.jsxs("div",{className:"grid md:grid-cols-[280px_1fr] items-center gap-4",children:[e.jsx(t,{className:"text-muted-foreground",children:"Type card allowed"}),e.jsx(i,{children:r==null?void 0:r.type_card_allowed}),e.jsx(t,{className:"text-muted-foreground",children:"Credit limit charge"}),e.jsx(l,{list:r==null?void 0:r.credit_limit_charge}),e.jsx(t,{className:"text-muted-foreground",children:"Credit limit charge per day"}),e.jsx(m,{value:Number(r==null?void 0:r.credit_limit_charge_per_day)}),e.jsx(t,{className:"text-muted-foreground",children:"Credit limit charge per month"}),e.jsx(m,{value:Number(r==null?void 0:r.credit_limit_charge_per_month)}),e.jsx(t,{className:"text-muted-foreground",children:"Credit limit customer card charge per day"}),e.jsx(i,{children:r==null?void 0:r.credit_limit_customer_card_charge_per_day})]})})]})]})]})}function Q(){return e.jsxs(e.Fragment,{children:[e.jsx(j,{children:e.jsx("title",{children:"POS System - POS Detail"})}),e.jsx(b,{})]})}export{Q as default};
