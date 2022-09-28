const Sidebar = require('../model/sidebar.model')

class SidebarService{
  // 参数超过3个就用对象
  async createSidebar(jobType,path) {
    const res = await Sidebar.create({ jobType,path})
    return res.dataValues
  };

  // 用很多东西去查询，利用{}查询
  async getSidebarInfo({ id, jobType,path}) {
    const whereOpt = {}
    // id存在就拷贝到对象
    id && Object.assign(whereOpt,{ id })
    jobType && Object.assign(whereOpt, { jobType })
    path && Object.assign(whereOpt, { path })

    // 单条查询
    const res = await Sidebar.findOne({
      attributes: ['id', 'jobType','path'],
      where:whereOpt,
    })
    console.log(res)
    return res?res.dataValues:null
  };

}

module.exports = new SidebarService()
