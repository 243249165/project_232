import ResInfo from "../../structure/public/ResInfo";
import G from "../../GlobalSet";
import PathConstants from "../../constants/PathConstants";

export default class ResManger {

    private static _instance: ResManger;

    private _resInfoMap: Map<string, ResInfo> = new Map<string, ResInfo>();// 动态加载资源Map
    private _loadingRes: Map<string, number> = new Map<string, number>();// 正在加载资源
    private _uuidRefCountMap: Map<string, number> = new Map<string, number>();// uuid引用计数

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

                    depends.forEach((uuid) => {
                        this._setUuidRefMap(uuid);
                    });

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

    /**
     *设置uuid引用计数
     *
     * @author allen
     * @date 2020-06-10
     * @private
     * @param {*} uuid
     * @memberof ResManger
     */
    private _setUuidRefMap(uuid: string): void {
        let vaule = this._uuidRefCountMap[uuid];
        if (vaule != null) {
            vaule += 1;
        } else {
            vaule = 1;
        }
        this._uuidRefCountMap.set(uuid, vaule);
    } Î

    /**
     *删除指定uuid的引用计数
     *
     * @author allen
     * @date 2020-06-10
     * @private
     * @param {*} uuid
     * @memberof ResManger
     */
    private _deleteUuidRefMap(uuid: string): void {
        let vaule = this._uuidRefCountMap[uuid];
        if (vaule != null) {
            delete this._uuidRefCountMap[uuid];
        }
    }

    /**
     *加载预制体
     *
     * @author allen
     * @date 2020-06-10
     * @param {string} url
     * @param {(error: Error, perfab: cc.Prefab) => void} [completeCanllback]
     * @param {boolean} [persistance]
     * @memberof ResManger
     */
    public loadPrefab(url: string, completeCanllback?: (error: Error, perfab: cc.Prefab) => void, persistance?: boolean): void {
        this._loadRes(PathConstants.PREFABS + url, cc.Prefab, completeCanllback, persistance);
    }

    /**
     *加载图集
     *
     * @author allen
     * @date 2020-06-10
     * @param {string} url
     * @param {(error: Error, perfab: cc.SpriteAtlas) => void} [completeCanllback]
     * @param {boolean} [persistance]
     * @memberof ResManger
     */
    public loadSpriteAtlas(url: string, completeCanllback?: (error: Error, perfab: cc.SpriteAtlas) => void, persistance?: boolean): void {
        this._loadRes(PathConstants.ATLAS + url, cc.SpriteAtlas, completeCanllback, persistance);
    }

    /**
     *加载图片
     *
     * @author allen
     * @date 2020-06-10
     * @param {string} url
     * @param {(error: Error, perfab: cc.SpriteFrame) => void} [completeCanllback]
     * @param {boolean} [persistance]
     * @memberof ResManger
     */
    public loadSpriteFrame(url: string, completeCanllback?: (error: Error, perfab: cc.SpriteFrame) => void, persistance?: boolean): void {
        this._loadRes(url, cc.SpriteFrame, completeCanllback, persistance);
    }

    /**
     *加载音频
     *
     * @author allen
     * @date 2020-06-10
     * @param {string} url
     * @param {(error: Error, perfab: cc.AudioClip) => void} [completeCanllback]
     * @param {boolean} [persistance]
     * @memberof ResManger
     */
    public loadSpriteAudioClip(url: string, completeCanllback?: (error: Error, perfab: cc.AudioClip) => void, persistance?: boolean): void {
        this._loadRes(PathConstants.AUDIOES + url, cc.AudioClip, completeCanllback, persistance);
    }

    public instantiatePrefab(url: string, callback?: (node: cc.Node) => void) {
        this._loadRes(PathConstants.PREFABS + url, cc.Prefab, (err, perfab) => {
            let node = this.instantiate(perfab);
            if (callback) {
                callback(node);
            }
        })
    }

    public instantiate(target: any): cc.Node {
        let startTime = cc.sys.now();
        let newObj = cc.instantiate(target);
        G.LogUtil.log('----------------instantiated:ms=' + (cc.sys.now() - startTime), target)
        return newObj

    }
}
