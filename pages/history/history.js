//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    history: []
  },
  onShow: function () {
    this.setData({
      history:wx.getStorageSync('history')
    })
  }
})
