import React, { useState } from "react";
import { Button, Form, Input, InputNumber, message } from "antd";

export default function ProfileView() {
  const [isLoad, setIsLoad] = useState(false);
  const [form] = Form.useForm();
  const onFinish = async (value) => {
    console.log(value);
    setTimeout(() => {
      setIsLoad(false);
      message.success("Sign in success!");
    }, 1000);
  };
  const onFinishFailed = (err) => {
    console.log("Failed:", err);

    setIsLoad(!isLoad);
  };
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
  };
  return (
    <div>
    <Form
      {...layout}
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="Full Name"
        label="Full Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="UserName"
        label="UserName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="Email"
        label="Email"
        rules={[
          {
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Age"
        label="Age"
        rules={[
          {
            type: "number",
            min: 13,
            max: 120,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name="website" label="Website">
        <Input />
      </Form.Item>
      <Form.Item name="Feedback" label="Feeling">
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button
          style={{marginLeft: "50%" }}
          onClick={() => setIsLoad(!isLoad)}
          loading={isLoad}
          type="primary"
          htmlType="submit"
        >
          Update
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
}
