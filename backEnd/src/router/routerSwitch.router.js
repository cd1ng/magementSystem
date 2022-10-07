const Router = require('koa-router')
const switchRouter = new Router({ prefix: '/router' })

const {verifyPower,} = require("../middleware/routerSwitch.middleware")
const {routerInfo,getRouter,getRouterList,changeRoutes} =require('../controller/routerSwitch.controller')

// 注册接口
switchRouter.post('/sendPath', routerInfo)

// 查询接口
switchRouter.get('/findRoutes',getRouterList)

// 变更接口
switchRouter.post('/changeRoutes',changeRoutes)

module.exports = switchRouter
