import React, { PropTypes } from 'react';
import './Footer.css';

const Footer = props => {
    return (
        <div className='div-footer'>
            <h3>Shimon<span>WebDeveloper</span> &copy; 2020</h3>
            <div>
                <p> 🏘  HaRav Shach Street 64, Bnei Brak</p>
            </div>
            <div>
                <p>☎  054-7459786 </p>
            </div>
            <div>
                <p>✉ <a href="mailto:shimonwebdeveloper@gmail.com">ShimonWebDeveloper@gmail.com</a></p>
            </div>
            <p class="footer-company-about">
                <span>About my knowledge</span>
        I studied WEB development for a year and a half at AvraTech and learned a lot myself and a lot of practice
        hours.
      </p>
        </div>
    );
};

export default Footer;