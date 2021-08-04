<template>
	<view v-if="Object.keys(params).length !=0">
		<view>
			<uni-table class="size">
				<uni-tr v-for="(item, index) in params.rule.tables[0]" :key="index">
					<uni-td v-for="(td, indey) in item" :key="indey">{{td}}</uni-td>
				</uni-tr>
			</uni-table>
		</view>
		<view class="params">
			<uni-table>
				<uni-tr v-for="(item, index) in params.info.set" :key="index">
					<uni-td class="aaa">{{item.key}}</uni-td>
					<uni-td class="pcolor">{{item.value}}</uni-td>
				</uni-tr>
			</uni-table>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			params: {
				type: Object,
				default() {
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	.size {
		border-bottom: 5px solid #f2f5f8;
	}
	.params {
		border-bottom: 5px solid #f2f5f8;
	}
	.pcolor {
		color: #eb4868;
	}
	.aaa {
		width: 100px;
	}
</style>
