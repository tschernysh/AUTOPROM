import s from "./Popups.module.css";
import Exit from "../../common/img/Exit.png";
import Alex from "../../common/img/Alex.png";
import Star from "../../common/img/star.png";

export const ReviewPopup = (props) => {
    return(
        <div className={s.wrapper}>
            <div className={s.accepted__review}>
                <div className={s.accepted__review__exit}>
                    <img onClick={ () => props.setModalVisibility(false)} src={Exit}/>
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
