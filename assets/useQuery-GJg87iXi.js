var J=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var r=(s,t,e)=>(J(s,t,"read from private field"),e?e.call(s):t.get(s)),n=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},o=(s,t,e,i)=>(J(s,t,"write to private field"),i?i.call(s,e):t.set(s,e),e);var l=(s,t,e)=>(J(s,t,"access private method"),e);import{S as mt,s as X,n as Ct,i as lt,l as dt,t as Ot,m as Et,o as wt,p as ft,q as gt,r as O,v as St,w as Qt}from"./index-iY8wkAMF.js";import{s as It}from"./api-client-vqFb5rA2.js";var y,a,x,p,E,F,v,L,U,D,w,S,C,M,Q,P,A,Y,B,Z,j,$,k,tt,V,et,W,st,_,rt,z,vt,bt,Ft=(bt=class extends mt{constructor(t,e){super();n(this,Q);n(this,A);n(this,B);n(this,j);n(this,k);n(this,V);n(this,W);n(this,_);n(this,z);n(this,y,void 0);n(this,a,void 0);n(this,x,void 0);n(this,p,void 0);n(this,E,void 0);n(this,F,void 0);n(this,v,void 0);n(this,L,void 0);n(this,U,void 0);n(this,D,void 0);n(this,w,void 0);n(this,S,void 0);n(this,C,void 0);n(this,M,new Set);this.options=e,o(this,y,t),o(this,v,null),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(r(this,a).addObserver(this),pt(r(this,a),this.options)?l(this,Q,P).call(this):this.updateResult(),l(this,k,tt).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return it(r(this,a),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return it(r(this,a),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,l(this,V,et).call(this),l(this,W,st).call(this),r(this,a).removeObserver(this)}setOptions(t,e){const i=this.options,f=r(this,a);if(this.options=r(this,y).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");l(this,_,rt).call(this),X(this.options,i)||r(this,y).getQueryCache().notify({type:"observerOptionsUpdated",query:r(this,a),observer:this});const u=this.hasListeners();u&&yt(r(this,a),f,this.options,i)&&l(this,Q,P).call(this),this.updateResult(e),u&&(r(this,a)!==f||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&l(this,A,Y).call(this);const h=l(this,B,Z).call(this);u&&(r(this,a)!==f||this.options.enabled!==i.enabled||h!==r(this,C))&&l(this,j,$).call(this,h)}getOptimisticResult(t){const e=r(this,y).getQueryCache().build(r(this,y),t),i=this.createResult(e,t);return Dt(this,i)&&(o(this,p,i),o(this,F,this.options),o(this,E,r(this,a).state)),i}getCurrentResult(){return r(this,p)}trackResult(t,e){const i={};return Object.keys(t).forEach(f=>{Object.defineProperty(i,f,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(f),e==null||e(f),t[f])})}),i}trackProp(t){r(this,M).add(t)}getCurrentQuery(){return r(this,a)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=r(this,y).defaultQueryOptions(t),i=r(this,y).getQueryCache().build(r(this,y),e);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,e))}fetch(t){return l(this,Q,P).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),r(this,p)))}createResult(t,e){var ct;const i=r(this,a),f=this.options,u=r(this,p),h=r(this,E),d=r(this,F),I=t!==i?t.state:r(this,x),{state:c}=t;let{error:H,errorUpdatedAt:nt,fetchStatus:T,status:m}=c,ht=!1,g;if(e._optimisticResults){const b=this.hasListeners(),G=!b&&pt(t,e),Rt=b&&yt(t,i,e,f);(G||Rt)&&(T=wt(t.options.networkMode)?"fetching":"paused",c.data===void 0&&(m="pending")),e._optimisticResults==="isRestoring"&&(T="idle")}if(e.select&&c.data!==void 0)if(u&&c.data===(h==null?void 0:h.data)&&e.select===r(this,L))g=r(this,U);else try{o(this,L,e.select),g=e.select(c.data),g=ft(u==null?void 0:u.data,g,e),o(this,U,g),o(this,v,null)}catch(b){o(this,v,b)}else g=c.data;if(e.placeholderData!==void 0&&g===void 0&&m==="pending"){let b;if(u!=null&&u.isPlaceholderData&&e.placeholderData===(d==null?void 0:d.placeholderData))b=u.data;else if(b=typeof e.placeholderData=="function"?e.placeholderData((ct=r(this,D))==null?void 0:ct.state.data,r(this,D)):e.placeholderData,e.select&&b!==void 0)try{b=e.select(b),o(this,v,null)}catch(G){o(this,v,G)}b!==void 0&&(m="success",g=ft(u==null?void 0:u.data,b,e),ht=!0)}r(this,v)&&(H=r(this,v),g=r(this,U),nt=Date.now(),m="error");const N=T==="fetching",q=m==="pending",K=m==="error",ot=q&&N,ut=c.data!==void 0;return{status:m,fetchStatus:T,isPending:q,isSuccess:m==="success",isError:K,isInitialLoading:ot,isLoading:ot,data:g,dataUpdatedAt:c.dataUpdatedAt,error:H,errorUpdatedAt:nt,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>I.dataUpdateCount||c.errorUpdateCount>I.errorUpdateCount,isFetching:N,isRefetching:N&&!q,isLoadingError:K&&!ut,isPaused:T==="paused",isPlaceholderData:ht,isRefetchError:K&&ut,isStale:at(t,e),refetch:this.refetch}}updateResult(t){const e=r(this,p),i=this.createResult(r(this,a),this.options);if(o(this,E,r(this,a).state),o(this,F,this.options),r(this,E).data!==void 0&&o(this,D,r(this,a)),X(i,e))return;o(this,p,i);const f={},u=()=>{if(!e)return!0;const{notifyOnChangeProps:h}=this.options,d=typeof h=="function"?h():h;if(d==="all"||!d&&!r(this,M).size)return!0;const R=new Set(d??r(this,M));return this.options.throwOnError&&R.add("error"),Object.keys(r(this,p)).some(I=>{const c=I;return r(this,p)[c]!==e[c]&&R.has(c)})};(t==null?void 0:t.listeners)!==!1&&u()&&(f.listeners=!0),l(this,z,vt).call(this,{...f,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&l(this,k,tt).call(this)}},y=new WeakMap,a=new WeakMap,x=new WeakMap,p=new WeakMap,E=new WeakMap,F=new WeakMap,v=new WeakMap,L=new WeakMap,U=new WeakMap,D=new WeakMap,w=new WeakMap,S=new WeakMap,C=new WeakMap,M=new WeakMap,Q=new WeakSet,P=function(t){l(this,_,rt).call(this);let e=r(this,a).fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(Ct)),e},A=new WeakSet,Y=function(){if(l(this,V,et).call(this),lt||r(this,p).isStale||!dt(this.options.staleTime))return;const e=Ot(r(this,p).dataUpdatedAt,this.options.staleTime)+1;o(this,w,setTimeout(()=>{r(this,p).isStale||this.updateResult()},e))},B=new WeakSet,Z=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(r(this,a)):this.options.refetchInterval)??!1},j=new WeakSet,$=function(t){l(this,W,st).call(this),o(this,C,t),!(lt||this.options.enabled===!1||!dt(r(this,C))||r(this,C)===0)&&o(this,S,setInterval(()=>{(this.options.refetchIntervalInBackground||Et.isFocused())&&l(this,Q,P).call(this)},r(this,C)))},k=new WeakSet,tt=function(){l(this,A,Y).call(this),l(this,j,$).call(this,l(this,B,Z).call(this))},V=new WeakSet,et=function(){r(this,w)&&(clearTimeout(r(this,w)),o(this,w,void 0))},W=new WeakSet,st=function(){r(this,S)&&(clearInterval(r(this,S)),o(this,S,void 0))},_=new WeakSet,rt=function(){const t=r(this,y).getQueryCache().build(r(this,y),this.options);if(t===r(this,a))return;const e=r(this,a);o(this,a,t),o(this,x,t.state),this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))},z=new WeakSet,vt=function(t){gt.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(r(this,p))}),r(this,y).getQueryCache().notify({query:r(this,a),type:"observerResultsUpdated"})})},bt);function Ut(s,t){return t.enabled!==!1&&s.state.data===void 0&&!(s.state.status==="error"&&t.retryOnMount===!1)}function pt(s,t){return Ut(s,t)||s.state.data!==void 0&&it(s,t,t.refetchOnMount)}function it(s,t,e){if(t.enabled!==!1){const i=typeof e=="function"?e(s):e;return i==="always"||i!==!1&&at(s,t)}return!1}function yt(s,t,e,i){return e.enabled!==!1&&(s!==t||i.enabled===!1)&&(!e.suspense||s.state.status!=="error")&&at(s,e)}function at(s,t){return s.isStaleByTime(t.staleTime)}function Dt(s,t){return!X(s.getCurrentResult(),t)}function Mt(){let s=!1;return{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s}}var Tt=O.createContext(Mt()),Pt=()=>O.useContext(Tt),xt=(s,t)=>{(s.suspense||s.throwOnError)&&(t.isReset()||(s.retryOnMount=!1))},Lt=s=>{O.useEffect(()=>{s.clearReset()},[s])},At=({result:s,errorResetBoundary:t,throwOnError:e,query:i})=>s.isError&&!t.isReset()&&!s.isFetching&&i&&It(e,[s.error,i]),Bt=s=>{s.suspense&&typeof s.staleTime!="number"&&(s.staleTime=1e3)},jt=(s,t)=>(s==null?void 0:s.suspense)&&t.isPending,kt=(s,t,e)=>t.fetchOptimistic(s).catch(()=>{e.clearReset()});function Vt(s,t,e){if(typeof s!="object"||Array.isArray(s))throw new Error('Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object');const i=St(e),f=Qt(),u=Pt(),h=i.defaultQueryOptions(s);h._optimisticResults=f?"isRestoring":"optimistic",Bt(h),xt(h,u),Lt(u);const[d]=O.useState(()=>new t(i,h)),R=d.getOptimisticResult(h);if(O.useSyncExternalStore(O.useCallback(I=>{const c=f?()=>{}:d.subscribe(gt.batchCalls(I));return d.updateResult(),c},[d,f]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),O.useEffect(()=>{d.setOptions(h,{listeners:!1})},[h,d]),jt(h,R))throw kt(h,d,u);if(At({result:R,errorResetBoundary:u,throwOnError:h.throwOnError,query:i.getQueryCache().get(h.queryHash)}))throw R.error;return h.notifyOnChangeProps?R:d.trackResult(R)}function Nt(s,t){return Vt(s,Ft,t)}export{Nt as u};
