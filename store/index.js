import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex)

const state = {
	cartList: [
		{"id":"1m8ogsc","img":"//s5.mogucdn.com/mlcdn/c45406/180917_7d3hl7c32jj5hldl5aha71363jbc5_750x1019.jpg","size":"M","style":"蓝色五分袖套装","price":11900,"title":"网红同款实拍秋季女装2018新款女初恋复古中长款针织连衣裙半身裙时尚套装两件套","count":1,"isActived":false},
		
	],
	collList: [{
		id: "1m745k0",
		img: "//s11.mogucdn.com/mlcdn/c45406/180811_1k5hfa6d803575df3lkb6j67l5j3c_640x960.jpg",
		isSelect: false,
		price: "68.00",
		title: "2018秋季新款韩版女装字母印花宽松连帽休闲卫衣搭配松紧腰九分牛仔裤两件套女时尚"
	},{
		id: "1m7rp9w",
		img: "//s5.mogucdn.com/mlcdn/c45406/180827_1590j44g2bk619i6655ji20ihikfb_640x960.jpg",
		isSelect: false,
		price: "109.00",
		title: "秋装女2018新款套装时尚晚晚风气质chic港味女神网红两件套装俏皮"
	}],
	myAddress: [
		{
			detail: "bbasdfad",
			isDefault: true,
			name: "阿巴阿巴",
			region: "内蒙古自治区-呼和浩特市-新城区",
			regionArr: ["内蒙古自治区", "呼和浩特市", "新城区"],
			tel: "13455558888",
			timeID: 1625638385988
		}
	]
}

const store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})

export default store