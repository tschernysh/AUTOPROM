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


export const PopupsDelivery = (props) => {
    return (
        <div className={s.popups}>
            <div className={s.delivery}>
                <div className={s.delivery__exit}>
                    <img onClick={() => props.setModalVisibility(false)} src={Exit}/>
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

        </div>
    )
}


