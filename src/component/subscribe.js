import React from 'react';

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className='container d-flex justify-content-between'>
                <div className='left'>
                    <h3>Subscribe Our Newsletter</h3>
                    <p>Stay in touch with us to get latest news. We are here to fit the needs of your electrical services for your dream building.</p>
                </div>
                <div className='right w-50 d-flex justify-content-center align-items-center'>
                    <div className='subscribe-submit'>
                        <input type="text" placeholder='Enter your email address' className='email-input'/>
                        <button>subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;
