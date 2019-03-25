let str = '2018-10-07T11:48:47 Asia/zh-cn';
    let exp = /^[0-9]{4}\d$/;
    let sg  = /\d+/g;
    console.log(str.split(sg));