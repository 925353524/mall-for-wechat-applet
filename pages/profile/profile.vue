<template>
	<view>
		<!-- 个人信息 -->
		<person-info></person-info>
		<!-- 我的订单 -->
		<my-order></my-order>
		
	</view>
</template>

<script>
	import personInfo from './childCom/personInfo.vue'
	import myOrder from './childCom/myOrder.vue'
	
	export default {
		data() {
			return {
				
			}
		},
		components: {
			personInfo,
			myOrder
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
