import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Info from './Info';
import UserSelection from './UserSelection';

function Card() {
    return (
        <div className='app'>
            <div className='container'>
                <Info />
            </div>
            <div className='user-selection'>
                <UserSelection />
            </div>
        </div>
    )
}

ReactDOM.render(
    <Card />,
    document.getElementById('root')
);