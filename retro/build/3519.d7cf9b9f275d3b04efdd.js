(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3519],{98591:(e,r,c)=>{"use strict";c.r(r),c.d(r,{default:()=>s});var n=c(94015),o=c.n(n),a=c(23645),t=c.n(a)()(o());t.push([e.id,".cm-s-abcdef.CodeMirror { background: #0f0f0f; color: #defdef; }\n.cm-s-abcdef div.CodeMirror-selected { background: #515151; }\n.cm-s-abcdef .CodeMirror-line::selection, .cm-s-abcdef .CodeMirror-line > span::selection, .cm-s-abcdef .CodeMirror-line > span > span::selection { background: rgba(56, 56, 56, 0.99); }\n.cm-s-abcdef .CodeMirror-line::-moz-selection, .cm-s-abcdef .CodeMirror-line > span::-moz-selection, .cm-s-abcdef .CodeMirror-line > span > span::-moz-selection { background: rgba(56, 56, 56, 0.99); }\n.cm-s-abcdef .CodeMirror-gutters { background: #555; border-right: 2px solid #314151; }\n.cm-s-abcdef .CodeMirror-guttermarker { color: #222; }\n.cm-s-abcdef .CodeMirror-guttermarker-subtle { color: azure; }\n.cm-s-abcdef .CodeMirror-linenumber { color: #FFFFFF; }\n.cm-s-abcdef .CodeMirror-cursor { border-left: 1px solid #00FF00; }\n\n.cm-s-abcdef span.cm-keyword { color: darkgoldenrod; font-weight: bold; }\n.cm-s-abcdef span.cm-atom { color: #77F; }\n.cm-s-abcdef span.cm-number { color: violet; }\n.cm-s-abcdef span.cm-def { color: #fffabc; }\n.cm-s-abcdef span.cm-variable { color: #abcdef; }\n.cm-s-abcdef span.cm-variable-2 { color: #cacbcc; }\n.cm-s-abcdef span.cm-variable-3, .cm-s-abcdef span.cm-type { color: #def; }\n.cm-s-abcdef span.cm-property { color: #fedcba; }\n.cm-s-abcdef span.cm-operator { color: #ff0; }\n.cm-s-abcdef span.cm-comment { color: #7a7b7c; font-style: italic;}\n.cm-s-abcdef span.cm-string { color: #2b4; }\n.cm-s-abcdef span.cm-meta { color: #C9F; }\n.cm-s-abcdef span.cm-qualifier { color: #FFF700; }\n.cm-s-abcdef span.cm-builtin { color: #30aabc; }\n.cm-s-abcdef span.cm-bracket { color: #8a8a8a; }\n.cm-s-abcdef span.cm-tag { color: #FFDD44; }\n.cm-s-abcdef span.cm-attribute { color: #DDFF00; }\n.cm-s-abcdef span.cm-error { color: #FF0000; }\n.cm-s-abcdef span.cm-header { color: aquamarine; font-weight: bold; }\n.cm-s-abcdef span.cm-link { color: blueviolet; }\n\n.cm-s-abcdef .CodeMirror-activeline-background { background: #314151; }\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/abcdef.css"],names:[],mappings:"AAAA,0BAA0B,mBAAmB,EAAE,cAAc,EAAE;AAC/D,uCAAuC,mBAAmB,EAAE;AAC5D,oJAAoJ,kCAAkC,EAAE;AACxL,mKAAmK,kCAAkC,EAAE;AACvM,mCAAmC,gBAAgB,EAAE,+BAA+B,EAAE;AACtF,wCAAwC,WAAW,EAAE;AACrD,+CAA+C,YAAY,EAAE;AAC7D,sCAAsC,cAAc,EAAE;AACtD,kCAAkC,8BAA8B,EAAE;;AAElE,+BAA+B,oBAAoB,EAAE,iBAAiB,EAAE;AACxE,4BAA4B,WAAW,EAAE;AACzC,8BAA8B,aAAa,EAAE;AAC7C,2BAA2B,cAAc,EAAE;AAC3C,gCAAgC,cAAc,EAAE;AAChD,kCAAkC,cAAc,EAAE;AAClD,6DAA6D,WAAW,EAAE;AAC1E,gCAAgC,cAAc,EAAE;AAChD,gCAAgC,WAAW,EAAE;AAC7C,+BAA+B,cAAc,EAAE,kBAAkB,CAAC;AAClE,8BAA8B,WAAW,EAAE;AAC3C,4BAA4B,WAAW,EAAE;AACzC,iCAAiC,cAAc,EAAE;AACjD,+BAA+B,cAAc,EAAE;AAC/C,+BAA+B,cAAc,EAAE;AAC/C,2BAA2B,cAAc,EAAE;AAC3C,iCAAiC,cAAc,EAAE;AACjD,6BAA6B,cAAc,EAAE;AAC7C,8BAA8B,iBAAiB,EAAE,iBAAiB,EAAE;AACpE,4BAA4B,iBAAiB,EAAE;;AAE/C,iDAAiD,mBAAmB,EAAE",sourcesContent:[".cm-s-abcdef.CodeMirror { background: #0f0f0f; color: #defdef; }\n.cm-s-abcdef div.CodeMirror-selected { background: #515151; }\n.cm-s-abcdef .CodeMirror-line::selection, .cm-s-abcdef .CodeMirror-line > span::selection, .cm-s-abcdef .CodeMirror-line > span > span::selection { background: rgba(56, 56, 56, 0.99); }\n.cm-s-abcdef .CodeMirror-line::-moz-selection, .cm-s-abcdef .CodeMirror-line > span::-moz-selection, .cm-s-abcdef .CodeMirror-line > span > span::-moz-selection { background: rgba(56, 56, 56, 0.99); }\n.cm-s-abcdef .CodeMirror-gutters { background: #555; border-right: 2px solid #314151; }\n.cm-s-abcdef .CodeMirror-guttermarker { color: #222; }\n.cm-s-abcdef .CodeMirror-guttermarker-subtle { color: azure; }\n.cm-s-abcdef .CodeMirror-linenumber { color: #FFFFFF; }\n.cm-s-abcdef .CodeMirror-cursor { border-left: 1px solid #00FF00; }\n\n.cm-s-abcdef span.cm-keyword { color: darkgoldenrod; font-weight: bold; }\n.cm-s-abcdef span.cm-atom { color: #77F; }\n.cm-s-abcdef span.cm-number { color: violet; }\n.cm-s-abcdef span.cm-def { color: #fffabc; }\n.cm-s-abcdef span.cm-variable { color: #abcdef; }\n.cm-s-abcdef span.cm-variable-2 { color: #cacbcc; }\n.cm-s-abcdef span.cm-variable-3, .cm-s-abcdef span.cm-type { color: #def; }\n.cm-s-abcdef span.cm-property { color: #fedcba; }\n.cm-s-abcdef span.cm-operator { color: #ff0; }\n.cm-s-abcdef span.cm-comment { color: #7a7b7c; font-style: italic;}\n.cm-s-abcdef span.cm-string { color: #2b4; }\n.cm-s-abcdef span.cm-meta { color: #C9F; }\n.cm-s-abcdef span.cm-qualifier { color: #FFF700; }\n.cm-s-abcdef span.cm-builtin { color: #30aabc; }\n.cm-s-abcdef span.cm-bracket { color: #8a8a8a; }\n.cm-s-abcdef span.cm-tag { color: #FFDD44; }\n.cm-s-abcdef span.cm-attribute { color: #DDFF00; }\n.cm-s-abcdef span.cm-error { color: #FF0000; }\n.cm-s-abcdef span.cm-header { color: aquamarine; font-weight: bold; }\n.cm-s-abcdef span.cm-link { color: blueviolet; }\n\n.cm-s-abcdef .CodeMirror-activeline-background { background: #314151; }\n"],sourceRoot:""}]);const s=t},23645:e=>{"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var c=e(r);return r[2]?"@media ".concat(r[2]," {").concat(c,"}"):c})).join("")},r.i=function(e,c,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var t=this[a][0];null!=t&&(o[t]=!0)}for(var s=0;s<e.length;s++){var A=[].concat(e[s]);n&&o[A[0]]||(c&&(A[2]?A[2]="".concat(c," and ").concat(A[2]):A[2]=c),r.push(A))}},r}},94015:e=>{"use strict";function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var c=0,n=new Array(r);c<r;c++)n[c]=e[c];return n}e.exports=function(e){var c,n,o=(n=4,function(e){if(Array.isArray(e))return e}(c=e)||function(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var c=[],n=!0,o=!1,a=void 0;try{for(var t,s=e[Symbol.iterator]();!(n=(t=s.next()).done)&&(c.push(t.value),!r||c.length!==r);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return c}}(c,n)||function(e,c){if(e){if("string"==typeof e)return r(e,c);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,c):void 0}}(c,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],t=o[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),i="/*# ".concat(A," */"),d=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[a].concat(d).concat([i]).join("\n")}return[a].join("\n")}},23519:(e,r,c)=>{var n=c(98591);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.id,n,""]]);c(93379)(n,{insert:"head",singleton:!1}),n.locals&&(e.exports=n.locals)},93379:(e,r,c)=>{"use strict";var n,o={},a=function(){var e={};return function(r){if(void 0===e[r]){var c=document.querySelector(r);if(window.HTMLIFrameElement&&c instanceof window.HTMLIFrameElement)try{c=c.contentDocument.head}catch(e){c=null}e[r]=c}return e[r]}}();function t(e,r){for(var c=[],n={},o=0;o<e.length;o++){var a=e[o],t=r.base?a[0]+r.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};n[t]?n[t].parts.push(s):c.push(n[t]={id:t,parts:[s]})}return c}function s(e,r){for(var c=0;c<e.length;c++){var n=e[c],a=o[n.id],t=0;if(a){for(a.refs++;t<a.parts.length;t++)a.parts[t](n.parts[t]);for(;t<n.parts.length;t++)a.parts.push(u(n.parts[t],r))}else{for(var s=[];t<n.parts.length;t++)s.push(u(n.parts[t],r));o[n.id]={id:n.id,refs:1,parts:s}}}}function A(e){var r=document.createElement("style");if(void 0===e.attributes.nonce){var n=c.nc;n&&(e.attributes.nonce=n)}if(Object.keys(e.attributes).forEach((function(c){r.setAttribute(c,e.attributes[c])})),"function"==typeof e.insert)e.insert(r);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}return r}var i,d=(i=[],function(e,r){return i[e]=r,i.filter(Boolean).join("\n")});function l(e,r,c,n){var o=c?"":n.css;if(e.styleSheet)e.styleSheet.cssText=d(r,o);else{var a=document.createTextNode(o),t=e.childNodes;t[r]&&e.removeChild(t[r]),t.length?e.insertBefore(a,t[r]):e.appendChild(a)}}function f(e,r,c){var n=c.css,o=c.media,a=c.sourceMap;if(o&&e.setAttribute("media",o),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,b=0;function u(e,r){var c,n,o;if(r.singleton){var a=b++;c=m||(m=A(r)),n=l.bind(null,c,a,!1),o=l.bind(null,c,a,!0)}else c=A(r),n=f.bind(null,c,r),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(c)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else o()}}e.exports=function(e,r){(r=r||{}).attributes="object"==typeof r.attributes?r.attributes:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var c=t(e,r);return s(c,r),function(e){for(var n=[],a=0;a<c.length;a++){var A=c[a],i=o[A.id];i&&(i.refs--,n.push(i))}e&&s(t(e,r),r);for(var d=0;d<n.length;d++){var l=n[d];if(0===l.refs){for(var f=0;f<l.parts.length;f++)l.parts[f]();delete o[l.id]}}}}}}]);
//# sourceMappingURL=3519.d7cf9b9f275d3b04efdd.js.map