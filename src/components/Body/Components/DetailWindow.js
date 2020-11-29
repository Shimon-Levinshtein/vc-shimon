import React from 'react';
import './DetailWindow.css';
import DetailBlockWindow from './DetailBlockWindow';


const DetailWindow = props => {

    const hendletButtons = () => {
        if (props.obj.specification.length > 0) {
            return <button onClick={() => dsplayDetailBlockWindow()}>Details</button>;
        }
    };

    const dsplayDetailBlockWindow = () => {
        return <DetailBlockWindow />
    };



    return (
        <div className='div-detail-window'>
            <h4>{props.obj.title}</h4>
            <div className='div-detail-window-buttons'>
                {hendletButtons()}
                <button>Projects</button>
            </div>
        </div>
    );
};


export default DetailWindow;