<template>
	<view>
		<!-- 妹有收藏 -->
		<view class="no-coll" v-show="!(collGoodCount > 0)">暂时没有收藏哦，快去看看吧</view>
		
		<view style="padding-top: 60rpx;" :class="{'more-less': isShowCheckBox}" v-show="(collGoodCount > 0)">
			<!-- 按键栏 -->
			<view class="tool">
				<view @click="manageCol">
					<text v-show="!isShowCheckBox">管理</text>
					<text v-show="isShowCheckBox">完成</text>
				</view>
			</view>
			<view class="coll" v-for="(item, index) in collGoodList" :key="index">
				<!-- 选框 -->
				<view class="select" v-show="isShowCheckBox">
					<view class="select-box" @click="selectClick(item)">
						<uni-icons type="checkbox-filled" color="#ff8198" size="30" v-show="item.isSelect"></uni-icons>
						<uni-icons type="circle" color="#999999" size="30" v-show="!item.isSelect"></uni-icons>
					</view>
				</view>
				<!-- 商品 -->
				<collect-good-item 
					:productInfo = item
					class="coll-list"/>
			</view>
			<!-- 操作 -->
			<view class="oper" v-show="isShowCheckBox">
				<view class="oper-left" @click="selectAll">
					<view class="select-box">
						<uni-icons type="checkbox-filled" color="#ff8198" size="30" v-show="isAllSelect"></uni-icons>
						<uni-icons type="circle" color="#999999" size="30" v-show="!isAllSelect"></uni-icons>
					</view>
					<text class="oper-name">全选</text>
				</view>
				<view class="oper-btn" @click="delColl">删除</view>
			</view>
		</view>
	</view>
</template>

<script>
	import collectGoodItem from '@/components/content/collectGoodItem/collectGoodItem.vue'
	
	import { mapGetters } from 'vuex'
	
	export default {
		data() {
			return {
				isShowCheckBox: false,
			}
		},
		components: {
			collectGoodItem
		},
		computed: {
			...mapGetters(['collGoodList','collGoodCount']),
			// 是否是全选
			isAllSelect() {
				if(this.collGoodCount == 0) {
					return false
				} else {
					return !this.collGoodList.find(item => {
						return !item.isSelect
					})
				}
			}
		},
		onUnload() {
			this.cancleAllSelect()
		},
		methods: {
			// 管理按钮
			manageCol() {
				this.isShowCheckBox = !this.isShowCheckBox
				if(!this.isShowCheckBox) {
					this.cancleAllSelect()
				}
			},
			// 左侧选择
			selectClick(item) {
				item.isSelect = !item.isSelect
			},
			// 全选按钮
			selectAll() {
				if(this.isAllSelect) {
					for(let i of this.collGoodList) {
						i.isSelect = false
					} 
				} else {
					for(let i of this.collGoodList) {
						i.isSelect = true
					}
				}
			},	
			// 取消所有的选择
			cancleAllSelect() {
				for(let i of this.collGoodList) {
					i.isSelect = false
				}
			},
			// 移除收藏
			delColl() {
				let foo = this.collGoodList.find(item => {
					return item.isSelect
				})
				if(foo) {
					uni.showModal({
						content: '是否从要收藏夹中移除该宝贝',
						showCancel:true,
						confirmColor:'red',
						success: (res) => {
							if(res.confirm) {
								this.$store.dispatch('delCollect').then(res => {
									uni.showToast({
										icon: 'none',
										title: res,
										duration: 1000
									})
								})
							} else if(res.cancel) {
								console.log('取消');
							}
						}
					})
				} else {
					uni.showToast({
						duration:1500,
						icon: 'none',
						title: '请选择要移除的宝贝'
					})
				}
			}
		}
	}
</script>

<style>
	.no-coll {
		width: 100%;
		text-align: center;
		position: absolute;
		top: 35%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.more-less {
		padding-bottom: 100rpx;
	}
	.tool {
		position: fixed;
		top: 0;
		/* #ifdef H5 */
		top: calc(44px + env(safe-area-inset-top));
		/* #endif */
		left: 0;
		width: 100%;
		height: 60rpx;
		line-height: 60rpx;
		display: flex;
		flex-direction: row-reverse;
		border-bottom: 1px solid rgba(204, 204, 204, .8);
		padding: 0 10px;
		box-sizing: border-box;
		background: #FFFFFF;
		z-index: 3;
		font-size: 17px;
		color: #000000;
	}
	.coll {
		display: flex;
		width: 100%;
	}
	.coll-list {
		flex: 1;
	}
	.select {
		width: 13%;
		margin: auto;
	}
	.select-box {
		text-align: center;
	}
	.oper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding: 0 4%;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100rpx;
		background: #FFF;
		border-top: 1px solid rgba(204, 204, 204, .8);
	}
	.oper-left {
		text-align: center;
		display: flex;
		align-items: center;
	}
	.oper-left .oper-name {
		margin-left: 10rpx;
	}
	.oper-btn {
		width: 25%;
		text-align: center;
		border-radius: 30rpx;
		height: 70rpx;
		line-height: 70rpx;
		background: #ff4500;
		color: white;
	}
</style>
