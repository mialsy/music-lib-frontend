import React from 'react';
import {Link} from 'react-router-dom';
import { Layout } from 'antd';
import SideBar from './SideBar';

const { Content } = Layout;

const NotFound = () => (
    <div>
        <SideBar />
        <Layout style={{ margin: '60px 180px', padding: '0 24px 24px'}}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: '100vh',
            overflow: 'auto'
          }}
        >
            404! -<Link to="/">Go home</Link>
        </Content>
      </Layout>
    </div>
);

export default NotFound;