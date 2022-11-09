import axios from "axios";

const API_URL = "https://demoblog.afeagroup.com/user/";

const register = (username, email, password) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {



  
    let p = new URLSearchParams();
    params.append(name: 'username', value: 'username')
    params.append(name: 'password', value: 'username')
    params.append(name: 'passconf', value: 'username')

    //return axios.post(url, params)

  return axios
    .post(url, params, {
      username,
      password,
      passconf
    })
}



const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  getCurrentUser,
}

export default AuthService;
