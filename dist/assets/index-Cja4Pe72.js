(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ke={},as=[],on=()=>{},op=()=>!1,ga=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),kl=t=>t.startsWith("onUpdate:"),gt=Object.assign,Dl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},wy=Object.prototype.hasOwnProperty,be=(t,e)=>wy.call(t,e),ue=Array.isArray,cs=t=>_a(t)==="[object Map]",ap=t=>_a(t)==="[object Set]",fe=t=>typeof t=="function",Ge=t=>typeof t=="string",mr=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",cp=t=>(Le(t)||fe(t))&&fe(t.then)&&fe(t.catch),lp=Object.prototype.toString,_a=t=>lp.call(t),Ay=t=>_a(t).slice(8,-1),up=t=>_a(t)==="[object Object]",Vl=t=>Ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ui=Cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ya=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},by=/-\w/g,$t=ya(t=>t.replace(by,e=>e.slice(1).toUpperCase())),Ry=/\B([A-Z])/g,qr=ya(t=>t.replace(Ry,"-$1").toLowerCase()),Ea=ya(t=>t.charAt(0).toUpperCase()+t.slice(1)),fc=ya(t=>t?`on${Ea(t)}`:""),er=(t,e)=>!Object.is(t,e),bo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},hp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Bc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Nh;const va=()=>Nh||(Nh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Nl(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ge(r)?ky(r):Nl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ge(t)||Le(t))return t}const Sy=/;(?![^(]*\))/g,Py=/:([^]+)/,Cy=/\/\*[^]*?\*\//g;function ky(t){const e={};return t.replace(Cy,"").split(Sy).forEach(n=>{if(n){const r=n.split(Py);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ys(t){let e="";if(Ge(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=ys(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Dy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vy=Cl(Dy);function fp(t){return!!t||t===""}const dp=t=>!!(t&&t.__v_isRef===!0),It=t=>Ge(t)?t:t==null?"":ue(t)||Le(t)&&(t.toString===lp||!fe(t.toString))?dp(t)?It(t.value):JSON.stringify(t,pp,2):String(t),pp=(t,e)=>dp(e)?pp(t,e.value):cs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[dc(r,i)+" =>"]=s,n),{})}:ap(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>dc(n))}:mr(e)?dc(e):Le(e)&&!ue(e)&&!up(e)?String(e):e,dc=(t,e="")=>{var n;return mr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bt;class Ny{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){++this._on===1&&(this.prevScope=bt,bt=this)}off(){this._on>0&&--this._on===0&&(bt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Oy(){return bt}let Ve;const pc=new WeakSet;class mp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,bt&&bt.active&&bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pc.has(this)&&(pc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||_p(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Oh(this),yp(this);const e=Ve,n=Wt;Ve=this,Wt=!0;try{return this.fn()}finally{Ep(this),Ve=e,Wt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ml(e);this.deps=this.depsTail=void 0,Oh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$c(this)&&this.run()}get dirty(){return $c(this)}}let gp=0,hi,fi;function _p(t,e=!1){if(t.flags|=8,e){t.next=fi,fi=t;return}t.next=hi,hi=t}function Ol(){gp++}function xl(){if(--gp>0)return;if(fi){let e=fi;for(fi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;hi;){let e=hi;for(hi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function yp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ep(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ml(r),xy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function $c(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(vp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function vp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===bi)||(t.globalVersion=bi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!$c(t))))return;t.flags|=2;const e=t.dep,n=Ve,r=Wt;Ve=t,Wt=!0;try{yp(t);const s=t.fn(t._value);(e.version===0||er(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,Wt=r,Ep(t),t.flags&=-3}}function Ml(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ml(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function xy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Wt=!0;const Tp=[];function Sn(){Tp.push(Wt),Wt=!1}function Pn(){const t=Tp.pop();Wt=t===void 0?!0:t}function Oh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let bi=0;class My{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ll{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ve||!Wt||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new My(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,Ip(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,bi++,this.notify(e)}notify(e){Ol();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{xl()}}}function Ip(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ip(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const jc=new WeakMap,Vr=Symbol(""),qc=Symbol(""),Ri=Symbol("");function ft(t,e,n){if(Wt&&Ve){let r=jc.get(t);r||jc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ll),s.map=r,s.key=n),s.track()}}function vn(t,e,n,r,s,i){const o=jc.get(t);if(!o){bi++;return}const c=l=>{l&&l.trigger()};if(Ol(),e==="clear")o.forEach(c);else{const l=ue(t),u=l&&Vl(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Ri||!mr(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Ri)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Vr)),cs(t)&&c(o.get(qc)));break;case"delete":l||(c(o.get(Vr)),cs(t)&&c(o.get(qc)));break;case"set":cs(t)&&c(o.get(Vr));break}}xl()}function Xr(t){const e=Ae(t);return e===t?e:(ft(e,"iterate",Ri),Bt(t)?e:e.map(st))}function Ta(t){return ft(t=Ae(t),"iterate",Ri),t}const Ly={__proto__:null,[Symbol.iterator](){return mc(this,Symbol.iterator,st)},concat(...t){return Xr(this).concat(...t.map(e=>ue(e)?Xr(e):e))},entries(){return mc(this,"entries",t=>(t[1]=st(t[1]),t))},every(t,e){return _n(this,"every",t,e,void 0,arguments)},filter(t,e){return _n(this,"filter",t,e,n=>n.map(st),arguments)},find(t,e){return _n(this,"find",t,e,st,arguments)},findIndex(t,e){return _n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return _n(this,"findLast",t,e,st,arguments)},findLastIndex(t,e){return _n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return _n(this,"forEach",t,e,void 0,arguments)},includes(...t){return gc(this,"includes",t)},indexOf(...t){return gc(this,"indexOf",t)},join(t){return Xr(this).join(t)},lastIndexOf(...t){return gc(this,"lastIndexOf",t)},map(t,e){return _n(this,"map",t,e,void 0,arguments)},pop(){return Zs(this,"pop")},push(...t){return Zs(this,"push",t)},reduce(t,...e){return xh(this,"reduce",t,e)},reduceRight(t,...e){return xh(this,"reduceRight",t,e)},shift(){return Zs(this,"shift")},some(t,e){return _n(this,"some",t,e,void 0,arguments)},splice(...t){return Zs(this,"splice",t)},toReversed(){return Xr(this).toReversed()},toSorted(t){return Xr(this).toSorted(t)},toSpliced(...t){return Xr(this).toSpliced(...t)},unshift(...t){return Zs(this,"unshift",t)},values(){return mc(this,"values",st)}};function mc(t,e,n){const r=Ta(t),s=r[e]();return r!==t&&!Bt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Fy=Array.prototype;function _n(t,e,n,r,s,i){const o=Ta(t),c=o!==t&&!Bt(t),l=o[e];if(l!==Fy[e]){const p=l.apply(t,i);return c?st(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,st(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function xh(t,e,n,r){const s=Ta(t);let i=n;return s!==t&&(Bt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,st(c),l,t)}),s[e](i,...r)}function gc(t,e,n){const r=Ae(t);ft(r,"iterate",Ri);const s=r[e](...n);return(s===-1||s===!1)&&Bl(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Zs(t,e,n=[]){Sn(),Ol();const r=Ae(t)[e].apply(t,n);return xl(),Pn(),r}const Uy=Cl("__proto__,__v_isRef,__isVue"),wp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(mr));function By(t){mr(t)||(t=String(t));const e=Ae(this);return ft(e,"has",t),e.hasOwnProperty(t)}class Ap{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Yy:Pp:i?Sp:Rp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let l;if(o&&(l=Ly[n]))return l;if(n==="hasOwnProperty")return By}const c=Reflect.get(e,n,mt(e)?e:r);return(mr(n)?wp.has(n):Uy(n))||(s||ft(e,"get",n),i)?c:mt(c)?o&&Vl(n)?c:c.value:Le(c)?s?kp(c):Ia(c):c}}class bp extends Ap{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=ar(i);if(!Bt(r)&&!ar(r)&&(i=Ae(i),r=Ae(r)),!ue(e)&&mt(i)&&!mt(r))return l||(i.value=r),!0}const o=ue(e)&&Vl(n)?Number(n)<e.length:be(e,n),c=Reflect.set(e,n,r,mt(e)?e:s);return e===Ae(s)&&(o?er(r,i)&&vn(e,"set",n,r):vn(e,"add",n,r)),c}deleteProperty(e,n){const r=be(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&vn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!mr(n)||!wp.has(n))&&ft(e,"has",n),r}ownKeys(e){return ft(e,"iterate",ue(e)?"length":Vr),Reflect.ownKeys(e)}}class $y extends Ap{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const jy=new bp,qy=new $y,Hy=new bp(!0);const Hc=t=>t,mo=t=>Reflect.getPrototypeOf(t);function Wy(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=cs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?Hc:e?$o:st;return!e&&ft(i,"iterate",l?qc:Vr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function go(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function zy(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);t||(er(s,c)&&ft(o,"get",s),ft(o,"get",c));const{has:l}=mo(o),u=e?Hc:t?$o:st;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ft(Ae(s),"iterate",Vr),s.size},has(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);return t||(er(s,c)&&ft(o,"has",s),ft(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ae(c),u=e?Hc:t?$o:st;return!t&&ft(l,"iterate",Vr),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return gt(n,t?{add:go("add"),set:go("set"),delete:go("delete"),clear:go("clear")}:{add(s){!e&&!Bt(s)&&!ar(s)&&(s=Ae(s));const i=Ae(this);return mo(i).has.call(i,s)||(i.add(s),vn(i,"add",s,s)),this},set(s,i){!e&&!Bt(i)&&!ar(i)&&(i=Ae(i));const o=Ae(this),{has:c,get:l}=mo(o);let u=c.call(o,s);u||(s=Ae(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?er(i,f)&&vn(o,"set",s,i):vn(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:c}=mo(i);let l=o.call(i,s);l||(s=Ae(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&vn(i,"delete",s,void 0),u},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&vn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Wy(s,t,e)}),n}function Fl(t,e){const n=zy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const Ky={get:Fl(!1,!1)},Gy={get:Fl(!1,!0)},Qy={get:Fl(!0,!1)};const Rp=new WeakMap,Sp=new WeakMap,Pp=new WeakMap,Yy=new WeakMap;function Jy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xy(t){return t.__v_skip||!Object.isExtensible(t)?0:Jy(Ay(t))}function Ia(t){return ar(t)?t:Ul(t,!1,jy,Ky,Rp)}function Cp(t){return Ul(t,!1,Hy,Gy,Sp)}function kp(t){return Ul(t,!0,qy,Qy,Pp)}function Ul(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Xy(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function ls(t){return ar(t)?ls(t.__v_raw):!!(t&&t.__v_isReactive)}function ar(t){return!!(t&&t.__v_isReadonly)}function Bt(t){return!!(t&&t.__v_isShallow)}function Bl(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function Zy(t){return!be(t,"__v_skip")&&Object.isExtensible(t)&&hp(t,"__v_skip",!0),t}const st=t=>Le(t)?Ia(t):t,$o=t=>Le(t)?kp(t):t;function mt(t){return t?t.__v_isRef===!0:!1}function Me(t){return Dp(t,!1)}function eE(t){return Dp(t,!0)}function Dp(t,e){return mt(t)?t:new tE(t,e)}class tE{constructor(e,n){this.dep=new Ll,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:st(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Bt(e)||ar(e);e=r?e:Ae(e),er(e,n)&&(this._rawValue=e,this._value=r?e:st(e),this.dep.trigger())}}function Tt(t){return mt(t)?t.value:t}const nE={get:(t,e,n)=>e==="__v_raw"?t:Tt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return mt(s)&&!mt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Vp(t){return ls(t)?t:new Proxy(t,nE)}class rE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ll(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=bi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return _p(this,!0),!0}get value(){const e=this.dep.track();return vp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function sE(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new rE(r,s,n)}const _o={},jo=new WeakMap;let Cr;function iE(t,e=!1,n=Cr){if(n){let r=jo.get(n);r||jo.set(n,r=[]),r.push(t)}}function oE(t,e,n=ke){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=H=>s?H:Bt(H)||s===!1||s===0?Tn(H,1):Tn(H);let f,p,m,_,b=!1,k=!1;if(mt(t)?(p=()=>t.value,b=Bt(t)):ls(t)?(p=()=>u(t),b=!0):ue(t)?(k=!0,b=t.some(H=>ls(H)||Bt(H)),p=()=>t.map(H=>{if(mt(H))return H.value;if(ls(H))return u(H);if(fe(H))return l?l(H,2):H()})):fe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Sn();try{m()}finally{Pn()}}const H=Cr;Cr=f;try{return l?l(t,3,[_]):t(_)}finally{Cr=H}}:p=on,e&&s){const H=p,te=s===!0?1/0:s;p=()=>Tn(H(),te)}const V=Oy(),B=()=>{f.stop(),V&&V.active&&Dl(V.effects,f)};if(i&&e){const H=e;e=(...te)=>{H(...te),B()}}let U=k?new Array(t.length).fill(_o):_o;const W=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const te=f.run();if(s||b||(k?te.some((oe,w)=>er(oe,U[w])):er(te,U))){m&&m();const oe=Cr;Cr=f;try{const w=[te,U===_o?void 0:k&&U[0]===_o?[]:U,_];U=te,l?l(e,3,w):e(...w)}finally{Cr=oe}}}else f.run()};return c&&c(W),f=new mp(p),f.scheduler=o?()=>o(W,!1):W,_=H=>iE(H,!1,f),m=f.onStop=()=>{const H=jo.get(f);if(H){if(l)l(H,4);else for(const te of H)te();jo.delete(f)}},e?r?W(!0):U=f.run():o?o(W.bind(null,!0),!0):f.run(),B.pause=f.pause.bind(f),B.resume=f.resume.bind(f),B.stop=B,B}function Tn(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,mt(t))Tn(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)Tn(t[r],e,n);else if(ap(t)||cs(t))t.forEach(r=>{Tn(r,e,n)});else if(up(t)){for(const r in t)Tn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Tn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qi(t,e,n,r){try{return r?t(...r):t()}catch(s){wa(s,e,n)}}function pn(t,e,n,r){if(fe(t)){const s=qi(t,e,n,r);return s&&cp(s)&&s.catch(i=>{wa(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(pn(t[i],e,n,r));return s}}function wa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ke;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){Sn(),qi(i,null,10,[t,l,u]),Pn();return}}aE(t,n,s,r,o)}function aE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const vt=[];let nn=-1;const us=[];let zn=null,Zr=0;const Np=Promise.resolve();let qo=null;function Op(t){const e=qo||Np;return t?e.then(this?t.bind(this):t):e}function cE(t){let e=nn+1,n=vt.length;for(;e<n;){const r=e+n>>>1,s=vt[r],i=Si(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function $l(t){if(!(t.flags&1)){const e=Si(t),n=vt[vt.length-1];!n||!(t.flags&2)&&e>=Si(n)?vt.push(t):vt.splice(cE(e),0,t),t.flags|=1,xp()}}function xp(){qo||(qo=Np.then(Lp))}function lE(t){ue(t)?us.push(...t):zn&&t.id===-1?zn.splice(Zr+1,0,t):t.flags&1||(us.push(t),t.flags|=1),xp()}function Mh(t,e,n=nn+1){for(;n<vt.length;n++){const r=vt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;vt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Mp(t){if(us.length){const e=[...new Set(us)].sort((n,r)=>Si(n)-Si(r));if(us.length=0,zn){zn.push(...e);return}for(zn=e,Zr=0;Zr<zn.length;Zr++){const n=zn[Zr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}zn=null,Zr=0}}const Si=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Lp(t){try{for(nn=0;nn<vt.length;nn++){const e=vt[nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),qi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;nn<vt.length;nn++){const e=vt[nn];e&&(e.flags&=-2)}nn=-1,vt.length=0,Mp(),qo=null,(vt.length||us.length)&&Lp()}}let Ot=null,Fp=null;function Ho(t){const e=Ot;return Ot=t,Fp=t&&t.type.__scopeId||null,e}function jl(t,e=Ot,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ko(-1);const i=Ho(e);let o;try{o=t(...s)}finally{Ho(i),r._d&&Ko(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function In(t,e){if(Ot===null)return t;const n=Pa(Ot),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=ke]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&Tn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Sr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Sn(),pn(l,n,8,[t.el,c,t,e]),Pn())}}const uE=Symbol("_vte"),hE=t=>t.__isTeleport,fE=Symbol("_leaveCb");function ql(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ql(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Up(t,e){return fe(t)?gt({name:t.name},e,{setup:t}):t}function Bp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Wo=new WeakMap;function di(t,e,n,r,s=!1){if(ue(t)){t.forEach((b,k)=>di(b,e&&(ue(e)?e[k]:e),n,r,s));return}if(pi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&di(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Pa(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===ke?c.refs={}:c.refs,p=c.setupState,m=Ae(p),_=p===ke?op:b=>be(m,b);if(u!=null&&u!==l){if(Lh(e),Ge(u))f[u]=null,_(u)&&(p[u]=null);else if(mt(u)){u.value=null;const b=e;b.k&&(f[b.k]=null)}}if(fe(l))qi(l,c,12,[o,f]);else{const b=Ge(l),k=mt(l);if(b||k){const V=()=>{if(t.f){const B=b?_(l)?p[l]:f[l]:l.value;if(s)ue(B)&&Dl(B,i);else if(ue(B))B.includes(i)||B.push(i);else if(b)f[l]=[i],_(l)&&(p[l]=f[l]);else{const U=[i];l.value=U,t.k&&(f[t.k]=U)}}else b?(f[l]=o,_(l)&&(p[l]=o)):k&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const B=()=>{V(),Wo.delete(t)};B.id=-1,Wo.set(t,B),Vt(B,n)}else Lh(t),V()}}}function Lh(t){const e=Wo.get(t);e&&(e.flags|=8,Wo.delete(t))}va().requestIdleCallback;va().cancelIdleCallback;const pi=t=>!!t.type.__asyncLoader,$p=t=>t.type.__isKeepAlive;function dE(t,e){jp(t,"a",e)}function pE(t,e){jp(t,"da",e)}function jp(t,e,n=pt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Aa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)$p(s.parent.vnode)&&mE(r,e,n,s),s=s.parent}}function mE(t,e,n,r){const s=Aa(e,t,r,!0);ba(()=>{Dl(r[e],s)},n)}function Aa(t,e,n=pt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Sn();const c=Hi(n),l=pn(e,n,t,o);return c(),Pn(),l});return r?s.unshift(i):s.push(i),i}}const Nn=t=>(e,n=pt)=>{(!ki||t==="sp")&&Aa(t,(...r)=>e(...r),n)},gE=Nn("bm"),Cs=Nn("m"),_E=Nn("bu"),yE=Nn("u"),EE=Nn("bum"),ba=Nn("um"),vE=Nn("sp"),TE=Nn("rtg"),IE=Nn("rtc");function wE(t,e=pt){Aa("ec",t,e)}const AE="components";function qp(t,e){return RE(AE,t,!0,e)||t}const bE=Symbol.for("v-ndc");function RE(t,e,n=!0,r=!1){const s=Ot||pt;if(s){const i=s.type;{const c=pv(i,!1);if(c&&(c===e||c===$t(e)||c===Ea($t(e))))return i}const o=Fh(s[t]||i[t],e)||Fh(s.appContext[t],e);return!o&&r?i:o}}function Fh(t,e){return t&&(t[e]||t[$t(e)]||t[Ea($t(e))])}function Ro(t,e,n,r){let s;const i=n,o=ue(t);if(o||Ge(t)){const c=o&&ls(t);let l=!1,u=!1;c&&(l=!Bt(t),u=ar(t),t=Ta(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?$o(st(t[f])):st(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Wc=t=>t?lm(t)?Pa(t):Wc(t.parent):null,mi=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wc(t.parent),$root:t=>Wc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Wp(t),$forceUpdate:t=>t.f||(t.f=()=>{$l(t.update)}),$nextTick:t=>t.n||(t.n=Op.bind(t.proxy)),$watch:t=>KE.bind(t)}),_c=(t,e)=>t!==ke&&!t.__isScriptSetup&&be(t,e),SE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(_c(r,e))return o[e]=1,r[e];if(s!==ke&&be(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&be(u,e))return o[e]=3,i[e];if(n!==ke&&be(n,e))return o[e]=4,n[e];zc&&(o[e]=0)}}const f=mi[e];let p,m;if(f)return e==="$attrs"&&ft(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==ke&&be(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,be(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return _c(s,e)?(s[e]=n,!0):r!==ke&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},c){let l,u;return!!(n[c]||t!==ke&&c[0]!=="$"&&be(t,c)||_c(e,c)||(l=i[0])&&be(l,c)||be(r,c)||be(mi,c)||be(s.config.globalProperties,c)||(u=o.__cssModules)&&u[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Uh(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let zc=!0;function PE(t){const e=Wp(t),n=t.proxy,r=t.ctx;zc=!1,e.beforeCreate&&Bh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:b,activated:k,deactivated:V,beforeDestroy:B,beforeUnmount:U,destroyed:W,unmounted:H,render:te,renderTracked:oe,renderTriggered:w,errorCaptured:E,serverPrefetch:T,expose:R,inheritAttrs:A,components:P,directives:v,filters:je}=e;if(u&&CE(u,r,null),o)for(const Ie in o){const ye=o[Ie];fe(ye)&&(r[Ie]=ye.bind(n))}if(s){const Ie=s.call(n,n);Le(Ie)&&(t.data=Ia(Ie))}if(zc=!0,i)for(const Ie in i){const ye=i[Ie],At=fe(ye)?ye.bind(n,n):fe(ye.get)?ye.get.bind(n,n):on,Jt=!fe(ye)&&fe(ye.set)?ye.set.bind(n):on,Pt=$e({get:At,set:Jt});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:tt=>Pt.value=tt})}if(c)for(const Ie in c)Hp(c[Ie],r,n,Ie);if(l){const Ie=fe(l)?l.call(n):l;Reflect.ownKeys(Ie).forEach(ye=>{So(ye,Ie[ye])})}f&&Bh(f,t,"c");function qe(Ie,ye){ue(ye)?ye.forEach(At=>Ie(At.bind(n))):ye&&Ie(ye.bind(n))}if(qe(gE,p),qe(Cs,m),qe(_E,_),qe(yE,b),qe(dE,k),qe(pE,V),qe(wE,E),qe(IE,oe),qe(TE,w),qe(EE,U),qe(ba,H),qe(vE,T),ue(R))if(R.length){const Ie=t.exposed||(t.exposed={});R.forEach(ye=>{Object.defineProperty(Ie,ye,{get:()=>n[ye],set:At=>n[ye]=At,enumerable:!0})})}else t.exposed||(t.exposed={});te&&t.render===on&&(t.render=te),A!=null&&(t.inheritAttrs=A),P&&(t.components=P),v&&(t.directives=v),T&&Bp(t)}function CE(t,e,n=on){ue(t)&&(t=Kc(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=zt(s.from||r,s.default,!0):i=zt(s.from||r):i=zt(s),mt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Bh(t,e,n){pn(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hp(t,e,n,r){let s=r.includes(".")?sm(n,r):()=>n[r];if(Ge(t)){const i=e[t];fe(i)&&fs(s,i)}else if(fe(t))fs(s,t.bind(n));else if(Le(t))if(ue(t))t.forEach(i=>Hp(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&fs(s,i,t)}}function Wp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>zo(l,u,o,!0)),zo(l,e,o)),Le(e)&&i.set(e,l),l}function zo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&zo(t,i,n,!0),s&&s.forEach(o=>zo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=kE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const kE={data:$h,props:jh,emits:jh,methods:ri,computed:ri,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:ri,directives:ri,watch:VE,provide:$h,inject:DE};function $h(t,e){return e?t?function(){return gt(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function DE(t,e){return ri(Kc(t),Kc(e))}function Kc(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Et(t,e){return t?[...new Set([].concat(t,e))]:e}function ri(t,e){return t?gt(Object.create(null),t,e):e}function jh(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:gt(Object.create(null),Uh(t),Uh(e??{})):e}function VE(t,e){if(!t)return e;if(!e)return t;const n=gt(Object.create(null),t);for(const r in e)n[r]=Et(t[r],e[r]);return n}function zp(){return{app:null,config:{isNativeTag:op,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let NE=0;function OE(t,e){return function(r,s=null){fe(r)||(r=gt({},r)),s!=null&&!Le(s)&&(s=null);const i=zp(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:NE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:gv,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&fe(f.install)?(o.add(f),f.install(u,...p)):fe(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const _=u._ceVNode||Lt(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),l=!0,u._container=f,f.__vue_app__=u,Pa(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(pn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=hs;hs=u;try{return f()}finally{hs=p}}};return u}}let hs=null;function So(t,e){if(pt){let n=pt.provides;const r=pt.parent&&pt.parent.provides;r===n&&(n=pt.provides=Object.create(r)),n[t]=e}}function zt(t,e,n=!1){const r=lv();if(r||hs){let s=hs?hs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}const Kp={},Gp=()=>Object.create(Kp),Qp=t=>Object.getPrototypeOf(t)===Kp;function xE(t,e,n,r=!1){const s={},i=Gp();t.propsDefaults=Object.create(null),Yp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Cp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ME(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ae(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Ra(t.emitsOptions,m))continue;const _=e[m];if(l)if(be(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const b=$t(m);s[b]=Gc(l,c,b,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{Yp(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!be(e,p)&&((f=qr(p))===p||!be(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Gc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!be(e,p))&&(delete i[p],u=!0)}u&&vn(t.attrs,"set","")}function Yp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(ui(l))continue;const u=e[l];let f;s&&be(s,f=$t(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Ra(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ae(n),u=c||ke;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Gc(s,l,p,u[p],t,!be(u,p))}}return o}function Gc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=be(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Hi(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===qr(n))&&(r=!0))}return r}const LE=new WeakMap;function Jp(t,e,n=!1){const r=n?LE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!fe(t)){const f=p=>{l=!0;const[m,_]=Jp(p,e,!0);gt(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Le(t)&&r.set(t,as),as;if(ue(i))for(let f=0;f<i.length;f++){const p=$t(i[f]);qh(p)&&(o[p]=ke)}else if(i)for(const f in i){const p=$t(f);if(qh(p)){const m=i[f],_=o[p]=ue(m)||fe(m)?{type:m}:gt({},m),b=_.type;let k=!1,V=!0;if(ue(b))for(let B=0;B<b.length;++B){const U=b[B],W=fe(U)&&U.name;if(W==="Boolean"){k=!0;break}else W==="String"&&(V=!1)}else k=fe(b)&&b.name==="Boolean";_[0]=k,_[1]=V,(k||be(_,"default"))&&c.push(p)}}const u=[o,c];return Le(t)&&r.set(t,u),u}function qh(t){return t[0]!=="$"&&!ui(t)}const Hl=t=>t==="_"||t==="_ctx"||t==="$stable",Wl=t=>ue(t)?t.map(sn):[sn(t)],FE=(t,e,n)=>{if(e._n)return e;const r=jl((...s)=>Wl(e(...s)),n);return r._c=!1,r},Xp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Hl(s))continue;const i=t[s];if(fe(i))e[s]=FE(s,i,r);else if(i!=null){const o=Wl(i);e[s]=()=>o}}},Zp=(t,e)=>{const n=Wl(e);t.slots.default=()=>n},em=(t,e,n)=>{for(const r in e)(n||!Hl(r))&&(t[r]=e[r])},UE=(t,e,n)=>{const r=t.slots=Gp();if(t.vnode.shapeFlag&32){const s=e._;s?(em(r,e,n),n&&hp(r,"_",s,!0)):Xp(e,r)}else e&&Zp(t,e)},BE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ke;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:em(s,e,n):(i=!e.$stable,Xp(e,s)),o=e}else e&&(Zp(t,e),o={default:1});if(i)for(const c in s)!Hl(c)&&o[c]==null&&delete s[c]},Vt=tv;function $E(t){return jE(t)}function jE(t,e){const n=va();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=on,insertStaticContent:b}=t,k=(y,I,S,M=null,F=null,N=null,K=void 0,q=null,$=!!I.dynamicChildren)=>{if(y===I)return;y&&!ei(y,I)&&(M=O(y),tt(y,F,N,!0),y=null),I.patchFlag===-2&&($=!1,I.dynamicChildren=null);const{type:j,ref:se,shapeFlag:Q}=I;switch(j){case Sa:V(y,I,S,M);break;case cr:B(y,I,S,M);break;case Ec:y==null&&U(I,S,M,K);break;case Nt:P(y,I,S,M,F,N,K,q,$);break;default:Q&1?te(y,I,S,M,F,N,K,q,$):Q&6?v(y,I,S,M,F,N,K,q,$):(Q&64||Q&128)&&j.process(y,I,S,M,F,N,K,q,$,ee)}se!=null&&F?di(se,y&&y.ref,N,I||y,!I):se==null&&y&&y.ref!=null&&di(y.ref,null,N,y,!0)},V=(y,I,S,M)=>{if(y==null)r(I.el=c(I.children),S,M);else{const F=I.el=y.el;I.children!==y.children&&u(F,I.children)}},B=(y,I,S,M)=>{y==null?r(I.el=l(I.children||""),S,M):I.el=y.el},U=(y,I,S,M)=>{[y.el,y.anchor]=b(y.children,I,S,M,y.el,y.anchor)},W=({el:y,anchor:I},S,M)=>{let F;for(;y&&y!==I;)F=m(y),r(y,S,M),y=F;r(I,S,M)},H=({el:y,anchor:I})=>{let S;for(;y&&y!==I;)S=m(y),s(y),y=S;s(I)},te=(y,I,S,M,F,N,K,q,$)=>{I.type==="svg"?K="svg":I.type==="math"&&(K="mathml"),y==null?oe(I,S,M,F,N,K,q,$):T(y,I,F,N,K,q,$)},oe=(y,I,S,M,F,N,K,q)=>{let $,j;const{props:se,shapeFlag:Q,transition:re,dirs:ie}=y;if($=y.el=o(y.type,N,se&&se.is,se),Q&8?f($,y.children):Q&16&&E(y.children,$,null,M,F,yc(y,N),K,q),ie&&Sr(y,null,M,"created"),w($,y,y.scopeId,K,M),se){for(const Pe in se)Pe!=="value"&&!ui(Pe)&&i($,Pe,null,se[Pe],N,M);"value"in se&&i($,"value",null,se.value,N),(j=se.onVnodeBeforeMount)&&en(j,M,y)}ie&&Sr(y,null,M,"beforeMount");const pe=qE(F,re);pe&&re.beforeEnter($),r($,I,S),((j=se&&se.onVnodeMounted)||pe||ie)&&Vt(()=>{j&&en(j,M,y),pe&&re.enter($),ie&&Sr(y,null,M,"mounted")},F)},w=(y,I,S,M,F)=>{if(S&&_(y,S),M)for(let N=0;N<M.length;N++)_(y,M[N]);if(F){let N=F.subTree;if(I===N||om(N.type)&&(N.ssContent===I||N.ssFallback===I)){const K=F.vnode;w(y,K,K.scopeId,K.slotScopeIds,F.parent)}}},E=(y,I,S,M,F,N,K,q,$=0)=>{for(let j=$;j<y.length;j++){const se=y[j]=q?Kn(y[j]):sn(y[j]);k(null,se,I,S,M,F,N,K,q)}},T=(y,I,S,M,F,N,K)=>{const q=I.el=y.el;let{patchFlag:$,dynamicChildren:j,dirs:se}=I;$|=y.patchFlag&16;const Q=y.props||ke,re=I.props||ke;let ie;if(S&&Pr(S,!1),(ie=re.onVnodeBeforeUpdate)&&en(ie,S,I,y),se&&Sr(I,y,S,"beforeUpdate"),S&&Pr(S,!0),(Q.innerHTML&&re.innerHTML==null||Q.textContent&&re.textContent==null)&&f(q,""),j?R(y.dynamicChildren,j,q,S,M,yc(I,F),N):K||ye(y,I,q,null,S,M,yc(I,F),N,!1),$>0){if($&16)A(q,Q,re,S,F);else if($&2&&Q.class!==re.class&&i(q,"class",null,re.class,F),$&4&&i(q,"style",Q.style,re.style,F),$&8){const pe=I.dynamicProps;for(let Pe=0;Pe<pe.length;Pe++){const ve=pe[Pe],ct=Q[ve],lt=re[ve];(lt!==ct||ve==="value")&&i(q,ve,ct,lt,F,S)}}$&1&&y.children!==I.children&&f(q,I.children)}else!K&&j==null&&A(q,Q,re,S,F);((ie=re.onVnodeUpdated)||se)&&Vt(()=>{ie&&en(ie,S,I,y),se&&Sr(I,y,S,"updated")},M)},R=(y,I,S,M,F,N,K)=>{for(let q=0;q<I.length;q++){const $=y[q],j=I[q],se=$.el&&($.type===Nt||!ei($,j)||$.shapeFlag&198)?p($.el):S;k($,j,se,null,M,F,N,K,!0)}},A=(y,I,S,M,F)=>{if(I!==S){if(I!==ke)for(const N in I)!ui(N)&&!(N in S)&&i(y,N,I[N],null,F,M);for(const N in S){if(ui(N))continue;const K=S[N],q=I[N];K!==q&&N!=="value"&&i(y,N,q,K,F,M)}"value"in S&&i(y,"value",I.value,S.value,F)}},P=(y,I,S,M,F,N,K,q,$)=>{const j=I.el=y?y.el:c(""),se=I.anchor=y?y.anchor:c("");let{patchFlag:Q,dynamicChildren:re,slotScopeIds:ie}=I;ie&&(q=q?q.concat(ie):ie),y==null?(r(j,S,M),r(se,S,M),E(I.children||[],S,se,F,N,K,q,$)):Q>0&&Q&64&&re&&y.dynamicChildren?(R(y.dynamicChildren,re,S,F,N,K,q),(I.key!=null||F&&I===F.subTree)&&tm(y,I,!0)):ye(y,I,S,se,F,N,K,q,$)},v=(y,I,S,M,F,N,K,q,$)=>{I.slotScopeIds=q,y==null?I.shapeFlag&512?F.ctx.activate(I,S,M,K,$):je(I,S,M,F,N,K,$):wt(y,I,$)},je=(y,I,S,M,F,N,K)=>{const q=y.component=cv(y,M,F);if($p(y)&&(q.ctx.renderer=ee),uv(q,!1,K),q.asyncDep){if(F&&F.registerDep(q,qe,K),!y.el){const $=q.subTree=Lt(cr);B(null,$,I,S),y.placeholder=$.el}}else qe(q,y,I,S,F,N,K)},wt=(y,I,S)=>{const M=I.component=y.component;if(ZE(y,I,S))if(M.asyncDep&&!M.asyncResolved){Ie(M,I,S);return}else M.next=I,M.update();else I.el=y.el,M.vnode=I},qe=(y,I,S,M,F,N,K)=>{const q=()=>{if(y.isMounted){let{next:Q,bu:re,u:ie,parent:pe,vnode:Pe}=y;{const kt=nm(y);if(kt){Q&&(Q.el=Pe.el,Ie(y,Q,K)),kt.asyncDep.then(()=>{y.isUnmounted||q()});return}}let ve=Q,ct;Pr(y,!1),Q?(Q.el=Pe.el,Ie(y,Q,K)):Q=Pe,re&&bo(re),(ct=Q.props&&Q.props.onVnodeBeforeUpdate)&&en(ct,pe,Q,Pe),Pr(y,!0);const lt=Wh(y),Ct=y.subTree;y.subTree=lt,k(Ct,lt,p(Ct.el),O(Ct),y,F,N),Q.el=lt.el,ve===null&&ev(y,lt.el),ie&&Vt(ie,F),(ct=Q.props&&Q.props.onVnodeUpdated)&&Vt(()=>en(ct,pe,Q,Pe),F)}else{let Q;const{el:re,props:ie}=I,{bm:pe,m:Pe,parent:ve,root:ct,type:lt}=y,Ct=pi(I);Pr(y,!1),pe&&bo(pe),!Ct&&(Q=ie&&ie.onVnodeBeforeMount)&&en(Q,ve,I),Pr(y,!0);{ct.ce&&ct.ce._def.shadowRoot!==!1&&ct.ce._injectChildStyle(lt);const kt=y.subTree=Wh(y);k(null,kt,S,M,y,F,N),I.el=kt.el}if(Pe&&Vt(Pe,F),!Ct&&(Q=ie&&ie.onVnodeMounted)){const kt=I;Vt(()=>en(Q,ve,kt),F)}(I.shapeFlag&256||ve&&pi(ve.vnode)&&ve.vnode.shapeFlag&256)&&y.a&&Vt(y.a,F),y.isMounted=!0,I=S=M=null}};y.scope.on();const $=y.effect=new mp(q);y.scope.off();const j=y.update=$.run.bind($),se=y.job=$.runIfDirty.bind($);se.i=y,se.id=y.uid,$.scheduler=()=>$l(se),Pr(y,!0),j()},Ie=(y,I,S)=>{I.component=y;const M=y.vnode.props;y.vnode=I,y.next=null,ME(y,I.props,M,S),BE(y,I.children,S),Sn(),Mh(y),Pn()},ye=(y,I,S,M,F,N,K,q,$=!1)=>{const j=y&&y.children,se=y?y.shapeFlag:0,Q=I.children,{patchFlag:re,shapeFlag:ie}=I;if(re>0){if(re&128){Jt(j,Q,S,M,F,N,K,q,$);return}else if(re&256){At(j,Q,S,M,F,N,K,q,$);return}}ie&8?(se&16&&at(j,F,N),Q!==j&&f(S,Q)):se&16?ie&16?Jt(j,Q,S,M,F,N,K,q,$):at(j,F,N,!0):(se&8&&f(S,""),ie&16&&E(Q,S,M,F,N,K,q,$))},At=(y,I,S,M,F,N,K,q,$)=>{y=y||as,I=I||as;const j=y.length,se=I.length,Q=Math.min(j,se);let re;for(re=0;re<Q;re++){const ie=I[re]=$?Kn(I[re]):sn(I[re]);k(y[re],ie,S,null,F,N,K,q,$)}j>se?at(y,F,N,!0,!1,Q):E(I,S,M,F,N,K,q,$,Q)},Jt=(y,I,S,M,F,N,K,q,$)=>{let j=0;const se=I.length;let Q=y.length-1,re=se-1;for(;j<=Q&&j<=re;){const ie=y[j],pe=I[j]=$?Kn(I[j]):sn(I[j]);if(ei(ie,pe))k(ie,pe,S,null,F,N,K,q,$);else break;j++}for(;j<=Q&&j<=re;){const ie=y[Q],pe=I[re]=$?Kn(I[re]):sn(I[re]);if(ei(ie,pe))k(ie,pe,S,null,F,N,K,q,$);else break;Q--,re--}if(j>Q){if(j<=re){const ie=re+1,pe=ie<se?I[ie].el:M;for(;j<=re;)k(null,I[j]=$?Kn(I[j]):sn(I[j]),S,pe,F,N,K,q,$),j++}}else if(j>re)for(;j<=Q;)tt(y[j],F,N,!0),j++;else{const ie=j,pe=j,Pe=new Map;for(j=pe;j<=re;j++){const nt=I[j]=$?Kn(I[j]):sn(I[j]);nt.key!=null&&Pe.set(nt.key,j)}let ve,ct=0;const lt=re-pe+1;let Ct=!1,kt=0;const qt=new Array(lt);for(j=0;j<lt;j++)qt[j]=0;for(j=ie;j<=Q;j++){const nt=y[j];if(ct>=lt){tt(nt,F,N,!0);continue}let Xe;if(nt.key!=null)Xe=Pe.get(nt.key);else for(ve=pe;ve<=re;ve++)if(qt[ve-pe]===0&&ei(nt,I[ve])){Xe=ve;break}Xe===void 0?tt(nt,F,N,!0):(qt[Xe-pe]=j+1,Xe>=kt?kt=Xe:Ct=!0,k(nt,I[Xe],S,null,F,N,K,q,$),ct++)}const Gr=Ct?HE(qt):as;for(ve=Gr.length-1,j=lt-1;j>=0;j--){const nt=pe+j,Xe=I[nt],Fs=I[nt+1],Ir=nt+1<se?Fs.el||Fs.placeholder:M;qt[j]===0?k(null,Xe,S,Ir,F,N,K,q,$):Ct&&(ve<0||j!==Gr[ve]?Pt(Xe,S,Ir,2):ve--)}}},Pt=(y,I,S,M,F=null)=>{const{el:N,type:K,transition:q,children:$,shapeFlag:j}=y;if(j&6){Pt(y.component.subTree,I,S,M);return}if(j&128){y.suspense.move(I,S,M);return}if(j&64){K.move(y,I,S,ee);return}if(K===Nt){r(N,I,S);for(let Q=0;Q<$.length;Q++)Pt($[Q],I,S,M);r(y.anchor,I,S);return}if(K===Ec){W(y,I,S);return}if(M!==2&&j&1&&q)if(M===0)q.beforeEnter(N),r(N,I,S),Vt(()=>q.enter(N),F);else{const{leave:Q,delayLeave:re,afterLeave:ie}=q,pe=()=>{y.ctx.isUnmounted?s(N):r(N,I,S)},Pe=()=>{N._isLeaving&&N[fE](!0),Q(N,()=>{pe(),ie&&ie()})};re?re(N,pe,Pe):Pe()}else r(N,I,S)},tt=(y,I,S,M=!1,F=!1)=>{const{type:N,props:K,ref:q,children:$,dynamicChildren:j,shapeFlag:se,patchFlag:Q,dirs:re,cacheIndex:ie}=y;if(Q===-2&&(F=!1),q!=null&&(Sn(),di(q,null,S,y,!0),Pn()),ie!=null&&(I.renderCache[ie]=void 0),se&256){I.ctx.deactivate(y);return}const pe=se&1&&re,Pe=!pi(y);let ve;if(Pe&&(ve=K&&K.onVnodeBeforeUnmount)&&en(ve,I,y),se&6)xn(y.component,S,M);else{if(se&128){y.suspense.unmount(S,M);return}pe&&Sr(y,null,I,"beforeUnmount"),se&64?y.type.remove(y,I,S,ee,M):j&&!j.hasOnce&&(N!==Nt||Q>0&&Q&64)?at(j,I,S,!1,!0):(N===Nt&&Q&384||!F&&se&16)&&at($,I,S),M&&gn(y)}(Pe&&(ve=K&&K.onVnodeUnmounted)||pe)&&Vt(()=>{ve&&en(ve,I,y),pe&&Sr(y,null,I,"unmounted")},S)},gn=y=>{const{type:I,el:S,anchor:M,transition:F}=y;if(I===Nt){jt(S,M);return}if(I===Ec){H(y);return}const N=()=>{s(S),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(y.shapeFlag&1&&F&&!F.persisted){const{leave:K,delayLeave:q}=F,$=()=>K(S,N);q?q(y.el,N,$):$()}else N()},jt=(y,I)=>{let S;for(;y!==I;)S=m(y),s(y),y=S;s(I)},xn=(y,I,S)=>{const{bum:M,scope:F,job:N,subTree:K,um:q,m:$,a:j}=y;Hh($),Hh(j),M&&bo(M),F.stop(),N&&(N.flags|=8,tt(K,y,I,S)),q&&Vt(q,I),Vt(()=>{y.isUnmounted=!0},I)},at=(y,I,S,M=!1,F=!1,N=0)=>{for(let K=N;K<y.length;K++)tt(y[K],I,S,M,F)},O=y=>{if(y.shapeFlag&6)return O(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const I=m(y.anchor||y.el),S=I&&I[uE];return S?m(S):I};let J=!1;const G=(y,I,S)=>{y==null?I._vnode&&tt(I._vnode,null,null,!0):k(I._vnode||null,y,I,null,null,null,S),I._vnode=y,J||(J=!0,Mh(),Mp(),J=!1)},ee={p:k,um:tt,m:Pt,r:gn,mt:je,mc:E,pc:ye,pbc:R,n:O,o:t};return{render:G,hydrate:void 0,createApp:OE(G)}}function yc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Pr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function qE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function tm(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Kn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&tm(o,c)),c.type===Sa&&c.patchFlag!==-1&&(c.el=o.el),c.type===cr&&!c.el&&(c.el=o.el)}}function HE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function nm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:nm(e)}function Hh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const WE=Symbol.for("v-scx"),zE=()=>zt(WE);function fs(t,e,n){return rm(t,e,n)}function rm(t,e,n=ke){const{immediate:r,deep:s,flush:i,once:o}=n,c=gt({},n),l=e&&r||!e&&i!=="post";let u;if(ki){if(i==="sync"){const _=zE();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=on,_.resume=on,_.pause=on,_}}const f=pt;c.call=(_,b,k)=>pn(_,f,b,k);let p=!1;i==="post"?c.scheduler=_=>{Vt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,b)=>{b?_():$l(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=oE(t,e,c);return ki&&(u?u.push(m):l&&m()),m}function KE(t,e,n){const r=this.proxy,s=Ge(t)?t.includes(".")?sm(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=Hi(this),c=rm(s,i.bind(r),n);return o(),c}function sm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const GE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${$t(e)}Modifiers`]||t[`${qr(e)}Modifiers`];function QE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ke;let s=n;const i=e.startsWith("update:"),o=i&&GE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ge(f)?f.trim():f)),o.number&&(s=n.map(Bc)));let c,l=r[c=fc(e)]||r[c=fc($t(e))];!l&&i&&(l=r[c=fc(qr(e))]),l&&pn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,pn(u,t,6,s)}}const YE=new WeakMap;function im(t,e,n=!1){const r=n?YE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!fe(t)){const l=u=>{const f=im(u,e,!0);f&&(c=!0,gt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Le(t)&&r.set(t,null),null):(ue(i)?i.forEach(l=>o[l]=null):gt(o,i),Le(t)&&r.set(t,o),o)}function Ra(t,e){return!t||!ga(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,qr(e))||be(t,e))}function Wh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:_,ctx:b,inheritAttrs:k}=t,V=Ho(t);let B,U;try{if(n.shapeFlag&4){const H=s||r,te=H;B=sn(u.call(te,H,f,p,_,m,b)),U=c}else{const H=e;B=sn(H.length>1?H(p,{attrs:c,slots:o,emit:l}):H(p,null)),U=e.props?c:JE(c)}}catch(H){gi.length=0,wa(H,t,1),B=Lt(cr)}let W=B;if(U&&k!==!1){const H=Object.keys(U),{shapeFlag:te}=W;H.length&&te&7&&(i&&H.some(kl)&&(U=XE(U,i)),W=Es(W,U,!1,!0))}return n.dirs&&(W=Es(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&ql(W,n.transition),B=W,Ho(V),B}const JE=t=>{let e;for(const n in t)(n==="class"||n==="style"||ga(n))&&((e||(e={}))[n]=t[n]);return e},XE=(t,e)=>{const n={};for(const r in t)(!kl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ZE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?zh(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!Ra(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?zh(r,o,u):!0:!!o;return!1}function zh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ra(n,i))return!0}return!1}function ev({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const om=t=>t.__isSuspense;function tv(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):lE(t)}const Nt=Symbol.for("v-fgt"),Sa=Symbol.for("v-txt"),cr=Symbol.for("v-cmt"),Ec=Symbol.for("v-stc"),gi=[];let xt=null;function Te(t=!1){gi.push(xt=t?null:[])}function nv(){gi.pop(),xt=gi[gi.length-1]||null}let Pi=1;function Ko(t,e=!1){Pi+=t,t<0&&xt&&e&&(xt.hasOnce=!0)}function am(t){return t.dynamicChildren=Pi>0?xt||as:null,nv(),Pi>0&&xt&&xt.push(t),t}function De(t,e,n,r,s,i){return am(X(t,e,n,r,s,i,!0))}function Go(t,e,n,r,s){return am(Lt(t,e,n,r,s,!0))}function Qo(t){return t?t.__v_isVNode===!0:!1}function ei(t,e){return t.type===e.type&&t.key===e.key}const cm=({key:t})=>t??null,Po=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ge(t)||mt(t)||fe(t)?{i:Ot,r:t,k:e,f:!!n}:t:null);function X(t,e=null,n=null,r=0,s=null,i=t===Nt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cm(e),ref:e&&Po(e),scopeId:Fp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ot};return c?(zl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ge(n)?8:16),Pi>0&&!o&&xt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xt.push(l),l}const Lt=rv;function rv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===bE)&&(t=cr),Qo(t)){const c=Es(t,e,!0);return n&&zl(c,n),Pi>0&&!i&&xt&&(c.shapeFlag&6?xt[xt.indexOf(t)]=c:xt.push(c)),c.patchFlag=-2,c}if(mv(t)&&(t=t.__vccOpts),e){e=sv(e);let{class:c,style:l}=e;c&&!Ge(c)&&(e.class=ys(c)),Le(l)&&(Bl(l)&&!ue(l)&&(l=gt({},l)),e.style=Nl(l))}const o=Ge(t)?1:om(t)?128:hE(t)?64:Le(t)?4:fe(t)?2:0;return X(t,e,n,r,s,o,i,!0)}function sv(t){return t?Bl(t)||Qp(t)?gt({},t):t:null}function Es(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?iv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&cm(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(Po(e)):[i,Po(e)]:Po(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Nt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Es(t.ssContent),ssFallback:t.ssFallback&&Es(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&ql(f,l.clone(f)),f}function Ci(t=" ",e=0){return Lt(Sa,null,t,e)}function xr(t="",e=!1){return e?(Te(),Go(cr,null,t)):Lt(cr,null,t)}function sn(t){return t==null||typeof t=="boolean"?Lt(cr):ue(t)?Lt(Nt,null,t.slice()):Qo(t)?Kn(t):Lt(Sa,null,String(t))}function Kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Es(t)}function zl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),zl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Qp(e)?e._ctx=Ot:s===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Ot},n=32):(e=String(e),r&64?(n=16,e=[Ci(e)]):n=8);t.children=e,t.shapeFlag|=n}function iv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ys([e.class,r.class]));else if(s==="style")e.style=Nl([e.style,r.style]);else if(ga(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function en(t,e,n,r=null){pn(t,e,7,[n,r])}const ov=zp();let av=0;function cv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ov,i={uid:av++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ny(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jp(r,s),emitsOptions:im(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=QE.bind(null,i),t.ce&&t.ce(i),i}let pt=null;const lv=()=>pt||Ot;let Yo,Qc;{const t=va(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Yo=e("__VUE_INSTANCE_SETTERS__",n=>pt=n),Qc=e("__VUE_SSR_SETTERS__",n=>ki=n)}const Hi=t=>{const e=pt;return Yo(t),t.scope.on(),()=>{t.scope.off(),Yo(e)}},Kh=()=>{pt&&pt.scope.off(),Yo(null)};function lm(t){return t.vnode.shapeFlag&4}let ki=!1;function uv(t,e=!1,n=!1){e&&Qc(e);const{props:r,children:s}=t.vnode,i=lm(t);xE(t,r,i,e),UE(t,s,n||e);const o=i?hv(t,e):void 0;return e&&Qc(!1),o}function hv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,SE);const{setup:r}=n;if(r){Sn();const s=t.setupContext=r.length>1?dv(t):null,i=Hi(t),o=qi(r,t,0,[t.props,s]),c=cp(o);if(Pn(),i(),(c||t.sp)&&!pi(t)&&Bp(t),c){if(o.then(Kh,Kh),e)return o.then(l=>{Gh(t,l)}).catch(l=>{wa(l,t,0)});t.asyncDep=o}else Gh(t,o)}else um(t)}function Gh(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=Vp(e)),um(t)}function um(t,e,n){const r=t.type;t.render||(t.render=r.render||on);{const s=Hi(t);Sn();try{PE(t)}finally{Pn(),s()}}}const fv={get(t,e){return ft(t,"get",""),t[e]}};function dv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,fv),slots:t.slots,emit:t.emit,expose:e}}function Pa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Vp(Zy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in mi)return mi[n](t)},has(e,n){return n in e||n in mi}})):t.proxy}function pv(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function mv(t){return fe(t)&&"__vccOpts"in t}const $e=(t,e)=>sE(t,e,ki);function hm(t,e,n){const r=(i,o,c)=>{Ko(-1);try{return Lt(i,o,c)}finally{Ko(1)}},s=arguments.length;return s===2?Le(e)&&!ue(e)?Qo(e)?r(t,null,[e]):r(t,e):r(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Qo(n)&&(n=[n]),r(t,e,n))}const gv="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yc;const Qh=typeof window<"u"&&window.trustedTypes;if(Qh)try{Yc=Qh.createPolicy("vue",{createHTML:t=>t})}catch{}const fm=Yc?t=>Yc.createHTML(t):t=>t,_v="http://www.w3.org/2000/svg",yv="http://www.w3.org/1998/Math/MathML",En=typeof document<"u"?document:null,Yh=En&&En.createElement("template"),Ev={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?En.createElementNS(_v,t):e==="mathml"?En.createElementNS(yv,t):n?En.createElement(t,{is:n}):En.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>En.createTextNode(t),createComment:t=>En.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>En.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Yh.innerHTML=fm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Yh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},vv=Symbol("_vtc");function Tv(t,e,n){const r=t[vv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Jh=Symbol("_vod"),Iv=Symbol("_vsh"),wv=Symbol(""),Av=/(?:^|;)\s*display\s*:/;function bv(t,e,n){const r=t.style,s=Ge(n);let i=!1;if(n&&!s){if(e)if(Ge(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Co(r,c,"")}else for(const o in e)n[o]==null&&Co(r,o,"");for(const o in n)o==="display"&&(i=!0),Co(r,o,n[o])}else if(s){if(e!==n){const o=r[wv];o&&(n+=";"+o),r.cssText=n,i=Av.test(n)}}else e&&t.removeAttribute("style");Jh in t&&(t[Jh]=i?r.display:"",t[Iv]&&(r.display="none"))}const Xh=/\s*!important$/;function Co(t,e,n){if(ue(n))n.forEach(r=>Co(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Rv(t,e);Xh.test(n)?t.setProperty(qr(r),n.replace(Xh,""),"important"):t[r]=n}}const Zh=["Webkit","Moz","ms"],vc={};function Rv(t,e){const n=vc[e];if(n)return n;let r=$t(e);if(r!=="filter"&&r in t)return vc[e]=r;r=Ea(r);for(let s=0;s<Zh.length;s++){const i=Zh[s]+r;if(i in t)return vc[e]=i}return e}const ef="http://www.w3.org/1999/xlink";function tf(t,e,n,r,s,i=Vy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ef,e.slice(6,e.length)):t.setAttributeNS(ef,e,n):n==null||i&&!fp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":mr(n)?String(n):n)}function nf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?fm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=fp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function es(t,e,n,r){t.addEventListener(e,n,r)}function Sv(t,e,n,r){t.removeEventListener(e,n,r)}const rf=Symbol("_vei");function Pv(t,e,n,r,s=null){const i=t[rf]||(t[rf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=Cv(e);if(r){const u=i[e]=Vv(r,s);es(t,c,u,l)}else o&&(Sv(t,c,o,l),i[e]=void 0)}}const sf=/(?:Once|Passive|Capture)$/;function Cv(t){let e;if(sf.test(t)){e={};let r;for(;r=t.match(sf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):qr(t.slice(2)),e]}let Tc=0;const kv=Promise.resolve(),Dv=()=>Tc||(kv.then(()=>Tc=0),Tc=Date.now());function Vv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;pn(Nv(r,n.value),e,5,[r])};return n.value=t,n.attached=Dv(),n}function Nv(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const of=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ov=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Tv(t,r,o):e==="style"?bv(t,n,r):ga(e)?kl(e)||Pv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xv(t,e,r,o))?(nf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&tf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ge(r))?nf(t,$t(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),tf(t,e,r,o))};function xv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&of(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return of(e)&&Ge(n)?!1:e in t}const af=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>bo(e,n):e};function Mv(t){t.target.composing=!0}function cf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ic=Symbol("_assign"),wn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ic]=af(s);const i=r||s.props&&s.props.type==="number";es(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Bc(c)),t[Ic](c)}),n&&es(t,"change",()=>{t.value=t.value.trim()}),e||(es(t,"compositionstart",Mv),es(t,"compositionend",cf),es(t,"change",cf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Ic]=af(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Bc(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Lv=["ctrl","shift","alt","meta"],Fv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Lv.some(n=>t[`${n}Key`]&&!e.includes(n))},Kl=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const c=Fv[e[o]];if(c&&c(s,e))return}return t(s,...i)}))},Uv=gt({patchProp:Ov},Ev);let lf;function Bv(){return lf||(lf=$E(Uv))}const $v=((...t)=>{const e=Bv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=qv(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,jv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function jv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function qv(t){return Ge(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ts=typeof document<"u";function dm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Hv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&dm(t.default)}const we=Object.assign;function wc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Gt(s)?s.map(t):t(s)}return n}const _i=()=>{},Gt=Array.isArray,pm=/#/g,Wv=/&/g,zv=/\//g,Kv=/=/g,Gv=/\?/g,mm=/\+/g,Qv=/%5B/g,Yv=/%5D/g,gm=/%5E/g,Jv=/%60/g,_m=/%7B/g,Xv=/%7C/g,ym=/%7D/g,Zv=/%20/g;function Gl(t){return encodeURI(""+t).replace(Xv,"|").replace(Qv,"[").replace(Yv,"]")}function eT(t){return Gl(t).replace(_m,"{").replace(ym,"}").replace(gm,"^")}function Jc(t){return Gl(t).replace(mm,"%2B").replace(Zv,"+").replace(pm,"%23").replace(Wv,"%26").replace(Jv,"`").replace(_m,"{").replace(ym,"}").replace(gm,"^")}function tT(t){return Jc(t).replace(Kv,"%3D")}function nT(t){return Gl(t).replace(pm,"%23").replace(Gv,"%3F")}function rT(t){return t==null?"":nT(t).replace(zv,"%2F")}function Di(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const sT=/\/$/,iT=t=>t.replace(sT,"");function Ac(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=lT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Di(o)}}function oT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function uf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function aT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&vs(e.matched[r],n.matched[s])&&Em(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Em(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!cT(t[n],e[n]))return!1;return!0}function cT(t,e){return Gt(t)?hf(t,e):Gt(e)?hf(e,t):t===e}function hf(t,e){return Gt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function lT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Vi;(function(t){t.pop="pop",t.push="push"})(Vi||(Vi={}));var yi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(yi||(yi={}));function uT(t){if(!t)if(ts){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),iT(t)}const hT=/^[^#]+#/;function fT(t,e){return t.replace(hT,"#")+e}function dT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ca=()=>({left:window.scrollX,top:window.scrollY});function pT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=dT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ff(t,e){return(history.state?history.state.position-e:-1)+t}const Xc=new Map;function mT(t,e){Xc.set(t,e)}function gT(t){const e=Xc.get(t);return Xc.delete(t),e}let _T=()=>location.protocol+"//"+location.host;function vm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),uf(l,"")}return uf(n,t)+r+s}function yT(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=vm(t,location),b=n.value,k=e.value;let V=0;if(m){if(n.value=_,e.value=m,o&&o===b){o=null;return}V=k?m.position-k.position:0}else r(_);s.forEach(B=>{B(n.value,b,{delta:V,type:Vi.pop,direction:V?V>0?yi.forward:yi.back:yi.unknown})})};function l(){o=n.value}function u(m){s.push(m);const _=()=>{const b=s.indexOf(m);b>-1&&s.splice(b,1)};return i.push(_),_}function f(){const{history:m}=window;m.state&&m.replaceState(we({},m.state,{scroll:Ca()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function df(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ca():null}}function ET(t){const{history:e,location:n}=window,r={value:vm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:_T()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(l,u){const f=we({},e.state,df(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,u){const f=we({},s.value,e.state,{forward:l,scroll:Ca()});i(f.current,f,!0);const p=we({},df(r.value,l,null),{position:f.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function vT(t){t=uT(t);const e=ET(t),n=yT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:fT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function TT(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),vT(t)}function IT(t){return typeof t=="string"||t&&typeof t=="object"}function Tm(t){return typeof t=="string"||typeof t=="symbol"}const Im=Symbol("");var pf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(pf||(pf={}));function Ts(t,e){return we(new Error,{type:t,[Im]:!0},e)}function yn(t,e){return t instanceof Error&&Im in t&&(e==null||!!(t.type&e))}const mf="[^/]+?",wT={sensitive:!1,strict:!1,start:!0,end:!0},AT=/[.+*?^${}()[\]/\\]/g;function bT(t,e){const n=we({},wT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(AT,"\\$&"),_+=40;else if(m.type===1){const{value:b,repeatable:k,optional:V,regexp:B}=m;i.push({name:b,repeatable:k,optional:V});const U=B||mf;if(U!==mf){_+=10;try{new RegExp(`(${U})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${b}" (${U}): `+H.message)}}let W=k?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(W=V&&u.length<2?`(?:/${W})`:"/"+W),V&&(W+="?"),s+=W,_+=20,V&&(_+=-8),k&&(_+=-20),U===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",b=i[m-1];p[b.name]=_&&b.repeatable?_.split("/"):_}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===0)f+=_.value;else if(_.type===1){const{value:b,repeatable:k,optional:V}=_,B=b in u?u[b]:"";if(Gt(B)&&!k)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const U=Gt(B)?B.join("/"):B;if(!U)if(V)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${b}"`);f+=U}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function RT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function wm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=RT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(gf(r))return 1;if(gf(s))return-1}return s.length-r.length}function gf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ST={type:0,value:""},PT=/[a-zA-Z0-9_]/;function CT(t){if(!t)return[[]];if(t==="/")return[[ST]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:PT.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function kT(t,e,n){const r=bT(CT(t.path),n),s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function DT(t,e){const n=[],r=new Map;e=vf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const b=!_,k=yf(p);k.aliasOf=_&&_.record;const V=vf(e,p),B=[k];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const te of H)B.push(yf(we({},k,{components:_?_.record.components:k.components,path:te,aliasOf:_?_.record:k})))}let U,W;for(const H of B){const{path:te}=H;if(m&&te[0]!=="/"){const oe=m.record.path,w=oe[oe.length-1]==="/"?"":"/";H.path=m.record.path+(te&&w+te)}if(U=kT(H,m,V),_?_.alias.push(U):(W=W||U,W!==U&&W.alias.push(U),b&&p.name&&!Ef(U)&&o(p.name)),Am(U)&&l(U),k.children){const oe=k.children;for(let w=0;w<oe.length;w++)i(oe[w],U,_&&_.children[w])}_=_||U}return W?()=>{o(W)}:_i}function o(p){if(Tm(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=OT(p,n);n.splice(m,0,p),p.record.name&&!Ef(p)&&r.set(p.record.name,p)}function u(p,m){let _,b={},k,V;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Ts(1,{location:p});V=_.record.name,b=we(_f(m.params,_.keys.filter(W=>!W.optional).concat(_.parent?_.parent.keys.filter(W=>W.optional):[]).map(W=>W.name)),p.params&&_f(p.params,_.keys.map(W=>W.name))),k=_.stringify(b)}else if(p.path!=null)k=p.path,_=n.find(W=>W.re.test(k)),_&&(b=_.parse(k),V=_.record.name);else{if(_=m.name?r.get(m.name):n.find(W=>W.re.test(m.path)),!_)throw Ts(1,{location:p,currentLocation:m});V=_.record.name,b=we({},m.params,p.params),k=_.stringify(b)}const B=[];let U=_;for(;U;)B.unshift(U.record),U=U.parent;return{name:V,path:k,params:b,matched:B,meta:NT(B)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function _f(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function yf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:VT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function VT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ef(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function NT(t){return t.reduce((e,n)=>we(e,n.meta),{})}function vf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function OT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;wm(t,e[i])<0?r=i:n=i+1}const s=xT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function xT(t){let e=t;for(;e=e.parent;)if(Am(e)&&wm(t,e)===0)return e}function Am({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function MT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(mm," "),o=i.indexOf("="),c=Di(o<0?i:i.slice(0,o)),l=o<0?null:Di(i.slice(o+1));if(c in e){let u=e[c];Gt(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function Tf(t){let e="";for(let n in t){const r=t[n];if(n=tT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Gt(r)?r.map(i=>i&&Jc(i)):[r&&Jc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function LT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Gt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const FT=Symbol(""),If=Symbol(""),ka=Symbol(""),Ql=Symbol(""),Zc=Symbol("");function ti(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Gn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(Ts(4,{from:n,to:e})):m instanceof Error?l(m):IT(m)?l(Ts(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function bc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(dm(l)){const f=(l.__vccOpts||l)[e];f&&i.push(Gn(f,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=Hv(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&Gn(_,n,r,o,c,s)()}))}}return i}function wf(t){const e=zt(ka),n=zt(Ql),r=$e(()=>{const l=Tt(t.to);return e.resolve(l)}),s=$e(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(vs.bind(null,f));if(m>-1)return m;const _=Af(l[u-2]);return u>1&&Af(f)===_&&p[p.length-1].path!==_?p.findIndex(vs.bind(null,l[u-2])):m}),i=$e(()=>s.value>-1&&qT(n.params,r.value.params)),o=$e(()=>s.value>-1&&s.value===n.matched.length-1&&Em(n.params,r.value.params));function c(l={}){if(jT(l)){const u=e[Tt(t.replace)?"replace":"push"](Tt(t.to)).catch(_i);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:$e(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function UT(t){return t.length===1?t[0]:t}const BT=Up({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:wf,setup(t,{slots:e}){const n=Ia(wf(t)),{options:r}=zt(ka),s=$e(()=>({[bf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[bf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&UT(e.default(n));return t.custom?i:hm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),$T=BT;function jT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Gt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Af(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const bf=(t,e,n)=>t??e??n,HT=Up({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=zt(Zc),s=$e(()=>t.route||r.value),i=zt(If,0),o=$e(()=>{let u=Tt(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=$e(()=>s.value.matched[o.value]);So(If,$e(()=>o.value+1)),So(FT,c),So(Zc,s);const l=Me();return fs(()=>[l.value,c.value,t.name],([u,f,p],[m,_,b])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!vs(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return Rf(n.default,{Component:m,route:u});const _=p.props[f],b=_?_===!0?u.params:typeof _=="function"?_(u):_:null,V=hm(m,we({},b,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Rf(n.default,{Component:V,route:u})||V}}});function Rf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const bm=HT;function WT(t){const e=DT(t.routes,t),n=t.parseQuery||MT,r=t.stringifyQuery||Tf,s=t.history,i=ti(),o=ti(),c=ti(),l=eE(jn);let u=jn;ts&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=wc.bind(null,O=>""+O),p=wc.bind(null,rT),m=wc.bind(null,Di);function _(O,J){let G,ee;return Tm(O)?(G=e.getRecordMatcher(O),ee=J):ee=O,e.addRoute(ee,G)}function b(O){const J=e.getRecordMatcher(O);J&&e.removeRoute(J)}function k(){return e.getRoutes().map(O=>O.record)}function V(O){return!!e.getRecordMatcher(O)}function B(O,J){if(J=we({},J||l.value),typeof O=="string"){const S=Ac(n,O,J.path),M=e.resolve({path:S.path},J),F=s.createHref(S.fullPath);return we(S,M,{params:m(M.params),hash:Di(S.hash),redirectedFrom:void 0,href:F})}let G;if(O.path!=null)G=we({},O,{path:Ac(n,O.path,J.path).path});else{const S=we({},O.params);for(const M in S)S[M]==null&&delete S[M];G=we({},O,{params:p(S)}),J.params=p(J.params)}const ee=e.resolve(G,J),Se=O.hash||"";ee.params=f(m(ee.params));const y=oT(r,we({},O,{hash:eT(Se),path:ee.path})),I=s.createHref(y);return we({fullPath:y,hash:Se,query:r===Tf?LT(O.query):O.query||{}},ee,{redirectedFrom:void 0,href:I})}function U(O){return typeof O=="string"?Ac(n,O,l.value.path):we({},O)}function W(O,J){if(u!==O)return Ts(8,{from:J,to:O})}function H(O){return w(O)}function te(O){return H(we(U(O),{replace:!0}))}function oe(O){const J=O.matched[O.matched.length-1];if(J&&J.redirect){const{redirect:G}=J;let ee=typeof G=="function"?G(O):G;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=U(ee):{path:ee},ee.params={}),we({query:O.query,hash:O.hash,params:ee.path!=null?{}:O.params},ee)}}function w(O,J){const G=u=B(O),ee=l.value,Se=O.state,y=O.force,I=O.replace===!0,S=oe(G);if(S)return w(we(U(S),{state:typeof S=="object"?we({},Se,S.state):Se,force:y,replace:I}),J||G);const M=G;M.redirectedFrom=J;let F;return!y&&aT(r,ee,G)&&(F=Ts(16,{to:M,from:ee}),Pt(ee,ee,!0,!1)),(F?Promise.resolve(F):R(M,ee)).catch(N=>yn(N)?yn(N,2)?N:Jt(N):ye(N,M,ee)).then(N=>{if(N){if(yn(N,2))return w(we({replace:I},U(N.to),{state:typeof N.to=="object"?we({},Se,N.to.state):Se,force:y}),J||M)}else N=P(M,ee,!0,I,Se);return A(M,ee,N),N})}function E(O,J){const G=W(O,J);return G?Promise.reject(G):Promise.resolve()}function T(O){const J=jt.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(O):O()}function R(O,J){let G;const[ee,Se,y]=zT(O,J);G=bc(ee.reverse(),"beforeRouteLeave",O,J);for(const S of ee)S.leaveGuards.forEach(M=>{G.push(Gn(M,O,J))});const I=E.bind(null,O,J);return G.push(I),at(G).then(()=>{G=[];for(const S of i.list())G.push(Gn(S,O,J));return G.push(I),at(G)}).then(()=>{G=bc(Se,"beforeRouteUpdate",O,J);for(const S of Se)S.updateGuards.forEach(M=>{G.push(Gn(M,O,J))});return G.push(I),at(G)}).then(()=>{G=[];for(const S of y)if(S.beforeEnter)if(Gt(S.beforeEnter))for(const M of S.beforeEnter)G.push(Gn(M,O,J));else G.push(Gn(S.beforeEnter,O,J));return G.push(I),at(G)}).then(()=>(O.matched.forEach(S=>S.enterCallbacks={}),G=bc(y,"beforeRouteEnter",O,J,T),G.push(I),at(G))).then(()=>{G=[];for(const S of o.list())G.push(Gn(S,O,J));return G.push(I),at(G)}).catch(S=>yn(S,8)?S:Promise.reject(S))}function A(O,J,G){c.list().forEach(ee=>T(()=>ee(O,J,G)))}function P(O,J,G,ee,Se){const y=W(O,J);if(y)return y;const I=J===jn,S=ts?history.state:{};G&&(ee||I?s.replace(O.fullPath,we({scroll:I&&S&&S.scroll},Se)):s.push(O.fullPath,Se)),l.value=O,Pt(O,J,G,I),Jt()}let v;function je(){v||(v=s.listen((O,J,G)=>{if(!xn.listening)return;const ee=B(O),Se=oe(ee);if(Se){w(we(Se,{replace:!0,force:!0}),ee).catch(_i);return}u=ee;const y=l.value;ts&&mT(ff(y.fullPath,G.delta),Ca()),R(ee,y).catch(I=>yn(I,12)?I:yn(I,2)?(w(we(U(I.to),{force:!0}),ee).then(S=>{yn(S,20)&&!G.delta&&G.type===Vi.pop&&s.go(-1,!1)}).catch(_i),Promise.reject()):(G.delta&&s.go(-G.delta,!1),ye(I,ee,y))).then(I=>{I=I||P(ee,y,!1),I&&(G.delta&&!yn(I,8)?s.go(-G.delta,!1):G.type===Vi.pop&&yn(I,20)&&s.go(-1,!1)),A(ee,y,I)}).catch(_i)}))}let wt=ti(),qe=ti(),Ie;function ye(O,J,G){Jt(O);const ee=qe.list();return ee.length?ee.forEach(Se=>Se(O,J,G)):console.error(O),Promise.reject(O)}function At(){return Ie&&l.value!==jn?Promise.resolve():new Promise((O,J)=>{wt.add([O,J])})}function Jt(O){return Ie||(Ie=!O,je(),wt.list().forEach(([J,G])=>O?G(O):J()),wt.reset()),O}function Pt(O,J,G,ee){const{scrollBehavior:Se}=t;if(!ts||!Se)return Promise.resolve();const y=!G&&gT(ff(O.fullPath,0))||(ee||!G)&&history.state&&history.state.scroll||null;return Op().then(()=>Se(O,J,y)).then(I=>I&&pT(I)).catch(I=>ye(I,O,J))}const tt=O=>s.go(O);let gn;const jt=new Set,xn={currentRoute:l,listening:!0,addRoute:_,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:V,getRoutes:k,resolve:B,options:t,push:H,replace:te,go:tt,back:()=>tt(-1),forward:()=>tt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:qe.add,isReady:At,install(O){const J=this;O.component("RouterLink",$T),O.component("RouterView",bm),O.config.globalProperties.$router=J,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Tt(l)}),ts&&!gn&&l.value===jn&&(gn=!0,H(s.location).catch(Se=>{}));const G={};for(const Se in jn)Object.defineProperty(G,Se,{get:()=>l.value[Se],enumerable:!0});O.provide(ka,J),O.provide(Ql,Cp(G)),O.provide(Zc,l);const ee=O.unmount;jt.add(O),O.unmount=function(){jt.delete(O),jt.size<1&&(u=jn,v&&v(),v=null,l.value=jn,gn=!1,Ie=!1),ee()}}};function at(O){return O.reduce((J,G)=>J.then(()=>T(G)),Promise.resolve())}return xn}function zT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>vs(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>vs(u,l))||s.push(l))}return[n,r,s]}function Wi(){return zt(ka)}function KT(t){return zt(Ql)}const GT=()=>{};var Sf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},QT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Sm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new YT;const m=i<<2|c>>4;if(r.push(m),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const b=u<<6&192|p;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class YT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const JT=function(t){const e=Rm(t);return Sm.encodeByteArray(e,!0)},Jo=function(t){return JT(t).replace(/\./g,"")},Pm=function(t){try{return Sm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=()=>XT().__FIREBASE_DEFAULTS__,eI=()=>{if(typeof process>"u"||typeof Sf>"u")return;const t=Sf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pm(t[1]);return e&&JSON.parse(e)},Da=()=>{try{return GT()||ZT()||eI()||tI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cm=t=>Da()?.emulatorHosts?.[t],nI=t=>{const e=Cm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},km=()=>Da()?.config,Dm=t=>Da()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vm(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Jo(JSON.stringify(n)),Jo(JSON.stringify(o)),""].join(".")}const Ei={};function iI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ei))Ei[e]?t.emulator.push(e):t.prod.push(e);return t}function oI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Pf=!1;function Nm(t,e){if(typeof window>"u"||typeof document>"u"||!ks(window.location.host)||Ei[t]===e||Ei[t]||Pf)return;Ei[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=iI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Pf=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=oI(r),_=n("text"),b=document.getElementById(_)||document.createElement("span"),k=n("learnmore"),V=document.getElementById(k)||document.createElement("a"),B=n("preprendIcon"),U=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const W=m.element;c(W),f(V,k);const H=u();l(U,B),W.append(U,b,V,H),document.body.appendChild(W)}i?(b.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function cI(){const t=Da()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fI(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dI(){return!cI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pI(){try{return typeof indexedDB=="object"}catch{return!1}}function mI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="FirebaseError";class On extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gI,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zi.prototype.create)}}class zi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?_I(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new On(s,c,r)}}function _I(t,e){return t.replace(yI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const yI=/\{\$([^}]+)}/g;function EI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Cf(i)&&Cf(o)){if(!Mr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Cf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function si(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ii(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vI(t,e){const n=new TI(t,e);return n.subscribe.bind(n)}class TI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");II(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Rc),s.error===void 0&&(s.error=Rc),s.complete===void 0&&(s.complete=Rc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function II(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return t&&t._delegate?t._delegate:t}class Lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bI(e))try{this.getOrInitializeService({instanceIdentifier:kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kr){return this.instances.has(e)}getOptions(e=kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kr){return this.component?this.component.multipleInstances?e:kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AI(t){return t===kr?void 0:t}function bI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const SI={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},PI=me.INFO,CI={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},kI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=CI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yl{constructor(e){this.name=e,this._logLevel=PI,this._logHandler=kI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const DI=(t,e)=>e.some(n=>t instanceof n);let kf,Df;function VI(){return kf||(kf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NI(){return Df||(Df=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Om=new WeakMap,el=new WeakMap,xm=new WeakMap,Sc=new WeakMap,Jl=new WeakMap;function OI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(tr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Om.set(n,t)}).catch(()=>{}),Jl.set(e,t),e}function xI(t){if(el.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});el.set(t,e)}let tl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return el.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MI(t){tl=t(tl)}function LI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pc(this),e,...n);return xm.set(r,e.sort?e.sort():[e]),tr(r)}:NI().includes(t)?function(...e){return t.apply(Pc(this),e),tr(Om.get(this))}:function(...e){return tr(t.apply(Pc(this),e))}}function FI(t){return typeof t=="function"?LI(t):(t instanceof IDBTransaction&&xI(t),DI(t,VI())?new Proxy(t,tl):t)}function tr(t){if(t instanceof IDBRequest)return OI(t);if(Sc.has(t))return Sc.get(t);const e=FI(t);return e!==t&&(Sc.set(t,e),Jl.set(e,t)),e}const Pc=t=>Jl.get(t);function UI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=tr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(tr(o.result),l.oldVersion,l.newVersion,tr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const BI=["get","getKey","getAll","getAllKeys","count"],$I=["put","add","delete","clear"],Cc=new Map;function Vf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cc.get(e))return Cc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=$I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||BI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Cc.set(e,i),i}MI(t=>({...t,get:(e,n,r)=>Vf(e,n)||t.get(e,n,r),has:(e,n)=>!!Vf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qI(t){return t.getComponent()?.type==="VERSION"}const nl="@firebase/app",Nf="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new Yl("@firebase/app"),HI="@firebase/app-compat",WI="@firebase/analytics-compat",zI="@firebase/analytics",KI="@firebase/app-check-compat",GI="@firebase/app-check",QI="@firebase/auth",YI="@firebase/auth-compat",JI="@firebase/database",XI="@firebase/data-connect",ZI="@firebase/database-compat",ew="@firebase/functions",tw="@firebase/functions-compat",nw="@firebase/installations",rw="@firebase/installations-compat",sw="@firebase/messaging",iw="@firebase/messaging-compat",ow="@firebase/performance",aw="@firebase/performance-compat",cw="@firebase/remote-config",lw="@firebase/remote-config-compat",uw="@firebase/storage",hw="@firebase/storage-compat",fw="@firebase/firestore",dw="@firebase/ai",pw="@firebase/firestore-compat",mw="firebase",gw="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="[DEFAULT]",_w={[nl]:"fire-core",[HI]:"fire-core-compat",[zI]:"fire-analytics",[WI]:"fire-analytics-compat",[GI]:"fire-app-check",[KI]:"fire-app-check-compat",[QI]:"fire-auth",[YI]:"fire-auth-compat",[JI]:"fire-rtdb",[XI]:"fire-data-connect",[ZI]:"fire-rtdb-compat",[ew]:"fire-fn",[tw]:"fire-fn-compat",[nw]:"fire-iid",[rw]:"fire-iid-compat",[sw]:"fire-fcm",[iw]:"fire-fcm-compat",[ow]:"fire-perf",[aw]:"fire-perf-compat",[cw]:"fire-rc",[lw]:"fire-rc-compat",[uw]:"fire-gcs",[hw]:"fire-gcs-compat",[fw]:"fire-fst",[pw]:"fire-fst-compat",[dw]:"fire-vertex","fire-js":"fire-js",[mw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Map,yw=new Map,sl=new Map;function Of(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Is(t){const e=t.name;if(sl.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;sl.set(e,t);for(const n of Xo.values())Of(n,t);for(const n of yw.values())Of(n,t);return!0}function Xl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ft(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nr=new zi("app","Firebase",Ew);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=gw;function Mm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:rl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw nr.create("bad-app-name",{appName:String(s)});if(n||(n=km()),!n)throw nr.create("no-options");const i=Xo.get(s);if(i){if(Mr(n,i.options)&&Mr(r,i.config))return i;throw nr.create("duplicate-app",{appName:s})}const o=new RI(s);for(const l of sl.values())o.addComponent(l);const c=new vw(n,r,o);return Xo.set(s,c),c}function Lm(t=rl){const e=Xo.get(t);if(!e&&t===rl&&km())return Mm();if(!e)throw nr.create("no-app",{appName:t});return e}function rr(t,e,n){let r=_w[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(o.join(" "));return}Is(new Lr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="firebase-heartbeat-database",Iw=1,Ni="firebase-heartbeat-store";let kc=null;function Fm(){return kc||(kc=UI(Tw,Iw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ni)}catch(n){console.warn(n)}}}}).catch(t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})})),kc}async function ww(t){try{const n=(await Fm()).transaction(Ni),r=await n.objectStore(Ni).get(Um(t));return await n.done,r}catch(e){if(e instanceof On)Cn.warn(e.message);else{const n=nr.create("idb-get",{originalErrorMessage:e?.message});Cn.warn(n.message)}}}async function xf(t,e){try{const r=(await Fm()).transaction(Ni,"readwrite");await r.objectStore(Ni).put(e,Um(t)),await r.done}catch(n){if(n instanceof On)Cn.warn(n.message);else{const r=nr.create("idb-set",{originalErrorMessage:n?.message});Cn.warn(r.message)}}}function Um(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=1024,bw=30;class Rw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Mf();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>bw){const s=Cw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Cn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Mf(),{heartbeatsToSend:n,unsentEntries:r}=Sw(this._heartbeatsCache.heartbeats),s=Jo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Cn.warn(e),""}}}function Mf(){return new Date().toISOString().substring(0,10)}function Sw(t,e=Aw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Lf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Lf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pI()?mI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ww(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return xf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return xf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Lf(t){return Jo(JSON.stringify({version:2,heartbeats:t})).length}function Cw(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(t){Is(new Lr("platform-logger",e=>new jI(e),"PRIVATE")),Is(new Lr("heartbeat",e=>new Rw(e),"PRIVATE")),rr(nl,Nf,t),rr(nl,Nf,"esm2020"),rr("fire-js","")}kw("");function Bm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dw=Bm,$m=new zi("auth","Firebase",Bm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Yl("@firebase/auth");function Vw(t,...e){Zo.logLevel<=me.WARN&&Zo.warn(`Auth (${Ds}): ${t}`,...e)}function ko(t,...e){Zo.logLevel<=me.ERROR&&Zo.error(`Auth (${Ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,...e){throw Zl(t,...e)}function an(t,...e){return Zl(t,...e)}function jm(t,e,n){const r={...Dw(),[e]:n};return new zi("auth","Firebase",r).create(e,{appName:t.name})}function Rn(t){return jm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $m.create(t,...e)}function ae(t,e,...n){if(!t)throw Zl(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ko(e),new Error(e)}function kn(t,e){t||An(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(){return typeof self<"u"&&self.location?.href||""}function Nw(){return Ff()==="http:"||Ff()==="https:"}function Ff(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nw()||uI()||"connection"in navigator)?navigator.onLine:!0}function xw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=aI()||hI()}get(){return Ow()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t,e){kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Fw=new Gi(3e4,6e4);function gr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function _r(t,e,n,r,s={}){return Hm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ki({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return lI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ks(t.emulatorConfig.host)&&(u.credentials="include"),qm.fetch()(await Wm(t,t.config.apiHost,n,c),u)})}async function Hm(t,e,n){t._canInitEmulator=!1;const r={...Mw,...e};try{const s=new Bw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw yo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw yo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw yo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw yo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jm(t,f,u);Qt(t,f)}}catch(s){if(s instanceof On)throw s;Qt(t,"network-request-failed",{message:String(s)})}}async function Qi(t,e,n,r,s={}){const i=await _r(t,e,n,r,s);return"mfaPendingCredential"in i&&Qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Wm(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?eu(t.config,s):`${t.config.apiScheme}://${s}`;return Lw.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Uw(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Bw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),Fw.get())})}}function yo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=an(t,e,r);return s.customData._tokenResponse=n,s}function Uf(t){return t!==void 0&&t.enterprise!==void 0}class $w{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Uw(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function jw(t,e){return _r(t,"GET","/v2/recaptchaConfig",gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qw(t,e){return _r(t,"POST","/v1/accounts:delete",e)}async function ea(t,e){return _r(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hw(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=tu(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:vi(Dc(s.auth_time)),issuedAtTime:vi(Dc(s.iat)),expirationTime:vi(Dc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Dc(t){return Number(t)*1e3}function tu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ko("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pm(n);return s?JSON.parse(s):(ko("Failed to decode base64 JWT payload"),null)}catch(s){return ko("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Bf(t){const e=tu(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof On&&Ww(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ww({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vi(this.lastLoginAt),this.creationTime=vi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(t){const e=t.auth,n=await t.getIdToken(),r=await Oi(t,ea(e,{idToken:n}));ae(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?zm(s.providerUserInfo):[],o=Gw(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ol(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Kw(t){const e=Je(t);await ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gw(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function zm(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qw(t,e){const n=await Hm(t,{},async()=>{const r=Ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Wm(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&ks(t.emulatorConfig.host)&&(l.credentials="include"),qm.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Yw(t,e){return _r(t,"POST","/v2/accounts:revokeToken",gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=Bf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Qw(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ds;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ds,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ht{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new zw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ol(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Oi(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Hw(this,e)}reload(){return Kw(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ht({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ta(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(Rn(this.auth));const e=await this.getIdToken();return await Oi(this,qw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:b,stsTokenManager:k}=n;ae(p&&k,e,"internal-error");const V=ds.fromJSON(this.name,k);ae(typeof p=="string",e,"internal-error"),qn(r,e.name),qn(s,e.name),ae(typeof m=="boolean",e,"internal-error"),ae(typeof _=="boolean",e,"internal-error"),qn(i,e.name),qn(o,e.name),qn(c,e.name),qn(l,e.name),qn(u,e.name),qn(f,e.name);const B=new Ht({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:V,createdAt:u,lastLoginAt:f});return b&&Array.isArray(b)&&(B.providerData=b.map(U=>({...U}))),l&&(B._redirectEventId=l),B}static async _fromIdTokenResponse(e,n,r=!1){const s=new ds;s.updateFromServerResponse(n);const i=new Ht({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ta(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?zm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new ds;c.updateFromIdToken(r);const l=new Ht({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ol(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=new Map;function bn(t){kn(t instanceof Function,"Expected a class definition");let e=$f.get(t);return e?(kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$f.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Km.type="NONE";const jf=Km;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t,e,n){return`firebase:${t}:${e}:${n}`}class ps{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Do(this.userKey,s.apiKey,i),this.fullPersistenceKey=Do("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ea(this.auth,{idToken:e}).catch(()=>{});return n?Ht._fromGetAccountInfoResponse(this.auth,n,e):null}return Ht._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ps(bn(jf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||bn(jf);const o=Do(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await ea(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Ht._fromGetAccountInfoResponse(e,m,f)}else p=Ht._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ps(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ps(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zm(e))return"Blackberry";if(eg(e))return"Webos";if(Qm(e))return"Safari";if((e.includes("chrome/")||Ym(e))&&!e.includes("edge/"))return"Chrome";if(Xm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Gm(t=_t()){return/firefox\//i.test(t)}function Qm(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ym(t=_t()){return/crios\//i.test(t)}function Jm(t=_t()){return/iemobile/i.test(t)}function Xm(t=_t()){return/android/i.test(t)}function Zm(t=_t()){return/blackberry/i.test(t)}function eg(t=_t()){return/webos/i.test(t)}function nu(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Jw(t=_t()){return nu(t)&&!!window.navigator?.standalone}function Xw(){return fI()&&document.documentMode===10}function tg(t=_t()){return nu(t)||Xm(t)||eg(t)||Zm(t)||/windows phone/i.test(t)||Jm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t,e=[]){let n;switch(t){case"Browser":n=qf(_t());break;case"Worker":n=`${qf(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ds}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(t,e={}){return _r(t,"GET","/v2/passwordPolicy",gr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=6;class nA{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??tA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hf(this),this.idTokenSubscription=new Hf(this),this.beforeStateQueue=new Zw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$m,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ps.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ea(this,{idToken:e}),r=await Ht._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ft(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ta(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(Rn(this));const n=e?Je(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(Rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(Rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eA(this),n=new nA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new zi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Yw(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await ps.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ng(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Vw(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Hr(t){return Je(t)}class Hf{constructor(e){this.auth=e,this.observer=null,this.addObserver=vI(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Va={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sA(t){Va=t}function rg(t){return Va.loadJS(t)}function iA(){return Va.recaptchaEnterpriseScript}function oA(){return Va.gapiScript}function aA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class cA{constructor(){this.enterprise=new lA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class lA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const uA="recaptcha-enterprise",sg="NO_RECAPTCHA";class hA{constructor(e){this.type=uA,this.auth=Hr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{jw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new $w(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Uf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(sg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new cA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Uf(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=iA();l.length!==0&&(l+=c),rg(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Wf(t,e,n,r=!1,s=!1){const i=new hA(t);let o;if(s)o=sg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function al(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Wf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Wf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(t,e){const n=Xl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Mr(i,e??{}))return s;Qt(s,"already-initialized")}return n.initialize({options:e})}function dA(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(bn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function pA(t,e,n){const r=Hr(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ig(e),{host:o,port:c}=mA(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(Mr(u,r.config.emulator)&&Mr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ks(o)?(Vm(`${i}//${o}${l}`),Nm("Auth",!0)):gA()}function ig(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mA(t){const e=ig(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:zf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:zf(o)}}}function zf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}async function _A(t,e){return _r(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(t,e){return Qi(t,"POST","/v1/accounts:signInWithPassword",gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA(t,e){return Qi(t,"POST","/v1/accounts:signInWithEmailLink",gr(t,e))}async function vA(t,e){return Qi(t,"POST","/v1/accounts:signInWithEmailLink",gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends ru{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new xi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return al(e,n,"signInWithPassword",yA);case"emailLink":return EA(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return al(e,r,"signUpPassword",_A);case"emailLink":return vA(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(t,e){return Qi(t,"POST","/v1/accounts:signInWithIdp",gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA="http://localhost";class Fr extends ru{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Fr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ms(e,n)}buildRequest(){const e={requestUri:TA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ki(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wA(t){const e=si(ii(t)).link,n=e?si(ii(e)).deep_link_id:null,r=si(ii(t)).deep_link_id;return(r?si(ii(r)).link:null)||r||n||e||t}class su{constructor(e){const n=si(ii(e)),r=n.apiKey??null,s=n.oobCode??null,i=IA(n.mode??null);ae(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=wA(e);try{return new su(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.providerId=Vs.PROVIDER_ID}static credential(e,n){return xi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=su.parseLink(n);return ae(r,"argument-error"),xi._fromEmailAndCode(e,r.code,r.tenantId)}}Vs.PROVIDER_ID="password";Vs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends og{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Yi{constructor(){super("facebook.com")}static credential(e){return Fr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Yi{constructor(){super("github.com")}static credential(e){return Fr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Yi{constructor(){super("twitter.com")}static credential(e,n){return Fr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AA(t,e){return Qi(t,"POST","/v1/accounts:signUp",gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ht._fromIdTokenResponse(e,r,s),o=Kf(r);return new Ur({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Kf(r);return new Ur({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Kf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends On{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,na.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new na(e,n,r,s)}}function ag(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?na._fromErrorAndOperation(t,i,e,r):i})}async function bA(t,e,n=!1){const r=await Oi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ur._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RA(t,e,n=!1){const{auth:r}=t;if(Ft(r.app))return Promise.reject(Rn(r));const s="reauthenticate";try{const i=await Oi(t,ag(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=tu(i.idToken);ae(o,r,"internal-error");const{sub:c}=o;return ae(t.uid===c,r,"user-mismatch"),Ur._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Qt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cg(t,e,n=!1){if(Ft(t.app))return Promise.reject(Rn(t));const r="signIn",s=await ag(t,r,e),i=await Ur._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function SA(t,e){return cg(Hr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lg(t){const e=Hr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function PA(t,e,n){if(Ft(t.app))return Promise.reject(Rn(t));const r=Hr(t),o=await al(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",AA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&lg(t),l}),c=await Ur._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function CA(t,e,n){return Ft(t.app)?Promise.reject(Rn(t)):SA(Je(t),Vs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&lg(t),r})}function kA(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function DA(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function ug(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function VA(t){return Je(t).signOut()}const ra="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ra,"1"),this.storage.removeItem(ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=1e3,OA=10;class fg extends hg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=tg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Xw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,OA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},NA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fg.type="LOCAL";const xA=fg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg extends hg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}dg.type="SESSION";const pg=dg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Na(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await MA(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Na.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=iu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function FA(t){cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function UA(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BA(){return navigator?.serviceWorker?.controller||null}function $A(){return mg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="firebaseLocalStorageDb",jA=1,sa="firebaseLocalStorage",_g="fbase_key";class Ji{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oa(t,e){return t.transaction([sa],e?"readwrite":"readonly").objectStore(sa)}function qA(){const t=indexedDB.deleteDatabase(gg);return new Ji(t).toPromise()}function cl(){const t=indexedDB.open(gg,jA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(sa,{keyPath:_g})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(sa)?e(r):(r.close(),await qA(),e(await cl()))})})}async function Gf(t,e,n){const r=Oa(t,!0).put({[_g]:e,value:n});return new Ji(r).toPromise()}async function HA(t,e){const n=Oa(t,!1).get(e),r=await new Ji(n).toPromise();return r===void 0?null:r.value}function Qf(t,e){const n=Oa(t,!0).delete(e);return new Ji(n).toPromise()}const WA=800,zA=3;class yg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Na._getInstance($A()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await UA(),!this.activeServiceWorker)return;this.sender=new LA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cl();return await Gf(e,ra,"1"),await Qf(e,ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>HA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Oa(s,!1).getAll();return new Ji(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yg.type="LOCAL";const KA=yg;new Gi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(t,e){return e?bn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends ru{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function QA(t){return cg(t.auth,new ou(t),t.bypassAuthState)}function YA(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),RA(n,new ou(t),t.bypassAuthState)}async function JA(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),bA(n,new ou(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QA;case"linkViaPopup":case"linkViaRedirect":return JA;case"reauthViaPopup":case"reauthViaRedirect":return YA;default:Qt(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=new Gi(2e3,1e4);class os extends Eg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,os.currentPopupAction&&os.currentPopupAction.cancel(),os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=iu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,os.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,XA.get())};e()}}os.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA="pendingRedirect",Vo=new Map;class eb extends Eg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vo.get(this.auth._key());if(!e){try{const r=await tb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vo.set(this.auth._key(),e)}return this.bypassAuthState||Vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tb(t,e){const n=sb(e),r=rb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function nb(t,e){Vo.set(t._key(),e)}function rb(t){return bn(t._redirectPersistence)}function sb(t){return Do(ZA,t.config.apiKey,t.name)}async function ib(t,e,n=!1){if(Ft(t.app))return Promise.reject(Rn(t));const r=Hr(t),s=GA(r,e),o=await new eb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=600*1e3;class ab{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!vg(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(an(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ob&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yf(e))}saveEventToCache(e){this.cachedEventUids.add(Yf(e)),this.lastProcessedEventTime=Date.now()}}function Yf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vg({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function cb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lb(t,e={}){return _r(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hb=/^https?/;async function fb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lb(t);for(const n of e)try{if(db(n))return}catch{}Qt(t,"unauthorized-domain")}function db(t){const e=il(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hb.test(n))return!1;if(ub.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=new Gi(3e4,6e4);function Jf(){const t=cn().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mb(t){return new Promise((e,n)=>{function r(){Jf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jf(),n(an(t,"network-request-failed"))},timeout:pb.get()})}if(cn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(cn().gapi?.load)r();else{const s=aA("iframefcb");return cn()[s]=()=>{gapi.load?r():n(an(t,"network-request-failed"))},rg(`${oA()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw No=null,e})}let No=null;function gb(t){return No=No||mb(t),No}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=new Gi(5e3,15e3),yb="__/auth/iframe",Eb="emulator/auth/iframe",vb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ib(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?eu(e,Eb):`https://${t.config.authDomain}/${yb}`,r={apiKey:e.apiKey,appName:t.name,v:Ds},s=Tb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ki(r).slice(1)}`}async function wb(t){const e=await gb(t),n=cn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:Ib(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),c=cn().setTimeout(()=>{i(o)},_b.get());function l(){cn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bb=500,Rb=600,Sb="_blank",Pb="http://localhost";class Xf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Cb(t,e,n,r=bb,s=Rb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...Ab,width:r.toString(),height:s.toString(),top:i,left:o},u=_t().toLowerCase();n&&(c=Ym(u)?Sb:n),Gm(u)&&(e=e||Pb,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,b])=>`${m}${_}=${b},`,"");if(Jw(u)&&c!=="_self")return kb(e||"",c),new Xf(null);const p=window.open(e||"",c,f);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new Xf(p)}function kb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db="__/auth/handler",Vb="emulator/auth/handler",Nb=encodeURIComponent("fac");async function Zf(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ds,eventId:s};if(e instanceof og){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Yi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${Nb}=${encodeURIComponent(l)}`:"";return`${Ob(t)}?${Ki(c).slice(1)}${u}`}function Ob({config:t}){return t.emulator?eu(t,Vb):`https://${t.authDomain}/${Db}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="webStorageSupport";class xb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pg,this._completeRedirectFn=ib,this._overrideRedirectResult=nb}async _openPopup(e,n,r,s){kn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Zf(e,n,r,il(),s);return Cb(e,i,iu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Zf(e,n,r,il(),s);return FA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(kn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wb(e),r=new ab(e);return n.register("authEvent",s=>(ae(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vc,{type:Vc},s=>{const i=s?.[0]?.[Vc];i!==void 0&&n(!!i),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tg()||Qm()||nu()}}const Mb=xb;var ed="@firebase/auth",td="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ub(t){Is(new Lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ng(t)},u=new rA(r,s,i,l);return dA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Is(new Lr("auth-internal",e=>{const n=Hr(e.getProvider("auth").getImmediate());return(r=>new Lb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rr(ed,td,Fb(t)),rr(ed,td,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=300,$b=Dm("authIdTokenMaxAge")||Bb;let nd=null;const jb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$b)return;const s=n?.token;nd!==s&&(nd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function qb(t=Lm()){const e=Xl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fA(t,{popupRedirectResolver:Mb,persistence:[KA,xA,pg]}),r=Dm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=jb(i.toString());DA(n,o,()=>o(n.currentUser)),kA(n,c=>o(c))}}const s=Cm("auth");return s&&pA(n,`http://${s}`),n}function Hb(){return document.getElementsByTagName("head")?.[0]??document}sA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=an("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Hb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ub("Browser");var Wb="firebase",zb="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rr(Wb,zb,"app");var rd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sr,Tg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,E){function T(){}T.prototype=E.prototype,w.F=E.prototype,w.prototype=new T,w.prototype.constructor=w,w.D=function(R,A,P){for(var v=Array(arguments.length-2),je=2;je<arguments.length;je++)v[je-2]=arguments[je];return E.prototype[A].apply(R,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,E,T){T||(T=0);const R=Array(16);if(typeof E=="string")for(var A=0;A<16;++A)R[A]=E.charCodeAt(T++)|E.charCodeAt(T++)<<8|E.charCodeAt(T++)<<16|E.charCodeAt(T++)<<24;else for(A=0;A<16;++A)R[A]=E[T++]|E[T++]<<8|E[T++]<<16|E[T++]<<24;E=w.g[0],T=w.g[1],A=w.g[2];let P=w.g[3],v;v=E+(P^T&(A^P))+R[0]+3614090360&4294967295,E=T+(v<<7&4294967295|v>>>25),v=P+(A^E&(T^A))+R[1]+3905402710&4294967295,P=E+(v<<12&4294967295|v>>>20),v=A+(T^P&(E^T))+R[2]+606105819&4294967295,A=P+(v<<17&4294967295|v>>>15),v=T+(E^A&(P^E))+R[3]+3250441966&4294967295,T=A+(v<<22&4294967295|v>>>10),v=E+(P^T&(A^P))+R[4]+4118548399&4294967295,E=T+(v<<7&4294967295|v>>>25),v=P+(A^E&(T^A))+R[5]+1200080426&4294967295,P=E+(v<<12&4294967295|v>>>20),v=A+(T^P&(E^T))+R[6]+2821735955&4294967295,A=P+(v<<17&4294967295|v>>>15),v=T+(E^A&(P^E))+R[7]+4249261313&4294967295,T=A+(v<<22&4294967295|v>>>10),v=E+(P^T&(A^P))+R[8]+1770035416&4294967295,E=T+(v<<7&4294967295|v>>>25),v=P+(A^E&(T^A))+R[9]+2336552879&4294967295,P=E+(v<<12&4294967295|v>>>20),v=A+(T^P&(E^T))+R[10]+4294925233&4294967295,A=P+(v<<17&4294967295|v>>>15),v=T+(E^A&(P^E))+R[11]+2304563134&4294967295,T=A+(v<<22&4294967295|v>>>10),v=E+(P^T&(A^P))+R[12]+1804603682&4294967295,E=T+(v<<7&4294967295|v>>>25),v=P+(A^E&(T^A))+R[13]+4254626195&4294967295,P=E+(v<<12&4294967295|v>>>20),v=A+(T^P&(E^T))+R[14]+2792965006&4294967295,A=P+(v<<17&4294967295|v>>>15),v=T+(E^A&(P^E))+R[15]+1236535329&4294967295,T=A+(v<<22&4294967295|v>>>10),v=E+(A^P&(T^A))+R[1]+4129170786&4294967295,E=T+(v<<5&4294967295|v>>>27),v=P+(T^A&(E^T))+R[6]+3225465664&4294967295,P=E+(v<<9&4294967295|v>>>23),v=A+(E^T&(P^E))+R[11]+643717713&4294967295,A=P+(v<<14&4294967295|v>>>18),v=T+(P^E&(A^P))+R[0]+3921069994&4294967295,T=A+(v<<20&4294967295|v>>>12),v=E+(A^P&(T^A))+R[5]+3593408605&4294967295,E=T+(v<<5&4294967295|v>>>27),v=P+(T^A&(E^T))+R[10]+38016083&4294967295,P=E+(v<<9&4294967295|v>>>23),v=A+(E^T&(P^E))+R[15]+3634488961&4294967295,A=P+(v<<14&4294967295|v>>>18),v=T+(P^E&(A^P))+R[4]+3889429448&4294967295,T=A+(v<<20&4294967295|v>>>12),v=E+(A^P&(T^A))+R[9]+568446438&4294967295,E=T+(v<<5&4294967295|v>>>27),v=P+(T^A&(E^T))+R[14]+3275163606&4294967295,P=E+(v<<9&4294967295|v>>>23),v=A+(E^T&(P^E))+R[3]+4107603335&4294967295,A=P+(v<<14&4294967295|v>>>18),v=T+(P^E&(A^P))+R[8]+1163531501&4294967295,T=A+(v<<20&4294967295|v>>>12),v=E+(A^P&(T^A))+R[13]+2850285829&4294967295,E=T+(v<<5&4294967295|v>>>27),v=P+(T^A&(E^T))+R[2]+4243563512&4294967295,P=E+(v<<9&4294967295|v>>>23),v=A+(E^T&(P^E))+R[7]+1735328473&4294967295,A=P+(v<<14&4294967295|v>>>18),v=T+(P^E&(A^P))+R[12]+2368359562&4294967295,T=A+(v<<20&4294967295|v>>>12),v=E+(T^A^P)+R[5]+4294588738&4294967295,E=T+(v<<4&4294967295|v>>>28),v=P+(E^T^A)+R[8]+2272392833&4294967295,P=E+(v<<11&4294967295|v>>>21),v=A+(P^E^T)+R[11]+1839030562&4294967295,A=P+(v<<16&4294967295|v>>>16),v=T+(A^P^E)+R[14]+4259657740&4294967295,T=A+(v<<23&4294967295|v>>>9),v=E+(T^A^P)+R[1]+2763975236&4294967295,E=T+(v<<4&4294967295|v>>>28),v=P+(E^T^A)+R[4]+1272893353&4294967295,P=E+(v<<11&4294967295|v>>>21),v=A+(P^E^T)+R[7]+4139469664&4294967295,A=P+(v<<16&4294967295|v>>>16),v=T+(A^P^E)+R[10]+3200236656&4294967295,T=A+(v<<23&4294967295|v>>>9),v=E+(T^A^P)+R[13]+681279174&4294967295,E=T+(v<<4&4294967295|v>>>28),v=P+(E^T^A)+R[0]+3936430074&4294967295,P=E+(v<<11&4294967295|v>>>21),v=A+(P^E^T)+R[3]+3572445317&4294967295,A=P+(v<<16&4294967295|v>>>16),v=T+(A^P^E)+R[6]+76029189&4294967295,T=A+(v<<23&4294967295|v>>>9),v=E+(T^A^P)+R[9]+3654602809&4294967295,E=T+(v<<4&4294967295|v>>>28),v=P+(E^T^A)+R[12]+3873151461&4294967295,P=E+(v<<11&4294967295|v>>>21),v=A+(P^E^T)+R[15]+530742520&4294967295,A=P+(v<<16&4294967295|v>>>16),v=T+(A^P^E)+R[2]+3299628645&4294967295,T=A+(v<<23&4294967295|v>>>9),v=E+(A^(T|~P))+R[0]+4096336452&4294967295,E=T+(v<<6&4294967295|v>>>26),v=P+(T^(E|~A))+R[7]+1126891415&4294967295,P=E+(v<<10&4294967295|v>>>22),v=A+(E^(P|~T))+R[14]+2878612391&4294967295,A=P+(v<<15&4294967295|v>>>17),v=T+(P^(A|~E))+R[5]+4237533241&4294967295,T=A+(v<<21&4294967295|v>>>11),v=E+(A^(T|~P))+R[12]+1700485571&4294967295,E=T+(v<<6&4294967295|v>>>26),v=P+(T^(E|~A))+R[3]+2399980690&4294967295,P=E+(v<<10&4294967295|v>>>22),v=A+(E^(P|~T))+R[10]+4293915773&4294967295,A=P+(v<<15&4294967295|v>>>17),v=T+(P^(A|~E))+R[1]+2240044497&4294967295,T=A+(v<<21&4294967295|v>>>11),v=E+(A^(T|~P))+R[8]+1873313359&4294967295,E=T+(v<<6&4294967295|v>>>26),v=P+(T^(E|~A))+R[15]+4264355552&4294967295,P=E+(v<<10&4294967295|v>>>22),v=A+(E^(P|~T))+R[6]+2734768916&4294967295,A=P+(v<<15&4294967295|v>>>17),v=T+(P^(A|~E))+R[13]+1309151649&4294967295,T=A+(v<<21&4294967295|v>>>11),v=E+(A^(T|~P))+R[4]+4149444226&4294967295,E=T+(v<<6&4294967295|v>>>26),v=P+(T^(E|~A))+R[11]+3174756917&4294967295,P=E+(v<<10&4294967295|v>>>22),v=A+(E^(P|~T))+R[2]+718787259&4294967295,A=P+(v<<15&4294967295|v>>>17),v=T+(P^(A|~E))+R[9]+3951481745&4294967295,w.g[0]=w.g[0]+E&4294967295,w.g[1]=w.g[1]+(A+(v<<21&4294967295|v>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+P&4294967295}r.prototype.v=function(w,E){E===void 0&&(E=w.length);const T=E-this.blockSize,R=this.C;let A=this.h,P=0;for(;P<E;){if(A==0)for(;P<=T;)s(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<E;)if(R[A++]=w.charCodeAt(P++),A==this.blockSize){s(this,R),A=0;break}}else for(;P<E;)if(R[A++]=w[P++],A==this.blockSize){s(this,R),A=0;break}}this.h=A,this.o+=E},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var E=1;E<w.length-8;++E)w[E]=0;E=this.o*8;for(var T=w.length-8;T<w.length;++T)w[T]=E&255,E/=256;for(this.v(w),w=Array(16),E=0,T=0;T<4;++T)for(let R=0;R<32;R+=8)w[E++]=this.g[T]>>>R&255;return w};function i(w,E){var T=c;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=E(w)}function o(w,E){this.h=E;const T=[];let R=!0;for(let A=w.length-1;A>=0;A--){const P=w[A]|0;R&&P==E||(T[A]=P,R=!1)}this.g=T}var c={};function l(w){return-128<=w&&w<128?i(w,function(E){return new o([E|0],E<0?-1:0)}):new o([w|0],w<0?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return V(u(-w));const E=[];let T=1;for(let R=0;w>=T;R++)E[R]=w/T|0,T*=4294967296;return new o(E,0)}function f(w,E){if(w.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(w.charAt(0)=="-")return V(f(w.substring(1),E));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=u(Math.pow(E,8));let R=p;for(let P=0;P<w.length;P+=8){var A=Math.min(8,w.length-P);const v=parseInt(w.substring(P,P+A),E);A<8?(A=u(Math.pow(E,A)),R=R.j(A).add(u(v))):(R=R.j(T),R=R.add(u(v)))}return R}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-V(this).m();let w=0,E=1;for(let T=0;T<this.g.length;T++){const R=this.i(T);w+=(R>=0?R:4294967296+R)*E,E*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(b(this))return"0";if(k(this))return"-"+V(this).toString(w);const E=u(Math.pow(w,6));var T=this;let R="";for(;;){const A=H(T,E).g;T=B(T,A.j(E));let P=((T.g.length>0?T.g[0]:T.h)>>>0).toString(w);if(T=A,b(T))return P+R;for(;P.length<6;)P="0"+P;R=P+R}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function b(w){if(w.h!=0)return!1;for(let E=0;E<w.g.length;E++)if(w.g[E]!=0)return!1;return!0}function k(w){return w.h==-1}t.l=function(w){return w=B(this,w),k(w)?-1:b(w)?0:1};function V(w){const E=w.g.length,T=[];for(let R=0;R<E;R++)T[R]=~w.g[R];return new o(T,~w.h).add(m)}t.abs=function(){return k(this)?V(this):this},t.add=function(w){const E=Math.max(this.g.length,w.g.length),T=[];let R=0;for(let A=0;A<=E;A++){let P=R+(this.i(A)&65535)+(w.i(A)&65535),v=(P>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);R=v>>>16,P&=65535,v&=65535,T[A]=v<<16|P}return new o(T,T[T.length-1]&-2147483648?-1:0)};function B(w,E){return w.add(V(E))}t.j=function(w){if(b(this)||b(w))return p;if(k(this))return k(w)?V(this).j(V(w)):V(V(this).j(w));if(k(w))return V(this.j(V(w)));if(this.l(_)<0&&w.l(_)<0)return u(this.m()*w.m());const E=this.g.length+w.g.length,T=[];for(var R=0;R<2*E;R++)T[R]=0;for(R=0;R<this.g.length;R++)for(let A=0;A<w.g.length;A++){const P=this.i(R)>>>16,v=this.i(R)&65535,je=w.i(A)>>>16,wt=w.i(A)&65535;T[2*R+2*A]+=v*wt,U(T,2*R+2*A),T[2*R+2*A+1]+=P*wt,U(T,2*R+2*A+1),T[2*R+2*A+1]+=v*je,U(T,2*R+2*A+1),T[2*R+2*A+2]+=P*je,U(T,2*R+2*A+2)}for(w=0;w<E;w++)T[w]=T[2*w+1]<<16|T[2*w];for(w=E;w<2*E;w++)T[w]=0;return new o(T,0)};function U(w,E){for(;(w[E]&65535)!=w[E];)w[E+1]+=w[E]>>>16,w[E]&=65535,E++}function W(w,E){this.g=w,this.h=E}function H(w,E){if(b(E))throw Error("division by zero");if(b(w))return new W(p,p);if(k(w))return E=H(V(w),E),new W(V(E.g),V(E.h));if(k(E))return E=H(w,V(E)),new W(V(E.g),E.h);if(w.g.length>30){if(k(w)||k(E))throw Error("slowDivide_ only works with positive integers.");for(var T=m,R=E;R.l(w)<=0;)T=te(T),R=te(R);var A=oe(T,1),P=oe(R,1);for(R=oe(R,2),T=oe(T,2);!b(R);){var v=P.add(R);v.l(w)<=0&&(A=A.add(T),P=v),R=oe(R,1),T=oe(T,1)}return E=B(w,A.j(E)),new W(A,E)}for(A=p;w.l(E)>=0;){for(T=Math.max(1,Math.floor(w.m()/E.m())),R=Math.ceil(Math.log(T)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),P=u(T),v=P.j(E);k(v)||v.l(w)>0;)T-=R,P=u(T),v=P.j(E);b(P)&&(P=m),A=A.add(P),w=B(w,v)}return new W(A,w)}t.B=function(w){return H(this,w).h},t.and=function(w){const E=Math.max(this.g.length,w.g.length),T=[];for(let R=0;R<E;R++)T[R]=this.i(R)&w.i(R);return new o(T,this.h&w.h)},t.or=function(w){const E=Math.max(this.g.length,w.g.length),T=[];for(let R=0;R<E;R++)T[R]=this.i(R)|w.i(R);return new o(T,this.h|w.h)},t.xor=function(w){const E=Math.max(this.g.length,w.g.length),T=[];for(let R=0;R<E;R++)T[R]=this.i(R)^w.i(R);return new o(T,this.h^w.h)};function te(w){const E=w.g.length+1,T=[];for(let R=0;R<E;R++)T[R]=w.i(R)<<1|w.i(R-1)>>>31;return new o(T,w.h)}function oe(w,E){const T=E>>5;E%=32;const R=w.g.length-T,A=[];for(let P=0;P<R;P++)A[P]=E>0?w.i(P+T)>>>E|w.i(P+T+1)<<32-E:w.i(P+T);return new o(A,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Tg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,sr=o}).apply(typeof rd<"u"?rd:typeof self<"u"?self:typeof window<"u"?window:{});var Eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ig,oi,wg,Oo,ll,Ag,bg,Rg;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Eo=="object"&&Eo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in d))break e;d=d[C]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=l,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,C,D){for(var z=Array(arguments.length-2),de=2;de<arguments.length;de++)z[de-2]=arguments[de];return h.prototype[C].apply(g,z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function b(a,h){for(let g=1;g<arguments.length;g++){const C=arguments[g];var d=typeof C;if(d=d!="object"?d:C?Array.isArray(C)?"array":d:"null",d=="array"||d=="object"&&typeof C.length=="number"){d=a.length||0;const D=C.length||0;a.length=d+D;for(let z=0;z<D;z++)a[d+z]=C[z]}else a.push(C)}}class k{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(a){o.setTimeout(()=>{throw a},0)}function B(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class U{constructor(){this.h=this.g=null}add(h,d){const g=W.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var W=new k(()=>new H,a=>a.reset());class H{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let te,oe=!1,w=new U,E=()=>{const a=Promise.resolve(void 0);te=()=>{a.then(T)}};function T(){for(var a;a=B();){try{a.h.call(a.g)}catch(d){V(d)}var h=W;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}oe=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var P=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function v(a){return/^[\s\xa0]*$/.test(a)}function je(a,h){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(je,A),je.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&je.Z.h.call(this)},je.prototype.h=function(){je.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var wt="closure_listenable_"+(Math.random()*1e6|0),qe=0;function Ie(a,h,d,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=C,this.key=++qe,this.da=this.fa=!1}function ye(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function At(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function Jt(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function Pt(a){const h={};for(const d in a)h[d]=a[d];return h}const tt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gn(a,h){let d,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(d in g)a[d]=g[d];for(let D=0;D<tt.length;D++)d=tt[D],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function jt(a){this.src=a,this.g={},this.h=0}jt.prototype.add=function(a,h,d,g,C){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const z=at(a,h,g,C);return z>-1?(h=a[z],d||(h.fa=!1)):(h=new Ie(h,this.src,D,!!g,C),h.fa=d,a.push(h)),h};function xn(a,h){const d=h.type;if(d in a.g){var g=a.g[d],C=Array.prototype.indexOf.call(g,h,void 0),D;(D=C>=0)&&Array.prototype.splice.call(g,C,1),D&&(ye(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function at(a,h,d,g){for(let C=0;C<a.length;++C){const D=a[C];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==g)return C}return-1}var O="closure_lm_"+(Math.random()*1e6|0),J={};function G(a,h,d,g,C){if(Array.isArray(h)){for(let D=0;D<h.length;D++)G(a,h[D],d,g,C);return null}return d=K(d),a&&a[wt]?a.J(h,d,c(g)?!!g.capture:!1,C):ee(a,h,d,!1,g,C)}function ee(a,h,d,g,C,D){if(!h)throw Error("Invalid event type");const z=c(C)?!!C.capture:!!C;let de=F(a);if(de||(a[O]=de=new jt(a)),d=de.add(h,d,g,z,D),d.proxy)return d;if(g=Se(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)P||(C=z),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(S(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Se(){function a(d){return h.call(a.src,a.listener,d)}const h=M;return a}function y(a,h,d,g,C){if(Array.isArray(h))for(var D=0;D<h.length;D++)y(a,h[D],d,g,C);else g=c(g)?!!g.capture:!!g,d=K(d),a&&a[wt]?(a=a.i,D=String(h).toString(),D in a.g&&(h=a.g[D],d=at(h,d,g,C),d>-1&&(ye(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[D],a.h--)))):a&&(a=F(a))&&(h=a.g[h.toString()],a=-1,h&&(a=at(h,d,g,C)),(d=a>-1?h[a]:null)&&I(d))}function I(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[wt])xn(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(S(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=F(h))?(xn(d,a),d.h==0&&(d.src=null,h[O]=null)):ye(a)}}}function S(a){return a in J?J[a]:J[a]="on"+a}function M(a,h){if(a.da)a=!0;else{h=new je(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&I(a),a=d.call(g,h)}return a}function F(a){return a=a[O],a instanceof jt?a:null}var N="__closure_events_fn_"+(Math.random()*1e9>>>0);function K(a){return typeof a=="function"?a:(a[N]||(a[N]=function(h){return a.handleEvent(h)}),a[N])}function q(){R.call(this),this.i=new jt(this),this.M=this,this.G=null}p(q,R),q.prototype[wt]=!0,q.prototype.removeEventListener=function(a,h,d,g){y(this,a,h,d,g)};function $(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new A(h,a);else if(h instanceof A)h.target=h.target||a;else{var C=h;h=new A(g,a),gn(h,C)}C=!0;let D,z;if(d)for(z=d.length-1;z>=0;z--)D=h.g=d[z],C=j(D,g,!0,h)&&C;if(D=h.g=a,C=j(D,g,!0,h)&&C,C=j(D,g,!1,h)&&C,d)for(z=0;z<d.length;z++)D=h.g=d[z],C=j(D,g,!1,h)&&C}q.prototype.N=function(){if(q.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)ye(d[g]);delete a.g[h],a.h--}}this.G=null},q.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},q.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function j(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let C=!0;for(let D=0;D<h.length;++D){const z=h[D];if(z&&!z.da&&z.capture==d){const de=z.listener,Qe=z.ha||z.src;z.fa&&xn(a.i,z),C=de.call(Qe,g)!==!1&&C}}return C&&!g.defaultPrevented}function se(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Q(a){a.g=se(()=>{a.g=null,a.i&&(a.i=!1,Q(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class re extends R{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Q(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ie(a){R.call(this),this.h=a,this.g={}}p(ie,R);var pe=[];function Pe(a){At(a.g,function(h,d){this.g.hasOwnProperty(d)&&I(h)},a),a.g={}}ie.prototype.N=function(){ie.Z.N.call(this),Pe(this)},ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ve=o.JSON.stringify,ct=o.JSON.parse,lt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ct(){}function kt(){}var qt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Gr(){A.call(this,"d")}p(Gr,A);function nt(){A.call(this,"c")}p(nt,A);var Xe={},Fs=null;function Ir(){return Fs=Fs||new q}Xe.Ia="serverreachability";function Wu(a){A.call(this,Xe.Ia,a)}p(Wu,A);function Us(a){const h=Ir();$(h,new Wu(h))}Xe.STAT_EVENT="statevent";function zu(a,h){A.call(this,Xe.STAT_EVENT,a),this.stat=h}p(zu,A);function yt(a){const h=Ir();$(h,new zu(h,a))}Xe.Ja="timingevent";function Ku(a,h){A.call(this,Xe.Ja,a),this.size=h}p(Ku,A);function Bs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function $s(){this.g=!0}$s.prototype.ua=function(){this.g=!1};function ty(a,h,d,g,C,D){a.info(function(){if(a.g)if(D){var z="",de=D.split("&");for(let Ce=0;Ce<de.length;Ce++){var Qe=de[Ce].split("=");if(Qe.length>1){const Ze=Qe[0];Qe=Qe[1];const Zt=Ze.split("_");z=Zt.length>=2&&Zt[1]=="type"?z+(Ze+"="+Qe+"&"):z+(Ze+"=redacted&")}}}else z=null;else z=D;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+d+`
`+z})}function ny(a,h,d,g,C,D,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+d+`
`+D+" "+z})}function Qr(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+sy(a,d)+(g?" "+g:"")})}function ry(a,h){a.info(function(){return"TIMEOUT: "+h})}$s.prototype.info=function(){};function sy(a,h){if(!a.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var d=D[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var C=g[0];if(C!="noop"&&C!="stop"&&C!="close")for(let z=1;z<g.length;z++)g[z]=""}}}}return ve(D)}catch{return h}}var so={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Gu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Qu;function Xa(){}p(Xa,Ct),Xa.prototype.g=function(){return new XMLHttpRequest},Qu=new Xa;function js(a){return encodeURIComponent(String(a))}function iy(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Mn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new ie(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Yu}function Yu(){this.i=null,this.g="",this.h=!1}var Ju={},Za={};function ec(a,h,d){a.M=1,a.A=oo(Xt(h)),a.u=d,a.R=!0,Xu(a,null)}function Xu(a,h){a.F=Date.now(),io(a),a.B=Xt(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),hh(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Yu,a.g=Ch(a.j,d?h:null,!a.u),a.P>0&&(a.O=new re(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(pe[0]=C.toString()),C=pe);for(let D=0;D<C.length;D++){const z=G(d,C[D],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.J?Pt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Us(),ty(a.i,a.v,a.B,a.l,a.S,a.u)}Mn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Un(a)==3?h.j():this.Y(a)},Mn.prototype.Y=function(a){try{if(a==this.g)e:{const de=Un(this.g),Qe=this.g.ya(),Ce=this.g.ca();if(!(de<3)&&(de!=3||this.g&&(this.h.h||this.g.la()||yh(this.g)))){this.K||de!=4||Qe==7||(Qe==8||Ce<=0?Us(3):Us(2)),tc(this);var h=this.g.ca();this.X=h;var d=oy(this);if(this.o=h==200,ny(this.i,this.v,this.B,this.l,this.S,de,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,C=this.g;if((g=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(g)){var D=g;break t}}D=null}if(a=D)Qr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,nc(this,a);else{this.o=!1,this.m=3,yt(12),wr(this),qs(this);break e}}if(this.R){a=!0;let Ze;for(;!this.K&&this.C<d.length;)if(Ze=ay(this,d),Ze==Za){de==4&&(this.m=4,yt(14),a=!1),Qr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ze==Ju){this.m=4,yt(15),Qr(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Qr(this.i,this.l,Ze,null),nc(this,Ze);if(Zu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),de!=4||d.length!=0||this.h.h||(this.m=1,yt(16),a=!1),this.o=this.o&&a,!a)Qr(this.i,this.l,d,"[Invalid Chunked Response]"),wr(this),qs(this);else if(d.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),uc(z),z.P=!0,yt(11))}}else Qr(this.i,this.l,d,null),nc(this,d);de==4&&wr(this),this.o&&!this.K&&(de==4?bh(this.j,this):(this.o=!1,io(this)))}else Ty(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,yt(12)):(this.m=0,yt(13)),wr(this),qs(this)}}}catch{}finally{}};function oy(a){if(!Zu(a))return a.g.la();const h=yh(a.g);if(h==="")return"";let d="";const g=h.length,C=Un(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return wr(a),qs(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<g;D++)a.h.h=!0,d+=a.h.i.decode(h[D],{stream:!(C&&D==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Zu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function ay(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Za:(d=Number(h.substring(d,g)),isNaN(d)?Ju:(g+=1,g+d>h.length?Za:(h=h.slice(g,g+d),a.C=g+d,h)))}Mn.prototype.cancel=function(){this.K=!0,wr(this)};function io(a){a.T=Date.now()+a.H,eh(a,a.H)}function eh(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Bs(u(a.aa,a),h)}function tc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Mn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(ry(this.i,this.B),this.M!=2&&(Us(),yt(17)),wr(this),this.m=2,qs(this)):eh(this,this.T-a)};function qs(a){a.j.I==0||a.K||bh(a.j,a)}function wr(a){tc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Pe(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function nc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||rc(d.h,a))){if(!a.L&&rc(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)ho(d),lo(d);else break e;lc(d),yt(18)}}else d.xa=C[1],0<d.xa-d.K&&C[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Bs(u(d.Va,d),6e3));rh(d.h)<=1&&d.ta&&(d.ta=void 0)}else br(d,11)}else if((a.L||d.g==a)&&ho(d),!v(h))for(C=d.Ba.g.parse(h),h=0;h<C.length;h++){let Ce=C[h];const Ze=Ce[0];if(!(Ze<=d.K))if(d.K=Ze,Ce=Ce[1],d.I==2)if(Ce[0]=="c"){d.M=Ce[1],d.ba=Ce[2];const Zt=Ce[3];Zt!=null&&(d.ka=Zt,d.j.info("VER="+d.ka));const Rr=Ce[4];Rr!=null&&(d.za=Rr,d.j.info("SVER="+d.za));const Bn=Ce[5];Bn!=null&&typeof Bn=="number"&&Bn>0&&(g=1.5*Bn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const $n=a.g;if($n){const po=$n.g?$n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(po){var D=g.h;D.g||po.indexOf("spdy")==-1&&po.indexOf("quic")==-1&&po.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(sc(D,D.h),D.h=null))}if(g.G){const hc=$n.g?$n.g.getResponseHeader("X-HTTP-Session-Id"):null;hc&&(g.wa=hc,Oe(g.J,g.G,hc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var z=a;if(g.na=Ph(g,g.L?g.ba:null,g.W),z.L){sh(g.h,z);var de=z,Qe=g.O;Qe&&(de.H=Qe),de.D&&(tc(de),io(de)),g.g=z}else wh(g);d.i.length>0&&uo(d)}else Ce[0]!="stop"&&Ce[0]!="close"||br(d,7);else d.I==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?br(d,7):cc(d):Ce[0]!="noop"&&d.l&&d.l.qa(Ce),d.A=0)}}Us(4)}catch{}}var cy=class{constructor(a,h){this.g=a,this.map=h}};function th(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function nh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function rh(a){return a.h?1:a.g?a.g.size:0}function rc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function sc(a,h){a.g?a.g.add(h):a.h=h}function sh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}th.prototype.cancel=function(){if(this.i=ih(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ih(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return _(a.i)}var oh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ly(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let C,D=null;g>=0?(C=a[d].substring(0,g),D=a[d].substring(g+1)):C=a[d],h(C,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Ln(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Ln?(this.l=a.l,Hs(this,a.j),this.o=a.o,this.g=a.g,Ws(this,a.u),this.h=a.h,ic(this,fh(a.i)),this.m=a.m):a&&(h=String(a).match(oh))?(this.l=!1,Hs(this,h[1]||"",!0),this.o=zs(h[2]||""),this.g=zs(h[3]||"",!0),Ws(this,h[4]),this.h=zs(h[5]||"",!0),ic(this,h[6]||"",!0),this.m=zs(h[7]||"")):(this.l=!1,this.i=new Gs(null,this.l))}Ln.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Ks(h,ah,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ks(h,ah,!0),"@"),a.push(js(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ks(d,d.charAt(0)=="/"?fy:hy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ks(d,py)),a.join("")},Ln.prototype.resolve=function(a){const h=Xt(this);let d=!!a.j;d?Hs(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)Ws(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var C=h.h.lastIndexOf("/");C!=-1&&(g=h.h.slice(0,C+1)+g)}if(C=g,C==".."||C==".")g="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){g=C.lastIndexOf("/",0)==0,C=C.split("/");const D=[];for(let z=0;z<C.length;){const de=C[z++];de=="."?g&&z==C.length&&D.push(""):de==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),g&&z==C.length&&D.push("")):(D.push(de),g=!0)}g=D.join("/")}else g=C}return d?h.h=g:d=a.i.toString()!=="",d?ic(h,fh(a.i)):d=!!a.m,d&&(h.m=a.m),h};function Xt(a){return new Ln(a)}function Hs(a,h,d){a.j=d?zs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ws(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function ic(a,h,d){h instanceof Gs?(a.i=h,my(a.i,a.l)):(d||(h=Ks(h,dy)),a.i=new Gs(h,a.l))}function Oe(a,h,d){a.i.set(h,d)}function oo(a){return Oe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function zs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ks(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,uy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function uy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ah=/[#\/\?@]/g,hy=/[#\?:]/g,fy=/[#\?]/g,dy=/[#\?@]/g,py=/#/g;function Gs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ar(a){a.g||(a.g=new Map,a.h=0,a.i&&ly(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Gs.prototype,t.add=function(a,h){Ar(this),this.i=null,a=Yr(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function ch(a,h){Ar(a),h=Yr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function lh(a,h){return Ar(a),h=Yr(a,h),a.g.has(h)}t.forEach=function(a,h){Ar(this),this.g.forEach(function(d,g){d.forEach(function(C){a.call(h,C,g,this)},this)},this)};function uh(a,h){Ar(a);let d=[];if(typeof h=="string")lh(a,h)&&(d=d.concat(a.g.get(Yr(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Ar(this),this.i=null,a=Yr(this,a),lh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=uh(this,a),a.length>0?String(a[0]):h):h};function hh(a,h,d){ch(a,h),d.length>0&&(a.i=null,a.g.set(Yr(a,h),_(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const C=js(d);d=uh(this,d);for(let D=0;D<d.length;D++){let z=C;d[D]!==""&&(z+="="+js(d[D])),a.push(z)}}return this.i=a.join("&")};function fh(a){const h=new Gs;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Yr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function my(a,h){h&&!a.j&&(Ar(a),a.i=null,a.g.forEach(function(d,g){const C=g.toLowerCase();g!=C&&(ch(this,g),hh(this,C,d))},a)),a.j=h}function gy(a,h){const d=new $s;if(o.Image){const g=new Image;g.onload=f(Fn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(Fn,d,"TestLoadImage: error",!1,h,g),g.onabort=f(Fn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(Fn,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function _y(a,h){const d=new $s,g=new AbortController,C=setTimeout(()=>{g.abort(),Fn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(C),D.ok?Fn(d,"TestPingServer: ok",!0,h):Fn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),Fn(d,"TestPingServer: error",!1,h)})}function Fn(a,h,d,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(d)}catch{}}function yy(){this.g=new lt}function oc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(oc,Ct),oc.prototype.g=function(){return new ao(this.i,this.h)};function ao(a,h){q.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(ao,q),t=ao.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ys(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Qs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ys(this)),this.g&&(this.readyState=3,Ys(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;dh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function dh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Qs(this):Ys(this),this.readyState==3&&dh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Qs(this))},t.Na=function(a){this.g&&(this.response=a,Qs(this))},t.ga=function(){this.g&&Qs(this)};function Qs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ys(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ys(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ao.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ph(a){let h="";return At(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function ac(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=ph(d),typeof a=="string"?d!=null&&js(d):Oe(a,h,d))}function Ue(a){q.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ue,q);var Ey=/^https?$/i,vy=["POST","PUT"];t=Ue.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Qu.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){mh(this,D);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)d.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(vy,h,void 0)>=0)||g||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of d)this.g.setRequestHeader(D,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){mh(this,D)}};function mh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,gh(a),co(a)}function gh(a){a.A||(a.A=!0,$(a,"complete"),$(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,$(this,"complete"),$(this,"abort"),co(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),co(this,!0)),Ue.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?_h(this):this.Xa())},t.Xa=function(){_h(this)};function _h(a){if(a.h&&typeof i<"u"){if(a.v&&Un(a)==4)setTimeout(a.Ca.bind(a),0);else if($(a,"readystatechange"),Un(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=D===0){let z=String(a.D).match(oh)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),g=!Ey.test(z?z.toLowerCase():"")}d=g}if(d)$(a,"complete"),$(a,"success");else{a.o=6;try{var C=Un(a)>2?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.ca()+"]",gh(a)}}finally{co(a)}}}}function co(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||$(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Un(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Un(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ct(h)}};function yh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ty(a){const h={};a=(a.g&&Un(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var d=iy(a[g]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[C]||[];h[C]=D,D.push(d)}Jt(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Js(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Eh(a){this.za=0,this.i=[],this.j=new $s,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Js("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Js("baseRetryDelayMs",5e3,a),this.Za=Js("retryDelaySeedMs",1e4,a),this.Ta=Js("forwardChannelMaxRetries",2,a),this.va=Js("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new th(a&&a.concurrentRequestLimit),this.Ba=new yy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Eh.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){yt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Ph(this,null,this.W),uo(this)};function cc(a){if(vh(a),a.I==3){var h=a.V++,d=Xt(a.J);if(Oe(d,"SID",a.M),Oe(d,"RID",h),Oe(d,"TYPE","terminate"),Xs(a,d),h=new Mn(a,a.j,h),h.M=2,h.A=oo(Xt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Ch(h.j,null),h.g.ea(h.A)),h.F=Date.now(),io(h)}Sh(a)}function lo(a){a.g&&(uc(a),a.g.cancel(),a.g=null)}function vh(a){lo(a),a.v&&(o.clearTimeout(a.v),a.v=null),ho(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function uo(a){if(!nh(a.h)&&!a.m){a.m=!0;var h=a.Ea;te||E(),oe||(te(),oe=!0),w.add(h,a),a.D=0}}function Iy(a,h){return rh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Bs(u(a.Ea,a,h),Rh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new Mn(this,this.j,a);let D=this.o;if(this.U&&(D?(D=Pt(D),gn(D,this.U)):D=this.U),this.u!==null||this.R||(C.J=D,D=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Ih(this,C,h),d=Xt(this.J),Oe(d,"RID",a),Oe(d,"CVER",22),this.G&&Oe(d,"X-HTTP-Session-Id",this.G),Xs(this,d),D&&(this.R?h="headers="+js(ph(D))+"&"+h:this.u&&ac(d,this.u,D)),sc(this.h,C),this.Ra&&Oe(d,"TYPE","init"),this.S?(Oe(d,"$req",h),Oe(d,"SID","null"),C.U=!0,ec(C,d,null)):ec(C,d,h),this.I=2}}else this.I==3&&(a?Th(this,a):this.i.length==0||nh(this.h)||Th(this))};function Th(a,h){var d;h?d=h.l:d=a.V++;const g=Xt(a.J);Oe(g,"SID",a.M),Oe(g,"RID",d),Oe(g,"AID",a.K),Xs(a,g),a.u&&a.o&&ac(g,a.u,a.o),d=new Mn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Ih(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),sc(a.h,d),ec(d,g,h)}function Xs(a,h){a.H&&At(a.H,function(d,g){Oe(h,g,d)}),a.l&&At({},function(d,g){Oe(h,g,d)})}function Ih(a,h,d){d=Math.min(a.i.length,d);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var C=a.i;let de=-1;for(;;){const Qe=["count="+d];de==-1?d>0?(de=C[0].g,Qe.push("ofs="+de)):de=0:Qe.push("ofs="+de);let Ce=!0;for(let Ze=0;Ze<d;Ze++){var D=C[Ze].g;const Zt=C[Ze].map;if(D-=de,D<0)de=Math.max(0,C[Ze].g-100),Ce=!1;else try{D="req"+D+"_"||"";try{var z=Zt instanceof Map?Zt:Object.entries(Zt);for(const[Rr,Bn]of z){let $n=Bn;c(Bn)&&($n=ve(Bn)),Qe.push(D+Rr+"="+encodeURIComponent($n))}}catch(Rr){throw Qe.push(D+"type="+encodeURIComponent("_badmap")),Rr}}catch{g&&g(Zt)}}if(Ce){z=Qe.join("&");break e}}z=void 0}return a=a.i.splice(0,d),h.G=a,z}function wh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;te||E(),oe||(te(),oe=!0),w.add(h,a),a.A=0}}function lc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Bs(u(a.Da,a),Rh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Ah(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Bs(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,yt(10),lo(this),Ah(this))};function uc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Ah(a){a.g=new Mn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Xt(a.na);Oe(h,"RID","rpc"),Oe(h,"SID",a.M),Oe(h,"AID",a.K),Oe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Oe(h,"TO",a.ia),Oe(h,"TYPE","xmlhttp"),Xs(a,h),a.u&&a.o&&ac(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=oo(Xt(h)),d.u=null,d.R=!0,Xu(d,a)}t.Va=function(){this.C!=null&&(this.C=null,lo(this),lc(this),yt(19))};function ho(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function bh(a,h){var d=null;if(a.g==h){ho(a),uc(a),a.g=null;var g=2}else if(rc(a.h,h))d=h.G,sh(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var C=a.D;g=Ir(),$(g,new Ku(g,d)),uo(a)}else wh(a);else if(C=h.m,C==3||C==0&&h.X>0||!(g==1&&Iy(a,h)||g==2&&lc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),C){case 1:br(a,5);break;case 4:br(a,10);break;case 3:br(a,6);break;default:br(a,2)}}}function Rh(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function br(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),g=a.Ua;const C=!g;g=new Ln(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Hs(g,"https"),oo(g),C?gy(g.toString(),d):_y(g.toString(),d)}else yt(2);a.I=0,a.l&&a.l.pa(h),Sh(a),vh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Sh(a){if(a.I=0,a.ja=[],a.l){const h=ih(a.h);(h.length!=0||a.i.length!=0)&&(b(a.ja,h),b(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function Ph(a,h,d){var g=d instanceof Ln?Xt(d):new Ln(d);if(g.g!="")h&&(g.g=h+"."+g.g),Ws(g,g.u);else{var C=o.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;const D=new Ln(null);g&&Hs(D,g),h&&(D.g=h),C&&Ws(D,C),d&&(D.h=d),g=D}return d=a.G,h=a.wa,d&&h&&Oe(g,d,h),Oe(g,"VER",a.ka),Xs(a,g),g}function Ch(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ue(new oc({ab:d})):new Ue(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function kh(){}t=kh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function fo(){}fo.prototype.g=function(a,h){return new Dt(a,h)};function Dt(a,h){q.call(this),this.g=new Eh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!v(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Jr(this)}p(Dt,q),Dt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){cc(this.g)},Dt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=ve(a),a=d);h.i.push(new cy(h.Ya++,a)),h.I==3&&uo(h)},Dt.prototype.N=function(){this.g.l=null,delete this.j,cc(this.g),delete this.g,Dt.Z.N.call(this)};function Dh(a){Gr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Dh,Gr);function Vh(){nt.call(this),this.status=1}p(Vh,nt);function Jr(a){this.g=a}p(Jr,kh),Jr.prototype.ra=function(){$(this.g,"a")},Jr.prototype.qa=function(a){$(this.g,new Dh(a))},Jr.prototype.pa=function(a){$(this.g,new Vh)},Jr.prototype.oa=function(){$(this.g,"b")},fo.prototype.createWebChannel=fo.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,Rg=function(){return new fo},bg=function(){return Ir()},Ag=Xe,ll={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},so.NO_ERROR=0,so.TIMEOUT=8,so.HTTP_ERROR=6,Oo=so,Gu.COMPLETE="complete",wg=Gu,kt.EventType=qt,qt.OPEN="a",qt.CLOSE="b",qt.ERROR="c",qt.MESSAGE="d",q.prototype.listen=q.prototype.J,oi=kt,Ue.prototype.listenOnce=Ue.prototype.K,Ue.prototype.getLastError=Ue.prototype.Ha,Ue.prototype.getLastErrorCode=Ue.prototype.ya,Ue.prototype.getStatus=Ue.prototype.ca,Ue.prototype.getResponseJson=Ue.prototype.La,Ue.prototype.getResponseText=Ue.prototype.la,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Fa,Ig=Ue}).apply(typeof Eo<"u"?Eo:typeof self<"u"?self:typeof window<"u"?window:{});const sd="@firebase/firestore",id="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Yl("@firebase/firestore");function ns(){return Br.logLevel}function Z(t,...e){if(Br.logLevel<=me.DEBUG){const n=e.map(au);Br.debug(`Firestore (${Ns}): ${t}`,...n)}}function Dn(t,...e){if(Br.logLevel<=me.ERROR){const n=e.map(au);Br.error(`Firestore (${Ns}): ${t}`,...n)}}function ws(t,...e){if(Br.logLevel<=me.WARN){const n=e.map(au);Br.warn(`Firestore (${Ns}): ${t}`,...n)}}function au(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Sg(t,r,n)}function Sg(t,e,n){let r=`FIRESTORE (${Ns}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Dn(r),new Error(r)}function Re(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Sg(e,s,r)}function he(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends On{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Kb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(ht.UNAUTHENTICATED)))}shutdown(){}}class Gb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Qb{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Re(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ir,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ir)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string",31837,{l:r}),new Pg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string",2055,{h:e}),new ht(e)}}class Yb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Jb{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Yb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(ht.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class od{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Re(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new od(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Re(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new od(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Zb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function ul(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Nc(s)===Nc(i)?ge(s,i):Nc(s)?1:-1}return ge(t.length,e.length)}const eR=55296,tR=57343;function Nc(t){const e=t.charCodeAt(0);return e>=eR&&e<=tR}function As(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="__name__";class rn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ce(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=rn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ge(e.length,n.length)}static compareSegments(e,n){const r=rn.isNumericId(e),s=rn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?rn.extractNumericId(e).compare(rn.extractNumericId(n)):ul(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return sr.fromString(e.substring(4,e.length-2))}}class Ne extends rn{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Ne(n)}static emptyPath(){return new Ne([])}}const nR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends rn{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return nR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ad}static keyField(){return new it([ad])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Y(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Y(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Y(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Ne.fromString(e))}static fromName(e){return new ne(Ne.fromString(e).popFirst(5))}static empty(){return new ne(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Ne(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t,e,n){if(!n)throw new Y(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rR(t,e,n,r){if(e===!0&&r===!0)throw new Y(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cd(t){if(!ne.isDocumentKey(t))throw new Y(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ld(t){if(ne.isDocumentKey(t))throw new Y(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function kg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function xa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce(12329,{type:typeof t})}function ln(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xa(t);throw new Y(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t,e){const n={typeString:t};return e&&(n.value=e),n}function Xi(t,e){if(!kg(t))throw new Y(x.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Y(x.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=-62135596800,hd=1e6;class xe{static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*hd);return new xe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ud)throw new Y(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hd}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Xi(e,xe._jsonSchema))return new xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ud;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}xe._jsonSchemaVersion="firestore/timestamp/1.0",xe._jsonSchema={type:ze("string",xe._jsonSchemaVersion),seconds:ze("number"),nanoseconds:ze("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{static fromTimestamp(e){return new le(e)}static min(){return new le(new xe(0,0))}static max(){return new le(new xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=-1;function sR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new lr(s,ne.empty(),e)}function iR(t){return new lr(t.readTime,t.key,Mi)}class lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new lr(le.min(),ne.empty(),Mi)}static max(){return new lr(le.max(),ne.empty(),Mi)}}function oR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Os(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==aR)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):L.reject(n)}static resolve(e){return new L(((n,r)=>{n(e)}))}static reject(e){return new L(((n,r)=>{r(e)}))}static waitFor(e){return new L(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next((s=>s?L.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new L(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((f=>{o[u]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new L(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function lR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function xs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ma.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=-1;function La(t){return t==null}function ia(t){return t===0&&1/t==-1/0}function uR(t){return typeof t=="number"&&Number.isInteger(t)&&!ia(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="";function hR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=fd(e)),e=fR(t.get(n),e);return fd(e)}function fR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Dg:n+="";break;default:n+=i}}return n}function fd(t){return t+Dg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function yr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Vg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vo(this.root,e,this.comparator,!1)}getReverseIterator(){return new vo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vo(this.root,e,this.comparator,!0)}}class vo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new pd(this.data.getIterator())}getIteratorFrom(e){return new pd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class pd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new Ye(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return As(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ng("Invalid base64 string: "+i):i}})(e);return new ot(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const dR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(t){if(Re(!!t,39018),typeof t=="string"){let e=0;const n=dR.exec(t);if(Re(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function hr(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="server_timestamp",xg="__type__",Mg="__previous_value__",Lg="__local_write_time__";function uu(t){return(t?.mapValue?.fields||{})[xg]?.stringValue===Og}function Fa(t){const e=t.mapValue.fields[Mg];return uu(e)?Fa(e):e}function Li(t){const e=ur(t.mapValue.fields[Lg].timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const oa="(default)";class Fi{constructor(e,n){this.projectId=e,this.database=n||oa}static empty(){return new Fi("","")}get isDefaultDatabase(){return this.database===oa}isEqual(e){return e instanceof Fi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="__type__",mR="__max__",To={mapValue:{}},Ug="__vector__",aa="value";function fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?uu(t)?4:_R(t)?9007199254740991:gR(t)?10:11:ce(28295,{value:t})}function mn(t,e){if(t===e)return!0;const n=fr(t);if(n!==fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Li(t).isEqual(Li(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ur(s.timestampValue),c=ur(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return hr(s.bytesValue).isEqual(hr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Be(s.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(s.geoPointValue.longitude)===Be(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Be(s.integerValue)===Be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Be(s.doubleValue),c=Be(i.doubleValue);return o===c?ia(o)===ia(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return As(t.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(dd(o)!==dd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!mn(o[l],c[l])))return!1;return!0})(t,e);default:return ce(52216,{left:t})}}function Ui(t,e){return(t.values||[]).find((n=>mn(n,e)))!==void 0}function bs(t,e){if(t===e)return 0;const n=fr(t),r=fr(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=Be(i.integerValue||i.doubleValue),l=Be(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return md(t.timestampValue,e.timestampValue);case 4:return md(Li(t),Li(e));case 5:return ul(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=hr(i),l=hr(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=ge(c[u],l[u]);if(f!==0)return f}return ge(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=ge(Be(i.latitude),Be(o.latitude));return c!==0?c:ge(Be(i.longitude),Be(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return gd(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const c=i.fields||{},l=o.fields||{},u=c[aa]?.arrayValue,f=l[aa]?.arrayValue,p=ge(u?.values?.length||0,f?.values?.length||0);return p!==0?p:gd(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===To.mapValue&&o===To.mapValue)return 0;if(i===To.mapValue)return 1;if(o===To.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=ul(l[p],f[p]);if(m!==0)return m;const _=bs(c[l[p]],u[f[p]]);if(_!==0)return _}return ge(l.length,f.length)})(t.mapValue,e.mapValue);default:throw ce(23264,{he:n})}}function md(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=ur(t),r=ur(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function gd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=bs(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function Rs(t){return hl(t)}function hl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=ur(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return hr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ne.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=hl(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${hl(n.fields[o])}`;return s+"}"})(t.mapValue):ce(61005,{value:t})}function xo(t){switch(fr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fa(t);return e?16+xo(e):16;case 5:return 2*t.stringValue.length;case 6:return hr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+xo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return yr(r.fields,((i,o)=>{s+=i.length+xo(o)})),s})(t.mapValue);default:throw ce(13486,{value:t})}}function _d(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fl(t){return!!t&&"integerValue"in t}function hu(t){return!!t&&"arrayValue"in t}function yd(t){return!!t&&"nullValue"in t}function Ed(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mo(t){return!!t&&"mapValue"in t}function gR(t){return(t?.mapValue?.fields||{})[Fg]?.stringValue===Ug}function Ti(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return yr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Ti(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ti(t.arrayValue.values[n]);return e}return{...t}}function _R(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===mR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ti(n)}setAll(e){let n=it.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ti(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Mo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Mo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){yr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new St(Ti(this.value))}}function Bg(t){const e=[];return yr(t.fields,((n,r)=>{const s=new it([n]);if(Mo(r)){const i=Bg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new dt(e,0,le.min(),le.min(),le.min(),St.empty(),0)}static newFoundDocument(e,n,r,s){return new dt(e,1,n,le.min(),r,s,0)}static newNoDocument(e,n){return new dt(e,2,n,le.min(),le.min(),St.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,le.min(),le.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n){this.position=e,this.inclusive=n}}function vd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=bs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Td(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,n="asc"){this.field=e,this.dir=n}}function yR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{}class We extends $g{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new vR(e,n,r):n==="array-contains"?new wR(e,r):n==="in"?new AR(e,r):n==="not-in"?new bR(e,r):n==="array-contains-any"?new RR(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new TR(e,r):new IR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(bs(n,this.value)):n!==null&&fr(this.value)===fr(n)&&this.matchesComparison(bs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends $g{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Yt(e,n)}matches(e){return jg(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function jg(t){return t.op==="and"}function qg(t){return ER(t)&&jg(t)}function ER(t){for(const e of t.filters)if(e instanceof Yt)return!1;return!0}function dl(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Rs(t.value);if(qg(t))return t.filters.map((e=>dl(e))).join(",");{const e=t.filters.map((n=>dl(n))).join(",");return`${t.op}(${e})`}}function Hg(t,e){return t instanceof We?(function(r,s){return s instanceof We&&r.op===s.op&&r.field.isEqual(s.field)&&mn(r.value,s.value)})(t,e):t instanceof Yt?(function(r,s){return s instanceof Yt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&Hg(o,s.filters[c])),!0):!1})(t,e):void ce(19439)}function Wg(t){return t instanceof We?(function(n){return`${n.field.canonicalString()} ${n.op} ${Rs(n.value)}`})(t):t instanceof Yt?(function(n){return n.op.toString()+" {"+n.getFilters().map(Wg).join(" ,")+"}"})(t):"Filter"}class vR extends We{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class TR extends We{constructor(e,n){super(e,"in",n),this.keys=zg("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class IR extends We{constructor(e,n){super(e,"not-in",n),this.keys=zg("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function zg(t,e){return(e.arrayValue?.values||[]).map((n=>ne.fromName(n.referenceValue)))}class wR extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hu(n)&&Ui(n.arrayValue,this.value)}}class AR extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ui(this.value.arrayValue,n)}}class bR extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ui(this.value.arrayValue,n)}}class RR extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Ui(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Id(t,e=null,n=[],r=[],s=null,i=null,o=null){return new SR(t,e,n,r,s,i,o)}function fu(t){const e=he(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>dl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),La(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Rs(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Rs(r))).join(",")),e.Te=n}return e.Te}function du(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Hg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Td(t.startAt,e.startAt)&&Td(t.endAt,e.endAt)}function pl(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function PR(t,e,n,r,s,i,o,c){return new Ms(t,e,n,r,s,i,o,c)}function pu(t){return new Ms(t)}function wd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Kg(t){return t.collectionGroup!==null}function Ii(t){const e=he(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ye(it.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Bi(i,r))})),n.has(it.keyField().canonicalString())||e.Ie.push(new Bi(it.keyField(),r))}return e.Ie}function un(t){const e=he(t);return e.Ee||(e.Ee=CR(e,Ii(t))),e.Ee}function CR(t,e){if(t.limitType==="F")return Id(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Bi(s.field,i)}));const n=t.endAt?new ca(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ca(t.startAt.position,t.startAt.inclusive):null;return Id(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ml(t,e){const n=t.filters.concat([e]);return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function gl(t,e,n){return new Ms(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ua(t,e){return du(un(t),un(e))&&t.limitType===e.limitType}function Gg(t){return`${fu(un(t))}|lt:${t.limitType}`}function rs(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Wg(s))).join(", ")}]`),La(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Rs(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Rs(s))).join(",")),`Target(${r})`})(un(t))}; limitType=${t.limitType})`}function Ba(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Ii(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=vd(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,Ii(r),s)||r.endAt&&!(function(o,c,l){const u=vd(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,Ii(r),s))})(t,e)}function kR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Qg(t){return(e,n)=>{let r=!1;for(const s of Ii(t)){const i=DR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function DR(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?bs(l,u):ce(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){yr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Vg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=new Fe(ne.comparator);function Vn(){return VR}const Yg=new Fe(ne.comparator);function ai(...t){let e=Yg;for(const n of t)e=e.insert(n.key,n);return e}function Jg(t){let e=Yg;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Dr(){return wi()}function Xg(){return wi()}function wi(){return new Wr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const NR=new Fe(ne.comparator),OR=new Ye(ne.comparator);function _e(...t){let e=OR;for(const n of t)e=e.add(n);return e}const xR=new Ye(ge);function MR(){return xR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ia(e)?"-0":e}}function Zg(t){return{integerValue:""+t}}function LR(t,e){return uR(e)?Zg(e):mu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){this._=void 0}}function FR(t,e,n){return t instanceof la?(function(s,i){const o={fields:{[xg]:{stringValue:Og},[Lg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&uu(i)&&(i=Fa(i)),i&&(o.fields[Mg]=i),{mapValue:o}})(n,e):t instanceof $i?t_(t,e):t instanceof ji?n_(t,e):(function(s,i){const o=e_(s,i),c=Ad(o)+Ad(s.Ae);return fl(o)&&fl(s.Ae)?Zg(c):mu(s.serializer,c)})(t,e)}function UR(t,e,n){return t instanceof $i?t_(t,e):t instanceof ji?n_(t,e):n}function e_(t,e){return t instanceof ua?(function(r){return fl(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class la extends $a{}class $i extends $a{constructor(e){super(),this.elements=e}}function t_(t,e){const n=r_(e);for(const r of t.elements)n.some((s=>mn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class ji extends $a{constructor(e){super(),this.elements=e}}function n_(t,e){let n=r_(e);for(const r of t.elements)n=n.filter((s=>!mn(s,r)));return{arrayValue:{values:n}}}class ua extends $a{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Ad(t){return Be(t.integerValue||t.doubleValue)}function r_(t){return hu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function BR(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof $i&&s instanceof $i||r instanceof ji&&s instanceof ji?As(r.elements,s.elements,mn):r instanceof ua&&s instanceof ua?mn(r.Ae,s.Ae):r instanceof la&&s instanceof la})(t.transform,e.transform)}class $R{constructor(e,n){this.version=e,this.transformResults=n}}class Kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ja{}function s_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gu(t.key,Kt.none()):new Zi(t.key,t.data,Kt.none());{const n=t.data,r=St.empty();let s=new Ye(it.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Er(t.key,r,new Mt(s.toArray()),Kt.none())}}function jR(t,e,n){t instanceof Zi?(function(s,i,o){const c=s.value.clone(),l=Rd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Er?(function(s,i,o){if(!Lo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Rd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(i_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Ai(t,e,n,r){return t instanceof Zi?(function(i,o,c,l){if(!Lo(i.precondition,o))return c;const u=i.value.clone(),f=Sd(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof Er?(function(i,o,c,l){if(!Lo(i.precondition,o))return c;const u=Sd(i.fieldTransforms,l,o),f=o.data;return f.setAll(i_(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return Lo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function qR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=e_(r.transform,s||null);i!=null&&(n===null&&(n=St.empty()),n.set(r.field,i))}return n||null}function bd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&As(r,s,((i,o)=>BR(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zi extends ja{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Er extends ja{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function i_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Rd(t,e,n){const r=new Map;Re(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,UR(o,c,n[s]))}return r}function Sd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,FR(i,o,e))}return r}class gu extends ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class HR extends ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&jR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ai(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ai(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Xg();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=s_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),_e())}isEqual(e){return this.batchId===e.batchId&&As(this.mutations,e.mutations,((n,r)=>bd(n,r)))&&As(this.baseMutations,e.baseMutations,((n,r)=>bd(n,r)))}}class _u{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Re(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return NR})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new _u(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He,Ee;function GR(t){switch(t){case x.OK:return ce(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return ce(15467,{code:t})}}function o_(t){if(t===void 0)return Dn("GRPC error has no .code"),x.UNKNOWN;switch(t){case He.OK:return x.OK;case He.CANCELLED:return x.CANCELLED;case He.UNKNOWN:return x.UNKNOWN;case He.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case He.INTERNAL:return x.INTERNAL;case He.UNAVAILABLE:return x.UNAVAILABLE;case He.UNAUTHENTICATED:return x.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case He.NOT_FOUND:return x.NOT_FOUND;case He.ALREADY_EXISTS:return x.ALREADY_EXISTS;case He.PERMISSION_DENIED:return x.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case He.ABORTED:return x.ABORTED;case He.OUT_OF_RANGE:return x.OUT_OF_RANGE;case He.UNIMPLEMENTED:return x.UNIMPLEMENTED;case He.DATA_LOSS:return x.DATA_LOSS;default:return ce(39323,{code:t})}}(Ee=He||(He={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=new sr([4294967295,4294967295],0);function Pd(t){const e=QR().encode(t),n=new Tg;return n.update(e),new Uint8Array(n.digest())}function Cd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new sr([n,r],0),new sr([s,i],0)]}class yu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ci(`Invalid padding: ${n}`);if(r<0)throw new ci(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ci(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ci(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=sr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(sr.fromNumber(r)));return s.compare(YR)===1&&(s=new sr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Pd(e),[r,s]=Cd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new yu(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const n=Pd(e),[r,s]=Cd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ci extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,eo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new qa(le.min(),s,new Fe(ge),Vn(),_e())}}class eo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new eo(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class a_{constructor(e,n){this.targetId=e,this.Ce=n}}class c_{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class kd{constructor(){this.ve=0,this.Fe=Dd(),this.Me=ot.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=_e(),n=_e(),r=_e();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce(38017,{changeType:i})}})),new eo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Dd()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Re(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class JR{constructor(e){this.Ge=e,this.ze=new Map,this.je=Vn(),this.Je=Io(),this.He=Io(),this.Ye=new Fe(ge)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ce(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(pl(i))if(r===0){const o=new ne(i.path);this.et(n,o,dt.newNoDocument(o,le.min()))}else Re(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=hr(r).toUint8Array()}catch(l){if(l instanceof Ng)return ws("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new yu(o,s,i)}catch(l){return ws(l instanceof ci?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&pl(c.target)){const l=new ne(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,dt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=_e();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new qa(e,n,this.Ye,this.je,r);return this.je=Vn(),this.Je=Io(),this.He=Io(),this.Ye=new Fe(ge),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new kd,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ye(ge),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ye(ge),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new kd),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Io(){return new Fe(ne.comparator)}function Dd(){return new Fe(ne.comparator)}const XR={asc:"ASCENDING",desc:"DESCENDING"},ZR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eS={and:"AND",or:"OR"};class tS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _l(t,e){return t.useProto3Json||La(e)?e:{value:e}}function ha(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function l_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nS(t,e){return ha(t,e.toTimestamp())}function hn(t){return Re(!!t,49232),le.fromTimestamp((function(n){const r=ur(n);return new xe(r.seconds,r.nanos)})(t))}function Eu(t,e){return yl(t,e).canonicalString()}function yl(t,e){const n=(function(s){return new Ne(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function u_(t){const e=Ne.fromString(t);return Re(m_(e),10190,{key:e.toString()}),e}function El(t,e){return Eu(t.databaseId,e.path)}function Oc(t,e){const n=u_(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(f_(n))}function h_(t,e){return Eu(t.databaseId,e)}function rS(t){const e=u_(t);return e.length===4?Ne.emptyPath():f_(e)}function vl(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function f_(t){return Re(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Vd(t,e,n){return{name:El(t,e),fields:n.value.mapValue.fields}}function sS(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ce(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Re(f===void 0||typeof f=="string",58123),ot.fromBase64String(f||"")):(Re(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ot.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?x.UNKNOWN:o_(u.code);return new Y(f,u.message||"")})(o);n=new c_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Oc(t,r.document.name),i=hn(r.document.updateTime),o=r.document.createTime?hn(r.document.createTime):le.min(),c=new St({mapValue:{fields:r.document.fields}}),l=dt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Fo(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Oc(t,r.document),i=r.readTime?hn(r.readTime):le.min(),o=dt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Fo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Oc(t,r.document),i=r.removedTargetIds||[];n=new Fo([],i,s,null)}else{if(!("filter"in e))return ce(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new KR(s,i),c=r.targetId;n=new a_(c,o)}}return n}function iS(t,e){let n;if(e instanceof Zi)n={update:Vd(t,e.key,e.value)};else if(e instanceof gu)n={delete:El(t,e.key)};else if(e instanceof Er)n={update:Vd(t,e.key,e.data),updateMask:pS(e.fieldMask)};else{if(!(e instanceof HR))return ce(16599,{Vt:e.type});n={verify:El(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof la)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof $i)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ji)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ua)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw ce(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:nS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce(27497)})(t,e.precondition)),n}function oS(t,e){return t&&t.length>0?(Re(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?hn(s.updateTime):hn(i);return o.isEqual(le.min())&&(o=hn(i)),new $R(o,s.transformResults||[])})(n,e)))):[]}function aS(t,e){return{documents:[h_(t,e.path)]}}function cS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=h_(t,s);const i=(function(u){if(u.length!==0)return p_(Yt.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:ss(m.field),direction:hS(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=_l(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function lS(t){let e=rS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Re(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=d_(p);return m instanceof Yt&&qg(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(b){return new Bi(is(b.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(b.direction))})(m)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,La(m)?null:m})(n.limit));let l=null;n.startAt&&(l=(function(p){const m=!!p.before,_=p.values||[];return new ca(_,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,_=p.values||[];return new ca(_,m)})(n.endAt)),PR(e,s,o,i,c,"F",l,u)}function uS(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function d_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=is(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=is(n.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=is(n.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=is(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}})(t):t.fieldFilter!==void 0?(function(n){return We.create(is(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Yt.create(n.compositeFilter.filters.map((r=>d_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce(1026)}})(n.compositeFilter.op))})(t):ce(30097,{filter:t})}function hS(t){return XR[t]}function fS(t){return ZR[t]}function dS(t){return eS[t]}function ss(t){return{fieldPath:t.canonicalString()}}function is(t){return it.fromServerFormat(t.fieldPath)}function p_(t){return t instanceof We?(function(n){if(n.op==="=="){if(Ed(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NAN"}};if(yd(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ed(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NAN"}};if(yd(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ss(n.field),op:fS(n.op),value:n.value}}})(t):t instanceof Yt?(function(n){const r=n.getFilters().map((s=>p_(s)));return r.length===1?r[0]:{compositeFilter:{op:dS(n.op),filters:r}}})(t):ce(54877,{filter:t})}function pS(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function m_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,r,s,i=le.min(),o=le.min(),c=ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.yt=e}}function gS(t){const e=lS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(){this.Cn=new yS}addToCollectionParentIndex(e,n){return this.Cn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(lr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class yS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ye(Ne.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ye(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},g_=41943040;class Rt{static withCacheSize(e){return new Rt(e,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt.DEFAULT_COLLECTION_PERCENTILE=10,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rt.DEFAULT=new Rt(g_,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rt.DISABLED=new Rt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ss(0)}static cr(){return new Ss(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="LruGarbageCollector",ES=1048576;function xd([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class vS{constructor(e){this.Ir=e,this.buffer=new Ye(xd),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();xd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class TS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Z(Od,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){xs(n)?Z(Od,"Ignoring IndexedDB error during garbage collection: ",n):await Os(n)}await this.Vr(3e5)}))}}class IS{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Ma.ce);const r=new vS(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Nd)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Nd):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),ns()<=me.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function wS(t,e){return new IS(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(){this.changes=new Wr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Ai(r.mutation,s,Mt.empty(),xe.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,_e()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=_e()){const s=Dr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=ai();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Dr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,_e())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=Vn();const o=wi(),c=(function(){return wi()})();return n.forEach(((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Er)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Ai(f.mutation,u,f.mutation.getFieldMask(),xe.now())):o.set(u.key,Mt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>c.set(u,new bS(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=wi();let s=new Fe(((o,c)=>o-c)),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Mt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||_e()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=Xg();f.forEach((m=>{if(!i.has(m)){const _=s_(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return L.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Kg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Dr());let c=Mi,l=i;return o.next((u=>L.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,_e()))).next((f=>({batchId:c,changes:Jg(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next((r=>{let s=ai();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ai();return this.indexManager.getCollectionParents(e,i).next((c=>L.forEach(c,(l=>{const u=(function(p,m){return new Ms(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,dt.newInvalidDocument(f)))}));let c=ai();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&Ai(f.mutation,u,Mt.empty(),xe.now()),Ba(n,u)&&(c=c.insert(l,u))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return L.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:hn(s.createTime)}})(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:gS(s.bundledQuery),readTime:hn(s.readTime)}})(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(){this.overlays=new Fe(ne.comparator),this.qr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Dr();return L.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Dr(),i=n.length+1,o=new ne(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Fe(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Dr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Dr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return L.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zR(n,r));let i=this.qr.get(n);i===void 0&&(i=_e(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this.Qr=new Ye(et.$r),this.Ur=new Ye(et.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new et(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new et(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new ne(new Ne([])),r=new et(n,e),s=new et(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ne(new Ne([])),r=new et(n,e),s=new et(n,e+1);let i=_e();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new et(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ne.comparator(e.key,n.key)||ge(e.Yr,n.Yr)}static Kr(e,n){return ge(e.Yr,n.Yr)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ye(et.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new WR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new et(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?lu:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),s=new et(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const c=this.Xr(o.Yr);i.push(c)})),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(ge);return n.forEach((s=>{const i=new et(s,0),o=new et(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(c=>{r=r.add(c.Yr)}))})),L.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const o=new et(new ne(i),0);let c=new Ye(ge);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)}),o),L.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Re(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return L.forEach(n.mutations,(s=>{const i=new et(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new et(n,0),s=this.Zr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.ri=e,this.docs=(function(){return new Fe(ne.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=Vn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():dt.newInvalidDocument(s))})),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Vn();const o=n.path,c=new ne(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||oR(iR(f),r)<=0||(s.has(f.key)||Ba(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce(9500)}ii(e,n){return L.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new VS(this)}getSize(e){return L.resolve(this.size)}}class VS extends AS{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),L.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e){this.persistence=e,this.si=new Wr((n=>fu(n)),du),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.oi=0,this._i=new vu,this.targetCount=0,this.ai=Ss.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),L.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ss(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Pr(n),L.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),L.waitFor(i).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ma(0),this.li=!1,this.li=!0,this.hi=new CS,this.referenceDelegate=e(this),this.Pi=new NS(this),this.indexManager=new _S,this.remoteDocumentCache=(function(s){return new DS(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new mS(n),this.Ii=new SS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new kS(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new OS(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return L.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class OS extends cR{constructor(e){super(),this.currentSequenceNumber=e}}class Tu{constructor(e){this.persistence=e,this.Ri=new vu,this.Vi=null}static mi(e){return new Tu(e)}get fi(){if(this.Vi)return this.Vi;throw ce(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,(r=>{const s=ne.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,le.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class fa{constructor(e,n){this.persistence=e,this.pi=new Wr((r=>hR(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=wS(this,n)}static mi(e,n){return new fa(e,n)}Ei(){}di(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return L.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?L.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((c=>{c||(r++,i.removeEntry(o,le.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=xo(e.data.value)),n}br(e,n,r){return L.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Iu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return dI()?8:lR(_t())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new xS;return this.Ss(e,n,o).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(ns()<=me.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):(ns()<=me.DEBUG&&Z("QueryEngine","Query:",rs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(ns()<=me.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(n))):L.resolve())}ys(e,n){if(wd(n))return L.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=gl(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=_e(...i);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,gl(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ws(e,n,r,s){return wd(n)||s.isEqual(le.min())?L.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?L.resolve(null):(ns()<=me.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rs(n)),this.vs(e,o,n,sR(s,Mi)).next((c=>c)))}))}Ds(e,n){let r=new Ye(Qg(e));return n.forEach(((s,i)=>{Ba(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return ns()<=me.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",rs(n)),this.ps.getDocumentsMatchingQuery(e,n,lr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="LocalStore",LS=3e8;class FS{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Fe(ge),this.xs=new Wr((i=>fu(i)),du),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RS(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function US(t,e,n,r){return new FS(t,e,n,r)}async function y_(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=_e();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function BS(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,m=p.keys();let _=L.resolve();return m.forEach((b=>{_=_.next((()=>f.getEntry(l,b))).next((k=>{const V=u.docVersions.get(b);Re(V!==null,48541),k.version.compareTo(V)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))}))})),_.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=_e();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function E_(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function $S(t,e){const n=he(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ot.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),(function(k,V,B){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=LS?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0})(m,_,f)&&c.push(n.Pi.updateTargetData(i,_))}));let l=Vn(),u=_e();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(jS(i,o,e.documentUpdates).next((f=>{l=f.ks,u=f.qs}))),!r.isEqual(le.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return L.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Ms=s,i)))}function jS(t,e,n){let r=_e(),s=_e();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Vn();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Z(wu,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function qS(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=lu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function HS(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,L.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new Zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function Tl(t,e,n){const r=he(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!xs(o))throw o;Z(wu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Md(t,e,n){const r=he(t);let s=le.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=he(l),m=p.xs.get(f);return m!==void 0?L.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,f)})(r,o,un(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:le.min(),n?i:_e()))).next((c=>(WS(r,kR(e),c),{documents:c,Qs:i})))))}function WS(t,e,n){let r=t.Os.get(e)||le.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class Ld{constructor(){this.activeTargetIds=MR()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zS{constructor(){this.Mo=new Ld,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ld,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="ConnectivityMonitor";class Ud{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Z(Fd,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Z(Fd,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wo=null;function Il(){return wo===null?wo=(function(){return 268435456+Math.round(2147483648*Math.random())})():wo++,"0x"+wo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="RestConnection",GS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class QS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===oa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Il(),c=this.zo(e,n.toUriEncodedString());Z(xc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=ks(u);return this.Jo(e,c,l,r,f).then((p=>(Z(xc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw ws(xc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ns})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=GS[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class JS extends QS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Il();return new Promise(((c,l)=>{const u=new Ig;u.setWithCredentials(!0),u.listenOnce(wg.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Oo.NO_ERROR:const p=u.getResponseJson();Z(ut,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Oo.TIMEOUT:Z(ut,`RPC '${e}' ${o} timed out`),l(new Y(x.DEADLINE_EXCEEDED,"Request time out"));break;case Oo.HTTP_ERROR:const m=u.getStatus();if(Z(ut,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const b=_?.error;if(b&&b.status&&b.message){const k=(function(B){const U=B.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(U)>=0?U:x.UNKNOWN})(b.status);l(new Y(k,b.message))}else l(new Y(x.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new Y(x.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{Z(ut,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);Z(ut,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=Il(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Rg(),c=bg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Z(ut,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let m=!1,_=!1;const b=new YS({Yo:V=>{_?Z(ut,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(m||(Z(ut,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(ut,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},Zo:()=>p.close()}),k=(V,B,U)=>{V.listen(B,(W=>{try{U(W)}catch(H){setTimeout((()=>{throw H}),0)}}))};return k(p,oi.EventType.OPEN,(()=>{_||(Z(ut,`RPC '${e}' stream ${s} transport opened.`),b.o_())})),k(p,oi.EventType.CLOSE,(()=>{_||(_=!0,Z(ut,`RPC '${e}' stream ${s} transport closed`),b.a_(),this.E_(p))})),k(p,oi.EventType.ERROR,(V=>{_||(_=!0,ws(ut,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),b.a_(new Y(x.UNAVAILABLE,"The operation could not be completed")))})),k(p,oi.EventType.MESSAGE,(V=>{if(!_){const B=V.data[0];Re(!!B,16349);const U=B,W=U?.error||U[0]?.error;if(W){Z(ut,`RPC '${e}' stream ${s} received error:`,W);const H=W.status;let te=(function(E){const T=He[E];if(T!==void 0)return o_(T)})(H),oe=W.message;te===void 0&&(te=x.INTERNAL,oe="Unknown error status: "+H+" with message "+W.message),_=!0,b.a_(new Y(te,oe)),p.close()}else Z(ut,`RPC '${e}' stream ${s} received:`,B),b.u_(B)}})),k(c,Ag.STAT_EVENT,(V=>{V.stat===ll.PROXY?Z(ut,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===ll.NOPROXY&&Z(ut,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{b.__()}),0),b}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Mc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t){return new tS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="PersistentStream";class T_{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new v_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new Y(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return Z(Bd,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(Z(Bd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class XS extends T_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=sS(this.serializer,e),r=(function(i){if(!("targetChange"in i))return le.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?hn(o.readTime):le.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=vl(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=pl(l)?{documents:aS(i,l)}:{query:cS(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=l_(i,o.resumeToken);const u=_l(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(le.min())>0){c.readTime=ha(i,o.snapshotVersion.toTimestamp());const u=_l(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=uS(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=vl(this.serializer),n.removeTarget=e,this.q_(n)}}class ZS extends T_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Re(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=oS(e.writeResults,e.commitTime),r=hn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=vl(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>iS(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{}class tP extends eP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Y(x.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,yl(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(x.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,yl(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(x.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class nP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Dn(n),this.aa=!1):Z("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="RemoteStore";class rP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{zr(this)&&(Z($r,"Restarting streams for network reachability change."),await(async function(l){const u=he(l);u.Ea.add(4),await to(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Wa(u)})(this))}))})),this.Ra=new nP(r,s)}}async function Wa(t){if(zr(t))for(const e of t.da)await e(!0)}async function to(t){for(const e of t.da)await e(!1)}function I_(t,e){const n=he(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Su(n)?Ru(n):Ls(n).O_()&&bu(n,e))}function Au(t,e){const n=he(t),r=Ls(n);n.Ia.delete(e),r.O_()&&w_(n,e),n.Ia.size===0&&(r.O_()?r.L_():zr(n)&&n.Ra.set("Unknown"))}function bu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ls(t).Y_(e)}function w_(t,e){t.Va.Ue(e),Ls(t).Z_(e)}function Ru(t){t.Va=new JR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ls(t).start(),t.Ra.ua()}function Su(t){return zr(t)&&!Ls(t).x_()&&t.Ia.size>0}function zr(t){return he(t).Ea.size===0}function A_(t){t.Va=void 0}async function sP(t){t.Ra.set("Online")}async function iP(t){t.Ia.forEach(((e,n)=>{bu(t,e)}))}async function oP(t,e){A_(t),Su(t)?(t.Ra.ha(e),Ru(t)):t.Ra.set("Unknown")}async function aP(t,e,n){if(t.Ra.set("Online"),e instanceof c_&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))})(t,e)}catch(r){Z($r,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await da(t,r)}else if(e instanceof Fo?t.Va.Ze(e):e instanceof a_?t.Va.st(e):t.Va.tt(e),!n.isEqual(le.min()))try{const r=await E_(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(ot.EMPTY_BYTE_STRING,f.snapshotVersion)),w_(i,l);const p=new Zn(f.target,l,u,f.sequenceNumber);bu(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){Z($r,"Failed to raise snapshot:",r),await da(t,r)}}async function da(t,e,n){if(!xs(e))throw e;t.Ea.add(1),await to(t),t.Ra.set("Offline"),n||(n=()=>E_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Z($r,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Wa(t)}))}function b_(t,e){return e().catch((n=>da(t,n,e)))}async function za(t){const e=he(t),n=dr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:lu;for(;cP(e);)try{const s=await qS(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,lP(e,s)}catch(s){await da(e,s)}R_(e)&&S_(e)}function cP(t){return zr(t)&&t.Ta.length<10}function lP(t,e){t.Ta.push(e);const n=dr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function R_(t){return zr(t)&&!dr(t).x_()&&t.Ta.length>0}function S_(t){dr(t).start()}async function uP(t){dr(t).ra()}async function hP(t){const e=dr(t);for(const n of t.Ta)e.ea(n.mutations)}async function fP(t,e,n){const r=t.Ta.shift(),s=_u.from(r,e,n);await b_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await za(t)}async function dP(t,e){e&&dr(t).X_&&await(async function(r,s){if((function(o){return GR(o)&&o!==x.ABORTED})(s.code)){const i=r.Ta.shift();dr(r).B_(),await b_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await za(r)}})(t,e),R_(t)&&S_(t)}async function $d(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),Z($r,"RemoteStore received new credentials");const r=zr(n);n.Ea.add(3),await to(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Wa(n)}async function pP(t,e){const n=he(t);e?(n.Ea.delete(2),await Wa(n)):e||(n.Ea.add(2),await to(n),n.Ra.set("Unknown"))}function Ls(t){return t.ma||(t.ma=(function(n,r,s){const i=he(n);return i.sa(),new XS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:sP.bind(null,t),t_:iP.bind(null,t),r_:oP.bind(null,t),H_:aP.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Su(t)?Ru(t):t.Ra.set("Unknown")):(await t.ma.stop(),A_(t))}))),t.ma}function dr(t){return t.fa||(t.fa=(function(n,r,s){const i=he(n);return i.sa(),new ZS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:uP.bind(null,t),r_:dP.bind(null,t),ta:hP.bind(null,t),na:fP.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await za(t)):(await t.fa.stop(),t.Ta.length>0&&(Z($r,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Pu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cu(t,e){if(Dn("AsyncQueue",`${e}: ${t}`),xs(t))return new Y(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{static emptySet(e){return new gs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=ai(),this.sortedSet=new Fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new gs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.ga=new Fe(ne.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ce(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Ps{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new Ps(e,n,gs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ua(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class gP{constructor(){this.queries=qd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=qd(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new Y(x.ABORTED,"Firestore shutting down"))}}function qd(){return new Wr((t=>Gg(t)),Ua)}async function P_(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new mP,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Cu(o,`Initialization of query '${rs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&ku(n)}async function C_(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _P(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&ku(n)}function yP(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function ku(t){t.Ca.forEach((e=>{e.next()}))}var wl,Hd;(Hd=wl||(wl={})).Ma="default",Hd.Cache="cache";class k_{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==wl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.key=e}}class V_{constructor(e){this.key=e}}class EP{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=_e(),this.mutatedKeys=_e(),this.eu=Qg(e),this.tu=new gs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new jd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),_=Ba(this.query,p)?p:null,b=!!m&&this.mutatedKeys.has(m.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let V=!1;m&&_?m.data.isEqual(_.data)?b!==k&&(r.track({type:3,doc:_}),V=!0):this.su(m,_)||(r.track({type:2,doc:_}),V=!0,(l&&this.eu(_,l)>0||u&&this.eu(_,u)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),V=!0):m&&!_&&(r.track({type:1,doc:m}),V=!0,(l||u)&&(c=!0)),V&&(_?(o=o.add(_),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(_,b){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{Rt:V})}};return k(_)-k(b)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Ps(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new jd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=_e(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new V_(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new D_(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=_e();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ps.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Du="SyncEngine";class vP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class TP{constructor(e){this.key=e,this.hu=!1}}class IP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Wr((c=>Gg(c)),Ua),this.Iu=new Map,this.Eu=new Set,this.du=new Fe(ne.comparator),this.Au=new Map,this.Ru=new vu,this.Vu={},this.mu=new Map,this.fu=Ss.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function wP(t,e,n=!0){const r=F_(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await N_(r,e,n,!0),s}async function AP(t,e){const n=F_(t);await N_(n,e,!0,!1)}async function N_(t,e,n,r){const s=await HS(t.localStore,un(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await bP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&I_(t.remoteStore,s),c}async function bP(t,e,n,r,s){t.pu=(p,m,_)=>(async function(k,V,B,U){let W=V.view.ru(B);W.Cs&&(W=await Md(k.localStore,V.query,!1).then((({documents:w})=>V.view.ru(w,W))));const H=U&&U.targetChanges.get(V.targetId),te=U&&U.targetMismatches.get(V.targetId)!=null,oe=V.view.applyChanges(W,k.isPrimaryClient,H,te);return zd(k,V.targetId,oe.au),oe.snapshot})(t,p,m,_);const i=await Md(t.localStore,e,!0),o=new EP(e,i.Qs),c=o.ru(i.documents),l=eo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);zd(t,n,u.au);const f=new vP(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function RP(t,e,n){const r=he(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!Ua(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Tl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Au(r.remoteStore,s.targetId),Al(r,s.targetId)})).catch(Os)):(Al(r,s.targetId),await Tl(r.localStore,s.targetId,!0))}async function SP(t,e){const n=he(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Au(n.remoteStore,r.targetId))}async function PP(t,e,n){const r=xP(t);try{const s=await(function(o,c){const l=he(o),u=xe.now(),f=c.reduce(((_,b)=>_.add(b.key)),_e());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let b=Vn(),k=_e();return l.Ns.getEntries(_,f).next((V=>{b=V,b.forEach(((B,U)=>{U.isValidDocument()||(k=k.add(B))}))})).next((()=>l.localDocuments.getOverlayedDocuments(_,b))).next((V=>{p=V;const B=[];for(const U of c){const W=qR(U,p.get(U.key).overlayedDocument);W!=null&&B.push(new Er(U.key,W,Bg(W.value.mapValue),Kt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,B,c)})).next((V=>{m=V;const B=V.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(_,V.batchId,B)}))})).then((()=>({batchId:m.batchId,changes:Jg(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new Fe(ge)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await no(r,s.changes),await za(r.remoteStore)}catch(s){const i=Cu(s,"Failed to persist write");n.reject(i)}}async function O_(t,e){const n=he(t);try{const r=await $S(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Re(o.hu,14607):s.removedDocuments.size>0&&(Re(o.hu,42227),o.hu=!1))})),await no(n,r,e)}catch(r){await Os(r)}}function Wd(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=he(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)})),u&&ku(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CP(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Fe(ne.comparator);o=o.insert(i,dt.newNoDocument(i,le.min()));const c=_e().add(i),l=new qa(le.min(),new Map,new Fe(ge),o,c);await O_(r,l),r.du=r.du.remove(i),r.Au.delete(e),Vu(r)}else await Tl(r.localStore,e,!1).then((()=>Al(r,e,n))).catch(Os)}async function kP(t,e){const n=he(t),r=e.batch.batchId;try{const s=await BS(n.localStore,e);M_(n,r,null),x_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await no(n,s)}catch(s){await Os(s)}}async function DP(t,e,n){const r=he(t);try{const s=await(function(o,c){const l=he(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(Re(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);M_(r,e,n),x_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await no(r,s)}catch(s){await Os(s)}}function x_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function M_(t,e,n){const r=he(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Al(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||L_(t,r)}))}function L_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Au(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Vu(t))}function zd(t,e,n){for(const r of n)r instanceof D_?(t.Ru.addReference(r.key,e),VP(t,r)):r instanceof V_?(Z(Du,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||L_(t,r.key)):ce(19791,{wu:r})}function VP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(Z(Du,"New document in limbo: "+n),t.Eu.add(r),Vu(t))}function Vu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ne(Ne.fromString(e)),r=t.fu.next();t.Au.set(r,new TP(n)),t.du=t.du.insert(n,r),I_(t.remoteStore,new Zn(un(pu(n.path)),r,"TargetPurposeLimboResolution",Ma.ce))}}async function no(t,e,n){const r=he(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Iu.As(l.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,u){const f=he(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>L.forEach(u,(m=>L.forEach(m.Es,(_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_))).next((()=>L.forEach(m.ds,(_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))))))}catch(p){if(!xs(p))throw p;Z(wu,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=f.Ms.get(m),b=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(b);f.Ms=f.Ms.insert(m,k)}}})(r.localStore,i))}async function NP(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){Z(Du,"User change. New user:",e.toKey());const r=await y_(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new Y(x.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await no(n,r.Ls)}}function OP(t,e){const n=he(t),r=n.Au.get(e);if(r&&r.hu)return _e().add(r.key);{let s=_e();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function F_(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=O_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=OP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CP.bind(null,e),e.Pu.H_=_P.bind(null,e.eventManager),e.Pu.yu=yP.bind(null,e.eventManager),e}function xP(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DP.bind(null,e),e}class pa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ha(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return US(this.persistence,new MS,e.initialUser,this.serializer)}Cu(e){return new __(Tu.mi,this.serializer)}Du(e){return new zS}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pa.provider={build:()=>new pa};class MP extends pa{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Re(this.persistence.referenceDelegate instanceof fa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new TS(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Rt.withCacheSize(this.cacheSizeBytes):Rt.DEFAULT;return new __((r=>fa.mi(r,n)),this.serializer)}}class bl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=NP.bind(null,this.syncEngine),await pP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new gP})()}createDatastore(e){const n=Ha(e.databaseInfo.databaseId),r=(function(i){return new JS(i)})(e.databaseInfo);return(function(i,o,c,l){return new tP(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new rP(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>Wd(this.syncEngine,n,0)),(function(){return Ud.v()?new Ud:new KS})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,f){const p=new IP(s,i,o,c,l,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=he(n);Z($r,"RemoteStore shutting down."),r.Ea.add(5),await to(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}bl.provider={build:()=>new bl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Dn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="FirestoreClient";class LP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=cu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{Z(pr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(Z(pr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Cu(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Lc(t,e){t.asyncQueue.verifyOperationInProgress(),Z(pr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await y_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Kd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await FP(t);Z(pr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>$d(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>$d(e.remoteStore,s))),t._onlineComponents=e}async function FP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(pr,"Using user provided OfflineComponentProvider");try{await Lc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;ws("Error using user provided cache. Falling back to memory cache: "+n),await Lc(t,new pa)}}else Z(pr,"Using default OfflineComponentProvider"),await Lc(t,new MP(void 0));return t._offlineComponents}async function B_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(pr,"Using user provided OnlineComponentProvider"),await Kd(t,t._uninitializedComponentsProvider._online)):(Z(pr,"Using default OnlineComponentProvider"),await Kd(t,new bl))),t._onlineComponents}function UP(t){return B_(t).then((e=>e.syncEngine))}async function Rl(t){const e=await B_(t),n=e.eventManager;return n.onListen=wP.bind(null,e.syncEngine),n.onUnlisten=RP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=AP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=SP.bind(null,e.syncEngine),n}function BP(t,e,n={}){const r=new ir;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new U_({next:m=>{f.Nu(),o.enqueueAndForget((()=>C_(i,p))),m.fromCache&&l.source==="server"?u.reject(new Y(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new k_(c,f,{includeMetadataChanges:!0,qa:!0});return P_(i,p)})(await Rl(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="firestore.googleapis.com",Qd=!0;class Yd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Y(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=j_,this.ssl=Qd}else this.host=e.host,this.ssl=e.ssl??Qd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=g_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ES)throw new Y(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$_(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Y(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Y(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Y(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ka{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Kb;switch(r.type){case"firstParty":return new Jb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Gd.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Gd.delete(n),r.terminate())})(this),Promise.resolve()}}function $P(t,e,n,r={}){t=ln(t,Ka);const s=ks(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(Vm(`https://${c}`),Nm("Firestore",!0)),i.host!==j_&&i.host!==c&&ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Mr(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=ht.MOCK_USER;else{u=sI(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new Y(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ht(p)}t._authCredentials=new Gb(new Pg(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vr(this.firestore,e,this._query)}}class Ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}toJSON(){return{type:Ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Xi(n,Ke._jsonSchema))return new Ke(e,r||null,new ne(Ne.fromString(n.referencePath)))}}Ke._jsonSchemaVersion="firestore/documentReference/1.0",Ke._jsonSchema={type:ze("string",Ke._jsonSchemaVersion),referencePath:ze("string")};class or extends vr{constructor(e,n,r){super(e,n,pu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new ne(e))}withConverter(e){return new or(this.firestore,e,this._path)}}function ni(t,e,...n){if(t=Je(t),Cg("collection","path",e),t instanceof Ka){const r=Ne.fromString(e,...n);return ld(r),new or(t,null,r)}{if(!(t instanceof Ke||t instanceof or))throw new Y(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return ld(r),new or(t.firestore,null,r)}}function Uo(t,e,...n){if(t=Je(t),arguments.length===1&&(e=cu.newId()),Cg("doc","path",e),t instanceof Ka){const r=Ne.fromString(e,...n);return cd(r),new Ke(t,null,new ne(r))}{if(!(t instanceof Ke||t instanceof or))throw new Y(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return cd(r),new Ke(t.firestore,t instanceof or?t.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="AsyncQueue";class Xd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new v_(this,"async_queue_retry"),this._c=()=>{const r=Mc();r&&Z(Jd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Mc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new ir;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!xs(e))throw e;Z(Jd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Dn("INTERNAL UNHANDLED ERROR: ",Zd(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Pu.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&ce(47125,{Pc:Zd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Zd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class jr extends Ka{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Xd,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xd(e),this._firestoreClient=void 0,await e}}}function jP(t,e){const n=typeof t=="object"?t:Lm(),r=typeof t=="string"?t:oa,s=Xl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=nI("firestore");i&&$P(s,...i)}return s}function Nu(t){if(t._terminated)throw new Y(x.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||qP(t),t._firestoreClient}function qP(t){const e=t._freezeSettings(),n=(function(s,i,o,c){return new pR(s,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,$_(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new LP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ut(ot.fromBase64String(e))}catch(n){throw new Y(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ut(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ut._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Xi(e,Ut._jsonSchema))return Ut.fromBase64String(e.bytes)}}Ut._jsonSchemaVersion="firestore/bytes/1.0",Ut._jsonSchema={type:ze("string",Ut._jsonSchemaVersion),bytes:ze("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:fn._jsonSchemaVersion}}static fromJSON(e){if(Xi(e,fn._jsonSchema))return new fn(e.latitude,e.longitude)}}fn._jsonSchemaVersion="firestore/geoPoint/1.0",fn._jsonSchema={type:ze("string",fn._jsonSchemaVersion),latitude:ze("number"),longitude:ze("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:dn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Xi(e,dn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new dn(e.vectorValues);throw new Y(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dn._jsonSchemaVersion="firestore/vectorValue/1.0",dn._jsonSchema={type:ze("string",dn._jsonSchemaVersion),vectorValues:ze("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=/^__.*__$/;class WP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Er(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zi(e,this.data,n,this.fieldTransforms)}}class q_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Er(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function H_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce(40011,{Ac:t})}}class xu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new xu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ma(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(H_(this.Ac)&&HP.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class zP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ha(e)}Cc(e,n,r,s=!1){return new xu({Ac:e,methodName:n,Dc:r,path:it.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mu(t){const e=t._freezeSettings(),n=Ha(t._databaseId);return new zP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function KP(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Lu("Data must be an object, but it was:",o,r);const c=W_(r,o);let l,u;if(i.merge)l=new Mt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Sl(e,p,n);if(!o.contains(m))throw new Y(x.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);K_(f,m)||f.push(m)}l=new Mt(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new WP(new St(c),l,u)}class Qa extends Ou{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qa}}function GP(t,e,n,r){const s=t.Cc(1,e,n);Lu("Data must be an object, but it was:",s,r);const i=[],o=St.empty();yr(r,((l,u)=>{const f=Fu(e,l,n);u=Je(u);const p=s.yc(f);if(u instanceof Qa)i.push(f);else{const m=ro(u,p);m!=null&&(i.push(f),o.set(f,m))}}));const c=new Mt(i);return new q_(o,c,s.fieldTransforms)}function QP(t,e,n,r,s,i){const o=t.Cc(1,e,n),c=[Sl(e,r,n)],l=[s];if(i.length%2!=0)throw new Y(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Sl(e,i[m])),l.push(i[m+1]);const u=[],f=St.empty();for(let m=c.length-1;m>=0;--m)if(!K_(u,c[m])){const _=c[m];let b=l[m];b=Je(b);const k=o.yc(_);if(b instanceof Qa)u.push(_);else{const V=ro(b,k);V!=null&&(u.push(_),f.set(_,V))}}const p=new Mt(u);return new q_(f,p,o.fieldTransforms)}function YP(t,e,n,r=!1){return ro(n,t.Cc(r?4:3,e))}function ro(t,e){if(z_(t=Je(t)))return Lu("Unsupported field value:",e,t),W_(t,e);if(t instanceof Ou)return(function(r,s){if(!H_(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=ro(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return LR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xe.fromDate(r);return{timestampValue:ha(s.serializer,i)}}if(r instanceof xe){const i=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ha(s.serializer,i)}}if(r instanceof fn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ut)return{bytesValue:l_(s.serializer,r._byteString)};if(r instanceof Ke){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Eu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof dn)return(function(o,c){return{mapValue:{fields:{[Fg]:{stringValue:Ug},[aa]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return mu(c.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${xa(r)}`)})(t,e)}function W_(t,e){const n={};return Vg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yr(t,((r,s)=>{const i=ro(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function z_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof fn||t instanceof Ut||t instanceof Ke||t instanceof Ou||t instanceof dn)}function Lu(t,e,n){if(!z_(n)||!kg(n)){const r=xa(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Sl(t,e,n){if((e=Je(e))instanceof Ga)return e._internalPath;if(typeof e=="string")return Fu(t,e);throw ma("Field path arguments must be of type string or ",t,!1,void 0,n)}const JP=new RegExp("[~\\*/\\[\\]]");function Fu(t,e,n){if(e.search(JP)>=0)throw ma(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ga(...e.split("."))._internalPath}catch{throw ma(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ma(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Y(x.INVALID_ARGUMENT,c+t+l)}function K_(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ya("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class XP extends G_{data(){return super.data()}}function Ya(t,e){return typeof e=="string"?Fu(t,e):e instanceof Ga?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uu{}class Y_ extends Uu{}function Ao(t,e,...n){let r=[];e instanceof Uu&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((l=>l instanceof Bu)).length,c=i.filter((l=>l instanceof Ja)).length;if(o>1||o>0&&c>0)throw new Y(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Ja extends Y_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ja(e,n,r)}_apply(e){const n=this._parse(e);return J_(e._query,n),new vr(e.firestore,e.converter,ml(e._query,n))}_parse(e){const n=Mu(e.firestore);return(function(i,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Y(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){rp(p,f);const b=[];for(const k of p)b.push(np(l,i,k));m={arrayValue:{values:b}}}else m=np(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||rp(p,f),m=YP(c,o,p,f==="in"||f==="not-in");return We.create(u,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function tn(t,e,n){const r=e,s=Ya("where",t);return Ja._create(s,r,n)}class Bu extends Uu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Bu(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:Yt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)J_(o,l),o=ml(o,l)})(e._query,n),new vr(e.firestore,e.converter,ml(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class $u extends Y_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new $u(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new Y(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Y(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Bi(i,o)})(e._query,this._field,this._direction);return new vr(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ms(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function tp(t,e="asc"){const n=e,r=Ya("orderBy",t);return $u._create(r,n)}function np(t,e,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new Y(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Kg(e)&&n.indexOf("/")!==-1)throw new Y(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ne.fromString(n));if(!ne.isDocumentKey(r))throw new Y(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _d(t,new ne(r))}if(n instanceof Ke)return _d(t,n._key);throw new Y(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xa(n)}.`)}function rp(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function J_(t,e){const n=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new Y(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class ZP{convertValue(e,n="none"){switch(fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return yr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[aa].arrayValue?.values?.map((r=>Be(r.doubleValue)));return new dn(n)}convertGeoPoint(e){return new fn(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Fa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Li(e));default:return null}}convertTimestamp(e){const n=ur(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);Re(m_(r),9688,{name:e});const s=new Fi(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(n)||Dn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class li{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Nr extends G_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ya("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Nr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Nr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Nr._jsonSchema={type:ze("string",Nr._jsonSchemaVersion),bundleSource:ze("string","DocumentSnapshot"),bundleName:ze("string"),bundle:ze("string")};class Bo extends Nr{data(e={}){return super.data(e)}}class Or{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new li(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Bo(this._firestore,this._userDataWriter,r.key,r,new li(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Bo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new li(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new Bo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new li(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:tC(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Or._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=cu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function tC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:t})}}Or._jsonSchemaVersion="firestore/querySnapshot/1.0",Or._jsonSchema={type:ze("string",Or._jsonSchemaVersion),bundleSource:ze("string","QuerySnapshot"),bundleName:ze("string"),bundle:ze("string")};class ju extends ZP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ut(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,n)}}function Fc(t){t=ln(t,vr);const e=ln(t.firestore,jr),n=Nu(e),r=new ju(e);return Q_(t._query),BP(n,t._query).then((s=>new Or(e,r,t,s)))}function sp(t,e,n,...r){t=ln(t,Ke);const s=ln(t.firestore,jr),i=Mu(s);let o;return o=typeof(e=Je(e))=="string"||e instanceof Ga?QP(i,"updateDoc",t._key,e,n,r):GP(i,"updateDoc",t._key,e),qu(s,[o.toMutation(t._key,Kt.exists(!0))])}function nC(t){return qu(ln(t.firestore,jr),[new gu(t._key,Kt.none())])}function rC(t,e){const n=ln(t.firestore,jr),r=Uo(t),s=eC(t.converter,e);return qu(n,[KP(Mu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Kt.exists(!1))]).then((()=>r))}function sC(t,...e){t=Je(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||ep(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(ep(e[r])){const l=e[r];e[r]=l.next?.bind(l),e[r+1]=l.error?.bind(l),e[r+2]=l.complete?.bind(l)}let i,o,c;if(t instanceof Ke)o=ln(t.firestore,jr),c=pu(t._key.path),i={next:l=>{e[r]&&e[r](iC(o,t,l))},error:e[r+1],complete:e[r+2]};else{const l=ln(t,vr);o=ln(l.firestore,jr),c=l._query;const u=new ju(o);i={next:f=>{e[r]&&e[r](new Or(o,u,l,f))},error:e[r+1],complete:e[r+2]},Q_(t._query)}return(function(u,f,p,m){const _=new U_(m),b=new k_(f,_,p);return u.asyncQueue.enqueueAndForget((async()=>P_(await Rl(u),b))),()=>{_.Nu(),u.asyncQueue.enqueueAndForget((async()=>C_(await Rl(u),b)))}})(Nu(o),c,s,i)}function qu(t,e){return(function(r,s){const i=new ir;return r.asyncQueue.enqueueAndForget((async()=>PP(await UP(r),s,i))),i.promise})(Nu(t),e)}function iC(t,e,n){const r=n.docs.get(e._key),s=new ju(t);return new Nr(t,s,e._key,r,new li(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ns=s})(Ds),Is(new Lr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new jr(new Qb(r.getProvider("auth-internal")),new Xb(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Y(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fi(u.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),rr(sd,id,e),rr(sd,id,"esm2020")})();const oC={apiKey:"AIzaSyCsazM7DaNevHhv9Yy0cNnd3dAUFGhjE4Q",authDomain:"todo-list-f0db6.firebaseapp.com",projectId:"todo-list-f0db6",storageBucket:"todo-list-f0db6.firebasestorage.app",messagingSenderId:"134534131219",appId:"1:134534131219:web:31e62d6060e0512177d9e6"},X_=Mm(oC),_s=qb(X_),Hn=jP(X_),Pl=Me(null),Wn=Me(!0);ug(_s,t=>{Pl.value=t,Wn.value=!1,t?localStorage.setItem("userEmail",t.email):(localStorage.removeItem("userEmail"),localStorage.removeItem("userName"))});function Kr(){const t=$e(()=>!!Pl.value),e=$e(()=>Pl.value),n=async(i,o,c)=>{try{return Wn.value=!0,(await PA(_s,i,o)).user&&localStorage.setItem("userName",c),{success:!0,error:null}}catch(l){return{success:!1,error:l.message}}finally{Wn.value=!1}},r=async(i,o)=>{try{return Wn.value=!0,await CA(_s,i,o),{success:!0,error:null}}catch(c){return{success:!1,error:c.message}}finally{Wn.value=!1}},s=async()=>{try{return Wn.value=!0,await VA(_s),{success:!0,error:null}}catch(i){return{success:!1,error:i.message}}finally{Wn.value=!1}};return{user:e,isAuthenticated:t,loading:$e(()=>Wn.value),register:n,login:r,logout:s}}const Tr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},aC={class:"header"},cC={key:0,class:"header__user"},lC={class:"header__welcome"},uC=["disabled"],hC={__name:"Header",setup(t){const e=Wi(),{user:n,isAuthenticated:r,logout:s,loading:i}=Kr(),o=$e(()=>localStorage.getItem("userName")||n.value?.email||"User"),c=async()=>{const l=await s();l.success?e.push("/signin"):console.error("Logout error:",l.error)};return(l,u)=>(Te(),De("header",aC,[u[0]||(u[0]=X("h1",{class:"header__title title"},"Tassker",-1)),Tt(r)&&Tt(n)?(Te(),De("div",cC,[X("span",lC,"Welcome, "+It(o.value),1),X("button",{class:"header__logout",onClick:c,disabled:Tt(i)},It(Tt(i)?"Logging out...":"Logout"),9,uC)])):xr("",!0)]))}},fC=Tr(hC,[["__scopeId","data-v-db4438af"]]),dC={class:"app-container"},pC={key:1,class:"loading-container"},mC={__name:"App",setup(t){const e=Me(!1);return Cs(()=>{const n=ug(_s,r=>{e.value=!0,n()})}),(n,r)=>(Te(),De("main",dC,[Lt(fC),e.value?(Te(),Go(Tt(bm),{key:0})):(Te(),De("div",pC,[...r[0]||(r[0]=[X("div",{class:"loading-spinner"},"Loading...",-1)])]))]))}},gC=Tr(mC,[["__scopeId","data-v-fa3e8a6d"]]),_C=Me([]),Uc=Me(!1);function Hu(){const{user:t}=Kr(),e=async u=>{if(!t.value)return[];const f=new Date(u);f.setHours(0,0,0,0);const p=new Date(f),m=new Date(f);m.setHours(23,59,59,999);try{Uc.value=!0;const _=Ao(ni(Hn,"tasks"),tn("userId","==",t.value.uid),tn("date",">=",p),tn("date","<=",m),tp("date","asc")),b=await Fc(_),k=[];return b.forEach(V=>{k.push({id:V.id,...V.data()})}),k}catch(_){return console.error("Error getting tasks:",_),[]}finally{Uc.value=!1}},n=async u=>{if(!t.value)return null;try{const f=Ao(ni(Hn,"tasks"),tn("userId","==",t.value.uid),tn("__name__","==",u)),p=await Fc(f);if(!p.empty){const m=p.docs[0];return{id:m.id,...m.data()}}return null}catch(f){return console.error("Error getting task:",f),null}},r=async(u,f)=>{if(!t.value)return{success:!1,error:"Not authenticated"};try{const p=Uo(Hn,"tasks",u);return await sp(p,{completed:f,updatedAt:new Date}),{success:!0,error:null}}catch(p){return console.error("Error updating task:",p),{success:!1,error:p.message}}},s=async u=>{if(!t.value)return{success:!1,error:"Not authenticated",task:null};try{const f={...u,userId:t.value.uid,createdAt:new Date,updatedAt:new Date};return{success:!0,error:null,task:{id:(await rC(ni(Hn,"tasks"),f)).id,...f}}}catch(f){return console.error("Error adding task:",f),{success:!1,error:f.message,task:null}}},i=async(u,f)=>{if(!t.value)return{success:!1,error:"Not authenticated"};try{const p=Uo(Hn,"tasks",u);return await sp(p,{...f,updatedAt:new Date}),{success:!0,error:null}}catch(p){return console.error("Error updating task:",p),{success:!1,error:p.message}}},o=async u=>{if(!t.value)return{success:!1,error:"Not authenticated"};try{return await nC(Uo(Hn,"tasks",u)),{success:!0,error:null}}catch(f){return console.error("Error deleting task:",f),{success:!1,error:f.message}}},c=async u=>{if(!t.value)return{completed:0,pending:0,total:0};try{const f=new Date(u);f.setHours(0,0,0,0);const p=new Date(f),m=new Date(f);m.setHours(23,59,59,999);const _=Ao(ni(Hn,"tasks"),tn("userId","==",t.value.uid),tn("date",">=",p),tn("date","<=",m)),b=await Fc(_),k=[];b.forEach(U=>{k.push({id:U.id,...U.data()})});const V=k.filter(U=>U.completed).length,B=k.filter(U=>!U.completed).length;return{completed:V,pending:B,total:k.length}}catch(f){return console.error("Error getting task stats:",f),{completed:0,pending:0,total:0}}},l=u=>{if(!t.value)return()=>{};const f=new Date;f.setMonth(f.getMonth()-3);const p=Ao(ni(Hn,"tasks"),tn("userId","==",t.value.uid),tn("date",">=",f),tp("date","asc"));return sC(p,m=>{const _={};m.forEach(k=>{const V={id:k.id,...k.data()},B=new Date(V.date.toDate?V.date.toDate():V.date).toDateString();_[B]||(_[B]=[]),_[B].push(V)});const b={};Object.keys(_).forEach(k=>{const V=_[k],B=V.filter(W=>W.completed).length,U=V.filter(W=>!W.completed).length;b[k]={completed:B,pending:U,total:V.length}}),u(b)})};return{tasks:$e(()=>_C.value),loading:$e(()=>Uc.value),getTasksForDate:e,getTaskById:n,toggleTask:r,addTask:s,updateTask:i,deleteTask:o,getTaskStats:c,subscribeToTaskStats:l}}const yC={class:"calendar"},EC={class:"calendar__list list"},vC=["onClick"],TC={class:"calendar__day-abbr"},IC={class:"calendar__day-number"},wC={key:0,class:"calendar__dots"},AC={__name:"Calendar",emits:["date-selected"],setup(t,{emit:e}){const n=e,{subscribeToTaskStats:r}=Hu();Kr();const s=Me(null),i=Me(null),o=Me(1),c=Me({}),l=m=>{s.value=m.date.toDateString(),n("date-selected",m.date.toDateString())};Cs(()=>{s.value=new Date().toDateString(),n("date-selected",s.value);const m=r(_=>{c.value=_});i.value&&i.value.addEventListener("scroll",f),ba(()=>{m(),i.value&&i.value.removeEventListener("scroll",f)})});const u=$e(()=>{const m=[],_=new Date,b=new Date(_);b.setDate(_.getDate()-7);const k=new Date(_);k.setDate(_.getDate()+30+(o.value-1)*30);let V=new Date(b);for(;V<=k;){const B=V.toDateString()===_.toDateString(),U=V.toDateString(),W=c.value[U]||{completed:0,pending:0,total:0};m.push({date:new Date(V),dayAbbr:V.toLocaleDateString("en-US",{weekday:"short"}),dayNumber:V.getDate(),isToday:B,isSelected:s.value===U,taskStats:W}),V.setDate(V.getDate()+1)}return m}),f=()=>{if(!i.value)return;const m=i.value,_=m.scrollLeft,b=m.scrollWidth,k=m.clientWidth;_+k>=b-50&&p()},p=()=>{o.value+=1};return(m,_)=>(Te(),De("section",yC,[X("div",{class:"calendar__scroll",ref_key:"scrollContainer",ref:i},[X("ul",EC,[(Te(!0),De(Nt,null,Ro(u.value,b=>(Te(),De("li",{key:b.date.toString(),class:ys(["calendar__item item",{calendar__item_today:b.isToday,calendar__item_selected:b.isSelected}]),onClick:k=>l(b)},[X("span",TC,It(b.dayAbbr),1),X("span",IC,It(b.dayNumber),1),b.taskStats.total>0?(Te(),De("div",wC,[(Te(!0),De(Nt,null,Ro(b.taskStats.pending,k=>(Te(),De("span",{key:"pending-"+b.date.toString()+"-"+k,class:"calendar__dot calendar__dot--pending"}))),128)),(Te(!0),De(Nt,null,Ro(b.taskStats.completed,k=>(Te(),De("span",{key:"completed-"+b.date.toString()+"-"+k,class:"calendar__dot calendar__dot--completed"}))),128))])):xr("",!0)],10,vC))),128))])],512)]))}},bC=Tr(AC,[["__scopeId","data-v-4e20c2d5"]]),RC={class:"tasks"},SC={class:"tasks__header"},PC={class:"tasks__title title"},CC={key:0,class:"tasks-loading"},kC={key:1,class:"tasks-error"},DC={key:2,class:"tasks__list list"},VC=["onClick","disabled"],NC={key:0,style:{color:"#fff"}},OC=["onClick"],xC=["onClick","disabled"],MC={key:0,class:"tasks__empty"},LC={__name:"Tasks",props:{selectedDate:{type:String,default:null}},setup(t){const e=Wi(),n=t,{getTasksForDate:r,toggleTask:s,deleteTask:i,subscribeToTaskStats:o}=Hu(),{isAuthenticated:c}=Kr(),l=Me([]),u=Me(!1),f=Me(""),p=Me({}),m=Me({});let _=null;const b=async()=>{if(!c.value){l.value=[];return}u.value=!0,f.value="";try{const H=n.selectedDate?new Date(n.selectedDate):new Date;l.value=await r(H)}catch(H){f.value="Failed to load tasks",console.error("Error loading tasks:",H)}finally{u.value=!1}};Cs(()=>{_=o(()=>{b()})}),ba(()=>{_&&_()}),fs([()=>n.selectedDate,c],()=>{b()},{immediate:!0});const k=$e(()=>{const H=l.value.filter(E=>!E.completed).length,te=n.selectedDate?new Date(n.selectedDate):new Date,oe=new Date;let w=`${H} Task${H!==1?"s":""}`;return te.toDateString()===oe.toDateString()?w+=" Today":w+=` on ${te.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}`,w}),V=async H=>{if(c.value){p.value[H.id]=!0;try{const te=await s(H.id,!H.completed);te.success||(f.value=te.error||"Failed to update task")}catch(te){f.value="Error updating task",console.error("Toggle task error:",te)}finally{p.value[H.id]=!1}}},B=()=>{if(!c.value){e.push("/signin");return}const H=n.selectedDate?`?date=${n.selectedDate}`:"";e.push(`/task/new${H}`)},U=H=>{e.push(`/task/edit/${H.id}`)},W=async H=>{if(c.value&&confirm("Are you sure you want to delete this task?")){m.value[H.id]=!0;try{const te=await i(H.id);te.success||(f.value=te.error||"Failed to delete task")}catch(te){f.value="Error deleting task",console.error("Delete task error:",te)}finally{m.value[H.id]=!1}}};return(H,te)=>(Te(),De("section",RC,[X("header",SC,[X("h2",PC,It(k.value),1)]),u.value?(Te(),De("div",CC,"Loading tasks...")):f.value?(Te(),De("div",kC,It(f.value),1)):(Te(),De("ul",DC,[(Te(!0),De(Nt,null,Ro(l.value,oe=>(Te(),De("li",{key:oe.id,class:"tasks__item item"},[X("button",{class:ys(["tasks__checkbox checkbox",{checked:oe.completed}]),onClick:w=>V(oe),disabled:p.value[oe.id]},[oe.completed?(Te(),De("span",NC,"✓")):xr("",!0)],10,VC),X("span",{class:ys(["tasks__text",{completed:oe.completed}])},It(oe.text),3),X("button",{class:"tasks__edit",onClick:w=>U(oe)},"✎",8,OC),X("button",{class:"tasks__delete",onClick:w=>W(oe),disabled:m.value[oe.id]}," 🗑️ ",8,xC)]))),128)),l.value.length===0?(Te(),De("li",MC,' No tasks for this date. Click "Add a New Task" to create one! ')):xr("",!0)])),X("div",{class:"tasks__button-container"},[X("button",{class:"tasks__add-button",onClick:B},"+ Add a New Task")])]))}},FC=Tr(LC,[["__scopeId","data-v-6de2f232"]]),UC={class:"home"},BC={__name:"Home",setup(t){const{isAuthenticated:e}=Kr(),n=Me(new Date().toDateString()),r=Me(0),s=Me(0),i=o=>{n.value=o};return fs(e,o=>{o&&(r.value++,s.value++)}),Cs(()=>{n.value=new Date().toDateString()}),(o,c)=>(Te(),De("div",UC,[(Te(),Go(bC,{onDateSelected:i,key:r.value})),(Te(),Go(FC,{"selected-date":n.value,key:s.value},null,8,["selected-date"]))]))}},$C=Tr(BC,[["__scopeId","data-v-224caee7"]]),jC={class:"task-editor-page"},qC={class:"task-editor__header"},HC={class:"task-editor__title"},WC={class:"task-editor__main"},zC={class:"task-editor__field"},KC={class:"task-editor__field"},GC={class:"task-editor__field"},QC={key:0,class:"task-editor__error"},YC={class:"task-editor__actions"},JC=["disabled"],XC={__name:"TaskEditor",setup(t){const e=Wi(),n=KT(),{addTask:r,updateTask:s,getTaskById:i}=Hu(),o=Me({title:"",description:"",date:""}),c=Me(!1),l=Me(""),u=$e(()=>n.name==="task-edit");Cs(async()=>{if(u.value){const _=n.params.id,b=await i(_);b?o.value={title:b.text,description:b.description||"",date:f(b.date)}:l.value="Task not found"}else{const _=n.query.date?new Date(n.query.date):new Date;o.value.date=f(_)}});const f=_=>{const b=new Date(_);return b.setHours(12,0,0,0),b.toISOString().split("T")[0]},p=()=>{e.back()},m=async()=>{if(!o.value.title.trim())return;c.value=!0,l.value="";const _={text:o.value.title.trim(),description:o.value.description.trim(),date:new Date(o.value.date)};try{let b;if(u.value){const k=n.params.id;b=await s(k,_)}else b=await r(_);b.success?e.push("/"):l.value=b.error||"Failed to save task"}catch(b){l.value="An unexpected error occurred",console.error("Save task error:",b)}finally{c.value=!1}};return(_,b)=>(Te(),De("div",jC,[X("header",qC,[X("button",{class:"task-editor__back",onClick:p},"← Back"),X("h1",HC,It(u.value?"Edit Task":"Add a New Task"),1),b[3]||(b[3]=X("div",{style:{width:"80px"}},null,-1))]),X("main",WC,[X("form",{class:"task-editor__form",onSubmit:Kl(m,["prevent"])},[X("div",zC,[b[4]||(b[4]=X("label",{class:"task-editor__label"},"Title *",-1)),In(X("input",{"onUpdate:modelValue":b[0]||(b[0]=k=>o.value.title=k),type:"text",class:"task-editor__input",placeholder:"Enter task title",required:""},null,512),[[wn,o.value.title]])]),X("div",KC,[b[5]||(b[5]=X("label",{class:"task-editor__label"},"Description",-1)),In(X("textarea",{"onUpdate:modelValue":b[1]||(b[1]=k=>o.value.description=k),class:"task-editor__textarea",placeholder:"Enter task description (optional)",rows:"4"},null,512),[[wn,o.value.description]])]),X("div",GC,[b[6]||(b[6]=X("label",{class:"task-editor__label"},"Date *",-1)),In(X("input",{"onUpdate:modelValue":b[2]||(b[2]=k=>o.value.date=k),type:"date",class:"task-editor__input",required:""},null,512),[[wn,o.value.date]])]),l.value?(Te(),De("div",QC,It(l.value),1)):xr("",!0),X("div",YC,[X("button",{type:"button",class:"task-editor__cancel",onClick:p},"Cancel"),X("button",{type:"submit",class:"task-editor__save",disabled:!o.value.title.trim()||c.value},It(c.value?"Saving...":u.value?"Update":"Save"),9,JC)])],32)])]))}},ip=Tr(XC,[["__scopeId","data-v-8c1cc122"]]),ZC={class:"auth-page"},e0={class:"auth-container"},t0={class:"auth-field"},n0={class:"auth-field"},r0={key:0,class:"auth-error"},s0=["disabled"],i0={class:"auth-footer"},o0={__name:"SignIn",setup(t){const e=Wi(),{login:n,loading:r}=Kr(),s=Me({email:"",password:""}),i=Me(""),o=async()=>{if(i.value="",!s.value.email||!s.value.password){i.value="Please fill in all fields";return}const c=await n(s.value.email,s.value.password);c.success?e.push("/"):i.value=c.error||"Failed to sign in"};return(c,l)=>{const u=qp("router-link");return Te(),De("div",ZC,[X("div",e0,[l[6]||(l[6]=X("header",{class:"auth-header"},[X("h1",{class:"auth-title"},"Sign In to Tassker"),X("p",{class:"auth-subtitle"},"Welcome back! Please sign in to your account.")],-1)),X("form",{class:"auth-form",onSubmit:Kl(o,["prevent"])},[X("div",t0,[l[2]||(l[2]=X("label",{class:"auth-label"},"Email",-1)),In(X("input",{"onUpdate:modelValue":l[0]||(l[0]=f=>s.value.email=f),type:"email",class:"auth-input",placeholder:"Enter your email",required:""},null,512),[[wn,s.value.email]])]),X("div",n0,[l[3]||(l[3]=X("label",{class:"auth-label"},"Password",-1)),In(X("input",{"onUpdate:modelValue":l[1]||(l[1]=f=>s.value.password=f),type:"password",class:"auth-input",placeholder:"Enter your password",required:""},null,512),[[wn,s.value.password]])]),i.value?(Te(),De("div",r0,It(i.value),1)):xr("",!0),X("button",{type:"submit",class:"auth-button",disabled:Tt(r)},It(Tt(r)?"Signing In...":"Sign In"),9,s0)],32),X("footer",i0,[X("p",null,[l[5]||(l[5]=Ci(" Don't have an account? ",-1)),Lt(u,{to:"/register",class:"auth-link"},{default:jl(()=>[...l[4]||(l[4]=[Ci("Sign up",-1)])]),_:1})])])])])}}},a0=Tr(o0,[["__scopeId","data-v-de918469"]]),c0={class:"auth-page"},l0={class:"auth-container"},u0={class:"auth-field"},h0={class:"auth-field"},f0={class:"auth-field"},d0={class:"auth-field"},p0={key:0,class:"auth-error"},m0=["disabled"],g0={class:"auth-footer"},_0={__name:"Register",setup(t){const e=Wi(),{register:n,loading:r}=Kr(),s=Me({fullName:"",email:"",password:"",confirmPassword:""}),i=Me(""),o=$e(()=>s.value.password===s.value.confirmPassword&&s.value.password.length>=6),c=async()=>{if(i.value="",!s.value.fullName||!s.value.email||!s.value.password){i.value="Please fill in all fields";return}if(s.value.password.length<6){i.value="Password must be at least 6 characters long";return}if(!o.value){i.value="Passwords do not match";return}const l=await n(s.value.email,s.value.password,s.value.fullName);l.success?e.push("/"):i.value=l.error||"Failed to create account"};return(l,u)=>{const f=qp("router-link");return Te(),De("div",c0,[X("div",l0,[u[10]||(u[10]=X("header",{class:"auth-header"},[X("h1",{class:"auth-title"},"Create Account"),X("p",{class:"auth-subtitle"},"Join Tassker and start managing your tasks efficiently.")],-1)),X("form",{class:"auth-form",onSubmit:Kl(c,["prevent"])},[X("div",u0,[u[4]||(u[4]=X("label",{class:"auth-label"},"Full Name",-1)),In(X("input",{"onUpdate:modelValue":u[0]||(u[0]=p=>s.value.fullName=p),type:"text",class:"auth-input",placeholder:"Enter your full name",required:""},null,512),[[wn,s.value.fullName]])]),X("div",h0,[u[5]||(u[5]=X("label",{class:"auth-label"},"Email",-1)),In(X("input",{"onUpdate:modelValue":u[1]||(u[1]=p=>s.value.email=p),type:"email",class:"auth-input",placeholder:"Enter your email",required:""},null,512),[[wn,s.value.email]])]),X("div",f0,[u[6]||(u[6]=X("label",{class:"auth-label"},"Password",-1)),In(X("input",{"onUpdate:modelValue":u[2]||(u[2]=p=>s.value.password=p),type:"password",class:"auth-input",placeholder:"Create a password",required:""},null,512),[[wn,s.value.password]])]),X("div",d0,[u[7]||(u[7]=X("label",{class:"auth-label"},"Confirm Password",-1)),In(X("input",{"onUpdate:modelValue":u[3]||(u[3]=p=>s.value.confirmPassword=p),type:"password",class:"auth-input",placeholder:"Confirm your password",required:""},null,512),[[wn,s.value.confirmPassword]])]),i.value?(Te(),De("div",p0,It(i.value),1)):xr("",!0),X("button",{type:"submit",class:"auth-button",disabled:Tt(r)||!o.value},It(Tt(r)?"Creating Account...":"Create Account"),9,m0)],32),X("footer",g0,[X("p",null,[u[9]||(u[9]=Ci(" Already have an account? ",-1)),Lt(f,{to:"/signin",class:"auth-link"},{default:jl(()=>[...u[8]||(u[8]=[Ci("Sign in",-1)])]),_:1})])])])])}}},y0=Tr(_0,[["__scopeId","data-v-05ccbd11"]]),E0=[{path:"/",name:"home",component:$C,meta:{requiresAuth:!0}},{path:"/task/new",name:"task-create",component:ip,meta:{requiresAuth:!0},props:t=>({initialDate:t.query.date?new Date(t.query.date).toDateString():new Date().toDateString()})},{path:"/task/edit/:id",name:"task-edit",component:ip,props:!0,meta:{requiresAuth:!0}},{path:"/signin",name:"signin",component:a0,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:y0,meta:{requiresGuest:!0}}],Z_=WT({history:TT(),routes:E0});Z_.beforeEach((t,e,n)=>{const r=_s.onAuthStateChanged(s=>{const i=!!s;t.meta.requiresAuth&&!i?n("/signin"):t.meta.requiresGuest&&i?n("/"):n(),r()})});const ey=$v(gC);ey.use(Z_);ey.mount("#app");
