import React from "react";
import { List, Avatar } from "antd";
import { useSelector } from "react-redux";
import { BellOutlined } from "@ant-design/icons";

export default function Notification() {
  const dataNotifications = useSelector(
    (state) => state.dataNotifications.dataNotifications
  );
  return (
    <List
      style={{ margin: "0 40px" }}
      itemLayout="horizontal"
      dataSource={dataNotifications}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar style={{ background: "red" }} icon={<BellOutlined />} />
            }
            title={
              <div style={{ display: "flex", flexDirection: "column" }}>
                <a href>{item.title}</a>
                <i>{item.date}</i>
              </div>
            }
            description={item.detail}
          />
        </List.Item>
      )}
    />
  );
}
