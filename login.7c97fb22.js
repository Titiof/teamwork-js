!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequired7c6=a),a.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=e.apply(t,r);function s(e){n(o,i,a,s,u,"next",e)}function u(e){n(o,i,a,s,u,"throw",e)}s(void 0)}))}}})),a.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),o=new C(r||[]);return a._invoke=function(e,t,n){var r=f;return function(i,a){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw a;return N()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=I(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?p:h,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function y(){}function m(){}function g(){}var k={};u(k,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(A([])));b&&b!==n&&r.call(b,a)&&(k=b);var x=g.prototype=y.prototype=Object.create(k);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(f).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function I(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,I(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function A(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:N}}function N(){return{value:t,done:!0}}return m.prototype=g,u(x,"constructor",g),u(g,"constructor",m),m.displayName=u(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},_(E.prototype),u(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new E(c(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},_(x),u(x,s,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=A,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),a.register("iNWLi",(function(n,r){t(n.exports,"signup",(function(){return v})),t(n.exports,"signin",(function(){return m})),t(n.exports,"addBooksToUserCart",(function(){return k}));var i=a("bpxeT"),o=a("2TvXO");a("fkNhc");var s=a("MjY8E");a("gQOBw");var u=a("gUfF6"),c=a("h6c0i");a("6m2hf");var l=a("221Dt"),f=(0,s.initializeApp)({apiKey:"AIzaSyBcETIWRzdvvBXoViQftnTvFFLpHkebOhw",authDomain:"book-bc5e2.firebaseapp.com",projectId:"book-bc5e2",storageBucket:"book-bc5e2.appspot.com",messagingSenderId:"258455649332",appId:"1:258455649332:web:4a54c5fd8564a412d79e61",measurementId:"G-2EMZHHRVM8"}),h=(0,u.o)(f),d=(0,l.getFirestore)(f),p=(0,l.collection)(d,"shopping-list");function v(e,t,n){return y.apply(this,arguments)}function y(){return(y=e(i)(e(o).mark((function t(n,r,i){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.a9)(h,n.value.trim(),r.value.trim());case 3:e.sent&&h.currentUser&&((0,u.af)(h.currentUser),(0,u.aj)(h.currentUser,{displayName:i.value.trim(),photoURL:"https://picsum.photos/50/50?random=1"}),c.Notify.success("Registration was successful!"),setTimeout((function(){window.location.href="/teamwork-js/"}),500)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),"auth/email-already-in-use"===e.t0.code?c.Notify.warning("This email address is already registered. Please go to the tab signin."):c.Notify.error("An error occurred during registration.");case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function m(e,t){return g.apply(this,arguments)}function g(){return(g=e(i)(e(o).mark((function t(n,r){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.aa)(h,n.value.trim(),r.value.trim());case 3:i=e.sent,a=i.user,console.log(a),error="",c.Notify.success("Authorization was successful!"),setTimeout((function(){window.location.href="/teamwork-js/"}),500),e.next=18;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0.code,e.t0.message,console.log(e.t0),error="Invalid user email or password",c.Notify.failure(e.t0);case 18:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function k(e){console.log("test");var t=h.currentUser;console.log(t),(0,l.setDoc)((0,l.doc)(p,"cart"),{id:e})}})),a.register("fkNhc",(function(e,n){t(e.exports,"initializeApp",(function(){return a("MjY8E").initializeApp})),t(e.exports,"registerVersion",(function(){return a("MjY8E").registerVersion}));a("MjY8E");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,a("MjY8E").registerVersion)("firebase","10.4.0","app")})),a.register("MjY8E",(function(n,r){t(n.exports,"_registerComponent",(function(){return T})),t(n.exports,"_getProvider",(function(){return S})),t(n.exports,"_removeServiceInstance",(function(){return C})),t(n.exports,"SDK_VERSION",(function(){return D})),t(n.exports,"initializeApp",(function(){return R})),t(n.exports,"getApp",(function(){return P})),t(n.exports,"registerVersion",(function(){return L}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("hKHmD"),c=a("8nrFW"),l=a("2TvXO"),f=a("6ExWU"),h=a("kZfxc"),d=a("2xDiJ"),p=a("ajgRO"),v=(d=a("2xDiJ"),function(){"use strict";function t(n){e(o)(this,t),this.container=n}return e(s)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}());var y,m,g="@firebase/app",k="0.9.19",w=new(0,h.Logger)("@firebase/app"),b="[DEFAULT]",x=(y={},e(u)(y,g,"fire-core"),e(u)(y,"@firebase/app-compat","fire-core-compat"),e(u)(y,"@firebase/analytics","fire-analytics"),e(u)(y,"@firebase/analytics-compat","fire-analytics-compat"),e(u)(y,"@firebase/app-check","fire-app-check"),e(u)(y,"@firebase/app-check-compat","fire-app-check-compat"),e(u)(y,"@firebase/auth","fire-auth"),e(u)(y,"@firebase/auth-compat","fire-auth-compat"),e(u)(y,"@firebase/database","fire-rtdb"),e(u)(y,"@firebase/database-compat","fire-rtdb-compat"),e(u)(y,"@firebase/functions","fire-fn"),e(u)(y,"@firebase/functions-compat","fire-fn-compat"),e(u)(y,"@firebase/installations","fire-iid"),e(u)(y,"@firebase/installations-compat","fire-iid-compat"),e(u)(y,"@firebase/messaging","fire-fcm"),e(u)(y,"@firebase/messaging-compat","fire-fcm-compat"),e(u)(y,"@firebase/performance","fire-perf"),e(u)(y,"@firebase/performance-compat","fire-perf-compat"),e(u)(y,"@firebase/remote-config","fire-rc"),e(u)(y,"@firebase/remote-config-compat","fire-rc-compat"),e(u)(y,"@firebase/storage","fire-gcs"),e(u)(y,"@firebase/storage-compat","fire-gcs-compat"),e(u)(y,"@firebase/firestore","fire-fst"),e(u)(y,"@firebase/firestore-compat","fire-fst-compat"),e(u)(y,"fire-js","fire-js"),e(u)(y,"firebase","fire-js-all"),y),_=new Map,E=new Map;function I(e,t){try{e.container.addComponent(t)}catch(n){w.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function T(e){var t=e.name;if(E.has(t))return w.debug("There were multiple attempts to register component ".concat(t,".")),!1;E.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=_.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){I(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function S(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function C(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b;S(e,t).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var A=(m={},e(u)(m,"no-app","No Firebase App '{$appName}' has been created - call initializeApp() first"),e(u)(m,"bad-app-name","Illegal App name: '{$appName}"),e(u)(m,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(u)(m,"app-deleted","Firebase App named '{$appName}' already deleted"),e(u)(m,"no-options","Need to provide options, when not being deployed to hosting via source."),e(u)(m,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(u)(m,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(u)(m,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(u)(m,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(u)(m,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(u)(m,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),m),N=new(0,d.ErrorFactory)("app","Firebase",A),O=function(){"use strict";function t(n,r,i){var a=this;e(o)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new(0,f.Component)("app",(function(){return a}),"PUBLIC"))}return e(s)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw N.create("app-deleted",{appName:this._name})}}]),t}(),D="10.4.0";function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:b,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw N.create("bad-app-name",{appName:String(a)});if(n||(n=(0,d.getDefaultAppConfig)()),!n)throw N.create("no-options");var o=_.get(a);if(o){if((0,d.deepEqual)(n,o.options)&&(0,d.deepEqual)(i,o.config))return o;throw N.create("duplicate-app",{appName:a})}var s=new(0,f.ComponentContainer)(a),u=!0,c=!1,l=void 0;try{for(var h,p=E.values()[Symbol.iterator]();!(u=(h=p.next()).done);u=!0){var v=h.value;s.addComponent(v)}}catch(e){c=!0,l=e}finally{try{u||null==p.return||p.return()}finally{if(c)throw l}}var y=new O(n,i,s);return _.set(a,y),y}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=_.get(e);if(!t&&e===b&&(0,d.getDefaultAppConfig)())return R();if(!t)throw N.create("no-app",{appName:e});return t}function L(e,t,n){var r,i=null!==(r=x[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void w.warn(s.join(" "))}T(new(0,f.Component)("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var M="firebase-heartbeat-store",U=null;function F(){return U||(U=(0,p.openDB)("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(M)}}).catch((function(e){throw N.create("idb-open",{originalErrorMessage:e.message})}))),U}function V(e){return j.apply(this,arguments)}function j(){return(j=e(i)(e(l).mark((function t(n){var r,i,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F();case 3:return r=e.sent,e.next=6,r.transaction(M).objectStore(M).get(H(n));case 6:return i=e.sent,e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),e.t0 instanceof d.FirebaseError?w.warn(e.t0.message):(a=N.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),w.warn(a.message));case 13:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function B(e,t){return z.apply(this,arguments)}function z(){return(z=e(i)(e(l).mark((function t(n,r){var i,a,o,s;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F();case 3:return i=e.sent,a=i.transaction(M,"readwrite"),o=a.objectStore(M),e.next=8,o.put(r,H(n));case 8:return e.next=10,a.done;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),e.t0 instanceof d.FirebaseError?w.warn(e.t0.message):(s=N.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),w.warn(s.message));case 15:case"end":return e.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function H(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W=function(){"use strict";function t(n){var r=this;e(o)(this,t),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Q(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(s)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(i)(e(l).mark((function n(){var r,i,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=q(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(i)(e(l).mark((function n(){var r,i,a,o,s;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=q(),i=K(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=(0,d.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function q(){return(new Date).toISOString().substring(0,10)}function K(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),X(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),X(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var G,Q=function(){"use strict";function t(n){e(o)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(s)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(i)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,d.isIndexedDBAvailable)()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",(0,d.validateIndexedDBOpenable)().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(i)(e(l).mark((function n(){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,V(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(i)(e(l).mark((function r(){var i,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return a=e.sent,e.abrupt("return",B(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(i)(e(l).mark((function r(){var i,a;return e(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",B(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(c)(a.heartbeats).concat(e(c)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function X(e){return(0,d.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */G="",T(new(0,f.Component)("platform-logger",(function(e){return new v(e)}),"PRIVATE")),T(new(0,f.Component)("heartbeat",(function(e){return new W(e)}),"PRIVATE")),L(g,k,G),L(g,k,"esm2017"),L("fire-js","")})),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||r.default(e)||o.default(e)||i.default()};var n=s(a("kMC0W")),r=s(a("7AJDX")),i=s(a("8CtQK")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("6ExWU",(function(n,r){t(n.exports,"Component",(function(){return h})),t(n.exports,"ComponentContainer",(function(){return v}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("1t1Wn"),c=a("8nrFW"),l=a("2TvXO"),f=a("2xDiJ"),h=function(){"use strict";function t(n,r,i){e(o)(this,t),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(s)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),d="[DEFAULT]",p=function(){"use strict";function t(n,r){e(o)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(s)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new(0,f.Deferred);if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:d})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=e(u)(a.value,2),c=s[0],l=s[1],f=this.normalizeInstanceIdentifier(c);try{var h=this.getOrInitializeService({instanceIdentifier:f});l.resolve(h)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(i)(e(l).mark((function n(){var r;return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(c)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(c)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,c=void 0;try{for(var l,f=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(l=f.next()).done);o=!0){var h=e(u)(l.value,2),d=h[0],p=h[1],v=this.normalizeInstanceIdentifier(d);i===v&&p.resolve(a)}}catch(e){s=!0,c=e}finally{try{o||null==f.return||f.return()}finally{if(s)throw c}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===d?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return this.component?this.component.multipleInstances?e:d:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();var v=function(){"use strict";function t(n){e(o)(this,t),this.name=n,this.providers=new Map}return e(s)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new p(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}()})),a.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n.default(e)||r.default(e,t)||o.default(e,t)||i.default()};var n=s(a("8slrw")),r=s(a("7AJDX")),i=s(a("ifqQW")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("2xDiJ",(function(r,i){t(r.exports,"base64urlEncodeWithoutPadding",(function(){return m})),t(r.exports,"base64Decode",(function(){return g})),t(r.exports,"getDefaultEmulatorHost",(function(){return b})),t(r.exports,"getDefaultEmulatorHostnameAndPort",(function(){return x})),t(r.exports,"getDefaultAppConfig",(function(){return _})),t(r.exports,"getExperimentalSetting",(function(){return E})),t(r.exports,"Deferred",(function(){return I})),t(r.exports,"createMockUserToken",(function(){return T})),t(r.exports,"getUA",(function(){return S})),t(r.exports,"isMobileCordova",(function(){return C})),t(r.exports,"isBrowserExtension",(function(){return A})),t(r.exports,"isReactNative",(function(){return N})),t(r.exports,"isIE",(function(){return O})),t(r.exports,"isSafari",(function(){return D})),t(r.exports,"isIndexedDBAvailable",(function(){return R})),t(r.exports,"validateIndexedDBOpenable",(function(){return P})),t(r.exports,"FirebaseError",(function(){return L})),t(r.exports,"ErrorFactory",(function(){return M})),t(r.exports,"isEmpty",(function(){return V})),t(r.exports,"deepEqual",(function(){return j})),t(r.exports,"querystring",(function(){return z})),t(r.exports,"querystringDecode",(function(){return H})),t(r.exports,"extractQuerystring",(function(){return W})),t(r.exports,"createSubscribe",(function(){return q})),t(r.exports,"getModularInstance",(function(){return Q}));var o=a("ds8z5"),s=a("8MBJY"),u=a("a2hTj"),c=a("eYQtU"),l=a("1t1Wn"),f=(a("8nrFW"),a("4c7YB")),h=a("2MbLg"),d=a("6qd2L"),p=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},v={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|s>>4,h=(15&s)<<2|c>>6,d=63&c;u||(d=64,o||(h=64)),r.push(n[l],n[f],n[h],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(p(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw new y;var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var f=s<<6&192|u;r.push(f)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},y=function(t){"use strict";e(c)(r,t);var n=e(h)(r);function r(){var t;return e(s)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="DecodeBase64StringError",t}return r}(e(f)(Error)),m=function(e){return function(e){var t=p(e);return v.encodeByteArray(t,!0)}(e).replace(/\./g,"")},g=function(e){try{return v.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var k=function(){
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},w=function(){try{return k()||function(){if(void 0!==d&&void 0!==d.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&g(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},b=function(e){var t,n;return null===(n=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},x=function(e){var t=b(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},_=function(){var e;return null===(e=w())||void 0===e?void 0:e.config},E=function(e){var t;return null===(t=w())||void 0===t?void 0:t["_".concat(e)]},I=function(){"use strict";function t(){var n=this;e(s)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(u)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[m(JSON.stringify({alg:"none",type:"JWT"})),m(JSON.stringify(a)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function C(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(S())}function A(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function N(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function O(){var e=S();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function D(){return!function(){var e,t=null===(e=w())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function R(){try{return"object"==typeof indexedDB}catch(e){return!1}}function P(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var L=function(t){"use strict";e(c)(r,t);var n=e(h)(r);function r(t,i,a){var u;return e(s)(this,r),(u=n.call(this,i)).code=t,u.customData=a,u.name="FirebaseError",Object.setPrototypeOf(e(o)(u),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(o)(u),M.prototype.create),u}return r}(e(f)(Error)),M=function(){"use strict";function t(n,r,i){e(s)(this,t),this.service=n,this.serviceName=r,this.errors=i}return e(u)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?U(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new L(a,u,i);return c}}]),t}();function U(e,t){return e.replace(F,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var F=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function j(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],f=t[c];if(B(l)&&B(f)){if(!j(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var h=!0,d=!1,p=void 0;try{for(var v,y=r[Symbol.iterator]();!(h=(v=y.next()).done);h=!0){var m=v.value;if(!n.includes(m))return!1}}catch(e){d=!0,p=e}finally{try{h||null==y.return||y.return()}finally{if(d)throw p}}return!0}function B(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(t,r){var i=e(l)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function H(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(l)(t.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function W(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e,t){var n=new K(e,t);return n.subscribe.bind(n)}var K=function(){"use strict";function t(n,r){var i=this;e(s)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return e(u)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=G),void 0===r.error&&(r.error=G),void 0===r.complete&&(r.complete=G);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function G(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(e){return e&&e._delegate?e._delegate:e}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r.default(e,t)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n}})),a.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),a.register("4c7YB",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return u(e)};var n=s(a("ge8co")),r=s(a("cZGw3")),i=s(a("fVNic")),o=s(a("gD1JV"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||!r.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,a)}function a(){return n.default(e,arguments,i.default(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o.default(a,e)},u(e)}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),a.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=n.default();return function(){var n,a=r.default(e);if(t){var o=r.default(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return i.default(this,n)}};var n=o(a("aTHs7")),r=o(a("fVNic")),i=o(a("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=i(a("ds8z5")),r=i(a("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),a.register("6qd2L",(function(e,t){var n,r,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var u,c=[],l=!1,f=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=s(h);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),a.register("kZfxc",(function(n,r){t(n.exports,"LogLevel",(function(){return i})),t(n.exports,"Logger",(function(){return m})),t(n.exports,"setLogLevel",(function(){return g})),t(n.exports,"setUserLogHandler",(function(){return k}));var i,o,s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("8nrFW"),f=[];(o=i||(i={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";var h,d={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},p=i.INFO,v=(h={},e(c)(h,i.DEBUG,"log"),e(c)(h,i.VERBOSE,"log"),e(c)(h,i.INFO,"info"),e(c)(h,i.WARN,"warn"),e(c)(h,i.ERROR,"error"),h),y=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=v[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(l)(i)))}},m=function(){"use strict";function t(n){e(s)(this,t),this.name=n,this._logLevel=p,this._logHandler=y,this._userLogHandler=null,f.push(this)}return e(u)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in i))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?d[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.DEBUG].concat(e(l)(n))),this._logHandler.apply(this,[this,i.DEBUG].concat(e(l)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.VERBOSE].concat(e(l)(n))),this._logHandler.apply(this,[this,i.VERBOSE].concat(e(l)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.INFO].concat(e(l)(n))),this._logHandler.apply(this,[this,i.INFO].concat(e(l)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.WARN].concat(e(l)(n))),this._logHandler.apply(this,[this,i.WARN].concat(e(l)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.ERROR].concat(e(l)(n))),this._logHandler.apply(this,[this,i.ERROR].concat(e(l)(n)))}}]),t}();function g(e){f.forEach((function(t){t.setLogLevel(e)}))}function k(e,t){var n=!0,r=!1,a=void 0;try{for(var o,s=f[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value,c=null;t&&t.level&&(c=d[t.level]),u.userLogHandler=null===e?null:function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];var s=a.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");n>=(null!=c?c:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:a,type:t.name})}}}catch(e){r=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}}})),a.register("ajgRO",(function(n,r){t(n.exports,"openDB",(function(){return l}));var i=a("bpxeT"),o=a("dDDEV"),s=a("8nrFW"),u=a("2TvXO"),c=a("kKOTz");c=a("kKOTz");function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=(0,c.w)(s);return i&&s.addEventListener("upgradeneeded",(function(e){i((0,c.w)(s.result),e.oldVersion,e.newVersion,(0,c.w)(s.transaction),e)})),r&&s.addEventListener("blocked",(function(e){return r(e.oldVersion,e.newVersion,e)})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(e){return a(e.oldVersion,e.newVersion,e)}))})).catch((function(){})),u}var f=["get","getKey","getAll","getAllKeys","count"],h=["put","add","delete","clear"],d=new Map;function p(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(d.get(n))return d.get(n);var r=n.replace(/FromIndex$/,""),a=n!==r,o=h.includes(r);if(r in(a?IDBIndex:IDBObjectStore).prototype&&(o||f.includes(r))){var c,l=(c=e(i)(e(u).mark((function t(n){var i,c,l,f,h,d,p=arguments;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(i=p.length,c=new Array(i>1?i-1:0),l=1;l<i;l++)c[l-1]=p[l];return h=this.transaction(n,o?"readwrite":"readonly"),d=h.store,a&&(d=d.index(c.shift())),t.next=7,Promise.all([(f=d)[r].apply(f,e(s)(c)),o&&h.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return c.apply(this,arguments)});return d.set(n,l),l}}}(0,c.r)((function(t){return e(o)({},t,{get:function(e,n,r){return p(e,n)||t.get(e,n,r)},has:function(e,n){return!!p(e,n)||t.has(e,n)}})}))})),a.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r.default(e,t,n[t])}))}return e};var n,r=(n=a("hKHmD"))&&n.__esModule?n:{default:n}})),a.register("kKOTz",(function(n,r){t(n.exports,"w",(function(){return m})),t(n.exports,"r",(function(){return p}));var i,o,s=a("8nrFW");var u=new WeakMap,c=new WeakMap,l=new WeakMap,f=new WeakMap,h=new WeakMap;var d={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function p(e){d=e(d)}function v(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(g(this),n),m(u.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return m(t.apply(g(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,u=(o=t).call.apply(o,[g(this),n].concat(e(s)(i)));return l.set(u,n.sort?n.sort():[n]),m(u)}}function y(e){return"function"==typeof e?v(e):(e instanceof IDBTransaction&&function(e){if(!c.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));c.set(e,t)}}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,d):e);var t}function m(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(m(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&u.set(e,t)})).catch((function(){})),h.set(n,t),n;var t,n;if(f.has(e))return f.get(e);var r=y(e);return r!==e&&(f.set(e,r),h.set(r,e)),r}var g=function(e){return h.get(e)}})),a.register("gQOBw",(function(e,n){t(e.exports,"getAuth",(function(){return a("gUfF6").o})),t(e.exports,"createUserWithEmailAndPassword",(function(){return a("gUfF6").a9})),t(e.exports,"sendEmailVerification",(function(){return a("gUfF6").af})),t(e.exports,"updateProfile",(function(){return a("gUfF6").aj})),t(e.exports,"signInWithEmailAndPassword",(function(){return a("gUfF6").aa})),a("eMcUM")})),a.register("eMcUM",(function(e,n){t(e.exports,"createUserWithEmailAndPassword",(function(){return a("gUfF6").a9})),t(e.exports,"getAuth",(function(){return a("gUfF6").o})),t(e.exports,"sendEmailVerification",(function(){return a("gUfF6").af})),t(e.exports,"signInWithEmailAndPassword",(function(){return a("gUfF6").aa})),t(e.exports,"updateProfile",(function(){return a("gUfF6").aj})),a("2xDiJ"),a("MjY8E"),a("kZfxc"),a("6ExWU");a("gUfF6")})),a.register("gUfF6",(function(n,r){t(n.exports,"a9",(function(){return on})),t(n.exports,"aa",(function(){return un})),t(n.exports,"af",(function(){return cn})),t(n.exports,"aj",(function(){return dn})),t(n.exports,"o",(function(){return ui}));var i=a("ds8z5"),o=a("bpxeT"),s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("jh8P3"),f=a("fVNic"),h=a("eYQtU"),d=a("1t1Wn"),p=a("8nrFW"),v=a("2MbLg"),y=a("2TvXO"),m=a("2xDiJ"),g=a("MjY8E"),k=a("kZfxc"),w=a("4tSb9"),b=a("6ExWU");function x(e){return void 0!==e&&void 0!==e.enterprise}var _=function t(n){"use strict";if(e(s)(this,t),this.siteKey="",this.emailPasswordEnabled=!1,void 0===n.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=n.recaptchaKey.split("/")[3],this.emailPasswordEnabled=n.recaptchaEnforcementState.some((function(e){return"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState}))};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return e(c)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var I=E,T=new(0,m.ErrorFactory)("auth","Firebase",E()),S=new(0,k.Logger)("@firebase/auth");function C(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;S.logLevel<=k.LogLevel.WARN&&(a=S).warn.apply(a,["Auth (".concat(g.SDK_VERSION,"): ").concat(t)].concat(e(p)(r)))}function A(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;S.logLevel<=k.LogLevel.ERROR&&(a=S).error.apply(a,["Auth (".concat(g.SDK_VERSION,"): ").concat(t)].concat(e(p)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw R.apply(void 0,[t].concat(e(p)(r)))}function O(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return R.apply(void 0,[t].concat(e(p)(r)))}function D(t,n,r){var i=Object.assign(Object.assign({},I()),e(c)({},n,r));return new(0,m.ErrorFactory)("auth","Firebase",i).create(n,{appName:t.name})}function R(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof t){var o,s=r[0],u=e(p)(r.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(p)(u)))}return(a=T).create.apply(a,[t].concat(e(p)(r)))}function P(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!t)throw R.apply(void 0,[n].concat(e(p)(i)))}function L(e){var t="INTERNAL ASSERTION FAILED: "+e;throw A(t),new Error(t)}function M(e,t){e||L(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function F(){return"http:"===V()||"https:"===V()}function V(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var j=function(){"use strict";function t(n,r){e(s)(this,t),this.shortDelay=n,this.longDelay=r,M(r>n,"Short delay should be less than long delay!"),this.isMobile=(0,m.isMobileCordova)()||(0,m.isReactNative)()}return e(u)(t,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(F()||(0,m.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e,t){M(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z,H=function(){"use strict";function t(){e(s)(this,t)}return e(u)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void L("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void L("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void L("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),W=(z={},e(c)(z,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(c)(z,"MISSING_CUSTOM_TOKEN","internal-error"),e(c)(z,"INVALID_IDENTIFIER","invalid-email"),e(c)(z,"MISSING_CONTINUE_URI","internal-error"),e(c)(z,"INVALID_PASSWORD","wrong-password"),e(c)(z,"MISSING_PASSWORD","missing-password"),e(c)(z,"EMAIL_EXISTS","email-already-in-use"),e(c)(z,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(c)(z,"INVALID_IDP_RESPONSE","invalid-credential"),e(c)(z,"INVALID_PENDING_TOKEN","invalid-credential"),e(c)(z,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(c)(z,"MISSING_REQ_TYPE","internal-error"),e(c)(z,"EMAIL_NOT_FOUND","user-not-found"),e(c)(z,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(c)(z,"EXPIRED_OOB_CODE","expired-action-code"),e(c)(z,"INVALID_OOB_CODE","invalid-action-code"),e(c)(z,"MISSING_OOB_CODE","internal-error"),e(c)(z,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(c)(z,"INVALID_ID_TOKEN","invalid-user-token"),e(c)(z,"TOKEN_EXPIRED","user-token-expired"),e(c)(z,"USER_NOT_FOUND","user-token-expired"),e(c)(z,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(c)(z,"PASSWORD_DOES_NOT_MEET_REQUIREMENTS","password-does-not-meet-requirements"),e(c)(z,"INVALID_CODE","invalid-verification-code"),e(c)(z,"INVALID_SESSION_INFO","invalid-verification-id"),e(c)(z,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(c)(z,"MISSING_SESSION_INFO","missing-verification-id"),e(c)(z,"SESSION_EXPIRED","code-expired"),e(c)(z,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(c)(z,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(c)(z,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(c)(z,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(c)(z,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(c)(z,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(c)(z,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(c)(z,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(c)(z,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(c)(z,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(c)(z,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),e(c)(z,"RECAPTCHA_NOT_ENABLED","recaptcha-not-enabled"),e(c)(z,"MISSING_RECAPTCHA_TOKEN","missing-recaptcha-token"),e(c)(z,"INVALID_RECAPTCHA_TOKEN","invalid-recaptcha-token"),e(c)(z,"INVALID_RECAPTCHA_ACTION","invalid-recaptcha-action"),e(c)(z,"MISSING_CLIENT_TYPE","missing-client-type"),e(c)(z,"MISSING_RECAPTCHA_VERSION","missing-recaptcha-version"),e(c)(z,"INVALID_RECAPTCHA_VERSION","invalid-recaptcha-version"),e(c)(z,"INVALID_REQ_TYPE","invalid-req-type"),z),q=new j(3e4,6e4);function K(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function G(e,t,n,r){return Q.apply(this,arguments)}function Q(){return Q=e(o)(e(y).mark((function t(n,r,i,a){var s,u=arguments;return e(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:{},t.abrupt("return",X(n,s,e(o)(e(y).mark((function t(){var o,s,u,c;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===r?s=a:o={body:JSON.stringify(a)}),u=(0,m.querystring)(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",H.fetch()(Z(n,n.config.apiHost,i,u),Object.assign({method:r,headers:c,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),Q.apply(this,arguments)}function X(e,t,n){return Y.apply(this,arguments)}function Y(){return(Y=e(o)(e(y).mark((function t(n,r,i){var a,o,s,u,c,l,f,h,p;return e(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},W),r),t.prev=2,o=new ee(n),t.next=6,Promise.race([i(),o.promise]);case 6:return s=t.sent,o.clearNetworkTimeout(),t.next=10,s.json();case 10:if(!("needConfirmation"in(u=t.sent))){t.next=13;break}throw te(n,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){t.next=17;break}return t.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=e(d)(c.split(" : "),2),f=l[0],h=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){t.next=23;break}throw te(n,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==f){t.next=27;break}throw te(n,"email-already-in-use",u);case 27:if("USER_DISABLED"!==f){t.next=29;break}throw te(n,"user-disabled",u);case 29:if(p=a[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!h){t.next=34;break}throw D(n,p,h);case 34:N(n,p);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof m.FirebaseError)){t.next=41;break}throw t.t0;case 41:N(n,"network-request-failed",{message:String(t.t0)});case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function J(e,t,n,r){return $.apply(this,arguments)}function $(){return $=e(o)(e(y).mark((function t(n,r,i,a){var o,s,u=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,G(n,r,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&N(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),t)}))),$.apply(this,arguments)}function Z(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?B(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var ee=function(){"use strict";function t(n){var r=this;e(s)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(O(n.auth,"network-request-failed"))}),q.get())}))}return e(u)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function te(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=O(e,t,r);return i.customData._tokenResponse=n,i}function ne(e,t){return re.apply(this,arguments)}function re(){return(re=e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(n,"GET","/v2/recaptchaConfig",K(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ie(e,t){return ae.apply(this,arguments)}function ae(){return(ae=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function oe(e,t){return se.apply(this,arguments)}function se(){return(se=e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(){return ce=e(o)(e(y).mark((function t(n){var r,i,a,o,s,u,c=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],i=(0,m.getModularInstance)(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,P((o=fe(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:ue(le(o.auth_time)),issuedAtTime:ue(le(o.iat)),expirationTime:ue(le(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),ce.apply(this,arguments)}function le(e){return 1e3*Number(e)}function fe(t){var n=e(d)(t.split("."),3),r=n[0],i=n[1],a=n[2];if(void 0===r||void 0===i||void 0===a)return A("JWT malformed, contained fewer than 3 sections"),null;try{var o=(0,m.base64Decode)(i);return o?JSON.parse(o):(A("Failed to decode base64 JWT payload"),null)}catch(e){return A("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function he(e,t){return de.apply(this,arguments)}function de(){return de=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(y).mark((function t(n,r){var i=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof m.FirebaseError&&pe(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),de.apply(this,arguments)}function pe(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve=function(){"use strict";function t(n){e(s)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(u)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(o)(e(y).mark((function t(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(o)(e(y).mark((function n(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.user.getIdToken(!0);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&t.schedule(!0),e.abrupt("return");case 9:t.schedule();case 10:case"end":return e.stop()}}),n,null,[[0,5]])})))()}}]),t}(),ye=function(){"use strict";function t(n,r){e(s)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(u)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=ue(this.lastLoginAt),this.creationTime=ue(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){return ge.apply(this,arguments)}function ge(){return(ge=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(y).mark((function t(n){var r,i,a,o,s,u,c,l,f,h,d;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,he(n,oe(i,{idToken:a}));case 7:P(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],n._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?be(s.providerUserInfo):[],c=we(n.providerData,u),l=n.isAnonymous,f=!(n.email&&s.passwordHash||(null==c?void 0:c.length)),h=!!l&&f,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new ye(s.createdAt,s.lastLoginAt),isAnonymous:h},Object.assign(n,d);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ke(){return(ke=e(o)(e(y).mark((function t(n){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,m.getModularInstance)(n),e.next=3,me(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function we(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(p)(r).concat(e(p)(n))}function be(e){return e.map((function(e){var t=e.providerId,n=(0,w.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function xe(e,t){return _e.apply(this,arguments)}function _e(){return(_e=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(y).mark((function t(n,r){var i;return e(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X(n,{},e(o)(e(y).mark((function t(){var i,a,o,s,u,c;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,m.querystring)({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,o=a.tokenApiHost,s=a.apiKey,u=Z(n,o,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",H.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee=function(){"use strict";function t(){e(s)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(u)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){P(e.idToken,"internal-error"),P(void 0!==e.idToken,"internal-error"),P(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,P(n=fe(t),"internal-error"),P(void 0!==n.exp,"internal-error"),P(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(o)(e(y).mark((function i(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(P(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(o)(e(y).mark((function i(){var a,o,s,u;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,xe(t,n);case 2:a=e.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,r.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return L("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new t;return r&&(P("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),i&&(P("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),a&&(P("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t){P("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Te=function(){"use strict";function t(n){e(s)(this,t);var r=n.uid,i=n.auth,a=n.stsTokenManager,o=(0,w.__rest)(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ve(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?e(p)(o.providerData):[],this.metadata=new ye(o.createdAt||void 0,o.lastLoginAt||void 0)}return e(u)(t,[{key:"getIdToken",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(P(i=e.sent,n.auth,"internal-error"),n.accessToken===i){e.next=9;break}return n.accessToken=i,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return ce.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return ke.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){var n=new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}},{key:"_onReload",value:function(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(o)(e(y).mark((function i(){var a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),a=!0),!n){e.next=5;break}return e.next=5,me(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(o)(e(y).mark((function n(){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,he(t,ie(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,i,a,o,s,u,c,l,f=null!==(r=n.displayName)&&void 0!==r?r:void 0,h=null!==(i=n.email)&&void 0!==i?i:void 0,d=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,p=null!==(o=n.photoURL)&&void 0!==o?o:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,y=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,m=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,k=n.uid,w=n.emailVerified,b=n.isAnonymous,x=n.providerData,_=n.stsTokenManager;P(k&&_,e,"internal-error");var E=Ee.fromJSON(this.name,_);P("string"==typeof k,e,"internal-error"),Ie(f,e.name),Ie(h,e.name),P("boolean"==typeof w,e,"internal-error"),P("boolean"==typeof b,e,"internal-error"),Ie(d,e.name),Ie(p,e.name),Ie(v,e.name),Ie(y,e.name),Ie(m,e.name),Ie(g,e.name);var I=new t({uid:k,auth:e,email:h,emailVerified:w,displayName:f,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:v,stsTokenManager:E,createdAt:m,lastLoginAt:g});return x&&Array.isArray(x)&&(I.providerData=x.map((function(e){return Object.assign({},e)}))),y&&(I._redirectEventId=y),I}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(o)(e(y).mark((function a(){var o,s;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new Ee).updateFromServerResponse(r),s=new t({uid:r.localId,auth:n,stsTokenManager:o,isAnonymous:i}),e.next=5,me(s);case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),Se=new Map;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e){M(e instanceof Function,"Expected a class definition");var t=Se.get(e);return t?(M(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Se.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae=function(){"use strict";function t(){e(s)(this,t),this.type="NONE",this.storage={}}return e(u)(t,[{key:"_isAvailable",value:function(){return e(o)(e(y).mark((function t(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(o)(e(y).mark((function i(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(o)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();Ae.type="NONE";var Ne=Ae;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var De=function(){"use strict";function t(n,r,i){e(s)(this,t),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,u=a.name;this.fullUserKey=Oe(this.userKey,o.apiKey,u),this.fullPersistenceKey=Oe("persistence",o.apiKey,u),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(u)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(o)(e(y).mark((function n(){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?Te._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return i=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!i){e.next=10;break}return e.abrupt("return",n.setCurrentUser(i));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(o)(e(y).mark((function a(){var s,u,c,l,f,h,d,p,v,m,g,k,w;return e(y).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.length){a.next=2;break}return a.abrupt("return",new t(Ce(Ne),n,i));case 2:return a.next=4,Promise.all(r.map(function(){var t=e(o)(e(y).mark((function t(n){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:s=a.sent.filter((function(e){return e})),u=s[0]||Ce(Ne),c=Oe(i,n.config.apiKey,n.name),l=null,f=!0,h=!1,d=void 0,a.prev=9,p=r[Symbol.iterator]();case 11:if(f=(v=p.next()).done){a.next=29;break}return m=v.value,a.prev=13,a.next=16,m._get(c);case 16:if(!(g=a.sent)){a.next=22;break}return k=Te._fromJSON(n,g),m!==u&&(l=k),u=m,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:f=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),h=!0,d=a.t1;case 35:a.prev=35,a.prev=36,f||null==p.return||p.return();case 38:if(a.prev=38,!h){a.next=41;break}throw d;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(w=s.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&w.length){a.next=46;break}return a.abrupt("return",new t(u,n,i));case 46:if(u=w[0],!l){a.next=50;break}return a.next=50,u._set(c,l.toJSON());case 50:return a.next=52,Promise.all(r.map(function(){var t=e(o)(e(y).mark((function t(n){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===u){e.next=8;break}return e.prev=1,e.next=4,n._remove(c);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return a.abrupt("return",new t(u,n,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ue(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Pe(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ve(t))return"Blackberry";if(je(t))return"Webos";if(Le(t))return"Safari";if((t.includes("chrome/")||Me(t))&&!t.includes("edge/"))return"Chrome";if(Fe(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/firefox\//i.test(e)}function Le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/crios\//i.test(e)}function Ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/iemobile/i.test(e)}function Fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/android/i.test(e)}function Ve(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/blackberry/i.test(e)}function je(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/webos/i.test(e)}function Be(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ze(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return Be(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function He(){return(0,m.isIE)()&&10===document.documentMode}function We(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,m.getUA)();return Be(e)||Fe(e)||je(e)||Ve(e)||/windows phone/i.test(e)||Ue(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qe(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Re((0,m.getUA)());break;case"Worker":t="".concat(Re((0,m.getUA)()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(g.SDK_VERSION,"/").concat(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke=function(){"use strict";function t(n){e(s)(this,t),this.auth=n,this.queue=[]}return e(u)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i,a,o,s,u,c,l,f,h,d,p,v,m;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=2;break}return e.abrupt("return");case 2:i=[],e.prev=3,a=!0,o=!1,s=void 0,e.prev=5,u=n.queue[Symbol.iterator]();case 7:if(a=(c=u.next()).done){e.next=15;break}return l=c.value,e.next=11,l(t);case 11:l.onAbort&&i.push(l.onAbort);case 12:a=!0,e.next=7;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),o=!0,s=e.t0;case 21:e.prev=21,e.prev=22,a||null==u.return||u.return();case 24:if(e.prev=24,!o){e.next=27;break}throw s;case 27:return e.finish(24);case 28:return e.finish(21);case 29:e.next=52;break;case 31:for(e.prev=31,e.t1=e.catch(3),i.reverse(),f=!0,h=!1,d=void 0,e.prev=35,p=i[Symbol.iterator]();!(f=(v=p.next()).done);f=!0){m=v.value;try{m()}catch(e){}}e.next=43;break;case 39:e.prev=39,e.t2=e.catch(35),h=!0,d=e.t2;case 43:e.prev=43,e.prev=44,f||null==p.return||p.return();case 46:if(e.prev=46,!h){e.next=49;break}throw d;case 49:return e.finish(46);case 50:return e.finish(43);case 51:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===e.t1||void 0===e.t1?void 0:e.t1.message});case 52:case"end":return e.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),t}();function Ge(e){return Qe.apply(this,arguments)}function Qe(){return Qe=
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(y).mark((function t(n){var r,i=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",G(n,"GET","/v2/passwordPolicy",K(n,r)));case 2:case"end":return e.stop()}}),t)}))),Qe.apply(this,arguments)}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe=function(){"use strict";function t(n){var r,i,a,o;e(s)(this,t);var u=n.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(r=u.minPasswordLength)&&void 0!==r?r:6,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),void 0!==u.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),void 0!==u.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),void 0!==u.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),void 0!==u.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=n.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(a=null===(i=n.allowedNonAlphanumericCharacters)||void 0===i?void 0:i.join(""))&&void 0!==a?a:"",this.forceUpgradeOnSignin=null!==(o=n.forceUpgradeOnSignin)&&void 0!==o&&o,this.schemaVersion=n.schemaVersion}return e(u)(t,[{key:"validatePassword",value:function(e){var t,n,r,i,a,o,s={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,s),this.validatePasswordCharacterOptions(e,s),s.isValid&&(s.isValid=null===(t=s.meetsMinPasswordLength)||void 0===t||t),s.isValid&&(s.isValid=null===(n=s.meetsMaxPasswordLength)||void 0===n||n),s.isValid&&(s.isValid=null===(r=s.containsLowercaseLetter)||void 0===r||r),s.isValid&&(s.isValid=null===(i=s.containsUppercaseLetter)||void 0===i||i),s.isValid&&(s.isValid=null===(a=s.containsNumericCharacter)||void 0===a||a),s.isValid&&(s.isValid=null===(o=s.containsNonAlphanumericCharacter)||void 0===o||o),s}},{key:"validatePasswordLengthOptions",value:function(e,t){var n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}},{key:"validatePasswordCharacterOptions",value:function(e,t){var n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(var r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}},{key:"updatePasswordCharacterOptionsStatuses",value:function(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}]),t}(),Ye=function(){"use strict";function t(n,r,i,a){e(s)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $e(this),this.idTokenSubscription=new $e(this),this.beforeStateQueue=new Ke(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=T,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=a.sdkClientVersion}return e(u)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=Ce(n));var r=this;return this._initializationPromise=this.queue(e(o)(e(y).mark((function i(){var a,o;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,De.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(o)(e(y).mark((function n(){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i,a,o,s,u,c,l;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,o=a,s=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==o?void 0:o._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:l=e.sent,u&&u!==c||!(null==l?void 0:l.user)||(o=l.user,s=!0);case 15:if(o){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(o._redirectEventId){e.next=33;break}if(!s){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(o);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),o=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!o){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return P(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==o._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(o));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(o)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,me(t);case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)){e.next=9;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 9:return e.abrupt("return",n.directlySetCurrentUser(t));case 10:case"end":return e.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(o)(e(y).mark((function n(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?(0,m.getModularInstance)(t):null)&&P(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(o)(e(y).mark((function i(){return e(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&P(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",r.queue(e(o)(e(y).mark((function n(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(o)(e(y).mark((function n(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(o)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(Ce(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"_getRecaptchaConfig",value:function(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}},{key:"validatePassword",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n._getPasswordPolicyInternal()){e.next=3;break}return e.next=3,n._updatePasswordPolicy();case 3:if((i=n._getPasswordPolicyInternal()).schemaVersion===n.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION){e.next=6;break}return e.abrupt("return",Promise.reject(n._errorFactory.create("unsupported-password-policy-schema-version",{})));case 6:return e.abrupt("return",i.validatePassword(t));case 7:case"end":return e.stop()}}),r)})))()}},{key:"_getPasswordPolicyInternal",value:function(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}},{key:"_updatePasswordPolicy",value:function(){var t=this;return e(o)(e(y).mark((function n(){var r,i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ge(t);case 2:r=e.sent,i=new Xe(r),null===t.tenantId?t._projectPasswordPolicy=i:t._tenantPasswordPolicies[t.tenantId]=i;case 5:case"end":return e.stop()}}),n)})))()}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new(0,m.ErrorFactory)("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"authStateReady",value:function(){var e=this;return new Promise((function(t,n){if(e.currentUser)t();else var r=e.onAuthStateChanged((function(){r(),t()}),n)}))}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(o)(e(y).mark((function i(){var a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return P(i=t&&Ce(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,De.create(n,[Ce(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i,a;return e(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(o)(e(y).mark((function t(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(a=n.redirectUser)||void 0===a?void 0:a._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(o)(e(y).mark((function r(){return e(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(o)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=!1,s=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(s,this,"internal-error"),s.then((function(){o||a(i.currentUser)})),"function"==typeof t){var u=e.addObserver(t,n,r);return function(){o=!0,u()}}var c=e.addObserver(t);return function(){o=!0,c()}}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(o)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh(),n.currentUser=t,!t){e.next=8;break}return e.next=6,n.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qe(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(o)(e(y).mark((function n(){var r,i,a,o;return e(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e(c)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.next=9,t._getAppCheckToken();case 9:return(o=n.sent)&&(i["X-Firebase-AppCheck"]=o),n.abrupt("return",i);case 12:case"end":return n.stop()}}),n)})))()}},{key:"_getAppCheckToken",value:function(){var t=this;return e(o)(e(y).mark((function n(){var r,i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,null===(r=t.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getToken();case 3:return(null==(i=e.sent)?void 0:i.error)&&C("Error while retrieving App Check token: ".concat(i.error)),e.abrupt("return",null==i?void 0:i.token);case 6:case"end":return e.stop()}}),n)})))()}}]),t}();function Je(e){return(0,m.getModularInstance)(e)}var $e=function(){"use strict";function t(n){var r=this;e(s)(this,t),this.auth=n,this.observer=null,this.addObserver=(0,m.createSubscribe)((function(e){return r.observer=e}))}return e(u)(t,[{key:"next",get:function(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=O("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function et(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}var tt="https://www.google.com/recaptcha/enterprise.js?render=",nt="NO_RECAPTCHA",rt=function(){"use strict";function t(n){e(s)(this,t),this.type="recaptcha-enterprise",this.auth=Je(n)}return e(u)(t,[{key:"verify",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"verify",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(o)(e(y).mark((function i(){var a,s,u;return e(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return a=function(e){return s.apply(this,arguments)},s=function(){return s=e(o)(e(y).mark((function t(r){return e(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=5;break}if(null!=r.tenantId||null==r._agentRecaptchaConfig){t.next=3;break}return t.abrupt("return",r._agentRecaptchaConfig.siteKey);case 3:if(null==r.tenantId||void 0===r._tenantRecaptchaConfigs[r.tenantId]){t.next=5;break}return t.abrupt("return",r._tenantRecaptchaConfigs[r.tenantId].siteKey);case 5:return t.abrupt("return",new Promise(function(){var t=e(o)(e(y).mark((function t(n,i){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ne(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((function(e){if(void 0!==e.recaptchaKey){var t=new _(e);return null==r.tenantId?r._agentRecaptchaConfig=t:r._tenantRecaptchaConfigs[r.tenantId]=t,n(t.siteKey)}i(new Error("recaptcha Enterprise site key undefined"))})).catch((function(e){i(e)}));case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()));case 6:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)},u=function(e,n,r){var i=window.grecaptcha;x(i)?i.enterprise.ready((function(){i.enterprise.execute(e,{action:t}).then((function(e){n(e)})).catch((function(){n(nt)}))})):r(Error("No reCAPTCHA enterprise script loaded."))},i.abrupt("return",new Promise((function(e,t){a(r.auth).then((function(r){if(!n&&x(window.grecaptcha))u(r,e,t);else{if("undefined"==typeof window)return void t(new Error("RecaptchaVerifier is only supported in browser"));Ze(tt+r).then((function(){u(r,e,t)})).catch((function(e){t(e)}))}})).catch((function(e){t(e)}))})));case 7:case"end":return i.stop()}}),i)})))()}}]),t}();function it(e,t,n){return at.apply(this,arguments)}function at(){return at=e(o)(e(y).mark((function t(n,r,i){var a,o,s,u,c=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>3&&void 0!==c[3]&&c[3],o=new rt(n),e.prev=3,e.next=6,o.verify(i);case 6:s=e.sent,e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(3),e.next=13,o.verify(i,!0);case 13:s=e.sent;case 14:return u=Object.assign({},r),a?Object.assign(u,{captchaResp:s}):Object.assign(u,{captchaResponse:s}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),e.abrupt("return",u);case 19:case"end":return e.stop()}}),t,null,[[3,9]])}))),at.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ot(e,t){var n=(0,g._getProvider)(e,"auth");if(n.isInitialized()){var r=n.getImmediate(),i=n.getOptions();if((0,m.deepEqual)(i,null!=t?t:{}))return r;N(r,"already-initialized")}return n.initialize({options:t})}function st(t,n,r){var i=Je(t);P(i._canInitEmulator,i,"emulator-config-failed"),P(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=ut(n),s=function(t){var n=ut(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:ct(i.substr(o.length+1))}}var s=e(d)(i.split(":"),2);return{host:s[0],port:ct(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function ut(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ct(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var lt=function(){"use strict";function t(n,r){e(s)(this,t),this.providerId=n,this.signInMethod=r}return e(u)(t,[{key:"toJSON",value:function(){return L("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return L("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return L("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return L("not implemented")}}]),t}();function ft(e,t){return ht.apply(this,arguments)}function ht(){return(ht=e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function dt(e,t){return pt.apply(this,arguments)}function pt(){return(pt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J(n,"POST","/v1/accounts:signInWithPassword",K(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function vt(e,t){return yt.apply(this,arguments)}function yt(){return(yt=e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(n,"POST","/v1/accounts:sendOobCode",K(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function mt(e,t){return gt.apply(this,arguments)}function gt(){return(gt=e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",vt(n,r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function kt(e,t){return wt.apply(this,arguments)}function wt(){return(wt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J(n,"POST","/v1/accounts:signInWithEmailLink",K(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function bt(e,t){return xt.apply(this,arguments)}function xt(){return(xt=e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J(n,"POST","/v1/accounts:signInWithEmailLink",K(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t=function(t){"use strict";e(h)(r,t);var n=e(v)(r);function r(t,i,a){var o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(s)(this,r),(o=n.call(this,"password",a))._email=t,o._password=i,o._tenantId=u,o}return e(u)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i,a,s;return e(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.t0=n.signInMethod,r.next="password"===r.t0?4:"emailLink"===r.t0?13:14;break;case 4:if(a={returnSecureToken:!0,email:n._email,password:n._password,clientType:"CLIENT_TYPE_WEB"},!(null===(i=t._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled)){r.next=12;break}return r.next=8,it(t,a,"signInWithPassword");case 8:return s=r.sent,r.abrupt("return",dt(t,s));case 12:return r.abrupt("return",dt(t,a).catch(function(){var n=e(o)(e(y).mark((function n(r){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("auth/missing-recaptcha-token"!==r.code){e.next=8;break}return console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow."),e.next=4,it(t,a,"signInWithPassword");case 4:return i=e.sent,e.abrupt("return",dt(t,i));case 8:return e.abrupt("return",Promise.reject(r));case 9:case"end":return e.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 13:return r.abrupt("return",kt(t,{email:n._email,oobCode:n._password}));case 14:N(t,"internal-error");case 15:case"end":return r.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(o)(e(y).mark((function i(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",ft(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",bt(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:N(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(lt);function Et(e,t){return It.apply(this,arguments)}function It(){return(It=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J(n,"POST","/v1/accounts:signInWithIdp",K(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tt=function(t){"use strict";e(h)(r,t);var n=e(v)(r);function r(){var t;return e(s)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(u)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Et(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,Et(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Et(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,m.querystring)(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):N("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=(0,w.__rest)(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(lt);function St(e,t){return Ct.apply(this,arguments)}function Ct(){return(Ct=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(n,"POST","/v1/accounts:sendVerificationCode",K(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function At(){return(At=e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J(n,"POST","/v1/accounts:signInWithPhoneNumber",K(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Nt(){return(Nt=e(o)(e(y).mark((function t(n,r){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(n,"POST","/v1/accounts:signInWithPhoneNumber",K(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw te(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Ot=e(c)({},"USER_NOT_FOUND","user-not-found");function Dt(){return(Dt=e(o)(e(y).mark((function t(n,r){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",J(n,"POST","/v1/accounts:signInWithPhoneNumber",K(n,i),Ot));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt=function(t){"use strict";e(h)(r,t);var n=e(v)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this,"phone","phone")).params=t,i}return e(u)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return At.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Nt.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Dt.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(lt);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt=function(){"use strict";function t(n){var r,i,a,o,u,c;e(s)(this,t);var l=(0,m.querystringDecode)((0,m.extractQuerystring)(n)),f=null!==(r=l.apiKey)&&void 0!==r?r:null,h=null!==(i=l.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);P(f&&h&&d,"argument-error"),this.apiKey=f,this.operation=d,this.code=h,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return e(u)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=(0,m.querystringDecode)((0,m.extractQuerystring)(e)).link,n=t?(0,m.querystringDecode)((0,m.extractQuerystring)(t)).deep_link_id:null,r=(0,m.querystringDecode)((0,m.extractQuerystring)(e)).deep_link_id;return(r?(0,m.querystringDecode)((0,m.extractQuerystring)(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Lt=function(){"use strict";function t(){e(s)(this,t),this.providerId=t.PROVIDER_ID}return e(u)(t,null,[{key:"credential",value:function(e,t){return _t._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=Pt.parseLink(t);return P(n,"argument-error"),_t._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();Lt.PROVIDER_ID="password",Lt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Lt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mt=function(){"use strict";function t(n){e(s)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(u)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),Ut=function(t){"use strict";e(h)(r,t);var n=e(v)(r);function r(){var t;return e(s)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(u)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(p)(this.scopes)}}]),r}(Mt),Ft=function(t){"use strict";e(h)(r,t);var n=e(v)(r);function r(){return e(s)(this,r),n.call(this,"facebook.com")}return e(u)(r,null,[{key:"credential",value:function(e){return Tt._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Ut);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ft.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Vt=function(t){"use strict";e(h)(r,t);var n=e(v)(r);function r(){var t;return e(s)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(u)(r,null,[{key:"credential",value:function(e,t){return Tt._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Ut);Vt.GOOGLE_SIGN_IN_METHOD="google.com",Vt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var jt=function(t){"use strict";e(h)(r,t);var n=e(v)(r);function r(){return e(s)(this,r),n.call(this,"github.com")}return e(u)(r,null,[{key:"credential",value:function(e){return Tt._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Ut);jt.GITHUB_SIGN_IN_METHOD="github.com",jt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Bt=function(t){"use strict";e(h)(r,t);var n=e(v)(r);function r(){return e(s)(this,r),n.call(this,"twitter.com")}return e(u)(r,null,[{key:"credential",value:function(e,t){return Tt._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Ut);function zt(e,t){return Ht.apply(this,arguments)}function Ht(){return(Ht=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J(n,"POST","/v1/accounts:signUp",K(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt.TWITTER_SIGN_IN_METHOD="twitter.com",Bt.PROVIDER_ID="twitter.com";var Wt=function(){"use strict";function t(n){e(s)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(u)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(o)(e(y).mark((function o(){var s,u,c;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Te._fromIdTokenResponse(n,i,a);case 2:return s=e.sent,u=qt(i),c=new t({user:s,providerId:u,_tokenResponse:i,operationType:r}),e.abrupt("return",c);case 6:case"end":return e.stop()}}),o)})))()}},{key:"_forOperation",value:function(n,r,i){return e(o)(e(y).mark((function a(){var o;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(i,!0);case 2:return o=qt(i),e.abrupt("return",new t({user:n,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function qt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Kt=function(t){"use strict";e(h)(r,t);var n=e(v)(r);function r(t,a,o,u){var c,l;return e(s)(this,r),(c=n.call(this,a.code,a.message)).operationType=o,c.user=u,Object.setPrototypeOf(e(i)(c),r.prototype),c.customData={appName:t.name,tenantId:null!==(l=t.tenantId)&&void 0!==l?l:void 0,_serverResponse:a.customData._serverResponse,operationType:o},c}return e(u)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(m.FirebaseError);function Gt(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw Kt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e,t){return Xt.apply(this,arguments)}function Xt(){return Xt=e(o)(e(y).mark((function t(n,r){var i,a,o=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=he,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",Wt._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),t)}))),Xt.apply(this,arguments)}function Yt(e,t){return Jt.apply(this,arguments)}function Jt(){return Jt=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(y).mark((function t(n,r){var i,a,o,s,u,c,l=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=n.auth,o="reauthenticate",e.prev=3,e.next=6,he(n,Gt(a,o,r,n),i);case 6:return P((s=e.sent).idToken,a,"internal-error"),P(u=fe(s.idToken),a,"internal-error"),c=u.sub,P(n.uid===c,a,"user-mismatch"),e.abrupt("return",Wt._forOperation(n,o,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&N(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),t,null,[[3,15]])}))),Jt.apply(this,arguments)}function $t(e,t){return Zt.apply(this,arguments)}function Zt(){return Zt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(y).mark((function t(n,r){var i,a,o,s,u=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,Gt(n,a,r);case 4:return o=e.sent,e.next=7,Wt._fromIdTokenResponse(n,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)}))),Zt.apply(this,arguments)}function en(e,t){return tn.apply(this,arguments)}function tn(){return(tn=e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",$t(Je(n),r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nn(e,t,n){var r;P((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),P(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(P(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(P(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}function rn(e){return an.apply(this,arguments)}function an(){return(an=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(y).mark((function t(n){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=Je(n))._getPasswordPolicyInternal()){e.next=4;break}return e.next=4,r._updatePasswordPolicy();case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function on(e,t,n){return sn.apply(this,arguments)}function sn(){return sn=e(o)(e(y).mark((function t(n,r,i){var a,s,u,c,l,f,h;return e(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=Je(n),u={returnSecureToken:!0,email:r,password:i,clientType:"CLIENT_TYPE_WEB"},!(null===(a=s._getRecaptchaConfig())||void 0===a?void 0:a.emailPasswordEnabled)){t.next=11;break}return t.next=7,it(s,u,"signUpPassword");case 7:l=t.sent,c=zt(s,l),t.next=12;break;case 11:c=zt(s,u).catch(function(){var t=e(o)(e(y).mark((function t(n){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("auth/missing-recaptcha-token"!==n.code){e.next=6;break}return console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow."),e.next=4,it(s,u,"signUpPassword");case 4:return r=e.sent,e.abrupt("return",zt(s,r));case 6:throw n;case 7:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 12:return t.next=14,c.catch((function(e){throw"auth/password-does-not-meet-requirements"===e.code&&rn(n),e}));case 14:return f=t.sent,t.next=17,Wt._fromIdTokenResponse(s,"signIn",f);case 17:return h=t.sent,t.next=20,s._updateCurrentUser(h.user);case 20:return t.abrupt("return",h);case 21:case"end":return t.stop()}}),t)}))),sn.apply(this,arguments)}function un(t,n,r){return en((0,m.getModularInstance)(t),Lt.credential(n,r)).catch((i=e(o)(e(y).mark((function n(r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw"auth/password-does-not-meet-requirements"===r.code&&rn(t),r;case 2:case"end":return e.stop()}}),n)}))),function(e){return i.apply(this,arguments)}));var i}function cn(e,t){return ln.apply(this,arguments)}function ln(){return(ln=e(o)(e(y).mark((function t(n,r){var i,a,o;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,m.getModularInstance)(n),e.next=3,n.getIdToken();case 3:return a=e.sent,o={requestType:"VERIFY_EMAIL",idToken:a},r&&nn(i.auth,o,r),e.next=8,mt(i.auth,o);case 8:if(e.sent.email===n.email){e.next=12;break}return e.next=12,n.reload();case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function fn(e,t){return hn.apply(this,arguments)}function hn(){return(hn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function dn(e,t){return pn.apply(this,arguments)}function pn(){return(pn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(y).mark((function t(n,r){var i,a,o,s,u,c,l;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.displayName,a=r.photoURL,void 0!==i||void 0!==a){e.next=3;break}return e.abrupt("return");case 3:return o=(0,m.getModularInstance)(n),e.next=6,o.getIdToken();case 6:return s=e.sent,u={idToken:s,displayName:i,photoUrl:a,returnSecureToken:!0},e.next=10,he(o,fn(o.auth,u));case 10:return c=e.sent,o.displayName=c.displayName||null,o.photoURL=c.photoUrl||null,(l=o.providerData.find((function(e){return"password"===e.providerId})))&&(l.displayName=o.displayName,l.photoURL=o.photoURL),e.next=17,o._updateTokensIfNecessary(c);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function vn(e,t,n,r){return(0,m.getModularInstance)(e).onIdTokenChanged(t,n,r)}function yn(e,t,n){return(0,m.getModularInstance)(e).beforeAuthStateChanged(t,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mn(e,t){return G(e,"POST","/v2/accounts/mfaEnrollment:start",K(e,t))}function gn(e,t){return G(e,"POST","/v2/accounts/mfaEnrollment:finalize",K(e,t))}new WeakMap;var kn="__sak",wn=function(){"use strict";function t(n,r){e(s)(this,t),this.storageRetriever=n,this.type=r}return e(u)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(kn,"1"),this.storage.removeItem(kn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bn=function(t){"use strict";e(h)(r,t);var n=e(v)(r);function r(){var t,i;return e(s)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(Le(i=(0,m.getUA)())||Be(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=We(),t._shouldAllowMigration=!0,t}return e(u)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);He()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var i=this,a=this;return e(o)(e(y).mark((function o(){return e(y).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(l)(e(f)(r.prototype),"_set",i).call(a,t,n);case 2:a.localCache[t]=JSON.stringify(n);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(t){var n=this,i=this;return e(o)(e(y).mark((function a(){var o;return e(y).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(l)(e(f)(r.prototype),"_get",n).call(i,t);case 2:return o=a.sent,i.localCache[t]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var n=this,i=this;return e(o)(e(y).mark((function a(){return e(y).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(l)(e(f)(r.prototype),"_remove",n).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(wn);bn.type="LOCAL";var xn=bn,_n=function(t){"use strict";e(h)(r,t);var n=e(v)(r);function r(){return e(s)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(u)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(wn);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n.type="SESSION";var En=_n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t){return Promise.all(t.map((n=e(o)(e(y).mark((function t(n){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tn=function(){"use strict";function t(n){e(s)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(u)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i,a,s,u,c,l,f,h;return e(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=(i=t).data,s=a.eventId,u=a.eventType,c=a.data,null==(l=n.handlersMap[u])?void 0:l.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:u}),f=Array.from(l).map(function(){var t=e(o)(e(y).mark((function t(n){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,c));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,In(f);case 9:h=r.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:h});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Sn(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn.receivers=[];var Cn=function(){"use strict";function t(n){e(s)(this,t),this.target=n,this.handlers=new Set}return e(u)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(o)(e(y).mark((function a(){var o,s,u;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var c=Sn("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);u={messageChannel:o,onMessage:function(t){var n=t;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),e(n.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:t,eventId:c,data:n},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return window}function Nn(e){An().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(){return void 0!==An().WorkerGlobalScope&&"function"==typeof An().importScripts}function Dn(){return Rn.apply(this,arguments)}function Rn(){return(Rn=e(o)(e(y).mark((function t(){var n;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Pn="firebaseLocalStorageDb",Ln="firebaseLocalStorage",Mn="fbase_key",Un=function(){"use strict";function t(n){e(s)(this,t),this.request=n}return e(u)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function Fn(e,t){return e.transaction([Ln],t?"readwrite":"readonly").objectStore(Ln)}function Vn(){var e=indexedDB.deleteDatabase(Pn);return new Un(e).toPromise()}function jn(){var t=indexedDB.open(Pn,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(Ln,{keyPath:Mn})}catch(e){r(e)}})),t.addEventListener("success",e(o)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(Ln)){e.next=12;break}return i.close(),e.next=5,Vn();case 5:return e.t0=n,e.next=8,jn();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(i);case 13:case"end":return e.stop()}}),r)}))))}))}function Bn(e,t,n){return zn.apply(this,arguments)}function zn(){return(zn=e(o)(e(y).mark((function t(n,r,i){var a,o;return e(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Fn(n,!0).put((a={},e(c)(a,Mn,r),e(c)(a,"value",i),a)),t.abrupt("return",new Un(o).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Hn(e,t){return Wn.apply(this,arguments)}function Wn(){return(Wn=e(o)(e(y).mark((function t(n,r){var i,a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Fn(n,!1).get(r),e.next=3,new Un(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function qn(e,t){var n=Fn(e,!0).delete(t);return new Un(n).toPromise()}var Kn=function(){"use strict";function t(){e(s)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(u)(t,[{key:"_openDb",value:function(){var t=this;return e(o)(e(y).mark((function n(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,jn();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i,a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(o)(e(y).mark((function n(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",On()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(o)(e(y).mark((function n(){return e(y).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=Tn._getInstance(On()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(o)(e(y).mark((function n(r,i){var a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(o)(e(y).mark((function t(n,r){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(o)(e(y).mark((function n(){var r,i,a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Dn();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new Cn(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(o)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(o)(e(y).mark((function t(){var n;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,jn();case 5:return n=e.sent,e.next=8,Bn(n,kn,"1");case 8:return e.next=10,qn(n,kn);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(o)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(o)(e(y).mark((function i(){return e(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(e(o)(e(y).mark((function i(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Bn(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Hn(e,t)}));case 2:return i=e.sent,n.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(o)(e(y).mark((function r(){return e(y).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(o)(e(y).mark((function r(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return qn(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(o)(e(y).mark((function n(){var r,i,a,o,s,u,c,l,f,h,d,p,v,m,g,k,w;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=Fn(e,!1).getAll();return new Un(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,e.prev=10,c=r[Symbol.iterator]();!(o=(l=c.next()).done);o=!0)f=l.value,h=f.fbase_key,d=f.value,a.add(h),JSON.stringify(t.localCache[h])!==JSON.stringify(d)&&(t.notifyListeners(h,d),i.push(h));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),s=!0,u=e.t0;case 18:e.prev=18,e.prev=19,o||null==c.return||c.return();case 21:if(e.prev=21,!s){e.next=24;break}throw u;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(p=!0,v=!1,m=void 0,e.prev=27,g=Object.keys(t.localCache)[Symbol.iterator]();!(p=(k=g.next()).done);p=!0)w=k.value,t.localCache[w]&&!a.has(w)&&(t.notifyListeners(w,null),i.push(w));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),v=!0,m=e.t1;case 35:e.prev=35,e.prev=36,p||null==g.return||g.return();case 38:if(e.prev=38,!v){e.next=41;break}throw m;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(o)(e(y).mark((function n(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();Kn.type="LOCAL";var Gn=Kn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(e,t){return G(e,"POST","/v2/accounts/mfaSignIn:start",K(e,t))}function Xn(e,t){return G(e,"POST","/v2/accounts/mfaSignIn:finalize",K(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
et("rcb"),new j(3e4,6e4);var Yn="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(e,t,n){return $n.apply(this,arguments)}function $n(){return($n=e(o)(e(y).mark((function t(n,r,i){var a,o,s,u,c,l,f,h;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,P("string"==typeof o,n,"argument-error"),P(i.type===Yn,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return P("enroll"===u.type,n,"internal-error"),e.next=15,mn(n,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return P("signin"===u.type,n,"internal-error"),P(l=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,Qn(n,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:o}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,St(n,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return h=e.sent.sessionInfo,e.abrupt("return",h);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Zn=function(){"use strict";function t(n){e(s)(this,t),this.providerId=t.PROVIDER_ID,this.auth=Je(n)}return e(u)(t,[{key:"verifyPhoneNumber",value:function(e,t){return Jn(this.auth,e,(0,m.getModularInstance)(t))}}],[{key:"credential",value:function(e,t){return Rt._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?Rt._fromTokenResponse(n,r):null}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function er(e,t){return t?Ce(t):(P(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn.PROVIDER_ID="phone",Zn.PHONE_SIGN_IN_METHOD="phone";var tr=function(t){"use strict";e(h)(r,t);var n=e(v)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this,"custom","custom")).params=t,i}return e(u)(r,[{key:"_getIdTokenResponse",value:function(e){return Et(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Et(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Et(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(lt);function nr(e){return $t(e.auth,new tr(e),e.bypassAuthState)}function rr(e){var t=e.auth,n=e.user;return P(n,t,"internal-error"),Yt(n,new tr(e),e.bypassAuthState)}function ir(e){return ar.apply(this,arguments)}function ar(){return(ar=e(o)(e(y).mark((function t(n){var r,i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,P(i=n.user,r,"internal-error"),e.abrupt("return",Qt(i,new tr(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var or=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(s)(this,t),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(u)(t,[{key:"execute",value:function(){var t,n=this;return new Promise((t=e(o)(e(y).mark((function t(r,i){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,n){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i,a,o,s,u,c,l;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,o=t.postBody,s=t.tenantId,u=t.error,c=t.type,!u){e.next=4;break}return n.reject(u),e.abrupt("return");case 4:return l={auth:n.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(c)(l);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nr;case"linkViaPopup":case"linkViaRedirect":return ir;case"reauthViaPopup":case"reauthViaRedirect":return rr;default:N(this.auth,"internal-error")}}},{key:"resolve",value:function(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),sr=new j(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ur=function(t){"use strict";e(h)(r,t);var n=e(v)(r);function r(t,a,o,u,c){var l;return e(s)(this,r),(l=n.call(this,t,a,u,c)).provider=o,l.authWindow=null,l.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(i)(l),l}return e(u)(r,[{key:"executeNotNull",value:function(){var t=this;return e(o)(e(y).mark((function n(){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return P(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(o)(e(y).mark((function n(){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(1===t.filter.length,"Popup operations only handle one event"),r=Sn(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(O(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(O(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(O(i.auth,"popup-closed-by-user"))}),8e3)}else e.pollId=window.setTimeout(t,sr.get())};t()}}]),r}(or);ur.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cr=new Map,lr=function(t){"use strict";e(h)(r,t);var n=e(v)(r);function r(t,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(s)(this,r),(a=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return e(u)(r,[{key:"execute",value:function(){var t=this,n=this;return e(o)(e(y).mark((function i(){var a,o;return e(y).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=cr.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,fr(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(l)(e(f)(r.prototype),"execute",t).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:cr.set(n.auth._key(),a);case 21:return n.bypassAuthState||cr.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,i=this,a=function(){return e(l)(e(f)(r.prototype),"onAuthEvent",n)};return e(o)(e(y).mark((function n(){var r;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",a().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return i.user=r,e.abrupt("return",a().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(o)(e(y).mark((function t(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(or);function fr(e,t){return hr.apply(this,arguments)}function hr(){return(hr=e(o)(e(y).mark((function t(n,r){var i,a,o;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=vr(r),a=pr(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function dr(e,t){cr.set(e._key(),t)}function pr(e){return Ce(e._redirectPersistence)}function vr(e){return Oe("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(e,t){return mr.apply(this,arguments)}function mr(){return mr=e(o)(e(y).mark((function t(n,r){var i,a,o,s,u,c=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=Je(n),o=er(a,r),s=new lr(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),t)}))),mr.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gr=function(){"use strict";function t(n){e(s)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(u)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wr(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!wr(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(O(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(kr(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(kr(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function kr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function wr(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function br(e){return xr.apply(this,arguments)}function xr(){return xr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(y).mark((function t(n){var r,i=arguments;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",G(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),xr.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _r=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Er=/^https?/;function Ir(){return(Ir=e(o)(e(y).mark((function t(n){var r,i,a,o,s,u,c;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,br(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!Tr(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:N(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Tr(e){var t=U(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!Er.test(r))return!1;if(_r.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sr=new j(3e4,6e4);function Cr(){var t=An().___jsl,n=!0,r=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,o=Object.keys(t.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(p)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var Ar=null;function Nr(e){return Ar=Ar||function(e){return new Promise((function(t,n){var r,i,a;function o(){Cr(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Cr(),n(O(e,"network-request-failed"))},timeout:Sr.get()})}if(null===(i=null===(r=An().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=An().gapi)||void 0===a?void 0:a.load)){var s=et("iframefcb");return An()[s]=function(){gapi.load?o():n(O(e,"network-request-failed"))},Ze("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw Ar=null,e}))}(e),Ar}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Or=new j(5e3,15e3),Dr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pr(e){var t=e.config;P(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?B(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:g.SDK_VERSION},i=Rr.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat((0,m.querystring)(r).slice(1))}function Lr(e){return Mr.apply(this,arguments)}function Mr(){return Mr=e(o)(e(y).mark((function t(n){var r,i;return e(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Nr(n);case 2:return r=t.sent,P(i=An().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:Pr(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dr,dontclear:!0},(function(t){return new Promise((r=e(o)(e(y).mark((function r(i,a){var o,s,u;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(){An().clearTimeout(s),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:o=O(n,"network-request-failed"),s=An().setTimeout((function(){a(o)}),Or.get()),t.ping(u).then(u,(function(){a(o)}));case 7:case"end":return e.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return t.stop()}}),t)}))),Mr.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ur={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fr="_blank",Vr="http://localhost",jr=function(){"use strict";function t(n){e(s)(this,t),this.window=n,this.associatedEvent=null}return e(u)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function Br(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Ur),{width:i.toString(),height:a.toString(),top:o,left:s}),l=(0,m.getUA)().toLowerCase();r&&(u=Me(l)?Fr:r),Pe(l)&&(n=n||Vr,c.scrollbars="yes");var f=Object.entries(c).reduce((function(t,n){var r=e(d)(n,2),i=r[0],a=r[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(ze(l)&&"_self"!==u)return zr(n||"",u),new jr(null);var h=window.open(n||"",u,f);P(h,t,"popup-blocked");try{h.focus()}catch(e){}return new jr(h)}function zr(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hr=encodeURIComponent("fac");function Wr(e,t,n,r,i,a){return qr.apply(this,arguments)}function qr(){return(qr=e(o)(e(y).mark((function t(n,r,i,a,o,s){var u,c,l,f,h,p,v,k,w,b,x,_,E,I,T,S,C,A,N;return e(y).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(P(n.config.authDomain,n,"auth-domain-config-required"),P(n.config.apiKey,n,"invalid-api-key"),u={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:a,v:g.SDK_VERSION,eventId:o},!(r instanceof Mt)){t.next=24;break}for(r.setDefaultLanguage(n.languageCode),u.providerId=r.providerId||"",(0,m.isEmpty)(r.getCustomParameters())||(u.customParameters=JSON.stringify(r.getCustomParameters())),c=!0,l=!1,f=void 0,t.prev=8,h=Object.entries(s||{})[Symbol.iterator]();!(c=(p=h.next()).done);c=!0)v=e(d)(p.value,2),k=v[0],w=v[1],u[k]=w;t.next=16;break;case 12:t.prev=12,t.t0=t.catch(8),l=!0,f=t.t0;case 16:t.prev=16,t.prev=17,c||null==h.return||h.return();case 19:if(t.prev=19,!l){t.next=22;break}throw f;case 22:return t.finish(19);case 23:return t.finish(16);case 24:for(r instanceof Ut&&(b=r.getScopes().filter((function(e){return""!==e}))).length>0&&(u.scopes=b.join(",")),n.tenantId&&(u.tid=n.tenantId),x=u,_=!0,E=!1,I=void 0,t.prev=28,T=Object.keys(x)[Symbol.iterator]();!(_=(S=T.next()).done);_=!0)C=S.value,void 0===x[C]&&delete x[C];t.next=36;break;case 32:t.prev=32,t.t1=t.catch(28),E=!0,I=t.t1;case 36:t.prev=36,t.prev=37,_||null==T.return||T.return();case 39:if(t.prev=39,!E){t.next=42;break}throw I;case 42:return t.finish(39);case 43:return t.finish(36);case 44:return t.next=46,n._getAppCheckToken();case 46:return A=t.sent,N=A?"#".concat(Hr,"=").concat(encodeURIComponent(A)):"",t.abrupt("return","".concat(Kr(n),"?").concat((0,m.querystring)(x).slice(1)).concat(N));case 49:case"end":return t.stop()}}),t,null,[[8,12,16,24],[17,,19,23],[28,32,36,44],[37,,39,43]])})))).apply(this,arguments)}function Kr(e){var t=e.config;return t.emulator?B(t,"emulator/auth/handler"):"https://".concat(t.authDomain,"/").concat("__/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gr="webStorageSupport",Qr=function(){"use strict";function t(){e(s)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=En,this._completeRedirectFn=yr,this._overrideRedirectResult=dr}return e(u)(t,[{key:"_openPopup",value:function(t,n,r,i){var a=this;return e(o)(e(y).mark((function o(){var s,u;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(null===(s=a.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),e.next=4,Wr(t,n,r,U(),i);case 4:return u=e.sent,e.abrupt("return",Br(t,u,Sn()));case 6:case"end":return e.stop()}}),o)})))()}},{key:"_openRedirect",value:function(t,n,r,i){var a=this;return e(o)(e(y).mark((function o(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a._originValidation(t);case 2:return e.next=4,Wr(t,n,r,U(),i);case 4:return Nn(e.sent),e.abrupt("return",new Promise((function(){})));case 7:case"end":return e.stop()}}),o)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(M(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i,a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Lr(t);case 2:return i=e.sent,a=new gr(t),i.register("authEvent",(function(e){return P(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:a},n.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Gr,{type:Gr},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),N(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Ir.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return We()||Le()||Be()}}]),t}(),Xr=Qr,Yr=function(){"use strict";function t(n){e(s)(this,t),this.factorId=n}return e(u)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return L("unexpected MultiFactorSessionType")}}}]),t}(),Jr=function(t){"use strict";e(h)(r,t);var n=e(v)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this,"phone")).credential=t,i}return e(u)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return G(e,"POST","/v2/accounts/mfaEnrollment:finalize",K(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return G(e,"POST","/v2/accounts/mfaSignIn:finalize",K(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(Yr);(function(){"use strict";function t(){e(s)(this,t)}return e(u)(t,null,[{key:"assertion",value:function(e){return Jr._fromCredential(e)}}]),t}()).FACTOR_ID="phone",(function(){"use strict";function t(){e(s)(this,t)}return e(u)(t,null,[{key:"assertionForEnrollment",value:function(e,t){return $r._fromSecret(e,t)}},{key:"assertionForSignIn",value:function(e,t){return $r._fromEnrollmentId(e,t)}},{key:"generateSecret",value:function(t){return e(o)(e(y).mark((function n(){var r,i,a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(void 0!==(null===(r=(i=t).user)||void 0===r?void 0:r.auth),"internal-error"),e.next=5,n=i.user.auth,o={idToken:i.credential,totpEnrollmentInfo:{}},G(n,"POST","/v2/accounts/mfaEnrollment:start",K(n,o));case 5:return a=e.sent,e.abrupt("return",Zr._fromStartTotpMfaEnrollmentResponse(a,i.user.auth));case 7:case"end":return e.stop()}var n,o}),n)})))()}}]),t}()).FACTOR_ID="totp";var $r=function(t){"use strict";e(h)(r,t);var n=e(v)(r);function r(t,i,a){var o;return e(s)(this,r),(o=n.call(this,"totp")).otp=t,o.enrollmentId=i,o.secret=a,o}return e(u)(r,[{key:"_finalizeEnroll",value:function(t,n,r){var i=this;return e(o)(e(y).mark((function a(){return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(void 0!==i.secret,t,"argument-error"),e.abrupt("return",gn(t,{idToken:n,displayName:r,totpVerificationInfo:i.secret._makeTotpVerificationInfo(i.otp)}));case 2:case"end":return e.stop()}}),a)})))()}},{key:"_finalizeSignIn",value:function(t,n){var r=this;return e(o)(e(y).mark((function i(){var a;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(void 0!==r.enrollmentId&&void 0!==r.otp,t,"argument-error"),a={verificationCode:r.otp},e.abrupt("return",Xn(t,{mfaPendingCredential:n,mfaEnrollmentId:r.enrollmentId,totpVerificationInfo:a}));case 3:case"end":return e.stop()}}),i)})))()}}],[{key:"_fromSecret",value:function(e,t){return new r(t,void 0,e)}},{key:"_fromEnrollmentId",value:function(e,t){return new r(t,e)}}]),r}(Yr),Zr=function(){"use strict";function t(n,r,i,a,o,u,c){e(s)(this,t),this.sessionInfo=u,this.auth=c,this.secretKey=n,this.hashingAlgorithm=r,this.codeLength=i,this.codeIntervalSeconds=a,this.enrollmentCompletionDeadline=o}return e(u)(t,[{key:"_makeTotpVerificationInfo",value:function(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}},{key:"generateQrCodeUrl",value:function(e,t){var n,r=!1;return(ei(e)||ei(t))&&(r=!0),r&&(ei(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),ei(t)&&(t=this.auth.name)),"otpauth://totp/".concat(t,":").concat(e,"?secret=").concat(this.secretKey,"&issuer=").concat(t,"&algorithm=").concat(this.hashingAlgorithm,"&digits=").concat(this.codeLength)}}],[{key:"_fromStartTotpMfaEnrollmentResponse",value:function(e,n){return new t(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}}]),t}();function ei(e){return void 0===e||0===(null==e?void 0:e.length)}var ti="@firebase/auth",ni="1.3.0",ri=function(){"use strict";function t(n){e(s)(this,t),this.auth=n,this.internalListeners=new Map}return e(u)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(o)(e(y).mark((function r(){var i;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ii,ai=(0,m.getExperimentalSetting)("authIdTokenMaxAge")||300,oi=null,si=function(t){return n=e(o)(e(y).mark((function n(r){var i,a,o;return e(y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,!e.t0){e.next=5;break}return e.next=4,r.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(i=e.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>ai)){e.next=9;break}return e.abrupt("return");case 9:if(o=null==i?void 0:i.token,oi!==o){e.next=12;break}return e.abrupt("return");case 12:return oi=o,e.next=15,fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};function ui(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getApp)(),t=(0,g._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();var n=ot(e,{popupRedirectResolver:Xr,persistence:[Gn,xn,En]}),r=(0,m.getExperimentalSetting)("authTokenSyncURL");if(r){var i=si(r);yn(n,i,(function(){return i(n.currentUser)})),vn(n,(function(e){return i(e)}))}var a=(0,m.getDefaultEmulatorHost)("auth");return a&&st(n,"http://".concat(a)),n}ii="Browser",(0,g._registerComponent)(new(0,b.Component)("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),o=r.options,s=o.apiKey,u=o.authDomain;P(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});var c={apiKey:s,authDomain:u,clientPlatform:ii,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qe(ii)},l=new Ye(r,i,a,c);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ce);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),(0,g._registerComponent)(new(0,b.Component)("auth-internal",(function(e){var t=Je(e.getProvider("auth").getImmediate());return new ri(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,g.registerVersion)(ti,ni,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ii)),(0,g.registerVersion)(ti,ni,"esm2017")})),a.register("jh8P3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return i(e,t,n)};var n,r=(n=a("2mz0K"))&&n.__esModule?n:{default:n};function i(e,t,n){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=r.default(e,t);if(i){var a=Object.getOwnPropertyDescriptor(i,t);return a.get?a.get.call(n||e):a.value}})(e,t,n)}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=a("fVNic"))&&n.__esModule?n:{default:n}})),a.register("4tSb9",(function(e,n){t(e.exports,"__rest",(function(){return r}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create})),a.register("h6c0i",(function(e,t){var r,i;r=void 0!==n?n:"undefined"!=typeof window?window:e.exports,i=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n="Success",r="Failure",i="Warning",a="Info",o={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},u=function(t){return t||(t="head"),null!==e.document[t]||(s('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=c(e[r],n[r]):e[r]=n[r])};n<arguments.length;n++)r(arguments[n]);return e},l=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},f=0,h=function(s,l,h,p){if(!u("body"))return!1;t||d.Notify.init({});var v=c(!0,t,{});if("object"==typeof h&&!Array.isArray(h)||"object"==typeof p&&!Array.isArray(p)){var y={};"object"==typeof h?y=h:"object"==typeof p&&(y=p),t=c(!0,t,y)}var m,g,k=t[s.toLocaleLowerCase("en")];f++,"string"!=typeof l&&(l="Notiflix "+s),t.plainText&&(m=l,(g=e.document.createElement("div")).innerHTML=m,l=g.textContent||g.innerText||""),!t.plainText&&l.length>t.messageMaxLength&&(t=c(!0,t,{closeButton:!0,messageMaxLength:150}),l='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),l.length>t.messageMaxLength&&(l=l.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(k.fontAwesomeIconColor=k.background),t.cssAnimation||(t.cssAnimationDuration=0);var w=e.document.getElementById(o.wrapID)||e.document.createElement("div");if(w.id=o.wrapID,w.style.width=t.width,w.style.zIndex=t.zindex,w.style.opacity=t.opacity,"center-center"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.top=t.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===t.position?(w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.left="auto"):"left-top"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===t.position?(w.style.left=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=t.distance,w.style.top=t.distance,w.style.left="auto",w.style.bottom="auto"),t.backOverlay){var b=e.document.getElementById(o.overlayID)||e.document.createElement("div");b.id=o.overlayID,b.style.width="100%",b.style.height="100%",b.style.position="fixed",b.style.zIndex=t.zindex-1,b.style.left=0,b.style.top=0,b.style.right=0,b.style.bottom=0,b.style.background=k.backOverlayColor||t.backOverlayColor,b.className=t.cssAnimation?"nx-with-animation":"",b.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(o.overlayID)||e.document.body.appendChild(b)}e.document.getElementById(o.wrapID)||e.document.body.appendChild(w);var x=e.document.createElement("div");x.id=t.ID+"-"+f,x.className=t.className+" "+k.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof h?"nx-with-close-button":"")+" "+("function"==typeof h?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),x.style.fontSize=t.fontSize,x.style.color=k.textColor,x.style.background=k.background,x.style.borderRadius=t.borderRadius,x.style.pointerEvents="all",t.rtl&&(x.setAttribute("dir","rtl"),x.classList.add("nx-rtl-on")),x.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(x.style.animationDuration=t.cssAnimationDuration+"ms");var _="";if(t.closeButton&&"function"!=typeof h&&(_='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+k.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)x.innerHTML='<i style="color:'+k.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+k.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?_:"");else{var E="";s===n?E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+k.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===r?E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+k.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===i?E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+k.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===a&&(E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+k.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),x.innerHTML=E+'<span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?_:"")}else x.innerHTML='<span class="nx-message">'+l+"</span>"+(t.closeButton?_:"");if("left-bottom"===t.position||"right-bottom"===t.position){var I=e.document.getElementById(o.wrapID);I.insertBefore(x,I.firstChild)}else e.document.getElementById(o.wrapID).appendChild(x);var T=e.document.getElementById(x.id);if(T){var S,C,A=function(){T.classList.add("nx-remove");var t=e.document.getElementById(o.overlayID);t&&w.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(S)},N=function(){if(T&&null!==T.parentNode&&T.parentNode.removeChild(T),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var t=e.document.getElementById(o.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(C)};if(t.closeButton&&"function"!=typeof h&&e.document.getElementById(x.id).querySelector("span.nx-close-button").addEventListener("click",(function(){A();var e=setTimeout((function(){N(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof h||t.clickToClose)&&T.addEventListener("click",(function(){"function"==typeof h&&h(),A();var e=setTimeout((function(){N(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof h){var O=function(){S=setTimeout((function(){A()}),t.timeout),C=setTimeout((function(){N()}),t.timeout+t.cssAnimationDuration)};O(),t.pauseOnHover&&(T.addEventListener("mouseenter",(function(){T.classList.add("nx-paused"),clearTimeout(S),clearTimeout(C)})),T.addEventListener("mouseleave",(function(){T.classList.remove("nx-paused"),O()})))}}if(t.showOnlyTheLastOne&&f>0)for(var D=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+f+"])"),R=0;R<D.length;R++){var P=D[R];null!==P.parentNode&&P.parentNode.removeChild(P)}t=c(!0,t,v)},d={Notify:{init:function(n){t=c(!0,o,n),function(t,n){if(!u("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}}(l,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return s("You have to initialize the Notify module before call Merge function."),!1;t=c(!0,t,e)},success:function(e,t,r){h(n,e,t,r)},failure:function(e,t,n){h(r,e,t,n)},warning:function(e,t,n){h(i,e,t,n)},info:function(e,t,n){h(a,e,t,n)}}};return"object"==typeof e.Notiflix?c(!0,e.Notiflix,{Notify:d.Notify}):{Notify:d.Notify}},"function"==typeof define&&define.amd?define([],(function(){return i(r)})):"object"==typeof e.exports?e.exports=i(r):r.Notiflix=i(r)})),a.register("6m2hf",(function(e,n){t(e.exports,"getFirestore",(function(){return a("221Dt").getFirestore})),t(e.exports,"collection",(function(){return a("221Dt").collection})),t(e.exports,"setDoc",(function(){return a("221Dt").setDoc})),t(e.exports,"doc",(function(){return a("221Dt").doc})),a("221Dt")})),a.register("221Dt",(function(n,r){t(n.exports,"collection",(function(){return xa})),t(n.exports,"doc",(function(){return _a})),t(n.exports,"getFirestore",(function(){return Ta})),t(n.exports,"setDoc",(function(){return Ya}));var i=a("bpxeT"),o=a("8MBJY"),s=a("ge8co"),u=a("a2hTj"),c=a("jh8P3"),l=a("fVNic"),f=a("eYQtU"),h=a("jmhxu"),d=a("1t1Wn"),p=a("8nrFW"),v=(a("l5bVx"),a("4c7YB")),y=a("2MbLg"),m=a("2TvXO"),g=a("MjY8E"),k=a("6ExWU"),w=a("kZfxc"),b=a("2xDiJ"),x=a("aSES4"),_=(a("6qd2L"),"@firebase/firestore"),E=function(){"use strict";function t(n){e(o)(this,t),this.uid=n}return e(u)(t,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),t}();E.UNAUTHENTICATED=new E(null),E.GOOGLE_CREDENTIALS=new E("google-credentials-uid"),E.FIRST_PARTY=new E("first-party-uid"),E.MOCK_USER=new E("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var I="10.4.0",T=new(0,w.Logger)("@firebase/firestore");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return T.logLevel}function C(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(T.logLevel<=w.LogLevel.DEBUG){var a,o=r.map(O);(a=T).debug.apply(a,["Firestore (".concat(I,"): ").concat(t)].concat(e(p)(o)))}}function A(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(T.logLevel<=w.LogLevel.ERROR){var a,o=r.map(O);(a=T).error.apply(a,["Firestore (".concat(I,"): ").concat(t)].concat(e(p)(o)))}}function N(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(T.logLevel<=w.LogLevel.WARN){var a,o=r.map(O);(a=T).warn.apply(a,["Firestore (".concat(I,"): ").concat(t)].concat(e(p)(o)))}}function O(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return t=e,JSON.stringify(t)}catch(t){return e}var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(I,") INTERNAL ASSERTION FAILED: ")+e;throw A(t),new Error(t)}function R(e,t){e||D()}function P(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},M=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this,t,i)).code=t,a.message=i,a.toString=function(){return"".concat(a.name,": [code=").concat(a.code,"]: ").concat(a.message)},e(h)(a)}return r}(b.FirebaseError),U=function t(){"use strict";var n=this;e(o)(this,t),this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))},F=function t(n,r){"use strict";e(o)(this,t),this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},V=function(){"use strict";function t(){e(o)(this,t)}return e(u)(t,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(E.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),t}(),j=function(){"use strict";function t(n){e(o)(this,t),this.token=n,this.changeListener=null}return e(u)(t,[{key:"getToken",value:function(){return Promise.resolve(this.token)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){var n=this;this.changeListener=t,e.enqueueRetryable((function(){return t(n.token.user)}))}},{key:"shutdown",value:function(){this.changeListener=null}}]),t}(),B=function(){"use strict";function t(n){e(o)(this,t),this.t=n,this.currentUser=E.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}return e(u)(t,[{key:"start",value:function(t,n){var r=this,a=this.i,o=function(e){return r.i!==a?(a=r.i,n(e)):Promise.resolve()},s=new U;this.o=function(){var e=r;r.i++,r.currentUser=r.u(),s.resolve(),s=new U,t.enqueueRetryable((function(){return o(e.currentUser)}))};var u=function(){var n=s,a=r;t.enqueueRetryable(e(i)(e(m).mark((function t(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.promise;case 2:return e.next=4,o(a.currentUser);case 4:case"end":return e.stop()}}),t)}))))},c=function(e){C("FirebaseAuthCredentialsProvider","Auth detected"),r.auth=e,r.auth.addAuthTokenListener(r.o),u()};this.t.onInit((function(e){return c(e)})),setTimeout((function(){if(!r.auth){var e=r.t.getImmediate({optional:!0});e?c(e):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new U)}}),0),u()}},{key:"getToken",value:function(){var e=this,t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((function(n){return e.i!==t?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),e.getToken()):n?(R("string"==typeof n.accessToken),new F(n.accessToken,e.currentUser)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.auth&&this.auth.removeAuthTokenListener(this.o)}},{key:"u",value:function(){var e=this.auth&&this.auth.getUid();return R(null===e||"string"==typeof e),new E(e)}}]),t}(),z=function(){"use strict";function t(n,r,i){e(o)(this,t),this.l=n,this.h=r,this.P=i,this.type="FirstParty",this.user=E.FIRST_PARTY,this.I=new Map}return e(u)(t,[{key:"T",value:function(){return this.P?this.P():null}},{key:"headers",get:function(){this.I.set("X-Goog-AuthUser",this.l);var e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}]),t}(),H=function(){"use strict";function t(n,r,i){e(o)(this,t),this.l=n,this.h=r,this.P=i}return e(u)(t,[{key:"getToken",value:function(){return Promise.resolve(new z(this.l,this.h,this.P))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(E.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),t}(),W=function t(n){"use strict";e(o)(this,t),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},q=function(){"use strict";function t(n){e(o)(this,t),this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null}return e(u)(t,[{key:"start",value:function(e,t){var n=this;this.o=function(r){e.enqueueRetryable((function(){return function(e){null!=e.error&&C("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: ".concat(e.error.message));var r=e.token!==n.R;return n.R=e.token,C("FirebaseAppCheckTokenProvider","Received ".concat(r?"new":"existing"," token.")),r?t(e.token):Promise.resolve()}(r)}))};var r=function(e){C("FirebaseAppCheckTokenProvider","AppCheck detected"),n.appCheck=e,n.appCheck.addTokenListener(n.o)};this.A.onInit((function(e){return r(e)})),setTimeout((function(){if(!n.appCheck){var e=n.A.getImmediate({optional:!0});e?r(e):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}},{key:"getToken",value:function(){var e=this,t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((function(t){return t?(R("string"==typeof t.token),e.R=t.token,new W(t.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e){var t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(var r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G=function(){"use strict";function t(){e(o)(this,t)}return e(u)(t,null,[{key:"V",value:function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";n.length<20;)for(var r=K(40),i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length));return n}}]),t}();function Q(e,t){return e<t?-1:e>t?1:0}function X(e,t,n){return e.length===t.length&&e.every((function(e,r){return n(e,t[r])}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Y=function(){"use strict";function t(n,r){if(e(o)(this,t),this.seconds=n,this.nanoseconds=r,r<0)throw new M(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new M(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(n<-62135596800)throw new M(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n);if(n>=253402300800)throw new M(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n)}return e(u)(t,[{key:"toDate",value:function(){return new Date(this.toMillis())}},{key:"toMillis",value:function(){return 1e3*this.seconds+this.nanoseconds/1e6}},{key:"_compareTo",value:function(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}},{key:"isEqual",value:function(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}},{key:"toString",value:function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}},{key:"toJSON",value:function(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}},{key:"valueOf",value:function(){var e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}],[{key:"now",value:function(){return t.fromMillis(Date.now())}},{key:"fromDate",value:function(e){return t.fromMillis(e.getTime())}},{key:"fromMillis",value:function(e){var n=Math.floor(e/1e3);return new t(n,Math.floor(1e6*(e-1e3*n)))}}]),t}(),J=function(){"use strict";function t(n){e(o)(this,t),this.timestamp=n}return e(u)(t,[{key:"compareTo",value:function(e){return this.timestamp._compareTo(e.timestamp)}},{key:"isEqual",value:function(e){return this.timestamp.isEqual(e.timestamp)}},{key:"toMicroseconds",value:function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}},{key:"toString",value:function(){return"SnapshotVersion("+this.timestamp.toString()+")"}},{key:"toTimestamp",value:function(){return this.timestamp}}],[{key:"fromTimestamp",value:function(e){return new t(e)}},{key:"min",value:function(){return new t(new Y(0,0))}},{key:"max",value:function(){return new t(new Y(253402300799,999999999))}}]),t}(),$=function(){"use strict";function t(n,r,i){e(o)(this,t),void 0===r?r=0:r>n.length&&D(),void 0===i?i=n.length-r:i>n.length-r&&D(),this.segments=n,this.offset=r,this.len=i}return e(u)(t,[{key:"length",get:function(){return this.len}},{key:"isEqual",value:function(e){return 0===t.comparator(this,e)}},{key:"child",value:function(e){var n=this.segments.slice(this.offset,this.limit());return e instanceof t?e.forEach((function(e){n.push(e)})):n.push(e),this.construct(n)}},{key:"limit",value:function(){return this.offset+this.length}},{key:"popFirst",value:function(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}},{key:"popLast",value:function(){return this.construct(this.segments,this.offset,this.length-1)}},{key:"firstSegment",value:function(){return this.segments[this.offset]}},{key:"lastSegment",value:function(){return this.get(this.length-1)}},{key:"get",value:function(e){return this.segments[this.offset+e]}},{key:"isEmpty",value:function(){return 0===this.length}},{key:"isPrefixOf",value:function(e){if(e.length<this.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"isImmediateParentOf",value:function(e){if(this.length+1!==e.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"forEach",value:function(e){for(var t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}},{key:"toArray",value:function(){return this.segments.slice(this.offset,this.limit())}}],[{key:"comparator",value:function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var i=e.get(r),a=t.get(r);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}]),t}(),Z=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(){return e(o)(this,r),n.apply(this,arguments)}return e(u)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().join("/")}},{key:"toString",value:function(){return this.canonicalString()}}],[{key:"fromString",value:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var a=[],o=!0,s=!1,u=void 0;try{for(var c,l=n[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f,h=c.value;if(h.indexOf("//")>=0)throw new M(L.INVALID_ARGUMENT,"Invalid segment (".concat(h,"). Paths must not contain // in them."));(f=a).push.apply(f,e(p)(h.split("/").filter((function(e){return e.length>0}))))}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return new r(a)}},{key:"emptyPath",value:function(){return new r([])}}]),r}($),ee=/^[_a-zA-Z][_a-zA-Z0-9]*$/,te=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(){return e(o)(this,r),n.apply(this,arguments)}return e(u)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().map((function(e){return e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),r.isValidIdentifier(e)||(e="`"+e+"`"),e})).join(".")}},{key:"toString",value:function(){return this.canonicalString()}},{key:"isKeyField",value:function(){return 1===this.length&&"__name__"===this.get(0)}}],[{key:"isValidIdentifier",value:function(e){return ee.test(e)}},{key:"keyField",value:function(){return new r(["__name__"])}},{key:"fromServerFormat",value:function(e){for(var t=[],n="",i=0,a=function(){if(0===n.length)throw new M(L.INVALID_ARGUMENT,"Invalid field path (".concat(e,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));t.push(n),n=""},o=!1;i<e.length;){var s=e[i];if("\\"===s){if(i+1===e.length)throw new M(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);var u=e[i+1];if("\\"!==u&&"."!==u&&"`"!==u)throw new M(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else"`"===s?(o=!o,i++):"."!==s||o?(n+=s,i++):(a(),i++)}if(a(),o)throw new M(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new r(t)}},{key:"emptyPath",value:function(){return new r([])}}]),r}($),ne=function(){"use strict";function t(n){e(o)(this,t),this.path=n}return e(u)(t,[{key:"collectionGroup",get:function(){return this.path.popLast().lastSegment()}},{key:"hasCollectionId",value:function(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}},{key:"getCollectionGroup",value:function(){return this.path.get(this.path.length-2)}},{key:"getCollectionPath",value:function(){return this.path.popLast()}},{key:"isEqual",value:function(e){return null!==e&&0===Z.comparator(this.path,e.path)}},{key:"toString",value:function(){return this.path.toString()}}],[{key:"fromPath",value:function(e){return new t(Z.fromString(e))}},{key:"fromName",value:function(e){return new t(Z.fromString(e).popFirst(5))}},{key:"empty",value:function(){return new t(Z.emptyPath())}},{key:"comparator",value:function(e,t){return Z.comparator(e.path,t.path)}},{key:"isDocumentKey",value:function(e){return e.length%2==0}},{key:"fromSegments",value:function(e){return new t(new Z(e.slice()))}}]),t}(),re=function t(n,r,i,a){"use strict";e(o)(this,t),this.indexId=n,this.collectionGroup=r,this.fields=i,this.indexState=a};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */re.UNKNOWN_ID=-1;function ie(e,t){var n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=J.fromTimestamp(1e9===r?new Y(n+1,0):new Y(n,r));return new oe(i,ne.empty(),t)}function ae(e){return new oe(e.readTime,e.key,-1)}var oe=function(){"use strict";function t(n,r,i){e(o)(this,t),this.readTime=n,this.documentKey=r,this.largestBatchId=i}return e(u)(t,null,[{key:"min",value:function(){return new t(J.min(),ne.empty(),-1)}},{key:"max",value:function(){return new t(J.max(),ne.empty(),-1)}}]),t}();function se(e,t){var n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=ne.comparator(e.documentKey,t.documentKey))?n:Q(e.largestBatchId,t.largestBatchId)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",ce=function(){"use strict";function t(){e(o)(this,t),this.onCommittedListeners=[]}return e(u)(t,[{key:"addOnCommittedListener",value:function(e){this.onCommittedListeners.push(e)}},{key:"raiseOnCommittedEvent",value:function(){this.onCommittedListeners.forEach((function(e){return e()}))}}]),t}();function le(e){return fe.apply(this,arguments)}function fe(){return(fe=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(i)(e(m).mark((function t(n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.code===L.FAILED_PRECONDITION&&n.message===ue){e.next=2;break}throw n;case 2:C("LocalStore","Unexpectedly lost primary lease");case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he=function(){"use strict";function t(n){var r=this;e(o)(this,t),this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,n((function(e){r.isDone=!0,r.result=e,r.nextCallback&&r.nextCallback(e)}),(function(e){r.isDone=!0,r.error=e,r.catchCallback&&r.catchCallback(e)}))}return e(u)(t,[{key:"catch",value:function(e){return this.next(void 0,e)}},{key:"next",value:function(e,n){var r=this;return this.callbackAttached&&D(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new t((function(t,i){var a=r;r.nextCallback=function(n){a.wrapSuccess(e,n).next(t,i)},r.catchCallback=function(e){a.wrapFailure(n,e).next(t,i)}}))}},{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){e.next(t,n)}))}},{key:"wrapUserFunction",value:function(e){try{var n=e();return n instanceof t?n:t.resolve(n)}catch(e){return t.reject(e)}}},{key:"wrapSuccess",value:function(e,n){return e?this.wrapUserFunction((function(){return e(n)})):t.resolve(n)}},{key:"wrapFailure",value:function(e,n){return e?this.wrapUserFunction((function(){return e(n)})):t.reject(n)}}],[{key:"resolve",value:function(e){return new t((function(t,n){t(e)}))}},{key:"reject",value:function(e){return new t((function(t,n){n(e)}))}},{key:"waitFor",value:function(e){return new t((function(t,n){var r=0,i=0,a=!1;e.forEach((function(e){++r,e.next((function(){++i,a&&i===r&&t()}),(function(e){return n(e)}))})),a=!0,i===r&&t()}))}},{key:"or",value:function(e){var n=t.resolve(!1),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,r){var i=r.value;n=n.next((function(e){return e?t.resolve(e):i()}))},u=e[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n}},{key:"forEach",value:function(e,t){var n=this,r=[];return e.forEach((function(e,i){r.push(t.call(n,e,i))})),this.waitFor(r)}},{key:"mapArray",value:function(e,n){return new t((function(t,r){for(var i=function(i){var u=i;n(e[u]).next((function(e){o[u]=e,++s===a&&t(o)}),(function(e){return r(e)}))},a=e.length,o=new Array(a),s=0,u=0;u<a;u++)i(u)}))}},{key:"doWhile",value:function(e,n){return new t((function(t,r){var i=function(){!0===e()?n().next((function(){i()}),r):t()};i()}))}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){return"IndexedDbTransactionError"===e.name}var pe=function(){"use strict";function t(n,r){var i=this;e(o)(this,t),this.previousValue=n,r&&(r.sequenceNumberHandler=function(e){return i.oe(e)},this._e=function(e){return r.writeSequenceNumber(e)})}return e(u)(t,[{key:"oe",value:function(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}},{key:"next",value:function(){var e=++this.previousValue;return this._e&&this._e(e),e}}]),t}();function ve(e){return null==e}function ye(e){return 0===e&&1/e==-1/0}function me(e){return"number"==typeof e&&Number.isInteger(e)&&!ye(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pe.ae=-1;var ge=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ke=(e(p)(ge).concat(["documentOverlays"]),["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"]),we=ke;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */e(p)(we).concat(["indexConfiguration","indexState","indexEntries"]);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function be(e){var t=0;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function xe(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function _e(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee=function(){"use strict";function t(n,r){e(o)(this,t),this.comparator=n,this.root=r||Te.EMPTY}return e(u)(t,[{key:"insert",value:function(e,n){return new t(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Te.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}},{key:"get",value:function(e){for(var t=this.root;!t.isEmpty();){var n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}},{key:"indexOf",value:function(e){for(var t=0,n=this.root;!n.isEmpty();){var r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}},{key:"isEmpty",value:function(){return this.root.isEmpty()}},{key:"size",get:function(){return this.root.size}},{key:"minKey",value:function(){return this.root.minKey()}},{key:"maxKey",value:function(){return this.root.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root.inorderTraversal(e)}},{key:"forEach",value:function(e){this.inorderTraversal((function(t,n){return e(t,n),!1}))}},{key:"toString",value:function(){var e=[];return this.inorderTraversal((function(t,n){return e.push("".concat(t,":").concat(n)),!1})),"{".concat(e.join(", "),"}")}},{key:"reverseTraversal",value:function(e){return this.root.reverseTraversal(e)}},{key:"getIterator",value:function(){return new Ie(this.root,null,this.comparator,!1)}},{key:"getIteratorFrom",value:function(e){return new Ie(this.root,e,this.comparator,!1)}},{key:"getReverseIterator",value:function(){return new Ie(this.root,null,this.comparator,!0)}},{key:"getReverseIteratorFrom",value:function(e){return new Ie(this.root,e,this.comparator,!0)}}]),t}(),Ie=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.isReverse=a,this.nodeStack=[];for(var s=1;!n.isEmpty();)if(s=r?i(n.key,r):1,r&&a&&(s*=-1),s<0)n=this.isReverse?n.left:n.right;else{if(0===s){this.nodeStack.push(n);break}this.nodeStack.push(n),n=this.isReverse?n.right:n.left}}return e(u)(t,[{key:"getNext",value:function(){var e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}},{key:"hasNext",value:function(){return this.nodeStack.length>0}},{key:"peek",value:function(){if(0===this.nodeStack.length)return null;var e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}]),t}(),Te=function(){"use strict";function t(n,r,i,a,s){e(o)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=a?a:t.EMPTY,this.right=null!=s?s:t.EMPTY,this.size=this.left.size+1+this.right.size}return e(u)(t,[{key:"copy",value:function(e,n,r,i,a){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return t.EMPTY;var e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(e,n){var r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(e,i.key)){if(i.right.isEmpty())return t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw D();if(this.right.isRed())throw D();var e=this.left.check();if(e!==this.right.check())throw D();return e+(this.isRed()?0:1)}}]),t}();Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1,Te.EMPTY=new(function(){"use strict";function t(){e(o)(this,t),this.size=0}return e(u)(t,[{key:"key",get:function(){throw D()}},{key:"value",get:function(){throw D()}},{key:"color",get:function(){throw D()}},{key:"left",get:function(){throw D()}},{key:"right",get:function(){throw D()}},{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new Te(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),t}());
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Se=function(){"use strict";function t(n){e(o)(this,t),this.comparator=n,this.data=new Ee(this.comparator)}return e(u)(t,[{key:"has",value:function(e){return null!==this.data.get(e)}},{key:"first",value:function(){return this.data.minKey()}},{key:"last",value:function(){return this.data.maxKey()}},{key:"size",get:function(){return this.data.size}},{key:"indexOf",value:function(e){return this.data.indexOf(e)}},{key:"forEach",value:function(e){this.data.inorderTraversal((function(t,n){return e(t),!1}))}},{key:"forEachInRange",value:function(e,t){for(var n=this.data.getIteratorFrom(e[0]);n.hasNext();){var r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}},{key:"forEachWhile",value:function(e,t){var n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}},{key:"firstAfterOrEqual",value:function(e){var t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}},{key:"getIterator",value:function(){return new Ce(this.data.getIterator())}},{key:"getIteratorFrom",value:function(e){return new Ce(this.data.getIteratorFrom(e))}},{key:"add",value:function(e){return this.copy(this.data.remove(e).insert(e,!0))}},{key:"delete",value:function(e){return this.has(e)?this.copy(this.data.remove(e)):this}},{key:"isEmpty",value:function(){return this.data.isEmpty()}},{key:"unionWith",value:function(e){var t=this;return t.size<e.size&&(t=e,e=this),e.forEach((function(e){t=t.add(e)})),t}},{key:"isEqual",value:function(e){if(!(e instanceof t))return!1;if(this.size!==e.size)return!1;for(var n=this.data.getIterator(),r=e.data.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(0!==this.comparator(i,a))return!1}return!0}},{key:"toArray",value:function(){var e=[];return this.forEach((function(t){e.push(t)})),e}},{key:"toString",value:function(){var e=[];return this.forEach((function(t){return e.push(t)})),"SortedSet("+e.toString()+")"}},{key:"copy",value:function(e){var n=new t(this.comparator);return n.data=e,n}}]),t}(),Ce=function(){"use strict";function t(n){e(o)(this,t),this.iter=n}return e(u)(t,[{key:"getNext",value:function(){return this.iter.getNext().key}},{key:"hasNext",value:function(){return this.iter.hasNext()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ae=function(){"use strict";function t(n){e(o)(this,t),this.fields=n,n.sort(te.comparator)}return e(u)(t,[{key:"unionWith",value:function(e){var n=new Se(te.comparator),r=!0,i=!1,a=void 0;try{for(var o,s=this.fields[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n.add(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var c=!0,l=!1,f=void 0;try{for(var h,d=e[Symbol.iterator]();!(c=(h=d.next()).done);c=!0){var p=h.value;n=n.add(p)}}catch(e){l=!0,f=e}finally{try{c||null==d.return||d.return()}finally{if(l)throw f}}return new t(n.toArray())}},{key:"covers",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.fields[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.isPrefixOf(e))return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"isEqual",value:function(e){return X(this.fields,e.fields,(function(e,t){return e.isEqual(t)}))}}],[{key:"empty",value:function(){return new t([])}}]),t}(),Ne=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(){var t;return e(o)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="Base64DecodeError",e(h)(t)}return r}(e(v)(Error));
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe=Symbol.iterator,De=function(){"use strict";function t(n){e(o)(this,t),this.binaryString=n}return e(u)(t,[{key:Oe,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){return e=this.binaryString,btoa(e);var e}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return Q(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(e){return new t(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Ne("Invalid base64 string: "+e):e}}(e))}},{key:"fromUint8Array",value:function(e){return new t(function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De.EMPTY_BYTE_STRING=new De("");var Re=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pe(e){if(R(!!e),"string"==typeof e){var t=0,n=Re.exec(e);if(R(!!n),n[1]){var r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}var i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Le(e.seconds),nanos:Le(e.nanos)}}function Le(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Me(e){return"string"==typeof e?De.fromBase64String(e):De.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Fe(e){var t=e.mapValue.fields.__previous_value__;return Ue(t)?Fe(t):t}function Ve(e){var t=Pe(e.mapValue.fields.__local_write_time__.timestampValue);return new Y(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je=function t(n,r,i,a,s,u,c,l,f){"use strict";e(o)(this,t),this.databaseId=n,this.appId=r,this.persistenceKey=i,this.host=a,this.ssl=s,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=f},Be=function(){"use strict";function t(n,r){e(o)(this,t),this.projectId=n,this.database=r||"(default)"}return e(u)(t,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database}}],[{key:"empty",value:function(){return new t("","")}}]),t}(),ze={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function He(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ue(e)?4:et(e)?9007199254740991:10:D()}function We(e,t){if(e===t)return!0;var n,r=He(e);if(r!==He(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ve(e).isEqual(Ve(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;var n=Pe(e.timestampValue),r=Pe(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return n=t,Me(e.bytesValue).isEqual(Me(n.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Le(e.geoPointValue.latitude)===Le(t.geoPointValue.latitude)&&Le(e.geoPointValue.longitude)===Le(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Le(e.integerValue)===Le(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){var n=Le(e.doubleValue),r=Le(t.doubleValue);return n===r?ye(n)===ye(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return X(e.arrayValue.values||[],t.arrayValue.values||[],We);case 10:return function(e,t){var n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(be(n)!==be(r))return!1;for(var i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!We(n[i],r[i])))return!1;return!0}(e,t);default:return D()}}function qe(e,t){return void 0!==(e.values||[]).find((function(e){return We(e,t)}))}function Ke(e,t){if(e===t)return 0;var n,r,i,a,o=He(e),s=He(t);if(o!==s)return Q(o,s);switch(o){case 0:case 9007199254740991:return 0;case 1:return Q(e.booleanValue,t.booleanValue);case 2:return r=t,i=Le((n=e).integerValue||n.doubleValue),a=Le(r.integerValue||r.doubleValue),i<a?-1:i>a?1:i===a?0:isNaN(i)?isNaN(a)?0:-1:1;case 3:return Ge(e.timestampValue,t.timestampValue);case 4:return Ge(Ve(e),Ve(t));case 5:return Q(e.stringValue,t.stringValue);case 6:return function(e,t){var n=Me(e),r=Me(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){for(var n=e.split("/"),r=t.split("/"),i=0;i<n.length&&i<r.length;i++){var a=Q(n[i],r[i]);if(0!==a)return a}return Q(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){var n=Q(Le(e.latitude),Le(t.latitude));return 0!==n?n:Q(Le(e.longitude),Le(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){for(var n=e.values||[],r=t.values||[],i=0;i<n.length&&i<r.length;++i){var a=Ke(n[i],r[i]);if(a)return a}return Q(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ze.mapValue&&t===ze.mapValue)return 0;if(e===ze.mapValue)return 1;if(t===ze.mapValue)return-1;var n=e.fields||{},r=Object.keys(n),i=t.fields||{},a=Object.keys(i);r.sort(),a.sort();for(var o=0;o<r.length&&o<a.length;++o){var s=Q(r[o],a[o]);if(0!==s)return s;var u=Ke(n[r[o]],i[a[o]]);if(0!==u)return u}return Q(r.length,a.length)}(e.mapValue,t.mapValue);default:throw D()}}function Ge(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Q(e,t);var n=Pe(e),r=Pe(t),i=Q(n.seconds,r.seconds);return 0!==i?i:Q(n.nanos,r.nanos)}function Qe(e){return Xe(e)}function Xe(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?(t=e.timestampValue,n=Pe(t),"time(".concat(n.seconds,",").concat(n.nanos,")")):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return Me(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return ne.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return"geo(".concat(e.latitude,",").concat(e.longitude,")")}(e.geoPointValue):"arrayValue"in e?function(e){var t="[",n=!0,r=!0,i=!1,a=void 0;try{for(var o,s=(e.values||[])[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n?n=!1:t+=",",t+=Xe(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return t+"]"}(e.arrayValue):"mapValue"in e?function(e){var t=Object.keys(e.fields||{}).sort(),n="{",r=!0,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r?r=!1:n+=",",n+="".concat(c,":").concat(Xe(e.fields[c]))}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return n+"}"}(e.mapValue):D();var t,n}function Ye(e){return!!e&&"integerValue"in e}function Je(e){return!!e&&"arrayValue"in e}function $e(e){return!!e&&"mapValue"in e}function Ze(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){var t={mapValue:{fields:{}}};return xe(e.mapValue.fields,(function(e,n){return t.mapValue.fields[e]=Ze(n)})),t}if(e.arrayValue){for(var n={arrayValue:{values:[]}},r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=Ze(e.arrayValue.values[r]);return n}return Object.assign({},e)}function et(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var tt=function(){"use strict";function t(n){e(o)(this,t),this.value=n}return e(u)(t,[{key:"field",value:function(e){if(e.isEmpty())return this.value;for(var t=this.value,n=0;n<e.length-1;++n)if(!$e(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}},{key:"set",value:function(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ze(t)}},{key:"setAll",value:function(e){var t=this,n=te.emptyPath(),r={},i=[];e.forEach((function(e,a){if(!n.isImmediateParentOf(a)){var o=t.getFieldsMap(n);t.applyChanges(o,r,i),r={},i=[],n=a.popLast()}e?r[a.lastSegment()]=Ze(e):i.push(a.lastSegment())}));var a=this.getFieldsMap(n);this.applyChanges(a,r,i)}},{key:"delete",value:function(e){var t=this.field(e.popLast());$e(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}},{key:"isEqual",value:function(e){return We(this.value,e.value)}},{key:"getFieldsMap",value:function(e){var t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(var n=0;n<e.length;++n){var r=t.mapValue.fields[e.get(n)];$e(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}},{key:"applyChanges",value:function(e,t,n){xe(t,(function(t,n){return e[t]=n}));var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;delete e[u]}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"clone",value:function(){return new t(Ze(this.value))}}],[{key:"empty",value:function(){return new t({mapValue:{}})}}]),t}();function nt(e){var t=[];return xe(e.fields,(function(e,n){var r=new te([e]);if($e(n)){var i=nt(n.mapValue).fields,a=!0,o=!1,s=void 0;if(0===i.length)t.push(r);else try{for(var u,c=i[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.push(r.child(l))}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}}else t.push(r)})),new Ae(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}var rt=function(){"use strict";function t(n,r,i,a,s,u,c){e(o)(this,t),this.key=n,this.documentType=r,this.version=i,this.readTime=a,this.createTime=s,this.data=u,this.documentState=c}return e(u)(t,[{key:"convertToFoundDocument",value:function(e,t){return!this.createTime.isEqual(J.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}},{key:"convertToNoDocument",value:function(e){return this.version=e,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}},{key:"convertToUnknownDocument",value:function(e){return this.version=e,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}},{key:"setHasCommittedMutations",value:function(){return this.documentState=2,this}},{key:"setHasLocalMutations",value:function(){return this.documentState=1,this.version=J.min(),this}},{key:"setReadTime",value:function(e){return this.readTime=e,this}},{key:"hasLocalMutations",get:function(){return 1===this.documentState}},{key:"hasCommittedMutations",get:function(){return 2===this.documentState}},{key:"hasPendingWrites",get:function(){return this.hasLocalMutations||this.hasCommittedMutations}},{key:"isValidDocument",value:function(){return 0!==this.documentType}},{key:"isFoundDocument",value:function(){return 1===this.documentType}},{key:"isNoDocument",value:function(){return 2===this.documentType}},{key:"isUnknownDocument",value:function(){return 3===this.documentType}},{key:"isEqual",value:function(e){return e instanceof t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}},{key:"mutableCopy",value:function(){return new t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}},{key:"toString",value:function(){return"Document(".concat(this.key,", ").concat(this.version,", ").concat(JSON.stringify(this.data.value),", {createTime: ").concat(this.createTime,"}), {documentType: ").concat(this.documentType,"}), {documentState: ").concat(this.documentState,"})")}}],[{key:"newInvalidDocument",value:function(e){return new t(e,0,J.min(),J.min(),J.min(),tt.empty(),0)}},{key:"newFoundDocument",value:function(e,n,r,i){return new t(e,1,n,J.min(),r,i,0)}},{key:"newNoDocument",value:function(e,n){return new t(e,2,n,J.min(),J.min(),tt.empty(),0)}},{key:"newUnknownDocument",value:function(e,n){return new t(e,3,n,J.min(),J.min(),tt.empty(),2)}}]),t}(),it=function t(n,r){"use strict";e(o)(this,t),this.position=n,this.inclusive=r};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e,t,n){for(var r=0,i=0;i<e.position.length;i++){var a=t[i],o=e.position[i];if(r=a.field.isKeyField()?ne.comparator(ne.fromName(o.referenceValue),n.key):Ke(o,n.data.field(a.field)),"desc"===a.dir&&(r*=-1),0!==r)break}return r}function ot(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(var n=0;n<e.position.length;n++)if(!We(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";e(o)(this,t),this.field=n,this.dir=r};function ut(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct=function t(){"use strict";e(o)(this,t)},lt=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i,a){var s;return e(o)(this,r),(s=n.call(this)).field=t,s.op=i,s.value=a,e(h)(s)}return e(u)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ke(t,this.value)):null!==t&&He(this.value)===He(t)&&this.matchesComparison(Ke(t,this.value))}},{key:"matchesComparison",value:function(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return D()}}},{key:"isInequality",value:function(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}},{key:"getFlattenedFilters",value:function(){return[this]}},{key:"getFilters",value:function(){return[this]}},{key:"getFirstInequalityField",value:function(){return this.isInequality()?this.field:null}}],[{key:"create",value:function(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new gt(e,t,n):"array-contains"===t?new xt(e,n):"in"===t?new _t(e,n):"not-in"===t?new Et(e,n):"array-contains-any"===t?new It(e,n):new r(e,t,n)}},{key:"createKeyFieldInFilter",value:function(e,t,n){return"in"===t?new kt(e,n):new wt(e,n)}}]),r}(ct),ft=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this)).filters=t,a.op=i,a.ce=null,e(h)(a)}return e(u)(r,[{key:"matches",value:function(e){return ht(this)?void 0===this.filters.find((function(t){return!t.matches(e)})):void 0!==this.filters.find((function(t){return t.matches(e)}))}},{key:"getFlattenedFilters",value:function(){return null!==this.ce||(this.ce=this.filters.reduce((function(e,t){return e.concat(t.getFlattenedFilters())}),[])),this.ce}},{key:"getFilters",value:function(){return Object.assign([],this.filters)}},{key:"getFirstInequalityField",value:function(){var e=this.le((function(e){return e.isInequality()}));return null!==e?e.field:null}},{key:"le",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.getFlattenedFilters()[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(e(o))return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}}],[{key:"create",value:function(e,t){return new r(e,t)}}]),r}(ct);function ht(e){return"and"===e.op}function dt(e){return pt(e)&&ht(e)}function pt(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value instanceof ft)return!1}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!0}function vt(e){if(e instanceof lt)return e.field.canonicalString()+e.op.toString()+Qe(e.value);if(dt(e))return e.filters.map((function(e){return vt(e)})).join(",");var t=e.filters.map((function(e){return vt(e)})).join(",");return"".concat(e.op,"(").concat(t,")")}function yt(e,t){return e instanceof lt?(n=e,(r=t)instanceof lt&&n.op===r.op&&n.field.isEqual(r.field)&&We(n.value,r.value)):e instanceof ft?function(e,t){return t instanceof ft&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((function(e,n,r){return e&&yt(n,t.filters[r])}),!0)}(e,t):void D();var n,r}function mt(e){return e instanceof lt?"".concat((t=e).field.canonicalString()," ").concat(t.op," ").concat(Qe(t.value)):e instanceof ft?function(e){return e.op.toString()+" {"+e.getFilters().map(mt).join(" ,")+"}"}(e):"Filter";var t}var gt=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i,a){var s;return e(o)(this,r),(s=n.call(this,t,i,a)).key=ne.fromName(a.referenceValue),e(h)(s)}return e(u)(r,[{key:"matches",value:function(e){var t=ne.comparator(e.key,this.key);return this.matchesComparison(t)}}]),r}(lt),kt=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this,t,"in",i)).keys=bt("in",i),e(h)(a)}return e(u)(r,[{key:"matches",value:function(e){return this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(lt),wt=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this,t,"not-in",i)).keys=bt("not-in",i),e(h)(a)}return e(u)(r,[{key:"matches",value:function(e){return!this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(lt);function bt(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((function(e){return ne.fromName(e.referenceValue)}))}var xt=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i){return e(o)(this,r),n.call(this,t,"array-contains",i)}return e(u)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return Je(t)&&qe(t.arrayValue,this.value)}}]),r}(lt),_t=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i){return e(o)(this,r),n.call(this,t,"in",i)}return e(u)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return null!==t&&qe(this.value.arrayValue,t)}}]),r}(lt),Et=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i){return e(o)(this,r),n.call(this,t,"not-in",i)}return e(u)(r,[{key:"matches",value:function(e){if(qe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;var t=e.data.field(this.field);return null!==t&&!qe(this.value.arrayValue,t)}}]),r}(lt),It=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i){return e(o)(this,r),n.call(this,t,"array-contains-any",i)}return e(u)(r,[{key:"matches",value:function(e){var t=this,n=e.data.field(this.field);return!(!Je(n)||!n.arrayValue.values)&&n.arrayValue.values.some((function(e){return qe(t.value.arrayValue,e)}))}}]),r}(lt),Tt=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;e(o)(this,t),this.path=n,this.collectionGroup=r,this.orderBy=i,this.filters=a,this.limit=s,this.startAt=u,this.endAt=c,this.he=null};function St(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return new Tt(e,t,n,r,i,a,o)}function Ct(e){var t=P(e);if(null===t.he){var n=t.path.canonicalString();null!==t.collectionGroup&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((function(e){return vt(e)})).join(","),n+="|ob:",n+=t.orderBy.map((function(e){return(t=e).field.canonicalString()+t.dir;var t})).join(","),ve(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((function(e){return Qe(e)})).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((function(e){return Qe(e)})).join(",")),t.he=n}return t.he}function At(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(var n=0;n<e.orderBy.length;n++)if(!ut(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(var r=0;r<e.filters.length;r++)if(!yt(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ot(e.startAt,t.startAt)&&ot(e.endAt,t.endAt)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Nt=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"F",c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;e(o)(this,t),this.path=n,this.collectionGroup=r,this.explicitOrderBy=i,this.filters=a,this.limit=s,this.limitType=u,this.startAt=c,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt};function Ot(e,t,n,r,i,a,o,s){return new Nt(e,t,n,r,i,a,o,s)}function Dt(e){return new Nt(e)}function Rt(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Pt(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Lt(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value.getFirstInequalityField();if(null!==o)return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}function Mt(e){return null!==e.collectionGroup}function Ut(e){var t=P(e);if(null===t.Pe){t.Pe=[];var n=Lt(t),r=Pt(t);if(null!==n&&null===r)n.isKeyField()||t.Pe.push(new st(n)),t.Pe.push(new st(te.keyField(),"asc"));else{var i=!1,a=!0,o=!1,s=void 0;try{for(var u,c=t.explicitOrderBy[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.Pe.push(l),l.field.isKeyField()&&(i=!0)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}if(!i){var f=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new st(te.keyField(),f))}}}return t.Pe}function Ft(e){var t=P(e);return t.Ie||(t.Ie=Vt(t,Ut(e))),t.Ie}function Vt(e,t){if("F"===e.limitType)return St(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);t=t.map((function(e){var t="desc"===e.dir?"asc":"desc";return new st(e.field,t)}));var n=e.endAt?new it(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new it(e.startAt.position,e.startAt.inclusive):null;return St(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}function jt(e,t,n){return new Nt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Bt(e,t){return At(Ft(e),Ft(t))&&e.limitType===t.limitType}function zt(e){return"".concat(Ct(Ft(e)),"|lt:").concat(e.limitType)}function Ht(e){return"Query(target=".concat((t=Ft(e),n=t.path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=", filters: [".concat(t.filters.map((function(e){return mt(e)})).join(", "),"]")),ve(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=", orderBy: [".concat(t.orderBy.map((function(e){return"".concat((t=e).field.canonicalString()," (").concat(t.dir,")");var t})).join(", "),"]")),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((function(e){return Qe(e)})).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((function(e){return Qe(e)})).join(",")),"Target(".concat(n,")")),"; limitType=").concat(e.limitType,")");var t,n}function Wt(e,t){return t.isFoundDocument()&&(i=e,o=(a=t).key.path,null!==i.collectionGroup?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):ne.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o))&&function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=Ut(e)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(!s.field.isKeyField()&&null===t.data.field(s.field))return!1}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}(e,t)&&function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=e.filters[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){if(!a.value.matches(t))return!1}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){var r=at(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,Ut(n),r)||n.endAt&&!function(e,t,n){var r=at(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,Ut(n),r)));var n,r,i,a,o}function qt(e){return function(t,n){var r=!1,i=!0,a=!1,o=void 0;try{for(var s,u=Ut(e)[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=Kt(c,t,n);if(0!==l)return l;r=r||c.field.isKeyField()}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return 0}}function Kt(e,t,n){var r,i,a,o,s=e.field.isKeyField()?ne.comparator(t.key,n.key):(r=e.field,i=n,a=t.data.field(r),o=i.data.field(r),null!==a&&null!==o?Ke(a,o):D());switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return D()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gt=function(){"use strict";function t(n,r){e(o)(this,t),this.mapKeyFn=n,this.equalsFn=r,this.inner={},this.innerSize=0}return e(u)(t,[{key:"get",value:function(t){var n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){var i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=e(d)(s.value,2),l=c[0],f=c[1];if(this.equalsFn(l,t))return f}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}}}},{key:"has",value:function(e){return void 0!==this.get(e)}},{key:"set",value:function(e,t){var n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(var i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}},{key:"delete",value:function(e){var t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(var r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}},{key:"forEach",value:function(t){xe(this.inner,(function(n,r){var i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=e(d)(s.value,2),l=c[0],f=c[1];t(l,f)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}}))}},{key:"isEmpty",value:function(){return _e(this.inner)}},{key:"size",value:function(){return this.innerSize}}]),t}(),Qt=new Ee(ne.comparator);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return Qt}var Yt=new Ee(ne.comparator);function Jt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=Yt,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r=r.insert(c.key,c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}function $t(e){var t=Yt;return e.forEach((function(e,n){return t=t.insert(e,n.overlayedDocument)})),t}function Zt(){return tn()}function en(){return tn()}function tn(){return new Gt((function(e){return e.toString()}),(function(e,t){return e.isEqual(t)}))}var nn=new Ee(ne.comparator),rn=new Se(ne.comparator);function an(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=rn,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r=r.add(c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}var on=new Se(Q);function sn(){return on}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ye(t)?"-0":t}}function cn(e){return{integerValue:""+e}}function ln(e,t){return me(t)?cn(t):un(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fn=function t(){"use strict";e(o)(this,t),this._=void 0};function hn(e,t,n){return e instanceof vn?(i=t,a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:(r=n).seconds,nanos:r.nanoseconds}}}},i&&Ue(i)&&(i=Fe(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}):e instanceof yn?mn(e,t):e instanceof gn?kn(e,t):function(e,t){var n=pn(e,t),r=bn(n)+bn(e.Te);return Ye(n)&&Ye(e.Te)?cn(r):un(e.serializer,r)}(e,t);var r,i,a}function dn(e,t,n){return e instanceof yn?mn(e,t):e instanceof gn?kn(e,t):n}function pn(e,t){return e instanceof wn?Ye(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}var vn=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(){return e(o)(this,r),n.apply(this,arguments)}return r}(fn),yn=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this)).elements=t,e(h)(i)}return r}(fn);function mn(e,t){var n=xn(t),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,t){var r=t.value;n.some((function(e){return We(e,r)}))||n.push(r)},u=e.elements[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return{arrayValue:{values:n}}}var gn=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this)).elements=t,e(h)(i)}return r}(fn);function kn(e,t){var n=xn(t),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,t){var r=t.value;n=n.filter((function(e){return!We(e,r)}))},u=e.elements[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return{arrayValue:{values:n}}}var wn=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this)).serializer=t,a.Te=i,e(h)(a)}return r}(fn);function bn(e){return Le(e.integerValue||e.doubleValue)}function xn(e){return Je(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _n=function t(n,r){"use strict";e(o)(this,t),this.version=n,this.transformResults=r},En=function(){"use strict";function t(n,r){e(o)(this,t),this.updateTime=n,this.exists=r}return e(u)(t,[{key:"isNone",get:function(){return void 0===this.updateTime&&void 0===this.exists}},{key:"isEqual",value:function(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}],[{key:"none",value:function(){return new t}},{key:"exists",value:function(e){return new t(void 0,e)}},{key:"updateTime",value:function(e){return new t(e)}}]),t}();function In(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}var Tn=function t(){"use strict";e(o)(this,t)};function Sn(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Vn(e.key,En.none()):new Dn(e.key,e.data,En.none());var n=e.data,r=tt.empty(),i=new Se(te.comparator),a=!0,o=!1,s=void 0;try{for(var u,c=t.fields[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;if(!i.has(l)){var f=n.field(l);null===f&&l.length>1&&(l=l.popLast(),f=n.field(l)),null===f?r.delete(l):r.set(l,f),i=i.add(l)}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return new Rn(e.key,r,new Ae(i.toArray()),En.none())}function Cn(e,t,n){var r,i,a,o,s;e instanceof Dn?(i=t,a=n,o=(r=e).value.clone(),s=Ln(r.fieldTransforms,i,a.transformResults),o.setAll(s),i.convertToFoundDocument(a.version,o).setHasCommittedMutations()):e instanceof Rn?function(e,t,n){if(In(e.precondition,t)){var r=Ln(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Pn(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}else t.convertToUnknownDocument(n.version)}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function An(e,t,n,r){return e instanceof Dn?function(e,t,n,r){if(!In(e.precondition,t))return n;var i=e.value.clone(),a=Mn(e.fieldTransforms,r,t);return i.setAll(a),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Rn?function(e,t,n,r){if(!In(e.precondition,t))return n;var i=Mn(e.fieldTransforms,r,t),a=t.data;return a.setAll(Pn(e)),a.setAll(i),t.convertToFoundDocument(t.version,a).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((function(e){return e.field})))}(e,t,n,r):(i=t,a=n,In(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):a);var i,a}function Nn(e,t){var n=null,r=!0,i=!1,a=void 0;try{for(var o,s=e.fieldTransforms[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c=t.data.field(u.field),l=pn(u.transform,c||null);null!=l&&(null===n&&(n=tt.empty()),n.set(u.field,l))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n||null}function On(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&X(n,r,(function(e,t){return function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof yn&&r instanceof yn||n instanceof gn&&r instanceof gn?X(n.elements,r.elements,We):n instanceof wn&&r instanceof wn?We(n.Te,r.Te):n instanceof vn&&r instanceof vn);var n,r}(e,t)}))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}var Dn=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i,a){var s,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return e(o)(this,r),(s=n.call(this)).key=t,s.value=i,s.precondition=a,s.fieldTransforms=u,s.type=0,e(h)(s)}return e(u)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(Tn),Rn=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i,a,s){var u,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];return e(o)(this,r),(u=n.call(this)).key=t,u.data=i,u.fieldMask=a,u.precondition=s,u.fieldTransforms=c,u.type=1,e(h)(u)}return e(u)(r,[{key:"getFieldMask",value:function(){return this.fieldMask}}]),r}(Tn);function Pn(e){var t=new Map;return e.fieldMask.fields.forEach((function(n){if(!n.isEmpty()){var r=e.data.field(n);t.set(n,r)}})),t}function Ln(e,t,n){var r=new Map;R(e.length===n.length);for(var i=0;i<n.length;i++){var a=e[i],o=a.transform,s=t.data.field(a.field);r.set(a.field,dn(o,s,n[i]))}return r}function Mn(e,t,n){var r=new Map,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=c.transform,f=n.data.field(c.field);r.set(c.field,hn(l,f,t))}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}var Un,Fn,Vn=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this)).key=t,a.precondition=i,a.type=2,a.fieldTransforms=[],e(h)(a)}return e(u)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(Tn),jn=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i){var a;return e(o)(this,r),(a=n.call(this)).key=t,a.precondition=i,a.type=3,a.fieldTransforms=[],e(h)(a)}return e(u)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(Tn),Bn=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.batchId=n,this.localWriteTime=r,this.baseMutations=i,this.mutations=a}return e(u)(t,[{key:"applyToRemoteDocument",value:function(e,t){for(var n=t.mutationResults,r=0;r<this.mutations.length;r++){var i=this.mutations[r];i.key.isEqual(e.key)&&Cn(i,e,n[r])}}},{key:"applyToLocalView",value:function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=this.baseMutations[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;s.key.isEqual(e.key)&&(t=An(s,e,t,this.localWriteTime))}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}var u=!0,c=!1,l=void 0;try{for(var f,h=this.mutations[Symbol.iterator]();!(u=(f=h.next()).done);u=!0){var d=f.value;d.key.isEqual(e.key)&&(t=An(d,e,t,this.localWriteTime))}}catch(e){c=!0,l=e}finally{try{u||null==h.return||h.return()}finally{if(c)throw l}}return t}},{key:"applyToLocalDocumentSet",value:function(e,t){var n=this,r=en();return this.mutations.forEach((function(i){var a=e.get(i.key),o=a.overlayedDocument,s=n.applyToLocalView(o,a.mutatedFields),u=Sn(o,s=t.has(i.key)?null:s);null!==u&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())})),r}},{key:"keys",value:function(){return this.mutations.reduce((function(e,t){return e.add(t.key)}),an())}},{key:"isEqual",value:function(e){return this.batchId===e.batchId&&X(this.mutations,e.mutations,(function(e,t){return On(e,t)}))&&X(this.baseMutations,e.baseMutations,(function(e,t){return On(e,t)}))}}]),t}(),zn=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.batch=n,this.commitVersion=r,this.mutationResults=i,this.docVersions=a}return e(u)(t,null,[{key:"from",value:function(e,n,r){R(e.mutations.length===r.length);for(var i=nn,a=e.mutations,o=0;o<a.length;o++)i=i.insert(a[o].key,r[o].version);return new t(e,n,r,i)}}]),t}(),Hn=function(){"use strict";function t(n,r){e(o)(this,t),this.largestBatchId=n,this.mutation=r}return e(u)(t,[{key:"getKey",value:function(){return this.mutation.key}},{key:"isEqual",value:function(e){return null!==e&&this.mutation===e.mutation}},{key:"toString",value:function(){return"Overlay{\n      largestBatchId: ".concat(this.largestBatchId,",\n      mutation: ").concat(this.mutation.toString(),"\n    }")}}]),t}();function Wn(e){switch(e){default:return D();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function qn(e){if(void 0===e)return A("GRPC error has no .code"),L.UNKNOWN;switch(e){case Un.OK:return L.OK;case Un.CANCELLED:return L.CANCELLED;case Un.UNKNOWN:return L.UNKNOWN;case Un.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Un.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Un.INTERNAL:return L.INTERNAL;case Un.UNAVAILABLE:return L.UNAVAILABLE;case Un.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Un.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Un.NOT_FOUND:return L.NOT_FOUND;case Un.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Un.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Un.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Un.ABORTED:return L.ABORTED;case Un.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Un.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Un.DATA_LOSS:return L.DATA_LOSS;default:return D()}}(Fn=Un||(Un={}))[Fn.OK=0]="OK",Fn[Fn.CANCELLED=1]="CANCELLED",Fn[Fn.UNKNOWN=2]="UNKNOWN",Fn[Fn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fn[Fn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fn[Fn.NOT_FOUND=5]="NOT_FOUND",Fn[Fn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fn[Fn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fn[Fn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fn[Fn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fn[Fn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fn[Fn.ABORTED=10]="ABORTED",Fn[Fn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fn[Fn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fn[Fn.INTERNAL=13]="INTERNAL",Fn[Fn.UNAVAILABLE=14]="UNAVAILABLE",Fn[Fn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new(0,x.Integer)([4294967295,4294967295],0);e(v)(Error);var Kn=function t(n,r){"use strict";e(o)(this,t),this.databaseId=n,this.useProto3Json=r};function Gn(e,t){return e.useProto3Json?"".concat(new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z",""),".").concat(("000000000"+t.nanoseconds).slice(-9),"Z"):{seconds:""+t.seconds,nanos:t.nanoseconds}}function Qn(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Xn(e,t){return Gn(e,t.toTimestamp())}function Yn(e){return R(!!e),J.fromTimestamp((t=Pe(e),new Y(t.seconds,t.nanos)));var t}function Jn(e,t){return(n=e,new Z(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function $n(e){var t=Z.fromString(e);return R(ur(t)),t}function Zn(e,t){return Jn(e.databaseId,t.path)}function er(e){var t=$n(e);return 4===t.length?Z.emptyPath():nr(t)}function tr(e){return new Z(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function nr(e){return R(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function rr(e,t,n){return{name:Zn(e,t),fields:n.value.mapValue.fields}}function ir(e,t){var n,r,i;if(t instanceof Dn)n={update:rr(e,t.key,t.value)};else if(t instanceof Vn)n={delete:Zn(e,t.key)};else if(t instanceof Rn)n={update:rr(e,t.key,t.data),updateMask:(r=t.fieldMask,i=[],r.fields.forEach((function(e){return i.push(e.canonicalString())})),{fieldPaths:i})};else{if(!(t instanceof jn))return D();n={verify:Zn(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((function(e){return function(e,t){var n=t.transform;if(n instanceof vn)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof yn)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof gn)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof wn)return{fieldPath:t.field.canonicalString(),increment:n.Te};throw D()}(0,e)}))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Xn(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:D()}(e,t.precondition)),n}function ar(e){var t=er(e.parent),n=e.structuredQuery,r=n.from?n.from.length:0,i=null;if(r>0){R(1===r);var a=n.from[0];a.allDescendants?i=a.collectionId:t=t.child(a.collectionId)}var o,s,u=[];n.where&&(o=n.where,u=(s=or(o))instanceof ft&&dt(s)?s.getFilters():[s]);var c=[];n.orderBy&&(c=n.orderBy.map((function(e){return new st(sr((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));var l=null;n.limit&&(l=function(e){var t;return ve(t="object"==typeof e?e.value:e)?null:t}(n.limit));var f=null;n.startAt&&(f=function(e){var t=!!e.before,n=e.values||[];return new it(n,t)}(n.startAt));var h=null;return n.endAt&&(h=function(e){var t=!e.before,n=e.values||[];return new it(n,t)}(n.endAt)),Ot(t,i,c,u,l,"F",f,h)}function or(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":var t=sr(e.unaryFilter.field);return lt.create(t,"==",{doubleValue:NaN});case"IS_NULL":var n=sr(e.unaryFilter.field);return lt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":var r=sr(e.unaryFilter.field);return lt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":var i=sr(e.unaryFilter.field);return lt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return D()}}(e):void 0!==e.fieldFilter?(n=e,lt.create(sr(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return D()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,ft.create(t.compositeFilter.filters.map((function(e){return or(e)})),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return D()}}(t.compositeFilter.op))):D();var t,n}function sr(e){return te.fromServerFormat(e.fieldPath)}function ur(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cr=function t(n){"use strict";e(o)(this,t),this.ht=n};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e){var t=ar({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?jt(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fr=function(){"use strict";function t(){e(o)(this,t)}return e(u)(t,[{key:"dt",value:function(e,t){this.Tt(e,t),t.Et()}},{key:"Tt",value:function(e,t){if("nullValue"in e)this.At(t,5);else if("booleanValue"in e)this.At(t,10),t.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(t,15),t.Rt(Le(e.integerValue));else if("doubleValue"in e){var n=Le(e.doubleValue);isNaN(n)?this.At(t,13):(this.At(t,15),ye(n)?t.Rt(0):t.Rt(n))}else if("timestampValue"in e){var r=e.timestampValue;this.At(t,20),"string"==typeof r?t.Vt(r):(t.Vt("".concat(r.seconds||"")),t.Rt(r.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,t),this.gt(t);else if("bytesValue"in e)this.At(t,30),t.yt(Me(e.bytesValue)),this.gt(t);else if("referenceValue"in e)this.wt(e.referenceValue,t);else if("geoPointValue"in e){var i=e.geoPointValue;this.At(t,45),t.Rt(i.latitude||0),t.Rt(i.longitude||0)}else"mapValue"in e?et(e)?this.At(t,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,t),this.gt(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.gt(t)):D()}},{key:"ft",value:function(e,t){this.At(t,25),this.Dt(e,t)}},{key:"Dt",value:function(e,t){t.Vt(e)}},{key:"St",value:function(e,t){var n=e.fields||{};this.At(t,55);var r=!0,i=!1,a=void 0;try{for(var o,s=Object.keys(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;this.ft(u,t),this.Tt(n[u],t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"bt",value:function(e,t){var n=e.values||[];this.At(t,50);var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;this.Tt(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"wt",value:function(e,t){var n=this;this.At(t,37),ne.fromName(e).path.forEach((function(e){n.At(t,60),n.Dt(e,t)}))}},{key:"At",value:function(e,t){e.Rt(t)}},{key:"gt",value:function(e){e.Rt(2)}}]),t}();fr.Ct=new fr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var hr=function(){"use strict";function t(){e(o)(this,t),this.an=new dr}return e(u)(t,[{key:"addToCollectionParentIndex",value:function(e,t){return this.an.add(t),he.resolve()}},{key:"getCollectionParents",value:function(e,t){return he.resolve(this.an.getEntries(t))}},{key:"addFieldIndex",value:function(e,t){return he.resolve()}},{key:"deleteFieldIndex",value:function(e,t){return he.resolve()}},{key:"deleteAllFieldIndexes",value:function(e){return he.resolve()}},{key:"createTargetIndexes",value:function(e,t){return he.resolve()}},{key:"getDocumentsMatchingTarget",value:function(e,t){return he.resolve(null)}},{key:"getIndexType",value:function(e,t){return he.resolve(0)}},{key:"getFieldIndexes",value:function(e,t){return he.resolve([])}},{key:"getNextCollectionGroupToUpdate",value:function(e){return he.resolve(null)}},{key:"getMinOffset",value:function(e,t){return he.resolve(oe.min())}},{key:"getMinOffsetFromCollectionGroup",value:function(e,t){return he.resolve(oe.min())}},{key:"updateCollectionGroup",value:function(e,t,n){return he.resolve()}},{key:"updateIndexEntries",value:function(e,t){return he.resolve()}}]),t}(),dr=function(){"use strict";function t(){e(o)(this,t),this.index={}}return e(u)(t,[{key:"add",value:function(e){var t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Se(Z.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}},{key:"has",value:function(e){var t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}},{key:"getEntries",value:function(e){return(this.index[e]||new Se(Z.comparator)).toArray()}}]),t}();new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var pr=function(){"use strict";function t(n,r,i){e(o)(this,t),this.cacheSizeCollectionThreshold=n,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=i}return e(u)(t,null,[{key:"withCacheSize",value:function(e){return new t(e,t.DEFAULT_COLLECTION_PERCENTILE,t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pr.DEFAULT_COLLECTION_PERCENTILE=10,pr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pr.DEFAULT=new pr(41943040,pr.DEFAULT_COLLECTION_PERCENTILE,pr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pr.DISABLED=new pr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vr=function(){"use strict";function t(n){e(o)(this,t),this.Nn=n}return e(u)(t,[{key:"next",value:function(){return this.Nn+=2,this.Nn}}],[{key:"Bn",value:function(){return new t(0)}},{key:"Ln",value:function(){return new t(-1)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yr=function(){"use strict";function t(){e(o)(this,t),this.changes=new Gt((function(e){return e.toString()}),(function(e,t){return e.isEqual(t)})),this.changesApplied=!1}return e(u)(t,[{key:"addEntry",value:function(e){this.assertNotApplied(),this.changes.set(e.key,e)}},{key:"removeEntry",value:function(e,t){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(t))}},{key:"getEntry",value:function(e,t){this.assertNotApplied();var n=this.changes.get(t);return void 0!==n?he.resolve(n):this.getFromCache(e,t)}},{key:"getEntries",value:function(e,t){return this.getAllFromCache(e,t)}},{key:"apply",value:function(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}},{key:"assertNotApplied",value:function(){}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var mr=function t(n,r){"use strict";e(o)(this,t),this.overlayedDocument=n,this.mutatedFields=r},gr=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.remoteDocumentCache=n,this.mutationQueue=r,this.documentOverlayCache=i,this.indexManager=a}return e(u)(t,[{key:"getDocument",value:function(e,t){var n=this,r=null;return this.documentOverlayCache.getOverlay(e,t).next((function(i){return r=i,n.remoteDocumentCache.getEntry(e,t)})).next((function(e){return null!==r&&An(r.mutation,e,Ae.empty(),Y.now()),e}))}},{key:"getDocuments",value:function(e,t){var n=this;return this.remoteDocumentCache.getEntries(e,t).next((function(t){return n.getLocalViewOfDocuments(e,t,an()).next((function(){return t}))}))}},{key:"getLocalViewOfDocuments",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:an(),r=this,i=Zt();return this.populateOverlays(e,i,t).next((function(){return r.computeViews(e,t,i,n).next((function(e){var t=Jt();return e.forEach((function(e,n){t=t.insert(e,n.overlayedDocument)})),t}))}))}},{key:"getOverlayedDocuments",value:function(e,t){var n=this,r=Zt();return this.populateOverlays(e,r,t).next((function(){return n.computeViews(e,t,r,an())}))}},{key:"populateOverlays",value:function(e,t,n){var r=[];return n.forEach((function(e){t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((function(e){e.forEach((function(e,n){t.set(e,n)}))}))}},{key:"computeViews",value:function(e,t,n,r){var i=Xt(),a=tn(),o=tn();return t.forEach((function(e,t){var o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Rn)?i=i.insert(t.key,t):void 0!==o?(a.set(t.key,o.mutation.getFieldMask()),An(o.mutation,t,o.mutation.getFieldMask(),Y.now())):a.set(t.key,Ae.empty())})),this.recalculateAndSaveOverlays(e,i).next((function(e){return e.forEach((function(e,t){return a.set(e,t)})),t.forEach((function(e,t){var n;return o.set(e,new mr(t,null!==(n=a.get(e))&&void 0!==n?n:null))})),o}))}},{key:"recalculateAndSaveOverlays",value:function(e,t){var n=this,r=tn(),i=new Ee((function(e,t){return e-t})),a=an();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((function(e){var n=!0,a=!1,o=void 0;try{for(var s,u=function(e,n){var a=n.value;a.keys().forEach((function(e){var n=t.get(e);if(null!==n){var o=r.get(e)||Ae.empty();o=a.applyToLocalView(n,o),r.set(e,o);var s=(i.get(a.batchId)||an()).add(e);i=i.insert(a.batchId,s)}}))},c=e[Symbol.iterator]();!(n=(s=c.next()).done);n=!0)u(0,s)}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}})).next((function(){for(var o=[],s=i.getReverseIterator();s.hasNext();){var u=s.getNext(),c=u.key,l=u.value,f=en();l.forEach((function(e){if(!a.has(e)){var n=Sn(t.get(e),r.get(e));null!==n&&f.set(e,n),a=a.add(e)}})),o.push(n.documentOverlayCache.saveOverlays(e,c,f))}return he.waitFor(o)})).next((function(){return r}))}},{key:"recalculateAndSaveOverlaysForDocumentKeys",value:function(e,t){var n=this;return this.remoteDocumentCache.getEntries(e,t).next((function(t){return n.recalculateAndSaveOverlays(e,t)}))}},{key:"getDocumentsMatchingQuery",value:function(e,t,n,r){return i=t,ne.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):Mt(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var i}},{key:"getNextDocuments",value:function(e,t,n,r){var i=this;return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((function(a){var o=i,s=r-a.size>0?i.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-a.size):he.resolve(Zt()),u=-1,c=a;return s.next((function(t){return he.forEach(t,(function(t,n){return u<n.largestBatchId&&(u=n.largestBatchId),a.get(t)?he.resolve():o.remoteDocumentCache.getEntry(e,t).next((function(e){c=c.insert(t,e)}))})).next((function(){return o.populateOverlays(e,t,a)})).next((function(){return o.computeViews(e,c,t,an())})).next((function(e){return{batchId:u,changes:$t(e)}}))}))}))}},{key:"getDocumentsMatchingDocumentQuery",value:function(e,t){return this.getDocument(e,new ne(t)).next((function(e){var t=Jt();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}},{key:"getDocumentsMatchingCollectionGroupQuery",value:function(e,t,n,r){var i=this,a=t.collectionGroup,o=Jt();return this.indexManager.getCollectionParents(e,a).next((function(s){return he.forEach(s,(function(s){var u,c,l=(u=t,c=s.child(a),new Nt(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt));return i.getDocumentsMatchingCollectionQuery(e,l,n,r).next((function(e){e.forEach((function(e,t){o=o.insert(e,t)}))}))})).next((function(){return o}))}))}},{key:"getDocumentsMatchingCollectionQuery",value:function(e,t,n,r){var i,a=this;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((function(o){return i=o,a.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)})).next((function(e){i.forEach((function(t,n){var r=n.getKey();null===e.get(r)&&(e=e.insert(r,rt.newInvalidDocument(r)))}));var n=Jt();return e.forEach((function(e,r){var a=i.get(e);void 0!==a&&An(a.mutation,r,Ae.empty(),Y.now()),Wt(t,r)&&(n=n.insert(e,r))})),n}))}}]),t}(),kr=function(){"use strict";function t(n){e(o)(this,t),this.serializer=n,this.lr=new Map,this.hr=new Map}return e(u)(t,[{key:"getBundleMetadata",value:function(e,t){return he.resolve(this.lr.get(t))}},{key:"saveBundleMetadata",value:function(e,t){return this.lr.set(t.id,{id:(n=t).id,version:n.version,createTime:Yn(n.createTime)}),he.resolve();var n}},{key:"getNamedQuery",value:function(e,t){return he.resolve(this.hr.get(t))}},{key:"saveNamedQuery",value:function(e,t){return this.hr.set(t.name,{name:(n=t).name,query:lr(n.bundledQuery),readTime:Yn(n.readTime)}),he.resolve();var n}}]),t}(),wr=function(){"use strict";function t(){e(o)(this,t),this.overlays=new Ee(ne.comparator),this.Pr=new Map}return e(u)(t,[{key:"getOverlay",value:function(e,t){return he.resolve(this.overlays.get(t))}},{key:"getOverlays",value:function(e,t){var n=this,r=Zt();return he.forEach(t,(function(t){return n.getOverlay(e,t).next((function(e){null!==e&&r.set(t,e)}))})).next((function(){return r}))}},{key:"saveOverlays",value:function(e,t,n){var r=this;return n.forEach((function(n,i){r.It(e,t,i)})),he.resolve()}},{key:"removeOverlaysForBatchId",value:function(e,t,n){var r=this,i=this.Pr.get(n);return void 0!==i&&(i.forEach((function(e){return r.overlays=r.overlays.remove(e)})),this.Pr.delete(n)),he.resolve()}},{key:"getOverlaysForCollection",value:function(e,t,n){for(var r=Zt(),i=t.length+1,a=new ne(t.child("")),o=this.overlays.getIteratorFrom(a);o.hasNext();){var s=o.getNext().value,u=s.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&s.largestBatchId>n&&r.set(s.getKey(),s)}return he.resolve(r)}},{key:"getOverlaysForCollectionGroup",value:function(e,t,n,r){for(var i=new Ee((function(e,t){return e-t})),a=this.overlays.getIterator();a.hasNext();){var o=a.getNext().value;if(o.getKey().getCollectionGroup()===t&&o.largestBatchId>n){var s=i.get(o.largestBatchId);null===s&&(s=Zt(),i=i.insert(o.largestBatchId,s)),s.set(o.getKey(),o)}}for(var u=Zt(),c=i.getIterator();c.hasNext()&&(c.getNext().value.forEach((function(e,t){return u.set(e,t)})),!(u.size()>=r)););return he.resolve(u)}},{key:"It",value:function(e,t,n){var r=this.overlays.get(n.key);if(null!==r){var i=this.Pr.get(r.largestBatchId).delete(n.key);this.Pr.set(r.largestBatchId,i)}this.overlays=this.overlays.insert(n.key,new Hn(t,n));var a=this.Pr.get(t);void 0===a&&(a=an(),this.Pr.set(t,a)),this.Pr.set(t,a.add(n.key))}}]),t}(),br=function(){"use strict";function t(){e(o)(this,t),this.Ir=new Se(xr.dr),this.Tr=new Se(xr.Er)}return e(u)(t,[{key:"isEmpty",value:function(){return this.Ir.isEmpty()}},{key:"addReference",value:function(e,t){var n=new xr(e,t);this.Ir=this.Ir.add(n),this.Tr=this.Tr.add(n)}},{key:"Ar",value:function(e,t){var n=this;e.forEach((function(e){return n.addReference(e,t)}))}},{key:"removeReference",value:function(e,t){this.Rr(new xr(e,t))}},{key:"Vr",value:function(e,t){var n=this;e.forEach((function(e){return n.removeReference(e,t)}))}},{key:"mr",value:function(e){var t=this,n=new ne(new Z([])),r=new xr(n,e),i=new xr(n,e+1),a=[];return this.Tr.forEachInRange([r,i],(function(e){t.Rr(e),a.push(e.key)})),a}},{key:"gr",value:function(){var e=this;this.Ir.forEach((function(t){return e.Rr(t)}))}},{key:"Rr",value:function(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}},{key:"pr",value:function(e){var t=new ne(new Z([])),n=new xr(t,e),r=new xr(t,e+1),i=an();return this.Tr.forEachInRange([n,r],(function(e){i=i.add(e.key)})),i}},{key:"containsKey",value:function(e){var t=new xr(e,0),n=this.Ir.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}]),t}(),xr=function(){"use strict";function t(n,r){e(o)(this,t),this.key=n,this.yr=r}return e(u)(t,null,[{key:"dr",value:function(e,t){return ne.comparator(e.key,t.key)||Q(e.yr,t.yr)}},{key:"Er",value:function(e,t){return Q(e.yr,t.yr)||ne.comparator(e.key,t.key)}}]),t}(),_r=function(){"use strict";function t(n,r){e(o)(this,t),this.indexManager=n,this.referenceDelegate=r,this.mutationQueue=[],this.wr=1,this.Sr=new Se(xr.dr)}return e(u)(t,[{key:"checkEmpty",value:function(e){return he.resolve(0===this.mutationQueue.length)}},{key:"addMutationBatch",value:function(e,t,n,r){var i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];var a=new Bn(i,t,n,r);this.mutationQueue.push(a);var o=!0,s=!1,u=void 0;try{for(var c,l=r[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f=c.value;this.Sr=this.Sr.add(new xr(f.key,i)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast())}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return he.resolve(a)}},{key:"lookupMutationBatch",value:function(e,t){return he.resolve(this.br(t))}},{key:"getNextMutationBatchAfterBatchId",value:function(e,t){var n=t+1,r=this.Dr(n),i=r<0?0:r;return he.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}},{key:"getHighestUnacknowledgedBatchId",value:function(){return he.resolve(0===this.mutationQueue.length?-1:this.wr-1)}},{key:"getAllMutationBatches",value:function(e){return he.resolve(this.mutationQueue.slice())}},{key:"getAllMutationBatchesAffectingDocumentKey",value:function(e,t){var n=this,r=new xr(t,0),i=new xr(t,Number.POSITIVE_INFINITY),a=[];return this.Sr.forEachInRange([r,i],(function(e){var t=n.br(e.yr);a.push(t)})),he.resolve(a)}},{key:"getAllMutationBatchesAffectingDocumentKeys",value:function(e,t){var n=this,r=new Se(Q);return t.forEach((function(e){var t=new xr(e,0),i=new xr(e,Number.POSITIVE_INFINITY);n.Sr.forEachInRange([t,i],(function(e){r=r.add(e.yr)}))})),he.resolve(this.Cr(r))}},{key:"getAllMutationBatchesAffectingQuery",value:function(e,t){var n=t.path,r=n.length+1,i=n;ne.isDocumentKey(i)||(i=i.child(""));var a=new xr(new ne(i),0),o=new Se(Q);return this.Sr.forEachWhile((function(e){var t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.yr)),!0)}),a),he.resolve(this.Cr(o))}},{key:"Cr",value:function(e){var t=this,n=[];return e.forEach((function(e){var r=t.br(e);null!==r&&n.push(r)})),n}},{key:"removeMutationBatch",value:function(e,t){var n=this;R(0===this.vr(t.batchId,"removed")),this.mutationQueue.shift();var r=this.Sr;return he.forEach(t.mutations,(function(i){var a=new xr(i.key,t.batchId);return r=r.delete(a),n.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((function(){n.Sr=r}))}},{key:"xn",value:function(e){}},{key:"containsKey",value:function(e,t){var n=new xr(t,0),r=this.Sr.firstAfterOrEqual(n);return he.resolve(t.isEqual(r&&r.key))}},{key:"performConsistencyCheck",value:function(e){return this.mutationQueue.length,he.resolve()}},{key:"vr",value:function(e,t){return this.Dr(e)}},{key:"Dr",value:function(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}},{key:"br",value:function(e){var t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}]),t}(),Er=function(){"use strict";function t(n){e(o)(this,t),this.Fr=n,this.docs=new Ee(ne.comparator),this.size=0}return e(u)(t,[{key:"setIndexManager",value:function(e){this.indexManager=e}},{key:"addEntry",value:function(e,t){var n=t.key,r=this.docs.get(n),i=r?r.size:0,a=this.Fr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}},{key:"removeEntry",value:function(e){var t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}},{key:"getEntry",value:function(e,t){var n=this.docs.get(t);return he.resolve(n?n.document.mutableCopy():rt.newInvalidDocument(t))}},{key:"getEntries",value:function(e,t){var n=this,r=Xt();return t.forEach((function(e){var t=n.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():rt.newInvalidDocument(e))})),he.resolve(r)}},{key:"getDocumentsMatchingQuery",value:function(e,t,n,r){for(var i=Xt(),a=t.path,o=new ne(a.child("")),s=this.docs.getIteratorFrom(o);s.hasNext();){var u=s.getNext(),c=u.key,l=u.value.document;if(!a.isPrefixOf(c.path))break;c.path.length>a.length+1||se(ae(l),n)<=0||(r.has(l.key)||Wt(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return he.resolve(i)}},{key:"getAllFromCollectionGroup",value:function(e,t,n,r){D()}},{key:"Mr",value:function(e,t){return he.forEach(this.docs,(function(e){return t(e)}))}},{key:"newChangeBuffer",value:function(e){return new Ir(this)}},{key:"getSize",value:function(e){return he.resolve(this.size)}}]),t}(),Ir=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this)).ur=t,e(h)(i)}return e(u)(r,[{key:"applyChanges",value:function(e){var t=this,n=[];return this.changes.forEach((function(r,i){i.isValidDocument()?n.push(t.ur.addEntry(e,i)):t.ur.removeEntry(r)})),he.waitFor(n)}},{key:"getFromCache",value:function(e,t){return this.ur.getEntry(e,t)}},{key:"getAllFromCache",value:function(e,t){return this.ur.getEntries(e,t)}}]),r}(yr),Tr=function(){"use strict";function t(n){e(o)(this,t),this.persistence=n,this.Or=new Gt((function(e){return Ct(e)}),At),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Nr=0,this.Br=new br,this.targetCount=0,this.Lr=vr.Bn()}return e(u)(t,[{key:"forEachTarget",value:function(e,t){return this.Or.forEach((function(e,n){return t(n)})),he.resolve()}},{key:"getLastRemoteSnapshotVersion",value:function(e){return he.resolve(this.lastRemoteSnapshotVersion)}},{key:"getHighestSequenceNumber",value:function(e){return he.resolve(this.Nr)}},{key:"allocateTargetId",value:function(e){return this.highestTargetId=this.Lr.next(),he.resolve(this.highestTargetId)}},{key:"setTargetsMetadata",value:function(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Nr&&(this.Nr=t),he.resolve()}},{key:"Qn",value:function(e){this.Or.set(e.target,e);var t=e.targetId;t>this.highestTargetId&&(this.Lr=new vr(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}},{key:"addTargetData",value:function(e,t){return this.Qn(t),this.targetCount+=1,he.resolve()}},{key:"updateTargetData",value:function(e,t){return this.Qn(t),he.resolve()}},{key:"removeTargetData",value:function(e,t){return this.Or.delete(t.target),this.Br.mr(t.targetId),this.targetCount-=1,he.resolve()}},{key:"removeTargets",value:function(e,t,n){var r=this,i=0,a=[];return this.Or.forEach((function(o,s){s.sequenceNumber<=t&&null===n.get(s.targetId)&&(r.Or.delete(o),a.push(r.removeMatchingKeysForTargetId(e,s.targetId)),i++)})),he.waitFor(a).next((function(){return i}))}},{key:"getTargetCount",value:function(e){return he.resolve(this.targetCount)}},{key:"getTargetData",value:function(e,t){var n=this.Or.get(t)||null;return he.resolve(n)}},{key:"addMatchingKeys",value:function(e,t,n){return this.Br.Ar(t,n),he.resolve()}},{key:"removeMatchingKeys",value:function(e,t,n){this.Br.Vr(t,n);var r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((function(t){i.push(r.markPotentiallyOrphaned(e,t))})),he.waitFor(i)}},{key:"removeMatchingKeysForTargetId",value:function(e,t){return this.Br.mr(t),he.resolve()}},{key:"getMatchingKeysForTargetId",value:function(e,t){var n=this.Br.pr(t);return he.resolve(n)}},{key:"containsKey",value:function(e,t){return he.resolve(this.Br.containsKey(t))}}]),t}(),Sr=function(){"use strict";function t(n,r){var i=this;e(o)(this,t),this.kr={},this.overlays={},this.qr=new pe(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=n(this),this.Kr=new Tr(this),this.indexManager=new hr,this.remoteDocumentCache=new Er((function(e){return i.referenceDelegate.$r(e)})),this.serializer=new cr(r),this.Ur=new kr(this.serializer)}return e(u)(t,[{key:"start",value:function(){return Promise.resolve()}},{key:"shutdown",value:function(){return this.Qr=!1,Promise.resolve()}},{key:"started",get:function(){return this.Qr}},{key:"setDatabaseDeletedListener",value:function(){}},{key:"setNetworkEnabled",value:function(){}},{key:"getIndexManager",value:function(e){return this.indexManager}},{key:"getDocumentOverlayCache",value:function(e){var t=this.overlays[e.toKey()];return t||(t=new wr,this.overlays[e.toKey()]=t),t}},{key:"getMutationQueue",value:function(e,t){var n=this.kr[e.toKey()];return n||(n=new _r(t,this.referenceDelegate),this.kr[e.toKey()]=n),n}},{key:"getTargetCache",value:function(){return this.Kr}},{key:"getRemoteDocumentCache",value:function(){return this.remoteDocumentCache}},{key:"getBundleCache",value:function(){return this.Ur}},{key:"runTransaction",value:function(e,t,n){var r=this;C("MemoryPersistence","Starting transaction:",e);var i=new Cr(this.qr.next());return this.referenceDelegate.Wr(),n(i).next((function(e){return r.referenceDelegate.Gr(i).next((function(){return e}))})).toPromise().then((function(e){return i.raiseOnCommittedEvent(),e}))}},{key:"zr",value:function(e,t){return he.or(Object.values(this.kr).map((function(n){return function(){return n.containsKey(e,t)}})))}}]),t}(),Cr=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this)).currentSequenceNumber=t,e(h)(i)}return r}(ce),Ar=function(){"use strict";function t(n){e(o)(this,t),this.persistence=n,this.jr=new br,this.Hr=null}return e(u)(t,[{key:"Yr",get:function(){if(this.Hr)return this.Hr;throw D()}},{key:"addReference",value:function(e,t,n){return this.jr.addReference(n,t),this.Yr.delete(n.toString()),he.resolve()}},{key:"removeReference",value:function(e,t,n){return this.jr.removeReference(n,t),this.Yr.add(n.toString()),he.resolve()}},{key:"markPotentiallyOrphaned",value:function(e,t){return this.Yr.add(t.toString()),he.resolve()}},{key:"removeTarget",value:function(e,t){var n=this;this.jr.mr(t.targetId).forEach((function(e){return n.Yr.add(e.toString())}));var r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((function(e){var t=n;e.forEach((function(e){return t.Yr.add(e.toString())}))})).next((function(){return r.removeTargetData(e,t)}))}},{key:"Wr",value:function(){this.Hr=new Set}},{key:"Gr",value:function(e){var t=this,n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return he.forEach(this.Yr,(function(r){var i=ne.fromPath(r);return t.Zr(e,i).next((function(e){e||n.removeEntry(i,J.min())}))})).next((function(){return t.Hr=null,n.apply(e)}))}},{key:"updateLimboDocument",value:function(e,t){var n=this;return this.Zr(e,t).next((function(e){e?n.Yr.delete(t.toString()):n.Yr.add(t.toString())}))}},{key:"$r",value:function(e){return 0}},{key:"Zr",value:function(e,t){var n=this;return he.or([function(){return he.resolve(n.jr.containsKey(t))},function(){return n.persistence.getTargetCache().containsKey(e,t)},function(){return n.persistence.zr(e,t)}])}}],[{key:"Jr",value:function(e){return new t(e)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Nr=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.targetId=n,this.fromCache=r,this.Qi=i,this.Ki=a}return e(u)(t,null,[{key:"$i",value:function(e,n){var r=an(),i=an(),a=!0,o=!1,s=void 0;try{for(var u,c=n.docChanges[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;switch(l.type){case 0:r=r.add(l.doc.key);break;case 1:i=i.add(l.doc.key)}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return new t(e,n.fromCache,r,i)}}]),t}(),Or=function(){"use strict";function t(){e(o)(this,t),this._documentReadCount=0}return e(u)(t,[{key:"documentReadCount",get:function(){return this._documentReadCount}},{key:"incrementDocumentReadCount",value:function(e){this._documentReadCount+=e}}]),t}(),Dr=function(){"use strict";function t(){e(o)(this,t),this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}return e(u)(t,[{key:"initialize",value:function(e,t){this.ji=e,this.indexManager=t,this.Ui=!0}},{key:"getDocumentsMatchingQuery",value:function(e,t,n,r){var i=this,a={result:null};return this.Hi(e,t).next((function(e){a.result=e})).next((function(){if(!a.result)return i.Ji(e,t,r,n).next((function(e){a.result=e}))})).next((function(){var n=i;if(!a.result){var r=new Or;return i.Yi(e,t,r).next((function(i){if(a.result=i,n.Wi)return n.Zi(e,t,r,i.size)}))}})).next((function(){return a.result}))}},{key:"Zi",value:function(e,t,n,r){return n.documentReadCount<this.Gi?(S()<=w.LogLevel.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",Ht(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),he.resolve()):(S()<=w.LogLevel.DEBUG&&C("QueryEngine","Query:",Ht(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.zi*r?(S()<=w.LogLevel.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",Ht(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ft(t))):he.resolve())}},{key:"Hi",value:function(t,n){var r=this;if(Rt(n))return he.resolve(null);var i=Ft(n);return this.indexManager.getIndexType(t,i).next((function(a){return 0===a?null:(null!==n.limit&&1===a&&(n=jt(n,null,"F"),i=Ft(n)),r.indexManager.getDocumentsMatchingTarget(t,i).next((function(a){var o=r,s=an.apply(void 0,e(p)(a));return r.ji.getDocuments(t,s).next((function(e){return o.indexManager.getMinOffset(t,i).next((function(r){var i=o.Xi(n,e);return o.es(n,i,s,r.readTime)?o.Hi(t,jt(n,null,"F")):o.ts(t,i,n,r)}))}))})))}))}},{key:"Ji",value:function(e,t,n,r){var i=this;return Rt(t)||r.isEqual(J.min())?he.resolve(null):this.ji.getDocuments(e,n).next((function(a){var o=i.Xi(t,a);return i.es(t,o,n,r)?he.resolve(null):(S()<=w.LogLevel.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ht(t)),i.ts(e,o,t,ie(r,-1)).next((function(e){return e})))}))}},{key:"Xi",value:function(e,t){var n=new Se(qt(e));return t.forEach((function(t,r){Wt(e,r)&&(n=n.add(r))})),n}},{key:"es",value:function(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;var i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}},{key:"Yi",value:function(e,t,n){return S()<=w.LogLevel.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",Ht(t)),this.ji.getDocumentsMatchingQuery(e,t,oe.min(),n)}},{key:"ts",value:function(e,t,n,r){return this.ji.getDocumentsMatchingQuery(e,n,r).next((function(e){return t.forEach((function(t){e=e.insert(t.key,t)})),e}))}}]),t}(),Rr=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this.persistence=n,this.ns=r,this.serializer=a,this.rs=new Ee(Q),this.ss=new Gt((function(e){return Ct(e)}),At),this.os=new Map,this._s=n.getRemoteDocumentCache(),this.Kr=n.getTargetCache(),this.Ur=n.getBundleCache(),this.us(i)}return e(u)(t,[{key:"us",value:function(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gr(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}},{key:"collectGarbage",value:function(e){var t=this;return this.persistence.runTransaction("Collect garbage","readwrite-primary",(function(n){return e.collect(n,t.rs)}))}}]),t}();
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(e,t,n,r){return new Rr(e,t,n,r)}function Lr(e,t){return Mr.apply(this,arguments)}function Mr(){return(Mr=e(i)(e(m).mark((function t(n,r){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=P(n),e.next=3,i.persistence.runTransaction("Handle user change","readonly",(function(e){var t;return i.mutationQueue.getAllMutationBatches(e).next((function(n){return t=n,i.us(r),i.mutationQueue.getAllMutationBatches(e)})).next((function(n){var r=[],a=[],o=an(),s=!0,u=!1,c=void 0;try{for(var l,f=t[Symbol.iterator]();!(s=(l=f.next()).done);s=!0){var h=l.value;r.push(h.batchId);var d=!0,p=!1,v=void 0;try{for(var y,m=h.mutations[Symbol.iterator]();!(d=(y=m.next()).done);d=!0){var g=y.value;o=o.add(g.key)}}catch(e){p=!0,v=e}finally{try{d||null==m.return||m.return()}finally{if(p)throw v}}}}catch(e){u=!0,c=e}finally{try{s||null==f.return||f.return()}finally{if(u)throw c}}var k=!0,w=!1,b=void 0;try{for(var x,_=n[Symbol.iterator]();!(k=(x=_.next()).done);k=!0){var E=x.value;a.push(E.batchId);var I=!0,T=!1,S=void 0;try{for(var C,A=E.mutations[Symbol.iterator]();!(I=(C=A.next()).done);I=!0){var N=C.value;o=o.add(N.key)}}catch(e){T=!0,S=e}finally{try{I||null==A.return||A.return()}finally{if(T)throw S}}}}catch(e){w=!0,b=e}finally{try{k||null==_.return||_.return()}finally{if(w)throw b}}return i.localDocuments.getDocuments(e,o).next((function(e){return{cs:e,removedBatchIds:r,addedBatchIds:a}}))}))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ur(e,t){var n=P(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(function(e){var r,i,a,o,s,u,c,l=t.batch.keys(),f=n._s.newChangeBuffer({trackRemovals:!0});return(r=n,i=e,a=t,o=f,s=a.batch,u=s.keys(),c=he.resolve(),u.forEach((function(e){c=c.next((function(){return o.getEntry(i,e)})).next((function(t){var n=a.docVersions.get(e);R(null!==n),t.version.compareTo(n)<0&&(s.applyToRemoteDocument(t,a),t.isValidDocument()&&(t.setReadTime(a.commitVersion),o.addEntry(t)))}))})),c.next((function(){return r.mutationQueue.removeMutationBatch(i,s)}))).next((function(){return f.apply(e)})).next((function(){return n.mutationQueue.performConsistencyCheck(e)})).next((function(){return n.documentOverlayCache.removeOverlaysForBatchId(e,l,t.batch.batchId)})).next((function(){return n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){for(var t=an(),n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))})).next((function(){return n.localDocuments.getDocuments(e,l)}))}))}function Fr(e){var t=P(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(function(e){return t.Kr.getLastRemoteSnapshotVersion(e)}))}function Vr(e,t){var n=P(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(function(e){return void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)}))}var jr=function(){"use strict";function t(){e(o)(this,t),this.activeTargetIds=sn()}return e(u)(t,[{key:"Rs",value:function(e){this.activeTargetIds=this.activeTargetIds.add(e)}},{key:"Vs",value:function(e){this.activeTargetIds=this.activeTargetIds.delete(e)}},{key:"As",value:function(){var e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}]),t}(),Br=function(){"use strict";function t(){e(o)(this,t),this.ro=new jr,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}return e(u)(t,[{key:"addPendingMutation",value:function(e){}},{key:"updateMutationState",value:function(e,t,n){}},{key:"addLocalQueryTarget",value:function(e){return this.ro.Rs(e),this.io[e]||"not-current"}},{key:"updateQueryState",value:function(e,t,n){this.io[e]=t}},{key:"removeLocalQueryTarget",value:function(e){this.ro.Vs(e)}},{key:"isLocalQueryTarget",value:function(e){return this.ro.activeTargetIds.has(e)}},{key:"clearQueryState",value:function(e){delete this.io[e]}},{key:"getAllActiveQueryTargets",value:function(){return this.ro.activeTargetIds}},{key:"isActiveQueryTarget",value:function(e){return this.ro.activeTargetIds.has(e)}},{key:"start",value:function(){return this.ro=new jr,Promise.resolve()}},{key:"handleUserChange",value:function(e,t,n){}},{key:"setOnlineState",value:function(e){}},{key:"shutdown",value:function(){}},{key:"writeSequenceNumber",value:function(e){}},{key:"notifyBundleLoaded",value:function(e){}}]),t}(),zr=function(){"use strict";function t(){e(o)(this,t)}return e(u)(t,[{key:"so",value:function(e){}},{key:"shutdown",value:function(){}}]),t}(),Hr=function(){"use strict";function t(){var n=this;e(o)(this,t),this.oo=function(){return n._o()},this.ao=function(){return n.uo()},this.co=[],this.lo()}return e(u)(t,[{key:"so",value:function(e){this.co.push(e)}},{key:"shutdown",value:function(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}},{key:"lo",value:function(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}},{key:"_o",value:function(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");var e=!0,t=!1,n=void 0;try{for(var r,i=this.co[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){(0,r.value)(0)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}},{key:"uo",value:function(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");var e=!0,t=!1,n=void 0;try{for(var r,i=this.co[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){(0,r.value)(1)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}}],[{key:"C",value:function(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}]),t}(),Wr=null;function qr(){return null===Wr?Wr=268435456+Math.round(2147483648*Math.random()):Wr++,"0x"+Wr.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}var Kr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},Gr=function(){"use strict";function t(n){e(o)(this,t),this.ho=n.ho,this.Po=n.Po}return e(u)(t,[{key:"Io",value:function(e){this.To=e}},{key:"Eo",value:function(e){this.Ao=e}},{key:"onMessage",value:function(e){this.Ro=e}},{key:"close",value:function(){this.Po()}},{key:"send",value:function(e){this.ho(e)}},{key:"Vo",value:function(){this.To()}},{key:"mo",value:function(e){this.Ao(e)}},{key:"fo",value:function(e){this.Ro(e)}}]),t}(),Qr="WebChannelConnection",Xr=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t){var i;return e(o)(this,r),(i=n.call(this,t)).forceLongPolling=t.forceLongPolling,i.autoDetectLongPolling=t.autoDetectLongPolling,i.useFetchStreams=t.useFetchStreams,i.longPollingOptions=t.longPollingOptions,e(h)(i)}return e(u)(r,[{key:"vo",value:function(e,t,n,r){var i=qr();return new Promise((function(a,o){var s=new(0,x.XhrIo);s.setWithCredentials(!0),s.listenOnce(x.EventType.COMPLETE,(function(){try{switch(s.getLastErrorCode()){case x.ErrorCode.NO_ERROR:var t=s.getResponseJson();C(Qr,"XHR for RPC '".concat(e,"' ").concat(i," received:"),JSON.stringify(t)),a(t);break;case x.ErrorCode.TIMEOUT:C(Qr,"RPC '".concat(e,"' ").concat(i," timed out")),o(new M(L.DEADLINE_EXCEEDED,"Request time out"));break;case x.ErrorCode.HTTP_ERROR:var n=s.getStatus();if(C(Qr,"RPC '".concat(e,"' ").concat(i," failed with status:"),n,"response text:",s.getResponseText()),n>0){var r=s.getResponseJson();Array.isArray(r)&&(r=r[0]);var u=null==r?void 0:r.error;if(u&&u.status&&u.message){var c=(l=u.status,f=l.toLowerCase().replace(/_/g,"-"),Object.values(L).indexOf(f)>=0?f:L.UNKNOWN);o(new M(c,u.message))}else o(new M(L.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new M(L.UNAVAILABLE,"Connection failed."));break;default:D()}}finally{C(Qr,"RPC '".concat(e,"' ").concat(i," completed."))}var l,f}));var u=JSON.stringify(r);C(Qr,"RPC '".concat(e,"' ").concat(i," sending request:"),r),s.send(t,"POST",u,n,15)}))}},{key:"Mo",value:function(e,t,n){var r=qr(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,x.createWebChannelTransport)(),o=(0,x.getStatEventTarget)(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/".concat(this.databaseId.projectId,"/databases/").concat(this.databaseId.database)},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(s.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(s.useFetchStreams=!0),this.Co(s.initMessageHeaders,t,n),s.encodeInitMessageHeaders=!0;var c=i.join("");C(Qr,"Creating RPC '".concat(e,"' stream ").concat(r,": ").concat(c),s);var l=a.createWebChannel(c,s),f=!1,h=!1,d=new Gr({ho:function(t){h?C(Qr,"Not sending because RPC '".concat(e,"' stream ").concat(r," is closed:"),t):(f||(C(Qr,"Opening RPC '".concat(e,"' stream ").concat(r," transport.")),l.open(),f=!0),C(Qr,"RPC '".concat(e,"' stream ").concat(r," sending:"),t),l.send(t))},Po:function(){return l.close()}}),p=function(e,t,n){e.listen(t,(function(e){try{n(e)}catch(e){setTimeout((function(){throw e}),0)}}))};return p(l,x.WebChannel.EventType.OPEN,(function(){h||C(Qr,"RPC '".concat(e,"' stream ").concat(r," transport opened."))})),p(l,x.WebChannel.EventType.CLOSE,(function(){h||(h=!0,C(Qr,"RPC '".concat(e,"' stream ").concat(r," transport closed")),d.mo())})),p(l,x.WebChannel.EventType.ERROR,(function(t){h||(h=!0,N(Qr,"RPC '".concat(e,"' stream ").concat(r," transport errored:"),t),d.mo(new M(L.UNAVAILABLE,"The operation could not be completed")))})),p(l,x.WebChannel.EventType.MESSAGE,(function(t){var n;if(!h){var i=t.data[0];R(!!i);var a=i,o=a.error||(null===(n=a[0])||void 0===n?void 0:n.error);if(o){C(Qr,"RPC '".concat(e,"' stream ").concat(r," received error:"),o);var s=o.status,u=function(e){var t=Un[e];if(void 0!==t)return qn(t)}(s),c=o.message;void 0===u&&(u=L.INTERNAL,c="Unknown error status: "+s+" with message "+o.message),h=!0,d.mo(new M(u,c)),l.close()}else C(Qr,"RPC '".concat(e,"' stream ").concat(r," received:"),i),d.fo(i)}})),p(o,x.Event.STAT_EVENT,(function(t){t.stat===x.Stat.PROXY?C(Qr,"RPC '".concat(e,"' stream ").concat(r," detected buffering proxy")):t.stat===x.Stat.NOPROXY&&C(Qr,"RPC '".concat(e,"' stream ").concat(r," detected no buffering proxy"))})),setTimeout((function(){d.Vo()}),0),d}}]),r}(function(){"use strict";function t(n){e(o)(this,t),this.databaseInfo=n,this.databaseId=n.databaseId;var r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo="projects/".concat(i,"/databases/").concat(a),this.wo="(default)"===this.databaseId.database?"project_id=".concat(i):"project_id=".concat(i,"&database_id=").concat(a)}return e(u)(t,[{key:"So",get:function(){return!1}},{key:"bo",value:function(e,t,n,r,i){var a=qr(),o=this.Do(e,t);C("RestConnection","Sending RPC '".concat(e,"' ").concat(a,":"),o,n);var s={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(s,r,i),this.vo(e,o,s,n).then((function(t){return C("RestConnection","Received RPC '".concat(e,"' ").concat(a,": "),t),t}),(function(t){throw N("RestConnection","RPC '".concat(e,"' ").concat(a," failed with error: "),t,"url: ",o,"request:",n),t}))}},{key:"Fo",value:function(e,t,n,r,i,a){return this.bo(e,t,n,r,i)}},{key:"Co",value:function(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+I,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((function(t,n){return e[n]=t})),n&&n.headers.forEach((function(t,n){return e[n]=t}))}},{key:"Do",value:function(e,t){var n=Kr[e];return"".concat(this.po,"/v1/").concat(t,":").concat(n)}}]),t}());
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(e){return new Kn(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $r=function(){"use strict";function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:6e4;e(o)(this,t),this._i=n,this.timerId=r,this.xo=i,this.Oo=a,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}return e(u)(t,[{key:"reset",value:function(){this.Bo=0}},{key:"qo",value:function(){this.Bo=this.No}},{key:"Qo",value:function(e){var t=this;this.cancel();var n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&C("ExponentialBackoff","Backing off for ".concat(i," ms (base delay: ").concat(this.Bo," ms, delay with jitter: ").concat(n," ms, last attempt: ").concat(r," ms ago)")),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,(function(){return t.ko=Date.now(),e()})),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}},{key:"$o",value:function(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}},{key:"cancel",value:function(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}},{key:"Ko",value:function(){return(Math.random()-.5)*this.Bo}}]),t}(),Zr=function(){"use strict";function t(n,r,i,a,s,u,c,l){e(o)(this,t),this._i=n,this.Uo=i,this.Wo=a,this.connection=s,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new $r(n,r)}return e(u)(t,[{key:"Jo",value:function(){return 1===this.state||5===this.state||this.Yo()}},{key:"Yo",value:function(){return 2===this.state||3===this.state}},{key:"start",value:function(){4!==this.state?this.auth():this.Zo()}},{key:"stop",value:function(){var t=this;return e(i)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t.Jo(),!e.t0){e.next=4;break}return e.next=4,t.close(0);case 4:case"end":return e.stop()}}),n)})))()}},{key:"Xo",value:function(){this.state=0,this.Ho.reset()}},{key:"e_",value:function(){var e=this;this.Yo()&&null===this.zo&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,(function(){return e.t_()})))}},{key:"n_",value:function(e){this.r_(),this.stream.send(e)}},{key:"t_",value:function(){var t=this;return e(i)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.Yo()){e.next=2;break}return e.abrupt("return",t.close(0));case 2:case"end":return e.stop()}}),n)})))()}},{key:"r_",value:function(){this.zo&&(this.zo.cancel(),this.zo=null)}},{key:"i_",value:function(){this.jo&&(this.jo.cancel(),this.jo=null)}},{key:"close",value:function(t,n){var r=this;return e(i)(e(m).mark((function i(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.r_(),r.i_(),r.Ho.cancel(),r.Go++,4!==t?r.Ho.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(A(n.toString()),A("Using maximum backoff delay to prevent overloading the backend."),r.Ho.qo()):n&&n.code===L.UNAUTHENTICATED&&3!==r.state&&(r.authCredentialsProvider.invalidateToken(),r.appCheckCredentialsProvider.invalidateToken()),null!==r.stream&&(r.s_(),r.stream.close(),r.stream=null),r.state=t,e.next=9,r.listener.Eo(n);case 9:case"end":return e.stop()}}),i)})))()}},{key:"s_",value:function(){}},{key:"auth",value:function(){var t=this;this.state=1;var n=this.o_(this.Go),r=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((function(n){var i=e(d)(n,2),a=i[0],o=i[1];t.Go===r&&t.__(a,o)}),(function(e){var r=t;n((function(){var t=new M(L.UNKNOWN,"Fetching auth token failed: "+e.message);return r.a_(t)}))}))}},{key:"__",value:function(e,t){var n=this,r=this.o_(this.Go);this.stream=this.u_(e,t),this.stream.Io((function(){var e=n;r((function(){return e.state=2,e.jo=e._i.enqueueAfterDelay(e.Wo,1e4,(function(){return e.Yo()&&(e.state=3),Promise.resolve()})),e.listener.Io()}))})),this.stream.Eo((function(e){var t=n;r((function(){return t.a_(e)}))})),this.stream.onMessage((function(e){var t=n;r((function(){return t.onMessage(e)}))}))}},{key:"Zo",value:function(){var t=this;this.state=5,this.Ho.Qo(e(i)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.state=0,t.start();case 1:case"end":return e.stop()}}),n)}))))}},{key:"a_",value:function(e){return C("PersistentStream","close with error: ".concat(e)),this.stream=null,this.close(4,e)}},{key:"o_",value:function(e){var t=this;return function(n){var r=t;t._i.enqueueAndForget((function(){return r.Go===e?n():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())}))}}}]),t}(),ei=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i,a,s,u,c){var l;return e(o)(this,r),(l=n.call(this,t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,s,c)).serializer=u,l.P_=!1,e(h)(l)}return e(u)(r,[{key:"I_",get:function(){return this.P_}},{key:"start",value:function(){this.P_=!1,this.lastStreamToken=void 0,e(c)(e(l)(r.prototype),"start",this).call(this)}},{key:"s_",value:function(){this.P_&&this.d_([])}},{key:"u_",value:function(e,t){return this.connection.Mo("Write",e,t)}},{key:"onMessage",value:function(e){if(R(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();var t=(r=e.writeResults,i=e.commitTime,r&&r.length>0?(R(void 0!==i),r.map((function(e){return n=i,(r=(t=e).updateTime?Yn(t.updateTime):Yn(n)).isEqual(J.min())&&(r=Yn(n)),new _n(r,t.transformResults||[]);var t,n,r}))):[]),n=Yn(e.commitTime);return this.listener.T_(n,t)}var r,i;return R(!e.writeResults||0===e.writeResults.length),this.P_=!0,this.listener.E_()}},{key:"A_",value:function(){var e={};e.database=tr(this.serializer),this.n_(e)}},{key:"d_",value:function(e){var t=this,n={streamToken:this.lastStreamToken,writes:e.map((function(e){return ir(t.serializer,e)}))};this.n_(n)}}]),r}(Zr),ti=function(t){"use strict";e(f)(r,(function t(){e(o)(this,t)}));var n=e(y)(r);function r(t,i,a,s){var u;return e(o)(this,r),(u=n.call(this)).authCredentials=t,u.appCheckCredentials=i,u.connection=a,u.serializer=s,u.R_=!1,e(h)(u)}return e(u)(r,[{key:"V_",value:function(){if(this.R_)throw new M(L.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"bo",value:function(t,n,r){var i=this;return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(a){var o=e(d)(a,2),s=o[0],u=o[1];return i.connection.bo(t,n,r,s,u)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===L.UNAUTHENTICATED&&(i.authCredentials.invalidateToken(),i.appCheckCredentials.invalidateToken()),e):new M(L.UNKNOWN,e.toString())}))}},{key:"Fo",value:function(t,n,r,i){var a=this;return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(o){var s=e(d)(o,2),u=s[0],c=s[1];return a.connection.Fo(t,n,r,u,c,i)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===L.UNAUTHENTICATED&&(a.authCredentials.invalidateToken(),a.appCheckCredentials.invalidateToken()),e):new M(L.UNKNOWN,e.toString())}))}},{key:"terminate",value:function(){this.R_=!0}}]),r}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ni=function(){"use strict";function t(n,r){e(o)(this,t),this.asyncQueue=n,this.onlineStateHandler=r,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}return e(u)(t,[{key:"y_",value:function(){var e=this;0===this.f_&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(function(){return e.g_=null,e.S_("Backend didn't respond within 10 seconds."),e.w_("Offline"),Promise.resolve()})))}},{key:"b_",value:function(e){"Online"===this.state?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_("Connection failed 1 times. Most recent error: ".concat(e.toString())),this.w_("Offline")))}},{key:"set",value:function(e){this.D_(),this.f_=0,"Online"===e&&(this.p_=!1),this.w_(e)}},{key:"w_",value:function(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}},{key:"S_",value:function(e){var t="Could not reach Cloud Firestore backend. ".concat(e,"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.");this.p_?(A(t),this.p_=!1):C("OnlineStateTracker",t)}},{key:"D_",value:function(){null!==this.g_&&(this.g_.cancel(),this.g_=null)}}]),t}(),ri=function t(n,r,a,s,u){"use strict";var c=this;e(o)(this,t),this.localStore=n,this.datastore=r,this.asyncQueue=a,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=u,this.x_.so((function(t){var n=c;a.enqueueAndForget(e(i)(e(m).mark((function t(){return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=ui(n),!t.t0){t.next=5;break}return C("RemoteStore","Restarting streams for network reachability change."),t.next=5,function(){var t=e(i)(e(m).mark((function t(n){var r;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=P(n)).F_.add(4),e.next=4,oi(r);case 4:return r.O_.set("Unknown"),r.F_.delete(4),e.next=8,ii(r);case 8:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()(n);case 5:case"end":return t.stop()}}),t)}))))})),this.O_=new ni(a,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(e){return ai.apply(this,arguments)}function ai(){return(ai=e(i)(e(m).mark((function t(n){var r,i,a,o,s,u;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!0,i=!1,a=void 0,!ui(n)){e.next=25;break}e.prev=2,o=n.M_[Symbol.iterator]();case 4:if(r=(s=o.next()).done){e.next=11;break}return u=s.value,e.next=8,u(!0);case 8:r=!0,e.next=4;break;case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),i=!0,a=e.t0;case 17:e.prev=17,e.prev=18,r||null==o.return||o.return();case 20:if(e.prev=20,!i){e.next=23;break}throw a;case 23:return e.finish(20);case 24:return e.finish(17);case 25:case"end":return e.stop()}}),t,null,[[2,13,17,25],[18,,20,24]])})))).apply(this,arguments)}function oi(e){return si.apply(this,arguments)}function si(){return(si=e(i)(e(m).mark((function t(n){var r,i,a,o,s,u;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=!0,i=!1,a=void 0,e.prev=1,o=n.M_[Symbol.iterator]();case 3:if(r=(s=o.next()).done){e.next=10;break}return u=s.value,e.next=7,u(!1);case 7:r=!0,e.next=3;break;case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),i=!0,a=e.t0;case 16:e.prev=16,e.prev=17,r||null==o.return||o.return();case 19:if(e.prev=19,!i){e.next=22;break}throw a;case 22:return e.finish(19);case 23:return e.finish(16);case 24:case"end":return e.stop()}}),t,null,[[1,12,16,24],[17,,19,23]])})))).apply(this,arguments)}function ui(e){return 0===P(e).F_.size}function ci(e,t,n){return li.apply(this,arguments)}function li(){return(li=e(i)(e(m).mark((function t(n,r,a){return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(de(r)){t.next=2;break}throw r;case 2:return n.F_.add(1),t.next=5,oi(n);case 5:n.O_.set("Offline"),a||(a=function(){return Fr(n.localStore)}),n.asyncQueue.enqueueRetryable(e(i)(e(m).mark((function t(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C("RemoteStore","Retrying IndexedDB access"),e.next=3,a();case 3:return n.F_.delete(1),e.next=6,ii(n);case 6:case"end":return e.stop()}}),t)}))));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function fi(e,t){return t().catch((function(n){return ci(e,n,t)}))}function hi(e){return di.apply(this,arguments)}function di(){return(di=e(i)(e(m).mark((function t(n){var r,i,a,o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=P(n),i=Ni(r),a=r.C_.length>0?r.C_[r.C_.length-1].batchId:-1;case 2:if(!pi(r)){e.next=19;break}return e.prev=3,e.next=6,Vr(r.localStore,a);case 6:if(null!==(o=e.sent)){e.next=10;break}return 0===r.C_.length&&i.e_(),e.abrupt("break",19);case 10:a=o.batchId,vi(r,o),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(3),e.next=17,ci(r,e.t0);case 17:e.next=2;break;case 19:yi(r)&&mi(r);case 20:case"end":return e.stop()}}),t,null,[[3,13]])})))).apply(this,arguments)}function pi(e){return ui(e)&&e.C_.length<10}function vi(e,t){e.C_.push(t);var n=Ni(e);n.Yo()&&n.I_&&n.d_(t.mutations)}function yi(e){return ui(e)&&!Ni(e).Jo()&&e.C_.length>0}function mi(e){Ni(e).start()}function gi(e){return ki.apply(this,arguments)}function ki(){return(ki=e(i)(e(m).mark((function t(n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ni(n).A_();case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function wi(e){return bi.apply(this,arguments)}function bi(){return(bi=e(i)(e(m).mark((function t(n){var r,i,a,o,s,u,c;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=Ni(n),i=!0,a=!1,o=void 0,e.prev=2,s=n.C_[Symbol.iterator]();!(i=(u=s.next()).done);i=!0)c=u.value,r.d_(c.mutations);e.next=10;break;case 6:e.prev=6,e.t0=e.catch(2),a=!0,o=e.t0;case 10:e.prev=10,e.prev=11,i||null==s.return||s.return();case 13:if(e.prev=13,!a){e.next=16;break}throw o;case 16:return e.finish(13);case 17:return e.finish(10);case 18:case"end":return e.stop()}}),t,null,[[2,6,10,18],[11,,13,17]])})))).apply(this,arguments)}function xi(e,t,n){return _i.apply(this,arguments)}function _i(){return(_i=e(i)(e(m).mark((function t(n,r,i){var a,o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.C_.shift(),o=zn.from(a,r,i),e.next=3,fi(n,(function(){return n.remoteSyncer.applySuccessfulWrite(o)}));case 3:return e.next=5,hi(n);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ei(e,t){return Ii.apply(this,arguments)}function Ii(){return Ii=e(i)(e(m).mark((function t(n,r){return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r&&Ni(n).I_,!t.t0){t.next=4;break}return t.next=4,function(){var t=e(i)(e(m).mark((function t(n,r){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Wn(t=r.code)||t===L.ABORTED){e.next=7;break}return i=n.C_.shift(),Ni(n).Xo(),e.next=5,fi(n,(function(){return n.remoteSyncer.rejectFailedWrite(i.batchId,r)}));case 5:return e.next=7,hi(n);case 7:case"end":return e.stop()}var t}),t)})));return function(e,n){return t.apply(this,arguments)}}()(n,r);case 4:yi(n)&&mi(n);case 5:case"end":return t.stop()}}),t)}))),Ii.apply(this,arguments)}function Ti(e,t){return Si.apply(this,arguments)}function Si(){return(Si=e(i)(e(m).mark((function t(n,r){var i,a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=P(n)).asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials"),a=ui(i),i.F_.add(3),e.next=6,oi(i);case 6:return a&&i.O_.set("Unknown"),e.next=9,i.remoteSyncer.handleCredentialChange(r);case 9:return i.F_.delete(3),e.next=12,ii(i);case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ci(e,t){return Ai.apply(this,arguments)}function Ai(){return(Ai=e(i)(e(m).mark((function t(n,r){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=P(n),!r){e.next=7;break}return i.F_.delete(2),e.next=5,ii(i);case 5:e.next=13;break;case 7:if(e.t0=r,e.t0){e.next=13;break}return i.F_.add(2),e.next=12,oi(i);case 12:i.O_.set("Unknown");case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ni(t){return t.L_||(t.L_=(r=t.datastore,a=t.asyncQueue,o={Io:gi.bind(null,t),Eo:Ei.bind(null,t),E_:wi.bind(null,t),T_:xi.bind(null,t)},(s=P(r)).V_(),new ei(a,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,o)),t.M_.push((n=e(i)(e(m).mark((function n(r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=6;break}return t.L_.Xo(),e.next=4,hi(t);case 4:e.next=9;break;case 6:return e.next=8,t.L_.stop();case 8:t.C_.length>0&&(C("RemoteStore","Stopping write stream with ".concat(t.C_.length," pending writes")),t.C_=[]);case 9:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)}))),t.L_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */;var n,r,a,o,s}var Oi=function(){"use strict";function t(n,r,i,a,s){e(o)(this,t),this.asyncQueue=n,this.timerId=r,this.targetTimeMs=i,this.op=a,this.removalCallback=s,this.deferred=new U,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((function(e){}))}return e(u)(t,[{key:"promise",get:function(){return this.deferred.promise}},{key:"start",value:function(e){var t=this;this.timerHandle=setTimeout((function(){return t.handleDelayElapsed()}),e)}},{key:"skipDelay",value:function(){return this.handleDelayElapsed()}},{key:"cancel",value:function(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new M(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}},{key:"handleDelayElapsed",value:function(){var e=this;this.asyncQueue.enqueueAndForget((function(){return null!==e.timerHandle?(e.clearTimeout(),e.op().then((function(t){return e.deferred.resolve(t)}))):Promise.resolve()}))}},{key:"clearTimeout",value:function(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}],[{key:"createAndSchedule",value:function(e,n,r,i,a){var o=new t(e,n,Date.now()+r,i,a);return o.start(r),o}}]),t}();function Di(e,t){if(A("AsyncQueue","".concat(t,": ").concat(e)),de(e))return new M(L.UNAVAILABLE,"".concat(t,": ").concat(e));throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ri=function t(){"use strict";e(o)(this,t),this.queries=new Gt((function(e){return zt(e)}),Bt),this.onlineState="Unknown",this.K_=new Set};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(e){e.K_.forEach((function(e){e.next()}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Li=function(){"use strict";function t(n,r,i,a,s,u){e(o)(this,t),this.localStore=n,this.remoteStore=r,this.eventManager=i,this.sharedClientState=a,this.currentUser=s,this.maxConcurrentLimboResolutions=u,this.fa={},this.ga=new Gt((function(e){return zt(e)}),Bt),this.pa=new Map,this.ya=new Set,this.wa=new Ee(ne.comparator),this.Sa=new Map,this.ba=new br,this.Da={},this.Ca=new Map,this.va=vr.Ln(),this.onlineState="Unknown",this.Fa=void 0}return e(u)(t,[{key:"isPrimaryClient",get:function(){return!0===this.Fa}}]),t}();function Mi(e,t,n){return Ui.apply(this,arguments)}function Ui(){return(Ui=e(i)(e(m).mark((function t(n,r,i){var a,o,s;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Xi(n),e.prev=1,e.next=4,function(e,t){var n,r,i=P(e),a=Y.now(),o=t.reduce((function(e,t){return e.add(t.key)}),an());return i.persistence.runTransaction("Locally write mutations","readwrite",(function(e){var s=Xt(),u=an();return i._s.getEntries(e,o).next((function(e){(s=e).forEach((function(e,t){t.isValidDocument()||(u=u.add(e))}))})).next((function(){return i.localDocuments.getOverlayedDocuments(e,s)})).next((function(r){n=r;var o=[],s=!0,u=!1,c=void 0;try{for(var l,f=t[Symbol.iterator]();!(s=(l=f.next()).done);s=!0){var h=l.value,d=Nn(h,n.get(h.key).overlayedDocument);null!=d&&o.push(new Rn(h.key,d,nt(d.value.mapValue),En.exists(!0)))}}catch(e){u=!0,c=e}finally{try{s||null==f.return||f.return()}finally{if(u)throw c}}return i.mutationQueue.addMutationBatch(e,a,o,t)})).next((function(t){r=t;var a=t.applyToLocalDocumentSet(n,u);return i.documentOverlayCache.saveOverlays(e,t.batchId,a)}))})).then((function(){return{batchId:r.batchId,changes:$t(n)}}))}(a.localStore,r);case 4:return o=e.sent,a.sharedClientState.addPendingMutation(o.batchId),t=a,u=o.batchId,c=i,l=void 0,(l=t.Da[t.currentUser.toKey()])||(l=new Ee(Q)),l=l.insert(u,c),t.Da[t.currentUser.toKey()]=l,e.next=9,qi(a,o.changes);case 9:return e.next=11,hi(a.remoteStore);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),s=Di(e.t0,"Failed to persist write"),i.reject(s);case 17:case"end":return e.stop()}var t,u,c,l}),t,null,[[1,13]])})))).apply(this,arguments)}function Fi(e,t,n){var r=P(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){var i=[];r.ga.forEach((function(e,n){var r=n.view.U_(t);r.snapshot&&i.push(r.snapshot)})),function(e,t){var n=P(e);n.onlineState=t;var r=!1;n.queries.forEach((function(e,n){var i=!0,a=!1,o=void 0;try{for(var s,u=n.listeners[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){s.value.U_(t)&&(r=!0)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}})),r&&Pi(n)}(r.eventManager,t),i.length&&r.fa.c_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}function Vi(e,t){return ji.apply(this,arguments)}function ji(){return(ji=e(i)(e(m).mark((function t(n,r){var i,a,o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=P(n),a=r.batch.batchId,e.prev=1,e.next=4,Ur(i.localStore,r);case 4:return o=e.sent,Wi(i,a,null),Hi(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),e.next=10,qi(i,o);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,le(e.t0);case 16:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function Bi(e,t,n){return zi.apply(this,arguments)}function zi(){return(zi=e(i)(e(m).mark((function t(n,r,i){var a,o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=P(n),e.prev=1,e.next=4,function(e,t){var n=P(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(function(e){var r;return n.mutationQueue.lookupMutationBatch(e,t).next((function(t){return R(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)})).next((function(){return n.mutationQueue.performConsistencyCheck(e)})).next((function(){return n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)})).next((function(){return n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)})).next((function(){return n.localDocuments.getDocuments(e,r)}))}))}(a.localStore,r);case 4:return o=e.sent,Wi(a,r,i),Hi(a,r),a.sharedClientState.updateMutationState(r,"rejected",i),e.next=10,qi(a,o);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,le(e.t0);case 16:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function Hi(e,t){(e.Ca.get(t)||[]).forEach((function(e){e.resolve()})),e.Ca.delete(t)}function Wi(e,t,n){var r=P(e),i=r.Da[r.currentUser.toKey()];if(i){var a=i.get(t);a&&(n?a.reject(n):a.resolve(),i=i.remove(t)),r.Da[r.currentUser.toKey()]=i}}function qi(e,t,n){return Ki.apply(this,arguments)}function Ki(){return Ki=e(i)(e(m).mark((function t(n,r,a){var o,s,u,c;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=P(n),s=[],u=[],c=[],t.t0=o.ga.isEmpty(),t.t0){t.next=9;break}return o.ga.forEach((function(e,t){c.push(o.Ma(t,r,a).then((function(e){if((e||a)&&o.isPrimaryClient&&o.sharedClientState.updateQueryState(t.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);var n=Nr.$i(t.targetId,e);u.push(n)}})))})),t.next=6,Promise.all(c);case 6:return o.fa.c_(s),t.next=9,function(){var t=e(i)(e(m).mark((function t(n,r){var i,a,o,s,u,c,l,f,h,d,p;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=P(n),e.prev=1,e.next=4,i.persistence.runTransaction("notifyLocalViewChanges","readwrite",(function(e){return he.forEach(r,(function(t){return he.forEach(t.Qi,(function(n){return i.persistence.referenceDelegate.addReference(e,t.targetId,n)})).next((function(){return he.forEach(t.Ki,(function(n){return i.persistence.referenceDelegate.removeReference(e,t.targetId,n)}))}))}))}));case 4:e.next=11;break;case 6:if(e.prev=6,e.t0=e.catch(1),de(e.t0)){e.next=10;break}throw e.t0;case 10:C("LocalStore","Failed to update sequence numbers: "+e.t0);case 11:for(a=!0,o=!1,s=void 0,e.prev=12,u=r[Symbol.iterator]();!(a=(c=u.next()).done);a=!0)l=c.value,f=l.targetId,l.fromCache||(h=i.rs.get(f),d=h.snapshotVersion,p=h.withLastLimboFreeSnapshotVersion(d),i.rs=i.rs.insert(f,p));e.next=20;break;case 16:e.prev=16,e.t1=e.catch(12),o=!0,s=e.t1;case 20:e.prev=20,e.prev=21,a||null==u.return||u.return();case 23:if(e.prev=23,!o){e.next=26;break}throw s;case 26:return e.finish(23);case 27:return e.finish(20);case 28:case"end":return e.stop()}}),t,null,[[1,6],[12,16,20,28],[21,,23,27]])})));return function(e,n){return t.apply(this,arguments)}}()(o.localStore,u);case 9:case"end":return t.stop()}}),t)}))),Ki.apply(this,arguments)}function Gi(e,t){return Qi.apply(this,arguments)}function Qi(){return(Qi=e(i)(e(m).mark((function t(n,r){var i,a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=P(n)).currentUser.isEqual(r)){e.next=11;break}return C("SyncEngine","User change. New user:",r.toKey()),e.next=5,Lr(i.localStore,r);case 5:return a=e.sent,i.currentUser=r,function(e,t){e.Ca.forEach((function(e){e.forEach((function(e){e.reject(new M(L.CANCELLED,t))}))})),e.Ca.clear()}(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(r,a.removedBatchIds,a.addedBatchIds),e.next=11,qi(i,a.cs);case 11:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Xi(e){var t=P(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Vi.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Bi.bind(null,t),t}var Yi=function(){"use strict";function t(){e(o)(this,t),this.synchronizeTabs=!1}return e(u)(t,[{key:"initialize",value:function(t){var n=this;return e(i)(e(m).mark((function r(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.serializer=Jr(t.databaseInfo.databaseId),n.sharedClientState=n.createSharedClientState(t),n.persistence=n.createPersistence(t),e.next=5,n.persistence.start();case 5:n.localStore=n.createLocalStore(t),n.gcScheduler=n.createGarbageCollectionScheduler(t,n.localStore),n.indexBackfillerScheduler=n.createIndexBackfillerScheduler(t,n.localStore);case 8:case"end":return e.stop()}}),r)})))()}},{key:"createGarbageCollectionScheduler",value:function(e,t){return null}},{key:"createIndexBackfillerScheduler",value:function(e,t){return null}},{key:"createLocalStore",value:function(e){return Pr(this.persistence,new Dr,e.initialUser,this.serializer)}},{key:"createPersistence",value:function(e){return new Sr(Ar.Jr,this.serializer)}},{key:"createSharedClientState",value:function(e){return new Br}},{key:"terminate",value:function(){var t=this;return e(i)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.gcScheduler&&t.gcScheduler.stop(),e.next=3,t.sharedClientState.shutdown();case 3:return e.next=5,t.persistence.shutdown();case 5:case"end":return e.stop()}}),n)})))()}}]),t}(),Ji=function(){"use strict";function t(){e(o)(this,t)}return e(u)(t,[{key:"initialize",value:function(t,n){var r=this;return e(i)(e(m).mark((function i(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r.localStore,e.t0){e.next=12;break}return r.localStore=t.localStore,r.sharedClientState=t.sharedClientState,r.datastore=r.createDatastore(n),r.remoteStore=r.createRemoteStore(n),r.eventManager=r.createEventManager(n),r.syncEngine=r.createSyncEngine(n,!t.synchronizeTabs),r.sharedClientState.onlineStateHandler=function(e){return Fi(r.syncEngine,e,1)},r.remoteStore.remoteSyncer.handleCredentialChange=Gi.bind(null,r.syncEngine),e.next=12,Ci(r.remoteStore,r.syncEngine.isPrimaryClient);case 12:case"end":return e.stop()}}),i)})))()}},{key:"createEventManager",value:function(e){return new Ri}},{key:"createDatastore",value:function(e){var t,n=Jr(e.databaseInfo.databaseId),r=(t=e.databaseInfo,new Xr(t));return function(e,t,n,r){return new ti(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,r,n)}},{key:"createRemoteStore",value:function(e){var t,n,r,i,a,o=this;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=function(e){return Fi(o.syncEngine,e,0)},a=Hr.C()?new Hr:new zr,new ri(t,n,r,i,a)}},{key:"createSyncEngine",value:function(e,t){return n=this.localStore,r=this.remoteStore,i=this.eventManager,a=this.sharedClientState,o=e.initialUser,s=e.maxConcurrentLimboResolutions,u=t,c=new Li(n,r,i,a,o,s),u&&(c.Fa=!0),c;var n,r,i,a,o,s,u,c}},{key:"terminate",value:function(){return(t=e(i)(e(m).mark((function t(n){var r;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=P(n),C("RemoteStore","RemoteStore shutting down."),r.F_.add(5),e.next=5,oi(r);case 5:r.x_.shutdown(),r.O_.set("Unknown");case 7:case"end":return e.stop()}}),t)}))),function(e){return t.apply(this,arguments)})(this.remoteStore);var t}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var $i=function(){"use strict";function t(n,r,a,s){var u=this;e(o)(this,t);var c,l=this;this.authCredentials=n,this.appCheckCredentials=r,this.asyncQueue=a,this.databaseInfo=s,this.user=E.UNAUTHENTICATED,this.clientId=G.V(),this.authCredentialListener=function(){return Promise.resolve()},this.appCheckCredentialListener=function(){return Promise.resolve()},this.authCredentials.start(a,(c=e(i)(e(m).mark((function t(n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C("FirestoreClient","Received user=",n.uid),e.next=3,l.authCredentialListener(n);case 3:l.user=n;case 4:case"end":return e.stop()}}),t)}))),function(e){return c.apply(this,arguments)})),this.appCheckCredentials.start(a,(function(e){return C("FirestoreClient","Received new app check token=",e),u.appCheckCredentialListener(e,u.user)}))}return e(u)(t,[{key:"getConfiguration",value:function(){var t=this;return e(i)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{asyncQueue:t.asyncQueue,databaseInfo:t.databaseInfo,clientId:t.clientId,authCredentials:t.authCredentials,appCheckCredentials:t.appCheckCredentials,initialUser:t.user,maxConcurrentLimboResolutions:100});case 1:case"end":return e.stop()}}),n)})))()}},{key:"setCredentialChangeListener",value:function(e){this.authCredentialListener=e}},{key:"setAppCheckTokenChangeListener",value:function(e){this.appCheckCredentialListener=e}},{key:"verifyNotTerminated",value:function(){if(this.asyncQueue.isShuttingDown)throw new M(L.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"terminate",value:function(){this.asyncQueue.enterRestrictedMode();var t=new U,n=this;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(e(i)(e(m).mark((function r(){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,e.t0=n._onlineComponents,!e.t0){e.next=5;break}return e.next=5,n._onlineComponents.terminate();case 5:if(e.t1=n._offlineComponents,!e.t1){e.next=9;break}return e.next=9,n._offlineComponents.terminate();case 9:n.authCredentials.shutdown(),n.appCheckCredentials.shutdown(),t.resolve(),e.next=18;break;case 14:e.prev=14,e.t2=e.catch(0),i=Di(e.t2,"Failed to shutdown persistence"),t.reject(i);case 18:case"end":return e.stop()}}),r,null,[[0,14]])})))),t.promise}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(e,t){return ea.apply(this,arguments)}function ea(){return ea=e(i)(e(m).mark((function t(n,r){var a,o;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider"),t.next=3,n.getConfiguration();case 3:return a=t.sent,t.next=6,r.initialize(a);case 6:o=a.initialUser,n.setCredentialChangeListener(function(){var t=e(i)(e(m).mark((function t(n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=o.isEqual(n),e.t0){e.next=5;break}return e.next=4,Lr(r.localStore,n);case 4:o=n;case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.persistence.setDatabaseDeletedListener((function(){return n.terminate()})),n._offlineComponents=r;case 8:case"end":return t.stop()}}),t)}))),ea.apply(this,arguments)}function ta(e,t){return na.apply(this,arguments)}function na(){return(na=e(i)(e(m).mark((function t(n,r){var i,a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.asyncQueue.verifyOperationInProgress(),e.next=3,ia(n);case 3:return i=e.sent,C("FirestoreClient","Initializing OnlineComponentProvider"),e.next=7,n.getConfiguration();case 7:return a=e.sent,e.next=10,r.initialize(i,a);case 10:n.setCredentialChangeListener((function(e){return Ti(r.remoteStore,e)})),n.setAppCheckTokenChangeListener((function(e,t){return Ti(r.remoteStore,t)})),n._onlineComponents=r;case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ra(e){return"FirebaseError"===e.name?e.code===L.FAILED_PRECONDITION||e.code===L.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}function ia(e){return aa.apply(this,arguments)}function aa(){return(aa=e(i)(e(m).mark((function t(n){var r;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n._offlineComponents){e.next=21;break}if(!n._uninitializedComponentsProvider){e.next=18;break}return C("FirestoreClient","Using user provided OfflineComponentProvider"),e.prev=3,e.next=6,Zi(n,n._uninitializedComponentsProvider._offline);case 6:e.next=16;break;case 8:if(e.prev=8,e.t0=e.catch(3),ra(r=e.t0)){e.next=13;break}throw r;case 13:return N("Error using user provided cache. Falling back to memory cache: "+r),e.next=16,Zi(n,new Yi);case 16:e.next=21;break;case 18:return C("FirestoreClient","Using default OfflineComponentProvider"),e.next=21,Zi(n,new Yi);case 21:return e.abrupt("return",n._offlineComponents);case 22:case"end":return e.stop()}}),t,null,[[3,8]])})))).apply(this,arguments)}function oa(e){return sa.apply(this,arguments)}function sa(){return(sa=e(i)(e(m).mark((function t(n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n._onlineComponents,e.t0){e.next=11;break}if(!n._uninitializedComponentsProvider){e.next=8;break}return C("FirestoreClient","Using user provided OnlineComponentProvider"),e.next=6,ta(n,n._uninitializedComponentsProvider._online);case 6:e.next=11;break;case 8:return C("FirestoreClient","Using default OnlineComponentProvider"),e.next=11,ta(n,new Ji);case 11:return e.abrupt("return",(e.t0,n._onlineComponents));case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ua(e){return oa(e).then((function(e){return e.syncEngine}))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ca(e){var t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}var la=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(e,t,n){if(!n)throw new M(L.INVALID_ARGUMENT,"Function ".concat(e,"() cannot be called with an empty ").concat(t,"."))}function ha(e){if(!ne.isDocumentKey(e))throw new M(L.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but ".concat(e," has ").concat(e.length,"."))}function da(e){if(ne.isDocumentKey(e))throw new M(L.INVALID_ARGUMENT,"Invalid collection reference. Collection references must have an odd number of segments, but ".concat(e," has ").concat(e.length,"."))}function pa(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e="".concat(e.substring(0,20),"...")),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";var t=(n=e).constructor?n.constructor.name:null;return t?"a custom ".concat(t," object"):"an object"}var n;return"function"==typeof e?"a function":D()}function va(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new M(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");var n=pa(e);throw new M(L.INVALID_ARGUMENT,"Expected type '".concat(t.name,"', but it was: ").concat(n))}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ya=function(){"use strict";function t(n){var r,i;if(e(o)(this,t),void 0===n.host){if(void 0!==n.ssl)throw new M(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(r=n.ssl)||void 0===r||r;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,this.localCache=n.localCache,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new M(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new M(L.INVALID_ARGUMENT,"".concat(e," and ").concat(n," cannot be used together."))})("experimentalForceLongPolling",n.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",n.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===n.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ca(null!==(i=n.experimentalLongPollingOptions)&&void 0!==i?i:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new M(L.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(e.timeoutSeconds," (must not be NaN)"));if(e.timeoutSeconds<5)throw new M(L.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(e.timeoutSeconds," (minimum allowed value is 5)"));if(e.timeoutSeconds>30)throw new M(L.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(e.timeoutSeconds," (maximum allowed value is 30)"))}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!n.useFetchStreams}return e(u)(t,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}]),t}(),ma=function(){"use strict";function t(n,r,i,a){e(o)(this,t),this._authCredentials=n,this._appCheckCredentials=r,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ya({}),this._settingsFrozen=!1}return e(u)(t,[{key:"app",get:function(){if(!this._app)throw new M(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new M(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ya(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new V;switch(e.type){case"firstParty":return new H(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new M(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=la.get(e))&&(C("ComponentProvider","Removing Datastore"),la.delete(e),t.terminate()),Promise.resolve();var e,t}}]),t}();function ga(e,t,n){var r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=(e=va(e,ma))._getSettings(),o="".concat(t,":").concat(n);if("firestore.googleapis.com"!==a.host&&a.host!==o&&N("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},a),{host:o,ssl:!1})),i.mockUserToken){var s,u;if("string"==typeof i.mockUserToken)s=i.mockUserToken,u=E.MOCK_USER;else{s=(0,b.createMockUserToken)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);var c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new M(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new E(c)}e._authCredentials=new j(new F(s,u))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ka=function(){"use strict";function t(n,r,i){e(o)(this,t),this.converter=r,this._query=i,this.type="query",this.firestore=n}return e(u)(t,[{key:"withConverter",value:function(e){return new t(this.firestore,e,this._query)}}]),t}(),wa=function(){"use strict";function t(n,r,i){e(o)(this,t),this.converter=r,this._key=i,this.type="document",this.firestore=n}return e(u)(t,[{key:"_path",get:function(){return this._key.path}},{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"path",get:function(){return this._key.path.canonicalString()}},{key:"parent",get:function(){return new ba(this.firestore,this.converter,this._key.path.popLast())}},{key:"withConverter",value:function(e){return new t(this.firestore,e,this._key)}}]),t}(),ba=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i,a){var s;return e(o)(this,r),(s=n.call(this,t,i,Dt(a)))._path=a,s.type="collection",e(h)(s)}return e(u)(r,[{key:"id",get:function(){return this._query.path.lastSegment()}},{key:"path",get:function(){return this._query.path.canonicalString()}},{key:"parent",get:function(){var e=this._path.popLast();return e.isEmpty()?null:new wa(this.firestore,null,new ne(e))}},{key:"withConverter",value:function(e){return new r(this.firestore,e,this._path)}}]),r}(ka);function xa(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(t=(0,b.getModularInstance)(t),fa("collection","path",n),t instanceof ma){var o,s=(o=Z).fromString.apply(o,[n].concat(e(p)(i)));return da(s),new ba(t,null,s)}var u;if(!(t instanceof wa||t instanceof ba))throw new M(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=t._path.child((u=Z).fromString.apply(u,[n].concat(e(p)(i))));return da(c),new ba(t.firestore,null,c)}function _a(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(t=(0,b.getModularInstance)(t),1===arguments.length&&(n=G.V()),fa("doc","path",n),t instanceof ma){var o,s=(o=Z).fromString.apply(o,[n].concat(e(p)(i)));return ha(s),new wa(t,null,new ne(s))}var u;if(!(t instanceof wa||t instanceof ba))throw new M(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=t._path.child((u=Z).fromString.apply(u,[n].concat(e(p)(i))));return ha(c),new wa(t.firestore,t instanceof ba?t.converter:null,new ne(c))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ea=function(){"use strict";function t(){var n=this;e(o)(this,t),this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new $r(this,"async_queue_retry"),this.ou=function(){var e=Yr();e&&C("AsyncQueue","Visibility state changed to "+e.visibilityState),n.Ho.$o()};var r=Yr();r&&"function"==typeof r.addEventListener&&r.addEventListener("visibilitychange",this.ou)}return e(u)(t,[{key:"isShuttingDown",get:function(){return this.eu}},{key:"enqueueAndForget",value:function(e){this.enqueue(e)}},{key:"enqueueAndForgetEvenWhileRestricted",value:function(e){this._u(),this.au(e)}},{key:"enterRestrictedMode",value:function(e){if(!this.eu){this.eu=!0,this.iu=e||!1;var t=Yr();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.ou)}}},{key:"enqueue",value:function(e){var t=this;if(this._u(),this.eu)return new Promise((function(){}));var n=new U;return this.au((function(){return t.eu&&t.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)})).then((function(){return n.promise}))}},{key:"enqueueRetryable",value:function(e){var t=this;this.enqueueAndForget((function(){return t.Xa.push(e),t.uu()}))}},{key:"uu",value:function(){var t=this;return e(i)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===t.Xa.length){e.next=14;break}return e.prev=1,e.next=4,t.Xa[0]();case 4:t.Xa.shift(),t.Ho.reset(),e.next=13;break;case 8:if(e.prev=8,e.t0=e.catch(1),de(e.t0)){e.next=12;break}throw e.t0;case 12:C("AsyncQueue","Operation failed with retryable error: "+e.t0);case 13:t.Xa.length>0&&t.Ho.Qo((function(){return t.uu()}));case 14:case"end":return e.stop()}}),n,null,[[1,8]])})))()}},{key:"au",value:function(e){var t=this,n=this.Za.then((function(){return t.ru=!0,e().catch((function(e){var n,r;throw t.nu=e,t.ru=!1,A("INTERNAL UNHANDLED ERROR: ",(r=(n=e).message||"",n.stack&&(r=n.stack.includes(n.message)?n.stack:n.message+"\n"+n.stack),r)),e})).then((function(e){return t.ru=!1,e}))}));return this.Za=n,n}},{key:"enqueueAfterDelay",value:function(e,t,n){var r=this;this._u(),this.su.indexOf(e)>-1&&(t=0);var i=Oi.createAndSchedule(this,e,t,n,(function(e){return r.cu(e)}));return this.tu.push(i),i}},{key:"_u",value:function(){this.nu&&D()}},{key:"verifyOperationInProgress",value:function(){}},{key:"lu",value:function(){var t=this;return e(i)(e(m).mark((function n(){var r;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:return r=t.Za,e.next=4,r;case 4:if(r!==t.Za){e.next=1;break}case 5:case"end":return e.stop()}}),n)})))()}},{key:"hu",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.tu[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.timerId===e)return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"Pu",value:function(e){var t=this;return this.lu().then((function(){t.tu.sort((function(e,t){return e.targetTimeMs-t.targetTimeMs}));var n=!0,r=!1,i=void 0;try{for(var a,o=t.tu[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s.skipDelay(),"all"!==e&&s.timerId===e)break}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t.lu()}))}},{key:"Iu",value:function(e){this.su.push(e)}},{key:"cu",value:function(e){var t=this.tu.indexOf(e);this.tu.splice(t,1)}}]),t}();var Ia=function(t){"use strict";e(f)(r,t);var n=e(y)(r);function r(t,i,a,s){var u;return e(o)(this,r),(u=n.call(this,t,i,a,s)).type="firestore",u._queue=new Ea,u._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]",e(h)(u)}return e(u)(r,[{key:"_terminate",value:function(){return this._firestoreClient||Ca(this),this._firestoreClient.terminate()}}]),r}(ma);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(t,n){var r="object"==typeof t?t:(0,g.getApp)(),i="string"==typeof t?t:n||"(default)",a=(0,g._getProvider)(r,"firestore").getImmediate({identifier:i});if(!a._initialized){var o=(0,b.getDefaultEmulatorHostnameAndPort)("firestore");o&&ga.apply(void 0,[a].concat(e(p)(o)))}return a}function Sa(e){return e._firestoreClient||Ca(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ca(e){var t,n,r,i,a,o,s,u=e._freezeSettings(),c=(i=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new je(i,a,o,(s=u).host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,ca(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new $i(e._authCredentials,e._appCheckCredentials,e._queue,c),(null===(n=u.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=u.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:u.localCache.kind,_offline:u.localCache._offlineComponentProvider,_online:u.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Aa=function(){"use strict";function t(n){e(o)(this,t),this._byteString=n}return e(u)(t,[{key:"toBase64",value:function(){return this._byteString.toBase64()}},{key:"toUint8Array",value:function(){return this._byteString.toUint8Array()}},{key:"toString",value:function(){return"Bytes(base64: "+this.toBase64()+")"}},{key:"isEqual",value:function(e){return this._byteString.isEqual(e._byteString)}}],[{key:"fromBase64String",value:function(e){try{return new t(De.fromBase64String(e))}catch(e){throw new M(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}},{key:"fromUint8Array",value:function(e){return new t(De.fromUint8Array(e))}}]),t}(),Na=function(){"use strict";function t(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e(o)(this,t);for(var a=0;a<r.length;++a)if(0===r[a].length)throw new M(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new te(r)}return e(u)(t,[{key:"isEqual",value:function(e){return this._internalPath.isEqual(e._internalPath)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Oa=function t(n){"use strict";e(o)(this,t),this._methodName=n},Da=function(){"use strict";function t(n,r){if(e(o)(this,t),!isFinite(n)||n<-90||n>90)throw new M(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+n);if(!isFinite(r)||r<-180||r>180)throw new M(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=n,this._long=r}return e(u)(t,[{key:"latitude",get:function(){return this._lat}},{key:"longitude",get:function(){return this._long}},{key:"isEqual",value:function(e){return this._lat===e._lat&&this._long===e._long}},{key:"toJSON",value:function(){return{latitude:this._lat,longitude:this._long}}},{key:"_compareTo",value:function(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}]),t}(),Ra=/^__.*__$/,Pa=function(){"use strict";function t(n,r,i){e(o)(this,t),this.data=n,this.fieldMask=r,this.fieldTransforms=i}return e(u)(t,[{key:"toMutation",value:function(e,t){return null!==this.fieldMask?new Rn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Dn(e,this.data,t,this.fieldTransforms)}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw D()}}var Ma=function(){"use strict";function t(n,r,i,a,s,u){e(o)(this,t),this.settings=n,this.databaseId=r,this.serializer=i,this.ignoreUndefinedProperties=a,void 0===s&&this.du(),this.fieldTransforms=s||[],this.fieldMask=u||[]}return e(u)(t,[{key:"path",get:function(){return this.settings.path}},{key:"Tu",get:function(){return this.settings.Tu}},{key:"Eu",value:function(e){return new t(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}},{key:"Au",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Eu({path:n,Ru:!1});return r.Vu(e),r}},{key:"mu",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Eu({path:n,Ru:!1});return r.du(),r}},{key:"fu",value:function(e){return this.Eu({path:void 0,Ru:!0})}},{key:"gu",value:function(e){return Ga(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}},{key:"contains",value:function(e){return void 0!==this.fieldMask.find((function(t){return e.isPrefixOf(t)}))||void 0!==this.fieldTransforms.find((function(t){return e.isPrefixOf(t.field)}))}},{key:"du",value:function(){if(this.path)for(var e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}},{key:"Vu",value:function(e){if(0===e.length)throw this.gu("Document fields must not be empty");if(La(this.Tu)&&Ra.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}]),t}(),Ua=function(){"use strict";function t(n,r,i){e(o)(this,t),this.databaseId=n,this.ignoreUndefinedProperties=r,this.serializer=i||Jr(n)}return e(u)(t,[{key:"wu",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Ma({Tu:e,methodName:t,yu:n,path:te.emptyPath(),Ru:!1,pu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}]),t}();function Fa(e){var t=e._freezeSettings(),n=Jr(e._databaseId);return new Ua(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Va(e,t,n,r,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=e.wu(a.merge||a.mergeFields?2:0,t,n,i);Ha("Data must be an object, but it was:",o,r);var s,u,c=Ba(r,o);if(a.merge)s=new Ae(o.fieldMask),u=o.fieldTransforms;else if(a.mergeFields){var l=[],f=!0,h=!1,d=void 0;try{for(var p,v=a.mergeFields[Symbol.iterator]();!(f=(p=v.next()).done);f=!0){var y=p.value,m=Wa(t,y,n);if(!o.contains(m))throw new M(L.INVALID_ARGUMENT,"Field '".concat(m,"' is specified in your field mask but missing from your input data."));Qa(l,m)||l.push(m)}}catch(e){h=!0,d=e}finally{try{f||null==v.return||v.return()}finally{if(h)throw d}}s=new Ae(l),u=o.fieldTransforms.filter((function(e){return s.covers(e.field)}))}else s=null,u=o.fieldTransforms;return new Pa(new tt(c),s,u)}function ja(e,t){if(za(e=(0,b.getModularInstance)(e)))return Ha("Unsupported field value:",t,e),Ba(e,t);if(e instanceof Oa)return function(e,t){if(!La(t.Tu))throw t.gu("".concat(e._methodName,"() can only be used with update() and set()"));if(!t.path)throw t.gu("".concat(e._methodName,"() is not currently supported inside arrays"));var n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Ru&&4!==t.Tu)throw t.gu("Nested arrays are not supported");return function(e,t){var n=[],r=0,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=ja(s.value,t.fu(r));null==c&&(c={nullValue:"NULL_VALUE"}),n.push(c),r++}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,b.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return ln(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){var n=Y.fromDate(e);return{timestampValue:Gn(t.serializer,n)}}if(e instanceof Y){var r=new Y(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Gn(t.serializer,r)}}if(e instanceof Da)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Aa)return{bytesValue:Qn(t.serializer,e._byteString)};if(e instanceof wa){var i=t.databaseId,a=e.firestore._databaseId;if(!a.isEqual(i))throw t.gu("Document reference is for database ".concat(a.projectId,"/").concat(a.database," but should be for database ").concat(i.projectId,"/").concat(i.database));return{referenceValue:Jn(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.gu("Unsupported field value: ".concat(pa(e)))}(e,t)}function Ba(e,t){var n={};return _e(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):xe(e,(function(e,r){var i=ja(r,t.Au(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function za(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Y||e instanceof Da||e instanceof Aa||e instanceof wa||e instanceof Oa)}function Ha(e,t,n){if(!za(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){var r=pa(n);throw"an object"===r?t.gu(e+" a custom object"):t.gu(e+" "+r)}var i}function Wa(e,t,n){if((t=(0,b.getModularInstance)(t))instanceof Na)return t._internalPath;if("string"==typeof t)return Ka(e,t);throw Ga("Field path arguments must be of type string or ",e,!1,void 0,n)}var qa=new RegExp("[~\\*/\\[\\]]");function Ka(t,n,r){if(n.search(qa)>=0)throw Ga("Invalid field path (".concat(n,"). Paths must not contain '~', '*', '/', '[', or ']'"),t,!1,void 0,r);try{return e(s)(Na,e(p)(n.split(".")))._internalPath}catch(e){throw Ga("Invalid field path (".concat(n,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),t,!1,void 0,r)}}function Ga(e,t,n,r,i){var a=r&&!r.isEmpty(),o=void 0!==i,s="Function ".concat(t,"() called with invalid data");n&&(s+=" (via `toFirestore()`)"),s+=". ";var u="";return(a||o)&&(u+=" (found",a&&(u+=" in field ".concat(r)),o&&(u+=" in document ".concat(i)),u+=")"),new M(L.INVALID_ARGUMENT,s+e+u)}function Qa(e,t){return e.some((function(e){return e.isEqual(t)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xa(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}function Ya(e,t,n){e=va(e,wa);var r=va(e.firestore,Ia),i=Xa(e.converter,t,n);return Ja(r,[Va(Fa(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,En.none())])}function Ja(t,n){return r=Sa(t),a=n,o=new U,r.asyncQueue.enqueueAndForget(e(i)(e(m).mark((function t(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Mi,e.next=3,ua(r);case 3:return e.t1=e.sent,e.t2=a,e.t3=o,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3));case 7:case"end":return e.stop()}}),t)})))),o.promise;var r,a,o}new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){var t,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t=g.SDK_VERSION,I=t,(0,g._registerComponent)(new(0,k.Component)("firestore",(function(e,t){var r=t.instanceIdentifier,i=t.options,a=e.getProvider("app").getImmediate(),o=new Ia(new B(e.getProvider("auth-internal")),new q(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new M(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Be(e.options.projectId,t)}(a,r),a);return i=Object.assign({useFetchStreams:n},i),o._setSettings(i),o}),"PUBLIC").setMultipleInstances(!0)),(0,g.registerVersion)(_,"4.2.0",e),(0,g.registerVersion)(_,"4.2.0","esm2017")}()})),a.register("aSES4",(function(r,i){t(r.exports,"createWebChannelTransport",(function(){return Tr})),t(r.exports,"getStatEventTarget",(function(){return Sr})),t(r.exports,"ErrorCode",(function(){return Cr})),t(r.exports,"EventType",(function(){return Ar})),t(r.exports,"Event",(function(){return Nr})),t(r.exports,"Stat",(function(){return Or})),t(r.exports,"WebChannel",(function(){return Dr})),t(r.exports,"XhrIo",(function(){return Rr})),t(r.exports,"Md5",(function(){return Pr})),t(r.exports,"Integer",(function(){return Lr}));var o,s=a("8MBJY"),u=a("a2hTj"),c=a("jh8P3"),l=a("fVNic"),f=a("eYQtU"),h=a("1t1Wn"),d=a("l5bVx"),p=a("2MbLg"),v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},y={},m=m||{},g=v||self;function k(t){var n=void 0===t?"undefined":e(d)(t);return"array"==(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null")||"object"==n&&"number"==typeof t.length}function w(t){var n=void 0===t?"undefined":e(d)(t);return"object"==n&&null!=t||"function"==n}var b="closure_uid_"+(1e9*Math.random()>>>0),x=0;function _(e,t,n){return e.call.apply(e.bind,arguments)}function E(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function I(e,t,n){return(I=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_:E).apply(null,arguments)}function T(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function S(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}function C(){this.s=this.s,this.o=this.o}C.prototype.s=!1,C.prototype.sa=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,b)&&e[b]||(e[b]=++x))},C.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var A=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function N(e){var t=e.length;if(0<t){for(var n=Array(t),r=0;r<t;r++)n[r]=e[r];return n}return[]}function O(e,t){for(var n=1;n<arguments.length;n++){var r=arguments[n];if(k(r)){var i=e.length||0,a=r.length||0;e.length=i+a;for(var o=0;o<a;o++)e[i+o]=r[o]}else e.push(r)}}function D(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{g.addEventListener("test",(function(){}),t),g.removeEventListener("test",(function(){}),t)}catch(e){}return e}();function P(e){return/^[\s\xa0]*$/.test(e)}function L(){var e=g.navigator;return e&&(e=e.userAgent)?e:""}function M(e){return-1!=L().indexOf(e)}function U(e){return U[" "](e),e}U[" "]=function(){};var F,V,j,B=M("Opera"),z=M("Trident")||M("MSIE"),H=M("Edge"),W=H||z,q=M("Gecko")&&!(-1!=L().toLowerCase().indexOf("webkit")&&!M("Edge"))&&!(M("Trident")||M("MSIE"))&&!M("Edge"),K=-1!=L().toLowerCase().indexOf("webkit")&&!M("Edge");function G(){var e=g.document;return e?e.documentMode:void 0}e:{var Q="",X=(V=L(),q?/rv:([^\);]+)(\)|;)/.exec(V):H?/Edge\/([\d\.]+)/.exec(V):z?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(V):K?/WebKit\/(\S+)/.exec(V):B?/(?:Version)[ \/]?(\S+)/.exec(V):void 0);if(X&&(Q=X?X[1]:""),z){var Y=G();if(null!=Y&&Y>parseFloat(Q)){F=String(Y);break e}}F=Q}if(g.document&&z){var J=G();j=J||(parseInt(F,10)||void 0)}else j=void 0;var $=j;function Z(e,t){if(D.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(q){e:{try{U(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.$.h.call(this)}}S(Z,D);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++ne,this.fa=this.ia=!1}function ie(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ae(e,t,n){for(var r in e)t.call(n,e[r],r,e)}function oe(e){var t={};for(var n in e)t[n]=e[n];return t}var se="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ue(e,t){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(var a=0;a<se.length;a++)n=se[a],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ce(e){this.src=e,this.g={},this.h=0}function le(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],a=A(i,t);(r=0<=a)&&Array.prototype.splice.call(i,a,1),r&&(ie(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function fe(e,t,n,r){for(var i=0;i<e.length;++i){var a=e[i];if(!a.fa&&a.listener==t&&a.capture==!!n&&a.la==r)return i}return-1}ce.prototype.add=function(e,t,n,r,i){var a=e.toString();(e=this.g[a])||(e=this.g[a]=[],this.h++);var o=fe(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new re(t,this.src,a,!!r,i)).ia=n,e.push(t)),t};var he="closure_lm_"+(1e6*Math.random()|0),de={};function pe(e,t,n,r,i){if(r&&r.once)return ye(e,t,n,r,i);if(Array.isArray(t)){for(var a=0;a<t.length;a++)pe(e,t[a],n,r,i);return null}return n=_e(n),e&&e[te]?e.O(t,n,w(r)?!!r.capture:!!r,i):ve(e,t,n,!1,r,i)}function ve(e,t,n,r,i,a){if(!t)throw Error("Invalid event type");var o=w(i)?!!i.capture:!!i,s=be(e);if(s||(e[he]=s=new ce(e)),(n=s.add(t,n,r,o,a)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=we;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)R||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ke(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ye(e,t,n,r,i){if(Array.isArray(t)){for(var a=0;a<t.length;a++)ye(e,t[a],n,r,i);return null}return n=_e(n),e&&e[te]?e.P(t,n,w(r)?!!r.capture:!!r,i):ve(e,t,n,!0,r,i)}function me(e,t,n,r,i){if(Array.isArray(t))for(var a=0;a<t.length;a++)me(e,t[a],n,r,i);else r=w(r)?!!r.capture:!!r,n=_e(n),e&&e[te]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=fe(a=e.g[t],n,r,i))&&(ie(a[n]),Array.prototype.splice.call(a,n,1),0==a.length&&(delete e.g[t],e.h--)))):e&&(e=be(e))&&(t=e.g[t.toString()],e=-1,t&&(e=fe(t,n,r,i)),(n=-1<e?t[e]:null)&&ge(n))}function ge(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[te])le(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ke(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=be(t))?(le(n,e),0==n.h&&(n.src=null,t[he]=null)):ie(e)}}}function ke(e){return e in de?de[e]:de[e]="on"+e}function we(e,t){if(e.fa)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.la||e.src;e.ia&&ge(e),e=n.call(r,t)}return e}function be(e){return(e=e[he])instanceof ce?e:null}var xe="__closure_events_fn_"+(1e9*Math.random()>>>0);function _e(e){return"function"==typeof e?e:(e[xe]||(e[xe]=function(t){return e.handleEvent(t)}),e[xe])}function Ee(){C.call(this),this.i=new ce(this),this.S=this,this.J=null}function Ie(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"==typeof t)t=new D(t,e);else if(t instanceof D)t.target=t.target||e;else{var i=t;ue(t=new D(r,e),i)}if(i=!0,n)for(var a=n.length-1;0<=a;a--){var o=t.g=n[a];i=Te(o,r,!0,t)&&i}if(i=Te(o=t.g=e,r,!0,t)&&i,i=Te(o,r,!1,t)&&i,n)for(a=0;a<n.length;a++)i=Te(o=t.g=n[a],r,!1,t)&&i}function Te(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,a=0;a<t.length;++a){var o=t[a];if(o&&!o.fa&&o.capture==n){var s=o.listener,u=o.la||o.src;o.ia&&le(e.i,o),i=!1!==s.call(u,r)&&i}}return i&&!r.defaultPrevented}S(Ee,C),Ee.prototype[te]=!0,Ee.prototype.removeEventListener=function(e,t,n,r){me(this,e,t,n,r)},Ee.prototype.N=function(){if(Ee.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ie(n[r]);delete t.g[e],t.h--}}this.J=null},Ee.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ee.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Se=g.JSON.stringify,Ce=function(){"use strict";function t(n,r){e(s)(this,t),this.i=n,this.j=r,this.h=0,this.g=null}return e(u)(t,[{key:"get",value:function(){var e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}]),t}();function Ae(){var e=Ue,t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Ne=function(){"use strict";function t(){e(s)(this,t),this.h=this.g=null}return e(u)(t,[{key:"add",value:function(e,t){var n=Oe.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}]),t}(),Oe=new Ce((function(){return new De}),(function(e){return e.reset()})),De=function(){"use strict";function t(){e(s)(this,t),this.next=this.g=this.h=null}return e(u)(t,[{key:"set",value:function(e,t){this.h=e,this.g=t,this.next=null}},{key:"reset",value:function(){this.next=this.g=this.h=null}}]),t}();function Re(e){var t=1;e=e.split(":");for(var n=[];0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Pe(e){g.setTimeout((function(){throw e}),0)}var Le,Me=!1,Ue=new Ne,Fe=function(){var e=g.Promise.resolve(void 0);Le=function(){e.then(Ve)}},Ve=function(){for(var e;e=Ae();){try{e.h.call(e.g)}catch(e){Pe(e)}var t=Oe;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Me=!1};function je(e,t){Ee.call(this),this.h=e||1,this.g=t||g,this.j=I(this.qb,this),this.l=Date.now()}function Be(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function ze(e,t,n){if("function"==typeof e)n&&(e=I(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=I(e.handleEvent,e)}return 2147483647<Number(t)?-1:g.setTimeout(e,t||0)}function He(e){e.g=ze((function(){e.g=null,e.i&&(e.i=!1,He(e))}),e.j);var t=e.h;e.h=null,e.m.apply(null,t)}S(je,Ee),(o=je.prototype).ga=!1,o.T=null,o.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ie(this,"tick"),this.ga&&(Be(this),this.start()))}},o.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},o.N=function(){je.$.N.call(this),Be(this),delete this.g};var We=function(t){"use strict";e(f)(r,t);var n=e(p)(r);function r(t,i){var a;return e(s)(this,r),(a=n.call(this)).m=t,a.j=i,a.h=null,a.i=!1,a.g=null,a}return e(u)(r,[{key:"l",value:function(e){this.h=arguments,this.g?this.i=!0:He(this)}},{key:"N",value:function(){e(c)(e(l)(r.prototype),"N",this).call(this),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}]),r}(C);function qe(e){C.call(this),this.h=e,this.g={}}S(qe,C);var Ke=[];function Ge(e,t,n,r){Array.isArray(n)||(n&&(Ke[0]=n.toString()),n=Ke);for(var i=0;i<n.length;i++){var a=pe(t,n[i],r||e.handleEvent,!1,e.h||e);if(!a)break;e.g[a.key]=a}}function Qe(e){ae(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ge(e)}),e),e.g={}}function Xe(){this.g=!0}function Ye(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var a=i[0];if("noop"!=a&&"stop"!=a&&"close"!=a)for(var o=1;o<i.length;o++)i[o]=""}}}return Se(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}qe.prototype.N=function(){qe.$.N.call(this),Qe(this)},qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xe.prototype.Ea=function(){this.g=!1},Xe.prototype.info=function(){};var Je={},$e=null;function Ze(){return $e=$e||new Ee}function et(e){D.call(this,Je.Ta,e)}function tt(e){var t=Ze();Ie(t,new et(t))}function nt(e,t){D.call(this,Je.STAT_EVENT,e),this.stat=t}function rt(e){var t=Ze();Ie(t,new nt(t,e))}function it(e,t){D.call(this,Je.Ua,e),this.size=t}function at(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return g.setTimeout((function(){e()}),t)}Je.Ta="serverreachability",S(et,D),Je.STAT_EVENT="statevent",S(nt,D),Je.Ua="timingevent",S(it,D);var ot={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},st={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ut(){}function ct(e){return e.h||(e.h=e.i())}function lt(){}ut.prototype.h=null;var ft,ht={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function dt(){D.call(this,"d")}function pt(){D.call(this,"c")}function vt(){}function yt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new qe(this),this.P=gt,e=W?125:void 0,this.V=new je(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new mt}function mt(){this.i=null,this.g="",this.h=!1}S(dt,D),S(pt,D),S(vt,ut),vt.prototype.g=function(){return new XMLHttpRequest},vt.prototype.i=function(){return{}},ft=new vt;var gt=45e3,kt={},wt={};function bt(e,t,n){e.L=1,e.v=jt(Lt(t)),e.s=n,e.S=!0,xt(e,null)}function xt(e,t){e.G=Date.now(),Tt(e),e.A=Lt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Zt(n.i,"t",r),e.C=0,n=e.l.J,e.h=new mt,e.g=er(e.l,n?t:null,!e.s),0<e.O&&(e.M=new We(I(e.Pa,e,e.g),e.O)),Ge(e.U,e.g,"readystatechange",e.nb),t=e.I?oe(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),tt(),function(e,t,n,r,i,a){e.info((function(){if(e.g)if(a)for(var o="",s=a.split("&"),u=0;u<s.length;u++){var c=s[u].split("=");if(1<c.length){var l=c[0];c=c[1];var f=l.split("_");o=2<=f.length&&"type"==f[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=a;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function _t(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function Et(e,t,n){for(var r,i=!0;!e.J&&e.C<n.length;){if((r=It(e,n))==wt){4==t&&(e.o=4,rt(14),i=!1),Ye(e.j,e.m,null,"[Incomplete Response]");break}if(r==kt){e.o=4,rt(15),Ye(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ye(e.j,e.m,r,null),Ot(e,r)}_t(e)&&r!=wt&&r!=kt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,rt(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Kn(t),t.M=!0,rt(11))):(Ye(e.j,e.m,n,"[Invalid Chunked Response]"),Nt(e),At(e))}function It(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?wt:(n=Number(t.substring(n,r)),isNaN(n)?kt:(r+=1)+n>t.length?wt:(t=t.slice(r,r+n),e.C=r+n,t))}function Tt(e){e.Y=Date.now()+e.P,St(e,e.P)}function St(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=at(I(e.lb,e),t)}function Ct(e){e.B&&(g.clearTimeout(e.B),e.B=null)}function At(e){0==e.l.H||e.J||Xn(e.l,e)}function Nt(e){Ct(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Be(e.V),Qe(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Ot(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||sn(n.i,e)))if(!e.K&&sn(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(a){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;Qn(n),Fn(n)}qn(n),rt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=at(I(n.ib,n),6e3));if(1>=on(n.i)&&n.oa){try{n.oa()}catch(a){}n.oa=void 0}}else Jn(n,11)}else if((e.K||n.g==e)&&Qn(n),!P(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){var a=i[t];if(n.V=a[0],a=a[1],2==n.H)if("c"==a[0]){n.K=a[1],n.pa=a[2];var o=a[3];null!=o&&(n.ra=o,n.l.info("VER="+n.ra));var s=a[4];null!=s&&(n.Ga=s,n.l.info("SVER="+n.Ga));var u=a[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;var c=e.g;if(c){var l=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var f=r.i;f.g||-1==l.indexOf("spdy")&&-1==l.indexOf("quic")&&-1==l.indexOf("h2")||(f.j=f.l,f.g=new Set,f.h&&(un(f,f.h),f.h=null))}if(r.F){var h=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;h&&(r.Da=h,Vt(r.I,r.F,h))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms"));var d=e;if((r=n).wa=Zn(r,r.J?r.pa:null,r.Y),d.K){cn(r.i,d);var p=d,v=r.L;v&&p.setTimeout(v),p.B&&(Ct(p),Tt(p)),r.g=d}else Wn(r);0<n.j.length&&jn(n)}else"stop"!=a[0]&&"close"!=a[0]||Jn(n,7);else 3==n.H&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?Jn(n,7):Un(n):"noop"!=a[0]&&n.h&&n.h.Aa(a),n.A=0)}tt()}catch(a){}}function Dt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(k(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(k(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(var r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(k(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,a=0;a<i;a++)t.call(void 0,r[a],n&&n[a],e)}(o=yt.prototype).setTimeout=function(e){this.P=e},o.nb=function(e){e=e.target;var t=this.M;t&&3==On(e)?t.l():this.Pa(e)},o.Pa=function(e){try{if(e==this.g)e:{var t=On(this.g),n=this.g.Ia();this.g.da();if(!(3>t)&&(3!=t||W||this.g&&(this.h.h||this.g.ja()||Dn(this.g)))){this.J||4!=t||7==n||tt(),Ct(this);var r=this.g.da();this.ca=r;t:if(_t(this)){var i=Dn(this.g);e="";var a=i.length,o=4==On(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Nt(this),At(this);var s="";break t}this.h.i=new g.TextDecoder}for(n=0;n<a;n++)this.h.h=!0,e+=this.h.i.decode(i[n],{stream:o&&n==a-1});i.splice(0,a),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.ja();if(this.i=200==r,function(e,t,n,r,i,a,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+a+" "+o}))}(this.j,this.u,this.A,this.m,this.W,t,r),this.i){if(this.aa&&!this.K){t:{if(this.g){var u,c=this.g;if((u=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(u)){var l=u;break t}}l=null}if(!(r=l)){this.i=!1,this.o=3,rt(12),Nt(this),At(this);break e}Ye(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ot(this,r)}this.S?(Et(this,t,s),W&&this.i&&3==t&&(Ge(this.U,this.V,"tick",this.mb),this.V.start())):(Ye(this.j,this.m,s,null),Ot(this,s)),4==t&&Nt(this),this.i&&!this.J&&(4==t?Xn(this.l,this):(this.i=!1,Tt(this)))}else(function(e){var t={};e=(e.g&&2<=On(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(var n=0;n<e.length;n++)if(!P(e[n])){var r=Re(e[n]),i=r[0];if("string"==typeof(r=r[1])){r=r.trim();var a=t[i]||[];t[i]=a,a.push(r)}}!function(e,t){for(var n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==r&&0<s.indexOf("Unknown SID")?(this.o=3,rt(12)):(this.o=0,rt(13)),Nt(this),At(this)}}}catch(t){}},o.mb=function(){if(this.g){var e=On(this.g),t=this.g.ja();this.C<t.length&&(Ct(this),Et(this,e,t),this.i&&4!=e&&Tt(this))}},o.cancel=function(){this.J=!0,Nt(this)},o.lb=function(){this.B=null;var e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(tt(),rt(17)),Nt(this),this.o=2,At(this)):St(this,this.Y-e)};var Rt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Pt){this.h=e.h,Mt(this,e.j),this.s=e.s,this.g=e.g,Ut(this,e.m),this.l=e.l;var t=e.i,n=new Xt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ft(this,n),this.o=e.o}else e&&(t=String(e).match(Rt))?(this.h=!1,Mt(this,t[1]||"",!0),this.s=Bt(t[2]||""),this.g=Bt(t[3]||"",!0),Ut(this,t[4]),this.l=Bt(t[5]||"",!0),Ft(this,t[6]||"",!0),this.o=Bt(t[7]||"")):(this.h=!1,this.i=new Xt(null,this.h))}function Lt(e){return new Pt(e)}function Mt(e,t,n){e.j=n?Bt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ut(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ft(e,t,n){t instanceof Xt?(e.i=t,function(e,t){t&&!e.j&&(Yt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Jt(this,t),Zt(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=zt(t,Gt)),e.i=new Xt(t,e.h))}function Vt(e,t,n){e.i.set(t,n)}function jt(e){return Vt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Bt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function zt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Ht),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ht(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Pt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(zt(t,Wt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(zt(t,Wt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(zt(n,"/"==n.charAt(0)?Kt:qt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",zt(n,Qt)),e.join("")};var Wt=/[#\/\?@]/g,qt=/[#\?:]/g,Kt=/[#\?]/g,Gt=/[#\?@]/g,Qt=/#/g;function Xt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Yt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var a=e[n].substring(0,r);i=e[n].substring(r+1)}else a=e[n];t(a,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Jt(e,t){Yt(e),t=en(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function $t(e,t){return Yt(e),t=en(e,t),e.g.has(t)}function Zt(e,t,n){Jt(e,t),0<n.length&&(e.i=null,e.g.set(en(e,t),N(n)),e.h+=n.length)}function en(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(o=Xt.prototype).add=function(e,t){Yt(this),this.i=null,e=en(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},o.forEach=function(e,t){Yt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},o.ta=function(){Yt(this);for(var e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[],r=0;r<t.length;r++)for(var i=e[r],a=0;a<i.length;a++)n.push(t[r]);return n},o.Z=function(e){Yt(this);var t=[];if("string"==typeof e)$t(this,e)&&(t=t.concat(this.g.get(en(this,e))));else{e=Array.from(this.g.values());for(var n=0;n<e.length;n++)t=t.concat(e[n])}return t},o.set=function(e,t){return Yt(this),this.i=null,$t(this,e=en(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},o.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},o.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=Array.from(this.g.keys()),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r)),a=this.Z(r);for(r=0;r<a.length;r++){var o=i;""!==a[r]&&(o+="="+encodeURIComponent(String(a[r]))),e.push(o)}}return this.i=e.join("&")};var tn=function t(n,r){"use strict";e(s)(this,t),this.g=n,this.map=r};function nn(e){this.l=e||rn,g.PerformanceNavigationTiming?e=0<(e=g.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(g.g&&g.g.Ka&&g.g.Ka()&&g.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var rn=10;function an(e){return!!e.h||!!e.g&&e.g.size>=e.j}function on(e){return e.h?1:e.g?e.g.size:0}function sn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function un(e,t){e.g?e.g.add(t):e.h=t}function cn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function ln(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){var t=e.i,n=!0,r=!1,i=void 0;try{for(var a,o=e.g.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;t=t.concat(s.F)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}return N(e.i)}nn.prototype.cancel=function(){if(this.i=ln(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){var e=!0,t=!1,n=void 0;try{for(var r,i=this.g.values()[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){r.value.cancel()}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}this.g.clear()}};var fn=function(){"use strict";function t(){e(s)(this,t)}return e(u)(t,[{key:"stringify",value:function(e){return g.JSON.stringify(e,void 0)}},{key:"parse",value:function(e){return g.JSON.parse(e,void 0)}}]),t}();function hn(){this.g=new fn}function dn(e,t,n){var r=n||"";try{Dt(e,(function(e,n){var i=e;w(e)&&(i=Se(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function pn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function vn(e){this.l=e.ec||null,this.j=e.ob||!1}function yn(e,t){Ee.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}S(vn,ut),vn.prototype.g=function(){return new yn(this.l,this.j)},vn.prototype.i=function(e){return function(){return e}}({}),S(yn,Ee);var mn=0;function gn(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function kn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,wn(e)}function wn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(o=yn.prototype).open=function(e,t){if(this.readyState!=mn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,wn(this)},o.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||g).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},o.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((function(){})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,kn(this)),this.readyState=mn},o.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,wn(this)),this.g&&(this.readyState=3,wn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==g.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;gn(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},o.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?kn(this):wn(this),3==this.readyState&&gn(this)}},o.Za=function(e){this.g&&(this.response=this.responseText=e,kn(this))},o.Ya=function(e){this.g&&(this.response=e,kn(this))},o.ka=function(){this.g&&kn(this)},o.setRequestHeader=function(e,t){this.v.append(e,t)},o.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},o.getAllResponseHeaders=function(){if(!this.h)return"";for(var e=[],t=this.h.entries(),n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(yn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var bn=g.JSON.parse;function xn(e){Ee.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=_n,this.L=this.M=!1}S(xn,Ee);var _n="",En=/^https?$/i,In=["POST","PUT"];function Tn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Sn(e),An(e)}function Sn(e){e.F||(e.F=!0,Ie(e,"complete"),Ie(e,"error"))}function Cn(e){if(e.h&&void 0!==m&&(!e.C[1]||4!=On(e)||2!=e.da()))if(e.v&&4==On(e))ze(e.La,0,e);else if(Ie(e,"readystatechange"),4==On(e)){e.h=!1;try{var t,n=e.da();e:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}if(!(t=r)){var i;if(i=0===n){var a=String(e.I).match(Rt)[1]||null;!a&&g.self&&g.self.location&&(a=g.self.location.protocol.slice(0,-1)),i=!En.test(a?a.toLowerCase():"")}t=i}if(t)Ie(e,"complete"),Ie(e,"success");else{e.m=6;try{var o=2<On(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.da()+"]",Sn(e)}}finally{An(e)}}}function An(e,t){if(e.g){Nn(e);var n=e.g,r=e.C[0]?function(){}:null;e.g=null,e.C=null,t||Ie(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Nn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(g.clearTimeout(e.A),e.A=null)}function On(e){return e.g?e.g.readyState:0}function Dn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case _n:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Rn(e){var t="";return ae(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Pn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Rn(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Vt(e,t,n))}function Ln(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Mn(e){this.Ga=0,this.j=[],this.l=new Xe,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ln("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ln("baseRetryDelayMs",5e3,e),this.hb=Ln("retryDelaySeedMs",1e4,e),this.eb=Ln("forwardChannelMaxRetries",2,e),this.xa=Ln("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new nn(e&&e.concurrentRequestLimit),this.Ja=new hn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Un(e){if(Vn(e),3==e.H){var t=e.W++,n=Lt(e.I);if(Vt(n,"SID",e.K),Vt(n,"RID",t),Vt(n,"TYPE","terminate"),zn(e,n),(t=new yt(e,e.l,t)).L=2,t.v=jt(Lt(n)),n=!1,g.navigator&&g.navigator.sendBeacon)try{n=g.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&g.Image&&((new Image).src=t.v,n=!0),n||(t.g=er(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Tt(t)}$n(e)}function Fn(e){e.g&&(Kn(e),e.g.cancel(),e.g=null)}function Vn(e){Fn(e),e.u&&(g.clearTimeout(e.u),e.u=null),Qn(e),e.i.cancel(),e.m&&("number"==typeof e.m&&g.clearTimeout(e.m),e.m=null)}function jn(e){if(!an(e.i)&&!e.m){e.m=!0;var t=e.Na;Le||Fe(),Me||(Le(),Me=!0),Ue.add(t,e),e.C=0}}function Bn(e,t){var n;n=t?t.m:e.W++;var r=Lt(e.I);Vt(r,"SID",e.K),Vt(r,"RID",n),Vt(r,"AID",e.V),zn(e,r),e.o&&e.s&&Pn(r,e.o,e.s),n=new yt(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Hn(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),un(e.i,n),bt(n,r,t)}function zn(e,t){e.na&&ae(e.na,(function(e,n){Vt(t,n,e)})),e.h&&Dt({},(function(e,n){Vt(t,n,e)}))}function Hn(e,t,n){n=Math.min(e.j.length,n);var r=e.h?I(e.h.Va,e.h,e):null;e:for(var i=e.j,a=-1;;){var o=["count="+n];-1==a?0<n?(a=i[0].g,o.push("ofs="+a)):a=0:o.push("ofs="+a);for(var s=!0,u=0;u<n;u++){var c=i[u].g,l=i[u].map;if(0>(c-=a))a=Math.max(0,i[u].g-100),s=!1;else try{dn(l,o,"req"+c+"_")}catch(e){r&&r(l)}}if(s){r=o.join("&");break e}}return e=e.j.splice(0,n),t.F=e,r}function Wn(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Le||Fe(),Me||(Le(),Me=!0),Ue.add(t,e),e.A=0}}function qn(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=at(I(e.Ma,e),Yn(e,e.A)),e.A++,!0)}function Kn(e){null!=e.B&&(g.clearTimeout(e.B),e.B=null)}function Gn(e){e.g=new yt(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Lt(e.wa);Vt(t,"RID","rpc"),Vt(t,"SID",e.K),Vt(t,"AID",e.V),Vt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Vt(t,"TO",e.qa),Vt(t,"TYPE","xmlhttp"),zn(e,t),e.o&&e.s&&Pn(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=jt(Lt(t)),n.s=null,n.S=!0,xt(n,e)}function Qn(e){null!=e.v&&(g.clearTimeout(e.v),e.v=null)}function Xn(e,t){var n=null;if(e.g==t){Qn(e),Kn(e),e.g=null;var r=2}else{if(!sn(e.i,t))return;n=t.F,cn(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;Ie(r=Ze(),new it(r,n)),jn(e)}else Wn(e);else if(3==(i=t.o)||0==i&&0<t.ca||!(1==r&&function(e,t){return!(on(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.j=t.F.concat(e.j),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=at(I(e.Na,e,t),Yn(e,e.C)),e.C++,0)))}(e,t)||2==r&&qn(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Jn(e,5);break;case 4:Jn(e,10);break;case 3:Jn(e,6);break;default:Jn(e,2)}}function Yn(e,t){var n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Jn(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=I(e.pb,e);n||(n=new Pt("//www.google.com/images/cleardot.gif"),g.location&&"http"==g.location.protocol||Mt(n,"https"),jt(n)),function(e,t){var n=new Xe;if(g.Image){var r=new Image;r.onload=T(pn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=T(pn,n,r,"TestLoadImage: error",!1,t),r.onabort=T(pn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=T(pn,n,r,"TestLoadImage: timeout",!1,t),g.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else rt(2);e.H=0,e.h&&e.h.za(t),$n(e),Vn(e)}function $n(e){if(e.H=0,e.ma=[],e.h){var t=ln(e.i);0==t.length&&0==e.j.length||(O(e.ma,t),O(e.ma,e.j),e.i.i.length=0,N(e.j),e.j.length=0),e.h.ya()}}function Zn(e,t,n){var r=n instanceof Pt?Lt(n):new Pt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),Ut(r,r.m);else{var i=g.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var a=new Pt(null);r&&Mt(a,r),t&&(a.g=t),i&&Ut(a,i),n&&(a.l=n),r=a}return n=e.F,t=e.Da,n&&t&&Vt(r,n,t),Vt(r,"VER",e.ra),zn(e,r),r}function er(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new xn(new vn({ob:!0})):new xn(e.va)).Oa(e.J),t}function tr(){}function nr(){if(z&&!(10<=Number($)))throw Error("Environmental error: no available transport.")}function rr(e,t){Ee.call(this),this.g=new Mn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!P(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!P(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new or(this)}function ir(e){dt.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(var n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ar(){pt.call(this),this.status=1}function or(e){this.g=e}function sr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function ur(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var a=e.g[3],o=t+(a^n&(i^a))+r[0]+3614090360&4294967295;o=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=(n=(i=(a=(t=n+(o<<7&4294967295|o>>>25))+((o=a+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^a&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(a^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(a^n&(i^a))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=a+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^a&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(a^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(a^n&(i^a))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=a+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^a&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(a^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(a^n&(i^a))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=a+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^a&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(a^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^a&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=a+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(a^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(a^t&(i^a))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^a&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=a+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(a^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(a^t&(i^a))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^a&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=a+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(a^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(a^t&(i^a))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^a&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=a+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(a^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(a^t&(i^a))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^i^a)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=a+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(a^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^a^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^a)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=a+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(a^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^a^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^a)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=a+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(a^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^a^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^a)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=a+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(a^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^a^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(i^(n|~a))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=a+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(a|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(a^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~a))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=a+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(a|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(a^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~a))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=a+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(a|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(a^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((a=(t=n+((o=t+(i^(n|~a))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=a+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=a+((o=i+(t^(a|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+a&4294967295}function cr(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var a=0|e[i];r&&a==t||(n[i]=a,r=!1)}this.g=n}(o=xn.prototype).Oa=function(e){this.M=e},o.ha=function(t,n,r,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);n=n?n.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ft.g(),this.C=this.u?ct(this.u):ct(ft),this.g.onreadystatechange=I(this.La,this);try{this.G=!0,this.g.open(n,String(t),!0),this.G=!1}catch(e){return void Tn(this,e)}if(t=r||"",r=new Map(this.headers),i){var a=!0,o=!1,s=void 0;if(Object.getPrototypeOf(i)===Object.prototype)for(var u in i)r.set(u,i[u]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));try{for(var c,l=i.keys()[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var f=c.value;r.set(f,i.get(f))}}catch(e){o=!0,s=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw s}}}}i=Array.from(r.keys()).find((function(e){return"content-type"==e.toLowerCase()})),u=g.FormData&&t instanceof g.FormData,!(0<=A(In,n))||i||u||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");var d=!0,p=!1,v=void 0;try{for(var y,m=r[Symbol.iterator]();!(d=(y=m.next()).done);d=!0){var k=e(h)(y.value,2),w=k[0],b=k[1];this.g.setRequestHeader(w,b)}}catch(e){p=!0,v=e}finally{try{d||null==m.return||m.return()}finally{if(p)throw v}}this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Nn(this),0<this.B&&((this.L=function(e){return z&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=I(this.ua,this)):this.A=ze(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(e){Tn(this,e)}},o.ua=function(){void 0!==m&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ie(this,"timeout"),this.abort(8))},o.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ie(this,"complete"),Ie(this,"abort"),An(this))},o.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),An(this,!0)),xn.$.N.call(this)},o.La=function(){this.s||(this.G||this.v||this.l?Cn(this):this.kb())},o.kb=function(){Cn(this)},o.isActive=function(){return!!this.g},o.da=function(){try{return 2<On(this)?this.g.status:-1}catch(e){return-1}},o.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},o.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),bn(t)}},o.Ia=function(){return this.m},o.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(o=Mn.prototype).ra=8,o.H=1,o.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;var t=new yt(this,this.l,e),n=this.s;if(this.U&&(n?ue(n=oe(n),this.U):n=this.U),null!==this.o||this.O||(t.I=n,n=null),this.P)e:{for(var r=0,i=0;i<this.j.length;i++){var a=this.j[i];if(void 0===(a="__data__"in a.map&&"string"==typeof(a=a.map.__data__)?a.length:void 0))break;if(4096<(r+=a)){r=i;break e}if(4096===r||i===this.j.length-1){r=i+1;break e}}r=1e3}else r=1e3;r=Hn(this,t,r),Vt(i=Lt(this.I),"RID",e),Vt(i,"CVER",22),this.F&&Vt(i,"X-HTTP-Session-Id",this.F),zn(this,i),n&&(this.O?r="headers="+encodeURIComponent(String(Rn(n)))+"&"+r:this.o&&Pn(i,this.o,n)),un(this.i,t),this.bb&&Vt(i,"TYPE","init"),this.P?(Vt(i,"$req",r),Vt(i,"SID","null"),t.aa=!0,bt(t,i,null)):bt(t,i,r),this.H=2}}else 3==this.H&&(e?Bn(this,e):0==this.j.length||an(this.i)||Bn(this))},o.Ma=function(){if(this.u=null,Gn(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=at(I(this.jb,this),e)}},o.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,rt(10),Fn(this),Gn(this))},o.ib=function(){null!=this.v&&(this.v=null,Fn(this),qn(this),rt(19))},o.pb=function(e){e?(this.l.info("Successfully pinged google.com"),rt(2)):(this.l.info("Failed to ping google.com"),rt(1))},o.isActive=function(){return!!this.h&&this.h.isActive(this)},(o=tr.prototype).Ba=function(){},o.Aa=function(){},o.za=function(){},o.ya=function(){},o.isActive=function(){return!0},o.Va=function(){},nr.prototype.g=function(e,t){return new rr(e,t)},S(rr,Ee),rr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;rt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Zn(e,null,e.Y),jn(e)},rr.prototype.close=function(){Un(this.g)},rr.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Se(e),e=n);t.j.push(new tn(t.fb++,e)),3==t.H&&jn(t)},rr.prototype.N=function(){this.g.h=null,delete this.j,Un(this.g),delete this.g,rr.$.N.call(this)},S(ir,dt),S(ar,pt),S(or,tr),or.prototype.Ba=function(){Ie(this.g,"a")},or.prototype.Aa=function(e){Ie(this.g,new ir(e))},or.prototype.za=function(e){Ie(this.g,new ar)},or.prototype.ya=function(){Ie(this.g,"b")},S(sr,(function(){this.blockSize=-1})),sr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},sr.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,a=0;a<t;){if(0==i)for(;a<=n;)ur(this,e,a),a+=this.blockSize;if("string"==typeof e){for(;a<t;)if(r[i++]=e.charCodeAt(a++),i==this.blockSize){ur(this,r),i=0;break}}else for(;a<t;)if(r[i++]=e[a++],i==this.blockSize){ur(this,r),i=0;break}}this.h=i,this.i+=t},sr.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var lr={};function fr(e){return-128<=e&&128>e?function(e,t){var n=lr;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new cr([0|e],0>e?-1:0)})):new cr([0|e],0>e?-1:0)}function hr(e){if(isNaN(e)||!isFinite(e))return pr;if(0>e)return kr(hr(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=dr;return new cr(t,0)}var dr=4294967296,pr=fr(0),vr=fr(1),yr=fr(16777216);function mr(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function gr(e){return-1==e.h}function kr(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new cr(n,~e.h).add(vr)}function wr(e,t){return e.add(kr(t))}function br(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function xr(e,t){this.g=e,this.h=t}function _r(e,t){if(mr(t))throw Error("division by zero");if(mr(e))return new xr(pr,pr);if(gr(e))return t=_r(kr(e),t),new xr(kr(t.g),kr(t.h));if(gr(t))return t=_r(e,kr(t)),new xr(kr(t.g),t.h);if(30<e.g.length){if(gr(e)||gr(t))throw Error("slowDivide_ only works with positive integers.");for(var n=vr,r=t;0>=r.X(e);)n=Er(n),r=Er(r);var i=Ir(n,1),a=Ir(r,1);for(r=Ir(r,2),n=Ir(n,2);!mr(r);){var o=a.add(r);0>=o.X(e)&&(i=i.add(n),a=o),r=Ir(r,1),n=Ir(n,1)}return t=wr(e,i.R(t)),new xr(i,t)}for(i=pr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),o=(a=hr(n)).R(t);gr(o)||0<o.X(e);)o=(a=hr(n-=r)).R(t);mr(a)&&(a=vr),i=i.add(a),e=wr(e,o)}return new xr(i,e)}function Er(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new cr(n,e.h)}function Ir(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],a=0;a<r;a++)i[a]=0<t?e.D(a+n)>>>t|e.D(a+n+1)<<32-t:e.D(a+n);return new cr(i,e.h)}(o=cr.prototype).ea=function(){if(gr(this))return-kr(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:dr+r)*t,t*=dr}return e},o.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(mr(this))return"0";if(gr(this))return"-"+kr(this).toString(e);for(var t=hr(Math.pow(e,6)),n=this,r="";;){var i=_r(n,t).g,a=((0<(n=wr(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(mr(n=i))return a+r;for(;6>a.length;)a="0"+a;r=a+r}},o.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},o.X=function(e){return gr(e=wr(this,e))?-1:mr(e)?0:1},o.abs=function(){return gr(this)?kr(this):this},o.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var a=r+(65535&this.D(i))+(65535&e.D(i)),o=(a>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,a&=65535,o&=65535,n[i]=o<<16|a}return new cr(n,-2147483648&n[n.length-1]?-1:0)},o.R=function(e){if(mr(this)||mr(e))return pr;if(gr(this))return gr(e)?kr(this).R(kr(e)):kr(kr(this).R(e));if(gr(e))return kr(this.R(kr(e)));if(0>this.X(yr)&&0>e.X(yr))return hr(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var a=this.D(r)>>>16,o=65535&this.D(r),s=e.D(i)>>>16,u=65535&e.D(i);n[2*r+2*i]+=o*u,br(n,2*r+2*i),n[2*r+2*i+1]+=a*u,br(n,2*r+2*i+1),n[2*r+2*i+1]+=o*s,br(n,2*r+2*i+1),n[2*r+2*i+2]+=a*s,br(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new cr(n,0)},o.gb=function(e){return _r(this,e).h},o.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new cr(n,this.h&e.h)},o.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new cr(n,this.h|e.h)},o.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new cr(n,this.h^e.h)},nr.prototype.createWebChannel=nr.prototype.g,rr.prototype.send=rr.prototype.u,rr.prototype.open=rr.prototype.m,rr.prototype.close=rr.prototype.close,ot.NO_ERROR=0,ot.TIMEOUT=8,ot.HTTP_ERROR=6,st.COMPLETE="complete",lt.EventType=ht,ht.OPEN="a",ht.CLOSE="b",ht.ERROR="c",ht.MESSAGE="d",Ee.prototype.listen=Ee.prototype.O,xn.prototype.listenOnce=xn.prototype.P,xn.prototype.getLastError=xn.prototype.Sa,xn.prototype.getLastErrorCode=xn.prototype.Ia,xn.prototype.getStatus=xn.prototype.da,xn.prototype.getResponseJson=xn.prototype.Wa,xn.prototype.getResponseText=xn.prototype.ja,xn.prototype.send=xn.prototype.ha,xn.prototype.setWithCredentials=xn.prototype.Oa,sr.prototype.digest=sr.prototype.l,sr.prototype.reset=sr.prototype.reset,sr.prototype.update=sr.prototype.j,cr.prototype.add=cr.prototype.add,cr.prototype.multiply=cr.prototype.R,cr.prototype.modulo=cr.prototype.gb,cr.prototype.compare=cr.prototype.X,cr.prototype.toNumber=cr.prototype.ea,cr.prototype.toString=cr.prototype.toString,cr.prototype.getBits=cr.prototype.D,cr.fromNumber=hr,cr.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return kr(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=hr(Math.pow(n,8)),i=pr,a=0;a<t.length;a+=8){var o=Math.min(8,t.length-a),s=parseInt(t.substring(a,a+o),n);8>o?(o=hr(Math.pow(n,o)),i=i.R(o).add(hr(s))):i=(i=i.R(r)).add(hr(s))}return i};var Tr=y.createWebChannelTransport=function(){return new nr},Sr=y.getStatEventTarget=function(){return Ze()},Cr=y.ErrorCode=ot,Ar=y.EventType=st,Nr=y.Event=Je,Or=y.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Dr=(y.FetchXmlHttpFactory=vn,y.WebChannel=lt),Rr=y.XhrIo=xn,Pr=y.Md5=sr,Lr=y.Integer=cr}))}();
//# sourceMappingURL=login.7c97fb22.js.map
