<template>
    <div class="footer">
        <router-link to="/hot" tag="div" class="footer-item">
            <icon name="fire" scale="1.5"></icon>
        </router-link>
        <router-link to="/now" tag="div" class="footer-item">
            <icon name="clock-o" scale="1.5"></icon>
        </router-link>
        <router-link to="/nodes" tag="div" class="footer-item">
            <icon name="location-arrow" scale="1.5"></icon>
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
        border-top 1px solid #eee
        bottom 0
        left 0
        right 0
        z-index 200
        background-color #fff
        .footer-item
            flex 1
            height 100%
            display flex
            justify-content center
            align-items center
            color #000
            &.router-link-active
                color #42b983
</style>
