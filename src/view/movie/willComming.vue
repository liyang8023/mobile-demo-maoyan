<template>
  <div>
    <h3>即将上映！</h3>
    <MessageBox :message="messageText" v-show="boxShow"></MessageBox>
  </div>
</template>
<script>
export default{
  name: 'willComming',
  data () {
    return {
      messageText: '已取消想看',
      boxShow: false
    }
  }
}
</script>
