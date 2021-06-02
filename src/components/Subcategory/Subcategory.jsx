import s from './Subcategory.module.css'
import SubcategoryFilter from "./SubcategoryFilter/SubcategoryFilter";
import SubcategoryTemplate from "./SubcategoryTemplate/SubcategoryTemplate";
import ProductSeen from "../ProductCard/ProductSeen/ProductSeen";

const Subcategory = () => {
    return(
        <>
            <div className={s.container}>
                <h5 className={s.subcategory__path}>Главная / Категория / Подкатегория</h5>
                <div className={s.subcategory__wrapper}>
                    <SubcategoryFilter />
                    <SubcategoryTemplate/>
                </div>
                <ProductSeen/>
            </div>
        </>
    )
}

export default Subcategory
