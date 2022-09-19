import React from 'react';
import Settings from '../img/icon/IMAGE.svg';

const Intro = () => {
    return (
        <div className='intro'>
            <div className='container d-flex flex-column justify-content-center h-100'>
                <p className='shadow'><img src={Settings} /> Improve our customers lives by providing effective solutions.</p>
                <h1>A Recognized Leader In Services Industry</h1>
                <button>View Services</button>
            </div>
        </div>
    );
}

export default Intro;
