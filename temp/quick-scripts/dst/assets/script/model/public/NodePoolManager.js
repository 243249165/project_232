
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/model/public/NodePoolManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87b16IGmkxOT7JVu7PZsM0J', 'NodePoolManager');
// script/model/public/NodePoolManager.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseComponent_1 = require("../../base/BaseComponent");
var ccclass = cc._decorator.ccclass;
/** 节点池子管理器 */
var NodePoolManager = /** @class */ (function () {
    function NodePoolManager() {
        this._nodePools = new Map();
        cc.log("created NodePoolManager");
    }
    NodePoolManager_1 = NodePoolManager;
    Object.defineProperty(NodePoolManager, "Instance", {
        /** 单例*/
        get: function () {
            return this._instance ? this._instance : this._instance = new NodePoolManager_1();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 调用节点对象上各个组件的复用方法
     * @param node 节点
     */
    NodePoolManager.prototype.invokeReuse = function (node) {
        var components = node.getComponents(BaseComponent_1.default);
        if (components.length > 0) {
            components.forEach(function (component) {
                component.onReuse();
            });
        }
    };
    /**
     * 调用节点对象上各个组件的收回方法
     * @param node 节点
     */
    NodePoolManager.prototype.invokeUnuse = function (node) {
        var components = node.getComponents(BaseComponent_1.default);
        if (components.length > 0) {
            components.forEach(function (component) {
                component.onUnuse();
            });
        }
    };
    /**
     * 从池子中获取一个节点对象
     * @param name 名称
     * @param poolName 指定池子名称，如果不指定则从总池子中获取
     */
    NodePoolManager.prototype.get = function (name, poolName) {
        var node;
        if (name) {
            var pool = this._nodePools[poolName || name];
            if (pool) {
                var nodeIndex = pool.length - 1;
                if (nodeIndex >= 0) {
                    node = pool[nodeIndex];
                    pool.length = nodeIndex;
                    this.invokeReuse(node);
                }
            }
        }
        else {
            cc.warn('--------------节点名称为空，获取异常');
        }
        return node;
    };
    /**
     * 往池子中添加一个节点对象
     * @param name 名称
     * @param poolName 指定池子名称，如果不指定则从总池子中获取
     */
    NodePoolManager.prototype.put = function (node, poolName) {
        if (node && cc.isValid(node)) {
            var pool = this._nodePools[poolName || node.name];
            if (!pool) {
                pool = this._nodePools[poolName || node.name] = [];
            }
            if (pool.indexOf(node) === -1) {
                pool.push(node);
                node.removeFromParent(false);
                this.invokeUnuse(node);
            }
        }
        else {
            cc.warn('--------------节点为空，添加异常');
        }
    };
    /**
     *
     * 从节点池中获取节点，如果没有则创建
     * @author allen
     * @date 2020-06-08
     * @param {string} pathName
     * @param {string} poolName
     * @param {(node: cc.Node) => void} callback
     * @returns {void}
     * @memberof NodePoolManager
     */
    NodePoolManager.prototype.obtain = function (pathName, poolName, callback) {
        if (pathName) {
            var lastIndex = pathName.lastIndexOf("/");
            var name = pathName.slice(lastIndex, pathName.length - 1);
            var node = this.get(name, poolName);
            if (node) {
                if (callback) {
                    callback(node);
                }
                return;
            }
        }
        else {
            cc.warn('--------------预制体路径为空，获取异常');
        }
    };
    var NodePoolManager_1;
    NodePoolManager = NodePoolManager_1 = __decorate([
        ccclass
    ], NodePoolManager);
    return NodePoolManager;
}());
exports.default = NodePoolManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbW9kZWwvcHVibGljL05vZGVQb29sTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUU3QyxJQUFBLCtCQUFPLENBQW1CO0FBRWxDLGNBQWM7QUFFZDtJQVdJO1FBRlEsZUFBVSxHQUFnQyxJQUFJLEdBQUcsRUFBMEIsQ0FBQztRQUdoRixFQUFFLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDdEMsQ0FBQzt3QkFiZ0IsZUFBZTtJQUtoQyxzQkFBa0IsMkJBQVE7UUFEMUIsUUFBUTthQUNSO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksaUJBQWUsRUFBRSxDQUFDO1FBQ3BGLENBQUM7OztPQUFBO0lBUUQ7OztPQUdHO0lBQ0sscUNBQVcsR0FBbkIsVUFBb0IsSUFBYTtRQUM3QixJQUFJLFVBQVUsR0FBb0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBYSxDQUFDLENBQUM7UUFDcEUsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QixVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztnQkFDekIsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0sscUNBQVcsR0FBbkIsVUFBb0IsSUFBYTtRQUM3QixJQUFJLFVBQVUsR0FBb0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBYSxDQUFDLENBQUM7UUFDcEUsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QixVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztnQkFDekIsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLDZCQUFHLEdBQVgsVUFBWSxJQUFZLEVBQUUsUUFBaUI7UUFDdkMsSUFBSSxJQUFhLENBQUM7UUFDbEIsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQztZQUM3QyxJQUFJLElBQUksRUFBRTtnQkFDTixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFO29CQUNoQixJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUI7YUFDSjtTQUNKO2FBQU07WUFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDeEM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDZCQUFHLEdBQVYsVUFBVyxJQUFhLEVBQUUsUUFBaUI7UUFDdkMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMxQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDUCxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUN0RDtZQUNELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFCO1NBQ0o7YUFBTTtZQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ0ksZ0NBQU0sR0FBYixVQUFjLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxRQUFpQztRQUMvRSxJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNwQyxJQUFJLElBQUksRUFBRTtnQkFDTixJQUFJLFFBQVEsRUFBRTtvQkFDVixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2xCO2dCQUNELE9BQU87YUFDVjtTQUVKO2FBQU07WUFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDekM7SUFDTCxDQUFDOztJQTlHZ0IsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQWtIbkM7SUFBRCxzQkFBQztDQWxIRCxBQWtIQyxJQUFBO2tCQWxIb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gXCIuLi8uLi9iYXNlL0Jhc2VDb21wb25lbnRcIjtcblxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKiog6IqC54K55rGg5a2Q566h55CG5ZmoICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZVBvb2xNYW5hZ2VyIHtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogTm9kZVBvb2xNYW5hZ2VyO1xuXG4gICAgLyoqIOWNleS+iyovXG4gICAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKTogTm9kZVBvb2xNYW5hZ2VyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlID8gdGhpcy5faW5zdGFuY2UgOiB0aGlzLl9pbnN0YW5jZSA9IG5ldyBOb2RlUG9vbE1hbmFnZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9ub2RlUG9vbHM6IE1hcDxzdHJpbmcsIEFycmF5PGNjLk5vZGU+PiA9IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxjYy5Ob2RlPj4oKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjYy5sb2coXCJjcmVhdGVkIE5vZGVQb29sTWFuYWdlclwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDosIPnlKjoioLngrnlr7nosaHkuIrlkITkuKrnu4Tku7bnmoTlpI3nlKjmlrnms5VcbiAgICAgKiBAcGFyYW0gbm9kZSDoioLngrlcbiAgICAgKi9cbiAgICBwcml2YXRlIGludm9rZVJldXNlKG5vZGU6IGNjLk5vZGUpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudHM6IEJhc2VDb21wb25lbnRbXSA9IG5vZGUuZ2V0Q29tcG9uZW50cyhCYXNlQ29tcG9uZW50KTtcbiAgICAgICAgaWYgKGNvbXBvbmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQub25SZXVzZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDosIPnlKjoioLngrnlr7nosaHkuIrlkITkuKrnu4Tku7bnmoTmlLblm57mlrnms5VcbiAgICAgKiBAcGFyYW0gbm9kZSDoioLngrlcbiAgICAgKi9cbiAgICBwcml2YXRlIGludm9rZVVudXNlKG5vZGU6IGNjLk5vZGUpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudHM6IEJhc2VDb21wb25lbnRbXSA9IG5vZGUuZ2V0Q29tcG9uZW50cyhCYXNlQ29tcG9uZW50KTtcbiAgICAgICAgaWYgKGNvbXBvbmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQub25VbnVzZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS7juaxoOWtkOS4reiOt+WPluS4gOS4quiKgueCueWvueixoVxuICAgICAqIEBwYXJhbSBuYW1lIOWQjeensFxuICAgICAqIEBwYXJhbSBwb29sTmFtZSDmjIflrprmsaDlrZDlkI3np7DvvIzlpoLmnpzkuI3mjIflrprliJnku47mgLvmsaDlrZDkuK3ojrflj5ZcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldChuYW1lOiBzdHJpbmcsIHBvb2xOYW1lPzogc3RyaW5nKTogY2MuTm9kZSB7XG4gICAgICAgIGxldCBub2RlOiBjYy5Ob2RlO1xuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgbGV0IHBvb2wgPSB0aGlzLl9ub2RlUG9vbHNbcG9vbE5hbWUgfHwgbmFtZV07XG4gICAgICAgICAgICBpZiAocG9vbCkge1xuICAgICAgICAgICAgICAgIGxldCBub2RlSW5kZXggPSBwb29sLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBwb29sW25vZGVJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHBvb2wubGVuZ3RoID0gbm9kZUluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmludm9rZVJldXNlKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLndhcm4oJy0tLS0tLS0tLS0tLS0t6IqC54K55ZCN56ew5Li656m677yM6I635Y+W5byC5bi4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5b6A5rGg5a2Q5Lit5re75Yqg5LiA5Liq6IqC54K55a+56LGhXG4gICAgICogQHBhcmFtIG5hbWUg5ZCN56ewXG4gICAgICogQHBhcmFtIHBvb2xOYW1lIOaMh+WumuaxoOWtkOWQjeensO+8jOWmguaenOS4jeaMh+WumuWImeS7juaAu+axoOWtkOS4reiOt+WPllxuICAgICAqL1xuICAgIHB1YmxpYyBwdXQobm9kZTogY2MuTm9kZSwgcG9vbE5hbWU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKG5vZGUgJiYgY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbGV0IHBvb2wgPSB0aGlzLl9ub2RlUG9vbHNbcG9vbE5hbWUgfHwgbm9kZS5uYW1lXTtcbiAgICAgICAgICAgIGlmICghcG9vbCkge1xuICAgICAgICAgICAgICAgIHBvb2wgPSB0aGlzLl9ub2RlUG9vbHNbcG9vbE5hbWUgfHwgbm9kZS5uYW1lXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBvb2wuaW5kZXhPZihub2RlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwb29sLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVGcm9tUGFyZW50KGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmludm9rZVVudXNlKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Mud2FybignLS0tLS0tLS0tLS0tLS3oioLngrnkuLrnqbrvvIzmt7vliqDlvILluLgnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICog5LuO6IqC54K55rGg5Lit6I635Y+W6IqC54K577yM5aaC5p6c5rKh5pyJ5YiZ5Yib5bu6XG4gICAgICogQGF1dGhvciBhbGxlblxuICAgICAqIEBkYXRlIDIwMjAtMDYtMDhcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aE5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcG9vbE5hbWVcbiAgICAgKiBAcGFyYW0geyhub2RlOiBjYy5Ob2RlKSA9PiB2b2lkfSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqIEBtZW1iZXJvZiBOb2RlUG9vbE1hbmFnZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgb2J0YWluKHBhdGhOYW1lOiBzdHJpbmcsIHBvb2xOYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAobm9kZTogY2MuTm9kZSkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICBpZiAocGF0aE5hbWUpIHtcbiAgICAgICAgICAgIGxldCBsYXN0SW5kZXggPSBwYXRoTmFtZS5sYXN0SW5kZXhPZihcIi9cIik7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IHBhdGhOYW1lLnNsaWNlKGxhc3RJbmRleCwgcGF0aE5hbWUubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0KG5hbWUsIHBvb2xOYW1lKTtcbiAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLndhcm4oJy0tLS0tLS0tLS0tLS0t6aKE5Yi25L2T6Lev5b6E5Li656m677yM6I635Y+W5byC5bi4Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG4iXX0=