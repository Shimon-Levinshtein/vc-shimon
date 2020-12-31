import React from 'react';
import DetailWindow from './Components/DetailWindow';
import './Body.css';
import { programmingLanguagesArr } from './specification/programmingLanguages';
import { workExperience } from './specification/workExperience';
import { connect } from 'react-redux';
import DetailBlockWindow from './Components/DetailBlockWindow';
import ProjectsWindow from './Components/ProjectsWindow';
import WorkExperienceWindow from './Components/WorkExperienceWindow';



const Body = props => {

    const displayBody = () => {

        if (props.bodyScreenActivation.bodyType === 'details') {
            return <DetailBlockWindow obj={props.bodyScreenActivation} />
        } else if (props.bodyScreenActivation.bodyType === 'projects') {
            return <ProjectsWindow obj={props.bodyScreenActivation} />
        }
        return (
            <div className='bady-page'>
                <div className='flex-center'>
                    <h3 className='white-diameter-around-the-circle'>PROFESSIONAL EXPERIENCE</h3>
                </div>
                {programmingLanguagesArr.map((item, i) => (
                    <DetailWindow key={i} obj={item} id={i} />
                ))}
                <div className='div-display-work-experience'>
                    {workExperiencePage()}
                </div>
            </div>
        );
    };

    const workExperiencePage = () => {
        return (
            <div className='dive-bady-work-experience'>
                <div className='flex-center'>
                    <h3 className='white-diameter-around-the-circle'>WORK EXPERIENCE</h3>
                </div>
                {workExperience.map((item, i) => (
                    <WorkExperienceWindow key={i} obj={item} id={i} />
                ))}
            </div>
        )
    };

    return (

        <div className='div-body'>
            {displayBody()}
        </div>
    );
};

const mapStateToProps = state => {
    return { bodyScreenActivation: state.bodyReducer }
}

export default connect(mapStateToProps, {})(Body);