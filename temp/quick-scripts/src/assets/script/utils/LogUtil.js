"use strict";
cc._RF.push(module, '05957jmagtI55AphIiKLlCN', 'LogUtil');
// script/utils/LogUtil.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
var LogUtil = /** @class */ (function () {
    function LogUtil() {
    }
    LogUtil.prototype.error = function () {
        CC_DEBUG && cc.error.apply(cc, arguments);
    };
    LogUtil.prototype.warn = function () {
        CC_DEBUG && cc.warn.apply(cc, arguments);
    };
    LogUtil.prototype.log = function () {
        CC_DEBUG && cc.log.apply(cc, arguments);
    };
    LogUtil = __decorate([
        ccclass
    ], LogUtil);
    return LogUtil;
}());
exports.default = LogUtil;

cc._RF.pop();