import s from "./Popups.module.css";
import Exit from "../../common/img/Exit.png";
import Confirmation from "../../common/img/Confirmation.png";
import React from "react";

export const ForgetSuccessPopup = (props) => {
    return(
        <div className={s.wrapper}>
            <div className={s.confirmation}>
                <div onClick={() => props.setModalVisibility(false)} className={s.popups__confirmation__exit}>
                    <img src={Exit}/>
                </div>
                <div className={s.popups__confirmation__img}>
                    <img src={Confirmation}/>
                </div>
                <div className={s.popups__confirmation__text}>
                    Запрос на восстановление пароля отправлен на Ваш электронный адрес
                </div>
            </div>
        </div>
    )
}
