import React, { useState } from "react";
import axios from "axios";
import { Layout } from "antd";
import SideBar from "./SideBar";

const { Content } = Layout;

const MainContent = () => {
  const [content, setContent] = useState("empty");

  axios
    .get("http://localhost:8081/login")
    .then(function (response) {
      // handle success
      setContent(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  return (
    <div>
      <SideBar item={["main"]} />
      <Layout style={{ margin: "60px 180px", padding: "0 24px 24px" }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: "100vh",
            overflow: "auto",
          }}
        >
          {content}
        </Content>
      </Layout>
    </div>
  );
};

export default MainContent;
