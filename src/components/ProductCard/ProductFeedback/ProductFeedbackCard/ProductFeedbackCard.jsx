import s from './ProductFeedbackCard.module.css'
import ProfilePhoto from '../../../../common/img/Alex.png'
import Star from '../../../../common/img/star.png'

const ProductFeedbackCard = () => {
    return(
        <div className={s.product__feedback_card}>
            <div className={s.feedback__profile}>
                <div className={s.profile__photo}>
                    <img src={ProfilePhoto} alt=""/>
                </div>
                <div className={s.profile__info}>
                    <div>Алексей</div>
                    <div>Киев</div>
                </div>
            </div>
            <div className={s.feedback__stars}>
                <img src={Star} alt=""/>
                <img src={Star} alt=""/>
                <img src={Star} alt=""/>
                <img src={Star} alt=""/>
                <img src={Star} alt=""/>
            </div>
            <div className={s.feedback__content}>
                Постоянно покупаю в данном сервисе и меня все устраивает. Быстрая доставка и всегда вовремя. Несомненно "AutoProm" лидер в своей сфере ...
            </div>
        </div>
    )
}

export default ProductFeedbackCard
