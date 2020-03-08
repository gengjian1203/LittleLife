// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  funShowToast: function(str) {
    wx.showToast({
      title: str,
      icon: 'none',
      duration: 1000
    })
  },

  // 拉取授权
  HandlePullMessageClick: function () {
    console.log('HandlePullMessageClick')

    const _this = this;
    // 'P8aO7OSi9vuL2Dlekn94Js_j6CtZSnHNeM4KMwaXN2U',
    // 'HLH_Eik7MgPwsPvUhoTfRW5ypvZj7T5owQl_KfPM5bY',
    // 'EOPI-7qoDKeCyK6NxR7y_NB0wZL7ZvsI5FvDd-xtdXA',
    // 'dwThvkscVUnpdgLdnAbm_pcyDhGRTtnGf41B4W8gH5c'
    const strMsgId = 'v7s56Vb1U_GJWeCMxoDi7RWKiXQM37TTV4gVJAYU19E';

    wx.requestSubscribeMessage({
      // 申请的订阅模板id
      tmplIds: [
        strMsgId,
      ],
      success(res) {
        console.log(res[strMsgId]);

        if (res[strMsgId] === 'accept') {
          _this.funShowToast('订阅了一条消息');
        } else if (res[strMsgId] === 'reject') {
          wx.showModal({
            title: '提示',
            content: '您拒绝了订阅消息，是否前往修改权限',
            cancelText: '取消',
            confirmText: '确认',
            success(res) {
              if (res.confirm) {
                // 用户点击了确定属性的按钮
                wx.openSetting({
                  success: (res) => {
                    console.log('打开权限页面');
                  }
                })
              } else if (res.cancel) {
                // 用户点击了取消属性的按钮

              }
            }
          });
        } else {
          _this.funShowToast(res[strMsgId]);
        }
      },
      fail(res) {
        console.log(res)
      },
      complete(res) {
        console.log(res)
      }
    })
  },

  // 云函数模拟后台发送消息
  HandleSendMessageClick: function () {
    console.log('HandleSendMessageClick')
    wx.login({
      //获取code
      success: function (res) {
        var code = res.code; //返回code
        console.log(code);
        var appId = 'wx821aadcd431646f9';
        var secret = 'edea74a278c12d9453a83ea7ed9e24a7';
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code',
          data: {},
          header: {
            'content-type': 'json'
          },
          success: function (res) {
            var openid = res.data.openid //返回openid
            console.log('openid为' + openid);

            wx.cloud.callFunction({
              name: 'pushMyselfMessage',
              data: {
                openid: openid
              }
            }).then((res) => {
              console.log(res)
            })
          }
        })
      }
    })
  },

  // 测试云函数的调用
  HandleTestCloudFunction: function () {
    console.log('HandleGotoLivePlayerPage');
    wx.cloud.callFunction({
      name: 'getSessionInfo',
      data: {
      }
    }).then((res) => {
      console.log(res)
    })
  },

  // 跳转到直播页面
  HandleGotoLivePlayerPage: function () {
    console.log('HandleGotoLivePlayerPage');
    wx.cloud.callFunction({
      name: 'getLiveInfo',
      data: {
      }
    }).then((res) => {
      console.log('HandleGotoLivePlayerPage', res);
    })
  },


})
