import axios from "axios";

const API_URL = "https://demoblog.afeagroup.com/user/";

const getCreate = () => {
  return axios.get(API_URL + "create");
};

const getEdit = () => {
  return axios.get(API_URL + "edit");
};


const UserService = {
  getCreate,
  getEdit
}

export default UserService;
