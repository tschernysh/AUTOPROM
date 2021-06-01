import s from './SubcategoryFilter.module.css'

const SubcategoryFilter = () => {
    return(
        <div className={s.subcategory__filter}>
            <div className={s.subcategory__price}>
                <p>Цена, грн.</p>
                <p>0 - 10000</p>
                <input multiple={true} type="range"/>
            </div>
            <div className={s.subcategory__available}>
                <p>Наличие</p>
                <div>
                    <input className={s.popups__registration__checkbox} type="checkbox" id="checkbox-all"/>
                    <label className={s.popups__registration__confirm} htmlFor="checkbox-all"></label>
                    <span>Все (320)</span>
                </div>
                <div>
                    <input className={s.popups__registration__checkbox} type="checkbox" id="checkbox-available"/>
                    <label className={s.popups__registration__confirm} htmlFor="checkbox-available"></label>
                    <span>В наличии (270)</span>
                </div>
            </div>
        </div>
    )
}

export default SubcategoryFilter
