import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);

      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline btn-info w-full"
      >
        <FaGoogle></FaGoogle> Sign In With Google
      </button>
    </div>
  );
};

export default SocialLogin;
