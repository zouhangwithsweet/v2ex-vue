webpackJsonp([1],{"J7/v":function(t,e){},UXSY:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("Xxa5"),n=s.n(r),a=s("exGp"),i=s.n(a),o=s("Z7ab"),c=s("qqiS"),l=s("gyMJ"),u={data:function(){return{dataList:[],isLoad:!0}},mounted:function(){this.fetchList()},methods:{listDetail:function(t){this.$router.push({path:"/now/"+t})},refresh:function(){this.fetchList()},fetchList:function(){var t=this;return i()(n.a.mark(function e(){var s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.$refs.loadWrapper.style.height="50px",e.next=3,Object(l.d)();case 3:s=e.sent,t.dataList=s,t.$refs.listBase.scroll.refresh(),t.$refs.loadWrapper.style.height=0;case 7:case"end":return e.stop()}},e,t)}))()},debounce:function(t,e){var s=void 0;return function(){for(var r=this,n=arguments.length,a=Array(n),i=0;i<n;i++)a[i]=arguments[i];s&&clearTimeout(s),s=setTimeout(function(){t.apply(r,a)},e)}}},components:{listBase:o.a,loading:c.a}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"now",staticClass:"now"},[e("list-base",{ref:"listBase",attrs:{dataList:this.dataList},on:{pullDown:this.refresh,select:this.listDetail}},[e("div",{ref:"loadWrapper",staticClass:"loading-wrapper"},[e("loading")],1)]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var h=s("VU/8")(u,f,!1,function(t){s("J7/v")},null,null);e.default=h.exports}});
//# sourceMappingURL=1.61a3b8c2636b967fa0fd.js.map