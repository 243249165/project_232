/**
 *音频管理器
 *
 * @author allen
 * @date 2020-06-08
 * @export
 * @class AudioManager
 */
export default class AudioManager {

    private static _instance: AudioManager;
    /**
     *单例
     *
     * @readonly
     * @static
     * @type {AudioManager}
     * @memberof AudioManager
     */
    public static get Instance(): AudioManager {
        return this._instance ? this._instance : this._instance = new AudioManager();
    }

    

}
