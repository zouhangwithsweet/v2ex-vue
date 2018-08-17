<template>
  <div class="scroll-wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
/* eslint-disable*/
import BScroll from 'better-scroll';
export default {
    name: 'scroller',
    props: {
        probeType: {
            type: Number,
            default: 1
        },
        click: {
            type: Boolean,
            default: true
        },
        data: {
            type: Array,
            default: null
        },
        listenScroll: {
            type: Boolean,
            default: false
        },
        pullup: {
            type: Boolean,
            default: false
        },
        beforeScroll: {
            type: Boolean,
            default: false
        },
        pullDownRefresh: {
            type: Boolean,
            default: true
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        },
        touchEnd: {
            type: Boolean,
            default: false
        },
        refreshDelay: {
            type: Number,
            default: 20
        }
    },
    watch: {
        data() {
            setTimeout(() => {
                this.refresh();
            }, this.refreshDelay);
        }
    },
    mounted() {
        this._initBscroll();
    },
    methods: {
        _initBscroll() {
            if (!this.$refs.wrapper) {
                return;
            }
            const options = {
                probeType: this.probeType,
                click: this.click
            };
            if (this.pullDownRefresh) {
                Object.assign(options, {
                    pullDownRefresh: {
                        threshold: 90, // 当下拉到超过顶部 90px 时，触发 pullingDown 事件
                        stop: 50 // 刷新数据的过程中，回弹停留在距离顶部还有 50px 的位置
                    }
                });
            }
            if (this.pullUpLoad) {
                Object.assign(options, {
                    pullUpLoad: {
                        threshold: -20 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
                    }
                });
            }

            this.scroll = new BScroll(this.$refs.wrapper, options);

            // 下拉刷新
            if (this.pullDownRefresh) {
                this.scroll.on('pullingDown', () => {
                    // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
                    this.$emit('pullingDown');
                });
            }
            if (this.pullUpLoad) {
                // 上拉加载
                this.scroll.on('pullingUp', () => {
                    this.$emit('pullingUp');
                });
            }
            // touchEnd
            if (this.touchEnd) {
                this.scroll.on('touchEnd', pos => {
                    this.$emit('touchEnd');
                    // if (pos.y > 50) {
                    //   this.$emit('touchEnd')
                    // }
                });
            }
            if (this.listenScroll) {
                let me = this;
                this.scroll.on('scroll', pos => {
                    me.$emit('scroll', pos);
                });
            }
            if (this.pullup) {
                this.scroll.on('scrollEnd', () => {
                    if (this.scroll.y <= this.scroll.maxScrollY + 50) {
                        this.$emit('scrollToEnd');
                    }
                });
            }
            if (this.beforeScroll) {
                this.scroll.on('beforeScrollStart', () => {
                    this.$emit('beforeScroll');
                });
            }
        },
        enable() {
            this.scroll && this.scroll.enable();
        },
        disable() {
            this.scroll && this.scroll.disable();
        },
        refresh() {
            this.scroll && this.scroll.refresh();
        },
        scrollTo() {
            this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
        },
        scrollToElement() {
            this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
        }
    }
};
</script>

<style lang="stylus">
.scroll-wrapper {
  position: fixed;
  top: 0;
  bottom: 88px;
  left: 0;
  right: 0;
}
</style>
