<template>
    <div class="node">
        <div class="node-list">
            <div class="node-item">
                <div class="node-name">{{tech.name}}</div>
                <ul class="node-childList">
                    <li @click="go(item)" class="child-item" v-for="(item, index) in tech.childrenList" :key="index">
                        {{item.desc}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="node-detail" v-show="nodeListShow">
            <list-base @pullDown="refresh" :dataList="dataList" @select="listDetail">
                <div class="loading-wrapper" ref="loadWrapper">
                    <loading></loading>
                </div>
            </list-base>
        </div>
    </div>
</template>

<script>
    import listBase from '@/components/list/list'
    import loading from '@/components/loading/loading'
    import { getListHeader } from 'api'
    export default {
        data() {
            return {
                tech: {
                    name: '技术',
                    childrenList: [
                        {programmer: '程序员',
                            name: 'programmer',
                            desc: '程序员'
                        },
                        {Python: 'Python',
                            name: 'Python',
                            desc: 'Python'
                        },
                        {iDev: 'iDev',
                            name: 'iDev',
                            desc: 'iDev'
                        },
                        {Android: 'Android',
                            name: 'Android',
                            desc: 'Android'
                        },
                        {Linux: 'Linux',
                            name: 'Linux',
                            desc: 'Linux'
                        },
                        {'node.js': 'node.js',
                            name: 'node.js',
                            desc: 'node.js'
                        },
                        { cloud: '云计算',
                            name: 'cloud',
                            desc: '云计算'
                        },
                        {
                            name: 'bb',
                            desc: '宽带症候群'
                        }
                    ]
                },
                name: '',
                nodeListShow: false,
                dataList: []
            }
        },
        methods: {
            refresh() {
                this.fetchNodeDetail(this.name)
            },
            go(item) {
                this.name = item.name
                this.fetchNodeDetail(item.name)
            },
            async fetchNodeDetail(name) {
                this.nodeListShow = false
                this.$refs.loadWrapper.style.height = '50px'
                let resp = await getListHeader({
                    node_name: name
                })
                this.dataList = resp
                this.$refs.loadWrapper.style.height = 0
                this.nodeListShow = true
            },
            listDetail(id) {
                console.log(id)
            }
        },
        components: {
            listBase,
            loading
        }
    }
</script>

<style lang="stylus">
.node-list
    padding 5px 20px
    .node-name
        width 100%
        height 100px
        display flex
        align-items center
        padding  10px 20px 0
        background-color #eee
        font-size 32px
        color #000
    .node-childList
        display flex
        flex-wrap wrap
        padding 20px
        color #b1b1b1
        font-size 28px
        .child-item
            padding 10px
            margin-right 10px
            margin-bottom 10px
            background-color #eee
            border-radius 4px
.node-detail
    position absolute
    overflow hidden
    width 100%
    top 88px
    bottom 88px
    background-color #fff
</style>
