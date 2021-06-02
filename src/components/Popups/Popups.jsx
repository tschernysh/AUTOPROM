import React from "react";
import s from './Popups.module.css'
import Exit from '../../../src/common/img/Exit.png'
import Google from '../../../src/common/img/Google.png'
import Facebook from '../../../src/common/img/Facebook.png'
import b from "../Services/Serve/Serve.module.css";
import Confirmation from '../../../src/common/img/Confirmation.png'
import User from '../../../src/common/img/user.png'
import CityMarker from '../../../src/common/img/CityMarker.png'
import Star from "../../common/img/star.png";
import HollowStar from "../../common/img/hollowStar.png";
import Alex from "../../common/img/Alex.png";


const Popups = (props) => {
    return (
        <div className={s.popups}>
            {/*------------registration------------*/}

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
            {/*------------delivery------------*/}
            <div className={s.delivery}>
                <div className={s.delivery__exit}>
                    <img src={Exit}/>
                </div>
                <div className={s.delivery__title}>
                    Доставка
                </div>
                <div className={s.delivery__post}>
                    Самовывоз
                </div>
                <div className={s.delivery__text}>
                    9:00 - 18:00
                    <br></br>
                    ул. Никольско-Слободская, 6Г
                    (возле ст.м. Левобережная)
                </div>
                <div className={s.delivery__post}>
                    Новая почта
                </div>
                <div className={s.delivery__text}>
                    Срок: 1- 3 дня
                    <br></br>
                    Стоимость - по тарифам НП
                </div>
            </div>
            {/*-----------review------------*/}
            <div className={s.review}>
                <div className={s.review__exit}>
                    <img src={Exit}/>
                </div>
                <div className={s.review__title}>
                    Оставьте свой отзыв
                </div>
                <div className={s.review__name}>
                    Имя
                </div>
                <input className={s.review__name__input} value='Иван'/>
                <div className={s.review__city}>
                    Город
                </div>
                <input className={s.review__city__input} value='Киев'/>
                <div className={s.review__review}>
                    Отзыв
                </div>
                <textarea className={s.review__name__review} value='Текст'/>
                <div className={s.review__rating}>
                    Оценка
                </div>
                <div className={s.review__rating__star}>
                    <img src={HollowStar} alt=""/>
                    <img src={HollowStar} alt=""/>
                    <img src={HollowStar} alt=""/>
                    <img src={HollowStar} alt=""/>
                    <img src={HollowStar} alt=""/>
                </div>
                <input className={s.review__button} type="submit" value="Добавить отзыв"/>
            </div>
            {/*------------accepted__review------------*/}
            <div className={s.accepted__review}>
                <div className={s.accepted__review__exit}>
                    <img src={Exit}/>
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

export const RegistrationPopup = () => {
    return(
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
    )
}

export default Popups
