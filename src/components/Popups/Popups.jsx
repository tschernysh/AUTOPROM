import React from "react";
import s from './Popups.module.css'
import Exit from '../../../src/common/img/Exit.png'
import Google from '../../../src/common/img/Google.png'
import Facebook from '../../../src/common/img/Facebook.png'
import b from "../Services/Serve/Serve.module.css";
import Confirmation from '../../../src/common/img/Confirmation.png'
import User from '../../../src/common/img/user.png'
import CityMarker from '../../../src/common/img/CityMarker.png'


const Popups = (props) => {
    return (
        <div className={s.popups}>
            {/*------------registration------------*/}
            <div className={s.popups__registration}>
                <div className={s.popups__registration__exit}>
                    <img src={Exit}/>
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
                    <label className={s.popups__registration__confirm} For="checkbox-id"></label>
                    <div className={s.popups__registration__confirm__text}>
                        Я соглашаюсь c <a href='#'>условиями обработки данных</a>
                    </div>
                </div>
                <input className={s.popups__registration__button} type="submit" value="Зарегистрироваться"/>
                <div className={s.popups__registration__text__bottom}>
                    У меня уже есть аккаунт
                </div>
            </div>
            {/*------------log in------------*/}
            <div className={s.popups__log_in}>
                <div className={s.popups__log_in__exit}>
                    <img src={Exit}/>
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
                <div className={s.popups__log_in__text__pass}>
                    Забыли пароль?
                </div>
                <input className={s.popups__log_in__button} type="submit" value="Войти"/>
                <div className={s.popups__log_in__text__bottom}>
                    Я хочу зарегистрироваться
                </div>
            </div>
            {/*------------confirmation------------*/}
            <div className={s.confirmation}>
                <div className={s.popups__confirmation__exit}>
                    <img src={Exit}/>
                </div>
                <div className={s.popups__confirmation__img}>
                    <img src={Confirmation}/>
                </div>
                <div className={s.popups__confirmation__text}>
                    Запрос на восстановление пароля отправлен на Ваш электронный адрес
                </div>
            </div>
            {/*------------user------------*/}
            <div className={s.user}>
                <div className={s.user__exit}>
                    <img src={Exit}/>
                </div>
                <div className={s.user__content}>
                    <div className={s.user__content__img}>
                        <img src={User}/>
                    </div>
                    <div className={s.user__content__top}>
                        <div className={s.user__content__title}>
                            Имя Фамилия
                        </div>
                        <div className={s.user__content__location}>
                            <div className={s.user__content__location__img}>
                                <img src={CityMarker}/>
                            </div>
                            <div className={s.user__content__city}>
                                Хмельницкий
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.user__title}>
                    Номер телефона:
                </div>
                <div className={s.user__text}>
                    +380 976543378
                </div>
                <div className={s.user__title}>
                    Адрес доставки:
                </div>
                <div className={s.user__text}>
                    ул. Проскуровская, 23
                </div>
            </div>
            {/*------------password------------*/}
            <div className={s.password}>
                <div className={s.password__exit}>
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

export default Popups