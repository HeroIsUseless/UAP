import { reactive } from "vue";
import TopView from "./view/TopView.vue";
import SideView from "./view/SideView.vue";
import BottomView from "./view/BottomView.vue";

export default reactive({
  view: {
    TopView,
    SideView,
    BottomView,
  },
  url: 'll',
});
