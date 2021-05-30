import s from './ProductCard.module.css'
import ProductItem from "./ProductItem/ProductItem";
import ProductAbout from "./ProductAbout/ProductAbout";
import ProductFeedback from "./ProductFeedback/ProductFeedback";
import ProductBuy from "./ProductBuy/ProductBuy";
import ProductSeen from "./ProductSeen/ProductSeen";

const ProductCard = () => {
    return(
        <div className={s.product__card_block}>
            <div className={s.container}>
                <div className={s.product__card_path}>Главная / Автосвет / Фары</div>
                <ProductItem/>
                <ProductAbout/>
                <ProductFeedback/>
                <ProductBuy/>
                <ProductSeen/>
            </div>
        </div>
    )
}

export default ProductCard
