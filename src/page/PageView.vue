<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import homeModel from '../plugins/home/Model'
const pageModel = reactive({
  sideContent: homeModel.view.SideView,
  topContent: homeModel.view.TopView,
  bottomContent: homeModel.view.BottomView,
})

const horizontalLineDivRef = ref<HTMLElement | null>(null)
const horizontalLineDivTop = ref(200)
let deltaY = 0;
const dragging = ref(false)

const onMouseDown = (event: MouseEvent) => {
  dragging.value = true;
  deltaY = event.clientY - horizontalLineDivTop.value;
};

const onMouseMove = (event: MouseEvent) => {
  if (!dragging.value) return;
  if (horizontalLineDivRef.value) {
    horizontalLineDivTop.value = event.clientY - deltaY;
  }
};

const onMouseUp = () => {
  dragging.value = false;
};

onMounted(() => {
    // 监听鼠标事件
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
})

onBeforeUnmount(() => {
  // 移除鼠标事件监听
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mouseup', onMouseUp);
})

</script>

<template>
  <div class="page-view">
    <div class="page-side">
      <component :is="pageModel.sideContent"></component>
    </div>
    <div class="vertical-line"></div>
    <div class="page-main">
      <div class="main-top">
        <component :is="pageModel.topContent"></component>
      </div>
      <div class="horizontal-line" ref="horizontalLineDivRef" @mousedown="onMouseDown" :style="{top: horizontalLineDivTop + 'px'}"></div>
      <div class="main-bottom">
        <component :is="pageModel.bottomContent"></component>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 800 * 600 */
.page-view {
  width: 100vw;
  flex: 1;
  display: flex;
  background-color: #f0f0f0;
  position: relative;
}
.page-side {
  width: 20vw;
  height: 100vh;
  background: lightblue;
}
.vertical-line {
  width: 2px;
  height: 100%;
  background: green;
}
.page-main {
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}
.main-top {
  width: 100%;
  height: 60vh;
  background: pink;
}
.horizontal-line {
  width: 100%;
  height: 2px;
  background: red;
  cursor: all-scroll;
  position: absolute;
}
.main-bottom {
  width: 100%;
  flex: 1;
  background: purple;
}
</style>
