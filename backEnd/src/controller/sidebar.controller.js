const { createSidebar, getSidebarInfo} = require('../service/sidebar.service')

class SidebarController{
  async sidebarInfo(ctx, next) {
    const { jobType, path} = ctx.request.body
    const res = await createSidebar(jobType,path)
    let Arr = res.path.split(',')
    ctx.body = {
      code: 0,
      message: '获取路由信息成功',
      result: {
        id: res.id,
        jobType: res.jobType,
        Array: Arr,
      }
    }
  }

  async getSidebar(ctx, next) {
    const { jobType} = ctx.request.body
    try {
      const res = await getSidebarInfo({ jobType })
      console.log(res)
      ctx.body = {
        code: 0,
        message: '用户列表获取成功',
        result: {
          jobType: jobType,
          res: res,
        },
      }
    } catch (err) {
      console.error('用户列表获取失败', err)
    }
  }

}

module.exports = new SidebarController()
