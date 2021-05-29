import s from "./SearchBanner.module.css";

const SearchBanner = (props) => {
    return (
        <div className={s.mainPage___firstBlock}>
            <div className={s.mainPage__firstBlock_blockWithCar}>
                <div>АВТОЗАПЧАСТИ <br/> ВЫСШЕГО КАЧЕСТВА</div>
                <div>Низкие цены <span></span> Быстрая доставка</div>
                <div>ДАРИМ -10% НА ПЕРВЫЙ ЗАКАЗ</div>

                <form className={s.mainPage__firstBlock_form_sending_form}>
                    <div>
                        <input className={s.mainPage__firstBlock_form_input} type="text"
                               placeholder="Поиск по товарам"/>
                        <span></span>
                    </div>

                    <input className={s.mainPage__firstBlock_form_submit} type="submit" value="Искать"/>
                </form>
            </div>
        </div>
    )
}

export default SearchBanner
