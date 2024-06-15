(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,I=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),W=new WeakMap;let et=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(I&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=W.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&W.set(e,t))}return t}toString(){return this.cssText}};const lt=o=>new et(typeof o=="string"?o:o+"",void 0,F),U=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((s,i,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new et(e,o,F)},pt=(o,t)=>{if(I)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=R.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},K=I?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return lt(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ht,defineProperty:ct,getOwnPropertyDescriptor:dt,getOwnPropertyNames:ut,getOwnPropertySymbols:mt,getPrototypeOf:gt}=Object,k=globalThis,V=k.trustedTypes,$t=V?V.emptyScript:"",j=k.reactiveElementPolyfillSupport,S=(o,t)=>o,B={toAttribute(o,t){switch(t){case Boolean:o=o?$t:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},it=(o,t)=>!ht(o,t),q={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:it};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),k.litPropertyMetadata??(k.litPropertyMetadata=new WeakMap);class _ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=q){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&ct(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=dt(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get(){return i==null?void 0:i.call(this)},set(r){const p=i==null?void 0:i.call(this);n.call(this,r),this.requestUpdate(t,p,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??q}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const t=gt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const e=this.properties,s=[...ut(e),...mt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(K(i))}else t!==void 0&&e.push(K(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var n;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const r=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:B).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){var n;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const r=s.getPropertyOptions(i),p=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:B;this._$Em=i,this[i]=p.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??it)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,r]of i)r.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var n;return(n=i.hostUpdate)==null?void 0:n.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[S("elementProperties")]=new Map,_[S("finalized")]=new Map,j==null||j({ReactiveElement:_}),(k.reactiveElementVersions??(k.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=globalThis,H=E.trustedTypes,J=H?H.createPolicy("lit-html",{createHTML:o=>o}):void 0,st="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,ot="?"+$,kt=`<${ot}>`,b=document,P=()=>b.createComment(""),C=o=>o===null||typeof o!="object"&&typeof o!="function",nt=Array.isArray,ft=o=>nt(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",D=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,Q=/>/g,w=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Z=/'/g,G=/"/g,rt=/^(?:script|style|textarea|title)$/i,wt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),f=wt(1),v=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),Y=new WeakMap,y=b.createTreeWalker(b,129);function at(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return J!==void 0?J.createHTML(t):t}const yt=(o,t)=>{const e=o.length-1,s=[];let i,n=t===2?"<svg>":"",r=x;for(let p=0;p<e;p++){const a=o[p];let h,d,l=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===x?d[1]==="!--"?r=X:d[1]!==void 0?r=Q:d[2]!==void 0?(rt.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=w):d[3]!==void 0&&(r=w):r===w?d[0]===">"?(r=i??x,l=-1):d[1]===void 0?l=-2:(l=r.lastIndex-d[2].length,h=d[1],r=d[3]===void 0?w:d[3]==='"'?G:Z):r===G||r===Z?r=w:r===X||r===Q?r=x:(r=w,i=void 0);const g=r===w&&o[p+1].startsWith("/>")?" ":"";n+=r===x?a+kt:l>=0?(s.push(h),a.slice(0,l)+st+a.slice(l)+$+g):a+$+(l===-2?p:g)}return[at(o,n+(o[e]||"<?>")+(t===2?"</svg>":"")),s]};class M{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const p=t.length-1,a=this.parts,[h,d]=yt(t,e);if(this.el=M.createElement(h,s),y.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=y.nextNode())!==null&&a.length<p;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(st)){const u=d[r++],g=i.getAttribute(l).split($),T=/([.?@])?(.*)/.exec(u);a.push({type:1,index:n,name:T[2],strings:g,ctor:T[1]==="."?_t:T[1]==="?"?vt:T[1]==="@"?At:N}),i.removeAttribute(l)}else l.startsWith($)&&(a.push({type:6,index:n}),i.removeAttribute(l));if(rt.test(i.tagName)){const l=i.textContent.split($),u=l.length-1;if(u>0){i.textContent=H?H.emptyScript:"";for(let g=0;g<u;g++)i.append(l[g],P()),y.nextNode(),a.push({type:2,index:++n});i.append(l[u],P())}}}else if(i.nodeType===8)if(i.data===ot)a.push({type:2,index:n});else{let l=-1;for(;(l=i.data.indexOf($,l+1))!==-1;)a.push({type:7,index:n}),l+=$.length-1}n++}}static createElement(t,e){const s=b.createElement("template");return s.innerHTML=t,s}}function A(o,t,e=o,s){var r,p;if(t===v)return t;let i=s!==void 0?(r=e._$Co)==null?void 0:r[s]:e._$Cl;const n=C(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((p=i==null?void 0:i._$AO)==null||p.call(i,!1),n===void 0?i=void 0:(i=new n(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=A(o,i._$AS(o,t.values),i,s)),t}class bt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??b).importNode(e,!0);y.currentNode=i;let n=y.nextNode(),r=0,p=0,a=s[0];for(;a!==void 0;){if(r===a.index){let h;a.type===2?h=new O(n,n.nextSibling,this,t):a.type===1?h=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(h=new xt(n,this,t)),this._$AV.push(h),a=s[++p]}r!==(a==null?void 0:a.index)&&(n=y.nextNode(),r++)}return y.currentNode=b,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class O{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=A(this,t,e),C(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==v&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ft(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==c&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=M.createElement(at(s.h,s.h[0]),this.options)),s);if(((n=this._$AH)==null?void 0:n._$AD)===i)this._$AH.p(e);else{const r=new bt(i,this),p=r.u(this.options);r.p(e),this.T(p),this._$AH=r}}_$AC(t){let e=Y.get(t.strings);return e===void 0&&Y.set(t.strings,e=new M(t)),e}k(t){nt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new O(this.S(P()),this.S(P()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(n===void 0)t=A(this,t,e,0),r=!C(t)||t!==this._$AH&&t!==v,r&&(this._$AH=t);else{const p=t;let a,h;for(t=n[0],a=0;a<n.length-1;a++)h=A(this,p[s+a],e,a),h===v&&(h=this._$AH[a]),r||(r=!C(h)||h!==this._$AH[a]),h===c?t=c:t!==c&&(t+=(h??"")+n[a+1]),this._$AH[a]=h}r&&!i&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class _t extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}class vt extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class At extends N{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=A(this,t,e,0)??c)===v)return;const s=this._$AH,i=t===c&&s!==c||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class xt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){A(this,t)}}const L=E.litHtmlPolyfillSupport;L==null||L(M,O),(E.litHtmlVersions??(E.litHtmlVersions=[])).push("3.1.4");const St=(o,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const n=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new O(t.insertBefore(P(),n),n,void 0,e??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class m extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=St(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return v}}var tt;m._$litElement$=!0,m.finalized=!0,(tt=globalThis.litElementHydrateSupport)==null||tt.call(globalThis,{LitElement:m});const z=globalThis.litElementPolyfillSupport;z==null||z({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");class Et extends m{static get properties(){return{list:{},condition:{}}}constructor(){super(),this.title="Dokumentasi Tutorial",this.description="Cara petunjuk penggunaan dan pemakaian mesin kasir aplikasi kasir toko restoran software program by hockeycomputindo.",this.logo="https://wsrv.nl/?url=https://www.hockeycomputindo.com/img/hockeycompcarwebsite.jpg&w=300&output=webp",this.url="https://www.hockeycomputindo.com/dokumentasi/",this.home="https://www.hockeycomputindo.com/",this.info="Pilih dokumentasi sesuai dengan kebutuhan mu untuk mempelajari tutorial dan panduan penggunaan produk hockey computindo , seperti mesin kasir point of sale, aplikasi kasir, aplikasi toko, aplikasi restoran , software program dan lain nya.",this.condition=!0}render(){return f`
      <div>
  <p><a href=${this.home} class="black">${this.home}</a></p>
        <a href=${this.url} title=${this.title}>
          <img src=${this.logo} class="logo" alt="Vite logo" />
        </a>
        <h1>${this.title}</h1>
        <h2>${this.description}</h2>
        <p>${this.info}</p>
      </div>
     <slot></slot>
    `}static get styles(){return U`
      :host {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
        border-radius:50px;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .black {color:black;}
      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

    `}}window.customElements.define("my-nav",Et);class Pt extends m{static get properties(){return{list:{},condition:{}}}constructor(){super(),this.title="Cara penggunaan Mesin Kasir",this.description="Petunjuk Manual cara penggunaan dokumentasi dan tutorial Mesin Kasir POS Point of Sale",this.logo="https://www.hockeycomputindo.com/img/hockeycompcarwebsite.jpg",this.url="https://www.hockeycomputindo.com/dokumentasi/",this.pos=[{title:"Mesin Kasir",image:"https://www.hockeycomputindo.com/img/mesinkasir/mesinkasirlengkapsekali.webp",info:"Bagaimana cara penggunaan mesin kasir point of sale lengkap - akses pada dokumentasi ini untuk mendapatkan petunjuk penggunaan",link:"https://www.hockeycomputindo.com/dokumentasi/mesinkasir/"}],this.doclist=[{nav:"Mesin kasir Point Of Sale",image:"https://www.hockeycomputindo.com/img/mesinkasir/mesinkasirlengkapsekali.webp",link:"Mesin kasir restoran lengkap"},{nav:"Mesin kasir restoran lengkap 2",image:"https://www.hockeycomputindo.com/img/mesinkasir/mesinkasirlengkapsekali.webp",link:"Mesin kasir restoran lengkap link 2"}],this.condition=!0}render(){return f`
      <div>
      <h2><strong><a href=${this.url} title=${this.title}>
      ${this.title}</a></strong></h2>
      <h3>${this.description}</h3>
      <div class="grid-container los bg-yellow">
      ${this.pos.map(t=>f`
      <div class="grid-item">
      <a href=${t.link} title=${t.title}><img class="produk" src=${t.image} alt=${t.title}/></a>
      </div>
      <div class="grid-item p-5">
      <h3><strong><a href=${t.link} title=${t.title} class="text-dark">${t.title}</a></strong></h3>
      <p>${t.info}</p>
      <p class="pt-3"><a href=${t.link} title=${t.title} class="button">Dokumentasi ${t.title}</a></p>
      </div>`)}
      </div>
      <slot></slot>
</div>
    `}static get styles(){return U`
    :host {
    }
    .los {padding: 5px; border: solid 1px; border-radius:50px;}
    .grid-container {
      display: grid;
      grid-template-columns: auto auto;
      padding: 10px;
    }
    .grid-item {
      padding: 20px;
    }
    a.button {padding: 8px; border-radius:8px; background-color:black;color:white; text-decoration:none;}
    .bg-yellow {background-color:#F9FCC2;}
    .pt-3 {padding-top:15px;}
    .p-5 {padding:50px;}
    .produk {max-width:100%;}
a {text-decoration:none;}
.text-dark {color:black;}
    @media only screen and (max-width: 600px) {
     
    .grid-container {
      display: grid;
      grid-template-columns: auto;
      padding: 10px;
    }
    }
    `}}window.customElements.define("my-kasir",Pt);class Ct extends m{static get properties(){return{list:{},condition:{}}}constructor(){super(),this.title="Cara penggunaan Aplikasi Restoran",this.description="Petunjuk Manual dan bagaimana cara penggunaan dokumentasi dan tutorial aplikasi restoran cafe rumah makan, software restoran ,program restoran",this.doclist=[{nav:"Resto-X App",image:"https://www.hockeycomputindo.com/img/aplikasi/restoran/restox/aplikasiandroidrestorancaferumahmakan.webp",info:"Untuk manual penggunaan aplikasi restoran online resto-x integrasi website whatsapp online order dan QrCode menu Digital akses disini",link:"https://www.hockeycomputindo.com/dokumentasi/aplikasirestoran/"},{nav:"Mr.Resto App",image:"https://www.hockeycomputindo.com/img/mresto.webp",info:"Panduan cara penggunaan tutorial aplikasi restoran mr.resto pos app modern resto cafe rumah makan software program online.",link:"https://www.hockeycomputindo.com/dokumentasi/restopos/"},{nav:"Unipos Resto Soft",image:"https://www.hockeycomputindo.com/img/software/restoran/websiterestorancaferumahmakan.webp",info:"Ikuti panduang dan petunjuk penggunaan software restoran program restoran desktop offline unipos resto cafe rumah makan.",link:"https://www.hockeycomputindo.com/dokumentasi/softwarerestoran/"},{nav:"Bang Resto App",image:"https://www.hockeycomputindo.com/img/aplikasi/restoran/bangresto/aplikasirestoranmodern.webp",info:"Paduan dan pedoman penggunaan aplikasi restoran cafe rumah makan modern bang resto web app.",link:"https://www.hockeycomputindo.com/dokumentasi/bangresto/"},{nav:"Program Restoran B-POS",image:"https://www.hockeycomputindo.com/img/aplikasi/restoran/unipos/mockup/backend/masterdata.webp",info:"Cara menggunakan program restoran software restoran murah b-pos offline desktop soft",link:"https://www.hockeycomputindo.com/dokumentasi/programrestoranmurah/"}],this.condition=!0}render(){return f`
      <div class="pt-5">
      <h2><strong><a href=${this.url} title=${this.title}>
      ${this.title}</a></strong></h2>
      <h3>${this.description}</h3>
      <div class="grid-container los bg-blue">
      ${this.doclist.map(t=>f`
  <div class="grid-item">
  <a href=${t.link} title=${t.nav}><img class="produk" src=${t.image} alt=${t.nav} width="100%" height="100%" loading="lazy"/></a>
  <h3><strong><a href=${t.link} class="text-dark" title=${t.nav}>${t.nav}</a></strong></h3>
  <p>${t.info}</p>
  <p class="pt-3 pb-3"><a href=${t.link} title=${t.nav} class="button">Dokumentasi ${t.nav}</a></p>
  </div>`)}
      <slot></slot>
</div>
    `}static get styles(){return U`
    :host {
    }
    .los {padding: 5px; border: solid 1px; border-radius:50px;}
    .grid-container {
      display: grid;
      grid-template-columns: auto auto;
      padding: 10px;
    }
    .grid-item {
      padding: 20px;
    }
    .center {margin:auto;}
    a.button {padding: 8px; border-radius:8px; background-color:black;color:white; text-decoration:none;}
    a {text-decoration:none;}
    .text-dark {color:black;}
    .bg-pink {background-color:#FCD0FD;}
    .bg-blue {background-color:#D0FAFD;}
    .pt-3 {padding-top:15px;}
    .pt-3 {padding-bottom:15px;}
    .pt-5 {padding-top:50px;}
    .p-5 {padding:50px;}
    .produk {max-width:100%;height:250px; object-fit:cover;}
img {border-radius:20px;}
.text-dark {color:black;}
    @media only screen and (max-width: 600px) {
     
    .grid-container {
      display: grid;
      grid-template-columns: auto;
      padding: 10px;
    }
    }
    `}}window.customElements.define("my-resto",Ct);class Mt extends m{static get properties(){return{list:{},condition:{}}}constructor(){super(),this.title="Cara penggunaan Aplikasi Toko",this.description="Petunjuk Manual dan bagaimana cara penggunaan dokumentasi dan tutorial aplikasi toko minimarket shop store, software kasir ,program kasir barcode",this.doclist=[{nav:"POS-X App",image:"https://www.hockeycomputindo.com/img/aplikasi/toko/posx/mockup/transaksi.webp",info:"Manual penggunaan aplikasi toko online pos-x integrasi website whatsapp online order dan Digital site minimarket shop store",link:"https://www.hockeycomputindo.com/aplikasitoko/pos-x/"},{nav:"Robopos App",image:"https://www.hockeycomputindo.com/img/aplikasi/toko/robopos/mockup/frontend/mobileweb.webp",info:"Panduan cara penggunaan tutorial aplikasi toko integrasi dengan toko online shop modern dengan robopos web app terbaru.",link:"https://www.hockeycomputindo.com/dokumentasi/robopos/"},{nav:"ChromPOS Software",image:"https://www.hockeycomputindo.com/img/aplikasi/toko/chrompos/mockup/backend/pos-penjualankasir.webp",info:"Bagaimana cara operasional penggunaan program kasir toko software toko barcode chrompos, cek disini",link:"https://www.hockeycomputindo.com/dokumentasi/softwaretoko/"},{nav:"Lava App",image:"https://www.hockeycomputindo.com/img/aplikasi/toko/grosirlavapos/aplikasitokogrosireceran.webp",info:"Cara penggunaan aplikasi kasir penjualan retail eceran dan grosir integrasi website lava app pos point of sale.",link:"https://www.hockeycomputindo.com/dokumentasi/lavaapp/"},{nav:"Axcora POS",image:"https://res.cloudinary.com/hockeycorp/image/upload/q_auto:eco/f_avif/v1716638104/Software%20APlikasi%20Program%20kasir/axcorapos/axcorapos_aplikasi_kasir_toko_online_an7z0k.jpg",info:"Dokumentasi dan tutorial petunjuk penggunaan aplikasi toko axcora pos dengan expired date fitur",link:"https://www.hockeycomputindo.com/dokumentasi/programtoko/"},{nav:"Program Toko B-POS",image:"https://wsrv.nl/?url=https://img.youtube.com/vi/dpbKOmH5298/maxresdefault.jpg&w=300&output=webp",info:"Cara dan petunjuk pemakaian program toko murah software toko murah BPOS retail version",link:"https://www.hockeycomputindo.com/dokumentasi/programtokomurah/"}],this.condition=!0}render(){return f`
      <div class="pt-5">
      <h2><strong><a href=${this.url} title=${this.title}>
      ${this.title}</a></strong></h2>
      <h3>${this.description}</h3>
      <div class="grid-container los bg-pink">
      ${this.doclist.map(t=>f`
  <div class="grid-item">
  <a href=${t.link} title=${t.nav}><img class="produk" src=${t.image} alt=${t.nav} width="100%" height="100%" loading="lazy"/></a>
  <h3><strong><a href=${t.link} class="text-dark" title=${t.nav}>${t.nav}</a></strong></h3>
  <p>${t.info}</p>
  <p class="pt-3 pb-3"><a href=${t.link} title=${t.nav} class="button">Dokumentasi ${t.nav}</a></p>
  </div>`)}
      <slot></slot>
</div>
    `}static get styles(){return U`
    :host {
    }
    .los {padding: 5px; border: solid 1px; border-radius:50px;}
    .grid-container {
      display: grid;
      grid-template-columns: auto auto;
      padding: 10px;
    }
    .grid-item {
      padding: 20px;
    }
    .center {margin:auto;}
    a.button {padding: 8px; border-radius:8px; background-color:black;color:white; text-decoration:none;}
    a {text-decoration:none;}
    .text-dark {color:black;}
    .bg-pink {background-color:#FCD0FD;}
    .bg-blue {background-color:#D0FAFD;}
    .pt-3 {padding-top:15px;}
    .pt-3 {padding-bottom:15px;}
    .pt-5 {padding-top:50px;}
    .p-5 {padding:50px;}
    .produk {max-width:100%;height:250px; object-fit:cover;}
img {border-radius:20px;}
.text-dark {color:black;}
    @media only screen and (max-width: 600px) {
     
    .grid-container {
      display: grid;
      grid-template-columns: auto;
      padding: 10px;
    }
    }
    `}}window.customElements.define("my-toko",Mt);class Ut extends m{static get properties(){return{list:{},condition:{}}}constructor(){super(),this.title="Dokumentasi Tutorial",this.description="Cara petunjuk penggunaan dan pemakaian mesin kasir aplikasi kasir toko restoran software program by hockeycomputindo.",this.logo="https://wsrv.nl/?url=https://www.hockeycomputindo.com/img/hockeycompcarwebsite.jpg&w=300&output=webp",this.url="https://www.hockeycomputindo.com/dokumentasi/",this.home="https://www.hockeycomputindo.com/",this.info="Whatsapp: +62895339403223 | Mobile: +6287819355589",this.condition=!0}render(){return f`
      <div>
        <a href=${this.url} title=${this.title}>
          <img src=${this.logo} class="logo" alt=${this.title} loading="lazy"/>
        </a>
        <h3>${this.title}</h3>
        <p>${this.description}</p>
        <p>${this.info}</p>        
  <p><a href=${this.home} class="black">${this.home}</a></p>
      </div>
     <slot></slot>
    `}static get styles(){return U`
      :host {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
        border-radius:50px;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .black {color:black;}


      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

    `}}window.customElements.define("my-footer",Ut);
