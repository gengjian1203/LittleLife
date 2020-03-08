// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  console.log('event', event, 'context', context);

  var appId = 'wx1cac8cd76fcd3044';
  var secret = '5d8464881c57d949c69fac4ba41b344b';



  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}
