import G from "../../GlobalSet";

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

    private _audioSoundMap: Map<string, number> = new Map<string, number>();
    private _isMuteMusic: boolean = false;
    private _isMuteSound: boolean = false;


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

    init() {
        this._CheckVoice();
    }

    private _CheckVoice() {
        this._isMuteMusic = G.StorageManager.getLocalStorage('isMuteMusic') == 'true' ? true : false;
        this._isMuteSound = G.StorageManager.getLocalStorage('isMuteSound') == 'true' ? true : false;
        this.setMuteMusic(this._isMuteMusic);
        this.setMuteSound(this._isMuteSound);
    }

    private _removeSound(url: string) {
        let id = this._audioSoundMap.get(url);
        this._audioSoundMap.delete(url);
        cc.audioEngine.stopEffect(id);
    }

    private _removeAllSound() {
        this._audioSoundMap.clear();
        cc.audioEngine.stopAllEffects();
    }

    public playMusic(url: string, loop?: boolean): void {
        if (G.StorageManager.getLocalStorage('isMuteMusic') == 'true') {
            return;
        }
        G.ResManger.loadAudioClip(url, (error: Error, audio: cc.AudioClip) => {
            if (audio) {
                cc.audioEngine.playMusic(audio, loop);
            }
        });
    }

    /**
     *播放音效
     *
     * @author allen
     * @date 2020-06-15
     * @param {string} url
     * @param {boolean} [loop]
     * @returns {void}
     * @memberof AudioManager
     */
    public playSound(url: string, loop?: boolean): void {
        if (G.StorageManager.getLocalStorage('isMuteSound') == 'true') {
            return;
        }
        G.ResManger.loadAudioClip(url, (error: Error, audio: cc.AudioClip) => {
            let id = cc.audioEngine.playEffect(audio, loop);
            this._audioSoundMap.set(url, id);
        })
    }

    /**
     *停止音效
     *
     * @author allen
     * @date 2020-06-15
     * @param {string} [url] 传入时停止指定音效否则移除全部
     * @memberof AudioManager
     */
    public stopSound(url?: string) {
        if (url) {
            let id = this._audioSoundMap.get(url);
            cc.audioEngine.stopEffect(id);
            this._removeSound(url);
        } else {
            this._removeAllSound();
        }
    }

    /**
     *设置音乐是否静音
     *
     * @author allen
     * @date 2020-06-15
     * @param {boolean} isMuteMusic
     * @memberof AudioManager
     */
    public setMuteMusic(isMuteMusic: boolean) {
        if (isMuteMusic) {
            cc.audioEngine.pauseMusic();
            G.StorageManager.setLocalStorage('isMuteMusic', true);
            this._isMuteSound = true;
        } else {
            cc.audioEngine.resumeMusic();
            G.StorageManager.setLocalStorage('isMuteMusic', false);
            this._isMuteSound = false;
        }

    }

    /**
     *设置音效是否静音
     *
     * @author allen
     * @date 2020-06-15
     * @param {boolean} isMuteSound
     * @memberof AudioManager
     */
    public setMuteSound(isMuteSound: boolean) {
        if (isMuteSound) {
            cc.audioEngine.pauseAllEffects();
            G.StorageManager.setLocalStorage('isMuteSound', true);
            this._isMuteSound = true;
        } else {
            cc.audioEngine.resumeAllEffects();
            G.StorageManager.setLocalStorage('isMuteSound', false);
            this._isMuteSound = false;
        }
    }

    /**
     *设置音乐音量
     *
     * @author allen
     * @date 2020-06-15
     * @param {number} v
     * @memberof AudioManager
     */
    public setMusicVolume(v: number) {
        let volume = v > 1 ? 1 : v;
        v = volume < 0 ? 0 : v;
        cc.audioEngine.setMusicVolume(v)
        G.StorageManager.setLocalStorage('musicVolume', v);
    }

    /**
     *设置音效音量
     *
     * @author allen
     * @date 2020-06-15
     * @param {number} v
     * @memberof AudioManager
     */
    public setSoundVolume(v: number) {
        let volume = v > 1 ? 1 : v;
        v = volume < 0 ? 0 : v;
        cc.audioEngine.setEffectsVolume(v)
        G.StorageManager.setLocalStorage('soundVolume', v);
    }

    /**
     *获取音乐音量
     *
     * @author allen
     * @date 2020-06-15
     * @returns {number}
     * @memberof AudioManager
     */
    public getMusicVolume(): number {
        return cc.audioEngine.getMusicVolume();
    }

    /**
     *设置音效音量
     *
     * @author allen
     * @date 2020-06-15
     * @returns {number}
     * @memberof AudioManager
     */
    public getSoundVolume(): number {
        return cc.audioEngine.getEffectsVolume();
    }

    /**
     *获取音乐静音状态
     *
     * @author allen
     * @date 2020-06-15
     * @returns {boolean}
     * @memberof AudioManager
     */
    public getMuteMusic(): boolean {
        return this._isMuteMusic;
    }

    /**
     *获取音效静音状态
     *
     * @author allen
     * @date 2020-06-15
     * @returns {boolean}
     * @memberof AudioManager
     */
    public getMuteSound(): boolean {
        return this._isMuteSound;
    }


}
