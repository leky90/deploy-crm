import{w as c,a as o,Q as f,R as I}from"./index-f2VhjHM4.js";import{j as h}from"./index-VWaDGczM.js";function l(){const e=c(),n=o.getQueryData(f.AUTH_INFO);function u(){o.clear(),e(I.SIGN_IN)}function r(){if(!n)return null;try{return h(n==null?void 0:n.token)}catch{if(!n)return null}}function a(){const t=r();return t&&t.is_administrator}function i(){const t=r();return t&&!t.is_administrator}function s(){const t=r();return t&&Date.now()>t.exp*1e3}return{signOut:u,isAdmin:a,isUser:i,wasTokenExpired:s,getAuthInfo:r,auth:n}}export{l as u};
