import s from './ProductBuy.module.css'
import BestsellersItem from "../../Main/Bestsellers/BestsellersItem/BestsellersItem";
import {ReactComponent as ArrowLeft} from "../../../common/icons/arrow-left.svg";
import {ReactComponent as ArrowRight} from "../../../common/icons/arrow-right.svg";

const ProductBuy = () => {
    return(
        <div className={s.product__buy}>
            <div className={s.product__buy_title}>
                С этим товаром покупают
            </div>
            <div className={s.product__buy_wrapper}>
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

export default ProductBuy
