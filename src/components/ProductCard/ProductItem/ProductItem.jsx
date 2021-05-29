import s from './ProductItem.module.css'
import Star from '../../../common/img/star.png'
import ProductPhoto from '../../../common/img/product_1.png'
import ProductPhoto2 from '../../../common/img/product_2.png'

const ProductItem = () => {
    return(
        <div className={s.product}>
            <div className={s.product__title}>
                <div className={s.product__content}>
                    Фара передняя Hyundai Getz 2005-2010 правая H4, мех. регул. 221-1141R-LD-E
                </div>
                <div className={s.product__feedback}>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                    12 Отзывов
                </div>
            </div>
            <div className={s.product__block}>
                <div className={s.product__gallery}>
                    <img src={ProductPhoto} alt=""/>
                </div>
                <div className={s.product__chars}>
                    <div className={s.product__chars_title}>Характеристики</div>
                    <div className={s.product__chars_list}>
                        <p>
                            <div>Бренд</div>
                            <div>Depo</div>
                        </p>
                        <p>
                            <div>Тип</div>
                            <div>Автофара</div>
                        </p>
                        <p>
                            <div>Состояние</div>
                            <div>Новое</div>
                        </p>
                        <p>
                            <div>Марка</div>
                            <div>Hyundai</div>
                        </p>
                        <p>
                            <div>Тип запчасти</div>
                            <div>Аналог</div>
                        </p>
                        <p>
                            <div>Тип техники</div>
                            <div>Легковой автомобиль</div>
                        </p>
                        <p>
                            <div>Положение</div>
                            <div>Правая</div>
                        </p>
                        <p>
                            <div>Модель</div>
                            <div>Getz</div>
                        </p>
                    </div>
                </div>
                <div className={s.product__delivery}>
                    <div className={s.product__delivery_title}>Доставка</div>
                    <div className={s.product__delivery_type}>
                       <h5>Самовывоз</h5>
                        <p>9:00 - 18:00</p>
                        <p>ул. Никольско-Слободская, 6Г
                            (возле ст.м. Левобережная)</p>
                    </div>
                    <div className={s.product__delivery_post}>
                        <h5>Новая почта</h5>
                        <p>срок: 1-3 дня</p>
                        <p>стоимость - по тарифам НП</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
