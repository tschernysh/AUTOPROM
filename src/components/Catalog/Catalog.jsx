import React from "react";
import s from './Catalog.module.css'
import Transmitter from '../../common/img/Transmitter.png'
import CarAcoustics from '../../common/img/Car_acoustics.png'
import CarRadios from '../../common/img/Car_radios.png'
import CarTVs from '../../common/img/Car_TVs.png'
import Antennas from '../../common/img/Antennas.png'
import TransitionalFramework from '../../common/img/Transitional_framework.png'
import Amplifiers from '../../common/img/Amplifiers.png'
import Arrow from '../../common/img/Arrow.png'
import ArrowOrange from '../../common/img/ArrowOrange.png'

const Catalog = (props) => {
    return (
        <div className={s.container}>
            <div className={s.catalog}>
                <div className={s.catalog__menu}>
                    <a href='#'>Главная</a> / <a href='#'>Категория</a>
                </div>
                <div className={s.catalog__title}>
                    Аудио и видеотехника
                </div>
                <div className={s.catalog__content}>
                    <div className={s.catalog__item}>
                        <div className={s.catalog__item__img}>
                            <img src={Transmitter}/>
                        </div>
                        <div className={s.catalog__item__bottom}>
                            <div className={s.catalog__item__text__transmitter}>
                                FM Трансмиттеры
                            </div>
                            <div className={s.catalog__item__arrow}>
                                <img src={ArrowOrange}/>
                            </div>
                        </div>
                    </div>
                    <div className={s.catalog__item}>
                        <div className={s.catalog__item__img}>
                            <img src={CarAcoustics}/>
                        </div>
                        <div className={s.catalog__item__bottom}>
                            <div className={s.catalog__item__text}>
                                Автоакустика
                            </div>
                            <div className={s.catalog__item__arrow}>
                                <img src={Arrow}/>
                            </div>
                        </div>
                    </div>
                    <div className={s.catalog__item}>
                        <div className={s.catalog__item__img}>
                            <img src={CarRadios}/>
                        </div>
                        <div className={s.catalog__item__bottom}>
                            <div className={s.catalog__item__text}>
                                Автомагнитолы
                            </div>
                            <div className={s.catalog__item__arrow}>
                                <img src={Arrow}/>
                            </div>
                        </div>
                    </div>
                    <div className={s.catalog__item}>
                        <div className={s.catalog__item__img}>
                            <img src={CarTVs}/>
                        </div>
                        <div className={s.catalog__item__bottom}>
                            <div className={s.catalog__item__text}>
                                Автомобильные телевизоры
                            </div>
                            <div className={s.catalog__item__arrow}>
                                <img src={Arrow}/>
                            </div>
                        </div>
                    </div>
                    <div className={s.catalog__item}>
                        <div className={s.catalog__item__img}>
                            <img src={Antennas}/>
                        </div>
                        <div className={s.catalog__item__bottom}>
                            <div className={s.catalog__item__text}>
                                Антенны
                            </div>
                            <div className={s.catalog__item__arrow}>
                                <img src={Arrow}/>
                            </div>
                        </div>
                    </div>
                    <div className={s.catalog__item}>
                        <div className={s.catalog__item__img}>
                            <img src={TransitionalFramework}/>
                        </div>
                        <div className={s.catalog__item__bottom}>
                            <div className={s.catalog__item__text}>
                                Переходные рамки
                            </div>
                            <div className={s.catalog__item__arrow}>
                                <img src={Arrow}/>
                            </div>
                        </div>
                    </div>
                    <div className={s.catalog__item}>
                        <div className={s.catalog__item__img}>
                            <img src={Amplifiers}/>
                        </div>
                        <div className={s.catalog__item__bottom}>
                            <div className={s.catalog__item__text}>
                                Усилители
                            </div>
                            <div className={s.catalog__item__arrow}>
                                <img src={Arrow}/>
                            </div>
                        </div>
                    </div>
                    <div className={s.catalog__item}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog