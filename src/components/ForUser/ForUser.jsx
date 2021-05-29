import React from "react";
import f from './ForUser.module.css';
import Shop from "./Shop/Shop";
import Delivery from "./Delivery/Delivery";
import Payment from "./Payment/Payment";
import Warranty from "./Warranty/Warranty";

const ForUser = (props) => {
    return (
        <>
            <Shop />
            <Delivery />
            <Payment />
            <Warranty />
        </>
    )
}

export default ForUser