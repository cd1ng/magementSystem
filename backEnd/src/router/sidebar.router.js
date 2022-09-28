const Router = require('koa-router')
const sidebarRouter = new Router({ prefix: '/authority' })

const {useValidatorPower,verifyPower,} = require("../middleware/sidebar.middleware")
const {sidebarInfo,getSidebar} =require('../controller/sidebar.controller')

// 注册接口
sidebarRouter.post('/sendPath', useValidatorPower, verifyPower, sidebarInfo)

// 查询接口
sidebarRouter.post('/findPath',getSidebar)

module.exports = sidebarRouter
