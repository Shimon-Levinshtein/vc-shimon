import React from 'react';
import './WorkExperienceWindow.css';

const WorkExperienceWindow = props => {

    const displayPage = () => {
        return (
            <div >
                <div className='work-experience-company-name-button'>
                    <h4 className='white-diameter-around-the-circle'>{props.obj.yearsWork}: {props.obj.companyName}</h4>
                    <a href={props.obj.linkCompany} target='blank'>
                        <button>Link to the Company</button>
                    </a>
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