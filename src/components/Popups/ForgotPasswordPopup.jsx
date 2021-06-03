import s from "./Popups.module.css";
import Exit from "../../common/img/Exit.png";

export const ForgotPasswordPopup = (props) => {
    return(
        <div className={s.wrapper}>
            <div className={s.password}>
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
                <div className={s.password__text__bottom}>
                    Вернуться на страницу входа
                </div>
            </div>
        </div>
    )
}
