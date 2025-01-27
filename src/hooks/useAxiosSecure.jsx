import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("Request stopped by the inceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      // console.log("Status error in the interceptor", status);

      if (status === 401 || status === 403) {
        logOut();
        navigate("/login");
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
