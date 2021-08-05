<template>
	<view>
		<scroll-view class="pop-view" style="max-height: 80vh; background-color: #FFFFFF;" scroll-y="true">
			<view class="pop-content">
				<view class="header">
					<view class="title">
						<image :src="findSkuImg || skuInfo.skus[0].img" mode="aspectFit"></image>
						<text>{{finalSkuPrice || skuInfo.priceRange}}</text>
					</view>
					<view>
						<uni-icons style="margin-top: 4rpx;" type="closeempty" size="16" class="close" @click="close()"></uni-icons>
					</view>
				</view>
				<!-- sku颜色 -->
				<view class="sku-color">
					<text>颜色</text>
					<view class="size-block">
						<view v-for="(item, index) in skuColorInfo" :key="index">
							<view class="size-item" 
							:class="{'item-active': index === colorIndex}"
							@click="colorClick(index,item.styleId)">
							{{item.name}}</view>
						</view>
					</view>
				</view>
				<!-- sku尺码 -->
				<view class="size">
					<text>尺码</text>
					<view class="size-block">
						<view v-for="(item, index) in skuSizeInfo" :key="index">
							<view class="size-item" 
							:class="{'item-active': index === sizeIndex}"
							@click="sizeClick(index,item.sizeId)">{{item.name}}</view>
						</view>
					</view>
				</view>
				<!-- 购买数量 -->
				<view class="count">
					<text>购买数量</text>
					<uni-number-box :min="1" v-model="count"></uni-number-box>
				</view>
				<button v-if="isCart" class="sure"  hover-class="none" @click="popCartClick">加入购物车</button>
				<button v-if="!isCart" class="sure"  hover-class="none" @click="popBuyClick">立即购买</button>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			skuInfo: {
				type: Object,
				default() {
					return {}
				}
			},
			skuColorInfo: {
				type: Array,
				default() {
					return []
				}
			},
			skuSizeInfo: {
				type: Array,
				default() {
					return []
				}
			},
			isCart: {
				type: Boolean
			}
		},
		data() {
			return {
				count: 1,
				colorIndex: -1,
				sizeIndex: -1,
				colorSelect: 1,
				sizeSelect: '',
				finalPrice: '',
				finalInfo: {},
				popHeight: 50,
			}
		},
		computed: {
			// 显示的对应图片
			findSkuImg() {
				const a = this.colorSelect
				const newArr = this.skuInfo.skus
				let res = ''
				res = newArr.find(item => {
					return item.styleId == a
				},a)
				return res.img
			},
			// 价格小数点前移两位
			finalSkuPrice() {
				if(this.finalPrice) {
					return '￥'+(this.finalPrice/100).toFixed(2)
				} else {
					return null
				}
			}
		},
		methods: {
			// 关闭pop
			close() {
				this.$emit('closePop')
			},
			// 选择颜色
			colorClick(index,styleId) {
				this.colorIndex = index
				this.colorSelect = styleId
				this.finalCom()
			},
			// 选择尺码
			sizeClick(index,sizeId) {
				this.sizeIndex = index
				this.sizeSelect = sizeId
				this.finalCom()
			},
			// 最终价格
			finalCom() {
				if(this.colorIndex > -1 && this.sizeIndex > -1) {
					const colorIn = this.colorSelect
					const sizeIn = this.sizeSelect
					const skus = this.skuInfo.skus
					for(let i= 0; i < skus.length; i++) {
						if(skus[i].sizeId == sizeIn && skus[i].styleId == colorIn) {
							this.finalPrice = skus[i].nowprice
							this.finalInfo = skus[i]
							return
						}
					}
				}
			},
			// 添加至购物车
			popCartClick() {
				if(this.colorIndex > -1 && this.sizeIndex > -1) {
					this.$emit('addCart',this.finalInfo, this.count)
				} else {
					uni.showToast({
						title: '请选择商品',
						icon: 'none'
					})
				}
			},
			// 下单
			popBuyClick() {
				if(this.colorIndex > -1 && this.sizeIndex > -1) {
					// uni.navigateTo({
					// 	url:'/pages/settlement/settlement'
					// })
					uni.showToast({
						icon: 'none',
						title: '现在还不能买哦'
					})
				} else {
					uni.showToast({
						title: '请选择商品',
						icon: 'none'
					})
				}
			}
		}
	}
</script>

<style scoped>
	.pop-view {
		/* padding: 20rpx 20rpx 0; */
	}
	.pop-content {
		/* padding: 40rpx; */
		padding: 20rpx 20rpx 10rpx;
	}
	/* #ifdef MP-WEIXIN */
	.pop-view {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 0;
	}
	/* #endif */
	.header {
		display: flex;
		justify-content: space-between;
		padding-bottom: 20rpx;
		border-bottom: 1px solid rgb(218 215 215 / 50%);
	}
	.header .title {
		display: flex;
		justify-items: center;
	}
	.header .title image{
		width: 200rpx;
		height: 200rpx;
		background-color: rgba(246, 246, 246, .3);
	}
	.header .title text {
		font-size: 44rpx;
		color: #ff5777;
		margin-left: 20rpx;
		line-height: 44rpx;
	}
	.header button {
		height: 40rpx;
		width: 40rpx;
	}
	.close {
		border: 1px solid #333333;
		border-radius: 50%;
		padding: 2rpx;
	}
	.size {
		margin: 10rpx 0;
		border-bottom: 1px solid rgb(218 215 215 / 50%);
	}
	.size-block {
		display: flex;
		flex-wrap: wrap;
		margin: 10rpx 0;
	}
	.size-item {
		flex: 1;
		text-align: center;
		padding: 10rpx;
		min-width: 120rpx;
		border-radius: 2px;
		margin: 10rpx 0;
		margin-right: 40rpx;
		background-color: #f8f8f8;
		color: #3e3e3e;
	}
	.sku-color {
		border-bottom: 1px solid rgb(218 215 215 / 50%);
	}
	.count {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20rpx;
		padding: 20rpx 0;
	}
	.sure {
		/* position: absolute;
		bottom: 0;
		left: 2%; */
		margin-top: 40rpx;
		width: 96%;
		border-radius: 40rpx;
		border: none;
		background-color: #ff6699;
		color: #FFFFFF;
	}
	.item-active {
		background-color: #ff6699;
		color: #FFFFFF;
	}
</style>
