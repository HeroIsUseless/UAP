<script setup lang="ts">
import Model from '../Model';
import QrcodeVue from 'qrcode.vue'
</script>
<template>
 <qrcode-vue v-for="url in Model.data.urls" :value="url" :size="300"  ></qrcode-vue>
</template>
<style scoped></style>