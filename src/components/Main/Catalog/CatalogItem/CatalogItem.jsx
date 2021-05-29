import s from "./CatalogItem.module.css";
import Spares from '../../../../common/img/spares.png'

const CatalogItem = () => {
    return(
        <div style={{background: `url(${Spares})`}} className={s.mainPage__contentWrap}>
            <div className={s.mainPage__contentElement}>
                <div className={s.mainPage__btnList}>
                    <a href="#">Автомобильные инструменты</a>
                </div>
                <div className={s.mainPage__submitList}>
                    <a href="#">Автомобильные компрессоры</a>
                    <a href="#">Домкраты и опоры</a>
                    <a href="#">Слесарный инструмент</a>
                    <a href="#">Диагностическое оборудование</a>
                </div>
            </div>
        </div>
    )
}
export default CatalogItem
