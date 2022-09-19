import React from 'react';
import Img from "../img/img/IMAGE7.jpg"
import note from "../img/icon/IMAGEnote.svg"
import quotes from "../img/icon/Vectorquotes.svg"
import prev from "../img/icon/Vectorprev.svg"
import next from "../img/icon/Vectornext.svg"
import phone from "../img/icon/IMAGEphone.svg"
import bride from "../img/icon/IMAGEbridge.svg"
import building from "../img/icon/IMAGEbuilding.svg"
import Construction from "../img/icon/IMAGEconstruction.svg"
import company from "../img/icon/IMAGEcpmpany.svg"
const Customer = () => {
    return (
        <div className='customer pt-5 pb-5'>
            <div className='container d-flex flex-column h-100'>
                <div className='network w-100  d-flex flex-row '>
                    <div className='testimonial w-50 pe-4 d-flex flex-column'>
                        <p className='my-2 shadow align-self-start px-3'>
                            <img src={note} alt="note" style={{width:"15px"}} className="me-2"/>
                            testimonial</p>
                        <h1 className='my-2 title'>Customers Says</h1>
                        <div className='my-2 p-4 card  d-flex flex-column'>
                            <div className='header d-flex flex-row justify-content-between align-items-center '>
                               <div className='d-flex flex-row'>
                                    <img src={Img} alt="Img" className='me-2'/>
                                    <div className='identify'>
                                        <p>Nancy luther</p>
                                        <p className='text-secondary'>NewYork</p>
                                    </div>
                               </div>
                                <div className='icon-circle  d-flex justify-content-center align-items-center '>
                                    <img src={quotes} alt="img" style={{width:"20px"}} />
                                </div>
                            </div>
                            <hr/>
                            <div className='body text-secondary'>
                            We have had several good experiences with <b>Blue Collar</b> team. Most recently, they replaced our 20-year-old HVAC system with a new,<b> modern, and more efficient</b> system & it worked fine. 
                            </div>
                            <div className='footer mt-3'>
                                <div className='buttons d-flex justify-content-start align-items-center'>
                                    <button className='me-3 d-flex justify-content-center align-items-center'>
                                        <img src={prev} style={{width:"10px"}}/>
                                    </button>
                                    <button className='d-flex justify-content-center align-items-center'>
                                        <img src={next} style={{width:"10px"}}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='questions-card p-4 d-flex flex-column '>
                            <p className='mt-2 shadow align-self-start px-3'>
                                <img src={note} alt="note" style={{width:"15px"}} className="me-2"/>    
                                Any Questions
                            </p>
                            <p className='mt-2 title '>
                            99.9% Customer Satisfaction Based
                            </p>
                            <p className='mt-2 main'>If you have any questions or need help contact with our team, or call</p>
                            <div className='mt-2 d-flex phone'>
                                <button className='icon d-flex align-items-center justify-content-center me-4'>
                                    <img src={phone} style={{width:"20px"}}/>
                                </button>
                                <div className='phone-number d-flex align-items-center justify-content-center fs-4 text-white'>(003) 123 456 7890</div>
                            </div>
                        </div>
                    </div>
                    <div className='meet w-50 ps-4 d-flex flex-column'>
                        <p className='my-2 shadow align-self-start px-3'>
                            <img src={note} alt="note" style={{width:"15px"}} className="me-2"/>
                            Meet Us
                        </p>
                        <h1 className='my-2 title'>Appointment Form</h1>
                        <div className='my-2 form'>
                            <input type="text" placeholder='Your name' className='my-3 form-control'/>
                            <input type="email" placeholder='Your email' className='my-3 form-control'/>
                            <input type="number" placeholder='Phone number' className='my-3 form-control'/>
                            <input type="data" placeholder='Date' className='my-3 form-control'/>
                            <input type="area" placeholder='Save description' className='my-3 form-control'/>
                            <button className='my-3 w-100 '>Submit</button>
                        </div>
                    </div>
                </div>
                <div className='client w-100 d-flex flex-column align-items-center justify-content-center'>
                    <p className='shadow my-2 px-3 d-flex align-items-center justify-content-center'>
                        <img src={note} style={{width:"16px"}} className="me-2"/>
                        clients</p>
                    <h1 className='title my-2'>Our Trusted Big Clients!</h1>
                    <div className='w-100 icons my-4 list-unstyled d-flex align-items-center justify-content-evenly'>
                        <div className='icon'>
                            <img src={bride} alt="img"/>
                        </div>
                        <div className='icon'>
                            <img src={building} alt="img" className=''/>
                        </div>
                        <div className='icon'>
                            <img src={Construction} alt="img" className=''/>
                        </div>
                        <div className='icon'>
                            <img src={company} alt="img" className=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Customer;
