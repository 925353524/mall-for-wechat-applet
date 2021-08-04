<template>
	<view>
		<uni-grid :column="3" :showBorder="false" :highlight="false" :square="true">
		    <uni-grid-item v-for="item in rightInfo" class="right-list">
					<image :src="item.image" mode="aspectFit"  @click="goAnother(item)"></image>
					<text>{{item.title}}</text>
		    </uni-grid-item>
		</uni-grid>
	</view>
</template>

<script>
	export default {
		props: {
			rightInfo: {
				type: Array,
				default() {
					return []
				}
			}
		},
		methods: {
			goAnother(e) {
				// window.location.href = e.link
				console.log(111);
			}
		},
	}
</script>

<style>
	.right-list {
		margin-bottom: 10rpx;
	}
	.right-list image{
		width: 75%;
		position: relative;
		top: 0;
		left: 13%;
	}
	.right-list text {
		text-align: center;
		font-size: 24rpx;
		color: black;
	}
</style>
