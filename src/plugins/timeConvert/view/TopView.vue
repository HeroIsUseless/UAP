<template>
  <div class="top-view">
    <h1>时间戳转换</h1>
    <div style="width: 300px">
      <Input v-model:value="formatTime">
        <template #addonAfter>
          <Select v-model:value="unit" style="width: 80px">
            <SelectOption value="ms">ms</SelectOption>
            <SelectOption value="s">s</SelectOption>
            <SelectOption value="年-月-日">年-月-日</SelectOption>
            <SelectOption value="时-分-秒">时-分-秒</SelectOption>
          </Select>
        </template>
      </Input>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Input, Button, Select, SelectOption, Row, Col, Textarea} from 'ant-design-vue'
import { computed, ref } from 'vue';
import model, {TimeType} from '../Model'

const unit = ref(TimeType.ms)
const formatTime = computed(()=>Math.floor(model.data.timestamp))
</script>

<style scoped>
.top-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
.text-area {
  flex: 1;
}
</style>