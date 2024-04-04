import{b as y,j as e}from"./index-BBOSr7wM.js";import{H as D}from"./Helmet-B_Qq3Yxz.js";import{u as U}from"./use-get-customer-cc-by-id.query-Dz5bnBGh.js";import{L as r}from"./label-Dlj4BwLN.js";import{C as i}from"./cell-text-ChSs_gCg.js";import{C as f,a as x,b as h,c as g}from"./card-Bm0SBakq.js";import{g as v}from"./get-yes-no.util-C-N_EnQX.js";import{u as P}from"./use-get-vn-banks.query-CLTzR7VU.js";import{g as j}from"./get-customer-image-url.util-dqnr5XYm.js";import{G as k}from"./grid-images-CBPUlSAw.js";import{F as E}from"./customer-info.feature-CXBQ2XZF.js";import"./useQuery-Cl3Ng3qM.js";import"./button-DqtCoJ9q.js";import"./index-D1Mzqc39.js";import"./react-icons.esm-EA0c0Jq7.js";import"./dialog-CznRd4sf.js";import"./index-DChdG50K.js";import"./Combination-hPdF80R-.js";import"./dialog-button.component-C7zQarz6.js";import"./use-get-customer-by-id.query-Y-yfakWS.js";function T(){var l,m,t,a,o,u,d,N,b,p;const n=y(),{customerCc:s}=U(Number(n.id)),{vnBanksByKey:c}=P();return e.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[e.jsxDEV("div",{className:"flex items-center flex-col lg:flex-row justify-between space-y-2",children:e.jsxDEV("h2",{className:"text-2xl lg:text-3xl font-bold tracking-tight",children:["Customer Credit Card: ",n.id]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:20,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:19,columnNumber:7},this),e.jsxDEV("div",{className:"grid lg:grid-cols-2 gap-8",children:[e.jsxDEV(f,{children:[e.jsxDEV(x,{children:e.jsxDEV(h,{children:"Credit Card"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:27,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:26,columnNumber:11},this),e.jsxDEV(g,{children:e.jsxDEV("div",{className:"grid md:grid-cols-[200px_1fr] items-center gap-4",children:[e.jsxDEV(r,{className:"text-muted-foreground",children:"ID"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:31,columnNumber:15},this),e.jsxDEV(i,{children:s==null?void 0:s.id},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:32,columnNumber:15},this),e.jsxDEV(r,{className:"text-muted-foreground",children:"Card number"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:34,columnNumber:15},this),e.jsxDEV(i,{children:s==null?void 0:s.creditcard_number},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:35,columnNumber:15},this),e.jsxDEV(r,{className:"text-muted-foreground",children:"Card name"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:37,columnNumber:15},this),e.jsxDEV(i,{children:s==null?void 0:s.name_on_creditcard},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:38,columnNumber:15},this),e.jsxDEV(r,{className:"text-muted-foreground",children:"Date expired"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:40,columnNumber:15},this),e.jsxDEV(i,{children:s==null?void 0:s.date_exp_creditcard},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:41,columnNumber:15},this),e.jsxDEV(r,{className:"text-muted-foreground",children:"Card is stored"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:43,columnNumber:15},this),e.jsxDEV(i,{children:v(s==null?void 0:s.card_is_stored)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:44,columnNumber:15},this),e.jsxDEV(r,{className:"text-muted-foreground",children:"VN bank"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:46,columnNumber:15},this),e.jsxDEV(i,{children:(l=c==null?void 0:c[String(s==null?void 0:s.id_vietnamese_bank)])==null?void 0:l.short_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:47,columnNumber:15},this),e.jsxDEV(r,{className:"text-muted-foreground",children:"Last update"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:54,columnNumber:15},this),e.jsxDEV(i,{children:s==null?void 0:s.last_update},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:55,columnNumber:15},this),e.jsxDEV(r,{className:"text-muted-foreground",children:"Created time"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:57,columnNumber:15},this),e.jsxDEV(i,{children:s==null?void 0:s.time_insert},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:58,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:30,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:29,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:25,columnNumber:9},this),e.jsxDEV(f,{children:[e.jsxDEV(x,{children:e.jsxDEV(h,{children:"Customer"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:64,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:63,columnNumber:11},this),e.jsxDEV(g,{children:[e.jsxDEV("div",{className:"grid md:grid-cols-[200px_1fr] items-center gap-4 mb-4",children:[e.jsxDEV(r,{className:"text-muted-foreground",children:"Customer ID"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:68,columnNumber:15},this),e.jsxDEV("div",{children:((m=s==null?void 0:s.customer_info)==null?void 0:m.id)&&e.jsxDEV(E,{id:(t=s==null?void 0:s.customer_info)==null?void 0:t.id},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:71,columnNumber:19},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:69,columnNumber:15},this),e.jsxDEV(r,{className:"text-muted-foreground",children:"Full name"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:75,columnNumber:15},this),e.jsxDEV(i,{children:(a=s==null?void 0:s.customer_info)==null?void 0:a.full_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:76,columnNumber:15},this),e.jsxDEV(r,{className:"text-muted-foreground",children:"Active"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:78,columnNumber:15},this),e.jsxDEV(i,{children:v((o=s==null?void 0:s.customer_info)==null?void 0:o.is_active)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:79,columnNumber:15},this),e.jsxDEV(r,{className:"text-muted-foreground",children:"Phone number"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:83,columnNumber:15},this),e.jsxDEV(i,{children:(u=s==null?void 0:s.customer_info)==null?void 0:u.phonenumber},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:84,columnNumber:15},this),e.jsxDEV(r,{className:"text-muted-foreground",children:"UUID"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:86,columnNumber:15},this),e.jsxDEV(i,{children:(d=s==null?void 0:s.customer_info)==null?void 0:d.uuid_id},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:87,columnNumber:15},this),e.jsxDEV(r,{className:"text-muted-foreground",children:"Last update"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:89,columnNumber:15},this),e.jsxDEV(i,{children:(N=s==null?void 0:s.customer_info)==null?void 0:N.last_update},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:90,columnNumber:15},this),e.jsxDEV(r,{className:"text-muted-foreground",children:"Created time"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:92,columnNumber:15},this),e.jsxDEV(i,{children:(b=s==null?void 0:s.customer_info)==null?void 0:b.time_insert},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:93,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:67,columnNumber:13},this),e.jsxDEV(r,{className:"text-muted-foreground",children:"Customer Images"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:95,columnNumber:13},this),e.jsxDEV(k,{images:(p=s==null?void 0:s.customer_info)==null?void 0:p.images_identify_card.map(j)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:96,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:66,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:62,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:24,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-ccs-detail.container.tsx",lineNumber:18,columnNumber:5},this)}function W(){return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(D,{children:e.jsxDEV("title",{children:"POS System - Customer Credit Card"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/customer-ccs-detail.page.tsx",lineNumber:8,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/customer-ccs-detail.page.tsx",lineNumber:7,columnNumber:7},this),e.jsxDEV(T,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/customer-ccs-detail.page.tsx",lineNumber:10,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/customer-ccs-detail.page.tsx",lineNumber:6,columnNumber:5},this)}export{W as default};
