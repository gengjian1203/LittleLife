// pages/home/components/Banner/Banner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listImageUrl: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    // strImageDefaultUrl: '/images/default/banner.jpg'
  },

  /**
   * 组件的方法列表
   */
  methods: {
  },

  lifetimes: {
    attached: function() {
      console.log('Banner attached.');
      console.log(this.data.listImageUrl)
    },
    ready: function() {
      console.log('Banner ready.');
    },
    show: function() {
      console.log('Banner show.');
    }
  }
})
