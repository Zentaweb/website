(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7261)}])},2455:function(e,t,r){"use strict";r.d(t,{gw:function(){return n},m7:function(){return s},mM:function(){return o}});var n=function(e,t){setTimeout((function(){}),e)},s=function(e){var t=[];if(!e.parentNode)return t;for(var r=e.parentNode.firstChild;r;)1===r.nodeType&&r!==e&&t.push(r),r=r.nextSibling;return t},o=function(e,t){e.style.left=t}},7261:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(4924);function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},s=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),s.forEach((function(t){(0,n.Z)(e,t,r[t])}))}return e}var o=r(5893),i=r(7294),c=r(9008),u=r.n(c),a=r(4298),l=r.n(a),d=function(){var e=document.querySelector(".cursor-inner"),t=document.querySelector(".cursor-outer");window.onmousemove=function(r){t.style.transform="translate("+r.clientX+"px, "+r.clientY+"px)",e.style.transform="translate("+r.clientX+"px, "+r.clientY+"px)",r.clientY,r.clientX},document.querySelector(".cursor-pointer")&&(document.querySelector(".cursor-pointer").addEventListener("mouseenter",(function(){e.classList.add("cursor-hover"),t.classList.add("cursor-hover")})),document.querySelector(".cursor-pointer").addEventListener("mouseleave",(function(){e.classList.remove("cursor-hover"),t.classList.remove("cursor-hover")})),e.style.visibility="visible",t.style.visibility="visible"),document.querySelectorAll("a").forEach((function(r){r.addEventListener("mouseenter",(function(){e.classList.add("cursor-hover"),t.classList.add("cursor-hover")}))})),document.querySelectorAll("a").forEach((function(r){r.addEventListener("mouseleave",(function(){e.classList.remove("cursor-hover"),t.classList.remove("cursor-hover")}))})),e.style.visibility="visible",t.style.visibility="visible"},f=function(){return i.useEffect((function(){d()}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"mouse-cursor cursor-outer"}),(0,o.jsx)("div",{className:"mouse-cursor cursor-inner"})]})},m=function(){var e=document.querySelector(".progress-wrap path"),t=e.getTotalLength();e.style.transition=e.style.WebkitTransition="none",e.style.strokeDasharray=t+" "+t,e.style.strokeDashoffset=t,e.getBoundingClientRect(),e.style.transition=e.style.WebkitTransition="stroke-dashoffset 10ms linear";var r=function(){var r=window.pageYOffset,n=document.documentElement.scrollHeight-window.innerHeight,s=t-r*t/n;e.style.strokeDashoffset=s};r(),window.addEventListener("scroll",r);var n=document.querySelector(".progress-wrap");window.addEventListener("scroll",(function(){window.pageYOffset>150?n.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")})),n.addEventListener("click",(function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},v=function(){return i.useEffect((function(){m()}),[]),(0,o.jsx)("div",{className:"progress-wrap cursor-pointer",children:(0,o.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,o.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})})},p=r(2455),y=function(){Pace.on("start",(function(){document.querySelector("#preloader").classList.remove("isdone")})),Pace.on("done",(function(){document.querySelector(".hamenu")&&((0,p.gw)(300,(0,p.mM)(document.querySelector(".hamenu"),"-100%")),document.querySelector(".topnav .menu-icon").classList.remove("open")),document.querySelector("#preloader").classList.add("isdone")})),document.querySelector("body").classList.contains("pace-done")&&document.querySelector("#preloader").classList.add("isdone"),document.addEventListener("load",(function(){document.querySelector("#preloader").classList.add("isdone")}))},h=r(2806),g=function(){return i.useEffect((function(){var e=document.querySelector("body");h.QP?(y(),e.classList.contains("hideX")&&e.classList.remove("hideX")):e.classList.add("hideX")})),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"".concat(!0===h.QP?"showX":"hideX"),children:(0,o.jsx)("div",{id:"preloader"})}),h.QP?(0,o.jsx)(l(),{id:"pace",strategy:"beforeInteractive",src:"/js/pace.min.js"}):""]})};r(472);var w=function(e){var t=e.Component,r=e.pageProps;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(u(),{children:[(0,o.jsx)("title",{children:"Zentaweb - Digital Solutions"}),(0,o.jsx)("link",{rel:"icon",href:"/img/favicon.ico"})]}),(0,o.jsx)(f,{}),(0,o.jsx)(g,{}),(0,o.jsx)(v,{}),(0,o.jsx)(t,s({},r)),(0,o.jsx)(l(),{id:"wow",src:"/js/wow.min.js"}),(0,o.jsx)(l(),{strategy:"beforeInteractive",id:"splitting",src:"/js/splitting.min.js"}),(0,o.jsx)(l(),{id:"simpleParallax",src:"/js/simpleParallax.min.js"}),(0,o.jsx)(l(),{id:"isotope",strategy:"beforeInteractive",src:"/js/isotope.pkgd.min.js"}),(0,o.jsx)(l(),{id:"initWow",strategy:"lazyOnload",children:"new WOW().init();"})]})}},472:function(){},9008:function(e,t,r){e.exports=r(5443)},4298:function(e,t,r){e.exports=r(699)},4924:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},2806:function(e){"use strict";e.exports=JSON.parse('{"E8":"/img/logo-light.png","Q1":"/img/logo-dark.png","QP":true}')}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var r=e.O();_N_E=r}]);