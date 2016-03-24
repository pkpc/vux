!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxPopup=e():t.vuxPopup=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(19)},function(t,e){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=o(r);e["default"]={props:{show:{type:Boolean,"default":!1,twoWay:!0},height:{type:String,"default":"auto"}},ready:function(){var t=this;this.popup=new i["default"]({container:t.$el,innerHTML:"",onOpen:function(e){t.show=!0},onClose:function(e){t.show=!1}})},watch:{show:function(t){t?this.popup.show():this.popup.hide()}},beforeDestroy:function(){this.popup.destroy()}}},function(t,e,n){"use strict";var o=n(5),r=n(4),i=function(t){this.params={},"[object Object]"===Object.prototype.toString.call(t)&&(this.params={input:t.input||"",container:document.querySelector(t.input)||"",innerHTML:t.innerHTML||"",onOpen:t.onOpen||function(){},onClose:t.onClose||function(){},_open:t._open||function(){},_close:t._close||function(){}}),!!document.querySelectorAll(".picker-mask").length<=0&&(this.divMask=document.createElement("a"),this.divMask.className="picker-mask",this.divMask.href="javascript:void(0)",document.body.appendChild(this.divMask));var e;return e=t.container?t.container:document.createElement("div"),e.className="picker-dialog",t.container||document.body.appendChild(e),this.mask=document.querySelector(".picker-mask"),this.container=document.querySelectorAll(".picker-dialog"),this.container=this.container[this.container.length-1],this._bindEvents(),t=null,this};o.mixTo(i),i.prototype.updateInputPosition=function(){this._hackInputFocus()},i.prototype._bindEvents=function(){function t(t){e.hide(),e.emit("close")}var e=this;return r.tap(this.mask,t),this.container.addEventListener("touchmove",function(t){return t.stopPropagation(),t.preventDefault(),!1},!1),this},i.prototype.show=function(){var t=this;return t.mask.classList.add("show"),t.params._open&&t.params._open(this),t.params.onOpen&&t.params.onOpen(this),this},i.prototype.hide=function(){var t=this;return t.mask.classList.remove("show"),t.params._close&&t.params._close(this),t.params.onClose&&t.params.onClose(this),this},i.prototype.html=function(t){return this.container.innerHTML=t,this},i.prototype.destroy=function(){this.mask&&this.mask.parentNode&&this.mask.parentNode.removeChild(this.mask)},t.exports=i},function(t,e){"use strict";var n={tap:function(t,e){return t?(t.__tap={},t.__tap.event={start:function(e){e.stopPropagation(),t.__tap.clickabled=!0,t.__tap.starttime=e.timeStamp,t.__tap.startPageX=e.changedTouches[0].pageX,t.__tap.startPageY=e.changedTouches[0].pageY},move:function(e){(Math.abs(e.changedTouches[0].pageX-t.__tap.startPageX)>=5||Math.abs(e.changedTouches[0].pageY-t.__tap.startPageY)>=5)&&(t.__tap.clickabled=!1)},end:function(n){n.stopPropagation(),n.preventDefault(),n.timeStamp-t.__tap.starttime>30&&n.timeStamp-t.__tap.starttime<300&&t.__tap.clickabled&&e&&e(n)},click:function(t){t.stopPropagation(),e&&e(t)}},/AppleWebKit.*Mobile.*/.test(navigator.userAgent.match())?(t.addEventListener("touchstart",t.__tap.event.start,!1),t.addEventListener("touchmove",t.__tap.event.move,!1),t.addEventListener("touchend",t.__tap.event.end,!1)):t.addEventListener("click",t.__tap.event.click,!1),t):console.error("tap对象不能为空")},untap:function(t){return t?(t.__tap=t.__tap||{},/AppleWebKit.*Mobile.*/.test(navigator.userAgent.match())&&t.__tap.event?(t.__tap.event.start&&t.removeEventListener("touchstart",t.__tap.event.start,!1),t.__tap.event.move&&t.removeEventListener("touchmove",t.__tap.event.move,!1),t.__tap.event.end&&t.removeEventListener("touchend",t.__tap.event.end,!1)):t.__tap.event&&t.__tap.event.click&&t.removeEventListener("click",t.__tap.event.click,!1),t):console.error("untap对象不能为空")}};t.exports=n},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function r(){}function i(t,e,n){var o=!0;if(t){var r=0,i=t.length,a=e[0],s=e[1],p=e[2];switch(e.length){case 0:for(;i>r;r+=2)o=t[r].call(t[r+1]||n)!==!1&&o;break;case 1:for(;i>r;r+=2)o=t[r].call(t[r+1]||n,a)!==!1&&o;break;case 2:for(;i>r;r+=2)o=t[r].call(t[r+1]||n,a,s)!==!1&&o;break;case 3:for(;i>r;r+=2)o=t[r].call(t[r+1]||n,a,s,p)!==!1&&o;break;default:for(;i>r;r+=2)o=t[r].apply(t[r+1]||n,e)!==!1&&o}}return o}function a(t){return"[object Function]"===Object.prototype.toString.call(t)}var s=n(6),p=o(s),c=/\s+/;r.prototype.on=function(t,e,n){var o,r,i;if(!e)return this;for(o=this.__events||(this.__events={}),t=t.split(c);r=t.shift();)i=o[r]||(o[r]=[]),i.push(e,n);return this},r.prototype.once=function(t,e,n){var o=this,r=function i(){o.off(t,i),e.apply(n||o,arguments)};return this.on(t,r,n)},r.prototype.off=function(t,e,n){var o,r,i,a;if(!(o=this.__events))return this;if(!(t||e||n))return delete this.__events,this;for(t=t?t.split(c):u(o);r=t.shift();)if(i=o[r])if(e||n)for(a=i.length-2;a>=0;a-=2)e&&i[a]!==e||n&&i[a+1]!==n||i.splice(a,2);else delete o[r];return this},r.prototype.trigger=function(t){var e,n,o,r,a,s,p=[],u=!0;if(!(e=this.__events))return this;for(t=t.split(c),a=1,s=arguments.length;s>a;a++)p[a-1]=arguments[a];for(;n=t.shift();)(o=e.all)&&(o=o.slice()),(r=e[n])&&(r=r.slice()),"all"!==n&&(u=i(r,p,this)&&u),u=i(o,[n].concat(p),this)&&u;return u},r.prototype.emit=r.prototype.trigger;var u=p["default"];u||(u=function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e}),r.mixTo=function(t){function e(e){t[e]=function(){return n[e].apply(i,Array.prototype.slice.call(arguments)),this}}var n=r.prototype;if(a(t))for(var o in n)n.hasOwnProperty(o)&&(t.prototype[o]=n[o]);else{var i=new r;for(var s in n)n.hasOwnProperty(s)&&e(s)}},t.exports=r},function(t,e,n){t.exports={"default":n(7),__esModule:!0}},function(t,e,n){n(16),t.exports=n(1).Object.keys},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var o=n(8);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var o=n(13),r=n(1),i=n(9),a="prototype",s=function(t,e,n){var p,c,u,f=t&s.F,l=t&s.G,h=t&s.S,d=t&s.P,v=t&s.B,_=t&s.W,m=l?r:r[e]||(r[e]={}),y=l?o:h?o[e]:(o[e]||{})[a];l&&(n=e);for(p in n)c=!f&&y&&p in y,c&&p in m||(u=c?y[p]:n[p],m[p]=l&&"function"!=typeof y[p]?n[p]:v&&c?i(u,o):_&&y[p]==u?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[a]=t[a],e}(u):d&&"function"==typeof u?i(Function.call,u):u,d&&((m[a]||(m[a]={}))[p]=u))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,t.exports=s},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var o=n(11),r=n(1),i=n(12);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],a={};a[t]=e(n),o(o.S+o.F*i(function(){n(1)}),"Object",a)}},function(t,e,n){var o=n(10);t.exports=function(t){return Object(o(t))}},function(t,e,n){var o=n(15);n(14)("keys",function(t){return function(e){return t(o(e))}})},function(t,e){},function(t,e){t.exports="<div v-show=show transition=popup :style={height:height} class=vux-popup> <slot></slot> </div>"},function(t,e,n){var o,r;n(17),o=n(2),r=n(18),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)}])});