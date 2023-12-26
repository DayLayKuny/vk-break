import LeftMenu from "../left-menu/LeftMenu";
import "./AppHeader.css";
import logo from "../../img/logo+name.svg";
import { Link } from "react-router-dom";
import AuthForm from "../auth-form/AuthForm";
import { BiSolidUser } from "react-icons/bi";
import { BiMoney } from "react-icons/bi";

function AppHeader({ onOpen, open, onClose, nickname, profile_img, balance }) {
  return (
    <>
      {open && <AuthForm onClose={() => onClose()} />}
      <div className="all-header">
        <div className="downstream-header container">
          <Link to={"/"}>
            <img src={logo} height={"100px"} width={"200px"} />
          </Link>
          <div className="info-div">
            <Link to="/price">Стоимость</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/support">Поддержка</Link>
            <Link to="/blog">Блог</Link>
          </div>
          <div className="login-div">
            {nickname ? (
              <Link to={"/user"} style={{ textDecoration: "none" }}>
                <div className="user_link">
                  <img
                    src={profile_img}
                    height={"65px"}
                    width={"65px"}
                    className="prf_img"
                  />
                  <div style={{display: 'grid'}}>
                    <span className="user_data">{nickname}</span>
                    <span className="user_data">{balance} <BiMoney /></span>
                  </div>
                </div>
              </Link>
            ) : (
              <button onClick={() => onOpen()}>Вход / Регистрация</button>
            )}
          </div>
          <LeftMenu id="left-menu" onOpen={() => onOpen()} />
        </div>
      </div>
    </>
  );
}

export default AppHeader;
