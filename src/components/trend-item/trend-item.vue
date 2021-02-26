<template>
  <div class="trend-item box-card">
    <img class="avatar" :src="trendItem.avatar" alt/>
    <div class="content">
      <div class="head">
        <div class="name">{{ trendItem.name }}</div>
        <div class="time">{{ trendItem.postTime }}</div>
      </div>
      <div class="body">
        你们觉得好的不一定是被需要的
        <br/>比如你做的东西不听老板的需求来，他就不要
        <br/>一个是规则
        <br/>还有一个是人性
        <br/>比如你们经常骂qq看点一些内容低速色情
        <br/>但其实这些内容的数据是很好的
        <br/>
      </div>
      <router-link class="group" to="/">
        <img src="./images/circle.svg" alt/>
        {{ trendItem.circleName }}
      </router-link>
      <div class="btn-group">
        <div class="agree">
          <button type="button"></button>
          123
        </div>
        <div class="comment">
          <button type="button"></button>
        </div>
        <div class="share">
          <button type="button"></button>
        </div>
      </div>
    </div>
    <img src="./images/arrow.svg" alt class="arrow"/>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import {TrendItem} from "@/components/trend-item/trend-item";

export default defineComponent({
  props: {
    trendItem: {
      type:TrendItem,
      require:true
    }
  },
  created() {
    console.log(this.trendItem)
  }
});
</script>

<style lang="scss">
.trend-item {
  font-size: 14px;
  padding: 24px;
  display: flex;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .content {
    flex: 1;
    margin: 0 12px;

    .head {
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .name {
        font-weight: 600;
        margin-bottom: 4px;
      }

      .time {
        font-size: 12px;
        color: rgb(191, 191, 191);
      }
    }

    .body {
      font-size: 15px;
      line-height: 20px;
    }

    .group {
      color: rgb(3, 169, 245);
      background-color: rgb(242, 245, 248);
      height: 28px;
      display: inline-flex;
      align-items: center;
      border-radius: 999px;
      margin: 12px 0;

      img {
        width: 20px;
        margin-right: 6px;
      }
    }

    .btn-group {
      display: flex;
      color: rgb(153, 153, 153);

      button {
        width: 24px;
        height: 24px;
        border: none;
        outline: none;
        background-repeat: no-repeat;
        margin-right: 4px;
      }

      .agree {
        button {
          background-image: url('./images/agree.svg');
        }
      }

      .comment {
        button {
          background-image: url('./images/comment.svg');
        }
      }

      .share {
        button {
          background-image: url('./images/share.svg');
        }
      }

      .agree, .share, .comment {
        flex: 1;
        display: flex;
        align-items: center;
      }
    }
  }

  .arrow {
    width: 24px;
    height: 24px;
  }
}
</style>