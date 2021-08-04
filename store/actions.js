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
	addToCart(context, payload) {
		return new Promise((resolve, reject) => {
			let oldProduct = context.state.cartList.find(item => {
				return item.size === payload.size && item.style === payload.style
			})
			if(oldProduct) {
				context.commit(ADD_COUNT,[oldProduct, payload.count])
				resolve('商品数量+' + payload.count)
			} else {
				payload.isActived = false
				context.commit(ADD_TO_CART, payload)
				resolve('添加至购物车成功！')
			}
		})
	},
	// 改变选中状态
	changeSelected(context, payload) {
		return new Promise((resolve, reject) => {
			let oldStaus = context.state.cartList.find(item => {
				return item.size === payload.size && item.style === payload.style
			})
			context.commit(CHANGE_SELECTED, oldStaus)
			resolve('选中状态已改变')
		})
	},
	// 改变购物车中商品数量
	changeCount(context, payload) {
		return new Promise((resolve, reject) => {
			context.commit(CHANGE_COUNT, payload)
			resolve('商品数量已改变')
		})
	},
	// 删除选中商品
	deleteGood(context) {
		return new Promise((resolve, reject) => {
			context.commit(DELETE_GOOD)
			resolve('已删除选中商品')
		})
	},
	// 收藏商品
	collectGood(context, payload) {
		return new Promise((resolve, reject) => {
			context.commit(COLLECT_GOOD, payload)
			resolve('收藏成功')
		})
	},
	// 取消收藏
	delCollect(context) {
		return new Promise((resolve, reject) => {
			context.commit(DEL_COLLECT)
			resolve('取消收藏成功')
		})
	},
	// 添加地址
	addAddress(context, payload) {
		return new Promise((resolve, reject) => {
			if(payload.isDefault) {
				for(let i = 0, len = context.state.myAddress.length; i < len; i++) {
					context.state.myAddress[i].isDefault = false
				}
			}
			context.commit(ADD_ADDRESS, payload)
			resolve('添加地址成功')
		})
	},
	// 修改地址
	editAddress(context, payload) {
		return new Promise((resolve, reject) => {
			if(payload.isDefault) {
				let foo = context.state.myAddress.filter(item => {
					return item.timeID != payload.timeID
				})
				for(let i = 0, len = foo.length; i < len; i++) {
					foo[i].isDefault = false
				}
			}
			context.commit(EDIT_ADDRESS, payload)
			resolve('修改地址成功')
		})
	},
	// 改变默认地址
	changeDefault(context, payload) {
		return new Promise((resolve, reject) => {
			context.commit(CHANGE_DEFAULT, payload)
			resolve('设置成功')
		})
	},
	// 删除地址
	delAdd(context, payload) {
		return new Promise((resolve, reject) => {
			context.commit(DEL_ADDRESS, payload)
			resolve('删除成功')
		})
	}
}