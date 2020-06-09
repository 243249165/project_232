
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/model/public/ResManger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbW9kZWwvcHVibGljL1Jlc01hbmdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUNyRCwrQ0FBMEM7QUFHcEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQURBO1FBS1ksZ0JBQVcsR0FBeUIsSUFBSSxHQUFHLEVBQW1CLENBQUMsQ0FBQSxZQUFZO1FBQzNFLGdCQUFXLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDLENBQUEsU0FBUztJQXNGbEYsQ0FBQztrQkEzRm9CLFNBQVM7SUFlMUIsc0JBQWtCLHFCQUFRO1FBUjFCOzs7Ozs7O1dBT0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFdBQVMsRUFBRSxDQUFDO1FBQzlFLENBQUM7OztPQUFBO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDSyw0QkFBUSxHQUFoQixVQUFpQixHQUFXLEVBQUUsSUFBc0IsRUFBRSxpQkFBdUQsRUFBRSxXQUFxQjtRQUFwSSxpQkEwREM7UUF6REcsT0FBTztRQUNQLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDTixpQkFBTyxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxJQUFJLEdBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxXQUFXO1FBQ1gsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUNoRCxJQUFJLGlCQUFpQixFQUFFO2dCQUNuQixpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQ3pDO1NBQ0o7YUFBTTtZQUNILElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDN0IsV0FBVztZQUNYLEtBQUssSUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDdEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO3dCQUNsQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ2hDO2lCQUNKO2FBQ0o7WUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztZQUNsQyxTQUFTO1lBQ1QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFDLEdBQVUsRUFBRSxRQUFhO2dCQUNuRCxTQUFTO2dCQUNULE9BQU8sS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsT0FBTztnQkFDUCxJQUFJLEdBQUcsRUFBRTtvQkFDTCxFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUM1QztxQkFBTTtvQkFDSCxRQUFRLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLElBQUksRUFBRTt3QkFDUCxJQUFJLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7cUJBQ3hCO29CQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO29CQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBRWYsZ0JBQWdCO29CQUNoQixJQUFJLE9BQU8sR0FBVSxFQUFFLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUMvRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztvQkFFdkIsV0FBVztvQkFDWCxJQUFJLFdBQVcsRUFBRTt3QkFDYixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztxQkFDdEI7eUJBQU07d0JBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7cUJBQ3ZCO29CQUNELEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDbkM7Z0JBRUQsSUFBSSxpQkFBaUIsRUFBRTtvQkFDbkIsaUJBQWlCLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFBO2lCQUNuQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDOztJQXpGZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTJGN0I7SUFBRCxnQkFBQztDQTNGRCxBQTJGQyxJQUFBO2tCQTNGb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXNJbmZvIGZyb20gXCIuLi8uLi9zdHJ1Y3R1cmUvcHVibGljL1Jlc0luZm9cIjtcbmltcG9ydCBMb2dVdGlsIGZyb20gXCIuLi8uLi91dGlscy9Mb2dVdGlsXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc01hbmdlciB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFJlc01hbmdlcjtcblxuICAgIHByaXZhdGUgX3Jlc0luZm9NYXA6IE1hcDxzdHJpbmcsIFJlc0luZm8+ID0gbmV3IE1hcDxzdHJpbmcsIFJlc0luZm8+KCk7Ly8g5Yqo5oCB5Yqg6L296LWE5rqQTWFwXG4gICAgcHJpdmF0ZSBfbG9hZGluZ1JlczogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7Ly8g5q2j5Zyo5Yqg6L296LWE5rqQXG5cbiAgICAvKipcbiAgICAgKiDljZXkvotcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAdHlwZSB7UmVzTWFuZ2VyfVxuICAgICAqIEBtZW1iZXJvZiBSZXNNYW5nZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpOiBSZXNNYW5nZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgPyB0aGlzLl9pbnN0YW5jZSA6IHRoaXMuX2luc3RhbmNlID0gbmV3IFJlc01hbmdlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKoOi9vei1hOa6kFxuICAgICAqXG4gICAgICogQGF1dGhvciBhbGxlblxuICAgICAqIEBkYXRlIDIwMjAtMDYtMDhcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwg6LWE5rqQ6Lev5b6EXG4gICAgICogQHBhcmFtIHt0eXBlb2YgY2MuQXNzZXR9IFt0eXBlXSDotYTmupDnsbvlnotcbiAgICAgKiBAcGFyYW0geyhlcnI6IEVycm9yLCByZXNvdXJjZTogYW55KSA9PiB2b2lkfSBbY29tcGxldGVDYW5sbGJhY2tdIOWKoOi9veWbnuiwg1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3BlcnNpc3RlbmNlXSDmmK/lkKbmoIforrDkuLrkuI3ph4rmlL7otYTmupBcbiAgICAgKiBAbWVtYmVyb2YgUmVzTWFuZ2VyXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbG9hZFJlcyh1cmw6IHN0cmluZywgdHlwZT86IHR5cGVvZiBjYy5Bc3NldCwgY29tcGxldGVDYW5sbGJhY2s/OiAoZXJyOiBFcnJvciwgcmVzb3VyY2U6IGFueSkgPT4gdm9pZCwgcGVyc2lzdGVuY2U/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIC8vIOi3r+W+hOWIpOepulxuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgTG9nVXRpbC5lcnJvcignLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5Yqg6L296Lev5b6E5Li656m6Jyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGluZm86IFJlc0luZm8gPSB0aGlzLl9yZXNJbmZvTWFwW3VybF07XG4gICAgICAgIC8vIOS7jue8k+WtmOS4reiOt+WPlui1hOa6kFxuICAgICAgICBpZiAoaW5mbyAmJiBpbmZvLnJlc291cmNlICYmIGluZm8ucmVzb3VyY2UuaXNWYWxpZCkge1xuICAgICAgICAgICAgaWYgKGNvbXBsZXRlQ2FubGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY29tcGxldGVDYW5sbGJhY2sobnVsbCwgaW5mby5yZXNvdXJjZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzdGFydFRpbWUgPSBjYy5zeXMubm93KCk7XG4gICAgICAgICAgICAvLyDnp7vpmaTliqDovb3ov4fplb/otYTmupBcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX2xvYWRpbmdSZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbG9hZGluZ1Jlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWUgPSB0aGlzLl9sb2FkaW5nUmVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMubm93KCkgLSB0aW1lID49IDEwMDAgKiAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2xvYWRpbmdSZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fbG9hZGluZ1Jlc1t1cmxdID0gc3RhcnRUaW1lO1xuICAgICAgICAgICAgLy8g5Yqo5oCB5Yqg6L296LWE5rqQXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh1cmwsIHR5cGUsIChlcnI6IEVycm9yLCByZXNvdXJjZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g56e76Zmk5Yqg6L296K6w5b2VXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2xvYWRpbmdSZXNbdXJsXTtcbiAgICAgICAgICAgICAgICAvLyDliqDovb3lpLHotKVcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKCctLS0tLS0tLS0tLS0tLS0tLS3liqDovb3lvILluLjvvJonLCBlcnIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlLmFzc2V0VXJsID0gdXJsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm8gPSBuZXcgUmVzSW5mbygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZm8ucmVzb3VyY2UgPSByZXNvdXJjZTtcbiAgICAgICAgICAgICAgICAgICAgaW5mby50eXBlID0gdHlwZTtcbiAgICAgICAgICAgICAgICAgICAgaW5mby51cmwgPSB1cmw7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g5Yqg6L296LWE5rqQ55qE5L6d6LWW6LWE5rqQdXVpZFxuICAgICAgICAgICAgICAgICAgICBsZXQgZGVwZW5kczogYW55W10gPSBjYy5sb2FkZXIuZ2V0RGVwZW5kc1JlY3Vyc2l2ZWx5KHJlc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgaW5mby5kZXBlbmRzID0gZGVwZW5kcztcblxuICAgICAgICAgICAgICAgICAgICAvLyDmoIforrDmsLjkuI3ph4rmlL7otYTmupBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlcnNpc3RlbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvLmlzS2VleSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvLmlzS2VleSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jlc0luZm9NYXAuc2V0KHVybCwgaW5mbyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlQ2FubGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlQ2FubGxiYWNrKGVyciwgcmVzb3VyY2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==