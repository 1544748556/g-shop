 export default {
     install(Vue) {
         // 全局过滤器

         //  定义全局指令

         // 定义混入
         Vue.mixin({
             data() {
                 return {
                     x: 123,
                     y: 125
                 }
             },
             methods: {
                 showName() {
                     alert(this.name)
                 }
             },
             mounted() {
                 alert("欢迎回家");
             }
         })
         //  给Vue原型上添加方法
     }
 }