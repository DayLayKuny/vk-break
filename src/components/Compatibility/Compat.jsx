import "./Compat.css"
import { FaTheaterMasks} from 'react-icons/fa';
import { TbClock24, TbShieldLock } from "react-icons/tb"
import { MdOutlineMoneyOffCsred } from "react-icons/md"

function Compat () {
    return (
        <div className="all-compat">
            <div className="compat-item lower-compat ">
                <FaTheaterMasks className="maskfa"/>
                <h6>АНОНИМНО</h6>
                <p>От вас не потребуется никакой личной информации, телефонов или адресов электронной почты. Ваша конфиденциальность будет полностью сохранена. Данные надежно зашифрованы сервером.</p>
            </div>
            <div className="compat-item lefter">
                <TbClock24 className="maskfa"/>
                <h6>КРУГЛОСУТОЧНО</h6>
                <p>Получить доступ к странице ВК вы можете в любое время, как днем, так и ночью. Сервис автономен, и ваше вмешательство для его работы не понадобится.</p>
            </div>
            <div className="compat-item lower-compat lefter">
                <MdOutlineMoneyOffCsred className="maskfa" />
                <h6>ОТСУТСТВИЕ ПРЕДОПЛАТЫ</h6>
                <p>К сожалению, не все аккаунты данной социальной сети можно взломать. Мы предлагаем вам платить за результат. То есть деньги, вы отдаете только после получения полного контроля над профилем.</p>
            </div>
            <div className="compat-item lefter">
                <TbShieldLock className="maskfa"/>
                <h6>ПОЛНАЯ ЗАЩИТА</h6>
                <p>Анонимность и безопасность наших клиентов на каждом этапе взлома гарантированна благодаря технологии сквозного шифрования.</p>
            </div>
        </div>  
    )
}

export default Compat