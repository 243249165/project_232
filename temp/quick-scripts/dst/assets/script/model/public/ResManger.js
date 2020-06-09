
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ResManger = /** @class */ (function () {
    function ResManger() {
        this._resInfoMap = new Map();
        this._persistenceMap = new Map();
    }
    ResManger_1 = ResManger;
    Object.defineProperty(ResManger, "Instance", {
        // private _persistenceMap:Map
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
        if (!url) {
            cc.error('------------------------加载路径为空');
        }
        cc.loader.loadRes(url, type, function (err, resource) {
            if (err) {
                cc.error('------------------加载异常：', err);
                return;
            }
            var info;
            if (_this._resInfoMap[url]) {
                info = _this._resInfoMap[url];
            }
            else {
                info = new ResInfo_1.default();
                info.resource = resource;
                info.type = type;
                info.url = url;
            }
            if (persistence) {
                _this._persistenceMap.set(url, info);
            }
            if (completeCanllback) {
                completeCanllback(err, resource);
            }
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbW9kZWwvcHVibGljL1Jlc01hbmdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUcvQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBREE7UUFJWSxnQkFBVyxHQUF5QixJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUMvRCxvQkFBZSxHQUF5QixJQUFJLEdBQUcsRUFBbUIsQ0FBQztJQTJEL0UsQ0FBQztrQkEvRG9CLFNBQVM7SUFjMUIsc0JBQWtCLHFCQUFRO1FBVDFCLDhCQUE4QjtRQUM5Qjs7Ozs7OztXQU9HO2FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxXQUFTLEVBQUUsQ0FBQztRQUM5RSxDQUFDOzs7T0FBQTtJQUVEOzs7Ozs7Ozs7OztPQVdHO0lBQ0ssNEJBQVEsR0FBaEIsVUFBaUIsR0FBVyxFQUFFLElBQXNCLEVBQUUsaUJBQXVELEVBQUUsV0FBcUI7UUFBcEksaUJBZ0NDO1FBL0JHLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDTixFQUFFLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7U0FDOUM7UUFDRCxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQUMsR0FBVSxFQUFFLFFBQWE7WUFDbkQsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsRUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDekMsT0FBTzthQUNWO1lBQ0QsSUFBSSxJQUFhLENBQUE7WUFDakIsSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixJQUFJLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNoQztpQkFBTTtnQkFDSCxJQUFJLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2dCQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7YUFFbEI7WUFFRCxJQUFJLFdBQVcsRUFBRTtnQkFDYixLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDdkM7WUFFRCxJQUFJLGlCQUFpQixFQUFFO2dCQUNuQixpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUE7YUFDbkM7UUFLTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7O0lBOURnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBK0Q3QjtJQUFELGdCQUFDO0NBL0RELEFBK0RDLElBQUE7a0JBL0RvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc0luZm8gZnJvbSBcIi4uLy4uL3N0cnVjdHVyZS9wdWJsaWMvUmVzSW5mb1wiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNNYW5nZXIge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBSZXNNYW5nZXI7XG4gICAgcHJpdmF0ZSBfcmVzSW5mb01hcDogTWFwPHN0cmluZywgUmVzSW5mbz4gPSBuZXcgTWFwPHN0cmluZywgUmVzSW5mbz4oKTtcbiAgICBwcml2YXRlIF9wZXJzaXN0ZW5jZU1hcDogTWFwPHN0cmluZywgUmVzSW5mbz4gPSBuZXcgTWFwPHN0cmluZywgUmVzSW5mbz4oKTtcbiAgICAvLyBwcml2YXRlIF9wZXJzaXN0ZW5jZU1hcDpNYXBcbiAgICAvKipcbiAgICAgKiDljZXkvotcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAdHlwZSB7UmVzTWFuZ2VyfVxuICAgICAqIEBtZW1iZXJvZiBSZXNNYW5nZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpOiBSZXNNYW5nZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgPyB0aGlzLl9pbnN0YW5jZSA6IHRoaXMuX2luc3RhbmNlID0gbmV3IFJlc01hbmdlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKoOi9vei1hOa6kFxuICAgICAqXG4gICAgICogQGF1dGhvciBhbGxlblxuICAgICAqIEBkYXRlIDIwMjAtMDYtMDhcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwg6LWE5rqQ6Lev5b6EXG4gICAgICogQHBhcmFtIHt0eXBlb2YgY2MuQXNzZXR9IFt0eXBlXSDotYTmupDnsbvlnotcbiAgICAgKiBAcGFyYW0geyhlcnI6IEVycm9yLCByZXNvdXJjZTogYW55KSA9PiB2b2lkfSBbY29tcGxldGVDYW5sbGJhY2tdIOWKoOi9veWbnuiwg1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3BlcnNpc3RlbmNlXSDmmK/lkKbmoIforrDkuLrkuI3ph4rmlL7otYTmupBcbiAgICAgKiBAbWVtYmVyb2YgUmVzTWFuZ2VyXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbG9hZFJlcyh1cmw6IHN0cmluZywgdHlwZT86IHR5cGVvZiBjYy5Bc3NldCwgY29tcGxldGVDYW5sbGJhY2s/OiAoZXJyOiBFcnJvciwgcmVzb3VyY2U6IGFueSkgPT4gdm9pZCwgcGVyc2lzdGVuY2U/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICBjYy5lcnJvcignLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5Yqg6L296Lev5b6E5Li656m6Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModXJsLCB0eXBlLCAoZXJyOiBFcnJvciwgcmVzb3VyY2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKCctLS0tLS0tLS0tLS0tLS0tLS3liqDovb3lvILluLjvvJonLCBlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpbmZvOiBSZXNJbmZvXG4gICAgICAgICAgICBpZiAodGhpcy5fcmVzSW5mb01hcFt1cmxdKSB7XG4gICAgICAgICAgICAgICAgaW5mbyA9IHRoaXMuX3Jlc0luZm9NYXBbdXJsXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5mbyA9IG5ldyBSZXNJbmZvKCk7XG4gICAgICAgICAgICAgICAgaW5mby5yZXNvdXJjZSA9IHJlc291cmNlO1xuICAgICAgICAgICAgICAgIGluZm8udHlwZSA9IHR5cGU7XG4gICAgICAgICAgICAgICAgaW5mby51cmwgPSB1cmw7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBlcnNpc3RlbmNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGVyc2lzdGVuY2VNYXAuc2V0KHVybCwgaW5mbyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb21wbGV0ZUNhbmxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlQ2FubGxiYWNrKGVyciwgcmVzb3VyY2UpXG4gICAgICAgICAgICB9XG5cblxuXG5cbiAgICAgICAgfSlcbiAgICB9XG59XG4iXX0=