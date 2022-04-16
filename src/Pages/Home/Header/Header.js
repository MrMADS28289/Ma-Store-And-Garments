import React from 'react';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import backgroundImage from '../../../Images/background.png';
import logo from '../../../Images/logo2.png';

const Header = () => {

    const style = {
        background: `linear-gradient( rgba(0, 0, 0, 0.8) 100%, rgba(0, 0, 0, 0.1)100%),url(${backgroundImage})`,
        height: '500px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
    }

    return (
        <header style={style} className='d-flex align-items-center'>
            <Container
                className='d-flex flex-column align-items-center p-4 rounded-3'>
                <img src={logo} alt="" />
                <h1 style={{ color: '#b2c7d9', textShadow: '2px 2px black' }}>At the heart of great products.</h1>
                <h3 style={{ color: '#f084ec', textShadow: '2px 2px black' }}> Since 2020.</h3>
                <h5 style={{ color: '#b2c7d9' }}>The independent store with traditional values.</h5>
                <div className="w-75 bg-white rounded-pill">
                    <InputGroup style={{ borderRadius: '50%' }} >
                        <FormControl
                            className='b rounded-pill border-0'
                            placeholder="Search your product"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button
                            className='bg-danger text-white border-0 rounded-pill'
                            variant="outline-secondary" id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>
                </div>
            </Container>
        </header>
    );
};

export default Header;