// pages/detailPage/yanShouZhiNan/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '竣工规划核实指南',
    })
  },

  onOpenImage1:function (event){
    this.openImage('cloud://gaotao-60d0g.6761-gaotao-60d0g-1301399397/shenQingBiao.docx')
  },

  onOpenImage2:function(event){
    this.openImage('cloud://gaotao-60d0g.6761-gaotao-60d0g-1301399397/zhaoPian.docx')
  },

  openImage:function(src){
      if(src==null){
      return
    }
    else{
      wx.showLoading({
          title: '加载中',
        })
      wx.cloud.downloadFile({
        fileID: src,
        success: res => {
          wx.openDocument({
            filePath: res.tempFilePath,
            success: function (res) {
              wx.hideLoading()
            }
          })
          console.log(res.tempFilePath)
        },
        fail: err => {
          // handle error
        }
      })
      
    }
  }
})