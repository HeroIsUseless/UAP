<script setup lang="ts">
import { computed, ref } from "vue";
import model, { TimeType } from "../Model";
import {
  Input,
  Button,
  Select,
  SelectOption,
  Row,
  Col,
  Textarea,
} from "ant-design-vue";

const unit = ref(TimeType.s);
const formatTime = computed(() => Math.floor(model.data.timestamp / 1000));
</script>
<template>
  <div class="bottom-view">
    <div>转换为：</div>
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
<style scoped>
.bottom-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: red; */
}
</style>
