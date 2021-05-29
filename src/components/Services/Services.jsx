import React from "react";
import s from './Services.module.css';
import ServicesBackground from "./ServicesBackground/ServicesBackround";
import Serve from "./Serve/Serve";

const Services = (props) => {
    return (
        <>
            <ServicesBackground />
            <Serve />
        </>
    )
}

export default Services