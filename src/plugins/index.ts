import { registerPlugin } from "../page/model"
import homePlugin from "./home/Model"
import qrcodePlugin from "./qrcode/Model"
import timeCovertPlugin from "./timeConvert/Model"
import urlPlugin from "./url/Model"

export default () => {
  registerPlugin(homePlugin);
  registerPlugin(qrcodePlugin);
  registerPlugin(timeCovertPlugin);
  registerPlugin(urlPlugin);
}
