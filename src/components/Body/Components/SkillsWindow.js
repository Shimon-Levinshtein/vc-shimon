import React from 'react';
import './SkillsWindow.css';

const SkillsWindow = props => {

    const displayPage = () => {
        return (
            <div >
                <ul>
                    {props.obj.map((item, index) => <li key={index.toString()} className='li-work-experience'>{item}</li>)}
                </ul>
            </div>
        )
    }



    return (
        <div className='div-work-skills-window'>
            {displayPage()}
        </div>
    );
};



export default SkillsWindow;