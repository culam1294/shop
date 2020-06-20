import React, { useEffect } from "react";
import { Badge, Avatar, Popover, List } from "antd";
import { BellOutlined, SettingOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectMenuX } from "../../action/SelectMenu";
import { fetchNotifications } from "../../action/DataNotifications";

export default function Notification() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  const dataNotifications = useSelector(
    (state) => state.dataNotifications.dataNotifications
  );

  const text = (
    <div style={{ display: "flex" }}>
      <p style={{ margin: "0px auto" }} href>
        Notifications
      </p>
    </div>
  );
  const history = useHistory();
  const showAllNotification = () => {
    history.push("/profile/notification");
    dispatch(selectMenuX(5));
  };
  const content = (
    <div style={{ width: 250 }}>
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
        dataSource={dataNotifications}
        renderItem={(item) => (
          <List.Item>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: 7 }}>
                <Avatar style={{ backgroundColor: "#3B5998" }}>
                  <SettingOutlined />
                </Avatar>
              </div>
              <p style={{ fontSize: "0.9em" }}>{item.title}</p>
            </div>
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
        <Badge count={dataNotifications.length}>
          <Avatar
            style={{ backgroundColor: "#4267b2", cursor: "pointer" }}
            icon={<BellOutlined />}
          />
        </Badge>
      </Popover>
    </div>
  );
}
