<template>
	<view class="order">
		<view class="title">
			<text>我的订单</text>
			<view>全部 ></view>
		</view>
		
		<!-- 订单类型 -->
		<view class="order-type">
			<view class="type-item" v-for="(item, index) in orderType" :key="index">
				<text class="iconfont" :class="item.icon"></text>
				<view>{{item.text}}</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderType: [
					{
						icon: 'icon-pay',
						text: '待付款'
					},
					{
						icon: 'icon-send',
						text: '待发货'
					},
					{
						icon: 'icon-deliver',
						text: '待收货'
					},
					{
						icon: 'icon-comment',
						text: '待评价'
					},
					{
						icon: 'icon-refund',
						text: '退款/售后'
					},
				]
			}
		}
	}
</script>

<style scoped>
	@import url("/style/font_2639666_ajgmxlcotji/iconfont.css");
	.order {
		width: 100vw;
		border-bottom: 10rpx solid rgba(204, 204, 204, .3);
	}
	.title {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 20rpx 0;
		margin-bottom: 50rpx;
		box-sizing: border-box;
	}
	.title text {
		font-size: 28rpx;
		font-weight: bold;
	}
	.title view {
		font-size: 18rpx;
		color: rgb(153, 153, 153);
	}
	
	.order-type {
		display: flex;
		justify-content: space-around;
		margin-bottom: 30rpx;
	}
	.type-item {
		width: 15%;
		text-align: center;
	}
	.type-item text {
		font-size: 52rpx;
	}
	.type-item view {
		font-size: 26rpx;
	}
</style>
