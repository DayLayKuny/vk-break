import React from "react";
import "./signin-form.css";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import logo from "../../img/logo+name.svg";
import GoogleAuth from "../google-auth/GoogleAuth";

const SignInForm = ({onSwitch}) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
      <img src={logo} height={"200px"} />
      <input
        placeholder="Email"
        {...register("email", { required: true })}
        style={
          errors.email && {
            border: "1px solid #EB4C42FF",
            background: "#26181DFF",
          }
        }
      />
      <input
        placeholder="Password"
        {...register("password", { required: true })}
        style={
          errors.password && {
            border: "1px solid #EB4C42FF",
            background: "#26181DFF",
          }
        }
      />
      <button>Вход</button>
      <GoogleAuth />
      <b onClick={() => onSwitch()} className="form-type">Создать аккаунт</b>
    </form>
  );
};

export default SignInForm;
