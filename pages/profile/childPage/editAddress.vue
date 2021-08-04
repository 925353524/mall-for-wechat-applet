<template>
	<view>
		
		<view class="add-wrapper">
			<uni-forms ref="form" :modelValue="addData" :rules="rules" errShowType="toast" validateTrigger="submit" :border="true" labelWidth="80px">
				<uni-forms-item label="收货人" name="name">
					<uni-easyinput type="text" placeholder="名字" v-model="addData.name" :inputBorder="false" maxlength="8"/>
				</uni-forms-item>
				<uni-forms-item label="手机号码" name="tel">
					<uni-easyinput type="number" placeholder="手机号" v-model="addData.tel" :inputBorder="false"/>
				</uni-forms-item>
				<uni-forms-item label="选择地区" name="region">
					<input placeholder="省  市  区" disabled="true" v-model="addData.region" @onConfirm="onConfirm" @click="openAddres" class="region"/>
					<uni-icons type="arrowright" class="arrow" color="grey" @click="openAddres"></uni-icons>
				</uni-forms-item>
				<uni-forms-item label="详细地址" name="detail">
					<textarea type="textarea" placeholder="街道/小区楼栋/乡村名称" v-model="addData.detail" :inputBorder="false" class="detail"/>
				</uni-forms-item>
			</uni-forms>
		</view>
		
		<view class="set-default">
			设置为默认地址
			<switch color="#ff8198"  :checked="addData.isDefault" @change="setDefault"/>
		</view>
		
		<view class="save-btn" @click="saveAdd">保 存</view>
		
		<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor="#007AFF"></simple-address>
				
	</view>
</template>

<script>
	import simpleAddress  from '@/components/common/simple-address/simple-address.vue'
	
	export default {
		data() {
			return {
				cityPickerValueDefault: [0, 0, 0],
				addData: {
					timeID: '',
					name: '',
					tel: '',
					region: '',
					regionArr: [],
					detail: '',
					isDefault: false
				},
				rules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '请填写收货人性名'
						}]
					},
					tel: {
						rules: [
							{
								required: true,
								errorMessage: '请填写手机号码'
							},
							{
								pattern: '^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\\d{8}$',
								errorMessage: '请输入正确的手机号码'
							}
						]
					},
					region: {
						rules: [
							{
								required: true,
								errorMessage: '请选择地区'
							}
						]
					},
					detail: {
						rules: [
							{
								required: true,
								errorMessage: '请填写详细地址'
							}
						]
					}
					
				}
			}
		},
		components: {
			simpleAddress 
		},
		onLoad(option) {
			if(option.timeID) {
				this.addData.timeID = option.timeID
				this.addData = this.$store.getters.addDetail(option.timeID)
			}
		},
		methods: {
			// 打开地址选择器
			openAddres() {
				if(this.addData.region != '') {
					var index = this.$refs.simpleAddress.queryIndex(this.addData.regionArr, 'label')
					this.cityPickerValueDefault = index.index
				}
				this.$refs.simpleAddress.open()
			},
			// 获取地址选择器地址
			onConfirm(e) {
				// this.pickerText = JSON.stringify(e);
				this.addData.region = e.label
				this.addData.regionArr = e.labelArr
			},
			// 设为默认地址
			setDefault(e) {
				this.addData.isDefault = e.target.value
			},
			// 保存地址
			saveAdd() {
				this.$refs.form.validate().then(res => {
					res.isDefault = this.addData.isDefault
					res.regionArr = this.addData.regionArr
					// 判断id是否存在，判断是添加还是修改
					if(this.addData.timeID == '') {
						// 添加地址
						const timeID = new Date().getTime()
						res.timeID = timeID
						
						this.$store.dispatch('addAddress', res).then(res => {
							uni.showToast({
									title: res,
									icon: 'none',
								})
								setTimeout(() => {
									uni.hideToast()
									uni.navigateBack({
										delta: 1
									})
								}, 1000)
							})
						
					} else {
						// 修改地址
						res.timeID = this.addData.timeID
						
						this.$store.dispatch('editAddress', res).then(res => {
							uni.showToast({
									title: res,
									icon: 'none',
								})
								setTimeout(() => {
									uni.hideToast()
									uni.navigateBack({
										delta: 1
									})
								}, 1000)
							})
					}
					
					console.log(res);
					
				}).catch(err => {
					console.log(err);
				})
				// this.addData.timeID = ''
			},
		}
	}
</script>

<style>
	.add-wrapper {
		width: 95%;
		margin: 0 auto;
		border-bottom: 1px #eee solid;
	}
	.region {
		line-height: 36px;
		height: 36px;
		font-size: 14px;
		padding-left: 10px;
		position: relative;
	}
	.arrow {
		position: absolute;
		top: 50%;
		right: 0;
		transform: translate(0, -50%);
	}
	.detail {
		height: 100rpx;
		font-size: 14px;
		padding-left: 10px;
		margin-top: 8px;
	}
	.set-default {
		display: flex;
		width: 95%;
		margin: 20rpx auto;
		justify-content: space-between;
		align-items: center;
		height: 36px;
		line-height: 36px;
		font-size: 14px;
	}
	.save-btn {
		width: 95%;
		margin: 40rpx auto 0;
		background: #ff8198;
		color: #FFFFFF;
		text-align: center;
		height: 45px;
		line-height: 45px;
		border-radius: 30rpx;
		font-size: 32rpx;
	}
</style>
