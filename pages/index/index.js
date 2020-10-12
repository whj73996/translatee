//index.js
//获取应用实例
import {translate} from '../../utils/api'
const app = getApp()

Page({
  data: {
    query:"",
    hideClearIcon:true,
    result:[],
    curLang:{}
  },
  onShow:function(){
    this.setData({
      curLang:app.globalData.curLang
    })

  this.onConfirm()
  },
  //事件处理函数
  onInput:function(e){
    this.setData({'query':e.detail.value})
    if(this.data.query.length>0){
      this.setData({'hideClearIcon':false})
    }else{
      this.setData({'hideClearIcon':true})
    }
  },
  toTapClose:function(){
    this.setData({
      query:'',
      hideClearIcon:true
    })
  },
  onConfirm:function(){
    if(this.data.query.trim().length===0){
      return
    }
  
    translate(this.data.query,{from:"auto",to:this.data.curLang.lang})
    .then(res=>{
      this.setData({result:res.trans_result})
      
      let history = wx.getStorageSync('history') || []
      let curItem = {query:this.data.query,result:res.trans_result[0].dst}
      let queryArr = history.filter((item)=>item.query=== curItem.query)
      let resultArr = queryArr.filter((item)=>item.result=== curItem.result)
      if(resultArr.length!==0)return
      history.unshift(curItem)
      history.length=history.length>10?10:history.length
      wx.setStorageSync('history', history)

    })
  }
})
