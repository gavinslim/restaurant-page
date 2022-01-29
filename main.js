(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),i=t.n(r),o=t(645),a=t.n(o),c=t(667),s=t.n(c),d=new URL(t(633),t.b),l=a()(i()),p=s()(d);l.push([n.id,':root {\n    --primary-dark: #333;\n    --background-grey: #ededed;\n    --primary-red: #8b0000;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    font-family: Roboto, sans-serif;\n    /* background-color: black; */\n    margin: 0px;\n}\n\nbody::before {\n    content: "";\n    position: absolute;\n    top: 0; \n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: -1;\n    opacity: .5; \n    background-image: url('+p+");\n  }\n\n#content {\n    display: flex;\n    flex-direction: column;\n}\n\n#header {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-width: 100vw;\n    /* border: 1px solid green; */\n\n    height: 50px;\n    background-color: var(--primary-dark);\n}\n\n#navbar {\n    display: flex;\n    gap: 30px;\n    color: var(--background-grey);  \n}\n\n.link {\n    cursor: pointer;\n    font-weight: bold;\n    letter-spacing: 5px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center; \n\n    height: 40px;\n    width: 140px;\n\n    border-radius: 20px;\n    transition: all 250ms ease;  \n}\n\n.link:hover {\n    background-color: var(--background-grey);\n    color: var(--primary-dark);\n}\n\n#main {\n    display: flex;\n    justify-content: center;\n}\n\n.section-container {\n    /* border: 1px solid black; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    width: 100vw;\n    height: 500px;\n\n    position: relative;\n    top: 100px;\n}\n\n#about-container {\n    /* border: 1px solid blue; */\n    text-align: center;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#logo {\n    width: 250px;\n    height: 250px;\n}\n\n#rest-title {\n    font-size: 40px;\n    letter-spacing: 4px;\n    margin-bottom: 40px;\n}\n\n#rest-description {\n    font-size: 18px;\n    height: 100px;\n    width: 600px;\n    line-height: 1.6;\n    /* font-weight: bold; */\n    /* opacity: 90%; */\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    /* border: 1px solid red; */\n    /* color: var(--primary-dark); */\n    color: var(--primary-dark);\n    text-shadow: 0 0 1px var(--primary-dark);\n    \n}\n\n.menu {\n    display: flex;\n    gap: 120px;\n    \n    position: relative;\n    top: 100px;\n\n    width: 1000px;\n    height: 600px;\n\n    /* border: 1px solid green; */\n    background-color: white;\n}\n\n.dish {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n\n    width: 300px;\n    height: 450px;\n\n    position: relative;\n\n\n    /* border: 1px solid blue; */\n}\n\n.dish-picture {\n    width: 400px;\n    height: 400px;\n    \n    position: relative;\n    top: 0px;\n    /* border-radius: 50%; */\n    border: 1px solid black; \n    /* background-color: var(--primary-dark); */\n}\n\n.dish-name {\n    /* color: white; */\n}\n\n.dish-description {\n    text-align: center;\n    /* color: white; */\n}\n\n.dish-cost {\n    position: absolute;\n    bottom: 0;\n}\n\n#footer {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 40px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 40px;\n    /* border: 1px solid red; */\n    gap: 10px;\n}\n\n.fa-github {\n    color: var(--primary-dark);\n    transition: 0.5s ease;\n    font-size: 32px;\n}\n\n.fa-github:hover {\n    transform: scale(1.2) rotate(360deg);\n}",""]);const u=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=i(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var c=t(o[a]);e[c].references--}for(var s=r(n,i),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},572:(n,e,t)=>{n.exports=t.p+"f5f30a1f480827ebc198.png"},633:(n,e,t)=>{n.exports=t.p+"3ea8291794ac66103568.jpg"},737:(n,e,t)=>{n.exports=t.p+"feb7952158c607bfd465.png"},933:(n,e,t)=>{n.exports=t.p+"c422cb9132d7b8cb7b9e.png"},562:(n,e,t)=>{n.exports=t.p+"55f8c64216e13d186adc.png"}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(737),e=t(562),r=t(933),i=t(572);const o=(n,e,t,r)=>({name:n,price:e,description:t,create_element:r=>{const i=document.createElement("div");i.classList.add("dish");const o=new Image;o.src=r,o.classList.add("dish-picture"),i.appendChild(o);const a=document.createElement("div");a.classList.add("dish-name"),a.innerHTML=n,i.appendChild(a);const c=document.createElement("div");c.classList.add("dish-description"),c.innerHTML=t,i.appendChild(c);const s=document.createElement("div");return s.classList.add("dish-cost"),s.innerHTML=e,i.appendChild(s),i}});var a=t(379),c=t.n(a),s=t(795),d=t.n(s),l=t(569),p=t.n(l),u=t(565),m=t.n(u),h=t(216),f=t.n(h),g=t(589),b=t.n(g),v=t(426),y={};y.styleTagTransform=b(),y.setAttributes=m(),y.insert=p().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=f(),c()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals,function(){const n=document.getElementById("content"),e=document.createElement("div");e.setAttribute("id","header");const t=function(){const n=document.createElement("nav");n.setAttribute("id","navbar");const e=document.createElement("a");e.classList.add("link"),e.setAttribute("id","link-about"),e.innerHTML="ABOUT",n.appendChild(e);const t=document.createElement("a");t.classList.add("link"),t.setAttribute("id","link-menu"),t.innerHTML="MENU",n.appendChild(t);const r=document.createElement("a");return r.classList.add("link"),r.setAttribute("id","link-contact"),r.innerHTML="CONTACT",n.appendChild(r),n}();e.appendChild(t),n.appendChild(e)}(),function(){const n=document.getElementById("content"),e=document.createElement("div");e.setAttribute("id","main"),n.appendChild(e)}(),function(){const n=document.getElementById("content"),e=document.createElement("div");e.setAttribute("id","footer");const t=document.createElement("div");t.innerHTML="Copyright © 2021 Gavin Lim";const r=document.createElement("div");r.classList.add("github");const i=document.createElement("a");i.href="https://github.com/gavinslim",i.target="_blank";const o=document.createElement("i");o.classList.add("fab","fa-github"),i.appendChild(o),r.appendChild(i),e.appendChild(t),e.appendChild(r),n.appendChild(e)}(),document.getElementById("link-about").addEventListener("click",(function(){const n=document.getElementById("main");n.innerHTML="";const e=document.createElement("div");e.classList.add("section-container");const t=document.createElement("div");t.setAttribute("id","about-container");const r=new Image;r.src=i,r.setAttribute("id","logo"),t.appendChild(r);const o=document.createElement("h1");o.setAttribute("id","rest-title"),o.innerHTML="OODLES of NOODLES",t.appendChild(o);const a=document.createElement("p");a.setAttribute("id","rest-description"),a.innerHTML="Opened in 2016, Oodles of Noodles was born as a means to serve the wide variety of noodle dishes the asian community has to offer. From ramen to rice noodles, our dishes aim to create a sense of comfort and content to those who enjoy these simple carbs.",t.appendChild(a),e.appendChild(t),n.appendChild(e)}));const x=document.getElementById("link-menu");x.addEventListener("click",(function(){const t=document.getElementById("main");t.innerHTML="";const i=document.createElement("div");i.classList.add("menu");const a=o("Shio Ramen",12,"Pork chasu, soft-boiled egg, and ramen in a light clear broth with a side of green onions, bamboo, and seaweed").create_element(n);i.appendChild(a);const c=o("Taiwanese Beef Noodle",12,"Braised beef served with a rich and slightly spicy broth and ").create_element(e);i.appendChild(c);const s=o("Spicy Rice Noodle",10,"Spicy beef broth served with rice noodle, fish cake, beansprout").create_element(r);i.appendChild(s),t.appendChild(i)})),x.click(),document.getElementById("link-contact").addEventListener("click",console.log("hello"))})()})();