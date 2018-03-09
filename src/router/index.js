import Vue from 'vue'
import Router from 'vue-router'
import now from '@/components/now/now'
import hot from '@/components/hot/hot'
import listDetail from '@/components/listDetail/listDetail'

Vue.use(Router)

export default new Router({
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
        }
    ]
})
