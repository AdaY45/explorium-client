import React from 'react'
import {FooterWrapper, FooterContent, Link, Logo} from "./styles";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return(
        <FooterWrapper>
            <FooterContent>
                <Link to="/">Udemy Business</Link>
                <Link to="/">Преподавайте на Udemy</Link>
                <Link to="/">Скачать приложение</Link>
                <Link to="/">Наши координаты</Link>
                <Link to="/">Карьера</Link>
                <Link to="/">О нас</Link>
            </FooterContent>
            <Link to="/"><Logo>Explorium</Logo></Link>
        </FooterWrapper>
    );
}

export default Footer;
