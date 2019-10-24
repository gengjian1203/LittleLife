// pages/messageEditor/listImage/listImage.js
Component({
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    arrImageInfo: [],
    strTes: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 添加图片
    HandleAddImageClick: function (event) {
      wx.chooseImage({
        count: 9 - this.data.arrImageInfo.length,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: (res) => {
          console.log(res)
          this.setData({
            arrImageInfo: this.data.arrImageInfo.concat(res.tempFilePaths)
          });
          // 将结果传给父组件
          this.triggerEvent('getImagePath', this.data.arrImageInfo);
        },
        fail: (err) => {
          console.log(err);
        }
      })
    },
    // 删除指定图片
    HandleDelImageClick: function (event) {
      const nIndex = event.target.dataset.index;
      this.data.arrImageInfo.splice(nIndex, 1);
      this.setData({
        arrImageInfo: this.data.arrImageInfo
      });
      // 将结果传给父组件
      this.triggerEvent('getImagePath', this.data.arrImageInfo);
    }
  }
})
