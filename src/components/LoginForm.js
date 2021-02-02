import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const user = {
      username: values.username,
      password: values.password,
    }
    console.log(user);
    axios
      .post("http://localhost:8081/login", {
          username: values.username,
          password: values.password
      })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/register">register now!</Link>
      </Form.Item>
    </Form>
  );
};

export default withRouter(LoginForm);
