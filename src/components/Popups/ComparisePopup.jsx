import s from "./Popups.module.css";
import Exit from "../../common/img/Exit.png";
import Product from "../../common/img/product_1.png";
import React from "react";
import {ReactComponent as Comparise} from '../../common/icons/Header__comparisonVector.svg'
import {ReactComponent as Cart} from '../../common/icons/Cart.svg'

export const ComparisePopup = (props) => {
    return(
        <div className={s.wrapper}>
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
            </div>
        </div>
    )
}
