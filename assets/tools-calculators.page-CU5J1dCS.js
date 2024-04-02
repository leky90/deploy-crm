import{r as N,j as e}from"./index-By_MqxwU.js";import{a as B,H}from"./Helmet-k4G6Y4e8.js";import{C as L,a as F,b as _,c as Y}from"./card-luLq1lJs.js";import{I as y}from"./input-oPWuCtXy.js";import{L as x}from"./label-BwwYkI0V.js";import{f as E}from"./format-currency-DwwnROlR.js";import{f as O}from"./format-percent-Ca7gawAv.js";import{z as w,u as R,F as I,t as z}from"./index-dMlCCAaQ.js";import{B as A}from"./button-DQm-mP38.js";import{u as K}from"./useMutation-uUMxTRoT.js";function q(){var h,v,b,D;const[p,g]=N.useState(0),s=N.useRef(null),o=N.useRef(null),i=N.useRef(null),l=N.useRef(null),n=f=>{if(!s.current||!o.current||!i.current||!l.current)return;f.key==="Backspace"?g(c=>--c):g(c=>++c)},m=f=>{if(!s.current||!o.current||!i.current||!l.current)return;g(r=>++r);const t=Number(s.current.value),c=Number(o.current.value),a=Number(i.current.value),u=Number(l.current.value);if(!(isNaN(t)||isNaN(c)||isNaN(a)||isNaN(u))){if(f.currentTarget===s.current){const r=Math.round(t*c/100);i.current.value=String(t-r),l.current.value=String(r)}if(f.currentTarget===o.current){if(t>0){const r=Math.round(t*c/100);i.current.value=String(t-r),l.current.value=String(r)}else if(a>0){const r=Math.round(a/(1-c/100)),d=Math.round(r-a);s.current.value=String(r),l.current.value=String(d)}}if(f.currentTarget===i.current){if(t>0){const r=t-a;o.current.value=String((r/t*100).toFixed(2)),l.current.value=String(r)}else if(c>0){const r=Math.round(a/(1-c/100)),d=Math.round(r-a);s.current.value=String(r),l.current.value=String(d)}else if(u>0){const r=Math.round(a+u),d=(u/r*100).toFixed(2);s.current.value=String(r),o.current.value=String(d)}}if(f.currentTarget===l.current){if(t>0)o.current.value=String((u/t*100).toFixed(2)),i.current.value=String(t-u);else if(a>0){const r=Math.round(a+u),d=(u/r*100).toFixed(2);s.current.value=String(r),o.current.value=String(d)}}}};return N.useEffect(()=>{var f,t,c,a,u,r,d,k;return(f=s.current)==null||f.addEventListener("change",m),(t=o.current)==null||t.addEventListener("change",m),(c=i.current)==null||c.addEventListener("change",m),(a=l.current)==null||a.addEventListener("change",m),(u=s.current)==null||u.addEventListener("keyup",n),(r=o.current)==null||r.addEventListener("keyup",n),(d=i.current)==null||d.addEventListener("keyup",n),(k=l.current)==null||k.addEventListener("keyup",n),()=>{var P,T,j,U,V,S,M,C;(P=s.current)==null||P.removeEventListener("change",m),(T=o.current)==null||T.removeEventListener("change",m),(j=i.current)==null||j.removeEventListener("change",m),(U=l.current)==null||U.removeEventListener("change",m),(V=s.current)==null||V.removeEventListener("keyup",n),(S=o.current)==null||S.removeEventListener("keyup",n),(M=i.current)==null||M.removeEventListener("keyup",n),(C=l.current)==null||C.removeEventListener("keyup",n)}},[]),e.jsxDEV("form",{className:"grid grid-cols-2 gap-4 items-start",autoComplete:"off",children:[e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("div",{children:[e.jsxDEV(x,{htmlFor:"original_price",children:"Original price"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/discount-calculator/discount-calculator.form.tsx",lineNumber:142,columnNumber:11},this),e.jsxDEV(y,{ref:s,type:"number",placeholder:"Original price",min:0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/discount-calculator/discount-calculator.form.tsx",lineNumber:143,columnNumber:11},this),e.jsxDEV("p",{className:"p-2 text-sm italic",children:(h=s==null?void 0:s.current)!=null&&h.value&&!isNaN(Number(s.current.value))?E(Number(s.current.value)):" "},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/discount-calculator/discount-calculator.form.tsx",lineNumber:149,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/discount-calculator/discount-calculator.form.tsx",lineNumber:141,columnNumber:9},this),e.jsxDEV("div",{children:[e.jsxDEV(x,{htmlFor:"discount_discount",children:"Percent Discount"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/discount-calculator/discount-calculator.form.tsx",lineNumber:157,columnNumber:11},this),e.jsxDEV(y,{ref:o,type:"number",placeholder:"Percent Discount",min:0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/discount-calculator/discount-calculator.form.tsx",lineNumber:158,columnNumber:11},this),e.jsxDEV("p",{className:"p-2 text-sm italic",children:(v=o==null?void 0:o.current)!=null&&v.value&&!isNaN(Number(o.current.value))?O(Number(o.current.value)/100):" "},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/discount-calculator/discount-calculator.form.tsx",lineNumber:164,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/discount-calculator/discount-calculator.form.tsx",lineNumber:156,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/discount-calculator/discount-calculator.form.tsx",lineNumber:140,columnNumber:7},this),e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("div",{children:[e.jsxDEV(x,{htmlFor:"saving",children:"You're saving"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/discount-calculator/discount-calculator.form.tsx",lineNumber:175,columnNumber:11},this),e.jsxDEV(y,{ref:l,type:"number",placeholder:"You're saving",min:0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/discount-calculator/discount-calculator.form.tsx",lineNumber:176,columnNumber:11},this),e.jsxDEV("p",{className:"p-2 text-sm italic",children:(b=l==null?void 0:l.current)!=null&&b.value&&!isNaN(Number(l.current.value))?E(Number(l.current.value)):" "},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/discount-calculator/discount-calculator.form.tsx",lineNumber:182,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/discount-calculator/discount-calculator.form.tsx",lineNumber:174,columnNumber:9},this),e.jsxDEV("div",{children:[e.jsxDEV(x,{htmlFor:"pay",children:"You pay"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/discount-calculator/discount-calculator.form.tsx",lineNumber:190,columnNumber:11},this),e.jsxDEV(y,{ref:i,type:"number",placeholder:"You pay",min:0},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/discount-calculator/discount-calculator.form.tsx",lineNumber:191,columnNumber:11},this),e.jsxDEV("p",{className:"p-2 text-sm italic",children:(D=i==null?void 0:i.current)!=null&&D.value&&!isNaN(Number(i.current.value))?E(Number(i.current.value)):" "},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/discount-calculator/discount-calculator.form.tsx",lineNumber:192,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/discount-calculator/discount-calculator.form.tsx",lineNumber:189,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/discount-calculator/discount-calculator.form.tsx",lineNumber:173,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/discount-calculator/discount-calculator.form.tsx",lineNumber:139,columnNumber:5},this)}function G(p){return B({url:"/Divide_Money",params:p})}function J(){const{mutateAsync:p}=K({mutationFn:G});return{mutationDivideMoney:p}}const Q=w.object({money_total:w.coerce.number().min(0)});function W(){N.useRef(null);const[p,g]=N.useState(),{mutationDivideMoney:s}=J(),{register:o,handleSubmit:i,watch:l,formState:{errors:n}}=R({resolver:z(Q)}),m=async v=>{const b=await s(v);b.status&&g(b)},h=l("money_total");return e.jsxDEV("form",{onSubmit:i(m),className:"grid md:grid-cols-2 items-start gap-4",autoComplete:"off",children:[e.jsxDEV("div",{className:"space-y-4",children:[e.jsxDEV("div",{children:[e.jsxDEV(x,{htmlFor:"money_total",children:"Money total"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/divide-money-calculator/divide-money-calculator.form.tsx",lineNumber:45,columnNumber:11},this),e.jsxDEV(y,{placeholder:"Money total",...o("money_total")},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/divide-money-calculator/divide-money-calculator.form.tsx",lineNumber:46,columnNumber:11},this),e.jsxDEV("p",{className:"p-2 text-sm italic",children:isNaN(Number(h))?" ":E(Number(h))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/divide-money-calculator/divide-money-calculator.form.tsx",lineNumber:47,columnNumber:11},this),e.jsxDEV(I,{error:n.money_total},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/divide-money-calculator/divide-money-calculator.form.tsx",lineNumber:52,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/divide-money-calculator/divide-money-calculator.form.tsx",lineNumber:44,columnNumber:9},this),e.jsxDEV(A,{className:"w-full",children:"Submit"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/divide-money-calculator/divide-money-calculator.form.tsx",lineNumber:54,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/divide-money-calculator/divide-money-calculator.form.tsx",lineNumber:43,columnNumber:7},this),e.jsxDEV("div",{className:"space-y-4",children:p==null?void 0:p.result.map((v,b)=>e.jsxDEV("p",{children:v},b,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/divide-money-calculator/divide-money-calculator.form.tsx",lineNumber:58,columnNumber:11},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/divide-money-calculator/divide-money-calculator.form.tsx",lineNumber:56,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/forms/divide-money-calculator/divide-money-calculator.form.tsx",lineNumber:38,columnNumber:5},this)}function ce(){return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(H,{children:e.jsxDEV("title",{children:"POS System - Money Calculators"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/pages/tools-calculators.page.tsx",lineNumber:10,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/pages/tools-calculators.page.tsx",lineNumber:9,columnNumber:7},this),e.jsxDEV("div",{className:"grid lg:grid-cols-2 gap-8",children:[e.jsxDEV(L,{children:[e.jsxDEV(F,{children:e.jsxDEV(_,{className:"text-center",children:"Discount Calculator"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/pages/tools-calculators.page.tsx",lineNumber:33,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/pages/tools-calculators.page.tsx",lineNumber:32,columnNumber:11},this),e.jsxDEV(Y,{children:e.jsxDEV(q,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/pages/tools-calculators.page.tsx",lineNumber:36,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/pages/tools-calculators.page.tsx",lineNumber:35,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/pages/tools-calculators.page.tsx",lineNumber:31,columnNumber:9},this),e.jsxDEV(L,{children:[e.jsxDEV(F,{children:e.jsxDEV(_,{className:"text-center",children:"Divide Money Calculator"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/pages/tools-calculators.page.tsx",lineNumber:41,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/pages/tools-calculators.page.tsx",lineNumber:40,columnNumber:11},this),e.jsxDEV(Y,{children:e.jsxDEV(W,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/pages/tools-calculators.page.tsx",lineNumber:46,columnNumber:13},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/pages/tools-calculators.page.tsx",lineNumber:45,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/pages/tools-calculators.page.tsx",lineNumber:39,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/pages/tools-calculators.page.tsx",lineNumber:12,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/modules/tool/pages/tools-calculators.page.tsx",lineNumber:8,columnNumber:5},this)}export{ce as default};
