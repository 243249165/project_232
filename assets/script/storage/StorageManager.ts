import TimeUtils from "../utils/TimeUtils";

export default class StorageManager {

    private static _instance: StorageManager;
    private _localStorage;
    private _toDayStorageArray = new Array();

    public static get Instance(): StorageManager {
        return this._instance ? this._instance : this._instance = new StorageManager();
    }

    public init() {
        this._localStorage = cc.sys.localStorage();
        this._toDayStorageArray = JSON.parse(this._localStorage.getItem('todayStorage'));
        this.cleanToDay();
    }

    /**
     *清除当天数据
     *
     * @author allen
     * @date 2020-06-15
     * @private
     * @memberof StorageManager
     */
    private cleanToDay() {
        let time = cc.sys.now();
        if (!TimeUtils.isToDay(time)) {
            this._toDayStorageArray.forEach((key) => {
                this.removeLocalStorage(key);
            });
        }
    }


    /**
     *存储本地数据
     *
     * @author allen
     * @date 2020-06-15
     * @param {string} key
     * @param {*} vaule
     * @param {boolean} [isToday]
     * @memberof StorageManager
     */
    public setLocalStorage(key: string, vaule: any, isToday?: boolean): void {
        if (isToday) {
            let arr = this._toDayStorageArray.push(key);
            this._localStorage.setItem(key, vaule);

        }
        this._localStorage.setItem(key, vaule);
    }

    /**
     *获取本地数据
     *
     * @author allen
     * @date 2020-06-15
     * @param {string} key
     * @returns {string}
     * @memberof StorageManager
     */
    public getLocalStorage(key: string): any {
        return this._localStorage.getItem(key);
    }

    /**
     *移除指定key本地数据
     *
     * @author allen
     * @date 2020-06-15
     * @param {string} key
     * @memberof StorageManager
     */
    public removeLocalStorage(key: string): void {
        this._localStorage.removeItem(key)
    }
}