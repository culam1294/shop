import React, { useState } from "react";
import { Modal, Button, Form, Input, InputNumber, message } from "antd";

export default function ModalForm() {
  const [visible, setVisible] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  const onFinish = async () => {
    setVisible(false);
    setIsLoad(false);
    message.success("Sign in success!");
  };
  const onFinishFailed = (err) => {
    console.log("Failed:", err);
    setIsLoad(!isLoad);
  };

  const onCancel = () => {
    setVisible(false);
    setIsLoad(false);
  };
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
    setIsLoad(false);
  };
  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 30 },
  };

  return (
    <>
      <Button
      style={{ marginLeft: -20}}
        type="link"
        onClick={() => setVisible(true)}
      >
        Signing
      </Button>
      <Modal
        closable={false}
        title={<h2>Sign in to buy more products!</h2>}
        visible={visible}
        footer={null}
        >
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
          <Form.Item name="Feeling" label="Feeling">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button
              onClick={() => setIsLoad(!isLoad)}
              loading={isLoad}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
            <Button style={{ margin: 5 }} onClick={() => onReset()}>
              Reset
            </Button>
            <Button onClick={() => onCancel()}>Cancel</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
