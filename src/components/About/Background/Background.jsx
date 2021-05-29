import a from './Background.module.css';
import AboutLine from "../../../common/img/About__Line.png";
import React from "react";

const Background = (props) => {
    return (
        <div className={a.about__background}>
            <div className={a.about__top__text}>
                <div className={a.about__title}>
                    БОЛЬШЕ 15 ЛЕТ НА РЫНКЕ!
                </div>
                <div className={a.about__price}>
                    <div className={a.about__price__text}>
                        Низкие цены
                    </div>
                    <div className={a.about__price__line}>
                        <img src={AboutLine}/>
                    </div>
                    <div className={a.about__price__text2}>
                        Быстрая доставка
                    </div>
                </div>
                <div className={a.about__gift}>
                    ДАРИМ -10% НА ПЕРВЫЙ ЗАКАЗ
                </div>
            </div>
        </div>
    )
}

export default Background
