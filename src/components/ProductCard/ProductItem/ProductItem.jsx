import React, {useContext, useState} from 'react'
import s from './ProductItem.module.css'
import Star from '../../../common/img/star.png'
import ProductPhoto from '../../../common/img/product_1.png'
import ProductPhoto2 from '../../../common/img/product_2.png'
import {ReactComponent as Comparison} from '../../../common/icons/Header__comparisonVector.svg'
import {ReactComponent as ArrowRight} from "../../../common/icons/arrow-right.svg";
import {ReactComponent as ArrowLeft} from "../../../common/icons/arrow-left.svg";
import {PopupsDelivery} from "../../Popups/PopupsDelivery";
import {ModalContext} from "../../../common/context/ModalContext";

const ProductItem = () => {
    const {modalVisibility, setModalVisibility, modalContent, setModalContent} = useContext(ModalContext)
    const [gallery, setGallery] = useState([ProductPhoto, ProductPhoto2, ProductPhoto])
    const [currentPhoto, setCurrentPhoto] = useState(0)

    return (
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
                    <span>12 Отзывов</span>
                </div>
            </div>
            <div className={s.product__block}>
                <div className={s.product__gallery}>
                    <img src={gallery[currentPhoto]} alt=""/>
                    <div className={s.product__gallery_photos}>
                        <button className={s.arrows__left}><ArrowLeft
                            onClick={() => setCurrentPhoto(currentPhoto === 0 ? gallery.length - 1 : currentPhoto - 1)}/>
                        </button>

                        {gallery.map((el, index) => (index <= currentPhoto - 1 || index > currentPhoto + 1) ? null :
                            <img onClick={() => setCurrentPhoto(index)}
                                 src={el}
                                 key={index}
                                 className={`${s.product__gallery_photo} ${index === currentPhoto ? s.gallery__active : ''}`}/>
                        )}

                        <button className={s.arrows__right}><ArrowRight
                            onClick={() => setCurrentPhoto(currentPhoto === gallery.length - 1 ? 0 : currentPhoto + 1)}/>
                        </button>
                    </div>
                </div>
                <div className={s.product__info}>
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
                    <div className={s.product__cost}>
                        <div>
                            <div className={`${s.product__delivery_popup_item}`}>
                                <a onClick={() => {
                                    setModalVisibility(true)
                                    setModalContent( () => PopupsDelivery )
                                }}  className={s.product__delivery_popup} href="#">О доставке</a>
                            </div>
                            <div><span>цена</span> <span>3578 $</span></div>
                        </div>
                        <div>
                            <button><Comparison width={'24px'} height={'24px'}/> Сравнить</button>
                            <button>Купить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
