export default {
	cartList(state) {
		return state.cartList
	},
	cartListCount(state,getters) {
		return getters.cartList.length
	},
	collGoodList(state) {
		return state.collList
	},
	collGoodCount(state, getters) {
		return getters.collGoodList.length
	},
	addList(state) {
		return state.myAddress
	},
	addDetail(state, getters) {
		return (id) => {
			return getters.addList.find(item => {
				return item.timeID == id
			})
		}
	}
	
}