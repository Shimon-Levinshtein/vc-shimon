import React from 'react';
import './ProjectsWindow.css';
import { connect } from 'react-redux';
import { CloseBodyPage } from '../../../actions/bodyAction';


const ProjectsWindow = props => {

    const projectBoxHendler = (item, index) => {
        return (
            <div className='div-project-box-hendler' style={{ backgroundImage: `url(${item.imgUrl})` }}>
                <div className='div-project-box-hendler-h3'>
                    <h3>{item.name}</h3>
                </div>
                <div className='div-project-box-hendler-buttons'>
                    {hendlerButtonsProject(item)}
                    {hendlerButtonsGithub(item)}
                </div>
            </div>

        )
    };

    const hendlerButtonsProject = item => {
        if (item.linkProject) {
            return (
                <a href={item.linkProject} target='blank'>
                    <button>link to Prodect</button>
                </a>
            );
        }

    };
    const hendlerButtonsGithub = item => {
        if (item.linkGithub) {
            return (
                <a href={item.linkGithub} target='blank'>
                    <button>Link to git</button>
                </a>
            );
        }

    };
    return (
        <div className='div-project-window'>
            <div onClick={() => props.CloseBodyPage()} className="div-project-x">🞭</div>

            <div className='div-img-project-window'>
                <img src={props.obj.image} />
            </div>
            <div className='div-projects-boxs'>
                {props.obj.projactObj.map((item, index) => projectBoxHendler(item, index))}
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { CloseBodyPage })(ProjectsWindow);