import React from 'react';

import logo from "../styles/assets/logo.png";

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="logo"/>
            <h3>React World</h3>
        </div>
    );
};

export default Logo;
