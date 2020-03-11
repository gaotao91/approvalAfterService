import { CloudDownload } from '../../../utils/cloudDownload.js'
let cloudDownload = new CloudDownload()

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
    cloudDownload.openImage('cloud://gaotao-60d0g.6761-gaotao-60d0g-1301399397/shenQingBiao.docx')
  },

  onOpenImage2:function(event){
    cloudDownload.openImage('cloud://gaotao-60d0g.6761-gaotao-60d0g-1301399397/zhaoPian.docx')
  },

  
})