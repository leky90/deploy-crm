import{d,a as c,Q as f,R as l}from"./index-D1beO7r7.js";class i extends Error{}i.prototype.name="InvalidTokenError";function p(n){return decodeURIComponent(atob(n).replace(/(.)/g,(e,o)=>{let t=o.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t}))}function h(n){let e=n.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return p(e)}catch{return atob(e)}}function g(n,e){if(typeof n!="string")throw new i("Invalid token specified: must be a string");e||(e={});const o=e.header===!0?0:1,t=n.split(".")[o];if(typeof t!="string")throw new i(`Invalid token specified: missing part #${o+1}`);let s;try{s=h(t)}catch(a){throw new i(`Invalid token specified: invalid base64 for part #${o+1} (${a.message})`)}try{return JSON.parse(s)}catch(a){throw new i(`Invalid token specified: invalid json for part #${o+1} (${a.message})`)}}function w(){const n=d(),e=c.getQueryData(f.AUTH_INFO);function o(){c.clear(),n(l.SIGN_IN)}function t(){if(!e)return null;try{return g(e==null?void 0:e.token)}catch{if(!e)return null}}function s(){const r=t();return r&&r.is_administrator}function a(){const r=t();return r&&!r.is_administrator}function u(){const r=t();return r&&Date.now()>r.exp*1e3}return{signOut:o,isAdmin:s,isUser:a,wasTokenExpired:u,getAuthInfo:t,auth:e}}export{w as u};
