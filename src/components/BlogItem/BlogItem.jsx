import React, {useState} from "react";
import s from './BlogItem.module.css'
import BlogFirstContent from '../../common/img/BlogFirst__content.png'
import {NavLink} from "react-router-dom";
import BlogSecond from '../../common/img/Blog__second.png'
import BlogThird from '../../common/img/Blog__third.png'
import BlogFour from '../../common/img/Blog__four.png'

const BlogItem = (props) => {


    return (
        <div className={s.container}>
            <div className={s.blog__first}>
                <div className={s.blog__first__menu}>
                    <a href='#'>Главная</a> / <a href='#'>Блог</a>
                </div>
                <div className={s.blog__first__content}>
                    <div className={s.blog__first__content__title}>
                        Neque sit sit tortor amet massa posuere eu, eleifend fermentum. Sollicitudin tellus consequat
                        platea acam.
                    </div>
                    <div className={s.blog__first__content__text}>
                        Maecenas vitae aliquam aliquam proin velit viverra vitae arcu. Lacinia pulvinar maecenas
                        volutpat.Maecenas vitae aliquam aliquam proin velit viverra vitae arcu. Lacinia pulvinar
                        maecenas volutpat.Maecenas vitae aliquam aliquam proin velit viverra vitae arcu. Lacinia
                        pulvinar maecenas volutpat.
                    </div>
                    <div className={s.blog__first__content__image}>
                        <img src={BlogFirstContent}/>
                    </div>
                    <div className={s.blog__first__items}>
                        <div className={s.blog__first__item}>
                            Magna lorem amet vitae lacus. Donec euismod mi nam fringilla nam potenti. Imperdiet in enim,
                            morbi tempus lacus, sit pellentesque consectetur lobortis. Scelerisque arcu mus diam odio.
                            Facilisis tincidunt habitant sed potenti quam. Orci purus sagittis feugiat at enim nam. Amet
                            lectus molestie nibh neque. Scelerisque et in sed ullamcorper scelerisque nunc nulla. Non,
                            egestas quis turpis velit malesuada curabitur bibendum morbi dui. Tortor accumsan iaculis
                            posuere pellentesque pulvinar.
                        </div>
                        <div className={s.blog__first__item}>
                            Magna lorem amet vitae lacus. Donec euismod mi nam fringilla nam potenti. Imperdiet in enim,
                            morbi tempus lacus, sit pellentesque consectetur lobortis. Scelerisque arcu mus diam odio.
                            Facilisis tincidunt habitant sed potenti quam. Orci purus sagittis feugiat at enim nam. Amet
                            lectus molestie nibh neque. Scelerisque et in sed ullamcorper scelerisque nunc nulla. Non,
                            egestas quis turpis velit malesuada curabitur bibendum morbi dui. Tortor accumsan iaculis
                            posuere pellentesque pulvinar.
                        </div>
                    </div>
                </div>

                <NewsBlock title={'Другие статьи'}/>
            </div>
        </div>
    )
}

export const NewsBlock = (props) => {

    const [page, setPage] = useState(1)
    const [startX, setStartX] = useState(null)
    const [endX, setEndX] = useState(null)

    const defineDirection = (start, end) => {
        if (start > end) {
            setPage(page + 1 > 3 ? 1 : page + 1)
        } else if (start < end) {
            setPage(page - 1 !== 0 ? page - 1 : 3)
        }
    }

    return (
        <div className={props.title === 'Новости' && s.blog__block}>
            <div className={s.blog__more__title}>
                <h5>{props.title}</h5>
                {window.innerHeight <= 850 && <div className={s.mainPage__bestsellers_dots}>
                    <span className={page === 1 ? s.active__dot : ''}></span>
                    <span className={page === 2 ? s.active__dot : ''}></span>
                    <span className={page === 3 ? s.active__dot : ''}></span>
                </div>}
            </div>
            <div onTouchEnd={(e) => {
                setEndX(e.changedTouches[0].pageX);
                defineDirection(startX, endX, e)
            }} onTouchStart={(e) => setStartX(e.changedTouches[0].pageX)} className={s.blog__first__slider}>
                {window.innerHeight <= 850
                    ? <NewsItem/>
                    : <>
                        <NewsItem/>
                        <NewsItem/>
                        <NewsItem/>
                    </>
                }
            </div>
        </div>
    )
}

const NewsItem = () => {
    return (
        <div className={s.blog__first__items}>
            <div className={s.blog__first__item}>
                <div className={s.blog__first__item__left}>
                    <div className={s.blog__first__item__left__img}>
                        <img src={BlogSecond}/>
                    </div>
                </div>
                <div className={s.blog__first__item__right}>
                    <div className={s.blog__first__item__right__data}>
                        <div className={s.blog__first__item__right__data__date}>
                            27/03/21
                        </div>
                        <div className={s.blog__first__item__right__data__location}>
                            Киев, Украина
                        </div>
                    </div>
                    <div className={s.blog__first__item__right__title}>
                        Dolor sit amet, consectetur adipiscing elit. Varius eu in blandit augue
                    </div>
                    <div className={s.blog__first__item__right__text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper id semper ut diam
                        tincidunt in semper euismod pulvinar. Nunc vel massa risus facilisi in.
                    </div>
                    <div className={s.blog__first__item__right__more}>
                        <NavLink to='/BlogItem'>Читать больше</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogItem
