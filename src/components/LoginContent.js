import React from 'react';
import { Layout } from 'antd';
import SideBar from './SideBar';
import LoginForm from './LoginForm';

const { Content } = Layout;

const LoginContent = () => (
    <div>
        <SideBar item={[]}/>
        <Layout style={{ margin: '60px 180px', padding: '0 24px 24px'}}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: '100vh',
            overflow: 'auto'
          }}
        >   
            <LoginForm />
        </Content>
      </Layout>
    </div>
    
);

export default LoginContent;