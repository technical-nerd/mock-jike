<template>
  <div class="u-cols-2">
    <div class="u-cols-2__left">
      <trend-item :trend-item="{
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
      }"></trend-item>
      <!--评论-->
      <div class="comment">
        <div class="comment__input">
          <img
              src="https://cdn.jellow.site/FmI_vA5gY8zJ7kSaTKr9NBnduH0E?imageMogr2/auto-orient/heic-exif/1/format/jpeg/thumbnail/120x120%3E"
              alt="">
          <input type="text" placeholder="温暖的社区欢迎有爱的评论">
        </div>
        <div class="comment__tools">
          <label>
            <input type="checkbox">同步到我的动态
          </label>
          <button>发布</button>
        </div>
      </div>
      <!--评论列表-->
      <div class="comment-list u-box">
        <h3>最新评论</h3>
        <div class="comment-list__item" v-for="i in 10">
          <div class="body">
            <img src="https://cdn.jellow.site/Fo0ETAGev9nM_hdp0h70n77h1586.jpg?imageMogr2/auto-orient/heic-exif/1/format/jpeg/thumbnail/120x120%3E" alt="">
            <div class="body__content">
              <p class="name">港城第一赘婿<span>2小时前</span></p>
              <p class="content">不入其实也很好 我老婆也是党员 经常开会</p>
              <div class="tools">
                <div class="like">
                  <img src="/Images/agree.svg" alt="">
                  12
                </div>
                <span>回复</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="u-cols-2__right">
      <!--圈子简介-->
      <div class="group-introduce u-box">
        <div class="group-introduce__bg"></div>
        <div class="group-introduce__body">
          <div class="group-introduce__body__inner">
            <div class="top">
              <img
                  src="https://cdn.jellow.site/Fl2a7XDvdBtCZHGD2OOrP9cfji76.png?imageMogr2/auto-orient/heic-exif/1/format/jpeg/thumbnail/300x300%3E"
                  alt="">
              <span>大学生的日常</span>
            </div>
            <p class="slogan">66.3万名大学生正在分享生活📚</p>
            <p class="desc">即刻大学生的大本营，除了看不完的论文上不完的课，大学还有精彩的青春和吐不完...</p>
            <span class="expand">展开</span>
            <button class="join">加入</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import TrendItem from "/Views/components/trend-item/trend-item.vue";

export default defineComponent({
  name: "trend-detail",
  components: {TrendItem}
})
</script>

<style scoped lang="scss">
.trend-item{
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.comment {
  padding: 20px 24px 12px 24px;
  background-color: rgb(248, 250, 251);
  border: 2px solid rgb(157 182 200 / 12%);
  border-left: none;
  border-right: none;

  &__input {
    display: flex;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 8px;
    }

    input {
      font-size: 14px;
      flex: 1;
      outline: none;
      padding: 12px;
      border-radius: 8px;
      border: 1px solid rgb(0 0 0 / 30%);
    }
  }

  &__tools {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;

    label {
      font-size: 14px;
      margin-left: 56px;
      display: flex;
      align-items: center;

      input {
        margin-right: 8px;
      }
    }

    button {
      width: 64px;
      height: 24px;
      font-size: 12px;
      background-color: rgb(129, 212, 251);
      color: white;
      outline: none;
      cursor: pointer;
      border-radius: 999px;
      border: none;
    }
  }
}
.comment-list{
  padding: 24px;

  h3{
    font-size: 16px;
    color: rgb(64, 64, 64);
  }
  &__item{
    .body{
      display: flex;
      &>img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 8px;
      }
      &__content{
        flex: 1;
        border-bottom: 1px solid rgba(219, 219, 219, 0.5);

        .name {
          font-size: 14px;
          color: rgb(95, 95, 95);

          span{
            color: rgb(191, 191, 191);
            font-size: 12px;
          }
        }
        .content{
          font-size: 14px;
          color: rgb(64, 64, 64);
          margin: 14px 0;
        }
        .tools{
          .like{
            font-size: 12px;
            color: rgb(153, 153, 153);

            img {
              width: 16px;
              height: 16px;
            }
          }
        }
      }
    }
  }
}
.group-introduce {
  &__bg {
    background-image: url('https://cdn.jellow.site/Fst6LvaWpDKcLLZOsDcacNUue-Ib.jpg?imageMogr2/auto-orient/heic-exif/1/format/jpeg/thumbnail/1000x1000%3E');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 96px;
  }

  &__body {
    padding-left: 16px;
    padding-right: 16px;

    &__inner {
      position: relative;
      top: -34px;

      .top {
        display: flex;

        img {
          width: 64px;
          height: 64px;
          border-radius: 12px;
          border: 2px solid rgb(255, 255, 255);
        }

        span {
          color: rgb(64, 64, 64);
          font-size: 16px;
          font-weight: 700;
          margin-top: 43px;
          margin-left: 10px;
        }
      }

      .slogan {
        color: rgb(115, 115, 115);
        font-size: 13px;
        margin: 12px 0;
      }

      .desc {
        font-size: 14px;
        color: rgb(64, 64, 64);
      }

      .expand {
        color: rgb(3, 169, 245);
        font-size: 14px;
        cursor: pointer;
        margin: 24px 0;
        display: inline-block;
      }

      .join {
        width: 100%;
        border: none;
        margin: 0;
        padding: 0;
        height: 32px;
        font-size: 14px;
        color: rgb(64, 64, 64);
        background-color: rgb(255, 235, 103);
        border-radius: 999px;
        outline: none;
        cursor: pointer;
      }
    }
  }
}
</style>
