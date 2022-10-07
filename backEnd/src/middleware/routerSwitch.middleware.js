const { getRouter} = require('../service/routerSwitch.service')
const { userFormateError, userAlreadyExited, userRegisterError, userDoesNotExist, userLoginError, invalidPassword, } = require('../constants/err.type')

// const useValidatorPower = async (ctx, next) => {
//   const {jobType,path} = ctx.request.body
//   if (jobType===''|| path==='') {
//     console.error('权限值和路径类型不能为空', ctx.request.body)
//     ctx.app.emit('error', userFormateError, ctx)
//     return
//   }
//   await next()
// }

// 新增新权限时，不能存在
const verifyPower = async (ctx, next) => {
  const { routerTitle } = ctx.request.body
  try {
    const res = await getRouter({ routerTitle })
    console.log(res)
    if (res) {
      console.error('权限已经存在', { routerTitle })
      ctx.app.emit('error', userAlreadyExited, ctx)
      return
    }
  } catch (err) {
    console.error('获取权限信息错误', err)
    ctx.app.emit('error', userRegisterError, ctx)
    return
  }
  await next()
}

module.exports = {
  verifyPower,
}
