// pages/companion/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc: [
      'images/kaihui.jpg',
      'images/guo.jpg', 
      'images/an.jpg', 
      'images/gao.jpg'],
        },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onYanShou:function(event){
    wx.navigateTo({
      url: '/pages/detailPage/yanShouZhiNan/index',
    })
  },
  onYanXian:function(event){
    wx.navigateTo({
      url: '/pages/detailPage/yanXianZhiNan/index',
    })
  },
  onGongShi:function(event){
    wx.navigateTo({
      url: '/pages/detailPage/gongShiZhiNan/index',
    })
  }
 

})