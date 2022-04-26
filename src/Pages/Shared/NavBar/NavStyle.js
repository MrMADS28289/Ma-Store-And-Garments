import React from 'react';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo2.png';

const NavStyle = () => {
    return (
        <Container className='hidden md:block'>
            <div className='flex py-3 justify-between'>
                <div className='flex px-1'>
                    <img className='h-[20px]' src={logo} alt="" />
                    <h5 className=' ms-1 text-pink-400'>Ma <span className='text-sky-400'>Store</span>.</h5>
                </div>
                <div className="w-2/4 bg-white border-2 rounded-pill hidden md:block">
                    <InputGroup style={{ borderRadius: '50%' }} >
                        <FormControl
                            className='b rounded-pill border-0'
                            placeholder="Find your product"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button
                            className='bg-info text-white border-0 rounded-pill'
                            variant="outline-secondary" id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>
                </div>
                <div className='flex'>
                    <Link title='Wish List' to='/wishlist' className='relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-900 me-2 hover:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <p className='bg-[#5c93d2] text-white h-[15px] w-[15px] rounded-full flex justify-center items-center absolute top-0 ml-4  text-xs'>0</p>
                    </Link>
                    <Link title='Shopping Cart' to='/cart' className='relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-900 me-3 hover:text-rose-400 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <p className='bg-[#d25cca] text-white h-[15px] w-[15px] rounded-full flex justify-center items-center absolute top-0 ml-4  text-xs'>0</p>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default NavStyle;