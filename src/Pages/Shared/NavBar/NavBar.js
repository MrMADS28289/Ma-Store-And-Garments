import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo2.png';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand className='flex font-serif md:hidden' href="#home">
                    <img className='h-[20px]' src={logo} alt="" />
                    <h5 className=' ms-1 text-pink-400'>Ma <span className='text-sky-400'>Store</span>.</h5>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto md:bg-[#0dcaf0] md:p-2">
                        <Nav.Link className='text-black' to="home/#home">Home</Nav.Link>
                        <Nav.Link className='text-black' to="#link">Shop</Nav.Link>
                        <NavDropdown title="Pages" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Cart</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Wish List</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">About Us</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Login/Register</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <div className='flex md:hidden'>
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
                <div className='hidden md:block'>
                    <button className='bg-pink-500 hover:bg-[#dc71f4] text-white p-1 leading-3 px-5 py-2 flex justify-center items-center'>
                        <div>
                            <p className='text-sm leading-none mb-1'>BLACK FRIDAY</p>
                            <p className='text-[12px] leading-none m-0'>Get 45% off!</p>
                        </div>
                    </button>
                </div>
            </Container>
        </Navbar>
    );
};

export default NavBar;