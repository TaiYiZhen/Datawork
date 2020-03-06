import Vue from 'vue'
import VueRouter from 'vue-router'
//1.安装插件
Vue.use(VueRouter)

//2.创建对象
const routes=[
  {
    path:'/datashow',
    name: '数据展示',
    component:()=>import('@/components/page/Datashow')
  },
  {
    path:'/eqptshow',
    name:'设备列表',
    component:()=>import('@/components/page/Eqptshow')
  },
  {
    path:'/customershow',
    name:'客户展示',
    component:()=>import('@/components/page/Customershow')
  },
  {
    path:'/dataanalysis',
    name:'数据分析',
    component:()=>import('@/components/page/Dataanalysis')
  },
  {
    path:'/eqptcalibration',
    name:'设备标定',
    component:()=>import('@/components/page/Eqptcalibration')
  },
  {
    path:'/eqptconnect',
    name:'设备连接',
    component:()=>import('@/components/page/Eqptconnect')
  },
  {
    path:'/eqptexception',
    name:'设备异常',
    component:()=>import('@/components/page/Eqptexception')
  },
  {
    path:'/frequencyshow',
    name:'日活频次',
    component:()=>import('@/components/page/Frequencyshow')
  },
  {
    path:'/uploadupdate',
    name:'上传更新',
    component:()=>import('@/components/page/Uploadupdate')
  }
]
const router=new VueRouter({
  routes,
  mode:'history'
})

export  default  router
