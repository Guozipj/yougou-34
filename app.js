//入口文件
import request from './utils/request.js'
App({
  onLaunch: function () {
    //设置基准路径
    request.defaults.baseURL ='https://api.zbztb.cn/api/public/v1'
  }
  
})