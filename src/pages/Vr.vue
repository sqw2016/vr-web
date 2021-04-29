<template>
  <Layout>
    <div class="banner">
      <div class="banner-search">
        <input class="search-input" type="text" />
        <div></div>
      </div>
    </div>
    <select placeholder="选择地区" id="">
      <option value="1">南昌</option>
    </select>
    <div class="vr-list"></div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style>
  .banner {
    height: 300px;
    background: gold;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .banner-search {
    margin: 0 auto;
  }

  .search-input {
    border: 0;
    height: 40px;
    width: 500px;
    background: rgba(225, 225, 255, .8);
    padding: 0 10px;
    font-size: 20px;
    color: #fff;
  }

  .search-input:focus-visible {
    outline: 0;
  }
</style>
