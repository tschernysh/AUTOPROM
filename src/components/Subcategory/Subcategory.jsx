import s from './Subcategory.module.css'
import SubcategoryFilter from "./SubcategoryFilter/SubcategoryFilter";

const Subcategory = () => {
    return(
        <>
            <div className={s.container}>
                <h5>Главная / Категория / Подкатегория</h5>
                <div className="subcategory__wrapper">
                    <SubcategoryFilter />
                </div>
            </div>
        </>
    )
}

export default Subcategory
