import s from './ProductCard.module.css'
import ProductItem from "./ProductItem/ProductItem";

const ProductCard = () => {
    return(
        <div className={s.product__card_block}>
            <div className={s.container}>
                <div className={s.product__card_path}>Главная / Автосвет / Фары</div>
                <ProductItem/>
            </div>
        </div>
    )
}

export default ProductCard
