import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavStyle2 = () => {
    return (
        <div className='bg-[#d63384] w-[100%] py-2 hidden md:block'>
            <Container className='flex justify-between'>
                <div className='text-white flex'>
                    <div className='border-r-2 mr-1 pr-1'>Free Delivery</div>
                    <div className='border-r-2 mr-1 pr-1'>Return Policy</div>
                    <div className='mr-1 pr-1'>Follow Us</div>
                </div>
                <div>
                    <Link to='/' className='text-decoration-none text-white' >Login</Link>
                </div>
            </Container>
        </div>
    );
};

export default NavStyle2;