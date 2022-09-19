import React from 'react';
import Img from "../img/img/IMAGE1.jpg"
import note from "../img/icon/IMAGEnote.svg"
import checked from "../img/icon/IMAGEchecked1.svg"
const ChooseUS = () => {
    return (
        <div className='choose-us'>
            <div className='container d-flex h-100 w-100'>
                <div className='header w-50  h-100 left d-flex justify-content-center align-items-center flex-column ' style={{ backgroundImage: `url(${Img})`}}>
                    <ul className='card px-5 w-75'>
                        <li className='d-flex'>
                            <div className='w-25 count d-flex justify-content-center align-items-center text-dark'>
                                3956
                            </div>
                            <div className='w-75 title d-flex justify-content-start align-items-center'>
                                Project Done
                            </div>
                        </li>
                        <li className='d-flex'>
                            <div className='w-25 count d-flex justify-content-center align-items-center text-dark'>
                                854
                            </div>
                            <div className='w-75 title d-flex justify-content-start align-items-center'>
                                People Working
                            </div>
                        </li>
                        <li className='d-flex'>
                            <div className='w-25 count d-flex justify-content-center align-items-center text-dark'>
                                265
                            </div>
                            <div className='w-75 title d-flex justify-content-start align-items-center'>
                                Business Partners
                            </div>
                        </li>
                        <li className='d-flex'>
                            <div className='w-25 count d-flex justify-content-center align-items-center text-dark'>
                                845
                            </div>
                            <div className='w-75 title d-flex justify-content-start align-items-center'>
                                Happy Customers
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='body w-50 ms-3 right d-flex justify-content-center flex-column'>
                    <p className='mt-4 shadow align-self-start'>
                        <img src={note} alt="img" className='me-2' style={{width:"15px"}}/>
                         Why Choose Us</p>
                    <h1 className='mt-4 title'>Few Reasons Why You Should Choose Us</h1>
                    <p className="mt-4 text-secondary main">
                        We are offering the following information's about us that what we actually do in the electrical sector. To Improve our customers’ lives by providing creative and cost-effective solutions to their needs.
                    </p>
                    <ul className='list-unstyled'>
                        <li className='d-flex'>
                            <div className='me-2'>
                                <img src={checked} alt="" style={{width:"20px"}}/>
                            </div>
                            <div>
                                <div>35 Years Experience</div>
                                <div className='text-secondary'>Effective communication is the key to success for any business. From our office staff, to our field.</div>
                            </div>
                        </li>
                        <li className='d-flex'>
                            <div className='me-2'>
                                <img src={checked} alt="" style={{width:"20px"}}/>
                            </div>
                            <div>
                                <div></div>
                                <div>Excellence Certificate</div>
                                <div>We understand fully that your time is of extreme value. We are committed to meeting deadlines.</div>
                            </div>
                        </li>
                        <li className='d-flex'>
                            <div className='me-2'>
                                <img src={checked} alt="" style={{width:"20px"}}/>
                            </div>
                            <div>
                                <div></div>
                                <div>Affordable Price</div>
                                <div>We adhere strictly to the current National Electrical Code, and we conduct regular in-house sessions.</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ChooseUS;
