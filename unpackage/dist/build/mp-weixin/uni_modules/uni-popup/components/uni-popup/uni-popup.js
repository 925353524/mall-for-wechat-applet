(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-popup/components/uni-popup/uni-popup"],{"2a04":function(t,i,o){"use strict";var n=o("f138"),s=o.n(n);s.a},"3a89":function(t,i,o){"use strict";o.r(i);var n=o("80b0"),s=o.n(n);for(var e in n)"default"!==e&&function(t){o.d(i,t,(function(){return n[t]}))}(e);i["default"]=s.a},5414:function(t,i,o){"use strict";o.r(i);var n=o("65ec"),s=o("3a89");for(var e in s)"default"!==e&&function(t){o.d(i,t,(function(){return s[t]}))}(e);o("2a04");var a,r=o("f0c5"),u=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,"14d6db40",null,!1,n["a"],a);i["default"]=u.exports},"65ec":function(t,i,o){"use strict";o.d(i,"b",(function(){return s})),o.d(i,"c",(function(){return e})),o.d(i,"a",(function(){return n}));var n={uniTransition:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uni-transition/components/uni-transition/uni-transition")]).then(o.bind(null,"448e"))}},s=function(){var t=this,i=t.$createElement;t._self._c},e=[]},"80b0":function(t,i,o){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={name:"uniPopup",components:{},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0},backgroundColor:{type:String,default:"none"},safeArea:{type:Boolean,default:!0}},watch:{type:{handler:function(t){this.config[t]&&this[this.config[t]](!0)},immediate:!0},isDesktop:{handler:function(t){this.config[t]&&this[this.config[this.type]](!0)},immediate:!0},maskClick:{handler:function(t){this.mkclick=t},immediate:!0},safeArea:{type:Boolean,default:!0}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,popupWidth:0,popupHeight:0,config:{top:"top",bottom:"bottom",center:"center",left:"left",right:"right",message:"top",dialog:"center",share:"bottom"},maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:this.isDesktop?"fixforpc-top":"top"}},computed:{isDesktop:function(){return this.popupWidth>=500&&this.popupHeight>=500},bg:function(){return""===this.backgroundColor||"none"===this.backgroundColor?"transparent":this.backgroundColor}},mounted:function(){var i=this,o=function(){var o=t.getSystemInfoSync(),n=o.windowWidth,s=o.windowHeight,e=o.windowTop,a=o.safeAreaInsets;i.popupWidth=n,i.popupHeight=s+e,i.safeArea?i.safeAreaInsets=a:i.safeAreaInsets=0};o()},created:function(){this.mkclick=this.maskClick,this.animation?this.duration=300:this.duration=0,this.messageChild=null,this.clearPropagation=!1},methods:{closeMask:function(){this.maskShow=!1},disableMask:function(){this.mkclick=!1},clear:function(t){t.stopPropagation(),this.clearPropagation=!0},open:function(t){var i=["top","center","bottom","left","right","message","dialog","share"];t&&-1!==i.indexOf(t)||(t=this.type),this.config[t]?(this[this.config[t]](),this.$emit("change",{show:!0,type:t})):console.error("缺少类型：",t)},close:function(t){var i=this;this.showTrans=!1,this.$emit("change",{show:!1,type:this.type}),clearTimeout(this.timer),this.timer=setTimeout((function(){i.showPopup=!1}),300)},touchstart:function(){this.clearPropagation=!1},onTap:function(){this.clearPropagation||this.mkclick&&this.close()},top:function(t){var i=this;this.popupstyle=this.isDesktop?"fixforpc-top":"top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0,backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0,this.$nextTick((function(){i.messageChild&&"message"===i.type&&i.messageChild.timerClose()})))},bottom:function(t){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0,paddingBottom:this.safeAreaInsets&&this.safeAreaInsets.bottom||0,backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0)},center:function(t){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"},t||(this.showPopup=!0,this.showTrans=!0)},left:function(t){this.popupstyle="left",this.ani=["slide-left"],this.transClass={position:"fixed",left:0,bottom:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)},right:function(t){this.popupstyle="right",this.ani=["slide-right"],this.transClass={position:"fixed",bottom:0,right:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)}}};i.default=o}).call(this,o("543d")["default"])},f138:function(t,i,o){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-popup/components/uni-popup/uni-popup-create-component',
    {
        'uni_modules/uni-popup/components/uni-popup/uni-popup-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5414"))
        })
    },
    [['uni_modules/uni-popup/components/uni-popup/uni-popup-create-component']]
]);
