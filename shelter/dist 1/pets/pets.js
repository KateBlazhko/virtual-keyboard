(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&n(t,e)}function n(t,e){return n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(t,e)}function r(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var c=i(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return o(this,n)}}function o(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var f=u((function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";a(this,t);var i=document.createElement(n);i.className=r,i.innerHTML=o,this.node=i,e.append(i)})),s=function(t){e(o,t);var n=r(o);function o(t,e,r,i){var c;return a(this,o),(c=n.call(this,t,"a",e)).node.textContent=r,c.node.href=i,c}return u(o)}(f),l=function(t){e(o,t);var n=r(o);function o(t,e,r,i){var c;return a(this,o),(c=n.call(this,t,"img",e)).node.src=r,c.node.alt=i,c}return u(o)}(f),p=function(t){e(o,t);var n=r(o);function o(t,e){var r;return a(this,o),(r=n.call(this,t,"div",e)).cardList=[],r}return u(o,[{key:"createCards",value:function(t){this.cardQuantity=t;for(var e=1;e<=this.cardQuantity;e++)this.cardList.push(new d(this.node,"card",e))}}]),o}(f),d=function(t){e(o,t);var n=r(o);function o(t,e,r){var i;return a(this,o),(i=n.call(this,t,"div",e)).cardNumber=r,i.img=new l(i.node,"card-img","assets/img/".concat(r,".png"),"pets-img"),i.name=new f(i.node,"div","card-name","".concat(h[r-1])),i.button=new s(i.node,"card-button","Learn more","#about"),i}return u(o)}(f),y=document.querySelector(".pets-content-slider"),h=["Katrine","Jennifer","Woody","Sophia","Timmy","Charly","Scarlett","Freddie"];new p(y,"pets-content-slider-main"),new p(y,"pets-content-slider-pets").createCards(8)})();
//# sourceMappingURL=pets.js.map