import React from 'react';
import { Layout } from 'antd';
import SideBar from './SideBar';

const { Content } = Layout;

const RankingContent = () => (
    <div>
        <SideBar item={['ranking']}/>
        <Layout style={{ margin: '60px 180px', padding: '0 24px 24px'}}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: '100vh',
            overflow: 'auto'
          }}
        >
            Ranking
        </Content>
      </Layout>
    </div>
    
);

export default RankingContent;