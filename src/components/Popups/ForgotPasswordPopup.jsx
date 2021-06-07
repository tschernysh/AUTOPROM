import s from "./Popups.module.css";
import Exit from "../../common/img/Exit.png";
import {LoginPopup} from "./LoginPopup";
import {ForgetSuccessPopup} from "./ForgetSuccessPopup";

export const ForgotPasswordPopup = (props) => {
    return(
        <div className={s.wrapper}>
            <form onSubmit={(e) => {e.preventDefault(); props.setModalContent(() => ForgetSuccessPopup )} } className={s.password}>
                <div onClick={() => props.setModalVisibility(false)} className={s.password__exit}>
                    <img src={Exit}/>
                </div>
                <div className={s.password__title}>
                    Забыли пароль?
                </div>
                <div className={s.password__text}>
                    Введите ваш адрес электронной почты
                </div>
                <input className={s.password__input} value='E-mail'/>
                <input className={s.password__button} type="submit" value="Продолжить"/>
                <div onClick={() => props.setModalContent(() => LoginPopup)} className={s.password__text__bottom}>
                    Вернуться на страницу входа
                </div>
            </form>
        </div>
    )
}
