(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Sd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function kd(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var o=[null];o.push.apply(o,arguments);var i=Function.bind.apply(t,o);return new i}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var Lr={},Cd={get exports(){return Lr},set exports(e){Lr=e}},Pi={},F={},Ed={get exports(){return F},set exports(e){F=e}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ao=Symbol.for("react.element"),Dd=Symbol.for("react.portal"),Id=Symbol.for("react.fragment"),Bd=Symbol.for("react.strict_mode"),Pd=Symbol.for("react.profiler"),Qd=Symbol.for("react.provider"),Md=Symbol.for("react.context"),Td=Symbol.for("react.forward_ref"),Od=Symbol.for("react.suspense"),jd=Symbol.for("react.memo"),bd=Symbol.for("react.lazy"),Vs=Symbol.iterator;function Rd(e){return e===null||typeof e!="object"?null:(e=Vs&&e[Vs]||e["@@iterator"],typeof e=="function"?e:null)}var BA={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},PA=Object.assign,QA={};function cr(e,t,n){this.props=e,this.context=t,this.refs=QA,this.updater=n||BA}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function MA(){}MA.prototype=cr.prototype;function Ga(e,t,n){this.props=e,this.context=t,this.refs=QA,this.updater=n||BA}var Fa=Ga.prototype=new MA;Fa.constructor=Ga;PA(Fa,cr.prototype);Fa.isPureReactComponent=!0;var Ws=Array.isArray,TA=Object.prototype.hasOwnProperty,Ya={current:null},OA={key:!0,ref:!0,__self:!0,__source:!0};function jA(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)TA.call(t,r)&&!OA.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Ao,type:e,key:i,ref:l,props:o,_owner:Ya.current}}function Ud(e,t){return{$$typeof:Ao,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ja(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ao}function Kd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Xs=/\/+/g;function Al(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kd(""+e.key):t.toString(36)}function zo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ao:case Dd:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Al(l,0):r,Ws(o)?(n="",e!=null&&(n=e.replace(Xs,"$&/")+"/"),zo(o,t,n,"",function(u){return u})):o!=null&&(Ja(o)&&(o=Ud(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Xs,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Ws(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Al(i,a);l+=zo(i,t,n,s,o)}else if(s=Rd(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Al(i,a++),l+=zo(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function yo(e,t,n){if(e==null)return e;var r=[],o=0;return zo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function zd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ye={current:null},No={transition:null},Nd={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:No,ReactCurrentOwner:Ya};V.Children={map:yo,forEach:function(e,t,n){yo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yo(e,function(){t++}),t},toArray:function(e){return yo(e,function(t){return t})||[]},only:function(e){if(!Ja(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=cr;V.Fragment=Id;V.Profiler=Pd;V.PureComponent=Ga;V.StrictMode=Bd;V.Suspense=Od;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nd;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=PA({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ya.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)TA.call(t,s)&&!OA.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ao,type:e.type,key:o,ref:i,props:r,_owner:l}};V.createContext=function(e){return e={$$typeof:Md,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qd,_context:e},e.Consumer=e};V.createElement=jA;V.createFactory=function(e){var t=jA.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Td,render:e}};V.isValidElement=Ja;V.lazy=function(e){return{$$typeof:bd,_payload:{_status:-1,_result:e},_init:zd}};V.memo=function(e,t){return{$$typeof:jd,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=No.transition;No.transition={};try{e()}finally{No.transition=t}};V.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};V.useCallback=function(e,t){return Ye.current.useCallback(e,t)};V.useContext=function(e){return Ye.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Ye.current.useDeferredValue(e)};V.useEffect=function(e,t){return Ye.current.useEffect(e,t)};V.useId=function(){return Ye.current.useId()};V.useImperativeHandle=function(e,t,n){return Ye.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Ye.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Ye.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Ye.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Ye.current.useReducer(e,t,n)};V.useRef=function(e){return Ye.current.useRef(e)};V.useState=function(e){return Ye.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Ye.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Ye.current.useTransition()};V.version="18.2.0";(function(e){e.exports=V})(Ed);const Tn=Sd(F);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld=F,Gd=Symbol.for("react.element"),Fd=Symbol.for("react.fragment"),Yd=Object.prototype.hasOwnProperty,Jd=Ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hd={key:!0,ref:!0,__self:!0,__source:!0};function bA(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Yd.call(t,r)&&!Hd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Gd,type:e,key:i,ref:l,props:o,_owner:Jd.current}}Pi.Fragment=Fd;Pi.jsx=bA;Pi.jsxs=bA;(function(e){e.exports=Pi})(Cd);const Ct=Lr.Fragment,v=Lr.jsx,H=Lr.jsxs;var Ll={},Gr={},Zd={get exports(){return Gr},set exports(e){Gr=e}},ot={},Gl={},Vd={get exports(){return Gl},set exports(e){Gl=e}},RA={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,z){var U=P.length;P.push(z);e:for(;0<U;){var $=U-1>>>1,m=P[$];if(0<o(m,z))P[$]=z,P[U]=m,U=$;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var z=P[0],U=P.pop();if(U!==z){P[0]=U;e:for(var $=0,m=P.length,y=m>>>1;$<y;){var w=2*($+1)-1,C=P[w],f=w+1,Q=P[f];if(0>o(C,U))f<m&&0>o(Q,C)?(P[$]=Q,P[f]=U,$=f):(P[$]=C,P[w]=U,$=w);else if(f<m&&0>o(Q,U))P[$]=Q,P[f]=U,$=f;else break e}}return z}function o(P,z){var U=P.sortIndex-z.sortIndex;return U!==0?U:P.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],p=1,g=null,h=3,k=!1,S=!1,E=!1,M=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(P){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=P)r(u),z.sortIndex=z.expirationTime,t(s,z);else break;z=n(u)}}function x(P){if(E=!1,d(P),!S)if(n(s)!==null)S=!0,pt(I);else{var z=n(u);z!==null&&ie(x,z.startTime-P)}}function I(P,z){S=!1,E&&(E=!1,c(O),O=-1),k=!0;var U=h;try{for(d(z),g=n(s);g!==null&&(!(g.expirationTime>z)||P&&!he());){var $=g.callback;if(typeof $=="function"){g.callback=null,h=g.priorityLevel;var m=$(g.expirationTime<=z);z=e.unstable_now(),typeof m=="function"?g.callback=m:g===n(s)&&r(s),d(z)}else r(s);g=n(s)}if(g!==null)var y=!0;else{var w=n(u);w!==null&&ie(x,w.startTime-z),y=!1}return y}finally{g=null,h=U,k=!1}}var T=!1,j=null,O=-1,q=5,G=-1;function he(){return!(e.unstable_now()-G<q)}function ge(){if(j!==null){var P=e.unstable_now();G=P;var z=!0;try{z=j(!0,P)}finally{z?ke():(T=!1,j=null)}}else T=!1}var ke;if(typeof A=="function")ke=function(){A(ge)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,Be=Te.port2;Te.port1.onmessage=ge,ke=function(){Be.postMessage(null)}}else ke=function(){M(ge,0)};function pt(P){j=P,T||(T=!0,ke())}function ie(P,z){O=M(function(){P(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){S||k||(S=!0,pt(I))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var U=h;h=z;try{return P()}finally{h=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var U=h;h=P;try{return z()}finally{h=U}},e.unstable_scheduleCallback=function(P,z,U){var $=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?$+U:$):U=$,P){case 1:var m=-1;break;case 2:m=250;break;case 5:m=1073741823;break;case 4:m=1e4;break;default:m=5e3}return m=U+m,P={id:p++,callback:z,priorityLevel:P,startTime:U,expirationTime:m,sortIndex:-1},U>$?(P.sortIndex=U,t(u,P),n(s)===null&&P===n(u)&&(E?(c(O),O=-1):E=!0,ie(x,U-$))):(P.sortIndex=m,t(s,P),S||k||(S=!0,pt(I))),P},e.unstable_shouldYield=he,e.unstable_wrapCallback=function(P){var z=h;return function(){var U=h;h=z;try{return P.apply(this,arguments)}finally{h=U}}}})(RA);(function(e){e.exports=RA})(Vd);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UA=F,rt=Gl;function B(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var KA=new Set,Fr={};function On(e,t){rr(e,t),rr(e+"Capture",t)}function rr(e,t){for(Fr[e]=t,e=0;e<t.length;e++)KA.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fl=Object.prototype.hasOwnProperty,Wd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qs={},_s={};function Xd(e){return Fl.call(_s,e)?!0:Fl.call(qs,e)?!1:Wd.test(e)?_s[e]=!0:(qs[e]=!0,!1)}function qd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _d(e,t,n,r){if(t===null||typeof t>"u"||qd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];be[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){be[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){be[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){be[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){be[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ha=/[\-:]([a-z])/g;function Za(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ha,Za);be[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ha,Za);be[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ha,Za);be[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){be[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});be.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){be[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Va(e,t,n,r){var o=be.hasOwnProperty(t)?be[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_d(t,n,o,r)&&(n=null),r||o===null?Xd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Yt=UA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vo=Symbol.for("react.element"),Un=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),Wa=Symbol.for("react.strict_mode"),Yl=Symbol.for("react.profiler"),zA=Symbol.for("react.provider"),NA=Symbol.for("react.context"),Xa=Symbol.for("react.forward_ref"),Jl=Symbol.for("react.suspense"),Hl=Symbol.for("react.suspense_list"),qa=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),LA=Symbol.for("react.offscreen"),$s=Symbol.iterator;function mr(e){return e===null||typeof e!="object"?null:(e=$s&&e[$s]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Object.assign,cl;function Dr(e){if(cl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);cl=t&&t[1]||""}return`
`+cl+e}var fl=!1;function dl(e,t){if(!e||fl)return"";fl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{fl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dr(e):""}function $d(e){switch(e.tag){case 5:return Dr(e.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return e=dl(e.type,!1),e;case 11:return e=dl(e.type.render,!1),e;case 1:return e=dl(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Un:return"Portal";case Yl:return"Profiler";case Wa:return"StrictMode";case Jl:return"Suspense";case Hl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case NA:return(e.displayName||"Context")+".Consumer";case zA:return(e._context.displayName||"Context")+".Provider";case Xa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qa:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case Xt:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function ep(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===Wa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function GA(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tp(e){var t=GA(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wo(e){e._valueTracker||(e._valueTracker=tp(e))}function FA(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=GA(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vl(e,t){var n=t.checked;return Ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function eu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function YA(e,t){t=t.checked,t!=null&&Va(e,"checked",t,!1)}function Wl(e,t){YA(e,t);var n=fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xl(e,t.type,fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function tu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xl(e,t,n){(t!=="number"||_o(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ir=Array.isArray;function qn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ql(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(B(92));if(Ir(n)){if(1<n.length)throw Error(B(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fn(n)}}function JA(e,t){var n=fn(t.value),r=fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ru(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function HA(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _l(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?HA(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xo,ZA=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xo=xo||document.createElement("div"),xo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},np=["Webkit","ms","Moz","O"];Object.keys(Qr).forEach(function(e){np.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qr[t]=Qr[e]})});function VA(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qr.hasOwnProperty(e)&&Qr[e]?(""+t).trim():t+"px"}function WA(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=VA(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var rp=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $l(e,t){if(t){if(rp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(B(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(B(61))}if(t.style!=null&&typeof t.style!="object")throw Error(B(62))}}function ea(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ta=null;function _a(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var na=null,_n=null,$n=null;function ou(e){if(e=po(e)){if(typeof na!="function")throw Error(B(280));var t=e.stateNode;t&&(t=ji(t),na(e.stateNode,e.type,t))}}function XA(e){_n?$n?$n.push(e):$n=[e]:_n=e}function qA(){if(_n){var e=_n,t=$n;if($n=_n=null,ou(e),t)for(e=0;e<t.length;e++)ou(t[e])}}function _A(e,t){return e(t)}function $A(){}var pl=!1;function ec(e,t,n){if(pl)return e(t,n);pl=!0;try{return _A(e,t,n)}finally{pl=!1,(_n!==null||$n!==null)&&($A(),qA())}}function Jr(e,t){var n=e.stateNode;if(n===null)return null;var r=ji(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(B(231,t,typeof n));return n}var ra=!1;if(zt)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){ra=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{ra=!1}function op(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Mr=!1,$o=null,ei=!1,oa=null,ip={onError:function(e){Mr=!0,$o=e}};function lp(e,t,n,r,o,i,l,a,s){Mr=!1,$o=null,op.apply(ip,arguments)}function ap(e,t,n,r,o,i,l,a,s){if(lp.apply(this,arguments),Mr){if(Mr){var u=$o;Mr=!1,$o=null}else throw Error(B(198));ei||(ei=!0,oa=u)}}function jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function tc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function iu(e){if(jn(e)!==e)throw Error(B(188))}function sp(e){var t=e.alternate;if(!t){if(t=jn(e),t===null)throw Error(B(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return iu(o),e;if(i===r)return iu(o),t;i=i.sibling}throw Error(B(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?e:t}function nc(e){return e=sp(e),e!==null?rc(e):null}function rc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=rc(e);if(t!==null)return t;e=e.sibling}return null}var oc=rt.unstable_scheduleCallback,lu=rt.unstable_cancelCallback,up=rt.unstable_shouldYield,Ap=rt.unstable_requestPaint,ve=rt.unstable_now,cp=rt.unstable_getCurrentPriorityLevel,$a=rt.unstable_ImmediatePriority,ic=rt.unstable_UserBlockingPriority,ti=rt.unstable_NormalPriority,fp=rt.unstable_LowPriority,lc=rt.unstable_IdlePriority,Qi=null,Pt=null;function dp(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Qi,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:gp,pp=Math.log,hp=Math.LN2;function gp(e){return e>>>=0,e===0?32:31-(pp(e)/hp|0)|0}var So=64,ko=4194304;function Br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ni(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Br(a):(i&=l,i!==0&&(r=Br(i)))}else l=n&~o,l!==0?r=Br(l):i!==0&&(r=Br(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),o=1<<n,r|=e[n],t&=~o;return r}function mp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-xt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=mp(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function ia(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ac(){var e=So;return So<<=1,!(So&4194240)&&(So=64),e}function hl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function co(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function vp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-xt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function es(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ee=0;function sc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uc,ts,Ac,cc,fc,la=!1,Co=[],nn=null,rn=null,on=null,Hr=new Map,Zr=new Map,_t=[],wp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function au(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":Hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function vr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=po(t),t!==null&&ts(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function xp(e,t,n,r,o){switch(t){case"focusin":return nn=vr(nn,e,t,n,r,o),!0;case"dragenter":return rn=vr(rn,e,t,n,r,o),!0;case"mouseover":return on=vr(on,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Hr.set(i,vr(Hr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Zr.set(i,vr(Zr.get(i)||null,e,t,n,r,o)),!0}return!1}function dc(e){var t=xn(e.target);if(t!==null){var n=jn(t);if(n!==null){if(t=n.tag,t===13){if(t=tc(n),t!==null){e.blockedOn=t,fc(e.priority,function(){Ac(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=aa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ta=r,n.target.dispatchEvent(r),ta=null}else return t=po(n),t!==null&&ts(t),e.blockedOn=n,!1;t.shift()}return!0}function su(e,t,n){Lo(e)&&n.delete(t)}function Sp(){la=!1,nn!==null&&Lo(nn)&&(nn=null),rn!==null&&Lo(rn)&&(rn=null),on!==null&&Lo(on)&&(on=null),Hr.forEach(su),Zr.forEach(su)}function wr(e,t){e.blockedOn===t&&(e.blockedOn=null,la||(la=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,Sp)))}function Vr(e){function t(o){return wr(o,e)}if(0<Co.length){wr(Co[0],e);for(var n=1;n<Co.length;n++){var r=Co[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&wr(nn,e),rn!==null&&wr(rn,e),on!==null&&wr(on,e),Hr.forEach(t),Zr.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)dc(n),n.blockedOn===null&&_t.shift()}var er=Yt.ReactCurrentBatchConfig,ri=!0;function kp(e,t,n,r){var o=ee,i=er.transition;er.transition=null;try{ee=1,ns(e,t,n,r)}finally{ee=o,er.transition=i}}function Cp(e,t,n,r){var o=ee,i=er.transition;er.transition=null;try{ee=4,ns(e,t,n,r)}finally{ee=o,er.transition=i}}function ns(e,t,n,r){if(ri){var o=aa(e,t,n,r);if(o===null)El(e,t,r,oi,n),au(e,r);else if(xp(o,e,t,n,r))r.stopPropagation();else if(au(e,r),t&4&&-1<wp.indexOf(e)){for(;o!==null;){var i=po(o);if(i!==null&&uc(i),i=aa(e,t,n,r),i===null&&El(e,t,r,oi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else El(e,t,r,null,n)}}var oi=null;function aa(e,t,n,r){if(oi=null,e=_a(r),e=xn(e),e!==null)if(t=jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=tc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return oi=e,null}function pc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cp()){case $a:return 1;case ic:return 4;case ti:case fp:return 16;case lc:return 536870912;default:return 16}default:return 16}}var en=null,rs=null,Go=null;function hc(){if(Go)return Go;var e,t=rs,n=t.length,r,o="value"in en?en.value:en.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Go=o.slice(e,1<r?1-r:void 0)}function Fo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Eo(){return!0}function uu(){return!1}function it(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Eo:uu,this.isPropagationStopped=uu,this}return Ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},os=it(fr),fo=Ae({},fr,{view:0,detail:0}),Ep=it(fo),gl,ml,xr,Mi=Ae({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xr&&(xr&&e.type==="mousemove"?(gl=e.screenX-xr.screenX,ml=e.screenY-xr.screenY):ml=gl=0,xr=e),gl)},movementY:function(e){return"movementY"in e?e.movementY:ml}}),Au=it(Mi),Dp=Ae({},Mi,{dataTransfer:0}),Ip=it(Dp),Bp=Ae({},fo,{relatedTarget:0}),yl=it(Bp),Pp=Ae({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),Qp=it(Pp),Mp=Ae({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tp=it(Mp),Op=Ae({},fr,{data:0}),cu=it(Op),jp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Up(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rp[e])?!!t[e]:!1}function is(){return Up}var Kp=Ae({},fo,{key:function(e){if(e.key){var t=jp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:is,charCode:function(e){return e.type==="keypress"?Fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zp=it(Kp),Np=Ae({},Mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fu=it(Np),Lp=Ae({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:is}),Gp=it(Lp),Fp=Ae({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yp=it(Fp),Jp=Ae({},Mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hp=it(Jp),Zp=[9,13,27,32],ls=zt&&"CompositionEvent"in window,Tr=null;zt&&"documentMode"in document&&(Tr=document.documentMode);var Vp=zt&&"TextEvent"in window&&!Tr,gc=zt&&(!ls||Tr&&8<Tr&&11>=Tr),du=String.fromCharCode(32),pu=!1;function mc(e,t){switch(e){case"keyup":return Zp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zn=!1;function Wp(e,t){switch(e){case"compositionend":return yc(t);case"keypress":return t.which!==32?null:(pu=!0,du);case"textInput":return e=t.data,e===du&&pu?null:e;default:return null}}function Xp(e,t){if(zn)return e==="compositionend"||!ls&&mc(e,t)?(e=hc(),Go=rs=en=null,zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gc&&t.locale!=="ko"?null:t.data;default:return null}}var qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qp[e.type]:t==="textarea"}function vc(e,t,n,r){XA(r),t=ii(t,"onChange"),0<t.length&&(n=new os("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Or=null,Wr=null;function _p(e){Qc(e,0)}function Ti(e){var t=Gn(e);if(FA(t))return e}function $p(e,t){if(e==="change")return t}var wc=!1;if(zt){var vl;if(zt){var wl="oninput"in document;if(!wl){var gu=document.createElement("div");gu.setAttribute("oninput","return;"),wl=typeof gu.oninput=="function"}vl=wl}else vl=!1;wc=vl&&(!document.documentMode||9<document.documentMode)}function mu(){Or&&(Or.detachEvent("onpropertychange",xc),Wr=Or=null)}function xc(e){if(e.propertyName==="value"&&Ti(Wr)){var t=[];vc(t,Wr,e,_a(e)),ec(_p,t)}}function eh(e,t,n){e==="focusin"?(mu(),Or=t,Wr=n,Or.attachEvent("onpropertychange",xc)):e==="focusout"&&mu()}function th(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ti(Wr)}function nh(e,t){if(e==="click")return Ti(t)}function rh(e,t){if(e==="input"||e==="change")return Ti(t)}function oh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:oh;function Xr(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Fl.call(t,o)||!kt(e[o],t[o]))return!1}return!0}function yu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vu(e,t){var n=yu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yu(n)}}function Sc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kc(){for(var e=window,t=_o();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_o(e.document)}return t}function as(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ih(e){var t=kc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sc(n.ownerDocument.documentElement,n)){if(r!==null&&as(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=vu(n,i);var l=vu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lh=zt&&"documentMode"in document&&11>=document.documentMode,Nn=null,sa=null,jr=null,ua=!1;function wu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ua||Nn==null||Nn!==_o(r)||(r=Nn,"selectionStart"in r&&as(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Xr(jr,r)||(jr=r,r=ii(sa,"onSelect"),0<r.length&&(t=new os("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nn)))}function Do(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ln={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},xl={},Cc={};zt&&(Cc=document.createElement("div").style,"AnimationEvent"in window||(delete Ln.animationend.animation,delete Ln.animationiteration.animation,delete Ln.animationstart.animation),"TransitionEvent"in window||delete Ln.transitionend.transition);function Oi(e){if(xl[e])return xl[e];if(!Ln[e])return e;var t=Ln[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cc)return xl[e]=t[n];return e}var Ec=Oi("animationend"),Dc=Oi("animationiteration"),Ic=Oi("animationstart"),Bc=Oi("transitionend"),Pc=new Map,xu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(e,t){Pc.set(e,t),On(t,[e])}for(var Sl=0;Sl<xu.length;Sl++){var kl=xu[Sl],ah=kl.toLowerCase(),sh=kl[0].toUpperCase()+kl.slice(1);pn(ah,"on"+sh)}pn(Ec,"onAnimationEnd");pn(Dc,"onAnimationIteration");pn(Ic,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(Bc,"onTransitionEnd");rr("onMouseEnter",["mouseout","mouseover"]);rr("onMouseLeave",["mouseout","mouseover"]);rr("onPointerEnter",["pointerout","pointerover"]);rr("onPointerLeave",["pointerout","pointerover"]);On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));On("onBeforeInput",["compositionend","keypress","textInput","paste"]);On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));function Su(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ap(r,t,void 0,e),e.currentTarget=null}function Qc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Su(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Su(o,a,u),i=s}}}if(ei)throw e=oa,ei=!1,oa=null,e}function re(e,t){var n=t[pa];n===void 0&&(n=t[pa]=new Set);var r=e+"__bubble";n.has(r)||(Mc(t,e,2,!1),n.add(r))}function Cl(e,t,n){var r=0;t&&(r|=4),Mc(n,e,r,t)}var Io="_reactListening"+Math.random().toString(36).slice(2);function qr(e){if(!e[Io]){e[Io]=!0,KA.forEach(function(n){n!=="selectionchange"&&(uh.has(n)||Cl(n,!1,e),Cl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Io]||(t[Io]=!0,Cl("selectionchange",!1,t))}}function Mc(e,t,n,r){switch(pc(t)){case 1:var o=kp;break;case 4:o=Cp;break;default:o=ns}n=o.bind(null,t,n,e),o=void 0,!ra||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function El(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=xn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}ec(function(){var u=i,p=_a(n),g=[];e:{var h=Pc.get(e);if(h!==void 0){var k=os,S=e;switch(e){case"keypress":if(Fo(n)===0)break e;case"keydown":case"keyup":k=zp;break;case"focusin":S="focus",k=yl;break;case"focusout":S="blur",k=yl;break;case"beforeblur":case"afterblur":k=yl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Ip;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Gp;break;case Ec:case Dc:case Ic:k=Qp;break;case Bc:k=Yp;break;case"scroll":k=Ep;break;case"wheel":k=Hp;break;case"copy":case"cut":case"paste":k=Tp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=fu}var E=(t&4)!==0,M=!E&&e==="scroll",c=E?h!==null?h+"Capture":null:h;E=[];for(var A=u,d;A!==null;){d=A;var x=d.stateNode;if(d.tag===5&&x!==null&&(d=x,c!==null&&(x=Jr(A,c),x!=null&&E.push(_r(A,x,d)))),M)break;A=A.return}0<E.length&&(h=new k(h,S,null,n,p),g.push({event:h,listeners:E}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==ta&&(S=n.relatedTarget||n.fromElement)&&(xn(S)||S[Nt]))break e;if((k||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,k?(S=n.relatedTarget||n.toElement,k=u,S=S?xn(S):null,S!==null&&(M=jn(S),S!==M||S.tag!==5&&S.tag!==6)&&(S=null)):(k=null,S=u),k!==S)){if(E=Au,x="onMouseLeave",c="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(E=fu,x="onPointerLeave",c="onPointerEnter",A="pointer"),M=k==null?h:Gn(k),d=S==null?h:Gn(S),h=new E(x,A+"leave",k,n,p),h.target=M,h.relatedTarget=d,x=null,xn(p)===u&&(E=new E(c,A+"enter",S,n,p),E.target=d,E.relatedTarget=M,x=E),M=x,k&&S)t:{for(E=k,c=S,A=0,d=E;d;d=Rn(d))A++;for(d=0,x=c;x;x=Rn(x))d++;for(;0<A-d;)E=Rn(E),A--;for(;0<d-A;)c=Rn(c),d--;for(;A--;){if(E===c||c!==null&&E===c.alternate)break t;E=Rn(E),c=Rn(c)}E=null}else E=null;k!==null&&ku(g,h,k,E,!1),S!==null&&M!==null&&ku(g,M,S,E,!0)}}e:{if(h=u?Gn(u):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var I=$p;else if(hu(h))if(wc)I=rh;else{I=th;var T=eh}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=nh);if(I&&(I=I(e,u))){vc(g,I,n,p);break e}T&&T(e,h,u),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Xl(h,"number",h.value)}switch(T=u?Gn(u):window,e){case"focusin":(hu(T)||T.contentEditable==="true")&&(Nn=T,sa=u,jr=null);break;case"focusout":jr=sa=Nn=null;break;case"mousedown":ua=!0;break;case"contextmenu":case"mouseup":case"dragend":ua=!1,wu(g,n,p);break;case"selectionchange":if(lh)break;case"keydown":case"keyup":wu(g,n,p)}var j;if(ls)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else zn?mc(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(gc&&n.locale!=="ko"&&(zn||O!=="onCompositionStart"?O==="onCompositionEnd"&&zn&&(j=hc()):(en=p,rs="value"in en?en.value:en.textContent,zn=!0)),T=ii(u,O),0<T.length&&(O=new cu(O,e,null,n,p),g.push({event:O,listeners:T}),j?O.data=j:(j=yc(n),j!==null&&(O.data=j)))),(j=Vp?Wp(e,n):Xp(e,n))&&(u=ii(u,"onBeforeInput"),0<u.length&&(p=new cu("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:u}),p.data=j))}Qc(g,t)})}function _r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ii(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Jr(e,n),i!=null&&r.unshift(_r(e,i,o)),i=Jr(e,t),i!=null&&r.push(_r(e,i,o))),e=e.return}return r}function Rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ku(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Jr(n,i),s!=null&&l.unshift(_r(n,s,a))):o||(s=Jr(n,i),s!=null&&l.push(_r(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Ah=/\r\n?/g,ch=/\u0000|\uFFFD/g;function Cu(e){return(typeof e=="string"?e:""+e).replace(Ah,`
`).replace(ch,"")}function Bo(e,t,n){if(t=Cu(t),Cu(e)!==t&&n)throw Error(B(425))}function li(){}var Aa=null,ca=null;function fa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var da=typeof setTimeout=="function"?setTimeout:void 0,fh=typeof clearTimeout=="function"?clearTimeout:void 0,Eu=typeof Promise=="function"?Promise:void 0,dh=typeof queueMicrotask=="function"?queueMicrotask:typeof Eu<"u"?function(e){return Eu.resolve(null).then(e).catch(ph)}:da;function ph(e){setTimeout(function(){throw e})}function Dl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Vr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Vr(t)}function ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Du(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dr=Math.random().toString(36).slice(2),It="__reactFiber$"+dr,$r="__reactProps$"+dr,Nt="__reactContainer$"+dr,pa="__reactEvents$"+dr,hh="__reactListeners$"+dr,gh="__reactHandles$"+dr;function xn(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Du(e);e!==null;){if(n=e[It])return n;e=Du(e)}return t}e=n,n=e.parentNode}return null}function po(e){return e=e[It]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function ji(e){return e[$r]||null}var ha=[],Fn=-1;function hn(e){return{current:e}}function oe(e){0>Fn||(e.current=ha[Fn],ha[Fn]=null,Fn--)}function ne(e,t){Fn++,ha[Fn]=e.current,e.current=t}var dn={},Le=hn(dn),Ve=hn(!1),Dn=dn;function or(e,t){var n=e.type.contextTypes;if(!n)return dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function We(e){return e=e.childContextTypes,e!=null}function ai(){oe(Ve),oe(Le)}function Iu(e,t,n){if(Le.current!==dn)throw Error(B(168));ne(Le,t),ne(Ve,n)}function Tc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(B(108,ep(e)||"Unknown",o));return Ae({},n,r)}function si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Dn=Le.current,ne(Le,e),ne(Ve,Ve.current),!0}function Bu(e,t,n){var r=e.stateNode;if(!r)throw Error(B(169));n?(e=Tc(e,t,Dn),r.__reactInternalMemoizedMergedChildContext=e,oe(Ve),oe(Le),ne(Le,e)):oe(Ve),ne(Ve,n)}var bt=null,bi=!1,Il=!1;function Oc(e){bt===null?bt=[e]:bt.push(e)}function mh(e){bi=!0,Oc(e)}function gn(){if(!Il&&bt!==null){Il=!0;var e=0,t=ee;try{var n=bt;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}bt=null,bi=!1}catch(o){throw bt!==null&&(bt=bt.slice(e+1)),oc($a,gn),o}finally{ee=t,Il=!1}}return null}var Yn=[],Jn=0,ui=null,Ai=0,st=[],ut=0,In=null,Rt=1,Ut="";function vn(e,t){Yn[Jn++]=Ai,Yn[Jn++]=ui,ui=e,Ai=t}function jc(e,t,n){st[ut++]=Rt,st[ut++]=Ut,st[ut++]=In,In=e;var r=Rt;e=Ut;var o=32-xt(r)-1;r&=~(1<<o),n+=1;var i=32-xt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Rt=1<<32-xt(t)+o|n<<o|r,Ut=i+e}else Rt=1<<i|n<<o|r,Ut=e}function ss(e){e.return!==null&&(vn(e,1),jc(e,1,0))}function us(e){for(;e===ui;)ui=Yn[--Jn],Yn[Jn]=null,Ai=Yn[--Jn],Yn[Jn]=null;for(;e===In;)In=st[--ut],st[ut]=null,Ut=st[--ut],st[ut]=null,Rt=st[--ut],st[ut]=null}var tt=null,et=null,ae=!1,wt=null;function bc(e,t){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,et=ln(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:Rt,overflow:Ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tt=e,et=null,!0):!1;default:return!1}}function ga(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ma(e){if(ae){var t=et;if(t){var n=t;if(!Pu(e,t)){if(ga(e))throw Error(B(418));t=ln(n.nextSibling);var r=tt;t&&Pu(e,t)?bc(r,n):(e.flags=e.flags&-4097|2,ae=!1,tt=e)}}else{if(ga(e))throw Error(B(418));e.flags=e.flags&-4097|2,ae=!1,tt=e}}}function Qu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function Po(e){if(e!==tt)return!1;if(!ae)return Qu(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fa(e.type,e.memoizedProps)),t&&(t=et)){if(ga(e))throw Rc(),Error(B(418));for(;t;)bc(e,t),t=ln(t.nextSibling)}if(Qu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){et=ln(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}et=null}}else et=tt?ln(e.stateNode.nextSibling):null;return!0}function Rc(){for(var e=et;e;)e=ln(e.nextSibling)}function ir(){et=tt=null,ae=!1}function As(e){wt===null?wt=[e]:wt.push(e)}var yh=Yt.ReactCurrentBatchConfig;function yt(e,t){if(e&&e.defaultProps){t=Ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ci=hn(null),fi=null,Hn=null,cs=null;function fs(){cs=Hn=fi=null}function ds(e){var t=ci.current;oe(ci),e._currentValue=t}function ya(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function tr(e,t){fi=e,cs=Hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ze=!0),e.firstContext=null)}function ft(e){var t=e._currentValue;if(cs!==e)if(e={context:e,memoizedValue:t,next:null},Hn===null){if(fi===null)throw Error(B(308));Hn=e,fi.dependencies={lanes:0,firstContext:e}}else Hn=Hn.next=e;return t}var Sn=null;function ps(e){Sn===null?Sn=[e]:Sn.push(e)}function Uc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ps(t)):(n.next=o.next,o.next=n),t.interleaved=n,Lt(e,r)}function Lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qt=!1;function hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function an(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,_&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Lt(e,n)}return o=r.interleaved,o===null?(t.next=t,ps(r)):(t.next=o.next,o.next=t),r.interleaved=t,Lt(e,n)}function Yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,es(e,n)}}function Mu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function di(e,t,n,r){var o=e.updateQueue;qt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=s))}if(i!==null){var g=o.baseState;l=0,p=u=s=null,a=i;do{var h=a.lane,k=a.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,E=a;switch(h=t,k=n,E.tag){case 1:if(S=E.payload,typeof S=="function"){g=S.call(k,g,h);break e}g=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=E.payload,h=typeof S=="function"?S.call(k,g,h):S,h==null)break e;g=Ae({},g,h);break e;case 2:qt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else k={eventTime:k,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=k,s=g):p=p.next=k,l|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(p===null&&(s=g),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Pn|=l,e.lanes=l,e.memoizedState=g}}function Tu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(B(191,o));o.call(r)}}}var zc=new UA.Component().refs;function va(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ri={isMounted:function(e){return(e=e._reactInternals)?jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fe(),o=un(e),i=Kt(r,o);i.payload=t,n!=null&&(i.callback=n),t=an(e,i,o),t!==null&&(St(t,e,o,r),Yo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fe(),o=un(e),i=Kt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=an(e,i,o),t!==null&&(St(t,e,o,r),Yo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),r=un(e),o=Kt(n,r);o.tag=2,t!=null&&(o.callback=t),t=an(e,o,r),t!==null&&(St(t,e,r,n),Yo(t,e,r))}};function Ou(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Xr(n,r)||!Xr(o,i):!0}function Nc(e,t,n){var r=!1,o=dn,i=t.contextType;return typeof i=="object"&&i!==null?i=ft(i):(o=We(t)?Dn:Le.current,r=t.contextTypes,i=(r=r!=null)?or(e,o):dn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ri,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ju(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ri.enqueueReplaceState(t,t.state,null)}function wa(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=zc,hs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ft(i):(i=We(t)?Dn:Le.current,o.context=or(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(va(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ri.enqueueReplaceState(o,o.state,null),di(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===zc&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,e))}return e}function Qo(e,t){throw e=Object.prototype.toString.call(t),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bu(e){var t=e._init;return t(e._payload)}function Lc(e){function t(c,A){if(e){var d=c.deletions;d===null?(c.deletions=[A],c.flags|=16):d.push(A)}}function n(c,A){if(!e)return null;for(;A!==null;)t(c,A),A=A.sibling;return null}function r(c,A){for(c=new Map;A!==null;)A.key!==null?c.set(A.key,A):c.set(A.index,A),A=A.sibling;return c}function o(c,A){return c=An(c,A),c.index=0,c.sibling=null,c}function i(c,A,d){return c.index=d,e?(d=c.alternate,d!==null?(d=d.index,d<A?(c.flags|=2,A):d):(c.flags|=2,A)):(c.flags|=1048576,A)}function l(c){return e&&c.alternate===null&&(c.flags|=2),c}function a(c,A,d,x){return A===null||A.tag!==6?(A=jl(d,c.mode,x),A.return=c,A):(A=o(A,d),A.return=c,A)}function s(c,A,d,x){var I=d.type;return I===Kn?p(c,A,d.props.children,x,d.key):A!==null&&(A.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Xt&&bu(I)===A.type)?(x=o(A,d.props),x.ref=Sr(c,A,d),x.return=c,x):(x=Xo(d.type,d.key,d.props,null,c.mode,x),x.ref=Sr(c,A,d),x.return=c,x)}function u(c,A,d,x){return A===null||A.tag!==4||A.stateNode.containerInfo!==d.containerInfo||A.stateNode.implementation!==d.implementation?(A=bl(d,c.mode,x),A.return=c,A):(A=o(A,d.children||[]),A.return=c,A)}function p(c,A,d,x,I){return A===null||A.tag!==7?(A=En(d,c.mode,x,I),A.return=c,A):(A=o(A,d),A.return=c,A)}function g(c,A,d){if(typeof A=="string"&&A!==""||typeof A=="number")return A=jl(""+A,c.mode,d),A.return=c,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case vo:return d=Xo(A.type,A.key,A.props,null,c.mode,d),d.ref=Sr(c,null,A),d.return=c,d;case Un:return A=bl(A,c.mode,d),A.return=c,A;case Xt:var x=A._init;return g(c,x(A._payload),d)}if(Ir(A)||mr(A))return A=En(A,c.mode,d,null),A.return=c,A;Qo(c,A)}return null}function h(c,A,d,x){var I=A!==null?A.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return I!==null?null:a(c,A,""+d,x);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case vo:return d.key===I?s(c,A,d,x):null;case Un:return d.key===I?u(c,A,d,x):null;case Xt:return I=d._init,h(c,A,I(d._payload),x)}if(Ir(d)||mr(d))return I!==null?null:p(c,A,d,x,null);Qo(c,d)}return null}function k(c,A,d,x,I){if(typeof x=="string"&&x!==""||typeof x=="number")return c=c.get(d)||null,a(A,c,""+x,I);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case vo:return c=c.get(x.key===null?d:x.key)||null,s(A,c,x,I);case Un:return c=c.get(x.key===null?d:x.key)||null,u(A,c,x,I);case Xt:var T=x._init;return k(c,A,d,T(x._payload),I)}if(Ir(x)||mr(x))return c=c.get(d)||null,p(A,c,x,I,null);Qo(A,x)}return null}function S(c,A,d,x){for(var I=null,T=null,j=A,O=A=0,q=null;j!==null&&O<d.length;O++){j.index>O?(q=j,j=null):q=j.sibling;var G=h(c,j,d[O],x);if(G===null){j===null&&(j=q);break}e&&j&&G.alternate===null&&t(c,j),A=i(G,A,O),T===null?I=G:T.sibling=G,T=G,j=q}if(O===d.length)return n(c,j),ae&&vn(c,O),I;if(j===null){for(;O<d.length;O++)j=g(c,d[O],x),j!==null&&(A=i(j,A,O),T===null?I=j:T.sibling=j,T=j);return ae&&vn(c,O),I}for(j=r(c,j);O<d.length;O++)q=k(j,c,O,d[O],x),q!==null&&(e&&q.alternate!==null&&j.delete(q.key===null?O:q.key),A=i(q,A,O),T===null?I=q:T.sibling=q,T=q);return e&&j.forEach(function(he){return t(c,he)}),ae&&vn(c,O),I}function E(c,A,d,x){var I=mr(d);if(typeof I!="function")throw Error(B(150));if(d=I.call(d),d==null)throw Error(B(151));for(var T=I=null,j=A,O=A=0,q=null,G=d.next();j!==null&&!G.done;O++,G=d.next()){j.index>O?(q=j,j=null):q=j.sibling;var he=h(c,j,G.value,x);if(he===null){j===null&&(j=q);break}e&&j&&he.alternate===null&&t(c,j),A=i(he,A,O),T===null?I=he:T.sibling=he,T=he,j=q}if(G.done)return n(c,j),ae&&vn(c,O),I;if(j===null){for(;!G.done;O++,G=d.next())G=g(c,G.value,x),G!==null&&(A=i(G,A,O),T===null?I=G:T.sibling=G,T=G);return ae&&vn(c,O),I}for(j=r(c,j);!G.done;O++,G=d.next())G=k(j,c,O,G.value,x),G!==null&&(e&&G.alternate!==null&&j.delete(G.key===null?O:G.key),A=i(G,A,O),T===null?I=G:T.sibling=G,T=G);return e&&j.forEach(function(ge){return t(c,ge)}),ae&&vn(c,O),I}function M(c,A,d,x){if(typeof d=="object"&&d!==null&&d.type===Kn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case vo:e:{for(var I=d.key,T=A;T!==null;){if(T.key===I){if(I=d.type,I===Kn){if(T.tag===7){n(c,T.sibling),A=o(T,d.props.children),A.return=c,c=A;break e}}else if(T.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Xt&&bu(I)===T.type){n(c,T.sibling),A=o(T,d.props),A.ref=Sr(c,T,d),A.return=c,c=A;break e}n(c,T);break}else t(c,T);T=T.sibling}d.type===Kn?(A=En(d.props.children,c.mode,x,d.key),A.return=c,c=A):(x=Xo(d.type,d.key,d.props,null,c.mode,x),x.ref=Sr(c,A,d),x.return=c,c=x)}return l(c);case Un:e:{for(T=d.key;A!==null;){if(A.key===T)if(A.tag===4&&A.stateNode.containerInfo===d.containerInfo&&A.stateNode.implementation===d.implementation){n(c,A.sibling),A=o(A,d.children||[]),A.return=c,c=A;break e}else{n(c,A);break}else t(c,A);A=A.sibling}A=bl(d,c.mode,x),A.return=c,c=A}return l(c);case Xt:return T=d._init,M(c,A,T(d._payload),x)}if(Ir(d))return S(c,A,d,x);if(mr(d))return E(c,A,d,x);Qo(c,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,A!==null&&A.tag===6?(n(c,A.sibling),A=o(A,d),A.return=c,c=A):(n(c,A),A=jl(d,c.mode,x),A.return=c,c=A),l(c)):n(c,A)}return M}var lr=Lc(!0),Gc=Lc(!1),ho={},Qt=hn(ho),eo=hn(ho),to=hn(ho);function kn(e){if(e===ho)throw Error(B(174));return e}function gs(e,t){switch(ne(to,t),ne(eo,e),ne(Qt,ho),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_l(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_l(t,e)}oe(Qt),ne(Qt,t)}function ar(){oe(Qt),oe(eo),oe(to)}function Fc(e){kn(to.current);var t=kn(Qt.current),n=_l(t,e.type);t!==n&&(ne(eo,e),ne(Qt,n))}function ms(e){eo.current===e&&(oe(Qt),oe(eo))}var se=hn(0);function pi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bl=[];function ys(){for(var e=0;e<Bl.length;e++)Bl[e]._workInProgressVersionPrimary=null;Bl.length=0}var Jo=Yt.ReactCurrentDispatcher,Pl=Yt.ReactCurrentBatchConfig,Bn=0,ue=null,Ee=null,Pe=null,hi=!1,br=!1,no=0,vh=0;function Re(){throw Error(B(321))}function vs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function ws(e,t,n,r,o,i){if(Bn=i,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Jo.current=e===null||e.memoizedState===null?kh:Ch,e=n(r,o),br){i=0;do{if(br=!1,no=0,25<=i)throw Error(B(301));i+=1,Pe=Ee=null,t.updateQueue=null,Jo.current=Eh,e=n(r,o)}while(br)}if(Jo.current=gi,t=Ee!==null&&Ee.next!==null,Bn=0,Pe=Ee=ue=null,hi=!1,t)throw Error(B(300));return e}function xs(){var e=no!==0;return no=0,e}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ue.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function dt(){if(Ee===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Pe===null?ue.memoizedState:Pe.next;if(t!==null)Pe=t,Ee=e;else{if(e===null)throw Error(B(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Pe===null?ue.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function ro(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=dt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=Ee,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var p=u.lane;if((Bn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var g={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=g,l=r):s=s.next=g,ue.lanes|=p,Pn|=p}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,kt(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ue.lanes|=i,Pn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ml(e){var t=dt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);kt(i,t.memoizedState)||(Ze=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Yc(){}function Jc(e,t){var n=ue,r=dt(),o=t(),i=!kt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ze=!0),r=r.queue,Ss(Vc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,oo(9,Zc.bind(null,n,r,o,t),void 0,null),Qe===null)throw Error(B(349));Bn&30||Hc(n,t,o)}return o}function Hc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zc(e,t,n,r){t.value=n,t.getSnapshot=r,Wc(t)&&Xc(e)}function Vc(e,t,n){return n(function(){Wc(t)&&Xc(e)})}function Wc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function Xc(e){var t=Lt(e,1);t!==null&&St(t,e,1,-1)}function Ru(e){var t=Dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:e},t.queue=e,e=e.dispatch=Sh.bind(null,ue,e),[t.memoizedState,e]}function oo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qc(){return dt().memoizedState}function Ho(e,t,n,r){var o=Dt();ue.flags|=e,o.memoizedState=oo(1|t,n,void 0,r===void 0?null:r)}function Ui(e,t,n,r){var o=dt();r=r===void 0?null:r;var i=void 0;if(Ee!==null){var l=Ee.memoizedState;if(i=l.destroy,r!==null&&vs(r,l.deps)){o.memoizedState=oo(t,n,i,r);return}}ue.flags|=e,o.memoizedState=oo(1|t,n,i,r)}function Uu(e,t){return Ho(8390656,8,e,t)}function Ss(e,t){return Ui(2048,8,e,t)}function _c(e,t){return Ui(4,2,e,t)}function $c(e,t){return Ui(4,4,e,t)}function ef(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tf(e,t,n){return n=n!=null?n.concat([e]):null,Ui(4,4,ef.bind(null,t,e),n)}function ks(){}function nf(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rf(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function of(e,t,n){return Bn&21?(kt(n,t)||(n=ac(),ue.lanes|=n,Pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=n)}function wh(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=Pl.transition;Pl.transition={};try{e(!1),t()}finally{ee=n,Pl.transition=r}}function lf(){return dt().memoizedState}function xh(e,t,n){var r=un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},af(e))sf(t,n);else if(n=Uc(e,t,n,r),n!==null){var o=Fe();St(n,e,r,o),uf(n,t,r)}}function Sh(e,t,n){var r=un(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(af(e))sf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,kt(a,l)){var s=t.interleaved;s===null?(o.next=o,ps(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Uc(e,t,o,r),n!==null&&(o=Fe(),St(n,e,r,o),uf(n,t,r))}}function af(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function sf(e,t){br=hi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,es(e,n)}}var gi={readContext:ft,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},kh={readContext:ft,useCallback:function(e,t){return Dt().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:Uu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ho(4194308,4,ef.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ho(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ho(4,2,e,t)},useMemo:function(e,t){var n=Dt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Dt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xh.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var t=Dt();return e={current:e},t.memoizedState=e},useState:Ru,useDebugValue:ks,useDeferredValue:function(e){return Dt().memoizedState=e},useTransition:function(){var e=Ru(!1),t=e[0];return e=wh.bind(null,e[1]),Dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ue,o=Dt();if(ae){if(n===void 0)throw Error(B(407));n=n()}else{if(n=t(),Qe===null)throw Error(B(349));Bn&30||Hc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Uu(Vc.bind(null,r,i,e),[e]),r.flags|=2048,oo(9,Zc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Dt(),t=Qe.identifierPrefix;if(ae){var n=Ut,r=Rt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=no++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ch={readContext:ft,useCallback:nf,useContext:ft,useEffect:Ss,useImperativeHandle:tf,useInsertionEffect:_c,useLayoutEffect:$c,useMemo:rf,useReducer:Ql,useRef:qc,useState:function(){return Ql(ro)},useDebugValue:ks,useDeferredValue:function(e){var t=dt();return of(t,Ee.memoizedState,e)},useTransition:function(){var e=Ql(ro)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Yc,useSyncExternalStore:Jc,useId:lf,unstable_isNewReconciler:!1},Eh={readContext:ft,useCallback:nf,useContext:ft,useEffect:Ss,useImperativeHandle:tf,useInsertionEffect:_c,useLayoutEffect:$c,useMemo:rf,useReducer:Ml,useRef:qc,useState:function(){return Ml(ro)},useDebugValue:ks,useDeferredValue:function(e){var t=dt();return Ee===null?t.memoizedState=e:of(t,Ee.memoizedState,e)},useTransition:function(){var e=Ml(ro)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Yc,useSyncExternalStore:Jc,useId:lf,unstable_isNewReconciler:!1};function sr(e,t){try{var n="",r=t;do n+=$d(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Tl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Dh=typeof WeakMap=="function"?WeakMap:Map;function Af(e,t,n){n=Kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yi||(yi=!0,Ma=r),xa(e,t)},n}function cf(e,t,n){n=Kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){xa(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){xa(e,t),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Dh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Nh.bind(null,e,t,n),t.then(e,e))}function zu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Kt(-1,1),t.tag=2,an(n,t,1))),n.lanes|=1),e)}var Ih=Yt.ReactCurrentOwner,Ze=!1;function Ge(e,t,n,r){t.child=e===null?Gc(t,null,n,r):lr(t,e.child,n,r)}function Lu(e,t,n,r,o){n=n.render;var i=t.ref;return tr(t,o),r=ws(e,t,n,r,i,o),n=xs(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Gt(e,t,o)):(ae&&n&&ss(t),t.flags|=1,Ge(e,t,r,o),t.child)}function Gu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ms(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,ff(e,t,i,r,o)):(e=Xo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Xr,n(l,r)&&e.ref===t.ref)return Gt(e,t,o)}return t.flags|=1,e=An(i,r),e.ref=t.ref,e.return=t,t.child=e}function ff(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Xr(i,r)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ze=!0);else return t.lanes=e.lanes,Gt(e,t,o)}return Sa(e,t,n,r,o)}function df(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Vn,$e),$e|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(Vn,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ne(Vn,$e),$e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ne(Vn,$e),$e|=r;return Ge(e,t,o,n),t.child}function pf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Sa(e,t,n,r,o){var i=We(n)?Dn:Le.current;return i=or(t,i),tr(t,o),n=ws(e,t,n,r,i,o),r=xs(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Gt(e,t,o)):(ae&&r&&ss(t),t.flags|=1,Ge(e,t,n,o),t.child)}function Fu(e,t,n,r,o){if(We(n)){var i=!0;si(t)}else i=!1;if(tr(t,o),t.stateNode===null)Zo(e,t),Nc(t,n,r),wa(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=ft(u):(u=We(n)?Dn:Le.current,u=or(t,u));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&ju(t,l,r,u),qt=!1;var h=t.memoizedState;l.state=h,di(t,r,l,o),s=t.memoizedState,a!==r||h!==s||Ve.current||qt?(typeof p=="function"&&(va(t,n,p,r),s=t.memoizedState),(a=qt||Ou(t,n,a,r,h,s,u))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Kc(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:yt(t.type,a),l.props=u,g=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=ft(s):(s=We(n)?Dn:Le.current,s=or(t,s));var k=n.getDerivedStateFromProps;(p=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==g||h!==s)&&ju(t,l,r,s),qt=!1,h=t.memoizedState,l.state=h,di(t,r,l,o);var S=t.memoizedState;a!==g||h!==S||Ve.current||qt?(typeof k=="function"&&(va(t,n,k,r),S=t.memoizedState),(u=qt||Ou(t,n,u,r,h,S,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ka(e,t,n,r,i,o)}function ka(e,t,n,r,o,i){pf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Bu(t,n,!1),Gt(e,t,i);r=t.stateNode,Ih.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=lr(t,e.child,null,i),t.child=lr(t,null,a,i)):Ge(e,t,a,i),t.memoizedState=r.state,o&&Bu(t,n,!0),t.child}function hf(e){var t=e.stateNode;t.pendingContext?Iu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Iu(e,t.context,!1),gs(e,t.containerInfo)}function Yu(e,t,n,r,o){return ir(),As(o),t.flags|=256,Ge(e,t,n,r),t.child}var Ca={dehydrated:null,treeContext:null,retryLane:0};function Ea(e){return{baseLanes:e,cachePool:null,transitions:null}}function gf(e,t,n){var r=t.pendingProps,o=se.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ne(se,o&1),e===null)return ma(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ni(l,r,0,null),e=En(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ea(n),t.memoizedState=Ca,e):Cs(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Bh(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=An(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=An(a,i):(i=En(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ea(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ca,r}return i=e.child,e=i.sibling,r=An(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cs(e,t){return t=Ni({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mo(e,t,n,r){return r!==null&&As(r),lr(t,e.child,null,n),e=Cs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Tl(Error(B(422))),Mo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ni({mode:"visible",children:r.children},o,0,null),i=En(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&lr(t,e.child,null,l),t.child.memoizedState=Ea(l),t.memoizedState=Ca,i);if(!(t.mode&1))return Mo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(B(419)),r=Tl(i,r,void 0),Mo(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ze||a){if(r=Qe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Lt(e,o),St(r,e,o,-1))}return Qs(),r=Tl(Error(B(421))),Mo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Lh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,et=ln(o.nextSibling),tt=t,ae=!0,wt=null,e!==null&&(st[ut++]=Rt,st[ut++]=Ut,st[ut++]=In,Rt=e.id,Ut=e.overflow,In=t),t=Cs(t,r.children),t.flags|=4096,t)}function Ju(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ya(e.return,t,n)}function Ol(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function mf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ge(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ju(e,n,t);else if(e.tag===19)Ju(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(se,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&pi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ol(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&pi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ol(t,!0,n,null,i);break;case"together":Ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(B(153));if(t.child!==null){for(e=t.child,n=An(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=An(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ph(e,t,n){switch(t.tag){case 3:hf(t),ir();break;case 5:Fc(t);break;case 1:We(t.type)&&si(t);break;case 4:gs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ne(ci,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?gf(e,t,n):(ne(se,se.current&1),e=Gt(e,t,n),e!==null?e.sibling:null);ne(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return mf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,df(e,t,n)}return Gt(e,t,n)}var yf,Da,vf,wf;yf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Da=function(){};vf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,kn(Qt.current);var i=null;switch(n){case"input":o=Vl(e,o),r=Vl(e,r),i=[];break;case"select":o=Ae({},o,{value:void 0}),r=Ae({},r,{value:void 0}),i=[];break;case"textarea":o=ql(e,o),r=ql(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=li)}$l(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&re("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};wf=function(e,t,n,r){n!==r&&(t.flags|=4)};function kr(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Qh(e,t,n){var r=t.pendingProps;switch(us(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return We(t.type)&&ai(),Ue(t),null;case 3:return r=t.stateNode,ar(),oe(Ve),oe(Le),ys(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Po(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,wt!==null&&(ja(wt),wt=null))),Da(e,t),Ue(t),null;case 5:ms(t);var o=kn(to.current);if(n=t.type,e!==null&&t.stateNode!=null)vf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(B(166));return Ue(t),null}if(e=kn(Qt.current),Po(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[It]=t,r[$r]=i,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(o=0;o<Pr.length;o++)re(Pr[o],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":eu(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":nu(r,i),re("invalid",r)}$l(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Bo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Bo(r.textContent,a,e),o=["children",""+a]):Fr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&re("scroll",r)}switch(n){case"input":wo(r),tu(r,i,!0);break;case"textarea":wo(r),ru(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=li)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=HA(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[It]=t,e[$r]=r,yf(e,t,!1,!1),t.stateNode=e;e:{switch(l=ea(n,r),n){case"dialog":re("cancel",e),re("close",e),o=r;break;case"iframe":case"object":case"embed":re("load",e),o=r;break;case"video":case"audio":for(o=0;o<Pr.length;o++)re(Pr[o],e);o=r;break;case"source":re("error",e),o=r;break;case"img":case"image":case"link":re("error",e),re("load",e),o=r;break;case"details":re("toggle",e),o=r;break;case"input":eu(e,r),o=Vl(e,r),re("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Ae({},r,{value:void 0}),re("invalid",e);break;case"textarea":nu(e,r),o=ql(e,r),re("invalid",e);break;default:o=r}$l(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?WA(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ZA(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Yr(e,s):typeof s=="number"&&Yr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Fr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&re("scroll",e):s!=null&&Va(e,i,s,l))}switch(n){case"input":wo(e),tu(e,r,!1);break;case"textarea":wo(e),ru(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?qn(e,!!r.multiple,i,!1):r.defaultValue!=null&&qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=li)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)wf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(B(166));if(n=kn(to.current),kn(Qt.current),Po(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(i=r.nodeValue!==n)&&(e=tt,e!==null))switch(e.tag){case 3:Bo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return Ue(t),null;case 13:if(oe(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&et!==null&&t.mode&1&&!(t.flags&128))Rc(),ir(),t.flags|=98560,i=!1;else if(i=Po(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(B(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(B(317));i[It]=t}else ir(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),i=!1}else wt!==null&&(ja(wt),wt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?De===0&&(De=3):Qs())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return ar(),Da(e,t),e===null&&qr(t.stateNode.containerInfo),Ue(t),null;case 10:return ds(t.type._context),Ue(t),null;case 17:return We(t.type)&&ai(),Ue(t),null;case 19:if(oe(se),i=t.memoizedState,i===null)return Ue(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)kr(i,!1);else{if(De!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=pi(e),l!==null){for(t.flags|=128,kr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(se,se.current&1|2),t.child}e=e.sibling}i.tail!==null&&ve()>ur&&(t.flags|=128,r=!0,kr(i,!1),t.lanes=4194304)}else{if(!r)if(e=pi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ae)return Ue(t),null}else 2*ve()-i.renderingStartTime>ur&&n!==1073741824&&(t.flags|=128,r=!0,kr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ve(),t.sibling=null,n=se.current,ne(se,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return Ps(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(B(156,t.tag))}function Mh(e,t){switch(us(t),t.tag){case 1:return We(t.type)&&ai(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ar(),oe(Ve),oe(Le),ys(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ms(t),null;case 13:if(oe(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(B(340));ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(se),null;case 4:return ar(),null;case 10:return ds(t.type._context),null;case 22:case 23:return Ps(),null;case 24:return null;default:return null}}var To=!1,Ne=!1,Th=typeof WeakSet=="function"?WeakSet:Set,b=null;function Zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function Ia(e,t,n){try{n()}catch(r){fe(e,t,r)}}var Hu=!1;function Oh(e,t){if(Aa=ri,e=kc(),as(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,p=0,g=e,h=null;t:for(;;){for(var k;g!==n||o!==0&&g.nodeType!==3||(a=l+o),g!==i||r!==0&&g.nodeType!==3||(s=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(k=g.firstChild)!==null;)h=g,g=k;for(;;){if(g===e)break t;if(h===n&&++u===o&&(a=l),h===i&&++p===r&&(s=l),(k=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=k}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ca={focusedElem:e,selectionRange:n},ri=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var E=S.memoizedProps,M=S.memoizedState,c=t.stateNode,A=c.getSnapshotBeforeUpdate(t.elementType===t.type?E:yt(t.type,E),M);c.__reactInternalSnapshotBeforeUpdate=A}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(x){fe(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return S=Hu,Hu=!1,S}function Rr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ia(t,n,i)}o=o.next}while(o!==r)}}function Ki(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ba(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function xf(e){var t=e.alternate;t!==null&&(e.alternate=null,xf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[$r],delete t[pa],delete t[hh],delete t[gh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sf(e){return e.tag===5||e.tag===3||e.tag===4}function Zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=li));else if(r!==4&&(e=e.child,e!==null))for(Pa(e,t,n),e=e.sibling;e!==null;)Pa(e,t,n),e=e.sibling}function Qa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qa(e,t,n),e=e.sibling;e!==null;)Qa(e,t,n),e=e.sibling}var Oe=null,vt=!1;function Zt(e,t,n){for(n=n.child;n!==null;)kf(e,t,n),n=n.sibling}function kf(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Qi,n)}catch{}switch(n.tag){case 5:Ne||Zn(n,t);case 6:var r=Oe,o=vt;Oe=null,Zt(e,t,n),Oe=r,vt=o,Oe!==null&&(vt?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(vt?(e=Oe,n=n.stateNode,e.nodeType===8?Dl(e.parentNode,n):e.nodeType===1&&Dl(e,n),Vr(e)):Dl(Oe,n.stateNode));break;case 4:r=Oe,o=vt,Oe=n.stateNode.containerInfo,vt=!0,Zt(e,t,n),Oe=r,vt=o;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ia(n,t,l),o=o.next}while(o!==r)}Zt(e,t,n);break;case 1:if(!Ne&&(Zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,t,a)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,Zt(e,t,n),Ne=r):Zt(e,t,n);break;default:Zt(e,t,n)}}function Vu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Th),t.forEach(function(r){var o=Gh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Oe=a.stateNode,vt=!1;break e;case 3:Oe=a.stateNode.containerInfo,vt=!0;break e;case 4:Oe=a.stateNode.containerInfo,vt=!0;break e}a=a.return}if(Oe===null)throw Error(B(160));kf(i,l,o),Oe=null,vt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){fe(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cf(t,e),t=t.sibling}function Cf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),Et(e),r&4){try{Rr(3,e,e.return),Ki(3,e)}catch(E){fe(e,e.return,E)}try{Rr(5,e,e.return)}catch(E){fe(e,e.return,E)}}break;case 1:gt(t,e),Et(e),r&512&&n!==null&&Zn(n,n.return);break;case 5:if(gt(t,e),Et(e),r&512&&n!==null&&Zn(n,n.return),e.flags&32){var o=e.stateNode;try{Yr(o,"")}catch(E){fe(e,e.return,E)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&YA(o,i),ea(a,l);var u=ea(a,i);for(l=0;l<s.length;l+=2){var p=s[l],g=s[l+1];p==="style"?WA(o,g):p==="dangerouslySetInnerHTML"?ZA(o,g):p==="children"?Yr(o,g):Va(o,p,g,u)}switch(a){case"input":Wl(o,i);break;case"textarea":JA(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?qn(o,!!i.multiple,k,!1):h!==!!i.multiple&&(i.defaultValue!=null?qn(o,!!i.multiple,i.defaultValue,!0):qn(o,!!i.multiple,i.multiple?[]:"",!1))}o[$r]=i}catch(E){fe(e,e.return,E)}}break;case 6:if(gt(t,e),Et(e),r&4){if(e.stateNode===null)throw Error(B(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(E){fe(e,e.return,E)}}break;case 3:if(gt(t,e),Et(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vr(t.containerInfo)}catch(E){fe(e,e.return,E)}break;case 4:gt(t,e),Et(e);break;case 13:gt(t,e),Et(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Is=ve())),r&4&&Vu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Ne=(u=Ne)||p,gt(t,e),Ne=u):gt(t,e),Et(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(b=e,p=e.child;p!==null;){for(g=b=p;b!==null;){switch(h=b,k=h.child,h.tag){case 0:case 11:case 14:case 15:Rr(4,h,h.return);break;case 1:Zn(h,h.return);var S=h.stateNode;if(typeof S.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(E){fe(r,n,E)}}break;case 5:Zn(h,h.return);break;case 22:if(h.memoizedState!==null){Xu(g);continue}}k!==null?(k.return=h,b=k):Xu(g)}p=p.sibling}e:for(p=null,g=e;;){if(g.tag===5){if(p===null){p=g;try{o=g.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=g.stateNode,s=g.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=VA("display",l))}catch(E){fe(e,e.return,E)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(E){fe(e,e.return,E)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:gt(t,e),Et(e),r&4&&Vu(e);break;case 21:break;default:gt(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sf(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Yr(o,""),r.flags&=-33);var i=Zu(e);Qa(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Zu(e);Pa(e,a,l);break;default:throw Error(B(161))}}catch(s){fe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jh(e,t,n){b=e,Ef(e)}function Ef(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var o=b,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||To;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Ne;a=To;var u=Ne;if(To=l,(Ne=s)&&!u)for(b=o;b!==null;)l=b,s=l.child,l.tag===22&&l.memoizedState!==null?qu(o):s!==null?(s.return=l,b=s):qu(o);for(;i!==null;)b=i,Ef(i),i=i.sibling;b=o,To=a,Ne=u}Wu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,b=i):Wu(e)}}function Wu(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ne||Ki(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:yt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Tu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Tu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&Vr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Ne||t.flags&512&&Ba(t)}catch(h){fe(t,t.return,h)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function Xu(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function qu(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ki(4,t)}catch(s){fe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){fe(t,o,s)}}var i=t.return;try{Ba(t)}catch(s){fe(t,i,s)}break;case 5:var l=t.return;try{Ba(t)}catch(s){fe(t,l,s)}}}catch(s){fe(t,t.return,s)}if(t===e){b=null;break}var a=t.sibling;if(a!==null){a.return=t.return,b=a;break}b=t.return}}var bh=Math.ceil,mi=Yt.ReactCurrentDispatcher,Es=Yt.ReactCurrentOwner,ct=Yt.ReactCurrentBatchConfig,_=0,Qe=null,xe=null,je=0,$e=0,Vn=hn(0),De=0,io=null,Pn=0,zi=0,Ds=0,Ur=null,He=null,Is=0,ur=1/0,jt=null,yi=!1,Ma=null,sn=null,Oo=!1,tn=null,vi=0,Kr=0,Ta=null,Vo=-1,Wo=0;function Fe(){return _&6?ve():Vo!==-1?Vo:Vo=ve()}function un(e){return e.mode&1?_&2&&je!==0?je&-je:yh.transition!==null?(Wo===0&&(Wo=ac()),Wo):(e=ee,e!==0||(e=window.event,e=e===void 0?16:pc(e.type)),e):1}function St(e,t,n,r){if(50<Kr)throw Kr=0,Ta=null,Error(B(185));co(e,n,r),(!(_&2)||e!==Qe)&&(e===Qe&&(!(_&2)&&(zi|=n),De===4&&$t(e,je)),Xe(e,r),n===1&&_===0&&!(t.mode&1)&&(ur=ve()+500,bi&&gn()))}function Xe(e,t){var n=e.callbackNode;yp(e,t);var r=ni(e,e===Qe?je:0);if(r===0)n!==null&&lu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&lu(n),t===1)e.tag===0?mh(_u.bind(null,e)):Oc(_u.bind(null,e)),dh(function(){!(_&6)&&gn()}),n=null;else{switch(sc(r)){case 1:n=$a;break;case 4:n=ic;break;case 16:n=ti;break;case 536870912:n=lc;break;default:n=ti}n=Of(n,Df.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Df(e,t){if(Vo=-1,Wo=0,_&6)throw Error(B(327));var n=e.callbackNode;if(nr()&&e.callbackNode!==n)return null;var r=ni(e,e===Qe?je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wi(e,r);else{t=r;var o=_;_|=2;var i=Bf();(Qe!==e||je!==t)&&(jt=null,ur=ve()+500,Cn(e,t));do try{Kh();break}catch(a){If(e,a)}while(1);fs(),mi.current=i,_=o,xe!==null?t=0:(Qe=null,je=0,t=De)}if(t!==0){if(t===2&&(o=ia(e),o!==0&&(r=o,t=Oa(e,o))),t===1)throw n=io,Cn(e,0),$t(e,r),Xe(e,ve()),n;if(t===6)$t(e,r);else{if(o=e.current.alternate,!(r&30)&&!Rh(o)&&(t=wi(e,r),t===2&&(i=ia(e),i!==0&&(r=i,t=Oa(e,i))),t===1))throw n=io,Cn(e,0),$t(e,r),Xe(e,ve()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(B(345));case 2:wn(e,He,jt);break;case 3:if($t(e,r),(r&130023424)===r&&(t=Is+500-ve(),10<t)){if(ni(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=da(wn.bind(null,e,He,jt),t);break}wn(e,He,jt);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-xt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bh(r/1960))-r,10<r){e.timeoutHandle=da(wn.bind(null,e,He,jt),r);break}wn(e,He,jt);break;case 5:wn(e,He,jt);break;default:throw Error(B(329))}}}return Xe(e,ve()),e.callbackNode===n?Df.bind(null,e):null}function Oa(e,t){var n=Ur;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=wi(e,t),e!==2&&(t=He,He=n,t!==null&&ja(t)),e}function ja(e){He===null?He=e:He.push.apply(He,e)}function Rh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!kt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~Ds,t&=~zi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function _u(e){if(_&6)throw Error(B(327));nr();var t=ni(e,0);if(!(t&1))return Xe(e,ve()),null;var n=wi(e,t);if(e.tag!==0&&n===2){var r=ia(e);r!==0&&(t=r,n=Oa(e,r))}if(n===1)throw n=io,Cn(e,0),$t(e,t),Xe(e,ve()),n;if(n===6)throw Error(B(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wn(e,He,jt),Xe(e,ve()),null}function Bs(e,t){var n=_;_|=1;try{return e(t)}finally{_=n,_===0&&(ur=ve()+500,bi&&gn())}}function Qn(e){tn!==null&&tn.tag===0&&!(_&6)&&nr();var t=_;_|=1;var n=ct.transition,r=ee;try{if(ct.transition=null,ee=1,e)return e()}finally{ee=r,ct.transition=n,_=t,!(_&6)&&gn()}}function Ps(){$e=Vn.current,oe(Vn)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,fh(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(us(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ai();break;case 3:ar(),oe(Ve),oe(Le),ys();break;case 5:ms(r);break;case 4:ar();break;case 13:oe(se);break;case 19:oe(se);break;case 10:ds(r.type._context);break;case 22:case 23:Ps()}n=n.return}if(Qe=e,xe=e=An(e.current,null),je=$e=t,De=0,io=null,Ds=zi=Pn=0,He=Ur=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Sn=null}return e}function If(e,t){do{var n=xe;try{if(fs(),Jo.current=gi,hi){for(var r=ue.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}hi=!1}if(Bn=0,Pe=Ee=ue=null,br=!1,no=0,Es.current=null,n===null||n.return===null){De=1,io=t,xe=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=je,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=a,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var k=zu(l);if(k!==null){k.flags&=-257,Nu(k,l,a,i,t),k.mode&1&&Ku(i,u,t),t=k,s=u;var S=t.updateQueue;if(S===null){var E=new Set;E.add(s),t.updateQueue=E}else S.add(s);break e}else{if(!(t&1)){Ku(i,u,t),Qs();break e}s=Error(B(426))}}else if(ae&&a.mode&1){var M=zu(l);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Nu(M,l,a,i,t),As(sr(s,a));break e}}i=s=sr(s,a),De!==4&&(De=2),Ur===null?Ur=[i]:Ur.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var c=Af(i,s,t);Mu(i,c);break e;case 1:a=s;var A=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof A.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(sn===null||!sn.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=cf(i,a,t);Mu(i,x);break e}}i=i.return}while(i!==null)}Qf(n)}catch(I){t=I,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(1)}function Bf(){var e=mi.current;return mi.current=gi,e===null?gi:e}function Qs(){(De===0||De===3||De===2)&&(De=4),Qe===null||!(Pn&268435455)&&!(zi&268435455)||$t(Qe,je)}function wi(e,t){var n=_;_|=2;var r=Bf();(Qe!==e||je!==t)&&(jt=null,Cn(e,t));do try{Uh();break}catch(o){If(e,o)}while(1);if(fs(),_=n,mi.current=r,xe!==null)throw Error(B(261));return Qe=null,je=0,De}function Uh(){for(;xe!==null;)Pf(xe)}function Kh(){for(;xe!==null&&!up();)Pf(xe)}function Pf(e){var t=Tf(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?Qf(e):xe=t,Es.current=null}function Qf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Mh(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,xe=null;return}}else if(n=Qh(n,t,$e),n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);De===0&&(De=5)}function wn(e,t,n){var r=ee,o=ct.transition;try{ct.transition=null,ee=1,zh(e,t,n,r)}finally{ct.transition=o,ee=r}return null}function zh(e,t,n,r){do nr();while(tn!==null);if(_&6)throw Error(B(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(B(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(vp(e,i),e===Qe&&(xe=Qe=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oo||(Oo=!0,Of(ti,function(){return nr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ct.transition,ct.transition=null;var l=ee;ee=1;var a=_;_|=4,Es.current=null,Oh(e,n),Cf(n,e),ih(ca),ri=!!Aa,ca=Aa=null,e.current=n,jh(n),Ap(),_=a,ee=l,ct.transition=i}else e.current=n;if(Oo&&(Oo=!1,tn=e,vi=o),i=e.pendingLanes,i===0&&(sn=null),dp(n.stateNode),Xe(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(yi)throw yi=!1,e=Ma,Ma=null,e;return vi&1&&e.tag!==0&&nr(),i=e.pendingLanes,i&1?e===Ta?Kr++:(Kr=0,Ta=e):Kr=0,gn(),null}function nr(){if(tn!==null){var e=sc(vi),t=ct.transition,n=ee;try{if(ct.transition=null,ee=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,vi=0,_&6)throw Error(B(331));var o=_;for(_|=4,b=e.current;b!==null;){var i=b,l=i.child;if(b.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(b=u;b!==null;){var p=b;switch(p.tag){case 0:case 11:case 15:Rr(8,p,i)}var g=p.child;if(g!==null)g.return=p,b=g;else for(;b!==null;){p=b;var h=p.sibling,k=p.return;if(xf(p),p===u){b=null;break}if(h!==null){h.return=k,b=h;break}b=k}}}var S=i.alternate;if(S!==null){var E=S.child;if(E!==null){S.child=null;do{var M=E.sibling;E.sibling=null,E=M}while(E!==null)}}b=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,b=l;else e:for(;b!==null;){if(i=b,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Rr(9,i,i.return)}var c=i.sibling;if(c!==null){c.return=i.return,b=c;break e}b=i.return}}var A=e.current;for(b=A;b!==null;){l=b;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,b=d;else e:for(l=A;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ki(9,a)}}catch(I){fe(a,a.return,I)}if(a===l){b=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,b=x;break e}b=a.return}}if(_=o,gn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Qi,e)}catch{}r=!0}return r}finally{ee=n,ct.transition=t}}return!1}function $u(e,t,n){t=sr(n,t),t=Af(e,t,1),e=an(e,t,1),t=Fe(),e!==null&&(co(e,1,t),Xe(e,t))}function fe(e,t,n){if(e.tag===3)$u(e,e,n);else for(;t!==null;){if(t.tag===3){$u(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){e=sr(n,e),e=cf(t,e,1),t=an(t,e,1),e=Fe(),t!==null&&(co(t,1,e),Xe(t,e));break}}t=t.return}}function Nh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&n,Qe===e&&(je&n)===n&&(De===4||De===3&&(je&130023424)===je&&500>ve()-Is?Cn(e,0):Ds|=n),Xe(e,t)}function Mf(e,t){t===0&&(e.mode&1?(t=ko,ko<<=1,!(ko&130023424)&&(ko=4194304)):t=1);var n=Fe();e=Lt(e,t),e!==null&&(co(e,t,n),Xe(e,n))}function Lh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mf(e,n)}function Gh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(t),Mf(e,n)}var Tf;Tf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ve.current)Ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ze=!1,Ph(e,t,n);Ze=!!(e.flags&131072)}else Ze=!1,ae&&t.flags&1048576&&jc(t,Ai,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zo(e,t),e=t.pendingProps;var o=or(t,Le.current);tr(t,n),o=ws(null,t,r,e,o,n);var i=xs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(r)?(i=!0,si(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,hs(t),o.updater=Ri,t.stateNode=o,o._reactInternals=t,wa(t,r,e,n),t=ka(null,t,r,!0,i,n)):(t.tag=0,ae&&i&&ss(t),Ge(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Yh(r),e=yt(r,e),o){case 0:t=Sa(null,t,r,e,n);break e;case 1:t=Fu(null,t,r,e,n);break e;case 11:t=Lu(null,t,r,e,n);break e;case 14:t=Gu(null,t,r,yt(r.type,e),n);break e}throw Error(B(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Sa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Fu(e,t,r,o,n);case 3:e:{if(hf(t),e===null)throw Error(B(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Kc(e,t),di(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=sr(Error(B(423)),t),t=Yu(e,t,r,n,o);break e}else if(r!==o){o=sr(Error(B(424)),t),t=Yu(e,t,r,n,o);break e}else for(et=ln(t.stateNode.containerInfo.firstChild),tt=t,ae=!0,wt=null,n=Gc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ir(),r===o){t=Gt(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return Fc(t),e===null&&ma(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,fa(r,o)?l=null:i!==null&&fa(r,i)&&(t.flags|=32),pf(e,t),Ge(e,t,l,n),t.child;case 6:return e===null&&ma(t),null;case 13:return gf(e,t,n);case 4:return gs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lr(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Lu(e,t,r,o,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ne(ci,r._currentValue),r._currentValue=l,i!==null)if(kt(i.value,l)){if(i.children===o.children&&!Ve.current){t=Gt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Kt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ya(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(B(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ya(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ge(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,tr(t,n),o=ft(o),r=r(o),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,o=yt(r,t.pendingProps),o=yt(r.type,o),Gu(e,t,r,o,n);case 15:return ff(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Zo(e,t),t.tag=1,We(r)?(e=!0,si(t)):e=!1,tr(t,n),Nc(t,r,o),wa(t,r,o,n),ka(null,t,r,!0,e,n);case 19:return mf(e,t,n);case 22:return df(e,t,n)}throw Error(B(156,t.tag))};function Of(e,t){return oc(e,t)}function Fh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,n,r){return new Fh(e,t,n,r)}function Ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yh(e){if(typeof e=="function")return Ms(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xa)return 11;if(e===qa)return 14}return 2}function An(e,t){var n=e.alternate;return n===null?(n=At(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ms(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Kn:return En(n.children,o,i,t);case Wa:l=8,o|=8;break;case Yl:return e=At(12,n,t,o|2),e.elementType=Yl,e.lanes=i,e;case Jl:return e=At(13,n,t,o),e.elementType=Jl,e.lanes=i,e;case Hl:return e=At(19,n,t,o),e.elementType=Hl,e.lanes=i,e;case LA:return Ni(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zA:l=10;break e;case NA:l=9;break e;case Xa:l=11;break e;case qa:l=14;break e;case Xt:l=16,r=null;break e}throw Error(B(130,e==null?e:typeof e,""))}return t=At(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function En(e,t,n,r){return e=At(7,e,r,t),e.lanes=n,e}function Ni(e,t,n,r){return e=At(22,e,r,t),e.elementType=LA,e.lanes=n,e.stateNode={isHidden:!1},e}function jl(e,t,n){return e=At(6,e,null,t),e.lanes=n,e}function bl(e,t,n){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hl(0),this.expirationTimes=hl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ts(e,t,n,r,o,i,l,a,s){return e=new Jh(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=At(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hs(i),e}function Hh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function jf(e){if(!e)return dn;e=e._reactInternals;e:{if(jn(e)!==e||e.tag!==1)throw Error(B(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(B(171))}if(e.tag===1){var n=e.type;if(We(n))return Tc(e,n,t)}return t}function bf(e,t,n,r,o,i,l,a,s){return e=Ts(n,r,!0,e,o,i,l,a,s),e.context=jf(null),n=e.current,r=Fe(),o=un(n),i=Kt(r,o),i.callback=t??null,an(n,i,o),e.current.lanes=o,co(e,o,r),Xe(e,r),e}function Li(e,t,n,r){var o=t.current,i=Fe(),l=un(o);return n=jf(n),t.context===null?t.context=n:t.pendingContext=n,t=Kt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=an(o,t,l),e!==null&&(St(e,o,l,i),Yo(e,o,l)),l}function xi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function eA(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Os(e,t){eA(e,t),(e=e.alternate)&&eA(e,t)}function Zh(){return null}var Rf=typeof reportError=="function"?reportError:function(e){console.error(e)};function js(e){this._internalRoot=e}Gi.prototype.render=js.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(B(409));Li(e,t,null,null)};Gi.prototype.unmount=js.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qn(function(){Li(null,e,null,null)}),t[Nt]=null}};function Gi(e){this._internalRoot=e}Gi.prototype.unstable_scheduleHydration=function(e){if(e){var t=cc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&dc(e)}};function bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tA(){}function Vh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=xi(l);i.call(u)}}var l=bf(t,r,e,0,null,!1,!1,"",tA);return e._reactRootContainer=l,e[Nt]=l.current,qr(e.nodeType===8?e.parentNode:e),Qn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=xi(s);a.call(u)}}var s=Ts(e,0,!1,null,null,!1,!1,"",tA);return e._reactRootContainer=s,e[Nt]=s.current,qr(e.nodeType===8?e.parentNode:e),Qn(function(){Li(t,s,n,r)}),s}function Yi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=xi(l);a.call(s)}}Li(t,l,e,o)}else l=Vh(n,t,e,o,r);return xi(l)}uc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Br(t.pendingLanes);n!==0&&(es(t,n|1),Xe(t,ve()),!(_&6)&&(ur=ve()+500,gn()))}break;case 13:Qn(function(){var r=Lt(e,1);if(r!==null){var o=Fe();St(r,e,1,o)}}),Os(e,1)}};ts=function(e){if(e.tag===13){var t=Lt(e,134217728);if(t!==null){var n=Fe();St(t,e,134217728,n)}Os(e,134217728)}};Ac=function(e){if(e.tag===13){var t=un(e),n=Lt(e,t);if(n!==null){var r=Fe();St(n,e,t,r)}Os(e,t)}};cc=function(){return ee};fc=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};na=function(e,t,n){switch(t){case"input":if(Wl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ji(r);if(!o)throw Error(B(90));FA(r),Wl(r,o)}}}break;case"textarea":JA(e,n);break;case"select":t=n.value,t!=null&&qn(e,!!n.multiple,t,!1)}};_A=Bs;$A=Qn;var Wh={usingClientEntryPoint:!1,Events:[po,Gn,ji,XA,qA,Bs]},Cr={findFiberByHostInstance:xn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Xh={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nc(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||Zh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{Qi=jo.inject(Xh),Pt=jo}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wh;ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bs(t))throw Error(B(200));return Hh(e,t,null,n)};ot.createRoot=function(e,t){if(!bs(e))throw Error(B(299));var n=!1,r="",o=Rf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ts(e,1,!1,null,null,n,!1,r,o),e[Nt]=t.current,qr(e.nodeType===8?e.parentNode:e),new js(t)};ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(B(188)):(e=Object.keys(e).join(","),Error(B(268,e)));return e=nc(t),e=e===null?null:e.stateNode,e};ot.flushSync=function(e){return Qn(e)};ot.hydrate=function(e,t,n){if(!Fi(t))throw Error(B(200));return Yi(null,e,t,!0,n)};ot.hydrateRoot=function(e,t,n){if(!bs(e))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Rf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=bf(t,null,e,1,n??null,o,!1,i,l),e[Nt]=t.current,qr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Gi(t)};ot.render=function(e,t,n){if(!Fi(t))throw Error(B(200));return Yi(null,e,t,!1,n)};ot.unmountComponentAtNode=function(e){if(!Fi(e))throw Error(B(40));return e._reactRootContainer?(Qn(function(){Yi(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1};ot.unstable_batchedUpdates=Bs;ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fi(n))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return Yi(e,t,n,!1,r)};ot.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ot})(Zd);var nA=Gr;Ll.createRoot=nA.createRoot,Ll.hydrateRoot=nA.hydrateRoot;var lo={},qh={get exports(){return lo},set exports(e){lo=e}},te={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me=typeof Symbol=="function"&&Symbol.for,Rs=Me?Symbol.for("react.element"):60103,Us=Me?Symbol.for("react.portal"):60106,Ji=Me?Symbol.for("react.fragment"):60107,Hi=Me?Symbol.for("react.strict_mode"):60108,Zi=Me?Symbol.for("react.profiler"):60114,Vi=Me?Symbol.for("react.provider"):60109,Wi=Me?Symbol.for("react.context"):60110,Ks=Me?Symbol.for("react.async_mode"):60111,Xi=Me?Symbol.for("react.concurrent_mode"):60111,qi=Me?Symbol.for("react.forward_ref"):60112,_i=Me?Symbol.for("react.suspense"):60113,_h=Me?Symbol.for("react.suspense_list"):60120,$i=Me?Symbol.for("react.memo"):60115,el=Me?Symbol.for("react.lazy"):60116,$h=Me?Symbol.for("react.block"):60121,eg=Me?Symbol.for("react.fundamental"):60117,tg=Me?Symbol.for("react.responder"):60118,ng=Me?Symbol.for("react.scope"):60119;function lt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Rs:switch(e=e.type,e){case Ks:case Xi:case Ji:case Zi:case Hi:case _i:return e;default:switch(e=e&&e.$$typeof,e){case Wi:case qi:case el:case $i:case Vi:return e;default:return t}}case Us:return t}}}function Uf(e){return lt(e)===Xi}te.AsyncMode=Ks;te.ConcurrentMode=Xi;te.ContextConsumer=Wi;te.ContextProvider=Vi;te.Element=Rs;te.ForwardRef=qi;te.Fragment=Ji;te.Lazy=el;te.Memo=$i;te.Portal=Us;te.Profiler=Zi;te.StrictMode=Hi;te.Suspense=_i;te.isAsyncMode=function(e){return Uf(e)||lt(e)===Ks};te.isConcurrentMode=Uf;te.isContextConsumer=function(e){return lt(e)===Wi};te.isContextProvider=function(e){return lt(e)===Vi};te.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rs};te.isForwardRef=function(e){return lt(e)===qi};te.isFragment=function(e){return lt(e)===Ji};te.isLazy=function(e){return lt(e)===el};te.isMemo=function(e){return lt(e)===$i};te.isPortal=function(e){return lt(e)===Us};te.isProfiler=function(e){return lt(e)===Zi};te.isStrictMode=function(e){return lt(e)===Hi};te.isSuspense=function(e){return lt(e)===_i};te.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ji||e===Xi||e===Zi||e===Hi||e===_i||e===_h||typeof e=="object"&&e!==null&&(e.$$typeof===el||e.$$typeof===$i||e.$$typeof===Vi||e.$$typeof===Wi||e.$$typeof===qi||e.$$typeof===eg||e.$$typeof===tg||e.$$typeof===ng||e.$$typeof===$h)};te.typeOf=lt;(function(e){e.exports=te})(qh);function rg(e){function t(m,y,w,C,f){for(var Q=0,D=0,Y=0,R=0,W,L,le=0,ce=0,Z,me=Z=W=0,X=0,Ce=0,Jt=0,we=0,mn=w.length,yn=mn-1,ht,J="",ye="",sl="",ul="",Ht;X<mn;){if(L=w.charCodeAt(X),X===yn&&D+R+Y+Q!==0&&(D!==0&&(L=D===47?10:47),R=Y=Q=0,mn++,yn++),D+R+Y+Q===0){if(X===yn&&(0<Ce&&(J=J.replace(h,"")),0<J.trim().length)){switch(L){case 32:case 9:case 59:case 13:case 10:break;default:J+=w.charAt(X)}L=59}switch(L){case 123:for(J=J.trim(),W=J.charCodeAt(0),Z=1,we=++X;X<mn;){switch(L=w.charCodeAt(X)){case 123:Z++;break;case 125:Z--;break;case 47:switch(L=w.charCodeAt(X+1)){case 42:case 47:e:{for(me=X+1;me<yn;++me)switch(w.charCodeAt(me)){case 47:if(L===42&&w.charCodeAt(me-1)===42&&X+2!==me){X=me+1;break e}break;case 10:if(L===47){X=me+1;break e}}X=me}}break;case 91:L++;case 40:L++;case 34:case 39:for(;X++<yn&&w.charCodeAt(X)!==L;);}if(Z===0)break;X++}switch(Z=w.substring(we,X),W===0&&(W=(J=J.replace(g,"").trim()).charCodeAt(0)),W){case 64:switch(0<Ce&&(J=J.replace(h,"")),L=J.charCodeAt(1),L){case 100:case 109:case 115:case 45:Ce=y;break;default:Ce=pt}if(Z=t(y,Ce,Z,L,f+1),we=Z.length,0<P&&(Ce=n(pt,J,Jt),Ht=a(3,Z,Ce,y,ke,ge,we,L,f,C),J=Ce.join(""),Ht!==void 0&&(we=(Z=Ht.trim()).length)===0&&(L=0,Z="")),0<we)switch(L){case 115:J=J.replace(T,l);case 100:case 109:case 45:Z=J+"{"+Z+"}";break;case 107:J=J.replace(A,"$1 $2"),Z=J+"{"+Z+"}",Z=Be===1||Be===2&&i("@"+Z,3)?"@-webkit-"+Z+"@"+Z:"@"+Z;break;default:Z=J+Z,C===112&&(Z=(ye+=Z,""))}else Z="";break;default:Z=t(y,n(y,J,Jt),Z,C,f+1)}sl+=Z,Z=Jt=Ce=me=W=0,J="",L=w.charCodeAt(++X);break;case 125:case 59:if(J=(0<Ce?J.replace(h,""):J).trim(),1<(we=J.length))switch(me===0&&(W=J.charCodeAt(0),W===45||96<W&&123>W)&&(we=(J=J.replace(" ",":")).length),0<P&&(Ht=a(1,J,y,m,ke,ge,ye.length,C,f,C))!==void 0&&(we=(J=Ht.trim()).length)===0&&(J="\0\0"),W=J.charCodeAt(0),L=J.charCodeAt(1),W){case 0:break;case 64:if(L===105||L===99){ul+=J+w.charAt(X);break}default:J.charCodeAt(we-1)!==58&&(ye+=o(J,W,L,J.charCodeAt(2)))}Jt=Ce=me=W=0,J="",L=w.charCodeAt(++X)}}switch(L){case 13:case 10:D===47?D=0:1+W===0&&C!==107&&0<J.length&&(Ce=1,J+="\0"),0<P*U&&a(0,J,y,m,ke,ge,ye.length,C,f,C),ge=1,ke++;break;case 59:case 125:if(D+R+Y+Q===0){ge++;break}default:switch(ge++,ht=w.charAt(X),L){case 9:case 32:if(R+Q+D===0)switch(le){case 44:case 58:case 9:case 32:ht="";break;default:L!==32&&(ht=" ")}break;case 0:ht="\\0";break;case 12:ht="\\f";break;case 11:ht="\\v";break;case 38:R+D+Q===0&&(Ce=Jt=1,ht="\f"+ht);break;case 108:if(R+D+Q+Te===0&&0<me)switch(X-me){case 2:le===112&&w.charCodeAt(X-3)===58&&(Te=le);case 8:ce===111&&(Te=ce)}break;case 58:R+D+Q===0&&(me=X);break;case 44:D+Y+R+Q===0&&(Ce=1,ht+="\r");break;case 34:case 39:D===0&&(R=R===L?0:R===0?L:R);break;case 91:R+D+Y===0&&Q++;break;case 93:R+D+Y===0&&Q--;break;case 41:R+D+Q===0&&Y--;break;case 40:if(R+D+Q===0){if(W===0)switch(2*le+3*ce){case 533:break;default:W=1}Y++}break;case 64:D+Y+R+Q+me+Z===0&&(Z=1);break;case 42:case 47:if(!(0<R+Q+Y))switch(D){case 0:switch(2*L+3*w.charCodeAt(X+1)){case 235:D=47;break;case 220:we=X,D=42}break;case 42:L===47&&le===42&&we+2!==X&&(w.charCodeAt(we+2)===33&&(ye+=w.substring(we,X+1)),ht="",D=0)}}D===0&&(J+=ht)}ce=le,le=L,X++}if(we=ye.length,0<we){if(Ce=y,0<P&&(Ht=a(2,ye,Ce,m,ke,ge,we,C,f,C),Ht!==void 0&&(ye=Ht).length===0))return ul+ye+sl;if(ye=Ce.join(",")+"{"+ye+"}",Be*Te!==0){switch(Be!==2||i(ye,2)||(Te=0),Te){case 111:ye=ye.replace(x,":-moz-$1")+ye;break;case 112:ye=ye.replace(d,"::-webkit-input-$1")+ye.replace(d,"::-moz-$1")+ye.replace(d,":-ms-input-$1")+ye}Te=0}}return ul+ye+sl}function n(m,y,w){var C=y.trim().split(M);y=C;var f=C.length,Q=m.length;switch(Q){case 0:case 1:var D=0;for(m=Q===0?"":m[0]+" ";D<f;++D)y[D]=r(m,y[D],w).trim();break;default:var Y=D=0;for(y=[];D<f;++D)for(var R=0;R<Q;++R)y[Y++]=r(m[R]+" ",C[D],w).trim()}return y}function r(m,y,w){var C=y.charCodeAt(0);switch(33>C&&(C=(y=y.trim()).charCodeAt(0)),C){case 38:return y.replace(c,"$1"+m.trim());case 58:return m.trim()+y.replace(c,"$1"+m.trim());default:if(0<1*w&&0<y.indexOf("\f"))return y.replace(c,(m.charCodeAt(0)===58?"":"$1")+m.trim())}return m+y}function o(m,y,w,C){var f=m+";",Q=2*y+3*w+4*C;if(Q===944){m=f.indexOf(":",9)+1;var D=f.substring(m,f.length-1).trim();return D=f.substring(0,m).trim()+D+";",Be===1||Be===2&&i(D,1)?"-webkit-"+D+D:D}if(Be===0||Be===2&&!i(f,1))return f;switch(Q){case 1015:return f.charCodeAt(10)===97?"-webkit-"+f+f:f;case 951:return f.charCodeAt(3)===116?"-webkit-"+f+f:f;case 963:return f.charCodeAt(5)===110?"-webkit-"+f+f:f;case 1009:if(f.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+f+f;case 978:return"-webkit-"+f+"-moz-"+f+f;case 1019:case 983:return"-webkit-"+f+"-moz-"+f+"-ms-"+f+f;case 883:if(f.charCodeAt(8)===45)return"-webkit-"+f+f;if(0<f.indexOf("image-set(",11))return f.replace(he,"$1-webkit-$2")+f;break;case 932:if(f.charCodeAt(4)===45)switch(f.charCodeAt(5)){case 103:return"-webkit-box-"+f.replace("-grow","")+"-webkit-"+f+"-ms-"+f.replace("grow","positive")+f;case 115:return"-webkit-"+f+"-ms-"+f.replace("shrink","negative")+f;case 98:return"-webkit-"+f+"-ms-"+f.replace("basis","preferred-size")+f}return"-webkit-"+f+"-ms-"+f+f;case 964:return"-webkit-"+f+"-ms-flex-"+f+f;case 1023:if(f.charCodeAt(8)!==99)break;return D=f.substring(f.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+D+"-webkit-"+f+"-ms-flex-pack"+D+f;case 1005:return S.test(f)?f.replace(k,":-webkit-")+f.replace(k,":-moz-")+f:f;case 1e3:switch(D=f.substring(13).trim(),y=D.indexOf("-")+1,D.charCodeAt(0)+D.charCodeAt(y)){case 226:D=f.replace(I,"tb");break;case 232:D=f.replace(I,"tb-rl");break;case 220:D=f.replace(I,"lr");break;default:return f}return"-webkit-"+f+"-ms-"+D+f;case 1017:if(f.indexOf("sticky",9)===-1)break;case 975:switch(y=(f=m).length-10,D=(f.charCodeAt(y)===33?f.substring(0,y):f).substring(m.indexOf(":",7)+1).trim(),Q=D.charCodeAt(0)+(D.charCodeAt(7)|0)){case 203:if(111>D.charCodeAt(8))break;case 115:f=f.replace(D,"-webkit-"+D)+";"+f;break;case 207:case 102:f=f.replace(D,"-webkit-"+(102<Q?"inline-":"")+"box")+";"+f.replace(D,"-webkit-"+D)+";"+f.replace(D,"-ms-"+D+"box")+";"+f}return f+";";case 938:if(f.charCodeAt(5)===45)switch(f.charCodeAt(6)){case 105:return D=f.replace("-items",""),"-webkit-"+f+"-webkit-box-"+D+"-ms-flex-"+D+f;case 115:return"-webkit-"+f+"-ms-flex-item-"+f.replace(O,"")+f;default:return"-webkit-"+f+"-ms-flex-line-pack"+f.replace("align-content","").replace(O,"")+f}break;case 973:case 989:if(f.charCodeAt(3)!==45||f.charCodeAt(4)===122)break;case 931:case 953:if(G.test(m)===!0)return(D=m.substring(m.indexOf(":")+1)).charCodeAt(0)===115?o(m.replace("stretch","fill-available"),y,w,C).replace(":fill-available",":stretch"):f.replace(D,"-webkit-"+D)+f.replace(D,"-moz-"+D.replace("fill-",""))+f;break;case 962:if(f="-webkit-"+f+(f.charCodeAt(5)===102?"-ms-"+f:"")+f,w+C===211&&f.charCodeAt(13)===105&&0<f.indexOf("transform",10))return f.substring(0,f.indexOf(";",27)+1).replace(E,"$1-webkit-$2")+f}return f}function i(m,y){var w=m.indexOf(y===1?":":"{"),C=m.substring(0,y!==3?w:10);return w=m.substring(w+1,m.length-1),z(y!==2?C:C.replace(q,"$1"),w,y)}function l(m,y){var w=o(y,y.charCodeAt(0),y.charCodeAt(1),y.charCodeAt(2));return w!==y+";"?w.replace(j," or ($1)").substring(4):"("+y+")"}function a(m,y,w,C,f,Q,D,Y,R,W){for(var L=0,le=y,ce;L<P;++L)switch(ce=ie[L].call(p,m,le,w,C,f,Q,D,Y,R,W)){case void 0:case!1:case!0:case null:break;default:le=ce}if(le!==y)return le}function s(m){switch(m){case void 0:case null:P=ie.length=0;break;default:if(typeof m=="function")ie[P++]=m;else if(typeof m=="object")for(var y=0,w=m.length;y<w;++y)s(m[y]);else U=!!m|0}return s}function u(m){return m=m.prefix,m!==void 0&&(z=null,m?typeof m!="function"?Be=1:(Be=2,z=m):Be=0),u}function p(m,y){var w=m;if(33>w.charCodeAt(0)&&(w=w.trim()),$=w,w=[$],0<P){var C=a(-1,y,w,w,ke,ge,0,0,0,0);C!==void 0&&typeof C=="string"&&(y=C)}var f=t(pt,w,y,0,0);return 0<P&&(C=a(-2,f,w,w,ke,ge,f.length,0,0,0),C!==void 0&&(f=C)),$="",Te=0,ge=ke=1,f}var g=/^\0+/g,h=/[\0\r\f]/g,k=/: */g,S=/zoo|gra/,E=/([,: ])(transform)/g,M=/,\r+?/g,c=/([\t\r\n ])*\f?&/g,A=/@(k\w+)\s*(\S*)\s*/,d=/::(place)/g,x=/:(read-only)/g,I=/[svh]\w+-[tblr]{2}/,T=/\(\s*(.*)\s*\)/g,j=/([\s\S]*?);/g,O=/-self|flex-/g,q=/[^]*?(:[rp][el]a[\w-]+)[^]*/,G=/stretch|:\s*\w+\-(?:conte|avail)/,he=/([^-])(image-set\()/,ge=1,ke=1,Te=0,Be=1,pt=[],ie=[],P=0,z=null,U=0,$="";return p.use=s,p.set=u,e!==void 0&&u(e),p}var og={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ig(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var lg=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,rA=ig(function(e){return lg.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),zs=lo,ag={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ug={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Kf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ns={};Ns[zs.ForwardRef]=ug;Ns[zs.Memo]=Kf;function oA(e){return zs.isMemo(e)?Kf:Ns[e.$$typeof]||ag}var Ag=Object.defineProperty,cg=Object.getOwnPropertyNames,iA=Object.getOwnPropertySymbols,fg=Object.getOwnPropertyDescriptor,dg=Object.getPrototypeOf,lA=Object.prototype;function zf(e,t,n){if(typeof t!="string"){if(lA){var r=dg(t);r&&r!==lA&&zf(e,r,n)}var o=cg(t);iA&&(o=o.concat(iA(t)));for(var i=oA(e),l=oA(t),a=0;a<o.length;++a){var s=o[a];if(!sg[s]&&!(n&&n[s])&&!(l&&l[s])&&!(i&&i[s])){var u=fg(t,s);try{Ag(e,s,u)}catch{}}}}return e}var pg=zf;function Bt(){return(Bt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var aA=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},ba=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!lo.typeOf(e)},Si=Object.freeze([]),cn=Object.freeze({});function ao(e){return typeof e=="function"}function sA(e){return e.displayName||e.name||"Component"}function Ls(e){return e&&typeof e.styledComponentId=="string"}var Ar=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Gs=typeof window<"u"&&"HTMLElement"in window,hg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),gg={};function go(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var mg=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,l=i;n>=l;)(l<<=1)<0&&go(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(var a=i;a<l;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),u=0,p=r.length;u<p;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var l=o;l<i;l++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),l=i+o,a=i;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),qo=new Map,ki=new Map,zr=1,bo=function(e){if(qo.has(e))return qo.get(e);for(;ki.has(zr);)zr++;var t=zr++;return qo.set(e,t),ki.set(t,e),t},yg=function(e){return ki.get(e)},vg=function(e,t){t>=zr&&(zr=t+1),qo.set(e,t),ki.set(t,e)},wg="style["+Ar+'][data-styled-version="5.3.9"]',xg=new RegExp("^"+Ar+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Sg=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},kg=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var l=n[o].trim();if(l){var a=l.match(xg);if(a){var s=0|parseInt(a[1],10),u=a[2];s!==0&&(vg(u,s),Sg(e,u,a[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},Cg=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Nf=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){for(var s=a.childNodes,u=s.length;u>=0;u--){var p=s[u];if(p&&p.nodeType===1&&p.hasAttribute(Ar))return p}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Ar,"active"),r.setAttribute("data-styled-version","5.3.9");var l=Cg();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},Eg=function(){function e(n){var r=this.element=Nf(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,l=0,a=i.length;l<a;l++){var s=i[l];if(s.ownerNode===o)return s}go(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Dg=function(){function e(n){var r=this.element=Nf(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Ig=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),uA=Gs,Bg={isServer:!Gs,useCSSOMInjection:!hg},Ci=function(){function e(n,r,o){n===void 0&&(n=cn),r===void 0&&(r={}),this.options=Bt({},Bg,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&Gs&&uA&&(uA=!1,function(i){for(var l=document.querySelectorAll(wg),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(Ar)!=="active"&&(kg(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return bo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Bt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,l=r.target,n=o?new Ig(l):i?new Eg(l):new Dg(l),new mg(n)));var n,r,o,i,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(bo(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(bo(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(bo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",l=0;l<o;l++){var a=yg(l);if(a!==void 0){var s=n.names.get(a),u=r.getGroup(l);if(s&&u&&s.size){var p=Ar+".g"+l+'[id="'+a+'"]',g="";s!==void 0&&s.forEach(function(h){h.length>0&&(g+=h+",")}),i+=""+u+p+'{content:"'+g+`"}/*!sc*/
`}}}return i}(this)},e}(),Pg=/(a)(d)/gi,AA=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ra(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=AA(t%52)+n;return(AA(t%52)+n).replace(Pg,"$1-$2")}var Wn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Lf=function(e){return Wn(5381,e)};function Gf(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ao(n)&&!Ls(n))return!1}return!0}var Qg=Lf("5.3.9"),Mg=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Gf(t),this.componentId=n,this.baseHash=Wn(Qg,n),this.baseStyle=r,Ci.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var l=Mn(this.rules,t,n,r).join(""),a=Ra(Wn(this.baseHash,l)>>>0);if(!n.hasNameForId(o,a)){var s=r(l,"."+a,void 0,o);n.insertRules(o,a,s)}i.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,p=Wn(this.baseHash,r.hash),g="",h=0;h<u;h++){var k=this.rules[h];if(typeof k=="string")g+=k;else if(k){var S=Mn(k,t,n,r),E=Array.isArray(S)?S.join(""):S;p=Wn(p,E+h),g+=E}}if(g){var M=Ra(p>>>0);if(!n.hasNameForId(o,M)){var c=r(g,"."+M,void 0,o);n.insertRules(o,M,c)}i.push(M)}}return i.join(" ")},e}(),Tg=/^\s*\/\/.*$/gm,Og=[":","[",".","#"];function jg(e){var t,n,r,o,i=e===void 0?cn:e,l=i.options,a=l===void 0?cn:l,s=i.plugins,u=s===void 0?Si:s,p=new rg(a),g=[],h=function(E){function M(c){if(c)try{E(c+"}")}catch{}}return function(c,A,d,x,I,T,j,O,q,G){switch(c){case 1:if(q===0&&A.charCodeAt(0)===64)return E(A+";"),"";break;case 2:if(O===0)return A+"/*|*/";break;case 3:switch(O){case 102:case 112:return E(d[0]+A),"";default:return A+(G===0?"/*|*/":"")}case-2:A.split("/*|*/}").forEach(M)}}}(function(E){g.push(E)}),k=function(E,M,c){return M===0&&Og.indexOf(c[n.length])!==-1||c.match(o)?E:"."+t};function S(E,M,c,A){A===void 0&&(A="&");var d=E.replace(Tg,""),x=M&&c?c+" "+M+" { "+d+" }":d;return t=A,n=M,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),p(c||!M?"":M,x)}return p.use([].concat(u,[function(E,M,c){E===2&&c.length&&c[0].lastIndexOf(n)>0&&(c[0]=c[0].replace(r,k))},h,function(E){if(E===-2){var M=g;return g=[],M}}])),S.hash=u.length?u.reduce(function(E,M){return M.name||go(15),Wn(E,M.name)},5381).toString():"",S}var Ff=Tn.createContext();Ff.Consumer;var Yf=Tn.createContext(),bg=(Yf.Consumer,new Ci),Ua=jg();function Jf(){return F.useContext(Ff)||bg}function Hf(){return F.useContext(Yf)||Ua}var Rg=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Ua);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.toString=function(){return go(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ua),this.name+t.hash},e}(),Ug=/([A-Z])/,Kg=/([A-Z])/g,zg=/^ms-/,Ng=function(e){return"-"+e.toLowerCase()};function cA(e){return Ug.test(e)?e.replace(Kg,Ng).replace(zg,"-ms-"):e}var fA=function(e){return e==null||e===!1||e===""};function Mn(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],l=0,a=e.length;l<a;l+=1)(o=Mn(e[l],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(fA(e))return"";if(Ls(e))return"."+e.styledComponentId;if(ao(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return Mn(s,t,n,r)}var u;return e instanceof Rg?n?(e.inject(n,r),e.getName(r)):e:ba(e)?function p(g,h){var k,S,E=[];for(var M in g)g.hasOwnProperty(M)&&!fA(g[M])&&(Array.isArray(g[M])&&g[M].isCss||ao(g[M])?E.push(cA(M)+":",g[M],";"):ba(g[M])?E.push.apply(E,p(g[M],M)):E.push(cA(M)+": "+(k=M,(S=g[M])==null||typeof S=="boolean"||S===""?"":typeof S!="number"||S===0||k in og?String(S).trim():S+"px")+";"));return h?[h+" {"].concat(E,["}"]):E}(e):e.toString()}var dA=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ft(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ao(e)||ba(e)?dA(Mn(aA(Si,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:dA(Mn(aA(e,n)))}var Zf=function(e,t,n){return n===void 0&&(n=cn),e.theme!==n.theme&&e.theme||t||n.theme},Lg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Gg=/(^-|-$)/g;function Rl(e){return e.replace(Lg,"-").replace(Gg,"")}var Vf=function(e){return Ra(Lf(e)>>>0)};function Ro(e){return typeof e=="string"&&!0}var Ka=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Fg=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Yg(e,t,n){var r=e[n];Ka(t)&&Ka(r)?Wf(r,t):e[n]=t}function Wf(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var l=i[o];if(Ka(l))for(var a in l)Fg(a)&&Yg(e,l[a],a)}return e}var Fs=Tn.createContext();Fs.Consumer;var Ul={};function Xf(e,t,n){var r=Ls(e),o=!Ro(e),i=t.attrs,l=i===void 0?Si:i,a=t.componentId,s=a===void 0?function(A,d){var x=typeof A!="string"?"sc":Rl(A);Ul[x]=(Ul[x]||0)+1;var I=x+"-"+Vf("5.3.9"+x+Ul[x]);return d?d+"-"+I:I}(t.displayName,t.parentComponentId):a,u=t.displayName,p=u===void 0?function(A){return Ro(A)?"styled."+A:"Styled("+sA(A)+")"}(e):u,g=t.displayName&&t.componentId?Rl(t.displayName)+"-"+t.componentId:t.componentId||s,h=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,k=t.shouldForwardProp;r&&e.shouldForwardProp&&(k=t.shouldForwardProp?function(A,d,x){return e.shouldForwardProp(A,d,x)&&t.shouldForwardProp(A,d,x)}:e.shouldForwardProp);var S,E=new Mg(n,g,r?e.componentStyle:void 0),M=E.isStatic&&l.length===0,c=function(A,d){return function(x,I,T,j){var O=x.attrs,q=x.componentStyle,G=x.defaultProps,he=x.foldedComponentIds,ge=x.shouldForwardProp,ke=x.styledComponentId,Te=x.target,Be=function(C,f,Q){C===void 0&&(C=cn);var D=Bt({},f,{theme:C}),Y={};return Q.forEach(function(R){var W,L,le,ce=R;for(W in ao(ce)&&(ce=ce(D)),ce)D[W]=Y[W]=W==="className"?(L=Y[W],le=ce[W],L&&le?L+" "+le:L||le):ce[W]}),[D,Y]}(Zf(I,F.useContext(Fs),G)||cn,I,O),pt=Be[0],ie=Be[1],P=function(C,f,Q,D){var Y=Jf(),R=Hf(),W=f?C.generateAndInjectStyles(cn,Y,R):C.generateAndInjectStyles(Q,Y,R);return W}(q,j,pt),z=T,U=ie.$as||I.$as||ie.as||I.as||Te,$=Ro(U),m=ie!==I?Bt({},I,{},ie):I,y={};for(var w in m)w[0]!=="$"&&w!=="as"&&(w==="forwardedAs"?y.as=m[w]:(ge?ge(w,rA,U):!$||rA(w))&&(y[w]=m[w]));return I.style&&ie.style!==I.style&&(y.style=Bt({},I.style,{},ie.style)),y.className=Array.prototype.concat(he,ke,P!==ke?P:null,I.className,ie.className).filter(Boolean).join(" "),y.ref=z,F.createElement(U,y)}(S,A,d,M)};return c.displayName=p,(S=Tn.forwardRef(c)).attrs=h,S.componentStyle=E,S.displayName=p,S.shouldForwardProp=k,S.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Si,S.styledComponentId=g,S.target=r?e.target:e,S.withComponent=function(A){var d=t.componentId,x=function(T,j){if(T==null)return{};var O,q,G={},he=Object.keys(T);for(q=0;q<he.length;q++)O=he[q],j.indexOf(O)>=0||(G[O]=T[O]);return G}(t,["componentId"]),I=d&&d+"-"+(Ro(A)?A:Rl(sA(A)));return Xf(A,Bt({},x,{attrs:h,componentId:I}),n)},Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(A){this._foldedDefaultProps=r?Wf({},e.defaultProps,A):A}}),Object.defineProperty(S,"toString",{value:function(){return"."+S.styledComponentId}}),o&&pg(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),S}var za=function(e){return function t(n,r,o){if(o===void 0&&(o=cn),!lo.isValidElementType(r))return go(1,String(r));var i=function(){return n(r,o,Ft.apply(void 0,arguments))};return i.withConfig=function(l){return t(n,r,Bt({},o,{},l))},i.attrs=function(l){return t(n,r,Bt({},o,{attrs:Array.prototype.concat(o.attrs,l).filter(Boolean)}))},i}(Xf,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){za[e]=za(e)});var Jg=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Gf(n),Ci.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var l=i(Mn(this.rules,r,o,i).join(""),""),a=this.componentId+n;o.insertRules(a,a,l)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&Ci.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function qf(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ft.apply(void 0,[e].concat(n)),i="sc-global-"+Vf(JSON.stringify(o)),l=new Jg(o,i);function a(u){var p=Jf(),g=Hf(),h=F.useContext(Fs),k=F.useRef(p.allocateGSInstance(i)).current;return p.server&&s(k,u,p,h,g),F.useLayoutEffect(function(){if(!p.server)return s(k,u,p,h,g),function(){return l.removeStyles(k,p)}},[k,u,p,h,g]),null}function s(u,p,g,h,k){if(l.isStatic)l.renderStyles(u,gg,g,k);else{var S=Bt({},p,{theme:Zf(p,h,a.defaultProps)});l.renderStyles(u,S,g,k)}}return Tn.memo(a)}const N=za,Hg="/Portfolio/assets/w95fa-37d341cd.woff",Zg="/Portfolio/assets/w95fa-d81cbd6c.woff2",Vg=qf`
    @font-face {
        font-family: 'w95fa';
        src: local('w95fa'), local('w95fa'),
        url(${Hg}) format('woff'),
        url(${Zg}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`,de=({justify:e,align:t})=>Ft`
  display: flex;
  justify-content: ${e};
  align-items: ${t};
`,pr="w95fa, sans-serif",Wg=Tn.memo(qf`${Ft`
    * {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
    }

    body {
      background-color: #008080;
      overflow: hidden;
      font-family: ${pr};
      height: 155vh;
      /* width: 130vw; */
    }
  `}`),Xg=N.section`
  height: 95vh;
  width: 100vw;
`,Se=Ft`
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  touch-action: none;
`,K="@media (max-width: 1440px)";var Mt={},qg={get exports(){return Mt},set exports(e){Mt=e}},_f={},Ei={},_g={get exports(){return Ei},set exports(e){Ei=e}},$g="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",em=$g,tm=em;function $f(){}function ed(){}ed.resetWarningCache=$f;var nm=function(){function e(r,o,i,l,a,s){if(s!==tm){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ed,resetWarningCache:$f};return n.PropTypes=n,n};_g.exports=nm();function td(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=td(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function pA(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=td(e))&&(r&&(r+=" "),r+=t);return r}const rm=Object.freeze(Object.defineProperty({__proto__:null,clsx:pA,default:pA},Symbol.toStringTag,{value:"Module"})),om=kd(rm);var pe={},Tt={};Object.defineProperty(Tt,"__esModule",{value:!0});Tt.dontSetMe=um;Tt.findInArray=im;Tt.int=sm;Tt.isFunction=lm;Tt.isNum=am;function im(e,t){for(var n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function lm(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function am(e){return typeof e=="number"&&!isNaN(e)}function sm(e){return parseInt(e,10)}function um(e,t,n){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(n," - do not set this, set it on the child."))}var bn={};Object.defineProperty(bn,"__esModule",{value:!0});bn.browserPrefixToKey=rd;bn.browserPrefixToStyle=Am;bn.default=void 0;bn.getPrefix=nd;var Kl=["Moz","Webkit","O","ms"];function nd(){var e,t,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";var r=(e=window.document)===null||e===void 0||(t=e.documentElement)===null||t===void 0?void 0:t.style;if(!r||n in r)return"";for(var o=0;o<Kl.length;o++)if(rd(n,Kl[o])in r)return Kl[o];return""}function rd(e,t){return t?"".concat(t).concat(cm(e)):e}function Am(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e}function cm(e){for(var t="",n=!0,r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):e[r]==="-"?n=!0:t+=e[r];return t}var fm=nd();bn.default=fm;function Na(e){return Na=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Na(e)}Object.defineProperty(pe,"__esModule",{value:!0});pe.addClassName=sd;pe.addEvent=hm;pe.addUserSelectStyles=Dm;pe.createCSSTransform=Sm;pe.createSVGTransform=km;pe.getTouch=Cm;pe.getTouchIdentifier=Em;pe.getTranslation=Ys;pe.innerHeight=vm;pe.innerWidth=wm;pe.matchesSelector=ad;pe.matchesSelectorAndParentsTo=pm;pe.offsetXYFromParent=xm;pe.outerHeight=mm;pe.outerWidth=ym;pe.removeClassName=ud;pe.removeEvent=gm;pe.removeUserSelectStyles=Im;var nt=Tt,hA=dm(bn);function od(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(od=function(o){return o?n:t})(e)}function dm(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||Na(e)!=="object"&&typeof e!="function")return{default:e};var n=od(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function gA(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function id(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gA(Object(n),!0).forEach(function(r){ld(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gA(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ld(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Uo="";function ad(e,t){return Uo||(Uo=(0,nt.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,nt.isFunction)(e[n])})),(0,nt.isFunction)(e[Uo])?e[Uo](t):!1}function pm(e,t,n){var r=e;do{if(ad(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function hm(e,t,n,r){if(e){var o=id({capture:!0},r);e.addEventListener?e.addEventListener(t,n,o):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}}function gm(e,t,n,r){if(e){var o=id({capture:!0},r);e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}}function mm(e){var t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,nt.int)(n.borderTopWidth),t+=(0,nt.int)(n.borderBottomWidth),t}function ym(e){var t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,nt.int)(n.borderLeftWidth),t+=(0,nt.int)(n.borderRightWidth),t}function vm(e){var t=e.clientHeight,n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,nt.int)(n.paddingTop),t-=(0,nt.int)(n.paddingBottom),t}function wm(e){var t=e.clientWidth,n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,nt.int)(n.paddingLeft),t-=(0,nt.int)(n.paddingRight),t}function xm(e,t,n){var r=t===t.ownerDocument.body,o=r?{left:0,top:0}:t.getBoundingClientRect(),i=(e.clientX+t.scrollLeft-o.left)/n,l=(e.clientY+t.scrollTop-o.top)/n;return{x:i,y:l}}function Sm(e,t){var n=Ys(e,t,"px");return ld({},(0,hA.browserPrefixToKey)("transform",hA.default),n)}function km(e,t){var n=Ys(e,t,"");return n}function Ys(e,t,n){var r=e.x,o=e.y,i="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(t){var l="".concat(typeof t.x=="string"?t.x:t.x+n),a="".concat(typeof t.y=="string"?t.y:t.y+n);i="translate(".concat(l,", ").concat(a,")")+i}return i}function Cm(e,t){return e.targetTouches&&(0,nt.findInArray)(e.targetTouches,function(n){return t===n.identifier})||e.changedTouches&&(0,nt.findInArray)(e.changedTouches,function(n){return t===n.identifier})}function Em(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function Dm(e){if(e){var t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&sd(e.body,"react-draggable-transparent-selection")}}function Im(e){if(e)try{if(e.body&&ud(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{var t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function sd(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function ud(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}var Ot={};Object.defineProperty(Ot,"__esModule",{value:!0});Ot.canDragX=Qm;Ot.canDragY=Mm;Ot.createCoreData=Om;Ot.createDraggableData=jm;Ot.getBoundPosition=Bm;Ot.getControlPosition=Tm;Ot.snapToGrid=Pm;var _e=Tt,Xn=pe;function Bm(e,t,n){if(!e.props.bounds)return[t,n];var r=e.props.bounds;r=typeof r=="string"?r:bm(r);var o=Js(e);if(typeof r=="string"){var i=o.ownerDocument,l=i.defaultView,a;if(r==="parent"?a=o.parentNode:a=i.querySelector(r),!(a instanceof l.HTMLElement))throw new Error('Bounds selector "'+r+'" could not find an element.');var s=a,u=l.getComputedStyle(o),p=l.getComputedStyle(s);r={left:-o.offsetLeft+(0,_e.int)(p.paddingLeft)+(0,_e.int)(u.marginLeft),top:-o.offsetTop+(0,_e.int)(p.paddingTop)+(0,_e.int)(u.marginTop),right:(0,Xn.innerWidth)(s)-(0,Xn.outerWidth)(o)-o.offsetLeft+(0,_e.int)(p.paddingRight)-(0,_e.int)(u.marginRight),bottom:(0,Xn.innerHeight)(s)-(0,Xn.outerHeight)(o)-o.offsetTop+(0,_e.int)(p.paddingBottom)-(0,_e.int)(u.marginBottom)}}return(0,_e.isNum)(r.right)&&(t=Math.min(t,r.right)),(0,_e.isNum)(r.bottom)&&(n=Math.min(n,r.bottom)),(0,_e.isNum)(r.left)&&(t=Math.max(t,r.left)),(0,_e.isNum)(r.top)&&(n=Math.max(n,r.top)),[t,n]}function Pm(e,t,n){var r=Math.round(t/e[0])*e[0],o=Math.round(n/e[1])*e[1];return[r,o]}function Qm(e){return e.props.axis==="both"||e.props.axis==="x"}function Mm(e){return e.props.axis==="both"||e.props.axis==="y"}function Tm(e,t,n){var r=typeof t=="number"?(0,Xn.getTouch)(e,t):null;if(typeof t=="number"&&!r)return null;var o=Js(n),i=n.props.offsetParent||o.offsetParent||o.ownerDocument.body;return(0,Xn.offsetXYFromParent)(r||e,i,n.props.scale)}function Om(e,t,n){var r=e.state,o=!(0,_e.isNum)(r.lastX),i=Js(e);return o?{node:i,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:i,deltaX:t-r.lastX,deltaY:n-r.lastY,lastX:r.lastX,lastY:r.lastY,x:t,y:n}}function jm(e,t){var n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function bm(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function Js(e){var t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var tl={},nl={};Object.defineProperty(nl,"__esModule",{value:!0});nl.default=Rm;function Rm(){}function Di(e){return Di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Di(e)}Object.defineProperty(tl,"__esModule",{value:!0});tl.default=void 0;var zl=Km(F),qe=Hs(Ei),Um=Hs(Gr),Ke=pe,Vt=Ot,Nl=Tt,Er=Hs(nl);function Hs(e){return e&&e.__esModule?e:{default:e}}function Ad(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Ad=function(o){return o?n:t})(e)}function Km(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||Di(e)!=="object"&&typeof e!="function")return{default:e};var n=Ad(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function mA(e,t){return Gm(e)||Lm(e,t)||Nm(e,t)||zm()}function zm(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nm(e,t){if(e){if(typeof e=="string")return yA(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yA(e,t)}}function yA(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Lm(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],o=!0,i=!1,l,a;try{for(n=n.call(e);!(o=(l=n.next()).done)&&(r.push(l.value),!(t&&r.length===t));o=!0);}catch(s){i=!0,a=s}finally{try{!o&&n.return!=null&&n.return()}finally{if(i)throw a}}return r}}function Gm(e){if(Array.isArray(e))return e}function Fm(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vA(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ym(e,t,n){return t&&vA(e.prototype,t),n&&vA(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Jm(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&La(e,t)}function La(e,t){return La=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},La(e,t)}function Hm(e){var t=Vm();return function(){var r=Ii(e),o;if(t){var i=Ii(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return Zm(this,o)}}function Zm(e,t){if(t&&(Di(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ze(e)}function ze(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Vm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ii(e){return Ii=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ii(e)}function at(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var mt={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}},Wt=mt.mouse,rl=function(e){Jm(n,e);var t=Hm(n);function n(){var r;Fm(this,n);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return r=t.call.apply(t,[this].concat(i)),at(ze(r),"state",{dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null}),at(ze(r),"mounted",!1),at(ze(r),"handleDragStart",function(a){if(r.props.onMouseDown(a),!r.props.allowAnyClick&&typeof a.button=="number"&&a.button!==0)return!1;var s=r.findDOMNode();if(!s||!s.ownerDocument||!s.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");var u=s.ownerDocument;if(!(r.props.disabled||!(a.target instanceof u.defaultView.Node)||r.props.handle&&!(0,Ke.matchesSelectorAndParentsTo)(a.target,r.props.handle,s)||r.props.cancel&&(0,Ke.matchesSelectorAndParentsTo)(a.target,r.props.cancel,s))){a.type==="touchstart"&&a.preventDefault();var p=(0,Ke.getTouchIdentifier)(a);r.setState({touchIdentifier:p});var g=(0,Vt.getControlPosition)(a,p,ze(r));if(g!=null){var h=g.x,k=g.y,S=(0,Vt.createCoreData)(ze(r),h,k);(0,Er.default)("DraggableCore: handleDragStart: %j",S),(0,Er.default)("calling",r.props.onStart);var E=r.props.onStart(a,S);E===!1||r.mounted===!1||(r.props.enableUserSelectHack&&(0,Ke.addUserSelectStyles)(u),r.setState({dragging:!0,lastX:h,lastY:k}),(0,Ke.addEvent)(u,Wt.move,r.handleDrag),(0,Ke.addEvent)(u,Wt.stop,r.handleDragStop))}}}),at(ze(r),"handleDrag",function(a){var s=(0,Vt.getControlPosition)(a,r.state.touchIdentifier,ze(r));if(s!=null){var u=s.x,p=s.y;if(Array.isArray(r.props.grid)){var g=u-r.state.lastX,h=p-r.state.lastY,k=(0,Vt.snapToGrid)(r.props.grid,g,h),S=mA(k,2);if(g=S[0],h=S[1],!g&&!h)return;u=r.state.lastX+g,p=r.state.lastY+h}var E=(0,Vt.createCoreData)(ze(r),u,p);(0,Er.default)("DraggableCore: handleDrag: %j",E);var M=r.props.onDrag(a,E);if(M===!1||r.mounted===!1){try{r.handleDragStop(new MouseEvent("mouseup"))}catch{var c=document.createEvent("MouseEvents");c.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),r.handleDragStop(c)}return}r.setState({lastX:u,lastY:p})}}),at(ze(r),"handleDragStop",function(a){if(r.state.dragging){var s=(0,Vt.getControlPosition)(a,r.state.touchIdentifier,ze(r));if(s!=null){var u=s.x,p=s.y;if(Array.isArray(r.props.grid)){var g=u-r.state.lastX||0,h=p-r.state.lastY||0,k=(0,Vt.snapToGrid)(r.props.grid,g,h),S=mA(k,2);g=S[0],h=S[1],u=r.state.lastX+g,p=r.state.lastY+h}var E=(0,Vt.createCoreData)(ze(r),u,p),M=r.props.onStop(a,E);if(M===!1||r.mounted===!1)return!1;var c=r.findDOMNode();c&&r.props.enableUserSelectHack&&(0,Ke.removeUserSelectStyles)(c.ownerDocument),(0,Er.default)("DraggableCore: handleDragStop: %j",E),r.setState({dragging:!1,lastX:NaN,lastY:NaN}),c&&((0,Er.default)("DraggableCore: Removing handlers"),(0,Ke.removeEvent)(c.ownerDocument,Wt.move,r.handleDrag),(0,Ke.removeEvent)(c.ownerDocument,Wt.stop,r.handleDragStop))}}}),at(ze(r),"onMouseDown",function(a){return Wt=mt.mouse,r.handleDragStart(a)}),at(ze(r),"onMouseUp",function(a){return Wt=mt.mouse,r.handleDragStop(a)}),at(ze(r),"onTouchStart",function(a){return Wt=mt.touch,r.handleDragStart(a)}),at(ze(r),"onTouchEnd",function(a){return Wt=mt.touch,r.handleDragStop(a)}),r}return Ym(n,[{key:"componentDidMount",value:function(){this.mounted=!0;var o=this.findDOMNode();o&&(0,Ke.addEvent)(o,mt.touch.start,this.onTouchStart,{passive:!1})}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var o=this.findDOMNode();if(o){var i=o.ownerDocument;(0,Ke.removeEvent)(i,mt.mouse.move,this.handleDrag),(0,Ke.removeEvent)(i,mt.touch.move,this.handleDrag),(0,Ke.removeEvent)(i,mt.mouse.stop,this.handleDragStop),(0,Ke.removeEvent)(i,mt.touch.stop,this.handleDragStop),(0,Ke.removeEvent)(o,mt.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,Ke.removeUserSelectStyles)(i)}}},{key:"findDOMNode",value:function(){var o,i,l;return(o=this.props)!==null&&o!==void 0&&o.nodeRef?(i=this.props)===null||i===void 0||(l=i.nodeRef)===null||l===void 0?void 0:l.current:Um.default.findDOMNode(this)}},{key:"render",value:function(){return zl.cloneElement(zl.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}]),n}(zl.Component);tl.default=rl;at(rl,"displayName","DraggableCore");at(rl,"propTypes",{allowAnyClick:qe.default.bool,disabled:qe.default.bool,enableUserSelectHack:qe.default.bool,offsetParent:function(t,n){if(t[n]&&t[n].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:qe.default.arrayOf(qe.default.number),handle:qe.default.string,cancel:qe.default.string,nodeRef:qe.default.object,onStart:qe.default.func,onDrag:qe.default.func,onStop:qe.default.func,onMouseDown:qe.default.func,scale:qe.default.number,className:Nl.dontSetMe,style:Nl.dontSetMe,transform:Nl.dontSetMe});at(rl,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){function t(m){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},t(m)}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return u.default}}),e.default=void 0;var n=S(F),r=h(Ei),o=h(Gr),i=h(om),l=pe,a=Ot,s=Tt,u=h(tl),p=h(nl),g=["axis","bounds","children","defaultPosition","defaultClassName","defaultClassNameDragging","defaultClassNameDragged","position","positionOffset","scale"];function h(m){return m&&m.__esModule?m:{default:m}}function k(m){if(typeof WeakMap!="function")return null;var y=new WeakMap,w=new WeakMap;return(k=function(f){return f?w:y})(m)}function S(m,y){if(!y&&m&&m.__esModule)return m;if(m===null||t(m)!=="object"&&typeof m!="function")return{default:m};var w=k(y);if(w&&w.has(m))return w.get(m);var C={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Q in m)if(Q!=="default"&&Object.prototype.hasOwnProperty.call(m,Q)){var D=f?Object.getOwnPropertyDescriptor(m,Q):null;D&&(D.get||D.set)?Object.defineProperty(C,Q,D):C[Q]=m[Q]}return C.default=m,w&&w.set(m,C),C}function E(){return E=Object.assign||function(m){for(var y=1;y<arguments.length;y++){var w=arguments[y];for(var C in w)Object.prototype.hasOwnProperty.call(w,C)&&(m[C]=w[C])}return m},E.apply(this,arguments)}function M(m,y){if(m==null)return{};var w=c(m,y),C,f;if(Object.getOwnPropertySymbols){var Q=Object.getOwnPropertySymbols(m);for(f=0;f<Q.length;f++)C=Q[f],!(y.indexOf(C)>=0)&&Object.prototype.propertyIsEnumerable.call(m,C)&&(w[C]=m[C])}return w}function c(m,y){if(m==null)return{};var w={},C=Object.keys(m),f,Q;for(Q=0;Q<C.length;Q++)f=C[Q],!(y.indexOf(f)>=0)&&(w[f]=m[f]);return w}function A(m,y){var w=Object.keys(m);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(m);y&&(C=C.filter(function(f){return Object.getOwnPropertyDescriptor(m,f).enumerable})),w.push.apply(w,C)}return w}function d(m){for(var y=1;y<arguments.length;y++){var w=arguments[y]!=null?arguments[y]:{};y%2?A(Object(w),!0).forEach(function(C){U(m,C,w[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(w)):A(Object(w)).forEach(function(C){Object.defineProperty(m,C,Object.getOwnPropertyDescriptor(w,C))})}return m}function x(m,y){return q(m)||O(m,y)||T(m,y)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(m,y){if(m){if(typeof m=="string")return j(m,y);var w=Object.prototype.toString.call(m).slice(8,-1);if(w==="Object"&&m.constructor&&(w=m.constructor.name),w==="Map"||w==="Set")return Array.from(m);if(w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w))return j(m,y)}}function j(m,y){(y==null||y>m.length)&&(y=m.length);for(var w=0,C=new Array(y);w<y;w++)C[w]=m[w];return C}function O(m,y){var w=m==null?null:typeof Symbol<"u"&&m[Symbol.iterator]||m["@@iterator"];if(w!=null){var C=[],f=!0,Q=!1,D,Y;try{for(w=w.call(m);!(f=(D=w.next()).done)&&(C.push(D.value),!(y&&C.length===y));f=!0);}catch(R){Q=!0,Y=R}finally{try{!f&&w.return!=null&&w.return()}finally{if(Q)throw Y}}return C}}function q(m){if(Array.isArray(m))return m}function G(m,y){if(!(m instanceof y))throw new TypeError("Cannot call a class as a function")}function he(m,y){for(var w=0;w<y.length;w++){var C=y[w];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(m,C.key,C)}}function ge(m,y,w){return y&&he(m.prototype,y),w&&he(m,w),Object.defineProperty(m,"prototype",{writable:!1}),m}function ke(m,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function");m.prototype=Object.create(y&&y.prototype,{constructor:{value:m,writable:!0,configurable:!0}}),Object.defineProperty(m,"prototype",{writable:!1}),y&&Te(m,y)}function Te(m,y){return Te=Object.setPrototypeOf||function(C,f){return C.__proto__=f,C},Te(m,y)}function Be(m){var y=P();return function(){var C=z(m),f;if(y){var Q=z(this).constructor;f=Reflect.construct(C,arguments,Q)}else f=C.apply(this,arguments);return pt(this,f)}}function pt(m,y){if(y&&(t(y)==="object"||typeof y=="function"))return y;if(y!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ie(m)}function ie(m){if(m===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m}function P(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function z(m){return z=Object.setPrototypeOf?Object.getPrototypeOf:function(w){return w.__proto__||Object.getPrototypeOf(w)},z(m)}function U(m,y,w){return y in m?Object.defineProperty(m,y,{value:w,enumerable:!0,configurable:!0,writable:!0}):m[y]=w,m}var $=function(m){ke(w,m);var y=Be(w);function w(C){var f;return G(this,w),f=y.call(this,C),U(ie(f),"onDragStart",function(Q,D){(0,p.default)("Draggable: onDragStart: %j",D);var Y=f.props.onStart(Q,(0,a.createDraggableData)(ie(f),D));if(Y===!1)return!1;f.setState({dragging:!0,dragged:!0})}),U(ie(f),"onDrag",function(Q,D){if(!f.state.dragging)return!1;(0,p.default)("Draggable: onDrag: %j",D);var Y=(0,a.createDraggableData)(ie(f),D),R={x:Y.x,y:Y.y};if(f.props.bounds){var W=R.x,L=R.y;R.x+=f.state.slackX,R.y+=f.state.slackY;var le=(0,a.getBoundPosition)(ie(f),R.x,R.y),ce=x(le,2),Z=ce[0],me=ce[1];R.x=Z,R.y=me,R.slackX=f.state.slackX+(W-R.x),R.slackY=f.state.slackY+(L-R.y),Y.x=R.x,Y.y=R.y,Y.deltaX=R.x-f.state.x,Y.deltaY=R.y-f.state.y}var X=f.props.onDrag(Q,Y);if(X===!1)return!1;f.setState(R)}),U(ie(f),"onDragStop",function(Q,D){if(!f.state.dragging)return!1;var Y=f.props.onStop(Q,(0,a.createDraggableData)(ie(f),D));if(Y===!1)return!1;(0,p.default)("Draggable: onDragStop: %j",D);var R={dragging:!1,slackX:0,slackY:0},W=!!f.props.position;if(W){var L=f.props.position,le=L.x,ce=L.y;R.x=le,R.y=ce}f.setState(R)}),f.state={dragging:!1,dragged:!1,x:C.position?C.position.x:C.defaultPosition.x,y:C.position?C.position.y:C.defaultPosition.y,prevPropsPosition:d({},C.position),slackX:0,slackY:0,isElementSVG:!1},C.position&&!(C.onDrag||C.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."),f}return ge(w,[{key:"componentDidMount",value:function(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"findDOMNode",value:function(){var f,Q,D;return(f=(Q=this.props)===null||Q===void 0||(D=Q.nodeRef)===null||D===void 0?void 0:D.current)!==null&&f!==void 0?f:o.default.findDOMNode(this)}},{key:"render",value:function(){var f,Q=this.props;Q.axis,Q.bounds;var D=Q.children,Y=Q.defaultPosition,R=Q.defaultClassName,W=Q.defaultClassNameDragging,L=Q.defaultClassNameDragged,le=Q.position,ce=Q.positionOffset;Q.scale;var Z=M(Q,g),me={},X=null,Ce=!!le,Jt=!Ce||this.state.dragging,we=le||Y,mn={x:(0,a.canDragX)(this)&&Jt?this.state.x:we.x,y:(0,a.canDragY)(this)&&Jt?this.state.y:we.y};this.state.isElementSVG?X=(0,l.createSVGTransform)(mn,ce):me=(0,l.createCSSTransform)(mn,ce);var yn=(0,i.default)(D.props.className||"",R,(f={},U(f,W,this.state.dragging),U(f,L,this.state.dragged),f));return n.createElement(u.default,E({},Z,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),n.cloneElement(n.Children.only(D),{className:yn,style:d(d({},D.props.style),me),transform:X}))}}],[{key:"getDerivedStateFromProps",value:function(f,Q){var D=f.position,Y=Q.prevPropsPosition;return D&&(!Y||D.x!==Y.x||D.y!==Y.y)?((0,p.default)("Draggable: getDerivedStateFromProps %j",{position:D,prevPropsPosition:Y}),{x:D.x,y:D.y,prevPropsPosition:d({},D)}):null}}]),w}(n.Component);e.default=$,U($,"displayName","Draggable"),U($,"propTypes",d(d({},u.default.propTypes),{},{axis:r.default.oneOf(["both","x","y","none"]),bounds:r.default.oneOfType([r.default.shape({left:r.default.number,right:r.default.number,top:r.default.number,bottom:r.default.number}),r.default.string,r.default.oneOf([!1])]),defaultClassName:r.default.string,defaultClassNameDragging:r.default.string,defaultClassNameDragged:r.default.string,defaultPosition:r.default.shape({x:r.default.number,y:r.default.number}),positionOffset:r.default.shape({x:r.default.oneOfType([r.default.number,r.default.string]),y:r.default.oneOfType([r.default.number,r.default.string])}),position:r.default.shape({x:r.default.number,y:r.default.number}),className:s.dontSetMe,style:s.dontSetMe,transform:s.dontSetMe})),U($,"defaultProps",d(d({},u.default.defaultProps),{},{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1}))})(_f);var cd=_f,fd=cd.default,Wm=cd.DraggableCore;qg.exports=fd;Mt.default=fd;Mt.DraggableCore=Wm;const Nr="data:image/png;base64,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",dd="/Portfolio/assets/shared-4c54f330.jpg",hr="data:image/jpeg;base64,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",ol=Ft`
  img {
    height: 100px;
    width: 100px;
    /* image-rendering: pixelated; */
    margin-bottom: 0.5rem;

    ${Se}
  }

  p {
    font-size: 1.875rem;
    color: #fff;
    background-color: ${({isClicked:e})=>e&&"rgba(29, 0, 208, 0.5)"};
    padding: 0 5px;

    ${Se}

    pointer-events: none;
  }
`,Xm=N.article`
  ${de({justify:"flex-start",align:"flex-start"})};
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  width: max-content;
  padding: 15px;
`,qm=N.div`
  ${de({justify:"center",align:"center"})};
  flex-direction: column;
  position: relative;
  margin: 15px 50px 15px 10px;

  ${ol};
`,_m=N.div`
  ${de({justify:"center",align:"center"})};
  flex-direction: column;
  position: absolute;
  bottom: 2rem;
  right: 0;
  margin: 40px 30px;

  ${ol};
`,Bi=N.div`
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

  ${({iconName:e})=>e==="/Portfolio/src/assets/images/icons/smallProject.png"&&`
    ${K} {
      height: 80px;
      width: 80px;
    }
  `}
`,$m=N.section`
  background: url(${dd}) center/cover no-repeat;
  position: absolute;
  top: 0;
  left: 200px;
  height: 652px;
  width: 975px;

  ${K} {
    height: 500px;
    width: 747px;
  }

  visibility: ${({isLoading:e})=>e?"hidden":"visible"};

  display: ${({isVisible:e})=>e?"block":"none"};
  z-index: ${({lastClicked:e})=>e==="book"?2:1};
`,e0=N.div`
  ${de({justify:"center",align:"center"})};
  flex-direction: column;

  position: absolute;
  top: 15rem;
  left: 17rem;

  cursor: pointer;

  ${ol}; /* @TODO: mozda ako ovdje stavim sherd direktno radice */

  ${K} {
    top: 11.5rem;
    left: 13.5rem;
  }

  img {
    height: 100px;
    width: 100px;
  }

  p {
    color: ${({isClicked:e})=>e?"#fff":"#000"};

    ${K} {
      font-size: 1.6rem;
    }
  }
`,t0=N.div`
  background: url(${hr}) center/contain no-repeat;
  height: 37px;
  width: 959px;
  margin: 0.5rem auto;
  cursor: grab;

  ${K} {
    height: 29px;
    width: 736px;
    margin: 0.35rem auto;
  }

  div {
    ${de({justify:"flex-start",align:"center"})};
    height: 37px;
    width: 270px;
    cursor: auto;
    ${Se}

    ${K} {
      height: 29px;
    }

    img {
      height: 28px;
      width: 28px;
      margin: 0 0.5rem;

      ${Se}

      ${K} {
        height: 23px;
        width: 23px;
      }
    }

    p {
      font-size: 1.875rem;
      color: #fff;

      ${K} {
        font-size: 1.5rem;
      }
    }
  }
`,n0=N.article`
  position: absolute;
  top: 100px;
  left: 30px;

  ${K} {
    top: 80px;
    left: 25px;
  }

  p {
    font-size: 1.5rem;
    line-height: 40px;
    font-weight: 500;
    padding-right: 80px;
    margin-bottom: 0.5rem;

    ${Se}
  }
`,pd=F.createContext({}),r0=({children:e})=>{const[t,n]=F.useState({about:!1,work:!1,contact:!1,recycle:!1,book:!1}),[r,o]=F.useState({about:!1,work:!1,contact:!1,recycle:!1,time:!1,book:!1}),[i,l]=F.useState(""),[a,s]=F.useState({about:!0,work:!0,contact:!0,recycle:!0,book:!1,start:!1}),[u,p]=F.useState(!0),[g,h]=F.useState(!1),[k,S]=F.useState(!1);return v(pd.Provider,{value:{isClicked:t,setIsClicked:n,isOpen:r,setIsOpen:o,lastClicked:i,setLastClicked:l,isVisible:a,setIsVisible:s,isShutDown:k,setIsShutDown:S,isLoading:u,setIsLoading:p,isShuttingDown:g,setIsShuttingDown:h},children:e})},Ie=()=>F.useContext(pd),o0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABTVBMVEUAAAAAAAAICAgAAAAdHR0KCgoAAAACAgIBAQFqamqoqKgBAQEAAAADAwMAAAAAAAAAAAAAAACqqqoXFxe1tbUVFRUZGRkFBQUCAgIAAAAAAAABAQEDAwMAAAABAQEAAAAAAAAAAAAAAAAAAAAAAABaWlo9PT2lpaUAAAB3d3dTU1NNTU0QEBA0NDRhYWE/Pz9qamoLCwsLCwsVFRUcHBwAAAABAQE0NDRDQ0MpKSk3NzcCAgIwMDA8PDw2NjYpKSkXFxcAAAAAAAAAAAAAAAAAAAD////19fX9/f0jIyPY2NiQkJD6+vrDw8Px8fHs7Ozc3NzR0dGLi4t5eXljY2Pk5OTHx8e+vr6enp6Xl5eTk5OHh4eEhIR2dnZVVVVPT08sLCwVFRX7+/vt7e3o6Oje3t7V1dXU1NSwsLBxcXFnZ2dcXFxLS0s2NjYRERGt/DyfAAAARnRSTlMABvsV/t/dcv7+/frLd0k/EQz+/v3t7OvXxK6afmBeV1E1JSEd/vz79fTz7ezo5d/Y1c/Kwba1raqpp6ajooqIh2MtKBcLeGfKDQAAASFJREFUGNNdzmVzwkAQgOGFpCG4F6dQqLu7t9eLQITgXvf//7F3STOd4f12z8ztLvhCYOewA+922MYUN2XGgbOxYys3fhFJHzw47xu7jIU+XqCNFwnKsaOyiUz8SVGUx/csQSR7TmfNRdMyqoqo5qKIHhbObijGK1Vdqg8sRDhyeE30hNUlcZAMUKTqOSYTmH2h2U7OAEUzz0EJQhm21U4FLcQo5nYLe+VMNIK1Lx/9jjUJ9dK53BWz+vbaxdqQLnqen8O9rHmSakgdTE9SNwLnkrhJxt8lhq1PqdP3g3etCHm3XHM5IO2NfgujEctBoghwe9GtrxeA+2lWSAYPJSC5+rKRB45naU4ezMKXenU5GGL+Aiv/kroShIkc/q3C/+sXkRI2ebgCrnAAAAAASUVORK5CYII=",gr=(e=1e3)=>{const[t,n]=F.useState(!0);return F.useEffect(()=>{const r=setTimeout(()=>{n(!1)},e);return()=>{clearTimeout(r)}},[e]),F.useEffect(()=>{t?document.body.style.cursor=`url(${o0}), auto`:document.body.style.cursor="auto"},[t]),{isLoading:t}},Zs=(e,t)=>{F.useEffect(()=>{const n=r=>{var o;(o=e.current)!=null&&o.contains(r.target)||t()};return document.addEventListener("mousedown",n,!0),()=>{document.removeEventListener("mousedown",n,!0)}},[])},i0=()=>{const[e,t]=F.useState(window.innerWidth);return F.useEffect(()=>{const n=()=>{t(window.innerWidth)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),e},l0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPBAMAAADwnzkiAAAAKlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKE86IAAAADXRSTlMA358ffxBgX+/Pb0A/+9uGsQAAAGBJREFUCNdjuHuRAQgY715guHsjLYAhLAPIcpl714DB9u4UBwYGXTBLAagkeK2goOziAJDq3Lt37xYwgMAh3btKGxjAgPcuAwRsgogh1CH0IsxD2AG0tzyAIbwCaC/cLQCc/S6Jg88bsAAAAABJRU5ErkJggg==",a0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASAQMAAABsABwUAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAABJJREFUCNdj+P//AAomDcL1AQAV/SJ1VnBIYQAAAABJRU5ErkJggg==",s0="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAAEAAwDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAr/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACf8H//xAAUEAEAAAAAAAAAAAAAAAAAAAAQ/9oACAEBAAE/AD//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AD//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AD//2Q==",u0=N.div`
  ${de({justify:"center",align:"center"})};
  height: 53px;
  width: 125px;
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 0.8rem;

  > div {
    ${de({justify:"center",align:"center"})};

    button {
      margin: 0 0.3rem;
    }
  }

  ${({iconName:e})=>e==="recycle"?Ft`
          height: 48px;
          width: 115px;

          ${K} {
            height: 37px;
            width: 95px;
          }

          button {
            height: 19.5px;
            width: 22.5px;

            ${K} {
              height: 15px;
              width: 19px;

              img {
                scale: 0.8;
              }
            }
          }
        `:e==="book"?Ft`
            ${K} {
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
          `:""}
`,hd=Ft`
  ${de({justify:"center",align:"center"})};
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
    ${Se}
  }
`,wA=N.button`
  ${hd};
  height: ${({iconName:e})=>e==="work"&&"20px"};
`,A0=N.button`
  ${hd};
  justify-content: flex-start !important;
  align-items: flex-end !important;

  height: ${({iconName:e})=>e==="work"&&"20px"};

  img {
    margin: 0.2rem;
  }
`,mo=({iconName:e})=>{const{isOpen:t,setIsOpen:n,isVisible:r,setIsVisible:o}=Ie();return H(u0,{iconName:e,children:[H("div",{children:[v(A0,{iconName:e,onClick:()=>o({...r,[e]:!1}),children:v("img",{src:s0,alt:"minimize"})}),v(wA,{iconName:e,children:v("img",{src:a0,alt:"maximize"})})]}),v(wA,{iconName:e,onClick:()=>n({...t,[e]:!1}),children:v("img",{src:l0,alt:"close"})})]})},c0=()=>{const{lastClicked:e,isVisible:t,setLastClicked:n}=Ie(),{isLoading:r}=gr(1e3);return v(Ct,{children:v(Mt,{handle:".handle",bounds:"body",cancel:".handle *",children:H($m,{onMouseDownCapture:()=>n("book"),isLoading:r,lastClicked:e,isVisible:t.book,"data-no-select":"true",children:[v(mo,{iconName:"book"}),v(t0,{className:"handle",isVisible:t.book,children:H("div",{children:[v("img",{src:Nr,alt:"handleImg"}),v("p",{children:"General - Notepad"})]})}),H(n0,{children:[v("p",{children:"Site Design and Development:"}),v("p",{children:"Development: Aleksa Bubanja - aleksa3b@gmail.com"}),v("p",{children:"Design: Tadija Bubanja - tadija3b@gmail.com"}),v("p",{children:"Special thanks to Tadija Bubanja for the visually appealing design elements that enhance the user experience."})]})]})})})},il="data:image/png;base64,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",f0="data:image/jpeg;base64,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",d0="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAgMDAwMDBAcFBAQEBAkGBwUHCgkLCwoJCgoMDREODAwQDAoKDhQPEBESExMTCw4UFhQSFhESExL/2wBDAQMDAwQEBAgFBQgSDAoMEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhL/wgARCAAsACoDAREAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAcICQoGAgP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAABpHoAFYVUmlMVgAJMprNKZAUgYWCnUlNZpTFUR7JDCTKazRkKgAFGVADIObAD5nPn/xAA7EAAABAMDBBAFBQAAAAAAAAABAgMEAAUGBwgREBIXNxMUGSFUVVZ0dZKVlrTB0dIJMTJBQhUgImGC/9oACAEBAAE/AGPwnLCnbI7pYJ81RIfMxXng+2NyesA4e/7xxuT1gHD3/eONyesA4e/7xxeQuAWD2L2XzmeSsk8mMyBg7FjsE82UElyIHOQxy/cmJclS6unnPk/L9l7jU/OejnvhlMlS6unnPk/KL41PWysCEquxCq5+DYhEGh6alLDZT44qCdzn9QBDNhC93bW6XTRbV9P1FVjgQhC5mJjD/mLn1MWu/po1RblVc8c7farNiUzNWGwqs1CrBmrCb+yEH8fzi9xqfnPRz3wymSpdXTznyflBiAcglOAGKYMBAfuES65NQMutiXrEkrkoyU0rK1QpoJSUEEHBTkMDop876/4iH05L3Gp+c9HPfDKZK/tBp6naUWlE6maLWYuVyLpIGIcRMnjhnYgGHzKMaR6b41R6h/SNI9N8ao9Q/pGkem+NUeof0i9BVMqn9ks9SlDwjlRKWPTHApTBgG1z5K8vIWnWlzVCY1nWs8evGyAN0zpLA2AEwMY2GakBS/Mw7+GMaSqu5UVD2mt7o0lVdyoqHtNb3RpKq7lRUPaa3uhxaFVLtBVB1Uk+WRWIJFE1JiqYpyjvCAgJt8BDJ//EABQRAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQIBAT8AE//EABQRAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQMBAT8AE//Z",p0="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAICAgICAQICAgIDAgIDAwYEAwMDAwcFBQQGCAcJCAgHCAgJCg0LCQoMCggICw8LDA0ODg8OCQsQERAOEQ0ODg7/2wBDAQIDAwMDAwcEBAcOCQgJDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg7/wgARCAAsACoDAREAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAgHCQoEBQb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACZTsACCigM3AC/gArxmgNwAtJVAWzC2maA3AFT4lI9h9SZoDbAL6AC2mbMnQ8YAOYi0//EADgQAAAFAQQFCAkFAAAAAAAAAAECAwQFBgAHCBEQEhM4lAkWFxkhV3XUFCJCVVaWtMHRIDNRYZH/2gAIAQEAAT8AYckHhrk2J3LZ/WREgPqevPo+Wt1OeHL3nV/zGh5a3U54cvedX/MaHlrdTnhy951f8xoeWtiJ5NnDJcfhhqir1pCszyycQ9PDAEyismLpJsoqntQ2BfUzJoqfdvkPE0/t+jFxugVN4S/+kU0VPu3yHiaf2tNTsNTsCrJzsm1iWJOwV3jkiJBNkIgUDHEAzHIcgztDcpNHPcaii68fOEueeRCbRlDnj2RXiEiZUgCudTaftauv7doyVi5qIJIQ0k1lmBxECOWTgqyRhAchADFEQ7Bti43QKm8Jf/SKaKn3b5DxNP7WxV4dL5MQL5GAgbzYeAu1KkgseDfRmuoL1MVc1tqQmvkJTgGrrW6rK8fvQpvg3FsKtwt8Vw0erS1V3lRNUXcIMlgi4VhG7I7d0ouVUywqmIBzBltQyE3t2xcboFTeEv8A6RTRW1WUvE3Ju4eTqKNj5ZR4msmzcPSJrGTzy1wII5iGYD2253Ur8SRnGp/m3O6lfiSM41P8253Ur8SRnGp/m2Kmbh5TCNVKcbKtH6hId+Y5W65TiUPRFP4HROYmb/akliPp69eflXhEgSKqu7zMBAERAP8ARG3TxfF3iTPE26eL4u8SZ4m3TxfF3iTPE2e32XsSMO7j31eyzpk6RMi4RUXzKoQwCUxR/oQHR//EABQRAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQIBAT8AE//EABQRAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQMBAT8AE//Z",h0="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBgYGBQcGBgYICAcJCxIMCwoKCxcQEQ0SGxccHBoXGhkdISokHR8oIBkaJTIlKCwtLzAvHSM0ODQuNyouLy7/2wBDAQgICAsKCxYMDBYuHhoeLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi7/wgARCAFCAB4DAREAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAUHCAMG/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA9kcgI8aXEoEDNLCUCBmlhKBAzSwlAgZpYSgQM0sJQIGaWEoEDNLCUCBmlhKBAzSwlAgZpYSgQM0sJQIGaWEoEDNLCUCBmlhKBAzSwlAgZpYSgQM0sJQIGaWEoEDNLCUCBmlhKBAzSwlAgZpYSgQM0sJQIGaWEoEDNLCUCBmlhKBAzSwlAgZpYSgQM0sJQIGaWEoEDNLCUCBmlhKBAzSwlAgZpYSgQM0sJQIGaWEoEDNLCUCBmhBKBECSgAH/xAAyEAAAAwkAAQEFBwUAAAAAAAACBHEAAQUHEDQ1sbIDBhETFaPSEhQXM1RV0SAhQWJk/9oACAEBAAE/AByflh4QAGZhHuvef9Jn62/CeU/7d8419bfhPKf9u+ca+tp6+mfRvpv4OD0r4fdDH7371+b/AKPB+Y0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A0etiCD26s/smQUfIGj1sQQe3Vn9kyCj5A3qKOQvxvLkxmvZ5/A4XvA/YF/b2+x7v8N8bhf6r5Yv4b43C/wBV8sX8NPXz+IydIebwD+0ATx6B/T//xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAECAQE/ACT/xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAEDAQE/ACT/2Q==",g0=N.section`
  background: url(${dd}) center/contain no-repeat;
  position: absolute;
  top: 0;
  left: 200px;
  height: 652px;
  width: 975px;

  ${K} {
    height: 500px;
    width: 747px;
  }

  overflow: hidden;
  visibility: ${({isLoading:e})=>e?"hidden":"visible"};

  display: ${({isVisible:e})=>e?"block":"none"};
  z-index: ${({lastClicked:e})=>e==="about"?2:1};

  /*resize: both;
  overflow: auto; */

  > div {
    ${K} {
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
  }
`,m0=N.article`
  background: url(${hr}) center/cover no-repeat;
  height: 37px;
  width: 959px;
  margin: 0.5rem auto;
  cursor: grab;

  ${K} {
    height: 29px;
    width: 736px;
    margin: 0.35rem auto;
  }

  div {
    ${de({justify:"flex-start",align:"center"})};
    height: 37px;
    width: 165px;

    ${K} {
      height: 29px;
    }

    ${Se}
    cursor: auto;

    img {
      height: 28px;
      width: 28px;
      margin: 0 0.5rem;
      image-rendering: pixelated;

      ${Se}

      ${K} {
        height: 25px;
        width: 25px;
      }
    }

    p {
      font-size: 1.875rem;
      color: #fff;

      ${K} {
        font-size: 1.5rem;
      }
    }
  }
`,y0=N.article`
  position: absolute;
  top: 88px;
  left: 25px;
  padding-top: 5px;
  max-height: 550px;
  overflow: auto;

  ${K} {
    top: 80px;
    max-height: 400px;
    padding-top: 0;
  }

  p {
    font-size: 1.5rem;
    line-height: 40px;
    font-weight: 500;
    padding-right: 20px;
    margin-bottom: 1.2rem;
    ${Se}
    pointer-events: none;

    ${K} {
      font-size: 1.3rem;
      line-height: 30px;
      margin-bottom: 1rem;
      padding-right: 30px;
    }
  }

  ::-webkit-scrollbar {
    width: 62px;

    ${K} {
      display: none;
    }
  }

  ::-webkit-scrollbar-track {
    background: url(${f0}) center/contain no-repeat;
  }

  ::-webkit-scrollbar-thumb {
    background: url(${h0}) center/contain no-repeat;
  }

  ::-webkit-scrollbar-button:single-button {
    display: block;
    height: 39px;
    width: 37px;
  }

  ::-webkit-scrollbar-button:single-button:vertical:decrement {
    background: url(${p0}) center/contain no-repeat;
  }

  ::-webkit-scrollbar-button:single-button:vertical:increment {
    background: url(${d0}) center/contain no-repeat;
  }
`,v0=()=>{const{lastClicked:e,setLastClicked:t,isVisible:n}=Ie(),{isLoading:r}=gr();return v(Ct,{children:v(Mt,{handle:".handle",bounds:"body",cancel:".handle *",children:H(g0,{onMouseDownCapture:()=>t("about"),isLoading:r,lastClicked:e,isVisible:n.about,"data-no-select":"true",children:[v(mo,{iconName:"about"}),v(m0,{className:"handle",isVisible:n.about,children:H("div",{children:[v("img",{src:il,alt:"handleImg"}),v("p",{children:"About Me"})]})}),H(y0,{children:[v("p",{children:"From my earliest memories, computers have been my playground. What began as a fascination with gaming evolved into a passion for crafting digital experiences. Starting with the foundations of programming, I soon found myself immersed in game development and eventually navigating the vast world of web development."}),v("p",{children:"A quick learner and committed coder, I embrace each day as an opportunity for growth. Beyond proficiency, I value collaboration and respect for others` time—working seamlessly with senior developers."}),v("p",{children:"Every day is a new opportunity to learn and grow, and I seize it with both hands. My commitment to honing my skills is unwavering—I code daily, driven by the excitement of continuous improvement. Proficiency is just the beginning; I value your time and work harmoniously with senior developers."}),v("p",{children:"Beyond the screen, you`ll find me on the basketball or football court, exploring the latest movies, or immersing myself in the world of video games. This blend of enthusiasm, dedication, and a collaborative spirit defines my approach to coding. Let`s build something amazing together!"})]})]})})})},w0="/Portfolio/assets/github-9d54ac34.svg",x0="/Portfolio/assets/linkedIn-452b3bb0.svg",ll="data:image/png;base64,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",S0="/Portfolio/assets/contactModal-fa3d4ffe.jpg",k0=N.section`
  background: url(${S0}) center/contain no-repeat;
  position: absolute;
  top: 0;
  left: 250px;
  height: 620px;
  width: 998px;

  ${K} {
    height: 480px;
    width: 772px;
  }

  visibility: ${({isLoading:e})=>e?"hidden":"visible"};

  display: ${({isVisible:e})=>e?"block":"none"};
  z-index: ${({lastClicked:e})=>e==="contact"?2:1};

  > div {
    margin-top: 0.2rem;

    ${K} {
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
  }
`,C0=N.article`
  background: url(${hr}) center/cover no-repeat;
  height: 43px;
  width: 980px;
  margin: 0.5rem auto;
  cursor: grab;

  ${K} {
    height: 33px;
    width: 759px;
  }

  div {
    ${de({justify:"flex-start",align:"center"})};
    height: 44px;
    width: 160px;

    ${Se}
    cursor: auto;

    ${K} {
      height: 34px;
    }

    img {
      height: 33px;
      width: 33px;
      margin: 0 0.5rem;

      ${Se}

      ${K} {
        height: 30px;
        width: 30px;
        margin: 0 0.8rem;
      }
    }

    p {
      font-size: 1.875rem;
      color: #fff;
      margin: 0 0.5rem;

      ${K} {
        font-size: 1.7rem;
        margin: 0;
      }
    }
  }
`,E0=N.textarea`
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
  font-family: ${pr};
  height: 320px;
  width: 950px;
  position: absolute;
  top: 8.3rem;
  left: 1.5rem;
  padding: 15px;
  outline: none;
  resize: none;

  ${K} {
    font-size: 1.5rem;
    height: 240px;
    width: 720px;
    top: 6.5rem;
    padding: 10px;
  }
`,xA=N.div`
  position: absolute;
  left: 4rem;
  bottom: ${({bottom:e})=>e+"rem"};

  ${K} {
    bottom: ${({bottom:e})=>e-.5}rem;

    &:first-of-type {
      bottom: ${({bottom:e})=>e-1.2}rem;
    }
  }

  label {
    font-size: 1.5rem;
    margin-right: 1rem;
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
    font-family: ${pr};
    height: 47px;
    width: 544px;
    padding: 0 10px;
    outline: none;

    ${K} {
      font-size: 1.5rem;
      height: 35px;
      width: 400px;
      padding: 0 5px;
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
`,SA=N.button`
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
  font-family: ${pr};
  position: absolute;
  right: 2.15rem;
  bottom: ${({bottom:e})=>e+"rem"};
  cursor: pointer;

  ${K} {
    font-size: 1.5rem;
    height: 35px;
    width: 120px;

    bottom: ${({bottom:e})=>e-.5}rem;

    &#send {
      bottom: ${({bottom:e})=>e-1.2}rem;
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
`,D0=N.article`
  position: absolute;
  top: 4.3rem;
  right: 10.5rem;

  ${K} {
    top: 3.4rem;
    right: 8.5rem;
  }

  button {
    height: 44px;
    width: 47px;
    background-color: #c0c0c0;
    margin-left: 1rem;
    cursor: pointer;

    ${K} {
      height: 32px;
      width: 36px;
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
      ${Se}

      ${K} {
        margin-top: -2px;
        scale: 0.8;
      }
    }
  }
`,so={_origin:"https://api.emailjs.com"},I0=(e,t="https://api.emailjs.com")=>{so._userID=e,so._origin=t},gd=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class kA{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const md=(e,t,n={})=>new Promise((r,o)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:l})=>{const a=new kA(l);a.status===200||a.text==="OK"?r(a):o(a)}),i.addEventListener("error",({target:l})=>{o(new kA(l))}),i.open("POST",so._origin+e,!0),Object.keys(n).forEach(l=>{i.setRequestHeader(l,n[l])}),i.send(t)}),B0=(e,t,n,r)=>{const o=r||so._userID;return gd(o,e,t),md("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:o,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"})},P0=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},Q0=(e,t,n,r)=>{const o=r||so._userID,i=P0(n);gd(o,e,t);const l=new FormData(i);return l.append("lib_version","3.11.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",o),md("/api/v1.0/email/send-form",l)},M0={init:I0,send:B0,sendForm:Q0},T0=()=>{const{setIsOpen:e,isOpen:t}=Ie(),n=F.useRef(null),[r,o]=F.useState({name:"",email:"",message:""}),i=a=>{a.preventDefault();const s={}.VITE_APP_SERVICE_ID,u={}.VITE_APP_TEMPLATE_ID,p={}.VITE_APP_PUBLIC_KEY;n.current&&s&&u&&p&&r.name&&r.email&&r.message&&M0.sendForm(s,u,n.current,p).then(()=>{o({...r,name:""}),o({...r,email:""}),o({...r,message:`Thank you so much for reaching out! :) 

I'll get back to you as soon as possible! :)`}),setTimeout(()=>{o({...r,message:""})},3e3)},g=>{console.log(g.text)})};return H(Ct,{children:[H("form",{ref:n,onSubmit:i,onKeyPress:a=>{a.key==="Enter"&&i(a)},children:[v(E0,{name:"message",value:r.message,onChange:a=>{o({...r,message:a.currentTarget.value})}}),H(xA,{bottom:6.2,children:[v("label",{children:"Your name:"}),v("input",{type:"text",name:"from_name",autoComplete:"off",value:r.name,onChange:a=>{o({...r,name:a.currentTarget.value})}})]}),H(xA,{bottom:1.8,children:[v("label",{children:"Your email:"}),v("input",{type:"email",name:"email_id",autoComplete:"off",value:r.email,onChange:a=>{o({...r,email:a.currentTarget.value})}})]}),v(SA,{type:"submit",value:"Send",bottom:6.2,id:"send",children:"Send"})]}),v(SA,{onClick:()=>{e({...t,contact:!1})},bottom:1.8,children:"Cancel"})]})},O0=()=>{const{lastClicked:e,setLastClicked:t,isVisible:n}=Ie(),{isLoading:r}=gr();return v(Ct,{children:v(Mt,{handle:".handle",bounds:"body",cancel:".handle *",children:H(k0,{onMouseDownCapture:()=>t("contact"),isLoading:r,isVisible:n.contact,lastClicked:e,"data-no-select":"true",children:[v(mo,{iconName:"contact"}),v(C0,{className:"handle",isVisible:n.contact,children:H("div",{children:[v("img",{src:ll,alt:"handleImg"}),v("p",{children:"Contact"})]})}),H(D0,{children:[v("button",{children:v("a",{href:"https://github.com/JEKO10",target:"_blank",rel:"noreferrer",children:v("img",{src:w0,alt:"GitHub"})})}),v("button",{children:v("a",{href:"https://linkedin.com/in/aleksa-bubanja",target:"_blank",rel:"noreferrer",children:v("img",{src:x0,alt:"LinkedIn"})})})]}),v(T0,{})]})})})},uo="data:image/png;base64,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",j0="/Portfolio/assets/recycleBin-c6d23102.jpg",b0=N.section`
  background: url(${j0}) center/contain no-repeat;

  position: absolute;
  top: 0;
  left: 400px;
  height: 652px;
  width: 755px;

  ${K} {
    height: 500px;
    width: 578px;
  }

  visibility: ${({isLoading:e})=>e?"hidden":"visible"};

  display: ${({isVisible:e})=>e?"block":"none"};
  z-index: ${({lastClicked:e})=>e==="recycle"?2:1};
`,R0=N.article`
  background: url(${hr}) center/cover no-repeat;
  height: 33px;
  width: 741px;
  margin: 0.45rem auto;
  cursor: grab;

  ${K} {
    height: 25.5px;
    width: 569px;
    margin: 0.35rem auto;
  }

  div {
    ${de({justify:"flex-start",align:"center"})};
    height: 30px;
    width: 160px;

    ${K} {
      height: 25.5px;
    }

    ${Se}
    cursor: auto;

    img {
      height: 26px;
      width: 26px;
      margin: 0 0.5rem;

      ${Se}

      ${K} {
        height: 20px;
        width: 20px;
      }
    }

    p {
      font-size: 1.5rem;
      color: #fff;

      ${K} {
        font-size: 1.3rem;
      }
    }
  }
`,U0=()=>{const{isOpen:e,setIsOpen:t,lastClicked:n,setLastClicked:r,isVisible:o,setIsVisible:i,isClicked:l,setIsClicked:a}=Ie(),s=F.useRef(null),{isLoading:u}=gr(),p=h=>{var k;switch((k=s.current)==null||k.focus(),h.detail){case 1:a({...l,book:!0});break;case 2:t({...e,book:!0}),i({...o,book:!0}),a({...l,book:!0});break;default:a({...l,book:!0});break}},g=h=>{h.key==="Enter"&&(t({...e,book:!0}),i({...o,book:!0}))};return Zs(s,()=>{a({about:!1,work:!1,contact:!1,recycle:!1,book:!1})}),v(Ct,{children:v(Mt,{handle:".handle",bounds:"body",cancel:".handle *",children:H(b0,{onMouseDownCapture:()=>r("recycle"),isLoading:u,lastClicked:n,isVisible:o.recycle,"data-no-select":"true",children:[v(mo,{iconName:"recycle"}),v(R0,{className:"handle",isVisible:o.recycle,children:H("div",{children:[v("img",{src:uo,alt:"handleImg"}),v("p",{children:"Recycle Bin"})]})}),H(e0,{iconName:Nr,isClicked:l.book,onMouseDown:h=>p(h),onKeyDown:h=>g(h),ref:s,tabIndex:0,children:[v("img",{src:Nr,alt:"book"}),v(Bi,{isClicked:l.book,iconName:Nr}),v("p",{children:"???"})]})]})})})},K0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAABgFBMVEUAAACAgIAAAAAAAAAAAAB/f3+AgIAAAAAAAACmpqZNTU2AgIAaGhqAgIAAAACJiYkrKyuQkJCAgICBgYF/f3+7u7s8PDwAAAAxMTEAAAAjIyOHh4cAAACBgYFubm4AAAB/f3+BgYHAwMCAgIAAAP8AAAAAAIAwMDD39/e4uLjv7+8gICCgoKAYGBgAAJ+IiIj////IyMjf39+YmJgAACCwsLAAYP8AP//Pz8+QkJAA//8AIP8An/+oqKjn5+cAAK8AAJBgYGAAEP+srKwAf/8AAM4gIIA7OzsQEBAAv/8AAO8AAN+8vLx4eKhPT4FQUFAA3/8AMP8AL/+0tLRISJhwcIDZ2dnExMQAAL+oqLgwMJBAQIB8fHxwcHAAFSAAb/8AUP8ICNcAANdsbKykpKRmZqIgIKBUVJx0dIwQEIAAABS/v/8Aj/9/f/9ff/8vn88//7+cnLQkJLRQf68wMK+MjJQYGIhcXIQwMIC/v2+fn2Cvv09ISEj//z/f3yD//wD1HQcjAAAAInRSTlMAfx+/XyDfnxDv77+fT0Dfv6efXxDv79/Pz6+Pf29vT0A/qj5zEQAAAvhJREFUSMe9lfdX2lAcRxkRcLfV7k14D0JpWWVECFMFFcEqjjpqh9Xuvee/3s8j9YEJJOSc1vuDfklyz8u7BLAdMmlvM2qzwIDY5lTf1mWXa1xqM+hyDfez1sDAxXBY9rYph8PjOGomukQx5NUi4Y6vG2rX7Ke93nRsXSPWQqHQSbtRMLsYjICoV48sGgWDGIhGo8FAYE0r1iRpDwoP5tKJuAhiDL7WRaYwrJo6IdikVgSxSASTHiyq8GlCL6JQC92qoRZlTGqwCa0IosiU9uqJi2KcT8NHxB8VGfeznk6nc8FgTCuuJBKKLMvqNDg82iHerK7GUQFTLhDI9cikrGCQyuIVR4f4jG6JYli9aK1HJuJXC/mJo0Pc2N/aqmP7UvdMKzgFsRzSird9G5Q+xdFE90wKTkGMi3pxfmHhwezs7BNZDmkz7clymIk3ZLGLCOYLhUJ9dfXjkUx4oV4PUewhMm5R+qUzU0QEBuK95B1VnMnn9+v1z4qi1JApl8uZiVPTTFPddiZgJqYyzEnOYWGeiYsme8xkfLtLKZ+vlPmbqV9xbsnXIjmVUjP1K+5mWaFScjq7bEUEGRTCnyxGa2Ip9er51+/IZFEELyM/f+GfJXGaJRF/v1licXC/fYv3s8ul5Ptvr7MsTimbPI44L+bQBYXw+Kji/3wAPlG64QOsUL9Vo2mcPWg2383MPGSFWlIpmeol7jROuD0Q+Yf2MaUFvprB21Ekgvq9WqnE43F8aN8uLj7K5/PzJiv6zwkOVaxW8VLyMu5SShdM9kictkMchJAd/nu+SWm+p4gutjYet9s91GhsK0qZbbXZ/IBMXcUqutiOcpaQCs+0iExdRYIuGq4KwgW/n2WSsFU1U0EnnkcXPZcIYZkSPBPViU691c5U5D+imxZEp9M5VCxuJxJs3YNNvWiAkxA/z2RFHBOEEZ7JiggEnslANMnExQYOGBr6TLB2isUzOGAk6DMx/IRoHzXzTIwRQRizIKqZGILNKh5HC4/t3/EHgr9ltf6oVWkAAAAASUVORK5CYII=",al="data:image/png;base64,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",z0="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAAGASYDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACoIAAAAAAAAAAAAAAAAAB//8QAGxAAAAcBAAAAAAAAAAAAAAAAAAQGCBlWldT/2gAIAQEAAT8Ahda5fV/qEeMQutcvq/1CPGIXWuX1f6hHjELrXL6v9QjxiF1rl9X+oR4xC61y+r/UI8Yhda5fV/qEeMQutcvq/wBQjxiF1rl9X+oR4xC61y+r/UI8Yhda5fV/qEeMQutcvq/1CPGIXWuX1f6hHjELrXL6v9QjxiF1rl9X+oR4xC61y+r/AFCPGIXWuX1f6hHjELrXL6v9QjxiF1rl9X+oR4xC61y+r/UI8Yhda5fV/qEeMQutcvq/1CPGIXWuX1f6hHjELrXL6v8AUI8Yhda5fV/qEeMQutcvq/1CPGIXWuX1f6hHjELrXL6v9QjxiF1rl9X+oR4xC61y+r/UI8Yhda5fV/qEeMQutcvq/wBQjxiF1rl9X+oR4xC61y+r/UI8Yhda5fV/qEeMQutcvq/1CPGIXWuX1f6hHjH/xAAUEQEAAAAAAAAAAAAAAAAAAABQ/9oACAECAQE/ABf/xAAUEQEAAAAAAAAAAAAAAAAAAABQ/9oACAEDAQE/ABf/2Q==",N0="data:image/jpeg;base64,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",L0=N.section`
  ${de({justify:"center",align:"flex-start"})};
  flex-direction: column;
  background: url(${N0}) center/contain no-repeat;
  height: 475px;
  width: 337px;
  position: absolute;
  bottom: 2.81rem;
  padding: 6px 6.21px 8px 3.5px;
  transform: ${({isOpen:e})=>e?"translateY(0)":"translateY(110%)"};
  transition: transform 500ms ease;
  z-index: 10;

  ${K} {
    height: 300px;
    width: 212px;
    transform: ${({isOpen:e})=>e?"translateY(0)":"translateY(120%)"};
  }

  > img {
    display: block;
    margin: 0 auto;

    ${K} {
      width: 204.5px;
    }
  }

  img,
  p {
    ${Se}
  }
`,CA=N.article`
  ${de({justify:"flex-start",align:"center"})};
  height: 91px;
  width: 100%;
  padding: 20px 25px;
  transition: all 200ms ease;

  ${K} {
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

      ${K} {
        padding: 10px 15px 5px;
      }
    }
  }

  img {
    height: 56px;
    width: 56px;

    margin-right: 1.8rem;
    image-rendering: pixelated;

    ${K} {
      height: 39px;
      width: 39px;
      margin-right: 1rem;
    }
  }

  p {
    font-size: 1.8rem;

    ${K} {
      font-size: 1.4rem;
    }
  }
`,G0=()=>{const{isOpen:e,setIsOpen:t,setIsVisible:n,isVisible:r,setIsShutDown:o,setIsShuttingDown:i}=Ie(),l=[{name:"about",src:il,alt:"aboutStart",label:"About Me"},{name:"work",src:al,alt:"workStart",label:"My Work"},{name:"contact",src:ll,alt:"contactStart",label:"Contact"},{name:"recycle",src:uo,alt:"RecycleStart",label:"Recycle Bin"}],a=()=>{i(!0),setTimeout(()=>{o(!0)},3e3)};return H(L0,{isOpen:e.start,"data-no-select":"true",children:[l.map(s=>H(CA,{onClick:()=>{t({...e,[s.name]:!0,start:!1}),n({...r,[s.name]:!0})},children:[v("img",{src:s.src,alt:s.alt}),v("p",{children:s.label})]},s.name)),v("img",{src:z0,alt:"StartDash"}),H(CA,{onClick:a,children:[v("img",{src:K0,alt:"ShutDownStart"}),v("p",{children:"Shut Down"})]})]})},F0="/Portfolio/assets/timeModal-913616f4.jpg",Y0=N.section`
  background: url(${F0}) center/cover no-repeat;
  position: absolute;
  top: 0;
  left: 200px;
  height: 486px;
  width: 576px;

  visibility: ${({isLoading:e})=>e?"hidden":"visible"};

  z-index: ${({lastClicked:e})=>e==="time"?2:1};

  p {
    ${Se}
  }
`,J0=N.article`
  background: url(${hr}) center/cover no-repeat;
  height: 26px;
  width: 567px;
  cursor: grab;

  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
`,H0=N.p`
  position: absolute;
  bottom: 30%;
  right: 20%;
  user-select: none;
  pointer-events: none;
  letter-spacing: 1px;
`,Z0=N.p`
  position: absolute;
  top: 7.25rem;
  left: 10.7rem;
  font-size: 1.3rem;
  user-select: none;
`,V0=N.p`
  position: absolute;
  top: 7.35rem;
  left: 3rem;
  font-size: 1.1rem;
  user-select: none;
`,W0=N.p`
  font-family: ${pr};
  font-weight: 600;
  position: absolute;
  bottom: 4.95rem;
  left: 9.5rem;
`,EA=N.button`
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
  font-family: ${pr};
  position: absolute;
  bottom: 1.1rem;
  right: ${({right:e})=>e+"rem"};
  cursor: pointer;

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
`,X0=()=>{const{isOpen:e,setIsOpen:t}=Ie();return H("article",{children:[v(EA,{onClick:()=>t({...e,time:!1}),right:15.5,children:"OK"}),v(EA,{onClick:()=>t({...e,time:!1}),right:8.2,children:"Cancel"})]})},q0=N.div`
  width: 181px;
  height: 181px;
  border-radius: 50%;
  position: absolute;
  top: 42%;
  left: 73%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  text-align: center;
  background: url("/src/assets/images/other/clock.png") center/cover no-repeat;

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
`,_0=N.div`
  position: absolute;
  width: 75px;
  height: 55px;
  background: url("/src/assets/images/other/bigNeedle.png") center/contain
    no-repeat;
  top: 26%;
  left: 28.5%;
`,$0=N.div`
  position: absolute;
  width: 75px;
  height: 70px;
  background: url("/src/assets/images/other/bigNeedle.png") center/contain
    no-repeat;
  top: 19.5%;
  left: 29%;
  z-index: 2;
`,ey=N.div`
  position: absolute;
  width: 2px;
  height: 75px;
  background: url("/src/assets/images/other/seconds.png") center/cover no-repeat;
  top: 8.5%;
  left: 49.5%;
  transform-origin: bottom;
`,ty=()=>{const[e,t]=F.useState(new Date);F.useEffect(()=>{const r=setInterval(()=>{t(new Date)},1e3);return()=>clearInterval(r)},[]);const n=r=>({transform:`rotate(${r}deg)`});return H(q0,{children:[v(_0,{style:n(e.getHours()*30)}),v($0,{style:n(e.getMinutes()*6)}),v(ey,{style:n(e.getSeconds()*6)})]})},ny=({time:e})=>{const t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=e.toLocaleDateString("en-US",{timeZoneName:"longGeneric"}),r=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0});return H(Ct,{children:[H("article",{children:[v(V0,{children:t[e.getMonth()]}),v(Z0,{children:e.getFullYear()}),v(W0,{children:n.split(", ")[1]})]}),H("article",{children:[v(ty,{}),v(H0,{children:r})]})]})},ry=()=>{const{lastClicked:e,setLastClicked:t}=Ie(),[n,r]=F.useState(new Date),{isLoading:o}=gr();return F.useEffect(()=>{const i=setInterval(()=>{r(new Date)},1e3);return()=>{clearInterval(i)}},[]),v(Ct,{children:v(Mt,{handle:".handle",bounds:"body",children:H(Y0,{onMouseDownCapture:()=>t("time"),isLoading:o,lastClicked:e,"data-no-select":"true",children:[v(J0,{className:"handle"}),v(ny,{time:n}),v(X0,{})]})})})},oy="/Portfolio/assets/workModal-d51c54ee.jpg",iy=N.section`
  background: url(${oy}) center/contain no-repeat;

  position: absolute;
  top: 0;
  left: 300px;
  height: 652px;
  width: 756px;

  ${K} {
    height: 500px;
    width: 579px;
  }

  visibility: ${({isLoading:e})=>e?"hidden":"visible"};

  display: ${({isVisible:e})=>e?"block":"none"};
  z-index: ${({lastClicked:e})=>e==="work"?2:1};

  > div {
    height: 45px;
    width: 115px;

    ${K} {
      height: 37px;
      width: 95px;
    }

    button {
      height: 19.5px;
      width: 22.5px;

      ${K} {
        height: 14px;
        width: 17px;

        img {
          scale: 0.7;
        }
      }
    }
  }
`,ly=N.article`
  background: url(${hr}) center/contain no-repeat;
  height: 28px;
  width: 742px;
  margin: 0.55rem auto;
  cursor: grab;

  ${K} {
    height: 21px;
    width: 569px;
  }

  div {
    ${de({justify:"flex-start",align:"center"})};
    width: 140px;

    ${Se}
    cursor: auto;

    ${K} {
      height: 19px;
    }

    img {
      height: 26px;
      width: 26px;
      margin: 0 0.7rem;

      ${Se}

      ${K} {
        height: 20px;
        width: 20px;
      }
    }

    p {
      font-size: 1.5rem;
      color: #fff;

      ${K} {
        font-size: 1.3rem;
      }
    }
  }
`,ay=N.div`
  ${de({justify:"center",align:"center"})};
  flex-direction: column;

  position: absolute;
  top: ${({top:e})=>e+"rem"};
  left: ${({left:e})=>e+"rem"};

  cursor: pointer;

  ${ol}

  ${K} {
    ${({alt:e})=>e==="walkmate"&&`
    top: 11.5rem;
    left: 13rem;
  `}

    ${({alt:e})=>e==="moviexd"&&`
    top: 11.5rem;
    left: 25rem;
  `}

  ${({alt:e})=>e==="travel"&&`
    top: 20rem;
    left: 12rem;
  `}

  ${({alt:e})=>e==="basket"&&`
    top: 20rem;
    left: 23.5rem;
  `}
  }

  img {
    height: 100px;
    width: 100px;

    ${K} {
      height: 80px;
      width: 80px;
    }
  }

  p {
    color: ${({isClicked:e})=>e?"#fff":"#000"};

    ${K} {
      font-size: 1.3rem;
    }
  }
`,DA="data:image/png;base64,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",sy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAr0SURBVHgB7Vw/aBtpFn/x2bfaIFgFvI6SDewQllhHiqgI2J0Fe4W6CPYg6Twqr0p1oC7ezs0V7nKVJ10WNnEMKdQcyJAiLoLHEGMlOGEECRmbHEjgQt5z8L7fmxl5ZjQjjeTEkTV68DGf5nvzR0/vvd/7MyOiEY1oRGeYztEZoIWFhRxv5nk84HmFBojG6GyQwkO1twNFAy9A1rijdDq9nMvl6Pnz58u864gGiMZpQMk2W+XGjRuUSqXo4sWLNDs7K2vlclnljcGjQiMKJhagBu1z0/b29lGlUoEGYizTANBfaMAImsd0b2ZmJnfz5s0Um29rbXx8XLRxYmKCpqamUizQLO9ukKWNX4UG0YQVHioEl81mPQsQHiifz7f4eKzRiCyCya6srBxFoQ8fPog5szAdk/4qdCIN5C+s0mckAIaiKJF4E4nEQADLiQJpaAx9Rrp37x71StVqlXZ3dwlhDpPGo0inSH1poK15c7du3aKTkGEYtLm52VHziqurrfk88+V8fPCV8I2lUolev36de/z4MdD5AZ2SJvZrwjke834n3w9BgBBe2Lk0XT++6I8/tq2fKWCB5sFsNzY2bFdO7Mzz4syxxWfMq9WSzLe3S/I5iK8bYKi8RnARwm0PlQcNFrBEjgMhvMuXL89dvXo1qygG//I6meYBNZtpduim8GA+Pr4vnzEHYX54mGzx1et1Pi7B89uiee44D2Tw+hP2a1AhA9qVyYhaFXjwEtUvsJrVrbnf6g8PD2XbaDQEZHZ2dmr8ESpq0Ncmr8aoPWmbm29lpXDkzzDctMzaLZqHra15queqlhaqargmnmbG0lUDoXmMcHcZMFjzaqx5S6JB79//nX744Xfh2d3Ni3al02Xe/w/Zhzm0Dmvgg+atr2f4+AL7u7k2zQMBMETz2B+qrF53WYsAIaxstEkWKmAOlaxz/LD5AD6wXRNPM2OJUo3J8VDh5BUFP6jGwkixEPMiJAgOc0eAmB8cpFsCdPhw77qe5S92oyNgVGCbvJ5jAaj2foOs+MRwGHnBYDzReGet1n4eCA8/EIDl2rVrCn3BUlhoHGiHKssIVawvfE6E8epViaanF0Uoa2sV2eIzm6ho29xcro3v118XJFQpFAqB1yo+eUIaozF1iQM1sqqqnpsuWgtHIZBhmibfyytaXFxEsI3vRX1QEcWNoIVQE2azhdQKGXbi+DVNc/2LA4bK1/J7fJWOUQBbmDDMWqH+gOXjx4+y5WKF3E+Uoet6/cWLF3wV0ikq+UOW0wAM2Xd05AldgvadFFjUTowBBH4KCYsia2Ai8U/Z/yUAQ9SGtQLuTPa5+Nz7VB53ibzAoulUX1qn5bsZQjYXlkq7gQVa+ejRI/68yvyrbOJ/433/pWTy3xKavX8/QZOT/+LvUWMfe4HevXvKvFV2U6L4Hk2MXNL/koBBdjahUXv+5d6Xs4VI5AKWNQMnI1UlstLhYHIDC+YaI1CtpslZ4CcbDZ0sgNTlM+bNZlnm6XST7K+By89RFOrXhKOWpMTtq5b5ac6+INMMG8ts9rRwpGkbASZnnd+652rbuj9j6e6K8L0oMK6MbMLN5n9OBhgGEYOtKBsGwo+UYu3HZ46MxDRTNr/flD3EGqfU6lRQUoz6Cl8v5blGo1Hnc9bpl18ss00mk57D/cByeLjD4JJsmb8fIN+82ef1fapUZBmqukrdqNe8tytgLFtaoWnt+0jrom3+wZqnqiuh1yiVtm0L6UxeYLHOHmRd9+/nT66Br14dyP6+AKNoaUUuV6Offx5nnoTsh+bBtzRqOhkP1nE16kiseSSAMcPnOtY8/zXy+QTHoGmP5iHoXlriS7hCUS+wJBlYduj77/c5ZtU9ALm7q4dqYGQQORFgaCh8NvmLWQ7ZIZgMnL8C29MihFgtwMiKAMOuMT2daPsh19YsHjd5gSUr6wARP0B+841JPVMUE+5akurizP0E0yQ2zc8JGFHNuhOwdDLhyAVV/CLQvIsXywIWppmV9MzKUkwfb5O1UtJ+B/752GYbn5/yeT5X6hzp0EaFLEThaWqzRoqcp9E6R5RrlMsmIUO0IqUD+7jge8Cx7h6LppX5GJOraWUGp/D7jixA5LZQ50xmkZGuwDdW4NS10Mo13YQbX1ysir+xfE5OfCVGJyqVMnKsXly18jQIZoFEeDgPUNG5VJRrFIsVER7WFQX+Nd12rw5BEeDvb9++Lf2VXK7MrkLnY3UE0KEkebnr6Sc3KbgrhCTwFRAUvgAKqYahSEUGPg+/nF8wjnbAxwEogoAljFqaxce2NNAuWeE+EHZEvQaEHHRsEGHN4cFA4QH+EMG0E3rZdQiNXI0rR4AqDcijEl+bnKgDBCGiigMNhiYHCbCnZvYw0zKjDYvjiEturXg2oMfSHgeyvS9cuHCBk+dJjoueyTDNtETniUTZKhfxSCZ/Z3U2JWIfRr43b95ImxUElwQ/CPcEc3b1WLDcHgfiADjXen1JtBPz3d3fZG6av9mOtyjrw8oHAaHgC1k84XwQ+w4ODlrAgr5zEJ2DumYyJueUhoQpCB6/+05vzRFEAjwajWxrPox81Wqag21FhKejUlSpiC+cnp4WoUIblziV4ea9wc37CtnNe9FAnNCfYUQtXQ0LH6KLMOrYY4EG3r9/v6/m+DDxOcMBDPc+gIlDfmABiCjnz5+vf/r0Sfn2W+Spqa69DlCUnshZ4puY2Jf5s2fPBCygbSh7wTcCYFGYsAqvDdrf32/xjbEGFvf29h7gKadqdVYyDmQbVtRfki0+Yw7VxxwXGjY+pKhugjz8aR+Axb/PE0jncgY7zeEHjE58qMisryckpEFefOfOnVaGAuEBYBBgv337VmNAWfOUs3DyOABGJ75MJiEpKgTljguPiximCBDC44/amFdFS9IsR3McwsQc6ITPmOOXwrxezw4tHwrFYYTgmlM7zbZcbK2KtFN9/umnd1xl3hl6wOjEd3CAgkOKnj59SleuXJFA+uXLlzIAHNSpIg1HGgfA6MQHDIDQHNMFmDx8+FCKCkHkgIgCRbx+fWt+YuL/uZmZZuwyET/fpUtlAQ+rnGdIlw8dP/JVY8ZsARp4eGZr63oN/Y04ZiJ+PkcDASYQXtjTzIFNpbgARic+PMUV9jSZmzxtTQYTKaTPzFRjl4n4+ba2xiVkgQ+ES0zzUuS2ZhwzET9fVPI8q2g/RDh/504ztpmIswYsQEmLCy0dS/qBGhjnTOSYL916B6VnGpW4LD6uQtt9kh6fzkKfZHJyn4NKqyEap0zEzddoGPTuHVrnaN02nf5w96ezrE5dIVbaFsS3sZGVDh0XF0K7cufCBIhm9OxsM7aZCPhQjHn+PNHqk9ikUTcQcdQ4zpkI5giq+6KRCXv5OjbWgwSIPsnk5P/qf/zxVwUPISaTH2Nd4lpbQ9uzVcrv9RHfbGzDGIcPj/9SLyDiCBDMABIAShyb7c68VCozkPQIIg7Bkca12e7wOabdE41MOJoJd31K/9KlBP8S8cxEHL6trX1pppvWcm9P6Tuvrsa5xKUoWQqrrXYCEQWKODU1NT82NpZD0z2uJS4njIlczrIFKH2Svb29GiqzcS5x9fWeiEuQmvXIa3wzkb5e9XLI6ZPgkYe4ZiJ41ateN+lEr3rFudkOHxlGkV+0qVYX5Y0dFBXrdfgPXR7atraL7DN0wmsYpjl8fEH/DOJQ139vcxpN8spQzCn0RZuIdCr/RTXg1CavXv69TaMRjWhEIxou+hNYev+3Q9KSdwAAAABJRU5ErkJggg==",Ko=({top:e,left:t,alt:n,label:r,link:o,isClicked:i,setIsClicked:l})=>{const a=i0(),s=F.useRef(null),u=g=>{var h;(h=s.current)==null||h.focus(),l({walkmate:!1,moviexd:!1,travel:!1,basket:!1}),l(k=>({...k,[g]:!0}))},p=(g,h)=>{g.key==="Enter"&&window.open(h,"_blank")};return Zs(s,()=>{l({walkmate:!1,moviexd:!1,travel:!1,basket:!1})}),H(ay,{top:e,left:t,alt:n,isClicked:i[n],onMouseDown:()=>u(`${n}`),onDoubleClick:()=>window.open(`https://github.com/JEKO10/${o}`,"_blank"),onKeyDown:g=>p(g,`https://github.com/JEKO10/${o}`),tabIndex:0,ref:s,children:[v("img",{src:DA,alt:n}),v(Bi,{isClicked:i[n],iconName:a>1440?DA:sy}),v("p",{children:r})]})},uy=()=>{const{lastClicked:e,setLastClicked:t,isVisible:n}=Ie(),[r,o]=F.useState({walkmate:!1,moviexd:!1,travel:!1,basket:!1}),{isLoading:i}=gr();return v(Ct,{children:v(Mt,{handle:".handle",bounds:"body",cancel:".handle *",children:H(iy,{onMouseDownCapture:()=>t("work"),isLoading:i,isVisible:n.work,lastClicked:e,"data-no-select":"true",children:[v(mo,{iconName:"work"}),v(ly,{className:"handle",isVisible:n.work,children:H("div",{children:[v("img",{src:al,alt:"handleImg"}),v("p",{children:"My Work"})]})}),H("article",{children:[v(Ko,{top:15,left:18,alt:"walkmate",label:"WalkMate.doc",link:"WalkMate",isClicked:r,setIsClicked:o}),v(Ko,{top:15,left:34,alt:"moviexd",label:"Moviexd.doc",link:"Moviexd",isClicked:r,setIsClicked:o}),v(Ko,{top:26,left:16.5,alt:"travel",label:"Travel advisor.doc",link:"Travel-advisor",isClicked:r,setIsClicked:o}),v(Ko,{top:26,left:32,alt:"basket",label:"Basket report.doc",link:"BasketReport",isClicked:r,setIsClicked:o})]})]})})})},Ay=()=>{const{isOpen:e}=Ie();return H("section",{children:[e.about&&v(v0,{}),e.contact&&v(O0,{}),e.work&&v(uy,{}),e.recycle&&v(U0,{}),e.book&&v(c0,{}),e.time&&v(ry,{}),v(G0,{})]})},cy=()=>{const{isClicked:e,setIsClicked:t,isOpen:n,setIsOpen:r,isVisible:o,setIsVisible:i}=Ie(),l=F.useRef(null),a=[{name:"about",src:il,alt:"aboutIcon",label:"About Me"},{name:"work",src:al,alt:"workIcon",label:"My Work"},{name:"contact",src:ll,alt:"contactIcon",label:"Contact"}],s=(p,g)=>{var h;switch((h=l.current)==null||h.focus(),p.detail){case 1:t({about:!1,work:!1,contact:!1,recycle:!1,book:!1}),t(k=>({...k,[g]:!0})),r({...n,start:!1});break;case 2:r({...n,[g]:!0}),i({...o,[g]:!0}),t({...e,[g]:!0});break;default:t({...e,[g]:!0});break}},u=p=>{p.key==="Enter"&&Object.keys(e).forEach(g=>{e[g]===!0&&(r(h=>({...h,[g]:!0})),i(h=>({...h,[g]:!0})))})};return Zs(l,()=>{t({about:!1,work:!1,contact:!1,recycle:!1,book:!1})}),H(Ct,{children:[v(Xm,{children:a.map(p=>H(qm,{isClicked:e[p.name]||!1,onMouseDown:g=>{s(g,p.name)},onKeyDown:g=>u(g),tabIndex:0,ref:l,children:[v("img",{src:p.src,alt:p.alt}),v(Bi,{isClicked:e[p.name]||!1,iconName:p.src}),v("p",{children:p.label})]},p.name))}),H(_m,{isClicked:e.recycle,onMouseDown:p=>{s(p,"recycle")},onKeyDown:p=>u(p),tabIndex:0,ref:l,children:[v("img",{src:uo,alt:"recycleIcon"}),v(Bi,{isClicked:e.recycle,iconName:uo}),v("p",{children:"Recycle Bin"})]})]})},yd="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAA0AAQDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACv4AAB/8QAGhAAAAcAAAAAAAAAAAAAAAAAAAQGCTiFtf/aAAgBAQABPwBr2DCHs9M2GvYMIez0zYa9gwh7PTNhr2DCHs9M2GvYMIez0zYa9gwh7PTNhr2DCHs9M2P/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AH//2Q==",fy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAbBAMAAAA5TErMAAAAGFBMVEXDw8MAAAD///+CgoIAAP//AAD//wAA/wB0PQ6UAAAApUlEQVQoz83STQrCMBDF8Rm8wPuDH1vRI3iBCjlAXeQAbty78vombagVmnTbRxeB96MzpLVLO7KztbLbFHDUBA6oClLDgTeD0xIQRD4JDA9WwjSCFdCn84NTbsd1HcpWBfSRnKEc3+EJzUbEyJ4nloJyDXL9QGdG4EUZTCb/oAsFsAwsBO4c60Bm05Iol4Dnw+yilMr6txgv2G3rf1QdXG/NyGhHX0hoIViJRS7xAAAAAElFTkSuQmCC",dy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAbBAMAAAA5TErMAAAAGFBMVEXDw8MAAAD///+CgoIAAP//AAD//wAA/wB0PQ6UAAAAwElEQVQoz6WSSQrDMAxFLbD3+jTDNvQEhZ7A0At40QP0CL3/phow3iQKbT8mWMnjWShOiLOlyz3KTYAURgGOIgCdGqJ8YwBiAySHBpKFtoKN2zEQEea2vjmRLnl4iHsPhCPADUX2M2CAtwuwd+WGUkrTku2jOwTibhDi2VAXsJ2mGqhl9JDl/VSXF/vB3TB6yDlXB4gHMAyieNQJMGDXYIOS9EEhaWEbM9igtOTDf0GAVf/fh18NUcTAZ9f+Gmf7ADkRIjjYXV2mAAAAAElFTkSuQmCC",py="data:image/jpeg;base64,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",hy=N.section`
  ${de({justify:"space-between",align:"flex-end"})}
  background-image: url(${py});
  position: absolute;
  bottom: 0;
  height: 45px;
  width: 100%;
  padding: 0 10px;
  z-index: 3;

  article {
    ${de({justify:"center",align:"center"})};
    margin-bottom: 3px;
  }

  img {
    ${Se}
  }
`,gy=N.button`
  height: 35px;
  width: 82px;
  background: ${({isOpen:e})=>e?`
     url(${dy})
  `:`url(${fy})`};
  background-repeat: no-repeat;
  background-size: contain;
`,my=N.div`
  ${de({justify:"flex-start",align:"center"})};
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
      transform: ${({iconName:e})=>e==="name"?"translate(2px, 1px)":"translate(-4px, 1px)"};
    }
  }

  img {
    height: 31px;
    width: 31px;
    margin-left: 10px;
    scale: 0.8;
    transform: translate(-10px, 0);
  }

  p {
    font-size: 1.5rem;
    margin-left: 0.2rem;
    transform: ${({iconName:e})=>e==="name"?"":"translate(-5px, 0)"};
    cursor: auto;

    ${Se}
  }
`,vd=N.img`
  height: 35px;
  margin: 0 5px;
`,yy=()=>{const{setIsOpen:e,isOpen:t}=Ie();return v(gy,{isOpen:t.start,onMouseDown:()=>{e({...t,start:!t.start})}})},IA=({iconName:e,imgSource:t,label:n})=>{const{isVisible:r,setIsVisible:o}=Ie();return H(my,{onClick:()=>o({...r,[e]:!r[e]}),iconName:e,children:[t&&v("img",{src:t,alt:n}),v("p",{children:n})]})},vy="data:image/png;base64,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",wy=N.div`
  ${de({justify:"center",align:"center"})};
  margin-bottom: 3px;
`,xy=N.div`
  ${de({justify:"space-between",align:"center"})};
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
  }
`,Sy=N.p`
  font-size: 1.4rem;
  user-select: none;
`,ky=()=>{const{setIsOpen:e,isOpen:t}=Ie(),[n,r]=F.useState(new Date);F.useEffect(()=>{const i=setInterval(()=>{r(new Date)},1e3);return()=>{clearInterval(i)}},[]);const o=n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1});return H(wy,{children:[v(vd,{src:yd,alt:"dash"}),H(xy,{onClick:()=>{e({...t,time:!t.time})},children:[v("img",{src:vy,alt:"toolButton"}),v(Sy,{onClick:()=>e({...t,time:!t.time}),children:o})]})]})},Cy=()=>{const{isOpen:e}=Ie(),t=[{iconName:"about",imgSource:il,label:"About me",isVisible:e.about},{iconName:"work",imgSource:al,label:"Work",isVisible:e.work},{iconName:"contact",imgSource:ll,label:"Contact",isVisible:e.contact},{iconName:"recycle",imgSource:uo,label:"Recycle Bin",isVisible:e.recycle},{iconName:"book",imgSource:Nr,label:"Book",isVisible:e.book}];return v(Ct,{children:H(hy,{"data-no-select":"true",children:[H("article",{children:[v(yy,{}),v(vd,{src:yd,alt:"dash"}),v(IA,{iconName:"name",imgSource:"",label:"Aleksa Bubanja"}),t.map(n=>n.isVisible&&v(IA,{iconName:n.iconName,imgSource:n.imgSource,label:n.label},n.iconName))]}),v(ky,{})]})})},Ey=()=>{const[e,t]=F.useState(!1),[n,r]=F.useState(!1),[o,i]=F.useState({x:0,y:0}),[l,a]=F.useState({x:0,y:0}),{isClicked:s,setIsClicked:u,setIsOpen:p,isOpen:g}=Ie(),h={about:{x:30,y:35,height:140,width:116},work:{x:30,y:215,height:140,width:116},contact:{x:30,y:395,height:140,width:116},recycle:{x:1390,y:513,height:140,width:116}};return H(Xg,{className:"home",onMouseDown:M=>{const c=M.clientX,A=M.clientY;if(!M.target.closest("[data-no-select='true']")){for(const x in h){const I=h[x];if(c>=I.x&&c<=I.x+I.width&&A>=I.y&&A<=I.y+I.height)return}M.preventDefault(),t(!0),r(!0),i({x:c,y:A}),a({x:c,y:A}),p({...g,start:!1})}},onMouseUp:()=>{t(!1),r(!1)},onMouseMove:M=>{if(e){a({x:M.clientX,y:M.clientY});const c={x:Math.min(o.x,l.x),y:Math.min(o.y,l.y),width:Math.abs(l.x-o.x),height:Math.abs(l.y-o.y)},A={};for(const d in h){const x=h[d];x.x<c.x+c.width&&x.x+x.width>c.x&&x.y<c.y+c.height&&x.y+x.height>c.y?A[d]=!0:A[d]=!1}u({...s,...A})}},children:[n&&v("div",{style:{position:"absolute",border:"2px solid gray",pointerEvents:"none",top:`${Math.min(o.y,l.y)}px`,left:`${Math.min(o.x,l.x)}px`,width:`${Math.abs(l.x-o.x)}px`,height:`${Math.abs(l.y-o.y)}px`}}),v(cy,{}),v(Ay,{}),v(Cy,{})]})},Dy="/Portfolio/assets/preloader-fe69a455.jpg",wd=N.div`
  ${de({justify:"center",align:"center"})};
  background-image: url(${Dy});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;

  p {
    font-size: 2rem;
    color: #163394;
    font-weight: 700;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translate(-50%);
    user-select: none;
  }

  @media (max-width: 1200px) {
    background-position: -100px;
    background-size: 120% 100%;
  }
`,xd=N.div`
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
`,Iy=()=>v(Ct,{children:v(wd,{children:v(xd,{})})}),By="/Portfolio/assets/turnOn-e9c9c3b4.png",Py=N.section`
  ${de({justify:"center",align:"center"})};
  background-color: #000;
  height: 100vh;
  width: 100vw;

  button {
    background: url(${By}) center/contain no-repeat;
    height: 60px;
    width: 60px;
    cursor: pointer;
  }
`,Qy=()=>{const{setIsShutDown:e,setIsLoading:t,setIsOpen:n,setIsShuttingDown:r}=Ie(),o=()=>{t(!0),setTimeout(()=>{t(!1)},3e3)};return v(Py,{children:v("button",{onClick:()=>{r(!1),e(!1),o(),n({about:!1,work:!1,contact:!1,recycle:!1,time:!1,book:!1})}})})},My=()=>v("section",{children:H(wd,{children:[v(xd,{}),v("p",{children:"Windows is shutting down."})]})});function Ty(){const{isShutDown:e,isLoading:t,setIsLoading:n,isShuttingDown:r}=Ie();return F.useEffect(()=>{n(!0);const o=setTimeout(()=>{n(!1)},3e3);return()=>clearTimeout(o)},[n]),H("main",{children:[v(Wg,{}),v(Vg,{}),r&&!e?v(My,{}):e?v(Qy,{}):H("div",{children:[t&&v(Iy,{}),v(Ey,{})]})]})}Ll.createRoot(document.getElementById("root")).render(v(Tn.StrictMode,{children:v(r0,{children:v(Ty,{})})}));
