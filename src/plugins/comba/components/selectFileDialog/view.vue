<template>
  <div class="select-file-dialog">
    <div>
      34234
      <Button @click="onSelectFileBtnClick">选择文件</Button>
    </div>
    <div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-vue';
import { doNextProcess } from '../../Controller';
import { ipcRenderer } from 'electron';
// import { dialog } from 'electron';
const onSelectFileBtnClick = async () => {
  const filePaths = await openSelectDialog()
  if (filePaths.length) {
    for(const filePath of filePaths) {
        console.log('zws file')
    }
  }
  // console.log('zws 4424', filePaths)
  // doNextProcess({
  //   filePaths
  // })
}

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
  height: 100px;
  background-color: lightblue;
}
</style>