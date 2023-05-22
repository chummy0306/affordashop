import React from "react";
import style from "./Login.css";
import ice_cream from "../images/ice_cream.jpg";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const BgImage = styled.div`
    width: 100vw;
    height: 100vh;

    background-image: linear-gradient(
        to top,
        #101010 1%,
        transparent,
        transparent
      ),
      url(${ice_cream});
    background-size: cover;
  `;

  return (
    <div>
      <BgImage />
      <div className="login_form" style={style}>
        <Form
          className="form"
          name="basic"
          style={style}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} />
          </Form.Item>

          <Form.Item
            name="password"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              prefix={<KeyOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              className="button-group"
              style={style}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
