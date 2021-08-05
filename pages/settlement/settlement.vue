<template>
	<view>
		<!-- 地址 -->
		<mall-address :addData="myAdress" class="settle-address"></mall-address>
		<!-- 商品信息 -->
		
	</view>
</template>

<script>
	import mallAddress from '@/components/common/mall-address/mallAddress.vue'
	
	export default {
		components: {
			mallAddress
		},
		onReady() {
			uni.setNavigationBarTitle({
				title: '确认订单'
			})
		},
		computed: {
			myAdress() {
				let defaultAdd = this.$store.state.myAddress.filter(item => {
					return item.isDefault
				})
				return defaultAdd[0]
			}
		}
	}
</script>

<style scoped>
	.settle-address {
		border-top: 1px solid #f2f5f8;
		border-bottom: 16rpx solid #f2f5f8;
	}
</style>
