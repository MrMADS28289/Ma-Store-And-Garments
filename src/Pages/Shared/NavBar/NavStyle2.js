import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const NavStyle2 = () => {
    return (
        <div className='bg-[#d63384] w-[100%] py-2 hidden md:block'>
            <Container className='flex justify-between'>
                <div className='text-white flex'>
                    <div className='border-r-2 mr-1 pr-1 flex'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg> Free Delivery</div>
                    <div className='border-r-2 mr-1 pr-1 flex text-sm'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> Return Policy</div>
                    <div className='mr-1 pr-1'>Follow Us
                        <SocialIcon title='facebook' style={{ height: '18px', }} url='facebook.com' />
                        <SocialIcon title='twitter' style={{ height: '18px', }} url='twitter.com' />
                        <SocialIcon title='instagram' style={{ height: '18px', }} url='instagram.com' />
                        <SocialIcon title='telegram' style={{ height: '18px', }} url='telegram.com' />
                    </div>
                </div>
                <div>
                    <Link to='/' className='text-decoration-none text-white hover:text-orange-500' >Login</Link>
                </div>
            </Container>
        </div>
    );
};

export default NavStyle2;