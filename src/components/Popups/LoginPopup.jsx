import s from "./Popups.module.css";
import Exit from "../../common/img/Exit.png";
import Google from "../../common/img/Google.png";
import Facebook from "../../common/img/Facebook.png";
import {RegistrationPopup} from "./RegistrationPopup";
import {ForgotPasswordPopup} from "./ForgotPasswordPopup";

export const LoginPopup = (props) => {
    return(
        <div className={s.wrapper}>
            <div className={s.popups__log_in}>
                <div className={s.popups__log_in__exit}>
                    <img onClick={() => props.setModalVisibility(false)} src={Exit}/>
                </div>
                <div className={s.popups__log_in__text}>
                    Вход
                </div>
                <div className={s.popups__log_in__social}>
                    <div className={s.popups__log_in__google}>
                        <img src={Google}/>
                    </div>
                    <div className={s.popups__log_in__facebook}>
                        <img src={Facebook}/>
                    </div>
                </div>
                <input className={s.popups__log_in__input} value='Имя'/>
                <input className={s.popups__log_in__input} value='Пароль'/>
                <div onClick={() => props.setModalContent( () => ForgotPasswordPopup )} className={s.popups__log_in__text__pass}>
                    Забыли пароль?
                </div>
                <input className={s.popups__log_in__button} type="submit" value="Войти"/>
                <div className={s.popups__log_in__text__bottom}>
                    Я хочу зарегистрироваться
                </div>
            </div>
        </div>
    )
}
