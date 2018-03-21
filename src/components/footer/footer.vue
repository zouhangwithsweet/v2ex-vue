<template>
    <div class="footer border-1px">
        <div class="example"></div>
        <router-link to="/hot" tag="div" class="footer-item">
            <icon name="fire" scale="1.5"></icon>
            <span>最热</span>
        </router-link>
        <router-link to="/now" tag="div" class="footer-item">
            <icon name="clock-o" scale="1.5"></icon>
            <span>最新</span>
        </router-link>
        <router-link to="/nodes" tag="div" class="footer-item">
            <icon name="location-arrow" scale="1.5"></icon>
            <span>节点</span>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            icons: [
                'fire',
                'clock-o',
                'location-arrow'
            ]
        }
    }
}
</script>

<style lang="stylus">
    .footer
        display flex
        justify-content space-between
        align-items center
        position fixed
        height 88px
        bottom 0
        left 0
        right 0
        z-index 200
        background-color #fff
        .footer-item
            flex 1
            height 100%
            display flex
            justify-content space-around
            align-items center
            flex-direction column
            font-size 20px
            color #000
            &.router-link-active
                color #42b983
</style>
