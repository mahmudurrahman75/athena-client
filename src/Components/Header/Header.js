import React from 'react';
import HeaderContent from '../HeaderContent/HeaderContent';
import Nav from '../Nav/Nav';

const Header = () => {
    return (
        <div>
            <Nav></Nav>
            <HeaderContent></HeaderContent>
        </div>
    );
};

export default Header;