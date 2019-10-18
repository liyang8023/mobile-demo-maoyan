<template>
  <div class="movieList"  @click="jumpMoiveDetail(movie.id)">
    <img :src="movie.movieImg" alt="">
    <div class="content">
      <p class="movieName">{{movie.movieName}}</p>
      <ul>
        <li v-if="movie.globalReleased && movie.filmReview === 0">暂无评分</li>
        <li v-if="movie.globalReleased && movie.filmReview !== 0">猫眼评分 
          <span class="numberStyle">{{movie.filmReview.toFixed(1)}}</span></li>
        <li v-if="!movie.globalReleased" >
          <span class="numberStyle">{{movie.wantSee}}</span> 
          想看
        </li>
      </ul>
      <p>主演:{{movie.mainActors}}</p>
      <p class="showSituation">{{movie.showSituation}}</p>
    </div>
    <div class="buyPart">
      <button v-if="movie.globalReleased === 1" class="pre-btn">预售</button>
      <button v-else-if="movie.globalReleased === 0" :class="wantText === '想看' ? 'want-btn' : 'wanted-btn'" @click.stop="wantToSee">{{wantText}}</button>
      <button v-else>购票</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'movieList',
    props: {
      movie: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        wantText: '想看'
      }
    },
    methods: {
      // 跳转详情
      jumpMoiveDetail(id) {
        this.$router.push( {
          name: 'movieDetail',
          query: {
            id: id
          }
        })
      },
      // 想看
      wantToSee() {
        if (this.wantText === '想看') {
          this.movie.wantSee ++ ;
          this.wantText = '已想看';
          this.$emit('changeWant', '已标记想看')
        } else if (this.wantText === '已想看') {
          this.movie.wantSee -- ;
          this.wantText = '想看';
          this.$emit('changeWant', '已取消想看')
        }
      }
    },
    created() {
    }
  }
</script>
<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
  .movieList {
    display: flex;
    padding: 10px 0;
    img {
      max-width: 22%;
      height: auto;
    }
    .content {
      flex: 2;
      padding-left: 15px;
      font-size: 13px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .movieName {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 8px;
      }
      p, ul {
        margin-bottom: 5px;
      }
      .showSituation {
        color: $explain-font;
      }
      .numberStyle {
        color: $main-yellow;
        font-weight: 600;
        font-size: 15px;
      }
    }
    .buyPart {
      float: 1;
      display: flex;
      align-items: center;
      button {
        background: $main-red;
        padding: 7px 15px;
        border-radius: 3px;
        color: $main-white;
        -webkit-tap-highlight-color:transparent;
      }
      .pre-btn {
        background-color: $main-blue;
      }
      .want-btn {
        background-color: $main-yellow;
      }
      .wanted-btn {
        background-color: $main-white;
        padding: 6px 7px;
        color: $explain-font;
        border: 1px solid #ddd;
        border-radius: 3px;
      }
    }
    
  }
</style>