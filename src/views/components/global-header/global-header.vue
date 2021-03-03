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
        <input class="input" placeholder="搜索" v-model="searchInput"/>
        <div class="search__prompt u-box--1" @ref="searchPrompt" @click.stop v-show="searchPromptVisible">
          <div class="item">123</div>
          <div class="item">12306</div>
          <div class="item">123456</div>
        </div>
      </div>
      <!--  信息和头像 -->
      <msg-avatar></msg-avatar>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import MsgAvatar from './msg-avatar.vue'

export default defineComponent({
  name: "global-header",
  components: {
    'msg-avatar': MsgAvatar
  },
  mounted() {
    document.body.addEventListener('click',ev =>{
      if (ev.target !== this.$refs['searchPrompt']) {
        this.searchPromptVisible = false;
      }
    })
  },
  data() {
    return {
      searchInput: '',
      searchPromptVisible:false,
    }
  },
  computed: {
    // searchPromptVisible() {
    //   return this.searchInput.trim().length > 0;
    // }
  },
  watch:{
    searchInput(){
      if(this.searchInput.trim().length > 0){
        this.searchPromptVisible=true;
      }
    }
  },
  methods: {}
})
</script>

<style lang="scss" scoped>
.header {
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 10;

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
  position: relative;

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

  &__prompt {
    position: absolute;
    top: 40px;
    left: 16px;
    font-size: 14px;
    width: 400px;

    .item {
      padding: 10px 12px;
    }
  }
}

</style>
