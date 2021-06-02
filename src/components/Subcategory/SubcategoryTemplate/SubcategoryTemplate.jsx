import s from './SubcategoryTemplate.module.css'
import BestsellersItem from "../../Main/Bestsellers/BestsellersItem/BestsellersItem";
import {ReactComponent as ArrowLeft} from "../../../common/icons/arrow-left.svg";
import {ReactComponent as ArrowRight} from "../../../common/icons/arrow-right.svg";
import {useState} from "react";
import ProductSeen from "../../ProductCard/ProductSeen/ProductSeen";

const SubcategoryTemplate = () => {
    const [page, setPage] = useState(1)
    console.log(page)
    return(
        <div className={s.template}>
            <div className={s.template__title}>
                <div>
                    <p className={s.template__title_title}>Подкатегория</p>
                    <p className={s.template__title_count}>
                        <span>Всего:</span>
                        <span>270</span>
                    </p>
                </div>
                <div className={s.template__select}>
                    <select placeholder={"Сортировка"} name="" id="">
                        <option value="">По возростанию цены</option>
                        <option value="">По убыванию цены</option>
                        <option value="">По дате добавления</option>
                        <option value="">По отзывам</option>
                        <option value="">По оценкам</option>
                    </select>
                </div>
            </div>
            <div className={s.template__items}>
                <BestsellersItem subcategory />
                <BestsellersItem subcategory />
                <BestsellersItem subcategory />
                <BestsellersItem subcategory />
                <BestsellersItem subcategory />
                <BestsellersItem subcategory />
            </div>
            <div className={s.template__pagination}>
                <ArrowLeft className={page-1 === 0 ? s.arrow__disable : ''} onClick={() => page-1 !== 0 ? setPage(page-1) : null}/>
                <span className={page === (page >= 3 ? page-2 : page) ? s.active__page : null} onClick={() => setPage(page >= 3 ? page-2 : page)}>{page >= 3 ? page-2 : page}</span>
                <span className={page === (page >= 3 ? page-1 : page+1) ? s.active__page : null} onClick={() => setPage(page >= 3 ? page-1 : page +1)}>{page >= 3 ? page-1 : page +1}</span>
                <span className={page === (page >= 3 ? page : page+2) ? s.active__page : null} onClick={() => setPage(page >= 3 ? page : page +2)}>{page >= 3 ? page : page +2}</span>
                <span className={page === (page >= 3 ? page+1 : page+3) ? s.active__page : null} onClick={() => setPage(page >= 3 ? page+1 : page +3)}>{page >= 3 ? page+1 : page +3}</span>
                <span className={page === (page >= 3 ? page+2 : page+4) ? s.active__page : null} onClick={() => setPage(page >= 3 ? page+2 : page +4)}>{page >= 3 ? page+2 : page +4}</span>
                <ArrowRight className={page+1 === 0 ? s.arrow__disable : ''} onClick={() => setPage(page+1)}/>
            </div>
        </div>
    )
}

export default SubcategoryTemplate
