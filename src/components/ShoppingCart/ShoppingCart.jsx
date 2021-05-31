import s from './ShoppingCart.module.css'
import {useState} from "react";

const ShoppingCart = () => {
    const [address, setAddress] = useState({city: 'Киев', division: '1 отделение'})

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
                                <div>
                                    <input name='type' type="radio"/>
                                    <span>Самовывоз</span>
                                </div>
                                <div>
                                    <input name='type' type="radio"/>
                                    <span>Нова пошта</span>
                                </div>
                            </div>
                            <div className={s.cart__delivery_address}>
                                <h5>Ваш адрес</h5>
                                <p>
                                    <span>Город:</span>
                                    <select name={'city'} value={address.city}>
                                        <option value={"Винница"}>Винница</option>
                                        <option value={"Киев"}>Киев</option>
                                    </select>
                                </p>
                                <p>
                                    <span>Отделение №:</span>
                                    <select name={'division'} value={address.division}>
                                        <option value="1">1 Отделение</option>
                                        <option value="2">2 Отделение</option>
                                    </select>
                                </p>
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
