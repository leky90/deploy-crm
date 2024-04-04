import{a as me,Q as ie,r as b,j as e}from"./index-B_ytu5vn.js";import{a as te,H as ce}from"./Helmet-DkqbKfy8.js";import{z as c,u as le,t as ue,F as a}from"./index-BFOHhKiB.js";import{B as ne}from"./button-CGE2OTtm.js";import{C as ae,c as de}from"./card-3GFku0Wo.js";import{I as d}from"./input-CA_BiuFQ.js";import{L as m}from"./label-WR9_UZlh.js";import{T as pe}from"./textarea-8rVszr12.js";import{u as fe,a as be,F as Ne,b as he,c as ye,d as ge,e as xe}from"./use-calculate-manual.mutation-BA4Hz1Hf.js";import{u as _e}from"./use-auth.cache-BJVokTpr.js";import{u as ve}from"./useMutation-DXAaWg5m.js";import{u as ke}from"./use-get-customers.query-BqaP7RzA.js";import{F as Pe}from"./vn-bank.field-CSkirJhR.js";import{u as Ee}from"./use-get-customer-ccs.query-h6vuv9DI.js";import{u as Te}from"./use-get-customer-by-id.query-BFzWkrdl.js";import{u as F}from"./index-CkFd4aZp.js";import{f as C}from"./format-currency-DwwnROlR.js";import{f as Ve}from"./format-percent-Ca7gawAv.js";import{F as Ue}from"./order-step-2.form-r7w98DAC.js";import"./select-B0JqYmI4.js";import"./react-icons.esm-DmndkTF9.js";import"./Combination-CkrLVZbR.js";import"./index-D8nAB3w6.js";import"./index-C7tRwe3w.js";import"./useQuery-Ca2VtRxa.js";import"./index-mj6Aafat.js";import"./use-get-user-options.query-DeLAAZSv.js";import"./use-get-vn-banks.query-DktlonYl.js";import"./popover-CEDqvTVI.js";import"./index-pSuU6xnM.js";import"./dialog-BY_S0piy.js";import"./convert-data-to-form-data.util-CYcIkezp.js";import"./alert-dialog-BFif2bNQ.js";import"./upload.constant-D3d5R5uO.js";function je(p){return te({method:"post",url:"/customer_history/order_step1",data:p})}function De(){const{mutateAsync:p}=ve({mutationFn:je,onSuccess:h=>{h.status&&me.invalidateQueries({queryKey:ie.CUSTOMER_HISTORY})}});return{mutationCreateOrderStep1:p}}const Ce=c.object({card_type:c.string({required_error:"Required."}),user_option:c.coerce.number({required_error:"Required."}).gt(0,"Required."),rate_option:c.coerce.number({required_error:"Required."}).gt(0,"Required."),id_customer_info:c.coerce.number({required_error:"Required."}).gt(0,"Required."),id_pos_info:c.coerce.number({required_error:"Required."}).gt(0,"Required."),id_customer_creditcard:c.coerce.number({required_error:"Required."}).gt(0,"Required."),id_users:c.coerce.number({required_error:"Required."}).gt(0,"Required."),id_vietnamese_bank:c.coerce.number({required_error:"Required."}).gt(0,"Required."),days_coming_due:c.coerce.number({required_error:"Required."}),percent_to_charge:c.coerce.number({required_error:"Required."}).gt(0,"Required."),money_total:c.coerce.number({required_error:"Required."}).gt(0,"Required."),money_applied_percent:c.coerce.number({required_error:"Required."}).gt(0,"Required."),note:c.string()});function Se({nextStep:p}){const{auth:h}=_e(),[u,_]=b.useState("customer"),[g,k]=b.useState(),[O,B]=b.useState(),[l,v]=b.useState(),[o,P]=b.useState(),[E,T]=b.useState(),[V,M]=b.useState(),[w,S]=b.useState(""),[Q,I]=b.useState("1"),{register:s,handleSubmit:H,getValues:f,reset:q,formState:{errors:n}}=le({defaultValues:{days_coming_due:30,id_customer_creditcard:0,id_customer_info:0,id_pos_info:0,id_vietnamese_bank:0,money_applied_percent:"",money_total:"",note:"",percent_to_charge:0,rate_option:2,user_option:2,id_users:h==null?void 0:h.id},resolver:ue(Ce)}),{mutationCalculateManual:A}=fe(),{mutationCalculateByLevelRate:L}=be(),{mutationCreateOrderStep1:G}=De(),K=async r=>{const t=await G(r);t.status&&p&&p(t)},{customers:U,refetchCustomers:Y}=ke(g),{customer:N}=Te(O),{customerCcs:j,refetchCustomerCcs:z}=Ee(g),J=r=>{k(r.target.value)},W=r=>{k(""),q(),v(void 0),T(void 0),P(void 0),s("id_customer_info").onChange({target:{name:"id_customer_info",value:r.id}}),v(r)},X=r=>{k(""),q(),v(void 0),T(void 0),s("id_customer_info").onChange({target:{name:"id_customer_info",value:r.id_customer_info}}),s("id_customer_creditcard").onChange({target:{name:"id_customer_creditcard",value:r.id}}),P(r),B(r.id_customer_info)};async function D(r){const t=f("money_total"),y=f("rate_option"),x=f("percent_to_charge");let i={status:!1,fee:0,rate:x,result:0};r&&r==="2"||!r&&y===2?i=await L({money_total:t}):x>0&&(i=await A({money_total:t,percent_to_charge:String(x)})),i!=null&&i.status&&(M(i==null?void 0:i.fee),S(String(i==null?void 0:i.rate)),s("percent_to_charge").onChange({target:{name:"percent_to_charge",value:String(i==null?void 0:i.rate)}}),s("money_applied_percent").onChange({target:{name:"money_applied_percent",value:String(i.result)}}))}const R=r=>{var y;const t=(y=l==null?void 0:l.list_credit_card)==null?void 0:y.find(x=>x.id===Number(r));P(t),s("id_vietnamese_bank").onChange({target:{name:"id_vietnamese_bank",value:t==null?void 0:t.id_vietnamese_bank}})},Z=r=>{T(r)},$=r=>{I(r),D(r)},ee=r=>{s("money_total").onChange(r),D()},re=r=>{s("percent_to_charge").onChange(r),S(r.target.value)},se=()=>D();F(()=>{u==="customer"?Y():z()},[g,u]),F(()=>{var r;if(N&&u==="credit_card"){N.list_credit_card=N==null?void 0:N.list_customer_creditcard,v(N);const t=(r=l==null?void 0:l.list_credit_card)==null?void 0:r.find(y=>y.id===Number(o==null?void 0:o.id));s("id_vietnamese_bank").onChange({target:{name:"id_vietnamese_bank",value:t==null?void 0:t.id_vietnamese_bank}})}},[N==null?void 0:N.id,o==null?void 0:o.id,u,R]);const oe=u==="customer"?"Name or Phone":"Credit card number";return e.jsxDEV("form",{onSubmit:H(K),className:"grid grid-cols-1 lg:grid-cols-2 gap-4",autoComplete:"off",children:[e.jsxDEV("div",{className:"grid grid-cols-2 lg:col-span-2",children:[e.jsxDEV("div",{children:e.jsxDEV(m,{className:"items-center flex gap-1",children:[e.jsxDEV("input",{name:"searchBy",type:"radio",value:"customer",checked:u==="customer",onChange:()=>_("customer")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:271,columnNumber:13},this)," ","Search by Customer"]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:270,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:269,columnNumber:9},this),e.jsxDEV("div",{children:e.jsxDEV(m,{className:"items-center flex gap-1",children:[e.jsxDEV("input",{name:"searchBy",type:"radio",value:"credit_card",checked:u==="credit_card",onChange:()=>_("credit_card")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:283,columnNumber:13},this)," ","Search by Credit card"]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:282,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:281,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:268,columnNumber:7},this),e.jsxDEV("div",{className:"lg:col-span-2 relative",children:[e.jsxDEV(d,{placeholder:oe,value:g,onChange:J},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:296,columnNumber:9},this),g&&e.jsxDEV(ae,{className:"absolute top-full mt-2 left-0 w-full",children:e.jsxDEV(de,{className:"max-h-80 p-2 overflow-auto",children:[u==="credit_card"&&(j==null?void 0:j.map(r=>e.jsxDEV("div",{className:"flex items-center gap-2 hover:bg-muted p-1 px-2 cursor-pointer",onClick:()=>X(r),children:[e.jsxDEV("strong",{children:r.name_on_creditcard},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:307,columnNumber:21},this)," (",r.creditcard_number,")"]},r.id,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:302,columnNumber:19},this))),u==="customer"&&(U==null?void 0:U.map(r=>e.jsxDEV("div",{className:"flex items-center gap-2 hover:bg-muted p-1 px-2 cursor-pointer",onClick:()=>W(r),children:[e.jsxDEV("strong",{children:r.full_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:318,columnNumber:21},this)," (",r.phonenumber,")"]},r.id,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:313,columnNumber:19},this)))]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:299,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:298,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:295,columnNumber:7},this),e.jsxDEV("div",{className:"grid md:grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(m,{htmlFor:"customer",children:"Customer full name"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:328,columnNumber:9},this),e.jsxDEV(d,{readOnly:!0,defaultValue:l==null?void 0:l.full_name},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:329,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:327,columnNumber:7},this),e.jsxDEV("div",{className:"grid md:grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(m,{htmlFor:"id_customer_creditcard",children:"Credit Card"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:333,columnNumber:9},this),l?e.jsxDEV(Ne,{...s("id_customer_creditcard"),value:o!=null&&o.id?String(o==null?void 0:o.id):"",listCustomerCreditcards:l==null?void 0:l.list_credit_card,onSelectCard:R},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:335,columnNumber:11},this):e.jsxDEV(d,{readOnly:!0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:342,columnNumber:11},this),e.jsxDEV(a,{error:n.id_customer_creditcard},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:344,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:332,columnNumber:7},this),e.jsxDEV("div",{className:"grid md:grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(m,{htmlFor:"id_pos_info",children:"POS"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:348,columnNumber:9},this),o?e.jsxDEV(he,{...s("id_pos_info"),idCustomerCreditcard:o==null?void 0:o.id,onSelectPos:Z},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:350,columnNumber:11},this):e.jsxDEV(d,{readOnly:!0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:356,columnNumber:11},this),e.jsxDEV(a,{error:n.id_pos_info},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:358,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:347,columnNumber:7},this),e.jsxDEV("div",{className:"grid md:grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(m,{htmlFor:"id_vietnamese_bank",children:"Bank"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:362,columnNumber:9},this),o?e.jsxDEV(Pe,{name:s("id_vietnamese_bank").name,onChange:s("id_vietnamese_bank").onChange,onBlur:s("id_vietnamese_bank").onBlur,readOnly:!0,defaultValue:o!=null&&o.id_vietnamese_bank?String(o.id_vietnamese_bank):void 0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:364,columnNumber:11},this):e.jsxDEV(d,{readOnly:!0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:376,columnNumber:11},this),e.jsxDEV(a,{error:n.id_vietnamese_bank},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:378,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:361,columnNumber:7},this),e.jsxDEV("div",{className:"grid md:grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(m,{htmlFor:"money_total",children:"Total Money"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:382,columnNumber:9},this),e.jsxDEV("div",{children:[e.jsxDEV(d,{...s("money_total"),onChange:ee},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:384,columnNumber:11},this),e.jsxDEV("p",{className:"p-2 text-sm italic",children:isNaN(Number(f("money_total")))?" ":C(Number(f("money_total")))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:385,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:383,columnNumber:9},this),e.jsxDEV(a,{error:n.money_total},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:391,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:381,columnNumber:7},this),e.jsxDEV("div",{className:"grid md:grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(m,{htmlFor:"customer",children:"Max Usage Money"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:395,columnNumber:9},this),e.jsxDEV(d,{readOnly:!0,defaultValue:E==null?void 0:E.max_per_charge},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:396,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:394,columnNumber:7},this),e.jsxDEV("div",{className:"grid md:grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(m,{htmlFor:"user_option",children:"User Option"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:400,columnNumber:9},this),e.jsxDEV(ye,{...s("user_option"),defaultValue:"2"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:401,columnNumber:9},this),e.jsxDEV(a,{error:n.user_option},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:402,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:399,columnNumber:7},this),e.jsxDEV("div",{className:"grid md:grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(m,{htmlFor:"rate_option",children:"Rate Option"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:406,columnNumber:9},this),e.jsxDEV(ge,{...s("rate_option"),defaultValue:"2",onSelectRate:$},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:407,columnNumber:9},this),e.jsxDEV(a,{error:n.rate_option},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:412,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:405,columnNumber:7},this),e.jsxDEV("div",{className:"grid md:grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(m,{htmlFor:"percent_to_charge",children:"Percent to Charge"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:416,columnNumber:9},this),e.jsxDEV("div",{children:[e.jsxDEV(d,{...s("percent_to_charge"),value:w,onChange:re,onBlur:se,readOnly:Q==="2"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:418,columnNumber:11},this),e.jsxDEV("p",{className:"p-2 text-sm italic",children:isNaN(Number(f("percent_to_charge")))?" ":Ve(Number(f("percent_to_charge"))/100)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:425,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:417,columnNumber:9},this),e.jsxDEV(a,{error:n.percent_to_charge},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:431,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:415,columnNumber:7},this),e.jsxDEV("div",{className:"grid md:grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(m,{htmlFor:"fee",children:"Fee"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:435,columnNumber:9},this),e.jsxDEV("div",{children:[e.jsxDEV(d,{readOnly:!0,value:V},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:437,columnNumber:11},this),e.jsxDEV("p",{className:"p-2 text-sm italic",children:isNaN(Number(V))?" ":C(Number(V))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:438,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:436,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:434,columnNumber:7},this),e.jsxDEV("div",{className:"grid md:grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(m,{htmlFor:"money_applied_percent",children:"Total Money Applied Percent"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:445,columnNumber:9},this),e.jsxDEV("div",{children:[e.jsxDEV(d,{...s("money_applied_percent"),value:f("money_applied_percent"),readOnly:!0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:449,columnNumber:11},this),e.jsxDEV("p",{className:"p-2 text-sm italic",children:isNaN(Number(f("money_applied_percent")))?" ":C(Number(f("money_applied_percent")))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:454,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:448,columnNumber:9},this),e.jsxDEV(a,{error:n.money_applied_percent},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:461,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:444,columnNumber:7},this),e.jsxDEV("div",{className:"grid md:grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(m,{htmlFor:"days_coming_due",children:"Days Coming Due"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:465,columnNumber:9},this),e.jsxDEV(d,{...s("days_coming_due")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:466,columnNumber:9},this),e.jsxDEV(a,{error:n.days_coming_due},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:467,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:464,columnNumber:7},this),e.jsxDEV("div",{className:"grid md:grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(m,{htmlFor:"card_type",children:"Card Type"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:471,columnNumber:9},this),e.jsxDEV(xe,{...s("card_type")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:472,columnNumber:9},this),e.jsxDEV(a,{error:n.card_type},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:473,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:470,columnNumber:7},this),e.jsxDEV("div",{className:"grid md:grid-cols-[200px_1fr] items-center gap-2",children:[e.jsxDEV(m,{htmlFor:"note",children:"Note"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:477,columnNumber:9},this),e.jsxDEV(pe,{...s("note")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:478,columnNumber:9},this),e.jsxDEV(a,{error:n.note},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:479,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:476,columnNumber:7},this),e.jsxDEV("div",{className:"lg:col-span-2 mt-4",children:e.jsxDEV(ne,{className:"w-full",children:"Submit"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:483,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:482,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/forms/customer-history/order-step-1.form.tsx",lineNumber:263,columnNumber:5},this)}function qe(){const[p,h]=b.useState();function u(_){h(_)}return e.jsxDEV("div",{className:"space-y-4 px-4 mb-10",children:[e.jsxDEV("div",{className:"flex items-center flex-col lg:flex-row justify-between space-y-2",children:e.jsxDEV("h2",{className:"text-2xl lg:text-3xl font-bold tracking-tight",children:"Create Order"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/order-create.container.tsx",lineNumber:17,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/order-create.container.tsx",lineNumber:16,columnNumber:7},this),!p&&e.jsxDEV(Se,{nextStep:u},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/order-create.container.tsx",lineNumber:21,columnNumber:24},this),p&&e.jsxDEV(Ue,{resultStep1:p},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/order-create.container.tsx",lineNumber:22,columnNumber:23},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/containers/order-create.container.tsx",lineNumber:15,columnNumber:5},this)}function fr(){return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(ce,{children:e.jsxDEV("title",{children:"POS System - Order Create"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/order-create.page.tsx",lineNumber:8,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/order-create.page.tsx",lineNumber:7,columnNumber:7},this),e.jsxDEV(qe,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/order-create.page.tsx",lineNumber:10,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/customer/pages/order-create.page.tsx",lineNumber:6,columnNumber:5},this)}export{fr as default};
