<template>
  <div id="nav">
    <div class="content">
      <!-- logo -->
      <router-link to="/" class="logo">
        <img src="@/assets/logo.png" alt />
        <span>即刻</span>
        <span class="gray-153">Beta</span>
      </router-link>
      <!-- 动态与发现 -->
      <div class="nav-item">
        <router-link to="/">动态</router-link>
        <router-link to="/">发现</router-link>
      </div>
      <!-- 搜索框 -->
      <div class="search">
        <img src="@/assets/search.svg" alt />
        <input type="text" placeholder="搜索" />
      </div>
      <!-- 通知信息 -->
      <!-- 头像 -->
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">

#app {
}

.gray-153 {
  color: rgb(153, 153, 153);
}
a {
  color: black;
  text-decoration: none;
}

#nav {
  font-size: 16px;

  .content {
    width: 1028px;
    height: 56px;
    margin: 0 auto;
  }
  .logo {
    width: 104px;
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 32px;
      border-radius: 50%;
    }
    .gray-153 {
      font-size: 13px;
    }
  }
  .nav-item {
    a:nth-child(1) {
      margin-right: 32px;
    }
  }
  .search {
    width: 464px;
    height: 32px;
    padding: 0 16px;
    border-radius: 999px;
    background-color: rgb(242, 245, 248);
    display: flex;
    align-items: center;

    img {
      width: 20px;
    }
    input {
      flex:1;
      // border: none;
      // outline: none;
    }
  }
}
</style>
