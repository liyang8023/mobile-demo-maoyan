<template>
  <div class="showing">
    <MovieList v-for="(item, index) in movieShowingList" :key="index" :movie='item'></MovieList>
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
            movieName: '老师好',
            movieImg: require('@/assets/images/laoshihao.jpg'),
            globalReleased: true,
            filmReview: 9.3,
            mainActors: '于谦,汤梦佳,王广源',
            showSituation: '2019-03-22大陆上映',
            wantSee: 0
          },
          {
            movieName: '亲密旅行',
            movieImg: require('@/assets/images/qinmilvx.jpg'),
            globalReleased: false,
            filmReview: 0,
            mainActors: '沙俊伯,沙溢,胡可',
            showSituation: '2019-10-15 下周一上映',
            wantSee: 12399
          },
          {
            movieName: '比悲伤更悲伤的故事',
            movieImg: require('../assets/images/bibeishanggengbeishangdegushi.jpg'),
            globalReleased: true,
            filmReview: 0,
            mainActors: '陈意涵,张书豪,刘以豪',
            showSituation: '2019-03-14大陆上映',
            wantSee: 0
          },
          {
            movieName: '我和我的祖国',
            movieImg: require('@/assets/images/wohewodezuguo.jpg'),
            globalReleased: true,
            filmReview: 9.7,
            mainActors: '黄渤,张译,韩昊霖',
            showSituation: '今天228家影院放映1264场',
            wantSee: 0
          }
        ]
      }
    },
    components: {
      MovieList
    },
    methods: {
      jump() {
        this.$router.push( {
          name: 'movieDetail'
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  
</style>
