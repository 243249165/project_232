"use strict";
cc._RF.push(module, '2d6e278XHVCa6J0VbvgFxLp', 'ResInfo');
// script/structure/public/ResInfo.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
/**
 * 资源信息
 *
 * @author allen
 * @date 2020-06-08
 * @export
 * @class ResInfo
 */
var ResInfo = /** @class */ (function () {
    function ResInfo() {
        /** 类型 */
        this.type = null;
        /** 路径 */
        this.url = null;
        /** 数据 */
        this.resource = null;
        /** 引用次数 */
        this.ref = 0;
        /** 依赖资源UUID */
        this.depends = [];
    }
    Object.defineProperty(ResInfo.prototype, "assetKey", {
        /** 获取资源Key（每个资源都有一个唯一Key） */
        get: function () {
            if (this.depends.length == 0)
                return null;
            return this.depends[this.depends.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    ResInfo = __decorate([
        ccclass
    ], ResInfo);
    return ResInfo;
}());
exports.default = ResInfo;

cc._RF.pop();