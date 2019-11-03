//app.js
App({
  onLaunch: function() {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'develop-0loik',
        traceUser: true,
      })
    }

    this.globalData = {
      // 存放全局数据
    }

    // 对log重新封装
    // console.log = ((oriLogFunc) => {
    //   return (str) => {
    //     if (false) {
    //       oriLogFunc.call(console, str);
    //     }
    //   }
    // })(console.log);
  }
})
