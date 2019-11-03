function funTest() {
  return new Promise((resolve, reject) => {
    const nRandom = Math.floor(Math.random() * 2000);
    if (nRandom < 1000) {
      setTimeout(() => {
        console.log('resolve of test.', nRandom);
        resolve(nRandom);
      }, nRandom);
    } else {
      setTimeout(() => {
        console.log('reject of test.', nRandom);
        reject(nRandom);
      }, nRandom);
    }
  });
}

function Test() {
  console.log('Test start.');
  funTest().then((val)=> {
    console.log('Test end1111.', val);
  }, (err) => {
    console.log('Test end2222.', err);
  }).catch((err) => {
    console.log('Test end3333.', err);
  });
}

// 从缓存中读取是否存在用户信息
function checkUserInfoFromStorage() {
  const nickName = wx.getStorageSync('UserInfo_nickName');
  const avatarUrl = wx.getStorageSync('UserInfo_avatarUrl');
  return nickName && avatarUrl;
}

// 从网络请求读取用户的信息
function checkUserInfoFromWeb() {
  // 用户已经授权过 登录直接显示头像、昵称
  wx.getUserInfo({
    success: (res) => {
      console.log('Common::getInfo()', res.userInfo);
      wx.setStorageSync('UserInfo_nickName', res.userInfo.nickName);
      wx.setStorageSync('UserInfo_avatarUrl', res.userInfo.avatarUrl);
    },
    fail: (err) => {
      wx.showToast({
        title: 'Common::getUserInfo()失败',
        icon: 'none'
      });
    }
  });
}

function login() {
  console.log('Ready Login.');
  return new Promise((resolve, reject) => {
    // 从缓存Storage获取
    if (checkUserInfoFromStorage()) {
      console.log('缓存中获取到UserInfo');
      resolve();
    } else {
      console.log('去网络获取UserInfo');
      // 从网络获取
      wx.getSetting({
        success: (res) => {
          console.log(res);
          if (res.authSetting['scope.userInfo']) {
            checkUserInfoFromWeb();
            resolve();
          } else {
            // 用户如果尚未授权，则不做提示
            reject();
          }
        },
        fail: (err) => {
          wx.showToast({
            title: 'Common::getSettings()失败',
            icon: 'none'
          });
          reject();
        }
      })
    }
  })
}

module.exports.Test = Test;
module.exports.login = login;
