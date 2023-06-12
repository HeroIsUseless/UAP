<template>
  <div class="top-view">
    <SelectFileDialog />
    <!-- ...
    ... -->
  </div>
</template>

<script setup lang="ts">
import SelectFileDialog from '../components/selectFileDialog/view.vue'
// <li v-for="(item, index) in list" :key="index" :ref="setItemRef">
//         {{ item }}
//       </li>
//     </ul>
//   </div>
// </template>

// <script>
// export default {
//   name: "App",
//   data() {
//     return {
//       list: [1, 2, 3],
//       itemRefs: [],
//     };
//   },
//   methods: {
//     setItemRef(el) {
//       this.itemRefs.push(el);
//     },

</script>

<style scoped>
.top-view {
  width: 100%;
  height: 100%;
}
</style>