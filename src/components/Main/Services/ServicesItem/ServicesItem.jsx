import s from './ServicesItem.module.css'
import ServicesEl from '../../../../common/img/ourServicesElement_1.png'

const ServicesItem = () => {
    return(
        <div style={{backgroundImage: `url(${ServicesEl})`}} className={s.main__Page_OurServices_Element}><a href="#">
            <div className={s.main__Page_OurServices_Element_text}>Srs замена подушек <br/> безопасности</div>
        </a></div>
    )
}
export default ServicesItem
