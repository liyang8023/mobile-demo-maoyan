<template>
  <div>
    <div>
      <p>近期最受欢迎</p>
    </div>
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
