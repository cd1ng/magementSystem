const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

const Sidebar = seq.define('management_sidebar', {
  jobType:{
    type:DataTypes.INTEGER,
    allowNull:false,
    unique:true,
    comment:"等级"
  },
  path:{
    type:DataTypes.ARRAY(DataTypes.STRING),
    allowNull:false,
    unique:false,
    comment:"路径"
  },
})

// 强制同步数据库（创建数据表，存在表就删除后重建
Sidebar.sync({ force: true })

module.exports = Sidebar
