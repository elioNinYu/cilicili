<template>
  <div class="item-box">
    <video-list-item
      :data-item='item'
      v-for="item in listData"
      :key="item.id"
    />
  </div>
</template>

<script>
  import VideoListItem from './VideoListItem'

  export default {
    name: 'VideoList',
    components: {
      VideoListItem
    },
    props: {
      listData: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .item-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    // margin-top: 10.667vw;
  }
</style>