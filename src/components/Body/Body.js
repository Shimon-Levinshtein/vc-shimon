import React from 'react';
import DetailWindow from './Components/DetailWindow';
import './Body.css';
import { programmingLanguagesArr } from './specification/programmingLanguages';
import { skills } from './specification/skills';
import { workExperience } from './specification/workExperience';
import { connect } from 'react-redux';
import DetailBlockWindow from './Components/DetailBlockWindow';
import ProjectsWindow from './Components/ProjectsWindow';
import WorkExperienceWindow from './Components/WorkExperienceWindow';
import SkillsWindow from './Components/SkillsWindow';



const Body = props => {

    const displayBody = () => {

        if (props.bodyScreenActivation.bodyType === 'details') {
            return <DetailBlockWindow obj={props.bodyScreenActivation} />
        } else if (props.bodyScreenActivation.bodyType === 'projects') {
            return <ProjectsWindow obj={props.bodyScreenActivation} />
        }
        return (
            <div className='bady-page'>
                <div className='bady-Education-top'>
                    <div className='flex-center'>
                        <h3 className='white-diameter-around-the-circle'>Education</h3>
                    </div>
                    <div className='div-RavTech-box'>
                        <div className='flex-center'>
                            <h5 className='white-diameter-around-the-circle'>2018 - 2020: Comprehensive Full Stack Developer course, certificate from RavTech</h5>
                        </div>
                        <a href='https://ravtech.co.il/' target='blank'>
                            <button>Link to the RavTech</button>
                        </a>
                    </div>
                </div>
                <div className='flex-center'>
                    <h3 className='white-diameter-around-the-circle'>PROFESSIONAL EXPERIENCE</h3>
                </div>
                {programmingLanguagesArr.map((item, i) => (
                    <DetailWindow key={i} obj={item} id={i} />
                ))}
                <div className='div-display-work-experience'>
                    {workExperiencePage()}
                    {skillsPage()}
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

    const skillsPage = () => {
        return (
            <div className='dive-bady-skills'>
                <div className='flex-center'>
                    <h3 className='white-diameter-around-the-circle'>Skills</h3>
                </div>
                <SkillsWindow obj={skills} />
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