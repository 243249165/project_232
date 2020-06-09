
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/structure/public/ResInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc3RydWN0dXJlL3B1YmxpYy9SZXNJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ1EsSUFBQSwrQkFBTyxDQUFtQjtBQUVsQzs7Ozs7OztHQU9HO0FBRUg7SUFEQTtRQUVJLFNBQVM7UUFDVCxTQUFJLEdBQW9CLElBQUksQ0FBQztRQUU3QixTQUFTO1FBQ1QsUUFBRyxHQUFXLElBQUksQ0FBQztRQUVuQixTQUFTO1FBQ1QsYUFBUSxHQUFRLElBQUksQ0FBQztRQUVyQixXQUFXO1FBQ1gsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUVoQixlQUFlO1FBQ2YsWUFBTyxHQUFVLEVBQUUsQ0FBQztJQVN4QixDQUFDO0lBTkcsc0JBQVcsNkJBQVE7UUFEbkIsNkJBQTZCO2FBQzdCO1lBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDO2dCQUN4QixPQUFPLElBQUksQ0FBQztZQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7SUFyQmdCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F1QjNCO0lBQUQsY0FBQztDQXZCRCxBQXVCQyxJQUFBO2tCQXZCb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKipcbiAqIOi1hOa6kOS/oeaBr1xuICpcbiAqIEBhdXRob3IgYWxsZW5cbiAqIEBkYXRlIDIwMjAtMDYtMDhcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBSZXNJbmZvXG4gKi9cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNJbmZvIHtcbiAgICAvKiog57G75Z6LICovXG4gICAgdHlwZTogdHlwZW9mIGNjLkFzc2V0ID0gbnVsbDtcblxuICAgIC8qKiDot6/lvoQgKi9cbiAgICB1cmw6IHN0cmluZyA9IG51bGw7XG5cbiAgICAvKiog5pWw5o2uICovXG4gICAgcmVzb3VyY2U6IGFueSA9IG51bGw7XG5cbiAgICAvKiog5byV55So5qyh5pWwICovXG4gICAgcmVmOiBudW1iZXIgPSAwO1xuXG4gICAgLyoqIOS+nei1lui1hOa6kFVVSUQgKi9cbiAgICBkZXBlbmRzOiBhbnlbXSA9IFtdO1xuXG4gICAgLyoqIOiOt+WPlui1hOa6kEtlee+8iOavj+S4qui1hOa6kOmDveacieS4gOS4quWUr+S4gEtlee+8iSAqL1xuICAgIHB1YmxpYyBnZXQgYXNzZXRLZXkoKSB7XG4gICAgICAgIGlmICh0aGlzLmRlcGVuZHMubGVuZ3RoID09IDApXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwZW5kc1t0aGlzLmRlcGVuZHMubGVuZ3RoIC0gMV07XG4gICAgfVxuXG59XG4iXX0=