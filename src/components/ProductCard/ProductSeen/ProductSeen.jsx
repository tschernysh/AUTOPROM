import s from './ProductSeen.module.css'
import BestsellersItem from "../../Main/Bestsellers/BestsellersItem/BestsellersItem";
import {ReactComponent as ArrowLeft} from "../../../common/icons/arrow-left.svg";
import {ReactComponent as ArrowRight} from "../../../common/icons/arrow-right.svg";
import {useState} from "react";
import ClientsItem from "../../Main/Clients/ClientsItem/ClientsItem";

const ProductSeen = () => {

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


    return(
        <div className={s.product__seen}>
            <div className={s.product__seen_title}>
                <h5>Ранее вы смотрели</h5>
                <div className={s.mainPage__bestsellers_dots}>
                    <span className={page === 1 ? s.active__dot : ''}></span>
                    <span className={page === 2 ? s.active__dot : ''}></span>
                    <span className={page === 3 ? s.active__dot : ''}></span>
                </div>
            </div>
            <div onTouchEnd={(e) => {setEndX(e.changedTouches[0].pageX); defineDirection(startX ,endX, e)}} onTouchStart={(e) => setStartX(e.changedTouches[0].pageX)}   className={s.product__seen_wrapper}>
                <button  onClick={() => {setPage(page-1 !== 0 ? page-1 : 3)}}  className={s.left}><ArrowLeft/></button>
                {window.innerHeight <= 850 ?   <BestsellersItem/>
                    : <>
                        <BestsellersItem/>
                        <BestsellersItem/>
                        <BestsellersItem/>
                        <BestsellersItem/>
                    </>    }
                <button onClick={() => {setPage(page+1 > 3 ? 1 : page+1)}}  className={s.right}><ArrowRight/></button>
            </div>
        </div>
    )
}

export default ProductSeen
