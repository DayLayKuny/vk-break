import React, { useState } from "react";
import "./signin-form.css";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import logo from "../../img/logo+name.svg";
import GoogleAuth from "../google-auth/GoogleAuth";
import axios from "axios";

const SignInForm = ({ onSwitch }) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = (data) => {
    axios
      .post(`http://socarm/api.php?action=signin&email=${data["email"]}&password=${data["password"]}`, data)
      .then((res) => {
        console.log(res)
        if (res.data.success) {
          localStorage.setItem("user_token", res.data.token)
          window.location.reload()
        } else {
          setErrorMessage("Неправильный логин или пароль !");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
      <button type="submit">Вход</button>
      <GoogleAuth />
      <b onClick={() => onSwitch()} className="form-type">
        Создать аккаунт
      </b>
      <p style={{ color: "#EB4C42FF" }}>{errorMessage}</p>
    </form>
  );
};

export default SignInForm;
