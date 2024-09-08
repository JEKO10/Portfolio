(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Bp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Dp(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var o=[null];o.push.apply(o,arguments);var i=Function.bind.apply(t,o);return new i}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var Jr={},Qp={get exports(){return Jr},set exports(e){Jr=e}},bi={},Y={},Pp={get exports(){return Y},set exports(e){Y=e}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ho=Symbol.for("react.element"),Rp=Symbol.for("react.portal"),Mp=Symbol.for("react.fragment"),bp=Symbol.for("react.strict_mode"),Op=Symbol.for("react.profiler"),Tp=Symbol.for("react.provider"),Up=Symbol.for("react.context"),jp=Symbol.for("react.forward_ref"),zp=Symbol.for("react.suspense"),Kp=Symbol.for("react.memo"),Lp=Symbol.for("react.lazy"),$s=Symbol.iterator;function Np(e){return e===null||typeof e!="object"?null:(e=$s&&e[$s]||e["@@iterator"],typeof e=="function"?e:null)}var bA={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},OA=Object.assign,TA={};function hr(e,t,n){this.props=e,this.context=t,this.refs=TA,this.updater=n||bA}hr.prototype.isReactComponent={};hr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function UA(){}UA.prototype=hr.prototype;function Za(e,t,n){this.props=e,this.context=t,this.refs=TA,this.updater=n||bA}var Ha=Za.prototype=new UA;Ha.constructor=Za;OA(Ha,hr.prototype);Ha.isPureReactComponent=!0;var _s=Array.isArray,jA=Object.prototype.hasOwnProperty,Wa={current:null},zA={key:!0,ref:!0,__self:!0,__source:!0};function KA(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)jA.call(t,r)&&!zA.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:ho,type:e,key:i,ref:l,props:o,_owner:Wa.current}}function Gp(e,t){return{$$typeof:ho,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Va(e){return typeof e=="object"&&e!==null&&e.$$typeof===ho}function Fp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var eu=/\/+/g;function dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Fp(""+e.key):t.toString(36)}function Fo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ho:case Rp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+dl(l,0):r,_s(o)?(n="",e!=null&&(n=e.replace(eu,"$&/")+"/"),Fo(o,t,n,"",function(u){return u})):o!=null&&(Va(o)&&(o=Gp(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(eu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",_s(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+dl(i,a);l+=Fo(i,t,n,s,o)}else if(s=Np(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+dl(i,a++),l+=Fo(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function So(e,t,n){if(e==null)return e;var r=[],o=0;return Fo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Yp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var He={current:null},Yo={transition:null},Jp={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:Yo,ReactCurrentOwner:Wa};X.Children={map:So,forEach:function(e,t,n){So(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return So(e,function(){t++}),t},toArray:function(e){return So(e,function(t){return t})||[]},only:function(e){if(!Va(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=hr;X.Fragment=Mp;X.Profiler=Op;X.PureComponent=Za;X.StrictMode=bp;X.Suspense=zp;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jp;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=OA({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Wa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)jA.call(t,s)&&!zA.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ho,type:e.type,key:o,ref:i,props:r,_owner:l}};X.createContext=function(e){return e={$$typeof:Up,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tp,_context:e},e.Consumer=e};X.createElement=KA;X.createFactory=function(e){var t=KA.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:jp,render:e}};X.isValidElement=Va;X.lazy=function(e){return{$$typeof:Lp,_payload:{_status:-1,_result:e},_init:Yp}};X.memo=function(e,t){return{$$typeof:Kp,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=Yo.transition;Yo.transition={};try{e()}finally{Yo.transition=t}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(e,t){return He.current.useCallback(e,t)};X.useContext=function(e){return He.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return He.current.useDeferredValue(e)};X.useEffect=function(e,t){return He.current.useEffect(e,t)};X.useId=function(){return He.current.useId()};X.useImperativeHandle=function(e,t,n){return He.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return He.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return He.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return He.current.useMemo(e,t)};X.useReducer=function(e,t,n){return He.current.useReducer(e,t,n)};X.useRef=function(e){return He.current.useRef(e)};X.useState=function(e){return He.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return He.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return He.current.useTransition()};X.version="18.2.0";(function(e){e.exports=X})(Pp);const Tn=Bp(Y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp=Y,Hp=Symbol.for("react.element"),Wp=Symbol.for("react.fragment"),Vp=Object.prototype.hasOwnProperty,Xp=Zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qp={key:!0,ref:!0,__self:!0,__source:!0};function LA(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Vp.call(t,r)&&!qp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Hp,type:e,key:i,ref:l,props:o,_owner:Xp.current}}bi.Fragment=Wp;bi.jsx=LA;bi.jsxs=LA;(function(e){e.exports=bi})(Qp);const Tt=Jr.Fragment,x=Jr.jsx,W=Jr.jsxs;var Jl={},Zr={},$p={get exports(){return Zr},set exports(e){Zr=e}},at={},Zl={},_p={get exports(){return Zl},set exports(e){Zl=e}},NA={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(Q,N){var K=Q.length;Q.push(N);e:for(;0<K;){var te=K-1>>>1,g=Q[te];if(0<o(g,N))Q[te]=N,Q[K]=g,K=te;else break e}}function n(Q){return Q.length===0?null:Q[0]}function r(Q){if(Q.length===0)return null;var N=Q[0],K=Q.pop();if(K!==N){Q[0]=K;e:for(var te=0,g=Q.length,y=g>>>1;te<y;){var v=2*(te+1)-1,C=Q[v],f=v+1,P=Q[f];if(0>o(C,K))f<g&&0>o(P,C)?(Q[te]=P,Q[f]=K,te=f):(Q[te]=C,Q[v]=K,te=v);else if(f<g&&0>o(P,K))Q[te]=P,Q[f]=K,te=f;else break e}}return N}function o(Q,N){var K=Q.sortIndex-N.sortIndex;return K!==0?K:Q.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],m=1,h=null,p=3,w=!1,S=!1,E=!1,M=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(Q){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=Q)r(u),N.sortIndex=N.expirationTime,t(s,N);else break;N=n(u)}}function k(Q){if(E=!1,d(Q),!S)if(n(s)!==null)S=!0,mt(B);else{var N=n(u);N!==null&&ae(k,N.startTime-Q)}}function B(Q,N){S=!1,E&&(E=!1,c(O),O=-1),w=!0;var K=p;try{for(d(N),h=n(s);h!==null&&(!(h.expirationTime>N)||Q&&!me());){var te=h.callback;if(typeof te=="function"){h.callback=null,p=h.priorityLevel;var g=te(h.expirationTime<=N);N=e.unstable_now(),typeof g=="function"?h.callback=g:h===n(s)&&r(s),d(N)}else r(s);h=n(s)}if(h!==null)var y=!0;else{var v=n(u);v!==null&&ae(k,v.startTime-N),y=!1}return y}finally{h=null,p=K,w=!1}}var R=!1,b=null,O=-1,_=5,J=-1;function me(){return!(e.unstable_now()-J<_)}function ye(){if(b!==null){var Q=e.unstable_now();J=Q;var N=!0;try{N=b(!0,Q)}finally{N?Ie():(R=!1,b=null)}}else R=!1}var Ie;if(typeof A=="function")Ie=function(){A(ye)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,Re=Te.port2;Te.port1.onmessage=ye,Ie=function(){Re.postMessage(null)}}else Ie=function(){M(ye,0)};function mt(Q){b=Q,R||(R=!0,Ie())}function ae(Q,N){O=M(function(){Q(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Q){Q.callback=null},e.unstable_continueExecution=function(){S||w||(S=!0,mt(B))},e.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<Q?Math.floor(1e3/Q):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(Q){switch(p){case 1:case 2:case 3:var N=3;break;default:N=p}var K=p;p=N;try{return Q()}finally{p=K}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(Q,N){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var K=p;p=Q;try{return N()}finally{p=K}},e.unstable_scheduleCallback=function(Q,N,K){var te=e.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?te+K:te):K=te,Q){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=K+g,Q={id:m++,callback:N,priorityLevel:Q,startTime:K,expirationTime:g,sortIndex:-1},K>te?(Q.sortIndex=K,t(u,Q),n(s)===null&&Q===n(u)&&(E?(c(O),O=-1):E=!0,ae(k,K-te))):(Q.sortIndex=g,t(s,Q),S||w||(S=!0,mt(B))),Q},e.unstable_shouldYield=me,e.unstable_wrapCallback=function(Q){var N=p;return function(){var K=p;p=N;try{return Q.apply(this,arguments)}finally{p=K}}}})(NA);(function(e){e.exports=NA})(_p);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GA=Y,lt=Zl;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var FA=new Set,Hr={};function Un(e,t){ar(e,t),ar(e+"Capture",t)}function ar(e,t){for(Hr[e]=t,e=0;e<t.length;e++)FA.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hl=Object.prototype.hasOwnProperty,ed=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tu={},nu={};function td(e){return Hl.call(nu,e)?!0:Hl.call(tu,e)?!1:ed.test(e)?nu[e]=!0:(tu[e]=!0,!1)}function nd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function rd(e,t,n,r){if(t===null||typeof t>"u"||nd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xa=/[\-:]([a-z])/g;function qa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xa,qa);ze[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xa,qa);ze[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xa,qa);ze[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function $a(e,t,n,r){var o=ze.hasOwnProperty(t)?ze[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(rd(t,n,o,r)&&(n=null),r||o===null?td(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=GA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ko=Symbol.for("react.element"),Nn=Symbol.for("react.portal"),Gn=Symbol.for("react.fragment"),_a=Symbol.for("react.strict_mode"),Wl=Symbol.for("react.profiler"),YA=Symbol.for("react.provider"),JA=Symbol.for("react.context"),es=Symbol.for("react.forward_ref"),Vl=Symbol.for("react.suspense"),Xl=Symbol.for("react.suspense_list"),ts=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),ZA=Symbol.for("react.offscreen"),ru=Symbol.iterator;function xr(e){return e===null||typeof e!="object"?null:(e=ru&&e[ru]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,hl;function Pr(e){if(hl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hl=t&&t[1]||""}return`
`+hl+e}var gl=!1;function ml(e,t){if(!e||gl)return"";gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{gl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pr(e):""}function od(e){switch(e.tag){case 5:return Pr(e.type);case 16:return Pr("Lazy");case 13:return Pr("Suspense");case 19:return Pr("SuspenseList");case 0:case 2:case 15:return e=ml(e.type,!1),e;case 11:return e=ml(e.type.render,!1),e;case 1:return e=ml(e.type,!0),e;default:return""}}function ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gn:return"Fragment";case Nn:return"Portal";case Wl:return"Profiler";case _a:return"StrictMode";case Vl:return"Suspense";case Xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case JA:return(e.displayName||"Context")+".Consumer";case YA:return(e._context.displayName||"Context")+".Provider";case es:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ts:return t=e.displayName||null,t!==null?t:ql(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return ql(e(t))}catch{}}return null}function id(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ql(t);case 8:return t===_a?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function HA(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ld(e){var t=HA(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Co(e){e._valueTracker||(e._valueTracker=ld(e))}function WA(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=HA(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $l(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ou(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=hn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function VA(e,t){t=t.checked,t!=null&&$a(e,"checked",t,!1)}function _l(e,t){VA(e,t);var n=hn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ea(e,t.type,n):t.hasOwnProperty("defaultValue")&&ea(e,t.type,hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function iu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ea(e,t,n){(t!=="number"||ni(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rr=Array.isArray;function tr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+hn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ta(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(Rr(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hn(n)}}function XA(e,t){var n=hn(t.value),r=hn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function au(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qA(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function na(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qA(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Eo,$A=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Eo=Eo||document.createElement("div"),Eo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Eo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ad=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(e){ad.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Or[t]=Or[e]})});function _A(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Or.hasOwnProperty(e)&&Or[e]?(""+t).trim():t+"px"}function ec(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=_A(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var sd=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ra(e,t){if(t){if(sd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function oa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ia=null;function ns(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var la=null,nr=null,rr=null;function su(e){if(e=yo(e)){if(typeof la!="function")throw Error(D(280));var t=e.stateNode;t&&(t=zi(t),la(e.stateNode,e.type,t))}}function tc(e){nr?rr?rr.push(e):rr=[e]:nr=e}function nc(){if(nr){var e=nr,t=rr;if(rr=nr=null,su(e),t)for(e=0;e<t.length;e++)su(t[e])}}function rc(e,t){return e(t)}function oc(){}var yl=!1;function ic(e,t,n){if(yl)return e(t,n);yl=!0;try{return rc(e,t,n)}finally{yl=!1,(nr!==null||rr!==null)&&(oc(),nc())}}function Vr(e,t){var n=e.stateNode;if(n===null)return null;var r=zi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var aa=!1;if(Ft)try{var Sr={};Object.defineProperty(Sr,"passive",{get:function(){aa=!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{aa=!1}function ud(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var Tr=!1,ri=null,oi=!1,sa=null,Ad={onError:function(e){Tr=!0,ri=e}};function cd(e,t,n,r,o,i,l,a,s){Tr=!1,ri=null,ud.apply(Ad,arguments)}function fd(e,t,n,r,o,i,l,a,s){if(cd.apply(this,arguments),Tr){if(Tr){var u=ri;Tr=!1,ri=null}else throw Error(D(198));oi||(oi=!0,sa=u)}}function jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uu(e){if(jn(e)!==e)throw Error(D(188))}function pd(e){var t=e.alternate;if(!t){if(t=jn(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return uu(o),e;if(i===r)return uu(o),t;i=i.sibling}throw Error(D(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function ac(e){return e=pd(e),e!==null?sc(e):null}function sc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sc(e);if(t!==null)return t;e=e.sibling}return null}var uc=lt.unstable_scheduleCallback,Au=lt.unstable_cancelCallback,dd=lt.unstable_shouldYield,hd=lt.unstable_requestPaint,xe=lt.unstable_now,gd=lt.unstable_getCurrentPriorityLevel,rs=lt.unstable_ImmediatePriority,Ac=lt.unstable_UserBlockingPriority,ii=lt.unstable_NormalPriority,md=lt.unstable_LowPriority,cc=lt.unstable_IdlePriority,Oi=null,Mt=null;function yd(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Oi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:xd,vd=Math.log,wd=Math.LN2;function xd(e){return e>>>=0,e===0?32:31-(vd(e)/wd|0)|0}var Io=64,Bo=4194304;function Mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function li(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Mr(a):(i&=l,i!==0&&(r=Mr(i)))}else l=n&~o,l!==0?r=Mr(l):i!==0&&(r=Mr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ct(t),o=1<<n,r|=e[n],t&=~o;return r}function Sd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ct(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=Sd(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function ua(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fc(){var e=Io;return Io<<=1,!(Io&4194240)&&(Io=64),e}function vl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function go(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ct(t),e[t]=n}function Cd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ct(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function os(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ct(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ne=0;function pc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dc,is,hc,gc,mc,Aa=!1,Do=[],ln=null,an=null,sn=null,Xr=new Map,qr=new Map,tn=[],Ed="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cu(e,t){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":Xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qr.delete(t.pointerId)}}function kr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=yo(t),t!==null&&is(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Id(e,t,n,r,o){switch(t){case"focusin":return ln=kr(ln,e,t,n,r,o),!0;case"dragenter":return an=kr(an,e,t,n,r,o),!0;case"mouseover":return sn=kr(sn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Xr.set(i,kr(Xr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,qr.set(i,kr(qr.get(i)||null,e,t,n,r,o)),!0}return!1}function yc(e){var t=Cn(e.target);if(t!==null){var n=jn(t);if(n!==null){if(t=n.tag,t===13){if(t=lc(n),t!==null){e.blockedOn=t,mc(e.priority,function(){hc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ca(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ia=r,n.target.dispatchEvent(r),ia=null}else return t=yo(n),t!==null&&is(t),e.blockedOn=n,!1;t.shift()}return!0}function fu(e,t,n){Jo(e)&&n.delete(t)}function Bd(){Aa=!1,ln!==null&&Jo(ln)&&(ln=null),an!==null&&Jo(an)&&(an=null),sn!==null&&Jo(sn)&&(sn=null),Xr.forEach(fu),qr.forEach(fu)}function Cr(e,t){e.blockedOn===t&&(e.blockedOn=null,Aa||(Aa=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,Bd)))}function $r(e){function t(o){return Cr(o,e)}if(0<Do.length){Cr(Do[0],e);for(var n=1;n<Do.length;n++){var r=Do[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ln!==null&&Cr(ln,e),an!==null&&Cr(an,e),sn!==null&&Cr(sn,e),Xr.forEach(t),qr.forEach(t),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)yc(n),n.blockedOn===null&&tn.shift()}var or=Ht.ReactCurrentBatchConfig,ai=!0;function Dd(e,t,n,r){var o=ne,i=or.transition;or.transition=null;try{ne=1,ls(e,t,n,r)}finally{ne=o,or.transition=i}}function Qd(e,t,n,r){var o=ne,i=or.transition;or.transition=null;try{ne=4,ls(e,t,n,r)}finally{ne=o,or.transition=i}}function ls(e,t,n,r){if(ai){var o=ca(e,t,n,r);if(o===null)Ql(e,t,r,si,n),cu(e,r);else if(Id(o,e,t,n,r))r.stopPropagation();else if(cu(e,r),t&4&&-1<Ed.indexOf(e)){for(;o!==null;){var i=yo(o);if(i!==null&&dc(i),i=ca(e,t,n,r),i===null&&Ql(e,t,r,si,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ql(e,t,r,null,n)}}var si=null;function ca(e,t,n,r){if(si=null,e=ns(r),e=Cn(e),e!==null)if(t=jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return si=e,null}function vc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gd()){case rs:return 1;case Ac:return 4;case ii:case md:return 16;case cc:return 536870912;default:return 16}default:return 16}}var rn=null,as=null,Zo=null;function wc(){if(Zo)return Zo;var e,t=as,n=t.length,r,o="value"in rn?rn.value:rn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Zo=o.slice(e,1<r?1-r:void 0)}function Ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qo(){return!0}function pu(){return!1}function st(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Qo:pu,this.isPropagationStopped=pu,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),t}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ss=st(gr),mo=fe({},gr,{view:0,detail:0}),Pd=st(mo),wl,xl,Er,Ti=fe({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Er&&(Er&&e.type==="mousemove"?(wl=e.screenX-Er.screenX,xl=e.screenY-Er.screenY):xl=wl=0,Er=e),wl)},movementY:function(e){return"movementY"in e?e.movementY:xl}}),du=st(Ti),Rd=fe({},Ti,{dataTransfer:0}),Md=st(Rd),bd=fe({},mo,{relatedTarget:0}),Sl=st(bd),Od=fe({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Td=st(Od),Ud=fe({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jd=st(Ud),zd=fe({},gr,{data:0}),hu=st(zd),Kd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ld={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nd[e])?!!t[e]:!1}function us(){return Gd}var Fd=fe({},mo,{key:function(e){if(e.key){var t=Kd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ld[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:us,charCode:function(e){return e.type==="keypress"?Ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yd=st(Fd),Jd=fe({},Ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=st(Jd),Zd=fe({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:us}),Hd=st(Zd),Wd=fe({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vd=st(Wd),Xd=fe({},Ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qd=st(Xd),$d=[9,13,27,32],As=Ft&&"CompositionEvent"in window,Ur=null;Ft&&"documentMode"in document&&(Ur=document.documentMode);var _d=Ft&&"TextEvent"in window&&!Ur,xc=Ft&&(!As||Ur&&8<Ur&&11>=Ur),mu=String.fromCharCode(32),yu=!1;function Sc(e,t){switch(e){case"keyup":return $d.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function eh(e,t){switch(e){case"compositionend":return kc(t);case"keypress":return t.which!==32?null:(yu=!0,mu);case"textInput":return e=t.data,e===mu&&yu?null:e;default:return null}}function th(e,t){if(Fn)return e==="compositionend"||!As&&Sc(e,t)?(e=wc(),Zo=as=rn=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xc&&t.locale!=="ko"?null:t.data;default:return null}}var nh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!nh[e.type]:t==="textarea"}function Cc(e,t,n,r){tc(r),t=ui(t,"onChange"),0<t.length&&(n=new ss("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var jr=null,_r=null;function rh(e){Tc(e,0)}function Ui(e){var t=Zn(e);if(WA(t))return e}function oh(e,t){if(e==="change")return t}var Ec=!1;if(Ft){var kl;if(Ft){var Cl="oninput"in document;if(!Cl){var wu=document.createElement("div");wu.setAttribute("oninput","return;"),Cl=typeof wu.oninput=="function"}kl=Cl}else kl=!1;Ec=kl&&(!document.documentMode||9<document.documentMode)}function xu(){jr&&(jr.detachEvent("onpropertychange",Ic),_r=jr=null)}function Ic(e){if(e.propertyName==="value"&&Ui(_r)){var t=[];Cc(t,_r,e,ns(e)),ic(rh,t)}}function ih(e,t,n){e==="focusin"?(xu(),jr=t,_r=n,jr.attachEvent("onpropertychange",Ic)):e==="focusout"&&xu()}function lh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ui(_r)}function ah(e,t){if(e==="click")return Ui(t)}function sh(e,t){if(e==="input"||e==="change")return Ui(t)}function uh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:uh;function eo(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Hl.call(t,o)||!It(e[o],t[o]))return!1}return!0}function Su(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ku(e,t){var n=Su(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Su(n)}}function Bc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dc(){for(var e=window,t=ni();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ni(e.document)}return t}function cs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ah(e){var t=Dc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bc(n.ownerDocument.documentElement,n)){if(r!==null&&cs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ku(n,i);var l=ku(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ch=Ft&&"documentMode"in document&&11>=document.documentMode,Yn=null,fa=null,zr=null,pa=!1;function Cu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pa||Yn==null||Yn!==ni(r)||(r=Yn,"selectionStart"in r&&cs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&eo(zr,r)||(zr=r,r=ui(fa,"onSelect"),0<r.length&&(t=new ss("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yn)))}function Po(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jn={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},El={},Qc={};Ft&&(Qc=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function ji(e){if(El[e])return El[e];if(!Jn[e])return e;var t=Jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qc)return El[e]=t[n];return e}var Pc=ji("animationend"),Rc=ji("animationiteration"),Mc=ji("animationstart"),bc=ji("transitionend"),Oc=new Map,Eu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,t){Oc.set(e,t),Un(t,[e])}for(var Il=0;Il<Eu.length;Il++){var Bl=Eu[Il],fh=Bl.toLowerCase(),ph=Bl[0].toUpperCase()+Bl.slice(1);mn(fh,"on"+ph)}mn(Pc,"onAnimationEnd");mn(Rc,"onAnimationIteration");mn(Mc,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(bc,"onTransitionEnd");ar("onMouseEnter",["mouseout","mouseover"]);ar("onMouseLeave",["mouseout","mouseover"]);ar("onPointerEnter",["pointerout","pointerover"]);ar("onPointerLeave",["pointerout","pointerover"]);Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Un("onBeforeInput",["compositionend","keypress","textInput","paste"]);Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dh=new Set("cancel close invalid load scroll toggle".split(" ").concat(br));function Iu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,fd(r,t,void 0,e),e.currentTarget=null}function Tc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Iu(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Iu(o,a,u),i=s}}}if(oi)throw e=sa,oi=!1,sa=null,e}function ie(e,t){var n=t[ya];n===void 0&&(n=t[ya]=new Set);var r=e+"__bubble";n.has(r)||(Uc(t,e,2,!1),n.add(r))}function Dl(e,t,n){var r=0;t&&(r|=4),Uc(n,e,r,t)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function to(e){if(!e[Ro]){e[Ro]=!0,FA.forEach(function(n){n!=="selectionchange"&&(dh.has(n)||Dl(n,!1,e),Dl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ro]||(t[Ro]=!0,Dl("selectionchange",!1,t))}}function Uc(e,t,n,r){switch(vc(t)){case 1:var o=Dd;break;case 4:o=Qd;break;default:o=ls}n=o.bind(null,t,n,e),o=void 0,!aa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ql(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Cn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}ic(function(){var u=i,m=ns(n),h=[];e:{var p=Oc.get(e);if(p!==void 0){var w=ss,S=e;switch(e){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":w=Yd;break;case"focusin":S="focus",w=Sl;break;case"focusout":S="blur",w=Sl;break;case"beforeblur":case"afterblur":w=Sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=du;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Md;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Hd;break;case Pc:case Rc:case Mc:w=Td;break;case bc:w=Vd;break;case"scroll":w=Pd;break;case"wheel":w=qd;break;case"copy":case"cut":case"paste":w=jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=gu}var E=(t&4)!==0,M=!E&&e==="scroll",c=E?p!==null?p+"Capture":null:p;E=[];for(var A=u,d;A!==null;){d=A;var k=d.stateNode;if(d.tag===5&&k!==null&&(d=k,c!==null&&(k=Vr(A,c),k!=null&&E.push(no(A,k,d)))),M)break;A=A.return}0<E.length&&(p=new w(p,S,null,n,m),h.push({event:p,listeners:E}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==ia&&(S=n.relatedTarget||n.fromElement)&&(Cn(S)||S[Yt]))break e;if((w||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,w?(S=n.relatedTarget||n.toElement,w=u,S=S?Cn(S):null,S!==null&&(M=jn(S),S!==M||S.tag!==5&&S.tag!==6)&&(S=null)):(w=null,S=u),w!==S)){if(E=du,k="onMouseLeave",c="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(E=gu,k="onPointerLeave",c="onPointerEnter",A="pointer"),M=w==null?p:Zn(w),d=S==null?p:Zn(S),p=new E(k,A+"leave",w,n,m),p.target=M,p.relatedTarget=d,k=null,Cn(m)===u&&(E=new E(c,A+"enter",S,n,m),E.target=d,E.relatedTarget=M,k=E),M=k,w&&S)t:{for(E=w,c=S,A=0,d=E;d;d=Ln(d))A++;for(d=0,k=c;k;k=Ln(k))d++;for(;0<A-d;)E=Ln(E),A--;for(;0<d-A;)c=Ln(c),d--;for(;A--;){if(E===c||c!==null&&E===c.alternate)break t;E=Ln(E),c=Ln(c)}E=null}else E=null;w!==null&&Bu(h,p,w,E,!1),S!==null&&M!==null&&Bu(h,M,S,E,!0)}}e:{if(p=u?Zn(u):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var B=oh;else if(vu(p))if(Ec)B=sh;else{B=lh;var R=ih}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(B=ah);if(B&&(B=B(e,u))){Cc(h,B,n,m);break e}R&&R(e,p,u),e==="focusout"&&(R=p._wrapperState)&&R.controlled&&p.type==="number"&&ea(p,"number",p.value)}switch(R=u?Zn(u):window,e){case"focusin":(vu(R)||R.contentEditable==="true")&&(Yn=R,fa=u,zr=null);break;case"focusout":zr=fa=Yn=null;break;case"mousedown":pa=!0;break;case"contextmenu":case"mouseup":case"dragend":pa=!1,Cu(h,n,m);break;case"selectionchange":if(ch)break;case"keydown":case"keyup":Cu(h,n,m)}var b;if(As)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Fn?Sc(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(xc&&n.locale!=="ko"&&(Fn||O!=="onCompositionStart"?O==="onCompositionEnd"&&Fn&&(b=wc()):(rn=m,as="value"in rn?rn.value:rn.textContent,Fn=!0)),R=ui(u,O),0<R.length&&(O=new hu(O,e,null,n,m),h.push({event:O,listeners:R}),b?O.data=b:(b=kc(n),b!==null&&(O.data=b)))),(b=_d?eh(e,n):th(e,n))&&(u=ui(u,"onBeforeInput"),0<u.length&&(m=new hu("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:u}),m.data=b))}Tc(h,t)})}function no(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ui(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Vr(e,n),i!=null&&r.unshift(no(e,i,o)),i=Vr(e,t),i!=null&&r.push(no(e,i,o))),e=e.return}return r}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Vr(n,i),s!=null&&l.unshift(no(n,s,a))):o||(s=Vr(n,i),s!=null&&l.push(no(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var hh=/\r\n?/g,gh=/\u0000|\uFFFD/g;function Du(e){return(typeof e=="string"?e:""+e).replace(hh,`
`).replace(gh,"")}function Mo(e,t,n){if(t=Du(t),Du(e)!==t&&n)throw Error(D(425))}function Ai(){}var da=null,ha=null;function ga(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ma=typeof setTimeout=="function"?setTimeout:void 0,mh=typeof clearTimeout=="function"?clearTimeout:void 0,Qu=typeof Promise=="function"?Promise:void 0,yh=typeof queueMicrotask=="function"?queueMicrotask:typeof Qu<"u"?function(e){return Qu.resolve(null).then(e).catch(vh)}:ma;function vh(e){setTimeout(function(){throw e})}function Pl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),$r(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);$r(t)}function un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mr=Math.random().toString(36).slice(2),Pt="__reactFiber$"+mr,ro="__reactProps$"+mr,Yt="__reactContainer$"+mr,ya="__reactEvents$"+mr,wh="__reactListeners$"+mr,xh="__reactHandles$"+mr;function Cn(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Yt]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pu(e);e!==null;){if(n=e[Pt])return n;e=Pu(e)}return t}e=n,n=e.parentNode}return null}function yo(e){return e=e[Pt]||e[Yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function zi(e){return e[ro]||null}var va=[],Hn=-1;function yn(e){return{current:e}}function le(e){0>Hn||(e.current=va[Hn],va[Hn]=null,Hn--)}function oe(e,t){Hn++,va[Hn]=e.current,e.current=t}var gn={},Ye=yn(gn),qe=yn(!1),Qn=gn;function sr(e,t){var n=e.type.contextTypes;if(!n)return gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function $e(e){return e=e.childContextTypes,e!=null}function ci(){le(qe),le(Ye)}function Ru(e,t,n){if(Ye.current!==gn)throw Error(D(168));oe(Ye,t),oe(qe,n)}function jc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(D(108,id(e)||"Unknown",o));return fe({},n,r)}function fi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gn,Qn=Ye.current,oe(Ye,e),oe(qe,qe.current),!0}function Mu(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=jc(e,t,Qn),r.__reactInternalMemoizedMergedChildContext=e,le(qe),le(Ye),oe(Ye,e)):le(qe),oe(qe,n)}var Kt=null,Ki=!1,Rl=!1;function zc(e){Kt===null?Kt=[e]:Kt.push(e)}function Sh(e){Ki=!0,zc(e)}function vn(){if(!Rl&&Kt!==null){Rl=!0;var e=0,t=ne;try{var n=Kt;for(ne=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Kt=null,Ki=!1}catch(o){throw Kt!==null&&(Kt=Kt.slice(e+1)),uc(rs,vn),o}finally{ne=t,Rl=!1}}return null}var Wn=[],Vn=0,pi=null,di=0,ct=[],ft=0,Pn=null,Lt=1,Nt="";function Sn(e,t){Wn[Vn++]=di,Wn[Vn++]=pi,pi=e,di=t}function Kc(e,t,n){ct[ft++]=Lt,ct[ft++]=Nt,ct[ft++]=Pn,Pn=e;var r=Lt;e=Nt;var o=32-Ct(r)-1;r&=~(1<<o),n+=1;var i=32-Ct(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Lt=1<<32-Ct(t)+o|n<<o|r,Nt=i+e}else Lt=1<<i|n<<o|r,Nt=e}function fs(e){e.return!==null&&(Sn(e,1),Kc(e,1,0))}function ps(e){for(;e===pi;)pi=Wn[--Vn],Wn[Vn]=null,di=Wn[--Vn],Wn[Vn]=null;for(;e===Pn;)Pn=ct[--ft],ct[ft]=null,Nt=ct[--ft],ct[ft]=null,Lt=ct[--ft],ct[ft]=null}var ot=null,rt=null,ue=!1,kt=null;function Lc(e,t){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,rt=un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:Lt,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,rt=null,!0):!1;default:return!1}}function wa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xa(e){if(ue){var t=rt;if(t){var n=t;if(!bu(e,t)){if(wa(e))throw Error(D(418));t=un(n.nextSibling);var r=ot;t&&bu(e,t)?Lc(r,n):(e.flags=e.flags&-4097|2,ue=!1,ot=e)}}else{if(wa(e))throw Error(D(418));e.flags=e.flags&-4097|2,ue=!1,ot=e}}}function Ou(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function bo(e){if(e!==ot)return!1;if(!ue)return Ou(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ga(e.type,e.memoizedProps)),t&&(t=rt)){if(wa(e))throw Nc(),Error(D(418));for(;t;)Lc(e,t),t=un(t.nextSibling)}if(Ou(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){rt=un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=ot?un(e.stateNode.nextSibling):null;return!0}function Nc(){for(var e=rt;e;)e=un(e.nextSibling)}function ur(){rt=ot=null,ue=!1}function ds(e){kt===null?kt=[e]:kt.push(e)}var kh=Ht.ReactCurrentBatchConfig;function xt(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var hi=yn(null),gi=null,Xn=null,hs=null;function gs(){hs=Xn=gi=null}function ms(e){var t=hi.current;le(hi),e._currentValue=t}function Sa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ir(e,t){gi=e,hs=Xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Xe=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(hs!==e)if(e={context:e,memoizedValue:t,next:null},Xn===null){if(gi===null)throw Error(D(308));Xn=e,gi.dependencies={lanes:0,firstContext:e}}else Xn=Xn.next=e;return t}var En=null;function ys(e){En===null?En=[e]:En.push(e)}function Gc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ys(t)):(n.next=o.next,o.next=n),t.interleaved=n,Jt(e,r)}function Jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function vs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function An(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Jt(e,n)}return o=r.interleaved,o===null?(t.next=t,ys(r)):(t.next=o.next,o.next=t),r.interleaved=t,Jt(e,n)}function Wo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,os(e,n)}}function Tu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function mi(e,t,n,r){var o=e.updateQueue;en=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=u:a.next=u,m.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;l=0,m=u=s=null,a=i;do{var p=a.lane,w=a.eventTime;if((r&p)===p){m!==null&&(m=m.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,E=a;switch(p=t,w=n,E.tag){case 1:if(S=E.payload,typeof S=="function"){h=S.call(w,h,p);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=E.payload,p=typeof S=="function"?S.call(w,h,p):S,p==null)break e;h=fe({},h,p);break e;case 2:en=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else w={eventTime:w,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(u=m=w,s=h):m=m.next=w,l|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(1);if(m===null&&(s=h),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Mn|=l,e.lanes=l,e.memoizedState=h}}function Uu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(D(191,o));o.call(r)}}}var Yc=new GA.Component().refs;function ka(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Li={isMounted:function(e){return(e=e._reactInternals)?jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ze(),o=fn(e),i=Gt(r,o);i.payload=t,n!=null&&(i.callback=n),t=An(e,i,o),t!==null&&(Et(t,e,o,r),Wo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ze(),o=fn(e),i=Gt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=An(e,i,o),t!==null&&(Et(t,e,o,r),Wo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),r=fn(e),o=Gt(n,r);o.tag=2,t!=null&&(o.callback=t),t=An(e,o,r),t!==null&&(Et(t,e,r,n),Wo(t,e,r))}};function ju(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!eo(n,r)||!eo(o,i):!0}function Jc(e,t,n){var r=!1,o=gn,i=t.contextType;return typeof i=="object"&&i!==null?i=ht(i):(o=$e(t)?Qn:Ye.current,r=t.contextTypes,i=(r=r!=null)?sr(e,o):gn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Li,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function zu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Li.enqueueReplaceState(t,t.state,null)}function Ca(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Yc,vs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ht(i):(i=$e(t)?Qn:Ye.current,o.context=sr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ka(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Li.enqueueReplaceState(o,o.state,null),mi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===Yc&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function Oo(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ku(e){var t=e._init;return t(e._payload)}function Zc(e){function t(c,A){if(e){var d=c.deletions;d===null?(c.deletions=[A],c.flags|=16):d.push(A)}}function n(c,A){if(!e)return null;for(;A!==null;)t(c,A),A=A.sibling;return null}function r(c,A){for(c=new Map;A!==null;)A.key!==null?c.set(A.key,A):c.set(A.index,A),A=A.sibling;return c}function o(c,A){return c=pn(c,A),c.index=0,c.sibling=null,c}function i(c,A,d){return c.index=d,e?(d=c.alternate,d!==null?(d=d.index,d<A?(c.flags|=2,A):d):(c.flags|=2,A)):(c.flags|=1048576,A)}function l(c){return e&&c.alternate===null&&(c.flags|=2),c}function a(c,A,d,k){return A===null||A.tag!==6?(A=zl(d,c.mode,k),A.return=c,A):(A=o(A,d),A.return=c,A)}function s(c,A,d,k){var B=d.type;return B===Gn?m(c,A,d.props.children,k,d.key):A!==null&&(A.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===_t&&Ku(B)===A.type)?(k=o(A,d.props),k.ref=Ir(c,A,d),k.return=c,k):(k=ei(d.type,d.key,d.props,null,c.mode,k),k.ref=Ir(c,A,d),k.return=c,k)}function u(c,A,d,k){return A===null||A.tag!==4||A.stateNode.containerInfo!==d.containerInfo||A.stateNode.implementation!==d.implementation?(A=Kl(d,c.mode,k),A.return=c,A):(A=o(A,d.children||[]),A.return=c,A)}function m(c,A,d,k,B){return A===null||A.tag!==7?(A=Dn(d,c.mode,k,B),A.return=c,A):(A=o(A,d),A.return=c,A)}function h(c,A,d){if(typeof A=="string"&&A!==""||typeof A=="number")return A=zl(""+A,c.mode,d),A.return=c,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ko:return d=ei(A.type,A.key,A.props,null,c.mode,d),d.ref=Ir(c,null,A),d.return=c,d;case Nn:return A=Kl(A,c.mode,d),A.return=c,A;case _t:var k=A._init;return h(c,k(A._payload),d)}if(Rr(A)||xr(A))return A=Dn(A,c.mode,d,null),A.return=c,A;Oo(c,A)}return null}function p(c,A,d,k){var B=A!==null?A.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return B!==null?null:a(c,A,""+d,k);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ko:return d.key===B?s(c,A,d,k):null;case Nn:return d.key===B?u(c,A,d,k):null;case _t:return B=d._init,p(c,A,B(d._payload),k)}if(Rr(d)||xr(d))return B!==null?null:m(c,A,d,k,null);Oo(c,d)}return null}function w(c,A,d,k,B){if(typeof k=="string"&&k!==""||typeof k=="number")return c=c.get(d)||null,a(A,c,""+k,B);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ko:return c=c.get(k.key===null?d:k.key)||null,s(A,c,k,B);case Nn:return c=c.get(k.key===null?d:k.key)||null,u(A,c,k,B);case _t:var R=k._init;return w(c,A,d,R(k._payload),B)}if(Rr(k)||xr(k))return c=c.get(d)||null,m(A,c,k,B,null);Oo(A,k)}return null}function S(c,A,d,k){for(var B=null,R=null,b=A,O=A=0,_=null;b!==null&&O<d.length;O++){b.index>O?(_=b,b=null):_=b.sibling;var J=p(c,b,d[O],k);if(J===null){b===null&&(b=_);break}e&&b&&J.alternate===null&&t(c,b),A=i(J,A,O),R===null?B=J:R.sibling=J,R=J,b=_}if(O===d.length)return n(c,b),ue&&Sn(c,O),B;if(b===null){for(;O<d.length;O++)b=h(c,d[O],k),b!==null&&(A=i(b,A,O),R===null?B=b:R.sibling=b,R=b);return ue&&Sn(c,O),B}for(b=r(c,b);O<d.length;O++)_=w(b,c,O,d[O],k),_!==null&&(e&&_.alternate!==null&&b.delete(_.key===null?O:_.key),A=i(_,A,O),R===null?B=_:R.sibling=_,R=_);return e&&b.forEach(function(me){return t(c,me)}),ue&&Sn(c,O),B}function E(c,A,d,k){var B=xr(d);if(typeof B!="function")throw Error(D(150));if(d=B.call(d),d==null)throw Error(D(151));for(var R=B=null,b=A,O=A=0,_=null,J=d.next();b!==null&&!J.done;O++,J=d.next()){b.index>O?(_=b,b=null):_=b.sibling;var me=p(c,b,J.value,k);if(me===null){b===null&&(b=_);break}e&&b&&me.alternate===null&&t(c,b),A=i(me,A,O),R===null?B=me:R.sibling=me,R=me,b=_}if(J.done)return n(c,b),ue&&Sn(c,O),B;if(b===null){for(;!J.done;O++,J=d.next())J=h(c,J.value,k),J!==null&&(A=i(J,A,O),R===null?B=J:R.sibling=J,R=J);return ue&&Sn(c,O),B}for(b=r(c,b);!J.done;O++,J=d.next())J=w(b,c,O,J.value,k),J!==null&&(e&&J.alternate!==null&&b.delete(J.key===null?O:J.key),A=i(J,A,O),R===null?B=J:R.sibling=J,R=J);return e&&b.forEach(function(ye){return t(c,ye)}),ue&&Sn(c,O),B}function M(c,A,d,k){if(typeof d=="object"&&d!==null&&d.type===Gn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case ko:e:{for(var B=d.key,R=A;R!==null;){if(R.key===B){if(B=d.type,B===Gn){if(R.tag===7){n(c,R.sibling),A=o(R,d.props.children),A.return=c,c=A;break e}}else if(R.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===_t&&Ku(B)===R.type){n(c,R.sibling),A=o(R,d.props),A.ref=Ir(c,R,d),A.return=c,c=A;break e}n(c,R);break}else t(c,R);R=R.sibling}d.type===Gn?(A=Dn(d.props.children,c.mode,k,d.key),A.return=c,c=A):(k=ei(d.type,d.key,d.props,null,c.mode,k),k.ref=Ir(c,A,d),k.return=c,c=k)}return l(c);case Nn:e:{for(R=d.key;A!==null;){if(A.key===R)if(A.tag===4&&A.stateNode.containerInfo===d.containerInfo&&A.stateNode.implementation===d.implementation){n(c,A.sibling),A=o(A,d.children||[]),A.return=c,c=A;break e}else{n(c,A);break}else t(c,A);A=A.sibling}A=Kl(d,c.mode,k),A.return=c,c=A}return l(c);case _t:return R=d._init,M(c,A,R(d._payload),k)}if(Rr(d))return S(c,A,d,k);if(xr(d))return E(c,A,d,k);Oo(c,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,A!==null&&A.tag===6?(n(c,A.sibling),A=o(A,d),A.return=c,c=A):(n(c,A),A=zl(d,c.mode,k),A.return=c,c=A),l(c)):n(c,A)}return M}var Ar=Zc(!0),Hc=Zc(!1),vo={},bt=yn(vo),oo=yn(vo),io=yn(vo);function In(e){if(e===vo)throw Error(D(174));return e}function ws(e,t){switch(oe(io,t),oe(oo,e),oe(bt,vo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:na(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=na(t,e)}le(bt),oe(bt,t)}function cr(){le(bt),le(oo),le(io)}function Wc(e){In(io.current);var t=In(bt.current),n=na(t,e.type);t!==n&&(oe(oo,e),oe(bt,n))}function xs(e){oo.current===e&&(le(bt),le(oo))}var Ae=yn(0);function yi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ml=[];function Ss(){for(var e=0;e<Ml.length;e++)Ml[e]._workInProgressVersionPrimary=null;Ml.length=0}var Vo=Ht.ReactCurrentDispatcher,bl=Ht.ReactCurrentBatchConfig,Rn=0,ce=null,De=null,Me=null,vi=!1,Kr=!1,lo=0,Ch=0;function Ke(){throw Error(D(321))}function ks(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function Cs(e,t,n,r,o,i){if(Rn=i,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vo.current=e===null||e.memoizedState===null?Dh:Qh,e=n(r,o),Kr){i=0;do{if(Kr=!1,lo=0,25<=i)throw Error(D(301));i+=1,Me=De=null,t.updateQueue=null,Vo.current=Ph,e=n(r,o)}while(Kr)}if(Vo.current=wi,t=De!==null&&De.next!==null,Rn=0,Me=De=ce=null,vi=!1,t)throw Error(D(300));return e}function Es(){var e=lo!==0;return lo=0,e}function Qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ce.memoizedState=Me=e:Me=Me.next=e,Me}function gt(){if(De===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Me===null?ce.memoizedState:Me.next;if(t!==null)Me=t,De=e;else{if(e===null)throw Error(D(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Me===null?ce.memoizedState=Me=e:Me=Me.next=e}return Me}function ao(e,t){return typeof t=="function"?t(e):t}function Ol(e){var t=gt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=De,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var m=u.lane;if((Rn&m)===m)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,ce.lanes|=m,Mn|=m}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,It(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ce.lanes|=i,Mn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Tl(e){var t=gt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);It(i,t.memoizedState)||(Xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Vc(){}function Xc(e,t){var n=ce,r=gt(),o=t(),i=!It(r.memoizedState,o);if(i&&(r.memoizedState=o,Xe=!0),r=r.queue,Is(_c.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,so(9,$c.bind(null,n,r,o,t),void 0,null),be===null)throw Error(D(349));Rn&30||qc(n,t,o)}return o}function qc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $c(e,t,n,r){t.value=n,t.getSnapshot=r,ef(t)&&tf(e)}function _c(e,t,n){return n(function(){ef(t)&&tf(e)})}function ef(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function tf(e){var t=Jt(e,1);t!==null&&Et(t,e,1,-1)}function Lu(e){var t=Qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ao,lastRenderedState:e},t.queue=e,e=e.dispatch=Bh.bind(null,ce,e),[t.memoizedState,e]}function so(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nf(){return gt().memoizedState}function Xo(e,t,n,r){var o=Qt();ce.flags|=e,o.memoizedState=so(1|t,n,void 0,r===void 0?null:r)}function Ni(e,t,n,r){var o=gt();r=r===void 0?null:r;var i=void 0;if(De!==null){var l=De.memoizedState;if(i=l.destroy,r!==null&&ks(r,l.deps)){o.memoizedState=so(t,n,i,r);return}}ce.flags|=e,o.memoizedState=so(1|t,n,i,r)}function Nu(e,t){return Xo(8390656,8,e,t)}function Is(e,t){return Ni(2048,8,e,t)}function rf(e,t){return Ni(4,2,e,t)}function of(e,t){return Ni(4,4,e,t)}function lf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function af(e,t,n){return n=n!=null?n.concat([e]):null,Ni(4,4,lf.bind(null,t,e),n)}function Bs(){}function sf(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ks(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function uf(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ks(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Af(e,t,n){return Rn&21?(It(n,t)||(n=fc(),ce.lanes|=n,Mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=n)}function Eh(e,t){var n=ne;ne=n!==0&&4>n?n:4,e(!0);var r=bl.transition;bl.transition={};try{e(!1),t()}finally{ne=n,bl.transition=r}}function cf(){return gt().memoizedState}function Ih(e,t,n){var r=fn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ff(e))pf(t,n);else if(n=Gc(e,t,n,r),n!==null){var o=Ze();Et(n,e,r,o),df(n,t,r)}}function Bh(e,t,n){var r=fn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ff(e))pf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,It(a,l)){var s=t.interleaved;s===null?(o.next=o,ys(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Gc(e,t,o,r),n!==null&&(o=Ze(),Et(n,e,r,o),df(n,t,r))}}function ff(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function pf(e,t){Kr=vi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function df(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,os(e,n)}}var wi={readContext:ht,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},Dh={readContext:ht,useCallback:function(e,t){return Qt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:Nu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xo(4194308,4,lf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xo(4,2,e,t)},useMemo:function(e,t){var n=Qt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ih.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=Qt();return e={current:e},t.memoizedState=e},useState:Lu,useDebugValue:Bs,useDeferredValue:function(e){return Qt().memoizedState=e},useTransition:function(){var e=Lu(!1),t=e[0];return e=Eh.bind(null,e[1]),Qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,o=Qt();if(ue){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),be===null)throw Error(D(349));Rn&30||qc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Nu(_c.bind(null,r,i,e),[e]),r.flags|=2048,so(9,$c.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Qt(),t=be.identifierPrefix;if(ue){var n=Nt,r=Lt;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=lo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ch++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qh={readContext:ht,useCallback:sf,useContext:ht,useEffect:Is,useImperativeHandle:af,useInsertionEffect:rf,useLayoutEffect:of,useMemo:uf,useReducer:Ol,useRef:nf,useState:function(){return Ol(ao)},useDebugValue:Bs,useDeferredValue:function(e){var t=gt();return Af(t,De.memoizedState,e)},useTransition:function(){var e=Ol(ao)[0],t=gt().memoizedState;return[e,t]},useMutableSource:Vc,useSyncExternalStore:Xc,useId:cf,unstable_isNewReconciler:!1},Ph={readContext:ht,useCallback:sf,useContext:ht,useEffect:Is,useImperativeHandle:af,useInsertionEffect:rf,useLayoutEffect:of,useMemo:uf,useReducer:Tl,useRef:nf,useState:function(){return Tl(ao)},useDebugValue:Bs,useDeferredValue:function(e){var t=gt();return De===null?t.memoizedState=e:Af(t,De.memoizedState,e)},useTransition:function(){var e=Tl(ao)[0],t=gt().memoizedState;return[e,t]},useMutableSource:Vc,useSyncExternalStore:Xc,useId:cf,unstable_isNewReconciler:!1};function fr(e,t){try{var n="",r=t;do n+=od(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ea(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rh=typeof WeakMap=="function"?WeakMap:Map;function hf(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Si||(Si=!0,Ta=r),Ea(e,t)},n}function gf(e,t,n){n=Gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ea(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ea(e,t),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Jh.bind(null,e,t,n),t.then(e,e))}function Fu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,An(n,t,1))),n.lanes|=1),e)}var Mh=Ht.ReactCurrentOwner,Xe=!1;function Je(e,t,n,r){t.child=e===null?Hc(t,null,n,r):Ar(t,e.child,n,r)}function Ju(e,t,n,r,o){n=n.render;var i=t.ref;return ir(t,o),r=Cs(e,t,n,r,i,o),n=Es(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Zt(e,t,o)):(ue&&n&&fs(t),t.flags|=1,Je(e,t,r,o),t.child)}function Zu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ts(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,mf(e,t,i,r,o)):(e=ei(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:eo,n(l,r)&&e.ref===t.ref)return Zt(e,t,o)}return t.flags|=1,e=pn(i,r),e.ref=t.ref,e.return=t,t.child=e}function mf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(eo(i,r)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,Zt(e,t,o)}return Ia(e,t,n,r,o)}function yf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe($n,nt),nt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe($n,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,oe($n,nt),nt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,oe($n,nt),nt|=r;return Je(e,t,o,n),t.child}function vf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ia(e,t,n,r,o){var i=$e(n)?Qn:Ye.current;return i=sr(t,i),ir(t,o),n=Cs(e,t,n,r,i,o),r=Es(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Zt(e,t,o)):(ue&&r&&fs(t),t.flags|=1,Je(e,t,n,o),t.child)}function Hu(e,t,n,r,o){if($e(n)){var i=!0;fi(t)}else i=!1;if(ir(t,o),t.stateNode===null)qo(e,t),Jc(t,n,r),Ca(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=ht(u):(u=$e(n)?Qn:Ye.current,u=sr(t,u));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&zu(t,l,r,u),en=!1;var p=t.memoizedState;l.state=p,mi(t,r,l,o),s=t.memoizedState,a!==r||p!==s||qe.current||en?(typeof m=="function"&&(ka(t,n,m,r),s=t.memoizedState),(a=en||ju(t,n,a,r,p,s,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Fc(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:xt(t.type,a),l.props=u,h=t.pendingProps,p=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=ht(s):(s=$e(n)?Qn:Ye.current,s=sr(t,s));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||p!==s)&&zu(t,l,r,s),en=!1,p=t.memoizedState,l.state=p,mi(t,r,l,o);var S=t.memoizedState;a!==h||p!==S||qe.current||en?(typeof w=="function"&&(ka(t,n,w,r),S=t.memoizedState),(u=en||ju(t,n,u,r,p,S,s)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ba(e,t,n,r,i,o)}function Ba(e,t,n,r,o,i){vf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Mu(t,n,!1),Zt(e,t,i);r=t.stateNode,Mh.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Ar(t,e.child,null,i),t.child=Ar(t,null,a,i)):Je(e,t,a,i),t.memoizedState=r.state,o&&Mu(t,n,!0),t.child}function wf(e){var t=e.stateNode;t.pendingContext?Ru(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ru(e,t.context,!1),ws(e,t.containerInfo)}function Wu(e,t,n,r,o){return ur(),ds(o),t.flags|=256,Je(e,t,n,r),t.child}var Da={dehydrated:null,treeContext:null,retryLane:0};function Qa(e){return{baseLanes:e,cachePool:null,transitions:null}}function xf(e,t,n){var r=t.pendingProps,o=Ae.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),oe(Ae,o&1),e===null)return xa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Yi(l,r,0,null),e=Dn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Qa(n),t.memoizedState=Da,e):Ds(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return bh(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=pn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=pn(a,i):(i=Dn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Qa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Da,r}return i=e.child,e=i.sibling,r=pn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ds(e,t){return t=Yi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function To(e,t,n,r){return r!==null&&ds(r),Ar(t,e.child,null,n),e=Ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Ul(Error(D(422))),To(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Yi({mode:"visible",children:r.children},o,0,null),i=Dn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Ar(t,e.child,null,l),t.child.memoizedState=Qa(l),t.memoizedState=Da,i);if(!(t.mode&1))return To(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(D(419)),r=Ul(i,r,void 0),To(e,t,l,r)}if(a=(l&e.childLanes)!==0,Xe||a){if(r=be,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Jt(e,o),Et(r,e,o,-1))}return Os(),r=Ul(Error(D(421))),To(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Zh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,rt=un(o.nextSibling),ot=t,ue=!0,kt=null,e!==null&&(ct[ft++]=Lt,ct[ft++]=Nt,ct[ft++]=Pn,Lt=e.id,Nt=e.overflow,Pn=t),t=Ds(t,r.children),t.flags|=4096,t)}function Vu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Sa(e.return,t,n)}function jl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Sf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Je(e,t,r.children,n),r=Ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vu(e,n,t);else if(e.tag===19)Vu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(oe(Ae,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&yi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),jl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&yi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}jl(t,!0,n,null,i);break;case"together":jl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oh(e,t,n){switch(t.tag){case 3:wf(t),ur();break;case 5:Wc(t);break;case 1:$e(t.type)&&fi(t);break;case 4:ws(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;oe(hi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(oe(Ae,Ae.current&1),t.flags|=128,null):n&t.child.childLanes?xf(e,t,n):(oe(Ae,Ae.current&1),e=Zt(e,t,n),e!==null?e.sibling:null);oe(Ae,Ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),oe(Ae,Ae.current),r)break;return null;case 22:case 23:return t.lanes=0,yf(e,t,n)}return Zt(e,t,n)}var kf,Pa,Cf,Ef;kf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pa=function(){};Cf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,In(bt.current);var i=null;switch(n){case"input":o=$l(e,o),r=$l(e,r),i=[];break;case"select":o=fe({},o,{value:void 0}),r=fe({},r,{value:void 0}),i=[];break;case"textarea":o=ta(e,o),r=ta(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ai)}ra(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ie("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Ef=function(e,t,n,r){n!==r&&(t.flags|=4)};function Br(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Th(e,t,n){var r=t.pendingProps;switch(ps(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return $e(t.type)&&ci(),Le(t),null;case 3:return r=t.stateNode,cr(),le(qe),le(Ye),Ss(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(bo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,kt!==null&&(za(kt),kt=null))),Pa(e,t),Le(t),null;case 5:xs(t);var o=In(io.current);if(n=t.type,e!==null&&t.stateNode!=null)Cf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return Le(t),null}if(e=In(bt.current),bo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Pt]=t,r[ro]=i,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(o=0;o<br.length;o++)ie(br[o],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":ou(r,i),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ie("invalid",r);break;case"textarea":lu(r,i),ie("invalid",r)}ra(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Mo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Mo(r.textContent,a,e),o=["children",""+a]):Hr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ie("scroll",r)}switch(n){case"input":Co(r),iu(r,i,!0);break;case"textarea":Co(r),au(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ai)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qA(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Pt]=t,e[ro]=r,kf(e,t,!1,!1),t.stateNode=e;e:{switch(l=oa(n,r),n){case"dialog":ie("cancel",e),ie("close",e),o=r;break;case"iframe":case"object":case"embed":ie("load",e),o=r;break;case"video":case"audio":for(o=0;o<br.length;o++)ie(br[o],e);o=r;break;case"source":ie("error",e),o=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),o=r;break;case"details":ie("toggle",e),o=r;break;case"input":ou(e,r),o=$l(e,r),ie("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=fe({},r,{value:void 0}),ie("invalid",e);break;case"textarea":lu(e,r),o=ta(e,r),ie("invalid",e);break;default:o=r}ra(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?ec(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&$A(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Wr(e,s):typeof s=="number"&&Wr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Hr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&ie("scroll",e):s!=null&&$a(e,i,s,l))}switch(n){case"input":Co(e),iu(e,r,!1);break;case"textarea":Co(e),au(e);break;case"option":r.value!=null&&e.setAttribute("value",""+hn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?tr(e,!!r.multiple,i,!1):r.defaultValue!=null&&tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ai)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)Ef(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=In(io.current),In(bt.current),bo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(i=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:Mo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return Le(t),null;case 13:if(le(Ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&rt!==null&&t.mode&1&&!(t.flags&128))Nc(),ur(),t.flags|=98560,i=!1;else if(i=bo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(D(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(D(317));i[Pt]=t}else ur(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Le(t),i=!1}else kt!==null&&(za(kt),kt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ae.current&1?Qe===0&&(Qe=3):Os())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return cr(),Pa(e,t),e===null&&to(t.stateNode.containerInfo),Le(t),null;case 10:return ms(t.type._context),Le(t),null;case 17:return $e(t.type)&&ci(),Le(t),null;case 19:if(le(Ae),i=t.memoizedState,i===null)return Le(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Br(i,!1);else{if(Qe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=yi(e),l!==null){for(t.flags|=128,Br(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(Ae,Ae.current&1|2),t.child}e=e.sibling}i.tail!==null&&xe()>pr&&(t.flags|=128,r=!0,Br(i,!1),t.lanes=4194304)}else{if(!r)if(e=yi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Br(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ue)return Le(t),null}else 2*xe()-i.renderingStartTime>pr&&n!==1073741824&&(t.flags|=128,r=!0,Br(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=xe(),t.sibling=null,n=Ae.current,oe(Ae,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return bs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?nt&1073741824&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function Uh(e,t){switch(ps(t),t.tag){case 1:return $e(t.type)&&ci(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cr(),le(qe),le(Ye),Ss(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xs(t),null;case 13:if(le(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(Ae),null;case 4:return cr(),null;case 10:return ms(t.type._context),null;case 22:case 23:return bs(),null;case 24:return null;default:return null}}var Uo=!1,Fe=!1,jh=typeof WeakSet=="function"?WeakSet:Set,T=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function Ra(e,t,n){try{n()}catch(r){de(e,t,r)}}var Xu=!1;function zh(e,t){if(da=ai,e=Dc(),cs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,m=0,h=e,p=null;t:for(;;){for(var w;h!==n||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(w=h.firstChild)!==null;)p=h,h=w;for(;;){if(h===e)break t;if(p===n&&++u===o&&(a=l),p===i&&++m===r&&(s=l),(w=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ha={focusedElem:e,selectionRange:n},ai=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var E=S.memoizedProps,M=S.memoizedState,c=t.stateNode,A=c.getSnapshotBeforeUpdate(t.elementType===t.type?E:xt(t.type,E),M);c.__reactInternalSnapshotBeforeUpdate=A}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(k){de(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return S=Xu,Xu=!1,S}function Lr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ra(t,n,i)}o=o.next}while(o!==r)}}function Gi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ma(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function If(e){var t=e.alternate;t!==null&&(e.alternate=null,If(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[ro],delete t[ya],delete t[wh],delete t[xh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bf(e){return e.tag===5||e.tag===3||e.tag===4}function qu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ba(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ai));else if(r!==4&&(e=e.child,e!==null))for(ba(e,t,n),e=e.sibling;e!==null;)ba(e,t,n),e=e.sibling}function Oa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oa(e,t,n),e=e.sibling;e!==null;)Oa(e,t,n),e=e.sibling}var Ue=null,St=!1;function Xt(e,t,n){for(n=n.child;n!==null;)Df(e,t,n),n=n.sibling}function Df(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Oi,n)}catch{}switch(n.tag){case 5:Fe||qn(n,t);case 6:var r=Ue,o=St;Ue=null,Xt(e,t,n),Ue=r,St=o,Ue!==null&&(St?(e=Ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(St?(e=Ue,n=n.stateNode,e.nodeType===8?Pl(e.parentNode,n):e.nodeType===1&&Pl(e,n),$r(e)):Pl(Ue,n.stateNode));break;case 4:r=Ue,o=St,Ue=n.stateNode.containerInfo,St=!0,Xt(e,t,n),Ue=r,St=o;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ra(n,t,l),o=o.next}while(o!==r)}Xt(e,t,n);break;case 1:if(!Fe&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){de(n,t,a)}Xt(e,t,n);break;case 21:Xt(e,t,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,Xt(e,t,n),Fe=r):Xt(e,t,n);break;default:Xt(e,t,n)}}function $u(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jh),t.forEach(function(r){var o=Hh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function vt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ue=a.stateNode,St=!1;break e;case 3:Ue=a.stateNode.containerInfo,St=!0;break e;case 4:Ue=a.stateNode.containerInfo,St=!0;break e}a=a.return}if(Ue===null)throw Error(D(160));Df(i,l,o),Ue=null,St=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){de(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qf(t,e),t=t.sibling}function Qf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vt(t,e),Dt(e),r&4){try{Lr(3,e,e.return),Gi(3,e)}catch(E){de(e,e.return,E)}try{Lr(5,e,e.return)}catch(E){de(e,e.return,E)}}break;case 1:vt(t,e),Dt(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(vt(t,e),Dt(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var o=e.stateNode;try{Wr(o,"")}catch(E){de(e,e.return,E)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&VA(o,i),oa(a,l);var u=oa(a,i);for(l=0;l<s.length;l+=2){var m=s[l],h=s[l+1];m==="style"?ec(o,h):m==="dangerouslySetInnerHTML"?$A(o,h):m==="children"?Wr(o,h):$a(o,m,h,u)}switch(a){case"input":_l(o,i);break;case"textarea":XA(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?tr(o,!!i.multiple,w,!1):p!==!!i.multiple&&(i.defaultValue!=null?tr(o,!!i.multiple,i.defaultValue,!0):tr(o,!!i.multiple,i.multiple?[]:"",!1))}o[ro]=i}catch(E){de(e,e.return,E)}}break;case 6:if(vt(t,e),Dt(e),r&4){if(e.stateNode===null)throw Error(D(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(E){de(e,e.return,E)}}break;case 3:if(vt(t,e),Dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$r(t.containerInfo)}catch(E){de(e,e.return,E)}break;case 4:vt(t,e),Dt(e);break;case 13:vt(t,e),Dt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Rs=xe())),r&4&&$u(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Fe=(u=Fe)||m,vt(t,e),Fe=u):vt(t,e),Dt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(T=e,m=e.child;m!==null;){for(h=T=m;T!==null;){switch(p=T,w=p.child,p.tag){case 0:case 11:case 14:case 15:Lr(4,p,p.return);break;case 1:qn(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(E){de(r,n,E)}}break;case 5:qn(p,p.return);break;case 22:if(p.memoizedState!==null){eA(h);continue}}w!==null?(w.return=p,T=w):eA(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=_A("display",l))}catch(E){de(e,e.return,E)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(E){de(e,e.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:vt(t,e),Dt(e),r&4&&$u(e);break;case 21:break;default:vt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bf(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Wr(o,""),r.flags&=-33);var i=qu(e);Oa(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=qu(e);ba(e,a,l);break;default:throw Error(D(161))}}catch(s){de(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kh(e,t,n){T=e,Pf(e)}function Pf(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Uo;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Fe;a=Uo;var u=Fe;if(Uo=l,(Fe=s)&&!u)for(T=o;T!==null;)l=T,s=l.child,l.tag===22&&l.memoizedState!==null?tA(o):s!==null?(s.return=l,T=s):tA(o);for(;i!==null;)T=i,Pf(i),i=i.sibling;T=o,Uo=a,Fe=u}_u(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,T=i):_u(e)}}function _u(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Fe||Gi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:xt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Uu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Uu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&$r(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Fe||t.flags&512&&Ma(t)}catch(p){de(t,t.return,p)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function eA(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function tA(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Gi(4,t)}catch(s){de(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){de(t,o,s)}}var i=t.return;try{Ma(t)}catch(s){de(t,i,s)}break;case 5:var l=t.return;try{Ma(t)}catch(s){de(t,l,s)}}}catch(s){de(t,t.return,s)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var Lh=Math.ceil,xi=Ht.ReactCurrentDispatcher,Qs=Ht.ReactCurrentOwner,dt=Ht.ReactCurrentBatchConfig,ee=0,be=null,ke=null,je=0,nt=0,$n=yn(0),Qe=0,uo=null,Mn=0,Fi=0,Ps=0,Nr=null,Ve=null,Rs=0,pr=1/0,zt=null,Si=!1,Ta=null,cn=null,jo=!1,on=null,ki=0,Gr=0,Ua=null,$o=-1,_o=0;function Ze(){return ee&6?xe():$o!==-1?$o:$o=xe()}function fn(e){return e.mode&1?ee&2&&je!==0?je&-je:kh.transition!==null?(_o===0&&(_o=fc()),_o):(e=ne,e!==0||(e=window.event,e=e===void 0?16:vc(e.type)),e):1}function Et(e,t,n,r){if(50<Gr)throw Gr=0,Ua=null,Error(D(185));go(e,n,r),(!(ee&2)||e!==be)&&(e===be&&(!(ee&2)&&(Fi|=n),Qe===4&&nn(e,je)),_e(e,r),n===1&&ee===0&&!(t.mode&1)&&(pr=xe()+500,Ki&&vn()))}function _e(e,t){var n=e.callbackNode;kd(e,t);var r=li(e,e===be?je:0);if(r===0)n!==null&&Au(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Au(n),t===1)e.tag===0?Sh(nA.bind(null,e)):zc(nA.bind(null,e)),yh(function(){!(ee&6)&&vn()}),n=null;else{switch(pc(r)){case 1:n=rs;break;case 4:n=Ac;break;case 16:n=ii;break;case 536870912:n=cc;break;default:n=ii}n=zf(n,Rf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Rf(e,t){if($o=-1,_o=0,ee&6)throw Error(D(327));var n=e.callbackNode;if(lr()&&e.callbackNode!==n)return null;var r=li(e,e===be?je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ci(e,r);else{t=r;var o=ee;ee|=2;var i=bf();(be!==e||je!==t)&&(zt=null,pr=xe()+500,Bn(e,t));do try{Fh();break}catch(a){Mf(e,a)}while(1);gs(),xi.current=i,ee=o,ke!==null?t=0:(be=null,je=0,t=Qe)}if(t!==0){if(t===2&&(o=ua(e),o!==0&&(r=o,t=ja(e,o))),t===1)throw n=uo,Bn(e,0),nn(e,r),_e(e,xe()),n;if(t===6)nn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Nh(o)&&(t=Ci(e,r),t===2&&(i=ua(e),i!==0&&(r=i,t=ja(e,i))),t===1))throw n=uo,Bn(e,0),nn(e,r),_e(e,xe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:kn(e,Ve,zt);break;case 3:if(nn(e,r),(r&130023424)===r&&(t=Rs+500-xe(),10<t)){if(li(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ma(kn.bind(null,e,Ve,zt),t);break}kn(e,Ve,zt);break;case 4:if(nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Ct(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lh(r/1960))-r,10<r){e.timeoutHandle=ma(kn.bind(null,e,Ve,zt),r);break}kn(e,Ve,zt);break;case 5:kn(e,Ve,zt);break;default:throw Error(D(329))}}}return _e(e,xe()),e.callbackNode===n?Rf.bind(null,e):null}function ja(e,t){var n=Nr;return e.current.memoizedState.isDehydrated&&(Bn(e,t).flags|=256),e=Ci(e,t),e!==2&&(t=Ve,Ve=n,t!==null&&za(t)),e}function za(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function Nh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!It(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t){for(t&=~Ps,t&=~Fi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ct(t),r=1<<n;e[n]=-1,t&=~r}}function nA(e){if(ee&6)throw Error(D(327));lr();var t=li(e,0);if(!(t&1))return _e(e,xe()),null;var n=Ci(e,t);if(e.tag!==0&&n===2){var r=ua(e);r!==0&&(t=r,n=ja(e,r))}if(n===1)throw n=uo,Bn(e,0),nn(e,t),_e(e,xe()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,Ve,zt),_e(e,xe()),null}function Ms(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(pr=xe()+500,Ki&&vn())}}function bn(e){on!==null&&on.tag===0&&!(ee&6)&&lr();var t=ee;ee|=1;var n=dt.transition,r=ne;try{if(dt.transition=null,ne=1,e)return e()}finally{ne=r,dt.transition=n,ee=t,!(ee&6)&&vn()}}function bs(){nt=$n.current,le($n)}function Bn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,mh(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(ps(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ci();break;case 3:cr(),le(qe),le(Ye),Ss();break;case 5:xs(r);break;case 4:cr();break;case 13:le(Ae);break;case 19:le(Ae);break;case 10:ms(r.type._context);break;case 22:case 23:bs()}n=n.return}if(be=e,ke=e=pn(e.current,null),je=nt=t,Qe=0,uo=null,Ps=Fi=Mn=0,Ve=Nr=null,En!==null){for(t=0;t<En.length;t++)if(n=En[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}En=null}return e}function Mf(e,t){do{var n=ke;try{if(gs(),Vo.current=wi,vi){for(var r=ce.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}vi=!1}if(Rn=0,Me=De=ce=null,Kr=!1,lo=0,Qs.current=null,n===null||n.return===null){Qe=1,uo=t,ke=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=je,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,m=a,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=Fu(l);if(w!==null){w.flags&=-257,Yu(w,l,a,i,t),w.mode&1&&Gu(i,u,t),t=w,s=u;var S=t.updateQueue;if(S===null){var E=new Set;E.add(s),t.updateQueue=E}else S.add(s);break e}else{if(!(t&1)){Gu(i,u,t),Os();break e}s=Error(D(426))}}else if(ue&&a.mode&1){var M=Fu(l);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Yu(M,l,a,i,t),ds(fr(s,a));break e}}i=s=fr(s,a),Qe!==4&&(Qe=2),Nr===null?Nr=[i]:Nr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var c=hf(i,s,t);Tu(i,c);break e;case 1:a=s;var A=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof A.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(cn===null||!cn.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=gf(i,a,t);Tu(i,k);break e}}i=i.return}while(i!==null)}Tf(n)}catch(B){t=B,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(1)}function bf(){var e=xi.current;return xi.current=wi,e===null?wi:e}function Os(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),be===null||!(Mn&268435455)&&!(Fi&268435455)||nn(be,je)}function Ci(e,t){var n=ee;ee|=2;var r=bf();(be!==e||je!==t)&&(zt=null,Bn(e,t));do try{Gh();break}catch(o){Mf(e,o)}while(1);if(gs(),ee=n,xi.current=r,ke!==null)throw Error(D(261));return be=null,je=0,Qe}function Gh(){for(;ke!==null;)Of(ke)}function Fh(){for(;ke!==null&&!dd();)Of(ke)}function Of(e){var t=jf(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?Tf(e):ke=t,Qs.current=null}function Tf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Uh(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Qe=6,ke=null;return}}else if(n=Th(n,t,nt),n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Qe===0&&(Qe=5)}function kn(e,t,n){var r=ne,o=dt.transition;try{dt.transition=null,ne=1,Yh(e,t,n,r)}finally{dt.transition=o,ne=r}return null}function Yh(e,t,n,r){do lr();while(on!==null);if(ee&6)throw Error(D(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Cd(e,i),e===be&&(ke=be=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jo||(jo=!0,zf(ii,function(){return lr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=dt.transition,dt.transition=null;var l=ne;ne=1;var a=ee;ee|=4,Qs.current=null,zh(e,n),Qf(n,e),Ah(ha),ai=!!da,ha=da=null,e.current=n,Kh(n),hd(),ee=a,ne=l,dt.transition=i}else e.current=n;if(jo&&(jo=!1,on=e,ki=o),i=e.pendingLanes,i===0&&(cn=null),yd(n.stateNode),_e(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Si)throw Si=!1,e=Ta,Ta=null,e;return ki&1&&e.tag!==0&&lr(),i=e.pendingLanes,i&1?e===Ua?Gr++:(Gr=0,Ua=e):Gr=0,vn(),null}function lr(){if(on!==null){var e=pc(ki),t=dt.transition,n=ne;try{if(dt.transition=null,ne=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,ki=0,ee&6)throw Error(D(331));var o=ee;for(ee|=4,T=e.current;T!==null;){var i=T,l=i.child;if(T.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(T=u;T!==null;){var m=T;switch(m.tag){case 0:case 11:case 15:Lr(8,m,i)}var h=m.child;if(h!==null)h.return=m,T=h;else for(;T!==null;){m=T;var p=m.sibling,w=m.return;if(If(m),m===u){T=null;break}if(p!==null){p.return=w,T=p;break}T=w}}}var S=i.alternate;if(S!==null){var E=S.child;if(E!==null){S.child=null;do{var M=E.sibling;E.sibling=null,E=M}while(E!==null)}}T=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,T=l;else e:for(;T!==null;){if(i=T,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Lr(9,i,i.return)}var c=i.sibling;if(c!==null){c.return=i.return,T=c;break e}T=i.return}}var A=e.current;for(T=A;T!==null;){l=T;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,T=d;else e:for(l=A;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Gi(9,a)}}catch(B){de(a,a.return,B)}if(a===l){T=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,T=k;break e}T=a.return}}if(ee=o,vn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Oi,e)}catch{}r=!0}return r}finally{ne=n,dt.transition=t}}return!1}function rA(e,t,n){t=fr(n,t),t=hf(e,t,1),e=An(e,t,1),t=Ze(),e!==null&&(go(e,1,t),_e(e,t))}function de(e,t,n){if(e.tag===3)rA(e,e,n);else for(;t!==null;){if(t.tag===3){rA(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=fr(n,e),e=gf(t,e,1),t=An(t,e,1),e=Ze(),t!==null&&(go(t,1,e),_e(t,e));break}}t=t.return}}function Jh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(je&n)===n&&(Qe===4||Qe===3&&(je&130023424)===je&&500>xe()-Rs?Bn(e,0):Ps|=n),_e(e,t)}function Uf(e,t){t===0&&(e.mode&1?(t=Bo,Bo<<=1,!(Bo&130023424)&&(Bo=4194304)):t=1);var n=Ze();e=Jt(e,t),e!==null&&(go(e,t,n),_e(e,n))}function Zh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Uf(e,n)}function Hh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),Uf(e,n)}var jf;jf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||qe.current)Xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Xe=!1,Oh(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,ue&&t.flags&1048576&&Kc(t,di,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qo(e,t),e=t.pendingProps;var o=sr(t,Ye.current);ir(t,n),o=Cs(null,t,r,e,o,n);var i=Es();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(i=!0,fi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,vs(t),o.updater=Li,t.stateNode=o,o._reactInternals=t,Ca(t,r,e,n),t=Ba(null,t,r,!0,i,n)):(t.tag=0,ue&&i&&fs(t),Je(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Vh(r),e=xt(r,e),o){case 0:t=Ia(null,t,r,e,n);break e;case 1:t=Hu(null,t,r,e,n);break e;case 11:t=Ju(null,t,r,e,n);break e;case 14:t=Zu(null,t,r,xt(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:xt(r,o),Ia(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:xt(r,o),Hu(e,t,r,o,n);case 3:e:{if(wf(t),e===null)throw Error(D(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Fc(e,t),mi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=fr(Error(D(423)),t),t=Wu(e,t,r,n,o);break e}else if(r!==o){o=fr(Error(D(424)),t),t=Wu(e,t,r,n,o);break e}else for(rt=un(t.stateNode.containerInfo.firstChild),ot=t,ue=!0,kt=null,n=Hc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ur(),r===o){t=Zt(e,t,n);break e}Je(e,t,r,n)}t=t.child}return t;case 5:return Wc(t),e===null&&xa(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,ga(r,o)?l=null:i!==null&&ga(r,i)&&(t.flags|=32),vf(e,t),Je(e,t,l,n),t.child;case 6:return e===null&&xa(t),null;case 13:return xf(e,t,n);case 4:return ws(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ar(t,null,r,n):Je(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:xt(r,o),Ju(e,t,r,o,n);case 7:return Je(e,t,t.pendingProps,n),t.child;case 8:return Je(e,t,t.pendingProps.children,n),t.child;case 12:return Je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,oe(hi,r._currentValue),r._currentValue=l,i!==null)if(It(i.value,l)){if(i.children===o.children&&!qe.current){t=Zt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Gt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?s.next=s:(s.next=m.next,m.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Sa(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(D(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Sa(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Je(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,ir(t,n),o=ht(o),r=r(o),t.flags|=1,Je(e,t,r,n),t.child;case 14:return r=t.type,o=xt(r,t.pendingProps),o=xt(r.type,o),Zu(e,t,r,o,n);case 15:return mf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:xt(r,o),qo(e,t),t.tag=1,$e(r)?(e=!0,fi(t)):e=!1,ir(t,n),Jc(t,r,o),Ca(t,r,o,n),Ba(null,t,r,!0,e,n);case 19:return Sf(e,t,n);case 22:return yf(e,t,n)}throw Error(D(156,t.tag))};function zf(e,t){return uc(e,t)}function Wh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,r){return new Wh(e,t,n,r)}function Ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vh(e){if(typeof e=="function")return Ts(e)?1:0;if(e!=null){if(e=e.$$typeof,e===es)return 11;if(e===ts)return 14}return 2}function pn(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ei(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ts(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Gn:return Dn(n.children,o,i,t);case _a:l=8,o|=8;break;case Wl:return e=pt(12,n,t,o|2),e.elementType=Wl,e.lanes=i,e;case Vl:return e=pt(13,n,t,o),e.elementType=Vl,e.lanes=i,e;case Xl:return e=pt(19,n,t,o),e.elementType=Xl,e.lanes=i,e;case ZA:return Yi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case YA:l=10;break e;case JA:l=9;break e;case es:l=11;break e;case ts:l=14;break e;case _t:l=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=pt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Dn(e,t,n,r){return e=pt(7,e,r,t),e.lanes=n,e}function Yi(e,t,n,r){return e=pt(22,e,r,t),e.elementType=ZA,e.lanes=n,e.stateNode={isHidden:!1},e}function zl(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function Kl(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vl(0),this.expirationTimes=vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Us(e,t,n,r,o,i,l,a,s){return e=new Xh(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=pt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vs(i),e}function qh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Kf(e){if(!e)return gn;e=e._reactInternals;e:{if(jn(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if($e(n))return jc(e,n,t)}return t}function Lf(e,t,n,r,o,i,l,a,s){return e=Us(n,r,!0,e,o,i,l,a,s),e.context=Kf(null),n=e.current,r=Ze(),o=fn(n),i=Gt(r,o),i.callback=t??null,An(n,i,o),e.current.lanes=o,go(e,o,r),_e(e,r),e}function Ji(e,t,n,r){var o=t.current,i=Ze(),l=fn(o);return n=Kf(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=An(o,t,l),e!==null&&(Et(e,o,l,i),Wo(e,o,l)),l}function Ei(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function oA(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function js(e,t){oA(e,t),(e=e.alternate)&&oA(e,t)}function $h(){return null}var Nf=typeof reportError=="function"?reportError:function(e){console.error(e)};function zs(e){this._internalRoot=e}Zi.prototype.render=zs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));Ji(e,t,null,null)};Zi.prototype.unmount=zs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bn(function(){Ji(null,e,null,null)}),t[Yt]=null}};function Zi(e){this._internalRoot=e}Zi.prototype.unstable_scheduleHydration=function(e){if(e){var t=gc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&yc(e)}};function Ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function iA(){}function _h(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ei(l);i.call(u)}}var l=Lf(t,r,e,0,null,!1,!1,"",iA);return e._reactRootContainer=l,e[Yt]=l.current,to(e.nodeType===8?e.parentNode:e),bn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Ei(s);a.call(u)}}var s=Us(e,0,!1,null,null,!1,!1,"",iA);return e._reactRootContainer=s,e[Yt]=s.current,to(e.nodeType===8?e.parentNode:e),bn(function(){Ji(t,s,n,r)}),s}function Wi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Ei(l);a.call(s)}}Ji(t,l,e,o)}else l=_h(n,t,e,o,r);return Ei(l)}dc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mr(t.pendingLanes);n!==0&&(os(t,n|1),_e(t,xe()),!(ee&6)&&(pr=xe()+500,vn()))}break;case 13:bn(function(){var r=Jt(e,1);if(r!==null){var o=Ze();Et(r,e,1,o)}}),js(e,1)}};is=function(e){if(e.tag===13){var t=Jt(e,134217728);if(t!==null){var n=Ze();Et(t,e,134217728,n)}js(e,134217728)}};hc=function(e){if(e.tag===13){var t=fn(e),n=Jt(e,t);if(n!==null){var r=Ze();Et(n,e,t,r)}js(e,t)}};gc=function(){return ne};mc=function(e,t){var n=ne;try{return ne=e,t()}finally{ne=n}};la=function(e,t,n){switch(t){case"input":if(_l(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=zi(r);if(!o)throw Error(D(90));WA(r),_l(r,o)}}}break;case"textarea":XA(e,n);break;case"select":t=n.value,t!=null&&tr(e,!!n.multiple,t,!1)}};rc=Ms;oc=bn;var eg={usingClientEntryPoint:!1,Events:[yo,Zn,zi,tc,nc,Ms]},Dr={findFiberByHostInstance:Cn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},tg={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ac(e),e===null?null:e.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||$h,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zo.isDisabled&&zo.supportsFiber)try{Oi=zo.inject(tg),Mt=zo}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eg;at.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ks(t))throw Error(D(200));return qh(e,t,null,n)};at.createRoot=function(e,t){if(!Ks(e))throw Error(D(299));var n=!1,r="",o=Nf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Us(e,1,!1,null,null,n,!1,r,o),e[Yt]=t.current,to(e.nodeType===8?e.parentNode:e),new zs(t)};at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=ac(t),e=e===null?null:e.stateNode,e};at.flushSync=function(e){return bn(e)};at.hydrate=function(e,t,n){if(!Hi(t))throw Error(D(200));return Wi(null,e,t,!0,n)};at.hydrateRoot=function(e,t,n){if(!Ks(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Nf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Lf(t,null,e,1,n??null,o,!1,i,l),e[Yt]=t.current,to(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Zi(t)};at.render=function(e,t,n){if(!Hi(t))throw Error(D(200));return Wi(null,e,t,!1,n)};at.unmountComponentAtNode=function(e){if(!Hi(e))throw Error(D(40));return e._reactRootContainer?(bn(function(){Wi(null,null,e,!1,function(){e._reactRootContainer=null,e[Yt]=null})}),!0):!1};at.unstable_batchedUpdates=Ms;at.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Hi(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return Wi(e,t,n,!1,r)};at.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=at})($p);var lA=Zr;Jl.createRoot=lA.createRoot,Jl.hydrateRoot=lA.hydrateRoot;var Ao={},ng={get exports(){return Ao},set exports(e){Ao=e}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe=typeof Symbol=="function"&&Symbol.for,Ls=Oe?Symbol.for("react.element"):60103,Ns=Oe?Symbol.for("react.portal"):60106,Vi=Oe?Symbol.for("react.fragment"):60107,Xi=Oe?Symbol.for("react.strict_mode"):60108,qi=Oe?Symbol.for("react.profiler"):60114,$i=Oe?Symbol.for("react.provider"):60109,_i=Oe?Symbol.for("react.context"):60110,Gs=Oe?Symbol.for("react.async_mode"):60111,el=Oe?Symbol.for("react.concurrent_mode"):60111,tl=Oe?Symbol.for("react.forward_ref"):60112,nl=Oe?Symbol.for("react.suspense"):60113,rg=Oe?Symbol.for("react.suspense_list"):60120,rl=Oe?Symbol.for("react.memo"):60115,ol=Oe?Symbol.for("react.lazy"):60116,og=Oe?Symbol.for("react.block"):60121,ig=Oe?Symbol.for("react.fundamental"):60117,lg=Oe?Symbol.for("react.responder"):60118,ag=Oe?Symbol.for("react.scope"):60119;function ut(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ls:switch(e=e.type,e){case Gs:case el:case Vi:case qi:case Xi:case nl:return e;default:switch(e=e&&e.$$typeof,e){case _i:case tl:case ol:case rl:case $i:return e;default:return t}}case Ns:return t}}}function Gf(e){return ut(e)===el}re.AsyncMode=Gs;re.ConcurrentMode=el;re.ContextConsumer=_i;re.ContextProvider=$i;re.Element=Ls;re.ForwardRef=tl;re.Fragment=Vi;re.Lazy=ol;re.Memo=rl;re.Portal=Ns;re.Profiler=qi;re.StrictMode=Xi;re.Suspense=nl;re.isAsyncMode=function(e){return Gf(e)||ut(e)===Gs};re.isConcurrentMode=Gf;re.isContextConsumer=function(e){return ut(e)===_i};re.isContextProvider=function(e){return ut(e)===$i};re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ls};re.isForwardRef=function(e){return ut(e)===tl};re.isFragment=function(e){return ut(e)===Vi};re.isLazy=function(e){return ut(e)===ol};re.isMemo=function(e){return ut(e)===rl};re.isPortal=function(e){return ut(e)===Ns};re.isProfiler=function(e){return ut(e)===qi};re.isStrictMode=function(e){return ut(e)===Xi};re.isSuspense=function(e){return ut(e)===nl};re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Vi||e===el||e===qi||e===Xi||e===nl||e===rg||typeof e=="object"&&e!==null&&(e.$$typeof===ol||e.$$typeof===rl||e.$$typeof===$i||e.$$typeof===_i||e.$$typeof===tl||e.$$typeof===ig||e.$$typeof===lg||e.$$typeof===ag||e.$$typeof===og)};re.typeOf=ut;(function(e){e.exports=re})(ng);function sg(e){function t(g,y,v,C,f){for(var P=0,I=0,Z=0,z=0,q,F,se=0,pe=0,V,ve=V=q=0,$=0,Be=0,Wt=0,Se=0,wn=v.length,xn=wn-1,yt,H="",we="",fl="",pl="",Vt;$<wn;){if(F=v.charCodeAt($),$===xn&&I+z+Z+P!==0&&(I!==0&&(F=I===47?10:47),z=Z=P=0,wn++,xn++),I+z+Z+P===0){if($===xn&&(0<Be&&(H=H.replace(p,"")),0<H.trim().length)){switch(F){case 32:case 9:case 59:case 13:case 10:break;default:H+=v.charAt($)}F=59}switch(F){case 123:for(H=H.trim(),q=H.charCodeAt(0),V=1,Se=++$;$<wn;){switch(F=v.charCodeAt($)){case 123:V++;break;case 125:V--;break;case 47:switch(F=v.charCodeAt($+1)){case 42:case 47:e:{for(ve=$+1;ve<xn;++ve)switch(v.charCodeAt(ve)){case 47:if(F===42&&v.charCodeAt(ve-1)===42&&$+2!==ve){$=ve+1;break e}break;case 10:if(F===47){$=ve+1;break e}}$=ve}}break;case 91:F++;case 40:F++;case 34:case 39:for(;$++<xn&&v.charCodeAt($)!==F;);}if(V===0)break;$++}switch(V=v.substring(Se,$),q===0&&(q=(H=H.replace(h,"").trim()).charCodeAt(0)),q){case 64:switch(0<Be&&(H=H.replace(p,"")),F=H.charCodeAt(1),F){case 100:case 109:case 115:case 45:Be=y;break;default:Be=mt}if(V=t(y,Be,V,F,f+1),Se=V.length,0<Q&&(Be=n(mt,H,Wt),Vt=a(3,V,Be,y,Ie,ye,Se,F,f,C),H=Be.join(""),Vt!==void 0&&(Se=(V=Vt.trim()).length)===0&&(F=0,V="")),0<Se)switch(F){case 115:H=H.replace(R,l);case 100:case 109:case 45:V=H+"{"+V+"}";break;case 107:H=H.replace(A,"$1 $2"),V=H+"{"+V+"}",V=Re===1||Re===2&&i("@"+V,3)?"@-webkit-"+V+"@"+V:"@"+V;break;default:V=H+V,C===112&&(V=(we+=V,""))}else V="";break;default:V=t(y,n(y,H,Wt),V,C,f+1)}fl+=V,V=Wt=Be=ve=q=0,H="",F=v.charCodeAt(++$);break;case 125:case 59:if(H=(0<Be?H.replace(p,""):H).trim(),1<(Se=H.length))switch(ve===0&&(q=H.charCodeAt(0),q===45||96<q&&123>q)&&(Se=(H=H.replace(" ",":")).length),0<Q&&(Vt=a(1,H,y,g,Ie,ye,we.length,C,f,C))!==void 0&&(Se=(H=Vt.trim()).length)===0&&(H="\0\0"),q=H.charCodeAt(0),F=H.charCodeAt(1),q){case 0:break;case 64:if(F===105||F===99){pl+=H+v.charAt($);break}default:H.charCodeAt(Se-1)!==58&&(we+=o(H,q,F,H.charCodeAt(2)))}Wt=Be=ve=q=0,H="",F=v.charCodeAt(++$)}}switch(F){case 13:case 10:I===47?I=0:1+q===0&&C!==107&&0<H.length&&(Be=1,H+="\0"),0<Q*K&&a(0,H,y,g,Ie,ye,we.length,C,f,C),ye=1,Ie++;break;case 59:case 125:if(I+z+Z+P===0){ye++;break}default:switch(ye++,yt=v.charAt($),F){case 9:case 32:if(z+P+I===0)switch(se){case 44:case 58:case 9:case 32:yt="";break;default:F!==32&&(yt=" ")}break;case 0:yt="\\0";break;case 12:yt="\\f";break;case 11:yt="\\v";break;case 38:z+I+P===0&&(Be=Wt=1,yt="\f"+yt);break;case 108:if(z+I+P+Te===0&&0<ve)switch($-ve){case 2:se===112&&v.charCodeAt($-3)===58&&(Te=se);case 8:pe===111&&(Te=pe)}break;case 58:z+I+P===0&&(ve=$);break;case 44:I+Z+z+P===0&&(Be=1,yt+="\r");break;case 34:case 39:I===0&&(z=z===F?0:z===0?F:z);break;case 91:z+I+Z===0&&P++;break;case 93:z+I+Z===0&&P--;break;case 41:z+I+P===0&&Z--;break;case 40:if(z+I+P===0){if(q===0)switch(2*se+3*pe){case 533:break;default:q=1}Z++}break;case 64:I+Z+z+P+ve+V===0&&(V=1);break;case 42:case 47:if(!(0<z+P+Z))switch(I){case 0:switch(2*F+3*v.charCodeAt($+1)){case 235:I=47;break;case 220:Se=$,I=42}break;case 42:F===47&&se===42&&Se+2!==$&&(v.charCodeAt(Se+2)===33&&(we+=v.substring(Se,$+1)),yt="",I=0)}}I===0&&(H+=yt)}pe=se,se=F,$++}if(Se=we.length,0<Se){if(Be=y,0<Q&&(Vt=a(2,we,Be,g,Ie,ye,Se,C,f,C),Vt!==void 0&&(we=Vt).length===0))return pl+we+fl;if(we=Be.join(",")+"{"+we+"}",Re*Te!==0){switch(Re!==2||i(we,2)||(Te=0),Te){case 111:we=we.replace(k,":-moz-$1")+we;break;case 112:we=we.replace(d,"::-webkit-input-$1")+we.replace(d,"::-moz-$1")+we.replace(d,":-ms-input-$1")+we}Te=0}}return pl+we+fl}function n(g,y,v){var C=y.trim().split(M);y=C;var f=C.length,P=g.length;switch(P){case 0:case 1:var I=0;for(g=P===0?"":g[0]+" ";I<f;++I)y[I]=r(g,y[I],v).trim();break;default:var Z=I=0;for(y=[];I<f;++I)for(var z=0;z<P;++z)y[Z++]=r(g[z]+" ",C[I],v).trim()}return y}function r(g,y,v){var C=y.charCodeAt(0);switch(33>C&&(C=(y=y.trim()).charCodeAt(0)),C){case 38:return y.replace(c,"$1"+g.trim());case 58:return g.trim()+y.replace(c,"$1"+g.trim());default:if(0<1*v&&0<y.indexOf("\f"))return y.replace(c,(g.charCodeAt(0)===58?"":"$1")+g.trim())}return g+y}function o(g,y,v,C){var f=g+";",P=2*y+3*v+4*C;if(P===944){g=f.indexOf(":",9)+1;var I=f.substring(g,f.length-1).trim();return I=f.substring(0,g).trim()+I+";",Re===1||Re===2&&i(I,1)?"-webkit-"+I+I:I}if(Re===0||Re===2&&!i(f,1))return f;switch(P){case 1015:return f.charCodeAt(10)===97?"-webkit-"+f+f:f;case 951:return f.charCodeAt(3)===116?"-webkit-"+f+f:f;case 963:return f.charCodeAt(5)===110?"-webkit-"+f+f:f;case 1009:if(f.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+f+f;case 978:return"-webkit-"+f+"-moz-"+f+f;case 1019:case 983:return"-webkit-"+f+"-moz-"+f+"-ms-"+f+f;case 883:if(f.charCodeAt(8)===45)return"-webkit-"+f+f;if(0<f.indexOf("image-set(",11))return f.replace(me,"$1-webkit-$2")+f;break;case 932:if(f.charCodeAt(4)===45)switch(f.charCodeAt(5)){case 103:return"-webkit-box-"+f.replace("-grow","")+"-webkit-"+f+"-ms-"+f.replace("grow","positive")+f;case 115:return"-webkit-"+f+"-ms-"+f.replace("shrink","negative")+f;case 98:return"-webkit-"+f+"-ms-"+f.replace("basis","preferred-size")+f}return"-webkit-"+f+"-ms-"+f+f;case 964:return"-webkit-"+f+"-ms-flex-"+f+f;case 1023:if(f.charCodeAt(8)!==99)break;return I=f.substring(f.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+I+"-webkit-"+f+"-ms-flex-pack"+I+f;case 1005:return S.test(f)?f.replace(w,":-webkit-")+f.replace(w,":-moz-")+f:f;case 1e3:switch(I=f.substring(13).trim(),y=I.indexOf("-")+1,I.charCodeAt(0)+I.charCodeAt(y)){case 226:I=f.replace(B,"tb");break;case 232:I=f.replace(B,"tb-rl");break;case 220:I=f.replace(B,"lr");break;default:return f}return"-webkit-"+f+"-ms-"+I+f;case 1017:if(f.indexOf("sticky",9)===-1)break;case 975:switch(y=(f=g).length-10,I=(f.charCodeAt(y)===33?f.substring(0,y):f).substring(g.indexOf(":",7)+1).trim(),P=I.charCodeAt(0)+(I.charCodeAt(7)|0)){case 203:if(111>I.charCodeAt(8))break;case 115:f=f.replace(I,"-webkit-"+I)+";"+f;break;case 207:case 102:f=f.replace(I,"-webkit-"+(102<P?"inline-":"")+"box")+";"+f.replace(I,"-webkit-"+I)+";"+f.replace(I,"-ms-"+I+"box")+";"+f}return f+";";case 938:if(f.charCodeAt(5)===45)switch(f.charCodeAt(6)){case 105:return I=f.replace("-items",""),"-webkit-"+f+"-webkit-box-"+I+"-ms-flex-"+I+f;case 115:return"-webkit-"+f+"-ms-flex-item-"+f.replace(O,"")+f;default:return"-webkit-"+f+"-ms-flex-line-pack"+f.replace("align-content","").replace(O,"")+f}break;case 973:case 989:if(f.charCodeAt(3)!==45||f.charCodeAt(4)===122)break;case 931:case 953:if(J.test(g)===!0)return(I=g.substring(g.indexOf(":")+1)).charCodeAt(0)===115?o(g.replace("stretch","fill-available"),y,v,C).replace(":fill-available",":stretch"):f.replace(I,"-webkit-"+I)+f.replace(I,"-moz-"+I.replace("fill-",""))+f;break;case 962:if(f="-webkit-"+f+(f.charCodeAt(5)===102?"-ms-"+f:"")+f,v+C===211&&f.charCodeAt(13)===105&&0<f.indexOf("transform",10))return f.substring(0,f.indexOf(";",27)+1).replace(E,"$1-webkit-$2")+f}return f}function i(g,y){var v=g.indexOf(y===1?":":"{"),C=g.substring(0,y!==3?v:10);return v=g.substring(v+1,g.length-1),N(y!==2?C:C.replace(_,"$1"),v,y)}function l(g,y){var v=o(y,y.charCodeAt(0),y.charCodeAt(1),y.charCodeAt(2));return v!==y+";"?v.replace(b," or ($1)").substring(4):"("+y+")"}function a(g,y,v,C,f,P,I,Z,z,q){for(var F=0,se=y,pe;F<Q;++F)switch(pe=ae[F].call(m,g,se,v,C,f,P,I,Z,z,q)){case void 0:case!1:case!0:case null:break;default:se=pe}if(se!==y)return se}function s(g){switch(g){case void 0:case null:Q=ae.length=0;break;default:if(typeof g=="function")ae[Q++]=g;else if(typeof g=="object")for(var y=0,v=g.length;y<v;++y)s(g[y]);else K=!!g|0}return s}function u(g){return g=g.prefix,g!==void 0&&(N=null,g?typeof g!="function"?Re=1:(Re=2,N=g):Re=0),u}function m(g,y){var v=g;if(33>v.charCodeAt(0)&&(v=v.trim()),te=v,v=[te],0<Q){var C=a(-1,y,v,v,Ie,ye,0,0,0,0);C!==void 0&&typeof C=="string"&&(y=C)}var f=t(mt,v,y,0,0);return 0<Q&&(C=a(-2,f,v,v,Ie,ye,f.length,0,0,0),C!==void 0&&(f=C)),te="",Te=0,ye=Ie=1,f}var h=/^\0+/g,p=/[\0\r\f]/g,w=/: */g,S=/zoo|gra/,E=/([,: ])(transform)/g,M=/,\r+?/g,c=/([\t\r\n ])*\f?&/g,A=/@(k\w+)\s*(\S*)\s*/,d=/::(place)/g,k=/:(read-only)/g,B=/[svh]\w+-[tblr]{2}/,R=/\(\s*(.*)\s*\)/g,b=/([\s\S]*?);/g,O=/-self|flex-/g,_=/[^]*?(:[rp][el]a[\w-]+)[^]*/,J=/stretch|:\s*\w+\-(?:conte|avail)/,me=/([^-])(image-set\()/,ye=1,Ie=1,Te=0,Re=1,mt=[],ae=[],Q=0,N=null,K=0,te="";return m.use=s,m.set=u,e!==void 0&&u(e),m}var ug={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ag(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var cg=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,aA=Ag(function(e){return cg.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Fs=Ao,fg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dg={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ff={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ys={};Ys[Fs.ForwardRef]=dg;Ys[Fs.Memo]=Ff;function sA(e){return Fs.isMemo(e)?Ff:Ys[e.$$typeof]||fg}var hg=Object.defineProperty,gg=Object.getOwnPropertyNames,uA=Object.getOwnPropertySymbols,mg=Object.getOwnPropertyDescriptor,yg=Object.getPrototypeOf,AA=Object.prototype;function Yf(e,t,n){if(typeof t!="string"){if(AA){var r=yg(t);r&&r!==AA&&Yf(e,r,n)}var o=gg(t);uA&&(o=o.concat(uA(t)));for(var i=sA(e),l=sA(t),a=0;a<o.length;++a){var s=o[a];if(!pg[s]&&!(n&&n[s])&&!(l&&l[s])&&!(i&&i[s])){var u=mg(t,s);try{hg(e,s,u)}catch{}}}}return e}var vg=Yf;function Rt(){return(Rt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var cA=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},Ka=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Ao.typeOf(e)},Ii=Object.freeze([]),dn=Object.freeze({});function co(e){return typeof e=="function"}function fA(e){return e.displayName||e.name||"Component"}function Js(e){return e&&typeof e.styledComponentId=="string"}var dr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Zs=typeof window<"u"&&"HTMLElement"in window,wg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),xg={};function wo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Sg=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,l=i;n>=l;)(l<<=1)<0&&wo(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(var a=i;a<l;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),u=0,m=r.length;u<m;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var l=o;l<i;l++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),l=i+o,a=i;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),ti=new Map,Bi=new Map,Fr=1,Ko=function(e){if(ti.has(e))return ti.get(e);for(;Bi.has(Fr);)Fr++;var t=Fr++;return ti.set(e,t),Bi.set(t,e),t},kg=function(e){return Bi.get(e)},Cg=function(e,t){t>=Fr&&(Fr=t+1),ti.set(e,t),Bi.set(t,e)},Eg="style["+dr+'][data-styled-version="5.3.9"]',Ig=new RegExp("^"+dr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Bg=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},Dg=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var l=n[o].trim();if(l){var a=l.match(Ig);if(a){var s=0|parseInt(a[1],10),u=a[2];s!==0&&(Cg(u,s),Bg(e,u,a[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},Qg=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Jf=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){for(var s=a.childNodes,u=s.length;u>=0;u--){var m=s[u];if(m&&m.nodeType===1&&m.hasAttribute(dr))return m}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(dr,"active"),r.setAttribute("data-styled-version","5.3.9");var l=Qg();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},Pg=function(){function e(n){var r=this.element=Jf(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,l=0,a=i.length;l<a;l++){var s=i[l];if(s.ownerNode===o)return s}wo(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Rg=function(){function e(n){var r=this.element=Jf(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Mg=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),pA=Zs,bg={isServer:!Zs,useCSSOMInjection:!wg},Di=function(){function e(n,r,o){n===void 0&&(n=dn),r===void 0&&(r={}),this.options=Rt({},bg,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&Zs&&pA&&(pA=!1,function(i){for(var l=document.querySelectorAll(Eg),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(dr)!=="active"&&(Dg(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Ko(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Rt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,l=r.target,n=o?new Mg(l):i?new Pg(l):new Rg(l),new Sg(n)));var n,r,o,i,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ko(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(Ko(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ko(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",l=0;l<o;l++){var a=kg(l);if(a!==void 0){var s=n.names.get(a),u=r.getGroup(l);if(s&&u&&s.size){var m=dr+".g"+l+'[id="'+a+'"]',h="";s!==void 0&&s.forEach(function(p){p.length>0&&(h+=p+",")}),i+=""+u+m+'{content:"'+h+`"}/*!sc*/
`}}}return i}(this)},e}(),Og=/(a)(d)/gi,dA=function(e){return String.fromCharCode(e+(e>25?39:97))};function La(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=dA(t%52)+n;return(dA(t%52)+n).replace(Og,"$1-$2")}var _n=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Zf=function(e){return _n(5381,e)};function Hf(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(co(n)&&!Js(n))return!1}return!0}var Tg=Zf("5.3.9"),Ug=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Hf(t),this.componentId=n,this.baseHash=_n(Tg,n),this.baseStyle=r,Di.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var l=On(this.rules,t,n,r).join(""),a=La(_n(this.baseHash,l)>>>0);if(!n.hasNameForId(o,a)){var s=r(l,"."+a,void 0,o);n.insertRules(o,a,s)}i.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,m=_n(this.baseHash,r.hash),h="",p=0;p<u;p++){var w=this.rules[p];if(typeof w=="string")h+=w;else if(w){var S=On(w,t,n,r),E=Array.isArray(S)?S.join(""):S;m=_n(m,E+p),h+=E}}if(h){var M=La(m>>>0);if(!n.hasNameForId(o,M)){var c=r(h,"."+M,void 0,o);n.insertRules(o,M,c)}i.push(M)}}return i.join(" ")},e}(),jg=/^\s*\/\/.*$/gm,zg=[":","[",".","#"];function Kg(e){var t,n,r,o,i=e===void 0?dn:e,l=i.options,a=l===void 0?dn:l,s=i.plugins,u=s===void 0?Ii:s,m=new sg(a),h=[],p=function(E){function M(c){if(c)try{E(c+"}")}catch{}}return function(c,A,d,k,B,R,b,O,_,J){switch(c){case 1:if(_===0&&A.charCodeAt(0)===64)return E(A+";"),"";break;case 2:if(O===0)return A+"/*|*/";break;case 3:switch(O){case 102:case 112:return E(d[0]+A),"";default:return A+(J===0?"/*|*/":"")}case-2:A.split("/*|*/}").forEach(M)}}}(function(E){h.push(E)}),w=function(E,M,c){return M===0&&zg.indexOf(c[n.length])!==-1||c.match(o)?E:"."+t};function S(E,M,c,A){A===void 0&&(A="&");var d=E.replace(jg,""),k=M&&c?c+" "+M+" { "+d+" }":d;return t=A,n=M,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),m(c||!M?"":M,k)}return m.use([].concat(u,[function(E,M,c){E===2&&c.length&&c[0].lastIndexOf(n)>0&&(c[0]=c[0].replace(r,w))},p,function(E){if(E===-2){var M=h;return h=[],M}}])),S.hash=u.length?u.reduce(function(E,M){return M.name||wo(15),_n(E,M.name)},5381).toString():"",S}var Wf=Tn.createContext();Wf.Consumer;var Vf=Tn.createContext(),Lg=(Vf.Consumer,new Di),Na=Kg();function Xf(){return Y.useContext(Wf)||Lg}function qf(){return Y.useContext(Vf)||Na}var Ng=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Na);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.toString=function(){return wo(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Na),this.name+t.hash},e}(),Gg=/([A-Z])/,Fg=/([A-Z])/g,Yg=/^ms-/,Jg=function(e){return"-"+e.toLowerCase()};function hA(e){return Gg.test(e)?e.replace(Fg,Jg).replace(Yg,"-ms-"):e}var gA=function(e){return e==null||e===!1||e===""};function On(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],l=0,a=e.length;l<a;l+=1)(o=On(e[l],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(gA(e))return"";if(Js(e))return"."+e.styledComponentId;if(co(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return On(s,t,n,r)}var u;return e instanceof Ng?n?(e.inject(n,r),e.getName(r)):e:Ka(e)?function m(h,p){var w,S,E=[];for(var M in h)h.hasOwnProperty(M)&&!gA(h[M])&&(Array.isArray(h[M])&&h[M].isCss||co(h[M])?E.push(hA(M)+":",h[M],";"):Ka(h[M])?E.push.apply(E,m(h[M],M)):E.push(hA(M)+": "+(w=M,(S=h[M])==null||typeof S=="boolean"||S===""?"":typeof S!="number"||S===0||w in ug?String(S).trim():S+"px")+";"));return p?[p+" {"].concat(E,["}"]):E}(e):e.toString()}var mA=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Bt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return co(e)||Ka(e)?mA(On(cA(Ii,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:mA(On(cA(e,n)))}var $f=function(e,t,n){return n===void 0&&(n=dn),e.theme!==n.theme&&e.theme||t||n.theme},Zg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Hg=/(^-|-$)/g;function Ll(e){return e.replace(Zg,"-").replace(Hg,"")}var _f=function(e){return La(Zf(e)>>>0)};function Lo(e){return typeof e=="string"&&!0}var Ga=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Wg=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Vg(e,t,n){var r=e[n];Ga(t)&&Ga(r)?ep(r,t):e[n]=t}function ep(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var l=i[o];if(Ga(l))for(var a in l)Wg(a)&&Vg(e,l[a],a)}return e}var Hs=Tn.createContext();Hs.Consumer;var Nl={};function tp(e,t,n){var r=Js(e),o=!Lo(e),i=t.attrs,l=i===void 0?Ii:i,a=t.componentId,s=a===void 0?function(A,d){var k=typeof A!="string"?"sc":Ll(A);Nl[k]=(Nl[k]||0)+1;var B=k+"-"+_f("5.3.9"+k+Nl[k]);return d?d+"-"+B:B}(t.displayName,t.parentComponentId):a,u=t.displayName,m=u===void 0?function(A){return Lo(A)?"styled."+A:"Styled("+fA(A)+")"}(e):u,h=t.displayName&&t.componentId?Ll(t.displayName)+"-"+t.componentId:t.componentId||s,p=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,w=t.shouldForwardProp;r&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(A,d,k){return e.shouldForwardProp(A,d,k)&&t.shouldForwardProp(A,d,k)}:e.shouldForwardProp);var S,E=new Ug(n,h,r?e.componentStyle:void 0),M=E.isStatic&&l.length===0,c=function(A,d){return function(k,B,R,b){var O=k.attrs,_=k.componentStyle,J=k.defaultProps,me=k.foldedComponentIds,ye=k.shouldForwardProp,Ie=k.styledComponentId,Te=k.target,Re=function(C,f,P){C===void 0&&(C=dn);var I=Rt({},f,{theme:C}),Z={};return P.forEach(function(z){var q,F,se,pe=z;for(q in co(pe)&&(pe=pe(I)),pe)I[q]=Z[q]=q==="className"?(F=Z[q],se=pe[q],F&&se?F+" "+se:F||se):pe[q]}),[I,Z]}($f(B,Y.useContext(Hs),J)||dn,B,O),mt=Re[0],ae=Re[1],Q=function(C,f,P,I){var Z=Xf(),z=qf(),q=f?C.generateAndInjectStyles(dn,Z,z):C.generateAndInjectStyles(P,Z,z);return q}(_,b,mt),N=R,K=ae.$as||B.$as||ae.as||B.as||Te,te=Lo(K),g=ae!==B?Rt({},B,{},ae):B,y={};for(var v in g)v[0]!=="$"&&v!=="as"&&(v==="forwardedAs"?y.as=g[v]:(ye?ye(v,aA,K):!te||aA(v))&&(y[v]=g[v]));return B.style&&ae.style!==B.style&&(y.style=Rt({},B.style,{},ae.style)),y.className=Array.prototype.concat(me,Ie,Q!==Ie?Q:null,B.className,ae.className).filter(Boolean).join(" "),y.ref=N,Y.createElement(K,y)}(S,A,d,M)};return c.displayName=m,(S=Tn.forwardRef(c)).attrs=p,S.componentStyle=E,S.displayName=m,S.shouldForwardProp=w,S.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Ii,S.styledComponentId=h,S.target=r?e.target:e,S.withComponent=function(A){var d=t.componentId,k=function(R,b){if(R==null)return{};var O,_,J={},me=Object.keys(R);for(_=0;_<me.length;_++)O=me[_],b.indexOf(O)>=0||(J[O]=R[O]);return J}(t,["componentId"]),B=d&&d+"-"+(Lo(A)?A:Ll(fA(A)));return tp(A,Rt({},k,{attrs:p,componentId:B}),n)},Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(A){this._foldedDefaultProps=r?ep({},e.defaultProps,A):A}}),Object.defineProperty(S,"toString",{value:function(){return"."+S.styledComponentId}}),o&&vg(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),S}var Fa=function(e){return function t(n,r,o){if(o===void 0&&(o=dn),!Ao.isValidElementType(r))return wo(1,String(r));var i=function(){return n(r,o,Bt.apply(void 0,arguments))};return i.withConfig=function(l){return t(n,r,Rt({},o,{},l))},i.attrs=function(l){return t(n,r,Rt({},o,{attrs:Array.prototype.concat(o.attrs,l).filter(Boolean)}))},i}(tp,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Fa[e]=Fa(e)});var Xg=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Hf(n),Di.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var l=i(On(this.rules,r,o,i).join(""),""),a=this.componentId+n;o.insertRules(a,a,l)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&Di.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function np(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Bt.apply(void 0,[e].concat(n)),i="sc-global-"+_f(JSON.stringify(o)),l=new Xg(o,i);function a(u){var m=Xf(),h=qf(),p=Y.useContext(Hs),w=Y.useRef(m.allocateGSInstance(i)).current;return m.server&&s(w,u,m,p,h),Y.useLayoutEffect(function(){if(!m.server)return s(w,u,m,p,h),function(){return l.removeStyles(w,m)}},[w,u,m,p,h]),null}function s(u,m,h,p,w){if(l.isStatic)l.renderStyles(u,xg,h,w);else{var S=Rt({},m,{theme:$f(m,p,a.defaultProps)});l.renderStyles(u,S,h,w)}}return Tn.memo(a)}const G=Fa,qg="/Portfolio/assets/w95fa-37d341cd.woff",$g="/Portfolio/assets/w95fa-d81cbd6c.woff2",_g=np`
    @font-face {
        font-family: 'w95fa';
        src: local('w95fa'), local('w95fa'),
        url(${qg}) format('woff'),
        url(${$g}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`,he=({justify:e,align:t})=>Bt`
  display: flex;
  justify-content: ${e};
  align-items: ${t};
`,yr="w95fa, sans-serif",L="@media (max-width: 1440px)",U="@media (max-width: 992px)",j="@media (max-width: 768px)",Ce="@media (max-width: 480px)",em=Tn.memo(np`${Bt`
    * {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
    }

    body {
      background-color: #008080;
      overflow: hidden;
      font-family: ${yr};
      height: 155vh;
      /* width: 130vw; */

      ${U} {
        height: 135vh;
      }

      ${j} {
        height: 120vh;
      }
    }
  `}`),tm=G.section`
  height: 95vh;
  width: 100vw;
`,Ee=Bt`
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  touch-action: none;
`;var Ot={},nm={get exports(){return Ot},set exports(e){Ot=e}},rp={},Qi={},rm={get exports(){return Qi},set exports(e){Qi=e}},om="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",im=om,lm=im;function op(){}function ip(){}ip.resetWarningCache=op;var am=function(){function e(r,o,i,l,a,s){if(s!==lm){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ip,resetWarningCache:op};return n.PropTypes=n,n};rm.exports=am();function lp(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=lp(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function yA(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=lp(e))&&(r&&(r+=" "),r+=t);return r}const sm=Object.freeze(Object.defineProperty({__proto__:null,clsx:yA,default:yA},Symbol.toStringTag,{value:"Module"})),um=Dp(sm);var ge={},Ut={};Object.defineProperty(Ut,"__esModule",{value:!0});Ut.dontSetMe=dm;Ut.findInArray=Am;Ut.int=pm;Ut.isFunction=cm;Ut.isNum=fm;function Am(e,t){for(var n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function cm(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function fm(e){return typeof e=="number"&&!isNaN(e)}function pm(e){return parseInt(e,10)}function dm(e,t,n){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(n," - do not set this, set it on the child."))}var zn={};Object.defineProperty(zn,"__esModule",{value:!0});zn.browserPrefixToKey=sp;zn.browserPrefixToStyle=hm;zn.default=void 0;zn.getPrefix=ap;var Gl=["Moz","Webkit","O","ms"];function ap(){var e,t,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";var r=(e=window.document)===null||e===void 0||(t=e.documentElement)===null||t===void 0?void 0:t.style;if(!r||n in r)return"";for(var o=0;o<Gl.length;o++)if(sp(n,Gl[o])in r)return Gl[o];return""}function sp(e,t){return t?"".concat(t).concat(gm(e)):e}function hm(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e}function gm(e){for(var t="",n=!0,r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):e[r]==="-"?n=!0:t+=e[r];return t}var mm=ap();zn.default=mm;function Ya(e){return Ya=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ya(e)}Object.defineProperty(ge,"__esModule",{value:!0});ge.addClassName=pp;ge.addEvent=wm;ge.addUserSelectStyles=Rm;ge.createCSSTransform=Bm;ge.createSVGTransform=Dm;ge.getTouch=Qm;ge.getTouchIdentifier=Pm;ge.getTranslation=Ws;ge.innerHeight=Cm;ge.innerWidth=Em;ge.matchesSelector=fp;ge.matchesSelectorAndParentsTo=vm;ge.offsetXYFromParent=Im;ge.outerHeight=Sm;ge.outerWidth=km;ge.removeClassName=dp;ge.removeEvent=xm;ge.removeUserSelectStyles=Mm;var it=Ut,vA=ym(zn);function up(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(up=function(o){return o?n:t})(e)}function ym(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||Ya(e)!=="object"&&typeof e!="function")return{default:e};var n=up(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function wA(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ap(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wA(Object(n),!0).forEach(function(r){cp(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wA(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cp(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var No="";function fp(e,t){return No||(No=(0,it.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,it.isFunction)(e[n])})),(0,it.isFunction)(e[No])?e[No](t):!1}function vm(e,t,n){var r=e;do{if(fp(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function wm(e,t,n,r){if(e){var o=Ap({capture:!0},r);e.addEventListener?e.addEventListener(t,n,o):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}}function xm(e,t,n,r){if(e){var o=Ap({capture:!0},r);e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}}function Sm(e){var t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,it.int)(n.borderTopWidth),t+=(0,it.int)(n.borderBottomWidth),t}function km(e){var t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,it.int)(n.borderLeftWidth),t+=(0,it.int)(n.borderRightWidth),t}function Cm(e){var t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,it.int)(n.paddingTop),t-=(0,it.int)(n.paddingBottom),t}function Em(e){var t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,it.int)(n.paddingLeft),t-=(0,it.int)(n.paddingRight),t}function Im(e,t,n){var r=t===t.ownerDocument.body,o=r?{left:0,top:0}:t.getBoundingClientRect(),i=(e.clientX+t.scrollLeft-o.left)/n,l=(e.clientY+t.scrollTop-o.top)/n;return{x:i,y:l}}function Bm(e,t){var n=Ws(e,t,"px");return cp({},(0,vA.browserPrefixToKey)("transform",vA.default),n)}function Dm(e,t){var n=Ws(e,t,"");return n}function Ws(e,t,n){var r=e.x,o=e.y,i="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(t){var l="".concat(typeof t.x=="string"?t.x:t.x+n),a="".concat(typeof t.y=="string"?t.y:t.y+n);i="translate(".concat(l,", ").concat(a,")")+i}return i}function Qm(e,t){return e.targetTouches&&(0,it.findInArray)(e.targetTouches,function(n){return t===n.identifier})||e.changedTouches&&(0,it.findInArray)(e.changedTouches,function(n){return t===n.identifier})}function Pm(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function Rm(e){if(e){var t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&pp(e.body,"react-draggable-transparent-selection")}}function Mm(e){if(e)try{if(e.body&&dp(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{var t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function pp(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function dp(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}var jt={};Object.defineProperty(jt,"__esModule",{value:!0});jt.canDragX=Tm;jt.canDragY=Um;jt.createCoreData=zm;jt.createDraggableData=Km;jt.getBoundPosition=bm;jt.getControlPosition=jm;jt.snapToGrid=Om;var tt=Ut,er=ge;function bm(e,t,n){if(!e.props.bounds)return[t,n];var r=e.props.bounds;r=typeof r=="string"?r:Lm(r);var o=Vs(e);if(typeof r=="string"){var i=o.ownerDocument,l=i.defaultView,a;if(r==="parent"?a=o.parentNode:a=i.querySelector(r),!(a instanceof l.HTMLElement))throw new Error('Bounds selector "'+r+'" could not find an element.');var s=a,u=l.getComputedStyle(o),m=l.getComputedStyle(s);r={left:-o.offsetLeft+(0,tt.int)(m.paddingLeft)+(0,tt.int)(u.marginLeft),top:-o.offsetTop+(0,tt.int)(m.paddingTop)+(0,tt.int)(u.marginTop),right:(0,er.innerWidth)(s)-(0,er.outerWidth)(o)-o.offsetLeft+(0,tt.int)(m.paddingRight)-(0,tt.int)(u.marginRight),bottom:(0,er.innerHeight)(s)-(0,er.outerHeight)(o)-o.offsetTop+(0,tt.int)(m.paddingBottom)-(0,tt.int)(u.marginBottom)}}return(0,tt.isNum)(r.right)&&(t=Math.min(t,r.right)),(0,tt.isNum)(r.bottom)&&(n=Math.min(n,r.bottom)),(0,tt.isNum)(r.left)&&(t=Math.max(t,r.left)),(0,tt.isNum)(r.top)&&(n=Math.max(n,r.top)),[t,n]}function Om(e,t,n){var r=Math.round(t/e[0])*e[0],o=Math.round(n/e[1])*e[1];return[r,o]}function Tm(e){return e.props.axis==="both"||e.props.axis==="x"}function Um(e){return e.props.axis==="both"||e.props.axis==="y"}function jm(e,t,n){var r=typeof t=="number"?(0,er.getTouch)(e,t):null;if(typeof t=="number"&&!r)return null;var o=Vs(n),i=n.props.offsetParent||o.offsetParent||o.ownerDocument.body;return(0,er.offsetXYFromParent)(r||e,i,n.props.scale)}function zm(e,t,n){var r=e.state,o=!(0,tt.isNum)(r.lastX),i=Vs(e);return o?{node:i,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:i,deltaX:t-r.lastX,deltaY:n-r.lastY,lastX:r.lastX,lastY:r.lastY,x:t,y:n}}function Km(e,t){var n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function Lm(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function Vs(e){var t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var il={},ll={};Object.defineProperty(ll,"__esModule",{value:!0});ll.default=Nm;function Nm(){}function Pi(e){return Pi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pi(e)}Object.defineProperty(il,"__esModule",{value:!0});il.default=void 0;var Fl=Fm(Y),et=Xs(Qi),Gm=Xs(Zr),Ne=ge,qt=jt,Yl=Ut,Qr=Xs(ll);function Xs(e){return e&&e.__esModule?e:{default:e}}function hp(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(hp=function(o){return o?n:t})(e)}function Fm(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||Pi(e)!=="object"&&typeof e!="function")return{default:e};var n=hp(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function xA(e,t){return Hm(e)||Zm(e,t)||Jm(e,t)||Ym()}function Ym(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jm(e,t){if(e){if(typeof e=="string")return SA(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SA(e,t)}}function SA(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Zm(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],o=!0,i=!1,l,a;try{for(n=n.call(e);!(o=(l=n.next()).done)&&(r.push(l.value),!(t&&r.length===t));o=!0);}catch(s){i=!0,a=s}finally{try{!o&&n.return!=null&&n.return()}finally{if(i)throw a}}return r}}function Hm(e){if(Array.isArray(e))return e}function Wm(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function kA(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Vm(e,t,n){return t&&kA(e.prototype,t),n&&kA(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Xm(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ja(e,t)}function Ja(e,t){return Ja=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Ja(e,t)}function qm(e){var t=_m();return function(){var r=Ri(e),o;if(t){var i=Ri(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return $m(this,o)}}function $m(e,t){if(t&&(Pi(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ge(e)}function Ge(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _m(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ri(e){return Ri=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ri(e)}function At(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var wt={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}},$t=wt.mouse,al=function(e){Xm(n,e);var t=qm(n);function n(){var r;Wm(this,n);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return r=t.call.apply(t,[this].concat(i)),At(Ge(r),"state",{dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null}),At(Ge(r),"mounted",!1),At(Ge(r),"handleDragStart",function(a){if(r.props.onMouseDown(a),!r.props.allowAnyClick&&typeof a.button=="number"&&a.button!==0)return!1;var s=r.findDOMNode();if(!s||!s.ownerDocument||!s.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");var u=s.ownerDocument;if(!(r.props.disabled||!(a.target instanceof u.defaultView.Node)||r.props.handle&&!(0,Ne.matchesSelectorAndParentsTo)(a.target,r.props.handle,s)||r.props.cancel&&(0,Ne.matchesSelectorAndParentsTo)(a.target,r.props.cancel,s))){a.type==="touchstart"&&a.preventDefault();var m=(0,Ne.getTouchIdentifier)(a);r.setState({touchIdentifier:m});var h=(0,qt.getControlPosition)(a,m,Ge(r));if(h!=null){var p=h.x,w=h.y,S=(0,qt.createCoreData)(Ge(r),p,w);(0,Qr.default)("DraggableCore: handleDragStart: %j",S),(0,Qr.default)("calling",r.props.onStart);var E=r.props.onStart(a,S);E===!1||r.mounted===!1||(r.props.enableUserSelectHack&&(0,Ne.addUserSelectStyles)(u),r.setState({dragging:!0,lastX:p,lastY:w}),(0,Ne.addEvent)(u,$t.move,r.handleDrag),(0,Ne.addEvent)(u,$t.stop,r.handleDragStop))}}}),At(Ge(r),"handleDrag",function(a){var s=(0,qt.getControlPosition)(a,r.state.touchIdentifier,Ge(r));if(s!=null){var u=s.x,m=s.y;if(Array.isArray(r.props.grid)){var h=u-r.state.lastX,p=m-r.state.lastY,w=(0,qt.snapToGrid)(r.props.grid,h,p),S=xA(w,2);if(h=S[0],p=S[1],!h&&!p)return;u=r.state.lastX+h,m=r.state.lastY+p}var E=(0,qt.createCoreData)(Ge(r),u,m);(0,Qr.default)("DraggableCore: handleDrag: %j",E);var M=r.props.onDrag(a,E);if(M===!1||r.mounted===!1){try{r.handleDragStop(new MouseEvent("mouseup"))}catch{var c=document.createEvent("MouseEvents");c.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),r.handleDragStop(c)}return}r.setState({lastX:u,lastY:m})}}),At(Ge(r),"handleDragStop",function(a){if(r.state.dragging){var s=(0,qt.getControlPosition)(a,r.state.touchIdentifier,Ge(r));if(s!=null){var u=s.x,m=s.y;if(Array.isArray(r.props.grid)){var h=u-r.state.lastX||0,p=m-r.state.lastY||0,w=(0,qt.snapToGrid)(r.props.grid,h,p),S=xA(w,2);h=S[0],p=S[1],u=r.state.lastX+h,m=r.state.lastY+p}var E=(0,qt.createCoreData)(Ge(r),u,m),M=r.props.onStop(a,E);if(M===!1||r.mounted===!1)return!1;var c=r.findDOMNode();c&&r.props.enableUserSelectHack&&(0,Ne.removeUserSelectStyles)(c.ownerDocument),(0,Qr.default)("DraggableCore: handleDragStop: %j",E),r.setState({dragging:!1,lastX:NaN,lastY:NaN}),c&&((0,Qr.default)("DraggableCore: Removing handlers"),(0,Ne.removeEvent)(c.ownerDocument,$t.move,r.handleDrag),(0,Ne.removeEvent)(c.ownerDocument,$t.stop,r.handleDragStop))}}}),At(Ge(r),"onMouseDown",function(a){return $t=wt.mouse,r.handleDragStart(a)}),At(Ge(r),"onMouseUp",function(a){return $t=wt.mouse,r.handleDragStop(a)}),At(Ge(r),"onTouchStart",function(a){return $t=wt.touch,r.handleDragStart(a)}),At(Ge(r),"onTouchEnd",function(a){return $t=wt.touch,r.handleDragStop(a)}),r}return Vm(n,[{key:"componentDidMount",value:function(){this.mounted=!0;var o=this.findDOMNode();o&&(0,Ne.addEvent)(o,wt.touch.start,this.onTouchStart,{passive:!1})}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var o=this.findDOMNode();if(o){var i=o.ownerDocument;(0,Ne.removeEvent)(i,wt.mouse.move,this.handleDrag),(0,Ne.removeEvent)(i,wt.touch.move,this.handleDrag),(0,Ne.removeEvent)(i,wt.mouse.stop,this.handleDragStop),(0,Ne.removeEvent)(i,wt.touch.stop,this.handleDragStop),(0,Ne.removeEvent)(o,wt.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,Ne.removeUserSelectStyles)(i)}}},{key:"findDOMNode",value:function(){var o,i,l;return(o=this.props)!==null&&o!==void 0&&o.nodeRef?(i=this.props)===null||i===void 0||(l=i.nodeRef)===null||l===void 0?void 0:l.current:Gm.default.findDOMNode(this)}},{key:"render",value:function(){return Fl.cloneElement(Fl.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}]),n}(Fl.Component);il.default=al;At(al,"displayName","DraggableCore");At(al,"propTypes",{allowAnyClick:et.default.bool,disabled:et.default.bool,enableUserSelectHack:et.default.bool,offsetParent:function(t,n){if(t[n]&&t[n].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:et.default.arrayOf(et.default.number),handle:et.default.string,cancel:et.default.string,nodeRef:et.default.object,onStart:et.default.func,onDrag:et.default.func,onStop:et.default.func,onMouseDown:et.default.func,scale:et.default.number,className:Yl.dontSetMe,style:Yl.dontSetMe,transform:Yl.dontSetMe});At(al,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){function t(g){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},t(g)}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return u.default}}),e.default=void 0;var n=S(Y),r=p(Qi),o=p(Zr),i=p(um),l=ge,a=jt,s=Ut,u=p(il),m=p(ll),h=["axis","bounds","children","defaultPosition","defaultClassName","defaultClassNameDragging","defaultClassNameDragged","position","positionOffset","scale"];function p(g){return g&&g.__esModule?g:{default:g}}function w(g){if(typeof WeakMap!="function")return null;var y=new WeakMap,v=new WeakMap;return(w=function(f){return f?v:y})(g)}function S(g,y){if(!y&&g&&g.__esModule)return g;if(g===null||t(g)!=="object"&&typeof g!="function")return{default:g};var v=w(y);if(v&&v.has(g))return v.get(g);var C={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in g)if(P!=="default"&&Object.prototype.hasOwnProperty.call(g,P)){var I=f?Object.getOwnPropertyDescriptor(g,P):null;I&&(I.get||I.set)?Object.defineProperty(C,P,I):C[P]=g[P]}return C.default=g,v&&v.set(g,C),C}function E(){return E=Object.assign||function(g){for(var y=1;y<arguments.length;y++){var v=arguments[y];for(var C in v)Object.prototype.hasOwnProperty.call(v,C)&&(g[C]=v[C])}return g},E.apply(this,arguments)}function M(g,y){if(g==null)return{};var v=c(g,y),C,f;if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(g);for(f=0;f<P.length;f++)C=P[f],!(y.indexOf(C)>=0)&&Object.prototype.propertyIsEnumerable.call(g,C)&&(v[C]=g[C])}return v}function c(g,y){if(g==null)return{};var v={},C=Object.keys(g),f,P;for(P=0;P<C.length;P++)f=C[P],!(y.indexOf(f)>=0)&&(v[f]=g[f]);return v}function A(g,y){var v=Object.keys(g);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(g);y&&(C=C.filter(function(f){return Object.getOwnPropertyDescriptor(g,f).enumerable})),v.push.apply(v,C)}return v}function d(g){for(var y=1;y<arguments.length;y++){var v=arguments[y]!=null?arguments[y]:{};y%2?A(Object(v),!0).forEach(function(C){K(g,C,v[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(v)):A(Object(v)).forEach(function(C){Object.defineProperty(g,C,Object.getOwnPropertyDescriptor(v,C))})}return g}function k(g,y){return _(g)||O(g,y)||R(g,y)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(g,y){if(g){if(typeof g=="string")return b(g,y);var v=Object.prototype.toString.call(g).slice(8,-1);if(v==="Object"&&g.constructor&&(v=g.constructor.name),v==="Map"||v==="Set")return Array.from(g);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return b(g,y)}}function b(g,y){(y==null||y>g.length)&&(y=g.length);for(var v=0,C=new Array(y);v<y;v++)C[v]=g[v];return C}function O(g,y){var v=g==null?null:typeof Symbol<"u"&&g[Symbol.iterator]||g["@@iterator"];if(v!=null){var C=[],f=!0,P=!1,I,Z;try{for(v=v.call(g);!(f=(I=v.next()).done)&&(C.push(I.value),!(y&&C.length===y));f=!0);}catch(z){P=!0,Z=z}finally{try{!f&&v.return!=null&&v.return()}finally{if(P)throw Z}}return C}}function _(g){if(Array.isArray(g))return g}function J(g,y){if(!(g instanceof y))throw new TypeError("Cannot call a class as a function")}function me(g,y){for(var v=0;v<y.length;v++){var C=y[v];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(g,C.key,C)}}function ye(g,y,v){return y&&me(g.prototype,y),v&&me(g,v),Object.defineProperty(g,"prototype",{writable:!1}),g}function Ie(g,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function");g.prototype=Object.create(y&&y.prototype,{constructor:{value:g,writable:!0,configurable:!0}}),Object.defineProperty(g,"prototype",{writable:!1}),y&&Te(g,y)}function Te(g,y){return Te=Object.setPrototypeOf||function(C,f){return C.__proto__=f,C},Te(g,y)}function Re(g){var y=Q();return function(){var C=N(g),f;if(y){var P=N(this).constructor;f=Reflect.construct(C,arguments,P)}else f=C.apply(this,arguments);return mt(this,f)}}function mt(g,y){if(y&&(t(y)==="object"||typeof y=="function"))return y;if(y!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ae(g)}function ae(g){if(g===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g}function Q(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function N(g){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(v){return v.__proto__||Object.getPrototypeOf(v)},N(g)}function K(g,y,v){return y in g?Object.defineProperty(g,y,{value:v,enumerable:!0,configurable:!0,writable:!0}):g[y]=v,g}var te=function(g){Ie(v,g);var y=Re(v);function v(C){var f;return J(this,v),f=y.call(this,C),K(ae(f),"onDragStart",function(P,I){(0,m.default)("Draggable: onDragStart: %j",I);var Z=f.props.onStart(P,(0,a.createDraggableData)(ae(f),I));if(Z===!1)return!1;f.setState({dragging:!0,dragged:!0})}),K(ae(f),"onDrag",function(P,I){if(!f.state.dragging)return!1;(0,m.default)("Draggable: onDrag: %j",I);var Z=(0,a.createDraggableData)(ae(f),I),z={x:Z.x,y:Z.y};if(f.props.bounds){var q=z.x,F=z.y;z.x+=f.state.slackX,z.y+=f.state.slackY;var se=(0,a.getBoundPosition)(ae(f),z.x,z.y),pe=k(se,2),V=pe[0],ve=pe[1];z.x=V,z.y=ve,z.slackX=f.state.slackX+(q-z.x),z.slackY=f.state.slackY+(F-z.y),Z.x=z.x,Z.y=z.y,Z.deltaX=z.x-f.state.x,Z.deltaY=z.y-f.state.y}var $=f.props.onDrag(P,Z);if($===!1)return!1;f.setState(z)}),K(ae(f),"onDragStop",function(P,I){if(!f.state.dragging)return!1;var Z=f.props.onStop(P,(0,a.createDraggableData)(ae(f),I));if(Z===!1)return!1;(0,m.default)("Draggable: onDragStop: %j",I);var z={dragging:!1,slackX:0,slackY:0},q=!!f.props.position;if(q){var F=f.props.position,se=F.x,pe=F.y;z.x=se,z.y=pe}f.setState(z)}),f.state={dragging:!1,dragged:!1,x:C.position?C.position.x:C.defaultPosition.x,y:C.position?C.position.y:C.defaultPosition.y,prevPropsPosition:d({},C.position),slackX:0,slackY:0,isElementSVG:!1},C.position&&!(C.onDrag||C.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."),f}return ye(v,[{key:"componentDidMount",value:function(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"findDOMNode",value:function(){var f,P,I;return(f=(P=this.props)===null||P===void 0||(I=P.nodeRef)===null||I===void 0?void 0:I.current)!==null&&f!==void 0?f:o.default.findDOMNode(this)}},{key:"render",value:function(){var f,P=this.props;P.axis,P.bounds;var I=P.children,Z=P.defaultPosition,z=P.defaultClassName,q=P.defaultClassNameDragging,F=P.defaultClassNameDragged,se=P.position,pe=P.positionOffset;P.scale;var V=M(P,h),ve={},$=null,Be=!!se,Wt=!Be||this.state.dragging,Se=se||Z,wn={x:(0,a.canDragX)(this)&&Wt?this.state.x:Se.x,y:(0,a.canDragY)(this)&&Wt?this.state.y:Se.y};this.state.isElementSVG?$=(0,l.createSVGTransform)(wn,pe):ve=(0,l.createCSSTransform)(wn,pe);var xn=(0,i.default)(I.props.className||"",z,(f={},K(f,q,this.state.dragging),K(f,F,this.state.dragged),f));return n.createElement(u.default,E({},V,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),n.cloneElement(n.Children.only(I),{className:xn,style:d(d({},I.props.style),ve),transform:$}))}}],[{key:"getDerivedStateFromProps",value:function(f,P){var I=f.position,Z=P.prevPropsPosition;return I&&(!Z||I.x!==Z.x||I.y!==Z.y)?((0,m.default)("Draggable: getDerivedStateFromProps %j",{position:I,prevPropsPosition:Z}),{x:I.x,y:I.y,prevPropsPosition:d({},I)}):null}}]),v}(n.Component);e.default=te,K(te,"displayName","Draggable"),K(te,"propTypes",d(d({},u.default.propTypes),{},{axis:r.default.oneOf(["both","x","y","none"]),bounds:r.default.oneOfType([r.default.shape({left:r.default.number,right:r.default.number,top:r.default.number,bottom:r.default.number}),r.default.string,r.default.oneOf([!1])]),defaultClassName:r.default.string,defaultClassNameDragging:r.default.string,defaultClassNameDragged:r.default.string,defaultPosition:r.default.shape({x:r.default.number,y:r.default.number}),positionOffset:r.default.shape({x:r.default.oneOfType([r.default.number,r.default.string]),y:r.default.oneOfType([r.default.number,r.default.string])}),position:r.default.shape({x:r.default.number,y:r.default.number}),className:s.dontSetMe,style:s.dontSetMe,transform:s.dontSetMe})),K(te,"defaultProps",d(d({},u.default.defaultProps),{},{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1}))})(rp);var gp=rp,mp=gp.default,e0=gp.DraggableCore;nm.exports=mp;Ot.default=mp;Ot.DraggableCore=e0;const Yr="data:image/png;base64,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",yp="/Portfolio/assets/shared-4c54f330.jpg",vp="/Portfolio/assets/sharedSmall-85d08d43.jpg",vr="data:image/jpeg;base64,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",sl=Bt`
  outline: none;

  img {
    height: 100px;
    width: 100px;
    /* image-rendering: pixelated; */
    margin-bottom: 0.5rem;

    ${Ee}

    ${U} {
      height: 70px;
      width: 70px;
    }

    ${Ce} {
      height: 50px;
      width: 50px;
    }
  }

  p {
    font-size: 1.875rem;
    color: #fff;
    background-color: ${({isClicked:e})=>e&&"rgba(29, 0, 208, 0.5)"};
    padding: 0 5px;

    ${Ee}

    pointer-events: none;

    ${U} {
      font-size: 1.4rem;
    }

    ${Ce} {
      font-size: 1.2rem;
    }
  }
`,t0=G.article`
  ${he({justify:"flex-start",align:"flex-start"})};
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  width: max-content;
  padding: 15px;

  ${Ce} {
    padding: 5px;
  }
`,n0=G.div`
  ${he({justify:"center",align:"center"})};
  flex-direction: column;
  position: relative;
  margin: 15px 50px 15px 10px;

  ${sl};
`,r0=G.div`
  ${he({justify:"center",align:"center"})};
  flex-direction: column;
  position: absolute;
  right: 1.875rem;
  bottom: 4.5rem;

  ${sl};

  ${Ce} {
    right: 1rem;
    bottom: 4rem;
  }
`,Mi=G.div`
  display: ${({isClicked:e})=>e?"block":"none"};
  background: #1d00d0;
  /* background: rgba(29, 0, 208, 0.5); */
  height: 100px;
  width: 100px;
  position: absolute;
  top: 0;
  mask-image: ${({iconName:e})=>`url(${e})`};
  -webkit-mask-image: ${({iconName:e})=>`url(${e})`};
  opacity: 0.5;

  ${U} {
    height: 70px;
    width: 70px;
  }

  ${Ce} {
    height: 50px;
    width: 50px;
  }

  ${({book:e})=>e&&Bt`
      ${j} {
        height: 50px;
        width: 50px;
      }
    `};

  ${({project:e})=>e&&Bt`
      ${L} {
        height: 80px;
        width: 80px;
      }

      ${U} {
        height: 60px;
        width: 60px;
      }

      ${j} {
        height: 45px;
        width: 45px;
      }
    `};
`,o0=G.section`
  background: url(${yp}) center/cover no-repeat;
  position: absolute;
  top: 0;
  left: 200px;
  height: 652px;
  width: 975px;

  ${L} {
    height: 500px;
    width: 747px;
  }

  ${U} {
    height: 334px;
    width: 500px;
  }

  ${j} {
    background: url(${vp}) center/contain no-repeat;
    height: 200px;
    width: 300px;
    top: 20px;
    left: 100px;
  }

  ${Ce} {
    left: 15px;
  }

  visibility: ${({isLoading:e})=>e?"hidden":"visible"};

  display: ${({isVisible:e})=>e?"block":"none"};
  z-index: ${({lastClicked:e})=>e==="book"?2:1};
`,i0=G.div`
  ${he({justify:"center",align:"center"})};
  flex-direction: column;

  position: absolute;
  top: 15rem;
  left: 17rem;

  cursor: pointer;

  ${sl}; /* @TODO: mozda ako ovdje stavim sherd direktno radice */

  ${L} {
    top: 11.5rem;
    left: 13.5rem;
  }

  ${U} {
    top: 8rem;
    left: 9rem;
  }

  ${j} {
    top: 6.5rem;
    left: 7rem;
  }

  img {
    height: 100px;
    width: 100px;

    ${U} {
      height: 70px;
      width: 70px;
    }

    ${j} {
      height: 50px;
      width: 50px;
    }
  }

  p {
    color: ${({isClicked:e})=>e?"#fff":"#000"};

    ${L} {
      font-size: 1.6rem;
    }

    ${U} {
      font-size: 1.3rem;
    }

    ${j} {
      font-size: 1rem;
    }
  }
`,l0=G.div`
  background: url(${vr}) center/contain no-repeat;
  height: 37px;
  width: 959px;
  margin: 0.5rem auto;
  cursor: grab;

  ${L} {
    height: 29px;
    width: 736px;
    margin: 0.35rem auto;
  }

  ${U} {
    height: 20px;
    width: 492px;
  }

  ${j} {
    height: 18px;
    width: 282px;
    margin: 0.15rem auto;
  }

  div {
    ${he({justify:"flex-start",align:"center"})};
    height: 37px;
    width: 270px;
    cursor: auto;
    ${Ee}

    ${L} {
      height: 29px;
      width: 220px;
    }

    ${U} {
      height: 18px;
      width: 155px;
    }

    ${j} {
      width: 140px;
    }

    img {
      height: 28px;
      width: 28px;
      margin: 0 0.5rem;

      ${Ee}

      ${L} {
        height: 23px;
        width: 23px;
      }

      ${U} {
        height: 18px;
        width: 18px;
      }

      ${j} {
        height: 15px;
        width: 15px;
      }
    }

    p {
      font-size: 1.875rem;
      color: #fff;

      ${L} {
        font-size: 1.5rem;
        margin-top: 0.2rem;
      }

      ${U} {
        font-size: 1rem;
        margin-top: 0.1rem;
      }

      ${j} {
        font-size: 0.9rem;
        margin-top: 0;
      }
    }
  }
`,a0=G.article`
  position: absolute;
  top: 100px;
  left: 30px;

  ${L} {
    top: 80px;
    left: 25px;
  }

  ${U} {
    top: 50px;
    left: 15px;
    max-height: 275px;
  }

  ${j} {
    top: 35px;
    left: 17px;
    max-height: 155px;
  }

  p {
    font-size: 1.5rem;
    line-height: 40px;
    font-weight: 500;
    padding-right: 80px;
    margin-bottom: 0.5rem;

    ${L} {
      font-size: 1.2rem;
      line-height: 30px;
      margin: 0.5rem 0.2rem;
      padding-right: 30px;
    }

    ${j} {
      font-size: 0.8rem;
      line-height: 18px;
      margin: 0.4rem 0;
    }

    ${Ee}
  }
`,wp=Y.createContext({}),s0=({children:e})=>{const[t,n]=Y.useState({about:!1,work:!1,contact:!1,recycle:!1,book:!1}),[r,o]=Y.useState({about:!1,work:!1,contact:!1,recycle:!1,time:!1,book:!1}),[i,l]=Y.useState(""),[a,s]=Y.useState({about:!0,work:!0,contact:!0,recycle:!0,book:!1,start:!1}),[u,m]=Y.useState(!0),[h,p]=Y.useState(!1),[w,S]=Y.useState(!1);return x(wp.Provider,{value:{isClicked:t,setIsClicked:n,isOpen:r,setIsOpen:o,lastClicked:i,setLastClicked:l,isVisible:a,setIsVisible:s,isShutDown:w,setIsShutDown:S,isLoading:u,setIsLoading:m,isShuttingDown:h,setIsShuttingDown:p},children:e})},Pe=()=>Y.useContext(wp),u0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABTVBMVEUAAAAAAAAICAgAAAAdHR0KCgoAAAACAgIBAQFqamqoqKgBAQEAAAADAwMAAAAAAAAAAAAAAACqqqoXFxe1tbUVFRUZGRkFBQUCAgIAAAAAAAABAQEDAwMAAAABAQEAAAAAAAAAAAAAAAAAAAAAAABaWlo9PT2lpaUAAAB3d3dTU1NNTU0QEBA0NDRhYWE/Pz9qamoLCwsLCwsVFRUcHBwAAAABAQE0NDRDQ0MpKSk3NzcCAgIwMDA8PDw2NjYpKSkXFxcAAAAAAAAAAAAAAAAAAAD////19fX9/f0jIyPY2NiQkJD6+vrDw8Px8fHs7Ozc3NzR0dGLi4t5eXljY2Pk5OTHx8e+vr6enp6Xl5eTk5OHh4eEhIR2dnZVVVVPT08sLCwVFRX7+/vt7e3o6Oje3t7V1dXU1NSwsLBxcXFnZ2dcXFxLS0s2NjYRERGt/DyfAAAARnRSTlMABvsV/t/dcv7+/frLd0k/EQz+/v3t7OvXxK6afmBeV1E1JSEd/vz79fTz7ezo5d/Y1c/Kwba1raqpp6ajooqIh2MtKBcLeGfKDQAAASFJREFUGNNdzmVzwkAQgOGFpCG4F6dQqLu7t9eLQITgXvf//7F3STOd4f12z8ztLvhCYOewA+922MYUN2XGgbOxYys3fhFJHzw47xu7jIU+XqCNFwnKsaOyiUz8SVGUx/csQSR7TmfNRdMyqoqo5qKIHhbObijGK1Vdqg8sRDhyeE30hNUlcZAMUKTqOSYTmH2h2U7OAEUzz0EJQhm21U4FLcQo5nYLe+VMNIK1Lx/9jjUJ9dK53BWz+vbaxdqQLnqen8O9rHmSakgdTE9SNwLnkrhJxt8lhq1PqdP3g3etCHm3XHM5IO2NfgujEctBoghwe9GtrxeA+2lWSAYPJSC5+rKRB45naU4ezMKXenU5GGL+Aiv/kroShIkc/q3C/+sXkRI2ebgCrnAAAAAASUVORK5CYII=",wr=(e=1e3)=>{const[t,n]=Y.useState(!0);return Y.useEffect(()=>{const r=setTimeout(()=>{n(!1)},e);return()=>{clearTimeout(r)}},[e]),Y.useEffect(()=>{t?document.body.style.cursor=`url(${u0}), auto`:document.body.style.cursor="auto"},[t]),{isLoading:t}},qs=(e,t)=>{Y.useEffect(()=>{const n=r=>{var o;(o=e.current)!=null&&o.contains(r.target)||t()};return document.addEventListener("mousedown",n,!0),()=>{document.removeEventListener("mousedown",n,!0)}},[])},Kn=()=>{const[e,t]=Y.useState(window.innerWidth);return Y.useEffect(()=>{const n=()=>{t(window.innerWidth)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),e},A0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPBAMAAADwnzkiAAAAKlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKE86IAAAADXRSTlMA358ffxBgX+/Pb0A/+9uGsQAAAGBJREFUCNdjuHuRAQgY715guHsjLYAhLAPIcpl714DB9u4UBwYGXTBLAagkeK2goOziAJDq3Lt37xYwgMAh3btKGxjAgPcuAwRsgogh1CH0IsxD2AG0tzyAIbwCaC/cLQCc/S6Jg88bsAAAAABJRU5ErkJggg==",c0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASAQMAAABsABwUAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAABJJREFUCNdj+P//AAomDcL1AQAV/SJ1VnBIYQAAAABJRU5ErkJggg==",f0="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAAEAAwDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAr/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACf8H//xAAUEAEAAAAAAAAAAAAAAAAAAAAQ/9oACAEBAAE/AD//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AD//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AD//2Q==",p0=G.div`
  ${he({justify:"center",align:"center"})};
  height: 53px;
  width: 125px;
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 0.8rem;

  > div {
    ${he({justify:"center",align:"center"})};

    button {
      margin: 0 0.3rem;
    }
  }

  ${({iconName:e})=>e==="recycle"?Bt`
          height: 48px;
          width: 115px;

          button {
            height: 19.5px;
            width: 22.5px;
          }

          ${L} {
            height: 37px;
            width: 95px;

            button {
              height: 15px;
              width: 19px;

              img {
                scale: 0.8;
              }
            }
          }

          ${U} {
            height: 25px;
            width: 70px;

            button {
              height: 8px;
              width: 11px;

              img {
                scale: 0.5;
              }
            }
          }

          ${j} {
            height: 30px;

            button {
              height: 10px;
              width: 12px;
            }
          }
        `:e==="book"?Bt`
            ${L} {
              height: 41px;
              width: 110px;

              button {
                height: 19px;
                width: 22px;

                img {
                  scale: 0.9;
                }
              }
            }

            ${U} {
              height: 29.5px;
              width: 85px;

              button {
                height: 12px;
                width: 14px;

                img {
                  scale: 0.6;
                }
              }
            }

            ${j} {
              height: 23.5px;
              width: 80px;

              button {
                height: 8px;
                width: 10px;

                img {
                  scale: 0.5;
                }
              }
            }
          `:""}
`,xp=Bt`
  ${he({justify:"center",align:"center"})};
  background-color: #c0c0c0;
  box-shadow:
    -2px -2px #e0dede,
    -2px 0 #e0dede,
    0 -2px #e0dede,
    -4px -4px white,
    -4px 0 white,
    0 -4px white,
    2px 2px #818181,
    0 2px #818181,
    2px 0 #818181,
    2px -2px #e0dede,
    -2px 2px #818181,
    -4px 2px white,
    -4px 4px black,
    4px 4px black,
    4px 0 black,
    0 4px black,
    2px -4px white,
    4px -4px black;

  height: 22px;
  width: 25px;
  margin-left: 0.5rem;

  &:active {
    box-shadow:
      -2px -2px #818181,
      -2px 0 #818181,
      0 -2px #818181,
      -4px -4px black,
      -4px 0 black,
      0 -4px black,
      2px 2px #e0dede,
      0 2px #e0dede,
      2px 0 #e0dede,
      2px -2px #818181,
      -2px 2px #e0dede,
      -4px 2px black,
      -4px 4px white,
      4px 4px white,
      4px 0 white,
      0 4px white,
      2px -4px black,
      4px -4px white;

    & img {
      transform: translate(1px, 1px);
    }
  }

  img {
    ${Ee}
  }
`,CA=G.button`
  ${xp};
  height: ${({iconName:e})=>e==="work"&&"20px"};
`,d0=G.button`
  ${xp};
  justify-content: flex-start !important;
  align-items: flex-end !important;

  height: ${({iconName:e})=>e==="work"&&"20px"};

  img {
    margin: 0.2rem;

    ${U} {
      margin: 0;
    }
  }
`,xo=({iconName:e})=>{const{isOpen:t,setIsOpen:n,isVisible:r,setIsVisible:o}=Pe();return W(p0,{iconName:e,children:[W("div",{children:[x(d0,{iconName:e,onClick:()=>o({...r,[e]:!1}),children:x("img",{src:f0,alt:"minimize"})}),x(CA,{iconName:e,children:x("img",{src:c0,alt:"maximize"})})]}),x(CA,{iconName:e,onClick:()=>n({...t,[e]:!1}),children:x("img",{src:A0,alt:"close"})})]})},h0=()=>{const{lastClicked:e,isVisible:t,setLastClicked:n}=Pe(),{isLoading:r}=wr(1e3);return x(Tt,{children:x(Ot,{handle:".handle",bounds:"body",cancel:".handle *",children:W(o0,{onMouseDownCapture:()=>n("book"),isLoading:r,lastClicked:e,isVisible:t.book,"data-no-select":"true",children:[x(xo,{iconName:"book"}),x(l0,{className:"handle",isVisible:t.book,children:W("div",{children:[x("img",{src:Yr,alt:"handleImg"}),x("p",{children:"General - Notepad"})]})}),W(a0,{children:[x("p",{children:"Site Design and Development:"}),x("p",{children:"Development: Aleksa Bubanja - aleksa3b@gmail.com"}),x("p",{children:"Design: Tadija Bubanja - tadija3b@gmail.com"}),x("p",{children:"Special thanks to Tadija Bubanja for the visually appealing design elements that enhance the user experience."})]})]})})})},ul="data:image/png;base64,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",g0="data:image/jpeg;base64,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",m0="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAgMDAwMDBAcFBAQEBAkGBwUHCgkLCwoJCgoMDREODAwQDAoKDhQPEBESExMTCw4UFhQSFhESExL/2wBDAQMDAwQEBAgFBQgSDAoMEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhL/wgARCAAsACoDAREAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAcICQoGAgP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAABpHoAFYVUmlMVgAJMprNKZAUgYWCnUlNZpTFUR7JDCTKazRkKgAFGVADIObAD5nPn/xAA7EAAABAMDBBAFBQAAAAAAAAABAgMEAAUGBwgREBIXNxMUGSFUVVZ0dZKVlrTB0dIJMTJBQhUgImGC/9oACAEBAAE/AGPwnLCnbI7pYJ81RIfMxXng+2NyesA4e/7xxuT1gHD3/eONyesA4e/7xxeQuAWD2L2XzmeSsk8mMyBg7FjsE82UElyIHOQxy/cmJclS6unnPk/L9l7jU/OejnvhlMlS6unnPk/KL41PWysCEquxCq5+DYhEGh6alLDZT44qCdzn9QBDNhC93bW6XTRbV9P1FVjgQhC5mJjD/mLn1MWu/po1RblVc8c7farNiUzNWGwqs1CrBmrCb+yEH8fzi9xqfnPRz3wymSpdXTznyflBiAcglOAGKYMBAfuES65NQMutiXrEkrkoyU0rK1QpoJSUEEHBTkMDop876/4iH05L3Gp+c9HPfDKZK/tBp6naUWlE6maLWYuVyLpIGIcRMnjhnYgGHzKMaR6b41R6h/SNI9N8ao9Q/pGkem+NUeof0i9BVMqn9ks9SlDwjlRKWPTHApTBgG1z5K8vIWnWlzVCY1nWs8evGyAN0zpLA2AEwMY2GakBS/Mw7+GMaSqu5UVD2mt7o0lVdyoqHtNb3RpKq7lRUPaa3uhxaFVLtBVB1Uk+WRWIJFE1JiqYpyjvCAgJt8BDJ//EABQRAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQIBAT8AE//EABQRAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQMBAT8AE//Z",y0="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAICAgICAQICAgIDAgIDAwYEAwMDAwcFBQQGCAcJCAgHCAgJCg0LCQoMCggICw8LDA0ODg8OCQsQERAOEQ0ODg7/2wBDAQIDAwMDAwcEBAcOCQgJDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg7/wgARCAAsACoDAREAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAgHCQoEBQb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACZTsACCigM3AC/gArxmgNwAtJVAWzC2maA3AFT4lI9h9SZoDbAL6AC2mbMnQ8YAOYi0//EADgQAAAFAQQFCAkFAAAAAAAAAAECAwQFBgAHCBEQEhM4lAkWFxkhV3XUFCJCVVaWtMHRIDNRYZH/2gAIAQEAAT8AYckHhrk2J3LZ/WREgPqevPo+Wt1OeHL3nV/zGh5a3U54cvedX/MaHlrdTnhy951f8xoeWtiJ5NnDJcfhhqir1pCszyycQ9PDAEyismLpJsoqntQ2BfUzJoqfdvkPE0/t+jFxugVN4S/+kU0VPu3yHiaf2tNTsNTsCrJzsm1iWJOwV3jkiJBNkIgUDHEAzHIcgztDcpNHPcaii68fOEueeRCbRlDnj2RXiEiZUgCudTaftauv7doyVi5qIJIQ0k1lmBxECOWTgqyRhAchADFEQ7Bti43QKm8Jf/SKaKn3b5DxNP7WxV4dL5MQL5GAgbzYeAu1KkgseDfRmuoL1MVc1tqQmvkJTgGrrW6rK8fvQpvg3FsKtwt8Vw0erS1V3lRNUXcIMlgi4VhG7I7d0ouVUywqmIBzBltQyE3t2xcboFTeEv8A6RTRW1WUvE3Ju4eTqKNj5ZR4msmzcPSJrGTzy1wII5iGYD2253Ur8SRnGp/m3O6lfiSM41P8253Ur8SRnGp/m2Kmbh5TCNVKcbKtH6hId+Y5W65TiUPRFP4HROYmb/akliPp69eflXhEgSKqu7zMBAERAP8ARG3TxfF3iTPE26eL4u8SZ4m3TxfF3iTPE2e32XsSMO7j31eyzpk6RMi4RUXzKoQwCUxR/oQHR//EABQRAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQIBAT8AE//EABQRAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQMBAT8AE//Z",v0="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBgYGBQcGBgYICAcJCxIMCwoKCxcQEQ0SGxccHBoXGhkdISokHR8oIBkaJTIlKCwtLzAvHSM0ODQuNyouLy7/2wBDAQgICAsKCxYMDBYuHhoeLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi7/wgARCAFCAB4DAREAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAUHCAMG/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA9kcgI8aXEoEDNLCUCBmlhKBAzSwlAgZpYSgQM0sJQIGaWEoEDNLCUCBmlhKBAzSwlAgZpYSgQM0sJQIGaWEoEDNLCUCBmlhKBAzSwlAgZpYSgQM0sJQIGaWEoEDNLCUCBmlhKBAzSwlAgZpYSgQM0sJQIGaWEoEDNLCUCBmlhKBAzSwlAgZpYSgQM0sJQIGaWEoEDNLCUCBmlhKBAzSwlAgZpYSgQM0sJQIGaWEoEDNLCUCBmhBKBECSgAH/xAAyEAAAAwkAAQEFBwUAAAAAAAACBHEAAQUHEDQ1sbIDBhETFaPSEhQXM1RV0SAhQWJk/9oACAEBAAE/AByflh4QAGZhHuvef9Jn62/CeU/7d8419bfhPKf9u+ca+tp6+mfRvpv4OD0r4fdDH7371+b/AKPB+Y0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A3qKOQvxvLkxmvZ5/A4XvA/YF/b2+x7v8N8bhf6r5Yv4b43C/wBV8sX8NPXz+IydIebwD+0ATx6B/T//xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAECAQE/ACT/xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAEDAQE/ACT/2Q==",w0=G.section`
  background: url(${yp}) center/contain no-repeat;
  position: absolute;
  top: 0;
  left: 200px;
  height: 652px;
  width: 975px;

  ${L} {
    height: 500px;
    width: 747px;
  }

  ${U} {
    height: 334px;
    width: 500px;
  }

  ${j} {
    background: url(${vp}) center/contain no-repeat;
    height: 200px;
    width: 300px;
    top: 10px;
    left: 100px;
  }

  ${Ce} {
    left: 15px;
  }

  overflow: hidden;
  visibility: ${({isLoading:e})=>e?"hidden":"visible"};

  display: ${({isVisible:e})=>e?"block":"none"};
  z-index: ${({lastClicked:e})=>e==="about"?2:1};

  /*resize: both;
  overflow: auto; */

  > div {
    ${L} {
      height: 40px;
      width: 110px;

      button {
        height: 19px;
        width: 22px;

        img {
          scale: 0.9;
        }
      }
    }

    ${U} {
      height: 29.5px;
      width: 85px;

      button {
        height: 12px;
        width: 14px;

        img {
          scale: 0.6;
        }
      }
    }

    ${j} {
      height: 24px;

      button {
        height: 9px;
        width: 11px;

        img {
          scale: 0.5;
        }
      }
    }
  }
`,x0=G.article`
  background: url(${vr}) center/cover no-repeat;
  height: 37px;
  width: 959px;
  margin: 0.5rem auto;
  cursor: grab;

  ${L} {
    height: 29px;
    width: 736px;
    margin: 0.35rem auto;
  }

  ${U} {
    height: 20px;
    width: 492px;
  }

  ${j} {
    height: 18px;
    width: 282px;
    margin: 0.15rem auto;
  }

  div {
    ${he({justify:"flex-start",align:"center"})};
    height: 37px;
    width: 165px;

    ${L} {
      height: 29px;
      width: 135px;
    }

    ${U} {
      height: 18px;
      width: 90px;
    }

    ${j} {
      width: 80px;
    }

    ${Ee}
    cursor: auto;

    img {
      height: 28px;
      width: 28px;
      margin: 0 0.5rem;
      image-rendering: pixelated;

      ${Ee}

      ${L} {
        height: 25px;
        width: 25px;
      }

      ${U} {
        height: 17px;
        width: 17px;
        margin: 0 0.3rem;
      }

      ${j} {
        height: 15px;
        width: 15px;
      }
    }

    p {
      font-size: 1.875rem;
      color: #fff;

      ${L} {
        font-size: 1.5rem;
      }

      ${U} {
        font-size: 1rem;
        margin-top: 0.3rem;
      }

      ${j} {
        font-size: 0.9rem;
        margin-top: 0.2rem;
      }
    }
  }
`,S0=G.article`
  position: absolute;
  top: 88px;
  left: 25px;
  padding-top: 5px;
  max-height: 550px;
  overflow: auto;

  ${L} {
    top: 80px;
    max-height: 400px;
    padding-top: 0;
  }

  ${U} {
    top: 50px;
    left: 15px;
    max-height: 275px;
  }

  ${j} {
    top: 40px;
    left: 17px;
    max-height: 155px;
  }

  p {
    font-size: 1.5rem;
    line-height: 40px;
    font-weight: 500;
    padding-right: 20px;
    margin-bottom: 1.2rem;
    ${Ee}
    pointer-events: none;

    ${L} {
      font-size: 1.3rem;
      line-height: 30px;
      margin-bottom: 1rem;
      padding-right: 30px;
    }

    ${U} {
      font-size: 1.1rem;
      line-height: 25px;
    }

    ${j} {
      font-size: 0.8rem;
      line-height: 18px;
      margin-bottom: 0.8rem;
    }

    &:last-of-type {
      margin-bottom: 3rem;

      ${U} {
        margin-bottom: 1rem;
      }
    }
  }

  ::-webkit-scrollbar {
    width: 55px;

    ${L} {
      display: none;
    }
  }

  ::-webkit-scrollbar-track {
    background: url(${g0}) center/contain no-repeat;
  }

  ::-webkit-scrollbar-thumb {
    background: url(${v0}) center/contain no-repeat;
  }

  ::-webkit-scrollbar-button:single-button {
    display: block;
    height: 37px;
    width: 37px;
  }

  ::-webkit-scrollbar-button:single-button:vertical:decrement {
    background: url(${y0}) center/contain no-repeat;
  }

  ::-webkit-scrollbar-button:single-button:vertical:increment {
    background: url(${m0}) center/contain no-repeat;
  }
`,k0=()=>{const{lastClicked:e,setLastClicked:t,isVisible:n}=Pe(),{isLoading:r}=wr();return x(Tt,{children:x(Ot,{handle:".handle",bounds:"body",cancel:".handle *",children:W(w0,{onMouseDownCapture:()=>t("about"),isLoading:r,lastClicked:e,isVisible:n.about,"data-no-select":"true",children:[x(xo,{iconName:"about"}),x(x0,{className:"handle",isVisible:n.about,children:W("div",{children:[x("img",{src:ul,alt:"handleImg"}),x("p",{children:"About Me"})]})}),W(S0,{children:[x("p",{children:"From my earliest memories, computers have been my playground. What began as a fascination with gaming evolved into a passion for crafting digital experiences. Starting with the foundations of programming, I soon found myself immersed in game development and eventually navigating the vast world of web development."}),x("p",{children:"As a quick learner and committed coder, I embrace each day as an opportunity for growth. Beyond proficiency, I value collaboration and respect for others` time—working seamlessly with senior developers."}),x("p",{children:"Every day is a new opportunity to learn and grow, and I seize it with both hands. My commitment to honing my skills is unwavering—I code daily, driven by the excitement of continuous improvement. Proficiency is just the beginning; I value your time and work harmoniously with senior developers."}),x("p",{children:"Beyond the screen, you`ll find me on the basketball or football court, exploring the latest movies, or immersing myself in the world of video games. This blend of enthusiasm, dedication, and a collaborative spirit defines my approach to coding. Let`s build something amazing together!"})]})]})})})},C0="/Portfolio/assets/github-9d54ac34.svg",E0="/Portfolio/assets/linkedIn-452b3bb0.svg",Al="data:image/png;base64,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",I0="/Portfolio/assets/contactModal-fa3d4ffe.jpg",B0="/Portfolio/assets/contactModalSmall-0d7a5c25.jpg",D0=G.section`
  background: url(${I0}) center/contain no-repeat;
  position: absolute;
  top: 0;
  left: 200px;
  height: 620px;
  width: 998px;

  ${L} {
    height: 480px;
    width: 772px;
  }

  ${U} {
    height: 310px;
    width: 500px;
  }

  ${j} {
    background: url(${B0}) center/contain no-repeat;
    height: 193px;
    width: 300px;
    top: 10px;
    left: 120px;
  }

  ${Ce} {
    left: 10px;
  }

  visibility: ${({isLoading:e})=>e?"hidden":"visible"};

  display: ${({isVisible:e})=>e?"block":"none"};
  z-index: ${({lastClicked:e})=>e==="contact"?2:1};

  > div {
    margin-top: 0.2rem;

    ${L} {
      height: 50px;
      width: 120px;
      margin-top: 0;

      button {
        height: 21px;
        width: 23px;

        img {
          scale: 0.9;
        }
      }
    }

    ${U} {
      height: 30px;
      width: 90px;
      margin-top: 0;

      button {
        height: 13px;
        width: 15px;

        img {
          scale: 0.6;
        }
      }
    }

    ${j} {
      height: 25px;
      width: 70px;

      button {
        height: 9px;
        width: 11px;

        img {
          scale: 0.5;
        }
      }
    }
  }
`,Q0=G.article`
  background: url(${vr}) center/cover no-repeat;
  height: 43px;
  width: 980px;
  margin: 0.5rem auto;
  cursor: grab;

  ${L} {
    height: 33px;
    width: 759px;
  }

  ${U} {
    height: 21px;
    width: 491px;
    margin: 0.3rem auto;
  }

  ${j} {
    height: 20px;
    width: 295px;
    margin: 0.15rem auto;
  }

  div {
    ${he({justify:"flex-start",align:"center"})};
    height: 44px;
    width: 160px;

    ${Ee}
    cursor: auto;

    ${L} {
      height: 34px;
      width: 140px;
    }

    ${U} {
      height: 22px;
      width: 85px;
    }

    ${j} {
      height: 20px;
      width: 80px;
    }

    img {
      height: 33px;
      width: 33px;
      margin: 0 0.5rem;

      ${Ee}

      ${L} {
        height: 30px;
        width: 30px;
        margin: 0 0.8rem;
      }

      ${U} {
        height: 17px;
        width: 17px;
        margin: 0 0.4rem;
      }
    }

    p {
      font-size: 1.875rem;
      color: #fff;
      margin: 0 0.5rem;

      ${L} {
        font-size: 1.7rem;
        margin: 0;
      }

      ${U} {
        font-size: 1.1rem;
      }

      ${j} {
        font-size: 1rem;
      }
    }
  }
`,P0=G.textarea`
  background-color: #fff;
  box-shadow:
    -2px -2px 0 0 #818181,
    -2px 0 0 0 #818181,
    0 -2px 0 0 #818181,
    -4px -4px 0 0 black,
    -4px 0 0 0 black,
    0 -4px 0 0 black,
    2px 2px 0 0 #e0dede,
    0 2px 0 0 #e0dede,
    2px 0 0 0 #e0dede,
    2px -2px 0 0 #818181,
    -2px 2px 0 0 #e0dede,
    -4px 2px 0 0 black,
    -4px 4px 0 0 white,
    4px 4px 0 0 white,
    4px 0 0 0 white,
    0 4px 0 0 white,
    2px -4px 0 0 black,
    4px -4px 0 0 white;

  font-size: 2rem;
  font-family: ${yr};
  line-height: 40px;
  height: 320px;
  width: 950px;
  position: absolute;
  top: 8.3rem;
  left: 1.5rem;
  padding: 15px;
  outline: none;
  resize: none;

  ${L} {
    font-size: 1.5rem;
    height: 240px;
    width: 720px;
    top: 6.5rem;
    padding: 10px;
  }

  ${U} {
    font-size: 1.3rem;
    line-height: 30px;
    height: 150px;
    width: 450px;
    top: 4.5rem;
    left: 1.1rem;
    padding: 5px 10px;
  }

  ${j} {
    font-size: 1rem;
    line-height: 20px;
    height: 80px;
    width: 275px;
    top: 3.2rem;
    left: 0.8rem;
    padding: 7px;
  }
`,EA=G.div`
  position: absolute;
  left: 4rem;
  bottom: ${({bottom:e})=>e+"rem"};

  ${L} {
    bottom: ${({bottom:e})=>e-.5}rem;

    &:first-of-type {
      bottom: ${({bottom:e})=>e-1.2}rem;
    }
  }

  ${U} {
    left: 1rem;

    bottom: ${({bottom:e})=>e-1}rem;

    &:first-of-type {
      bottom: ${({bottom:e})=>e-3}rem;
    }
  }

  ${j} {
    left: 1rem;

    bottom: ${({bottom:e})=>e-1.2}rem;

    &:first-of-type {
      bottom: ${({bottom:e})=>e-4}rem;
    }
  }

  label {
    font-size: 1.5rem;
    margin-right: 1rem;

    ${U} {
      font-size: 0.8rem;
      margin-right: 0.7rem;
    }
  }

  &:first-of-type input {
    margin-left: -2px;
  }

  input {
    background-color: #d9d9d9;
    box-shadow:
      -2px -2px #e0dede,
      -2px 0 #e0dede,
      0 -2px #e0dede,
      -4px -4px white,
      -4px 0 white,
      0 -4px white,
      2px 2px #818181,
      0 2px #818181,
      2px 0 #818181,
      2px -2px #e0dede,
      -2px 2px #818181,
      -4px 2px white,
      -4px 4px black,
      4px 4px black,
      4px 0 black,
      0 4px black,
      2px -4px white,
      4px -4px black;

    font-size: 2rem;
    font-family: ${yr};
    height: 47px;
    width: 544px;
    padding: 0 10px;
    outline: none;

    ${L} {
      font-size: 1.5rem;
      height: 35px;
      width: 400px;
      padding: 0 5px;
    }

    ${U} {
      font-size: 1rem;
      height: 20px;
      width: 250px;
    }

    ${j} {
      font-size: 0.8rem;
      height: 13px;
      width: 140px;
      padding: 0;
    }

    &:focus {
      box-shadow:
        -2px -2px 0 0 #818181,
        -2px 0 0 0 #818181,
        0 -2px 0 0 #818181,
        -4px -4px 0 0 black,
        -4px 0 0 0 black,
        0 -4px 0 0 black,
        2px 2px 0 0 #e0dede,
        0 2px 0 0 #e0dede,
        2px 0 0 0 #e0dede,
        2px -2px 0 0 #818181,
        -2px 2px 0 0 #e0dede,
        -4px 2px 0 0 black,
        -4px 4px 0 0 white,
        4px 4px 0 0 white,
        4px 0 0 0 white,
        0 4px 0 0 white,
        2px -4px 0 0 black,
        4px -4px 0 0 white;
    }
  }
`,IA=G.button`
  background-color: #d9d9d9;
  box-shadow:
    -2px -2px #e0dede,
    -2px 0 #e0dede,
    0 -2px #e0dede,
    -4px -4px white,
    -4px 0 white,
    0 -4px white,
    2px 2px #818181,
    0 2px #818181,
    2px 0 #818181,
    2px -2px #e0dede,
    -2px 2px #818181,
    -4px 2px white,
    -4px 4px black,
    4px 4px black,
    4px 0 black,
    0 4px black,
    2px -4px white,
    4px -4px black;

  height: 47px;
  width: 178px;
  font-size: 1.8rem;
  font-family: ${yr};
  position: absolute;
  right: 2.15rem;
  bottom: ${({bottom:e})=>e+"rem"};
  cursor: pointer;

  ${L} {
    font-size: 1.5rem;
    height: 35px;
    width: 120px;

    bottom: ${({bottom:e})=>e-.5}rem;

    &#send {
      bottom: ${({bottom:e})=>e-1.2}rem;
    }
  }

  ${U} {
    font-size: 1rem;
    height: 20px;

    bottom: ${({bottom:e})=>e-1}rem;

    &#send {
      bottom: ${({bottom:e})=>e-3}rem;
    }
  }

  ${j} {
    font-size: 0.8rem;
    height: 13px;
    width: 50px;
    right: 1rem;

    bottom: ${({bottom:e})=>e-1.15}rem;

    &#send {
      bottom: ${({bottom:e})=>e-3.95}rem;
    }
  }

  &:active {
    box-shadow:
      -2px -2px #818181,
      -2px 0 #818181,
      0 -2px #818181,
      -4px -4px black,
      -4px 0 black,
      0 -4px black,
      2px 2px #e0dede,
      0 2px #e0dede,
      2px 0 #e0dede,
      2px -2px #818181,
      -2px 2px #e0dede,
      -4px 2px black,
      -4px 4px white,
      4px 4px white,
      4px 0 white,
      0 4px white,
      2px -4px black,
      4px -4px white;

    transform: translate(1px, 1px);
  }
`,R0=G.article`
  position: absolute;
  top: 4.3rem;
  right: 10.5rem;

  ${L} {
    top: 3.4rem;
    right: 8.5rem;
  }

  ${U} {
    top: 2.3rem;
    right: 5.5rem;
  }

  ${j} {
    top: 1.85rem;
    right: 3.4rem;
  }

  button {
    height: 44px;
    width: 47px;
    background-color: #c0c0c0;
    margin-left: 0.8rem;
    cursor: pointer;

    ${L} {
      height: 32px;
      width: 36px;
    }

    ${U} {
      height: 18px;
      width: 22px;
    }

    ${j} {
      height: 8px;
      width: 10px;
      margin-left: 0.8rem;
    }

    box-shadow:
      -2px -2px #e0dede,
      -2px 0 #e0dede,
      0 -2px #e0dede,
      -4px -4px white,
      -4px 0 white,
      0 -4px white,
      2px 2px #818181,
      0 2px #818181,
      2px 0 #818181,
      2px -2px #e0dede,
      -2px 2px #818181,
      -4px 2px white,
      -4px 4px black,
      4px 4px black,
      4px 0 black,
      0 4px black,
      2px -4px white,
      4px -4px black;

    &:active {
      box-shadow:
        -2px -2px #818181,
        -2px 0 #818181,
        0 -2px #818181,
        -4px -4px black,
        -4px 0 black,
        0 -4px black,
        2px 2px #e0dede,
        0 2px #e0dede,
        2px 0 #e0dede,
        2px -2px #818181,
        -2px 2px #e0dede,
        -4px 2px black,
        -4px 4px white,
        4px 4px white,
        4px 0 white,
        0 4px white,
        2px -4px black,
        4px -4px white;

      & img {
        transform: translate(1px, 1px);
      }
    }

    img {
      height: 35px;
      width: 100%;
      margin-top: 4px;
      ${Ee}

      ${L} {
        margin-top: -2px;
        scale: 0.8;
      }

      ${U} {
        margin-top: -8px;
      }

      ${j} {
        margin-top: -14px;
        scale: 1.1;
      }
    }
  }
`,fo={_origin:"https://api.emailjs.com"},M0=(e,t="https://api.emailjs.com")=>{fo._userID=e,fo._origin=t},Sp=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class BA{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const kp=(e,t,n={})=>new Promise((r,o)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:l})=>{const a=new BA(l);a.status===200||a.text==="OK"?r(a):o(a)}),i.addEventListener("error",({target:l})=>{o(new BA(l))}),i.open("POST",fo._origin+e,!0),Object.keys(n).forEach(l=>{i.setRequestHeader(l,n[l])}),i.send(t)}),b0=(e,t,n,r)=>{const o=r||fo._userID;return Sp(o,e,t),kp("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:o,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"})},O0=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},T0=(e,t,n,r)=>{const o=r||fo._userID,i=O0(n);Sp(o,e,t);const l=new FormData(i);return l.append("lib_version","3.11.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",o),kp("/api/v1.0/email/send-form",l)},U0={init:M0,send:b0,sendForm:T0},j0=()=>{const{setIsOpen:e,isOpen:t}=Pe(),[n,r]=Y.useState({name:"",email:"",message:""}),[o,i]=Y.useState(!1),l=Y.useRef(null);return W(Tt,{children:[W("form",{ref:l,onSubmit:s=>{s.preventDefault();const u="service_nb1zs1n",m="template_8mah7dd",h="-bZK2T35a5KgMIbTk";l.current&&u&&m&&h&&n.name&&n.email&&n.message?(i(!0),U0.sendForm(u,m,l.current,h).then(()=>{r({...n,name:""}),r({...n,email:""}),r({...n,message:`Thank you so much for reaching out! :) 

I'll get back to you as soon as possible! :)`}),i(!1),setTimeout(()=>{r({...n,message:""})},3e3)},p=>{console.log(p.text)})):r({...n,message:"All fields are required!"})},children:[x(P0,{name:"message",value:o?"Sending...":n.message,onChange:s=>{r({...n,message:s.currentTarget.value})}}),W(EA,{bottom:6.2,children:[x("label",{children:"Your name:"}),x("input",{type:"text",name:"from_name",autoComplete:"off",value:n.name,onChange:s=>{r({...n,name:s.currentTarget.value})}})]}),W(EA,{bottom:1.8,children:[x("label",{children:"Your email:"}),x("input",{type:"email",name:"email_id",autoComplete:"off",value:n.email,onChange:s=>{r({...n,email:s.currentTarget.value})}})]}),x(IA,{type:"submit",value:"Send",bottom:6.2,id:"send",children:"Send"})]}),x(IA,{onClick:()=>{e({...t,contact:!1})},bottom:1.8,children:"Cancel"})]})},z0=()=>{const{lastClicked:e,setLastClicked:t,isVisible:n}=Pe(),{isLoading:r}=wr();return x(Tt,{children:x(Ot,{handle:".handle",bounds:"body",cancel:".handle *",children:W(D0,{onMouseDownCapture:()=>t("contact"),isLoading:r,isVisible:n.contact,lastClicked:e,"data-no-select":"true",children:[x(xo,{iconName:"contact"}),x(Q0,{className:"handle",isVisible:n.contact,children:W("div",{children:[x("img",{src:Al,alt:"handleImg"}),x("p",{children:"Contact"})]})}),W(R0,{children:[x("button",{children:x("a",{href:"https://github.com/JEKO10",target:"_blank",rel:"noreferrer",children:x("img",{src:C0,alt:"GitHub"})})}),x("button",{children:x("a",{href:"https://linkedin.com/in/aleksa-bubanja",target:"_blank",rel:"noreferrer",children:x("img",{src:E0,alt:"LinkedIn"})})})]}),x(j0,{})]})})})},K0="data:image/png;base64,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",L0="data:image/png;base64,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",po="data:image/png;base64,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",N0="/Portfolio/assets/recycleBin-c6d23102.jpg",G0="/Portfolio/assets/recycleBinSmall-efa3493e.jpg",F0=G.section`
  background: url(${N0}) center/contain no-repeat;

  position: absolute;
  top: 0;
  left: 400px;
  height: 652px;
  width: 755px;

  ${L} {
    height: 500px;
    width: 578px;
  }

  ${U} {
    height: 346px;
    width: 400px;
    left: 300px;
  }

  ${j} {
    background: url(${G0}) center/contain no-repeat;
    height: 271px;
    width: 300px;
    left: 150px;
  }

  ${Ce} {
    top: 10px;
    left: 10px;
  }

  visibility: ${({isLoading:e})=>e?"hidden":"visible"};

  display: ${({isVisible:e})=>e?"block":"none"};
  z-index: ${({lastClicked:e})=>e==="recycle"?2:1};
`,Y0=G.article`
  background: url(${vr}) center/cover no-repeat;
  height: 33px;
  width: 741px;
  margin: 0.45rem auto;
  cursor: grab;

  ${L} {
    height: 25.5px;
    width: 569px;
    margin: 0.35rem auto;
  }

  ${U} {
    height: 17px;
    width: 392px;
    margin: 0.25rem auto;
  }

  ${j} {
    height: 20px;
    width: 294px;
    margin: 0.3rem auto;
  }

  div {
    ${he({justify:"flex-start",align:"center"})};
    height: 30px;
    width: 160px;

    ${L} {
      height: 25.5px;
      width: 135px;
    }

    ${U} {
      height: 17px;
      width: 100px;
    }

    ${j} {
      height: 20px;
    }

    ${Ee}
    cursor: auto;

    img {
      height: 26px;
      width: 26px;
      margin: 0 0.5rem;

      ${Ee}

      ${L} {
        height: 20px;
        width: 20px;
      }

      ${U} {
        height: 14px;
        width: 14px;
        margin: 0 0.3rem;
      }
    }

    p {
      font-size: 1.5rem;
      color: #fff;
      margin-top: 0.2rem;

      ${L} {
        font-size: 1.3rem;
      }

      ${U} {
        font-size: 1rem;
        margin-top: 0.1rem;
      }
    }
  }
`,J0=()=>{const{isOpen:e,setIsOpen:t,lastClicked:n,setLastClicked:r,isVisible:o,setIsVisible:i,isClicked:l,setIsClicked:a}=Pe(),s=Y.useRef(null),{isLoading:u}=wr(),m=Kn(),h=w=>{var S;switch((S=s.current)==null||S.focus(),w.detail){case 1:a({...l,book:!0});break;case 2:t({...e,book:!0}),i({...o,book:!0}),a({...l,book:!0});break;default:a({...l,book:!0});break}},p=w=>{w.key==="Enter"&&(t({...e,book:!0}),i({...o,book:!0}))};return qs(s,()=>{a({about:!1,work:!1,contact:!1,recycle:!1,book:!1})}),x(Tt,{children:x(Ot,{handle:".handle",bounds:"body",cancel:".handle *",children:W(F0,{onMouseDownCapture:()=>r("recycle"),isLoading:u,lastClicked:n,isVisible:o.recycle,"data-no-select":"true",children:[x(xo,{iconName:"recycle"}),x(Y0,{className:"handle",isVisible:o.recycle,children:W("div",{children:[x("img",{src:po,alt:"handleImg"}),x("p",{children:"Recycle Bin"})]})}),W(i0,{iconName:Yr,isClicked:l.book,onMouseDown:w=>h(w),onKeyDown:w=>p(w),ref:s,tabIndex:0,children:[x("img",{src:Yr,alt:"book"}),x(Mi,{isClicked:l.book,iconName:m<769?K0:m<993?L0:Yr,book:!0}),x("p",{children:"???"})]})]})})})},Z0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAABgFBMVEUAAACAgIAAAAAAAAAAAAB/f3+AgIAAAAAAAACmpqZNTU2AgIAaGhqAgIAAAACJiYkrKyuQkJCAgICBgYF/f3+7u7s8PDwAAAAxMTEAAAAjIyOHh4cAAACBgYFubm4AAAB/f3+BgYHAwMCAgIAAAP8AAAAAAIAwMDD39/e4uLjv7+8gICCgoKAYGBgAAJ+IiIj////IyMjf39+YmJgAACCwsLAAYP8AP//Pz8+QkJAA//8AIP8An/+oqKjn5+cAAK8AAJBgYGAAEP+srKwAf/8AAM4gIIA7OzsQEBAAv/8AAO8AAN+8vLx4eKhPT4FQUFAA3/8AMP8AL/+0tLRISJhwcIDZ2dnExMQAAL+oqLgwMJBAQIB8fHxwcHAAFSAAb/8AUP8ICNcAANdsbKykpKRmZqIgIKBUVJx0dIwQEIAAABS/v/8Aj/9/f/9ff/8vn88//7+cnLQkJLRQf68wMK+MjJQYGIhcXIQwMIC/v2+fn2Cvv09ISEj//z/f3yD//wD1HQcjAAAAInRSTlMAfx+/XyDfnxDv77+fT0Dfv6efXxDv79/Pz6+Pf29vT0A/qj5zEQAAAvhJREFUSMe9lfdX2lAcRxkRcLfV7k14D0JpWWVECFMFFcEqjjpqh9Xuvee/3s8j9YEJJOSc1vuDfklyz8u7BLAdMmlvM2qzwIDY5lTf1mWXa1xqM+hyDfez1sDAxXBY9rYph8PjOGomukQx5NUi4Y6vG2rX7Ke93nRsXSPWQqHQSbtRMLsYjICoV48sGgWDGIhGo8FAYE0r1iRpDwoP5tKJuAhiDL7WRaYwrJo6IdikVgSxSASTHiyq8GlCL6JQC92qoRZlTGqwCa0IosiU9uqJi2KcT8NHxB8VGfeznk6nc8FgTCuuJBKKLMvqNDg82iHerK7GUQFTLhDI9cikrGCQyuIVR4f4jG6JYli9aK1HJuJXC/mJo0Pc2N/aqmP7UvdMKzgFsRzSird9G5Q+xdFE90wKTkGMi3pxfmHhwezs7BNZDmkz7clymIk3ZLGLCOYLhUJ9dfXjkUx4oV4PUewhMm5R+qUzU0QEBuK95B1VnMnn9+v1z4qi1JApl8uZiVPTTFPddiZgJqYyzEnOYWGeiYsme8xkfLtLKZ+vlPmbqV9xbsnXIjmVUjP1K+5mWaFScjq7bEUEGRTCnyxGa2Ip9er51+/IZFEELyM/f+GfJXGaJRF/v1licXC/fYv3s8ul5Ptvr7MsTimbPI44L+bQBYXw+Kji/3wAPlG64QOsUL9Vo2mcPWg2383MPGSFWlIpmeol7jROuD0Q+Yf2MaUFvprB21Ekgvq9WqnE43F8aN8uLj7K5/PzJiv6zwkOVaxW8VLyMu5SShdM9kictkMchJAd/nu+SWm+p4gutjYet9s91GhsK0qZbbXZ/IBMXcUqutiOcpaQCs+0iExdRYIuGq4KwgW/n2WSsFU1U0EnnkcXPZcIYZkSPBPViU691c5U5D+imxZEp9M5VCxuJxJs3YNNvWiAkxA/z2RFHBOEEZ7JiggEnslANMnExQYOGBr6TLB2isUzOGAk6DMx/IRoHzXzTIwRQRizIKqZGILNKh5HC4/t3/EHgr9ltf6oVWkAAAAASUVORK5CYII=",cl="data:image/png;base64,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",H0="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAAGASYDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACoIAAAAAAAAAAAAAAAAAB//8QAGxAAAAcBAAAAAAAAAAAAAAAAAAQGCBlWldT/2gAIAQEAAT8Ahda5fV/qEeMQutcvq/1CPGIXWuX1f6hHjELrXL6v9QjxiF1rl9X+oR4xC61y+r/UI8Yhda5fV/qEeMQutcvq/wBQjxiF1rl9X+oR4xC61y+r/UI8Yhda5fV/qEeMQutcvq/1CPGIXWuX1f6hHjELrXL6v9QjxiF1rl9X+oR4xC61y+r/AFCPGIXWuX1f6hHjELrXL6v9QjxiF1rl9X+oR4xC61y+r/UI8Yhda5fV/qEeMQutcvq/1CPGIXWuX1f6hHjELrXL6v8AUI8Yhda5fV/qEeMQutcvq/1CPGIXWuX1f6hHjELrXL6v9QjxiF1rl9X+oR4xC61y+r/UI8Yhda5fV/qEeMQutcvq/wBQjxiF1rl9X+oR4xC61y+r/UI8Yhda5fV/qEeMQutcvq/1CPGIXWuX1f6hHjH/xAAUEQEAAAAAAAAAAAAAAAAAAABQ/9oACAECAQE/ABf/xAAUEQEAAAAAAAAAAAAAAAAAAABQ/9oACAEDAQE/ABf/2Q==",W0="data:image/jpeg;base64,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",V0=G.section`
  ${he({justify:"center",align:"flex-start"})};
  flex-direction: column;
  background: url(${W0}) center/contain no-repeat;
  height: 475px;
  width: 337px;
  position: absolute;
  bottom: 2.81rem;
  padding: 6px 6.21px 8px 3.5px;
  transform: ${({isOpen:e})=>e?"translateY(0)":"translateY(110%)"};
  transition: transform 500ms ease;
  z-index: 10;

  ${L} {
    height: 300px;
    width: 212px;
    transform: ${({isOpen:e})=>e?"translateY(0)":"translateY(120%)"};
  }

  > img {
    display: block;
    margin: 0 auto;

    ${L} {
      width: 204.5px;
    }
  }

  img,
  p {
    ${Ee}
  }
`,DA=G.article`
  ${he({justify:"flex-start",align:"center"})};
  height: 91px;
  width: 100%;
  padding: 20px 25px;
  transition: all 200ms ease;

  ${L} {
    height: 55px;
    padding: 10px 15px;
  }

  & {
    :hover {
      background-color: #001358;
      color: #fff;
    }

    :last-of-type {
      padding: 20px 25px 8px;

      ${L} {
        padding: 10px 15px 5px;
      }
    }
  }

  img {
    height: 56px;
    width: 56px;

    margin-right: 1.8rem;
    image-rendering: pixelated;

    ${L} {
      height: 39px;
      width: 39px;
      margin-right: 1rem;
    }
  }

  p {
    font-size: 1.8rem;

    ${L} {
      font-size: 1.4rem;
    }
  }
`,X0=()=>{const{isOpen:e,setIsOpen:t,setIsVisible:n,isVisible:r,setIsShutDown:o,setIsShuttingDown:i}=Pe(),l=[{name:"about",src:ul,alt:"aboutStart",label:"About Me"},{name:"work",src:cl,alt:"workStart",label:"My Work"},{name:"contact",src:Al,alt:"contactStart",label:"Contact"},{name:"recycle",src:po,alt:"RecycleStart",label:"Recycle Bin"}],a=()=>{i(!0),setTimeout(()=>{o(!0)},3e3)};return W(V0,{isOpen:e.start,"data-no-select":"true",children:[l.map(s=>W(DA,{onClick:()=>{t({...e,[s.name]:!0,start:!1}),n({...r,[s.name]:!0})},children:[x("img",{src:s.src,alt:s.alt}),x("p",{children:s.label})]},s.name)),x("img",{src:H0,alt:"StartDash"}),W(DA,{onClick:a,children:[x("img",{src:Z0,alt:"ShutDownStart"}),x("p",{children:"Shut Down"})]})]})},q0="/Portfolio/assets/timeModal-6454d07c.jpg",$0=G.section`
  background: url(${q0}) center/cover no-repeat;
  position: absolute;
  top: 0;
  left: 200px;
  height: 486px;
  width: 576px;

  ${U} {
    height: 337px;
    width: 400px;
  }

  ${j} {
    height: 253px;
    width: 300px;
    top: 20px;
    left: 70px;
  }

  ${Ce} {
    left: 10px;
  }

  visibility: ${({isLoading:e})=>e?"hidden":"visible"};

  z-index: ${({lastClicked:e})=>e==="time"?2:1};

  p {
    ${Ee}
  }
`,_0=G.article`
  background: url(${vr}) center/cover no-repeat;
  height: 26px;
  width: 567px;
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
  cursor: grab;

  ${U} {
    height: 18px;
    width: 393px;
  }

  ${j} {
    height: 13px;
    width: 295px;
    top: 0.15rem;
    left: 0.15rem;
  }
`,ey=G.p`
  position: absolute;
  bottom: 30%;
  right: 20%;
  user-select: none;
  pointer-events: none;
  letter-spacing: 1px;

  ${U} {
    font-size: 0.8rem;
    right: 19.3%;
    letter-spacing: 0.5px;
  }

  ${j} {
    font-size: 0.6rem;
    right: 18.7%;
  }
`,ty=G.p`
  position: absolute;
  top: 7.4rem;
  left: 10.7rem;
  font-size: 1.3rem;
  user-select: none;

  ${U} {
    font-size: 1rem;
    top: 5.15rem;
    left: 7.5rem;
  }

  ${j} {
    font-size: 0.8rem;
    top: 3.85rem;
    left: 5.6rem;
  }
`,ny=G.p`
  position: absolute;
  top: 7.5rem;
  left: 3rem;
  font-size: 1.1rem;
  user-select: none;

  ${U} {
    font-size: 0.7rem;
    top: 5.2rem;
    left: 2.1rem;
  }

  ${j} {
    font-size: 0.55rem;
    top: 3.95rem;
    left: 1.6rem;
  }
`,ry=G.p`
  font-family: ${yr};
  font-weight: 600;
  position: absolute;
  bottom: 4.95rem;
  left: 9.5rem;

  ${U} {
    font-size: 0.8rem;
    font-weight: 400;
    bottom: 3.4rem;
    left: 6.6rem;
  }

  ${j} {
    font-size: 0.7rem;
    bottom: 2.55rem;
    left: 5rem;
  }
`,QA=G.button`
  background-color: #c0c0c0;
  box-shadow:
    -2px -2px #e0dede,
    -2px 0 #e0dede,
    0 -2px #e0dede,
    -4px -4px white,
    -4px 0 white,
    0 -4px white,
    2px 2px #818181,
    0 2px #818181,
    2px 0 #818181,
    2px -2px #e0dede,
    -2px 2px #818181,
    -4px 2px white,
    -4px 4px black,
    4px 4px black,
    4px 0 black,
    0 4px black,
    2px -4px white,
    4px -4px black;

  height: 26px;
  width: 100px;
  font-size: 1.2rem;
  font-family: ${yr};
  position: absolute;
  bottom: 1.1rem;
  right: ${({right:e})=>e+"rem"};
  cursor: pointer;

  ${U} {
    font-size: 0.8rem;
    height: 15px;
    width: 60px;
    bottom: 0.85rem;
  }

  ${j} {
    font-size: 0.6rem;
    height: 10px;
    width: 50px;
    bottom: 0.7rem;
  }

  &:active {
    box-shadow:
      -2px -2px #818181,
      -2px 0 #818181,
      0 -2px #818181,
      -4px -4px black,
      -4px 0 black,
      0 -4px black,
      2px 2px #e0dede,
      0 2px #e0dede,
      2px 0 #e0dede,
      2px -2px #818181,
      -2px 2px #e0dede,
      -4px 2px black,
      -4px 4px white,
      4px 4px white,
      4px 0 white,
      0 4px white,
      2px -4px black,
      4px -4px white;

    transform: translate(1px, 1px);
  }
`,oy=()=>{const{isOpen:e,setIsOpen:t}=Pe(),n=Kn();return W("article",{children:[x(QA,{onClick:()=>t({...e,time:!1}),right:n>992?15.5:n>768?11:8.5,children:"OK"}),x(QA,{onClick:()=>t({...e,time:!1}),right:n>992?8.2:n>768?6:4.5,children:"Cancel"})]})},Cp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAADlCAMAAACLd474AAAAvVBMVEUAAAAAgIAAgIAAgID///////8AgID///////////////8Af3////8AgIAAgID///8AgIAAgID///8AgID///8AgID///8AgYEAgID////x+Pju9vaZzMxms7P///8AgIDj8fHY7Oz////d7u5EoaG22toAgICAv79ntLTj7+85nJzf7+8kkpK/398AgID///9AoKC/398QiIjv9/eAwMCQx8dwuLjf7+8gkJCgz89gr6+v19dQqKjP5+cwmJjwZrpyAAAALnRSTlMAv+8QEEBA77+QgHBwkIBgYCDfoB/fn39QMLrv7+/Pr5BoUO/v38/An5CQgHBAiaq/CwAABJNJREFUeNrtnOmW0kAQhSuJBgRhQNRZ3Pe9CAIOg8v7P5ZJN1kgGfwzZ+qLJ/cJ+uSr20vdTsvN6OGgf1cwioYX8/l8IAxFw0B1nQ7ogSAUaaZkngrCLNBMl+mA7glCQ820SgfUE4SozBYds+uZhZpqQ2TWey0ITTTTs/7JHUEoGmcuWz8RhiZBqLpZAguoM337TE9h5k3/I2PGsL1n9h3EbFYweywIsZi5HXXB7ESs5QuoYHYh5vLfxzNDrK4T3Sm5mt8XgHJmVymwvhA003KTDyAmEqvXknKYzpmtMcxGFWYPBSAcM3HMSA2QmZIO0/EoVBKzWJ04+2pvehKznek5TSscs9z0nLOQY1bu0ez3IHvM+vcBC37BLFm9EYJ2zDa/CQXkmJFM7+dGkumjYcA2vTkz9ETNaIDsmHEaIDtmoAbIIxqzcZUZ4WzGY+ZmRlLTakybG6daaovYEHlmPhGyH05ldb0kmH4SdqZvu+nNme2ZHsdsSTgoDmnMIi31C9GsRjNDBAyeGSZgiE9DrTAzb3zONFfRrO6ZbojGuq/EOsSL9oezXpJMr5ed6fmmz5iRTF8yA6WKvqNHShUzZqiEanLA7LlYKoqDUEkJlRsNiVlZQJAk2JmexMybnpQqHjJbWW+IJrqvX/27dqtZnVlytTRvyLzYKyDARB2TTM+8SvCCZHqJTgMlJVRn+InavHOeAUMx86YHXf/gMXPdBlKz2jMjpYqOGSkJHrWC2WuxU52ZaYgXjw7Gk6w+iZnqpk8uiQXUmb59prdMFT0zUkLFZ2aeUOGYHaYd23mqjlntzhcnYNitrpSA4cyNpsbMbm6MtUFryw1R/Qsl6wuxUz3iXHamZ5s+ZUYyfaYpjplryJBSRc8MlCpG2oaEypJZHJAan9NsrScx86YnpYqOF4mZNz0oVfSmJzWrm5k9GJhNjcOGPezqlZipzmy7AE7U3VWCvXuVJNPLo3aY3pCZLyBQQtWOiXrTMasxIzU+HTNSwDDRTKCAIUYxm556YnVm/YFJDQXaqM3KqKPXbPrtAmb6VWd6sumjkGT6ghkpVfR3vkAJFY/ZTFORGp9xK5hZpYp+dQUxiwK9Rj+NmJXnREjA4PpnJGZ1i5WhUO/eudy+3l/3hZ4aLffjxtFsF2YJ1ZRUQE4ByfQSnQUhyfRxCDN9pIUgSXBZQJBUcahemISqwgySKh5ndi7/1v/OzE/UlFSxfOgH0qyOtSbbX83K7T2lWT1SbRuz217PjjN7fsu563Fmm9U7uVUdZ/Z9YdREC2ETtYxIpj/KLEmPZQbIrj1Lh7NvRsegcVNFJx8isVKd2Wa9NKieI1u0P8Y/44xR+WaqaZPj+ydipjqzt24Js9PwYAlbWP/eHnEuouzE+r3dMaNcRMmZkUzfAmbmv7eXx6GSWW8gZqoz+wF4zHdS/e3lldirYLZdAl4dyzQzj8kOFBM65o3MFuk14XMBaJRHLuYP2VSZPVswCig/woYvIQVUMPs4h5g+Zxb0IabPmenLOeAFqyqzz0hm5s9DVtsOX9IvhJgX8yPsV/udR6k4GE/lRvQXUJHoJAHFHcYAAAAASUVORK5CYII=",iy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAC1BAMAAADrfaOaAAAAElBMVEUAAAD///8A//+AgIAAAAAAgIBuIaRtAAAAAXRSTlMAQObYZgAAAiVJREFUeNrtm1FugzAQRNdxD4BvUEXqv6O9QD44QnP/q5RaVCMFVAOZDTZ4PoN5MWZ3vSNAVuhyvV5lhYpga5TL16MXr2ysyC2M7NDRwAn7zPZKZbsgH33fiyQ2ZfIaEzYpsQeBTZjzVL9sjQZsHNqsdMMcnZ1f1PFvNRLYxLkP2f0pi9hp6Hr2Arkt7Mf3fcXQU7CH7L4vH1oG2+uWksbLmWmc78+WDWwXhCnqTeHvM8TwAptfkh2DzRedTc32vZbMqyE7dNnb0UJlVucJQMyQys5TQlfM1R8+DNHokpy5PRvNKEXJPR+CjUb3BcGZm7Lrl1c6j1+8wDNnozC2Qtv0bm+mEf6JJiDt2S7Lrs+Dn1Pl9/TTGRuxQf1jV7Aabes5pjSKhbwa7AwIcFu2A7slz7wKddsTrCEbrpWqhK2WDUfMVMKasptqeViUm7MZO3GxNdSxHs3xHE/1WSnRaMNG6oDd0rLpvdnj1SB7gDRmT7KnmZ26pZHN4xdE8MzZKLateFu8NQ5HbM/GM16maz0CG8+PuY4Y7Oa26zPIGrnsPMWFcq7+wKW7FjuoMcM2CpLQtQCkhopGu1C5hT3YCJX6buSMCogVrwZlBafsz94SK6Hj9+MYWgYbfe2Soadgo2dmDsUJS5pPr2BTiyZypiy2C/8WIa/IR2o7hENlsgUf+8JNj7/QvjH2OrJ5736AHbrkeNnvfrgJm7ynj+znZa7BTa9l/wAkemjgP40GigAAAABJRU5ErkJggg==",ly="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAA/AQMAAADwnIsUAAAAA1BMVEWAgICQdD0xAAAAC0lEQVQI12MYUAAAAH4AAasqQLMAAAAASUVORK5CYII=",ay=G.div`
  width: 181px;
  height: 181px;
  border-radius: 50%;
  position: absolute;
  top: 42%;
  left: 73%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  text-align: center;
  background: url(${iy}) center/cover no-repeat;

  ${U} {
    top: 33%;
    left: 67%;
    scale: 0.7;
  }

  ${j} {
    top: 25%;
    left: 60%;
    scale: 0.55;
  }

  &::after {
    background: #ff0000;
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    z-index: 5;
    transform: translate(-50%, -50%);
  }

  > * {
    transform-origin: 51% 80%;
  }
`,sy=G.div`
  position: absolute;
  width: 75px;
  height: 55px;
  background: url(${Cp}) center/contain no-repeat;
  top: 26%;
  left: 28.5%;
`,uy=G.div`
  position: absolute;
  width: 75px;
  height: 70px;
  background: url(${Cp}) center/contain no-repeat;
  top: 19.5%;
  left: 29%;
  z-index: 2;
`,Ay=G.div`
  position: absolute;
  width: 2px;
  height: 75px;
  background: url(${ly}) center/cover no-repeat;
  top: 8.5%;
  left: 49.5%;
  transform-origin: bottom;
`,cy=()=>{const[e,t]=Y.useState(new Date);Y.useEffect(()=>{const r=setInterval(()=>{t(new Date)},1e3);return()=>clearInterval(r)},[]);const n=r=>({transform:`rotate(${r}deg)`});return W(ay,{children:[x(sy,{style:n(e.getHours()*30)}),x(uy,{style:n(e.getMinutes()*6)}),x(Ay,{style:n(e.getSeconds()*6)})]})},fy=({time:e})=>{const t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=e.toLocaleDateString("en-US",{timeZoneName:"longGeneric"}),r=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0});return W(Tt,{children:[W("article",{children:[x(ny,{children:t[e.getMonth()]}),x(ty,{children:e.getFullYear()}),x(ry,{children:n.split(", ")[1]})]}),W("article",{children:[x(cy,{}),x(ey,{children:r})]})]})},py=()=>{const{lastClicked:e,setLastClicked:t}=Pe(),[n,r]=Y.useState(new Date),{isLoading:o}=wr();return Y.useEffect(()=>{const i=setInterval(()=>{r(new Date)},1e3);return()=>{clearInterval(i)}},[]),x(Tt,{children:x(Ot,{handle:".handle",bounds:"body",children:W($0,{onMouseDownCapture:()=>t("time"),isLoading:o,lastClicked:e,"data-no-select":"true",children:[x(_0,{className:"handle"}),x(fy,{time:n}),x(oy,{})]})})})},dy="/Portfolio/assets/workModal-d51c54ee.jpg",hy="/Portfolio/assets/workModalSmall-c401032c.jpg",gy=G.section`
  background: url(${dy}) center/contain no-repeat;

  position: absolute;
  top: 0;
  left: 300px;
  height: 652px;
  width: 756px;

  ${L} {
    height: 500px;
    width: 579px;
  }

  ${U} {
    height: 344px;
    width: 400px;
  }

  ${j} {
    background: url(${hy}) center/contain no-repeat;
    height: 266px;
    width: 300px;
    top: 20px;
    left: 100px;
  }

  ${Ce} {
    left: 10px;
  }

  visibility: ${({isLoading:e})=>e?"hidden":"visible"};

  display: ${({isVisible:e})=>e?"block":"none"};
  z-index: ${({lastClicked:e})=>e==="work"?2:1};

  > div {
    height: 45px;
    width: 115px;

    button {
      height: 19.5px;
      width: 22.5px;
    }

    ${L} {
      height: 37px;
      width: 95px;

      button {
        height: 14px;
        width: 17px;

        img {
          scale: 0.7;
        }
      }
    }

    ${U} {
      height: 25px;
      width: 70px;

      button {
        height: 7px;
        width: 10px;

        img {
          scale: 0.4;
        }
      }
    }

    ${j} {
      height: 26.5px;
      width: 80px;

      button {
        height: 11px;
        width: 14px;

        img {
          scale: 0.5;
        }
      }
    }
  }
`,my=G.article`
  background: url(${vr}) center/contain no-repeat;
  height: 28px;
  width: 742px;
  margin: 0.55rem auto;
  cursor: grab;

  ${L} {
    height: 21px;
    width: 569px;
  }

  ${U} {
    height: 17px;
    width: 392px;
    margin: 0.25rem auto;
  }

  ${j} {
    background-size: cover;
    height: 20px;
    width: 295px;
    margin: 0.2rem auto;
  }

  div {
    ${he({justify:"flex-start",align:"center"})};
    width: 140px;

    ${Ee}
    cursor: auto;

    ${L} {
      height: 19px;
      width: 120px;
    }

    ${U} {
      height: 15px;
      width: 85px;
    }

    ${j} {
      height: 18px;
      width: 90px;
    }

    img {
      height: 26px;
      width: 26px;
      margin: 0 0.7rem;

      ${Ee}

      ${L} {
        height: 20px;
        width: 20px;
      }

      ${U} {
        height: 14px;
        width: 14px;
        margin: 0 0.5rem;
      }

      ${j} {
        height: 17px;
        width: 17px;
      }
    }

    p {
      font-size: 1.5rem;
      color: #fff;
      margin-top: 0.2rem;

      ${L} {
        font-size: 1.3rem;
      }

      ${U} {
        font-size: 0.9rem;
      }

      ${j} {
        font-size: 1rem;
      }
    }
  }
`,yy=G.div`
  ${he({justify:"center",align:"center"})};
  flex-direction: column;

  position: absolute;
  top: ${({top:e})=>e+"rem"};
  left: ${({left:e})=>e+"rem"};

  cursor: pointer;

  ${sl}

  ${L} {
    ${({alt:e})=>e==="portfolio"&&`
    top: 11.5rem;
    left: 13rem;
  `}

    ${({alt:e})=>e==="moviexd"&&`
    top: 11.5rem;
    left: 25rem;
  `}

  ${({alt:e})=>e==="hiking"&&`
    top: 20rem;
    left: 12rem;
  `}

  ${({alt:e})=>e==="basket"&&`
    top: 20rem;
    left: 23.5rem;
  `}
  }

  ${U} {
    ${({alt:e})=>e==="portfolio"&&`
    top: 8rem;
    left: 9.5rem;
  `}

    ${({alt:e})=>e==="moviexd"&&`
    top: 8rem;
    left: 17.5rem;
  `}

  ${({alt:e})=>e==="hiking"&&`
    top: 14rem;
    left: 8.6rem;
  `}

  ${({alt:e})=>e==="basket"&&`
    top: 14rem;
    left: 16.4rem;
  `}
  }

  ${j} {
    ${({alt:e})=>e==="portfolio"&&`
    top: 6.4rem;
    left: 6.7rem;
  `}

    ${({alt:e})=>e==="moviexd"&&`
    top: 6.4rem;
    left: 12.7rem;
  `}

  ${({alt:e})=>e==="hiking"&&`
    top: 10.8rem;
    left: 6rem;
  `}

  ${({alt:e})=>e==="basket"&&`
    top: 10.8rem;
    left: 12rem;
  `}
  }

  img {
    height: 100px;
    width: 100px;

    ${L} {
      height: 80px;
      width: 80px;
    }

    ${U} {
      height: 60px;
      width: 60px;
    }

    ${j} {
      height: 45px;
      width: 45px;
      margin-bottom: 0.4rem;
    }
  }

  p {
    color: ${({isClicked:e})=>e?"#fff":"#000"};
    text-align: center;

    ${L} {
      font-size: 1.3rem;
    }

    ${U} {
      font-size: 1rem;
    }

    ${j} {
      font-size: 0.8rem;
    }
  }
`,PA="data:image/png;base64,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",vy="data:image/png;base64,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",wy="data:image/png;base64,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",xy="data:image/png;base64,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",Go=({top:e,left:t,alt:n,label:r,link:o,isClicked:i,setIsClicked:l})=>{const a=Kn(),s=Y.useRef(null),u=h=>{var p;(p=s.current)==null||p.focus(),l({portfolio:!1,moviexd:!1,hiking:!1,basket:!1}),l(w=>({...w,[h]:!0}))},m=(h,p)=>{h.key==="Enter"&&window.open(p,"_blank")};return qs(s,()=>{l({portfolio:!1,moviexd:!1,hiking:!1,basket:!1})}),W(yy,{top:e,left:t,alt:n,isClicked:i[n],onMouseDown:()=>u(`${n}`),onDoubleClick:()=>window.open(`https://github.com/JEKO10/${o}`,"_blank"),onKeyDown:h=>m(h,`https://github.com/JEKO10/${o}`),tabIndex:0,ref:s,children:[x("img",{src:PA,alt:n}),x(Mi,{isClicked:i[n],iconName:a>1440?PA:a>992?wy:a>768?xy:vy,project:!0}),x("p",{children:r})]})},Sy=()=>{const{lastClicked:e,setLastClicked:t,isVisible:n}=Pe(),[r,o]=Y.useState({portfolio:!1,moviexd:!1,hiking:!1,basket:!1}),{isLoading:i}=wr();return x(Tt,{children:x(Ot,{handle:".handle",bounds:"body",cancel:".handle *",children:W(gy,{onMouseDownCapture:()=>t("work"),isLoading:i,isVisible:n.work,lastClicked:e,"data-no-select":"true",children:[x(xo,{iconName:"work"}),x(my,{className:"handle",isVisible:n.work,children:W("div",{children:[x("img",{src:cl,alt:"handleImg"}),x("p",{children:"My Work"})]})}),W("article",{children:[x(Go,{top:15,left:18,alt:"portfolio",label:"Portfolio.doc",link:"Portfolio",isClicked:r,setIsClicked:o}),x(Go,{top:15,left:34,alt:"moviexd",label:"Moviexd.doc",link:"Moviexd",isClicked:r,setIsClicked:o}),x(Go,{top:26,left:16.5,alt:"hiking",label:"Hiking guide.doc",link:"A-Hiking-guide",isClicked:r,setIsClicked:o}),x(Go,{top:26,left:32,alt:"basket",label:"Basket report.doc",link:"Turniri",isClicked:r,setIsClicked:o})]})]})})})},ky=()=>{const{isOpen:e}=Pe();return W("section",{children:[e.about&&x(k0,{}),e.contact&&x(z0,{}),e.work&&x(Sy,{}),e.recycle&&x(J0,{}),e.book&&x(h0,{}),e.time&&x(py,{}),x(X0,{})]})},Cy="data:image/png;base64,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",Ey="data:image/png;base64,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",Iy="data:image/png;base64,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",By="/Portfolio/assets/contactSmall-389b1672.png",Dy="data:image/png;base64,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",Qy="data:image/png;base64,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",Py="data:image/png;base64,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",Ry="/Portfolio/assets/workSmall-d8939532.png",My=()=>{const{isClicked:e,setIsClicked:t,isOpen:n,setIsOpen:r,isVisible:o,setIsVisible:i}=Pe(),l=Kn(),a=Y.useRef(null),s=[{name:"about",src:ul,smallSrc:Ey,src50x50:Cy,alt:"aboutIcon",label:"About Me"},{name:"work",src:cl,smallSrc:Ry,src50x50:Py,alt:"workIcon",label:"My Work"},{name:"contact",src:Al,smallSrc:By,src50x50:Iy,alt:"contactIcon",label:"Contact"}],u=(h,p)=>{var w;switch((w=a.current)==null||w.focus(),h.detail){case 1:t({about:!1,work:!1,contact:!1,recycle:!1,book:!1}),t(S=>({...S,[p]:!0})),r({...n,start:!1});break;case 2:r({...n,[p]:!0}),i({...o,[p]:!0}),t({...e,[p]:!0});break;default:t({...e,[p]:!0});break}},m=h=>{h.key==="Enter"&&Object.keys(e).forEach(p=>{e[p]===!0&&(r(w=>({...w,[p]:!0})),i(w=>({...w,[p]:!0})))})};return qs(a,()=>{t({about:!1,work:!1,contact:!1,recycle:!1,book:!1})}),W(Tt,{children:[x(t0,{children:s.map(h=>W(n0,{isClicked:e[h.name]||!1,onMouseDown:p=>{u(p,h.name)},onKeyDown:p=>m(p),tabIndex:0,ref:a,children:[x("img",{src:h.src,alt:h.alt}),x(Mi,{isClicked:e[h.name]||!1,iconName:l>992?h.src:l>480?h.smallSrc:h.src50x50}),x("p",{children:h.label})]},h.name))}),W(r0,{isClicked:e.recycle,onMouseDown:h=>{u(h,"recycle")},onKeyDown:h=>m(h),tabIndex:0,ref:a,children:[x("img",{src:po,alt:"recycleIcon"}),x(Mi,{isClicked:e.recycle,iconName:l>992?po:l>480?Qy:Dy}),x("p",{children:"Recycle Bin"})]})]})},Ep="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAA0AAQDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACv4AAB/8QAGhAAAAcAAAAAAAAAAAAAAAAAAAQGCTiFtf/aAAgBAQABPwBr2DCHs9M2GvYMIez0zYa9gwh7PTNhr2DCHs9M2GvYMIez0zYa9gwh7PTNhr2DCHs9M2P/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AH//2Q==",by="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAbBAMAAAA5TErMAAAAGFBMVEXDw8MAAAD///+CgoIAAP//AAD//wAA/wB0PQ6UAAAApUlEQVQoz83STQrCMBDF8Rm8wPuDH1vRI3iBCjlAXeQAbty78vombagVmnTbRxeB96MzpLVLO7KztbLbFHDUBA6oClLDgTeD0xIQRD4JDA9WwjSCFdCn84NTbsd1HcpWBfSRnKEc3+EJzUbEyJ4nloJyDXL9QGdG4EUZTCb/oAsFsAwsBO4c60Bm05Iol4Dnw+yilMr6txgv2G3rf1QdXG/NyGhHX0hoIViJRS7xAAAAAElFTkSuQmCC",Oy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAbBAMAAAA5TErMAAAAGFBMVEXDw8MAAAD///+CgoIAAP//AAD//wAA/wB0PQ6UAAAAwElEQVQoz6WSSQrDMAxFLbD3+jTDNvQEhZ7A0At40QP0CL3/phow3iQKbT8mWMnjWShOiLOlyz3KTYAURgGOIgCdGqJ8YwBiAySHBpKFtoKN2zEQEea2vjmRLnl4iHsPhCPADUX2M2CAtwuwd+WGUkrTku2jOwTibhDi2VAXsJ2mGqhl9JDl/VSXF/vB3TB6yDlXB4gHMAyieNQJMGDXYIOS9EEhaWEbM9igtOTDf0GAVf/fh18NUcTAZ9f+Gmf7ADkRIjjYXV2mAAAAAElFTkSuQmCC",Ty="data:image/jpeg;base64,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",Uy=G.section`
  ${he({justify:"space-between",align:"flex-end"})}
  background-image: url(${Ty});
  position: absolute;
  bottom: 0;
  height: 45px;
  width: 100%;
  padding: 0 10px;
  z-index: 3;

  ${Ce} {
    padding-left: 5px;
  }

  article {
    ${he({justify:"center",align:"center"})};
    margin-bottom: 3px;
  }

  img {
    ${Ee}
  }
`,jy=G.button`
  height: 35px;
  width: 82px;
  background: ${({isOpen:e})=>e?`
     url(${Oy})
  `:`url(${by})`};
  background-repeat: no-repeat;
  background-size: contain;
`,zy=G.div`
  ${he({justify:"flex-start",align:"center"})};
  background-color: #c0c0c0;
  box-shadow:
    -2px -2px #e0dede,
    -2px 0 #e0dede,
    0 -2px #e0dede,
    -4px -4px white,
    -4px 0 white,
    0 -4px white,
    2px 2px #818181,
    0 2px #818181,
    2px 0 #818181,
    2px -2px #e0dede,
    -2px 2px #818181,
    -4px 2px white,
    -4px 4px black,
    4px 4px black,
    4px 0 black,
    0 4px black,
    2px -4px white,
    4px -4px black;

  height: 28px;
  width: 163px;
  margin: ${({iconName:e})=>e==="name"?"0 15px 0 5px":""};
  margin-right: 15px;
  cursor: auto;

  ${j} {
    width: 40px;
  }

  ${Ce} {
    width: 20px;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &:not(:first-of-type) {
    ${L} {
      width: 85px;
    }

    ${U} {
      width: 40px;
    }

    ${Ce} {
      width: 20px;
    }
  }

  &:active {
    box-shadow:
      -2px -2px #818181,
      -2px 0 #818181,
      0 -2px #818181,
      -4px -4px black,
      -4px 0 black,
      0 -4px black,
      2px 2px #e0dede,
      0 2px #e0dede,
      2px 0 #e0dede,
      2px -2px #818181,
      -2px 2px #e0dede,
      -4px 2px black,
      -4px 4px white,
      4px 4px white,
      4px 0 white,
      0 4px white,
      2px -4px black,
      4px -4px white;

    & img {
      transform: translate(-9px, 1px);
    }

    & p {
      transform: ${({iconName:e})=>e==="name"?"translate(2px, 1px)":"translate(-4px, 3px)"};
    }
  }

  img {
    height: 31px;
    width: 31px;
    margin-left: 10px;
    scale: 0.8;
    transform: translate(-10px, 0);

    ${Ce} {
      scale: 0.6;
      margin-left: 0;
    }
  }

  p {
    font-size: 1.5rem;
    margin-left: 0.2rem;
    transform: ${({iconName:e})=>e==="name"?"":"translate(-5px, 2px)"};
    cursor: auto;

    ${Ee}
  }
`,Ip=G.img`
  height: 35px;
  margin: 0 5px;

  ${j} {
    ${({place:e})=>e==="task"&&"margin-right: 0.7rem"}
  }

  ${Ce} {
    margin: 0 2px;
    ${({place:e})=>e==="task"&&"margin-right: 0.5rem"};
  }
`,Ky=()=>{const{setIsOpen:e,isOpen:t}=Pe();return x(jy,{isOpen:t.start,onMouseDown:()=>{e({...t,start:!t.start})}})},RA=({iconName:e,imgSource:t,label:n})=>{const{isVisible:r,setIsVisible:o,setLastClicked:i}=Pe(),l=Kn();return W(zy,{onClick:()=>{o({...r,[e]:!r[e]}),i(e)},iconName:e,children:[t&&x("img",{src:t,alt:n}),(l>1440||e==="name")&&x("p",{children:n})]})},Ly="data:image/png;base64,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",Ny=G.div`
  ${he({justify:"center",align:"center"})};
  margin-bottom: 3px;
`,Gy=G.div`
  ${he({justify:"space-between",align:"center"})};
  box-shadow:
    -2px -2px #e0dede,
    -2px 0 #e0dede,
    0 -2px #e0dede,
    -4px -4px white,
    -4px 0 white,
    0 -4px white,
    2px 2px #818181,
    0 2px #818181,
    2px 0 #818181,
    2px -2px #e0dede,
    -2px 2px #818181,
    -4px 2px white,
    -4px 4px black,
    4px 4px black,
    4px 0 black,
    0 4px black,
    2px -4px white,
    4px -4px black;

  height: 28px;
  width: 163px;
  margin-left: 5px;
  padding: 0 10px 0 5px;

  ${j} {
    width: 65px;
    padding: 0;
    justify-content: center;
  }

  ${Ce} {
    width: 30px;
  }

  &:active {
    box-shadow:
      -2px -2px #818181,
      -2px 0 #818181,
      0 -2px #818181,
      -4px -4px black,
      -4px 0 black,
      0 -4px black,
      2px 2px #e0dede,
      0 2px #e0dede,
      2px 0 #e0dede,
      2px -2px #818181,
      -2px 2px #e0dede,
      -4px 2px black,
      -4px 4px white,
      4px 4px white,
      4px 0 white,
      0 4px white,
      2px -4px black,
      4px -4px white;

    & > * {
      transform: translate(1px, 1px);
    }
  }

  img {
    height: 25px;
    width: 60px;

    ${j} {
      display: none;
    }
  }
`,Fy=G.p`
  font-size: 1.4rem;
  user-select: none;

  ${Ce} {
    font-size: 1rem;
  }
`,Yy=()=>{const[e,t]=Y.useState(new Date),{setIsOpen:n,isOpen:r}=Pe(),o=Kn();Y.useEffect(()=>{const l=setInterval(()=>{t(new Date)},1e3);return()=>{clearInterval(l)}},[]);const i=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1});return W(Ny,{children:[x(Ip,{src:Ep,alt:"dash",place:"tool"}),W(Gy,{onClick:()=>{n({...r,time:!r.time})},children:[x("img",{src:Ly,alt:"toolButton"}),x(Fy,{onClick:()=>n({...r,time:!r.time}),children:o<481?i.slice(0,2):i})]})]})},Jy=()=>{const{isOpen:e}=Pe(),t=Kn(),n=[{iconName:"about",imgSource:ul,label:"About me",isVisible:e.about},{iconName:"work",imgSource:cl,label:"Work",isVisible:e.work},{iconName:"contact",imgSource:Al,label:"Contact",isVisible:e.contact},{iconName:"recycle",imgSource:po,label:"Recycle Bin",isVisible:e.recycle},{iconName:"book",imgSource:Yr,label:"Book",isVisible:e.book}];return x(Tt,{children:W(Uy,{"data-no-select":"true",children:[W("article",{children:[x(Ky,{}),x(Ip,{src:Ep,alt:"dash",place:"task"}),t>768&&x(RA,{iconName:"name",imgSource:"",label:"Aleksa Bubanja"}),n.map(r=>r.isVisible&&x(RA,{iconName:r.iconName,imgSource:r.imgSource,label:r.label},r.iconName))]}),x(Yy,{})]})})},Zy=()=>{const[e,t]=Y.useState(!1),[n,r]=Y.useState(!1),[o,i]=Y.useState({x:0,y:0}),[l,a]=Y.useState({x:0,y:0}),{isClicked:s,setIsClicked:u,setIsOpen:m,isOpen:h}=Pe(),p={about:{height:window.innerWidth>992?140:window.innerWidth>480?99:75,width:window.innerWidth>992?116:window.innerWidth>480?95:80},work:{height:window.innerWidth>992?140:window.innerWidth>480?99:75,width:window.innerWidth>992?116:window.innerWidth>480?90:75},contact:{height:window.innerWidth>992?140:window.innerWidth>480?99:75,width:window.innerWidth>992?116:window.innerWidth>480?80:70},recycle:{height:window.innerWidth>992?136:window.innerWidth>480?100:75,width:window.innerWidth>992?147:window.innerWidth>480?110:96,x:window.innerWidth>480?30:20,y:window.innerWidth>480?72:70}},w={about:{x:window.innerWidth>480?30:20,y:window.innerWidth>480?30:20,height:p.about.height,width:p.about.width},work:{x:window.innerWidth>480?30:20,y:window.innerWidth>992?195:window.innerWidth>480?160:125,height:p.work.height,width:p.work.width},contact:{x:window.innerWidth>480?30:15,y:window.innerWidth>992?360:window.innerWidth>480?290:230,height:p.contact.height,width:p.contact.width},recycle:{x:window.innerWidth-p.recycle.x-p.recycle.width,y:window.innerHeight-p.recycle.y-p.recycle.height,height:p.recycle.height,width:p.recycle.width}};return W(tm,{className:"home",onMouseDown:c=>{const A=c.clientX,d=c.clientY;if(!c.target.closest("[data-no-select='true']")){for(const B in w){const R=w[B];if(A>=R.x&&A<=R.x+R.width&&d>=R.y&&d<=R.y+R.height)return}c.preventDefault(),t(!0),r(!0),i({x:A,y:d}),a({x:A,y:d}),m({...h,start:!1})}},onMouseUp:()=>{t(!1),r(!1)},onMouseMove:c=>{if(e){a({x:c.clientX,y:c.clientY});const A={x:Math.min(o.x,l.x),y:Math.min(o.y,l.y),width:Math.abs(l.x-o.x),height:Math.abs(l.y-o.y)},d={};for(const k in w){const B=w[k];B.x<A.x+A.width&&B.x+B.width>A.x&&B.y<A.y+A.height&&B.y+B.height>A.y?d[k]=!0:d[k]=!1}u({...s,...d})}},children:[n&&x("div",{style:{position:"absolute",border:"2px solid gray",pointerEvents:"none",top:`${Math.min(o.y,l.y)}px`,left:`${Math.min(o.x,l.x)}px`,width:`${Math.abs(l.x-o.x)}px`,height:`${Math.abs(l.y-o.y)}px`}}),x(My,{}),x(ky,{}),x(Jy,{})]})},Hy="/Portfolio/assets/preloader-fe69a455.jpg",Wy="/Portfolio/assets/preloaderSmall-d50a5df1.jpg",Vy=G.div`
  ${he({justify:"center",align:"center"})};
  background-image: url(${Hy});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;

  ${Ce} {
    background-image: url(${Wy});
  }

  p {
    font-size: 2rem;
    color: #163394;
    font-weight: 700;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translate(-50%);
    user-select: none;

    ${j} {
      width: 100%;
      text-align: center;
    }

    ${Ce} {
      font-size: 1.8rem;
    }
  }
`,Xy=G.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 12px;
  background: linear-gradient(0.25turn, transparent, #8dc9dc, transparent);

  animation: loading 800ms alternate infinite;

  @keyframes loading {
    0% {
      background-position-x: -512px;
    }
    100% {
      background-position-x: 512px;
    }
  }
`,MA=({preloader:e})=>x("section",{children:W(Vy,{children:[x(Xy,{}),!e&&x("p",{children:"Windows is shutting down."})]})}),qy="/Portfolio/assets/turnOn-e9c9c3b4.png",$y=G.section`
  ${he({justify:"center",align:"center"})};
  background-color: #000;
  height: 100vh;
  width: 100vw;

  button {
    background: url(${qy}) center/contain no-repeat;
    height: 60px;
    width: 60px;
    cursor: pointer;
  }
`,_y=()=>{const{setIsShutDown:e,setIsLoading:t,setIsOpen:n,setIsShuttingDown:r}=Pe(),o=()=>{t(!0),setTimeout(()=>{t(!1)},3e3)};return x($y,{children:x("button",{onClick:()=>{r(!1),e(!1),o(),n({about:!1,work:!1,contact:!1,recycle:!1,time:!1,book:!1})}})})};function e1(){const{isShutDown:e,isLoading:t,setIsLoading:n,isShuttingDown:r}=Pe();return Y.useEffect(()=>{n(!0);const o=setTimeout(()=>{n(!1)},3e3);return()=>clearTimeout(o)},[n]),W("main",{children:[x(em,{}),x(_g,{}),r&&!e?x(MA,{preloader:!1}):e?x(_y,{}):W("div",{children:[t&&x(MA,{preloader:!0}),x(Zy,{})]})]})}Jl.createRoot(document.getElementById("root")).render(x(Tn.StrictMode,{children:x(s0,{children:x(e1,{})})}));
