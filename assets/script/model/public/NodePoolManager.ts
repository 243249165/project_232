import BaseComponent from "../../base/BaseComponent";

const { ccclass } = cc._decorator;

/** 节点池子管理器 */
@ccclass
export default class NodePoolManager {

    private static _instance: NodePoolManager;

    /** 单例*/
    public static get Instance(): NodePoolManager {
        return this._instance ? this._instance : this._instance = new NodePoolManager();
    }

    private _nodePools: Map<string, Array<cc.Node>> = new Map<string, Array<cc.Node>>();

    constructor() {
        cc.log("created NodePoolManager");
    }

    /**
     * 调用节点对象上各个组件的复用方法
     * @param node 节点
     */
    private invokeReuse(node: cc.Node): void {
        let components: BaseComponent[] = node.getComponents(BaseComponent);
        if (components.length > 0) {
            components.forEach((component) => {
                component.onReuse();
            })
        }
    }
    /**
     * 调用节点对象上各个组件的收回方法
     * @param node 节点
     */
    private invokeUnuse(node: cc.Node): void {
        let components: BaseComponent[] = node.getComponents(BaseComponent);
        if (components.length > 0) {
            components.forEach((component) => {
                component.onUnuse();
            })
        }
    }

    /**
     * 从池子中获取一个节点对象
     * @param name 名称
     * @param poolName 指定池子名称，如果不指定则从总池子中获取
     */
    private get(name: string, poolName?: string): cc.Node {
        let node: cc.Node;
        if (name) {
            let pool = this._nodePools[poolName || name];
            if (pool) {
                let nodeIndex = pool.length - 1;
                if (nodeIndex >= 0) {
                    node = pool[nodeIndex];
                    pool.length = nodeIndex;
                    this.invokeReuse(node);
                }
            }
        } else {
            cc.warn('--------------节点名称为空，获取异常');
        }
        return node;
    }

    /**
     * 往池子中添加一个节点对象
     * @param name 名称
     * @param poolName 指定池子名称，如果不指定则从总池子中获取
     */
    public put(node: cc.Node, poolName?: string): void {
        if (node && cc.isValid(node)) {
            let pool = this._nodePools[poolName || node.name];
            if (!pool) {
                pool = this._nodePools[poolName || node.name] = [];
            }
            if (pool.indexOf(node) === -1) {
                pool.push(node);
                node.removeFromParent(false);
                this.invokeUnuse(node);
            }
        } else {
            cc.warn('--------------节点为空，添加异常');
        }
    }

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
    public obtain(pathName: string, poolName: string, callback: (node: cc.Node) => void): void {
        if (pathName) {
            let lastIndex = pathName.lastIndexOf("/");
            let name = pathName.slice(lastIndex, pathName.length - 1);
            let node = this.get(name, poolName);
            if (node) {
                if (callback) {
                    callback(node);
                }
                return;
            }

        } else {
            cc.warn('--------------预制体路径为空，获取异常');
        }
    }



}
