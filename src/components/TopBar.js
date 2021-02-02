import React from "react";
import PropTypes from "prop-types";
import "../App.less";
import { withRouter, NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import { LoginOutlined, FormOutlined } from "@ant-design/icons";
import SearchForm from "./SearchForm";

const { Header } = Layout;

// class TestBar extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//           selectedKeys: []
//         }
//       }

//       static contextTypes = {
//         router: PropTypes.object
//       }

//       componentWillReceiveProps() {
//         this.setState({ selectedKeys: [this.context.router.location.pathname] });
//       }

//       componentDidMount() {
//         this.setState({ selectedKeys: [this.context.router.location.pathname] });
//       }

//       linkTo(item) {
//         this.context.router.push(item.key);
//       }

//       render() {
//         return (
//           <Menu mode="inline" theme="dark" defaultSelectedKeys={['page1']} selectedKeys={this.state.selectedKeys} onClick={this.linkTo}>
//             <Menu.Item key="page1">Page1</Menu.Item>
//             <Menu.Item key="page2">Page2</Menu.Item>
//             <Menu.Item key="page3">Page3</Menu.Item>
//           </Menu>
//         );
//       }
// }

const TopBar = () => {
  // const { current } = this.state;
  return (
    //onClick={this.handleClick} selectedKeys={[current]}
    <Header
      theme="dark"
      className="header"
      style={{ position: "fixed", zIndex: 1, width: "100%" }}
    >
      <div id="TopContainer">
        <div id="TopLogo" className="logo">
          Music Library
        </div>
        <SearchForm />
        <div id="TopMenu">
          <Menu selectedKeys={[]} theme="dark" mode="horizontal">
            <Menu.Item key="login" icon={<LoginOutlined />}>
              <NavLink
                to="/login"
                activeStyle={{ fontWeight: "bold" }}
              >
                Sign in
              </NavLink>
            </Menu.Item>
            <Menu.Item key="register" icon={<FormOutlined />}>
              <NavLink
                to="/register"
                activeStyle={{ fontWeight: "bold"}}
              >
                Sign up
              </NavLink>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </Header>
  );
};

export default TopBar;
