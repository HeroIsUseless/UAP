import { reactive, shallowRef } from "vue";
import TopView from "./view/TopView.vue";
import SideView from "./view/SideView.vue";
import BottomView from "./view/BottomView.vue";
import { SmileOutlined } from '@ant-design/icons-vue';

export default reactive({
  id: '2947462842w9w9',
  icon: SmileOutlined,
  name: 'demo',
  intro: '抓包工具',
  view: {
    TopView: shallowRef(TopView),
    SideView: shallowRef(SideView),
    BottomView: shallowRef(BottomView),
  },
  data: {

  }
});
