// pages/myself/components/Header/Header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    objMemberInfo: {
      avatarUrl: '/images/icon/icon_myself.png',
      nickName: '尚未登录',
      openID: '1'
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取授权回调函数
    HandleGetUserInfo: function(event) {
      if (event.detail.userInfo) {
        // 同意授权
        this.getUserInfo()
      } else {
        // 拒绝授权
      }
    },

    // 获取用户信息
    getUserInfo: function() {
      wx.getUserInfo({
        success: (res) => {
          this.setData({
            'objMemberInfo.nickName': res.userInfo.nickName,
            'objMemberInfo.avatarUrl': res.userInfo.avatarUrl
          });
        },
        fail: (err) => {
          console.log(err);
        }
      })
    }
  },

  // 组件的生命周期
  lifetimes: {
    attached: function() {
      this.getUserInfo()
    }
  }
})
