import s from "./Popups.module.css";
import Exit from "../../common/img/Exit.png";
import User from "../../common/img/user.png";
import CityMarker from "../../common/img/CityMarker.png";

export const ProfileInfo = (props) => {
    return(
        <div className={s.wrapper}>
            <div className={s.user}>
                <div onClick={() => props.setModalVisibility(false)} className={s.user__exit}>
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
        </div>
    )
}
