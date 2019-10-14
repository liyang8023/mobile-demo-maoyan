<template>
  <div class="messageBox" >
    <icon name="finish"></icon>
    <p>{{message}}</p>
  </div>
</template>
<script>
  export default {
    name: 'messageBox',
    props: {
      message: {
        type: String,
        default: () => ''
      }
    }
  }
</script>
<style lang="scss">
  @import '@/assets/scss/main.scss';
    .messageBox {
      font-size: 14px;
      padding: 0 12px 10px ;
      text-align: center;
      position: absolute;
      top: 42%;
      left: 40%;
      z-index: 100000;
      border: 1px solid $explain-font;
      background-color: #333;
      opacity: 0.8;
      color: $main-white;
      border-radius: 3px;
    }
</style>
