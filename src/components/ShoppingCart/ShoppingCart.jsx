import s from './ShoppingCart.module.css'
import {useState} from "react";

const ShoppingCart = () => {
    const [address, setAddress] = useState({city: 'Киев', division: '1 отделение'})
    const [delivery, setDelivery] = useState('self')
    const [payment, setPayment] = useState('imposed')

    return(
        <div className={s.cart}>
            <div className={s.container}>
                <div className={s.cart__path}>
                    Главная / Корзина / Оформление заказа
                </div>
                <div className={s.cart__block}>
                    <div className={s.cart__info}>

                        <div className={s.cart__delivery}>
                            <h5>1. Способ доставки</h5>
                            <div className={s.cart__delivery_radio}>
                                <label onClick={() => setDelivery('self')}>
                                    <input checked={delivery === 'self'} name='type' type="radio"/>
                                    <span className={`${s.radio__styled} ${delivery === 'self' ? s.radio__active : ''}`}></span>
                                    <span>Самовывоз</span>
                                </label>
                                <label onClick={() => setDelivery('np')}>
                                    <input checked={delivery === 'np'} name='type' type="radio"/>
                                    <span className={`${s.radio__styled} ${delivery === 'np' ? s.radio__active : ''}`}></span>
                                    <span>Нова пошта</span>
                                </label>
                            </div>
                            <div className={s.cart__delivery_address}>
                                <h5>Ваш адрес</h5>
                                <p>
                                    <span>Город:</span>
                                    <select className={s.styled__select} name={'city'} value={address.city}>
                                        <option value={"Винница"}>Винница</option>
                                        <option value={"Киев"}>Киев</option>
                                    </select>
                                </p>
                                <p>
                                    <span>Отделение №:</span>
                                    <select className={s.styled__select} name={'division'} value={address.division}>
                                        <option value="1">1 Отделение</option>
                                        <option value="2">2 Отделение</option>
                                    </select>
                                </p>
                            </div>
                        </div>

                        <div className={s.cart__name}>
                            <h5>2. Данные получателя</h5>
                            <div className={s.cart__name_forms}>
                                <div className={s.name__form}>
                                    <p>Имя</p>
                                    <input placeholder={'Иван'} type="text"/>
                                </div>
                                <div className={s.name__form}>
                                    <p>Номер</p>
                                    <input placeholder={'+380 66666666'} type="tel" />
                                </div>
                                <div className={s.name__form}>
                                    <p>E-mail</p>
                                    <input placeholder={'@gmail.com'} type="email"/>
                                </div>
                                <div className={s.name__form}>
                                    <p>ФИО получателя</p>
                                    <input placeholder={'Иванов Иван Иванович'} type="text"/>
                                </div>
                            </div>
                        </div>

                        <div className="cart__payment">
                            <h5>Способ оплаты</h5>
                            <div className="cart__payment_inputs">
                                <div className="cart__payment_input">
                                    <label onClick={() => setPayment('imposed')}>
                                        <input checked={payment === 'imposed'} name='payment' type="radio"/>
                                        <span className={`${s.radio__styled} ${payment === 'imposed' ? s.radio__active : ''}`}></span>
                                        <span>Наложенный платеж</span>
                                    </label>
                                </div>
                                <div className="cart__payment_input">
                                    <label onClick={() => setPayment('prepayment')}>
                                        <input checked={payment === 'prepayment'} name='payment' type="radio"/>
                                        <span className={`${s.radio__styled} ${payment === 'prepayment' ? s.radio__active : ''}`}></span>
                                        <span>Предоплата на карту</span>
                                    </label>
                                </div>
                                <div className="cart__payment_input">
                                    <label onClick={() => setPayment('cash')}>
                                        <input checked={payment === 'cash'} name='payment' type="radio"/>
                                        <span className={`${s.radio__styled} ${payment === 'cash' ? s.radio__active : ''}`}></span>
                                        <span>Наличными или картой в автосалоне</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={s.cart__product}></div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart
