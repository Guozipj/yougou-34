/**
 * 封装一个类似axios请求的工具库
 * 
 * 
 * axios 
 * 1. 设置基准路径的方法:
 * axiso.defaults.baseURL:''
 * 
 * 2.发起请求,返回的是promise对象
 * axios({参数}).then{} .catch()
 * 
 * 3.监听错误
 * axios.onError(回调函数)
 * 
 * 封装思路:
 * 采用单例的封装模式
 */

/**   
 * 发起请求
 */
const request = function (config = {}) {

if(!config.url){

  //url为空的时候提示
  throw new Error('请输入url地址!')
  return;
}

//拼接上baseURL
config.url=request.defaults.baseURL+config.url;


  // 返回一个promise.resolve是成功的回调函数.reject是失败的
  return new Promise((resolve, reject) => {
    // 发起小程序的请求
    wx.request({
      // 用调用传入的对象解构
      ...config,

      success(res) {
        // 成功之后发出then的回调函数
        resolve(res);
      },
     fail(){},
     complete(res){
       request.errors.forEach(fn => {
         fn(res);
       })
      }
    })
  })
}

/** 
 * request的默认属性
 */
request.defaults = {
  //基准路径
  baseURL:''
};

// 保存错误函数
request.errors= []

request.onError = function(callback){
  request.errors.push(callback)
}


export default request