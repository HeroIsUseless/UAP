<template>
  <div class="input-view">
    <div>
      <Button @click="onSelectFileBtnClick">开始执行</Button>
    </div>
    <div v-for="item in filePathsRef">
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button, Input } from 'ant-design-vue';
import { doNextProcess } from '../../Controller';
import { ipcRenderer } from 'electron';
import { ref } from 'vue';
let filePathsRef = ref<string[]>([])
const onSelectFileBtnClick = async () => {
  const filePaths = await openSelectDialog()
  console.log('zws files', filePaths)
  filePathsRef.value = filePaths
  doNextProcess({
    filePaths
  })
}

// 打开选择弹窗
async function openSelectDialog(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    ipcRenderer.send('open-select-dialog', {});
    ipcRenderer.on('open-select-dialog-back', (event, arg) => {
      console.log('zws 9762', arg); // 输出主进程传递的参数
      resolve(arg.filePaths)
    });
  })
}

</script>

<style scoped>
.select-file-dialog {
  width: 100px;
  background-color: lightblue;
}
</style>