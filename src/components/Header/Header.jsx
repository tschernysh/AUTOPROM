import React, {useContext, useState} from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import ForUser from "../ForUser/ForUser";
import HeaderElement1 from "../../common/img/Header__subSubBlock_element_1.png"
import HeaderElement2 from "../../common/img/Header__subSubBlock_element_2.png"
import HeaderElement3 from "../../common/img/Header__subSubBlock_element_3.png"
import HeaderElement4 from "../../common/img/Header__subSubBlock_element_4.png"
import HeaderElement5 from "../../common/img/Header__subSubBlock_element_5.png"
import HeaderElement6 from "../../common/img/Header__subSubBlock_element_6.png"
import HeaderElement7 from "../../common/img/Header__subSubBlock_element_7.png"
import HeaderElement8 from "../../common/img/Header__subSubBlock_element_8.png"
import HeaderElement9 from "../../common/img/Header__subSubBlock_element_9.png"
import HeaderElement10 from "../../common/img/Header__subSubBlock_element_10.png"
import HeaderElement11 from "../../common/img/Header__subSubBlock_element_11.png"
import {ModalContext} from "../../common/context/ModalContext";
import {RegistrationPopup} from "../Popups/RegistrationPopup";
import {LoginPopup} from "../Popups/LoginPopup";
import {CartPopup} from "../Popups/CartPopup";
import {ComparisePopup} from "../Popups/ComparisePopup";
import {ReactComponent as CatalogVector1} from '../../common/icons/Header__catalogVector_1.svg'
import {ReactComponent as CatalogVector2} from '../../common/icons/Header__catalogVector_2.svg'
import {ReactComponent as CatalogVector3} from '../../common/icons/Header__catalogVector_3.svg'
import {ReactComponent as CatalogVector4} from '../../common/icons/Header__catalogVector_4.svg'
import {ReactComponent as CatalogVector5} from '../../common/icons/Header__catalogVector_5.svg'
import {ReactComponent as CatalogVector6} from '../../common/icons/Header__catalogVector_6.svg'
import {ReactComponent as MenuArrow} from '../../common/icons/Header__arrowVector.svg'
import {ReactComponent as Menu} from '../../common/icons/Menu.svg'
import {ProfileInfo} from "../Popups/ProfileInfo";

