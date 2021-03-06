import React from "react";
import { List, Avatar } from "antd";
import dataAddress from "./DataAddress.js";
import { HomeOutlined } from "@ant-design/icons";

export default function AddressManagement() {
  return (
    <List
      style={{ margin: "0 40px" }}
      itemLayout="horizontal"
      dataSource={dataAddress}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar style={{background: 'red'}} icon={<HomeOutlined />} />
            }
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  );
}
