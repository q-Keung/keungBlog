wx.cloud.init({
  env: 'keung-1f46cf',
  traceUser: true
})
const db = wx.cloud.database();
const _ = db.command;
class Https {
  constructor() {
    // this.context = db.collection(url);
  }
  $Get(opt) {
    if (opt.loading) wx.showLoading({
      title: 'Loading...',
      mask: true,
    });
    return new Promise((resolve, reject) => {
      db.collection(opt.url).get({
        success: res => {
          resolve(res.data);
          wx.hideLoading();
        },
        fail: err => {
          reject(err);
          wx.hideLoading();
          console.error;
        }
      })
    })
  }
  $Add(url) {
    return new Promise((resolve, reject) => {
      db.collection(url).add({
        data: {
          description: 'learn cloud database',
          due: new Date('2018-09-01'),
          tags: [
            'cloud',
            'database'
          ],
          location: new db.Geo.Point(113, 23),
          done: false
        },
        success: res => {
          resolve(res.data)
        },
        fail: err => {
          reject(err);
          console.error;
        }
      })
    })
  }
  $Set(opt){
    if (opt.loading) wx.showLoading({
      title: '请稍后~',
      mask: true,
    });
    if(!opt.id) return;
    return new Promise((resolve,reject)=>{
      db.collection(opt.url).doc(opt.id).set({
        // data 传入需要局部更新的数据
        data:opt.data,
        success(res) {
          resolve(res.data);
          wx.hideLoading();
          // console.log(res.data)
        },
        fail(err){
          reject(err);
          console.error;
          wx.hideLoading();
        }
      })
    })
  }
  $Where(opt) {
    if (opt.loading) wx.showLoading({
      title: 'Loading...',
      mask: true,
    });
    return new Promise((resolve,reject)=>{
      db.collection(opt.url).where(opt.data)
      .get({
        success(res) {
          // res.data 是包含以上定义的两条记录的数组
          resolve(res.data);
          wx.hideLoading();
        },
        fail(err){
          reject(err);
          wx.hideLoading();
        }
      })
    })
  }
}




export default Https;
