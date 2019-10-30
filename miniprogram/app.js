// 是否打印log
const bShowLog = true;

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
      // regeneratorRuntime: require('utils/runtime.js')
    }

    // 对log重新封装
    // console.log = ((oriLogFunc) => {
    //   return (str) => {
    //     if (bShowLog) {// 需要打印 此处改为 true
    //       oriLogFunc.call(console, str);
    //     }
    //   }
    // })(console.log);
  }
})
