<template>
	<view class="category">
		<!-- 左侧 -->
		<view>
			<scroll-view class="left" scroll-y="true">
				<view v-for="(item, index) in leftCategory" :key="index" class="left-item">
					<view @click="leftClick(index, item)" :class="{active: index === currentIndex}">
						{{item.title}}
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 右侧 -->
		<view class="seat">
			<scroll-view class="right" scroll-y="true">
				<category-right :rightInfo="rightCategory"></category-right>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import categoryRight from './childCom/categoryRight.vue'
	
	export default {
		data() {
			return {
				leftCategory: [],
				rightCategory: [],
				currentIndex: 0
			}
		},
		components: {
			categoryRight
		},
		onLoad() {
			this.getCategory()
		},
		methods: {
			// 左侧分类网络请求
			async getCategory() {
				const res = await this.$myRequest({
					url: '/category'
				})
				this.leftCategory = res.data.data.category.list
				const maitKey = this.leftCategory[this.currentIndex].maitKey
				this.getCategoryRight(maitKey)
			},
			// 右侧网络请求
			async getCategoryRight(parm) {
				const res = await this.$myRequest({
					url: '/subcategory',
					data: {
						maitKey: parm
					}
				})
				this.rightCategory = res.data.data.list
			},
			leftClick(index, item) {
				this.currentIndex = index
				this.getCategoryRight(item.maitKey)
			}
		},
		
	}
</script>

<style scoped>
	.category {
		display: flex;
	}
	.seat{
		flex: 1;
	}
	.left {
		width: 200rpx;
	}
	.left, .right {
		height: calc(100vh - 94px);
	}
	
	/* #ifdef MP-WEIXIN */
	.left, .right {
		height: 100vh;
	}
	/* #endif */
	
	.left-item {
		height: 90rpx;
		font-size: 34rpx;
		text-align: center;
		line-height: 90rpx;
		background-color: #f6f6f6;
	}
	.active {
		border-left: 4px solid #ff8198;
		background-color: #FFFFFF;
	}
</style>
