<template>
  <div class="top-view">
    <Textarea v-model:value="Model.url" class="text-area" />
  </div>
</template>

<script setup lang="ts">
import {Textarea} from 'ant-design-vue'
import { ref } from 'vue';
import QrcodeVue from 'qrcode.vue'
import Model from '../Model';
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