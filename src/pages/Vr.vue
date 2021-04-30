<template>
  <Layout>
    <div class="banner">
      <div class="banner-search">
        <input class="search-input" type="text" />
        <div class="search-btn">
          <svg
            t="1619747346821"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2137"
            width="200"
            height="200"
          >
            <path
              d="M426.666667 42.666667q77.994667 0 149.162667 30.506667t122.496 81.834667 81.834667 122.496 30.506667 149.162667q0 66.986667-21.845333 128.341333t-62.165333 111.317333l242.346667 242.005333q12.330667 12.330667 12.330667 30.336 0 18.346667-12.16 30.506667t-30.506667 12.16q-18.005333 0-30.336-12.330667l-242.005333-242.346667q-50.005333 40.32-111.317333 62.165333t-128.341333 21.845333q-77.994667 0-149.162667-30.506667t-122.496-81.834667-81.834667-122.496-30.506667-149.162667 30.506667-149.162667 81.834667-122.496 122.496-81.834667 149.162667-30.506667zM426.666667 128q-60.672 0-116.010667 23.68t-95.317333 63.658667-63.658667 95.317333-23.68 116.010667 23.68 116.010667 63.658667 95.317333 95.317333 63.658667 116.010667 23.68 116.010667-23.68 95.317333-63.658667 63.658667-95.317333 23.68-116.010667-23.68-116.010667-63.658667-95.317333-95.317333-63.658667-116.010667-23.68z"
              p-id="2138"
              fill="#FFFFFF"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="vr-content">
      <label for="area-select">
        选择地区：
      </label>
      <select placeholder="选择地区" name="area-select">
        <option value="1">南昌</option>
      </select>
      <div class="vr-list"></div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About us",
  },
};
</script>

<style>
.banner {
  height: 300px;
  background-image: url("https://img1.baidu.com/it/u=962375943,590416327&fm=11&fmt=auto&gp=0.jpg");
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-search {
  margin: 0 auto;
  display: flex;
}

.search-input {
  border: 0;
  height: 40px;
  width: 500px;
  background: rgba(225, 225, 255, 0.8);
  padding: 0 10px;
  font-size: 20px;
  color: #fff;
}

.search-btn {
  width: 40px;
  height: 40px;
  background: #34b1e7;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
}

.search-btn svg {
  width: 30px;
  height: 30px;
}

.vr-content {
  padding: 20px;
}

.vr-content select {
  padding: 5px 0;
  width: 100px;
  border: 1px solid #747171;
  cursor: pointer;
}

.search-input:focus-visible {
  outline: 0;
}
</style>
