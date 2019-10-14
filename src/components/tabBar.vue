<template>
  <div class="tabBar">
    <ul class="tabList">
      <li v-for="(item, index) in tabList" :key="index" @click="changeTab(index)">
        <icon :name="index === nowTab ? item.selectedIcon : item.icon" class="iconStyle"></icon>
        <p class="tabName">{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabList: [
        {name: '电影', icon: 'movie', selectedIcon: 'selectedMovie'},
        {name: '影院', icon: 'cinema', selectedIcon: 'selectedCinema'},
        {name: '我的', icon: 'user', selectedIcon: 'selectedUser'}
      ],
      nowTab: 0
    }
  },
  methods: {
    // 切换tab
    changeTab(index) {
      this.nowTab = index;
      this.$emit('changeContent' , index);
    }
  }
}
</script>
<style lang="scss">
  // @import "@/assets/scss/main.scss";
  .tabBar {
    padding: 10px 20px;
    .tabList {
      display: flex;
      li {
        flex: 1;
        text-align: center;
        .iconStyle {
          width: 22px;
          height: 22px;
          margin-bottom: 2px;
        }
        .tabName {
          font-size: 10px;
          // color: $main-red;
        }
      }
    }
  }
</style>