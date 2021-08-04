(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/content/goods/GoodsListItem"],{7406:function(t,e,n){},8025:function(t,e,n){"use strict";n.r(e);var o=n("f253"),i=n("a45a");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("bcfe");var a,c=n("f0c5"),f=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"e21c9a52",null,!1,o["a"],a);e["default"]=f.exports},a45a:function(t,e,n){"use strict";n.r(e);var o=n("f7e6"),i=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=i.a},bcfe:function(t,e,n){"use strict";var o=n("7406"),i=n.n(o);i.a},f253:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},u=[]},f7e6:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{goodsItem:{type:Object,default:function(){return{}}}},computed:{showImage:function(){return this.goodsItem.image||this.goodsItem.show.img}},methods:{imgLoad:function(){},goDetail:function(){t.navigateTo({url:"/pages/detail/detail?id="+(this.goodsItem.iid||this.goodsItem.item_id)})}}};e.default=n}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/content/goods/GoodsListItem-create-component',
    {
        'components/content/goods/GoodsListItem-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8025"))
        })
    },
    [['components/content/goods/GoodsListItem-create-component']]
]);
