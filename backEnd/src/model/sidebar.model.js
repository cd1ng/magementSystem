const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

const Sidebar = seq.define('management_sidebar', {
  jobType: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    comment:'职位权限'
  },
  path: {
    type:DataTypes.STRING(200),
    allowNull: false,
    comment:'路径字符串不同的路径以,分隔开'
  },
})

// Sidebar.sync({ force: true })

module.exports = Sidebar
