<template>
  <template v-for="(item,index) in trendList" :key="index">
    <trend-item :trend-item="item"></trend-item>
  </template>
</template>

<script lang="ts">
import TrendItemComponent from './trend-item/trend-item.vue'
import {defineComponent} from "vue";
import {TrendItem} from "./trend-item/trend-item.js";

export default defineComponent({
  name: "trend-list",
  components: {
    'trend-item': TrendItemComponent
  },
  props: {
    data: {
      type: Object as () => TrendItem[],
      required: false
    },
  },
  computed: {
    trendList():TrendItem[] {
      if (!this.data) {
        console.warn('请给组件trend-list配置data属性')
        return new Array<TrendItem>(10).fill({
          user: {
            name: '寻茶',
            avatar: 'https://cdn.jellow.site/Fs3Dtv680g4_tmm12WpqNbffzVgV.jpeg?imageMogr2/auto-orient/heic-exif/1/format/jpeg/thumbnail/120x120%3E'
          },
          group: {
            name: 'JitHub'
          },
          trend: {
            publishTime: '2020-01-02'
          }
        })
      }
      return this.data
    }
  },
})
</script>

<style scoped>

</style>
