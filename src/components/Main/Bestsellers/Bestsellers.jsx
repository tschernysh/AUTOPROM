import s from './Bestsellers.module.css'
import BestsellersItem from "./BestsellersItem/BestsellersItem";
import {useState} from "react";
import {ReactComponent as ArrowLeft} from "../../../common/icons/arrow-left.svg";
import {ReactComponent as ArrowRight} from "../../../common/icons/arrow-right.svg";

const Bestsellers = () => {
    const [page, setPage] = useState(1)
    const [full, setFull] = useState(false)

    return (
        <div className={s.mainPage__bestsellers}>
            <div className={s.mainPage__bestsellers_title}>
                <h1 className={s.mainPage__bestsellers_h1}>Хиты продаж</h1>
                <div className={s.mainPage__bestsellers_dots}>
                    <span className={page === 1 ? s.active__dot : ''}></span>
                    <span className={page === 2 ? s.active__dot : ''}></span>
                    <span className={page === 3 ? s.active__dot : ''}></span>
                </div>
            </div>
            <div className={s.mainPage__bestsellers_wrap}>
                <button onClick={() => {setPage(page-1 !== 0 ? page-1 : 3)}} className={s.left}><ArrowLeft/></button>
                <BestsellersItem/>
                <BestsellersItem/>
                <BestsellersItem/>
                <BestsellersItem/>
                {full && <>
                <BestsellersItem/>
                <BestsellersItem/>
                <BestsellersItem/>
                <BestsellersItem/>
                </>
                }
                <button onClick={() => {setPage(page+1 > 3 ? 1 : page+1)}} className={s.right}><ArrowRight/></button>
            </div>
            <div className={s.mainPage__bestsellers_btn}>
                <a onClick={() => setFull(!full)}>{full ? "Скрыть всё" : "Посмотреть всё"}</a>
            </div>
        </div>
    )
}

export default Bestsellers
