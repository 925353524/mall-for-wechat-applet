<template>
	<view>
		<view class="add">
			<view class="add-wrap">
				<!-- 图标 -->
				<view class="add-icon"><uni-icons type="location-filled" size="30" color="#ff5777"></uni-icons></view>
				<!-- 详细地址 -->
				<view class="add-content">
					<view class="add-name">
						{{addData.name}}
						<text class="add-tel">{{addData.tel}}</text>
					</view>
					<view class="add-info">
						{{addData.region}} {{addData.detail}}
					</view>
				</view>
				<!-- 修改 -->
				<view class="add-icon" @click="editAdd"><uni-icons type="compose" size="30" color="#999999"></uni-icons></view>
			</view>
			<!-- 管理 -->
			<view class="add-oper">
				<view class="oper-left" @click="changeDefault">
					<uni-icons type="circle" color="#ff8198" size="25" v-show="!addData.isDefault"></uni-icons>
					<uni-icons type="checkbox-filled" color="#ff8198" size="25" v-show="addData.isDefault"></uni-icons>
					<text>默认地址</text>
				</view>
				<view class="oper-right" @click="delAdd">
					删除
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			addData: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			editAdd() {
				uni.navigateTo({
					url:'/pages/profile/childPage/editAddress?timeID=' + this.addData.timeID
				})
			},
			changeDefault() {
				this.addData.isDefault = !this.addData.isDefault
				this.$store.dispatch('changeDefault', this.addData).then(res => {
					console.log(res);
				})
			},
			delAdd() {
				uni.showModal({
					content:'确定要删除该地址吗',
					success: (res) => {
						if(res.confirm) {
							this.$store.dispatch('delAdd', this.addData).then(res => {
								console.log(res);
							})
						} 
					}
				})
			}
		}
	}
</script>

<style scoped>
	.add {
		/* border: 1px solid rgba(204, 204, 204, .8); */
		padding: 20rpx;
		width: 94%;
		margin: 30rpx auto;
		border-radius: 30rpx;
		overflow: hidden;
		background: #fff;
		/* #ifdef MP-WEIXIN */
		width: 90%;
		/* #endif */
	}
	.add-wrap {
		width: 100%;
		display: flex;
		padding: 20rpx 0;
		border-bottom: 1px solid rgba(204, 204, 204, .8);
		color: #000000;
	}
	.add-icon {
		/* width: 10%; */
		display: flex;
		align-items: center;
	}
	.add-icon .uni-icons {
		margin: 0 auto;
	}
	.add-content {
		flex: 1;
		box-sizing: border-box;
		padding: 0 10rpx;
	}
	.add-name {
		font-size: 36rpx;
		margin-bottom: 10rpx;
	}
	.add-tel {
		font-size: 30rpx;
		color: #999999;
		margin-left: 30rpx;
	}
	.add-info {
		font-size: 30rpx;
	}
	.add-oper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 18rpx 0;
	}
	.oper-left {
		display: flex;
		align-items: center;
	}
	
</style>
