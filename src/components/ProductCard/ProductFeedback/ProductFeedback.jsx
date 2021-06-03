import s from './ProductFeedback.module.css'
import ProductFeedbackCard from "./ProductFeedbackCard/ProductFeedbackCard";
import {ReactComponent as ArrowRight} from "../../../common/icons/arrow-right.svg";
import {ReactComponent as ArrowLeft} from "../../../common/icons/arrow-left.svg";
import {ModalContext} from "../../../common/context/ModalContext";
import {CreateReviewPopup} from "../../Popups/CreateReviewPopup";
import {useContext} from "react";

const ProductFeedback = () => {
    const {modalVisibility, setModalVisibility, modalContent, setModalContent} = useContext(ModalContext)

    return(
        <div className={s.product__feedback}>
            <div className={s.product__feedback_title}>
                <div className="">Отзывы</div>
                <div
                    onClick={() => {
                        setModalVisibility(true)
                        setModalContent(() => CreateReviewPopup)
                    }}
                    className="">Добавить отзыв</div>
            </div>
            <div className={s.product__feedback_wrapper}>
                <button className={s.left}><ArrowLeft/></button>
                <ProductFeedbackCard />
                <ProductFeedbackCard/>
                <ProductFeedbackCard/>
                <ProductFeedbackCard/>
                <button className={s.right}><ArrowRight/></button>
            </div>
        </div>
    )
}

export default ProductFeedback
