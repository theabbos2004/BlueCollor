import React from 'react';
import {BsFacebook,BsPinterest,BsTwitter,BsInstagram} from "react-icons/bs"
const Opening = () => {
    return (
        <div className='opening d-flex align-items-center'>
            <div className='container'>
                <div className='col d-flex justify-content-between align-items-center'>
                    <div className='fs-6'>
                        Opening Hours: 06:00 to 20:00
                    </div>
                    <ul className="d-flex list-unstyled align-items-center">
                        <li>
                            <a href='#' className='text-dark'>
                                <BsFacebook />
                            </a>
                        </li>
                        <li>
                            <a href='#' className='text-dark'>
                                <BsTwitter />
                            </a>
                        </li>
                        <li>
                            <a href='#' className='text-dark'>
                                <BsPinterest />
                            </a>
                        </li>
                        <li>
                            <a href='#' className='text-dark'>
                                <BsInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Opening;
