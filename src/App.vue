<template>
  <div id="nav">
    <div class="nav-content">
      <!-- logo -->
      <router-link to="/" class="logo">
        <img src="@/assets/logo.png" alt/>
        <span>即刻</span>
        <span class="gray-153">Beta</span>
      </router-link>
      <!-- 动态与发现 -->
      <div class="nav-item">
        <router-link to="/" active-class="nav-active">动态</router-link>
        <router-link to="/find" active-class="nav-active">发现</router-link>
      </div>
      <!-- 搜索框 -->
      <div class="search">
        <img src="@/assets/search.svg" alt/>
        <input type="text" placeholder="搜索"/>
      </div>
      <!-- 通知信息 -->
      <img src="@/assets/notice.svg" class="notice" alt/>
      <!-- 头像 -->
      <div class="avatar">
        <img
            src="https://cdn.jellow.site/FmI_vA5gY8zJ7kSaTKr9NBnduH0E?imageMogr2/auto-orient/heic-exif/1/format/jpeg/thumbnail/120x120%3E"
            alt
        />
        即友个锤子
      </div>
    </div>
  </div>
  <div class="content">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  & > .content {
    background-color: #eff3f6;
    //max-width: 1000px;
    width: fit-content;
    margin: 0 auto;
  }
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
  position: sticky;
  top: 0;
  background: white;

  .nav-content {
    width: 1028px;
    height: 56px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    a{
      color: rgb(153, 153, 153);
    }

    .nav-active {
      color: rgb(64, 64, 64);
      font-weight: bold;
    }

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
      margin-right: 16px;
    }

    input {
      flex: 1;
      border: none;
      outline: none;
      color: rgb(95, 95, 95);
      background-color: rgb(242, 245, 248);
    }
  }

  .notice {
    width: 24px;
    cursor: pointer;
  }

  .avatar {
    cursor: pointer;
    display: flex;
    align-items: center;

    img {
      width: 32px;
      border-radius: 50%;
      margin-right: 8px;
    }
  }
}
</style>
<style lang="scss" src="./views/public.scss"></style>