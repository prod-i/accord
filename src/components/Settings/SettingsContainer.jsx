import React from 'react';
import './SettingsC.css';
import building from '../../assets/all/building.png';


const SettingsContainer = (props) => {
    return (
        <div className='Settings'>
            <div className="container">
                <div className="descr">
                    <span className='descr__text'>was in development</span>
                    <img className='building' src={building}/>
                </div>
            </div>
        </div>
    );
}

export default SettingsContainer;