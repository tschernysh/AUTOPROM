import s from "./Popups.module.css";
import Exit from "../../common/img/Exit.png";
import Google from "../../common/img/Google.png";
import Facebook from "../../common/img/Facebook.png";
import React from "react";

export const RegistrationPopup = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.popups__registration}>
                <div className={s.popups__registration__exit}>
                    <img onClick={() => props.setModalVisibility(false)} src={Exit}/>
                </div>
                <div className={s.popups__registration__text}>
                    Регистрация
                </div>
                <div className={s.popups__registration__social}>
                    <div className={s.popups__registration__google}>
                        <img src={Google}/>
                    </div>
                    <div className={s.popups__registration__facebook}>
                        <img src={Facebook}/>
                    </div>
                </div>
                <input className={s.popups__registration__input} value='Имя'/>
                <input className={s.popups__registration__input} value='Пароль'/>
                <input className={s.popups__registration__input} value='E-mail'/>
                <div className={s.popups__registration__bottom}>
                    <input className={s.popups__registration__checkbox} type="checkbox" id="checkbox-id"/>
                    <label className={s.popups__registration__confirm} htmlFor="checkbox-id"></label>
                    <div className={s.popups__registration__confirm__text}>
                        Я соглашаюсь c <a href='#'>условиями обработки данных</a>
                    </div>
                </div>
                <input className={s.popups__registration__button} type="submit" value="Зарегистрироваться"/>
                <div className={s.popups__registration__text__bottom}>
                    У меня уже есть аккаунт
                </div>
            </div>
        </div>
    )
}
