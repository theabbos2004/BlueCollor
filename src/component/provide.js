import React from 'react';
import Img from "../img/img/IMAGE.jpg"
import Img1 from "../img/icon/IMAGE1.svg"
const Provide = () => {
    return (
        <div className='BlueCollor mt-6'>
            <div className='container h-100 d-flex align-items-center'>
                <div className='d-flex main'>
                    <div className="left w-50 d-flex align-items-center pe-3">
                        <img src={Img} alt="img" className='w-100'/>
                    </div>
                    <div className='right w-50 d-flex flex-column justify-content-evenly ps-3'>
                        <p className='shadow'>
                            <img src={Img1}/>  
                            <p>Welcome BlueCollar</p>
                        </p>
                        <h1 className='title'>We Provide Your Future</h1>
                        <p className='text-secondary main'>Bluecollar Electrical services was established in 2008. We are trusted and reliable electricians who serve customers in the city as well as throughout United States Of America.</p>
                        <p className='text-secondary main'>We have extensive experience of domestic and business electrical installations and no job is too small. Our customers value our professionalism, work ethic and our competitive prices.</p>
                        <div className='d-flex justify-content-between'>
                            <div className='w-25 box d-flex justify-content-center flex-column'>
                                <h1>35</h1>
                                <p className='text-wrap'>Years Of Experience</p>
                            </div>
                            <div className='info w-75 d-flex justify-content-evenly flex-column ps-5 text-secondary'>
                                <p>- For all your system requirements</p>
                                <p>- All work undertaken by qualified</p>
                                <p>- Experienced office staff on hand</p>
                                <p>- A Full Guarantee On Workmanship</p>
                                <p>- Properties at a reasonable price.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Provide;
