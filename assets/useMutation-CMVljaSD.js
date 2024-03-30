var g=(r,t,s)=>{if(!t.has(r))throw TypeError("Cannot "+s)};var e=(r,t,s)=>(g(r,t,"read from private field"),s?s.call(r):t.get(r)),l=(r,t,s)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,s)},d=(r,t,s,i)=>(g(r,t,"write to private field"),i?i.call(r,s):t.set(r,s),s);var p=(r,t,s)=>(g(r,t,"access private method"),s);import{S as U,s as k,x as w,y as q,q as R,v as L,r as f}from"./index-BfH-S7tZ.js";import{n as j,s as A}from"./api-client-qBA4DTQv.js";var n,a,o,h,m,S,v,C,K,D=(K=class extends U{constructor(t,s){super();l(this,m);l(this,v);l(this,n,void 0);l(this,a,void 0);l(this,o,void 0);l(this,h,void 0);d(this,n,t),this.setOptions(s),this.bindMethods(),p(this,m,S).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var i;const s=this.options;this.options=e(this,n).defaultMutationOptions(t),k(this.options,s)||e(this,n).getMutationCache().notify({type:"observerOptionsUpdated",mutation:e(this,o),observer:this}),s!=null&&s.mutationKey&&this.options.mutationKey&&w(s.mutationKey)!==w(this.options.mutationKey)?this.reset():(i=e(this,o))==null||i.setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=e(this,o))==null||t.removeObserver(this)}onMutationUpdate(t){p(this,m,S).call(this),p(this,v,C).call(this,t)}getCurrentResult(){return e(this,a)}reset(){var t;(t=e(this,o))==null||t.removeObserver(this),d(this,o,void 0),p(this,m,S).call(this),p(this,v,C).call(this)}mutate(t,s){var i;return d(this,h,s),(i=e(this,o))==null||i.removeObserver(this),d(this,o,e(this,n).getMutationCache().build(e(this,n),this.options)),e(this,o).addObserver(this),e(this,o).execute(t)}},n=new WeakMap,a=new WeakMap,o=new WeakMap,h=new WeakMap,m=new WeakSet,S=function(){var s;const t=((s=e(this,o))==null?void 0:s.state)??q();d(this,a,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},v=new WeakSet,C=function(t){R.batch(()=>{var s,i,u,y,c,O,E,x;if(e(this,h)&&this.hasListeners()){const b=e(this,a).variables,M=e(this,a).context;(t==null?void 0:t.type)==="success"?((i=(s=e(this,h)).onSuccess)==null||i.call(s,t.data,b,M),(y=(u=e(this,h)).onSettled)==null||y.call(u,t.data,null,b,M)):(t==null?void 0:t.type)==="error"&&((O=(c=e(this,h)).onError)==null||O.call(c,t.error,b,M),(x=(E=e(this,h)).onSettled)==null||x.call(E,void 0,t.error,b,M))}this.listeners.forEach(b=>{b(e(this,a))})})},K);function T(r,t){const s=L(t),[i]=f.useState(()=>new D(s,r));f.useEffect(()=>{i.setOptions(r)},[i,r]);const u=f.useSyncExternalStore(f.useCallback(c=>i.subscribe(R.batchCalls(c)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),y=f.useCallback((c,O)=>{i.mutate(c,O).catch(j)},[i]);if(u.error&&A(i.options.throwOnError,[u.error]))throw u.error;return{...u,mutate:y,mutateAsync:u.mutate}}export{T as u};
