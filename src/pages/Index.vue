<template>
  <Layout>
    <div class="list-container">
      <div class="company-list">
        <img
          v-for="c in $page.companies.edges"
          :key="c.node.id"
          :src="domain + c.node.img[0].url"
          alt=""
        />
      </div>
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
.list-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: url("https://img2.baidu.com/it/u=3830199803,419151711&fm=26&fmt=auto&gp=0.jpg");
  background-size: 100% 100%;
  background-attachment: fixed;
}
.company-list {
  padding: 30px 0;
  width: 90%;
  margin: 0 auto;
}

.company-list img {
  width: 160px;
  height: 60px;
  margin: 0 10px 20px;
  cursor: pointer;
}

@media screen and (max-width: 420px) {
  .company-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .company-list img {
    width: 48%;
    margin: 0 0 25px;
  }
}
</style>
