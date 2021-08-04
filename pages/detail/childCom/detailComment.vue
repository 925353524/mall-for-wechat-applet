<template>
	<view v-if="Object.keys(rate).length != 0" class="comment">
		<view class="rate-top">
			<text>用户评价</text>
			<span>更多</span>
		</view>
		<view class="rate-info">
			<image :src="rate.list[0].user.avatar"></image>
			<view>{{rate.list[0].user.uname}}</view>
		</view>
		<view class="content">
			{{rate.list[0].content}}
		</view>
		<view class="time">
			<uni-dateformat class="time-left" :date="rate.list[0].created * 1000"></uni-dateformat>
			<text>{{rate.list[0].style}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			rate: {
				type: Object,
				default() {
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	.comment {
		padding: 20rpx 20rpx;
		border-bottom: 5px solid #f2f5f8;
	}
	.rate-top {
		height: 90rpx;
		line-height: 90rpx;
		border-bottom: 1px solid rgba(0, 0, 0, .1);
	}
	.rate-top span {
		float: right;
		font-size: 26rpx;
	}
	.rate-info {
		display: flex;
		margin: 20rpx 0;
	}
	.rate-info view{
		height: 84rpx;
		line-height: 84rpx;
	}
	.rate-info image {
		height: 84rpx;
		width: 84rpx;
		border-radius: 50%;
		margin-right: 20rpx;
	}
	.content {
		font-size: 28rpx;
		margin-bottom: 20rpx;
	}
	.time {
		color: #999999;
		font-size: 24rpx;
	}
	.time-left {
		margin-right: 20rpx;
	}
</style>
