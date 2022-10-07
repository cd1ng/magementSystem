const { createRouter, getRouter,getAllRouters,switchRoutes} = require('../service/routerSwitch.service')

class RouterController{
  async routerInfo(ctx, next) {
    const { routerTitle,parentId,key,grade,pagePermission} = ctx.request.body
    const res = await createRouter( routerTitle,parentId,key,grade,pagePermission)
    ctx.body = {
      code: 0,
      message: '添加路由信息成功',
      result: {
        id: res.id,
        routerTitle: res.routerTitle,
        parentId: res.parentId,
        key:res.key,
        grade:res.grade,
        pagePermission:res.pagePermission
      }
    }
  }

  async getRouter(ctx, next) {
    const { id} = ctx.request.body
    try {
      const res = await getRouter({ id })
      console.log(res)
      ctx.body = {
        code: 0,
        message: '用户列表获取成功',
        result: {
          id: res.id,
          routerTitle: res.routerTitle,
          parentId: res.parentId,
          key:res.key,
          grade:res.grade,
          pagePermission:res.pagePermission
        },
      }
    } catch (err) {
      console.error('用户列表获取失败', err)
    }
  }
  async getRouterList(ctx,next){
    const res = await getAllRouters()
    console.log(res)
    ctx.body = {
      code: 0,
      message: '获取路由列表成功',
      result: res
    }  
  }
  async changeRoutes(ctx,next){
    const res = await switchRoutes(ctx.request.body)
    ctx.body = {
      code: 0,
      message: '获取路由成功',
      result:res
    }  
  }

}

module.exports = new RouterController()
