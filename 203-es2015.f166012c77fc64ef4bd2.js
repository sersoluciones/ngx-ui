(self.webpackChunk_sersol_ngx=self.webpackChunk_sersol_ngx||[]).push([[203],{203:function(e,n,t){"use strict";t.r(n);var i=t(9152);n.default=i},9152:function(e){var n={exports:{}};function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(n){var i=e[n];"object"!=typeof i||Object.isFrozen(i)||t(i)}),e}n.exports=t,n.exports.default=t;var i=n.exports;class o{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function s(e,...n){const t=Object.create(null);for(const i in e)t[i]=e[i];return n.forEach(function(e){for(const n in e)t[n]=e[n]}),t}const a=e=>!!e.kind;class c{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=r(e)}openNode(e){if(!a(e))return;let n=e.kind;n=e.sublanguage?`language-${n}`:((e,{prefix:n})=>{if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((e,n)=>`${e}${"_".repeat(n+1)}`)].join(" ")}return`${n}${e}`})(n,{prefix:this.classPrefix}),this.span(n)}closeNode(e){a(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class l{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(n=>this._walk(e,n)),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{l._collapse(e)}))}}class u extends l{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new c(this,this.options).value()}finalize(){return!0}}function g(e){return e?"string"==typeof e?e:e.source:null}function d(...e){return e.map(e=>g(e)).join("")}function h(...e){return"("+(function(e){const n=e[e.length-1];return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}(e).capture?"":"?:")+e.map(e=>g(e)).join("|")+")"}function f(e){return new RegExp(e.toString()+"|").exec("").length-1}const p=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function b(e,{joinWith:n}){let t=0;return e.map(e=>{t+=1;const n=t;let i=g(e),o="";for(;i.length>0;){const e=p.exec(i);if(!e){o+=i;break}o+=i.substring(0,e.index),i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?o+="\\"+String(Number(e[1])+n):(o+=e[0],"("===e[0]&&t++)}return o}).map(e=>`(${e})`).join(n)}const m="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",w={begin:"\\\\[\\s\\S]",relevance:0},E={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[w]},x={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[w]},y=function(e,n,t={}){const i=s({scope:"comment",begin:e,end:n,contains:[]},t);i.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=h("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return i.contains.push({begin:d(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i},_=y("//","$"),k=y("/\\*","\\*/"),v=y("#","$");var O=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:m,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=d(n,/.*\b/,e.binary,/\b.*/)),s({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:w,APOS_STRING_MODE:E,QUOTE_STRING_MODE:x,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:y,C_LINE_COMMENT_MODE:_,C_BLOCK_COMMENT_MODE:k,HASH_COMMENT_MODE:v,NUMBER_MODE:{scope:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},C_NUMBER_MODE:{scope:"number",begin:m,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:"\\b(0b[01]+)",relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[w,{begin:/\[/,end:/\]/,relevance:0,contains:[w]}]}]},TITLE_MODE:{scope:"title",begin:"[a-zA-Z]\\w*",relevance:0},UNDERSCORE_TITLE_MODE:{scope:"title",begin:"[a-zA-Z_]\\w*",relevance:0},METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});function N(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function S(e,n){void 0!==e.className&&(e.scope=e.className,delete e.className)}function M(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=N,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function R(e,n){Array.isArray(e.illegal)&&(e.illegal=h(...e.illegal))}function A(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function j(e,n){void 0===e.relevance&&(e.relevance=1)}const I=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(n=>{delete e[n]}),e.keywords=t.keywords,e.begin=d(t.beforeMatch,d("(?=",t.begin,")")),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},B=["of","and","for","in","not","or","if","then","parent","list","value"];function T(e,n,t="keyword"){const i=Object.create(null);return"string"==typeof e?o(t,e.split(" ")):Array.isArray(e)?o(t,e):Object.keys(e).forEach(function(t){Object.assign(i,T(e[t],n,t))}),i;function o(e,t){n&&(t=t.map(e=>e.toLowerCase())),t.forEach(function(n){const t=n.split("|");i[t[0]]=[e,L(t[0],t[1])]})}}function L(e,n){return n?Number(n):function(e){return B.includes(e.toLowerCase())}(e)?0:1}const C={},D=e=>{console.error(e)},P=(e,...n)=>{console.log(`WARN: ${e}`,...n)},$=(e,n)=>{C[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),C[`${e}/${n}`]=!0)},H=new Error;function U(e,n,{key:t}){let i=0;const o=e[t],r={},s={};for(let a=1;a<=n.length;a++)s[a+i]=o[a],r[a+i]=!0,i+=f(n[a-1]);e[t]=s,e[t]._emit=r,e[t]._multi=!0}function z(e){!function(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)}(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw D("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),H;if("object"!=typeof e.beginScope||null===e.beginScope)throw D("beginScope must be object"),H;U(e,e.begin,{key:"beginScope"}),e.begin=b(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw D("skip, excludeEnd, returnEnd not compatible with endScope: {}"),H;if("object"!=typeof e.endScope||null===e.endScope)throw D("endScope must be object"),H;U(e,e.end,{key:"endScope"}),e.end=b(e.end,{joinWith:""})}}(e)}function K(e){function n(n,t){return new RegExp(g(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=f(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=n(b(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex((e,n)=>n>0&&void 0!==e),i=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,i)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach(([e,t])=>n.addRule(e,t)),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=s(e.classNameAliases||{}),function t(o,r){const a=o;if(o.isCompiled)return a;[S,A,z,I].forEach(e=>e(o,r)),e.compilerExtensions.forEach(e=>e(o,r)),o.__beforeBegin=null,[M,R,j].forEach(e=>e(o,r)),o.isCompiled=!0;let c=null;return"object"==typeof o.keywords&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),c=o.keywords.$pattern,delete o.keywords.$pattern),c=c||/\w+/,o.keywords&&(o.keywords=T(o.keywords,e.case_insensitive)),a.keywordPatternRe=n(c,!0),r&&(o.begin||(o.begin=/\B|\b/),a.beginRe=n(o.begin),o.end||o.endsWithParent||(o.end=/\B|\b/),o.end&&(a.endRe=n(o.end)),a.terminatorEnd=g(o.end)||"",o.endsWithParent&&r.terminatorEnd&&(a.terminatorEnd+=(o.end?"|":"")+r.terminatorEnd)),o.illegal&&(a.illegalRe=n(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return s(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:W(e)?s(e,{starts:e.starts?s(e.starts):null}):Object.isFrozen(e)?s(e):e}("self"===e?o:e)})),o.contains.forEach(function(e){t(e,a)}),o.starts&&t(o.starts,r),a.matcher=function(e){const n=new i;return e.contains.forEach(e=>n.addRule(e.begin,{rule:e,type:"begin"})),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(a),a}(e)}function W(e){return!!e&&(e.endsWithParent||W(e.starts))}const X=r,Z=s,G=Symbol("nomatch");var F=function(e){const n=Object.create(null),t=Object.create(null),r=[];let s=!0;const a="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let l={ignoreUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:u};function g(e){return l.noHighlightRe.test(e)}function d(e,n,t,i){let o="",r="";"object"==typeof n?(o=e,t=n.ignoreIllegals,r=n.language,i=void 0):($("10.7.0","highlight(lang, code, ...args) has been deprecated."),$("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),r=e,o=n),void 0===t&&(t=!0);const s={code:o,language:r};y("before:highlight",s);const a=s.result?s.result:h(s.language,s.code,t,i);return a.code=s.code,y("after:highlight",a),a}function h(e,t,i,r){const c=Object.create(null);function u(){if(!O.keywords)return void S.addText(M);let e=0;O.keywordPatternRe.lastIndex=0;let n=O.keywordPatternRe.exec(M),t="";for(;n;){t+=M.substring(e,n.index);const i=_.case_insensitive?n[0].toLowerCase():n[0],o=O.keywords[i];if(o){const[e,r]=o;S.addText(t),t="",c[i]=(c[i]||0)+1,c[i]<=7&&(R+=r),e.startsWith("_")?t+=n[0]:S.addKeyword(n[0],_.classNameAliases[e]||e)}else t+=n[0];e=O.keywordPatternRe.lastIndex,n=O.keywordPatternRe.exec(M)}t+=M.substr(e),S.addText(t)}function g(){null!=O.subLanguage?function(){if(""===M)return;let e=null;if("string"==typeof O.subLanguage){if(!n[O.subLanguage])return void S.addText(M);e=h(O.subLanguage,M,!0,N[O.subLanguage]),N[O.subLanguage]=e._top}else e=f(M,O.subLanguage.length?O.subLanguage:null);O.relevance>0&&(R+=e.relevance),S.addSublanguage(e._emitter,e.language)}():u(),M=""}function d(e,n){let t=1;for(;void 0!==n[t];){if(!e._emit[t]){t++;continue}const i=_.classNameAliases[e[t]]||e[t],o=n[t];i?S.addKeyword(o,i):(M=o,u(),M=""),t++}}function p(e,n){return e.scope&&"string"==typeof e.scope&&S.openNode(_.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(S.addKeyword(M,_.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),M=""):e.beginScope._multi&&(d(e.beginScope,n),M="")),O=Object.create(e,{parent:{value:O}}),O}function b(e,n,t){let i=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(i){if(e["on:end"]){const t=new o(e);e["on:end"](n,t),t.isMatchIgnored&&(i=!1)}if(i){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return b(e.parent,n,t)}function m(e){return 0===O.matcher.regexIndex?(M+=e[0],1):(I=!0,0)}function E(e){const n=e[0],i=t.substr(e.index),o=b(O,e,i);if(!o)return G;const r=O;O.endScope&&O.endScope._wrap?(g(),S.addKeyword(n,O.endScope._wrap)):O.endScope&&O.endScope._multi?(g(),d(O.endScope,e)):r.skip?M+=n:(r.returnEnd||r.excludeEnd||(M+=n),g(),r.excludeEnd&&(M=n));do{O.scope&&!O.isMultiClass&&S.closeNode(),O.skip||O.subLanguage||(R+=O.relevance),O=O.parent}while(O!==o.parent);return o.starts&&p(o.starts,e),r.returnEnd?0:n.length}let x={};function y(n,r){const a=r&&r[0];if(M+=n,null==a)return g(),0;if("begin"===x.type&&"end"===r.type&&x.index===r.index&&""===a){if(M+=t.slice(r.index,r.index+1),!s){const n=new Error(`0 width match regex (${e})`);throw n.languageName=e,n.badRule=x.rule,n}return 1}if(x=r,"begin"===r.type)return function(e){const n=e[0],t=e.rule,i=new o(t),r=[t.__beforeBegin,t["on:begin"]];for(const o of r)if(o&&(o(e,i),i.isMatchIgnored))return m(n);return t.skip?M+=n:(t.excludeBegin&&(M+=n),g(),t.returnBegin||t.excludeBegin||(M=n)),p(t,e),t.returnBegin?0:n.length}(r);if("illegal"===r.type&&!i){const e=new Error('Illegal lexeme "'+a+'" for mode "'+(O.scope||"<unnamed>")+'"');throw e.mode=O,e}if("end"===r.type){const e=E(r);if(e!==G)return e}if("illegal"===r.type&&""===a)return 1;if(j>1e5&&j>3*r.index)throw new Error("potential infinite loop, way more iterations than matches");return M+=a,a.length}const _=w(e);if(!_)throw D(a.replace("{}",e)),new Error('Unknown language: "'+e+'"');const k=K(_);let v="",O=r||k;const N={},S=new l.__emitter(l);!function(){const e=[];for(let n=O;n!==_;n=n.parent)n.scope&&e.unshift(n.scope);e.forEach(e=>S.openNode(e))}();let M="",R=0,A=0,j=0,I=!1;try{for(O.matcher.considerAll();;){j++,I?I=!1:O.matcher.considerAll(),O.matcher.lastIndex=A;const e=O.matcher.exec(t);if(!e)break;const n=y(t.substring(A,e.index),e);A=e.index+n}return y(t.substr(A)),S.closeAllNodes(),S.finalize(),v=S.toHTML(),{language:e,value:v,relevance:R,illegal:!1,_emitter:S,_top:O}}catch(B){if(B.message&&B.message.includes("Illegal"))return{language:e,value:X(t),illegal:!0,relevance:0,_illegalBy:{message:B.message,index:A,context:t.slice(A-100,A+100),mode:B.mode,resultSoFar:v},_emitter:S};if(s)return{language:e,value:X(t),illegal:!1,relevance:0,errorRaised:B,_emitter:S,_top:O};throw B}}function f(e,t){t=t||l.languages||Object.keys(n);const i=function(e){const n={value:X(e),illegal:!1,relevance:0,_top:c,_emitter:new l.__emitter(l)};return n._emitter.addText(e),n}(e),o=t.filter(w).filter(x).map(n=>h(n,e,!1));o.unshift(i);const r=o.sort((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(w(e.language).supersetOf===n.language)return 1;if(w(n.language).supersetOf===e.language)return-1}return 0}),[s,a]=r,u=s;return u.secondBest=a,u}function p(e){let n=null;const i=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=l.languageDetectRe.exec(n);if(t){const n=w(t[1]);return n||(P(a.replace("{}",t[1])),P("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find(e=>g(e)||w(e))}(e);if(g(i))return;y("before:highlightElement",{el:e,language:i}),!l.ignoreUnescapedHTML&&e.children.length>0&&(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/issues/2886"),console.warn(e)),n=e;const o=n.textContent,r=i?d(o,{language:i,ignoreIllegals:!0}):f(o);e.innerHTML=r.value,function(e,n,i){const o=n&&t[n]||i;e.classList.add("hljs"),e.classList.add(`language-${o}`)}(e,i,r.language),e.result={language:r.language,re:r.relevance,relevance:r.relevance},r.secondBest&&(e.secondBest={language:r.secondBest.language,relevance:r.secondBest.relevance}),y("after:highlightElement",{el:e,result:r,text:o})}let b=!1;function m(){"loading"!==document.readyState?document.querySelectorAll(l.cssSelector).forEach(p):b=!0}function w(e){return e=(e||"").toLowerCase(),n[e]||n[t[e]]}function E(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach(e=>{t[e.toLowerCase()]=n})}function x(e){const n=w(e);return n&&!n.disableAutodetect}function y(e,n){const t=e;r.forEach(function(e){e[t]&&e[t](n)})}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",function(){b&&m()},!1),Object.assign(e,{highlight:d,highlightAuto:f,highlightAll:m,highlightElement:p,highlightBlock:function(e){return $("10.7.0","highlightBlock will be removed entirely in v12.0"),$("10.7.0","Please use highlightElement now."),p(e)},configure:function(e){l=Z(l,e)},initHighlighting:()=>{m(),$("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){m(),$("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(t,i){let o=null;try{o=i(e)}catch(r){if(D("Language definition for '{}' could not be registered.".replace("{}",t)),!s)throw r;D(r),o=c}o.name||(o.name=t),n[t]=o,o.rawDefinition=i.bind(null,e),o.aliases&&E(o.aliases,{languageName:t})},unregisterLanguage:function(e){delete n[e];for(const n of Object.keys(t))t[n]===e&&delete t[n]},listLanguages:function(){return Object.keys(n)},getLanguage:w,registerAliases:E,autoDetection:x,inherit:Z,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=n=>{e["before:highlightBlock"](Object.assign({block:n.el},n))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=n=>{e["after:highlightBlock"](Object.assign({block:n.el},n))})}(e),r.push(e)}}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="11.0.1";for(const o in O)"object"==typeof O[o]&&i(O[o]);return Object.assign(e,O),e}({});e.exports=F}}]);