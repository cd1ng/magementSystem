const { getUserInfo} = require('../service/user.service')
const { userFormateError, userAlreadyExited, userRegisterError, userDoesNotExist, userLoginError, invalidPassword, } = require('../constants/err.type')
const bcrypt = require("bcryptjs")

// 中间件单一职责
const useValidator = async (ctx, next) => {
  const {jobNumber,password} = ctx.request.body
  if (jobNumber===''|| password==='') {
    console.error('用户名或密码为空', ctx.request.body)
    ctx.app.emit('error', userFormateError, ctx)
    // 常量进行封装
    // ctx.status = 400  // bad request
    // ctx.body = {
    //   code: '10001',  //错误提示码包含错误码和中英文错误信息
    //   message: '用户名或密码为空',
    //   result: '',
    // }
    return
  }
  await next()
}

// async 函数返回的是promise的对象
const verifyUser = async (ctx, next) => {
  const { jobNumber } = ctx.request.body
  // TODO 传入参数{jobNumber}和jobNumber搞混，前者传入对象，解耦后获取值
  // 加上 await 返回表达式
  // if (await getUserInfo({ jobNumber })) {
  //   ctx.app.emit('error', userAleadyExited, ctx)
  //   return
  // }
  try {
    const res = await getUserInfo({ jobNumber })

    if (res) {
      console.error('用户名已经存在', { jobNumber })
      ctx.app.emit('error', userAlreadyExited, ctx)
      return
    }
  } catch (err) {
    console.error('获取用户信息错误', err)
    ctx.app.emit('error', userRegisterError, ctx)
    return
  }
  await next()
}

const crpytPassword = async (ctx, next) => {
  const { password } = ctx.request.body
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)
  // 将加盐的值返回
  ctx.request.body.password = hash
  await next()
}

const verifyLogin = async (ctx, next) => {
  const { jobNumber, password } = ctx.request.body
  try {
    const res = await getUserInfo({ jobNumber })
    if (!res) {
      console.error('用户名不存在', { jobNumber })
      ctx.app.emit('error', userDoesNotExist, ctx)
      return
    }
    if (!bcrypt.compareSync(password, res.password)) {
      ctx.app.emit('error', invalidPassword, ctx)
      return
    }
  } catch (err) {
    console.error(err)
    return ctx.app.emit('error', userLoginError, ctx)
  }
  await next()
}

module.exports = {
  useValidator,
  verifyUser,
  crpytPassword,
  verifyLogin
}
