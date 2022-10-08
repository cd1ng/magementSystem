const User = require('../model/use.model')

// 存放与数据库相关的操作，数据库操作都是异步的

// 创建用户
class UserService{
  // 参数超过3个就用对象
  async createUser(jobNumber,password,userName,jobTitle) {
    // User.create({
    //   // 表的字段
    //   jobNumber: jobNumber,
    //   password:password
    // })
    // 参数设计和文档、数据库保持一致
    // await表达式:promise对象的值
    const res = await User.create({ jobNumber,password,userName,jobTitle})
    return res.dataValues
  };

  // 用很多东西去查询，利用{}查询
  async getUserInfo({ id, jobNumber,userName, password }) {
    const whereOpt = {}
    // id存在就拷贝到对象
    id && Object.assign(whereOpt,{ id })
    jobNumber && Object.assign(whereOpt, { jobNumber })
    userName && Object.assign(whereOpt, { userName })
    password && Object.assign(whereOpt, { password })
    // 单条查询
    const res = await User.findOne({
      attributes: ['id', 'jobNumber','userName', 'password'],
      where:whereOpt,
    })
    console.log(res)
    return res?res.dataValues:null
  };

  // 更新值
  async updateInfo(userInfo){
    const {jobNumber,nickname,introduce,phoneNumber,sex,website,avatar}= userInfo
    if(jobNumber!==''){
      const whereOpt = {jobNumber:jobNumber}
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

  async getAllProfile(jobNumber) {
    const whereOpt = {jobNumber:jobNumber}
    // 单条查询
    const res = await User.findOne({
      attributes: ['jobNumber', 'avatar','nickname','introduce','phoneNumber','sex','website'],
      where:whereOpt,
    })
    return res?res.dataValues:null
  };

  async getAllUsers(){
    const res = await User.findAll({raw:true})
    console.log(res)
    return res?res:null
  }

  async switchPath(obj){
    const path = await User.findByPk(obj.id)
    await path.update({path:obj.path.join(',')})
  }

  async deleteUserService(obj){
    // const path = await User.findByPk(obj.id)
    const deleteUser = await User.destroy({
      where:{
        id:obj.id
      }
    })
    console.log(deleteUser)
    return deleteUser
  }
}

module.exports = new UserService()
