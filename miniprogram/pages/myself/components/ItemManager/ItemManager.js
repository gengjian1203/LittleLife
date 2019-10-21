// pages/myself/components/ItemManager/ItemManager.js
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
    strText: '我是管理者'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    HandleManagerClick: function () {
      const bManager = true;
      if (bManager) {
        wx.navigateTo({
          url: '/pages/messageEditor/messageEditor'
        })
      } else {
        wx.showToast({
          title: '抱歉，您并无此权限',
          icon: 'none'
        })
      }
    }
  }
})
