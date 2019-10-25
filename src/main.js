// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/**
 * 其实就是：import router from './router/index.js'
 * 在使用webpack项目中，如果导入index.js，则可以省略
 * 这里是相当于导入了一个路由
 */

import MessageBox from './components/messageBox.vue'
import Icon from 'vue2-svg-icon/Icon.vue'

Vue.config.productionTip = false
Vue.component('MessageBox', MessageBox)
Vue.component('icon', Icon)

require('./mock')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
