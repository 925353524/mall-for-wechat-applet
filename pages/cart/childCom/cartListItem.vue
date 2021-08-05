<template>
	<view>
		<view class="cart-list">
			<view class="chose" @click="select" :class="{active: isSlected}">
				<uni-icons type="checkmarkempty" size="20" color="#FFFFFF"></uni-icons>
			</view>
			<view class="cart-list-item">
				<image :src="product.img" mode="aspectFill" @click="goDetail"></image>
				<view class="item-right">
					<view class="item-title" @click="goDetail">{{product.title}}</view>
					<view style="font-size: 28rpx;">{{product.size}},{{product.style}}</view>
					<view class="item-info">
						<view class="price">￥{{finalSkuPrice}}</view>
						<uni-number-box :min="1" 
						ref="goodCount"
						style="transform: scale(0.85);" 
						v-model="finalCount"
						@blur="countBlur"></uni-number-box>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { debounce } from '@/utils/myUtils.js'
	
	export default {
		data() {
			return {
			}
		},
		props: {
			product: {
				type: Object,
				default() {
					return {}
				}
			},
			currentIndex: {
				type: Number,
				default() {
					return 0
				}
			}
		},
		computed: {
			// 价格小数点前移两位
			finalSkuPrice() {
				return (this.product.price/100).toFixed(2)
			},
			// 选中状态
			isSlected() {
				return this.$store.state.cartList[this.currentIndex].isActived
			},
			// 返回商品数量
			finalCount: {
				get() {
					return this.$store.state.cartList[this.currentIndex].count
				},
				set: debounce(function(value) {
					this.$store.dispatch('changeCount', [this.$store.state.cartList[this.currentIndex], value])
				},200),
			}
		},
		methods: {
			// 选中状态
			select() {
				this.$store.dispatch('changeSelected', this.product)
			},
			// 进入商品详情
			goDetail() {
				uni.navigateTo({
					url: '/pages/detail/detail?id=' + this.product.id
				})
			},
			// 当输入框为空
			countBlur(event) {
				if(event.detail.value == "") {
					// this.$refs.goodCount.inputValue = 1
					event.detail.value = 1
					this.$store.dispatch('changeCount', [this.$store.state.cartList[this.currentIndex], 1])
				}
			}
		}
	}
</script>

<style scoped>
	.cart-list {
		display: flex; 
		align-items: center; 
		padding: 20rpx 10rpx;
		/* border-bottom: 1px solid rgba(204, 204, 204, .8); */
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
	
	.cart-list-item {
		display: flex;
		flex: 1;
	}
	.cart-list-item image {
		width: 180rpx;
		height: 230rpx;
		background-color: rgba(246, 246, 246, .3);
		border-radius: 5px;
		margin-right: 20rpx;
	}
	.item-right {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.item-right .item-title {
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		word-wrap: break-word;
		white-space: normal !important;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 32rpx;
	}
	.item-right .item-info {
		display: flex; 
		justify-content: space-between;
	}
	.item-right .item-info .price {
		padding-top: 14rpx; 
		color: #ff4500;
	}
</style>
