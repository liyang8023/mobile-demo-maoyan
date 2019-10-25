<template>
  <div class="cinemaIndex">
    <!-- <div>11111111111111111111111</div> -->
    <CinemaList v-for="(cinema, index) in cinemaList" :key="index" :cinema='cinema'></CinemaList>
  </div>
</template>
<script>
import CinemaList from "./listCompent";
export default {
  components: {
    CinemaList
  },
  data() {
    return {
      cinemaList: [{
        name: '魔影国际影城（达美免费停车店）',
        sPrice: '39.5元',
        distance: '100m',
        address: '朝阳区青年路7号院100幢-1层',
        label: [],
        discount: [
          {key: '惠', text: '双子杀手等10部影片特惠'},
          {key: '促', text: '影院特惠促销'},
          {key: '券', text: '购片得红包'}
        ]
      }, {
        name: '嘉华国际影城（活力东方店）',
        sPrice: '39元',
        distance: '600m',
        address: '朝阳区姚家园路甲1号活力东方奥特莱斯购物中心四楼 朝阳区姚家园路甲1号活力东方奥特莱斯购物中心四楼 ',
        label: ['小吃','折扣卡', '4k厅', '60帧厅', '巨幕厅'],
        discount: [
          {key: '惠', text: '深睡魔咒2等6部影片特惠'}
        ]
      }, {
        name: '金逸影城（朝阳大悦城IMAX店）',
        sPrice: '55元',
        distance: '1.4km',
        address: '朝阳区朝阳北路101号朝阳大悦城商场8层',
        label: ['小吃','折扣卡', 'IMAX厅', '杜比全景声厅', '60帧厅', 'CINITY厅'],
        discount: [
          {key: '惠', text: '深睡魔咒2等7部影片特惠'},
          {key: '促', text: '观影套餐限量特惠'},
          {key: '卡', text: '开卡特惠，首单2张最高立减6元'}
        ]
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/main.scss';
  .cinemaIndex {
    padding: 0 10px;
  }
</style>