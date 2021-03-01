<template>
  <div class="header">
    <div class="inner">
      <!--  logo -->
      <router-link class="logo" to="/">
        <img class="img" src="@/assets/images/logo.png" alt/>
        <div class="text">
          <span>即刻</span>
          <span class="gray">Beta</span>
        </div>
      </router-link>
      <!--  导航 -->
      <div class="nav">
        <router-link class="item" to="/">动态</router-link>
        <router-link class="item" to="/find">发现</router-link>
      </div>
      <!--  搜索框 -->
      <div class="search">
        <div class="icon"></div>
        <input class="input" placeholder="搜索"/>
      </div>
      <!--  信息和头像 -->
      <div class="msg-avatar">
        <button class="msg" @click="msgListVisible=!msgListVisible"></button>
        <div class="msg-list box-card" v-show="msgListVisible">
          <template v-for="i in 100" :key="i">
            123<br>
          </template>
        </div>
        <div class="avatar">
          <img class="img"
               src="https://cdn.jellow.site/FmI_vA5gY8zJ7kSaTKr9NBnduH0E?imageMogr2/auto-orient/heic-exif/1/format/jpeg/thumbnail/120x120%3E"
               alt="">
          <span class="name">即友个锤子</span>
        </div>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="content__inner">
      <router-view/>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      msgListVisible: false
    }
  },
  methods: {}
})
</script>
<style lang="scss" src="./views/public.scss"></style>
<style lang="scss" scoped>
.header {
  background: #fff;

  .inner {
    max-width: 1200px;
    min-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 56px;
  }
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;

  .img {
    width: 32px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .text {
    font-size: 16px;

    .gray {
      color: rgb(153, 153, 153);
      font-size: 13px;
      vertical-align: bottom;
      margin-left: 4px;
    }

  }


}

.nav {


  .item {
    color: rgb(153, 153, 153);
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
  }

  .item + .item {
    margin-left: 32px;
  }

  .router-link-active {
    color: black;
  }
}

.search {
  border-radius: 999px;
  width: 464px;
  height: 32px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  background: #eff3f6;

  .icon {
    width: 20px;
    height: 20px;
    background: url('~@/assets/images/search.svg') no-repeat;
    margin-right: 16px;
  }

  .input {
    flex: 1;
    font-size: 16px;
    color: rgb(95, 95, 95);
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    background: #eff3f6;
  }
}

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
    background: url("~@/assets/images/notice.svg") no-repeat;
    cursor: pointer;
  }

  .msg-list {
    position: absolute;
    //left: -50%;
    right: 0;
    top: 44px;
    width: 400px;
    height: 480px;
    overflow-y: scroll;
    box-shadow: rgb(0 0 0 / 4%) 0px 1px 3px, rgb(0 0 0 / 10%) 0px 2px 15px;
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

.content {
  &__inner {
    max-width: 900px;
    margin: 10px auto 0;
  }
}
</style>
