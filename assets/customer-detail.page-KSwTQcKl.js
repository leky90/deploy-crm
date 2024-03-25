import{a as f,Q as x,u as g,r as o,j as e}from"./index-CahGm5j_.js";import{H as h}from"./Helmet-MPtnhWTN.js";import{u as y}from"./use-get-customer-by-id.query-kaGrLNUP.js";import{L as i}from"./label-DoOzxWxM.js";import{C as t}from"./cell-text-CSKwiuIS.js";import{C as v,a as D,b as E,c as C}from"./card-CFmjRHbx.js";import{g as U}from"./get-yes-no.util-C-N_EnQX.js";import{u as P}from"./use-get-vn-banks.query-CtIxWtlo.js";import{D as T}from"./data-table-1VeMLfGn.js";import{c as V,g as k}from"./customer-cc.column-AKzzQBju.js";import{g as j}from"./get-customer-image-url.util-dqnr5XYm.js";import{G as _}from"./grid-images-DQ82LxAF.js";import{u as I}from"./useMutation-Cc8ioY74.js";import{a as S}from"./api-client-xdfXcPMj.js";import{u as A}from"./use-auth.cache-C3R7XWlF.js";import{B}from"./upload.constant-D3d5R5uO.js";import"./useQuery-stpcfKAy.js";import"./index-Bjcf43BG.js";import"./index-D4jLWnW7.js";import"./index-Bb0nBYka.js";import"./index-CInXBU6o.js";import"./react-icons.esm-CgNybiV9.js";import"./select-DPq_C0dD.js";import"./dropdown-menu-C4SF8l9N.js";import"./dialog-button.component-LaUP1v6C.js";import"./index-CtQVcejk.js";import"./input-CTzyRLBi.js";import"./vn-bank.field-Djc1Mkqe.js";import"./cell-link-D4eblO6N.js";import"./index-VWaDGczM.js";function M(s){return S({method:"delete",url:"/customer_info/delete_image_customer",data:s})}function Q(){const{mutateAsync:s}=I({mutationFn:M,onSuccess:m=>{(m.status||m.success)&&f.invalidateQueries({queryKey:x.CUSTOMER})}});return{mutationDeleteCustomerImage:s}}function G(s){return s==null?void 0:s.replace(`https://pos.crawl.vn${B}`,"")}function H(){var a,l;const s=g(),{isAdmin:m}=A(),[c,u]=o.useState(V),{vnBanksByKey:n}=P(),d=o.useMemo(()=>k({vnBanks:n}),[n]),{customer:r}=y(Number(s.id)),{mutationDeleteCustomerImage:p}=Q(),N=b=>{p({id:s.id,name_image_identify_card:b})};return e.jsxDEV("div",{className:"space-y-6 px-4 py-4",children:[e.jsxDEV("div",{className:"flex items-center justify-between space-y-2",children:e.jsxDEV("h2",{className:"text-3xl font-bold tracking-tight",children:["Customer: ",s.id]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:50,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:49,columnNumber:7},this),e.jsxDEV("div",{className:"grid grid-cols-[480px_1fr] gap-8",children:[e.jsxDEV(v,{children:[e.jsxDEV(D,{children:e.jsxDEV(E,{children:"Customer"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:57,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:56,columnNumber:11},this),e.jsxDEV(C,{children:e.jsxDEV("div",{className:"grid grid-cols-[100px_1fr] items-center gap-4",children:[e.jsxDEV(i,{className:"text-muted-foreground",children:"Customer ID"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:61,columnNumber:15},this),e.jsxDEV(t,{children:r==null?void 0:r.id},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:62,columnNumber:15},this),e.jsxDEV(i,{className:"text-muted-foreground",children:"Full name"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:64,columnNumber:15},this),e.jsxDEV(t,{children:r==null?void 0:r.full_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:65,columnNumber:15},this),e.jsxDEV(i,{className:"text-muted-foreground",children:"Active"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:67,columnNumber:15},this),e.jsxDEV(t,{children:U(r==null?void 0:r.is_active)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:68,columnNumber:15},this),e.jsxDEV(i,{className:"text-muted-foreground",children:"Phone number"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:70,columnNumber:15},this),e.jsxDEV(t,{children:r==null?void 0:r.phonenumber},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:71,columnNumber:15},this),e.jsxDEV(i,{className:"text-muted-foreground",children:"UUID"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:73,columnNumber:15},this),e.jsxDEV(t,{children:r==null?void 0:r.uuid_id},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:74,columnNumber:15},this),e.jsxDEV(i,{className:"text-muted-foreground",children:"Last update"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:76,columnNumber:15},this),e.jsxDEV(t,{children:r==null?void 0:r.last_update},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:77,columnNumber:15},this),e.jsxDEV(i,{className:"text-muted-foreground",children:"Created time"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:79,columnNumber:15},this),e.jsxDEV(t,{children:r==null?void 0:r.time_insert},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:80,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:60,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:59,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:55,columnNumber:9},this),e.jsxDEV("div",{className:"space-y-2",children:e.jsxDEV(T,{data:r==null?void 0:r.list_customer_creditcard,columns:d,columnVisibility:c,rowCount:(a=r==null?void 0:r.list_customer_creditcard)==null?void 0:a.length,onColumnVisibilityChange:u,hidePagination:!0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:85,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:84,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:54,columnNumber:7},this),e.jsxDEV("div",{className:"space-y-2",children:[e.jsxDEV(i,{children:"Customer Images:"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:96,columnNumber:9},this),e.jsxDEV(_,{onDelete:m()?N:void 0,getName:G,images:(l=r==null?void 0:r.images_identify_card)==null?void 0:l.map(j)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:97,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:95,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/customer-detail.container.tsx",lineNumber:48,columnNumber:5},this)}function fe(){return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(h,{children:e.jsxDEV("title",{children:"POS System - Customer Detail"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/customer-detail.page.tsx",lineNumber:8,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/customer-detail.page.tsx",lineNumber:7,columnNumber:7},this),e.jsxDEV(H,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/customer-detail.page.tsx",lineNumber:10,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/customer-detail.page.tsx",lineNumber:6,columnNumber:5},this)}export{fe as default};
