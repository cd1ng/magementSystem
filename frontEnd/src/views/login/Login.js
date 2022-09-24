import { Button, Checkbox, Form, Input ,message} from 'antd';
import { useHistory } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import React,{ useState } from 'react';
import styles from "./SignInPage.module.css"

// 表单元素默认状态
const defaultFormFields ={
  user_name:'',
  password:'',
  remember:true
}

function Login(){
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { user_name, password ,remember} = formFields

  // 接收每一个input的值
  const handleChange = (event) =>{
    const {name,value} = event.target
    setFormFields({...formFields,[name]:value})
  }

  // const dispatch = useDispatch()

  // const onFinish = async (values) => {
  //   const res = await fetch("http://localhost:8000/users/login", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body:JSON.stringify(values)
  //   }).then(response => response.json())
    
  //   if (res.code === 0) {
  //     // dispatch({ type: 'login_in', userName: res.result.user_name })
  //     history.push('/')
  //     message.info(`欢迎登录 ${res.result.user_name}`);
  //   } else {
  //     message.info(`${res.message}`);
  //   }
  // };

  const onFinish = () => {
    history.push('/')
    message.info('欢迎登录')
  }

  const history = useHistory()

  return (
    <div>
      <div className={styles.layout}>
        <Form
          className={styles.signBox}
          onFinish={onFinish}
        >
          <Form.Item>
            <h2>MiVida</h2>
          </Form.Item>
          <Form.Item name="user_name" rules={[{ required: true, message: '请输入用户名!' }]}>
            <Input
              placeholder="用户"
              type={"text"}
              className={styles.styleInput}
              onChange={handleChange}
              name = "user_name"
              value ={user_name}
            />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
            <Input
              type="password"
              placeholder="密码"
              className={styles.styleInput}
              onChange={handleChange}
              name = "password"
              value ={password}
            />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Form.Item valuePropName="checked">
              <Checkbox className={styles.checked} checked={remember}>remember</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles["login-form-button"]} >
              登陆
            </Button>
            <span onClick={() => history.push('/register')} className={styles.register}>
              没有账号？
            </span>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login