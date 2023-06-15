<template>
  <div class="top-view">
      <component v-for="item in components" :is="item" />
    <SelectFileDialog />
    <!-- ...
    ... -->
  </div>
</template>

<script setup lang="ts">
import SelectFileDialog from '../components/selectFileDialog/view.vue'
const components = [
SelectFileDialog
]
defineExpose({
  // message,
  // onChange
});
</script>

<style scoped>
.top-view {
  width: 100%;
  height: 100%;
  display: flex;
}
.component {
  border: 1px solid lightcoral;
}
</style>