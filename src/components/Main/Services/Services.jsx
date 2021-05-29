import s from './Services.module.css'
import ServicesItem from "./ServicesItem/ServicesItem";

const Services = () => {
    return(

        <div className={s.main__Page_OurServices}>
                <h1>Наши услуги</h1>
                <div className={s.main__Page_OurServices_wrap}>
                    <ServicesItem/>
                    <ServicesItem/>
                    <ServicesItem/>
                </div>
        </div>
    )
}
export default Services
