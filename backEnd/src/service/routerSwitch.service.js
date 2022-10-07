const RouterSwitch = require('../model/routerSwitch.model')

class RouterService{
  async createRouter(routerTitle,parentId,key,grade,pagePermission) {
    const res = await RouterSwitch.create({ routerTitle,parentId,key,grade,pagePermission})
    return res.dataValues
  };

  async getRouter({ id,routerTitle,parentId,key,grade,pagePermission}) {
    const whereOpt = {}
    // id存在就拷贝到对象
    id && Object.assign(whereOpt,{ id })
    routerTitle && Object.assign(whereOpt, { routerTitle })
    parentId && Object.assign(whereOpt, { parentId })
    key && Object.assign(whereOpt,{ key })
    grade && Object.assign(whereOpt, { grade })
    pagePermission && Object.assign(whereOpt, { pagePermission })

    // 单条查询
    const res = await RouterService.findOne({
      attributes: ['id', 'routerTitle','parentId','key','grade','pagePermission'],
      where:whereOpt,
    })
    console.log(res)
    return res?res.dataValues:null
  };

  // 获取全部项目
  async getAllRouters(){
    const res = await RouterSwitch.findAll({raw:true})
    return res
  }

  async switchRoutes(arr){
    for(let index in arr){
      const permission = await RouterSwitch.findByPk(arr[index].id)
      console.log(permission)
      await permission.update({pagePermission:arr[index].pagePermission})
    }
  }
}

module.exports = new RouterService()
