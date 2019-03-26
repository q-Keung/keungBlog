wx.cloud.init({
  env: 'keung-1f46cf',
  traceUser: true
})
const db = wx.cloud.database();
class Https {
  constructor() {
    // this.context = db.collection(url);
  }
  $Get(opt) {
    if (opt.loading) wx.showLoading({
      itle: 'Loading...',
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
  $Where(opt) {
    if (opt.loading) wx.showLoading({
      itle: 'Loading...',
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
