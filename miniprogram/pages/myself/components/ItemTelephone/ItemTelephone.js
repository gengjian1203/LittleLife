// pages/myself/components/ItemTelephone/ItemTelephone.js
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
    strTitle: '联系方式',
    strTelephone: '13333333333'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    HandleTelephoneClick: function() {
      console.log("call telephone.")
      wx.makePhoneCall({
        phoneNumber: this.data.strTelephone
      })
    }
  }
})
