<template>
  <div class="movieIndex">
    <ul class="tabStyle">
      <li :class="activeNow === '0' ? 'active' : '' "  @click="activeNow = '0'">正在热映</li>
      <li :class="activeNow === '1' ? 'active' : '' "  @click="activeNow = '1'">即将上映</li>
    </ul>
    <div style="padding:10px 0px; ">
      <Showing v-show="activeNow === '0'"></Showing>
      <WillComming v-show="activeNow === '1'"></WillComming>
    </div>
  </div>
</template>
<script>
import WillComming from '@/view/movie/willComming'
import Showing from '@/view/movie/showing'
export default {
  components: {
    WillComming,
    Showing
  },
  data() {
    return {
      activeNow: '0'
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/main.scss';
  .movieIndex {
    .tabStyle {
      display: flex;
      flex-direction: row;
      li {
        flex: 1;
        text-align: center;
        padding: 12px 0;
        margin: 0 45px;
        font-size: 16px;
      }
    }
    .active {
      border-bottom: 2px solid $main-red;
      color: $main-red;
    }
  }
</style>