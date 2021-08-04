<template>
	<view class="person-info">
		<!-- 头像 昵称 -->
		<view class="user-info">
			<view class="img-wrapper">
				<image src="../../../static/img/head-portrait.jpeg"></image>
			</view>
			<text class="user-name">阿巴阿巴阿巴</text>
		</view>
		
		<!-- 设置 -->
		<view class="setting">
			<uni-icons type="gear" color="rgb(102, 102, 102)" size="30"></uni-icons>
		</view>
		
		<!-- 收藏等 -->
		<view class="user-coll">
			<view @click="goMyCollection">
				<uni-icons type="heart" color="" size="30"></uni-icons>
				<text>我的收藏</text>
			</view>
			<view>
				<uni-icons type="list" color="" size="30"></uni-icons>
				<text>红包/卡券</text>
			</view>
			<view @click="goMyAddress">
				<uni-icons type="location-filled" color="" size="30"></uni-icons>
				<text>收货地址</text>
			</view>
			<view>
				<uni-icons type="eye" color="" size="30"></uni-icons>
				<text>浏览历史</text>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			// 点击我的收藏
			goMyCollection() {
				uni.navigateTo({
					url: './childPage/myCollection',
					fail(res) {
						console.log(res);
					}
				})
			},
			goMyAddress() {
				uni.navigateTo({
					url: './childPage/myAddress',
					fail(res) {
						console.log(res);
					}
				})
			}
		}
	}
</script>

<style scoped>
	.person-info {
		width: 100%;
		height: 23vh;
		/* background: rgba(204, 204, 204, .3); */
		padding-top: 10rpx;
		box-sizing: border-box;
		border-bottom: 10rpx solid rgba(204, 204, 204, .3);
	/* 	border-bottom-left-radius: 20rpx;
		border-bottom-right-radius: 20rpx; */
		position: relative;
	}
	.user-info {
		display: flex;
		align-items: center;
		margin-left: 10rpx;
	}
	.img-wrapper {
		width: 15%;
		height: 15vw;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 20rpx;
		border: 1px solid rgba(204, 204, 204, .3);
	}
	.img-wrapper image {
		width: 100%;
		height: 100%;
	}
	.user-name {
		text-align: center;
		font-size: 40rpx;
	}
	
	.setting {
		position: absolute;
		top: 34rpx;
		right: 10rpx;
	}
	
	.user-coll {
		display: flex;
		justify-content: space-around;
		position: absolute;
		width: 100%;
		left: 0;
		bottom: 20rpx;
	}
	.user-coll view {
		width: 20vw;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.user-coll view text {
		font-size: 26rpx;
	}
	
</style>
