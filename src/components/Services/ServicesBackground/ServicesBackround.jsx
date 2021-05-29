import React from "react";
import b from './ServicesBackround.module.css'
import a from "../../About/Background/Background.module.css";
import AboutLine from "../../../common/img/About__Line.png";

const ServicesBackground = (props) => {
    return (
        <div className={b.services__background}>
            <div className={b.services__background__top__text}>
                <div className={b.services__background__title}>
                    МЫ ПРЕДОСТАВЛЯЕМ УСЛУГИ НА ВСЕ ВИДЫ АВТО
                </div>
                <div className={b.services__background__price}>
                    <div className={b.services__background__price__text}>
                        Низкие цены
                    </div>
                    <div className={b.services__background__price__line}>
                        <img src={AboutLine}/>
                    </div>
                    <div className={b.services__background__price__text2}>
                        Быстрая доставка
                    </div>
                </div>
                <div className={b.services__background__gift}>
                    ДАРИМ -10% НА ПЕРВЫЙ ЗАКАЗ
                </div>
            </div>
        </div>
    )
}

export default ServicesBackground