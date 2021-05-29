import a from './Advantages.module.css';
import React from "react";

const Advantages = (props) => {
    return (
        <div className={a.about__advantages}>
            <div className={a.about__advantages__title}>
                Наши главные преимущества:
            </div>
            <nav className={a.about__advantages__nav}>
                <ul>
                    <li>Низкие цены от производителей</li>
                    <li>Доставка по городу в день принятия заказа (г. Киев)</li>
                    <li>Доставка заказов Почтой по всей Стране за 5-15 дней</li>
                    <li>Только оригинальная и сертифицированная продукция</li>
                </ul>
                <ul>
                    <li>Гарантия на все товары – 5 лет!</li>
                    <li>Бонусы и скидки для постоянных покупателей</li>
                    <li>Не понравился товар? Вернем или обменяем в течение 14-ти дней без оформления лишних бумаг!</li>
                </ul>
            </nav>
        </div>
    )
}

export default Advantages