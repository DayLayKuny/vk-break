import React from "react";
import "./url-search.css";
import { useForm } from "react-hook-form";

const UrlSearch = ({onHacking, onError}) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const isVKUrlValid = (url) => {
    const vkUrlRegex = /^https?:\/\/(www\.)?vk\.(com|ru)\/.+/i;
    return vkUrlRegex.test(url);
  };

  const onSubmit = (data) => {
    isVKUrlValid(data.searchUrl) ? onHacking(data.searchUrl) : onError()
  };

  return (
    <div className="url-search">
      <h1>Доступ к аккаунту Вконтакте</h1>
      <h3>введите Адрес страницы к которому нужен доступ </h3>
      <form style={{ display: "flex" }} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="url"
          className="search-inpt"
          placeholder="https://vk.com/id123456"
          {...register("searchUrl", {
            required: true
          })}
        />
        <button className="search-btn">Найти</button>
      </form>
    </div>
  );
};

export default UrlSearch;
