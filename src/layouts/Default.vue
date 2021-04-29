<template>
  <div class="layout">
    <header class="header">
      <div class="header-container">
        <g-link  to="/">VR展示平台</g-link>
        <nav class="nav">
          <g-link exact active-class="active" class="nav-link" to="/">首页</g-link>
          <g-link class="nav-link" to="/vr/">VR漫游</g-link>
        </nav>
        <input placeholder="搜索VR漫游" type="text" />
      </div>
    </header>
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
html, body, h1, h2, h3, h4, div, ul, li {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}


.layout {
  width: 100%;
}

.header {
  width: 100%;
  position: fixed;
  top: 0;
  background: #fff;
}

.header a {
  text-decoration: none;
  color: #313131;
}

.header .active {
  color: #39f;
}

.header a:hover {
  color: #39f;
}

.header-container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.content {
  margin-top: 60px;
}

.nav-link {
  margin-left: 20px;
}
</style>
