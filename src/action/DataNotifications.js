import fetchNotificationsApi from "../api/CallApi";

export const fetchNotifications = () => {
  return async (dispatch) => {
    const res = await fetchNotificationsApi('get','notification',null);
    dispatch(getNotifications(res.data));
  };
};

export const getNotifications = (notifications) => ({
  type: "GET_NOTIFICATIONS",
  payload: notifications,
});

