import s from "./ClientsItem.module.css";
import Star from '../../../../common/img/star.png'
import HollowStar from '../../../../common/img/hollowStar.png'
import OurClientsRecommend from '../../../../common/img/OurClientsrecommendElement_1.png'

const ClientsItem = () => {
    return(
        <div className={s.mainPage__OurClientsrecommend_element}>
            <div className={s.mainPage__OurClientsrecommend_element_top}>
                <div>Топ отзывов</div>
            </div>
            <div className={s.mainPage__OurClientsrecommend_element_content}>
                <div className={s.mainPage__OurClientsrecommend_element_content_title}>OBDII сканер KONNWEI
                </div>
                <div className={s.mainPage__OurClientsrecommend_element_content_comment}>
                    <img src={Star} alt=""/>
                    <img src={HollowStar} alt=""/>
                    <img src={HollowStar} alt=""/>
                    <img src={HollowStar} alt=""/>
                    <img src={HollowStar} alt=""/>
                    <a href="#">45 отзывов</a>
                </div>
                <img src={OurClientsRecommend} alt=""/>
                <div className={s.mainPage__OurClientsrecommend_element_content_price}><span>478 ₴</span>
                </div>
                <div className={s.mainPage__OurClientsrecommend_element_content_info}>KW903 ELM327
                    Bluetooth 3.0 WIFI
                    <br/> для Windows Android IOS</div>
                <div className={s.mainPage__OurClientsrecommend_element_content_btns}>
                    <a className={s.mainPage__OurClientsrecommend_element_content_btn} href="#">Купить</a>
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

export default ClientsItem
