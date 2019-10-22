<template>
  <div class="cinemaIndex">
    <!-- <div>11111111111111111111111</div> -->
    <CinemaList v-for="(cinema, index) in cinemaList" :key="index" :cinema='cinema'></CinemaList>
  </div>
</template>
<script>
import CinemaList from "./cinemaList";
export default {
  components: {
    CinemaList
  },
  data() {
    return {
      cinemaList: [{
        name: '魔影国际影城（达美免费停车店）',
        sPrice: '39.90',
        distance: '100m',
        address: '朝阳区青年路7号院100幢-1层',
        label: '',
        discount: ''
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