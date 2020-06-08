
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbW9kZWwvcHVibGljL05vZGVQb29sTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUU3QyxJQUFBLCtCQUFPLENBQW1CO0FBRWxDLGNBQWM7QUFFZDtJQVdJO1FBRlEsZUFBVSxHQUFnQyxJQUFJLEdBQUcsRUFBMEIsQ0FBQztRQUdoRixFQUFFLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDdEMsQ0FBQzt3QkFiZ0IsZUFBZTtJQUtoQyxzQkFBa0IsMkJBQVE7UUFEMUIsUUFBUTthQUNSO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksaUJBQWUsRUFBRSxDQUFDO1FBQ3BGLENBQUM7OztPQUFBO0lBUUQ7OztPQUdHO0lBQ0sscUNBQVcsR0FBbkIsVUFBb0IsSUFBYTtRQUM3QixJQUFJLFVBQVUsR0FBb0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBYSxDQUFDLENBQUM7UUFDcEUsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QixVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztnQkFDekIsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0sscUNBQVcsR0FBbkIsVUFBb0IsSUFBYTtRQUM3QixJQUFJLFVBQVUsR0FBb0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBYSxDQUFDLENBQUM7UUFDcEUsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QixVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztnQkFDekIsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLDZCQUFHLEdBQVgsVUFBWSxJQUFZLEVBQUUsUUFBaUI7UUFDdkMsSUFBSSxJQUFhLENBQUM7UUFDbEIsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQztZQUM3QyxJQUFJLElBQUksRUFBRTtnQkFDTixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFO29CQUNoQixJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUI7YUFDSjtTQUNKO2FBQU07WUFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDeEM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDZCQUFHLEdBQVYsVUFBVyxJQUFhLEVBQUUsUUFBaUI7UUFDdkMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMxQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDUCxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUN0RDtZQUNELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFCO1NBQ0o7YUFBTTtZQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7SUFFTSxnQ0FBTSxHQUFiLFVBQWMsUUFBZ0IsRUFBRSxRQUFnQixFQUFFLFFBQWlDO1FBQy9FLElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzFELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksUUFBUSxFQUFFO29CQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbEI7Z0JBQ0QsT0FBTzthQUNWO1NBRUo7YUFBTTtZQUNILEVBQUUsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUM7O0lBbkdnQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBdUduQztJQUFELHNCQUFDO0NBdkdELEFBdUdDLElBQUE7a0JBdkdvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSBcIi4uLy4uL2Jhc2UvQmFzZUNvbXBvbmVudFwiO1xuXG5jb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8qKiDoioLngrnmsaDlrZDnrqHnkIblmaggKi9cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlUG9vbE1hbmFnZXIge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBOb2RlUG9vbE1hbmFnZXI7XG5cbiAgICAvKiog5Y2V5L6LKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpOiBOb2RlUG9vbE1hbmFnZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgPyB0aGlzLl9pbnN0YW5jZSA6IHRoaXMuX2luc3RhbmNlID0gbmV3IE5vZGVQb29sTWFuYWdlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX25vZGVQb29sczogTWFwPHN0cmluZywgQXJyYXk8Y2MuTm9kZT4+ID0gbmV3IE1hcDxzdHJpbmcsIEFycmF5PGNjLk5vZGU+PigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNjLmxvZyhcImNyZWF0ZWQgTm9kZVBvb2xNYW5hZ2VyXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiwg+eUqOiKgueCueWvueixoeS4iuWQhOS4que7hOS7tueahOWkjeeUqOaWueazlVxuICAgICAqIEBwYXJhbSBub2RlIOiKgueCuVxuICAgICAqL1xuICAgIHByaXZhdGUgaW52b2tlUmV1c2Uobm9kZTogY2MuTm9kZSk6IHZvaWQge1xuICAgICAgICBsZXQgY29tcG9uZW50czogQmFzZUNvbXBvbmVudFtdID0gbm9kZS5nZXRDb21wb25lbnRzKEJhc2VDb21wb25lbnQpO1xuICAgICAgICBpZiAoY29tcG9uZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5vblJldXNlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiwg+eUqOiKgueCueWvueixoeS4iuWQhOS4que7hOS7tueahOaUtuWbnuaWueazlVxuICAgICAqIEBwYXJhbSBub2RlIOiKgueCuVxuICAgICAqL1xuICAgIHByaXZhdGUgaW52b2tlVW51c2Uobm9kZTogY2MuTm9kZSk6IHZvaWQge1xuICAgICAgICBsZXQgY29tcG9uZW50czogQmFzZUNvbXBvbmVudFtdID0gbm9kZS5nZXRDb21wb25lbnRzKEJhc2VDb21wb25lbnQpO1xuICAgICAgICBpZiAoY29tcG9uZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5vblVudXNlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LuO5rGg5a2Q5Lit6I635Y+W5LiA5Liq6IqC54K55a+56LGhXG4gICAgICogQHBhcmFtIG5hbWUg5ZCN56ewXG4gICAgICogQHBhcmFtIHBvb2xOYW1lIOaMh+WumuaxoOWtkOWQjeensO+8jOWmguaenOS4jeaMh+WumuWImeS7juaAu+axoOWtkOS4reiOt+WPllxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0KG5hbWU6IHN0cmluZywgcG9vbE5hbWU/OiBzdHJpbmcpOiBjYy5Ob2RlIHtcbiAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGU7XG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICBsZXQgcG9vbCA9IHRoaXMuX25vZGVQb29sc1twb29sTmFtZSB8fCBuYW1lXTtcbiAgICAgICAgICAgIGlmIChwb29sKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGVJbmRleCA9IHBvb2wubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZUluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHBvb2xbbm9kZUluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgcG9vbC5sZW5ndGggPSBub2RlSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW52b2tlUmV1c2Uobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Mud2FybignLS0tLS0tLS0tLS0tLS3oioLngrnlkI3np7DkuLrnqbrvvIzojrflj5blvILluLgnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlvoDmsaDlrZDkuK3mt7vliqDkuIDkuKroioLngrnlr7nosaFcbiAgICAgKiBAcGFyYW0gbmFtZSDlkI3np7BcbiAgICAgKiBAcGFyYW0gcG9vbE5hbWUg5oyH5a6a5rGg5a2Q5ZCN56ew77yM5aaC5p6c5LiN5oyH5a6a5YiZ5LuO5oC75rGg5a2Q5Lit6I635Y+WXG4gICAgICovXG4gICAgcHVibGljIHB1dChub2RlOiBjYy5Ob2RlLCBwb29sTmFtZT86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAobm9kZSAmJiBjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBsZXQgcG9vbCA9IHRoaXMuX25vZGVQb29sc1twb29sTmFtZSB8fCBub2RlLm5hbWVdO1xuICAgICAgICAgICAgaWYgKCFwb29sKSB7XG4gICAgICAgICAgICAgICAgcG9vbCA9IHRoaXMuX25vZGVQb29sc1twb29sTmFtZSB8fCBub2RlLm5hbWVdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9vbC5pbmRleE9mKG5vZGUpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBvb2wucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUZyb21QYXJlbnQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW52b2tlVW51c2Uobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy53YXJuKCctLS0tLS0tLS0tLS0tLeiKgueCueS4uuepuu+8jOa3u+WKoOW8guW4uCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9idGFpbihwYXRoTmFtZTogc3RyaW5nLCBwb29sTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKG5vZGU6IGNjLk5vZGUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHBhdGhOYW1lKSB7XG4gICAgICAgICAgICBsZXQgbGFzdEluZGV4ID0gcGF0aE5hbWUubGFzdEluZGV4T2YoXCIvXCIpO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBwYXRoTmFtZS5zbGljZShsYXN0SW5kZXgsIHBhdGhOYW1lLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldChuYW1lLCBwb29sTmFtZSk7XG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy53YXJuKCctLS0tLS0tLS0tLS0tLemihOWItuS9k+i3r+W+hOS4uuepuu+8jOiOt+WPluW8guW4uCcpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxuIl19