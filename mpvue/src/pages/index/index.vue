<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto" @click='getGroup(12313)'>
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>
    <a :href="aurl">去新的页面</a>
    <i class="iconfont icon-aircraft data-v-7ca92acd"></i>
    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

  </div>
</template>

<script>
import card from '@/components/card'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      aurl: '../newpage/newpage'
    }
  },

  components: {
    card
  },
  computed: {
    ...mapGetters([
      'group'
    ])
  },
  watch: {
    motto () {
      console.log(this.motto)
    }
  },
  methods: {
    ...mapActions([
      'getGroup'
    ]),
    bindViewTap () {
      const url = '../logs/logs'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    onShow () {
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    this.getGroup([{name: '1231313'}])
    console.log(typeof (this.group[0]))
  }
}
</script>

  
<style lang="scss" scoped="" type="text/css" scoped>
  .userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  .userinfo-nickname {
    color: red;
  }
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
</style>

