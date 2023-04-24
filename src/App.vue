<script setup lang="ts">
import PageView from './page/PageView.vue'
import TitleBarView from './components/titleBar/TitleBarView.vue'
</script>

<template>
  <div class="app">
    <TitleBarView />
    <PageView />
  </div>
</template>

<style>
.app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
