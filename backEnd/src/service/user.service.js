const User = require('../model/use.model')

// 存放与数据库相关的操作，数据库操作都是异步的

// 创建用户
class UserService{
  // 参数超过3个就用对象
  async createUser(user_name,password) {
    // User.create({
    //   // 表的字段
    //   user_name: user_name,
    //   password:password
    // })
    // 参数设计和文档、数据库保持一致
    // await表达式:promise对象的值
    const res = await User.create({ user_name, password })
    return res.dataValues
  };

  // 用很多东西去查询，利用{}查询
  async getUserInfo({ id, user_name, password }) {
    const whereOpt = {}
    // id存在就拷贝到对象
    id && Object.assign(whereOpt,{ id })
    user_name && Object.assign(whereOpt, { user_name })
    password && Object.assign(whereOpt, { password })
    // 单条查询
    const res = await User.findOne({
      attributes: ['id', 'user_name', 'password'],
      where:whereOpt,
    })
    return res?res.dataValues:null
  };

  // 更新值
  async updateInfo(userInfo){
    const {user_name,nickname,introduce,phoneNumber,sex,website,avatar}= userInfo
    if(user_name!==''){
      const whereOpt = {user_name:user_name}
      await User.update(
        {
          avatar:avatar,
          nickname:nickname,
          introduce:introduce,
          phoneNumber:phoneNumber,
          sex:sex,
          website:website
        },
        {
          where:whereOpt
        }
      )
      const res = await User.findOne({
        where:whereOpt
      })
      return res?res.dataValues:null
    }
    return null
  }

  async getAllProfile(user_name) {
    const whereOpt = {user_name:user_name}
    // 单条查询
    const res = await User.findOne({
      attributes: ['user_name', 'avatar','nickname','introduce','phoneNumber','sex','website'],
      where:whereOpt,
    })
    return res?res.dataValues:null
  };
}

module.exports = new UserService()
