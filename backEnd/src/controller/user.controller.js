const jwt = require("jsonwebtoken")
const {
  createUser,
  getUserInfo,
  updateInfo,
  getAllProfile,
  getAllUsers,
  switchPath,
  deleteUserService,
} = require("../service/user.service")
const { JWT_SECRET } = require("../config/config.default")

class UserController {
  async register(ctx, next) {
    const { jobNumber, password, userName, jobTitle } = ctx.request.body
    const res = await createUser(jobNumber, password, userName, jobTitle)
    ctx.body = {
      code: 0,
      message: "用户注册成功",
      result: {
        id: res.id,
        jobNumber: res.jobNumber,
        userName: res.userName,
        jobTitle: res.jobTitle,
      },
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
    const { jobNumber } = ctx.request.body
    // 1. 获取用户信息(在token的payload中, 记录id, jobNumber)
    try {
      // 从返回结果对象中剔除password属性, 将剩下的属性放到res对象
      const { password, ...res } = await getUserInfo({ jobNumber })
      console.log(res)
      ctx.body = {
        code: 0,
        message: "用户登录成功",
        result: {
          jobNumber: jobNumber,
          userName: res.userName,
          path: res.path,
          // 用户登陆成功之后就颁发令牌，以后的每一次请求就可以携带令牌。
          // 用于用户的认证
          token: jwt.sign(res, JWT_SECRET, { expiresIn: "1d" }),
        },
      }
    } catch (err) {
      console.error("用户登录失败", err)
    }
  }

  async updateUser(ctx, next) {
    console.log(ctx.request.body)
    try {
      const res = await updateInfo(ctx.request.body)
      // 4.返回结果
      ctx.body = {
        code: 0,
        message: "更新用户信息成功",
        result: res,
      }
    } catch (err) {
      console.error("更新用户信息失败", err)
    }
  }

  // 查询个人信息
  async getProfile(ctx, next) {
    const { jobNumber } = ctx.request.body
    try {
      const res = await getAllProfile(jobNumber)
      // 4.返回结果
      ctx.body = {
        code: 0,
        message: "获取用户信息成功",
        result: res,
      }
    } catch (err) {
      console.error("更新用户信息失败", err)
    }
  }

  // 查询全部用户列表
  async getUsers(ctx, next) {
    const allUserList = await getAllUsers()
    let userList = []
    console.log(allUserList)
    allUserList.forEach((element) => {
      const { password, phoneNumber, ...res } = element
      userList.push(res)
    })
    ctx.body = {
      code: 0,
      message: "获取全部用户列表成功",
      result: userList,
    }
  }

  async changePath(ctx, next) {
    const res = await switchPath(ctx.request.body)
    ctx.body = {
      code: 0,
      message: "获取路由成功",
      result: res,
    }
  }

  async deleteUser(ctx, next) {
    console.log(ctx.request.body)
    const res = await deleteUserService(ctx.request.body)
    ctx.body = {
      code: 0,
      message: "用户删除成功",
      result: res,
    }
  }
}

module.exports = new UserController()
