import React from 'react';
import './WorkExperienceWindow.css';

const WorkExperienceWindow = props => {

    const displayPage = () => {
        return (
            <div >
                <div>
                    <h4 className='white-diameter-around-the-circle'>{props.obj.companyName}</h4>
                </div>
                <ul>
                    {props.obj.roleCompany.map((item, index) => <li key={index.toString()} className='li-work-experience'>{item}</li>)}
                </ul>
            </div>
        )
    }



    return (
        <div className='div-work-experience-window'>
            {displayPage()}
        </div>
    );
};



export default WorkExperienceWindow;