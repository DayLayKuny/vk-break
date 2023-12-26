import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../img/logo+name.svg";
import GoogleAuth from "../google-auth/GoogleAuth";
import "./signup-form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ onSwitch }) => {
  let navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null)

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(
        `http://socarm/api.php?action=signup&nickname=${data["nickname"]}&email=${data["email"]}&password=${data["password"]}`
      )
      .then((res) => {
        console.log(res)
        if (res.data.success) {
          const customToken = res.data.token
          localStorage.setItem('user_token', customToken)
          window.location.reload()
        }else {
          setErrorMessage(true)
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
      <button type="submit">Зарегистрироваться</button>
      <GoogleAuth />
      <p className="form-type">
        Уже есть аккаунт ?{" "}
        <b onClick={() => onSwitch()} style={{ color: "##8125CFFF" }}>
          Войти
        </b>
      </p>
      {errorMessage && <p style={{ color: "#EB4C42FF"}}>Почта уже зарегистрирована !</p>}
    </form>
  );
};

export default SignUpForm;
