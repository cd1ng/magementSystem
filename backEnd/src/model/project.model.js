// 模型是代表数据库中表的抽象
const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

// 建立模型 会自动进行推断
const Project = seq.define('management_project', {
  projectID: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: true,
    comment:'项目编号'
  },
  projectName: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
    comment:'项目名称'
  },
  customer:{
    type: DataTypes.STRING(10),
    allowNull: false,
    comment:'客户'
  },
  beginTime:{
    type:DataTypes.DATE,
    allowNull: false,
    comment:'开始时间'   
  },
  endTime:{
    type:DataTypes.DATE,
    allowNull: false,
    comment:'结束时间'
  },
  projectStatus:{
    type:DataTypes.STRING(11),
    allowNull: false,
    comment:'项目状态'
  }
})

// 强制同步数据库（创建数据表，存在表就删除后重建
// Project.sync({ force: true })

module.exports = Project
