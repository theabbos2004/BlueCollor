import React from 'react';
import AppLogo from "../img/img/Applogo.png"
import mail from "../img/icon/IMAGEmail.svg"
import phone from "../img/icon/IMAGEphone.svg"
import location from "../img/icon/IMAGElocation.svg"
import Instagram from "../img/icon/IMAGEinstagram.svg"
import Facebook from "../img/icon/IMAGEfacebook.svg"
import Twitter from "../img/icon/IMAGEtwitter.svg"
import Pinterest from "../img/icon/IMAGEpinterest.svg"
const Footer = () => {
    return (
        <footer>
            <div className='container p-5'>
                <ul className='header d-flex list-unstyled justify-content-between w-100'>
                    <li><img src={AppLogo} className="w-100 h-100" /></li>
                    <li className='d-flex align-items-center justify-content-center'>
                        <div className='circle d-flex align-items-center justify-content-center me-2'>
                            <img src={mail}/>
                        </div>
                        <div>
                            <h5>Mail us</h5>
                            <p>Info@bluecollar.com</p>
                        </div>
                    </li>
                    <li className='d-flex align-items-center justify-content-center'>
                        <div className='circle d-flex align-items-center justify-content-center me-2'>
                            <img src={phone} />
                        </div>
                        <div>
                            <h5>Call us</h5>
                            <p>+01 569 896 654</p>
                        </div>
                    </li>
                    <li className='d-flex align-items-center justify-content-center'>
                        <div className='circle d-flex align-items-center justify-content-center me-2'>
                            <img src={location} style={{width:"16px"}} />
                        </div>
                        <div>
                            <h5>Location</h5>
                            <p>Amsterdam, 109-74</p>
                        </div>
                    </li>
                    
                </ul>
                <hr/>
                <div className='row main'>
                    <div className='col-4 left'>
                        <p>We are here to fit the needs of your basic services for your dream building whether its a commercial, residential or industry.</p>
                        <div className='massanger d-flex my-2'>
                            <div className='circle d-flex align-items-center justify-content-center me-2'>
                                <img src={Instagram}/>
                            </div>
                            <div className='circle d-flex align-items-center justify-content-center me-2'>
                                <img src={Facebook}/>
                            </div>
                            <div className='circle d-flex align-items-center justify-content-center me-2'>
                                <img src={Twitter}/>
                            </div>
                            <div className='circle d-flex align-items-center justify-content-center me-2'>
                                <img src={Pinterest}/>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 second d-flex justify-content-evenly'>
                        <ul className='list-unstyled'>
                            <li>Explore</li>
                            <li>About Us</li>
                            <li>Pricing</li>
                            <li>Team</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                        <ul className='list-unstyled'>
                            <li>Quick Links</li>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Service Single</li>
                            <li>Projects</li>
                            <li>Projects Single</li>
                        </ul>
                    </div>
                    <div className='col-4 d-flex flex-column align-items-center'>
                        <ul className='list-unstyled'>
                            <li>Utility Pages</li>
                            <li>Style Guide</li>
                            <li>Changelog</li>
                            <li>Licenses</li>
                            <li>Protected Page</li>
                            <li>404 Page</li>
                        </ul>
                    </div>
                </div>
                <hr/>
            </div>
        </footer>
    );
}

export default Footer;
