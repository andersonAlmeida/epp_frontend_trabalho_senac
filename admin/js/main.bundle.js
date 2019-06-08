!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/js/",n(n.s=1)}([function(t,e,n){(function(e){t.exports=function(){"use strict";var t=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},n=v,i=h,r=function(t){return c(h(t))},o=c,a=d,s=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function h(t){for(var e,n=[],i=0,r=0,o="";null!=(e=s.exec(t));){var a=e[0],h=e[1],c=e.index;if(o+=t.slice(r,c),r=c+a.length,h)o+=h[1];else{o&&(n.push(o),o="");var p=e[2],l=e[3],f=e[4],d=e[5],v=e[6],g=e[7],m="+"===v||"*"===v,w="?"===v||"*"===v,y=p||"/",b=f||d||(g?".*":"[^"+y+"]+?");n.push({name:l||i++,prefix:p||"",delimiter:y,optional:w,repeat:m,pattern:u(b)})}}return r<t.length&&(o+=t.substr(r)),o&&n.push(o),n}function c(e){for(var n=new Array(e.length),i=0;i<e.length;i++)"object"==typeof e[i]&&(n[i]=new RegExp("^"+e[i].pattern+"$"));return function(i){for(var r="",o=i||{},a=0;a<e.length;a++){var s=e[a];if("string"!=typeof s){var h,c=o[s.name];if(null==c){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to be defined')}if(t(c)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received "'+c+'"');if(0===c.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var p=0;p<c.length;p++){if(h=encodeURIComponent(c[p]),!n[a].test(h))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received "'+h+'"');r+=(0===p?s.prefix:s.delimiter)+h}}else{if(h=encodeURIComponent(c),!n[a].test(h))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+h+'"');r+=s.prefix+h}}else r+=s}return r}}function p(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function u(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function l(t,e){return t.keys=e,t}function f(t){return t.sensitive?"":"i"}function d(t,e){for(var n=(e=e||{}).strict,i=!1!==e.end,r="",o=t[t.length-1],a="string"==typeof o&&/\/$/.test(o),s=0;s<t.length;s++){var h=t[s];if("string"==typeof h)r+=p(h);else{var c=p(h.prefix),u=h.pattern;h.repeat&&(u+="(?:"+c+u+")*"),u=h.optional?c?"(?:"+c+"("+u+"))?":"("+u+")?":c+"("+u+")",r+=u}}return n||(r=(a?r.slice(0,-2):r)+"(?:\\/(?=$))?"),r+=i?"$":n&&a?"":"(?=\\/|$)",new RegExp("^"+r,f(e))}function v(e,n,i){return t(n=n||[])?i||(i={}):(i=n,n=[]),e instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return l(t,e)}(e,n):t(e)?function(t,e,n){for(var i=[],r=0;r<t.length;r++)i.push(v(t[r],e,n).source);return l(new RegExp("(?:"+i.join("|")+")",f(n)),e)}(e,n,i):function(t,e,n){for(var i=h(t),r=d(i,n),o=0;o<i.length;o++)"string"!=typeof i[o]&&e.push(i[o]);return l(r,e)}(e,n,i)}n.parse=i,n.compile=r,n.tokensToFunction=o,n.tokensToRegExp=a;var g,m="undefined"!=typeof document,w="undefined"!=typeof window,y="undefined"!=typeof history,b=void 0!==e,_=m&&document.ontouchstart?"touchstart":"click",x=w&&!(!window.history.location&&!window.location);function E(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function T(t,e){if("function"==typeof t)return T.call(this,"*",t);if("function"==typeof e)for(var n=new R(t,null,this),i=1;i<arguments.length;++i)this.callbacks.push(n.middleware(arguments[i]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function k(t,e,n){var i=this.page=n||T,r=i._window,o=i._hashbang,a=i._getBase();"/"===t[0]&&0!==t.indexOf(a)&&(t=a+(o?"#!":"")+t);var s=t.indexOf("?");this.canonicalPath=t;var h=new RegExp("^"+a.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1"));if(this.path=t.replace(h,"")||"/",o&&(this.path=this.path.replace("#!","")||"/"),this.title=m&&r.document.title,this.state=e||{},this.state.path=t,this.querystring=~s?i._decodeURLEncodedURIComponent(t.slice(s+1)):"",this.pathname=i._decodeURLEncodedURIComponent(~s?t.slice(0,s):t),this.params={},this.hash="",!o){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=i._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}function R(t,e,i){this.page=i||L;var r=e||{};r.strict=r.strict||i._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=n(this.path,this.keys=[],r)}E.prototype.configure=function(t){var e=t||{};this._window=e.window||w&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&w,this._click=!1!==e.click&&m,this._hashbang=!!e.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):w&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(_,this.clickHandler,!1):m&&n.document.removeEventListener(_,this.clickHandler,!1),this._hashbang&&w&&!y?n.addEventListener("hashchange",this._onpopstate,!1):w&&n.removeEventListener("hashchange",this._onpopstate,!1)},E.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},E.prototype._getBase=function(){var t=this._base;if(t)return t;var e=w&&this._window&&this._window.location;return w&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},E.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},E.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var n;if(this._running=!0,x){var i=this._window,r=i.location;n=this._hashbang&&~r.hash.indexOf("#!")?r.hash.substr(2)+r.search:this._hashbang?r.search+r.hash:r.pathname+r.search+r.hash}this.replace(n,null,!0,e.dispatch)}},E.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(_,this.clickHandler,!1),w&&t.removeEventListener("popstate",this._onpopstate,!1),w&&t.removeEventListener("hashchange",this._onpopstate,!1)}},E.prototype.show=function(t,e,n,i){var r=new k(t,e,this),o=this.prevContext;return this.prevContext=r,this.current=r.path,!1!==n&&this.dispatch(r,o),!1!==r.handled&&!1!==i&&r.pushState(),r},E.prototype.back=function(t,e){var n=this;if(this.len>0){var i=this._window;y&&i.history.back(),this.len--}else t?setTimeout(function(){n.show(t,e)}):setTimeout(function(){n.show(n._getBase(),e)})},E.prototype.redirect=function(t,e){var n=this;"string"==typeof t&&"string"==typeof e&&T.call(this,t,function(t){setTimeout(function(){n.replace(e)},0)}),"string"==typeof t&&void 0===e&&setTimeout(function(){n.replace(t)},0)},E.prototype.replace=function(t,e,n,i){var r=new k(t,e,this),o=this.prevContext;return this.prevContext=r,this.current=r.path,r.init=n,r.save(),!1!==i&&this.dispatch(r,o),r},E.prototype.dispatch=function(t,e){var n=0,i=0,r=this;function o(){var e=r.callbacks[n++];if(t.path===r.current)return e?void e(t,o):function(t){if(!t.handled){var e=this._window;(this._hashbang?x&&this._getBase()+e.location.hash.replace("#!",""):x&&e.location.pathname+e.location.search)!==t.canonicalPath&&(this.stop(),t.handled=!1,x&&(e.location.href=t.canonicalPath))}}.call(r,t);t.handled=!1}e?function t(){var n=r.exits[i++];if(!n)return o();n(e,t)}():o()},E.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var n=new R(t,null,this),i=1;i<arguments.length;++i)this.exits.push(n.middleware(arguments[i]))},E.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,n=t.path||(t.composedPath?t.composedPath():null);if(n)for(var i=0;i<n.length;i++)if(n[i].nodeName&&"A"===n[i].nodeName.toUpperCase()&&n[i].href){e=n[i];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var r="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var o=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==o)&&!(o&&o.indexOf("mailto:")>-1)&&(r?!e.target.baseVal:!e.target)&&(r||this.sameOrigin(e.href))){var a=r?e.href.baseVal:e.pathname+e.search+(e.hash||"");a="/"!==a[0]?"/"+a:a,b&&a.match(/^\/[a-zA-Z]:\//)&&(a=a.replace(/^\/[a-zA-Z]:\//,"/"));var s=a,h=this._getBase();0===a.indexOf(h)&&(a=a.substr(h.length)),this._hashbang&&(a=a.replace("#!","")),(!h||s!==a||x&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(s))}}}}},E.prototype._onpopstate=(g=!1,w?(m&&"complete"===document.readyState?g=!0:window.addEventListener("load",function(){setTimeout(function(){g=!0},0)}),function(t){if(g)if(t.state){var e=t.state.path;this.replace(e,t.state)}else if(x){var n=this._window.location;this.show(n.pathname+n.search+n.hash,void 0,void 0,!1)}}):function(){}),E.prototype._which=function(t){return null==(t=t||w&&this._window.event).which?t.button:t.which},E.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&x)return new URL(t,e.location.toString());if(m){var n=e.document.createElement("a");return n.href=t,n}},E.prototype.sameOrigin=function(t){if(!t||!x)return!1;var e=this._toURL(t),n=this._window,i=n.location;return i.protocol===e.protocol&&i.hostname===e.hostname&&i.port===e.port},E.prototype._samePath=function(t){if(!x)return!1;var e=this._window,n=e.location;return t.pathname===n.pathname&&t.search===n.search},E.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},k.prototype.pushState=function(){var t=this.page,e=t._window,n=t._hashbang;t.len++,y&&e.history.pushState(this.state,this.title,n&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},k.prototype.save=function(){var t=this.page;y&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},R.prototype.middleware=function(t){var e=this;return function(n,i){if(e.match(n.path,n.params))return t(n,i);i()}},R.prototype.match=function(t,e){var n=this.keys,i=t.indexOf("?"),r=~i?t.slice(0,i):t,o=this.regexp.exec(decodeURIComponent(r));if(!o)return!1;for(var a=1,s=o.length;a<s;++a){var h=n[a-1],c=this.page._decodeURLEncodedURIComponent(o[a]);void 0===c&&hasOwnProperty.call(e,h.name)||(e[h.name]=c)}return!0};var L=function t(){var e=new E;function n(){return T.apply(e,arguments)}return n.callbacks=e.callbacks,n.exits=e.exits,n.base=e.base.bind(e),n.strict=e.strict.bind(e),n.start=e.start.bind(e),n.stop=e.stop.bind(e),n.show=e.show.bind(e),n.back=e.back.bind(e),n.redirect=e.redirect.bind(e),n.replace=e.replace.bind(e),n.dispatch=e.dispatch.bind(e),n.exit=e.exit.bind(e),n.configure=e.configure.bind(e),n.sameOrigin=e.sameOrigin.bind(e),n.clickHandler=e.clickHandler.bind(e),n.create=t,Object.defineProperty(n,"len",{get:function(){return e.len},set:function(t){e.len=t}}),Object.defineProperty(n,"current",{get:function(){return e.current},set:function(t){e.current=t}}),n.Context=k,n.Route=R,n}(),U=L,O=L;return U.default=O,U}()}).call(this,n(2))},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i);console.log("teste router"),r()("/",function(){console.log("pega a home")})},function(t,e){var n,i,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(t){i=a}}();var h,c=[],p=!1,u=-1;function l(){p&&h&&(p=!1,h.length?c=h.concat(c):u=-1,c.length&&f())}function f(){if(!p){var t=s(l);p=!0;for(var e=c.length;e;){for(h=c,c=[];++u<e;)h&&h[u].run();u=-1,e=c.length}h=null,p=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function v(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new d(t,e)),1!==c.length||p||s(f)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}]);