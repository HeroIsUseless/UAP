import { reactive } from "vue"
import homePlugin from "../plugins/home/Model"
import qrcodePlugin from "../plugins/qrcode/Model"
import timeCovertPlugin from "../plugins/timeConvert/Model"
import urlPlugin from "../plugins/url/Model"
import { shallowRef } from "vue"

// [
//   [homePlugin.name, homePlugin],
//   [qrcodePlugin.name, qrcodePlugin],
//   [timeCovertPlugin.name, timeCovertPlugin],
//   [urlPlugin.name, urlPlugin],
// ]

export const pageModel = reactive({
  plugins: new Map(),
  sideContent: shallowRef(homePlugin.view.SideView),
  topContent: shallowRef(homePlugin.view.TopView),
  bottomContent: shallowRef(homePlugin.view.BottomView),
  horizontalLineDivTop: 200,
})

export const setNowPlugin = (pluginName: string) => {
  const nowPlugin = pageModel.plugins.get(pluginName);
  if (nowPlugin) {
    pageModel.sideContent = shallowRef(nowPlugin.view.SideView)
    pageModel.topContent = shallowRef(nowPlugin.view.TopView)
    pageModel.bottomContent = shallowRef(nowPlugin.view.BottomView)
  }
}

export function registerPlugin(plugin: any) {
  pageModel.plugins.set(plugin.name, plugin)
}
