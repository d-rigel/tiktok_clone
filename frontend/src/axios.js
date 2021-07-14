import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-tikto.herokuapp.com/",
});

export default instance;
