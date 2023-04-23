<script setup lang="ts">

</script>

<template>
  <div class="page-view">
    <div class="page-side"></div>
    <div class="page-main"></div>
    <div class="main-top"></div>
    <div calss="main-bottom"></div>
  </div>
</template>

<style>
.page-view {
  width: 100vw;
  height: 100vh;
  display: flex;
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