const Header = (props) => {
    const {modalVisibility, setModalVisibility, modalContent, setModalContent} = useContext(ModalContext)
    const [headerList, setHeaderList] = useState(
        [
            {name: 'Автомобильные инструменты',
                style: s.Header__list_subSublist_wrap_1,
                img: <CatalogVector1 />,
                list: [
                    {name: 'Автомобильные компрессоры', img: HeaderElement8 },
                    {name: 'Домкраты и опоры', img: HeaderElement9 },
                    {name: 'Слесарный инструмент', img: HeaderElement10 },
                    {name: 'Диагностическое оборудование', img: HeaderElement11 },
                    {name: 'Автомобильные компрессоры', img: HeaderElement8 },
                    {name: 'Домкраты и опоры', img: HeaderElement9 },
                    {name: 'Слесарный инструмент', img: HeaderElement10 },
                    {name: 'Диагностическое оборудование', img: HeaderElement11 }
                ]
            },
            {name: 'Аксессуары и оборудование',
                style: s.Header__list_subSublist_wrap_2,
                img: <CatalogVector2 />,
                list: [
                    {name: 'Автомобильные компрессоры', img: HeaderElement8 },
                    {name: 'Домкраты и опоры', img: HeaderElement9 },
                    {name: 'Слесарный инструмент', img: HeaderElement10 },
                    {name: 'Диагностическое оборудование', img: HeaderElement11 },
                    {name: 'Автомобильные компрессоры', img: HeaderElement8 },
                    {name: 'Домкраты и опоры', img: HeaderElement9 },
                    {name: 'Слесарный инструмент', img: HeaderElement10 },
                    {name: 'Диагностическое оборудование', img: HeaderElement11 }
                ]
            },
            {name: 'Аудио и видеотехника',
                style: s.Header__list_subSublist_wrap_3,
                img: <CatalogVector3 />,
                list: [
                    {name: 'Автомобильные компрессоры', img: HeaderElement8 },
                    {name: 'Домкраты и опоры', img: HeaderElement9 },
                    {name: 'Слесарный инструмент', img: HeaderElement10 },
                    {name: 'Диагностическое оборудование', img: HeaderElement11 },
                    {name: 'Автомобильные компрессоры', img: HeaderElement8 },
                    {name: 'Домкраты и опоры', img: HeaderElement9 },
                    {name: 'Слесарный инструмент', img: HeaderElement10 },
                    {name: 'Диагностическое оборудование', img: HeaderElement11 }
                ]
            },
            {name: 'Автосвет',
                style: s.Header__list_subSublist_wrap_4,
                img: <CatalogVector4 />,
                list: [
                    {name: 'Автомобильные компрессоры', img: HeaderElement8 },
                    {name: 'Домкраты и опоры', img: HeaderElement9 },
                    {name: 'Слесарный инструмент', img: HeaderElement10 },
                    {name: 'Диагностическое оборудование', img: HeaderElement11 },
                    {name: 'Автомобильные компрессоры', img: HeaderElement8 },
                    {name: 'Домкраты и опоры', img: HeaderElement9 },
                    {name: 'Слесарный инструмент', img: HeaderElement10 },
                    {name: 'Диагностическое оборудование', img: HeaderElement11 }
                ]
            },
            {name: 'Электроника',
                style: s.Header__list_subSublist_wrap_5,
                img: <CatalogVector5 />,
                list: [
                    {name: 'Автомобильные компрессоры', img: HeaderElement8 },
                    {name: 'Домкраты и опоры', img: HeaderElement9 },
                    {name: 'Слесарный инструмент', img: HeaderElement10 },
                    {name: 'Диагностическое оборудование', img: HeaderElement11 },
                    {name: 'Автомобильные компрессоры', img: HeaderElement8 },
                    {name: 'Домкраты и опоры', img: HeaderElement9 },
                    {name: 'Слесарный инструмент', img: HeaderElement10 },
                    {name: 'Диагностическое оборудование', img: HeaderElement11 }
                ]
            },
            {name: 'Запчасти',
                style: s.Header__list_subSublist_wrap_6,
                img: <CatalogVector6 />,
                list: [
                    {name: 'Автомобильные компрессоры', img: HeaderElement8 },
                    {name: 'Домкраты и опоры', img: HeaderElement9 },
                    {name: 'Слесарный инструмент', img: HeaderElement10 },
                    {name: 'Диагностическое оборудование', img: HeaderElement11 },
                    {name: 'Автомобильные компрессоры', img: HeaderElement8 },
                    {name: 'Домкраты и опоры', img: HeaderElement9 },
                    {name: 'Слесарный инструмент', img: HeaderElement10 },
                    {name: 'Диагностическое оборудование', img: HeaderElement11 }
                ]
            }
        ]
    )

    const [isOpen, setIsOpen] = useState(false)

    return (
        <header>
            <div className={s.whiteBackgroud}>
                <div className={s.container}>
                    <div className={s.Header__topInfo}>
                        <div>
                            <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.79648 0.738281C4.48407 0.738281 0.975586 4.24676 0.975586 8.55917C0.975586 13.9794 8.80417 23.2383 8.80417 23.2383C8.80417 23.2383 16.6174 13.7129 16.6174 8.55917C16.6174 4.24676 13.109 0.738281 8.79648 0.738281ZM11.1562 10.8491C10.5055 11.4997 9.65108 11.825 8.79648 11.825C7.94202 11.825 7.08728 11.4997 6.43689 10.8491C5.1357 9.54808 5.1357 7.43101 6.43689 6.12982C7.06696 5.49948 7.90507 5.15231 8.79648 5.15231C9.68788 5.15231 10.5259 5.49962 11.1562 6.12982C12.4574 7.43101 12.4574 9.54808 11.1562 10.8491Z" fill="#FF8514" />
                            </svg>
                            <div className={s.Header__topInfo_location}>Хмельницкий</div>
                        </div>
                        <div className={s.Header__topInfo_workTime}>График работы: 09:00-21:00</div>
                        <div className={s.Header__topInfo_PhoneNumber}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.3952 13.1277C17.1707 13.1277 15.9684 12.9362 14.8291 12.5597C14.2708 12.3693 13.5845 12.544 13.2438 12.8939L10.995 14.5915C8.38703 13.1994 6.78057 11.5934 5.40745 9.00505L7.0551 6.81484C7.48318 6.38734 7.63672 5.76286 7.45276 5.17693C7.07464 4.03161 6.88255 2.8299 6.88255 1.6049C6.8826 0.719948 6.16266 0 5.27776 0H1.60484C0.719948 0 0 0.719948 0 1.60484C0 11.7481 8.25198 20 18.3952 20C19.2801 20 20.0001 19.2801 20.0001 18.3952V14.7325C20 13.8477 19.2801 13.1277 18.3952 13.1277Z" fill="#FF8514" />
                            </svg>
                            +380964773085
                        </div>
                    </div>
                </div>
                <div className={s.container}>
                    <div className={s.Header__list}>

                        <div className={s.Header__list_leftPart}>
                            <NavLink to='/'>
                                <svg width="145" height="48" viewBox="0 0 145 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M98.9254 8.11627C98.9254 8.11627 94.4403 4.67228 85.4858 2.81007C76.5314 0.947855 63.2935 -0.0985554 51.9872 2.81019C40.6809 5.71894 42.529 5.23324 29.7216 9.3407C16.9143 13.4482 1 11.4061 1 11.4061C1 11.4061 17.6862 14.0344 34.1346 14.8507C50.5831 15.6669 111.426 14.3913 124.465 15.6157C137.503 16.8402 144.107 22.3496 144.107 22.3496"
                                        stroke="#272522" stroke-width="1.68361" stroke-linecap="round" />
                                    <path
                                        d="M20.6026 40.0539H14.6931L14.3396 36.0385H9.66757L7.87452 40.0539H5.42487L12.8748 24.0175H18.8601L20.6026 40.0539ZM10.501 34.195H14.1628L13.582 27.3258L10.501 34.195ZM28.1767 34.3212C28.0925 34.6916 28.0252 35.0115 27.9746 35.2809C27.9241 35.5503 27.8989 35.8028 27.8989 36.0385C27.8989 36.6278 28.1009 37.0992 28.505 37.4527C28.9259 37.8063 29.5404 37.9831 30.3485 37.9831C30.9378 37.9831 31.4176 37.8821 31.788 37.68C32.1752 37.478 32.4867 37.2086 32.7224 36.8719C32.975 36.5352 33.1686 36.148 33.3033 35.7102C33.4548 35.2725 33.5811 34.8095 33.6821 34.3212L35.8287 24.0175H38.1268L35.9297 34.3717C35.7613 35.1799 35.5172 35.9375 35.1973 36.6446C34.8774 37.3517 34.4144 37.9747 33.8083 38.5134C33.2191 39.0522 32.453 39.4815 31.5102 39.8014C30.5674 40.1044 29.3973 40.256 27.9999 40.256C26.0637 40.256 24.6327 39.9445 23.7067 39.3216C22.7807 38.6818 22.3177 37.7053 22.3177 36.3921C22.3177 35.8028 22.3935 35.0536 22.545 34.1445C22.6965 33.2353 22.8901 32.2504 23.1258 31.1897L24.6664 24.0175H30.399L28.1767 34.3212ZM52.7207 25.9369H48.6548L45.6496 40.0539H40.1947L43.1999 25.9369H39.1845L39.6391 24.0175H53.1501L52.7207 25.9369ZM61.2846 23.765C62.7325 23.765 63.9027 23.9502 64.795 24.3206C65.7041 24.691 66.4197 25.2634 66.9416 26.0379C67.2783 26.5598 67.5393 27.1491 67.7245 27.8057C67.9096 28.4623 68.0022 29.2199 68.0022 30.0785C68.0022 30.8193 67.9349 31.5601 67.8002 32.3009C67.6655 33.0417 67.4719 33.7572 67.2194 34.4475C66.9837 35.121 66.689 35.7607 66.3355 36.3668C65.9988 36.9561 65.6199 37.478 65.199 37.9326C64.4077 38.7912 63.4902 39.3973 62.4463 39.7509C61.4193 40.0876 60.1482 40.256 58.633 40.256C57.1682 40.256 55.9897 40.1044 55.0974 39.8014C54.2051 39.4983 53.498 39.0101 52.976 38.3366C52.6056 37.8652 52.311 37.2676 52.0921 36.5436C51.8901 35.8196 51.7891 34.9105 51.7891 33.8162C51.7891 31.9473 52.1174 30.2806 52.774 28.8158C53.4474 27.3343 54.3987 26.1641 55.6277 25.3055C56.3685 24.7836 57.1935 24.3964 58.1026 24.1438C59.0118 23.8913 60.0724 23.765 61.2846 23.765ZM58.4309 38.4882C58.8182 38.4882 59.1801 38.3198 59.5169 37.9831C59.8704 37.6295 60.1903 37.1665 60.4765 36.5941C60.7796 36.0048 61.0489 35.3398 61.2846 34.599C61.5372 33.8582 61.7476 33.0922 61.916 32.3009C62.0844 31.5096 62.2106 30.7267 62.2948 29.9523C62.3958 29.161 62.4463 28.4454 62.4463 27.8057C62.4463 26.9302 62.3537 26.3325 62.1685 26.0126C62.0002 25.6759 61.7476 25.5075 61.4109 25.5075C61.0237 25.5075 60.6533 25.6759 60.2997 26.0126C59.9462 26.3493 59.6095 26.8039 59.2896 27.3763C58.9865 27.9319 58.7087 28.5801 58.4562 29.3209C58.2205 30.0449 58.01 30.7941 57.8248 31.5685C57.6565 32.343 57.5218 33.109 57.4208 33.8667C57.3366 34.6243 57.2945 35.323 57.2945 35.9628C57.2945 36.9224 57.3955 37.5874 57.5975 37.9578C57.8164 38.3114 58.0942 38.4882 58.4309 38.4882Z"
                                        fill="#272522" />
                                    <path
                                        d="M76.3 33.1343C76.8051 33.1343 77.226 32.9238 77.5627 32.5029C77.9163 32.082 78.2025 31.5685 78.4214 30.9624C78.6571 30.3563 78.8254 29.725 78.9264 29.0684C79.0275 28.4118 79.078 27.8393 79.078 27.3511C79.078 26.8965 79.0022 26.5177 78.8507 26.2147C78.6991 25.8948 78.3708 25.7348 77.8658 25.7348H76.7293L75.1383 33.1343H76.3ZM74.7848 34.7506L73.6483 40.0539H68.1934L71.6027 24.0175H77.4364C78.3961 24.0175 79.2716 24.0681 80.0629 24.1691C80.8542 24.2701 81.536 24.4721 82.1085 24.7752C82.6809 25.0782 83.127 25.516 83.4469 26.0884C83.7668 26.644 83.9268 27.3932 83.9268 28.336C83.9268 29.2115 83.7836 30.0449 83.4974 30.8362C83.2281 31.6106 82.7819 32.2925 82.159 32.8818C81.5529 33.4542 80.7616 33.9088 79.7851 34.2455C78.8086 34.5822 77.6216 34.7506 76.2242 34.7506H74.7848ZM99.0694 27.8309C99.0694 28.8243 98.7916 29.7418 98.236 30.5836C97.6804 31.4254 96.7628 32.0652 95.4833 32.5029L98.4128 40.0539H92.7811L90.5587 33.0585H90.2809L88.7909 40.0539H83.336L86.7454 24.0175H93.3872C94.1617 24.0175 94.894 24.0681 95.5843 24.1691C96.2746 24.2533 96.8723 24.4385 97.3773 24.7247C97.8993 24.994 98.3117 25.3813 98.6148 25.8864C98.9178 26.3746 99.0694 27.0228 99.0694 27.8309ZM91.7962 31.4423C92.2339 31.4423 92.6043 31.2992 92.9074 31.0129C93.2272 30.7099 93.4798 30.3479 93.665 29.927C93.867 29.5061 94.0101 29.06 94.0943 28.5885C94.1785 28.1003 94.2206 27.6794 94.2206 27.3258C94.2206 26.8881 94.1448 26.5177 93.9933 26.2147C93.8418 25.8948 93.5135 25.7348 93.0084 25.7348H91.8719L90.6092 31.4423H91.7962ZM109.425 23.765C110.873 23.765 112.043 23.9502 112.936 24.3206C113.845 24.691 114.56 25.2634 115.082 26.0379C115.419 26.5598 115.68 27.1491 115.865 27.8057C116.05 28.4623 116.143 29.2199 116.143 30.0785C116.143 30.8193 116.076 31.5601 115.941 32.3009C115.806 33.0417 115.613 33.7572 115.36 34.4475C115.124 35.121 114.83 35.7607 114.476 36.3668C114.139 36.9561 113.761 37.478 113.34 37.9326C112.548 38.7912 111.631 39.3973 110.587 39.7509C109.56 40.0876 108.289 40.256 106.774 40.256C105.309 40.256 104.13 40.1044 103.238 39.8014C102.346 39.4983 101.639 39.0101 101.117 38.3366C100.746 37.8652 100.452 37.2676 100.233 36.5436C100.031 35.8196 99.9298 34.9105 99.9298 33.8162C99.9298 31.9473 100.258 30.2806 100.915 28.8158C101.588 27.3343 102.539 26.1641 103.768 25.3055C104.509 24.7836 105.334 24.3964 106.243 24.1438C107.152 23.8913 108.213 23.765 109.425 23.765ZM106.572 38.4882C106.959 38.4882 107.321 38.3198 107.658 37.9831C108.011 37.6295 108.331 37.1665 108.617 36.5941C108.92 36.0048 109.19 35.3398 109.425 34.599C109.678 33.8582 109.888 33.0922 110.057 32.3009C110.225 31.5096 110.351 30.7267 110.436 29.9523C110.537 29.161 110.587 28.4454 110.587 27.8057C110.587 26.9302 110.494 26.3325 110.309 26.0126C110.141 25.6759 109.888 25.5075 109.552 25.5075C109.164 25.5075 108.794 25.6759 108.44 26.0126C108.087 26.3493 107.75 26.8039 107.43 27.3763C107.127 27.9319 106.849 28.5801 106.597 29.3209C106.361 30.0449 106.151 30.7941 105.966 31.5685C105.797 32.343 105.662 33.109 105.561 33.8667C105.477 34.6243 105.435 35.323 105.435 35.9628C105.435 36.9224 105.536 37.5874 105.738 37.9578C105.957 38.3114 106.235 38.4882 106.572 38.4882ZM134.871 40.0539H129.264L131.588 29.1441L125.602 40.0539H122.168L121.031 28.7653L118.607 40.0539H116.334L119.743 24.0175H126.183L126.966 33.0585L131.815 24.0175H138.305L134.871 40.0539Z"
                                        fill="#FF8514" />
                                </svg>
                            </NavLink>


                            <nav className={s.Header__list_nav}>
                                <li><NavLink to='/' >Главная</NavLink></li>

                                <li><NavLink to='/'>Каталог <MenuArrow /> </NavLink>
                                    <ul className={s.Header__list_sublist}>
                                        {headerList.map( (el) => <li>
                                                {el.img}
                                                <a href="#">{el.name}</a>
                                                <span className={s.Header__list_nav_subArrow}></span>
                                                <div className={`${el.style} ${s.Header__list_subSublist_wrap}`}>
                                                    {el.list.map((li) => <div className={s.Header__list_subSublist_element}>
                                                            <img src={li.img} alt=""/>
                                                            <div>
                                                                <a href="#">{li.name}</a>
                                                                <span className={s.Header__list_nav_subSubArrow}></span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                                </li>

                                <li><NavLink to='/'>Пользователю <MenuArrow /> </NavLink>
                                    <ul className={s.Header__list_nav_forUser}>
                                        <li><NavLink to='/'>Доставка</NavLink></li>
                                        <li><NavLink to='/cart'>Оплата</NavLink></li>
                                        <li><NavLink to=''>Гарантии</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to='/about' >О нас</NavLink></li>
                                <li><NavLink to='/services' >Услуги</NavLink></li>
                                <li><NavLink to='/blog'>Блог</NavLink></li>
                                <li><NavLink to='/error404'>404</NavLink></li>
                                <li><NavLink to='/popups'>Popups</NavLink></li>
                            </nav>

                        </div>

                        <div className={s.Header__list_rightPart}>

                            <div className={s.Header__list_rightPartElement}>
                                <a className={s.Header__list_rightPart_btnText} href="#">
                                        <div className={s.Header__listElement_PhoneNumber}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.3952 13.1277C17.1707 13.1277 15.9684 12.9362 14.8291 12.5597C14.2708 12.3693 13.5845 12.544 13.2438 12.8939L10.995 14.5915C8.38703 13.1994 6.78057 11.5934 5.40745 9.00505L7.0551 6.81484C7.48318 6.38734 7.63672 5.76286 7.45276 5.17693C7.07464 4.03161 6.88255 2.8299 6.88255 1.6049C6.8826 0.719948 6.16266 0 5.27776 0H1.60484C0.719948 0 0 0.719948 0 1.60484C0 11.7481 8.25198 20 18.3952 20C19.2801 20 20.0001 19.2801 20.0001 18.3952V14.7325C20 13.8477 19.2801 13.1277 18.3952 13.1277Z"
                                                    fill="#FF8514" />
                                            </svg>
                                            <span>+380964773085</span>
                                    </div>
                                </a>
                            </div>

                            <a className={s.header__comparise} onClick={() => {
                                setModalVisibility(true)
                                setModalContent(() => ComparisePopup)
                            }} href="#">
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.25 29.1667V14.5833" stroke="#272522" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                    <path d="M17.5 29.1667V5.83334" stroke="#272522" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                    <path d="M8.75 29.1667V20.4167" stroke="#272522" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                </svg>
                            </a>

                            <div className={s.Header__list_rightPartElement}>
                                <a onClick={() => {
                                    setModalVisibility(true)
                                    setModalContent(() => ProfileInfo)
                                }} className={`${s.Header__profile}`} href="#">
                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M25.8332 27.125V24.5417C25.8332 23.1714 25.2888 21.8572 24.3199 20.8883C23.3509 19.9193 22.0368 19.375 20.6665 19.375H10.3332C8.96288 19.375 7.64872 19.9193 6.67979 20.8883C5.71085 21.8572 5.1665 23.1714 5.1665 24.5417V27.125"
                                            stroke="#272522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M15.5002 14.2083C18.3536 14.2083 20.6668 11.8951 20.6668 9.04167C20.6668 6.1882 18.3536 3.875 15.5002 3.875C12.6467 3.875 10.3335 6.1882 10.3335 9.04167C10.3335 11.8951 12.6467 14.2083 15.5002 14.2083Z"
                                            stroke="#272522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </a>

                                <div className={`${s.Header__listElement} ${s.Header__profile}`}>
                                    <a onClick={() => {
                                        setModalVisibility(true)
                                        setModalContent( () => LoginPopup )
                                    }}  className={s.Header__list_rightPart_btnText} href="#">Войти</a>
                                    <a onClick={() => {
                                        setModalVisibility(true)
                                        setModalContent( () => RegistrationPopup )
                                    }} className={s.Header__list_rightPart_btnSmallText} href="#">Регистрация</a>
                                </div>

                            </div>

                            <div className={s.Header__list_rightPartElement}>
                                <NavLink to='/cart' href="#">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.25 27.5C11.9404 27.5 12.5 26.9404 12.5 26.25C12.5 25.5596 11.9404 25 11.25 25C10.5596 25 10 25.5596 10 26.25C10 26.9404 10.5596 27.5 11.25 27.5Z"
                                            stroke="#272522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M25 27.5C25.6904 27.5 26.25 26.9404 26.25 26.25C26.25 25.5596 25.6904 25 25 25C24.3096 25 23.75 25.5596 23.75 26.25C23.75 26.9404 24.3096 27.5 25 27.5Z"
                                            stroke="#272522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M1.25 1.25H6.25L9.6 17.9875C9.71431 18.563 10.0274 19.0799 10.4844 19.4479C10.9415 19.8158 11.5134 20.0112 12.1 20H24.25C24.8366 20.0112 25.4085 19.8158 25.8656 19.4479C26.3226 19.0799 26.6357 18.563 26.75 17.9875L28.75 7.5H7.5"
                                            stroke="#272522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </NavLink>
                                <div onClick={() => {setModalVisibility(true); setModalContent(() => CartPopup)}} className={s.Header__listElement}>
                                    <a className={s.Header__list_rightPart_btnText} >3000₴</a>
                                    <a  className={s.Header__list_rightPart_btnSmallText} >1 товар</a>
                                </div>

                                <div onClick={() => setIsOpen(!isOpen)} className={s.Header__menu}>
                                    <Menu />
                                </div>
                            </div>

                            {isOpen && <div className="Header__list_rightPartElement_dropDown_body">
                                <div className="Header__list_rightPartElement_dropDown_body_leftElement">
                                    <a href="#">
                                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M25.8332 27.125V24.5417C25.8332 23.1714 25.2888 21.8572 24.3199 20.8883C23.3509 19.9193 22.0368 19.375 20.6665 19.375H10.3332C8.96288 19.375 7.64872 19.9193 6.67979 20.8883C5.71085 21.8572 5.1665 23.1714 5.1665 24.5417V27.125"
                                                stroke="#272522" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                            <path
                                                d="M15.5002 14.2083C18.3536 14.2083 20.6668 11.8951 20.6668 9.04167C20.6668 6.1882 18.3536 3.875 15.5002 3.875C12.6467 3.875 10.3335 6.1882 10.3335 9.04167C10.3335 11.8951 12.6467 14.2083 15.5002 14.2083Z"
                                                stroke="#272522" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                        </svg>
                                    </a>

                                    <div className="Header__listElement">
                                        <a className="Header__list_rightPart_btnText" href="#">Войти</a>
                                        <a className="Header__list_rightPart_btnSmallText" href="#">Регистрация</a>
                                    </div>
                                </div>
                                <div className="Header__list_rightPartElement_dropDown_body_links">
                                    <a href="#"
                                       className="Header__list_rightPartElement_dropDown_body_h1Link">Главная</a>
                                    <a href="#"
                                       className="Header__list_rightPartElement_dropDown_body_h1Link">Каталог</a>

                                    <a href="#" className="Header__list_rightPartElement_dropDown_body_simpleLink">Автомобильные
                                        инструменты<span
                                            className="Header__list_rightPartElement_dropDown_body_simpleLink_arrow"></span></a>
                                    <a href="#" className="Header__list_rightPartElement_dropDown_body_simpleLink">Аксессуары
                                        и оборудование<span
                                            className="Header__list_rightPartElement_dropDown_body_simpleLink_arrow"></span></a>
                                    <a href="#" className="Header__list_rightPartElement_dropDown_body_simpleLink">Аудио
                                        и видеотехника<span
                                            className="Header__list_rightPartElement_dropDown_body_simpleLink_arrow"></span></a>
                                    <a href="#" className="Header__list_rightPartElement_dropDown_body_simpleLink">Автосвет<span
                                        className="Header__list_rightPartElement_dropDown_body_simpleLink_arrow"></span></a>
                                    <a href="#" className="Header__list_rightPartElement_dropDown_body_simpleLink">Электроника<span
                                        className="Header__list_rightPartElement_dropDown_body_simpleLink_arrow"></span></a>

                                    <a href="#"
                                       className="Header__list_rightPartElement_dropDown_body_h1Link">Пользователю</a>

                                    <a href="#" className="Header__list_rightPartElement_dropDown_body_simpleLink">Доставка<span
                                        className="Header__list_rightPartElement_dropDown_body_simpleLink_arrow"></span></a>
                                    <a href="#" className="Header__list_rightPartElement_dropDown_body_simpleLink">Оплата<span
                                        className="Header__list_rightPartElement_dropDown_body_simpleLink_arrow"></span></a>
                                    <a href="#" className="Header__list_rightPartElement_dropDown_body_simpleLink">Гарантии<span
                                        className="Header__list_rightPartElement_dropDown_body_simpleLink_arrow"></span></a>

                                    <a href="#" className="Header__list_rightPartElement_dropDown_body_h1Link">О нас</a>
                                    <a href="#"
                                       className="Header__list_rightPartElement_dropDown_body_h1Link">Услуги</a>
                                    <a href="#" className="Header__list_rightPartElement_dropDown_body_h1Link">Блог</a>
                                </div>

                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
