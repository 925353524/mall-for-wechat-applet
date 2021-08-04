<template>
	<view>
		<!-- 地址列表 -->
		<view style="padding-bottom: 90px;">
			<view v-for="(item, index) in addList" :key="index">
				<mall-address :addData="item"></mall-address>
			</view>
		</view>	
		<!-- 新增地址 -->
		<view class="add-new">
			<view class="add-btn" @click="addAddress">+ 添加收货地址</view>
		</view>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	import mallAddress from '@/components/common/mall-address/mallAddress.vue'
	
	export default {
		components: {
			mallAddress
		},
		computed: {
			...mapGetters(['addList'])
		},
		methods: {
			addAddress() {
				uni.navigateTo({
					url:'./editAddress'
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #f0f0f0;
	}
</style>

<style scoped>
	.add-new {
		position: fixed;
		width: 100%;
		height: 90px;
		bottom: 0;
		left: 0;
		background: #FFFFFF;
	}
	.add-btn {
		text-align: center;
		width: 95%;
		background: #ff8198;
		color: #FFFFFF;
		margin: 10px auto 0;
		border-radius: 30rpx;
		height: 45px;
		line-height: 45px;
	}
	
	
</style>
