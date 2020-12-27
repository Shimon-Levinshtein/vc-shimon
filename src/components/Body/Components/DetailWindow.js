import React from 'react';
import './DetailWindow.css';
import { ChangeBodyPage } from '../../../actions/bodyAction';
import { connect } from 'react-redux';



const DetailWindow = props => {

    const hendletButtons = key => {
        if (props.obj.specification.length > 0) {
            return <button onClick={() => dsplayDetailBlockWindow(key)}>Details</button>;
        }
    };

    const dsplayDetailBlockWindow = id => {
        props.ChangeBodyPage(id);
    };



    return (
        <div className='div-detail-window'>
            <h4>{props.obj.title}</h4>
            <div className='div-detail-window-buttons'>
                {hendletButtons(props.id)}
                <button>Projects</button>
            </div>
        </div>
    );
};



const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { ChangeBodyPage })(DetailWindow);