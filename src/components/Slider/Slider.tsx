import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import Card from "../Card/Card";
import {ArrowWrapper} from "./styles";
const photo = require("../../assets/images/photo1.jpg");

const Slider = () => {
    const arrow = (type: string) => <ArrowWrapper><i className={`fas fa-chevron-${type}`}></i></ArrowWrapper>

    return (
        <Carousel show={3.5} slide={2} transition={0.5} responsive={true} leftArrow={arrow('left')}
                  rightArrow={arrow('right')}>
            <Card url={photo} name={"Полное руководство по Python 3: от новичка до специалиста"} author={"Sdfsdfsd"} rate={3.6} price={44.3}/>
            <Card url={photo} name={"Полное руководство по Python 3: от новичка до специалиста"} author={"Sdfsdfsd"} rate={3.6} price={44.3} />
            <Card url={photo} name={"Полное руководство по Python 3: от новичка до специалиста"} author={"Sdfsdfsd"} rate={3.6} price={44.3} />
            <Card url={photo} name={"Полное руководство по Python 3: от новичка до специалиста"} author={"Sdfsdfsd"} rate={3.6} price={44.3} />
            <Card url={photo} name={"Полное руководство по Python 3: от новичка до специалиста"} author={"Sdfsdfsd"} rate={3.6} price={44.3} />
            <Card url={photo} name={"Полное руководство по Python 3: от новичка до специалиста"} author={"Sdfsdfsd"} rate={3.6} price={44.3} />
        </Carousel>
    );
};

export default Slider;
