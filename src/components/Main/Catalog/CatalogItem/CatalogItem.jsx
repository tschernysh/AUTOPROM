import s from "./CatalogItem.module.css";
import Spares from '../../../../common/img/spares.png'
import {useHistory} from "react-router-dom";

const CatalogItem = () => {
    const history = useHistory()
    return(
        <div  style={{background: `url(${Spares})`}} className={s.mainPage__contentWrap}>
            <div className={s.mainPage__contentElement}>
                <div className={s.mainPage__btnList}>
                    <a  >Автомобильные инструменты</a>
                </div>
                <div className={s.mainPage__submitList}>
                    <a onClick={() => history.push('/catalog')} href="#">Автомобильные компрессоры</a>
                    <a onClick={() => history.push('/catalog')} href="#">Домкраты и опоры</a>
                    <a onClick={() => history.push('/catalog')} href="#">Слесарный инструмент</a>
                    <a onClick={() => history.push('/catalog')} href="#">Диагностическое оборудование</a>
                </div>
            </div>
        </div>
    )
}
export default CatalogItem
