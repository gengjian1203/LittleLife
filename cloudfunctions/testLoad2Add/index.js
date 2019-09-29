// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const rp = require("request-promise")
const URL = "http://musicapi.xiecheng.live/personalized"
const db = cloud.database()
const dbCollection = db.collection("listPlay")

const LIMIT_MAX = 100

// 云函数入口函数
exports.main = async (event, context) => {
  // 获取数据库当前存储信息 
  // 并且突破单次获取数据库的数量限制
  const nDBCount = await dbCollection.count()
  const nDBTotal = nDBCount.total
  const nDBTime = Math.ceil(nDBTotal / LIMIT_MAX)
  const arrTask = []
  for (let i = 0; i < nDBTime; i++) {
    const objDBItem = await dbCollection.skip(i * LIMIT_MAX).limit(LIMIT_MAX).get()
    arrTask.push(objDBItem)
  }
  let arrDB = {
    data: []
  }
  if (arrTask.length > 0) {
    arrDB = (await Promise.all(arrTask)).reduce((pre, cur) => {
      return {
        data: pre.data.concat(cur.data)
      }
    })
  }

  // 通过http获取服务器数据
  const arrRes = await rp(URL).then((res) => {
    return JSON.parse(res).result
  }).catch((err) => {
    return err
  })
  // 数据去重
  let arrNew = []
  for (let i = 0, len1 = arrRes.length; i < len1; i++) {
    let bFlag = true
    for (let j = 0, len2 = arrDB.data.length; j < len2; j++) {
      if (arrRes[i].id === arrDB.data[j].id) {
        bFlag = false
        break 
      }
    }
    if (bFlag) {
      arrNew.push(arrRes[i])
    }
  }
  // 将新数据增加到数据库
  for (let i = 0, len = arrNew.length; i < len; i++) {
    await dbCollection.add({
      data: {
        ...arrNew[i], 
        createTime: db.serverDate()
      }
    }).then((res) => {
      console.log("插入成功")
    }).catch((err) => {
      console.log("插入失败\n" + err)
    })
  }
  // 返回新数据的数量
  return arrNew.length
}

