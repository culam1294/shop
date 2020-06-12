import axios from "axios";
import API from "./API";

export default function CallApi(method = "GET", endpoint, item) {
  return axios({
    method: method,
    url: `${API}/${endpoint}`,
    data: item,
  });
}
