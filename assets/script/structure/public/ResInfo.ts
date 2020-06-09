
const { ccclass } = cc._decorator;

/**
 * 资源信息
 *
 * @author allen
 * @date 2020-06-08
 * @export
 * @class ResInfo
 */
@ccclass
export default class ResInfo {
    /** 类型 */
    type: typeof cc.Asset = null;

    /** 路径 */
    url: string = null;

    /** 数据 */
    resource: any = null;

    /** 引用次数 */
    ref: number = 0;

    /** 依赖资源UUID */
    depends: any[] = [];

    /** 获取资源Key（每个资源都有一个唯一Key） */
    public get assetKey() {
        if (this.depends.length == 0)
            return null;
        return this.depends[this.depends.length - 1];
    }

}
