import s from './Clients.module.css'
import ClientsItem from "./ClientsItem/ClientsItem";
import {useState} from "react";
import {ReactComponent as ArrowLeft} from "../../../common/icons/arrow-left.svg";
import {ReactComponent as ArrowRight} from "../../../common/icons/arrow-right.svg";
import BestsellersItem from "../Bestsellers/BestsellersItem/BestsellersItem";

const Clients = () => {
    const [page, setPage] = useState(1)
    const [full, setFull] = useState(false)
    const [startX, setStartX] = useState(null)
    const [endX, setEndX] = useState(null)

    const defineDirection = (start, end) => {
        if(!full){
            if(start > end){
                setPage(page+1 > 3 ? 1 : page+1)
            }else if(start < end){
                setPage(page-1 !== 0 ? page-1 : 3)
            }
        }else{
            return
        }
    }

    return (
        <div className={s.mainPage__ourClientsrecommend}>
            <div className={s.container}>
                <div className={s.mainPage__clients_title}>
                    <h1 className={s.mainPage__OurClientsrecommend_h1}>Наши клиенты рекомендуют</h1>
                    {(!full || window.innerHeight >= 850) &&<div className={s.mainPage__bestsellers_dots}>
                        <span className={page === 1 ? s.active__dot : ''}></span>
                        <span className={page === 2 ? s.active__dot : ''}></span>
                        <span className={page === 3 ? s.active__dot : ''}></span>
                    </div>}
                </div>
                <div onTouchEnd={(e) => {setEndX(e.changedTouches[0].pageX); defineDirection(startX ,endX, e)}} onTouchStart={(e) => setStartX(e.changedTouches[0].pageX)}  className={s.mainPage__OurClientsrecommend_wrap}>
                    <button onClick={() => {setPage(page-1 !== 0 ? page-1 : 3)}} className={s.left}><ArrowLeft/></button>

                    {window.innerHeight <= 850 ? full ? <>
                            <ClientsItem/>
                            <ClientsItem/>
                            <ClientsItem/>
                        </> : <ClientsItem/>
                        : !full ? <>
                                <ClientsItem/>
                                <ClientsItem/>
                                <ClientsItem/>
                                <ClientsItem/>
                            </>
                            :<>
                                <ClientsItem/>
                                <ClientsItem/>
                                <ClientsItem/>
                                <ClientsItem/>
                                <ClientsItem/>
                                <ClientsItem/>
                                <ClientsItem/>
                                <ClientsItem/> </>}
                    <button onClick={() => {setPage(page+1 > 3 ? 1 : page+1)}} className={s.right}><ArrowRight/></button>
                </div>
                <div className={s.mainPage__bestsellers_btn}>
                    <a onClick={() => setFull(!full)}>{full ? "Скрыть всё" : "Посмотреть всё"}</a>
                </div>

            </div>
        </div>
    )
}

export default Clients
