import s from './Catalog.module.css'
import CatalogItem from "./CatalogItem/CatalogItem";

const Catalog = (props) => {
    return(
        <>
            <div className={s.mainPage__catalog}>
                <h1>Каталог</h1>
                <div className={s.mainPage__contentList}>
                    <CatalogItem/>
                    <CatalogItem/>
                    <CatalogItem/>
                    <CatalogItem/>
                    <CatalogItem/>
                    <CatalogItem/>
                </div>
            </div>
        </>
    )
}

export default Catalog
