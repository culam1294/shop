import React, { useState } from "react";
import { Modal, Button, Form, Input, Checkbox, message } from "antd";
import { useDispatch } from "react-redux";
import { isLogin } from "../../action/IsLogin";

export default function ModalForm() {
  const [visible, setVisible] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const dispatch = useDispatch();

  const onFinish = async () => {
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
  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 30 },
  };

  return (
    <>
      <Button
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
          {...layout}
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}

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
