import { reactive } from "vue";
import TopView from "./view/TopView.vue";
import SideView from "./view/SideView.vue";
import BottomView from "./view/BottomView.vue";
import { SmileOutlined } from '@ant-design/icons-vue';

export default reactive({
  id: '356643dskw9w45459',
  icon: SmileOutlined,
  name: 'comba',
  intro: '组件化可拖拽定制插件',
  view: {
    TopView,
    SideView,
    BottomView,
  },
  data: {

  }
});
