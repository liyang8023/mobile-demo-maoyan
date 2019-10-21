<template>
  <div class="mineIndex">
    <!-- 顶部 -->
    <div class="redPart">
      <p class="noticeStyle">
        <icon name="notice" class="noticeIcon"></icon>
      </p>
      <div class="information">
        <div class="picture">
          <img :src="userInfo.img" alt="" class="picImg">
        </div>
        <div class="right">
          <p>{{userInfo.name}}</p>
          <p class="level">{{userInfo.level}}
            <icon name="go" class="icon"></icon>
          </p>
          <p class="homepage">
            <span>个人首页</span>
            <icon name="go" class="homepageIcon"></icon>
          </p>
        </div>
      </div>
      <div class="footprint">
        <p style="width:50px;margin-right:20px;font-weight:700;font-size:12px;">
          <icon name="footprint" class="footprintIcon"></icon>
          <span>轨迹</span>
        </p>
        <p class="list">
          <span>电影{{userInfo.movie}}</span>
          <span>演出{{userInfo.perform}}</span>
          <span>赛事{{userInfo.match}}</span>
        </p>
      </div>
      <div class="order">
        <span class="mineOrder">我的订单</span>
        <span class="allOrder">
          全部订单
          <icon name="go" class="icon"></icon>
        </span>
      </div>
    </div>
    <!-- 我的服务 -->
    <div class="myService">
      <p style="font-size:16px;">我的服务</p>
      <div class="serviceList">
        <div class="serviceItem" v-for="(item, index) in serviceLsit" :key="index">
          <icon :name="item.icon" class="serviceIcon"></icon>
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
    <div class="other">
      <ul>
        <li v-for="(item, index) in otherList" :key="index">
          <span>{{item}}</span>
          <icon name="go" class="otherIcon"></icon>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {
        name: 'LBv123456',
        img: require('@/assets/images/minePicture.jpeg'),
        level: 'v1青铜会员',
        movie: 10,
        perform: 0,
        match: 0
      },
      serviceLsit: [
        {
          icon: 'love',
          name: '折扣卡'
        }, {
          icon: 'love',
          name: '优惠券'
        }, {
          icon: 'love',
          name: '猫享卡'
        }, {
          icon: 'love',
          name: '银行活动'
        }, {
          icon: 'love',
          name: '周边商场'
        }, {
          icon: 'love',
          name: '0元抽'
        }, {
          icon: 'love',
          name: '明星应援'
        }, {
          icon: 'love',
          name: '在线视频'
        }, {
          icon: 'love',
          name: '猫眼号认证'
        }, {
          icon: 'love',
          name: '借钱'
        }
      ],
      otherList: ['设置', '0元中航海王周边']
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/main.scss';
  .mineIndex {
    background: $backgound-color;
    overflow: hidden;
    .redPart {
      background-image: linear-gradient($main-red, #8d2535);
      padding: 10px;
      .noticeStyle {
        text-align: right;
      }
      .noticeIcon {
        width: 28px;
        height: 28px;
      }
      .information {
        display: flex;
        .picture {
          width: 50px;
          height: 50px;
          overflow: hidden;
          border-radius: 50%;
          margin-right: 20px;
          .picImg {
            width: 100%;
            height: auto;
          }
        }
        .right {
          flex: 1;
          border-bottom: 1px solid rgba(204, 204, 204, .7);
          padding-bottom: 15px ;
          font-size: 20px;
          color: $main-white;
          position: relative;
          .level {
            font-size: 12px;
            // margin-top: 5px;
            background: $explain-font;
            padding:2px 5px; 
            display: inline;
            border-radius: 10px;
            opacity: 0.9;
          }
          .homepage {
            font-size: 16px;
            background: rgba(204, 204, 204, .4);
            border-radius: 10px;
            position: absolute;
            right: -6%;
            top: 30%;
            padding:2px 8px;  
            // opacity: 0.9;
            .homepageIcon {
              width: 12px;
              height: 12px;
              margin-top: -2px;
            }
          }
        }
      }
      .footprint {
        display: flex;
        padding-top: 10px;
        color:#fff;
        .footprintIcon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: $main-white;
          margin-top: -3px;
        }
        .list {
          flex: 1;
          display: flex;
          justify-content: space-around;
        }
      }
      .order {
        background: $main-white;
        height: 36px;
        line-height: 36px;
        border-radius: 3px;
        padding: 0 10px;
        font-size: 15px;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        .allOrder {
          font-size: 12px;
          color: #888;
        }
        .mineOrder {
          font-weight: 600;
        }
      }
    }
    .myService {
      padding: 20px;
      background: $main-white;
      .serviceItem {
        display: inline-block;
        width: 20%;
        text-align: center;
      }
      .serviceIcon {
        width: 32px;
        height: 32px;
        margin: 20px 0 5px;
      }
    }
    .other {
      padding: 0 20px;
      background: $main-white;
      font-size: 14px;
      margin-top: 10px;
      li {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ddd;
        padding: 10px 5px;
        margin-top: 2px;
        .otherIcon {
          width: 12px;
          height: 12px;
          margin-top: 5px;
        }
      }
    }
    
  }
</style>