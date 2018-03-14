# v2ex-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
#### 项目已经部署在[heroku.com](https://v2ex-vue.herokuapp.com/)
* 主要技术为 vue全家桶，stylus,v-lazy,better-scroll；实现下拉刷新，懒加载功能
* 后端为express，实现了express转发接口，跨域，实现接口自定义。
- 分页（未实现，目前的思路为，在server.js通过切割数组来模拟）
- 上拉加载（未实现）
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
