import React from 'react';
import './DetailBlockWindow.css';
import { connect } from 'react-redux';
import { CloseBodyPage } from '../../../actions/bodyAction';


const DetailBlockWindow = props => {
    return (
        <div className='div-detail-block-window'>
            <div onClick={() => props.CloseBodyPage()} className="div-detail-block-x">🞭</div>
           
            <div className='div-img-detail-block-window'>
                <img src={props.obj.image} />
            </div>
            {props.obj.detailArr.map((item, index) => <p key={index.toString()} className='p-detail-block-window'>{item}</p>)}
        </div>
    );
};


const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { CloseBodyPage })(DetailBlockWindow);