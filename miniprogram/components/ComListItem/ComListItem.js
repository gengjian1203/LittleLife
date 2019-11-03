// components/ComListItem/ComListItem.js
Component({
  /**
   * 组件的选项
   */
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    list: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 拨打电话
    funCallTelephone: function (event) {
      const param = event.target.dataset.param;
      console.log('funCallTelephone.', param.right);
      wx.makePhoneCall({
        phoneNumber: param.right
      })
    },

    // 打开地图位置
    funGotoPagePosition: function (event) {
      const param = event.target.dataset.param;
      console.log('funOpenPosition.', param);
    },

    // 进入管理页面
    funGotoPageAdministrator: function (event) {
      const param = event.target.dataset.param;
      console.log('funGotoPageAdministrator.', param);
    }
  }
})
