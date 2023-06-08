import { reactive } from "vue"
import homePlugin from "../plugins/home/Model"
import qrcodePlugin from "../plugins/qrcode/Model"
import timeCovertPlugin from "../plugins/timeConvert/Model"
import urlPlugin from "../plugins/url/Model"

// [
//   [homePlugin.name, homePlugin],
//   [qrcodePlugin.name, qrcodePlugin],
//   [timeCovertPlugin.name, timeCovertPlugin],
//   [urlPlugin.name, urlPlugin],
// ]

export const pageModel = reactive({
  plugins: new Map(),
  sideContent: homePlugin.view.SideView,
  topContent: homePlugin.view.TopView,
  bottomContent: homePlugin.view.BottomView,
})

export const setNowPlugin = (pluginName: string) => {
  const nowPlugin = pageModel.plugins.get(pluginName);
  if (nowPlugin) {
    pageModel.sideContent = nowPlugin.view.SideView
    pageModel.topContent = nowPlugin.view.TopView
    pageModel.bottomContent = nowPlugin.view.BottomView
  }
}

export function registerPlugin(plugin: any) {
  pageModel.plugins.set(plugin.name, plugin)
}
