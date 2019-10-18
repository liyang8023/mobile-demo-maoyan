<template>
    <div class="tabBar">
      <ul class="tabList">
        <li v-for="(item, index) in tabList" :key="index" @click="changeTab(index)">
          <icon :name="index === nowTab ? item.selectedIcon : item.icon" class="iconStyle"></icon>
          <p :class="index === nowTab ? 'selectedName' : 'tabName'">{{item.name}}</p>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tabList: [
        { name: "电影", icon: "movie", selectedIcon: "selectedMovie" },
        { name: "影院", icon: "cinema", selectedIcon: "selectedCinema" },
        { name: "我的", icon: "user", selectedIcon: "selectedUser" }
      ],
      nowTab: 0
    };
  },
  methods: {
    // 切换tab
    changeTab(index) {
      this.nowTab = index;
      this.$emit("changeContent", index);
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/main.scss";
.tabBar {
  padding: 10px 0px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  background: $main-white;
  height: 35px;
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
      .selectedName {
        color: $main-red;
      }
      .tabName {
        color: $explain-font;
      }
    }
  }
}
</style>