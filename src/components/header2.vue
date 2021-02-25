<template>
  <div class="header2">
    <div class="inner">
      <!--  logo -->
      <div class="logo">
        <img class="img" src="@/assets/logo.png" alt/>
        <div class="text">
          <span>即刻</span>
          <span class="gray">Beta</span>
        </div>
      </div>
      <!--  导航 -->
      <div class="nav">
        <router-link class="item" to="/">动态</router-link>
        <router-link class="item" to="/">发现</router-link>
      </div>
      <!--  搜索框 -->
      <div class="search">
        <div class="icon"></div>
        <input class="input" placeholder="搜索"/>
      </div>
      <!--  信息和头像 -->
      <div class="msg-avatar">
        <button class="msg"></button>
        <div class="avatar">
          <img class="img"
               src="https://cdn.jellow.site/FmI_vA5gY8zJ7kSaTKr9NBnduH0E?imageMogr2/auto-orient/heic-exif/1/format/jpeg/thumbnail/120x120%3E"
               alt="">
          <span class="name">即友个锤子</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header2"
}
</script>

<style scoped lang="scss">
.header2 {
  background: #fff;

  .inner{
    max-width: 1200px;
    min-width: 960px;
    margin:0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 56px;

  }
}

.logo {
  display: flex;
  align-items: center;

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
    background: url('~@/assets/search.svg') no-repeat;
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

  .msg {
    min-width: 24px;
    height: 24px;
    border: none;
    outline: none;
    margin: 0 32px 0 0;
    padding: 0;
    background: url("~@/assets/notice.svg") no-repeat;
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