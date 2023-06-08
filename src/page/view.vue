<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import TitleBarView from './components/titleBar/TitleBarView.vue'
import { pageModel } from './model'
import pluginsInit from '../plugins/index'
import { shallowRef } from 'vue'

pluginsInit()
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
    <TitleBarView />
    <div class="page-content">
      <div class="content-side">
        <component :is="pageModel.sideContent"></component>
      </div>
      <div class="vertical-line"></div>
      <div class="content-main">
        <div class="main-top" :style="{height: horizontalLineDivTop + 'px'}">
          <component :is="pageModel.topContent"></component>
        </div>
        <div class="horizontal-line" ref="horizontalLineDivRef" @mousedown="onMouseDown" :style="{top: horizontalLineDivTop + 'px'}"></div>
        <div class="main-bottom">
          <component :is="pageModel.bottomContent"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 800 * 600 */
.page-view {
  width: 100vw;
  height: 100vh;
  /* background-color: lightseagreen; */
  position: relative;
}
.page-content {
  width: 100vw;
  height: calc(100vh - 32px);
  display: flex;
}
.content-side {
  width: 20vw;
  height: 100%;
  /* background: lightblue; */
}
.vertical-line {
  width: 2px;
  height: 100%;
  cursor: all-scroll;
  /* background: lightgreen; */
}
.content-main {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.main-top {
  width: 100%;
  /* background: lightgoldenrodyellow; */
}
.horizontal-line {
  width: 100%;
  height: 2px;
  /* background: lightpink; */
  cursor: all-scroll;
  position: absolute;
}
.main-bottom {
  width: 100%;
  padding-top: 2px;
  flex: 1;
  /* background: lightcoral; */
}
</style>
