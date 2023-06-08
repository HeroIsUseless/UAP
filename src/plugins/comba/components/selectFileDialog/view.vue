<template>
  <div class="select-file-dialog">
    <div>
      <Button @click="onSelectFileBtnClick">选择文件</Button>
    </div>
    <div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-vue';

const onSelectFileBtnClick = () => {
  
}
</script>

<style scoped>
.top-view {
  width: 100%;
  height: 100%;
}
</style>