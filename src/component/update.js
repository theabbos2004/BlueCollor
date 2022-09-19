import React from 'react';
import Img from "../img/img/IMAGE8.jpg"
import Img1 from "../img/img/IMAGE9.jpg"
import note from "../img/icon/IMAGEnote.svg"
import profile from "../img/icon/IMAGEprofile.svg"
import clock from "../img/icon/IMAGEclock.svg"
import next from "../img/icon/Vectornext.svg"
const Update = () => {
    return (
        <div className='update'>
            <div className='container d-flex flex-column align-items-center'>
                <div className='shadow px-3 d-flex align-items-center justify-content-center'>
                    <img src={note} alt="img" className='' style={{width:"16px"}}/>
                    Stay Updated</div>
                <h4 className='title my-3'>Latest News & Articles</h4>
                <div className='d-flex worker-sector'>
                    <div className='p-2 w-50'>
                        <img src={Img} alt="img" className='w-100' />
                        <div className='worker-info d-flex align-items-center m-auto'>
                            <div className='d-flex p-1 w-50 d-flex justify-content-center'> <p className='me-2'>
                                <img src={profile} alt="img" style={{width:"14px"}} />
                                </p> Alex Louis</div>
                            <div className='d-flex p-1 w-50 d-flex justify-content-center'> <p className='me-2'>
                                <img src={clock} alt="img" style={{width:"14px"}} />
                                </p> April 16, 2022</div>
                        </div>
                        <h5 className='theme'>How Outside Lighting can Transform Your Summer Garden</h5>
                        <div className='my-3 main text-secondary'>Capitalize on low-hanging fruit to identify a ballpark value added matrix economically activity to beta test override the multiple touchpoints for offshoring the digital divide with DevOps.</div>
                        <button>View More 
                            <img src={next} alt="img" className='ms-2' style={{width:"8px"}}/>
                        </button>
                    </div>
                    <div className='p-2 w-50'>
                        <img src={Img1} alt="img" className='w-100' />
                        <div className='worker-info d-flex align-items-center m-auto'>
                            <div className='d-flex p-1 w-50 d-flex justify-content-center'> <p className='me-2'>
                                <img src={profile} alt="img" style={{width:"14px"}} />
                                </p> John Christin</div>
                            <div className='d-flex p-1 w-50 d-flex justify-content-center'> <p className='me-2'>
                                <img src={clock} alt="img" style={{width:"14px"}} />
                                </p> April 16, 2022</div>
                        </div>
                        <h5 className='theme'>Easy Energy Saving Solutions for Industrial Businesses</h5>
                        <div className='my-3 main text-secondary'>Strategies on low-hanging fruit to identify a ballpark value added activity matrix economically to beta test override multiple touchpoints for offshoring the digital divide with DevOps.</div>
                        <button>View More 
                            <img src={next} alt="img" className='ms-2' style={{width:"8px"}}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Update;
