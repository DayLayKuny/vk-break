import "./Bitcoin.css"
import { FaEthereum } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { SiRipple } from "react-icons/si";
import { FaMonero } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import { TbCurrencySolana } from "react-icons/tb";

function Bitcoin () {
    return (
       <div className="all-bitcoin">
            <div className="info">
                <h4>МЫ АВТОМАТИЧЕСКИ КОНВЕРТИРУЕМ ПЛАТЕЖИ, ПРИНЯТЫЕ В ДРУГИХ ВАЛЮТАХ</h4>
            </div>
            <div className="bitcurrency">
                <FaEthereum className="Bitok bitem"/>
                <FaBitcoin className="Bitok bitem"/>
                <FaMonero className="Bitok bitem"/>
                <SiRipple className="Bitok bitem"/>
                <SiTether className="Bitok bitem"/>
                <TbCurrencySolana className="Bitok bitem"/>
            </div>
        </div> 
    )
    
}

export default Bitcoin