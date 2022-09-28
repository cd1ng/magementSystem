const { createProject, getProjectInfo,updateProjectInfo,getAllProjects} = require('../service/project.service')

class ProjectController{
  async projectInfo(ctx, next) {
    const { projectID, projectName,customer,beginTime,endTime,projectStatus} = ctx.request.body
    const res = await createProject(projectID, projectName,customer,beginTime,endTime,projectStatus)
    ctx.body = {
      code: 0,
      message: '获取项目信息成功',
      result: {
        id: res.id,
        projectID: res.projectID,
        projectName: res.projectName,
        customer:res.customer,
        beginTime:res.beginTime,
        endTime:res.endTime,
        projectStatus:res.projectStatus
      }
    }
  }

  async getProject(ctx, next) {
    const { projectID,projectName} = ctx.request.body
    try {
      const res = await getProjectInfo({ projectID,projectName })
      console.log(res)
      ctx.body = {
        code: 0,
        message: '项目获取成功',
        result: {
          projectID: projectID,
          res: res,
        },
      }
    } catch (err) {
      console.error('项目获取失败', err)
    }
  }

  async getProjectList(ctx,next){
    const res = await getAllProjects()
    console.log(res)
    ctx.body = {
      code: 0,
      message: '获取项目成功',
      result: res
    }  
  }
}

module.exports = new ProjectController()
