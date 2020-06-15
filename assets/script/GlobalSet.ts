import ResManger from "./model/public/ResManger";
import LogUtils from "./utils/LogUtils";
import StorageManager from "./storage/StorageManager";

export default class G {

    public static get LogUtils(): any {
        return LogUtils;
    }

    public static get ResManger(): ResManger {
        return ResManger.Instance;
    }

    public static get StorageManager(): StorageManager {
        return StorageManager.Instance;
    }

}
