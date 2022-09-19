import React from 'react';

const Navbor = () => {
    return (
        <div className='navbor container position-sticky sticky-top'>
            <nav className='d-flex justify-content-between p-1'>
                <ul className='list-unstyled d-flex align-items-center'>
                    <li>
                        <a href="#" className='active'>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            About us
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Pages
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Contact us
                        </a>
                    </li>
                </ul>
                <button>
                    Have Any Questions?
                </button>
            </nav>
        </div>
    );
}

export default Navbor;
