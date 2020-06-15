const DAY = 24;
const MINUTES = 60;
const SECONDS = 60;
const TIME_OF_AREA = 8 * MINUTES * SECONDS;
const TIME_OF_DAY = DAY * MINUTES * SECONDS;
const TIME_OF_HOUR = MINUTES * SECONDS;


export default class TimeUtils {

    public static isToDay(time: number): boolean {
        let ret = false;
        let day = this.getDay(time);
        let today = this.getDay(this.getCurrentTime())
        if (day == today) {
            ret = true;
        }
        return ret;
    }

    /**
     *获取天数
     *
     * @author allen
     * @date 2020-06-15
     * @param {number} time
     * @returns {number}
     * @memberof TimeUtils
     */
    public static getDay(time: number): number {
        return Math.floor((time + TIME_OF_AREA) / TIME_OF_DAY)
    }

    public static getCurrentTime(): number {
        return cc.sys.now();
    }
}