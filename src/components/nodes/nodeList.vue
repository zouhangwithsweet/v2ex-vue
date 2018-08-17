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
            <div class="node-item">
                <div class="node-name">{{creative.name}}</div>
                <ul class="node-childList">
                    <li @click="go(item)" class="child-item" v-for="(item, index) in creative.childrenList" :key="index">
                        {{item.desc}}
                    </li>
                </ul>
            </div>
            <div class="node-item">
                <div class="node-name">{{play.name}}</div>
                <ul class="node-childList">
                    <li @click="go(item)" class="child-item" v-for="(item, index) in play.childrenList" :key="index">
                        {{item.desc}}
                    </li>
                </ul>
            </div>
            <div class="node-item">
                <div class="node-name">{{work.name}}</div>
                <ul class="node-childList">
                    <li @click="go(item)" class="child-item" v-for="(item, index) in work.childrenList" :key="index">
                        {{item.desc}}
                    </li>
                </ul>
            </div>
        </div>
        <transition name="fade">
            <div class="node-detail" v-show="nodeListShow">
                <div class="v-header">
                    <div class="icon-wrapper" @click="back">
                        <icon name="angle-left" scale="1.5"></icon>
                    </div>
                    v2er
                </div>
                <list-base ref="listBase" @pullDown="refresh" :dataList="dataList" @select="listDetail">
                </list-base>
                <router-view></router-view>
            </div>
        </transition>
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
                            name: 'nodejs',
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
                creative: {
                    name: '创意',
                    childrenList: [
                        {
                            desc: '分享创造',
                            name: 'create'
                        },
                        {
                            desc: '设计',
                            name: 'design'
                        },
                        {
                            desc: '奇思妙想',
                            name: 'ideas'
                        }
                    ]
                },
                play: {
                    name: '好玩',
                    childrenList: [
                        {
                            desc: '分享发现',
                            name: 'share'
                        },
                        {
                            desc: '游戏',
                            name: 'games'
                        },
                        {
                            desc: '游戏',
                            name: 'games'
                        },
                        {
                            desc: '电影',
                            name: 'movie'
                        },
                        {
                            desc: '音乐',
                            name: 'music'
                        }
                    ]
                },
                work: {
                    name: '酷工作',
                    childrenList: [
                        {
                            desc: '工作',
                            name: 'jobs'
                        },
                        {
                            desc: '求职',
                            name: 'cv'
                        },
                        {
                            desc: '职场话题',
                            name: 'career'
                        }
                    ]
                },
                name: '',
                nodeListShow: false,
                dataList: []
            }
        },
        methods: {
            back() {
                this.nodeListShow = false
            },
            async refresh() {
                await this.fetchNodeDetail(this.name)
                this.$refs.listBase.scroll.finishPullDown()
            },
            go(item) {
                this.name = item.name
                this.fetchNodeDetail(item.name)
                this.nodeListShow = true
            },
            async fetchNodeDetail(name) {
                this.dataList = []
                let resp = await getListHeader({
                    node_name: name
                })
                this.dataList = resp
                this.$refs.listBase.refresh()
            },
            listDetail(id) {
                this.$router.push({
                    path: `/nodes/${id}`
                })
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
            margin-right 20px
            margin-bottom 20px
            background-color #eee
            border-radius 4px
.node-detail
    position absolute
    overflow hidden
    width 100%
    top 0
    bottom 0
    background-color #fff
    .v-list
        top 44px
        bottom 88px
    .loading-wrapper
        overflow hidden
    .v-header
        position relative
        .icon-wrapper
            position absolute
            top 50%
            left 20px
            transform translateY(-50%)
            width 80px
.fade-enter-active,.fade-leave-active
    transition all .3s
.fade-enter,.fade-leave-to
    opacity 0
</style>
