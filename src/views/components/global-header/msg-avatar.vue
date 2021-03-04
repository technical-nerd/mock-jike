<template>
  <div class="msg-avatar">
    <button class="msg" @click.stop="msgListVisible=!msgListVisible"></button>
    <div class="msg-list u-box" v-show="msgListVisible" ref="msgList" @click.stop>
      <div class="item" v-for="i in 20" :key="i">
        <div class="item__col">
          <div class="detail">
            <img class="avatar"
                 src="https://cdn.jellow.site/Ft6RHgeTYCCG018kNCJnFl-DwuH3.jpeg?imageMogr2/auto-orient/heic-exif/1/format/jpeg/thumbnail/120x120%3E"
                 alt="">
            <div class="content">
              <p>垃圾话Maker <span class="placeholder">回复了你</span></p>
              <p>没对几秒</p>
            </div>
          </div>
          <span class="time">2天前</span>
        </div>
        <div class="item__col">
          <p>这就是传说中的看对眼了</p>
        </div>
      </div>
    </div>
    <div class="avatar">
      <img class="img"
           src="https://cdn.jellow.site/FmI_vA5gY8zJ7kSaTKr9NBnduH0E?imageMogr2/auto-orient/heic-exif/1/format/jpeg/thumbnail/120x120%3E"
           alt="">
      <span class="name">即友个锤子</span>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: "msg-avatar",
  mounted() {
    document.body.addEventListener('click', ev => {
      if (ev.target !== this.$refs['msgList']) {
        this.msgListVisible = false;
      }
    });
  },
  data() {
    return {
      msgListVisible: false
    }
  },
})
</script>

<style scoped lang="scss">
.msg-avatar {
  display: flex;
  align-items: center;
  position: relative;

  .msg {
    min-width: 24px;
    height: 24px;
    border: none;
    outline: none;
    margin: 0 32px 0 0;
    padding: 0;
    background: url("~/@/assets/images/notice.svg") no-repeat;
    cursor: pointer;
  }

  .msg-list {
    position: absolute;
    right: 0;
    top: 44px;
    width: 400px;
    height: 480px;
    padding: 0 16px;
    overflow: hidden scroll;
    box-shadow: rgb(0 0 0 / 4%) 0px 1px 3px, rgb(0 0 0 / 10%) 0px 2px 15px;

    .item {
      font-size: 14px;
      display: flex;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      padding: 8px 0;

      &__col {
        p {
          margin: 0;
        }

        &:nth-child(1) {
          flex: 1;
        }

        &:nth-child(2) {
          width: 80px;

          p {
            font-size: 13px;
            line-height: 1.5;
            color: rgb(153, 153, 153);
          }
        }

        .detail {
          display: flex;

          .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }

          .content {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-left: 8px;

          }

          .placeholder {
            color: rgb(153, 153, 153);
          }
        }

        .time {
          margin-left: 48px;
          margin-top: 4px;
          font-size: 12px;
          color: rgb(153, 153, 153);
        }
      }
    }

  }

  .avatar {
    display: flex;
    align-items: center;

    .img {
      width: 32px;
      border-radius: 50%;
      margin-right: 8px;
    }

    .name {

    }
  }
}
</style>
