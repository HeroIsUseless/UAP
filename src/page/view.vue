<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import TitleBarView from './components/titleBar/TitleBarView.vue'
import { pageModel } from './model'
import pluginsInit from '../plugins/index'
import { shallowRef, unref } from 'vue'

pluginsInit()
const horizontalLineDivRef = ref<HTMLElement | null>(null)
let deltaY = 0;
const dragging = ref(false)

const onMouseDown = (event: MouseEvent) => {
  dragging.value = true;
  deltaY = event.clientY - pageModel.horizontalLineDivTop;
};

const onMouseMove = (event: MouseEvent) => {
  if (!dragging.value) return;
  if (horizontalLineDivRef.value) {
    pageModel.horizontalLineDivTop = event.clientY - deltaY;
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
        <component :is="unref(pageModel.sideContent)"></component>
      </div>
      <div class="vertical-line"></div>
      <div class="content-main">
        <div class="main-top" :style="{height: pageModel.horizontalLineDivTop + 'px'}">
          <component :is="unref(pageModel.topContent)"></component>
        </div>
        <div class="horizontal-line" ref="horizontalLineDivRef" @mousedown="onMouseDown" :style="{top: pageModel.horizontalLineDivTop + 'px'}"></div>
        <div class="main-bottom">
          <component :is="unref(pageModel.bottomContent)"></component>
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
  width: 1px;
  height: 100%;
  cursor: all-scroll;
  background: lightgray;
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
  height: 1px;
  background: lightgray;
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
