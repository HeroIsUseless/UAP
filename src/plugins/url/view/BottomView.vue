<template>
  <div class="bottom-view">   
    <div>
      <RadioGroup v-model:value="value">
        <RadioButton value="encodeURI">encodeURI</RadioButton>
        <RadioButton value="encodeURIComponent">encodeURIComponent</RadioButton>
      </RadioGroup>
    </div>   
    <Textarea v-model:value="encodeUrl" class="text-area" />
  </div>
</template>

<script setup lang="ts">
import {Textarea} from 'ant-design-vue'
import { computed, ref, watch } from 'vue';
import QrcodeVue from 'qrcode.vue'
import Model from '../Model';
import { Radio, RadioGroup, RadioButton } from 'ant-design-vue';
const value = ref('encodeURIComponent')
const encodeUrl = ref('')
watch(()=>Model.url, (val, preVal) => {
  if(value.value === 'encodeURIComponent') {
    encodeUrl.value = encodeURIComponent(Model.url)
  } else {
    encodeUrl.value = encodeURI(Model.url)
  }
})
</script>

<style scoped>
.bottom-view {
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