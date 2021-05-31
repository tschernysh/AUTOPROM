import React from "react";
import b from './Serve.module.css'
import ServeContent1 from '../../../common/img/serve__content1.png'
import ServeContent2 from '../../../common/img/serve__content2.png'
import ServeContent3 from '../../../common/img/serve__content3.png'
import s from "../../Main/SearchBanner/SearchBanner.module.css";

const Serve = (props) => {
    return (
        <>
            <div className={b.serve__title}>
                Наши услуги
            </div>
            <div className={b.serve__content}>
                <div className={b.serve__content__item}>
                    <div className={b.serve__content__item__left}>
                        <div className={b.serve__content__item__left__img}>
                            <img src={ServeContent1}/>
                        </div>
                    </div>
                    <div className={b.serve__content__item__right}>
                        <div className={b.serve__content__item__right__title}>
                            Srs замена подушек безопасности
                        </div>
                        <div className={b.serve__content__item__right__text}>
                            Наша компания уже более 10 лет занимается профессиональным восстановлением системы SRS
                            автомобилей практически всех марок и моделей. При замене подушек безопасности мы соблюдаем
                            заводские технологии производителя автомобиля и применяем оригинальные материалы –
                            пиропатроны, заглушки подушек безопасности, механизмы ремней безопасности.
                        </div>
                        <div className={b.serve__content__item__right__other}>
                            <div className={b.serve__content__item__right__other__price}>
                                Цена:
                                <div className={b.serve__content__item__right__other__cost}>
                                    от 1 000 грн
                                </div>
                            </div>
                            <input className={b.serve__content__item__right__other__cost__button} type="submit"
                                   value="Заказать услугу"/>
                        </div>
                    </div>
                </div>
                <div className={b.serve__content__item}>
                    <div className={b.serve__content__item__left}>
                        <div className={b.serve__content__item__left__img}>
                            <img src={ServeContent2}/>
                        </div>
                    </div>
                    <div className={b.serve__content__item__right}>
                        <div className={b.serve__content__item__right__title}>
                            Перетяжка потолка / панели торпедо
                        </div>
                        <div className={b.serve__content__item__right__text}>
                            Выполняем перетяжку и обшивку потолков на все виды авто. Для перетяжки используем различные
                            материалы: натуральную кожу, кожзам, текстиль, алькантару.
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                        <div className={b.serve__content__item__right__other}>
                            <div className={b.serve__content__item__right__other__price}>
                                Цена:
                                <div className={b.serve__content__item__right__other__cost}>
                                    от 1 400 грн
                                </div>
                            </div>
                            <input className={b.serve__content__item__right__other__cost__button} type="submit"
                                   value="Заказать услугу"/>
                        </div>
                    </div>
                </div>
                <div className={b.serve__content__item}>
                    <div className={b.serve__content__item__left}>
                        <div className={b.serve__content__item__left__img}>
                            <img src={ServeContent3}/>
                        </div>
                    </div>
                    <div className={b.serve__content__item__right}>
                        <div className={b.serve__content__item__right__title}>
                            Srs Восстановление подушек безопасности
                        </div>
                        <div className={b.serve__content__item__right__text}>
                            Наша компания уже более 10 лет занимается профессиональным восстановлением системы SRS
                            автомобилей практически всех марок и моделей. При восстановлении подушек безопасности мы
                            соблюдаем заводские технологии производителя автомобиля и применяем оригинальные материалы –
                            пиропатроны, заглушки подушек безопасности, механизмы ремней безопасности.
                        </div>
                        <div className={b.serve__content__item__right__other}>
                            <div className={b.serve__content__item__right__other__price}>
                                Цена:
                                <div className={b.serve__content__item__right__other__cost}>
                                    от 1 200 грн
                                </div>
                            </div>
                            <input className={b.serve__content__item__right__other__cost__button} type="submit"
                                   value="Заказать услугу"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Serve