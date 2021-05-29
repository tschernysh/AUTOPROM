import s from './Services.module.css'
import ServicesItem from "./ServicesItem/ServicesItem";

const Services = () => {
    return(

        <div className={s.main__Page_OurServices}>
            <div className={s.main__page_wrapper}>
                <h1>Наши услуги</h1>
                <div className={s.main__Page_OurServices_wrap}>
                    <ServicesItem/>
                    <ServicesItem/>
                    <ServicesItem/>
                </div>
            </div>
        </div>
    )
}
export default Services
