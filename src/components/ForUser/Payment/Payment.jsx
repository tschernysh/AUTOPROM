import React from "react";
import f from './Payment.module.css'

const Payment = (props) => {
    return (
        <div className={f.payment}>
            <div className={f.payment__title}>
                Оплата
            </div>
            <div className={f.payment__items}>
                <div className={f.payment__item}>
                    <div className={f.payment__item__title}>
                        Наложенный платеж
                    </div>
                    <div className={f.payment__item__text__first}>
                        При отправке товара наложенным платежом, вы сможете оплатить покупку на отделении Новой почты
                        наличными, картой Visa и MasterCard, в мобильном приложении, через Google Pay или Apple Pay.
                    </div>
                </div>
                <div className={f.payment__item}>
                    <div className={f.payment__item__title}>
                        Предоплата на карту
                    </div>
                    <div className={f.payment__item__text__second}>
                        Чтобы не переплачивать за отправку наложенного платежа, можете сделать предоплату на карту
                        Приват Банка. Просто укажите это при оформлении заказа и мы отправим вам реквизиты.
                    </div>
                </div>
                <div className={f.payment__item}>
                    <div className={f.payment__item__title}>
                        Наличными или картой в автосервисе
                    </div>
                    <div className={f.payment__item__text__third}>
                        В самом сервисе возможна оплата наличными или картой Visa и MasterCard через терминал.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment