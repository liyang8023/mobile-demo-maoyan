<template>
  <div class="indexPage">
    <PageTitle :backShow="false" v-show="content !== 2">猫眼电影</PageTitle>
    <div class="centerContent">
      <MovieIndex v-show="content === 0"></MovieIndex>
      <div v-show="content === 1">影院</div>
      <div v-show="content === 2">我的</div>
    </div>
    <TabBar @changeContent="changeContent"></TabBar>
  </div>
</template>
<script>
import TabBar from "@/components/tabBar";
import PageTitle from "@/components/pageTitie.vue";
import MovieIndex from "@/view/movie/movieIndex";
export default {
  name: "index",
  components: {
    TabBar,
    MovieIndex,
    PageTitle
  },
  data() {
    return {
      content: 0
    };
  },
  methods: {
    // 底部tab组件切换、内容变化
    changeContent(content) {
      this.content = content;
    }
  }
};
</script>
<style lang="scss" rel='stylesheet/scss'>
.indexPage {
  display: flex;
  flex-direction: column;
  height: 100%;
  .centerContent {
    margin-bottom: 70px;
    flex: 1;
    padding: 0 20px;
    overflow: auto;
  }
}
</style>
