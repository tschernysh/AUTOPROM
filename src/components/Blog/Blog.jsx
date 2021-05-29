import React from "react";
import b from './Blog.module.css'
import BlogFirst from '../../common/img/Blog__first.png'

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
                                Dolor sit amet, consectetur adipiscing elit. Varius eu in blandit augue
                            </div>
                            <div className={b.blog__item__right__text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper id semper ut diam
                                tincidunt in semper euismod pulvinar. Nunc vel massa risus facilisi in.
                            </div>
                            <div className={b.blog__item__right__more}>
                                Читать больше
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog