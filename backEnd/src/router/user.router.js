const Router = require('koa-router')
const userRouter = new Router({ prefix: '/users' })

const {useValidator,verifyUser,crpytPassword,verifyLogin} = require("../middleware/user.middleware")
const { auth } = require('../middleware/auth.middleware')
const {login,changePassword,updateUser,getProfile} =require('../controller/user.controller')


// 登录接口
userRouter.post('/login',useValidator,verifyLogin, login)

// 修改密码接口
// userRouter.patch('/', auth, crpytPassword, changePassword)

// 修改用户资料
userRouter.post('/setProfile',updateUser)
userRouter.post('/profile',getProfile)


module.exports = userRouter
