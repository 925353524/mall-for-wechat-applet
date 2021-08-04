<template>
	<view>
		<tab-control
			v-show="showTopTab"
			class="top-tab"
			:titles="['流行','新款','精选']"
			@tabItemClick="tabItemClick"
			ref="tabControl1"></tab-control>
		<!-- <uni-search-bar @confirm="search" placeholder="搜索" :radius="250"></uni-search-bar> -->
		<swiper class="banner" indicator-dots="true" autoplay="true" interval="3000">
			<swiper-item  v-for="(item, index) in swiper" :key="index">
				<image :src="item.image"></image>
			</swiper-item>
		</swiper>
		<!--  -->
		<view class="recommends">
			<view v-for="(item, index) in recommends" :key="index" class="recommends-item">
				<a :href="item.link">
					<image :src="item.image"></image>
				</a><br/>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 通告栏 -->
		<uni-notice-bar
			single="true" 
			showIcon="true"
			scrollable="true"
			:speed=80
			text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>
		<!--  -->
		<tab-control 
			:titles="['流行','新款','精选']"
			@tabItemClick="tabItemClick"
			ref="tabControl2"></tab-control>
		<!-- 商品列表 -->
		<good-list :goods="showGoods"></good-list>
		<!-- 返回顶部 -->
		<back-top v-show="showBackTop" @click.native="backTop"></back-top>
	</view>
</template>

<script>
	import TabControl from '@/components/content/tabControl/TabControl.vue'
	import GoodList from '@/components/content/goods/GoodList.vue'
	import BackTop from '@/components/content/backtop/BackTop.vue'
	
	export default {
		data() {
			return {
				swiper: [],
				recommends: [],
				currentType: 'pop',
				goodsInfo: {
					'pop': {page: 0, list:[]},
					'new': {page: 0, list:[]},
					'sell': {page: 0, list:[]}
				},
				showBackTop: false,
				showTopTab: false
			}
		},
		components: {
			TabControl,
			GoodList,
			BackTop
		},
		onLoad() {
			this.getIndexData()
			this.getGoodsInfo('pop')
			this.getGoodsInfo('new')
			this.getGoodsInfo('sell')
		},
		onReachBottom() {
			this.getGoodsInfo(this.currentType)
		},
		onPageScroll(e) {
			this.showBackTop = e.scrollTop > 1000
			this.showTopTab = e.scrollTop > 327
		},
		methods: {
			// 获取轮播图数据
			async getIndexData() {
				const res = await this.$myRequest({
					url: '/home/multidata'
				})
				// console.log(res);
				this.swiper = res.data.data.banner.list
				this.recommends = res.data.data.recommend.list
			},
			// 获取商品数据
			async getGoodsInfo(type) {
				const page = this.goodsInfo[type].page + 1
				const res = await this.$myRequest({
					url: '/home/data',
					data: {
						type,
						page
					}
				})
				this.goodsInfo[type].list.push(...res.data.data.list)
				this.goodsInfo[type].page += 1
			},
			// 商品导航点击
			tabItemClick(index) {
				switch(index) {
					case 0:
						this.currentType = 'pop'
						break
					case 1:
						this.currentType = 'new'
						break
					case 2:
						this.currentType = 'sell'
						break
				}
				this.$refs.tabControl1.currentIndex = index
				this.$refs.tabControl2.currentIndex = index
			},
			backTop() {
				uni.pageScrollTo({
					scrollTop: 0,
					
				})
			},
		},
		computed: {
			showGoods() {
				return this.goodsInfo[this.currentType].list
			}
		}
	}
</script>

<style scoped>
	.banner {
		width: 750rpx;
		height: 380rpx;
	}
	.banner image {
		width: 100%;
		height: 100%;
	}
	.recommends {
		display: flex;
		text-align: center;
		height: 160rpx;
		font-size: 26rpx;
		width: 100%;
		padding: 10rpx 0 20rpx;
		margin-bottom: 60rpx;
	}
	.recommends-item {
		flex: 1;
	}
	.recommends-item image {
		width: 140rpx;
		height: 140rpx;
		margin-bottom: 4rpx;
	}
	.uni-noticebar {
		margin-bottom: 4rpx;
	}
	.top-tab {
		position: fixed;
		top: 88rpx;
		width: 750rpx;
	}
</style>
