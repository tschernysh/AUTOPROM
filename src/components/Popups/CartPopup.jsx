import s from "./Popups.module.css";
import Exit from "../../common/img/Exit.png";
import Product from "../../common/img/product_1.png";

export const CartPopup = (props) => {


    return(
        <div className={s.wrapper}>
            <div className={s.cart__popup}>
                <div className={s.cart__popup_title}>
                    <div className={s.cart__popup_name}>
                        <h5>Корзина</h5>
                        <span>(3)</span>
                    </div>
                    <img onClick={() => props.setModalVisibility(false)} src={Exit}/>
                </div>
                <div className={s.cart__popup_filters}>
                    <div>
                        <input className={s.popups__registration__checkbox} type="checkbox" id="selectAll"/>
                        <label className={s.cart__popup_label} htmlFor="selectAll"></label>
                        <span>Выбрать всё</span>
                    </div>
                    <div>
                        <div>
                            <span>Выбрано: </span>
                            <span>1 товар</span>
                        </div>
                    </div>
                </div>
                <div className={s.cart__popup_content}>
                    <p onClick={() => props.setModalVisibility(false)}>Вернуться к покупкам</p>
                    <div className={s.cart__popup_template}>
                        <div className={s.cart__popup_products}>
                            <div className={s.cart__product_item}>
                                <input className={s.popups__registration__checkbox} type="checkbox" id="selectThis"/>
                                <label className={s.cart__popup_label} htmlFor="selectThis"></label>
                                <img className={s.cart__product_photo} src={Product} alt=""/>
                                <div className={s.cart__product_name}>
                                    <p>Фара передняя Hyundai Getz</p>
                                    <p>2005-2010 правая H4, мех. регул. <br/> 221-1141R-LD-E</p>
                                </div>
                                <div className={s.cart__product_amount}>
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <div className={s.cart__product_price}>3 578 ₴</div>
                                <img className={s.cart__product_delete} src={Exit}/>
                            </div>
                        </div>
                        <div className={s.cart__popup_info}>
                            <h5>Сумма к оплате</h5>
                            <div className={s.cart__product_info_block}>
                                <p>
                                    <span>Всего:</span>
                                    <span>10734 ₴</span>
                                </p>
                                <p>
                                    <span>Скидка:</span>
                                    <span>1625 ₴</span>
                                </p>
                                <p>
                                    <span>Доставка:</span>
                                    <span>0 ₴</span>
                                </p>
                            </div>
                            <button className={s.cart__product_button}>
                                Оформить заказ
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
