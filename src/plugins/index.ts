import { registerPlugin } from "../page/model"
import homePlugin from "./home/Model"
import qrcodePlugin from "./qrcode/Model"
import timeCovertPlugin from "./timeConvert/Model"
import urlPlugin from "./url/Model"
import combaPlugin from "./comba/Model"

export default () => {
  registerPlugin(homePlugin);
  registerPlugin(timeCovertPlugin);
  registerPlugin(qrcodePlugin);
  registerPlugin(urlPlugin);
  registerPlugin(combaPlugin);
}
