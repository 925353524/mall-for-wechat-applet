<template>
  <view class="good-item" @click="goDetail">
    <image alt="" :src="showImage">
    <view class="item-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
			<image src="../../../static/img/collect.svg"></image>
      <span class="collect">{{goodsItem.cfav}}</span>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imgLoad() {
      // this.$bus.$emit('itemImgLoad')
    },
    goDetail() {
			uni.navigateTo({
				url: '/pages/detail/detail?id=' + (this.goodsItem.iid || this.goodsItem.item_id)	
			})
    }
  }
}
</script>

<style scoped>
  .good-item {
    padding-bottom: 80rpx;
    position: relative;

    width: 356rpx;
  }

  .good-item image {
    width: 356rpx;
    border-radius: 10rpx;
  }

  .item-info {
    font-size: 26rpx;
    position: absolute;
    bottom: 10rpx;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .item-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 6rpx;
  }

  .price {
    color: #ff8198;
    margin-right: 16rpx;
  }

  .collect {
    /* position: relative; */
  }
	.item-info image {
		width: 28rpx;
		height: 28rpx;
	}

 /* .collect::before{
    content: '';
    position: absolute;
    left: -30rpx;
    top: 2rpx;
    width: 28rpx;
    height: 28rpx;
    background: url(../../../static/img/common/collect.svg) 0 0/14px 14px;
  } */
</style>