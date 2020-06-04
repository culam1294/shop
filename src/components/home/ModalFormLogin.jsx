import React, { useState } from "react";
import { Modal, Button, Form, Input, Checkbox, message } from "antd";
import { useDispatch } from "react-redux";
import { isLogin } from "../../action/IsLogin";

export default function ModalForm() {
  const [visible, setVisible] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const dispatch = useDispatch();

  const onFinish = async (value) => {
    setVisible(false);
    setIsLoad(false);
    message.success("Login success!");
    dispatch(isLogin());
  };
  const onFinishFailed = (err) => {
    console.log("Login failed!", err);
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

  return (
    <>
      <Button
        style={{ fontSize: "1.5em" }}
        type="link"
        onClick={() => setVisible(true)}
      >
        Login
      </Button>
      <Modal
        closable={false}
        title="Login to buy more"
        visible={visible}
        footer={null}
      >
        <Form
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          wrapperCol={{ span: 20 }}
          labelCol={{ span: 30 }}

          layout="horizontal"
        >
          <Form.Item rules={[{ required: true }]} name="account">
            <Input placeholder="Account" />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} name="password">
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              onClick={() => setIsLoad(!isLoad)}
              loading={isLoad}
              type="primary"
              htmlType="submit"
            >
              Login
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
