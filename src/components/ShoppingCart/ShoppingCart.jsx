import s from './ShoppingCart.module.css'
import {useState} from "react";

const ShoppingCart = () => {
    const [info, setInfo] = useState(
        {delivery: 'NP',
                        name: '',
                        number: '',
                        email: '',
                        fullName: '',
                        payment: 'imposed',
                        city: 'Киев',
                        division: '1 отделение'}
    )


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
                                <label onClick={() => setInfo({...info, delivery: 'self' })}>
                                    <input checked={info.delivery === 'self'} name='type' type="radio"/>
                                    <span className={`${s.radio__styled} ${info.delivery === 'self' ? s.radio__active : ''}`}></span>
                                    <span>Самовывоз</span>
                                </label>
                                <label onClick={() => setInfo({...info, delivery: 'NP' })}>
                                    <input checked={info.delivery === 'NP'} name='type' type="radio"/>
                                    <span className={`${s.radio__styled} ${info.delivery === 'NP' ? s.radio__active : ''}`}></span>
                                    <span>Нова пошта</span>
                                </label>
                            </div>
                            <div className={s.cart__delivery_address}>
                                <h5>Ваш адрес</h5>
                                <p>
                                    <span>Город:</span>
                                    <select className={s.styled__select} name={'city'} value={info.city}>
                                        <option value={"Винница"}>Винница</option>
                                        <option value={"Киев"}>Киев</option>
                                    </select>
                                </p>
                                <p>
                                    <span>Отделение №:</span>
                                    <select className={s.styled__select} name={'division'} value={info.division}>
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

                        <div className={s.cart__payment}>
                            <h5>3. Способ оплаты</h5>
                            <div className={s.cart__payment_inputs}>
                                <div className={s.cart__payment_input}>
                                    <label onClick={() => setInfo({...info, payment: 'imposed' })}>
                                        <div>
                                            <input checked={info.payment === 'imposed'} name='payment' type="radio"/>
                                            <span className={`${s.radio__styled} ${info.payment === 'imposed' ? s.radio__active : ''}`}></span>
                                        </div>
                                        <div>
                                            <span>Наложенный платеж</span>
                                            <sub>Оплатить покупку на отделении Новой почты</sub>
                                        </div>
                                    </label>
                                </div>
                                <div className={s.cart__payment_input}>
                                    <label onClick={() => setInfo({...info, payment: 'prepayment' })}>
                                        <div>
                                            <input checked={info.payment === 'prepayment'} name='payment' type="radio"/>
                                            <span className={`${s.radio__styled} ${info.payment === 'prepayment' ? s.radio__active : ''}`}></span>
                                        </div>
                                        <div>
                                            <span>Предоплата на карту</span>
                                            <sub>Мы отправим реквизиты вам на адрес эл. почты</sub>
                                        </div>
                                    </label>
                                </div>
                                <div className={s.cart__payment_input}>
                                    <label onClick={() => setInfo({...info, payment: 'cash' })}>
                                        <div>
                                            <input checked={info.payment === 'cash'} name='payment' type="radio"/>
                                            <span className={`${s.radio__styled} ${info.payment === 'cash' ? s.radio__active : ''}`}></span>
                                        </div>
                                        <div>
                                            <span>Наличными или картой в автосалоне</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className={s.cart__accept}>
                            <h5>4. Подтверждение заказа</h5>
                            <div className={s.cart__accept_info}>
                                <p>
                                    <span>Способ доставки:</span>
                                    <span>{info.delivery}</span>
                                </p>
                                <p>
                                    <span>Имя:</span>
                                    <span>{info.name}</span>
                                </p>
                                <p>
                                    <span>Номер:</span>
                                    <span>{info.number}</span>
                                </p>
                                <p>
                                    <span>E-mail:</span>
                                    <span>{info.email}</span>
                                </p>
                                <p>
                                    <span>ФИО получателя:</span>
                                    <span>{info.fullName}</span>
                                </p>
                                <p>
                                    <span>Оплата:</span>
                                    <span>{info.payment}</span>
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className={s.cart__product}>
                        <div className={s.cart__product_list}>

                            <div className={s.cart__product_item}>
                                <div className={s.cart__product_photo}>
                                    <img src="" alt=""/>
                                </div>
                                <div className="">
                                    <div className={s.cart__product_info}>
                                        <p>Фара передняя Hyundai Getz</p>
                                        <p>3 578 ₴</p>
                                    </div>
                                    <div className={s.cart__product_count}>
                                        <p>1</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="product__cart_insum">
                            <h5>Сумма к оплате</h5>
                            <div className="">
                                <p>
                                    <span>Всего:</span>
                                    <span>10 734 ₴</span>
                                </p>
                                <p>
                                    <span>Скидка:</span>
                                    <span>1 625 ₴</span>
                                </p>
                                <p>
                                    <span>К оплате:</span>
                                    <span>10 734 ₴</span>
                                </p>
                            </div>
                        </div>

                        <div className="product__cart_btns">
                            <button></button>
                            <button></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart
