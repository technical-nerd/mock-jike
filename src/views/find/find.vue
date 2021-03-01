<template>
  <div class="two-column">
    <div class="col-left">
      <template v-for="(item,index) in trendList" :key="index">
        <trend-item :trend-item="item"></trend-item>
      </template>
    </div>
    <div class="col-right">
      <!--发现即友-->
      <div class="box-card--1">
        <div class="title">发现即友</div>
        <div class="item" v-for="i in 4">
          <img class="logo"
               src="https://cdn.jellow.site/Fv_c60AAGmDdSJXIM-vVh3q31Pzd.jpeg?imageMogr2/auto-orient/heic-exif/1/format/jpeg/thumbnail/300x300%3E"
               alt="">
          <div class="content">
            <p>zzh产品小白之路</p>
            <p>关注周游DonaldZhou的人也在关注Ta</p>
          </div>
          <div class="btn">关注</div>
        </div>
      </div>

      <!--  圈子推荐 -->
      <div class="box-card--1">
        <div class="title">圈子推荐</div>
        <div class="item" v-for="i in 4">
          <img class="logo"
               src="https://cdn.jellow.site/FmgIvYfCqop_n5USM7AxOllv_pVe.png?imageMogr2/auto-orient/heic-exif/1/format/jpeg/thumbnail/300x300%3E"
               alt="">
          <div class="content">
            <p>今日份的摄影</p>
            <p>100万名即友与你一起燃烧快门(๑ •̀∀-)و✧</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {TrendItem} from "@/views/components/trend-item/trend-item";

export default defineComponent({
  data() {
    var trendList: TrendItem[] = new Array(10);
    return {
      trendList
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.trendList.fill({
        avatar: 'https://cdn.jellow.site/Fs3Dtv680g4_tmm12WpqNbffzVgV.jpeg?imageMogr2/auto-orient/heic-exif/1/format/jpeg/thumbnail/120x120%3E',
        name: '寻茶',
        circleName: 'JitHub',
        postTime: '2020-01-02',
      })
    }
  }
})
</script>

<style lang="scss">

</style>