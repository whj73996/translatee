//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    query:"sssssssssssssssssss",
    hideClearIcon:true,
    result:[],
    curLang:{}
  },
  //事件处理函数
  onInput:function(e){
    this.setData({'query':e.detail.value})
    if(this.data.query.length>0){
      this.setData({'hideClearIcon':false})
    }else{
      this.setData({'hideClearIcon':true})
    }
    console.log(this.data.hideClearIcon)
  },
  toTapClose:function(){
    this.setData({query:''})
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
