<template>
  <div class="pageTitle">
    <div v-if="backShow" @click="$router.back()">
      <icon name="back" class="svg-icon" ></icon>
    </div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      backShow: {
        type: Boolean
      }
    }
  }
</script>
<style lang="scss">
  @import '@/assets/scss/main.scss';
  .pageTitle {
    height: 50px;
    line-height: 50px;
    background-color: $main-red;
    text-align: center;
    font-size: 18px;
    color: $main-white;
    position: relative;
    .svg-icon {
      position: absolute;
      left: 2%;
      top: 27%;
      width: 24px;
      height: 24px;
    }
  }
</style>