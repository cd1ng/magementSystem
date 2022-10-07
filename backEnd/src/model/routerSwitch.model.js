const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

const RouterSwitch = seq.define('management_routerSwitch', {
  routerTitle: {
    type: DataTypes.STRING(20), 
    allowNull: false, 
    unique: true, 
    comment:'路由标题'
  },
  parentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment:'密码'
  },
  key:{
    type: DataTypes.STRING(30),
    allowNull: true,
    comment:'路由路径'
  },
  grade:{
    type:DataTypes.INTEGER,
    allowNull:true,
    comment:'路由层级'   
  },
  pagePermission:{
    type: DataTypes.BOOLEAN(),
    allowNull: true,
    comment:'路由开关'
  }
})

// 强制同步数据库（创建数据表，存在表就删除后重建
// RouterSwitch.sync({ force: true })

module.exports = RouterSwitch
