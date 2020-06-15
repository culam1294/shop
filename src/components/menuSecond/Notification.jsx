import React from "react";
import { Badge, Avatar, Popover, List } from "antd";
import { BellOutlined, SettingOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMenuX } from "../../action/SelectMenu";
import dataNotification from "../profileUser/DataNotification";

export default function Notification() {
  const text = (
    <div style={{ display: "flex" }}>
      <p style={{ margin: "0px auto" }} href>
        Notifications
      </p>
    </div>
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const showAllNotification = () => {
    history.push("/profile/notification");
    dispatch(selectMenuX(5));
  };
  const content = (
    <div style={{ width: 300 }}>
      <List
        footer={
          <div style={{ display: "flex" }}>
            <a
              onClick={showAllNotification}
              style={{ margin: "0px auto" }}
              href
            >
              Show all notifications
            </a>
          </div>
        }
        size="small"
        dataSource={dataNotification}
        renderItem={(item) => (
          <List.Item>
            <a href>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: 7 }}>
                  <Avatar style={{ backgroundColor: "#3B5998" }}>
                    <SettingOutlined />
                  </Avatar>
                </div>
                <a href>{item.title}</a>
              </div>
            </a>
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
        <Badge count={dataNotification.length}>
          <Avatar
            style={{ backgroundColor: "#4267b2", cursor: "pointer" }}
            icon={<BellOutlined />}
          />
        </Badge>
      </Popover>
    </div>
  );
}
