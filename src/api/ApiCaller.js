import axios from "axios";
import API from "./API";

export default function CallAPI(method = "GET", endpoint, item) {
  return axios({
    method: method,
    url: `${API}/${endpoint}`,
    data: item,
  });
}
