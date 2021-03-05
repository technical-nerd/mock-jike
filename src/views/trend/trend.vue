<template>
  <div class="u-cols-2">
    <div class="u-cols-2__left">
      <template v-for="(item,index) in trendList" :key="index">
        <trend-item :trend-item="item"></trend-item>
      </template>
    </div>
    <div class="u-cols-2__right">
      <!-- 用户信息 -->
      <div class="user-info u-box">
        <div class="bg"></div>
        <router-link class="avatar" to="/me"></router-link>
        <div class="content">
          <div class="name">即友个锤子</div>
          <div class="detail">
            <span class="attention">69 关注</span>
            <span class="followed">1 被关注</span>
          </div>
        </div>
      </div>
      <!-- 我的圈子 -->
      <div class="my-circle u-box">
        <div class="u-box__title">我的圈子</div>
        <div class="u-box__item" v-for="i in 7">
          <img class="logo"
               src="https://cdn.jellow.site/lsqmD2VC9pJBQzjRz-eqvh4N8hFH.png?imageMogr2/auto-orient/heic-exif/1/format/jpeg/thumbnail/300x300%3E"
               alt="">
          <div class="content">
            <p>工程师的日常</p>
            <p>大部分的应用开发者，可能分三种

              第一种，更多地考虑what，比如收到一个购物车的需求应该怎么实现，可以面向百度Google编程，只要实现就ok。

              第二种，更多地考虑how，有没有更好的方案，更普遍的方案，所谓的最佳实践，就需要考虑更多场景，更多次重构。

              第三种，更多地考虑why，为什么需要这个需求，这个需求背后的逻辑是什么，有可能对方讲出来的需求和实际的需求完全是两码事。最好的实现应该是不写代码，如果一定要实现是不是能很好的嵌入原有系统的逻辑中。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent, ref, reactive} from "vue";
import {TrendItem} from "/Views/components/trend-item/trend-item";
import T from '/@/views/components/trend-item/trend-item.vue';


export default defineComponent({
  components: {
    'trend-item': T
  },
  created() {
    this.loadData();
  },
  data() {
    var trendList = new Array<TrendItem>(10);
    return {
      trendList
    }
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
});
</script>

<style lang="scss" scoped>
.user-info {
  position: relative;

  .bg {
    background-image: url("https://cdn.jellow.site/Fub9yOoFAesBAs9ci7GGdnoHgaEn.jpg?imageMogr2/auto-orient/heic-exif/1/format/jpeg/thumbnail/1000x1000%3E");
    background-position: center;
    background-size: cover;
    height: 128px;
  }

  .avatar {
    display: block;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 2px solid white;
    position: absolute;
    top: 98px;
    left: 20px;
    background: url("https://cdn.jellow.site/FmI_vA5gY8zJ7kSaTKr9NBnduH0E?imageMogr2/auto-orient/heic-exif/1/format/jpeg/thumbnail/300x300%3E") no-repeat;
    background-size: cover;
  }

  .content {
    padding: 40px 0 30px 20px;

    .name {
      font-size: 16px;
      line-height: 28px;
      font-weight: 700;
    }

    .detail {
      color: rgb(115, 115, 115);
      font-size: 14px;
    }
  }
}

.my-circle {
  .logo {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    margin-right: 12px;
  }

  .content {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      margin: 0;
    }

    p:nth-child(1) {
      font-size: 14px;
      margin-bottom: 5px;
    }

    p:nth-child(2) {
      font-size: 12px;
      word-break: normal;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: rgb(153, 153, 153);
    }

  }
}
</style>
