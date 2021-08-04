<template>
	<view>
		<view class="cogood-item" :style="{height: leftWidth + 'vw'}">
			<!-- 左侧图片 -->
			<view @click="goDetail" class="left-img" :style="{width: leftWidth + 'vw'}">
				<image :src="productInfo.img"></image>
			</view>
			<!-- 右侧标题、价格 -->
			<view class="right-info">
				<view @click="goDetail" class="rtitle" :style="{fontSize: titleSize + 'rpx', color: titleColor, '-webkit-line-clamp': titleLineCount}">
					{{productInfo.title}}
				</view>
				<view class="rprice">
					<text class="price-symbol">￥</text>
					<text :style="{fontSize: priceSize + 'rpx', color: priceColor}">{{productInfo.price}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			//左侧图片宽度占比，单位vw
			leftWidth: {
				type: Number,
				default: 35
			},
			//右侧标题字体大小，单位rpx
			titleSize: {
				type: Number,
				default: 36
			},
			//右侧标题颜色
			titleColor: {
				type: String,
				default: 'black'
			},
			//标题最大行数
			titleLineCount: {
				type: Number,
				default: 2
			},
			//右侧价格大小，单位rpx
			priceSize: {
				type: Number,
				default: 48
			},
			//价格颜色
			priceColor: {
				type: String,
				default: 'red'
			},
			productInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			goDetail() {
				uni.navigateTo({
					url: '/pages/detail/detail?id=' + this.productInfo.id
				})
			}
		}
	}
</script>

<style>
	.cogood-item {
		width: 100%;
		display: flex;
	}
	.left-img {
		/* border-radius: 20rpx; */
		overflow: hidden;
		box-sizing: border-box;
		padding: 10rpx;
		height: 100%;
	}
	.left-img image {
		width: 100%;	
		object-fit: cover;
		/* transform: translate(0, -20%); */
		/* height: 100%; */
	}
	.right-info {
		flex: 1;
		height: 100%;
		display: flex;
		flex-direction: column;
		position: relative;
		padding:20rpx 10rpx;
	}
	.rtitle {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical
	}
	.rprice {
		position: absolute;
		left: 10rpx;
		top: 70%;
		transform: translate(0, -50%);
	}
	.price-symbol {
		font-size: 30rpx;
		/* margin-right: 10rpx; */
	}
</style>
