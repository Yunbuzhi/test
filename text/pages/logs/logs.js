//logs.js
// const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function (options) {
    //onLoad:options可以接受页面传值，传值方式url="../demo2/demo2?name=tom"
    console.log(options)
  },
  tapHandle:function(){
    wx.navigateTo({
      url: '../index/index',
      success:function(res){
        //成功返回数据
      },
      fail:function(){
        //失败处理方式
      },
      complete:function(){
        //complete
      }
    })
  }
})
