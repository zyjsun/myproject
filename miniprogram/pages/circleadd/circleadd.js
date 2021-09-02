import {$toast} from  '../../util/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: null,
    name: null,
    type:null,
    imgUrl: null,
    show:false,
    actions:[
      {name:'运动'},
      {name:'学习'},
      {name:'早睡早起'},
      {name:'必做菜单'},
      {name:'其他'},
    ],
    fileList:[]
  },
  circleImage(e){
    const{file}=e.detail; 
    wx.cloud.uploadFile({
      cloudPath: `${new Date().getTime()}.png`,
      filePath: file.url,
    }).then(res=>{
      let fileList=this.data.fileList;
      fileList.push({url:res.fileID})
      this.setData({
        fileList: fileList,
        imgUrl: res.fileID
      })
    })
  },
savecontent(e){
  console.log(e.detail.html)
  this.setData({
    content: e.detail.html
  })
},
showAction(){
  this.setData({
    show:true
  })
},
onClose(){
  this.setData({
    show:false
  })
},
onSelect(e){
  console.log(e.detail.name)
this.setData({
show: false,
type: e.detail.name
})
},
planText(event) {
  // event.detail 为当前输入的值
  this.setData({
    name: event.detail
  });
},
submit(){
  let self=this
  if (this.data.content==null||this.data.name==null||this.data.type==null||this.data.imgUrl==null) {
    $toast('不能为空继续填写','error');
   }else{
         wx.cloud.database().collection('circle').add({
         data: {
             name: this.data.name,
             content: this.data.content,
             type:this.data.type,
             imgUrl: this.data.imgUrl
            },
             success() {
              $toast('创建中','success','/pages/circle/circle')
                },
             fail(){
              $toast('添加失败','error')
             }
              })
          }
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