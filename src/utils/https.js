wx.cloud.init({
  env: 'keung-1f46cf',
  traceUser: true
})
const db = wx.cloud.database();

function https(url,reslove,reject) {
  function _https() {
    db.collection(url).get()
      .then(res => {
        console.log(res.data);
        reslove(res.data);
        // 可以进行数据初始化
      })
      .catch(err => {
        reject(err);
        console.error
      })
  }

  return new Promise((reslove,reject)=>{
    _https();
  })
}


export default https;
