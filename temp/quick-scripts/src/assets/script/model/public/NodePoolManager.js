"use strict";
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