<template>
  <Layout>
    <div class="content-bg"></div>
    <div class="company-list">
      <img
        v-for="c in $page.companies.edges"
        :key="c.node.id"
        :src="domain + c.node.img[0].url"
        alt=""
      />
    </div>
  </Layout>
</template>
<page-query>
  query {
    companies: allStrapiCompany {
      edges {
        node {
          id
          name
          img {
            url
          }
        }
      }
    }
  }
</page-query>
<script>
export default {
  metaInfo: {
    title: "首页",
  },
  data() {
    return {
      domain: "http://117.50.107.63:1337",
    };
  },
};
</script>

<style>
.content-bg {
  width: 100%;
  height: 100%;
  background: url("https://img2.baidu.com/it/u=3830199803,419151711&fm=26&fmt=auto&gp=0.jpg");
  background-size: 100% 100%;
  position: fixed;
  top: 60px;
  z-index: -1;
}
.company-list {
  padding: 10px;
  width: 1080px;
  margin: 50px auto;
}

.company-list img {
  width: 160px;
  height: 60px;
  margin: 0 10px 20px;
  cursor: pointer;
}
</style>
