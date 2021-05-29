import s from './Bestsellers.module.css'
import BestsellersItem from "./BestsellersItem/BestsellersItem";

const Bestsellers = () => {
    return (
        <div className={s.mainPage__bestsellers}>
            <h1 className={s.mainPage__bestsellers_h1}>Хиты продаж</h1>
            <div className={s.mainPage__bestsellers_wrap}>
                <BestsellersItem/>
                <BestsellersItem/>
                <BestsellersItem/>
                <BestsellersItem/>
            </div>
            <div className={s.mainPage__bestsellers_btn}>
                <a href="">Посмотреть всё</a>
            </div>
        </div>
    )
}

export default Bestsellers
