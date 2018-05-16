import Vue from 'vue'
import Router from 'vue-router'
const now = () => import('components/now/now')
const hot = () => import('components/hot/hot')
const listDetail = () => import('components/listDetail/listDetail')
const nodes = () => import('components/nodes/nodeList')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/now'
        },
        {
            path: '/now',
            name: '最新',
            component: now,
            children: [
                {
                    path: ':id',
                    component: listDetail
                }
            ]
        },
        {
            path: '/hot',
            name: '最热',
            component: hot,
            children: [
                {
                    path: ':id',
                    component: listDetail
                }
            ]
        },
        {
            path: '/nodes',
            name: '节点',
            component: nodes,
            children: [
                {
                    path: ':id',
                    component: listDetail
                }
            ]
        }
    ]
})
