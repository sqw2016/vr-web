<template>
  <div class="layout">
    <header class="header">
      <div class="header-container">
        <g-link class="logo" to="/">VR建材城市联盟</g-link>
        <nav class="nav">
          <g-link exact active-class="active" class="nav-link" to="/"
            >首页</g-link
          >
          <g-link class="nav-link" to="/vr/">VR漫游</g-link>
          <!-- <g-link class="nav-link" to="/activity/">联盟活动</g-link> -->
        </nav>
        <div class="header-search-container">
          <input
            v-model="searchInput"
            class="header-search"
            placeholder="搜索VR漫游"
            type="text"
          />
          <svg
            @click="toDetailSearch"
            t="1619750233090"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2380"
            width="200"
            height="200"
          >
            <path
              d="M426.666667 42.666667q77.994667 0 149.162667 30.506667t122.496 81.834667 81.834667 122.496 30.506667 149.162667q0 66.986667-21.845333 128.341333t-62.165333 111.317333l242.346667 242.005333q12.330667 12.330667 12.330667 30.336 0 18.346667-12.16 30.506667t-30.506667 12.16q-18.005333 0-30.336-12.330667l-242.005333-242.346667q-50.005333 40.32-111.317333 62.165333t-128.341333 21.845333q-77.994667 0-149.162667-30.506667t-122.496-81.834667-81.834667-122.496-30.506667-149.162667 30.506667-149.162667 81.834667-122.496 122.496-81.834667 149.162667-30.506667zM426.666667 128q-60.672 0-116.010667 23.68t-95.317333 63.658667-63.658667 95.317333-23.68 116.010667 23.68 116.010667 63.658667 95.317333 95.317333 63.658667 116.010667 23.68 116.010667-23.68 95.317333-63.658667 63.658667-95.317333 23.68-116.010667-23.68-116.010667-63.658667-95.317333-95.317333-63.658667-116.010667-23.68z"
              p-id="2381"
              fill="#1296db"
            ></path>
          </svg>
        </div>
      </div>
    </header>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    toDetailSearch() {
      this.$router.push({
        path: "vr",
        query: {
          search: this.searchInput,
        },
      });
    },
  },
};
</script>

<style>
html,
body,
h1,
h2,
h3,
h4,
div,
ul,
li {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.logo {
  min-width: 150px;
  flex-shrink: 0;
  height: 60px;
  line-height: 60px;
}

.nav {
  min-width: 150px;
  flex-shrink: 0;
  height: 60px;
  line-height: 60px;
}

select,
input:focus-visible {
  outline: 0;
}

.header {
  width: 100%;
  background: #fff;
  flex-shrink: 0;
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
  flex-wrap: wrap;
}

.header-search-container {
  position: relative;
  height: 60px;
  line-height: 60px;
}

.header-search-container svg {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 10px;
  top: 20px;
  cursor: pointer;
}

.header-search {
  font-size: 16px;
  padding: 5px 10px;
  border: 1px solid #747171;
}

.content {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.nav-link {
  margin-left: 20px;
}
</style>
