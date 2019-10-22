<template>
  <div class="cinemaList">
    <div class="block">
      <h3 class="left">{{cinema.name}}</h3>
      <p class="right">
        <span>{{cinema.sPrice}}</span>起
      </p>
    </div>
    <div class="block">
      <p class="left">{{cinema.address}}</p>
      <p class="right">{{cinema.distance}}</p>
    </div>
    <div class="feature">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cinema: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/main.scss';
  .cinemaList {
    .block {
      display: flex;
      margin-top: 6px;
      .left {
        flex: 1;
      }
      h3 {
        margin: 0;
        font-size: 16px;
      }
      .right {
        color: $explain-font;
        span {
          color: $main-red;
          font-size: 16px;
          padding-right: 5px;
        }
      }
    }
    
  }
</style>