import{g as ae,r as ze,b as V}from"./index-iY8wkAMF.js";var _e={exports:{}},Ie={exports:{}},w={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,n=t?Symbol.for("react.portal"):60106,r=t?Symbol.for("react.fragment"):60107,o=t?Symbol.for("react.strict_mode"):60108,a=t?Symbol.for("react.profiler"):60114,s=t?Symbol.for("react.provider"):60109,f=t?Symbol.for("react.context"):60110,i=t?Symbol.for("react.async_mode"):60111,c=t?Symbol.for("react.concurrent_mode"):60111,d=t?Symbol.for("react.forward_ref"):60112,v=t?Symbol.for("react.suspense"):60113,g=t?Symbol.for("react.suspense_list"):60120,m=t?Symbol.for("react.memo"):60115,I=t?Symbol.for("react.lazy"):60116,H=t?Symbol.for("react.block"):60121,Y=t?Symbol.for("react.fundamental"):60117,D=t?Symbol.for("react.responder"):60118,$=t?Symbol.for("react.scope"):60119;function W(p){return typeof p=="string"||typeof p=="function"||p===r||p===c||p===a||p===o||p===v||p===g||typeof p=="object"&&p!==null&&(p.$$typeof===I||p.$$typeof===m||p.$$typeof===s||p.$$typeof===f||p.$$typeof===d||p.$$typeof===Y||p.$$typeof===D||p.$$typeof===$||p.$$typeof===H)}function M(p){if(typeof p=="object"&&p!==null){var le=p.$$typeof;switch(le){case e:var te=p.type;switch(te){case i:case c:case r:case a:case o:case v:return te;default:var ge=te&&te.$$typeof;switch(ge){case f:case d:case I:case m:case s:return ge;default:return le}}case n:return le}}}var ie=i,ue=c,z=f,fe=s,F=e,B=d,ce=r,se=I,u=m,l=n,b=a,A=o,y=v,S=!1;function h(p){return S||(S=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),E(p)||M(p)===i}function E(p){return M(p)===c}function O(p){return M(p)===f}function C(p){return M(p)===s}function P(p){return typeof p=="object"&&p!==null&&p.$$typeof===e}function L(p){return M(p)===d}function x(p){return M(p)===r}function N(p){return M(p)===I}function Ue(p){return M(p)===m}function Ne(p){return M(p)===n}function Be(p){return M(p)===a}function qe(p){return M(p)===o}function We(p){return M(p)===v}w.AsyncMode=ie,w.ConcurrentMode=ue,w.ContextConsumer=z,w.ContextProvider=fe,w.Element=F,w.ForwardRef=B,w.Fragment=ce,w.Lazy=se,w.Memo=u,w.Portal=l,w.Profiler=b,w.StrictMode=A,w.Suspense=y,w.isAsyncMode=h,w.isConcurrentMode=E,w.isContextConsumer=O,w.isContextProvider=C,w.isElement=P,w.isForwardRef=L,w.isFragment=x,w.isLazy=N,w.isMemo=Ue,w.isPortal=Ne,w.isProfiler=Be,w.isStrictMode=qe,w.isSuspense=We,w.isValidElementType=W,w.typeOf=M})();Ie.exports=w;var Me=Ie.exports;/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Ae=Object.getOwnPropertySymbols,Ge=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable;function Je(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function Qe(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(a){return e[a]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(a){o[a]=a}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var xe=Qe()?Object.assign:function(t,e){for(var n,r=Je(t),o,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var s in n)Ge.call(n,s)&&(r[s]=n[s]);if(Ae){o=Ae(n);for(var f=0;f<o.length;f++)Xe.call(n,o[f])&&(r[o[f]]=n[o[f]])}}return r};const Ze=ae(xe);var Ke="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Le=Ke,je=Function.call.bind(Object.prototype.hasOwnProperty),ve=function(){};{var Ve=Le,Te={},et=je;ve=function(t){var e="Warning: "+t;typeof console<"u"&&console.error(e);try{throw new Error(e)}catch{}}}function He(t,e,n,r,o){for(var a in t)if(et(t,a)){var s;try{if(typeof t[a]!="function"){var f=Error((r||"React class")+": "+n+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof t[a]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw f.name="Invariant Violation",f}s=t[a](e,a,r,n,null,Ve)}catch(c){s=c}if(s&&!(s instanceof Error)&&ve((r||"React class")+": type specification of "+n+" `"+a+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof s+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),s instanceof Error&&!(s.message in Te)){Te[s.message]=!0;var i=o?o():"";ve("Failed "+n+" type: "+s.message+(i??""))}}}He.resetWarningCache=function(){Te={}};var tt=He,rt=Me,nt=xe,G=Le,de=je,be=tt,J=function(){};J=function(t){var e="Warning: "+t;typeof console<"u"&&console.error(e);try{throw new Error(e)}catch{}};function re(){return null}var ot=function(t,e){var n=typeof Symbol=="function"&&Symbol.iterator,r="@@iterator";function o(u){var l=u&&(n&&u[n]||u[r]);if(typeof l=="function")return l}var a="<<anonymous>>",s={array:d("array"),bigint:d("bigint"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:v(),arrayOf:g,element:m(),elementType:I(),instanceOf:H,node:W(),objectOf:D,oneOf:Y,oneOfType:$,shape:ie,exact:ue};function f(u,l){return u===l?u!==0||1/u===1/l:u!==u&&l!==l}function i(u,l){this.message=u,this.data=l&&typeof l=="object"?l:{},this.stack=""}i.prototype=Error.prototype;function c(u){var l={},b=0;function A(S,h,E,O,C,P,L){if(O=O||a,P=P||E,L!==G){if(e){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}else if(typeof console<"u"){var N=O+":"+E;!l[N]&&b<3&&(J("You are manually calling a React.PropTypes validation function for the `"+P+"` prop on `"+O+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),l[N]=!0,b++)}}return h[E]==null?S?h[E]===null?new i("The "+C+" `"+P+"` is marked as required "+("in `"+O+"`, but its value is `null`.")):new i("The "+C+" `"+P+"` is marked as required in "+("`"+O+"`, but its value is `undefined`.")):null:u(h,E,O,C,P)}var y=A.bind(null,!1);return y.isRequired=A.bind(null,!0),y}function d(u){function l(b,A,y,S,h,E){var O=b[A],C=F(O);if(C!==u){var P=B(O);return new i("Invalid "+S+" `"+h+"` of type "+("`"+P+"` supplied to `"+y+"`, expected ")+("`"+u+"`."),{expectedType:u})}return null}return c(l)}function v(){return c(re)}function g(u){function l(b,A,y,S,h){if(typeof u!="function")return new i("Property `"+h+"` of component `"+y+"` has invalid PropType notation inside arrayOf.");var E=b[A];if(!Array.isArray(E)){var O=F(E);return new i("Invalid "+S+" `"+h+"` of type "+("`"+O+"` supplied to `"+y+"`, expected an array."))}for(var C=0;C<E.length;C++){var P=u(E,C,y,S,h+"["+C+"]",G);if(P instanceof Error)return P}return null}return c(l)}function m(){function u(l,b,A,y,S){var h=l[b];if(!t(h)){var E=F(h);return new i("Invalid "+y+" `"+S+"` of type "+("`"+E+"` supplied to `"+A+"`, expected a single ReactElement."))}return null}return c(u)}function I(){function u(l,b,A,y,S){var h=l[b];if(!rt.isValidElementType(h)){var E=F(h);return new i("Invalid "+y+" `"+S+"` of type "+("`"+E+"` supplied to `"+A+"`, expected a single ReactElement type."))}return null}return c(u)}function H(u){function l(b,A,y,S,h){if(!(b[A]instanceof u)){var E=u.name||a,O=se(b[A]);return new i("Invalid "+S+" `"+h+"` of type "+("`"+O+"` supplied to `"+y+"`, expected ")+("instance of `"+E+"`."))}return null}return c(l)}function Y(u){if(!Array.isArray(u))return arguments.length>1?J("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):J("Invalid argument supplied to oneOf, expected an array."),re;function l(b,A,y,S,h){for(var E=b[A],O=0;O<u.length;O++)if(f(E,u[O]))return null;var C=JSON.stringify(u,function(L,x){var N=B(x);return N==="symbol"?String(x):x});return new i("Invalid "+S+" `"+h+"` of value `"+String(E)+"` "+("supplied to `"+y+"`, expected one of "+C+"."))}return c(l)}function D(u){function l(b,A,y,S,h){if(typeof u!="function")return new i("Property `"+h+"` of component `"+y+"` has invalid PropType notation inside objectOf.");var E=b[A],O=F(E);if(O!=="object")return new i("Invalid "+S+" `"+h+"` of type "+("`"+O+"` supplied to `"+y+"`, expected an object."));for(var C in E)if(de(E,C)){var P=u(E,C,y,S,h+"."+C,G);if(P instanceof Error)return P}return null}return c(l)}function $(u){if(!Array.isArray(u))return J("Invalid argument supplied to oneOfType, expected an instance of array."),re;for(var l=0;l<u.length;l++){var b=u[l];if(typeof b!="function")return J("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+ce(b)+" at index "+l+"."),re}function A(y,S,h,E,O){for(var C=[],P=0;P<u.length;P++){var L=u[P],x=L(y,S,h,E,O,G);if(x==null)return null;x.data&&de(x.data,"expectedType")&&C.push(x.data.expectedType)}var N=C.length>0?", expected one of type ["+C.join(", ")+"]":"";return new i("Invalid "+E+" `"+O+"` supplied to "+("`"+h+"`"+N+"."))}return c(A)}function W(){function u(l,b,A,y,S){return z(l[b])?null:new i("Invalid "+y+" `"+S+"` supplied to "+("`"+A+"`, expected a ReactNode."))}return c(u)}function M(u,l,b,A,y){return new i((u||"React class")+": "+l+" type `"+b+"."+A+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+y+"`.")}function ie(u){function l(b,A,y,S,h){var E=b[A],O=F(E);if(O!=="object")return new i("Invalid "+S+" `"+h+"` of type `"+O+"` "+("supplied to `"+y+"`, expected `object`."));for(var C in u){var P=u[C];if(typeof P!="function")return M(y,S,h,C,B(P));var L=P(E,C,y,S,h+"."+C,G);if(L)return L}return null}return c(l)}function ue(u){function l(b,A,y,S,h){var E=b[A],O=F(E);if(O!=="object")return new i("Invalid "+S+" `"+h+"` of type `"+O+"` "+("supplied to `"+y+"`, expected `object`."));var C=nt({},b[A],u);for(var P in C){var L=u[P];if(de(u,P)&&typeof L!="function")return M(y,S,h,P,B(L));if(!L)return new i("Invalid "+S+" `"+h+"` key `"+P+"` supplied to `"+y+"`.\nBad object: "+JSON.stringify(b[A],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(u),null,"  "));var x=L(E,P,y,S,h+"."+P,G);if(x)return x}return null}return c(l)}function z(u){switch(typeof u){case"number":case"string":case"undefined":return!0;case"boolean":return!u;case"object":if(Array.isArray(u))return u.every(z);if(u===null||t(u))return!0;var l=o(u);if(l){var b=l.call(u),A;if(l!==u.entries){for(;!(A=b.next()).done;)if(!z(A.value))return!1}else for(;!(A=b.next()).done;){var y=A.value;if(y&&!z(y[1]))return!1}}else return!1;return!0;default:return!1}}function fe(u,l){return u==="symbol"?!0:l?l["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&l instanceof Symbol:!1}function F(u){var l=typeof u;return Array.isArray(u)?"array":u instanceof RegExp?"object":fe(l,u)?"symbol":l}function B(u){if(typeof u>"u"||u===null)return""+u;var l=F(u);if(l==="object"){if(u instanceof Date)return"date";if(u instanceof RegExp)return"regexp"}return l}function ce(u){var l=B(u);switch(l){case"array":case"object":return"an "+l;case"boolean":case"date":case"regexp":return"a "+l;default:return l}}function se(u){return!u.constructor||!u.constructor.name?a:u.constructor.name}return s.checkPropTypes=be,s.resetWarningCache=be.resetWarningCache,s.PropTypes=s,s};{var at=Me,it=!0;_e.exports=ot(at.isElement,it)}var ut=_e.exports;const R=ae(ut);function ft(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var Ye=ze,ct=ft(Ye);function Se(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function st(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var lt=!!(typeof window<"u"&&window.document&&window.document.createElement);function dt(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(o){return o.displayName||o.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var s=[],f;function i(){f=t(s.map(function(d){return d.props})),c.canUseDOM?e(f):n&&(f=n(f))}var c=function(d){st(v,d);function v(){return d.apply(this,arguments)||this}v.peek=function(){return f},v.rewind=function(){if(v.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var I=f;return f=void 0,s=[],I};var g=v.prototype;return g.UNSAFE_componentWillMount=function(){s.push(this),i()},g.componentDidUpdate=function(){i()},g.componentWillUnmount=function(){var I=s.indexOf(this);s.splice(I,1),i()},g.render=function(){return ct.createElement(a,this.props)},v}(Ye.PureComponent);return Se(c,"displayName","SideEffect("+r(a)+")"),Se(c,"canUseDOM",lt),c}}var pt=dt;const vt=ae(pt);var Tt=typeof Element<"u",yt=typeof Map=="function",mt=typeof Set=="function",ht=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ne(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,o;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!ne(t[r],e[r]))return!1;return!0}var a;if(yt&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;for(a=t.entries();!(r=a.next()).done;)if(!ne(r.value[1],e.get(r.value[0])))return!1;return!0}if(mt&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(a=t.entries();!(r=a.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(ht&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(o=Object.keys(t),n=o.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[r]))return!1;if(Tt&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&t.$$typeof)&&!ne(t[o[r]],e[o[r]]))return!1;return!0}return t!==t&&e!==e}var Et=function(e,n){try{return ne(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const gt=ae(Et);var q={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},Oe=Object.keys(T).map(function(t){return T[t]}),_={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},oe={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ee={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},At=Object.keys(oe).reduce(function(t,e){return t[oe[e]]=e,t},{}),bt=[T.NOSCRIPT,T.SCRIPT,T.STYLE],k="data-react-helmet",St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ot=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Pt=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ct=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},Pe=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},wt=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},ye=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Rt=function(e){var n=Q(e,T.TITLE),r=Q(e,ee.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var o=Q(e,ee.DEFAULT_TITLE);return n||o||void 0},_t=function(e){return Q(e,ee.ON_CHANGE_CLIENT_STATE)||function(){}},pe=function(e,n){return n.filter(function(r){return typeof r[e]<"u"}).map(function(r){return r[e]}).reduce(function(r,o){return j({},r,o)},{})},It=function(e,n){return n.filter(function(r){return typeof r[T.BASE]<"u"}).map(function(r){return r[T.BASE]}).reverse().reduce(function(r,o){if(!r.length)for(var a=Object.keys(o),s=0;s<a.length;s++){var f=a[s],i=f.toLowerCase();if(e.indexOf(i)!==-1&&o[i])return r.concat(o)}return r},[])},Z=function(e,n,r){var o={};return r.filter(function(a){return Array.isArray(a[e])?!0:(typeof a[e]<"u"&&he("Helmet: "+e+' should be of type "Array". Instead found type "'+St(a[e])+'"'),!1)}).map(function(a){return a[e]}).reverse().reduce(function(a,s){var f={};s.filter(function(g){for(var m=void 0,I=Object.keys(g),H=0;H<I.length;H++){var Y=I[H],D=Y.toLowerCase();n.indexOf(D)!==-1&&!(m===_.REL&&g[m].toLowerCase()==="canonical")&&!(D===_.REL&&g[D].toLowerCase()==="stylesheet")&&(m=D),n.indexOf(Y)!==-1&&(Y===_.INNER_HTML||Y===_.CSS_TEXT||Y===_.ITEM_PROP)&&(m=Y)}if(!m||!g[m])return!1;var $=g[m].toLowerCase();return o[m]||(o[m]={}),f[m]||(f[m]={}),o[m][$]?!1:(f[m][$]=!0,!0)}).reverse().forEach(function(g){return a.push(g)});for(var i=Object.keys(f),c=0;c<i.length;c++){var d=i[c],v=Ze({},o[d],f[d]);o[d]=v}return a},[]).reverse()},Q=function(e,n){for(var r=e.length-1;r>=0;r--){var o=e[r];if(o.hasOwnProperty(n))return o[n]}return null},Mt=function(e){return{baseTag:It([_.HREF,_.TARGET],e),bodyAttributes:pe(q.BODY,e),defer:Q(e,ee.DEFER),encode:Q(e,ee.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:pe(q.HTML,e),linkTags:Z(T.LINK,[_.REL,_.HREF],e),metaTags:Z(T.META,[_.NAME,_.CHARSET,_.HTTPEQUIV,_.PROPERTY,_.ITEM_PROP],e),noscriptTags:Z(T.NOSCRIPT,[_.INNER_HTML],e),onChangeClientState:_t(e),scriptTags:Z(T.SCRIPT,[_.SRC,_.INNER_HTML],e),styleTags:Z(T.STYLE,[_.CSS_TEXT],e),title:Rt(e),titleAttributes:pe(q.TITLE,e)}},me=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){me(e)},0)}}(),Ce=function(e){return clearTimeout(e)},xt=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||me:global.requestAnimationFrame||me,Lt=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Ce:global.cancelAnimationFrame||Ce,he=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},K=null,jt=function(e){K&&Lt(K),e.defer?K=xt(function(){we(e,function(){K=null})}):(we(e),K=null)},we=function(e,n){var r=e.baseTag,o=e.bodyAttributes,a=e.htmlAttributes,s=e.linkTags,f=e.metaTags,i=e.noscriptTags,c=e.onChangeClientState,d=e.scriptTags,v=e.styleTags,g=e.title,m=e.titleAttributes;Ee(T.BODY,o),Ee(T.HTML,a),Ht(g,m);var I={baseTag:X(T.BASE,r),linkTags:X(T.LINK,s),metaTags:X(T.META,f),noscriptTags:X(T.NOSCRIPT,i),scriptTags:X(T.SCRIPT,d),styleTags:X(T.STYLE,v)},H={},Y={};Object.keys(I).forEach(function(D){var $=I[D],W=$.newTags,M=$.oldTags;W.length&&(H[D]=W),M.length&&(Y[D]=I[D].oldTags)}),n&&n(),c(e,H,Y)},De=function(e){return Array.isArray(e)?e.join(""):e},Ht=function(e,n){typeof e<"u"&&document.title!==e&&(document.title=De(e)),Ee(T.TITLE,n)},Ee=function(e,n){var r=document.getElementsByTagName(e)[0];if(r){for(var o=r.getAttribute(k),a=o?o.split(","):[],s=[].concat(a),f=Object.keys(n),i=0;i<f.length;i++){var c=f[i],d=n[c]||"";r.getAttribute(c)!==d&&r.setAttribute(c,d),a.indexOf(c)===-1&&a.push(c);var v=s.indexOf(c);v!==-1&&s.splice(v,1)}for(var g=s.length-1;g>=0;g--)r.removeAttribute(s[g]);a.length===s.length?r.removeAttribute(k):r.getAttribute(k)!==f.join(",")&&r.setAttribute(k,f.join(","))}},X=function(e,n){var r=document.head||document.querySelector(T.HEAD),o=r.querySelectorAll(e+"["+k+"]"),a=Array.prototype.slice.call(o),s=[],f=void 0;return n&&n.length&&n.forEach(function(i){var c=document.createElement(e);for(var d in i)if(i.hasOwnProperty(d))if(d===_.INNER_HTML)c.innerHTML=i.innerHTML;else if(d===_.CSS_TEXT)c.styleSheet?c.styleSheet.cssText=i.cssText:c.appendChild(document.createTextNode(i.cssText));else{var v=typeof i[d]>"u"?"":i[d];c.setAttribute(d,v)}c.setAttribute(k,"true"),a.some(function(g,m){return f=m,c.isEqualNode(g)})?a.splice(f,1):s.push(c)}),a.forEach(function(i){return i.parentNode.removeChild(i)}),s.forEach(function(i){return r.appendChild(i)}),{oldTags:a,newTags:s}},ke=function(e){return Object.keys(e).reduce(function(n,r){var o=typeof e[r]<"u"?r+'="'+e[r]+'"':""+r;return n?n+" "+o:o},"")},Yt=function(e,n,r,o){var a=ke(r),s=De(n);return a?"<"+e+" "+k+'="true" '+a+">"+ye(s,o)+"</"+e+">":"<"+e+" "+k+'="true">'+ye(s,o)+"</"+e+">"},Dt=function(e,n,r){return n.reduce(function(o,a){var s=Object.keys(a).filter(function(c){return!(c===_.INNER_HTML||c===_.CSS_TEXT)}).reduce(function(c,d){var v=typeof a[d]>"u"?d:d+'="'+ye(a[d],r)+'"';return c?c+" "+v:v},""),f=a.innerHTML||a.cssText||"",i=bt.indexOf(e)===-1;return o+"<"+e+" "+k+'="true" '+s+(i?"/>":">"+f+"</"+e+">")},"")},Fe=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[oe[o]||o]=e[o],r},n)},kt=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[At[o]||o]=e[o],r},n)},Ft=function(e,n,r){var o,a=(o={key:n},o[k]=!0,o),s=Fe(r,a);return[V.createElement(T.TITLE,s,n)]},$t=function(e,n){return n.map(function(r,o){var a,s=(a={key:o},a[k]=!0,a);return Object.keys(r).forEach(function(f){var i=oe[f]||f;if(i===_.INNER_HTML||i===_.CSS_TEXT){var c=r.innerHTML||r.cssText;s.dangerouslySetInnerHTML={__html:c}}else s[i]=r[f]}),V.createElement(e,s)})},U=function(e,n,r){switch(e){case T.TITLE:return{toComponent:function(){return Ft(e,n.title,n.titleAttributes)},toString:function(){return Yt(e,n.title,n.titleAttributes,r)}};case q.BODY:case q.HTML:return{toComponent:function(){return Fe(n)},toString:function(){return ke(n)}};default:return{toComponent:function(){return $t(e,n)},toString:function(){return Dt(e,n,r)}}}},$e=function(e){var n=e.baseTag,r=e.bodyAttributes,o=e.encode,a=e.htmlAttributes,s=e.linkTags,f=e.metaTags,i=e.noscriptTags,c=e.scriptTags,d=e.styleTags,v=e.title,g=v===void 0?"":v,m=e.titleAttributes;return{base:U(T.BASE,n,o),bodyAttributes:U(q.BODY,r,o),htmlAttributes:U(q.HTML,a,o),link:U(T.LINK,s,o),meta:U(T.META,f,o),noscript:U(T.NOSCRIPT,i,o),script:U(T.SCRIPT,c,o),style:U(T.STYLE,d,o),title:U(T.TITLE,{title:g,titleAttributes:m},o)}},Ut=function(e){var n,r;return r=n=function(o){Ct(a,o);function a(){return Ot(this,a),wt(this,o.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(f){return!gt(this.props,f)},a.prototype.mapNestedChildrenToProps=function(f,i){if(!i)return null;switch(f.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:i};case T.STYLE:return{cssText:i}}throw new Error("<"+f.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(f){var i,c=f.child,d=f.arrayTypeChildren,v=f.newChildProps,g=f.nestedChildren;return j({},d,(i={},i[c.type]=[].concat(d[c.type]||[],[j({},v,this.mapNestedChildrenToProps(c,g))]),i))},a.prototype.mapObjectTypeChildren=function(f){var i,c,d=f.child,v=f.newProps,g=f.newChildProps,m=f.nestedChildren;switch(d.type){case T.TITLE:return j({},v,(i={},i[d.type]=m,i.titleAttributes=j({},g),i));case T.BODY:return j({},v,{bodyAttributes:j({},g)});case T.HTML:return j({},v,{htmlAttributes:j({},g)})}return j({},v,(c={},c[d.type]=j({},g),c))},a.prototype.mapArrayTypeChildrenToProps=function(f,i){var c=j({},i);return Object.keys(f).forEach(function(d){var v;c=j({},c,(v={},v[d]=f[d],v))}),c},a.prototype.warnOnInvalidChildren=function(f,i){{if(!Oe.some(function(c){return f.type===c}))return typeof f.type=="function"?he("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."):he("Only elements types "+Oe.join(", ")+" are allowed. Helmet does not support rendering <"+f.type+"> elements. Refer to our API for more information.");if(i&&typeof i!="string"&&(!Array.isArray(i)||i.some(function(c){return typeof c!="string"})))throw new Error("Helmet expects a string as a child of <"+f.type+">. Did you forget to wrap your children in braces? ( <"+f.type+">{``}</"+f.type+"> ) Refer to our API for more information.")}return!0},a.prototype.mapChildrenToProps=function(f,i){var c=this,d={};return V.Children.forEach(f,function(v){if(!(!v||!v.props)){var g=v.props,m=g.children,I=Pe(g,["children"]),H=kt(I);switch(c.warnOnInvalidChildren(v,m),v.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:d=c.flattenArrayTypeChildren({child:v,arrayTypeChildren:d,newChildProps:H,nestedChildren:m});break;default:i=c.mapObjectTypeChildren({child:v,newProps:i,newChildProps:H,nestedChildren:m});break}}}),i=this.mapArrayTypeChildrenToProps(d,i),i},a.prototype.render=function(){var f=this.props,i=f.children,c=Pe(f,["children"]),d=j({},c);return i&&(d=this.mapChildrenToProps(i,d)),V.createElement(e,d)},Pt(a,null,[{key:"canUseDOM",set:function(f){e.canUseDOM=f}}]),a}(V.Component),n.propTypes={base:R.object,bodyAttributes:R.object,children:R.oneOfType([R.arrayOf(R.node),R.node]),defaultTitle:R.string,defer:R.bool,encodeSpecialCharacters:R.bool,htmlAttributes:R.object,link:R.arrayOf(R.object),meta:R.arrayOf(R.object),noscript:R.arrayOf(R.object),onChangeClientState:R.func,script:R.arrayOf(R.object),style:R.arrayOf(R.object),title:R.string,titleAttributes:R.object,titleTemplate:R.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var o=e.rewind();return o||(o=$e({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),o},r},Nt=function(){return null},Bt=vt(Mt,jt,$e)(Nt),Re=Ut(Bt);Re.renderStatic=Re.rewind;export{Re as H};
