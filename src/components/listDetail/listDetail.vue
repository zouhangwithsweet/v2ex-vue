<template>
    <transition name="slider">
        <div class="list-detail" @click.stop @touch.stop>
            <div class="detail-header border-1px-b">
                <div class="icon-wrapper" @click="back">
                    <icon name="angle-left" scale="1.5"></icon>
                </div>
            </div>
            <loading v-show="ready"></loading>
            <div class="content-wrapper" ref="content" v-show="!ready">
                <div>
                    <div class="detail-title">
                        {{detail.title}}
                    </div>
                    <div class="detail-user">
                        <img class="user-avatar" :src="detail.member ? detail.member.avatar_normal : ''">
                        <div class="user-info">
                            <div class="user-name">{{detail.member ? detail.member.username : ''}}</div>
                            <div class="user-node">
                                <div class="node-name">{{detail.node ? detail.node.title : ''}}</div>
                                <div class=user-divid>|</div>
                                <div class="user-created">{{timerline}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="detail-content border-1px-b" v-html="detail.content_rendered">
                    </div>
                    <div class="detail-reply">
                        <ul>
                            <li class="reply-item border-1px-b" v-for="(item, index) in replyList" :key="index">
                                <div class="detail-user">
                                    <img class="user-avatar" v-lazy="item.member ? item.member.avatar_large : ''">
                                    <div class="user-info">
                                        <div class="user-name">{{item.member ? item.member.username : ''}}</div>
                                        <div class="user-node">
                                            <div class="node-name">第{{index+1}}楼</div>
                                            <div class=user-divid>|</div>
                                            <div class="user-created">{{item.created | normalizeTime}}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="reply-content" v-html="item.content_rendered">
                                </div>
                                <div class="icon-heart" v-show="item.thanks > 0">
                                    <icon name="heart" scale="0.8"></icon>
                                    <span class="heart-count">{{item.thanks}}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
             </div>
        </div>
    </transition>
</template>

<script>
    import BScroll from 'better-scroll'
    import loading from '@/components/loading/loading'
    import { getListHeader, getListDetail } from '@/api'
    export default {
        created() {
            this.fetchHeader()
            this.fetchReply()
            // console.log(this.$route.params.id)
        },
        data() {
            return {
                detail: {},
                ready: false,
                replyList: [],
                page_size: 100,
                page: 1
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.content, {
                tap: true,
                click: true
            })
        },
        computed: {
            timerline() {
                let s = parseInt(`${this.detail.created}000`, 10)
                let duration = (Date.now() - s) / 1000
                if (duration < 60) {
                    return `${Math.round(Math.max(duration, 1))}秒前`
                } else if (duration > 60 && duration < 36000) {
                    return `${Math.round(duration / 60)}分钟前`
                }
                return `${Math.round(duration / 60 / 60)}小时前`
            }
        },
        methods: {
            back() {
                this.$router.go(-1)
            },
            async fetchReply() {
                let resp = await getListDetail({
                    topic_id: this.$route.params.id,
                    page_size: this.page_size,
                    page: this.page
                })
                this.replyList = resp
                this.scroll.refresh()
            },
            async fetchHeader() {
                this.ready = true
                let resp = await getListHeader({
                    id: this.$route.params.id
                })
                this.detail = Object.assign({}, resp[0])
                this.ready = false
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
            loading
        }
    }
</script>

<style lang="stylus">
    .content-wrapper
        overflow hidden
        position absolute
        width 100%
        top 88px
        bottom 88px
        padding 0 20px
    .detail-header
        height 88px
        display flex
        align-items center
        justify-content center
        width 100%
        position relative
        top 0
        background-color #fff
        color #777
        padding 0 20px
        .icon-wrapper
            position absolute
            top 50%
            left 20px
            transform translateY(-50%)
            width 80px
    .list-detail
        position fixed
        top 0
        bottom 0
        right 0
        left 0
        background #fff
        .detail-title
            font-size 36px
            color #000
            padding 20px 0
        .detail-user
            display flex
            .user-avatar
                width 96px
                height 96px
                border-radius 50%
                margin-right 10px
            .user-info
                display flex
                flex-direction column
                justify-content space-around
                padding 10px 0
                .user-name
                    color #000
                    font-size 32px
                .user-node
                    display flex
                    align-items center
                    font-size 24px
                    color #b1b1b1
        .detail-content
            padding 10px 0
            font-size 30px
            color #000
            line-height 1.5
            p
                margin-bottom 20px
            img
                max-width 100%
        .detail-reply
            padding 20px 0
            .reply-item
                position relative
                padding 20px 0
                color #000
                .reply-content
                    padding 10px 0 10px 106px
                    font-size 28px
                    line-height 1.5
                .icon-heart
                    display flex
                    align-items center
                    position absolute
                    top 20px
                    right 0
                    color red
                    .heart-count
                        display inline-block
                        margin-left 10px
                        font-size 24px
                        color #b1b1b1
    .slider-enter-active,.slider-leave-active
        transition all .3s
    .slider-enter,.slider-leave-to
        transform translate3d(100%,0,0)
    // .drop-enter-active, .drop-leave-active
    //     transition all .3s
    // .drop-enter, .slider-leave-to
    //     transform translate3d(0,100%,0)
</style>
