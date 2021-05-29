import s from './Clients.module.css'
import ClientsItem from "./ClientsItem/ClientsItem";

const Clients = () => {
    return (
        <div className={s.mainPage__ourClientsrecommend}>
            <div className={s.container}>
                <h1 className={s.mainPage__OurClientsrecommend_h1}>Наши клиенты рекомендуют</h1>
                <div className={s.mainPage__OurClientsrecommend_wrap}>

                    <ClientsItem/>
                    <ClientsItem/>
                    <ClientsItem/>
                    <ClientsItem/>

                </div>
                <div className={s.mainPage__bestsellers_btn}>
                    <a href="">Посмотреть всё</a>
                </div>

            </div>
        </div>
    )
}

export default Clients
