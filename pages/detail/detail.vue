<template>
	<view class="detail">
		<detail-nav-bar v-show="showNavBar" @change="navClick"></detail-nav-bar>
		<!-- 轮播图 -->
		<swiper class="banner"
			indicator-dots="true"
			autoplay="true"
			interval="3000">
			<swiper-item v-for="(item, index) in itemInfo.topImages" :key="index">
				<image :src="item" mode="widthFix"></image>
			</swiper-item>
		</swiper>
		<!-- 商品信息 -->
		<view class="info">
			<text>{{itemInfo.title}}</text>
			<view class="price-info">
				<text class="price">{{itemInfo.price}}</text>
				<text class="o-price">{{itemInfo.oldPrice}}</text>
				<span class="dis">{{itemInfo.discountDesc}}</span>
			</view>
			<view class="good-info">
				<text>{{goodInfo[0]}}</text>
				<text>{{goodInfo[1]}}</text>
				<text>{{goodInfo[2]}}</text>
			</view>
			<view  class="server">
				<view v-for="(item, index) in shopInfo.services" :key="index">
					<image :src="item.icon"></image>
					{{item.name}}
				</view>
			</view>
		</view>
		<!-- 店铺信息 -->
		<detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
		<!-- 商品描述 -->
		<datail-good-info :info="detailInfo" @imgLoad="imgLoad"></datail-good-info>
		<!-- 商品参数 -->
		<detail-params :params="params" id="detail-params"></detail-params>
		<!-- 商品评价 -->
		<detail-comment :rate="rate" id="rate"></detail-comment>
		<!-- 商品推荐 -->
		<good-list class="detail-end" :goods="recommend"></good-list>
		<!-- 底部 -->
		<uni-goods-nav :fill="true"
				class="detail-tab-bar"
				:options="options"
				:buttonGroup="buttonGroup"
				@click="leftClick"
				@buttonClick="rightClick"></uni-goods-nav>
		
		<view>
			<uni-popup ref="popup" type="bottom">
				<detail-pop-view 
				@addCart="addCart(arguments)"
				@closePop="close" 
				:isCart="isCart"
				:skuInfo="skuInfo" 
				:skuColorInfo="skuColorInfo" 
				:skuSizeInfo="skuSizeInfo"></detail-pop-view>
			</uni-popup>
		</view>
		
		<back-top v-show="showBackTop" @click.native="backTop"></back-top>
	</view>
</template>

