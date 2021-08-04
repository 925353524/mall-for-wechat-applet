<template>
	<view class="detail-nav">
		<view v-for="(item, index) in titles"
			:key="index" 
			@click="navClick(index)"
			:class="{'detail-nav-active': index === currentIndex}">
			{{item}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titles: ['商品','参数','评论','推荐'],
				currentIndex: 0
			}
		},
		methods: {
			navClick(index) {
				this.currentIndex = index
				this.$emit('change', index)
			}
		}
	}
</script>

<style scoped>
	.detail-nav {
		position: fixed;
		z-index: 9;
		display: flex;
		width: 750rpx;
		height: 52rpx;
		text-align: center;
		color: #888;
		background-color: #FFFFFF;
	}
	/* #ifdef H5 */
	.detail-nav {
		top: 44px;
	}
	/* #endif */
	/* #ifdef MP-WEIXIN */
	.detail-nav {
		top: 0;
	}
	/* #endif */
	.detail-nav view {
		flex: 1;
		font-size: 30rpx;
	}
	.detail-nav-active {
		color: #ff8198;
	}
</style>
