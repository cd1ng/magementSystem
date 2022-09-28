const Router = require('koa-router')
const projectRouter = new Router({ prefix: '/project' })
const {projectInfo,getProject,getProjectList} =require('../controller/project.controller')

// 创建项目接口
projectRouter.post('/create',projectInfo)

// 文章列表
projectRouter.post('/list', getProject)

projectRouter.get('/allProjects',getProjectList)


module.exports = projectRouter