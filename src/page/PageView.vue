<script setup lang="ts">
import { reactive } from 'vue'
const pageModel = reactive({
  sideContent: null,
  topContent: null,
  bottomContent: null,
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
      <div class="horizontal-line"></div>
      <div class="main-bottom">
        <component :is="pageModel.bottomContent"></component>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-view {
  width: 100vw;
  flex: 1;
  display: flex;
  background-color: #f0f0f0;
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
}
.main-top {
  width: 100%;
  height: 20vh;
  background: pink;
}
.horizontal-line {
  width: 100%;
  height: 2px;
  background: red;
}
.main-bottom {
  width: 100%;
  flex: 1;
  background: purple;
}
</style>
