// pages/content/content.js
const app=getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    content:[],
    text: null,
    data: [],
    count: null,
    id: null
  },
  onDisplay(e) {
    wx.navigateTo({
      url: '/pages/daka/daka',
    })
  },
  onClose() {
    this.setData({ 
      show: false ,
    });

  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
    });
  },
  delete(){
    const db = wx.cloud.database()
    db.collection('plan').where({
     _id: this.data.id
    }).remove()
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    
    this.setData({
      text: app.globalData.plan[options.id].planText,
      id: app.globalData.plan[options.id]._id
    })
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