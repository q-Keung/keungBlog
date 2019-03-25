export let login = ()=>{
    return new Promise((resolve,reject)=>{
        wx.login({
            success: ({code}) => {
                 console.log(code);
                 if(code){
                     wx.request({
                       url: 'https://www.easy-mock.com/mock/5c7a7302a5251c27622e0ed7/vueVant/login?code='+code, //开发者服务器接口地址",
                       data: {
                        code
                       }, //请求的参数",
                       method: 'POST',
                       dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
                       success: res => {
                           resolve(res.data);
                       },
                       fail: (err) => {
                           reject(err)
                       },
                     });
                 } 
            },
          });
    })
}