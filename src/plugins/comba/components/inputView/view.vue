<template>
  <div class="input-view">
    <div>
      <Button @click="onOkBtnClick">开始执行</Button>
    </div>
    <div>
      <Input v-bind:value="value" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button, Input } from 'ant-design-vue';
import { doNextProcess } from '../../Controller';
import { ipcRenderer } from 'electron';
import { ref } from 'vue';
let value = ref<string>('')
const onOkBtnClick = async () => {
  doNextProcess({
    value: value.value
  })
}

</script>

<style scoped>
.select-file-dialog {
  width: 100px;
  background-color: lightblue;
}
</style>