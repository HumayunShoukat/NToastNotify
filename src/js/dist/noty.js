var nToastNotify =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NToastNotifyNoty_1 = __webpack_require__(2);
exports.noty = new NToastNotifyNoty_1.NToastNotifyNoty();


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var NToastNotify_1 = __webpack_require__(3);
var libOptions = {
    scriptSrc: 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js',
    varName: 'toastr',
    styleHref: ''
};
var NToastNotifyNoty = /** @class */ (function (_super) {
    __extends(NToastNotifyNoty, _super);
    function NToastNotifyNoty(options) {
        return _super.call(this, options || libOptions) || this;
    }
    NToastNotifyNoty.prototype.show = function (message) {
        var args = [];
        args.push(message.message);
        args.push(message.title);
        if (message.toastOptions) {
            args.push(message.toastOptions);
        }
        if (toastr) {
            toastr[message.toastType.toLowerCase()].apply(toastr, args);
        }
    };
    return NToastNotifyNoty;
}(NToastNotify_1.NToastNotify));
exports.NToastNotifyNoty = NToastNotifyNoty;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(4);
var NToastNotify = /** @class */ (function () {
    function NToastNotify(options) {
        this.options = null;
        this.fetchHeaderValue = 'Fetch';
        this.libOptions = options;
    }
    NToastNotify.prototype.init = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.options = Object.assign({}, NToastNotify.defaults, options);
                        this.interceptXmlRequest();
                        this.interceptNativeFetch();
                        if (!this.libPresentAlready()) return [3 /*break*/, 1];
                        this.showToasts(this.options.messages);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.loadLibAsync()];
                    case 2:
                        _a.sent();
                        this.showToasts(this.options.messages);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NToastNotify.prototype.libPresentAlready = function () {
        return typeof window[this.libOptions.varName] !== 'undefined';
    };
    NToastNotify.prototype.loadLibAsync = function () {
        return Promise.all([this.loadStyleAsync(), this.loadScriptAsync()]);
    };
    NToastNotify.prototype.getScriptTagSrc = function () {
        return this.options.libScriptSrc || this.libOptions.scriptSrc;
    };
    NToastNotify.prototype.getStyleTagHref = function () {
        return this.options.libStyleHref || this.libOptions.styleHref;
    };
    NToastNotify.prototype.loadScriptAsync = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.getScriptTagSrc()) {
                var script = document.createElement('script');
                script.setAttribute('src', _this.getScriptTagSrc());
                script.onload = function (e) {
                    resolve();
                };
                script.onerror = function (e) {
                    reject(e.message);
                };
                document.head.appendChild(script);
            }
            else {
                resolve();
            }
        });
    };
    NToastNotify.prototype.loadStyleAsync = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.getStyleTagHref()) {
                var link = document.createElement('link');
                link.setAttribute('rel', 'stylesheet');
                link.type = 'text/css';
                link.href = _this.getStyleTagHref();
                link.onload = function (e) {
                    resolve();
                };
                link.onerror = function (e) {
                    reject(e.message);
                };
                document.head.appendChild(link);
            }
            else {
                resolve();
            }
        });
    };
    NToastNotify.prototype.handleEvents = function () {
        document && document.addEventListener('DOMContentLoaded', this.domContentLoadedHandler.bind(this));
    };
    NToastNotify.prototype.getResponseHeaderKey = function () {
        return this.options.responseHeaderKey;
    };
    NToastNotify.prototype.interceptNativeFetch = function () {
        var self = this;
        var oldFetch = window.fetch;
        if (oldFetch) {
            window.fetch = function () {
                var requestInfo = arguments[0];
                self.prepareRequestInfo(requestInfo);
                var init = arguments.length > 1 ? arguments[1] : {};
                self.prepareReuqestInit(init);
                return oldFetch.apply(this, [requestInfo, init]);
            };
        }
    };
    NToastNotify.prototype.prepareRequestInfo = function (request) {
        if (request instanceof Request) {
            request.headers.append(this.options.requestHeaderKey, this.fetchHeaderValue);
        }
    };
    NToastNotify.prototype.prepareReuqestInit = function (reqInit) {
        if (reqInit) {
            //if headers is not defined yet. define one
            if (!reqInit.headers) {
                var newHeaders = new Headers();
                newHeaders.set(this.options.requestHeaderKey, this.fetchHeaderValue);
                reqInit.headers = newHeaders;
            }
            else {
                if (reqInit.headers instanceof Headers) {
                    reqInit.headers.set(this.options.requestHeaderKey, this.fetchHeaderValue);
                }
                else if (reqInit.headers instanceof Object) {
                    reqInit.headers[this.options.requestHeaderKey] = this.fetchHeaderValue;
                }
                else {
                    console.warn('NToastNotify header not set. Toast notification will not work');
                }
            }
        }
    };
    NToastNotify.prototype.interceptXmlRequest = function () {
        var self = this;
        // store the native send()
        var oldSend = XMLHttpRequest.prototype.send;
        // override the native send()
        XMLHttpRequest.prototype.send = function () {
            this.setRequestHeader(self.options.requestHeaderKey, 'XMLHttpRequest');
            // process the callback queue
            this.onload = self.xmlRequestOnLoadHandler.bind(self, this);
            // call the native send()
            oldSend.apply(this, arguments);
        };
    };
    NToastNotify.prototype.xmlRequestOnLoadHandler = function (xmlHttpRequest) {
        var messages = this.xmlGetMessagesFromResponse(xmlHttpRequest);
        this.showToasts(messages);
    };
    NToastNotify.prototype.xmlGetMessagesFromResponse = function (xmlHttpRequest) {
        var messagesStr = xmlHttpRequest.getResponseHeader(this.options.responseHeaderKey);
        if (messagesStr) {
            return JSON.parse(messagesStr);
        }
        return null;
    };
    NToastNotify.prototype.fetchGetMessagesFromResponse = function (response) {
        var messageStr = response.headers.get(this.options.responseHeaderKey);
        if (messageStr) {
            return JSON.parse(messageStr);
        }
        else {
            return null;
        }
    };
    NToastNotify.prototype.domContentLoadedHandler = function () {
        if (toastr) {
            toastr.options = this.options.globalToastrOptions;
            this.showToasts(this.options.messages);
        }
    };
    NToastNotify.prototype.showToasts = function (messages) {
        var _this = this;
        if (messages && messages.length) {
            messages.forEach(function (message, index, array) {
                _this.show(message);
            });
        }
    };
    return NToastNotify;
}());
exports.NToastNotify = NToastNotify;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

if (typeof Object.assign != 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, 'assign', {
        value: function (target) {
            'use strict';
            if (target == null) {
                throw new TypeError('Cannot convert undefined or null to object');
            }
            var to = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];
                if (nextSource != null) {
                    for (var nextKey in nextSource) {
                        // Avoid bugs when hasOwnProperty is shadowed
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        },
        writable: true,
        configurable: true
    });
}


/***/ })
/******/ ]);
//# sourceMappingURL=noty.js.map