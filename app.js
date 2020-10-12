//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    this.globalData.curLang = wx.getStorageSync('curLang') || this.globalData.langList[0]
    wx.setStorageSync('curLang', this.globalData.curLang)

  },
  globalData: {
    curLang:{},
    langList:[
      {
        "chs":"英语",
        "lang":"en",
        "index":0
      },
      {
        "chs":"中文",
        "lang":"zh",
        "index":1
      },
      {
        "chs":"日语",
        "lang":"jp",
        "index":2
      },
      {
        "chs":"韩语",
        "lang":"cor",
        "index":3
      },
      {
        "chs":"法语",
        "lang":"fra",
        "index":4
      },
      {
        "chs":"德语",
        "lang":"de",
        "index":5
      },
      {
        "chs":"西班牙语",
        "lang":"spa",
        "index":6
      },
    ]
  }
})