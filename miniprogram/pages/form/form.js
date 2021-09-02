import {$toast} from  '../../util/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    plan: null,
    result: [],
    planText: null
  },

  onChange(e){
    this.setData({
      result: e.detail,
    });
  },
  plan(event) {
    this.setData({
      plan: event.detail,
    });
  },
  planText(event) {
    // event.detail 为当前输入的值
  
    this.setData({
      planText: event.detail
    });
  },
  submit(){
    let self=this
    if (this.data.plan==null||this.data.result==null||this.data.planText==null) {
      $toast('不能为空继续填写','error');
     }else{
           wx.cloud.database().collection('plan').add({
           data: {
               plan: this.data.plan,
               result: this.data.result,
               planText: this.data.planText,
              },
               success(res) {
                 $toast('正在添加','success','/pages/plan/plan')
                  },
               fail(){
                $toast('添加失败','error','/pages/add/add')
               }
                })
            }
    // wx.cloud.callFunction({
    //   name: 'plan',
    //   data: {
    //       plan: this.data.plan,
    //       result: this.data.result,
    //       planText: this.data.planText,
    //   },
    //   success(res){
    //     console.log(self.data.planText),
    //     console.log(res.result);
    //     wx.hideLoading()
    //   }
    // })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        
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