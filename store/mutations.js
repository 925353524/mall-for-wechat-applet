import {
	ADD_TO_CART,
	ADD_COUNT,
	CHANGE_SELECTED,
	CHANGE_COUNT,
	DELETE_GOOD,
	COLLECT_GOOD,
	DEL_COLLECT,
	ADD_ADDRESS,
	EDIT_ADDRESS,
	CHANGE_DEFAULT,
	DEL_ADDRESS
} from './mutation-types'

export default {
	// 添加购物车操作
	[ADD_TO_CART](state, payload) {
		state.cartList.push(payload)
	},
	// 商品数量增加
	[ADD_COUNT](state, payload) {
		payload[0].count += payload[1]
	},
	// 改变选中状态
	[CHANGE_SELECTED](state, payload) {
		payload.isActived = !payload.isActived
	},
	// 改变购物车中商品数量
	[CHANGE_COUNT](state, payload) {
		payload[0].count = payload[1]
	},
	// 删除商品
	[DELETE_GOOD](state) {
		state.cartList = state.cartList.filter(item => {
			return item.isActived == false
		})
	},
	// 收藏商品
	[COLLECT_GOOD](state, payload) {
		state.collList.push(payload)
	},
	// 取消收藏
	[DEL_COLLECT](state) {
		state.collList = state.collList.filter(item => {
			return item.isSelect == false
		})
	},
	// 添加地址
	[ADD_ADDRESS](state, payload) {
		state.myAddress.push(payload)
	},
	// 修改地址
	[EDIT_ADDRESS](state, payload) {
		let foo = state.myAddress.find(item => {
			return item.timeID == payload.timeID
		})
		foo = payload
	},
	// 设置默认地址
	[CHANGE_DEFAULT](state,payload) {
		if(payload.isDefault) {
			console.log(111);
			let foo = state.myAddress.filter(item => {
				return item.timeID != payload.timeID
			})
			for(let i = 0; i < foo.length; i ++) {
				foo[i].isDefault = false
			}
		} else {
			// let bar = state.myAddress.find(item => {
			// 	return item.timeID = payload.timeID
			// })
			// bar.isDefault = false
		}
	},
	// 删除地址
	[DEL_ADDRESS](state, payload) {
		state.myAddress = state.myAddress.filter(item => {
			return item.timeID != payload.timeID
		})
	}
	
}