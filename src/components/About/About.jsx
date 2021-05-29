import React from "react";
import a from './About.module.css';
import AboutLine from '../../common/img/About__Line.png'
import AboutMainImg1 from '../../common/img/about__main__content__img1.png'
import AboutMainImg2 from '../../common/img/about__main__content__img2.png'
import s from "../Header/Header.module.css";

const About = (props) => {
    return (
        <div className={a.container}>
            <div className={a.about__background}>
                <div className={a.about__top__text}>
                    <div className={a.about__title}>
                        БОЛЬШЕ 15 ЛЕТ НА РЫНКЕ!
                    </div>
                    <div className={a.about__price}>
                        <div className={a.about__price__text}>
                            Низкие цены
                        </div>
                        <div className={a.about__price__line}>
                            <img src={AboutLine}/>
                        </div>
                        <div className={a.about__price__text2}>
                            Быстрая доставка
                        </div>
                    </div>
                    <div className={a.about__gift}>
                        ДАРИМ -10% НА ПЕРВЫЙ ЗАКАЗ
                    </div>
                </div>
            </div>
            <div className={a.about__main}>
                <div className={a.about__main__title}>
                    Интернет-магазин "AutoProm.in.ua" – лучшие товары по низким ценам!
                </div>
                <div className={a.about__main__content}>
                    <div className={a.about__main__content__column1}>
                        <div className={a.about__main__content__title}>
                            О нас
                        </div>
                        <div className={a.about__main__content__text}>
                            Мы работаем по всей территории Украины,но уклон идёт на Западную и центральную её части.
                            <br></br><br></br>
                            Основные конкурентные преимущества нашего интернет-магазина в том, что мы работаем с прямыми
                            и
                            проверенными поставщиками которые находяться на рынке уже не 1 год!
                            <br></br><br></br>
                            Мы рады предложить вам недорогие, но качественные товары с подробными описаниями,
                            характеристиками и фотографиями. У нас Вы можете купить замечательные товары: инструменты,
                            электронику,наборы,домкраты,фары, аккумуляторы и многое другое в вашем регионе по ценам
                            производителей и без наценки.

                        </div>
                        <div className={a.about__main__content__img}>
                            <img src={AboutMainImg1}/>
                        </div>
                    </div>
                    <div className={a.about__main__content__column2}>
                        <div className={a.about__main__content__img}>
                            <img src={AboutMainImg2}/>
                        </div>
                        <div className={a.about__main__content__text}>
                            Продажа большого ассортимента разнообразных товаров – основная специализация нашего
                            интернет-магазина. Мы доставим ваш заказ в любой уголок Украины, осуществим подробную
                            консультацию по товарам и поможем с выбором.
                            <br></br><br></br>
                            Магазин "AutoProm" предлагает Вам купить качественную и доступную технику, электронику и
                            многое
                            другое с доставкой! Все виды современных товаров от эконом класса до более дорогих
                            представлены
                            в нашем каталоге.
                        </div>
                    </div>
                </div>
            </div>
            <div className={a.about__advantages}>
                <div className={a.about__advantages__title}>
                    Наши главные преимущества:
                </div>
                <nav className={a.about__advantages__nav}>
                    <ul>
                        <li>Низкие цены от производителей</li>
                        <li>Низкие цены от производителей</li>
                        <li>Низкие цены от производителей</li>
                        <li>Низкие цены от производителей</li>
                        <ul>
                            <li>Низкие цены от производителей</li>
                            <li>Низкие цены от производителей</li>
                            <li>Низкие цены от производителей</li>
                        </ul>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default About