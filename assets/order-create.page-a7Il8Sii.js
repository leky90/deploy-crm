import{a as q,Q as F,r as c,j as e,c as ue,R as A}from"./index-xDYarw1b.js";import{H as ne}from"./Helmet-DpZVI66e.js";import{z as n,u as Q,t as z,F as N}from"./index-DItwitxo.js";import{a as w,B as R}from"./api-client-CwwcObB-.js";import{C as ae,c as de}from"./card-CwUVWthK.js";import{I as a}from"./input-DJhrRHsh.js";import{L as i}from"./label-rPC5FL3x.js";import{T as pe}from"./textarea-DuzNmtWy.js";import{u as fe,a as be,F as he,b as Ne,c as ye,d as xe,e as ge,f as _e}from"./use-cancel-order.mutation-CFnTj1bL.js";import{u as ve}from"./use-auth.cache-C7jKiszy.js";import{u as M}from"./useMutation-4ODOkRpf.js";import{u as ke,c as Ee}from"./use-get-customers.query-TK1GQr7L.js";import{F as Te}from"./vn-bank.field-CW3T0VaV.js";import{$ as Pe,a as Y,_ as I,d as B}from"./index-D5vWOHvA.js";import{a as je,c as Ue,g as H,d as De,t as Ve}from"./index-ya9CvK1x.js";import{$ as Ce}from"./index-C76uRi-j.js";import{e as $e}from"./react-icons.esm-Cl8tMfv6.js";import{M as L,A as K}from"./upload.constant-D3d5R5uO.js";import"./select-DShSM5nG.js";import"./useQuery-CQ1CcVzz.js";import"./index-BuIRl4x7.js";import"./use-get-user-options.query-FLFnKF1j.js";import"./index-VWaDGczM.js";import"./use-get-vn-banks.query-Ch6AK3gF.js";function Se(r){return w({method:"post",url:"/customer_history/order_step1",data:r})}function Oe(){const{mutateAsync:r}=M({mutationFn:Se,onSuccess:s=>{s.status&&q.invalidateQueries({queryKey:F.CUSTOMER_HISTORY})}});return{mutationCreateOrderStep1:r}}const Re=n.object({card_type:n.string({required_error:"Required."}),user_option:n.coerce.number({required_error:"Required."}).gt(0,"Required."),rate_option:n.coerce.number({required_error:"Required."}).gt(0,"Required."),id_customer_info:n.coerce.number({required_error:"Required."}).gt(0,"Required."),id_pos_info:n.coerce.number({required_error:"Required."}).gt(0,"Required."),id_customer_creditcard:n.coerce.number({required_error:"Required."}).gt(0,"Required."),id_users:n.coerce.number({required_error:"Required."}).gt(0,"Required."),id_vietnamese_bank:n.coerce.number({required_error:"Required."}).gt(0,"Required."),days_coming_due:n.coerce.number({required_error:"Required."}),percent_to_charge:n.coerce.number({required_error:"Required."}).gt(0,"Required."),money_total:n.coerce.number({required_error:"Required."}).gt(0,"Required."),money_applied_percent:n.coerce.number({required_error:"Required."}).gt(0,"Required."),note:n.string()});function qe({nextStep:r}){const{auth:s}=ve(),[o,f]=c.useState(),[l,d]=c.useState(),[u,g]=c.useState(),[y,E]=c.useState(),[U,p]=c.useState(),[T,k]=c.useState("1"),{register:t,handleSubmit:C,getValues:_,reset:D,formState:{errors:b}}=Q({defaultValues:{days_coming_due:30,id_customer_creditcard:0,id_customer_info:0,id_pos_info:0,id_vietnamese_bank:0,money_applied_percent:"",money_total:"",note:"",percent_to_charge:0,rate_option:1,user_option:0,id_users:s==null?void 0:s.id},resolver:z(Re)}),{mutationCalculateManual:h}=fe(),{mutationCalculateByLevelRate:P}=be(),{mutationCreateOrderStep1:J}=Oe(),ee=async m=>{const v=await J(m);v.status&&r&&r(v)},{customers:S,refetchCustomers:re}=ke(o);c.useEffect(()=>{re()},[o]);const se=m=>{f(m.target.value)},oe=async m=>{f(""),D(),d(void 0),E(void 0),g(void 0),await t("id_customer_info").onChange({target:{name:"id_customer_info",value:m.id}}),d(m)};async function O(m){const v=_("money_total"),$=_("rate_option"),V=_("percent_to_charge");let x={status:!1,fee:0,rate:V,result:0};m&&m==="2"||!m&&$===2?x=await P({money_total:v}):V>0&&(x=await h({money_total:v,percent_to_charge:String(V)})),x!=null&&x.status&&(p(x==null?void 0:x.fee),t("percent_to_charge").onChange({target:{name:"percent_to_charge",value:x==null?void 0:x.rate}}),t("money_applied_percent").onChange({target:{name:"money_applied_percent",value:x.result}}))}const te=m=>{var $;const v=($=l==null?void 0:l.list_credit_card)==null?void 0:$.find(V=>V.id===Number(m));g(v),t("id_vietnamese_bank").onChange({target:{name:"id_vietnamese_bank",value:v==null?void 0:v.id_vietnamese_bank}})},ie=m=>{E(m)},me=m=>{k(m),O(m)},ce=m=>{t("money_total").onChange(m),O()},le=m=>{t("percent_to_charge").onChange(m),O()};return e.jsxDEV("form",{onSubmit:C(ee),className:"grid grid-cols-2 gap-4",autoComplete:"off",children:[e.jsxDEV("div",{className:"col-span-2 relative",children:[e.jsxDEV(i,{htmlFor:"search_customer",children:"Search Customer"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:202,columnNumber:9},this),e.jsxDEV(a,{placeholder:"Name or Phone",value:o,onChange:se},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:203,columnNumber:9},this),o&&e.jsxDEV(ae,{className:"absolute top-full mt-2 left-0 w-full",children:e.jsxDEV(de,{className:"max-h-80 p-2",children:S==null?void 0:S.map(m=>e.jsxDEV("div",{className:"flex items-center gap-2 hover:bg-muted p-1 px-2 cursor-pointer",onClick:()=>oe(m),children:[e.jsxDEV("strong",{children:m.full_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:217,columnNumber:19},this)," (",m.phonenumber,")"]},m.id,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:212,columnNumber:17},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:210,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:209,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:201,columnNumber:7},this),e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("h2",{className:"text-lg font-bold",children:"Customer Info"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:226,columnNumber:9},this),e.jsxDEV("div",{className:"grid grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(i,{htmlFor:"customer",children:"Customer full name"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:229,columnNumber:11},this),e.jsxDEV(a,{readOnly:!0,defaultValue:l==null?void 0:l.full_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:230,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:228,columnNumber:9},this),e.jsxDEV("div",{className:"grid grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(i,{htmlFor:"id_pos_info",children:"POS"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:234,columnNumber:11},this),u?e.jsxDEV(he,{...t("id_pos_info"),idCustomerCreditcard:u==null?void 0:u.id,onSelectPos:ie},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:236,columnNumber:13},this):e.jsxDEV(a,{readOnly:!0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:242,columnNumber:13},this),e.jsxDEV(N,{error:b.id_pos_info},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:244,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:233,columnNumber:9},this),e.jsxDEV("div",{className:"grid grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(i,{htmlFor:"money_total",children:"Total Money"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:248,columnNumber:11},this),e.jsxDEV(a,{...t("money_total"),onChange:ce},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:249,columnNumber:11},this),e.jsxDEV(N,{error:b.money_total},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:250,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:247,columnNumber:9},this),e.jsxDEV("div",{className:"grid grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(i,{htmlFor:"user_option",children:"User Option"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:254,columnNumber:11},this),l?e.jsxDEV(Ne,{...t("user_option")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:256,columnNumber:13},this):e.jsxDEV(a,{readOnly:!0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:258,columnNumber:13},this),e.jsxDEV(N,{error:b.user_option},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:260,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:253,columnNumber:9},this),e.jsxDEV("div",{className:"grid grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(i,{htmlFor:"rate_option",children:"Rate Option"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:264,columnNumber:11},this),l?e.jsxDEV(ye,{...t("rate_option"),defaultValue:"1",onSelectRate:me},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:266,columnNumber:13},this):e.jsxDEV(a,{readOnly:!0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:272,columnNumber:13},this),e.jsxDEV(N,{error:b.rate_option},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:274,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:263,columnNumber:9},this),e.jsxDEV("div",{className:"grid grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(i,{htmlFor:"percent_to_charge",children:"Percent to Charge"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:278,columnNumber:11},this),e.jsxDEV(a,{...t("percent_to_charge"),onChange:le,readOnly:T==="2"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:279,columnNumber:11},this),e.jsxDEV(N,{error:b.percent_to_charge},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:284,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:277,columnNumber:9},this),e.jsxDEV("div",{className:"grid grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(i,{htmlFor:"fee",children:"Fee"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:288,columnNumber:11},this),e.jsxDEV(a,{readOnly:!0,value:U},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:289,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:287,columnNumber:9},this),e.jsxDEV("div",{className:"grid grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(i,{htmlFor:"money_applied_percent",children:"Total Money Applied Percent"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:293,columnNumber:11},this),e.jsxDEV(a,{...t("money_applied_percent"),value:_("money_applied_percent"),readOnly:!0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:296,columnNumber:11},this),e.jsxDEV(N,{error:b.money_applied_percent},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:301,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:292,columnNumber:9},this),e.jsxDEV("div",{className:"grid grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(i,{htmlFor:"days_coming_due",children:"Days Coming Due"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:305,columnNumber:11},this),e.jsxDEV(a,{...t("days_coming_due")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:306,columnNumber:11},this),e.jsxDEV(N,{error:b.days_coming_due},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:307,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:304,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:225,columnNumber:7},this),e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("h2",{className:"text-lg font-bold",children:"Card Info"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:312,columnNumber:9},this),e.jsxDEV("div",{className:"grid grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(i,{htmlFor:"id_customer_creditcard",children:"Credit Card"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:315,columnNumber:11},this),l?e.jsxDEV(xe,{...t("id_customer_creditcard"),listCustomerCreditcards:l==null?void 0:l.list_credit_card,onSelectCard:te},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:317,columnNumber:13},this):e.jsxDEV(a,{readOnly:!0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:323,columnNumber:13},this),e.jsxDEV(N,{error:b.id_customer_creditcard},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:325,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:314,columnNumber:9},this),e.jsxDEV("div",{className:"grid grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(i,{htmlFor:"id_vietnamese_bank",children:"Bank"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:329,columnNumber:11},this),u?e.jsxDEV(Te,{...t("id_vietnamese_bank"),readOnly:!0,value:u!=null&&u.id_vietnamese_bank?String(u.id_vietnamese_bank):void 0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:331,columnNumber:13},this):e.jsxDEV(a,{readOnly:!0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:341,columnNumber:13},this),e.jsxDEV(N,{error:b.id_vietnamese_bank},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:343,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:328,columnNumber:9},this),e.jsxDEV("div",{className:"grid grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(i,{htmlFor:"customer",children:"Max Usage Money"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:347,columnNumber:11},this),e.jsxDEV(a,{readOnly:!0,defaultValue:y==null?void 0:y.max_per_charge},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:348,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:346,columnNumber:9},this),e.jsxDEV("div",{className:"grid grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(i,{htmlFor:"card_type",children:"Card Type"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:352,columnNumber:11},this),e.jsxDEV(ge,{...t("card_type")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:353,columnNumber:11},this),e.jsxDEV(N,{error:b.card_type},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:354,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:351,columnNumber:9},this),e.jsxDEV("div",{className:"grid grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(i,{htmlFor:"note",children:"Note"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:358,columnNumber:11},this),e.jsxDEV(pe,{...t("note")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:359,columnNumber:11},this),e.jsxDEV(N,{error:b.note},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:360,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:357,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:311,columnNumber:7},this),e.jsxDEV("div",{className:"col-span-2 mt-4",children:e.jsxDEV(R,{className:"w-full",children:"Submit"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:365,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:364,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:196,columnNumber:5},this)}function Fe(r){const s=Ee(r);return w({method:"post",url:"/customer_history/order_step2",data:s,headers:{"Content-Type":"multipart/form-data"}})}function we(){const{mutateAsync:r}=M({mutationFn:Fe,onSuccess:s=>{s.status&&q.invalidateQueries({queryKey:F.CUSTOMER_HISTORY})}});return{mutationCreateOrderStep2:r}}const X="Checkbox",[Me,vr]=je(X),[Ie,Ae]=Me(X),Be=c.forwardRef((r,s)=>{const{__scopeCheckbox:o,name:f,checked:l,defaultChecked:d,required:u,disabled:g,value:y="on",onCheckedChange:E,...U}=r,[p,T]=c.useState(null),k=Pe(s,h=>T(h)),t=c.useRef(!1),C=p?!!p.closest("form"):!0,[_=!1,D]=Ue({prop:l,defaultProp:d,onChange:E}),b=c.useRef(_);return c.useEffect(()=>{const h=p==null?void 0:p.form;if(h){const P=()=>D(b.current);return h.addEventListener("reset",P),()=>h.removeEventListener("reset",P)}},[p,D]),c.createElement(Ie,{scope:o,state:_,disabled:g},c.createElement(Y.button,I({type:"button",role:"checkbox","aria-checked":j(_)?"mixed":_,"aria-required":u,"data-state":G(_),"data-disabled":g?"":void 0,disabled:g,value:y},U,{ref:k,onKeyDown:H(r.onKeyDown,h=>{h.key==="Enter"&&h.preventDefault()}),onClick:H(r.onClick,h=>{D(P=>j(P)?!0:!P),C&&(t.current=h.isPropagationStopped(),t.current||h.stopPropagation())})})),C&&c.createElement(Ke,{control:p,bubbles:!t.current,name:f,value:y,checked:_,required:u,disabled:g,style:{transform:"translateX(-100%)"}}))}),He="CheckboxIndicator",Le=c.forwardRef((r,s)=>{const{__scopeCheckbox:o,forceMount:f,...l}=r,d=Ae(He,o);return c.createElement(Ce,{present:f||j(d.state)||d.state===!0},c.createElement(Y.span,I({"data-state":G(d.state),"data-disabled":d.disabled?"":void 0},l,{ref:s,style:{pointerEvents:"none",...r.style}})))}),Ke=r=>{const{control:s,checked:o,bubbles:f=!0,...l}=r,d=c.useRef(null),u=De(o),g=Ve(s);return c.useEffect(()=>{const y=d.current,E=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(E,"checked").set;if(u!==o&&p){const T=new Event("click",{bubbles:f});y.indeterminate=j(o),p.call(y,j(o)?!1:o),y.dispatchEvent(T)}},[u,o,f]),c.createElement("input",I({type:"checkbox","aria-hidden":!0,defaultChecked:j(o)?!1:o},l,{tabIndex:-1,ref:d,style:{...r.style,...g,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function j(r){return r==="indeterminate"}function G(r){return j(r)?"indeterminate":r?"checked":"unchecked"}const W=Be,Qe=Le,Z=c.forwardRef(({className:r,...s},o)=>e.jsxDEV(W,{ref:o,className:B("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",r),...s,children:e.jsxDEV(Qe,{className:B("flex items-center justify-center text-current"),children:e.jsxDEV($e,{className:"h-4 w-4"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/checkbox.tsx",lineNumber:22,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/checkbox.tsx",lineNumber:19,columnNumber:5},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/checkbox.tsx",lineNumber:11,columnNumber:3},void 0));Z.displayName=W.displayName;function ze(r){return w({method:"post",url:"/customer_history/order_step2_1",data:r})}function Ye(){const{mutateAsync:r}=M({mutationFn:ze,onSuccess:s=>{s.status&&q.invalidateQueries({queryKey:F.CUSTOMER_HISTORY})}});return{mutationCreateOrderStep2_1:r}}const Xe=n.object({uuid_id:n.string({required_error:"Required."}),images_creditcard_due_withdrawn:n.any().refine(r=>{var s;return!(r!=null&&r.length)||!((s=Array.from(r))!=null&&s.some(o=>o.size>L))},"Max file size is 5MB.").refine(r=>{var s;return!(r!=null&&r.length)||!((s=Array.from(r))!=null&&s.some(o=>!K.includes(o.type)))},".jpg, .jpeg, .png and .webp files are accepted.").optional(),images_transfer_money_to_customer:n.any().refine(r=>{var s;return!(r!=null&&r.length)||!((s=Array.from(r))!=null&&s.some(o=>o.size>L))},"Max file size is 5MB.").refine(r=>{var s;return!(r!=null&&r.length)||!((s=Array.from(r))!=null&&s.some(o=>!K.includes(o.type)))},".jpg, .jpeg, .png and .webp files are accepted.").optional()});function Ge({resultStep1:r}){const s=ue(),[o,f]=c.useState(!1),{register:l,handleSubmit:d,formState:{errors:u}}=Q({defaultValues:{uuid_id:r.uuid_id},resolver:z(Xe)}),{mutationCreateOrderStep2:g}=we(),{mutationCreateOrderStep2_1:y}=Ye(),{mutationCancelOrder:E}=_e(),U=async k=>{let t=null;o?t=await y(k):t=await g(k),t!=null&&t.status&&s(A.CUSTOMER_HISTORIES)},p=async()=>{(await E({uuid_id:r.uuid_id})).status&&s(A.CUSTOMER_HISTORIES)},T=k=>{f(k)};return console.log("errors",u),e.jsxDEV("form",{onSubmit:d(U),className:"grid grid-cols-2 gap-4",autoComplete:"off",children:[e.jsxDEV("div",{className:"grid grid-cols-[200px_1fr] gap-4 col-span-2",children:[e.jsxDEV(i,{children:"Card Type"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:73,columnNumber:9},this),e.jsxDEV("p",{children:r.card_type},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:74,columnNumber:9},this),e.jsxDEV(i,{children:"Card Number"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:76,columnNumber:9},this),e.jsxDEV("p",{children:r.customer_creditcard},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:77,columnNumber:9},this),e.jsxDEV(i,{children:"Customer Name"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:79,columnNumber:9},this),e.jsxDEV("p",{children:r.customer_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:80,columnNumber:9},this),e.jsxDEV(i,{children:"Fee"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:82,columnNumber:9},this),e.jsxDEV("p",{children:r.fee},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:83,columnNumber:9},this),e.jsxDEV(i,{children:"Total Money (- Fee)"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:85,columnNumber:9},this),e.jsxDEV("p",{children:r.money_applied_percent},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:86,columnNumber:9},this),e.jsxDEV(i,{children:"Total Money"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:88,columnNumber:9},this),e.jsxDEV("p",{children:r.money_total},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:89,columnNumber:9},this),e.jsxDEV(i,{children:"Note"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:91,columnNumber:9},this),e.jsxDEV("p",{children:r.note},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:92,columnNumber:9},this),e.jsxDEV(i,{children:"Percent to Charge"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:94,columnNumber:9},this),e.jsxDEV("p",{children:r.percent_to_charge},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:95,columnNumber:9},this),e.jsxDEV(i,{children:"Rate Option"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:97,columnNumber:9},this),e.jsxDEV("p",{children:r.rate_option},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:98,columnNumber:9},this),e.jsxDEV(i,{children:"User Option"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:100,columnNumber:9},this),e.jsxDEV("p",{children:r.user_option},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:101,columnNumber:9},this),e.jsxDEV("div",{className:"flex items-center space-x-2",children:[e.jsxDEV(Z,{checked:o,onCheckedChange:T,id:"upload-later"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:104,columnNumber:11},this),e.jsxDEV("label",{htmlFor:"upload-later",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Upload later"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:109,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:103,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:72,columnNumber:7},this),!o&&e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(i,{htmlFor:"images_creditcard_due_withdrawn",children:"Credit card Due/Withdrawn images"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:121,columnNumber:13},this),e.jsxDEV(a,{type:"file",multiple:!0,accept:".gif, .jpg, .jpeg, .png, .pdf",...l("images_creditcard_due_withdrawn")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:124,columnNumber:13},this),e.jsxDEV(N,{error:u.images_creditcard_due_withdrawn},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:130,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:120,columnNumber:11},this),e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV(i,{htmlFor:"images_transfer_money_to_customer",children:"Transfer money to customer images"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:136,columnNumber:13},this),e.jsxDEV(a,{type:"file",multiple:!0,accept:".gif, .jpg, .jpeg, .png, .pdf",...l("images_transfer_money_to_customer")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:139,columnNumber:13},this),e.jsxDEV(N,{error:u.images_transfer_money_to_customer},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:145,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:135,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:119,columnNumber:9},this),e.jsxDEV("div",{className:"mt-4 grid grid-cols-2 gap-4 col-span-2",children:[e.jsxDEV(R,{type:"submit",className:"w-full",children:"Submit"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:153,columnNumber:9},this),e.jsxDEV(R,{type:"button",className:"w-full",variant:"destructive",onClick:p,children:"Cancel Order"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:156,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:152,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-2.form.tsx",lineNumber:67,columnNumber:5},this)}function We(){const[r,s]=c.useState();function o(f){s(f)}return e.jsxDEV("div",{className:"space-y-4 px-4",children:[e.jsxDEV("div",{className:"flex items-center justify-between space-y-2",children:e.jsxDEV("h2",{className:"text-3xl font-bold tracking-tight",children:"Create Order"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/order-create.container.tsx",lineNumber:17,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/order-create.container.tsx",lineNumber:16,columnNumber:7},this),!r&&e.jsxDEV(qe,{nextStep:o},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/order-create.container.tsx",lineNumber:19,columnNumber:24},this),r&&e.jsxDEV(Ge,{resultStep1:r},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/order-create.container.tsx",lineNumber:20,columnNumber:23},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/order-create.container.tsx",lineNumber:15,columnNumber:5},this)}function kr(){return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(ne,{children:e.jsxDEV("title",{children:"POS System - Order Create"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/order-create.page.tsx",lineNumber:8,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/order-create.page.tsx",lineNumber:7,columnNumber:7},this),e.jsxDEV(We,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/order-create.page.tsx",lineNumber:10,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/order-create.page.tsx",lineNumber:6,columnNumber:5},this)}export{kr as default};
