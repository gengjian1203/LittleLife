// miniprogram/pages/messageEditor/messageEditor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nTextLength: 0,
    nTypeIndex: 0,
    arrType: ['房源', '车源', '招聘', '咨询']
  },

  HandleTextInput: function(event) {
    this.setData({
      nTextLength: event.detail.value.length
    })
  },

  HandleTypeChange: function(event) {
    this.setData({
      nTypeIndex: event.detail.value
    })
  },

  HandleTestClick: function(event) {
    console.log('HandleTestClick');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '编辑消息'
    })
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

  }
})
