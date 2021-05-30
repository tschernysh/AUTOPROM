import s from './ProductFeedback.module.css'
import ProductFeedbackCard from "./ProductFeedbackCard/ProductFeedbackCard";
import {ReactComponent as ArrowRight} from "../../../common/icons/arrow-right.svg";
import {ReactComponent as ArrowLeft} from "../../../common/icons/arrow-left.svg";

const ProductFeedback = () => {
    return(
        <div className={s.product__feedback}>
            <div className={s.product__feedback_title}>
                <div className="">Отзывы</div>
                <div className="">Добавить отзыв</div>
            </div>
            <div className={s.product__feedback_wrapper}>
                <button className={s.left}><ArrowLeft/></button>
                <ProductFeedbackCard/>
                <ProductFeedbackCard/>
                <ProductFeedbackCard/>
                <ProductFeedbackCard/>
                <button className={s.right}><ArrowRight/></button>
            </div>
        </div>
    )
}

export default ProductFeedback
