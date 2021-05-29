import React from "react";
import f from './Warranty.module.css'

const Warranty = (props) => {
    return (
        <div className={f.warranty}>
            <div className={f.warranty__title}>
                Гарантии
            </div>
            <div className={f.warranty__items}>
                <div className={f.warranty__item}>
                    <div className={f.warranty__item__title}>
                        Общая информация
                    </div>
                    <div className={f.warranty__item__text__first}>
                        Гарантийное обслуживание осуществляется только на товары купленные в магазине «AUTOPROM», а
                        также в интернет магазине autoprom.in.ua. Свидетельством покупки такого товара является товарный
                        чек.
                        <br></br><br></br>
                        Подтверждением права на бесплатное гарантийное обслуживание служит заполненный гарантийный талон
                        производителя или гарантийный талон магазина «AUTOPROM». В гарантийном талоне обязательно
                        указываются: модель, серийный номер товара, гарантийный срок и дата продажи. Для получения
                        бесплатного гарантийного обслуживания сохраняйте гарантийный талон и чек на протяжении всего
                        срока эксплуатации товара.
                    </div>
                </div>
                <div className={f.warranty__item__second}>
                    <div className={f.warranty__item__title}>
                        Гарантия на автозапчасти
                    </div>
                    <div className={f.warranty__item__text__second}>
                        Гарантийный срок на запчасти составляет 6 (шесть) месяцев с даты продажи товара или 20000 км
                        пробега (что наступит раньше).
                        <br></br><br></br>
                        Гарантия действует при условии соблюдения Покупателем следующих требований:<br></br>
                        - товар соответствует спецификации автомобиля<br></br>
                        - товар установлен на автомобиль на СТО, что подтверждается <br></br>
                        - предоставлением акта выполненных работ (заказ-наряд)<br></br>
                        - неработоспособность (дефектность) Товара подтверждена Актом рекламации
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Warranty