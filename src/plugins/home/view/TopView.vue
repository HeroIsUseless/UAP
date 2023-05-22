<template>
  <div class="top-view">
    <!-- <h1>时间戳转换</h1>
    <div style="width: 300px">
      <Input v-model:value="time">
        <template #addonAfter>
          <Select v-model:value="unit1" style="width: 80px">
            <SelectOption value="ms">ms</SelectOption>
            <SelectOption value="s">s</SelectOption>
            <SelectOption value="年-月-日">年-月-日</SelectOption>
            <SelectOption value="时-分-秒">时-分-秒</SelectOption>
          </Select>
        </template>
      </Input>
    </div>
    <div>转换为：</div>
    <div style="width: 300px">
      <Input v-model:value="time">
        <template #addonAfter>
          <Select v-model:value="unit2" style="width: 80px">
            <SelectOption value="ms">ms</SelectOption>
            <SelectOption value="s">s</SelectOption>
            <SelectOption value="年-月-日">年-月-日</SelectOption>
            <SelectOption value="时-分-秒">时-分-秒</SelectOption>
          </Select>
        </template>
      </Input>
    </div> -->
    <Textarea v-model:value="Model.url" class="text-area" />
  </div>
</template>

<script setup lang="ts">
import {Input, Button, Select, SelectOption, Row, Col, Textarea} from 'ant-design-vue'
import { ref } from 'vue';
import QrcodeVue from 'qrcode.vue'
import Model from '../Model';
const time = ref(0)
const unit1 = ref('ms')
const unit2 = ref('ms')
const textValue = ref('kk')
</script>

<style scoped>
.top-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.text-area {
  flex: 1;
}
</style>