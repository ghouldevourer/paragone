montageDefine("67979a6","lib/util",{dependencies:[],factory:function(e,t){function n(e){return Array.isArray?Array.isArray(e):"[object Array]"===g(e)}function i(e){return"boolean"==typeof e}function r(e){return null===e}function a(e){return null==e}function s(e){return"number"==typeof e}function o(e){return"string"==typeof e}function l(e){return"symbol"==typeof e}function c(e){return void 0===e}function u(e){return"[object RegExp]"===g(e)}function h(e){return"object"==typeof e&&null!==e}function p(e){return"[object Date]"===g(e)}function d(e){return"[object Error]"===g(e)||e instanceof Error}function f(e){return"function"==typeof e}function m(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||e===void 0}function g(e){return Object.prototype.toString.call(e)}t.isArray=n,t.isBoolean=i,t.isNull=r,t.isNullOrUndefined=a,t.isNumber=s,t.isString=o,t.isSymbol=l,t.isUndefined=c,t.isRegExp=u,t.isObject=h,t.isDate=p,t.isError=d,t.isFunction=f,t.isPrimitive=m,t.isBuffer=Buffer.isBuffer}});