import s from "./Popups.module.css";
import Exit from "../../common/img/Exit.png";
import HollowStar from "../../common/img/hollowStar.png";

export const CreateReviewPopup = (props) => {
    return(
        <div className={s.wrapper}>
            <div className={s.review}>
                <div className={s.review__exit}>
                    <img onClick={() => props.setModalVisibility(false)} src={Exit}/>
                </div>
                <div className={s.review__title}>
                    Оставьте свой отзыв
                </div>
                <div className={s.review__name}>
                    Имя
                </div>
                <input className={s.review__name__input} value='Иван'/>
                <div className={s.review__city}>
                    Город
                </div>
                <input className={s.review__city__input} value='Киев'/>
                <div className={s.review__review}>
                    Отзыв
                </div>
                <textarea className={s.review__name__review} value='Текст'/>
                <div className={s.review__rating}>
                    Оценка
                </div>
                <div className={s.review__rating__star}>
                    <img src={HollowStar} alt=""/>
                    <img src={HollowStar} alt=""/>
                    <img src={HollowStar} alt=""/>
                    <img src={HollowStar} alt=""/>
                    <img src={HollowStar} alt=""/>
                </div>
                <input className={s.review__button} type="submit" value="Добавить отзыв"/>
            </div>
        </div>
    )
}
