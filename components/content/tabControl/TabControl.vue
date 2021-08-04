<template>
  <view class="tab-control">
    <view v-for="(item, index) in titles" 
			:key="index"
      class="tab-control-item" 
      :class="{active: index === currentIndex}"
      @click="itemClick(index)">
      <span>{{item}}</span>
    </view>
  </view>
</template>

<script scoped>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabItemClick', index)
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 30rpx;
    background-color: #fff;
    z-index: 9;
  }

  .tab-control-item {
    flex: 1;
    height: 80rpx;
    line-height: 80rpx;
  }

  .tab-control-item span {
    padding: 10rpx;
  }

  .active {
    color: #ff8198;
    
  }

  .active span {
    border-bottom: 6rpx solid #ff8198;
  }
</style>