import LogUtil from "./utils/LogUtil";

const { ccclass } = cc._decorator;

@ccclass
export default class G {

    public static get LogUtil(): any {
        return LogUtil;
    }

}
