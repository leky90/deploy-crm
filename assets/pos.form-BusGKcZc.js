import{j as s}from"./index-xDYarw1b.js";import{z as r,u as k,t as v,F as m}from"./index-DItwitxo.js";import{B as P}from"./api-client-CwwcObB-.js";import{I as n}from"./input-DJhrRHsh.js";import{C as a,a as u,b as d,c as t}from"./card-CwUVWthK.js";import{L as l}from"./label-rPC5FL3x.js";import{S as T,a as j,b as E,c as D,d as U}from"./select-DShSM5nG.js";import{T as N}from"./textarea-DuzNmtWy.js";import{I as x}from"./react-icons.esm-Cl8tMfv6.js";import{F as V}from"./vn-bank.field-CW3T0VaV.js";const C=r.object({id:r.coerce.number().optional(),tid:r.string().nonempty(),pos_name:r.string().nonempty(),pos_pass:r.string().nonempty(),day_received_pos:r.coerce.number(),time_waiting_next_order:r.coerce.number(),confirm_message:r.string().nonempty(),note:r.string().nonempty(),is_active:r.coerce.number({invalid_type_error:"Required."}).min(0,"Required.").max(1,"Required."),id_vietnamese_banks:r.coerce.number({invalid_type_error:"Required."}),account_bank_name:r.string().nonempty(),account_number:r.string().nonempty(),timestone_bank_request_money:r.string().nonempty(),bank_working_time:r.string().nonempty(),percent_bank_charge:r.coerce.number(),type_card_allowed:r.string().nonempty(),credit_limit_charge:r.string().nonempty(),credit_limit_charge_per_day:r.string().nonempty(),credit_limit_charge_per_month:r.string().nonempty(),credit_limit_customer_card_charge_per_day:r.string().nonempty(),user_login_bank:r.string().nonempty(),pass_login_bank:r.string().nonempty()});function H({defaultValues:e,mutation:h}){var f,b;const{register:o,handleSubmit:g,reset:_,formState:{errors:i}}=k({defaultValues:{...e,timestone_bank_request_money:(f=e==null?void 0:e.timestone_bank_request_money)==null?void 0:f.join(`\r
`),credit_limit_charge:(b=e==null?void 0:e.credit_limit_charge)==null?void 0:b.join(`\r
`)},resolver:v(C)}),y=async c=>{const p=Object.assign(c,{timestone_bank_request_money:c.timestone_bank_request_money.split(/\r?\n/),credit_limit_charge:c.credit_limit_charge.split(/\r?\n/)});(await h(p)).status&&_()};return s.jsxDEV("form",{onSubmit:g(y),className:"grid grid-cols-2 gap-8",autoComplete:"off",children:[s.jsxDEV(a,{children:[s.jsxDEV(u,{children:s.jsxDEV(d,{children:"POS Info"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:66,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:65,columnNumber:9},this),s.jsxDEV(t,{children:s.jsxDEV("div",{className:"grid grid-cols-[200px_1fr] items-center gap-4",children:[s.jsxDEV(l,{className:"text-muted-foreground",children:"TID"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:70,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(n,{placeholder:"TID",...o("tid")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:72,columnNumber:15},this),s.jsxDEV(m,{error:i.tid},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:73,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:71,columnNumber:13},this),s.jsxDEV(l,{className:"text-muted-foreground",children:"POS name"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:76,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(n,{placeholder:"POS Name",...o("pos_name")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:78,columnNumber:15},this),s.jsxDEV(m,{error:i.pos_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:79,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:77,columnNumber:13},this),s.jsxDEV(l,{className:"text-muted-foreground",children:"POS pass"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:82,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(n,{placeholder:"POS Pass",...o("pos_pass")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:84,columnNumber:15},this),s.jsxDEV(m,{error:i.pos_pass},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:85,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:83,columnNumber:13},this),s.jsxDEV(l,{className:"text-muted-foreground",children:"Day received POS"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:88,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(n,{placeholder:"Day received POS",...o("day_received_pos")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:90,columnNumber:15},this),s.jsxDEV(m,{error:i.day_received_pos},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:94,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:89,columnNumber:13},this),s.jsxDEV(l,{className:"text-muted-foreground",children:"Time waiting for next order"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:97,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(n,{placeholder:"Time waiting for next order",...o("time_waiting_next_order")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:101,columnNumber:15},this),s.jsxDEV(m,{error:i.time_waiting_next_order},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:105,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:100,columnNumber:13},this),s.jsxDEV(l,{className:"text-muted-foreground",children:"Confirm message"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:108,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(n,{placeholder:"POS Name",...o("confirm_message")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:110,columnNumber:15},this),s.jsxDEV(m,{error:i.confirm_message},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:111,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:109,columnNumber:13},this),s.jsxDEV(l,{className:"text-muted-foreground",children:"Note"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:114,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(n,{placeholder:"Note",...o("note")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:116,columnNumber:15},this),s.jsxDEV(m,{error:i.note},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:117,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:115,columnNumber:13},this),s.jsxDEV(l,{className:"text-muted-foreground",children:"Active"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:120,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(T,{...o("is_active"),defaultValue:typeof(e==null?void 0:e.is_active)>"u"?e==null?void 0:e.is_active:String(e==null?void 0:e.is_active),onValueChange:c=>o("is_active").onChange({target:{name:"is_active",value:c}}),children:[s.jsxDEV(j,{className:"h-8 w-40",children:s.jsxDEV(E,{placeholder:"Set status"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:136,columnNumber:19},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:135,columnNumber:17},this),s.jsxDEV(D,{children:[{label:"No",value:"0"},{label:"Yes",value:"1"}].map(({label:c,value:p})=>s.jsxDEV(U,{value:p,children:c},p,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:143,columnNumber:21},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:138,columnNumber:17},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:122,columnNumber:15},this),s.jsxDEV(m,{error:i.is_active},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:149,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:121,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:69,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:68,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:64,columnNumber:7},this),s.jsxDEV(a,{children:[s.jsxDEV(u,{children:s.jsxDEV(d,{children:"Bank Info"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:157,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:156,columnNumber:9},this),s.jsxDEV(t,{children:s.jsxDEV("div",{className:"grid grid-cols-[220px_1fr] items-center gap-4",children:[s.jsxDEV(l,{className:"text-muted-foreground",children:"VN Bank"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:161,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(V,{...o("id_vietnamese_banks"),defaultValue:typeof(e==null?void 0:e.id_vietnamese_banks)>"u"?e==null?void 0:e.id_vietnamese_banks:String(e==null?void 0:e.id_vietnamese_banks)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:163,columnNumber:15},this),s.jsxDEV(m,{error:i.id_vietnamese_banks},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:171,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:162,columnNumber:13},this),s.jsxDEV(l,{className:"text-muted-foreground",children:"User login bank"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:174,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(n,{placeholder:"User login bank",...o("user_login_bank")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:176,columnNumber:15},this),s.jsxDEV(m,{error:i.user_login_bank},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:180,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:175,columnNumber:13},this),s.jsxDEV(l,{className:"text-muted-foreground",children:"Pass login bank"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:183,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(n,{placeholder:"Pass login bank",...o("pass_login_bank")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:185,columnNumber:15},this),s.jsxDEV(m,{error:i.user_login_bank},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:189,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:184,columnNumber:13},this),s.jsxDEV(l,{className:"text-muted-foreground",children:"Account bank name"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:192,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(n,{placeholder:"Account bank name",...o("account_bank_name")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:194,columnNumber:15},this),s.jsxDEV(m,{error:i.account_bank_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:198,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:193,columnNumber:13},this),s.jsxDEV(l,{className:"text-muted-foreground",children:"Account number"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:201,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(n,{placeholder:"Account number",...o("account_number")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:203,columnNumber:15},this),s.jsxDEV(m,{error:i.account_number},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:207,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:202,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(l,{className:"text-muted-foreground",children:"Timestone bank request money"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:211,columnNumber:15},this),s.jsxDEV("p",{className:"text-xs flex gap-1 items-center",children:[s.jsxDEV(x,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:215,columnNumber:17},this)," Enter separated by line breaks"]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:214,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:210,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(N,{placeholder:"Enter separated by line breaks",rows:4,...o("timestone_bank_request_money")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:219,columnNumber:15},this),s.jsxDEV(m,{error:i.timestone_bank_request_money},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:225,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:218,columnNumber:13},this),s.jsxDEV(l,{className:"text-muted-foreground",children:"Bank working time"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:230,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(n,{placeholder:"Bank working time",...o("bank_working_time")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:232,columnNumber:15},this),s.jsxDEV(m,{error:i.bank_working_time},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:236,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:231,columnNumber:13},this),s.jsxDEV(l,{className:"text-muted-foreground",children:"Percent Bank Charge"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:239,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(n,{placeholder:"Percent Bank Charge",...o("percent_bank_charge")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:241,columnNumber:15},this),s.jsxDEV(m,{error:i.percent_bank_charge},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:245,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:240,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:160,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:159,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:155,columnNumber:7},this),s.jsxDEV(a,{children:[s.jsxDEV(u,{children:s.jsxDEV(d,{children:"Card Info"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:253,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:252,columnNumber:9},this),s.jsxDEV(t,{children:s.jsxDEV("div",{className:"grid grid-cols-[280px_1fr] items-center gap-4",children:[s.jsxDEV(l,{className:"text-muted-foreground",children:"Type card allowed"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:257,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(n,{placeholder:"Type card allowed",...o("type_card_allowed")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:259,columnNumber:15},this),s.jsxDEV(m,{error:i.type_card_allowed},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:263,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:258,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(l,{className:"text-muted-foreground",children:"Credit limit charge"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:267,columnNumber:15},this),s.jsxDEV("p",{className:"text-xs flex gap-1 items-center",children:[s.jsxDEV(x,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:271,columnNumber:17},this)," Enter separated by line breaks"]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:270,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:266,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(N,{placeholder:"Enter separated by line breaks",...o("credit_limit_charge")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:276,columnNumber:15},this),s.jsxDEV(m,{error:i.credit_limit_charge},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:280,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:275,columnNumber:13},this),s.jsxDEV(l,{className:"text-muted-foreground",children:"Credit limit charge per day"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:283,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(n,{placeholder:"Credit limit charge per day",...o("credit_limit_charge_per_day")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:287,columnNumber:15},this),s.jsxDEV(m,{error:i.credit_limit_charge_per_day},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:291,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:286,columnNumber:13},this),s.jsxDEV(l,{className:"text-muted-foreground",children:"Credit limit charge per month"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:294,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(n,{placeholder:"Credit limit charge per month",...o("credit_limit_charge_per_month")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:298,columnNumber:15},this),s.jsxDEV(m,{error:i.credit_limit_charge_per_month},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:302,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:297,columnNumber:13},this),s.jsxDEV(l,{className:"text-muted-foreground",children:"Credit limit customer card charge per day"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:307,columnNumber:13},this),s.jsxDEV("div",{children:[s.jsxDEV(n,{placeholder:"Credit limit customer card charge per day",...o("credit_limit_customer_card_charge_per_day")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:311,columnNumber:15},this),s.jsxDEV(m,{error:i.credit_limit_customer_card_charge_per_day},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:315,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:310,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:256,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:255,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:251,columnNumber:7},this),s.jsxDEV(P,{className:"fixed bottom-5 right-20 my-3",children:"Submit"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:323,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/pos/forms/pos/pos.form.tsx",lineNumber:59,columnNumber:5},this)}export{H as F};
