<script setup lang="ts">
import { Button } from 'ant-design-vue';
import { HomeOutlined, QrcodeOutlined, ClockCircleOutlined, LinkOutlined } from '@ant-design/icons-vue';
import {pageModel, setNowPlugin} from "../../model"
import { unref } from 'vue';

const onPluginBtnClick = (plugin: any) => {
  setNowPlugin(plugin.name)
}

</script>

<template>
  <div class="title-bar">
    <template v-for="(plugin, index) in pageModel.plugins">
      &nbsp;
      <Button size="small" @click="onPluginBtnClick(plugin[1])">
        <template #icon>
          <component :is="plugin[1].icon" />
        </template>
        {{ plugin[1].name }}
      </Button>
    </template>
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
