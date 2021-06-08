import s from "./Popups.module.css";
import Exit from "../../common/img/Exit.png";
import Product from "../../common/img/product_1.png";
import React, {useState} from "react";
import {ReactComponent as Comparise} from '../../common/icons/Header__comparisonVector.svg'
import {ReactComponent as Cart} from '../../common/icons/Cart.svg'
import {ReactComponent as MenuArrow} from '../../common/icons/Header__arrowVector.svg'


export const ComparisePopup = (props) => {
    const [criterium1, setCriterium1] = useState(false)
    const [criterium2, setCriterium2] = useState(false)
    const [criterium3, setCriterium3] = useState(false)
    const [price, setPrice] = useState(false)

    return(
        <div className={`${s.wrapper} ${s.over}`}>
            <div className={s.comparise__popup}>
                <div className={s.comparise__popup_title}>
                    <div className={s.comparise__popup_name}>
                        <h5>Сравнение</h5>
                        <Comparise />
                    </div>
                    <img onClick={() => props.setModalVisibility(false)} src={Exit}/>
                </div>
                <p className={s.comparise__count}>
                    <span>В сравнении:</span>
                    <span>4 товара</span>
                </p>
                <table>
                    <tbody>
                        <tr className={s.comparise__tile_title}>
                            <td>Фото</td>
                            <td>Название</td>
                            <td>Критерий 1</td>
                            <td>Критерий 2</td>
                            <td>Критерий 3</td>
                            <td>Цена</td>
                        </tr>

                        <tr className={s.comparise__tile_item}>
                            <td className={s.product__tile_img}><img src={Product} alt=""/></td>
                            <td>Фара передняя <br/> Hyundai Getz</td>
                            <td>2005-2010, мех. </td>
                            <td> правая H4</td>
                            <td>регул. <br/> 221-1141R-LD-E</td>
                            <td>3 578 ₴</td>
                            <td><img className={s.product__tile_delete} src={Exit}/></td>
                            <td>
                                <button className={s.product__tile_addCart}>
                                    <Cart/>
                                    <span>В корзину</span>
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <div className={s.comparise__template}>
                    <div className={s.comparise__template_product}>
                        <img src={Product} alt=""/>
                        <div className={s.template__product_info}>
                            <h5>Фара передняя Hyundai Getz</h5>
                            <sub>2005-2010 правая H4, мех. регул. 221-1141R-LD-E</sub>
                            <div>
                                <span className={s.template__product_price}>3 578 ₴</span>
                                <button className={s.template__product_cart}><Cart/></button>
                            </div>
                        </div>
                    </div>
                    <div className={s.comparise__template_photos}>
                        <div className={`${s.comparise__name} ${criterium1 ? s.active : null}`}>
                            Фото
                        </div>
                        <div className={s.comparise__photo_wrapper}>
                            <div className={s.comparise__template_photo}>
                                <sub>Фара передняя Hyundai Getz 1</sub>
                                <img src={Product} alt=""/>
                            </div>
                            <div className={s.comparise__template_photo}>
                                <sub>Фара передняя Hyundai Getz 1</sub>
                                <img src={Product} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={s.comparise__template_criterium}>
                        <div onClick={() => setCriterium1(!criterium1)} className={`${s.comparise__name} ${criterium1 ? s.active : null}`}>
                            Критерий 1
                            <MenuArrow />
                        </div>
                        {criterium1 && <>
                        <div className={s.comparise__template_criterium_block}>
                            <sub>Фара передняя Hyundai Getz 1</sub>
                            <sub>2005-2010 правая H4, мех. регул. 221-1141R-LD-E</sub>
                        </div>
                        <div className={s.comparise__template_criterium_block}>
                            <sub>Фара передняя Hyundai Getz 1</sub>
                            <sub>2005-2010 правая H4, мех. регул. 221-1141R-LD-E</sub>
                        </div>
                        </>}
                    </div>
                    <div className={s.comparise__template_criterium}>
                        <div onClick={() => setCriterium2(!criterium2)} className={`${s.comparise__name} ${criterium2 ? s.active : null}`}>
                            Критерий 2
                            <MenuArrow />
                        </div>
                        {criterium2 && <>
                        <div className={s.comparise__template_criterium_block}>
                            <sub>Фара передняя Hyundai Getz 1</sub>
                            <sub>2005-2010 правая H4, мех. регул. 221-1141R-LD-E</sub>
                        </div>
                        <div className={s.comparise__template_criterium_block}>
                            <sub>Фара передняя Hyundai Getz 1</sub>
                            <sub>2005-2010 правая H4, мех. регул. 221-1141R-LD-E</sub>
                        </div>
                        </>}
                    </div>
                    <div className={s.comparise__template_criterium}>
                        <div onClick={() => setCriterium3(!criterium3)} className={`${s.comparise__name} ${criterium3 ? s.active : null}`}>
                            Критерий 3
                            <MenuArrow />
                        </div>
                        {criterium3 && <>
                        <div className={s.comparise__template_criterium_block}>
                            <sub>Фара передняя Hyundai Getz 1</sub>
                            <sub>2005-2010 правая H4, мех. регул. 221-1141R-LD-E</sub>
                        </div>
                        <div className={s.comparise__template_criterium_block}>
                            <sub>Фара передняя Hyundai Getz 1</sub>
                            <sub>2005-2010 правая H4, мех. регул. 221-1141R-LD-E</sub>
                        </div>
                        </>}
                    </div>
                    <div className={s.comparise__template_price}>
                        <div onClick={() => setPrice(!price)} className={`${s.comparise__name} ${price ? s.active : null}`}>
                            Цена
                            <MenuArrow />
                        </div>
                        {price && <>
                        <sub>3 578 ₴</sub>
                        <sub>3 578 ₴</sub>
                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}
