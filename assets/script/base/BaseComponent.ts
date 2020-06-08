

const { ccclass } = cc._decorator;

@ccclass
export default class BaseComponent extends cc.Component {

    /** 组件的节点对象被从缓存池复用时调用 */
    public onReuse(): void {
    }

    /** 组件的节点对象被回收至缓存池时调用 */
    public onUnuse(): void {
    }
}
