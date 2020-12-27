import React from 'react';
import './DetailBlockWindow.css';
import jpgHeader from '../../../imges/css.jpg';


const DetailBlockWindow = props => {
    return (
        <div className='div-detail-block-window'>
            <div className='div-img-detail-block-window'>
                <img src={props.obj.image}/>
                {/* <img src='https://lh3.googleusercontent.com/pw/ACtC-3cEFtWyEgmiXmotY1UmJYvRItzSPb7hYL5RbkvYHcEB2HRz09Ne2TRuZ14U5qxEZNJfV1oY8IxRdpBs5ijqYv_HtH11sdlBhHwFqPMp6726THO-rdSFAJ0uNDuuKcjaxqbvVanL6Oi9YWjqCd1RsBo=w1946-h1297-no?authuser=0'/> */}
            </div>
           {props.obj.detailArr.map((item, index) => <p key={index.toString()} className='p-detail-block-window'>{item}</p>)}
        </div>
    );
};

export default DetailBlockWindow;