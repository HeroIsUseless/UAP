import { reactive, shallowRef } from "vue";
import TopView from "./view/TopView.vue";
import SideView from "./view/SideView.vue";
import BottomView from "./view/BottomView.vue";

export default reactive({
  name: 'qrcode',
  view: {
    TopView: shallowRef(TopView),
    SideView: shallowRef(SideView),
    BottomView: shallowRef(BottomView),
  },
  url: '',
  data: {
    urls: [] as string[]
  }
});
