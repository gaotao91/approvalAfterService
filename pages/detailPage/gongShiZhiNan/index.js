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
      title: '公示牌设置指南',
    })
  },

  onOpenImage: function (event) {
    cloudDownload.openImage('cloud://gaotao-60d0g.6761-gaotao-60d0g-1301399397/gongshi.jpg')
  },
})