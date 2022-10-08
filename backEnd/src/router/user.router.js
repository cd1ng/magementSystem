const Router = require('koa-router')
const userRouter = new Router({ prefix: '/users' })

const {useValidator,verifyUser,crpytPassword,verifyLogin} = require("../middleware/user.middleware")
const { auth } = require('../middleware/auth.middleware')
const {register,login,updateUser,getProfile,getUsers,changePath,deleteUser} =require('../controller/user.controller')

// 添加接口
userRouter.post('/register', useValidator, verifyUser,crpytPassword, register)

// 登录接口
userRouter.post('/login',useValidator,verifyLogin, login)

// 获取全部用户列表
userRouter.get('/allUsers',getUsers)

// 变更用户权限
userRouter.post('/changePath',changePath)

// 删除用户
userRouter.post('/delete',deleteUser)

module.exports = userRouter