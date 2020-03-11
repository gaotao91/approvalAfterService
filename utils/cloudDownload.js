class CloudDownload{
  openImage(src){
  if (src == null) {
    return
  }
  else {
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
}

export {CloudDownload}