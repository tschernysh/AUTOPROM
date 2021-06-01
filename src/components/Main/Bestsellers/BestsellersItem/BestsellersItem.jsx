import s from './BestsellersItem.module.css'
import Star from '../../../../common/img/star.png'
import HollowStar from '../../../../common/img/hollowStar.png'
import ElBestsellers from '../../../../common/img/elementFromBestsellers_1.png'

const BestsellersItem = (props) => {
    return (
        <div className={s.mainPage__bestsellers_element}>
            {!props.subcategory && <div className={s.mainPage__bestsellers_element_top}>
                <div>Хит</div>
                <div>-10%</div>
            </div>}
            <div className={s.mainPage__bestsellers_element_content}>
                <div className={s.mainPage__bestsellers_element_content_title}>Фара передняя Hyundai</div>
                <div className={s.mainPage__bestsellers_element_content_comment}>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                    <img src={HollowStar} alt=""/>
                    <img src={HollowStar} alt=""/>
                    <a href="#">12 отзывов</a>
                </div>
                <img src={ElBestsellers} alt=""/>
                <div className={s.mainPage__bestsellers_element_content_price}>
                    <span>3 578 ₴</span><span>5 203
                                    ₴</span></div>
                <div className={s.mainPage__bestsellers_element_content_info}>2005-2010 правая H4,
                    мех. регул.<br/>
                    221-1141R-LD-E
                </div>
                <div className={s.mainPage__bestsellers_element_content_btns}>
                    <a className={s.mainPage__bestsellers_element_content_btn} href="#">Купить</a>
                    <a href="#">
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.25 29.1667V14.5833" stroke="#272522" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.5 29.1667V5.83334" stroke="#272522" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.75 29.1667V20.4167" stroke="#272522" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BestsellersItem
