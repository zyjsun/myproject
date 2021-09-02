// components/calendar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    lastMonth: {
      type: String,
      value: '<'
    },
    nextMonth: {
      type: String,
      value: '>'
    },
    weekText: {
      type: Array,
      value:['周末','周一','周二','周三','周四','周五','周六']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: 'zz',
    today:'',
    emptyGridsBefore: [],//上个月
    thisMonthDays: [],//这个月
    emptyGridsAfter: [],//下个月
  },
  ready: function(){
    this.today()
  },

  /**
   * 组件的方法列表
   */
  methods: {
      today(){
        //默认选中当天,并初始化组件
        var now=new Date();
        var year = now.getFullYear();       //年
        var month = now.getMonth() + 1;     //月
        var day = now.getDate();            //日
        var clock = year + "年";       
//         if(month < 10)
//             clock += "0";       
//         clock += month + "-";       
//         if(day < 10)
//             clock += "0";        
//         clock += day + " ";  
        
        clock+=(month<10)?'0'+month+'月':month+'-'
        clock+=(day<10)?'0'+day+'日':day+'日'
        // console.log(clock)
        //初始化日历组件
        this.display(clock)
        //初始化日期
        
        this.creatDays(year,month)
        this.createEmptyGrids(year,month)
      },
      display(e){
         this.setData({
          title: e
         })
         
      },
      //绘制当月天数占格
      creatDays(year,month){
        let  thisMonthDays=[],days= this.getThisMounthDays(year,month)
        for(let i=1;i<days;i++){
          thisMonthDays.push(i)
        }

        this.setData({
          thisMonthDays:   thisMonthDays
         })
      },
      //当月空出的天数
      createEmptyGrids(year,month){
        let week=new Date(year, month-1, 1).getDay(), 
        emptyGridsAfter=[],
        emptyGridsBefore=[],
        emptyDays=week//空出的天数
        console.log(week)
        //上个月的天数
      let beforemday=month-1<0?this.getThisMounthDays(year-1,11):this.getThisMounthDays(year,month-1)
        //当月前面空几天
      for(let i=1;i<=emptyDays;i++){
        emptyGridsBefore.push(beforemday-(emptyDays-i))
      }
      let thisMonthDays=  this.getThisMounthDays(year,month)
      // console.log( emptyGridsBefore)
      let after=(42-thisMonthDays-emptyDays)-7>=0?(42-thisMonthDays-emptyDays)-7
      :(42-thisMonthDays-emptyDays)//这个月份最后几天排到后面几个月

      for(let i=1;i<=after;i++){
        emptyGridsAfter.push(i)
      }
      
      // let aftermday=month+1>0?this.getThisMounthDays(year+1,0):this.getThisMounthDays(year,month-1)
      // for(let i=1;i<aftermday;i++){
      //   emptyGridsAfter.push(i)
      // }

      this.setData({
        emptyGridsAfter: emptyGridsAfter,
        emptyGridsBefore: emptyGridsBefore
      })
      },
      getThisMounthDays(year,month){
        return new Date(year, month + 1, 0).getDate()
      }
  }
})
