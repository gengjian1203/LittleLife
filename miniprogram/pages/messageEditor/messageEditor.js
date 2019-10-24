// miniprogram/pages/messageEditor/messageEditor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    strTitle: '',
    strText: '',
    nTextLength: 0,
    arrImageInfo: [],
    nTypeIndex: 0,
    arrType: ['房源', '车源', '招聘', '咨询'],
    strPosition: '无地址信息',
    strAddress: '',
    strTelephone: '',
    strMoney: '',
    bMoneySelectFace: false
  },

  HandleTitleInput: function(event) {
    this.setData({
      strTitle: event.detail.value
    });
  },

  HandleTextInput: function(event) {
    this.setData({
      strText: event.detail.value,
      nTextLength: event.detail.value.length
    });
  },

  getImagePath: function(event) {
    console.log(event);
    this.setData({
      arrImageInfo: event.detail
    })
  },

  HandleTypeChange: function(event) {
    this.setData({
      nTypeIndex: event.detail.value
    });
  },

  HandleAddressInput: function(event) {
    this.setData({
      strAddress: event.detail.value
    })
  },

  HandleTelephoneInput: function(event) {
    this.setData({
      strTelephone: event.detail.value
    })
  },

  HandleMoneyInput: function(event) {
    this.setData({
      strMoney: event.detail.value
    })
  },

  HandleMoneyFaceClick: function(event) {
    this.setData({
      strMoney: this.data.bMoneySelectFace ? '' : '面议',
      bMoneySelectFace: !this.data.bMoneySelectFace
    });
  },

  HandleCommitClick: function(event) {
    console.log(this.data.strTitle)
    console.log(this.data.strText)
    console.log(this.data.nTextLength)
    console.log(this.data.arrImageInfo)
    console.log(this.data.nTypeIndex)
    console.log(this.data.arrType[this.data.nTypeIndex])
    console.log(this.data.strPosition)
    console.log(this.data.strAddress)
    console.log(this.data.strTelephone)
    console.log(this.data.strMoney)
    console.log(this.data.bMoneySelectFace)
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

  }
})
