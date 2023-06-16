<template>
  <div class="top-view">
    <h1>时间戳转换</h1>
    <div class="content">
      <div>
        <Input v-model:value="formatTime" placeholder="请在这里输入时间">
        </Input>
      </div>
      <div class="margin-top-6px">
        <Select v-model:value="unit" style="width: 80px">
          <SelectOption value="ms">ms</SelectOption>
          <SelectOption value="s">s</SelectOption>
          <SelectOption value="年-月-日">年-月-日</SelectOption>
          <SelectOption value="时-分-秒">时-分-秒</SelectOption>
        </Select>
        <span>&nbsp;转换为：</span>
        <Select v-model:value="unit" style="width: 80px">
          <SelectOption value="ms">ms</SelectOption>
          <SelectOption value="s">s</SelectOption>
          <SelectOption value="年-月-日">年-月-日</SelectOption>
          <SelectOption value="时-分-秒">时-分-秒</SelectOption>
        </Select>
      </div>
      <div class="margin-top-6px">
        <Button type="primary" @click="onConverBtnClick">开始转换</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Input, Button, Select, SelectOption, Row, Col, Textarea} from 'ant-design-vue'
import { computed, ref } from 'vue';
import model, {TimeType} from '../Model'

const unit = ref(TimeType.ms)
const formatTime = ref(Date.now())
const onConverBtnClick = () => {
  console.log('zws 4423', filterTime(formatTime.value))
  model.data.outputs.push(filterTime(formatTime.value))
}

function filterTime(time: any) {
  const date = new Date(time)
  const Y = date.getFullYear()
  const M = date.getMonth() + 1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1 
  const D = date.getDate()
  return `${Y}-${M}-${D}`
}
</script>

<style scoped>
.top-view {
  width: 100%;
  height: 100%;
  padding: 12px;
}
.content {
  
}
.margin-top-6px {
  margin-top: 6px;
}
</style>