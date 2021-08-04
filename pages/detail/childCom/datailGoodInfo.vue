<template>
	<view class="detail-good-info" v-if="Object.keys(info).length != 0">
		<view class="top">
			<view class="start"></view>
			<view class="desc">{{info.desc}}</view>
			<view class="end"></view>
			<view class="key">{{info.detailImage[0].key}}</view>
		</view>
		<view class="center">
			<image v-for="(item, index) in info.detailImage[0].list" 
				:key="index" 
				:src="item" 
				mode="widthFix"
				@load="imgLoad"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			info: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				count: 0,
				imageLength: 0
			}
		},
		methods: {
			imgLoad() {
				if(++this.count === this.imageLength) {
					this.$emit('imgLoad')
				}
			}
		},
		watch: {
			info() {
				this.imageLength = this.info.detailImage[0].list.length
			}
		}
	}
</script>

<style scoped>
	.detail-good-info {
		padding: 30rpx 0;
	}
	.top {
		padding: 0 30rpx;
	}
	.start , .end{
		background-color: #333333;
		height: 2rpx;
		width: 180rpx;
		position: relative;
	}
	.start {
		float: left;
	}
	.end {
		float: right;
	}
	.start::before, .end::after {
		content: '';
		height: 10rpx;
		width: 10rpx;
		background-color: #333333;
		position: absolute;
		bottom: 0;
	}
	.end::after {
		right: 0;
	}
	.desc {
		padding: 24rpx 0;
		font-size: 28rpx;
	}
	.key {
		margin: 20rpx 0;
	}
	.center image {
		width: 100%;
		height: auto;
	}
	.center {
		padding-bottom: 20rpx;
		border-bottom: 10rpx solid #f2f5f8;
	}
	
</style>
