
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/base/BaseComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0aacQmVDBPxqlCIQoubthX', 'BaseComponent');
// script/base/BaseComponent.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
var BaseComponent = /** @class */ (function (_super) {
    __extends(BaseComponent, _super);
    function BaseComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** 组件的节点对象被从缓存池复用时调用 */
    BaseComponent.prototype.onReuse = function () {
    };
    /** 组件的节点对象被回收至缓存池时调用 */
    BaseComponent.prototype.onUnuse = function () {
    };
    BaseComponent = __decorate([
        ccclass
    ], BaseComponent);
    return BaseComponent;
}(cc.Component));
exports.default = BaseComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYmFzZS9CYXNlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVRLElBQUEsK0JBQU8sQ0FBbUI7QUFHbEM7SUFBMkMsaUNBQVk7SUFBdkQ7O0lBU0EsQ0FBQztJQVBHLHdCQUF3QjtJQUNqQiwrQkFBTyxHQUFkO0lBQ0EsQ0FBQztJQUVELHdCQUF3QjtJQUNqQiwrQkFBTyxHQUFkO0lBQ0EsQ0FBQztJQVJnQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBU2pDO0lBQUQsb0JBQUM7Q0FURCxBQVNDLENBVDBDLEVBQUUsQ0FBQyxTQUFTLEdBU3REO2tCQVRvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLyoqIOe7hOS7tueahOiKgueCueWvueixoeiiq+S7jue8k+WtmOaxoOWkjeeUqOaXtuiwg+eUqCAqL1xuICAgIHB1YmxpYyBvblJldXNlKCk6IHZvaWQge1xuICAgIH1cblxuICAgIC8qKiDnu4Tku7bnmoToioLngrnlr7nosaHooqvlm57mlLboh7PnvJPlrZjmsaDml7bosIPnlKggKi9cbiAgICBwdWJsaWMgb25VbnVzZSgpOiB2b2lkIHtcbiAgICB9XG59XG4iXX0=