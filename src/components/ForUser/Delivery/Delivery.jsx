import React from "react";
import f from './Delivery.module.css';

const Delivery = (props) => {
    return (
        <div className={f.delivery}>
            <div className={f.delivery__title}>
                Доставка
            </div>
            <div className={f.delivery__item}>
                <div className={f.delivery__items}>
                    <div className={f.delivery__item__title}>
                        Самовывоз
                    </div>
                    <div className={f.delivery__item__text}>
                        Если вы находитесь в Киеве, можете самостоятельно забрать заказ с нашего склада по адресу ул.
                        Торговая, дом 123, офис 456.
                        <br></br><br></br>
                        Работаем ежедневно с 09:00 до 21:00.
                    </div>
                </div>
                <div className={f.delivery__items}>
                    <div className={f.delivery__item__title}>
                        Новая почта
                    </div>
                    <div className={f.delivery__item__text__second}>
                        По Украине отправка осуществляется Новой Почтой. Вы можете выбрать ближайшее к Вам отделение или
                        указать адресную доставку курьером. Стоимость доставки – по тарифам Новой Почты.
                        <br></br><br></br>
                        Сроки – 1-3 дня.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery