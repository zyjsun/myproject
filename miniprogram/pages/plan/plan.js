// pages/plan/plan.js
import {$toast} from '../../util/util'
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
       imgurl:['../../images/1.jpeg',
       '../../images/2.jpeg',
       '../../images/4.jpeg',
       '../../images/5.jpeg'  
      ],
      obj: []       
      
  },
  jump(e){
    console.log(e)
    wx.navigateTo({
      url: `/pages/content/content?id=${e.currentTarget.dataset.index}`,
    })
  },
add(){
  // wx.navigateTo({
  //   url: '/pages/add/add',
  // })
  $toast('跳转中','success','/pages/add/add')
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self=this
    const db = wx.cloud.database()
    db.collection('plan').where({
      _openid: 'omV7L5eWSnFTxooJfhC-BuhpD7vg' // 填入当前用户 openid
    }).field({
      plan: true,
      planText: true,
      result: true
    }).get().then(res=>{
        console.log(res.data)
        self.setData({
           obj: res.data
        })
        app.globalData.plan=this.data.obj
        // console.log(app.globalData.plan)
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