<template>
  <!--头部-->
  <div class="me-header">
    <div class="me-header__item">
      <img class="avatar"
           src="https://cdn.jellow.site/Fn612Jy7U86AAUkLAA82t8J9djAu?imageMogr2/auto-orient/heic-exif/1/format/jpeg/thumbnail/1000x1000%3E"
           alt="">
      <div class="btn-group">
        <div class="follow">已关注</div>
        <div class="more"></div>
      </div>
    </div>
    <div class="me-header__item">Beckkkkky</div>
    <div class="me-header__item">128 关注 | 385 被关注</div>
    <div class="me-header__item">工作太忙已经时间管理无能的小毛睿</div>
    <div class="me-header__item">
      <div class="tag">恋爱中</div>
      <div class="tag">上海</div>
      <div class="tag">文化教育行业</div>
      <div class="tag">双鱼座</div>
    </div>
  </div>
  <!--  tabs-->
  <!--<div class="me-tabs">-->
  <!--  -->
  <!--</div>-->
  <div class="u-cols-2">
    <div class="u-cols-2__left">
      <!--  动态列表-->
      <template v-for="(item,index) in trendList" :key="index">
        <trend-item :trend-item="item"></trend-item>
      </template>
    </div>
  </div>

  <!--  jike info -->
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {TrendItem} from "/@/views/components/trend-item/trend-item";

export default defineComponent({
  name: "me",
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
      });
    }
  }
})
</script>

<style scoped lang="scss">
.me-header {
  background-image: url("https://cdn.jellow.site/Fmv-qMS5fAhGvzENrejdRyTvRpB6.jpg?imageMogr2/auto-orient/heic-exif/1/format/jpeg/thumbnail/1000x1000%3E");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 96px 64px 20px;
  color: rgb(255, 255, 255);
  font-size: 16px;

  &__item {
    &:nth-child(1) {
      display: flex;
      justify-content: space-between;
    }

    &:nth-child(2) {
      font-weight: 700;
      font-size: 24px;
    }

    &:nth-child(3) {

    }

    &:nth-child(4) {
    }

    &:nth-child(5) {
      display: flex;
    }
  }

  &__item + &__item {
    margin-top: 10px;
  }

  .avatar {
    width: 120px;
    border-radius: 50%;
  }

  .btn-group {
    color: rgb(255, 255, 255);
    font-size: 16px;
    display: flex;
    align-items: center;


    .follow {
      width: 98px;
      border-radius: 999px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .more {
      width: 36px;
      border-radius: 50%;
      background-image: url('~/@/assets/images/more.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 60%;
      margin-left: 8px;
    }

    .follow, .more {
      border: 1px solid rgb(255, 255, 255);
      height: 36px;
      cursor: pointer;
    }
  }

  .tag {
    font-size: 12px;
    padding: 4px 10px;
    border-radius: 999px;
    background-color: rgba(191, 191, 191, 0.6);
  }

  .tag + .tag {
    margin-left: 10px;
  }
}

</style>
