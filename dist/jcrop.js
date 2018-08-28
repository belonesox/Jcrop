var Jcrop=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t={};for(var e in arguments){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),"string"==typeof e&&(e=document.getElementById(e)),this.el=e}return r(t,[{key:"appendTo",value:function(t){return"string"==typeof t&&(t=document.getElementById(t)),t.appendChild(this.el),this}},{key:"emit",value:function(t){var e=document.createEvent("Event");e.initEvent(t,!0,!0),e.cropTarget=this,this.el.dispatchEvent(e)}},{key:"removeClass",value:function(t){return this.el.className=this.el.className.split(" ").filter(function(e){return t!=e}).join(" "),this}},{key:"hasClass",value:function(t){return this.el.className.split(" ").filter(function(e){return t==e}).length}},{key:"addClass",value:function(t){this.hasClass(t)||(this.el.className+=" "+t)}},{key:"listen",value:function(t,e){return this.el.addEventListener(t,function(t){return e(t.cropTarget,t)}),this}}]),t}();e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=0,this.y=0,this.w=0,this.h=0}return r(t,[{key:"normalize",value:function(){var e=[Math.min(this.x,this.x2),Math.min(this.y,this.y2),Math.max(this.x,this.x2),Math.max(this.y,this.y2)],n=e[0],r=e[1],i=e[2],o=e[3];return t.create(n,r,i-n,o-r)}},{key:"rebound",value:function(t,e){var n=this.normalize();return n.x<0&&(n.x=0),n.y<0&&(n.y=0),n.x2>t&&(n.x=t-n.w),n.y2>e&&(n.y=e-n.h),n}},{key:"scale",value:function(e,n){return n=n||e,t.create(this.x,this.y,this.w*e,this.h*n)}},{key:"center",value:function(e,n){return t.create((e-this.w)/2,(n-this.h)/2,this.w,this.h)}},{key:"x1",set:function(t){this.w=this.x2-t,this.x=t}},{key:"y1",set:function(t){this.h=this.y2-t,this.y=t}},{key:"x2",get:function(){return this.x+this.w},set:function(t){this.w=t-this.x}},{key:"y2",get:function(){return this.y+this.h},set:function(t){this.h=t-this.y}},{key:"aspect",get:function(){return this.w/this.h}}]),t}();i.fromCoords=function(t,e){var n=[Math.min(t[0],e[0]),Math.min(t[1],e[1]),Math.max(t[0],e[0]),Math.max(t[1],e[1])],r=n[0],o=n[1],a=n[2],u=n[3];return i.create(r,o,a-r,u-o)},i.create=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=new i;return o.x=t,o.y=e,o.w=n,o.h=r,o},i.from=function(t){var e=new i;return e.x=t.offsetLeft,e.y=t.offsetTop,e.w=t.offsetWidth,e.h=t.offsetHeight,e},i.sizeOf=function(t){var e=new i;return e.w=t.offsetWidth,e.h=t.offsetHeight,e},i.getMax=function(t,e,n){return t/e>n?[e*n,e]:[t,t/n]},i.fromPoint=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"br",o=new i;switch(o.x=t[0],o.y=t[1],r){case"br":o.x2=o.x+e,o.y2=o.y+n;break;case"bl":o.x2=o.x-e,o.y2=o.y+n;break;case"tl":o.x2=o.x-e,o.y2=o.y-n;break;case"tr":o.x2=o.x+e,o.y2=o.y-n}return o},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={animateEasingFunction:"swing",animateFrames:30,multi:!1,multiMax:null,multiMin:1,cropperClass:"jcrop-widget",canDrag:!0,canResize:!0,canSelect:!0,canRemove:!0,multiple:!1,autoFront:!0,active:!0,handles:["n","s","e","w","sw","nw","ne","se"],shading:!0,shadeClass:"jcrop-shade",shadeColor:"black",shadeOpacity:.5,widgetConstructor:null,x:0,y:0,w:100,h:100}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t,e,n,r){var i,o;function a(t){var n="touchstart"==t.type?t.touches[0]:t;i=n.pageX,o=n.pageY,t.preventDefault(),t.stopPropagation(),e(i,o,n)&&("mousedown"==t.type?(window.addEventListener("mousemove",u),document.addEventListener("mouseup",s)):"touchstart"==t.type&&(document.addEventListener("touchmove",u),document.addEventListener("touchend",s)))}function u(t){var e="touchmove"==t.type?t.changedTouches[0]:t;t.stopPropagation(),n(e.pageX-i,e.pageY-o)}function s(t){var e="touchend"==t.type?t.changedTouches[0]:t;e.pageX&&e.pageY&&n(e.pageX-i,e.pageY-o),document.removeEventListener("mouseup",s),window.removeEventListener("mousemove",u),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",s),r()}return"string"==typeof t&&(t=document.getElementById(t)),t.addEventListener("mousedown",a),t.addEventListener("touchstart",a),{remove:function(){t.removeEventListener("mousedown",a),t.removeEventListener("touchstart",a)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(t){return t&&t.__esModule?t:{default:t}}(n(2));var a=function(){function t(e,n,r,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.sw=n,this.sh=r,this.rect=e,this.locked=this.getCornerPoint(this.getOppositeCorner(i)),this.stuck=this.getCornerPoint(i)}return i(t,[{key:"move",value:function(t,e){return o.default.fromCoords(this.locked,this.translateStuckPoint(t,e))}},{key:"getDragQuadrant",value:function(t,e){var n=this.locked[0]-t,r=this.locked[1]-e;return n<0&&r<0?"br":n>=0&&r>=0?"tl":n<0&&r>=0?"tr":"bl"}},{key:"getMaxRect",value:function(t,e,n){return o.default.getMax(Math.abs(this.locked[0]-t),Math.abs(this.locked[1]-e),n)}},{key:"translateStuckPoint",value:function(t,e){var n=r(this.stuck,3),i=n[0],a=n[1],u=n[2],s=null===i?u:i+t,c=null===a?u:a+e;if(s>this.sw&&(s=this.sw),c>this.sh&&(c=this.sh),s<0&&(s=0),c<0&&(c=0),this.aspect){var f=this.getMaxRect(s,c,this.aspect),l=r(f,2),h=l[0],d=l[1],p=this.getDragQuadrant(s,c),v=o.default.fromPoint(this.locked,h,d,p);return[v.x2,v.y2]}return[s,c]}},{key:"getCornerPoint",value:function(t){var e=this.rect;switch(t){case"n":return[null,e.y,e.x];case"s":return[null,e.y2,e.x2];case"e":return[e.x2,null,e.y2];case"w":return[e.x,null,e.y];case"se":return[e.x2,e.y2];case"sw":return[e.x,e.y2];case"ne":return[e.x2,e.y];case"nw":return[e.x,e.y]}}},{key:"getOppositeCorner",value:function(t){switch(t){case"n":return"se";case"s":case"e":return"nw";case"w":return"se";case"se":return"nw";case"sw":return"ne";case"ne":return"sw";case"nw":return"se"}}}]),t}();a.create=function(t,e,n,r){return new a(t,e,n,r)},e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=f(n(0)),o=f(n(7)),a=f(n(11)),u=f(n(4)),s=f(n(9)),c=f(n(5));function f(t){return t&&t.__esModule?t:{default:t}}var l=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.crops=new Set,r.active=null,r.init(),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,s.default),r(e,[{key:"init",value:function(){this.initListeners(),this.initStageDrag(),a.default.Manager.attach(this)}},{key:"initOptions",value:function(){var t=this;this._optconf.multi=function(e){e||t.limitWidgets()}}},{key:"focus",value:function(){return this.active?this.active.el.focus():this.el.focus(),this}},{key:"limitWidgets",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(!this.crops||t<1)return!1;for(var e=Array.from(this.crops);e.length>t;)this.removeWidget(e.shift());return this}},{key:"canCreate",value:function(){var t=this.crops.size,e=this.options;return!(null!==e.multiMax&&t>=e.multiMax)&&!(!e.multi&&t>=e.multiMin)}},{key:"canRemove",value:function(){var t=this.crops.size,e=this.options;return!(this.active&&!this.active.options.canRemove)&&!(!e.canRemove||t<=e.multiMin)}},{key:"initStageDrag",value:function(){var t,e,n,r,i,a=this;(0,u.default)(this.el,function(u,s,f){return!!a.canCreate()&&(t=(a.options.widgetConstructor||o.default).create(a.options),(e=t.pos).x=f.pageX-a.el.offsetParent.offsetLeft-a.el.offsetLeft,e.y=f.pageY-a.el.offsetParent.offsetTop-a.el.offsetTop,n=a.el.offsetWidth,r=a.el.offsetHeight,a.addWidget(t),i=c.default.create(e,n,r,"se"),a.options.aspectRatio&&(i.aspect=a.options.aspectRatio),t.render(e),a.focus(),!0)},function(e,n){t.render(i.move(e,n))},function(){})}},{key:"initListeners",value:function(){var t=this;this.listen("crop.activate",function(e){return t.activate(e)},!1),this.listen("crop.attach",function(t){return console.info("Cropper attached")}),this.listen("crop.remove",function(e){return t.removeWidget(e)})}},{key:"reorderWidgets",value:function(){var t=this,e=1e3;this.crops.forEach(function(n){n.el.style.zIndex=e++,t.active===n?n.addClass("active"):n.removeClass("active")}),this.refresh()}},{key:"activate",value:function(t){return(t=t||Array.from(this.crops).pop())?(this.active=t,this.crops.delete(t),this.crops.add(t),this.reorderWidgets(),this.active.el.focus()):this.shades.disable(),this}},{key:"addWidget",value:function(t){return t.attachToStage(this),t.appendTo(this.el),this.activate(t),this}},{key:"newWidget",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=(0,i.default)({},this.options,e);var n=(this.options.widgetConstructor||o.default).create(e);return n.render(t),this.addWidget(n),n.el.focus(),n}},{key:"removeWidget",value:function(t){if(!this.canRemove())return!1;t.el.remove(),this.crops.delete(t),this.activate()}},{key:"refresh",value:function(){this.options.shading&&this.active&&this.shades.adjust(this.active.pos)}},{key:"updateShades",value:function(){if(this.shades)return this.options.shading?this.shades.enable():this.shades.disable(),this.options.shading&&this.active&&this.shades.adjust(this.active.pos),this}},{key:"setOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(function t(e,n,r){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,r)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(r):void 0})(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setOptions",this).call(this,t),this.crops&&Array.from(this.crops).forEach(function(e){return e.setOptions(t)})}}]),e}();e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=p(n(0)),a=p(n(8)),u=p(n(3)),s=p(n(4)),c=p(n(2)),f=p(n(5)),l=p(n(9)),h=p(n(13)),d=p(n(14));function p(t){return t&&t.__esModule?t:{default:t}}var v=function(t){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.pos=c.default.from(r.el),r.init(),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,l.default),i(e,[{key:"init",value:function(){return this.createHandles(),this.createMover(),this.attachFocus(),new h.default(this),this}},{key:"initOptions",value:function(){var t=this;this._optconf.aspectRatio=function(e){var n=t.pos;if(t.aspect=e||null,t.aspect&&n){var i=c.default.getMax(n.w,n.h,e),o=r(i,2),a=o[0],u=o[1];t.render(c.default.fromPoint([n.x,n.y],a,u))}}}},{key:"attachToStage",value:function(t){this.stage=t,this.emit("crop.attach")}},{key:"attachFocus",value:function(){var t=this;this.el.addEventListener("focus",function(e){t.emit("crop.activate"),t.emit("crop.update")},!1)}},{key:"animate",value:function(t,e,n){var r=this;return n=n||r.options.animateEasingFunction||"swing",e=e||r.options.animateFrames||30,(0,d.default)(r.el,r.pos,t,function(t){return r.render(t.normalize())},e,n)}},{key:"createMover",value:function(){var t,e,n,r=this;this.pos=c.default.from(this.el),(0,s.default)(this.el,function(){var i=r.el.parentElement,o=[i.offsetWidth,i.offsetHeight];return t=o[0],e=o[1],n=c.default.from(r.el),r.el.focus(),r.emit("crop.activate"),!0},function(i,o){r.pos.x=n.x+i,r.pos.y=n.y+o,r.render(r.pos.rebound(t,e))},function(){})}},{key:"nudge",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.el.parentElement,r=[n.offsetWidth,n.offsetHeight],i=r[0],o=r[1];t&&(this.pos.x+=t),e&&(this.pos.y+=e),this.render(this.pos.rebound(i,o))}},{key:"createHandles",value:function(){var t=this;return this.options.handles.forEach(function(e){var n,r=a.default.create("jcrop-handle "+e);r.appendTo(t.el),(0,s.default)(r.el,function(){var r=t.el.parentElement,i=r.offsetWidth,o=r.offsetHeight;return n=f.default.create(c.default.from(t.el),i,o,e),t.aspect&&(n.aspect=t.aspect),t.el.focus(),t.emit("crop.active"),!0},function(e,r){return t.render(n.move(e,r))},function(){})}),this}},{key:"isActive",value:function(){return this.stage&&this.stage.active===this}},{key:"render",value:function(t){return t=t||this.pos,this.el.style.top=Math.round(t.y)+"px",this.el.style.left=Math.round(t.x)+"px",this.el.style.width=Math.round(t.w)+"px",this.el.style.height=Math.round(t.h)+"px",this.pos=t,this.emit("crop.update"),this}},{key:"doneDragging",value:function(){this.pos=c.default.from(this.el)}}]),e}();v.create=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=document.createElement("div"),n=(0,o.default)({},u.default,t);return e.setAttribute("tabindex","0"),e.className=n.cropperClass||"jcrop-widget",new(t.widgetConstructor||v)(e,n)},e.default=v},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(1));var i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.default),e}();i.create=function(t){var e=document.createElement("div");return e.className=t,new i(e)},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=u(n(0)),o=u(n(1)),a=u(n(3));function u(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.options={},Object.defineProperty(r,"_optconf",{configurable:!1,enumerable:!1,value:{},writable:!0}),r.initOptions(),r.setOptions((0,i.default)({},a.default,n)),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default),r(e,[{key:"setOptions",value:function(t){var e=this;return this.options=(0,i.default)({},this.options,t),Object.keys(t).forEach(function(n){e._optconf[n]&&e._optconf[n](t[n])}),this}},{key:"initOptions",value:function(){}}]),e}();e.default=s},function(t,e,n){"use strict";var r=t.exports={def:"outQuad",swing:function(t,e,n,i){return r[r.def](t,e,n,i)},inQuad:function(t,e,n,r){return n*(t/=r)*t+e},outQuad:function(t,e,n,r){return-n*(t/=r)*(t-2)+e},inOutQuad:function(t,e,n,r){return(t/=r/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e},inCubic:function(t,e,n,r){return n*(t/=r)*t*t+e},outCubic:function(t,e,n,r){return n*((t=t/r-1)*t*t+1)+e},inOutCubic:function(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e},inQuart:function(t,e,n,r){return n*(t/=r)*t*t*t+e},outQuart:function(t,e,n,r){return-n*((t=t/r-1)*t*t*t-1)+e},inOutQuart:function(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e},inQuint:function(t,e,n,r){return n*(t/=r)*t*t*t*t+e},outQuint:function(t,e,n,r){return n*((t=t/r-1)*t*t*t*t+1)+e},inOutQuint:function(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e},inSine:function(t,e,n,r){return-n*Math.cos(t/r*(Math.PI/2))+n+e},outSine:function(t,e,n,r){return n*Math.sin(t/r*(Math.PI/2))+e},inOutSine:function(t,e,n,r){return-n/2*(Math.cos(Math.PI*t/r)-1)+e},inExpo:function(t,e,n,r){return 0==t?e:n*Math.pow(2,10*(t/r-1))+e},outExpo:function(t,e,n,r){return t==r?e+n:n*(1-Math.pow(2,-10*t/r))+e},inOutExpo:function(t,e,n,r){return 0==t?e:t==r?e+n:(t/=r/2)<1?n/2*Math.pow(2,10*(t-1))+e:n/2*(2-Math.pow(2,-10*--t))+e},inCirc:function(t,e,n,r){return-n*(Math.sqrt(1-(t/=r)*t)-1)+e},outCirc:function(t,e,n,r){return n*Math.sqrt(1-(t=t/r-1)*t)+e},inOutCirc:function(t,e,n,r){return(t/=r/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+e:n/2*(Math.sqrt(1-(t-=2)*t)+1)+e},inElastic:function(t,e,n,r){var i=1.70158,o=0,a=n;if(0==t)return e;if(1==(t/=r))return e+n;if(o||(o=.3*r),a<Math.abs(n)){a=n;i=o/4}else i=o/(2*Math.PI)*Math.asin(n/a);return-a*Math.pow(2,10*(t-=1))*Math.sin((t*r-i)*(2*Math.PI)/o)+e},outElastic:function(t,e,n,r){var i=1.70158,o=0,a=n;if(0==t)return e;if(1==(t/=r))return e+n;if(o||(o=.3*r),a<Math.abs(n)){a=n;i=o/4}else i=o/(2*Math.PI)*Math.asin(n/a);return a*Math.pow(2,-10*t)*Math.sin((t*r-i)*(2*Math.PI)/o)+n+e},inOutElastic:function(t,e,n,r){var i=1.70158,o=0,a=n;if(0==t)return e;if(2==(t/=r/2))return e+n;if(o||(o=r*(.3*1.5)),a<Math.abs(n)){a=n;i=o/4}else i=o/(2*Math.PI)*Math.asin(n/a);return t<1?a*Math.pow(2,10*(t-=1))*Math.sin((t*r-i)*(2*Math.PI)/o)*-.5+e:a*Math.pow(2,-10*(t-=1))*Math.sin((t*r-i)*(2*Math.PI)/o)*.5+n+e},inBack:function(t,e,n,r,i){return void 0==i&&(i=1.70158),n*(t/=r)*t*((i+1)*t-i)+e},outBack:function(t,e,n,r,i){return void 0==i&&(i=1.70158),n*((t=t/r-1)*t*((i+1)*t+i)+1)+e},inOutBack:function(t,e,n,r,i){return void 0==i&&(i=1.70158),(t/=r/2)<1?n/2*(t*t*((1+(i*=1.525))*t-i))+e:n/2*((t-=2)*t*((1+(i*=1.525))*t+i)+2)+e},inBounce:function(t,e,n,i){return n-r.outBounce(i-t,0,n,i)+e},outBounce:function(t,e,n,r){return(t/=r)<1/2.75?n*(7.5625*t*t)+e:t<2/2.75?n*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?n*(7.5625*(t-=2.25/2.75)*t+.9375)+e:n*(7.5625*(t-=2.625/2.75)*t+.984375)+e},inOutBounce:function(t,e,n,i){return t<i/2?.5*r.inBounce(2*t,0,n,i)+e:.5*r.outBounce(2*t-i,0,n,i)+.5*n+e}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=a(n(2)),o=a(n(1));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var s=function(){function t(e){u(this,t),"string"==typeof e&&(e=document.getElementById(e)),this.el=e,this.shades={}}return r(t,[{key:"init",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.active=void 0===e.shading||e.shading,this.keys().forEach(function(n){return t.shades[n]=c.create(e,n)}),this.el.addEventListener("crop.update",function(e){e.cropTarget.isActive()&&e.cropTarget.options.shading&&t.adjust(e.cropTarget.pos)},!1),this.enable()}},{key:"adjust",value:function(t){var e=i.default.from(this.el),n=this.shades;n.t.h=t.y,n.r.w=Math.ceil(e.w-t.x2),n.b.h=e.h-t.y2,n.t.w=n.b.w=Math.floor(t.w),n.l.w=n.t.x=n.b.x=Math.floor(t.x)}},{key:"keys",value:function(){return["t","l","r","b"]}},{key:"enable",value:function(){var t=this,e=this.shades;this.keys().forEach(function(n){return e[n].insert(t.el)})}},{key:"disable",value:function(){var t=this.shades;this.keys().forEach(function(e){return t[e].remove()})}},{key:"setStyle",value:function(t,e){var n=this.shades;this.keys().forEach(function(r){return n[r].color(t).opacity(e)})}}]),t}();s.attach=function(t){var e=t.el,n=new s(e);return n.init(t.options),t.shades=n,t._optconf.shading=function(e){return t.updateShades()},t._optconf.shadeColor=function(t){return n.setStyle(t)},t._optconf.shadeOpacity=function(t){return n.setStyle(null,t)},n};var c=function(t){function e(){return u(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default),r(e,[{key:"insert",value:function(t){t.appendChild(this.el)}},{key:"remove",value:function(){this.el.remove()}},{key:"color",value:function(t){return t&&(this.el.style.backgroundColor=t),this}},{key:"opacity",value:function(t){return t&&(this.el.style.opacity=t),this}},{key:"w",set:function(t){this.el.style.width=t+"px"}},{key:"h",set:function(t){this.el.style.height=t+"px"}},{key:"x",set:function(t){this.el.style.left=t+"px"}}]),e}();c.create=function(t,e){var n=document.createElement("div"),r=t.shadeClass||"jcrop-shade";return n.className=r+" "+e,new c(n).color(t.shadeColor).opacity(t.shadeOpacity)},c.Manager=s,e.default=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.load=e.Easing=e.Sticker=e.Handle=e.Rect=e.Widget=e.Dragger=e.defaults=e.Stage=void 0,e.attach=v;var r=p(n(0)),i=p(n(3)),o=p(n(6)),a=p(n(15)),u=p(n(7)),s=(p(n(11)),p(n(8))),c=p(n(4)),f=p(n(2)),l=p(n(5)),h=(p(n(1)),p(n(10))),d=p(n(17));function p(t){return t&&t.__esModule?t:{default:t}}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=(0,r.default)({},i.default,e),"string"==typeof t&&(t=document.getElementById(t)),"IMG"==t.tagName?new a.default(t,e):new o.default(t,e)}e.Stage=o.default,e.defaults=i.default,e.Dragger=c.default,e.Widget=u.default,e.Rect=f.default,e.Handle=s.default,e.Sticker=l.default,e.Easing=h.default,e.load=d.default,e.default={Stage:o.default,defaults:i.default,Dragger:c.default,Widget:u.default,Rect:f.default,Handle:s.default,Sticker:l.default,Easing:h.default,load:d.default,attach:v}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.widget=e,this.attach()}return r(t,[{key:"attach",value:function(){var t=this.widget;t.el.addEventListener("keydown",function(e){var n=e.shiftKey?10:1;switch(e.key){case"ArrowRight":t.nudge(n);break;case"ArrowLeft":t.nudge(-n);break;case"ArrowUp":t.nudge(0,-n);break;case"ArrowDown":t.nudge(0,n);break;case"Delete":case"Backspace":t.emit("crop.remove");break;default:return}e.preventDefault()})}}]),t}();e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(10));e.default=function(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"swing",u=["x","y","w","h"],s=e.normalize();a="string"==typeof a?r.default[a]:a;var c=0;return new Promise(function(t,r){requestAnimationFrame(function r(){c<o?(u.forEach(function(t){return s[t]=Math.round(a(c,e[t],n[t]-e[t],o))}),i(s),c++,requestAnimationFrame(r)):t()})})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(16),o=function(t){return t&&t.__esModule?t:{default:t}}(n(6));var a=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=(0,i.div)("jcrop-stage jcrop-image-stage");t.parentNode.insertBefore(r,t),r.appendChild(t);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,r,n));return o.srcEl=t,t.onload=o.resizeToImage.bind(o),o.resizeToImage(),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default),r(e,[{key:"resizeToImage",value:function(){var t=this.srcEl.width,e=this.srcEl.height;this.el.style.width=t+"px",this.el.style.height=e+"px",this.refresh()}}]),e}();e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.wrap=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.createElement("div");return[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(t.childNodes)).forEach(function(t){return e.appendChild(t)}),t.appendChild(e),e},e.div=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.createElement("div");return e.className=t,e},e.replace=function(t,e){return t.parentElement.replaceChild(e,t),e}},function(t,e,n){"use strict";function r(t){return"string"==typeof t&&(t=document.getElementById(t)),new Promise(function(e,n){if(r.check(t))return e(t);function i(r){t.removeEventListener("load",i),t.removeEventListener("error",i),"load"==r.type?e(t):n(t)}t.addEventListener("load",i),t.addEventListener("error",i)})}Object.defineProperty(e,"__esModule",{value:!0}),r.check=function(t){return!!t.complete&&0!==t.naturalWidth},e.default=r}]);
//# sourceMappingURL=jcrop.js.map