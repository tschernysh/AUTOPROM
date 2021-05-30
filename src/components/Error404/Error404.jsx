import React from "react";
import s from './Error404.module.css'
import {NavLink} from "react-router-dom";

const Error404 = (props) => {
    return (
        <div className={s.error404}>
            <div className={s.error404__title}>
                404
            </div>
            <div className={s.error404__text}>
                Упс... Что-то пошло не так.
            </div>
            <div className={s.error404__link}>
                <NavLink to='/'>Вернуться на главную</NavLink>
            </div>
        </div>
    )
}

export default Error404