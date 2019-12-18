// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.subscribeMessage.send({
      touser: event.openid,
      page: 'index',
      data: {
        time2: {
          value: '2019-04-24 00:15:37'
        },
        thing1: {
          value: '《三体》'
        },
        name3: {
          value: '刘慈欣'
        },
        name4: {
          value: 'Aslan'
        }
      },
      templateId: 'v7s56Vb1U_GJWeCMxoDi7RWKiXQM37TTV4gVJAYU19E'
    })
    console.log(result)
    return result
  } catch (err) {
    console.log(err)
    return err
  }
}
