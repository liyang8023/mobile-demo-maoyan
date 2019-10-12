<template>
  <div class="indexPage">
    <div class="indexTitle">猫眼电影</div>
    <ul class="tabStyle">
      <li :class="activeNow === '0' ? 'active' : '' "  @click="activeNow = '0'">正在热映</li>
      <li :class="activeNow === '1' ? 'active' : '' "  @click="activeNow = '1'">即将上映</li>
    </ul>
    <div style="padding:10px 20px; ">
      <Showing v-show="activeNow === '0'"></Showing>
      <WillComming v-show="activeNow === '1'"></WillComming>
    </div>
  </div>
</template>
<script>
import WillComming from './willComming'
import Showing from './showing'
export default {
  name: 'index',
  components: {
    WillComming,
    Showing
  },
  data () {
    return {
      activeNow: '0'
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" rel='stylesheet/scss'>
@import '@/assets/scss/main.scss';
  .indexPage {
    .indexTitle {
      height: 50px;
      line-height: 50px;
      background-color: $main-red;
      text-align: center;
      font-size: 18px;
      color: $main-white;
    }
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
