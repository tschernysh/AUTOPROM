import React from "react";
import a from './About.module.css';
import Background from "./Background/Background";
import AboutMain from "./AboutMain/AboutMain";
import Advantages from "./Advantages/Advantages";

const About = (props) => {
    return (
        <>
            <Background/>
            <AboutMain />
            <Advantages />
        </>

    )
}

export default About