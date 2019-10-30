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

function login() {
  console.log('Ready Login.');

}

module.exports.Test = Test;
module.exports.login = login;
