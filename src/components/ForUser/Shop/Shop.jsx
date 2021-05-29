import React from "react";
import f from './Shop.module.css'
import AboutLine from "../../../common/img/About__Line.png";

const Shop = (props) => {
    return (
        <div className={f.shop__background}>
            <div className={f.shop__top__text}>
                <div className={f.shop__title}>
                    Наш интернет-магазин осуществляет доставку по всей Украине
                </div>
                <div className={f.shop__price}>
                    <div className={f.shop__price__text}>
                        Низкие цены
                    </div>
                    <div className={f.shop__price__line}>
                        <img src={AboutLine}/>
                    </div>
                    <div className={f.shop__price__text2}>
                        Быстрая доставка
                    </div>
                </div>
                <div className={f.shop__gift}>
                    ДАРИМ -10% НА ПЕРВЫЙ ЗАКАЗ
                </div>
            </div>
        </div>
    )
}

export default Shop