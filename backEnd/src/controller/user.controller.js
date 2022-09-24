const jwt = require('jsonwebtoken')
const { getUserInfo,updateInfo,getAllProfile} = require('../service/user.service')
const { JWT_SECRET } = require('../config/config.default')

class UserController{

  async login(ctx, next) {
    const { user_name } = ctx.request.body
    // 1. 获取用户信息(在token的payload中, 记录id, user_name, is_admin)
    try {
      // 从返回结果对象中剔除password属性, 将剩下的属性放到res对象
      const { password, ...res } = await getUserInfo({ user_name })

      ctx.body = {
        code: 0,
        message: '用户登录成功',
        result: {
          user_name: user_name,
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
    const {user_name}= ctx.request.body
    try {
      const res = await getAllProfile(user_name)
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
