<template>
  <div class="u-cols-2">
    <div class="u-cols-2__left">
      <trend-list></trend-list>
    </div>
    <div class="u-cols-2__right">
      <!--发现即友-->
      <div class="find u-box">
        <div class="u-box__title">发现即友</div>
        <div class="u-box__item" v-for="i in 4">
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
      <div class="recommend u-box">
        <div class="u-box__title">圈子推荐</div>
        <div class="u-box__item" v-for="i in 4">
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
import TrendList from '/Views/components/trend-list.vue'

export default defineComponent({
  components: {
    'trend-list': TrendList
  },
  data() {

    return {}
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {

    }
  }
})
</script>

<style lang="scss" scoped>
.find {
  .logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .content {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 12px;

    p {
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p:nth-child(1) {
      font-size: 14px;
    }

    p:nth-child(2) {
      font-size: 12px;
      color: rgb(153, 153, 153);
    }
  }

  .btn {
    width: 60px;
    height: 29px;
    margin: 0;
    font-size: 12px;
    text-align: center;
    line-height: 29px;
    padding: 0;
    background-color: rgb(255, 235, 103);
    color: rgb(64, 64, 64);
    border: none;
    outline: none;
    border-radius: 999px;
    align-self: flex-end;
  }
}

.recommend {
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
    justify-content: space-around;

    p {
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p:nth-child(1) {
      font-size: 14px;
    }

    p:nth-child(2) {
      font-size: 12px;
      color: rgb(153, 153, 153);
    }
  }
}
</style>
