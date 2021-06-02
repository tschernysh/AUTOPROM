import React from "react";
import b from './Blog.module.css'
import BlogFirst from '../../common/img/Blog__first.png'
import BlogSecond from '../../common/img/Blog__second.png'
import BlogThird from '../../common/img/Blog__third.png'
import BlogFour from '../../common/img/Blog__four.png'
import {NavLink} from "react-router-dom";

const Blog = (props) => {
    return (
        <div className={b.container}>
            <div className={b.blog}>
                <div className={b.blog__menu}>
                    <a href='#'>Главная</a> / <a href='#'>Блог</a>
                </div>
                <div className={b.blog__title}>
                    Блог
                </div>
                <div className={b.blog__items}>
                    <div className={b.blog__item}>
                        <div className={b.blog__item__left}>
                            <div className={b.blog__item__left__img}>
                                <img src={BlogFirst}/>
                            </div>
                        </div>
                        <div className={b.blog__item__right}>
                            <div className={b.blog__item__right__data}>
                                <div className={b.blog__item__right__data__date}>
                                    27/03/21
                                </div>
                                <div className={b.blog__item__right__data__location}>
                                    Киев, Украина
                                </div>
                            </div>
                            <div className={b.blog__item__right__title}>
                                Топовая Tesla Model S Plaid+ подорожала на 10 000 долларов
                            </div>
                            <div className={b.blog__item__right__text}>
                                Не привлекая лишнего внимания, Tesla в очередной раз обновила онлайн-конфигуратор на
                                американском сайте,
                            </div>
                            <div className={b.blog__item__right__more}>
                                <NavLink to='/BlogItem'>Читать больше</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={b.blog__items}>
                    <div className={b.blog__item}>
                        <div className={b.blog__item__left}>
                            <div className={b.blog__item__left__img}>
                                <img src={BlogSecond}/>
                            </div>
                        </div>
                        <div className={b.blog__item__right}>
                            <div className={b.blog__item__right__data}>
                                <div className={b.blog__item__right__data__date}>
                                    27/03/21
                                </div>
                                <div className={b.blog__item__right__data__location}>
                                    Киев, Украина
                                </div>
                            </div>
                            <div className={b.blog__item__right__title}>
                                В Sandero будут использовать смартфон вместо «магнитолы»
                            </div>
                            <div className={b.blog__item__right__text}>
                                Система Media Control дебютирует на хэтчбеке Sandero третьего поколения. Для подключения
                                своего смартфона в качестве «головы» водитель сможет
                            </div>
                            <div className={b.blog__item__right__more}>
                                <a href='#'>Читать больше</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={b.blog__items}>
                    <div className={b.blog__item}>
                        <div className={b.blog__item__left}>
                            <div className={b.blog__item__left__img}>
                                <img src={BlogThird}/>
                            </div>
                        </div>
                        <div className={b.blog__item__right}>
                            <div className={b.blog__item__right__data}>
                                <div className={b.blog__item__right__data__date}>
                                    27/03/21
                                </div>
                                <div className={b.blog__item__right__data__location}>
                                    Киев, Украина
                                </div>
                            </div>
                            <div className={b.blog__item__right__title}>
                                Mercedes-Benz C-Class
                            </div>
                            <div className={b.blog__item__right__text}>
                                Mercedes-Benz C-класса уже около 40 лет представлен на рынке и является одним из самых
                                популярных автомобилей немецкого бренда, - и по
                            </div>
                            <div className={b.blog__item__right__more}>
                                <a href='#'>Читать больше</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={b.blog__items}>
                    <div className={b.blog__item}>
                        <div className={b.blog__item__left}>
                            <div className={b.blog__item__left__img}>
                                <img src={BlogFour}/>
                            </div>
                        </div>
                        <div className={b.blog__item__right}>
                            <div className={b.blog__item__right__data}>
                                <div className={b.blog__item__right__data__date}>
                                    27/03/21
                                </div>
                                <div className={b.blog__item__right__data__location}>
                                    Киев, Украина
                                </div>
                            </div>
                            <div className={b.blog__item__right__title}>
                                Dolor sit amet, consectetur adipiscing elit. Varius eu in blandit augue
                            </div>
                            <div className={b.blog__item__right__text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper id semper ut diam
                                tincidunt in semper euismod pulvinar. Nunc vel massa risus facilisi in.
                            </div>
                            <div className={b.blog__item__right__more}>
                                <a href='#'>Читать больше</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog