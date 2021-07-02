import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';


const register = (firstname: String, lastname: String, email: String, password: String) => axios.post(`${API_URL}signup`, {
    firstname,
    lastname,
    email,
    password,
  });

  const AuthService = {
    register,
  };
  
  export default AuthService;