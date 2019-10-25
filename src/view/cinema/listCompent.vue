<template>
  <div class="cinemaList">
    <div class="block">
      <h3 class="left">{{cinema.name}}</h3>
      <p class="right">
        <span>{{cinema.sPrice}}</span>起
      </p>
    </div>
    <div class="block" style="margin-bottom:12px;">
      <p class="left">{{cinema.address}}</p>
      <p class="right">{{cinema.distance}}</p>
    </div>
    <div class="label" v-if="cinema.label.length">
      <span v-for="(item, index) in cinema.label" :key="index" :class="item === '小吃' || item === '折扣卡' ? 'labelR' : 'labelB'">{{item}}</span>
    </div>
    <div class="feature" v-if="cinema.discount.length">
      <p v-for="(dis, index) in cinema.discount" :key="index">
        <span class="keySpan" :class="dis.key === '惠' ? 'disO' : (dis.key === '促' ? 'disR' : (dis.key === '券' ? 'disG' : 'disB'))">{{dis.key}}</span>
        <span class="textSpan">{{dis.text}}</span>
      </p> 
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cinema: {
      type:  Object,
      default: () => {}
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/main.scss';
  .cinemaList {
    padding: 15px 2px 10px;
    border-bottom: 1px solid $border-color;
    .block {
      display: flex;
      margin-top: 6px;
      .left {
        flex: 1;
        // margin-right: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      h3 {
        margin: 0;
        font-size: 16px;
      }
      .right {
        color: $explain-font;
        min-width: 70px;
        text-align: right;
        span {
          color: $main-red;
          font-size: 16px;
          padding-right: 5px;
        }
      }
    }
    .label {
      margin-bottom: 16px;
      span {
        margin-right: 5px;
        padding: 2px 3px;
        border-radius: 5px; 
      }
      .labelR {
        color: $main-orange;
        border: 1px solid $main-orange;
      }
      .labelB {
        color: $main-blue;
        border: 1px solid $main-blue;
      }
    }
    .feature {
      p {
        margin: 6px 0;
      }
      .textSpan {
        color: $explain-font;
      }
      .keySpan {
        padding: 1px 2px;
        border-radius: 2px;
        color: $main-white;
        margin-right: 10px;
      }
      .disO {
        background-color: $main-orange;
      }
      .disR {
        background-color: $main-red;
      }
      .disG {
        background-color: $main-green;
      }
      .disB {
        background-color: $main-blue;
      }
    }
  }
</style>