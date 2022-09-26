import { Button,  Form, Input ,message} from 'antd';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import React,{ useState } from 'react';
import styles from "./SignInPage.module.css"

// 表单元素默认状态
const defaultFormFields ={
  jobNumber:'',
  password:'',
}

function Login(){
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { jobNumber, password} = formFields
  const history = useHistory()
  const dispatch = useDispatch()

  // 接收每一个input的值
  const handleChange = (event) =>{
    const {name,value} = event.target
    setFormFields({...formFields,[name]:value})
  }

  // const dispatch = useDispatch()
  const onFinish = async (values) => {
    const res = await fetch("http://localhost:8000/users/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(values)
    }).then(response => response.json())
    if (res.code === 0) {
      dispatch({ type: 'login_in', userName: res.result.jobNumber,token:res.result.token })
      history.push('/')
      console.log(res.result.token)
      message.info(`欢迎登录${res.result.userName}`);
    } else {
      message.info(`${res.message}`);
    }
  };

  // const onFinish = () => {
  //   history.push('/')
  //   message.info('欢迎登录')
  // }


  return (
    <div className={styles.layout}>
      <Form
        className={styles.signBox}
        onFinish={onFinish}
      >
        <Form.Item>
          <h2>项目管理系统</h2>
        </Form.Item>
        <Form.Item name="jobNumber" 
          rules={[
            { required: true, message: '工号不能为空!' },
            { pattern:new RegExp(/^[A-Z]{2}\d{2,3}$/),message:'工号格式错误'}
          ]}>
          <Input
            placeholder="工号"
            type={"text"}
            className={styles.styleInput}
            onChange={handleChange}
            name = "jobNumber"
            value ={jobNumber}
          />
        </Form.Item>
        <Form.Item name="password" 
          rules={[
            { required: true, message: '密码不能为空!' },
            { pattern:new RegExp(/^[A-Za-z0-9]{5,15}$/i),message: '请输入不包含特殊字符且长度为6~16位的密码！' },
          ]}>
          <Input
            type="password"
            placeholder="密码"
            className={styles.styleInput}
            onChange={handleChange}
            name = "password"
            value ={password}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles["login-form-button"]} >
            登陆
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login