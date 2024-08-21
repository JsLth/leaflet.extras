(()=>{var t={d:(e,n)=>{for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";
/*!********************************************!*\
  !*** ./node_modules/fuse.js/dist/fuse.mjs ***!
  \********************************************/function n(t){return Array.isArray?Array.isArray(t):"[object Array]"===u(t)}t.r(e),t.d(e,{default:()=>D});const s=1/0;function i(t){return null==t?"":function(t){if("string"==typeof t)return t;let e=t+"";return"0"==e&&1/t==-s?"-0":e}(t)}function r(t){return"string"==typeof t}function c(t){return"number"==typeof t}function o(t){return!0===t||!1===t||function(t){return h(t)&&null!==t}(t)&&"[object Boolean]"==u(t)}function h(t){return"object"==typeof t}function a(t){return null!=t}function l(t){return!t.trim().length}function u(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const d=t=>`Missing ${t} property in key`,g=t=>`Property 'weight' in key '${t}' must be a positive integer`,f=Object.prototype.hasOwnProperty;class p{constructor(t){this._keys=[],this._keyMap={};let e=0;t.forEach((t=>{let n=m(t);this._keys.push(n),this._keyMap[n.id]=n,e+=n.weight})),this._keys.forEach((t=>{t.weight/=e}))}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function m(t){let e=null,s=null,i=null,c=1,o=null;if(r(t)||n(t))i=t,e=M(t),s=y(t);else{if(!f.call(t,"name"))throw new Error(d("name"));const n=t.name;if(i=n,f.call(t,"weight")&&(c=t.weight,c<=0))throw new Error(g(n));e=M(n),s=y(n),o=t.getFn}return{path:e,id:s,weight:c,src:i,getFn:o}}function M(t){return n(t)?t:t.split(".")}function y(t){return n(t)?t.join("."):t}var x={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,...{useExtendedSearch:!1,getFn:function(t,e){let s=[],h=!1;const l=(t,e,u)=>{if(a(t))if(e[u]){const d=t[e[u]];if(!a(d))return;if(u===e.length-1&&(r(d)||c(d)||o(d)))s.push(i(d));else if(n(d)){h=!0;for(let t=0,n=d.length;t<n;t+=1)l(d[t],e,u+1)}else e.length&&l(d,e,u+1)}else s.push(t)};return l(t,r(e)?e.split("."):e,0),h?s:s[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1}};const L=/[^ ]+/g;class v{constructor({getFn:t=x.getFn,fieldNormWeight:e=x.fieldNormWeight}={}){this.norm=function(t=1,e=3){const n=new Map,s=Math.pow(10,e);return{get(e){const i=e.match(L).length;if(n.has(i))return n.get(i);const r=1/Math.pow(i,.5*t),c=parseFloat(Math.round(r*s)/s);return n.set(i,c),c},clear(){n.clear()}}}(e,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach(((t,e)=>{this._keysMap[t.id]=e}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,r(this.docs[0])?this.docs.forEach(((t,e)=>{this._addString(t,e)})):this.docs.forEach(((t,e)=>{this._addObject(t,e)})),this.norm.clear())}add(t){const e=this.size();r(t)?this._addString(t,e):this._addObject(t,e)}removeAt(t){this.records.splice(t,1);for(let e=t,n=this.size();e<n;e+=1)this.records[e].i-=1}getValueForItemAtKeyId(t,e){return t[this._keysMap[e]]}size(){return this.records.length}_addString(t,e){if(!a(t)||l(t))return;let n={v:t,i:e,n:this.norm.get(t)};this.records.push(n)}_addObject(t,e){let s={i:e,$:{}};this.keys.forEach(((e,i)=>{let c=e.getFn?e.getFn(t):this.getFn(t,e.path);if(a(c))if(n(c)){let t=[];const e=[{nestedArrIndex:-1,value:c}];for(;e.length;){const{nestedArrIndex:s,value:i}=e.pop();if(a(i))if(r(i)&&!l(i)){let e={v:i,i:s,n:this.norm.get(i)};t.push(e)}else n(i)&&i.forEach(((t,n)=>{e.push({nestedArrIndex:n,value:t})}))}s.$[i]=t}else if(r(c)&&!l(c)){let t={v:c,n:this.norm.get(c)};s.$[i]=t}})),this.records.push(s)}toJSON(){return{keys:this.keys,records:this.records}}}function _(t,e,{getFn:n=x.getFn,fieldNormWeight:s=x.fieldNormWeight}={}){const i=new v({getFn:n,fieldNormWeight:s});return i.setKeys(t.map(m)),i.setSources(e),i.create(),i}function k(t,{errors:e=0,currentLocation:n=0,expectedLocation:s=0,distance:i=x.distance,ignoreLocation:r=x.ignoreLocation}={}){const c=e/t.length;if(r)return c;const o=Math.abs(s-n);return i?c+o/i:o?1:c}const S=32;function b(t,e,n,{location:s=x.location,distance:i=x.distance,threshold:r=x.threshold,findAllMatches:c=x.findAllMatches,minMatchCharLength:o=x.minMatchCharLength,includeMatches:h=x.includeMatches,ignoreLocation:a=x.ignoreLocation}={}){if(e.length>S)throw new Error(`Pattern length exceeds max of ${S}.`);const l=e.length,u=t.length,d=Math.max(0,Math.min(s,u));let g=r,f=d;const p=o>1||h,m=p?Array(u):[];let M;for(;(M=t.indexOf(e,f))>-1;){let t=k(e,{currentLocation:M,expectedLocation:d,distance:i,ignoreLocation:a});if(g=Math.min(t,g),f=M+l,p){let t=0;for(;t<l;)m[M+t]=1,t+=1}}f=-1;let y=[],L=1,v=l+u;const _=1<<l-1;for(let s=0;s<l;s+=1){let r=0,o=v;for(;r<o;){k(e,{errors:s,currentLocation:d+o,expectedLocation:d,distance:i,ignoreLocation:a})<=g?r=o:v=o,o=Math.floor((v-r)/2+r)}v=o;let h=Math.max(1,d-o+1),M=c?u:Math.min(d+o,u)+l,x=Array(M+2);x[M+1]=(1<<s)-1;for(let r=M;r>=h;r-=1){let c=r-1,o=n[t.charAt(c)];if(p&&(m[c]=+!!o),x[r]=(x[r+1]<<1|1)&o,s&&(x[r]|=(y[r+1]|y[r])<<1|1|y[r+1]),x[r]&_&&(L=k(e,{errors:s,currentLocation:c,expectedLocation:d,distance:i,ignoreLocation:a}),L<=g)){if(g=L,f=c,f<=d)break;h=Math.max(1,2*d-f)}}if(k(e,{errors:s+1,currentLocation:d,expectedLocation:d,distance:i,ignoreLocation:a})>g)break;y=x}const b={isMatch:f>=0,score:Math.max(.001,L)};if(p){const t=function(t=[],e=x.minMatchCharLength){let n=[],s=-1,i=-1,r=0;for(let c=t.length;r<c;r+=1){let c=t[r];c&&-1===s?s=r:c||-1===s||(i=r-1,i-s+1>=e&&n.push([s,i]),s=-1)}return t[r-1]&&r-s>=e&&n.push([s,r-1]),n}(m,o);t.length?h&&(b.indices=t):b.isMatch=!1}return b}function w(t){let e={};for(let n=0,s=t.length;n<s;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<s-n-1}return e}class C{constructor(t,{location:e=x.location,threshold:n=x.threshold,distance:s=x.distance,includeMatches:i=x.includeMatches,findAllMatches:r=x.findAllMatches,minMatchCharLength:c=x.minMatchCharLength,isCaseSensitive:o=x.isCaseSensitive,ignoreLocation:h=x.ignoreLocation}={}){if(this.options={location:e,threshold:n,distance:s,includeMatches:i,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:h},this.pattern=o?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const a=(t,e)=>{this.chunks.push({pattern:t,alphabet:w(t),startIndex:e})},l=this.pattern.length;if(l>S){let t=0;const e=l%S,n=l-e;for(;t<n;)a(this.pattern.substr(t,S),t),t+=S;if(e){const t=l-S;a(this.pattern.substr(t),t)}}else a(this.pattern,0)}searchIn(t){const{isCaseSensitive:e,includeMatches:n}=this.options;if(e||(t=t.toLowerCase()),this.pattern===t){let e={isMatch:!0,score:0};return n&&(e.indices=[[0,t.length-1]]),e}const{location:s,distance:i,threshold:r,findAllMatches:c,minMatchCharLength:o,ignoreLocation:h}=this.options;let a=[],l=0,u=!1;this.chunks.forEach((({pattern:e,alphabet:d,startIndex:g})=>{const{isMatch:f,score:p,indices:m}=b(t,e,d,{location:s+g,distance:i,threshold:r,findAllMatches:c,minMatchCharLength:o,includeMatches:n,ignoreLocation:h});f&&(u=!0),l+=p,f&&m&&(a=[...a,...m])}));let d={isMatch:u,score:u?l/this.chunks.length:1};return u&&n&&(d.indices=a),d}}class I{constructor(t){this.pattern=t}static isMultiMatch(t){return $(t,this.multiRegex)}static isSingleMatch(t){return $(t,this.singleRegex)}search(){}}function $(t,e){const n=t.match(e);return n?n[1]:null}class A extends I{constructor(t,{location:e=x.location,threshold:n=x.threshold,distance:s=x.distance,includeMatches:i=x.includeMatches,findAllMatches:r=x.findAllMatches,minMatchCharLength:c=x.minMatchCharLength,isCaseSensitive:o=x.isCaseSensitive,ignoreLocation:h=x.ignoreLocation}={}){super(t),this._bitapSearch=new C(t,{location:e,threshold:n,distance:s,includeMatches:i,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class E extends I{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let e,n=0;const s=[],i=this.pattern.length;for(;(e=t.indexOf(this.pattern,n))>-1;)n=e+i,s.push([e,n-1]);const r=!!s.length;return{isMatch:r,score:r?0:1,indices:s}}}const F=[class extends I{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const e=t===this.pattern;return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},E,class extends I{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const e=t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},class extends I{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const e=!t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends I{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const e=!t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends I{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const e=t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[t.length-this.pattern.length,t.length-1]}}},class extends I{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const e=-1===t.indexOf(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},A],N=F.length,O=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;const R=new Set([A.type,E.type]);class j{constructor(t,{isCaseSensitive:e=x.isCaseSensitive,includeMatches:n=x.includeMatches,minMatchCharLength:s=x.minMatchCharLength,ignoreLocation:i=x.ignoreLocation,findAllMatches:r=x.findAllMatches,location:c=x.location,threshold:o=x.threshold,distance:h=x.distance}={}){this.query=null,this.options={isCaseSensitive:e,includeMatches:n,minMatchCharLength:s,findAllMatches:r,ignoreLocation:i,location:c,threshold:o,distance:h},this.pattern=e?t:t.toLowerCase(),this.query=function(t,e={}){return t.split("|").map((t=>{let n=t.trim().split(O).filter((t=>t&&!!t.trim())),s=[];for(let t=0,i=n.length;t<i;t+=1){const i=n[t];let r=!1,c=-1;for(;!r&&++c<N;){const t=F[c];let n=t.isMultiMatch(i);n&&(s.push(new t(n,e)),r=!0)}if(!r)for(c=-1;++c<N;){const t=F[c];let n=t.isSingleMatch(i);if(n){s.push(new t(n,e));break}}}return s}))}(this.pattern,this.options)}static condition(t,e){return e.useExtendedSearch}searchIn(t){const e=this.query;if(!e)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:s}=this.options;t=s?t:t.toLowerCase();let i=0,r=[],c=0;for(let s=0,o=e.length;s<o;s+=1){const o=e[s];r.length=0,i=0;for(let e=0,s=o.length;e<s;e+=1){const s=o[e],{isMatch:h,indices:a,score:l}=s.search(t);if(!h){c=0,i=0,r.length=0;break}if(i+=1,c+=l,n){const t=s.constructor.type;R.has(t)?r=[...r,...a]:r.push(a)}}if(i){let t={isMatch:!0,score:c/i};return n&&(t.indices=r),t}}return{isMatch:!1,score:1}}}const W=[];function P(t,e){for(let n=0,s=W.length;n<s;n+=1){let s=W[n];if(s.condition(t,e))return new s(t,e)}return new C(t,e)}const z="$and",K="$or",q="$path",J="$val",T=t=>!(!t[z]&&!t[K]),V=t=>({[z]:Object.keys(t).map((e=>({[e]:t[e]})))});function B(t,e,{auto:s=!0}={}){const i=t=>{let c=Object.keys(t);const o=(t=>!!t[q])(t);if(!o&&c.length>1&&!T(t))return i(V(t));if((t=>!n(t)&&h(t)&&!T(t))(t)){const n=o?t[q]:c[0],i=o?t[J]:t[n];if(!r(i))throw new Error((t=>`Invalid value for key ${t}`)(n));const h={keyId:y(n),pattern:i};return s&&(h.searcher=P(i,e)),h}let a={children:[],operator:c[0]};return c.forEach((e=>{const s=t[e];n(s)&&s.forEach((t=>{a.children.push(i(t))}))})),a};return T(t)||(t=V(t)),i(t)}function Q(t,e){const n=t.matches;e.matches=[],a(n)&&n.forEach((t=>{if(!a(t.indices)||!t.indices.length)return;const{indices:n,value:s}=t;let i={indices:n,value:s};t.key&&(i.key=t.key.src),t.idx>-1&&(i.refIndex=t.idx),e.matches.push(i)}))}function U(t,e){e.score=t.score}class D{constructor(t,e={},n){this.options={...x,...e},this.options.useExtendedSearch,this._keyStore=new p(this.options.keys),this.setCollection(t,n)}setCollection(t,e){if(this._docs=t,e&&!(e instanceof v))throw new Error("Incorrect 'index' type");this._myIndex=e||_(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){a(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=(()=>!1)){const e=[];for(let n=0,s=this._docs.length;n<s;n+=1){const i=this._docs[n];t(i,n)&&(this.removeAt(n),n-=1,s-=1,e.push(i))}return e}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:e=-1}={}){const{includeMatches:n,includeScore:s,shouldSort:i,sortFn:o,ignoreFieldNorm:h}=this.options;let a=r(t)?r(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return function(t,{ignoreFieldNorm:e=x.ignoreFieldNorm}){t.forEach((t=>{let n=1;t.matches.forEach((({key:t,norm:s,score:i})=>{const r=t?t.weight:null;n*=Math.pow(0===i&&r?Number.EPSILON:i,(r||1)*(e?1:s))})),t.score=n}))}(a,{ignoreFieldNorm:h}),i&&a.sort(o),c(e)&&e>-1&&(a=a.slice(0,e)),function(t,e,{includeMatches:n=x.includeMatches,includeScore:s=x.includeScore}={}){const i=[];return n&&i.push(Q),s&&i.push(U),t.map((t=>{const{idx:n}=t,s={item:e[n],refIndex:n};return i.length&&i.forEach((e=>{e(t,s)})),s}))}(a,this._docs,{includeMatches:n,includeScore:s})}_searchStringList(t){const e=P(t,this.options),{records:n}=this._myIndex,s=[];return n.forEach((({v:t,i:n,n:i})=>{if(!a(t))return;const{isMatch:r,score:c,indices:o}=e.searchIn(t);r&&s.push({item:t,idx:n,matches:[{score:c,value:t,norm:i,indices:o}]})})),s}_searchLogical(t){const e=B(t,this.options),n=(t,e,s)=>{if(!t.children){const{keyId:n,searcher:i}=t,r=this._findMatches({key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(e,n),searcher:i});return r&&r.length?[{idx:s,item:e,matches:r}]:[]}const i=[];for(let r=0,c=t.children.length;r<c;r+=1){const c=t.children[r],o=n(c,e,s);if(o.length)i.push(...o);else if(t.operator===z)return[]}return i},s=this._myIndex.records,i={},r=[];return s.forEach((({$:t,i:s})=>{if(a(t)){let c=n(e,t,s);c.length&&(i[s]||(i[s]={idx:s,item:t,matches:[]},r.push(i[s])),c.forEach((({matches:t})=>{i[s].matches.push(...t)})))}})),r}_searchObjectList(t){const e=P(t,this.options),{keys:n,records:s}=this._myIndex,i=[];return s.forEach((({$:t,i:s})=>{if(!a(t))return;let r=[];n.forEach(((n,s)=>{r.push(...this._findMatches({key:n,value:t[s],searcher:e}))})),r.length&&i.push({idx:s,item:t,matches:r})})),i}_findMatches({key:t,value:e,searcher:s}){if(!a(e))return[];let i=[];if(n(e))e.forEach((({v:e,i:n,n:r})=>{if(!a(e))return;const{isMatch:c,score:o,indices:h}=s.searchIn(e);c&&i.push({score:o,key:t,value:e,idx:n,norm:r,indices:h})}));else{const{v:n,n:r}=e,{isMatch:c,score:o,indices:h}=s.searchIn(n);c&&i.push({score:o,key:t,value:n,norm:r,indices:h})}return i}}D.version="7.0.0",D.createIndex=_,D.parseIndex=function(t,{getFn:e=x.getFn,fieldNormWeight:n=x.fieldNormWeight}={}){const{keys:s,records:i}=t,r=new v({getFn:e,fieldNormWeight:n});return r.setKeys(s),r.setIndexRecords(i),r},D.config=x,D.parseQuery=B,function(...t){W.push(...t)}(j)})(),Fuse=e})();