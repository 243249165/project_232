"use strict";
cc._RF.push(module, 'c907dF+k7JEIbPAieQvKfCh', 'ResManger');
// script/model/public/ResManger.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ResInfo_1 = require("../../structure/public/ResInfo");
var LogUtil_1 = require("../../utils/LogUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ResManger = /** @class */ (function () {
    function ResManger() {
        this._resInfoMap = new Map(); // 动态加载资源Map
        this._loadingRes = new Map(); // 正在加载资源
    }
    ResManger_1 = ResManger;
    Object.defineProperty(ResManger, "Instance", {
        /**
         * 单例
         *
         * @readonly
         * @static
         * @type {ResManger}
         * @memberof ResManger
         */
        get: function () {
            return this._instance ? this._instance : this._instance = new ResManger_1();
        },
        enumerable: true,
        configurable: true
    });
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
    ResManger.prototype._loadRes = function (url, type, completeCanllback, persistence) {
        var _this = this;
        // 路径判空
        if (!url) {
            LogUtil_1.default.error('------------------------加载路径为空');
        }
        var info = this._resInfoMap[url];
        // 从缓存中获取资源
        if (info && info.resource && info.resource.isValid) {
            if (completeCanllback) {
                completeCanllback(null, info.resource);
            }
        }
        else {
            var startTime = cc.sys.now();
            // 移除加载过长资源
            for (var key in this._loadingRes) {
                if (this._loadingRes.hasOwnProperty(key)) {
                    var time = this._loadingRes[key];
                    if (cc.sys.now() - time >= 1000 * 10) {
                        delete this._loadingRes[key];
                    }
                }
            }
            this._loadingRes[url] = startTime;
            // 动态加载资源
            cc.loader.loadRes(url, type, function (err, resource) {
                // 移除加载记录
                delete _this._loadingRes[url];
                // 加载失败
                if (err) {
                    cc.error('------------------加载异常：', err);
                }
                else {
                    resource.assetUrl = url;
                    if (!info) {
                        info = new ResInfo_1.default();
                    }
                    info.resource = resource;
                    info.type = type;
                    info.url = url;
                    // 加载资源的依赖资源uuid
                    var depends = cc.loader.getDependsRecursively(resource);
                    info.depends = depends;
                    // 标记永不释放资源
                    if (persistence) {
                        info.isKeey = true;
                    }
                    else {
                        info.isKeey = false;
                    }
                    _this._resInfoMap.set(url, info);
                }
                if (completeCanllback) {
                    completeCanllback(err, resource);
                }
            });
        }
    };
    var ResManger_1;
    ResManger = ResManger_1 = __decorate([
        ccclass
    ], ResManger);
    return ResManger;
}());
exports.default = ResManger;

cc._RF.pop();