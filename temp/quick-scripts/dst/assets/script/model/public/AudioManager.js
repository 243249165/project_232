
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/model/public/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbW9kZWwvcHVibGljL0F1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFFNUM7Ozs7Ozs7R0FPRztBQUVIO0lBQUE7SUFpQkEsQ0FBQztxQkFqQm9CLFlBQVk7SUFXN0Isc0JBQWtCLHdCQUFRO1FBUjFCOzs7Ozs7O1dBT0c7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGNBQVksRUFBRSxDQUFDO1FBQ2pGLENBQUM7OztPQUFBOztJQWJnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBaUJoQztJQUFELG1CQUFDO0NBakJELEFBaUJDLElBQUE7a0JBakJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8qKlxuICrpn7PpopHnrqHnkIblmahcbiAqXG4gKiBAYXV0aG9yIGFsbGVuXG4gKiBAZGF0ZSAyMDIwLTA2LTA4XG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQXVkaW9NYW5hZ2VyXG4gKi9cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb01hbmFnZXIge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBBdWRpb01hbmFnZXI7XG4gICAgLyoqXG4gICAgICrljZXkvotcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAdHlwZSB7QXVkaW9NYW5hZ2VyfVxuICAgICAqIEBtZW1iZXJvZiBBdWRpb01hbmFnZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldCBJbnN0YW5jZSgpOiBBdWRpb01hbmFnZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UgPyB0aGlzLl9pbnN0YW5jZSA6IHRoaXMuX2luc3RhbmNlID0gbmV3IEF1ZGlvTWFuYWdlcigpO1xuICAgIH1cblxuICAgIFxuXG59XG4iXX0=