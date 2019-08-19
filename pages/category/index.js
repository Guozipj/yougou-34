
import request from '../../utils/request.js'

Page({
  
  data: {
    navs: [],
    current: 0,
  },

  // 点击navs栏时触发
  handNavs(event){
    // console.log(event)
    const {index} = event.currentTarget.dataset

    this.setData({
      current:index
    })
  },

  // 页面刷新时加载
  onLoad(){
    
    // 发送左侧导航栏请求
    request({
      url:'/categories'
    }).then(res=>{
      console.log(res)
      const {message} =res.data
      this.setData({
        navs: message
      })
    })
  }

})