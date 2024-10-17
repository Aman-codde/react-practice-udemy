import './index.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return(
        <footer>
            <div className="flex items-center leading-8 my-2p mx-20p">
                <div className='basis-2/4'>
                    <h2 className='py-4 px-0 font-bold text-2xl'>Whitebox Learning</h2>
                    <FontAwesomeIcon className="icon" icon={faFacebookF} />
                    <FontAwesomeIcon className="icon" icon={faYoutube} />
                    <FontAwesomeIcon className="icon" icon={faLinkedin} />
                </div>
                <div className='basis-2/4'>
                    <h2 className='py-4 font-bold text-2xl'>Contact us</h2>
                    <p>6500 Dublin Blvd., Ste.214(B), Dublin, CA,</p>
                    <p>94568</p>
                    <p>+1 900-200-1020</p>
                    <p>info@whitebox-learning.com</p>
                    <p>recruiting@whitebox-learning.com</p> 
                </div>
            </div>
            <div className='bg-neutral-300 text-xl text-center p-5 font-semibold'>
                <p>&copy; 2024 <span className='text-blue-500'>Whitebox Learning,Inc.</span> All rights reserved</p>
            </div>
        </footer> 
    )
}