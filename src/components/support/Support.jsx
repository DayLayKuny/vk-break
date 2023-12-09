import React from "react"
import "./Support.css"
import { CiFileOn } from "react-icons/ci";
import { useState } from "react";

function Support () {

    const [fileName, setFileName] = useState('Файл не выбран')

    function handleFileChange(event){
        setFileName(event.target.files[0].name);
    };

    return (
        <div className="all-support">
                <div className="header-info">
                    <h5>Обращение В Службу Поддержки Клиентов</h5>
                    <p>Заполните форму и мы свяжемся с вами в ближайшее время.</p>
                </div>
            <form className="downstream-support">
                <div className="supform">
                    <h4>Отправьте нам сообщение</h4>
                    <div className="supnameinput">
                        <div className="supname1">
                            <p>Ваше Имя</p>
                            <input type="text" placeholder="Ваше имя..."/>
                        </div>
                        <div className="supname2">
                            <p>Ваш E-Mail</p>
                            <input type="email" placeholder="address@example.com"/>
                        </div>
                    </div>
                    <div className="themetype">
                        <p>Опишите категорию вопроса</p>
                        <input type="text" placeholder="Ваша Тема..." />
                    </div>
                    <div className="alltext">
                        <p>Текст сообщения</p>
                        <textarea placeholder="Составьте подробное описание..." className="textalt" />
                    </div>
                    <div className="fileinfo">
                        <p>Приложите файл</p>
                        <label htmlFor="fileinp"><CiFileOn />Click here</label>
                        <input type="file" onChange={handleFileChange}   id="fileinp" />
                        <br />
                        <span style={{ textAlign: 'center' }}>{fileName}</span>

                    </div>
                        <div className="sub">
                            <input type="submit" />
                        </div>
                </div>
                <div className="supform-info">
                    <h4>Контактная информация</h4>
                    <p>Наша специалисты всегда на связи и рады ответить на Ваши вопросы.</p>
                    <h4>Техническая поддержка:</h4>
                    <p>support@vzlom-vk.ru</p>
                    <p>По общим вопросам, включая партнерские возможности, обращайтесь по электронной почте:</p>
                    <h4>Отдел расчетов:</h4>
                    <p>billing@vzlom-vk.ru</p>
                    <p>Регистрируя профиль на панели мониторинга, вы автоматически принимаете все необходимые условия</p><a href="/policy-privacy">условия и положения.</a>
                </div>
                

            </form>
            </div>
  )}
export default Support;
