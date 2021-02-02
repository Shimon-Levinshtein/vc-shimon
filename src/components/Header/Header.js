import React from 'react';
import './Header.css';

import jpgHeader from '../../imges/web.jpg';
const Header = () => {
    return (
        <div className='div-header'>
            <div className='div-header-max-width'>
                <div className='div-h2-header'>
                    <h2>CV</h2>
                    <h2>Shimon Levinshtin</h2>
                </div>
                <div className='div-img-header'>
                    <img src={jpgHeader} />
                </div>
            </div>
        </div>
    );
};

export default Header;