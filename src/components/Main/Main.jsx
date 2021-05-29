import s from './Main.module.css'
import SearchBanner from "./SearchBanner/SearchBanner";
import Catalog from "./Catalog/Catalog";
import Bestsellers from "./Bestsellers/Bestsellers";
import Services from "./Services/Services";

const Main = () => {
    return (
        <>
            <div className={s.container}>
                <SearchBanner/>
                <Catalog/>
                <Bestsellers/>
            </div>
            <Services/>

        </>
    )
}

export default Main
