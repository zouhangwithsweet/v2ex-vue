<template>
    <div class="now" ref="now">
        <list-base @pullDown="refresh" :dataList="dataList" @select="listDetail" ref="listBase">
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
            async refresh() {
                await this.fetchList()
                this.$refs.listBase.scroll.finishPullDown()
            },
            // 获取数据
            async fetchList() {
                let resp = await getNowList()
                this.dataList = resp
                this.$refs.listBase.refresh()
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
