// 模型是代表数据库中表的抽象
const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

// 建立模型 会自动进行推断，mivida_user在后面+s=mivida_users
const User = seq.define('mivida_user', {
  // id 会被自动创建
  user_name: {
    type: DataTypes.STRING(10), // 类型
    allowNull: false,       // 不能为空
    unique: true,           // 唯一
    comment:'用户名，唯一'   //  注释
  },
  password: {
    type: DataTypes.CHAR(100),
    allowNull: false,
    comment:'密码'
  },
  nickname:{
    type: DataTypes.STRING(10),
    allowNull: true,
    comment:'昵称'
  },
  introduce:{
    type: DataTypes.STRING(255),
    allowNull: true,
    comment:'简介'
  },
  phoneNumber:{
    type:DataTypes.STRING(11),
    allowNull: true,
    comment:'手机号码'
  },
  sex:{
    type:DataTypes.BOOLEAN(),
    allowNull:true,
    comment:'性别'   
  },
  website:{
    type:DataTypes.STRING(50),
    allowNull:true,
    comment:'网站'
  },
  avatar:{
    type:DataTypes.STRING(50),
    allowNull:true,
    comment:'头像'
  }
})

// 强制同步数据库（创建数据表，存在表就删除后重建
// User.sync({ force: true })

module.exports = User
