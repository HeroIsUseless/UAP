import { reactive } from "vue";
import TopView from "./view/TopView.vue";
import SideView from "./view/SideView.vue";
import BottomView from "./view/BottomView.vue";
import { SmileOutlined } from '@ant-design/icons-vue';

export const demoModel = reactive({
  id: '294737394ssddskw9w9',
  icon: SmileOutlined,
  name: 'demo',
  view: {
    TopView,
    SideView,
    BottomView,
  },
  data: {

  }
});
