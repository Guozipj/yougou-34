//导入request文件
import request from '../../utils/request.js'

Page({

  data: {
    autoplay: true,
    interval: 2000,
    imgUrls: [],
    menus:[],
    fashoin:[]
  },
  //页面加载时刷新，类似vue的meted
  onLoad() {

    // 发送轮播图请求
    request({
      url: '/home/swiperdata'
    }).then(res => {
      // console.log(res)
      const {message} =res.data
      this.setData({
        imgUrls: message
      })
    }),
    // 发送分类菜单请求
    request({
      url:'/home/catitems'
    }).then(res=>{
      // console.log(res)
      const {message} = res.data
      this.setData({
        menus:message
      })
    }),
    // 发送时尚女装请求
    request({
      url:'/home/floordata'
    }).then(res=>{
      // console.log(res)
      const {message} = res.data
      this.setData({
        fashoin:message
      })
    })
  }
})