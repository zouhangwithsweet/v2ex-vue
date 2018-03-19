// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import lazyload from 'vue-lazyload'

// 引入css
import './common/stylus/index.styl'
// 引入Icon图库
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

import fastclick from 'fastclick'
fastclick.attach(document.body)

import UserDetail from './components/userDetail/index'
Vue.use(UserDetail)

// 懒加载图片
Vue.use(lazyload, {
    loading: require('@/assets/logo.png')
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    render: h => h(App)
})
