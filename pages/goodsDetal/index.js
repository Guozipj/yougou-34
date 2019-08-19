
import request from '../../utils/request.js'

Page({
  data: {
    current:0,
    navs: ["综合", "销量", "价格"],
    goodsDetail:[]
  },
  //点击的时候触发
  handnaVs(event){
    const { index } = event.currentTarget.dataset
    this.setData({
      current:index
    })
  },
  onLoad(){
    //发送商品详情请求接口
    request({
      url:'/goods/search',
      data:{
        query:'曲面电视',
        pagenum:1,
        pagesize:18
      }
    }).then(res=>{
      console.log(res)
      const { message } = res.data
       this.setData({
         goodsDetail:message
       })
    })
  }
})
