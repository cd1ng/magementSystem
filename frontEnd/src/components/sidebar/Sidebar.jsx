import { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import changeStyle from '../../utils/iconChange';
import transformTree from '../../utils/transformTree';
import styles from './Sidebar.module.css';
const { Sider } = Layout;

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectKeys = [location.pathname];
  const openKeys = ['/' + location.pathname.split('/')[1]];
  const handleRouter = (e) => {
    navigate(e.keyPath[0]);
  };

  const [sidebar, setSidebar] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/router/findRoutes')
      .then((res) => res.json())
      .then((res) => res.result.map((item) => changeStyle(item)))
      .then((res) => setSidebar(transformTree(res)));
  }, []);
  return (
    <Sider className={styles['site-layout-background']}>
      <Menu
        mode='inline'
        selectedKeys={selectKeys}
        defaultOpenKeys={openKeys}
        items={sidebar}
        onClick={(e) => handleRouter(e)}
      />
    </Sider>
  );
}

export default Sidebar;