<script>
	import detailNavBar from './childCom/detailNavBar.vue'
	import detailShopInfo from './childCom/detailShopInfo.vue'
	import datailGoodInfo from './childCom/datailGoodInfo.vue'
	import detailParams from './childCom/detailParams.vue'
	import detailComment from './childCom/detailComment.vue'
	import detailPopView from './childCom/detailPopView.vue'
	
	import uniGoodsNav  from '@/components/common/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue'
	import GoodList from '@/components/content/goods/GoodList.vue'
	import BackTop from '@/components/content/backtop/BackTop.vue'
	
	import { mapGetters } from 'vuex'
	import { debounce } from '@/utils/myUtils.js'
	
	export default {
		data() {
			return {
				goodID: '',
				topImages: [],
				itemInfo: {},
				goodInfo: {},
				shopInfo: {},
				detailInfo: {},
				skuInfo: {},
				skuColorInfo: [],
				skuSizeInfo: [],
				params: {},
				rate: {},
				recommend: [],
				showBackTop: false,
				showNavBar: false,
				positionYs: [],
				isCart: true,
				isCollection: false,
				options: [{
						icon: 'heart',
						text: '收藏',
					}, 
					{
						icon: 'shop',
						text: '店铺',
					}, 
					{
						icon: 'cart',
						text: '购物车',
						info: 0
				}],
				buttonGroup: [{
				          text: '加入购物车',
				          backgroundColor: '#ffe817',
				          color: '#333'
				        },
				        {
				          text: '立即购买',
				          backgroundColor: '#f69',
				          color: '#fff'
				        }
				        ]
			}
		},
		components: {
			detailNavBar,
			detailShopInfo,
			datailGoodInfo,
			detailParams,
			detailComment,
			uniGoodsNav,
			GoodList,
			BackTop,
			detailPopView,
		},
		computed: {
			...mapGetters(['collGoodList'])
		},
		onPageScroll(e) {
			this.showBackTop = e.scrollTop > 1000
			this.showNavBar = e.scrollTop > 70
		},
		onLoad(option) {
			this.goodID = option.id
			this.getDetail(option.id)
			this.getRecommend()
		},
		onReady() {
			uni.setNavigationBarTitle({
				title: '详情页'
			})
			
			this.getPosition = debounce(() => {
				this.positionYs = []
				this.positionYs.push(0)
				this.getTop('#detail-params')
				this.getTop('#rate')
				this.getTop('.detail-end')
			})
			
			this.isHasColl()
		},
		methods: {
			// 网络请求
			async getDetail(iid) {
				const res = await this.$myRequest({
					url: '/detail',
					data: {
						iid
					}
				})
				this.itemInfo = res.data.result.itemInfo
				this.goodInfo = res.data.result.columns
				this.shopInfo = res.data.result.shopInfo
				this.detailInfo = res.data.result.detailInfo
				this.params = res.data.result.itemParams
				this.rate = res.data.result.rate
				this.skuInfo = res.data.result.skuInfo
				this.skuSizeInfo = res.data.result.skuInfo.props[1].list
				this.skuColorInfo = res.data.result.skuInfo.props[0].list
			},
			async getRecommend() {
				const res = await this.$myRequest({
					url: '/recommend'
				})
				this.recommend = res.data.data.list
			},
			backTop() {
				uni.pageScrollTo({
					scrollTop: 0
				})
			},
			// 商品底部导航点击
			leftClick(e) {
				if(e.index == 2) {
					uni.switchTab({
						url: '../cart/cart'
					})
				} else if(e.index == 0) {
					if(this.isCollection) {
						this.isCollection = false
						this.collectIt()
					} else {
						this.isCollection = true
						this.collectIt()
					}
				} 
			},
			rightClick(e) {
				// 购物车点击
				if(e.index == 0) {
					this.$refs.popup.open()
					this.isCart = true
				} else if(e.index == 1) {
					// 立即购买点击
					this.$refs.popup.open()
					this.isCart = false
				}
			},
			navClick(x) {
				console.log(this.positionYs);
				uni.pageScrollTo({
					scrollTop: this.positionYs[x] - 44
				})
			},
			getTop(a) {
				uni.createSelectorQuery().in(this).select(a).boundingClientRect().exec(res => {
					this.positionYs.push(res[0].top)
				})
			},
			imgLoad() {
				this.getPosition()
				console.log('图片加载完成');
			},
			close() {
				this.$refs.popup.close()
			},
			// 添加至购物车
			addCart(option) {
				const product = {}
				product.id = this.goodID
				product.img = option[0].img
				product.size = option[0].size
				product.style = option[0].style
				product.price = option[0].nowprice
				product.title = this.itemInfo.title
				product.count = option[1]
				
				this.$store.dispatch('addToCart', product).then(res => {
					uni.showToast({
						title: res,
						icon: 'none'
					})
				})
				this.close()
				this.options[2].info = this.$store.getters.cartListCount
			},
			// 收藏
			collectIt() {
				if(this.isCollection) {
					this.options[0].icon = 'heart-filled'
					this.options[0].bgColor = 'red'
					this.saveInColl()
				} else {
					this.options[0].icon = 'heart'
					this.options[0].bgColor = ''
					this.delCol()
				}
			},
			// 加入vuex
			saveInColl() {
				const colGood = {}
				colGood.id = this.goodID,
				colGood.title = this.itemInfo.title
				colGood.price = this.itemInfo.lowNowPrice
				this.itemInfo.topImages && (colGood.img = this.itemInfo.topImages[0])
				// colGood.img = this.itemInfo.topImages[0]
				colGood.isSelect = false
				this.$store.dispatch('collectGood', colGood).then(res => {
					uni.showToast({
						icon: 'none',
						title: '添加收藏夹成功',
						duration: 1000
					})
				})
			},
			// 从vuex删除
			delCol() {
				this.collGoodList.find(item => {
					return item.id == this.goodID
				}).isSelect = true
				this.$store.dispatch('delCollect').then(res => {
					uni.showToast({
						icon: 'none',
						title: res,
						duration: 1000
					})
				})
			},
			// 判断是否已经收藏
			isHasColl() {
				let foo = this.collGoodList.find(item => {
					return item.id == this.goodID
				})
				if(foo) {
					this.isCollection = true
					this.options[0].icon = 'heart-filled'
					this.options[0].bgColor = 'red'
				}
			}
		}
	}
</script>

<style scoped>
	.detail {
		padding-bottom: 100rpx;
	}
	.banner {
		width: 750rpx;
		height: 810rpx;
	}
	.banner image {
		width: 750rpx;
		height: 900rpx;
	}
	.info {
		width: 750rpx;
		height: 336rpx;
		border-bottom: 10rpx solid #f2f5f8;
		padding: 0 8px;
		box-sizing: border-box;
		margin-top: 12rpx;
	}
	.price-info {
		margin-top: 16rpx;
	}
	.price {
		color: #ff5777;
		font-size: 48rpx;
	}
	.o-price {
		font-size: 26rpx;
		margin-left: 10rpx;
		color: #999;
		text-decoration: line-through;
	}
	.dis {
		background-color: #ff5777;
		color: #FFFFFF;
		font-size: 24rpx;
		border-radius: 16rpx;
		padding: 4rpx 14rpx;
		/* margin-left: 6rpx; */
		position: relative;
		top: -14rpx;
		left: 12rpx;
	}
	.good-info {
		display: flex;
		justify-content: space-between;
		color: #999999;
		font-size: 26rpx;
		margin-top: 16rpx;
		border-bottom: 1px solid rgba(100,100,100, .1);
		padding: 10rpx 0;
	}
	.server {
		display: flex;
		justify-content: space-between;
		font-size: 26rpx;
		flex-wrap: wrap;
		line-height: 26rpx;
		margin: 20rpx 0;
	}
	.server image {
		height: 30rpx;
		width: 30rpx;
		position: relative;
		top: 6rpx;
		color: #333;
	}
	.ser-icon {
		position: relative;
		top: 6rpx;
	}
	.detail-tab-bar {
		position: fixed;
		bottom: 0;
		width: 750rpx;
	}
</style>
