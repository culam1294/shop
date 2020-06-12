import React from "react";
import { Badge, Avatar, Popover, List } from "antd";
import { BellOutlined, SettingOutlined } from "@ant-design/icons";

export default function Notification() {
  const data = [
    {
      title: "Racing car sprays burning fuel into crowd",
      description: "Japanese princess to wed commoner",
    },
    {
      title: "Racing car sprays burning fuel into crowd",
      description: "Japanese princess to wed commoner",
    },
    {
      title: "Racing car sprays burning fuel into crowd",
      description: "Japanese princess to wed commoner",
    },
    {
      title: "Racing car sprays burning fuel into crowd",
      description: "Japanese princess to wed commoner",
    },
    {
      title: "Racing car sprays burning fuel into crowd",
      description: "Japanese princess to wed commoner",
    },
    {
      title: "Racing car sprays burning fuel into crowd",
      description: "Japanese princess to wed commoner",
    },
    {
      title: "Racing car sprays burning fuel into crowd",
      description: "Japanese princess to wed commoner",
    },
  ];
  const text = (
    <div style={{ display: "flex" }}>
      <a style={{ margin: "0px auto" }} href>
        Notifications
      </a>
    </div>
  );
  const content = (
    <div style={{ width: 250 }}>
      <List
        footer={
          <div style={{ display: "flex" }}>
            <a style={{ margin: "0px auto" }} href>
              Show all notifications
            </a>
          </div>
        }
        size="small"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar>
                  <SettingOutlined />
                </Avatar>
              }
              title={<a href="localhost:3000">{item.title}</a>}
              description={<i>{item.description}</i>}
            />
          </List.Item>
        )}
      />
    </div>
  );
  return (
    <div>
      <Popover
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Badge count={data.length}>
          <Avatar
            style={{ backgroundColor: "grey", cursor: "pointer" }}
            icon={<BellOutlined />}
          />
        </Badge>
      </Popover>
    </div>
  );
}
