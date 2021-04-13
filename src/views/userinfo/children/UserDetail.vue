<template>
  <div class="user-detail">
    <div class="banner"></div>
    <div class="edit">
      <div class="face">
        <img v-if="userInfo.user_img" :src="userInfo.user_img" alt="">
        <img v-else src="@/assets/img/face_max.jpg" alt="">
      </div>
      <div class="list">
        <ul>
          <li><span>--</span><span>粉丝</span></li>
          <li><span>3</span><span>关注</span></li>
          <li><span>4</span><span>获赞</span></li>
        </ul>
        <div class="edit-btn" @click="$router.push('/edit')">编辑资料</div>
      </div>
    </div>
    <div class="info">
      <h2 class="user-name">
        {{ userInfo.username ? userInfo.username : '小了白了兔iii' }}
      </h2>
      <p class="desc">
        {{ !userInfo.user_desc ? userInfo.user_desc : '这个人很神秘，什么都没有写' }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserDetail',
    props: {
      userInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .user-detail {
    background-color: #fff;
    padding-bottom: 0.853vw;
    border-bottom: 0.5vw solid #f4f4f4;

    .banner {
      width: 100vw;
      height: 24vw;
      background-image: url("../../../assets/img/user_banner.png");
      background-size: cover;
      background-position: 50%;
    }

    .edit {
      display: flex;
      align-items: center;

      .face {
        flex: 1;
        display: flex;
        justify-content: center;
        
        img {
          width: 22.4vw;
          height: 22.4vw;
          border-radius: 11.2vw;
        }
      }

      .list {
        flex: 2;
        display: flex;
        flex-direction: column;

        ul{
          display: flex;

          li {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;

            span:nth-child(1) {
              font-size: 3.733vw;
              color: #212121;
            }

            span:nth-child(2) {
              font-size: 2.933vw;
              color: #999;
            }
          }

          li:nth-child(-n+2) {
            position: relative;

            &::after {
              content: '|';
              position: absolute;
              top: 1.8vw;
              right: 0.533vw;
              font-size: 4.22vw;
              color: #e7e7e7;
            }
          }
        }

        .edit-btn {
          align-self: center;
          width: 58.667vw;
          padding: 1.44vw 0;
          margin-top: 3vw;
          border: 1px solid #fb7299;
          font-size: 3.73333vw;
          color: #fb7299;
          text-align: center;
          border-radius: 1.06667vw;
        }
      }
    }

    .info {
      padding: 0 3.067vw;

      .user-name {
        font-weight: 400;
        font-size: 4.8vw;
        color: #212121;
      }
      
      .desc {
        font-size: 3.4vw;
        color: #999;
      }
    }
  }
</style>