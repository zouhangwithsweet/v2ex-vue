<template>
    <scroller ref="scroller" @pullingDown="pullingDown">
        <div class="v-list">
            <li @click="select(item.id)" class="v-list__item" v-for="(item, index) in dataList" :key="index">
                <div class="v-list__detail">
                    <img @tap.stop="getUser(item.member.username)" :src="item.member.avatar_large" class="v-list__img"/>
                    <div class="v-list__desc">
                        <span class="v-list__desc--name">{{item.member.username}}</span>
                        <span class="v-list__desc--time">{{item.created | normalizeTime}}</span>
                    </div>
                    <div class="v-list__node">
                        <span class="v-list__node--title">{{item.node.title}}</span>
                        <span class="v-list__node--count">
                            <img :src="chatIcon">
                            {{item.replies}}
                        </span>
                    </div>
                </div>
                <div class="v-list__content">
                    {{item.title}}
                </div>
            </li>
            <loading style="position: absolute; top: -50px"></loading>
        </div>
    </scroller>
</template>

<script>
    import scroller from '../scroll/scroll'
    import loading from '../loading/loading'
    export default {
        props: {
            dataList: {
                type: Array,
                default: []
            },
            refreshDelay: {
                type: Number,
                default: 20
            }
        },
        data() {
            return {
                list: [],
                chatIcon: require('@/assets/chat.svg'),
                isLoading: false
            }
        },
        mounted() {
            this.scroll = this.$refs.scroller.scroll
        },
        methods: {
            select(id) {
                this.$emit('select', id)
            },
            getUser(name) {
                this.$user(name)
            },
            refresh() {
                this.$refs.scroller.refresh()
            },
            pullingDown() {
                this.$emit('pullDown')
            }
        },
        filters: {
            normalizeTime(value) {
                let _time = parseInt(value + '000', 10)
                let date = new Date(_time)
                let y = date.getFullYear() + '-'
                let m = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
                let d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
                return y + m + d
            }
        },
        components: {
            scroller,
            loading
        }
    }
</script>

<style lang="stylus">
    .v-list
        width 100%
        background-color #eee
        position relative
        .v-list__item
            height 240px
            margin-bottom 8px
            padding 0 20px
            background-color #fff
            .v-list__detail
                position relative
                display flex
                align-items center
                height 120px
                padding-top 20px
                .v-list__img
                    width 110px
                    height 110px
                    border-radius 50%
                    margin-right 20px
                .v-list__desc
                    display flex
                    flex-direction column
                    justify-content space-around
                    height 100%
                    .v-list__desc--name
                        font-size 36px
                        color #101010
                    .v-list__desc--time
                        font-size 28px
                        color #b1b1b1
            .v-list__node
                position absolute
                top 20px
                right 0
                .v-list__node--title
                    display inline-block
                    padding 8px
                    font-size 24px
                    border-radius 4px
                    color #b7b7b7
                    background-color #eee
                .v-list__node--count
                    display inline-block
                    padding 8px
                    font-size 24px
                    color #b7b7b7
                    img
                        width 28px
                        height 28px
                        position relative
                        top 4px
            .v-list__content
                width 100%
                height 100px
                padding-top 20px
                line-height calc(80/64)
                font-size 28px
                color #101010
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 2
                -webkit-box-orient vertical
</style>
