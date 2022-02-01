import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props: any) => {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    );
};

export default Layout;
