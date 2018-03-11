<template>
    <div class="now" ref="now">
        <list-base @pullDown="refresh" :dataList="dataList" @select="listDetail">
            <div class="loading-wrapper" ref="loadWrapper">
                <loading></loading>
            </div>
        </list-base>
        <router-view></router-view>
    </div>
</template>

<script>
    import listBase from '@/components/list/list'
    import loading from '@/components/loading/loading'
    import { getNowList } from '@/api'
    export default {
        data() {
            return {
                dataList: [],
                isLoad: true
            }
        },
        mounted() {
            this.fetchList()
        },
        methods: {
            listDetail(id) {
                // console.log(id)
                this.$router.push({
                    path: `/now/${id}`
                })
            },
            refresh() {
                this.fetchList()
            },
            // 获取数据
            async fetchList() {
                this.$refs.loadWrapper.style.height = '50px'
                let resp = await getNowList()
                this.dataList = resp
                this.$refs.loadWrapper.style.height = 0
            },
            debounce(fn, delay) {
                let timer
                return function(...args) {
                    if (timer) {
                        clearTimeout(timer)
                    }
                    timer = setTimeout(() => {
                        fn.apply(this, args)
                    }, delay)
                }
            }
        },
        components: {
            listBase,
            loading
        }
    }
</script>

<style lang="stylus">
    .loading-wrapper
        height 50px
        overflow hidden
        transition all .2s
</style>
