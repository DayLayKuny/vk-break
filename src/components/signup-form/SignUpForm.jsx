import React from "react";
import { useForm } from "react-hook-form";
import logo from "../../img/logo+name.svg";
import GoogleAuth from "../google-auth/GoogleAuth";
import "./signup-form.css"

const SignUpForm = ({ onSwitch }) => {
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
      <img src={logo} height={"200px"} alt="Logo" />
      <input
        placeholder="Никнейм"
        {...register("nickname", { required: true })}
        style={
          errors.password && {
            border: "1px solid #EB4C42FF",
            background: "#26181DFF",
          }
        }
      />
      <input
        placeholder="Почта"
        {...register("email", { required: true })}
        style={
          errors.email && {
            border: "1px solid #EB4C42FF",
            background: "#26181DFF",
          }
        }
      />
      <input
        placeholder="Пароль"
        {...register("password", { required: true })}
        style={
          errors.password && {
            border: "1px solid #EB4C42FF",
            background: "#26181DFF",
          }
        }
      />
      <input
        placeholder="Повторить пароль"
        {...register("repeatPassword", { required: true })}
        style={
          errors.password && {
            border: "1px solid #EB4C42FF",
            background: "#26181DFF",
          }
        }
      />
      <button>Зарегистрироваться</button>
      <GoogleAuth />
      <p className="form-type">
        Уже есть аккаунт ?{" "}
        <b onClick={() => onSwitch()} style={{ color: "##8125CFFF" }}>
          Войти
        </b>
      </p>
    </form>
  );    
};

export default SignUpForm;
