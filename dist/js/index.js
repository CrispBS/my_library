/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 757:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(666);


/***/ }),

/***/ 123:
/***/ (function(module) {

!function(t,n){ true?module.exports=n():0}("undefined"!=typeof self?self:this,(function(){return function(){"use strict";var t={407:function(t,n,e){e.d(n,{default:function(){return N}});var o=/([:*])(\w+)/g,r=/\*/g,i=/\/\?/g;function a(t){return void 0===t&&(t="/"),v()?location.pathname+location.search+location.hash:t}function s(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function c(t){return"string"==typeof t}function u(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function h(t){var n=s(t).split(/\?(.*)?$/);return[s(n[0]),n.slice(1).join("")]}function f(t){for(var n={},e=t.split("&"),o=0;o<e.length;o++){var r=e[o].split("=");if(""!==r[0]){var i=decodeURIComponent(r[0]);n[i]?(Array.isArray(n[i])||(n[i]=[n[i]]),n[i].push(decodeURIComponent(r[1]||""))):n[i]=decodeURIComponent(r[1]||"")}}return n}function l(t,n){var e,a=h(s(t.currentLocationPath)),l=a[0],p=a[1],d=""===p?null:f(p),v=[];if(c(n.path)){if(e="(?:/^|^)"+s(n.path).replace(o,(function(t,n,e){return v.push(e),"([^/]+)"})).replace(r,"?(?:.*)").replace(i,"/?([^/]+|)")+"$",""===s(n.path)&&""===s(l))return{url:l,queryString:p,hashString:u(t.to),route:n,data:null,params:d}}else e=n.path;var g=new RegExp(e,""),m=l.match(g);if(m){var y=c(n.path)?function(t,n){return 0===n.length?null:t?t.slice(1,t.length).reduce((function(t,e,o){return null===t&&(t={}),t[n[o]]=decodeURIComponent(e),t}),null):null}(m,v):m.groups?m.groups:m.slice(1);return{url:s(l.replace(new RegExp("^"+t.instance.root),"")),queryString:p,hashString:u(t.to),route:n,data:y,params:d}}return!1}function p(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function d(t,n){return void 0===t[n]||!0===t[n]}function v(){return"undefined"!=typeof window}function g(t,n){return void 0===t&&(t=[]),void 0===n&&(n={}),t.filter((function(t){return t})).forEach((function(t){["before","after","already","leave"].forEach((function(e){t[e]&&(n[e]||(n[e]=[]),n[e].push(t[e]))}))})),n}function m(t,n,e){var o=n||{},r=0;!function n(){t[r]?Array.isArray(t[r])?(t.splice.apply(t,[r,1].concat(t[r][0](o)?t[r][1]:t[r][2])),n()):t[r](o,(function(t){void 0===t||!0===t?(r+=1,n()):e&&e(o)})):e&&e(o)}()}function y(t,n){void 0===t.currentLocationPath&&(t.currentLocationPath=t.to=a(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),n()}function _(t,n){for(var e=0;e<t.instance.routes.length;e++){var o=l(t,t.instance.routes[e]);if(o&&(t.matches||(t.matches=[]),t.matches.push(o),"ONE"===t.resolveOptions.strategy))return void n()}n()}function k(t,n){t.navigateOptions&&(void 0!==t.navigateOptions.shouldResolve&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),void 0!==t.navigateOptions.silent&&console.warn('"silent" is deprecated. Please check the documentation.')),n()}function O(t,n){!0===t.navigateOptions.force?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),n(!1)):n()}m.if=function(t,n,e){return Array.isArray(n)||(n=[n]),Array.isArray(e)||(e=[e]),[t,n,e]};var w=v(),L=p();function b(t,n){if(d(t.navigateOptions,"updateBrowserURL")){var e=("/"+t.to).replace(/\/\//g,"/"),o=w&&t.resolveOptions&&!0===t.resolveOptions.hash;L?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",o?"#"+e:e),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout((function(){if(!o){var n=location.hash;location.hash="",location.hash=n}t.instance.__freezeListening=!1}),1))):w&&(window.location.href=t.to)}n()}function A(t,n){var e=t.instance;e.lastResolved()?m(e.lastResolved().map((function(n){return function(e,o){if(n.route.hooks&&n.route.hooks.leave){var r=!1,i=t.instance.matchLocation(n.route.path,t.currentLocationPath,!1);r="*"!==n.route.path?!i:!(t.matches&&t.matches.find((function(t){return n.route.path===t.route.path}))),d(t.navigateOptions,"callHooks")&&r?m(n.route.hooks.leave.map((function(n){return function(e,o){return n((function(n){!1===n?t.instance.__markAsClean(t):o()}),t.matches&&t.matches.length>0?1===t.matches.length?t.matches[0]:t.matches:void 0)}})).concat([function(){return o()}])):o()}else o()}})),{},(function(){return n()})):n()}function P(t,n){d(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),n()}var R=[function(t,n){var e=t.instance.lastResolved();if(e&&e[0]&&e[0].route===t.match.route&&e[0].url===t.match.url&&e[0].queryString===t.match.queryString)return e.forEach((function(n){n.route.hooks&&n.route.hooks.already&&d(t.navigateOptions,"callHooks")&&n.route.hooks.already.forEach((function(n){return n(t.match)}))})),void n(!1);n()},function(t,n){t.match.route.hooks&&t.match.route.hooks.before&&d(t.navigateOptions,"callHooks")?m(t.match.route.hooks.before.map((function(n){return function(e,o){return n((function(n){!1===n?t.instance.__markAsClean(t):o()}),t.match)}})).concat([function(){return n()}])):n()},function(t,n){d(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),n()},function(t,n){t.match.route.hooks&&t.match.route.hooks.after&&d(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach((function(n){return n(t.match)})),n()}],S=[A,function(t,n){var e=t.instance._notFoundRoute;if(e){t.notFoundHandled=!0;var o=h(t.currentLocationPath),r=o[0],i=o[1],a=u(t.to);e.path=s(r);var c={url:e.path,queryString:i,hashString:a,data:null,route:e,params:""!==i?f(i):null};t.matches=[c],t.match=c}n()},m.if((function(t){return t.notFoundHandled}),R.concat([P]),[function(t,n){t.resolveOptions&&!1!==t.resolveOptions.noMatchWarning&&void 0!==t.resolveOptions.noMatchWarning||console.warn('Navigo: "'+t.currentLocationPath+"\" didn't match any of the registered routes."),n()},function(t,n){t.instance._setCurrent(null),n()}])];function E(){return(E=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}function x(t,n){var e=0;A(t,(function o(){e!==t.matches.length?m(R,E({},t,{match:t.matches[e]}),(function(){e+=1,o()})):P(t,n)}))}function H(t){t.instance.__markAsClean(t)}function j(){return(j=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}var C="[data-navigo]";function N(t,n){var e,o=n||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:C},r=this,i="/",d=null,w=[],L=!1,A=p(),P=v();function R(t){return t.indexOf("#")>=0&&(t=!0===o.hash?t.split("#")[1]||"/":t.split("#")[0]),t}function E(t){return s(i+"/"+s(t))}function N(t,n,e,o){return t=c(t)?E(t):t,{name:o||s(String(t)),path:t,handler:n,hooks:g(e)}}function U(t,n){if(!r.__dirty){r.__dirty=!0,t=t?s(i)+"/"+s(t):void 0;var e={instance:r,to:t,currentLocationPath:t,navigateOptions:{},resolveOptions:j({},o,n)};return m([y,_,m.if((function(t){var n=t.matches;return n&&n.length>0}),x,S)],e,H),!!e.matches&&e.matches}r.__waiting.push((function(){return r.resolve(t,n)}))}function q(t,n){if(r.__dirty)r.__waiting.push((function(){return r.navigate(t,n)}));else{r.__dirty=!0,t=s(i)+"/"+s(t);var e={instance:r,to:t,navigateOptions:n||{},resolveOptions:n&&n.resolveOptions?n.resolveOptions:o,currentLocationPath:R(t)};m([k,O,_,m.if((function(t){var n=t.matches;return n&&n.length>0}),x,S),b,H],e,H)}}function F(){if(P)return(P?[].slice.call(document.querySelectorAll(o.linksSelector||C)):[]).forEach((function(t){"false"!==t.getAttribute("data-navigo")&&"_blank"!==t.getAttribute("target")?t.hasListenerAttached||(t.hasListenerAttached=!0,t.navigoHandler=function(n){if((n.ctrlKey||n.metaKey)&&"a"===n.target.tagName.toLowerCase())return!1;var e=t.getAttribute("href");if(null==e)return!1;if(e.match(/^(http|https)/)&&"undefined"!=typeof URL)try{var o=new URL(e);e=o.pathname+o.search}catch(t){}var i=function(t){if(!t)return{};var n,e=t.split(","),o={};return e.forEach((function(t){var e=t.split(":").map((function(t){return t.replace(/(^ +| +$)/g,"")}));switch(e[0]){case"historyAPIMethod":o.historyAPIMethod=e[1];break;case"resolveOptionsStrategy":n||(n={}),n.strategy=e[1];break;case"resolveOptionsHash":n||(n={}),n.hash="true"===e[1];break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":o[e[0]]="true"===e[1]}})),n&&(o.resolveOptions=n),o}(t.getAttribute("data-navigo-options"));L||(n.preventDefault(),n.stopPropagation(),r.navigate(s(e),i))},t.addEventListener("click",t.navigoHandler)):t.hasListenerAttached&&t.removeEventListener("click",t.navigoHandler)})),r}function I(t,n,e){var o=w.find((function(n){return n.name===t})),r=null;if(o){if(r=o.path,n)for(var a in n)r=r.replace(":"+a,n[a]);r=r.match(/^\//)?r:"/"+r}return r&&e&&!e.includeRoot&&(r=r.replace(new RegExp("^/"+i),"")),r}function M(t){var n=h(s(t)),o=n[0],r=n[1],i=""===r?null:f(r);return{url:o,queryString:r,hashString:u(t),route:N(o,(function(){}),[e],o),data:null,params:i}}function T(t,n,e){return"string"==typeof n&&(n=z(n)),n?(n.hooks[t]||(n.hooks[t]=[]),n.hooks[t].push(e),function(){n.hooks[t]=n.hooks[t].filter((function(t){return t!==e}))}):(console.warn("Route doesn't exists: "+n),function(){})}function z(t){return"string"==typeof t?w.find((function(n){return n.name===E(t)})):w.find((function(n){return n.handler===t}))}t?i=s(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'),this.root=i,this.routes=w,this.destroyed=L,this.current=d,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=function(t){t.instance.__dirty=!1,t.instance.__waiting.length>0&&t.instance.__waiting.shift()()},this.on=function(t,n,o){var r=this;return"object"!=typeof t||t instanceof RegExp?("function"==typeof t&&(o=n,n=t,t=i),w.push(N(t,n,[e,o])),this):(Object.keys(t).forEach((function(n){if("function"==typeof t[n])r.on(n,t[n]);else{var o=t[n],i=o.uses,a=o.as,s=o.hooks;w.push(N(n,i,[e,s],a))}})),this)},this.off=function(t){return this.routes=w=w.filter((function(n){return c(t)?s(n.path)!==s(t):"function"==typeof t?t!==n.handler:String(n.path)!==String(t)})),this},this.resolve=U,this.navigate=q,this.navigateByName=function(t,n,e){var o=I(t,n);return null!==o&&(q(o.replace(new RegExp("^/?"+i),""),e),!0)},this.destroy=function(){this.routes=w=[],A&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=L=!0},this.notFound=function(t,n){return r._notFoundRoute=N("*",t,[e,n],"__NOT_FOUND__"),this},this.updatePageLinks=F,this.link=function(t){return"/"+i+"/"+s(t)},this.hooks=function(t){return e=t,this},this.extractGETParameters=function(t){return h(R(t))},this.lastResolved=function(){return d},this.generate=I,this.getLinkPath=function(t){return t.getAttribute("href")},this.match=function(t){var n={instance:r,currentLocationPath:t,to:t,navigateOptions:{},resolveOptions:o};return _(n,(function(){})),!!n.matches&&n.matches},this.matchLocation=function(t,n,e){void 0===n||void 0!==e&&!e||(n=E(n));var o={instance:r,to:n,currentLocationPath:n};return y(o,(function(){})),"string"==typeof t&&(t=void 0===e||e?E(t):t),l(o,{name:String(t),path:t,handler:function(){},hooks:{}})||!1},this.getCurrentLocation=function(){return M(s(a(i)).replace(new RegExp("^"+i),""))},this.addBeforeHook=T.bind(this,"before"),this.addAfterHook=T.bind(this,"after"),this.addAlreadyHook=T.bind(this,"already"),this.addLeaveHook=T.bind(this,"leave"),this.getRoute=z,this._pathToMatchObject=M,this._clean=s,this._checkForAHash=R,this._setCurrent=function(t){return d=r.current=t},function(){A&&(this.__popstateListener=function(){r.__freezeListening||U()},window.addEventListener("popstate",this.__popstateListener))}.call(this),F.call(this)}}},n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{}};return t[o](r,r.exports,e),r.exports}return e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e(407)}().default}));
//# sourceMappingURL=navigo.min.js.map

/***/ }),

/***/ 666:
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./node_modules/navigo/lib/navigo.min.js
var navigo_min = __webpack_require__(123);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(757);
;// CONCATENATED MODULE: ./src/js/modules/serviceBook.js


var API_URI = 'http://localhost:3024/'; //export const API_URI = 'https://serene-reaches-60755.herokuapp.com/';

var getBooks = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(id) {
    var response;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat(API_URI, "api/books/").concat(id || ''));

          case 2:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", response.json());

          case 5:
            throw new Error(response.statusText);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getBooks(_x) {
    return _ref.apply(this, arguments);
  };
}();
var searchBooks = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(search) {
    var response;
    return regenerator.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("".concat(API_URI, "api/books/?search=").concat(search));

          case 2:
            response = _context2.sent;

            if (!response.ok) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", response.json());

          case 5:
            throw new Error(response.statusText);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function searchBooks(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var addBooks = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(data) {
    var response;
    return regenerator.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("".concat(API_URI, "api/books/"), {
              method: 'POST',
              body: JSON.stringify(data)
            });

          case 2:
            response = _context3.sent;

            if (!response.ok) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", response.json());

          case 5:
            throw new Error(response.statusText);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function addBooks(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var getLabels = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4() {
    var response;
    return regenerator.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return fetch("".concat(API_URI, "api/label/"));

          case 2:
            response = _context4.sent;

            if (!response.ok) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return", response.json());

          case 5:
            throw new Error(response.statusText);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getLabels() {
    return _ref4.apply(this, arguments);
  };
}();
var deleteBooks = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5(id) {
    var response;
    return regenerator.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return fetch("".concat(API_URI, "api/books/").concat(id), {
              method: 'DELETE'
            });

          case 2:
            response = _context5.sent;

            if (!response.ok) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return", response.json());

          case 5:
            throw new Error(response.statusText);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteBooks(_x4) {
    return _ref5.apply(this, arguments);
  };
}();
var editBooks = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee6(id, data) {
    var response;
    return regenerator.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return fetch("".concat(API_URI, "api/books/").concat(id), {
              method: 'PATCH',
              body: JSON.stringify(data)
            });

          case 2:
            response = _context6.sent;

            if (!response.ok) {
              _context6.next = 5;
              break;
            }

            return _context6.abrupt("return", response.json());

          case 5:
            throw new Error(response.statusText);

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function editBooks(_x5, _x6) {
    return _ref6.apply(this, arguments);
  };
}();
;// CONCATENATED MODULE: ./src/js/modules/declOfNum.js
var declOfNum = function declOfNum(n, titles) {
  return n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
};
;// CONCATENATED MODULE: ./src/js/modules/renderListBooks.js






var data = {
  books: [],
  labels: [],
  sortBook: function sortBook(sort) {
    return this.books.sort(function (a, b) {
      if (sort === 'up') return a.rating > b.rating ? 1 : -1;
      if (sort === 'down') return a.rating < b.rating ? 1 : -1;
    });
  },
  filterBook: function filterBook(value) {
    return this.books.filter(function (book) {
      return book.label === value;
    });
  }
};
var libraryList = document.querySelector('.library_list');
var fieldList = document.querySelector('.fields_list_filter');
var libraryCount = document.querySelector('.library_count');

var getStars = function getStars(rating) {
  var stars = [];

  for (var i = 0; i < 5; i++) {
    if (i === 0) {
      stars.push("<img class=\"card_rating-star\" src=\"img/star.svg\" alt=\"\u0420\u0435\u0439\u0442\u0438\u043D\u0433 ".concat(rating, " \u0438\u0437 5\"></img>"));
    } else if (i < rating) {
      stars.push("<img class=\"card_rating-star\" src=\"img/star.svg\" alt=\"\">");
    } else {
      stars.push("<img class=\"card_rating-star\" src=\"img/star-o.svg\" alt=\"\">");
    }
  }

  return stars;
};

var renderList = function renderList() {
  var books = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : data.books;
  libraryList.textContent = '';
  libraryCount.textContent = declOfNum(books.length, ['книга', 'книги', 'книг']);
  var items = books.map(function (_ref) {
    var author = _ref.author,
        description = _ref.description,
        id = _ref.id,
        image = _ref.image,
        label = _ref.label,
        rating = _ref.rating,
        title = _ref.title;
    var item = document.createElement('li');
    item.classList.add('library_item');
    item.innerHTML = "  \n            <a href=\"/#/book?id=".concat(id, "\">\n                <article class=\"card\">\n                    <div class=\"card_wrapper\">\n                        <img src=\"").concat(API_URI).concat(image, "\" alt=\"\u041E\u0431\u043B\u043E\u0436\u043A\u0430 \u043A\u043D\u0438\u0433\u0438 ").concat(title, "\" class=\"card_image\"> \n                        <p class=\"card_label\">").concat(data.labels[label], "</p>\n                    </div>\n                    <div class=\"card_content\">\n                        <h3 class=\"card_title\">").concat(title, "</h3>\n                        <p class=\"card_author\">").concat(author, "</p>\n                        <p class=\"card_description\">").concat(description.substring(0, 80), "...</p>\n                        <div class=\"card_rating\">\n                            ").concat(getStars(rating).join(''), "\n                        </div>\n                    </div>\n                </article>\n            </a>\n        ");
    return item;
  });
  libraryList.append.apply(libraryList, _toConsumableArray(items));
};

var renderFields = function renderFields(labels) {
  fieldList.textContent = '';

  for (var key in labels) {
    var item = document.createElement('li');
    item.className = 'fields_item';
    var button = document.createElement('button');
    button.className = 'fields_button';
    button.dataset.filter = key;
    button.textContent = labels[key];
    item.append(button);
    fieldList.append(item);
  }
};

var renderListBooks = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
    var _yield$Promise$all, _yield$Promise$all2, books, labels;

    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.all([getBooks(), getLabels()]);

          case 2:
            _yield$Promise$all = _context.sent;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            books = _yield$Promise$all2[0];
            labels = _yield$Promise$all2[1];
            data.books = books;
            data.labels = labels;
            renderList(books);
            renderFields(labels);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function renderListBooks() {
    return _ref2.apply(this, arguments);
  };
}();
;// CONCATENATED MODULE: ./src/js/modules/renderBook.js





var container = document.querySelector('.book_container');
var btnDelete = document.querySelector('.header_btn_delete');
var bookLabel = document.querySelector('.footer_btn.book_label'); //const btnLogo = document.querySelector('.logo_container');

btnDelete.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
  return regenerator.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return deleteBooks(btnDelete.dataset.id);

        case 2:
          router.navigate('/');

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))); // btnLogo.addEventListener('click', () =>{
//     alert("click");
//     router.navigate('/');
// });

var timerID;

var changeLabel = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(_ref2) {
    var target, labels, labelKeys, labelNow, index, indexNext, labelNext;
    return regenerator.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            target = _ref2.target;
            _context2.next = 3;
            return getLabels();

          case 3:
            labels = _context2.sent;
            labelKeys = Object.keys(labels);
            labelNow = target.dataset.label;
            index = labelKeys.indexOf(labelNow);
            indexNext = (index + 1) % labelKeys.length;
            labelNext = labelKeys[indexNext];
            document.querySelectorAll('.book_label').forEach(function (btn) {
              btn.dataset.label = labelNext;
              btn.textContent = labels[labelNext];
            });
            clearInterval(timerID);
            timerID = setTimeout(function () {
              editBooks(target.dataset.id, {
                label: labelNext
              });
            }, 1000);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function changeLabel(_x) {
    return _ref3.apply(this, arguments);
  };
}();

bookLabel.addEventListener('click', changeLabel);

var renderBook_getStars = function getStars(rating) {
  var stars = [];

  for (var i = 0; i < 5; i++) {
    if (i === 0) {
      stars.push("<img class=\"book_rating-star\" src=\"img/star.svg\" alt=\"\u0420\u0435\u0439\u0442\u0438\u043D\u0433 ".concat(rating, " \u0438\u0437 5\"></img>"));
    } else if (i < rating) {
      stars.push("<img class=\"book_rating-star\" src=\"img/star.svg\" alt=\"\">");
    } else {
      stars.push("<img class=\"book_rating-star\" src=\"img/star-o.svg\" alt=\"\">");
    }
  }

  return stars;
};

var renderBook = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(id) {
    var _yield$Promise$all, _yield$Promise$all2, books, labels, author, title, description, label, image, rating, btnLabel;

    return regenerator.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Promise.all([getBooks(id), getLabels()]);

          case 2:
            _yield$Promise$all = _context3.sent;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            books = _yield$Promise$all2[0];
            labels = _yield$Promise$all2[1];
            container.textContent = '';
            author = books.author, title = books.title, description = books.description, label = books.label, image = books.image, rating = books.rating; // const btnLabel = document.createElement('button');
            // btnLabel.className = 'book_label book_label_img';    
            // btnLabel.textContent = labels[label];
            // btnLabel.dataset.label = label;
            // btnLabel.dataset.id = id;
            // btnLabel.addEventListener('click', changeLabel);

            container.innerHTML = "\n    <div class=\"book_wrapper\">\n        <img class=\"book_image\" src=\"".concat(API_URI).concat(image, "\" alt=\"\u043E\u0431\u043B\u043E\u0436\u043A\u0430 ").concat(title, "\">\n\n        <button class=\"book_label book_label_img\" data-label=\"").concat(label, "\" data-id=\"").concat(id, "\">").concat(labels[label], "</button>\n    </div>\n\n    <div class=\"book_content\">\n        <h2 class=\"book_title\">").concat(title, "</h2>\n        \n        <p class=\"book_author\">").concat(author, "</p>\n\n        <div class=\"book_rating\">\n            ").concat(renderBook_getStars(rating).join(''), "\n        </div>\n\n        <h3 class=\"book_subtitle\">\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</h3>\n\n        <p class=\"book_description\">").concat(description, "</p>\n    </div>\n    ");
            btnLabel = document.querySelector('.book_label_img');
            btnLabel.addEventListener('click', changeLabel);
            btnDelete.dataset.id = id;
            bookLabel.dataset.id = id;
            bookLabel.dataset.label = label;
            bookLabel.textContent = labels[label];

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function renderBook(_x2) {
    return _ref4.apply(this, arguments);
  };
}();
;// CONCATENATED MODULE: ./src/js/modules/router.js



var library = document.querySelector('.library');

var _book = document.querySelector('.book');

var _add = document.querySelector('.add');

var addBtns = document.querySelectorAll('.header__btn-add, .library_add-btn');
var backBtn = document.querySelector('.book_btn_back');
var btnLogo = document.querySelector('.logo_container');
var router = new navigo_min('/', {
  hash: true
});

var closeAllPage = function closeAllPage() {
  library.classList.add('hidden');

  _book.classList.add('hidden');

  _add.classList.add('hidden');
};

var initRouter = function initRouter() {
  router.on({
    '/': function _() {
      closeAllPage();
      library.classList.remove('hidden');
      document.body.classList.remove('body_gradient');
      renderListBooks();
    },
    'book': function book(_ref) {
      var id = _ref.params.id;
      closeAllPage();

      _book.classList.remove('hidden');

      document.body.classList.add('body_gradient');
      renderBook(id);
    },
    'add': function add() {
      closeAllPage();

      _add.classList.remove('hidden');

      document.body.classList.add('body_gradient');
    }
  }).resolve();
  addBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      router.navigate('add');
    });
  });
  backBtn.addEventListener('click', function () {
    router.navigate('/');
  });
  btnLogo.addEventListener('click', function () {
    //router.navigate('/');
    location.reload();
  });
};
;// CONCATENATED MODULE: ./src/js/modules/search.js




var btnSearch = document.querySelectorAll('.header_btn_search');
var search = document.querySelector('.search');
var searchForm = document.querySelector('.search_form');

var closeSearch = function closeSearch(_ref, flag) {
  var target = _ref.target;

  // console.log(event);
  // const targer = event.target;
  // const {target} = event;
  if (target.closest('.search, .header_btn_search') && !flag) {
    return;
  }

  search.classList.remove('search_active');
  document.remove('click', closeSearch);
};

btnSearch.forEach(function (btn) {
  btn.addEventListener('click', function () {
    search.classList.add('search_active');
    document.addEventListener('click', closeSearch, true);
  });
});
searchForm.addEventListener('submit', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(e) {
    var books;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            _context.next = 3;
            return searchBooks(searchForm.input.value);

          case 3:
            books = _context.sent;
            renderList(books);
            e.target.reset();
            closeSearch(e, true);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());
;// CONCATENATED MODULE: ./src/js/modules/toBase64.js
var toBase64 = function toBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.addEventListener('loadend', function () {
      resolve(reader.result);
    });
    reader.addEventListener('error', function () {
      reject(err);
    });
    reader.readAsDataURL(file);
  });
};

/* harmony default export */ var modules_toBase64 = (toBase64);
;// CONCATENATED MODULE: ./src/js/modules/upload.js



var label = document.querySelector('.upload_label');
var preview = document.querySelector('.upload_preview');
var file = document.querySelector('.upload_file');
var previewSrc = preview.src;
file.addEventListener('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
  var base64;
  return regenerator.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(file.files.length > 0)) {
            _context.next = 7;
            break;
          }

          _context.next = 3;
          return modules_toBase64(file.files[0]);

        case 3:
          base64 = _context.sent;
          preview.style.display = 'block';
          label.classList.add('upload_label_active');
          preview.src = base64;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
var clearPreview = function clearPreview() {
  preview.style.display = '';
  label.classList.remove('upload_label_active');
  preview.src = previewSrc;
};
;// CONCATENATED MODULE: ./src/js/modules/changeFieldset.js


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = changeFieldset_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function changeFieldset_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return changeFieldset_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return changeFieldset_arrayLikeToArray(o, minLen); }

function changeFieldset_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var fieldsets = document.querySelectorAll('.add_fieldset');
var addBtn = document.querySelector('.add_btn');
var changeFieldset_form = document.querySelector('.add_form');
var btnBack = document.querySelector('.add_btn_back');
var count = 0;

var sendBook = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
    var formData, data, book;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            formData = new FormData(changeFieldset_form);
            data = Object.fromEntries(formData);
            _context.next = 4;
            return modules_toBase64(data.image);

          case 4:
            data.image = _context.sent;
            _context.next = 7;
            return addBooks(data);

          case 7:
            book = _context.sent;

            if (book) {
              changeFieldset_form.reset();
              clearPreview();
              router.navigate('/');
              addBtn.textContent = 'Далее';
            }

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sendBook() {
    return _ref.apply(this, arguments);
  };
}();

var changeFieldset = function changeFieldset() {
  if (count === fieldsets.length - 1) {
    addBtn.textContent = 'Добавить книгу';
  } else {
    addBtn.textContent = 'Далее';
  }

  fieldsets[count].classList.remove('hidden');
};

var initFieldset = function initFieldset() {
  addBtn.addEventListener('click', function () {
    var fieldset = fieldsets[count];
    var valid = true; // [...fieldset.elements].forEach(elem => console.log(elem));

    var _iterator = _createForOfIteratorHelper(fieldset.elements),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var elem = _step.value;

        if (!elem.checkValidity()) {
          elem.classList.add('no-valid');
          valid = false;
        } else {
          elem.classList.remove('no-valid');
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (!valid) return;
    fieldset.classList.add('hidden');
    count += 1;

    if (count === fieldsets.length) {
      count = 0;
      sendBook();
    }

    changeFieldset();
  }); // console.log(fieldsets);
  // console.log(addBtn.dataset.count);

  btnBack.addEventListener('click', function () {
    if (count === 0) {
      changeFieldset_form.reset();
      clearPreview();
      router.navigate('/');
      return;
    }

    fieldsets[count].classList.add('hidden');
    count--;
    changeFieldset();
  });
};

/* harmony default export */ var modules_changeFieldset = (initFieldset);
;// CONCATENATED MODULE: ./src/js/modules/controlField.js

var controlField = function controlField(btn, list, offList) {
  btn.addEventListener('click', function () {
    list.classList.toggle('fields_list_active');
    offList.classList.remove('fields_list_active');
  });
  list.addEventListener('click', function (_ref) {
    var target = _ref.target;

    if (target.classList.contains('fields_button')) {
      list.classList.remove('fields_list_active');

      if (target.dataset.sort) {
        data.sortBook(target.dataset.sort);
        renderList();
      }

      if (target.dataset.filter) {
        var filteredData = data.filterBook(target.dataset.filter);
        renderList(filteredData);
      }
    }
  });
};
;// CONCATENATED MODULE: ./src/js/index.js




 // import './modules/test.js'; /// 0
// import {sum} from './modules/test.js';
// console.log(sum(3,5)); /// 1
// import foo from './modules/test.js';
// console.log(foo(3,5)); /// 2

var fieldsBtnSort = document.querySelector('.fields_btn_sort');
var fieldsListSort = document.querySelector('.fields_list_sort');
var fieldsBtnFilter = document.querySelector('.fields_btn_filter');
var fieldsListFilter = document.querySelector('.fields_list_filter');

var init = function init() {
  initRouter();
  controlField(fieldsBtnSort, fieldsListSort, fieldsListFilter);
  controlField(fieldsBtnFilter, fieldsListFilter, fieldsListSort);
  modules_changeFieldset();
};

init();
}();
/******/ })()
;