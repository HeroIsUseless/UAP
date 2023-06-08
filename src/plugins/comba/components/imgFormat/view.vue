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
// import { dialog } from 'electron';

// const props = defineProps<{ data: any; }>();
// 不应该从这里来
// doNextProcess后，找到下一个组件，然后执行下一个组件的函数
// 另外，由于是有多个，它只能是一个view
// 看来需要调用ref数组了，然后执行什么东西
// 可以右上角一个执行按钮，但是除非有缓存
const doProcess = (data: any) => {
  // TODO: 
  doNextProcess(data)
}

const onSelectFileBtnClick = async () => {
  const filePaths = await openSelectDialog()
  // console.log('zws 4424', filePaths)
  doNextProcess({
    filePaths
  })
}

// 打开选择小说窗口
 async function openSelectDialog(): Promise<string[]> {
  // console.log(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }))
  // const openDialogReturnValue = await dialog.showOpenDialog(getCurrentWindow(), {
  //   title: '选择文件',
  //   properties: ['openFile', 'multiSelections']
  // })
  // return openDialogReturnValue.filePaths || []
  return []
}

</script>

<style scoped>
.select-file-dialog {
  width: 100px;
  height: 100px;
  background-color: lightblue;
}
</style>