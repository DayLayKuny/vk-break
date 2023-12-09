import LeftMenu from "../left-menu/LeftMenu";
import "./AppHeader.css";
import logo from "../../img/logo+name.svg";
import { Link } from "react-router-dom";
import AuthForm from "../auth-form/AuthForm";

function AppHeader({ onOpen, open, onClose }) {
  return (
    <>
    {console.log(open)}
      {open && <AuthForm onClose={() => onClose()}/>}
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
            <Link to="/user">User</Link>
          </div>
          <div className="login-div">
            <button onClick={() => onOpen()}>Вход / Регистрация</button>
          </div>
          <LeftMenu id="left-menu" onOpen={() => onOpen()} />
        </div>
      </div>
    </>
  );
}

export default AppHeader;
