<template>
  <div class="showing">
    <MovieList v-for="(item, index) in movieShowingList" :key="index" :movie='item' @changeWant="changeWantText"></MovieList>
    <MessageBox :message="messageText" v-show="boxShow"></MessageBox>
  </div>
</template>
<script>
  import MovieList from './movieList';
  import {queryShowingList} from '@/api/movies.js'
  export default {
    name: 'showing',
    data() {
      return {
        movieShowingList: [
        ],
        messageText: '已标记想看',
        boxShow: false
      }
    },
    components: {
      MovieList
    },
    methods: {
      // 想看 按钮
      changeWantText(text) {
        this.messageText = text;
        this.boxShow = true;
        setTimeout( () => { this.boxShow = false; }, 5000);
      },
      // 正在上映电影列表查询
      queryShowingList() {
        queryShowingList().then((res) => {
          if (res.data.status === 200 && res.data.data) {
            this.movieShowingList = res.data.data;
          }
        })
      }
    },
    created() {
      this.queryShowingList();
    }
  }
</script>
<style lang="scss" scoped>
  
</style>
