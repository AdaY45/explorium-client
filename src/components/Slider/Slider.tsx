import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import Card from "../Card/Card";
import {ArrowWrapper} from "./styles";
const photo = require("../../assets/images/photo1.jpg");

const Slider = () => {
    const arrow = (type: string) => <ArrowWrapper><i className={`fas fa-chevron-${type}`}></i></ArrowWrapper>

    return (
        <Carousel show={3.5} slide={2} transition={0.5} responsive={true} leftArrow={arrow('left')} rightArrow={arrow('right')}>
            <Card url={photo} name={"Полное руководство по Python 3: от новичка до специалиста"} author={"Valerii Sviatnenko"} rate={4.3} price={18.30}/>
            <Card url={photo} name={"Selenium WebDriver with Java -Basics to Advanced+Frameworks"} author={"Adriana Yushchenko"} rate={3} price={20.30} />
            <Card url={photo} name={"Полный курс по JavaScript + React - с нуля до результата"} author={"Vladimir Zelenskii"} rate={5} price={40} />
            <Card url={photo} name={"Ultimate AWS Certified Solutions Architect Associate 2022"} author={"Pavlik Morozov"} rate={4} price={30} />
            <Card url={photo} name={"Beginning C++ Programming - From Beginner to Beyond"} author={"Natalia Poklonskaya"} rate={5} price={31} />
            <Card url={photo} name={"Master the Coding Interview: Data Structures + Algorithms"} author={"Alexander Lukashenko"} rate={2.8} price={19.00} />
        </Carousel>
    );
};

export default Slider;
