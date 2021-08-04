<template>
	<view class="shop">
		<view class="name">
			<image :src="shopInfo.shopLogo"></image>
			<text>{{shopInfo.name}}</text>
		</view>
		<view class="info">
			<view class="sell">
				<view>
					<view class="sCount">{{shopInfo.cSells | countFilter}}</view>
					<text>总销量</text>
				</view>
				<view>
					<view class="sCount">{{shopInfo.cGoods}}</view>
					<text>全部宝贝</text>
				</view>
			</view>
			<view class="score">
				<view v-for="(item, index) in shopInfo.score" :key="index" class="table">
					<view class="t1">{{item.name}}</view>
					<view class="low" :class="{'bviewr-s': item.isBetter}">{{item.score}}</view>
					<view class="low-l" :class="{'better-l': item.isBetter}">{{item.isBetter ? '高' : '低'}}</view>
				</view>
			</view>	
		</view>
		<span class="enter">进店逛逛</span>
	</view>
</template>

<script scoped>
	export default {
		props: {
			shopInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		filters: {
			countFilter: function(value) {
				if(value < 10000) {
					return value
				}else {
					return (value/10000).toFixed(1) + '万'
				}
			}
		}
	}
</script>

<style scoped>
	.shop {
		padding: 12rpx 28rpx;
		border-bottom: 10rpx solid #f2f5f8;
	}
	.name {
		display: flex;
		align-items: center;
	}
	.name image {
		width: 90rpx;
		height: 90rpx;
		margin-right: 10rpx;
	}
	.info {
		display: flex;
		justify-content: space-around;
		color: #333333;
		align-items: center;
		margin-top: 20rpx;
	}
	.sell {
		flex: 1;
		display: flex;
		justify-content: space-evenly;
		text-align: center;
		border-right: 1px solid rgba(0, 0, 0, .1);
	}
	.sell text {
		font-size: 26rpx;
	}
	.sCount {
		font-size: 36rpx;
	}
	.score {
		flex: 1;
		font-size: 26rpx;
		text-align: center;
	}
	.table {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	.t1 {
		height: 48rpx;
		width: 128rpx;
		line-height: 48rpx;
	}
	.low-l {
		background-color: #5ea732;
		color: #FFFFFF;
		height: 26rpx;
		line-height: 26rpx;
	}
	.low {
		color: #5ea732;
		height: 48rpx;
		width: 64rpx;
		line-height: 48rpx;
	}
	.better-s {
		color: #f13e3a;
	}
	.better-l {
		background-color: #f13e3a;
	}
	.enter {
		margin: 26rpx auto;
		display: block;
		height: 60rpx;
		width: 300rpx;
		font-size: 28rpx;
		text-align: center;
		line-height: 60rpx;
		border-radius: 20rpx;
		background-color: #f2f5f8;
		color: #666;
	}
</style>
