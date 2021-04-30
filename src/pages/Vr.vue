<template>
  <Layout>
    <div class="banner">
      <div class="banner-search">
        <input v-model="searchInput" class="search-input" type="text" />
        <div @click="getVrs()" class="search-btn">
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
        <svg
          v-if="searchInput"
          @click="clearSearchInput"
          t="1619775178165"
          class="icon search-close-icon"
          viewBox="0 0 1025 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5087"
          width="200"
          height="200"
        >
          <path
            d="M513.344 0a512 512 0 1 0 0 1024 512 512 0 0 0 0-1024z m226.048 674.624l-54.528 56.896-171.52-164.928-171.392 164.928-54.592-56.896L456.576 512 287.36 349.312l54.592-56.768 171.392 164.8 171.52-164.8 54.528 56.768L570.176 512l169.216 162.624z"
            fill=""
            p-id="5088"
          ></path>
        </svg>
      </div>
    </div>
    <div class="vr-content">
      <div class="select-contaienr">
        <label for="area-select">
          选择地区：
        </label>
        <select
          v-model="selectedArea"
          @change="changeArea"
          placeholder="选择地区"
          name="area-select"
        >
          <option
            v-for="area in $page.areas.edges"
            :key="area.node.id"
            :value="area.node.id"
            >{{ area.node.name }}</option
          >
        </select>
        <svg
          v-if="selectedArea"
          @click="clearArea"
          t="1619775178165"
          class="icon"
          viewBox="0 0 1025 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5087"
          width="200"
          height="200"
        >
          <path
            d="M513.344 0a512 512 0 1 0 0 1024 512 512 0 0 0 0-1024z m226.048 674.624l-54.528 56.896-171.52-164.928-171.392 164.928-54.592-56.896L456.576 512 287.36 349.312l54.592-56.768 171.392 164.8 171.52-164.8 54.528 56.768L570.176 512l169.216 162.624z"
            fill=""
            p-id="5088"
          ></path>
        </svg>
      </div>
      <div class="vr-list">
        <div class="vr-list-item" v-for="vr in vrs" :key="vr.id">
          <g-link :to="vr.link">
            <img :src="vr.img" alt="" />
          </g-link>
          <div class="vr-item-info">
            <div>{{ vr.title }}</div>
            <div class="vr-item-user-views">
              <span>{{ vr.user }}</span>
              <div class="views">
                <svg
                  t="1619768977042"
                  class="icon"
                  viewBox="0 0 1615 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3212"
                  width="200"
                  height="200"
                >
                  <path
                    d="M1612.25656 498.10221A884.95335 884.95335 0 0 0 807.753514 0.041688 884.95335 884.95335 0 0 0 3.250469 498.10221a32.911488 32.911488 0 0 0 0 28.52329A884.95335 884.95335 0 0 0 807.753514 1023.954655a884.95335 884.95335 0 0 0 804.503046-498.060522 32.911488 32.911488 0 0 0 0-27.791923z m-804.503046 365.683203A357.638172 357.638172 0 0 1 442.070312 511.998172a357.638172 357.638172 0 0 1 365.683202-353.249974A357.638172 357.638172 0 0 1 1173.436717 511.998172a358.369539 358.369539 0 0 1-365.683203 353.249973z m0-537.554308A184.304334 184.304334 0 1 0 997.177413 511.998172 187.2298 187.2298 0 0 0 807.753514 327.693837z"
                    p-id="3213"
                    data-spm-anchor-id="a313x.7781069.0.i4"
                    class="selected"
                    fill="#666666"
                  ></path>
                </svg>
                <span>{{ vr.views }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!vrs.length" class="no-data">
        暂无数据...
      </div>
      <div v-if="loading" class="loading">
        <svg
          t="1619772850022"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4320"
          width="200"
          height="200"
        >
          <path
            d="M500.914065 101.849403m-101.850403 0a101.850403 101.850403 0 1 0 203.700806 0 101.850403 101.850403 0 1 0-203.700806 0Z"
            p-id="4321"
          ></path>
          <path
            d="M254.163511 187.508901m-96.031438 0a96.031437 96.031437 0 1 0 192.062875 0 96.031437 96.031437 0 1 0-192.062875 0Z"
            p-id="4322"
          ></path>
          <path
            d="M120.713293 381.395765m-90.210472 0a90.210471 90.210471 0 1 0 180.420943 0 90.210471 90.210471 0 1 0-180.420943 0Z"
            p-id="4323"
          ></path>
          <path
            d="M118.049308 609.722427m-84.390505 0a84.390506 84.390506 0 1 0 168.781011 0 84.390506 84.390506 0 1 0-168.781011 0Z"
            p-id="4324"
          ></path>
          <path
            d="M224.002687 786.127394m-78.570539 0a78.57054 78.57054 0 1 0 157.141079 0 78.57054 78.57054 0 1 0-157.141079 0Z"
            p-id="4325"
          ></path>
          <path
            d="M418.803546 889.708787m-72.750574 0a72.750574 72.750574 0 1 0 145.501148 0 72.750574 72.750574 0 1 0-145.501148 0Z"
            p-id="4326"
          ></path>
          <path
            d="M626.851327 877.857856m-66.931608 0a66.931608 66.931608 0 1 0 133.863216 0 66.931608 66.931608 0 1 0-133.863216 0Z"
            p-id="4327"
          ></path>
          <path
            d="M800.334311 762.483532m-61.110642 0a61.110642 61.110642 0 1 0 122.221283 0 61.110642 61.110642 0 1 0-122.221283 0Z"
            p-id="4328"
          ></path>
          <path
            d="M889.516788 587.14856m-55.290676 0a55.290676 55.290676 0 1 0 110.581352 0 55.290676 55.290676 0 1 0-110.581352 0Z"
            p-id="4329"
          ></path>
          <path
            d="M888.602793 408.896604m-49.47071 0a49.47071 49.47071 0 1 0 98.94142 0 49.47071 49.47071 0 1 0-98.94142 0Z"
            p-id="4330"
          ></path>
          <path
            d="M818.663203 260.047476m-43.650744 0a43.650744 43.650744 0 1 0 87.301488 0 43.650744 43.650744 0 1 0-87.301488 0Z"
            p-id="4331"
          ></path>
          <path
            d="M708.18485 159.990063m-37.829778 0a37.829778 37.829778 0 1 0 75.659557 0 37.829778 37.829778 0 1 0-75.659557 0Z"
            p-id="4332"
          ></path>
        </svg>
      </div>
      <div
        v-if="vrs.length === curPage * limit"
        @click="loadMore"
        class="more-btn"
      >
        查看更多
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    areas: allStrapiArea {
      edges {
        node {
          id
          name
        }
      }
    }
  }
