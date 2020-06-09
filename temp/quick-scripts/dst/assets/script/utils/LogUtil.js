
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/utils/LogUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdXRpbHMvTG9nVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVRLElBQUEsK0JBQU8sQ0FBbUI7QUFHbEM7SUFBQTtJQWNBLENBQUM7SUFaVyx1QkFBSyxHQUFiO1FBQ0ksUUFBUSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU8sc0JBQUksR0FBWjtRQUNJLFFBQVEsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVPLHFCQUFHLEdBQVg7UUFDSSxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFaZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQWMzQjtJQUFELGNBQUM7Q0FkRCxBQWNDLElBQUE7a0JBZG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nVXRpbCB7XG5cbiAgICBwdWJsaWMgIGVycm9yKCkge1xuICAgICAgICBDQ19ERUJVRyAmJiBjYy5lcnJvci5hcHBseShjYywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgIHdhcm4oKSB7XG4gICAgICAgIENDX0RFQlVHICYmIGNjLndhcm4uYXBwbHkoY2MsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcHVibGljICBsb2coKSB7XG4gICAgICAgIENDX0RFQlVHICYmIGNjLmxvZy5hcHBseShjYywgYXJndW1lbnRzKTtcbiAgICB9XG5cbn1cbiJdfQ==