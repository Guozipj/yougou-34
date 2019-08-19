import request from '../../utils/request.js'
Page({

  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    color:'#fff',
    imgUrls: [],
    message:''
  },
  onLoad(options){
    // console.log(options)
    const { goods_id } = options
    // goods_id = 
    request({
      url:"/goods/detail",
      data:{
        goods_id 
      }
    }).then(res=>{
      console.log(res)
      const {message} = res.data

      // console.log(message)
      this.setData({
        imgUrls: message.pics,
        message
      })

    })
  }

})