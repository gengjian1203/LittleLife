// pages/myself/myself.js
import Common from '../../utils/Common'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 产品介绍
    listOptionsDesc: {},
    // 联系方式
    listOptionsTelephone: {},
    // 具体位置
    listOptionsPosition: {},
    // 管理者模块
    listOptionsAdmin: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init();
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

  //////////////////////////////////////////////////
  // 消息事件
  //////////////////////////////////////////////////


  //////////////////////////////////////////////////
  // 自定义函数
  //////////////////////////////////////////////////
  // 初始化数据
  init: function () {
    this.getPageOptions();
  },

  // 获取数据
  getPageOptions: function () {
    this.setData({
      listOptionsDesc: {
        title: '产品介绍',
        desc: '据交通运输部微信公众号消息，10月31日，全国高速公路ETC门架系统建设和ETC车道改造工程建设全面完工，取消高速公路省界收费站工作由工程建设阶段顺利转入联调联试阶段。'
      },
      listOptionsTelephone: {
        title: '联系方式',
        data: [{
          icon: 'icon-call',
          left: '电话号码',
          right: '13333333333',
          fun: 'funCallTelephone',
          param: {}
        }]
      },
      listOptionsPosition: {
        title: '附近门店',
        data: [{
          icon: 'icon-position',
          left: '店铺1',
          right: '东街西街1东街西街1东街西街1东街西街1东街西街1东街西街1',
          fun: 'funGotoPagePosition',
          param: {}
        }, {
          icon: 'icon-position',
          left: '店铺2',
          right: '东街西街1',
          fun: 'funGotoPagePosition',
          param: {}
        }, {
          icon: 'icon-position',
          left: '店铺3',
          right: '东街西街1',
          fun: 'funGotoPagePosition',
          param: {}
        }, {
          icon: 'icon-position',
          left: '店铺4',
          right: '东街西街1',
          fun: 'funGotoPagePosition',
          param: {}
        }],
      },
      listOptionsAdmin: {
        title: '管理功能',
        data: [{
          icon: 'icon-admin',
          left: '员工登录',
          fun: 'funGotoPageAdministrator',
          param: {}
        }]
      }
    }, () => {

    });
  }
})
