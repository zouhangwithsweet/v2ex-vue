<template>
    <div class="main">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import footer from '@/components/footer/footer.vue'
    export default {
        name: 'App',
        components: {
            'v-footer': footer
        }
    }
</script>

<style lang="stylus">
    .v-header
        height 44px
        display flex
        justify-content center
        align-items center
        font-size 36px
        font-weight 700
        color #000
        background-color #ffffff
        z-index 99999
</style>
