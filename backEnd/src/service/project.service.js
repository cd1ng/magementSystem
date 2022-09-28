const Project = require('../model/project.model')

class ProjectService{
  async createProject(projectID,projectName,customer,beginTime,endTime,projectStatus) {
    const res = await Project.create({ projectID,projectName,customer,beginTime,endTime,projectStatus})
    return res.dataValues
  };

  async getProjectInfo({ projectID,projectName}) {
    const whereOpt = {}
    projectID && Object.assign(whereOpt, { projectID })
    projectName && Object.assign(whereOpt, { projectName })
    const res = await Project.findOne({where:whereOpt})
    return res?res.dataValues:null
  };

  // 更新值
  async updateProjectInfo(ProjectInfo){
    const {projectID,projectName,customer,beginTime,endTime,projectStatus}= Project
    if(projectID!==''){
      const whereOpt = {projectID:projectID}
      await Project.update(
        {
          projectID:projectID,
          projectName:projectName,
          customer:customer,
          beginTime:beginTime,
          endTime:endTime,
          projectStatus:projectStatus
        },
        {
          where:whereOpt
        }
      )
      const res = await Project.findOne({
        where:whereOpt
      })
      return res?res.dataValues:null
    }
    return null
  }

  // 获取全部项目
  async getAllProjects(){
    const res = await Project.findAll({raw:true})
    return res
  }
}

module.exports = new ProjectService()
