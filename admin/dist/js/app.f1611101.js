(function(e){function n(n){for(var r,c,u=n[0],i=n[1],l=n[2],f=0,h=[];f<u.length;f++)c=u[f],o[c]&&h.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(n);while(h.length)h.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var i=t[c];0!==o[i]&&(r=!1)}r&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},a=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0e94902f":"b778541b","chunk-2d0c4303":"99e337c7","chunk-2d2131a8":"011619be","chunk-2d22c303":"56f00a6a","chunk-4e8d4066":"a592a9d1","chunk-5cb48170":"44a085c5","chunk-7edc1236":"cffae09f","chunk-99e9c686":"9d3af690","chunk-a3515f30":"fee37169","chunk-c8156500":"80376fd3","chunk-f7f1f85c":"f4d01778"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=o[e]=[n,r]});n.push(t[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e),a=function(n){i.onerror=i.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,t[1](c)}o[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:i})},12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var f=0;f<i.length;f++)n(i[f]);var p=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("6762"),t("cadf"),t("551c"),t("f751"),t("097d"),t("f466"),t("579f"),t("587a");var r=t("a026"),o=t("9f7b"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("router-view")},c=[],u={name:"app"},i=u,l=(t("5c0b"),t("2877")),f=Object(l["a"])(i,a,c,!1,null,null,null),p=f.exports,h=t("8c4f"),d=function(){return t.e("chunk-4e8d4066").then(t.bind(null,"e8c5"))},s=function(){return t.e("chunk-2d0c4303").then(t.bind(null,"3a87"))},m=function(){return t.e("chunk-2d22c303").then(t.bind(null,"f1bd"))},b=function(){return t.e("chunk-0e94902f").then(t.bind(null,"8b48"))},g=function(){return t.e("chunk-2d2131a8").then(t.bind(null,"aaf8"))},v=function(){return t.e("chunk-c8156500").then(t.bind(null,"9511"))},k=function(){return t.e("chunk-7edc1236").then(t.bind(null,"b3a6"))},y=function(){return t.e("chunk-a3515f30").then(t.bind(null,"a6a3"))},w=function(){return t.e("chunk-99e9c686").then(t.bind(null,"f5e2"))},j=function(){return t.e("chunk-5cb48170").then(t.bind(null,"872b"))},P=function(){return t.e("chunk-f7f1f85c").then(t.bind(null,"34e5"))};r["default"].use(h["a"]);var O=new h["a"]({mode:"history",linkActiveClass:"open active",scrollBehavior:function(){return{y:0}},routes:[{path:"/",redirect:"/atracoes"},{path:"atracoes",name:"Atrações",component:d,children:[{path:"/atracoes",name:"listar",component:v},{path:"/atracoes/novo",name:"Nova atração",component:y},{path:"/atracoes/:id",name:"Editar atração",component:w}]},{path:"/categorias",name:"Categorias",component:d,children:[{path:"/categorias",name:"Lista categorias",component:k},{path:"/categorias/novo",name:"Nova Categoria",component:j},{path:"/categorias/:id",name:"Editar categoria",component:P}]},{path:"/login",component:{render:function(e){return e("router-view")}},children:[{path:"/login",name:"Login",component:b}]},{path:"/pages",name:"Pages",component:{render:function(e){return e("router-view")}},children:[{path:"500",name:"Page500",component:m},{path:"register",name:"Register",component:g}]},{path:"*",name:"Page404",component:s}]});r["default"].use(o["a"]),O.beforeEach(function(e,n,t){var r=["/login","/register"],o=!r.includes(e.path),a=localStorage.getItem("epp_adm_tk");if(o&&!a)return t("/login");t()}),new r["default"]({el:"#app",router:O,template:"<App/>",components:{App:p}})},"5c0b":function(e,n,t){"use strict";var r=t("5e27"),o=t.n(r);o.a},"5e27":function(e,n,t){}});
//# sourceMappingURL=app.f1611101.js.map