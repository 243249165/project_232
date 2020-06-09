"use strict";
cc._RF.push(module, '9df655glD5NOJ9ujSQSOVHP', 'AudioManager');
// script/model/public/AudioManager.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 *音频管理器
 *
 * @author allen
 * @date 2020-06-08
 * @export
 * @class AudioManager
 */
var AudioManager = /** @class */ (function () {
    function AudioManager() {
    }
    AudioManager_1 = AudioManager;
    Object.defineProperty(AudioManager, "Instance", {
        /**
         *单例
         *
         * @readonly
         * @static
         * @type {AudioManager}
         * @memberof AudioManager
         */
        get: function () {
            return this._instance ? this._instance : this._instance = new AudioManager_1();
        },
        enumerable: true,
        configurable: true
    });
    var AudioManager_1;
    AudioManager = AudioManager_1 = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}());
exports.default = AudioManager;

cc._RF.pop();