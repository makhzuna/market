import React from 'react';
import { Button } from 'bootstrap';

const footer = () => {
    return (
        <>
            <div className="footer w-100">
                <p className='col-3'>logo</p>
                <div className='d-flex'>
                    <div className='footer-item'>
                        <ul>
                            <li>работа</li>
                            <li>входной</li>
                        </ul>
                    </div>
                    <div className='footer-item'>
                        <ul>
                            <h5>Соц. сети</h5>
                            <li>instagram</li>
                            <li>telegram</li>
                            <li>WhatsApp</li>
                            <li>WK</li>
                        </ul>
                    </div>
                    <div className='footer-item'>
                        <ul>
                            <h5>adress</h5>
                            <li>instagram</li>
                            <li>telegram</li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
};

export default footer;