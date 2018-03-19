<template>
    <div class="v-list" ref="wrapper">
        <ul>
            <slot></slot>
            <li @tap="select(item.id)" class="v-list__item" v-for="(item, index) in dataList" :key="index">
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
        </ul>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        props: {
            dataList: {
                type: Array,
                default: []
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
            let wrapper = this.$refs.wrapper
            this.scroll = new BScroll(wrapper, {
                tap: true
            })
            this.scroll.on('touchEnd', pos => {
                if (pos.y > 50) {
                    this.$emit('pullDown')
                }
            })
        },
        methods: {
            select(id) {
                this.$emit('select', id)
            },
            getUser(name) {
                this.$user(name)
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
        }
    }
</script>

<style lang="stylus">
    .v-list
        position: absolute
        width 100%
        top 88px
        bottom 88px
        overflow: hidden
        background-color #eee
        .v-list__item
            height 240px
            margin-bottom 8px
            margin-top 8px
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
                        color #000
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
                font-size 32px
                color #000
                font-weight 500
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 2
                -webkit-box-orient vertical
</style>
