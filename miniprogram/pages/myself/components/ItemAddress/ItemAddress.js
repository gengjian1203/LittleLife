// pages/myself/components/ItemAddress/ItemAddress.js
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
    strTitle: '门店地址',
    listAddressInfo: [{
      id: 0,
      name: '一店',
      address: '花湖街道1111号花湖街道1111号花湖街道1111号花湖街道1111号花湖街道1111号花湖街道1111号花湖街道1111号'
    }, {
      id: 1,
      name: '二店',
      address: '花湖街道1111号'
    }, {
      id: 2,
      name: '三店',
      address: '花湖街道1111号'
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    HandleItemClick: function () {
      console.log('弹出地图')
      // wx.createMapContext('myMap', this)
    }
  }
})
