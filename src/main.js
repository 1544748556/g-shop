/* 
    整个项目的入口文件
 */

// 引入vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'

// 引入混合
// import mixin from '@/mixin'
//  使用混合
// Vue.mixin(mixin)

// 引入插件
// import plugins from '@/plugins'
// 应用插件
// Vue.use(plugins)

// 关闭vue的生产提示
Vue.config.productionTip = false

// 创建vue实力实例对象--vm  id为app
new Vue({
  render: h => h(App),
}).$mount('#app')