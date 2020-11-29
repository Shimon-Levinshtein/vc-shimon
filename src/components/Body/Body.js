import React, { useState } from 'react';
import DetailWindow from './Components/DetailWindow';
import './Body.css';
import { programmingLanguagesArr } from './specification/programmingLanguages';

const Body = props => {

    return (
        <div className='div-body'>
            <div className='bady-page'>
                <h3>PROFESSIONAL EXPERIENCE</h3>
                {programmingLanguagesArr.map((item, i) => (
                    <DetailWindow obj={item} key={i}/>
                ))}
               
            </div>
        </div>
    );
};

export default Body;