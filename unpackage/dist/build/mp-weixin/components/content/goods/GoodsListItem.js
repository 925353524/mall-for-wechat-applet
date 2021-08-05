(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/content/goods/GoodsListItem"],{1683:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{goodsItem:{type:Object,default:function(){return{}}}},computed:{showImage:function(){return this.goodsItem.image||this.goodsItem.show.img}},methods:{imgLoad:function(){},goDetail:function(){t.navigateTo({url:"/pages/detail/detail?id="+(this.goodsItem.iid||this.goodsItem.item_id)})}}};n.default=e}).call(this,e("543d")["default"])},"1ae0":function(t,n,e){},"77d5":function(t,n,e){"use strict";var o=e("1ae0"),i=e.n(o);i.a},"92d5":function(t,n,e){"use strict";e.r(n);var o=e("1683"),i=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=i.a},"9d2a":function(t,n,e){"use strict";e.r(n);var o=e("ab10"),i=e("92d5");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("77d5");var a,d=e("f0c5"),r=Object(d["a"])(i["default"],o["b"],o["c"],!1,null,"9ff30d76",null,!1,o["a"],a);n["default"]=r.exports},ab10:function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement;t._self._c},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/content/goods/GoodsListItem-create-component',
    {
        'components/content/goods/GoodsListItem-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9d2a"))
        })
    },
    [['components/content/goods/GoodsListItem-create-component']]
]);
