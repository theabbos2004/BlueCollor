import React from 'react';
import Img from "../img/img/IMAGE1.png"
import AppLog from "../img/icon/IMAGE1.svg"
import Commercial from '../img/icon/IMAGECommercial.svg';
import Residential from '../img/icon/IMAGEhome.svg';
import Industrial from '../img/icon/IMAGEIndustrial.svg';
const MainServices = () => {
    return (
        <div className='main-services'>
            <div className='container d-flex justify-content-center align-items-center flex-column h-100'>
                <div className='header w-50 d-flex align-items-center justify-content-evenly flex-column'>
                    <p className='shadow align-self-center'>
                        <img src={AppLog} className="me-2"/> What We Offer
                    </p>
                    <h1 className='title mb-0'>Professional Main Services</h1>
                    <p style={{color:"#1C2752"}} className="text-center main">
                    We have extensive experience of domestic and business electrical installations and no job is too small. Our customers value our professionalism, work ethic and our competitive prices.
                    </p>
                    <div className='buttons w-100 d-flex justify-content-evenly align-items-center m-4'>
                        <button className='active'>
                            <img src={Commercial} style={{width:'26px'}}/>  Commercial
                        </button>
                        <button>
                            <img src={Residential} alt="img" className='me-2'/>
                            Residential
                        </button>
                        <button>
                            <img src={Industrial} alt="Industrial" className='me-2' />
                            Industrial
                        </button>
                    </div>
                </div>
                <div className='body w-100'>
                    <div className='body-card d-flex'>
                        <div className='left d-flex justify-content-evenly align-items-start flex-column'>
                            <p className='shadow p-1'>
                                <img src={Commercial} style={{width:"20px"}} className="me-2"/>Electrical installation
                            </p>
                            <h2 className='title'>Commercial</h2>
                            <p className='main'>Electrical & Maintenance Services Ltd offers a full range of electrical services to suit your needs – from moving a light switch to complete house rewires.</p>
                            <p className='main'>In addition to providing fully qualified, competent electricians in and around London, the company also runs an electrical wholesale shop.</p>
                            <button className='read-more-btn'>Read More</button>
                        </div>
                        <div className='right d-flex justify-content-center align-items-center'>
                            <img src={Img} alt="img" className='w-100 h-100'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainServices;
