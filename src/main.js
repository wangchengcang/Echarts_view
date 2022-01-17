// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import './styles/common.css'
import './styles/overall.css' // 全局样式
import 'element-ui/lib/theme-chalk/index.css'
import { borderBox8 } from '@jiaminghi/data-view'
Vue.config.productionTip = false

Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
Vue.use(borderBox8)
Vue.use(ElementUI);
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})