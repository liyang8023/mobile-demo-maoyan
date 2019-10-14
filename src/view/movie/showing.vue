<template>
  <div class="showing">
    <MovieList v-for="(item, index) in movieShowingList" :key="index" :movie='item' @changeWant="changeWantText"></MovieList>
    <MessageBox :message="messageText" v-show="boxShow"></MessageBox>
  </div>
</template>
<script>
  import MovieList from './movieList';
  export default {
    name: 'showing',
    data() {
      return {
        movieShowingList: [
          {
            id: 1,
            movieName: '老师好',
            movieImg: require('@/assets/images/laoshihao.jpg'),
            globalReleased: 2,
            filmReview: 9.3,
            mainActors: '于谦,汤梦佳,王广源',
            showSituation: '2019-03-22大陆上映',
            wantSee: 0
          },
          {
            id: 2,
            movieName: '亲密旅行',
            movieImg: require('@/assets/images/qinmilvx.jpg'),
            globalReleased: 1,
            filmReview: 0,
            mainActors: '沙俊伯,沙溢,胡可',
            showSituation: '2019-10-15 下周一上映',
            wantSee: 12399
          },
          {
            id: 3,
            movieName: '比悲伤更悲伤的故事',
            movieImg: require('@/assets/images/bibeishanggengbeishangdegushi.jpg'),
            globalReleased: 0,
            filmReview: 0,
            mainActors: '陈意涵,张书豪,刘以豪',
            showSituation: '2019-11-14大陆上映',
            wantSee: 1000
          },
          {
            id: 4,
            movieName: '我和我的祖国',
            movieImg: require('@/assets/images/wohewodezuguo.jpg'),
            globalReleased: 2,
            filmReview: 9.8,
            mainActors: '黄渤,张译,韩昊霖',
            showSituation: '今天228家影院放映1264场',
            wantSee: 0
          },
          {
            id: 5,
            movieName: '中国机长',
            movieImg: require('@/assets/images/zhongguojizhang.jpg'),
            globalReleased: 2,
            filmReview: 9.7,
            mainActors: '杜江',
            showSituation: '今天228家影院放映1264场',
            wantSee: 0
          }
        ],
        messageText: '已标记想看',
        boxShow: false
      }
    },
    components: {
      MovieList
    },
    methods: {
      changeWantText(text) {
        this.messageText = text;
        this.boxShow = true;
        setTimeout( () => { this.boxShow = false; }, 5000);
      }
    }
  }
</script>
<style lang="scss" scoped>
  
</style>
