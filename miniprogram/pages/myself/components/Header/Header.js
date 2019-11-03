// pages/myself/components/Header/Header.js
import Common from '../../../../utils/Common'

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
        Common.login().then((res) => {
          this.showUserInfo();
        }).catch((err) => {
          wx.showToast({
            title: '获取信息失败',
            icon: 'none'
          })
        })
      } else {
        // 拒绝授权
        wx.showToast({
          title: '授权失败',
          icon: 'none'
        })
      }
    },

    // 将缓存中的用户信息，渲染到页面上
    showUserInfo: function () {
      const nickName = wx.getStorageSync('UserInfo_nickName');
      const avatarUrl = wx.getStorageSync('UserInfo_avatarUrl');
      if (nickName && avatarUrl) {
        this.setData({
          'objMemberInfo.nickName': nickName,
          'objMemberInfo.avatarUrl': avatarUrl
        })
      }
    }
  },

  // 组件的生命周期
  lifetimes: {
    attached: function() {
      Common.login().then(() => {
        this.showUserInfo()
      })
    }
  }
})
