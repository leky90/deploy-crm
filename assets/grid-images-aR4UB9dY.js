import{r as I,j as C}from"./index-D1JUiLua.js";import{A as cn,i as un,T as ln}from"./react-icons.esm-s9XaPAzI.js";import{d as oe,B as Pe}from"./button-H_a97MWm.js";import{a as an,b as fn}from"./dialog-Tlj49w8P.js";function dn(e){return Object.prototype.toString.call(e)==="[object Object]"}function Fe(e){return dn(e)||Array.isArray(e)}function mn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Te(e,n){const t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;const c=JSON.stringify(Object.keys(e.breakpoints||{})),s=JSON.stringify(Object.keys(n.breakpoints||{}));return c!==s?!1:t.every(r=>{const u=e[r],i=n[r];return typeof u=="function"?`${u}`==`${i}`:!Fe(u)||!Fe(i)?u===i:Te(u,i)})}function ze(e){return e.concat().sort((n,t)=>n.name>t.name?1:-1).map(n=>n.options)}function pn(e,n){if(e.length!==n.length)return!1;const t=ze(e),o=ze(n);return t.every((c,s)=>{const r=o[s];return Te(c,r)})}function ke(e){return typeof e=="number"}function De(e){return typeof e=="string"}function we(e){return typeof e=="boolean"}function Be(e){return Object.prototype.toString.call(e)==="[object Object]"}function L(e){return Math.abs(e)}function Ce(e){return Math.sign(e)}function ae(e,n){return L(e-n)}function gn(e,n){if(e===0||n===0||L(e)<=L(n))return 0;const t=ae(L(e),L(n));return L(t/e)}function fe(e){return de(e).map(Number)}function B(e){return e[pe(e)]}function pe(e){return Math.max(0,e.length-1)}function Ie(e,n){return n===pe(e)}function Re(e,n=0){return Array.from(Array(e),(t,o)=>n+o)}function de(e){return Object.keys(e)}function Ge(e,n){return[e,n].reduce((t,o)=>(de(o).forEach(c=>{const s=t[c],r=o[c],u=Be(s)&&Be(r);t[c]=u?Ge(s,r):r}),t),{})}function He(e,n){return typeof n.MouseEvent<"u"&&e instanceof n.MouseEvent}function bn(e,n){const t={start:o,center:c,end:s};function o(){return 0}function c(i){return s(i)/2}function s(i){return n-i}function r(i,l){return De(e)?t[e](i):e(n,i,l)}return{measure:r}}function me(){let e=[];function n(c,s,r,u={passive:!0}){let i;if("addEventListener"in c)c.addEventListener(s,r,u),i=()=>c.removeEventListener(s,r,u);else{const l=c;l.addListener(r),i=()=>l.removeListener(r)}return e.push(i),o}function t(){e=e.filter(c=>c())}const o={add:n,clear:t};return o}function hn(e,n,t,o){const c=me(),s=1e3/60;let r=null,u=0,i=0;function l(){c.add(e,"visibilitychange",()=>{e.hidden&&g()})}function f(){N(),c.clear()}function m(h){if(!i)return;r||(r=h);const a=h-r;for(r=h,u+=a;u>=s;)t(),u-=s;const b=L(u/s);o(b),i&&n.requestAnimationFrame(m)}function p(){i||(i=n.requestAnimationFrame(m))}function N(){n.cancelAnimationFrame(i),r=null,u=0,i=0}function g(){r=null,u=0}return{init:l,destroy:f,start:p,stop:N,update:t,render:o}}function xn(e,n){const t=e==="y"?"y":"x",o=e==="y"?"x":"y",c=u(),s=i();function r(f){const{width:m,height:p}=f;return t==="x"?m:p}function u(){return t==="y"?"top":n==="rtl"?"right":"left"}function i(){return t==="y"?"bottom":n==="rtl"?"left":"right"}return{scroll:t,cross:o,startEdge:c,endEdge:s,measureSize:r}}function te(e=0,n=0){const t=L(e-n);function o(l){return l<e}function c(l){return l>n}function s(l){return o(l)||c(l)}function r(l){return s(l)?o(l)?e:n:l}function u(l){return t?l-t*Math.ceil((l-n)/t):l}return{length:t,max:n,min:e,constrain:r,reachedAny:s,reachedMax:c,reachedMin:o,removeOffset:u}}function qe(e,n,t){const{constrain:o}=te(0,e),c=e+1;let s=r(n);function r(p){return t?L((c+p)%c):o(p)}function u(){return s}function i(p){return s=r(p),m}function l(p){return f().set(u()+p)}function f(){return qe(e,u(),t)}const m={get:u,set:i,add:l,clone:f};return m}function yn(e){const n=e==="rtl"?-1:1;function t(c){return c*n}return{apply:t}}function Nn(e,n,t,o,c,s,r,u,i,l,f,m,p,N,g,d,h,a,b,x){const{cross:v}=e,E=["INPUT","SELECT","TEXTAREA"],k={passive:!1},A=me(),S=me(),D=te(50,225).constrain(g.measure(20)),P={mouse:300,touch:400},w={mouse:500,touch:600},V=d?43:25;let R=!1,G=0,$=0,H=!1,_=!1,Z=!1,K=!1;function ie(y){if(!x)return;function T(M){(we(x)||x(y,M))&&ue(M)}const O=t;A.add(O,"dragstart",M=>M.preventDefault(),k).add(O,"touchmove",()=>{},k).add(O,"touchend",()=>{}).add(O,"touchstart",T).add(O,"mousedown",T).add(O,"touchcancel",U).add(O,"contextmenu",U).add(O,"click",J,!0)}function q(){A.clear(),S.clear()}function re(){const y=K?o:t;S.add(y,"touchmove",F,k).add(y,"touchend",U).add(y,"mousemove",F,k).add(y,"mouseup",U)}function se(y){const T=y.nodeName||"";return E.includes(T)}function Q(){return(d?w:P)[K?"mouse":"touch"]}function ce(y,T){const O=p.add(Ce(y)*-1),M=m.byDistance(y,!d).distance;return d||L(y)<D?M:a&&T?M*.5:m.byIndex(O.get(),0).distance}function ue(y){const T=He(y,c);K=T,!(T&&y.button!==0)&&(se(y.target)||(Z=d&&T&&!y.buttons&&R,R=ae(s.get(),u.get())>=2,H=!0,r.pointerDown(y),f.useFriction(0).useDuration(0),s.set(u),re(),G=r.readPoint(y),$=r.readPoint(y,v),N.emit("pointerDown")))}function F(y){const T=r.readPoint(y),O=r.readPoint(y,v),M=ae(T,G),W=ae(O,$);if(!_&&!K&&(!y.cancelable||(_=M>W,!_)))return U(y);const X=r.pointerMove(y);M>h&&(Z=!0),f.useFriction(.3).useDuration(1),i.start(),s.add(n.apply(X)),y.preventDefault()}function U(y){const O=m.byDistance(0,!1).index!==p.get(),M=r.pointerUp(y)*Q(),W=ce(n.apply(M),O),X=gn(M,W),ee=V-10*X,Y=b+X/50;_=!1,H=!1,S.clear(),f.useDuration(ee).useFriction(Y),l.distance(W,!d),K=!1,N.emit("pointerUp")}function J(y){Z&&(y.stopPropagation(),y.preventDefault())}function z(){return H}return{init:ie,pointerDown:z,destroy:q}}function Sn(e,n){let o,c;function s(m){return m.timeStamp}function r(m,p){const g=`client${(p||e.scroll)==="x"?"X":"Y"}`;return(He(m,n)?m:m.touches[0])[g]}function u(m){return o=m,c=m,r(m)}function i(m){const p=r(m)-r(c),N=s(m)-s(o)>170;return c=m,N&&(o=m),p}function l(m){if(!o||!c)return 0;const p=r(c)-r(o),N=s(m)-s(o),g=s(m)-s(c)>170,d=p/N;return N&&!g&&L(d)>.1?d:0}return{pointerDown:u,pointerMove:i,pointerUp:l,readPoint:r}}function vn(){function e(t){const{offsetTop:o,offsetLeft:c,offsetWidth:s,offsetHeight:r}=t;return{top:o,right:c+s,bottom:o+r,left:c,width:s,height:r}}return{measure:e}}function En(e){function n(o){return e*(o/100)}return{measure:n}}function Dn(e,n,t,o,c,s,r){let u,i,l=[],f=!1;function m(d){return c.measureSize(r.measure(d))}function p(d){if(!s)return;i=m(e),l=o.map(m);function h(b){for(const x of b){const v=x.target===e,E=o.indexOf(x.target),k=v?i:l[E],A=m(v?e:o[E]);if(L(A-k)>=.5){t.requestAnimationFrame(()=>{d.reInit(),n.emit("resize")});break}}}u=new ResizeObserver(b=>{f||(we(s)||s(d,b))&&h(b)}),[e].concat(o).forEach(b=>u.observe(b))}function N(){u&&u.disconnect(),f=!0}return{init:p,destroy:N}}function Pn(e,n,t,o,c){let s=0,r=0,u=o,i=c,l=e.get(),f=0;function m(){const E=t.get()-e.get(),k=!u;let A=0;return k?(s=0,e.set(t),A=E):(s+=E/u,s*=i,l+=s,e.add(s),A=l-f),r=Ce(A),f=l,v}function p(){const E=t.get()-n.get();return L(E)<.001}function N(){return u}function g(){return r}function d(){return s}function h(){return b(o)}function a(){return x(c)}function b(E){return u=E,v}function x(E){return i=E,v}const v={direction:g,duration:N,velocity:d,seek:m,settled:p,useBaseFriction:a,useBaseDuration:h,useFriction:x,useDuration:b};return v}function Tn(e,n,t,o,c){const s=c.measure(10),r=c.measure(50),u=te(.1,.99);let i=!1;function l(){return!(i||!e.reachedAny(t.get())||!e.reachedAny(n.get()))}function f(N){if(!l())return;const g=e.reachedMin(n.get())?"min":"max",d=L(e[g]-n.get()),h=t.get()-n.get(),a=u.constrain(d/r);t.subtract(h*a),!N&&L(h)<s&&(t.set(e.constrain(t.get())),o.useDuration(25).useBaseFriction())}function m(N){i=!N}return{constrain:f,toggleActive:m}}function kn(e,n,t,o,c){const s=te(-n+e,0),r=m(),u=f(),i=p();function l(g,d){return ae(g,d)<1}function f(){const g=r[0],d=B(r),h=r.lastIndexOf(g),a=r.indexOf(d)+1;return te(h,a)}function m(){return t.map((g,d)=>{const{min:h,max:a}=s,b=s.constrain(g),x=!d,v=Ie(t,d);return x?a:v||l(h,b)?h:l(a,b)?a:b}).map(g=>parseFloat(g.toFixed(3)))}function p(){if(n<=e+c)return[s.max];if(o==="keepSnaps")return r;const{min:g,max:d}=u;return r.slice(g,d)}return{snapsContained:i,scrollContainLimit:u}}function wn(e,n,t){const o=n[0],c=t?o-e:B(n);return{limit:te(c,o)}}function Cn(e,n,t,o){const s=n.min+.1,r=n.max+.1,{reachedMin:u,reachedMax:i}=te(s,r);function l(p){return p===1?i(t.get()):p===-1?u(t.get()):!1}function f(p){if(!l(p))return;const N=e*(p*-1);o.forEach(g=>g.add(N))}return{loop:f}}function In(e){const{max:n,length:t}=e;function o(s){const r=s-n;return t?r/-t:0}return{get:o}}function Ln(e,n,t,o,c){const{startEdge:s,endEdge:r}=e,{groupSlides:u}=c,i=m().map(n.measure),l=p(),f=N();function m(){return u(o).map(d=>B(d)[r]-d[0][s]).map(L)}function p(){return o.map(d=>t[s]-d[s]).map(d=>-L(d))}function N(){return u(l).map(d=>d[0]).map((d,h)=>d+i[h])}return{snaps:l,snapsAligned:f}}function jn(e,n,t,o,c,s){const{groupSlides:r}=c,{min:u,max:i}=o,l=f();function f(){const p=r(s),N=!e||n==="keepSnaps";return t.length===1?[s]:N?p:p.slice(u,i).map((g,d,h)=>{const a=!d,b=Ie(h,d);if(a){const x=B(h[0])+1;return Re(x)}if(b){const x=pe(s)-B(h)[0]+1;return Re(x,B(h)[0])}return g})}return{slideRegistry:l}}function An(e,n,t,o,c){const{reachedAny:s,removeOffset:r,constrain:u}=o;function i(g){return g.concat().sort((d,h)=>L(d)-L(h))[0]}function l(g){const d=e?r(g):u(g),h=n.map(b=>b-d).map(b=>f(b,0)).map((b,x)=>({diff:b,index:x})).sort((b,x)=>L(b.diff)-L(x.diff)),{index:a}=h[0];return{index:a,distance:d}}function f(g,d){const h=[g,g+t,g-t];if(!e)return h[0];if(!d)return i(h);const a=h.filter(b=>Ce(b)===d);return a.length?i(a):B(h)-t}function m(g,d){const h=n[g]-c.get(),a=f(h,d);return{index:g,distance:a}}function p(g,d){const h=c.get()+g,{index:a,distance:b}=l(h),x=!e&&s(h);if(!d||x)return{index:a,distance:g};const v=n[a]-b,E=g+f(v,0);return{index:a,distance:E}}return{byDistance:p,byIndex:m,shortcut:f}}function On(e,n,t,o,c,s,r){function u(m){const p=m.distance,N=m.index!==n.get();s.add(p),p&&(o.duration()?e.start():(e.update(),e.render(1),e.update())),N&&(t.set(n.get()),n.set(m.index),r.emit("select"))}function i(m,p){const N=c.byDistance(m,p);u(N)}function l(m,p){const N=n.clone().set(m),g=c.byIndex(N.get(),p);u(g)}return{distance:i,index:l}}function Vn(e,n,t,o,c,s){let r=0;function u(){s.add(document,"keydown",i,!1),n.forEach(l)}function i(m){m.code==="Tab"&&(r=new Date().getTime())}function l(m){const p=()=>{if(new Date().getTime()-r>10)return;e.scrollLeft=0;const d=n.indexOf(m),h=t.findIndex(a=>a.includes(d));ke(h)&&(c.useDuration(0),o.index(h,0))};s.add(m,"focus",p,{passive:!0,capture:!0})}return{init:u}}function be(e){let n=e;function t(){return n}function o(i){n=r(i)}function c(i){n+=r(i)}function s(i){n-=r(i)}function r(i){return ke(i)?i:i.get()}return{get:t,set:o,add:c,subtract:s}}function $e(e,n,t){const o=e.scroll==="x"?r:u,c=t.style;let s=!1;function r(p){return`translate3d(${p}px,0px,0px)`}function u(p){return`translate3d(0px,${p}px,0px)`}function i(p){s||(c.transform=o(n.apply(p)))}function l(p){s=!p}function f(){s||(c.transform="",t.getAttribute("style")||t.removeAttribute("style"))}return{clear:f,to:i,toggleActive:l}}function Mn(e,n,t,o,c,s,r,u,i,l){const m=fe(s),p=fe(s).reverse(),N=b().concat(x());function g(S,D){return S.reduce((P,w)=>P-s[w],D)}function d(S,D){return S.reduce((P,w)=>g(P,D)>0?P.concat([w]):P,[])}function h(S){return r.map((D,P)=>({start:D-c[P]+.5+S,end:D+t-.5+S}))}function a(S,D,P){const w=h(D);return S.map(V=>{const R=P?0:-o,G=P?o:0,$=P?"end":"start",H=w[V][$];return{index:V,loopPoint:H,slideLocation:be(-1),translate:$e(e,n,l[V]),target:()=>i.get()>H?R:G}})}function b(){const S=u[0],D=d(p,S);return a(D,o,!1)}function x(){const S=t-u[0]-1,D=d(m,S);return a(D,-o,!0)}function v(){return N.every(({index:S})=>{const D=m.filter(P=>P!==S);return g(D,t)<=.1})}function E(){N.forEach(S=>{const{target:D,translate:P,slideLocation:w}=S,V=D();V!==w.get()&&(P.to(V),w.set(V))})}function k(){N.forEach(S=>S.translate.clear())}return{canLoop:v,clear:k,loop:E,loopPoints:N}}function Un(e,n,t){let o,c=!1;function s(i){if(!t)return;function l(f){for(const m of f)if(m.type==="childList"){i.reInit(),n.emit("slidesChanged");break}}o=new MutationObserver(f=>{c||(we(t)||t(i,f))&&l(f)}),o.observe(e,{childList:!0})}function r(){o&&o.disconnect(),c=!0}return{init:s,destroy:r}}function Fn(e,n,t,o){const c={};let s=null,r=null,u,i=!1;function l(){u=new IntersectionObserver(g=>{i||(g.forEach(d=>{const h=n.indexOf(d.target);c[h]=d}),s=null,r=null,t.emit("slidesInView"))},{root:e.parentElement,threshold:o}),n.forEach(g=>u.observe(g))}function f(){u&&u.disconnect(),i=!0}function m(g){return de(c).reduce((d,h)=>{const a=parseInt(h),{isIntersecting:b}=c[a];return(g&&b||!g&&!b)&&d.push(a),d},[])}function p(g=!0){if(g&&s)return s;if(!g&&r)return r;const d=m(g);return g&&(s=d),g||(r=d),d}return{init:l,destroy:f,get:p}}function zn(e,n,t,o,c,s){const{measureSize:r,startEdge:u,endEdge:i}=e,l=t[0]&&c,f=g(),m=d(),p=t.map(r),N=h();function g(){if(!l)return 0;const b=t[0];return L(n[u]-b[u])}function d(){if(!l)return 0;const b=s.getComputedStyle(B(o));return parseFloat(b.getPropertyValue(`margin-${i}`))}function h(){return t.map((b,x,v)=>{const E=!x,k=Ie(v,x);return E?p[x]+f:k?p[x]+m:v[x+1][u]-b[u]}).map(L)}return{slideSizes:p,slideSizesWithGaps:N,startGap:f,endGap:m}}function Bn(e,n,t,o,c,s,r,u,i,l){const{startEdge:f,endEdge:m}=e,p=ke(o);function N(a,b){return fe(a).filter(x=>x%b===0).map(x=>a.slice(x,x+b))}function g(a){return a.length?fe(a).reduce((b,x)=>{const v=B(b)||0,E=v===0,k=x===pe(a),A=s[f]-r[v][f],S=s[f]-r[x][m],D=!c&&E?n.apply(u):0,P=!c&&k?n.apply(i):0;return L(S-P-(A+D))>t+l&&b.push(x),k&&b.push(a.length),b},[]).map((b,x,v)=>{const E=Math.max(v[x-1]||0);return a.slice(E,b)}):[]}function d(a){return p?N(a,o):g(a)}return{groupSlides:d}}function Rn(e,n,t,o,c,s,r){const{align:u,axis:i,direction:l,startIndex:f,loop:m,duration:p,dragFree:N,dragThreshold:g,inViewThreshold:d,slidesToScroll:h,skipSnaps:a,containScroll:b,watchResize:x,watchSlides:v,watchDrag:E}=s,k=2,A=vn(),S=A.measure(n),D=t.map(A.measure),P=yn(l),w=xn(i,l),V=w.measureSize(S),R=En(V),G=bn(u,V),$=!m&&!!b,H=m||!!b,{slideSizes:_,slideSizesWithGaps:Z,startGap:K,endGap:ie}=zn(w,S,D,t,H,c),q=Bn(w,P,V,h,m,S,D,K,ie,k),{snaps:re,snapsAligned:se}=Ln(w,G,S,D,q),Q=-B(re)+B(Z),{snapsContained:ce,scrollContainLimit:ue}=kn(V,Q,se,b,k),F=$?ce:se,{limit:U}=wn(Q,F,m),J=qe(pe(F),f,m),z=J.clone(),j=fe(t),y=({dragHandler:ne,scrollBody:ve,scrollBounds:Ee,options:{loop:ge}})=>{ge||Ee.constrain(ne.pointerDown()),ve.seek()},T=({scrollBody:ne,translate:ve,location:Ee,offsetLocation:ge,scrollLooper:en,slideLooper:nn,dragHandler:tn,animation:rn,eventHandler:Ve,options:{loop:sn}},on)=>{const Me=ne.velocity(),Ue=ne.settled();Ue&&!tn.pointerDown()&&(rn.stop(),Ve.emit("settle")),Ue||Ve.emit("scroll"),ge.set(Ee.get()-Me+Me*on),sn&&(en.loop(ne.direction()),nn.loop()),ve.to(ge.get())},O=hn(o,c,()=>y(Se),ne=>T(Se,ne)),M=.68,W=F[J.get()],X=be(W),ee=be(W),Y=be(W),le=Pn(X,ee,Y,p,M),ye=An(m,F,Q,U,Y),Ne=On(O,J,z,le,ye,Y,r),je=In(U),Ae=me(),Ze=Fn(n,t,r,d),{slideRegistry:Oe}=jn($,b,F,ue,q,j),We=Vn(e,t,Oe,Ne,le,Ae),Se={ownerDocument:o,ownerWindow:c,eventHandler:r,containerRect:S,slideRects:D,animation:O,axis:w,direction:P,dragHandler:Nn(w,P,e,o,c,Y,Sn(w,c),X,O,Ne,le,ye,J,r,R,N,g,a,M,E),eventStore:Ae,percentOfView:R,index:J,indexPrevious:z,limit:U,location:X,offsetLocation:ee,options:s,resizeHandler:Dn(n,r,c,t,w,x,A),scrollBody:le,scrollBounds:Tn(U,ee,Y,le,R),scrollLooper:Cn(Q,U,ee,[X,ee,Y]),scrollProgress:je,scrollSnapList:F.map(je.get),scrollSnaps:F,scrollTarget:ye,scrollTo:Ne,slideLooper:Mn(w,P,V,Q,_,Z,re,F,ee,t),slideFocus:We,slidesHandler:Un(n,r,v),slidesInView:Ze,slideIndexes:j,slideRegistry:Oe,slidesToScroll:q,target:Y,translate:$e(w,P,n)};return Se}function Gn(){const e={};let n;function t(i){n=i}function o(i){return e[i]||[]}function c(i){return o(i).forEach(l=>l(n,i)),u}function s(i,l){return e[i]=o(i).concat([l]),u}function r(i,l){return e[i]=o(i).filter(f=>f!==l),u}const u={init:t,emit:c,off:r,on:s};return u}const Hn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function qn(e){function n(s,r){return Ge(s,r||{})}function t(s){const r=s.breakpoints||{},u=de(r).filter(i=>e.matchMedia(i).matches).map(i=>r[i]).reduce((i,l)=>n(i,l),{});return n(s,u)}function o(s){return s.map(r=>de(r.breakpoints||{})).reduce((r,u)=>r.concat(u),[]).map(e.matchMedia)}return{mergeOptions:n,optionsAtMedia:t,optionsMediaQueries:o}}function $n(e){let n=[];function t(s,r){return n=r.filter(({options:u})=>e.optionsAtMedia(u).active!==!1),n.forEach(u=>u.init(s,e)),r.reduce((u,i)=>Object.assign(u,{[i.name]:i}),{})}function o(){n=n.filter(s=>s.destroy())}return{init:t,destroy:o}}function he(e,n,t){const o=e.ownerDocument,c=o.defaultView,s=qn(c),r=$n(s),u=me(),i=Gn(),{mergeOptions:l,optionsAtMedia:f,optionsMediaQueries:m}=s,{on:p,off:N,emit:g}=i,d=w;let h=!1,a,b=l(Hn,he.globalOptions),x=l(b),v=[],E,k,A;function S(){const{container:j,slides:y}=x;k=(De(j)?e.querySelector(j):j)||e.children[0];const O=De(y)?k.querySelectorAll(y):y;A=[].slice.call(O||k.children)}function D(j){const y=Rn(e,k,A,o,c,j,i);if(j.loop&&!y.slideLooper.canLoop()){const T=Object.assign({},j,{loop:!1});return D(T)}return y}function P(j,y){h||(b=l(b,j),x=f(b),v=y||v,S(),a=D(x),m([b,...v.map(({options:T})=>T)]).forEach(T=>u.add(T,"change",w)),x.active&&(a.translate.to(a.location.get()),a.animation.init(),a.slidesInView.init(),a.slideFocus.init(),a.eventHandler.init(z),a.resizeHandler.init(z),a.slidesHandler.init(z),a.options.loop&&a.slideLooper.loop(),k.offsetParent&&A.length&&a.dragHandler.init(z),E=r.init(z,v)))}function w(j,y){const T=q();V(),P(l({startIndex:T},j),y),i.emit("reInit")}function V(){a.dragHandler.destroy(),a.eventStore.clear(),a.translate.clear(),a.slideLooper.clear(),a.resizeHandler.destroy(),a.slidesHandler.destroy(),a.slidesInView.destroy(),a.animation.destroy(),r.destroy(),u.clear()}function R(){h||(h=!0,u.clear(),V(),i.emit("destroy"))}function G(j,y,T){!x.active||h||(a.scrollBody.useBaseFriction().useDuration(y===!0?0:x.duration),a.scrollTo.index(j,T||0))}function $(j){const y=a.index.add(1).get();G(y,j,-1)}function H(j){const y=a.index.add(-1).get();G(y,j,1)}function _(){return a.index.add(1).get()!==q()}function Z(){return a.index.add(-1).get()!==q()}function K(){return a.scrollSnapList}function ie(){return a.scrollProgress.get(a.location.get())}function q(){return a.index.get()}function re(){return a.indexPrevious.get()}function se(){return a.slidesInView.get()}function Q(){return a.slidesInView.get(!1)}function ce(){return E}function ue(){return a}function F(){return e}function U(){return k}function J(){return A}const z={canScrollNext:_,canScrollPrev:Z,containerNode:U,internalEngine:ue,destroy:R,off:N,on:p,emit:g,plugins:ce,previousScrollSnap:re,reInit:d,rootNode:F,scrollNext:$,scrollPrev:H,scrollProgress:ie,scrollSnapList:K,scrollTo:G,selectedScrollSnap:q,slideNodes:J,slidesInView:se,slidesNotInView:Q};return P(n,t),setTimeout(()=>i.emit("init"),0),z}he.globalOptions=void 0;function Le(e={},n=[]){const t=I.useRef(e),o=I.useRef(n),[c,s]=I.useState(),[r,u]=I.useState(),i=I.useCallback(()=>{c&&c.reInit(t.current,o.current)},[c]);return I.useEffect(()=>{if(mn()&&r){he.globalOptions=Le.globalOptions;const l=he(r,t.current,o.current);return s(l),()=>l.destroy()}else s(void 0)},[r,s]),I.useEffect(()=>{Te(t.current,e)||(t.current=e,i())},[e,i]),I.useEffect(()=>{pn(o.current,n)||(o.current=n,i())},[n,i]),[u,c]}Le.globalOptions=void 0;const Ke=I.createContext(null);function xe(){const e=I.useContext(Ke);if(!e)throw new Error("useCarousel must be used within a <Carousel />");return e}const Qe=I.forwardRef(({orientation:e="horizontal",opts:n,setApi:t,plugins:o,className:c,children:s,defaultIndex:r=0,...u},i)=>{const[l,f]=Le({...n,startIndex:r,axis:e==="horizontal"?"x":"y"},o),[m,p]=I.useState(!1),[N,g]=I.useState(!1),d=I.useCallback(x=>{x&&(p(x.canScrollPrev()),g(x.canScrollNext()))},[]),h=I.useCallback(()=>{f==null||f.scrollPrev()},[f]),a=I.useCallback(()=>{f==null||f.scrollNext()},[f]),b=I.useCallback(x=>{x.key==="ArrowLeft"?(x.preventDefault(),h()):x.key==="ArrowRight"&&(x.preventDefault(),a())},[h,a]);return I.useEffect(()=>{!f||!t||t(f)},[f,t]),I.useEffect(()=>{if(f)return d(f),f.on("reInit",d),f.on("select",d),()=>{f==null||f.off("select",d)}},[f,d]),C.jsxDEV(Ke.Provider,{value:{carouselRef:l,api:f,opts:n,orientation:e||((n==null?void 0:n.axis)==="y"?"vertical":"horizontal"),scrollPrev:h,scrollNext:a,canScrollPrev:m,canScrollNext:N},children:C.jsxDEV("div",{ref:i,onKeyDownCapture:b,className:oe("relative",c),role:"region","aria-roledescription":"carousel",...u,children:s},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/carousel.tsx",lineNumber:138,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/carousel.tsx",lineNumber:125,columnNumber:7},void 0)});Qe.displayName="Carousel";const Je=I.forwardRef(({className:e,...n},t)=>{const{carouselRef:o,orientation:c}=xe();return C.jsxDEV("div",{ref:o,className:"overflow-hidden",children:C.jsxDEV("div",{ref:t,className:oe("flex",c==="horizontal"?"-ml-4":"-mt-4 flex-col",e),...n},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/carousel.tsx",lineNumber:162,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/carousel.tsx",lineNumber:161,columnNumber:5},void 0)});Je.displayName="CarouselContent";const Xe=I.forwardRef(({className:e,...n},t)=>{const{orientation:o}=xe();return C.jsxDEV("div",{ref:t,role:"group","aria-roledescription":"slide",className:oe("min-w-0 shrink-0 grow-0 basis-full",o==="horizontal"?"pl-4":"pt-4",e),...n},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/carousel.tsx",lineNumber:183,columnNumber:5},void 0)});Xe.displayName="CarouselItem";const Ye=I.forwardRef(({className:e,variant:n="outline",size:t="icon",...o},c)=>{const{orientation:s,scrollPrev:r,canScrollPrev:u}=xe();return C.jsxDEV(Pe,{ref:c,variant:n,size:t,className:oe("absolute  h-8 w-8 rounded-full",s==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!u,onClick:r,...o,children:[C.jsxDEV(cn,{className:"h-4 w-4"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/carousel.tsx",lineNumber:220,columnNumber:7},void 0),C.jsxDEV("span",{className:"sr-only",children:"Previous slide"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/carousel.tsx",lineNumber:221,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/carousel.tsx",lineNumber:205,columnNumber:5},void 0)});Ye.displayName="CarouselPrevious";const _e=I.forwardRef(({className:e,variant:n="outline",size:t="icon",...o},c)=>{const{orientation:s,scrollNext:r,canScrollNext:u}=xe();return C.jsxDEV(Pe,{ref:c,variant:n,size:t,className:oe("absolute h-8 w-8 rounded-full",s==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!u,onClick:r,...o,children:[C.jsxDEV(un,{className:"h-4 w-4"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/carousel.tsx",lineNumber:249,columnNumber:7},void 0),C.jsxDEV("span",{className:"sr-only",children:"Next slide"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/carousel.tsx",lineNumber:250,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/ui/carousel.tsx",lineNumber:234,columnNumber:5},void 0)});_e.displayName="CarouselNext";function Yn({images:e,className:n,onDelete:t,getName:o}){const[c,s]=I.useState(!1),[r,u]=I.useState(0);if(!(e!=null&&e.length))return C.jsxDEV("p",{className:"italic text-sm truncate",children:"No images."},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/components/grid-images.tsx",lineNumber:26,columnNumber:12},this);function i(l){s(!0),u(l)}return C.jsxDEV("div",{className:oe("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3",n),children:[e.map((l,f)=>C.jsxDEV("div",{className:"relative aspect-video border overflow-hidden shadow-lg p-1 rounded",children:[t&&o&&C.jsxDEV(Pe,{type:"button",size:"icon",variant:"destructive",className:"absolute right-1 top-1",onClick:()=>t(o(l)),children:C.jsxDEV(ln,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/components/grid-images.tsx",lineNumber:53,columnNumber:15},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/components/grid-images.tsx",lineNumber:46,columnNumber:13},this),C.jsxDEV("img",{src:l,className:"object-contain w-full h-full cursor-pointer",alt:"image",onClick:()=>i(f)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/components/grid-images.tsx",lineNumber:57,columnNumber:11},this)]},f,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/components/grid-images.tsx",lineNumber:41,columnNumber:9},this)),C.jsxDEV(an,{open:c,onOpenChange:s,children:C.jsxDEV(fn,{className:"flex items-center max-w-7xl justify-center px-16",children:C.jsxDEV(Qe,{defaultIndex:r,className:"w-full",children:[C.jsxDEV(Je,{children:e.map((l,f)=>C.jsxDEV(Xe,{className:"max-h-[90vh]",children:C.jsxDEV("img",{src:l,className:"object-contain w-full h-full",alt:"image"},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/components/grid-images.tsx",lineNumber:71,columnNumber:19},this)},f,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/components/grid-images.tsx",lineNumber:70,columnNumber:17},this))},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/components/grid-images.tsx",lineNumber:68,columnNumber:13},this),C.jsxDEV(Ye,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/components/grid-images.tsx",lineNumber:79,columnNumber:13},this),C.jsxDEV(_e,{},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/components/grid-images.tsx",lineNumber:80,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/components/grid-images.tsx",lineNumber:67,columnNumber:11},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/components/grid-images.tsx",lineNumber:66,columnNumber:9},this)},void 0,!1,{fileName:"/Users/ldky90/Public/Training/crm/src/app/components/grid-images.tsx",lineNumber:65,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/ldky90/Public/Training/crm/src/app/components/grid-images.tsx",lineNumber:34,columnNumber:5},this)}export{Yn as G};
