import React from 'react';
import { Layout } from 'antd';
import SideBar from './SideBar';
import RegistrationForm from './RegisterForm';

const { Content } = Layout;

const RegisterContent = () => (
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
            <RegistrationForm />
        </Content>
      </Layout>
    </div>
    
);

export default RegisterContent;