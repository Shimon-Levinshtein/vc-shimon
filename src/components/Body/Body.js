import React from 'react';
import DetailWindow from './Components/DetailWindow';
import './Body.css';
import { programmingLanguagesArr } from './specification/programmingLanguages';
import { connect } from 'react-redux';
import DetailBlockWindow from './Components/DetailBlockWindow';



const Body = props => {

    const displayBody = () => {

        if (props.bodyScreenActivation.bodyType === 'detail') {
            return <DetailBlockWindow obj={props.bodyScreenActivation}/>
        }
        return (
            <div className='bady-page'>
                <h3>PROFESSIONAL EXPERIENCE</h3>
                {programmingLanguagesArr.map((item, i) => (
                    <DetailWindow key={i} obj={item} id={i} />
                ))}

            </div>
        );
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