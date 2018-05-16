<template>
    <transition name="open">
        <div class="user-wrapper" v-show="show">
            <div class="user-close" @click="close">
                <icon name="times" scale="1.5"></icon>
            </div>
            <div class="user-inner" v-show="ready">
                <img :src="avatar" class="user-avatar">
                <div class="user-time">{{name}}</div>
                <div class="user-time">加入时间：{{createTime | normalizeTime}}</div>
                <div class="user-time">url: {{url}}</div>
                <ul class="user-info">
                    <li class="info-tei">
                        <span class="info-name"></span>
                        <span class="info-desc"></span>
                    </li>
                </ul>
            </div>
        </div>
    </transition>
</template>

<script>
    import { getUserInfo } from 'api'
    export default {
        name: 'userDetail',
        data() {
            return {
                avatar: '',
                name: '',
                show: false,
                closed: false,
                onClose: null,
                url: '',
                createTime: '',
                ready: false
            }
        },
        created() {
            this.fetchUserInfo()
        },
        watch: {
            closed: {
                deep: true,
                handler(newVal) {
                    if (newVal) {
                        this.show = false;
                        this.$el.addEventListener('transitionend', this.destroyElement);
                    }
                }
            }
        },
        methods: {
            close() {
                this.closed = true
                if (typeof this.onClose === 'function') {
                    this.onClose(this);
                }
            },
            destroyElement() {
                this.$el.removeEventListener('transitionend', this.destroyElement);
                this.$destroy(true);
                this.$el.parentNode.removeChild(this.$el);
            },
            async fetchUserInfo() {
                this.ready = false
                let resp = await getUserInfo({
                    username: this.name
                })
                this.avatar = resp.avatar_large
                this.createTime = resp.created
                this.url = resp.url
                this.ready = true
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
    .user-wrapper
        position fixed
        top 0
        left 0
        bottom 0
        right 0
        z-index 9999
        background-color #fff
        .user-close
            position absolute
            width 40px
            height 40px
            top 20px
            right 20px
            color #42b983
        .user-inner
            display flex
            width 100%
            padding-top 140px
            flex-direction column
            justify-content center
            align-items center
            .user-avatar
                border-radius 50%
            .user-time
                margin-top 40px
                color #000
                font-size 30px
    .open-enter-active,.open-leave-active
        transition all .3s
    .open-enter,.open-leave-to
        opacity 0
</style>

