<template>
	<view style="position: relative;">
		<view class="cart-top" v-show="(cartListCount > 0)">
			<view>共 {{cartListCount}} 件商品</view>
			<view @click="manageCart">{{cartState}}</view>
		</view>
		<scroll-view scroll-y="true" class="cart-view">
			<cart-list-item v-for="(item, index) in cartList"
				:key="index" 
				:currentIndex="index"
				:product="item"></cart-list-item>
		</scroll-view>
		<view class="cart-nav" v-show="(cartListCount > 0)">
			<view style="display: flex;">
				<view class="chose"  :class="{active: isSelectAll}" @click="selectAll">
					<uni-icons type="checkmarkempty" size="20" color="#FFFFFF"></uni-icons>
				</view>
				<view>全选</view>
			</view>
			<view v-show="!isDeleteState">合计：￥{{totalPrice}}</view>
			<button size="mini" @click="settleCart" v-show="!isDeleteState">结算</button>
			<button class="del" size="mini" @click="delCart" v-show="isDeleteState">删除</button>
		</view>
		<view class="cart-none" v-show="!(cartListCount > 0)">
			空空如也~
		</view>
	</view>
</template>

<script>
	import cartListItem from './childCom/cartListItem.vue'
	
	import { mapGetters } from 'vuex'
	
	export default {
		data() {
			return {
				isDeleteState: false
			}
		},
		components: {
			cartListItem
		},
		computed: {
			...mapGetters(['cartList', 'cartListCount']),
			// 计算总价格
			totalPrice() {
				return (this.cartList.filter(item => {
					return item.isActived
				}).reduce((prev, item) => {
					return prev + item.price * item.count
				}, 0)/100).toFixed(2)
			},
			// 计算数量
			totalCount() {
				return this.cartList.filter(item => {
					return item.isActived
				}).reduce((prev, item) => {
					return prev + item.count
				}, 0)
			},
			// 是否全选
			isSelectAll() {
				if(this.cartList.length == 0) {
					return false
				} else {
					return !this.cartList.find(item => {
						return !item.isActived
					})
				}
			},
			cartState() {
				if(this.isDeleteState) {
					return '完成'
				} else {
					return '管理'
				}
			}
		},
		methods: {
			// 全选
			selectAll() {
				if(this.isSelectAll) {
					this.cartList.forEach(item => {
						item.isActived = false
					})
				} else {
					this.cartList.forEach(item => {
						item.isActived = true
					})
				}
			},
			// 管理商品、完成
			manageCart() {
				this.isDeleteState = !this.isDeleteState
				console.log(this.$store.state.cartList);
			},
			// 删除
			delCart() {
				// 删除商品
				uni.showModal({
					content: '是否要删除选中的商品',
					confirmColor: '#e64340',
					success: (res) => {
						if(res.confirm) {
							this.$store.dispatch('deleteGood').then(res => {
								uni.showToast({
									title: res,
									icon: 'none'
								})
							})
						} else if(res.cancel) {
							console.log('取消');
						}
					}
				})
			},
			// 结算
			settleCart() {
				let nowSelect = this.$store.state.cartList.filter(function(item){
					return item.isActived
				})
				console.log(nowSelect);
				if(nowSelect.length == 0) {
					uni.showToast({
						icon: 'none',
						title: '请选择商品'
					})
				} else {
					uni.showToast({
						icon: 'none',
						title: '快停下你罪恶的小手'
					})
				}
			}
		},
	}
</script>

<style scoped>
	.cart-top {
		height: 60rpx;
		width: 100vw;
		line-height: 60rpx;
		display: flex;
		justify-content: space-between;
		padding: 0 20rpx;
		border-bottom: 1px solid rgba(204, 204, 204, .3);
		font-size: 34rpx;
		box-sizing: border-box;
		color: #000000;
	}
	.cart-top .left {
		/* font-size: 44rpx; */
	}
	.chose {
		width: 46rpx;
		height: 46rpx;
		margin-right: 10rpx;
		border: 1px solid rgba(204, 204, 204, 1);
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.active {
		background-color: #ff8198;
		border: 1px solid rgba(0,0,0,0);
	}
	.cart-nav {
		padding: 6rpx 10rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100vw;
		height: 90rpx;
		border-top: 1px solid rgba(204, 204, 204, .8);
		z-index: 9;
		background-color: #FFFFFF;
		box-sizing: border-box;
	}
	/* 小程序不生效 */
	/* #ifndef MP-WEIXIN */
	.cart-nav {
		position: fixed;
		left: 0;
		bottom: 50px;
	}
	.cart-view {
		height: calc(100vh - 169px);
	}
	/* #endif */
	
	/* 小程序生效 */
	/* #ifdef MP-WEIXIN */
	.cart-nav {
		position: fixed;
		left: 0;
		bottom: 0;
	}
	.cart-view {
		height: calc(100vh - 80px);
	}
	/* #endif */
	.cart-nav button {
		margin: 0;
		color: #FFFFFF;
		background-color: #ff4500;
		font-size: 32rpx;
		width: 180rpx;
		border-radius: 15px;
	}
	.cart-nav .del {
		background-color: #FFFFFF;
		color: #000000;
		border: 1px solid #000000;
		width: 160rpx;
	}
	.cart-none {
		position: absolute;
		width: 100vw;
		top: 30vh;
		text-align: center;
	}
</style>
