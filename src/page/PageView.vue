<script setup lang="ts">

</script>

<template>
  <div class="page-view">
    <div class="page-side">
      <slot name="sidecontent"></slot>
    </div>
    <div class="vertical-line"></div>
    <div class="page-main">
      <div class="main-top">
        <slot name="topcontent"></slot>
      </div>
      <div class="horizontal-line"></div>
      <div calss="main-bottom">
        <slot name="bottomcontent"></slot>
      </div>
    </div>
  </div>
</template>

<style>
.page-view {
  width: 100vw;
  flex: 1;
  display: flex;
  background-color: #f0f0f0;
}
.page-side {
  width: 20vw;
  height: 100vh;
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
}
.main-bottom {
  width: 100%;
  flex: 1;
}
</style>
