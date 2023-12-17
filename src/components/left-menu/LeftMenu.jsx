import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./left-menu.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const LeftMenu = ({onOpen}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow} id="menu-open-btn">
        <AiOutlineMenu />
      </Button>

      <Offcanvas show={show} onHide={handleClose} id="menu">
        <Offcanvas.Header>
          <button onClick={() => handleClose()} className="close-btn">
            <AiOutlineClose />
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body id="menu-body">
          <div className="left-menu-links">
            <button onClick={() => {
              onOpen()
              handleClose()
            }} className={'auth-btn'}>Вход / Регистрация</button>
            <Link to="/price" onClick={() => handleClose()}>Стоимость</Link>
            <Link to="/faq" onClick={() => handleClose()}>FAQ</Link>
            <Link to="/support" onClick={() => handleClose()}>Поддержка</Link>
            <Link to="/blog" onClick={() => handleClose()}>Блог</Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default LeftMenu;
