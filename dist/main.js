(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),c=n(645),i=n.n(c)()(o());i.push([e.id,"#picframe {\n    position: relative;\n    overflow: hidden;\n    margin: 10px auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 1000px;\n    height: 650px;\n    top: 15vh;\n}\n\n.pic {\n    position: absolute;\n    transition: left 0.3s;\n    width: 1000px;\n    height: 650px;\n}\n\n#pic1 {\n    left: 0;\n    background-color: blue;\n}\n\n#pic2 {\n    left: 1000px;\n    background-color: green;\n}\n\n#pic3 {\n    left: 2000px;\n    background-color: orange;\n}\n\n#pic4 {\n    left: 3000px;\n    background-color: brown;\n}\n\n#nav {\n    position: absolute;\n    bottom: 1vh;\n    display: flex;\n}\n\n#leftArrow,\n#rightArrow {\n    z-index: 2;\n    font-size: 4vh;\n    padding: 0vh 1vw 0vh 1vw;\n    border-radius: 0.5vh;\n    user-select: none;\n    opacity: 60%;\n    margin: 0.5vw;\n}\n\n#selector {\n    width: fit-content;\n    margin-top: 1.5vh;\n}\n\n#buttonDiv {\n    display: flex;\n    justify-content: center;\n    gap: 2vw;\n    opacity: 60%;\n}",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var u=this[a][0];null!=u&&(i[u]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==c&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=c),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var c={},i=[],a=0;a<e.length;a++){var u=e[a],l=r.base?u[0]+r.base:u[0],s=c[l]||0,d="".concat(l," ").concat(s);c[l]=s+1;var p=n(d),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var v=o(f,r);r.byIndex=a,t.splice(a,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<c.length;i++){var a=n(c[i]);t[a].references--}for(var u=r(e,o),l=0;l<c.length;l++){var s=n(c[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}c=u}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={id:r,exports:{}};return e[r](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),c=n(569),i=n.n(c),a=n(565),u=n.n(a),l=n(216),s=n.n(l),d=n(589),p=n.n(d),f=n(426),v={};let m;function y(){for(let e=1;e<=4;e++){let t=document.getElementById("pic"+e);if("0px"==getComputedStyle(t).getPropertyValue("left"))return e}}function h(e){if(e<1||e>4)return;const t=e-y();for(let e=1;e<=4;e++){let n=document.getElementById("pic"+e),r=getComputedStyle(n).getPropertyValue("left"),o=Number(r.slice(0,r.length-2));n.style.left=o-1e3*t+"px"}document.getElementById("dot"+e).checked=!0}function g(){const e=y();h(e<4?e+1:1)}function b(){m=setInterval((()=>{g()}),5e3)}v.styleTagTransform=p(),v.setAttributes=u(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=s(),t()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals,document.querySelectorAll(".pic"),document.querySelectorAll(".dot"),document.querySelector("#leftArrow").addEventListener("click",(()=>{!function(){const e=y();h(e>1?e-1:4)}()})),document.querySelector("#rightArrow").addEventListener("click",(()=>{g()})),document.querySelector("#dot1").addEventListener("click",(()=>{h(1)})),document.querySelector("#dot2").addEventListener("click",(()=>{h(2)})),document.querySelector("#dot3").addEventListener("click",(()=>{h(3)})),document.querySelector("#dot4").addEventListener("click",(()=>{h(4)})),document.querySelector("#start").addEventListener("click",(()=>{b()})),document.querySelector("#stop").addEventListener("click",(()=>{clearInterval(m)})),b()})()})();