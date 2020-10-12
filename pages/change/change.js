const app = getApp()
Page({
  data:{
    curLang:app.globalData.curLang,
    langList:app.globalData.langList
  },
  onShow:function(){
    this.setData({curLang:app.globalData.curLang})
  },
  changeCurLang:function(e){
    let curobj = e.currentTarget.dataset
    app.globalData.curLang= curobj
    wx.setStorageSync('curLang', curobj)
    wx.switchTab({
      url: "/pages/index/index",
    })
  }
})