// pages/circle/circle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj:[]
  },
  circleadd(){
    wx.navigateTo({
      url: '/pages/circleadd/circleadd',
    })
  },
  jump(e){
    // console.log(this.data.obj[e.currentTarget.dataset.index])
    let self=this
    wx.navigateTo({
      url: '/pages/circleContent/circleContent',
      // events:{
      //   // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
      //   acceptDataFromOpenedPage: function(data) {
      //    console.log(data)     
      //   },
      //   success: function(res) {
      //     // 通过eventChannel向被打开页面传送数据
      //     res.eventChannel.emit('acceptDataFromOpenerPage', { data: self.data.obj[e.currentTarget.dataset.index] })
      //   }
      // }
     
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: self.data.obj[e.currentTarget.dataset.index] })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self=this
    const db = wx.cloud.database()
    db.collection('circle').where({
      _openid: 'omV7L5eWSnFTxooJfhC-BuhpD7vg' // 填入当前用户 openid
    }).field({
      content: true,
      name: true,
      type: true,
      imgUrl:true,
    }).get().then(res=>{
        console.log(res.data)
        self.setData({
           obj: res.data
        })
    }).catch(console.error)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})