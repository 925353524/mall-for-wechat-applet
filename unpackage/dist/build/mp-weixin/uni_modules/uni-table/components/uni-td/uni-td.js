(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-table/components/uni-td/uni-td"],{"271a":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"uniTd",options:{virtualHost:!0},props:{width:{type:[String,Number],default:""},align:{type:String,default:"left"}},data:function(){return{border:!1}},created:function(){this.root=this.getTable(),this.border=this.root.border},methods:{getTable:function(){var t=this.$parent,n=t.$options.name;while("uniTable"!==n){if(t=t.$parent,!t)return!1;n=t.$options.name}return t}}};n.default=r},"7b5d":function(t,n,e){"use strict";e.r(n);var r=e("271a"),u=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=u.a},"91b2":function(t,n,e){"use strict";e.r(n);var r=e("9e8b"),u=e("7b5d");for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e("ee87");var a,o=e("f0c5"),f=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);n["default"]=f.exports},"9e8b":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return r}));var u=function(){var t=this,n=t.$createElement;t._self._c},i=[]},ee87:function(t,n,e){"use strict";var r=e("f363"),u=e.n(r);u.a},f363:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-table/components/uni-td/uni-td-create-component',
    {
        'uni_modules/uni-table/components/uni-td/uni-td-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("91b2"))
        })
    },
    [['uni_modules/uni-table/components/uni-td/uni-td-create-component']]
]);
