// 云函数入口文件
const cloud = require('wx-server-sdk')
const got = require('got'); //引用 got

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  console.log('getLiveInfo');

  let appId = 'wx1cac8cd76fcd3044';
  let secret = '5d8464881c57d949c69fac4ba41b344b';
  let grant_type = 'client_credential';

  // 获取 access_token
  let tokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appId + '&secret=' + secret;
  let tokenResponse = await got(tokenUrl);
  let access_token =  JSON.parse(tokenResponse.body).access_token;

  // 获取 直播列表信息
  let liveinfoUrl = 'http://api.weixin.qq.com/wxa/business/getliveinfo?access_token=' + access_token;
  let liveinfoResponse = await got(liveinfoUrl, {
    method: 'POST', //post请求
    body: JSON.stringify({
      start: 0,
      limit: 1
    })
  });
  console.log('liveinfoResponse', JSON.parse(liveinfoResponse.body));

  // 返回
  return liveinfoResponse.body;

  // 返回
  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}


getMySelfInfo = () => {
  // getAccessToken
  console.log('getMySelfInfo');
}
