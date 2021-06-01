import s from './Subcategory.module.css'
import SubcategoryFilter from "./SubcategoryFilter/SubcategoryFilter";
import SubcategoryTemplate from "./SubcategoryTemplate/SubcategoryTemplate";

const Subcategory = () => {
    return(
        <>
            <div className={s.container}>
                <h5>Главная / Категория / Подкатегория</h5>
                <div className={s.subcategory__wrapper}>
                    <SubcategoryFilter />
                    <SubcategoryTemplate/>
                </div>
            </div>
        </>
    )
}

export default Subcategory
