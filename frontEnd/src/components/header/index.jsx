import React from 'react';
import { Layout } from 'antd';
import PersonDropdown from './PersonDropdown';
import styles from './Header.module.css';
const { Header } = Layout;

export const HeaderComponent = () => {
  return (
    <Header className={styles['header']}>
      <div className={styles['logo']}>
        <span>项目管理系统</span>
      </div>
      <div className='tool'>
        <PersonDropdown />
      </div>
    </Header>
  );
};
