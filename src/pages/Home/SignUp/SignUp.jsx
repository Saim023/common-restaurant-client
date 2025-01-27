import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SocialLogin from "../../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log("Current User", loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("User info updated");
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("User added to the database");
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully!!",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  //   console.log(watch("example"));

  return (
    <>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-800">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoURL"
                  {...register("photoURL", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-800">PhotoURL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-800">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-800">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-800">
                    Password must be at least 6 characters long
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-800">
                    Password must be under 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-800">
                    Password must contain at least one uppercase, one lowercase,
                    one number and one special character
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Signup"
                />
              </div>
              <SocialLogin></SocialLogin>
              <p>
                <small>
                  Already have an account?{" "}
                  <Link className="text-blue-800" to="/login">
                    Please login
                  </Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
