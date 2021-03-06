import React from "react";
import s from './Popups.module.css'
import Exit from '../../../src/common/img/Exit.png'
import Google from '../../../src/common/img/Google.png'
import Facebook from '../../../src/common/img/Facebook.png'
import b from "../Services/Serve/Serve.module.css";
import Confirmation from '../../../src/common/img/Confirmation.png'
import User from '../../../src/common/img/user.png'
import CityMarker from '../../../src/common/img/CityMarker.png'
import Star from "../../common/img/star.png";
import HollowStar from "../../common/img/hollowStar.png";
import Alex from "../../common/img/Alex.png";
import Product from '../../common/img/product_1.png'


const Popups = (props) => {
    return (
        <div className={s.popups}>
            {/*------------registration------------*/}

            {/*------------log in------------*/}

            {/*------------confirmation------------*/}

            {/*------------user------------*/}

            {/*------------password------------*/}

            {/*------------delivery------------*/}
            <div className={s.delivery}>
                <div className={s.delivery__exit}>
                    <img src={Exit}/>
                </div>
                <div className={s.delivery__title}>
                    Доставка
                </div>
                <div className={s.delivery__post}>
                    Самовывоз
                </div>
                <div className={s.delivery__text}>
                    9:00 - 18:00
                    <br></br>
                    ул. Никольско-Слободская, 6Г
                    (возле ст.м. Левобережная)
                </div>
                <div className={s.delivery__post}>
                    Новая почта
                </div>
                <div className={s.delivery__text}>
                    Срок: 1- 3 дня
                    <br></br>
                    Стоимость - по тарифам НП
                </div>
            </div>
            {/*-----------review------------*/}

            {/*------------accepted__review------------*/}
            <div className={s.accepted__review}>
                <div className={s.accepted__review__exit}>
                    <img src={Exit}/>
                </div>
                <div className={s.accepted__review__content}>
                    <div className={s.accepted__review__item__img}>
                        <img src={Alex}/>
                    </div>
                    <div className={s.accepted__review__item}>
                        <div className={s.accepted__review__name}>
                            Алексей
                        </div>
                        <div className={s.accepted__review__city}>
                            Киев
                        </div>
                    </div>
                </div>
                <div className={s.accepted__review__rating__star}>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                </div>
                <div className={s.accepted__review__text}>
                    Постоянно покупаю в данном сервисе и меня все устраивает. Быстрая доставка и всегда вовремя.
                    Несомненно "AutoProm" лидер в своей сфере. Посоветовал и дал контакты всем своим знакомым. С
                    уверенностью скажу, что буду обращаться еще не один раз. Спасибо!
                </div>
            </div>



        </div>
    )
}


export default Popups
