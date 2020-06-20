const initialState ={
  dataNotifications: [],
  load: true,
}
const getNotifications = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NOTIFICATIONS":
      return {
        dataNotifications: [...action.payload],
        load: false,
      }
    default:
      return state;
  }
};
export default getNotifications;
