import React from 'react';
import './transition.css';

export const Transition = ({ title }) => {
    return (
        <div className='transition'>
            <p className='transition__text'>{ title }</p>
        </div>
    )
}
