(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"578b":function(t,o,e){"use strict";var n=e("f682"),i=e.n(n);i.a},"9ff2":function(t,o,e){"use strict";e.d(o,"b",(function(){return i})),e.d(o,"c",(function(){return s})),e.d(o,"a",(function(){return n}));var n={uniGoodsNav:function(){return e.e("uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav").then(e.bind(null,"2ce9"))},uniPopup:function(){return e.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(e.bind(null,"5414"))}},i=function(){var t=this,o=t.$createElement;t._self._c},s=[]},a55a:function(t,o,e){"use strict";e.r(o);var n=e("f099"),i=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(o,t,(function(){return n[t]}))}(s);o["default"]=i.a},b460:function(t,o,e){"use strict";e.r(o);var n=e("9ff2"),i=e("a55a");for(var s in i)"default"!==s&&function(t){e.d(o,t,(function(){return i[t]}))}(s);e("578b");var r,c=e("f0c5"),a=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"5575048f",null,!1,n["a"],r);o["default"]=a.exports},eb18:function(t,o,e){"use strict";(function(t){e("14e4");n(e("66fd"));var o=n(e("b460"));function n(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,e("543d")["createPage"])},f099:function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=r(e("a34a")),i=e("2f62"),s=e("d963");function r(t){return t&&t.__esModule?t:{default:t}}function c(t,o,e,n,i,s,r){try{var c=t[s](r),a=c.value}catch(l){return void e(l)}c.done?o(a):Promise.resolve(a).then(n,i)}function a(t){return function(){var o=this,e=arguments;return new Promise((function(n,i){var s=t.apply(o,e);function r(t){c(s,n,i,r,a,"next",t)}function a(t){c(s,n,i,r,a,"throw",t)}r(void 0)}))}}function l(t,o){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),e.push.apply(e,n)}return e}function u(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?l(Object(e),!0).forEach((function(o){d(t,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))}))}return t}function d(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}var f=function(){e.e("pages/detail/childCom/detailNavBar").then(function(){return resolve(e("c2ba"))}.bind(null,e)).catch(e.oe)},p=function(){e.e("pages/detail/childCom/detailShopInfo").then(function(){return resolve(e("ad2d"))}.bind(null,e)).catch(e.oe)},h=function(){e.e("pages/detail/childCom/datailGoodInfo").then(function(){return resolve(e("46ed"))}.bind(null,e)).catch(e.oe)},m=function(){e.e("pages/detail/childCom/detailParams").then(function(){return resolve(e("ef0b"))}.bind(null,e)).catch(e.oe)},g=function(){e.e("pages/detail/childCom/detailComment").then(function(){return resolve(e("4ca0"))}.bind(null,e)).catch(e.oe)},v=function(){e.e("pages/detail/childCom/detailPopView").then(function(){return resolve(e("7185"))}.bind(null,e)).catch(e.oe)},b=function(){e.e("components/common/uni-goods-nav/components/uni-goods-nav/uni-goods-nav").then(function(){return resolve(e("3f63"))}.bind(null,e)).catch(e.oe)},I=function(){e.e("components/content/goods/GoodList").then(function(){return resolve(e("f9b2"))}.bind(null,e)).catch(e.oe)},C=function(){e.e("components/content/backtop/BackTop").then(function(){return resolve(e("4ce4"))}.bind(null,e)).catch(e.oe)},w={data:function(){return{goodID:"",topImages:[],itemInfo:{},goodInfo:{},shopInfo:{},detailInfo:{},skuInfo:{},skuColorInfo:[],skuSizeInfo:[],params:{},rate:{},recommend:[],showBackTop:!1,showNavBar:!1,positionYs:[],isCart:!0,isCollection:!1,options:[{icon:"heart",text:"收藏"},{icon:"shop",text:"店铺"},{icon:"cart",text:"购物车",info:0}],buttonGroup:[{text:"加入购物车",backgroundColor:"#ffe817",color:"#333"},{text:"立即购买",backgroundColor:"#f69",color:"#fff"}]}},components:{detailNavBar:f,detailShopInfo:p,datailGoodInfo:h,detailParams:m,detailComment:g,uniGoodsNav:b,GoodList:I,BackTop:C,detailPopView:v},computed:u({},(0,i.mapGetters)(["collGoodList"])),onPageScroll:function(t){this.showBackTop=t.scrollTop>1e3,this.showNavBar=t.scrollTop>70},onLoad:function(t){this.goodID=t.id,this.getDetail(t.id),this.getRecommend()},onReady:function(){var o=this;t.setNavigationBarTitle({title:"详情页"}),this.getPosition=(0,s.debounce)((function(){o.positionYs=[],o.positionYs.push(0),o.getTop("#detail-params"),o.getTop("#rate"),o.getTop(".detail-end")})),this.isHasColl()},methods:{getDetail:function(t){var o=this;return a(n.default.mark((function e(){var i;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.$myRequest({url:"/detail",data:{iid:t}});case 2:i=e.sent,o.itemInfo=i.data.result.itemInfo,o.goodInfo=i.data.result.columns,o.shopInfo=i.data.result.shopInfo,o.detailInfo=i.data.result.detailInfo,o.params=i.data.result.itemParams,o.rate=i.data.result.rate,o.skuInfo=i.data.result.skuInfo,o.skuSizeInfo=i.data.result.skuInfo.props[1].list,o.skuColorInfo=i.data.result.skuInfo.props[0].list;case 12:case"end":return e.stop()}}),e)})))()},getRecommend:function(){var t=this;return a(n.default.mark((function o(){var e;return n.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,t.$myRequest({url:"/recommend"});case 2:e=o.sent,t.recommend=e.data.data.list;case 4:case"end":return o.stop()}}),o)})))()},backTop:function(){t.pageScrollTo({scrollTop:0})},leftClick:function(o){2==o.index?t.switchTab({url:"../cart/cart"}):0==o.index&&(this.isCollection?(this.isCollection=!1,this.collectIt()):(this.isCollection=!0,this.collectIt()))},rightClick:function(t){0==t.index?(this.$refs.popup.open(),this.isCart=!0):1==t.index&&(this.$refs.popup.open(),this.isCart=!1)},navClick:function(o){console.log(this.positionYs),t.pageScrollTo({scrollTop:this.positionYs[o]-44})},getTop:function(o){var e=this;t.createSelectorQuery().in(this).select(o).boundingClientRect().exec((function(t){e.positionYs.push(t[0].top)}))},imgLoad:function(){this.getPosition(),console.log("图片加载完成")},close:function(){this.$refs.popup.close()},addCart:function(o){var e={};e.id=this.goodID,e.img=o[0].img,e.size=o[0].size,e.style=o[0].style,e.price=o[0].nowprice,e.title=this.itemInfo.title,e.count=o[1],this.$store.dispatch("addToCart",e).then((function(o){t.showToast({title:o,icon:"none"})})),this.close(),this.options[2].info=this.$store.getters.cartListCount},collectIt:function(){this.isCollection?(this.options[0].icon="heart-filled",this.options[0].bgColor="red",this.saveInColl()):(this.options[0].icon="heart",this.options[0].bgColor="",this.delCol())},saveInColl:function(){var o={};o.id=this.goodID,o.title=this.itemInfo.title,o.price=this.itemInfo.lowNowPrice,this.itemInfo.topImages&&(o.img=this.itemInfo.topImages[0]),o.isSelect=!1,this.$store.dispatch("collectGood",o).then((function(o){t.showToast({icon:"none",title:"添加收藏夹成功",duration:1e3})}))},delCol:function(){var o=this;this.collGoodList.find((function(t){return t.id==o.goodID})).isSelect=!0,this.$store.dispatch("delCollect").then((function(o){t.showToast({icon:"none",title:o,duration:1e3})}))},isHasColl:function(){var t=this,o=this.collGoodList.find((function(o){return o.id==t.goodID}));o&&(this.isCollection=!0,this.options[0].icon="heart-filled",this.options[0].bgColor="red")}}};o.default=w}).call(this,e("543d")["default"])},f682:function(t,o,e){}},[["eb18","common/runtime","common/vendor"]]]);