</page-query>

<script>
import axios from "axios";

export default {
  metaInfo: {
    title: "VR漫游",
  },
  data() {
    return {
      selectedArea: "",
      vrs: [],
      searchInput: "",
      curPage: 1,
      limit: 15,
      loading: false,
    };
  },
  mounted() {
    this.searchInput = this.$route.query.search;
    this.getVrs();
  },
  methods: {
    getVrs(param = {}) {
      if (this.loading) return;
      this.loading = true;
      const params = {
        _limit: this.curPage * this.limit,
        ...param,
      };
      this.selectedArea && (params["area.id"] = this.selectedArea);
      this.searchInput && (params["title_contains"] = this.searchInput);
      return axios
        .get("http://117.50.107.63:1337/vrs", {
          params,
        })
        .then((res) => {
          if (res.status === 200) {
            this.vrs = res.data;
            return res;
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    loadMore() {
      this.curPage++;
      this.getVrs();
    },
    changeArea() {
      this.curPage = 1;
      this.getVrs();
    },
    clearArea() {
      this.selectedArea = "";
      this.getVrs();
    },
    clearSearchInput() {
      this.searchInput = "";
      this.getVrs();
    },
  },
};
</script>

<style>
.banner {
  height: 300px;
  background-image: url("https://resourceqiniu.720think.com/720think/home/img/channelBanner2.jpg?ver=1");
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-search {
  margin: 0 auto;
  display: flex;
  position: relative;
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

.search-close-icon {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 50px;
  top: 10px;
  cursor: pointer;
}

.search-btn svg {
  width: 30px;
  height: 30px;
}

.vr-content {
  padding: 20px;
}

.select-contaienr {
  position: relative;
  width: fit-content;
}

.select-contaienr svg {
  width: 12px;
  height: 12px;
  position: absolute;
  right: 16px;
  top: 8px;
  cursor: pointer;
}

.vr-content select {
  padding: 5px 0;
  width: 120px;
  padding-right: 20px;
  border: 1px solid #747171;
  cursor: pointer;
}

.vr-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.vr-list-item {
  width: 32.33%;
  margin: 0 1% 25px 0;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  overflow: hidden;
  transition: all 0.3s;
}

.vr-list-item a {
  width: 100%;
  height: 220px;
  overflow: hidden;
  display: block;
}

.vr-list-item img {
  width: 100%;
  height: 100%;
  transition: all 0.6s ease-in-out 0s;
}

.vr-item-info {
  padding: 10px 15px;
}

.vr-list-item:hover {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  transform: translate(0, -3px);
}

.vr-list-item:hover img {
  transform: scale(1.2);
}

.vr-item-user-views {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  color: #666;
}

.vr-item-user-views svg {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.views {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-input:focus-visible {
  outline: 0;
}

.no-data {
  width: 100%;
  text-align: center;
}

.more-btn {
  width: 100%;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  padding: 10px 0;
}

.more-btn:hover {
  color: #2e9afe;
  background-color: #ededed;
}

@keyframes loopRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading {
  width: fit-content;
  margin: 0 auto;
}

.loading svg {
  width: 30px;
  height: 30px;
  animation: loopRotate 0.8s linear 0s infinite;
}
</style>
