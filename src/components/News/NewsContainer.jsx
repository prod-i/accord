import React from 'react';
import './NewsC.css';
import building from '../../assets/all/building.png';


const NewsContainer = (props) => {
    return (
        <div className='News'>
            <div className="container">
                <div className="descr">
                    <span className='descr__text'>was in development</span>
                    <img className='building' src={building}/>
                </div>
            </div>
        </div>
    );
}

export default NewsContainer;