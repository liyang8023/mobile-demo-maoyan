<template>
  <div class="indexPage">
    <PageTitle :backShow="false" v-show="content !== 2">{{titleText}}</PageTitle>
    <div class="centerContent">
      <MovieIndex v-show="content === 0"></MovieIndex>
      <CinemaIndex v-show="content === 1">影院</CinemaIndex>
      <MineIndex v-show="content === 2"></MineIndex>
    </div>
    <TabBar @changeContent="changeContent"></TabBar>
  </div>
</template>
<script>
import TabBar from "@/components/tabBar";
import PageTitle from "@/components/pageTitie";
import MovieIndex from "@/view/movie/movieIndex";
import MineIndex from '@/view/user/mineIndex';
import CinemaIndex from '@/view/cinema/cinemaIndex';
export default {
  name: "index",
  components: {
    TabBar,
    MovieIndex,
    PageTitle,
    MineIndex,
    CinemaIndex
  },
  data() {
    return {
      content: 0,
      titleText: '猫眼电影'
    };
  },
  methods: {
    // 底部tab组件切换、内容变化
    changeContent(content) {
      this.content = content;
    }
  },
  watch: {
    content() {
      if (this.content === 0) {
        this.titleText = '猫眼电影';
      } else if (this.content === 1) {
        this.titleText = '影院';
      }
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
    overflow: auto;
  }
}
</style>
