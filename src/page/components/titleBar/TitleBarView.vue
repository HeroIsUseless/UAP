<script setup lang="ts">
import { Button } from 'ant-design-vue';
import { HomeOutlined, QrcodeOutlined, ClockCircleOutlined } from '@ant-design/icons-vue';
import {pageModel, setNowPlugin} from "../../model"
import homePlugin from "../../../plugins/home/Model"
import qrcodePlugin from "../../../plugins/qrcode/Model"
import timeCovertPlugin from "../../../plugins/timeConvert/Model"


const onHomeBtnClick = () => {
  setNowPlugin(homePlugin.name)
}

const onQrcodeBtnClick = () => {
  setNowPlugin(qrcodePlugin.name)
}

const onTimeConvertBtnClick = () => {
  setNowPlugin(timeCovertPlugin.name)
}

</script>

<template>
  <div class="title-bar">
    &nbsp;
    <Button size="small" @click="onHomeBtnClick">
      <template #icon><HomeOutlined /></template>
      主页
    </Button>
    &nbsp;
    <Button size="small" @click="onTimeConvertBtnClick">
      <template #icon><ClockCircleOutlined /></template>
      时间戳
    </Button>
    &nbsp;
    <Button size="small" @click="onQrcodeBtnClick">
      <template #icon><QrcodeOutlined /></template>
      二维码
    </Button>
  </div>
</template>

<style>
.title-bar {
  width: 100%;
  height: 32px;
  /* background-color: #f0f045; */
  /* 元素的总高度和宽度包含内边距padding和边框border */
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
</style>
