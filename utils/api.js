import md5 from './md5.min.js'
const appid = '20201012000586816'
const key = 'TiNSQijMO5lUv5hnafd8'
function translate(q,{from="auto",to="auto"}={from:"auto",to:"auto"}){
  return new Promise((resolve,reject)=>{
    let salt = Date.now()
    let string = appid+q+salt+key
    // let sign = appid+q+salt+key
    // let sign = md5(string)
    // console.log(string);
    let sign = md5(`${appid}${q}${salt}${key}`)
    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
      data:{
        q,
        from,
        to,
        appid,
        salt,
        sign
      },
      success(res){
        if(res.data && res.data.trans_result){
          resolve(res.data)
        }else{
          reject({status:"error",msg:"请求失败"})
          wx.showToast({
            title: '翻译失败',
            icon:'none',
            duration:3000
          })
        }
      },
      fail(res){
        reject({status:"error",msg:"请求失败"})
      }
    })
  }
  )
}
module.exports.translate = translate