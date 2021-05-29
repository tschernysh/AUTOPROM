import React from "react";
import b from './Blog.module.css'

const Blog = (props) => {
    return (
        <div className={b.container}>
            <div className={b.blog}>
                <div className={b.blog__menu}>
                    Главная / Блог
                </div>
                <div className={b.blog__items}>

                </div>
            </div>
        </div>
    )
}

export default Blog