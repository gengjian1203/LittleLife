// pages/demo/demo.js
import regeneratorRuntime from "../../utils/runtime.js"
import Say from "../../common/Say.js"

const LIMIT_MUSIC = 9

Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrBannerList: [{
      id: 0,
      url: 'https://dummyimage.com/750x300&text=Banner1'
    }, {
      id: 1,
      url: 'https://dummyimage.com/750x300&text=Banner2'
    }, {
      id: 2,
      url: 'https://dummyimage.com/750x300&text=Banner3'
    }],
    arrMusicList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.foo()
    console.log("onLoad()")
    this._getMusicList()
  },

  _getMusicList() {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'getMusicList',
      data: {
        start: this.data.arrMusicList.length,
        count: LIMIT_MUSIC
      }
    }).then((res) => {
      // this.data.arrMusicList.push(res.result.data)
      this.setData({
        arrMusicList: this.data.arrMusicList.concat(res.result.data)
      })
      wx.hideLoading()
      // console.log(res)
    })
  },

  async foo() {
    console.log("foo")
    let strResult = await this.funTime()
    console.log(strResult)
    console.log("1111111")
  },

  funTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("aaaaaaa")
        resolve("resolve")
      }, 3000)
    })
  },

  onBtnClick() {
    Say.SayHello("Geng")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady()")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow()")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide()")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload()")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh()")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom()")
    this._getMusicList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage()")
  }
})