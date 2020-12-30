import React from 'react';
import './DetailWindow.css';
import { ChangeBodyPageToDetails, ChangeBodyPageToProject } from '../../../actions/bodyAction';
import { connect } from 'react-redux';



const DetailWindow = props => {


    const dsplayDetailBlockWindow = id => {
        if (props.obj.specification.length > 0) {
            return <button onClick={() => props.ChangeBodyPageToDetails(id)}>Details</button>;
        }
    };

    const dsplayProjectBlockWindow = id => {
        if (props.obj.projects.length > 0) {
            return <button onClick={() => props.ChangeBodyPageToProject(id)}>Projects</button>;
        }
    };



    return (
        <div className='div-detail-window'>
            <h4>{props.obj.title}</h4>
            <div className='div-detail-window-buttons'>
                {dsplayDetailBlockWindow(props.id)}
                {dsplayProjectBlockWindow(props.id)}
            </div>
        </div>
    );
};



const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { ChangeBodyPageToDetails, ChangeBodyPageToProject })(DetailWindow);