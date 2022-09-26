const Router = require('koa-router')
const userRouter = new Router({ prefix: '/users' })

const {useValidator,verifyUser,crpytPassword,verifyLogin} = require("../middleware/user.middleware")
const { auth } = require('../middleware/auth.middleware')
const {register,login,updateUser,getProfile} =require('../controller/user.controller')

// 注册接口
userRouter.post('/register', useValidator, verifyUser,crpytPassword, register)

// 登录接口
userRouter.post('/login',useValidator,verifyLogin, login)

// 修改用户资料
userRouter.post('/setProfile',updateUser)
userRouter.post('/profile',getProfile)


module.exports = userRouter
