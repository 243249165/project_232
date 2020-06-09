import ResInfo from "../../structure/public/ResInfo";
import LogUtil from "../../utils/LogUtil";
import G from "../../GlobalSet";


const { ccclass, property } = cc._decorator;

@ccclass
export default class ResManger {

    private static _instance: ResManger;

    private _resInfoMap: Map<string, ResInfo> = new Map<string, ResInfo>();// 动态加载资源Map
    private _loadingRes: Map<string, number> = new Map<string, number>();// 正在加载资源

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
        // 路径判空
        if (!url) {
            G.LogUtil.error('------------------------加载路径为空');
        }
        let info: ResInfo = this._resInfoMap[url];
        // 从缓存中获取资源
        if (info && info.resource && info.resource.isValid) {
            if (completeCanllback) {
                completeCanllback(null, info.resource)
            }
        } else {
            let startTime = cc.sys.now();
            // 移除加载过长资源
            for (const key in this._loadingRes) {
                if (this._loadingRes.hasOwnProperty(key)) {
                    const time = this._loadingRes[key];
                    if (cc.sys.now() - time >= 1000 * 10) {
                        delete this._loadingRes[key];
                    }
                }
            }

            this._loadingRes[url] = startTime;
            // 动态加载资源
            cc.loader.loadRes(url, type, (err: Error, resource: any) => {
                // 移除加载记录
                delete this._loadingRes[url];
                // 加载失败
                if (err) {
                    G.LogUtil.error('------------------加载异常：', err);
                } else {
                    resource.assetUrl = url;
                    if (!info) {
                        info = new ResInfo();
                    }
                    info.resource = resource;
                    info.type = type;
                    info.url = url;

                    // 加载资源的依赖资源uuid
                    let depends: any[] = cc.loader.getDependsRecursively(resource);
                    info.depends = depends;

                    // 标记永不释放资源
                    if (persistence) {
                        info.isKeey = true;
                    } else {
                        info.isKeey = false;
                    }
                    this._resInfoMap.set(url, info);
                }

                if (completeCanllback) {
                    completeCanllback(err, resource)
                }
            });
        }
    }

}
