
export default class LogUtils {

    public  error() {
        CC_DEBUG && cc.error.apply(cc, arguments);
    }

    public  warn() {
        CC_DEBUG && cc.warn.apply(cc, arguments);
    }

    public  log() {
        CC_DEBUG && cc.log.apply(cc, arguments);
    }

}
