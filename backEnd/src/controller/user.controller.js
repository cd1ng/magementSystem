const jwt = require('jsonwebtoken')
const { createUser, getUserInfo,updateInfo,getAllProfile} = require('../service/user.service')
const { JWT_SECRET } = require('../config/config.default')

class UserController{
  async register(ctx, next) {
    // 1.在控制器中获取数据
    const { jobNumber, password,userName } = ctx.request.body
    // 2.进行错误判断
    // 合法性
    // if (!jobNumber || !password) {
    //   console.error('用户名或密码为空',ctx.request.body)
    //   ctx.status = 400  // bad request
    //   ctx.body = {
    //     code: '10001',  //错误提示码包含错误码和中英文错误信息
    //     message: '用户名或密码为空',
    //     result: '',
    //   }
    //   return
    // }
    // 合理性
    // if (getUerInfo(jobNumber)) {
    //   ctx.status = 409
    //   ctx.body = {
    //     code: "10002",
    //     message: "用户已经存在",
    //     result:""
    //   }
    //   return
    // }
    // 3.操作数据库
    const res = await createUser(jobNumber,password,userName)
    // 4.返回结果
    ctx.body = {
      code: 0,
      message: '用户注册成功',
      result: {
        id: res.id,
        jobNumber: res.jobNumber,
        userName: res.userName,
      }
    }
  }

  // async login(ctx, next) {
  //   const { jobNumber, password } = ctx.request.body
  //   if (jobNumber === '' || password === '') {
  //     ctx.status = 409
  //     ctx.body = {
  //       code: '10001',
  //       message: "用户名或密码为空",
  //       result:""
  //     }
  //     return
  //   }
  //   ctx.body = 'login '+jobNumber
  // }

  async login(ctx, next) {
    const { jobNumber} = ctx.request.body
    // 1. 获取用户信息(在token的payload中, 记录id, jobNumber)
    try {
      // 从返回结果对象中剔除password属性, 将剩下的属性放到res对象
      const { password, ...res } = await getUserInfo({ jobNumber })
      console.log(res)
      ctx.body = {
        code: 0,
        message: '用户登录成功',
        result: {
          jobNumber: jobNumber,
          userName: res.userName,
          // 用户登陆成功之后就颁发令牌，以后的每一次请求就可以携带令牌。
          // 用于用户的认证
          token: jwt.sign(res, JWT_SECRET, { expiresIn: '1d' })
        },
      }
    } catch (err) {
      console.error('用户登录失败', err)
    }
  }

  async updateUser(ctx,next){
    console.log(ctx.request.body)
    try {
      const res = await updateInfo(ctx.request.body)
      // 4.返回结果
      ctx.body = {
        code: 0,
        message: '更新用户信息成功',
        result: res
      }
    }catch (err) {
      console.error('更新用户信息失败', err)
    }
  }

  // 查询个人信息
  async getProfile(ctx,next){
    const {jobNumber}= ctx.request.body
    try {
      const res = await getAllProfile(jobNumber)
      // 4.返回结果
      ctx.body = {
        code: 0,
        message: '获取用户信息成功',
        result: res
      }
    }catch (err) {
      console.error('更新用户信息失败', err)
    }
  }
}

module.exports = new UserController()
