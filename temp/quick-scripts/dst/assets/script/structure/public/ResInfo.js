
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
        this.isKeey = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc3RydWN0dXJlL3B1YmxpYy9SZXNJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ1EsSUFBQSwrQkFBTyxDQUFtQjtBQUVsQzs7Ozs7OztHQU9HO0FBRUg7SUFEQTtRQUVJLFNBQVM7UUFDVCxTQUFJLEdBQW9CLElBQUksQ0FBQztRQUU3QixTQUFTO1FBQ1QsUUFBRyxHQUFXLElBQUksQ0FBQztRQUVuQixTQUFTO1FBQ1QsYUFBUSxHQUFRLElBQUksQ0FBQztRQUVyQixXQUFXO1FBQ1gsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUVoQixlQUFlO1FBQ2YsWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUVwQixXQUFNLEdBQVksS0FBSyxDQUFDO0lBUTVCLENBQUM7SUFORyxzQkFBVyw2QkFBUTtRQURuQiw2QkFBNkI7YUFDN0I7WUFDSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUM7Z0JBQ3hCLE9BQU8sSUFBSSxDQUFDO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqRCxDQUFDOzs7T0FBQTtJQXRCZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXdCM0I7SUFBRCxjQUFDO0NBeEJELEFBd0JDLElBQUE7a0JBeEJvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8qKlxuICog6LWE5rqQ5L+h5oGvXG4gKlxuICogQGF1dGhvciBhbGxlblxuICogQGRhdGUgMjAyMC0wNi0wOFxuICogQGV4cG9ydFxuICogQGNsYXNzIFJlc0luZm9cbiAqL1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc0luZm8ge1xuICAgIC8qKiDnsbvlnosgKi9cbiAgICB0eXBlOiB0eXBlb2YgY2MuQXNzZXQgPSBudWxsO1xuXG4gICAgLyoqIOi3r+W+hCAqL1xuICAgIHVybDogc3RyaW5nID0gbnVsbDtcblxuICAgIC8qKiDmlbDmja4gKi9cbiAgICByZXNvdXJjZTogYW55ID0gbnVsbDtcblxuICAgIC8qKiDlvJXnlKjmrKHmlbAgKi9cbiAgICByZWY6IG51bWJlciA9IDA7XG5cbiAgICAvKiog5L6d6LWW6LWE5rqQVVVJRCAqL1xuICAgIGRlcGVuZHM6IGFueVtdID0gW107XG5cbiAgICBpc0tlZXk6IGJvb2xlYW4gPSBmYWxzZTsgXG4gICAgLyoqIOiOt+WPlui1hOa6kEtlee+8iOavj+S4qui1hOa6kOmDveacieS4gOS4quWUr+S4gEtlee+8iSAqL1xuICAgIHB1YmxpYyBnZXQgYXNzZXRLZXkoKSB7XG4gICAgICAgIGlmICh0aGlzLmRlcGVuZHMubGVuZ3RoID09IDApXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwZW5kc1t0aGlzLmRlcGVuZHMubGVuZ3RoIC0gMV07XG4gICAgfVxuXG59XG4iXX0=