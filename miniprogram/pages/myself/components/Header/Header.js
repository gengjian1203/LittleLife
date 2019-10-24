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
        this.login()
      } else {
        // 拒绝授权
        wx.showToast({
          title: '授权失败',
          icon: 'none'
        })
      }
    },

    // 用户的登录操作
    login: function() {
      wx.getSetting({
        success: (res1) => {
          if (res1.authSetting['scope.userInfo']) {
            // 用户已经授权过 登录直接显示头像、昵称
            wx.getUserInfo({
              success: (res2) => {
                console.log(res2.userInfo);
                this.setData({
                  'objMemberInfo.nickName': res2.userInfo.nickName,
                  'objMemberInfo.avatarUrl': res2.userInfo.avatarUrl
                })
              },
              fail: (err) => {
                wx.showToast({
                  title: 'myself::getUserInfo()失败',
                  icon: 'none'
                })
              }
            });
          }
          // 用户如果尚未授权，则不做提示
        },
        fail: (err) => {
          wx.showToast({
            title: 'myself::getSettings()失败',
            icon: 'none'
          });
        }
      })
    }
  },

  // 组件的生命周期
  lifetimes: {
    attached: function() {
      // 登录操作
      this.login();
    }
  }
})
