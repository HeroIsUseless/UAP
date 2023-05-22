<template>
  <div class="top-view">
    <h1>时间戳转换</h1>
    <div>
    <Input />
    </div>
    <p>转换为：</p>
    <div>
    <Input></Input>
    </div>
    <div>
    <Button>开始转换</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Input, Button} from 'ant-design-vue'
</script>

<style scoped>
.top-view {
  width: 100%;
  height: 100%;
}
</style>