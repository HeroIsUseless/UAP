import { reactive, shallowRef } from "vue";
import TopView from "./view/TopView.vue";
import SideView from "./view/SideView.vue";
import BottomView from "./view/BottomView.vue";
import { HomeOutlined, QrcodeOutlined, ClockCircleOutlined, LinkOutlined } from '@ant-design/icons-vue';
export default reactive({
  icon: LinkOutlined,
  name: 'url',
  view: {
    TopView: shallowRef(TopView),
    SideView: shallowRef(SideView),
    BottomView: shallowRef(BottomView),
  },
  url: '',
});
