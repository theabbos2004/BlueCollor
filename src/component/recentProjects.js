import React from 'react';
import Img from "../img/img/IMAGE3.jpg"
import Img1 from "../img/img/IMAGE4.jpg"
import Img2 from "../img/img/IMAGE5.jpg"
import Img3 from "../img/img/IMAGE6.jpg"
import note from "../img/icon/IMAGEnote.svg"
const RecentProjects = () => {
    return (
        <div className='resnet-project w-100 d-flex justify-content-center flex-column align-items-center mt-5'>
            <div className='header d-flex justify-content-center flex-column align-items-center'>    
                <p className='my-4 shadow align-self-center'>
                    <img src={note} alt="note" style={{width:"15px"}} className="me-2"/>
                    The Gallery
                </p>
                <h1 className='mb-4 title text-white'>Our Recent Projects</h1>
            </div>
            <div className='cards w-100'>
                <div className='row w-100 d-flex justify-content-evenly'>
                    <div className='col d-flex justify-content-center'>
                        <div className='card'>  
                            <img src={Img} alt="Img" className='w-100 h-75'/>
                            <div className='d-flex justify-content-center flex-column align-items-center h-25'>
                                <p className='title'>
                                Fiber cable change
                                </p>
                                <p className='main text-secondary'>
                                Commercial
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <div className='card'>  
                            <img src={Img1} alt="Img" className='w-100 h-75'/>
                            <div className='d-flex justify-content-center flex-column align-items-center h-25'>
                                <p className='title'>
                                Fiber cable change
                                </p>
                                <p className='main text-secondary'>
                                Commercial
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <div className='card'>  
                            <img src={Img2} alt="Img" className='w-100 h-75'/>
                            <div className='d-flex justify-content-center flex-column align-items-center h-25'>
                                <p className='title'>
                                Fiber cable change
                                </p>
                                <p className='main text-secondary'>
                                Commercial
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col  d-flex justify-content-center'>
                        <div className='card'>  
                            <img src={Img3} alt="Img" className='w-100 h-75'/>
                            <div className='d-flex justify-content-center flex-column align-items-center h-25'>
                                <p className='title'>
                                Fiber cable change
                                </p>
                                <p className='main text-secondary'>
                                Commercial
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecentProjects;
