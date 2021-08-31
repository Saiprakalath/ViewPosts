import axios from "axios";

export function getDetails() {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
}