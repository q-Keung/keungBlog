import Vue from 'vue'

function toPage(options) {
  // if(!options.url) return;
  if (options.data) datas = data;
  console.log(datas);
}
export {
  toPage
}

// var array1 = [12 , "foo" , {name:"Joe"} , -2458]; 
// var array2 = ["Doe" , 555 , 100]; 
// Array.prototype.push.apply(array1, array2); 
// console.log(array2);
var value = 123;
window.value = 11111;
console.log(window.value);
setTimeout(function () {
  console.log("1");
});
new Promise(function (resolve, reject) {
  console.log("2");
  var value = "promise 123";
  setTimeout(function () {
    resolve();
    console.log(this.value);
    console.log("haha");
  })
}).then(function () {
  console.log(3);
})
console.log("4");

//join返回一個字符串
function spacity() {
  console.log(this);
  return this.split("").join(" ");
}
String.prototype.spacity = spacity;
console.log("hello".spacity());

var user = {
  count: 1,
  getcount: function () {
    return this.count;
  }
};
console.log(user.getcount());
var funx = user.getcount;
// var func = {
//     count:'func'
// }
// console.log(funx.call(func));
var funx = Object.create(user);
console.log(funx.getcount());

console.log(typeof NaN);
console.log(NaN == undefined);


//定义一个log方法代理原console.log()方法
function log() {
  let arr = Array.prototype.slice.call(arguments); //es5  伪数组转数组
  let _arr = Array.from(arguments); //es6  伪数组转数组
  console.log.apply(console, arr);
}
log(123, 456);

function forLoop() {
  let _obj = {};
  for (let i = 0; i < 100; i++) {
    if (i % 3 == 0) _obj[i] = 'fizz';
    if (i % 5 == 0) _obj[i] = 'buzz';
    if (i % 3 == 0 && i % 5 == 0) _obj[i] = 'fizzbuzz';
  }
  return _obj;
}
console.log(forLoop());

function sayHi() {
  var say = function () {
    console.log(hi);
  }
  var hi = "HI";
  return say;
};
sayHi()();

var aha = " ";
if (!aha.trim()) {
  console.log("为空");
} else {
  console.log("不为空");
}

//封装   解析Url参数转为对象
function parseUrl(url) {
  let _url = {};
  let params = url.split("?");
  let _arr = params[1].split("&");
  for (let [k, i] of _arr.entries()) {
    let cur = i.split("=");
    _url[cur[0]] = cur[1];
    // console.log(_url);
  }
  return _url;
  // console.log(params);
}
console.log(parseUrl("https://baidu.com/so?a=1&b=2&c=3"));

//计算一个字符串中每个字符出现的次数
let _str = "aaabbcaaddffcc",
  _strObj = {};
// let _strArr = _str.split("");
for (let i in _str) {
  let key = _str[i];
  if (key in _strObj) {
    _strObj[key] = parseInt(_strObj[key]) + 1;
  } else {
    _strObj[key] = 1;
  }
}
console.log(_strObj);


const users = [{
  id: 0,
  name: "v"
}, {
  id: 1,
  name: "a"
}, {
  id: 2,
  name: "a"
}, {
  id: 3,
  name: "b"
}, {
  id: 4,
  name: "v"
}];
Array.prototype.unique = function () {
  //补全代码 
  let arr = this;
  let newArr = [];
  for (let [k, i] of arr.entries()) {
    // console.log(i['name'])
    if (i['name'] == 'v') continue;
    if (newArr.indexOf(i['name']) < 0) {
      newArr.push(i['name']);
    }
  }
  return newArr;
};
console.log(users.unique());

let str = '2018-10-07T11:48:47 Asia/zh-cn';
let exp = /^[0-9]{4}\d$/;
let sg = /\d+/g;
//match  接受一个正则为参数  返回正则匹配的结果  数组形式  需要声明全局匹配
//split  接受一个正则或者子字符（串）作为参数  返回正则匹配的相反结果  数组形式
//test  接受字符串为参数    匹配成功返回true  不成功则为false
//search 接受正则为参数  返回第一次匹配的位置    和  indexOf差不多
//replace  接受两个参数，第一个参数可以为正则或者子字符串，表示匹配需要被替换的内容，第二个参数为被替换的新的子字符串。如果声明为全局匹配则会替换所有结果，否则只替换第一个匹配到的结果。
console.log(str.split(sg));
