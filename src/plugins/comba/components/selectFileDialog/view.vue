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
import { dialog, getCurrentWindow } from '@electron/remote';
const onSelectFileBtnClick = async () => {
  const filePaths = await openSelectDialog()
  console.log('zws 4424', filePaths)
}

// 打开选择小说窗口
 async function openSelectDialog(): Promise<string[]> {
  const openDialogReturnValue = await dialog.showOpenDialog(getCurrentWindow(), {
    title: '选择文件',
    properties: ['openFile', 'multiSelections']
  })
  return openDialogReturnValue.filePaths || []
}

</script>

<style scoped>
.select-file-dialog {
  width: 100px;
  height: 100px;
  background-color: lightblue;
}
</style>