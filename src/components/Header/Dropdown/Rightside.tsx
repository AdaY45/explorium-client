import React from 'react';
import { NavLink } from 'react-router-dom';
import { RightSide, Link } from "../styles";

const Rightside = () => {
    return(
        <RightSide>
            <Link to="/">Підкатегорія <i className="fas fa-chevron-right"></i></Link>
            <Link to="/">Підкатегорія <i className="fas fa-chevron-right"></i></Link>
            <Link to="/">Підкатегорія <i className="fas fa-chevron-right"></i></Link>
            <Link to="/">Підкатегорія <i className="fas fa-chevron-right"></i></Link>
            <Link to="/">Підкатегорія <i className="fas fa-chevron-right"></i></Link>
            <Link to="/">Підкатегорія <i className="fas fa-chevron-right"></i></Link>
            <Link to="/">Підкатегорія <i className="fas fa-chevron-right"></i></Link>
            <Link to="/">Підкатегорія <i className="fas fa-chevron-right"></i></Link>
            <Link to="/">Підкатегорія <i className="fas fa-chevron-right"></i></Link>
        </RightSide>
    );
}

export default Rightside;
