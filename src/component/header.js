import React,{useState} from 'react';
import { GoMail} from "react-icons/go"
import { BsTelephone} from "react-icons/bs"
import { FiMenu} from "react-icons/fi"
import AppLogo from "../img/img/IMAGEapplogo.png";
const Header = () => {
    const [menuToggle, setmenuToggle] = useState(false);
    const menuBtn = () =>{
        setmenuToggle(!menuToggle)
        menuToggleBtn()
    }
    const menuToggleBtn = () =>{
        menuToggle == true ? document.querySelector(".navbor").style.transform  = "translateX(0%)" : document.querySelector(".navbor").style.transform = "translateX(-101%)";
    }
    return (
        <header className='d-flex align-items-center'>
            <div className='container d-flex justify-content-between align-items-center'>
                <img src={AppLogo} alt="App logo" className='app-logo' />
                <button className='menu' onClick={menuBtn}><FiMenu/></button>
                <ul className='contact list-unstyled d-flex align-items-center'>
                    <li className='d-flex align-items-center me-5'>
                        <div className='circle me-2 d-flex align-items-center justify-content-center'>
                            <GoMail size="20px"/>
                        </div>
                        <div className='contact-title'>
                            <p className='title'>Mail us</p>
                            <p className='email text-secondary'>Info@bluecollar.com</p>
                        </div>
                    </li>
                    <li className='d-flex align-items-center'>
                        <div className='circle me-2 d-flex align-items-center justify-content-center'>
                            <BsTelephone size="20px"/>
                        </div>
                        <div className='contact-title'>
                            <p className='title'>Call us</p>
                            <p className='email text-secondary'>+01 569 896 654</p>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
