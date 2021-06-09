import s from './Main.module.css'
import SearchBanner from "./SearchBanner/SearchBanner";
import Catalog from "./Catalog/Catalog";
import Bestsellers from "./Bestsellers/Bestsellers";
import Services from "./Services/Services";
import Clients from "./Clients/Clients";
import {NewsBlock} from "../BlogItem/BlogItem";

const Main = () => {
    return (
        <>
            <div className={s.container}>
                <SearchBanner/>
                <Catalog/>
                <Bestsellers/>
            </div>
            <Services/>
            <div className={s.container}>
                <Clients />
                <NewsBlock title={'Новости'} />
            </div>
        </>
    )
}

export default Main
