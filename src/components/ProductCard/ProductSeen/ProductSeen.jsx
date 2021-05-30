import s from './ProductSeen.module.css'
import BestsellersItem from "../../Main/Bestsellers/BestsellersItem/BestsellersItem";
import {ReactComponent as ArrowLeft} from "../../../common/icons/arrow-left.svg";
import {ReactComponent as ArrowRight} from "../../../common/icons/arrow-right.svg";

const ProductSeen = () => {
    return(
        <div className={s.product__seen}>
            <div className={s.product__seen_title}>
                Ранее вы смотрели
            </div>
            <div className={s.product__seen_wrapper}>
                <button className={s.left}><ArrowLeft/></button>
                <BestsellersItem />
                <BestsellersItem />
                <BestsellersItem />
                <BestsellersItem />
                <button className={s.right}><ArrowRight/></button>
            </div>
        </div>
    )
}

export default ProductSeen
