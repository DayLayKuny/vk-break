import "./Amount.css";

function Amount({onOrder, onShowWarning, user_id}) {
  return (
    <div className="all-amount">
      <div className="downstream-amount">
        <div className="amount-info">
          <h3>Стоимость и оплата</h3>
        </div>
        <div className="divp">
          <p>
            Заказывая взлом нескольких профилей, или пользуясь нашим сервером
            повторно, вы получаете гарантированную скидку.
          </p>
        </div>
        <div className="actions">
          <div className="accounts-amount" onClick={user_id ? () => onOrder(899) : onShowWarning}>
            <h6>Один аккаунт</h6>
            <p>Все возможности для тарифа базовый</p>
            <h5>899 /руб.</h5>
          </div>
          <div className="accounts-amount aa1" onClick={user_id ? () => onOrder(1999) : onShowWarning}>
            <h6>Три аккаунта</h6>
            <p>Все возможности для тарифа оптимальный</p>
            <h5>1999 /руб.</h5>
          </div>
          <div className="accounts-amount aa1" onClick={user_id ? () => onOrder(2999) : onShowWarning}>
            <h6>Пять аккаунтов</h6>
            <p>Все возможности для тарифа бизнес</p>
            <h5>2999 /руб.</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Amount;
