import React from 'react';
import { Layout } from 'antd';
import SideBar from './SideBar';
import ShowSongDescription from './SongDescription';

const { Content } = Layout;

const AllSongContent = () => (
    <div>
        <SideBar item={['allsongs']}/>
        <Layout style={{ margin: '60px 180px', padding: '0 24px 24px'}}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: '100vh',
            overflow: 'auto'
          }}
        >
            Song description
            <ShowSongDescription song="song1"/>
        </Content>
      </Layout>
    </div>
    
);

export default AllSongContent;