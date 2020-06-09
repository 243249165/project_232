import ResInfo from "../../structure/public/ResInfo";


const { ccclass, property } = cc._decorator;

@ccclass
export default class ResManger {

    private static _instance: ResManger;
    private _resInfoMap: Map<string, ResInfo> = new Map<string, ResInfo>();
    private _persistenceMap: Map<string, ResInfo> = new Map<string, ResInfo>();
    // private _persistenceMap:Map
    /**
     * 单例
     *
     * @readonly
     * @static
     * @type {ResManger}
     * @memberof ResManger
     */
    public static get Instance(): ResManger {
        return this._instance ? this._instance : this._instance = new ResManger();
    }

    /**
     * 加载资源
     *
     * @author allen
     * @date 2020-06-08
     * @private
     * @param {string} url 资源路径
     * @param {typeof cc.Asset} [type] 资源类型
     * @param {(err: Error, resource: any) => void} [completeCanllback] 加载回调
     * @param {boolean} [persistence] 是否标记为不释放资源
     * @memberof ResManger
     */
    private _loadRes(url: string, type?: typeof cc.Asset, completeCanllback?: (err: Error, resource: any) => void, persistence?: boolean): void {
        if (!url) {
            cc.error('------------------------加载路径为空');
        }
        cc.loader.loadRes(url, type, (err: Error, resource: any) => {
            if (err) {
                cc.error('------------------加载异常：', err);
                return;
            }
            let info: ResInfo
            if (this._resInfoMap[url]) {
                info = this._resInfoMap[url];
            } else {
                info = new ResInfo();
                info.resource = resource;
                info.type = type;
                info.url = url;

            }

            if (persistence) {
                this._persistenceMap.set(url, info);
            }

            if (completeCanllback) {
                completeCanllback(err, resource)
            }




        })
    }
}
