import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { DropDown, Link } from "../styles";
import Rightside from "./Rightside";

const Dropdown = () => {
    return(
        <>
            <DropDown>
                <Link to="/developing">Розробка <i className="fas fa-chevron-right"></i></Link>
                <Link to="/business">Бізнес <i className="fas fa-chevron-right"></i></Link>
                <Link to="/technology">IT та ПЗ <i className="fas fa-chevron-right"></i></Link>
                <Link to="/office">Офісне та програмне забезпечення <i className="fas fa-chevron-right"></i></Link>
                <Link to="/design">Дизайн <i className="fas fa-chevron-right"></i></Link>
                <Link to="/marketing">Маркетинг <i className="fas fa-chevron-right"></i></Link>
                <Link to="/photo-video">Фотографія та відео <i className="fas fa-chevron-right"></i></Link>
                <Link to="/music">Музика <i className="fas fa-chevron-right"></i></Link>
                <Link to="/health-fitness">Здоров'є та фітнес <i className="fas fa-chevron-right"></i></Link>
            </DropDown>
        </>
    );
}

export default Dropdown;
