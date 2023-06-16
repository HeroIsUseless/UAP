import { reactive, shallowRef } from "vue";
import TopView from "./view/TopView.vue";
import SideView from "./view/SideView.vue";
import BottomView from "./view/BottomView.vue";

export enum TimeType {
  ms = 'ms',
  s = 's',
  m = 'm',
  h = 'h',
  d = 'd',
  y_m_d = 'y_m_d',
  y_m_d_h_m_s = 'y_m_d_h_m_s',
}

export default reactive({
  name: 'timecovert',
  view: {
    TopView: shallowRef(TopView),
    SideView: shallowRef(SideView),
    BottomView: shallowRef(BottomView),
  },
  data: {
    timestamp: Date.now(),
    outputs: [] as any[]
  }
});
