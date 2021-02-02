import React from 'react';
import "../App.less";
import {NavLink, withRouter} from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const SideBar = (props) => (
    <Sider 
    className="site-layout-background" 
    style={{ marginTop: '64px', position: 'fixed', zIndex: 1, height: '100%'}}>
        <Menu
            mode="inline"
            defaultSelectedKeys={props.item}
            style={{ alignContent: 'center', height: '100%', borderRight: 0 }}
        > 
            <Menu.Item key="main">
                <NavLink to="/">
                    <span>Home</span>
                </NavLink>
            </Menu.Item>
            <Menu.Item key="allsongs">
                <NavLink to="/allsongs">
                    <span>Songs</span>
                </NavLink>
            </Menu.Item>
            <Menu.Item key="ranking">
                <NavLink to="/ranking">
                    <span>Ranking</span>
                </NavLink>
            </Menu.Item>
            <Menu.Item key="favorite">
                <NavLink to="/favorite">
                    <span>Favorite</span>
                </NavLink>
            </Menu.Item>
        </Menu>
    </Sider>
);

export default withRouter(SideBar);