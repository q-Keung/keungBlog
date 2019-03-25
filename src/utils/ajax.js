

const baseURL = 'https://www.baidu.com/';
import {login} from './login'
function request(url,method,datas,resolve,reject,globaldata){
    if(!url) return;
    url = baseURL + url;
    if(!method) method = 'GET';
    let data = datas || {};

    function _request(){
        wx.request({
          url,
          data,
          method,
          dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
          success: res => {
              if(res.status === 200){
                  resolve(res.data)
              }else{
                  reject(res.msg)
              }
          },
          fail: (err) => {
              reject(err)
          },
        });
    }


    if(!globaldata.token){
        login().then(msg=>{
            globaldata.token = msg;
            _request();
        })
    }else{
        _request();
    }
}
export default request;