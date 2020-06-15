import React from "react";
import { List, Avatar } from "antd";
import dataNotification from "./DataNotification";

export default function Notification() {
  return (
    <List
      style={{margin : '0 40px'}}
      itemLayout="horizontal"
      dataSource={dataNotification}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={<a href>{item.title}</a>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
}
