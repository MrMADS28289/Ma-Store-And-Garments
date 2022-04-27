import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Header.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../Images/banner/banner1.jpg';
import img2 from '../../../Images/banner/banner2.jpg';
import img3 from '../../../Images/banner/banner3.jpg';
import img4 from '../../../Images/banner/banner4.jpg';
import img5 from '../../../Images/banner/banner5.jpg';
import img6 from '../../../Images/banner/banner6.jpg';

const Header = () => {

    return (
        <header>
            <Carousel infiniteLoop={true} showArrows={true} dynamicHeight={false} showThumbs={false} >
                <div>
                    <img className='h-[48vw]' src={img1} alt='' />
                    <p className="legend">
                        <div className='anim-parent'>
                            <p id="error">Your <span>Dayly</span> Needs</p>
                            <p style={{ fontSize: '10px', margin: '4px', color: '#b2c7d9', textShadow: '2px 2px black' }}>At the heart of great products.</p>
                            <p id="code">Since <span>20</span><span>20</span></p>
                            <p style={{ fontSize: '10px', margin: '4px', color: '#b2c7d9' }}>The independent store with traditional values.</p>
                            <button className='bg-[#d63384] text-white py-1 px-4 mt-2 rounded-full'>Go to shop</button>
                        </div>
                    </p>
                </div>
                <div>
                    <img className='h-[48vw]' src={img2} alt='' />
                    <p className="legend">
                        <div className='anim-parent'>
                            <p id="error">Your <span>Dayly</span> Needs</p>
                            <p style={{ fontSize: '10px', margin: '4px', color: '#b2c7d9', textShadow: '2px 2px black' }}>At the heart of great products.</p>
                            <p id="code">Since <span>20</span><span>20</span></p>
                            <p style={{ fontSize: '10px', margin: '4px', color: '#b2c7d9' }}>The independent store with traditional values.</p>
                            <button className='bg-[#d63384] text-white py-1 px-4 mt-2 rounded-full'>Go to shop</button>
                        </div>
                    </p>
                </div>
                <div>
                    <img className='h-[48vw]' src={img3} alt='' />
                    <p className="legend">
                        <div className='anim-parent'>
                            <p id="error">Your <span>Dayly</span> Needs</p>
                            <p style={{ fontSize: '10px', margin: '4px', color: '#b2c7d9', textShadow: '2px 2px black' }}>At the heart of great products.</p>
                            <p id="code">Since <span>20</span><span>20</span></p>
                            <p style={{ fontSize: '10px', margin: '4px', color: '#b2c7d9' }}>The independent store with traditional values.</p>
                            <button className='bg-[#d63384] text-white py-1 px-4 mt-2 rounded-full'>Go to shop</button>
                        </div>
                    </p>
                </div>
                <div>
                    <img className='h-[48vw]' src={img4} alt='' />
                    <p className="legend">
                        <div className='anim-parent'>
                            <p id="error">Your <span>Dayly</span> Needs</p>
                            <p style={{ fontSize: '10px', margin: '4px', color: '#b2c7d9', textShadow: '2px 2px black' }}>At the heart of great products.</p>
                            <p id="code">Since <span>20</span><span>20</span></p>
                            <p style={{ fontSize: '10px', margin: '4px', color: '#b2c7d9' }}>The independent store with traditional values.</p>
                            <button className='bg-[#d63384] text-white py-1 px-4 mt-2 rounded-full'>Go to shop</button>
                        </div>
                    </p>
                </div>
                <div>
                    <img className='h-[48vw]' src={img5} alt='' />
                    <p className="legend">
                        <div className='anim-parent'>
                            <p id="error">Your <span>Dayly</span> Needs</p>
                            <p style={{ fontSize: '10px', margin: '4px', color: '#b2c7d9', textShadow: '2px 2px black' }}>At the heart of great products.</p>
                            <p id="code">Since <span>20</span><span>20</span></p>
                            <p style={{ fontSize: '10px', margin: '4px', color: '#b2c7d9' }}>The independent store with traditional values.</p>
                            <button className='bg-[#d63384] text-white py-1 px-4 mt-2 rounded-full'>Go to shop</button>
                        </div>
                    </p>
                </div>
                <div>
                    <img className='h-[48vw]' src={img6} alt='' />
                    <p className="legend">
                        <div className='anim-parent'>
                            <p id="error">Your <span>Dayly</span> Needs</p>
                            <p style={{ fontSize: '10px', margin: '4px', color: '#b2c7d9', textShadow: '2px 2px black' }}>At the heart of great products.</p>
                            <p id="code">Since <span>20</span><span>20</span></p>
                            <p style={{ fontSize: '10px', margin: '4px', color: '#b2c7d9' }}>The independent store with traditional values.</p>
                            <button className='bg-[#d63384] text-white py-1 px-4 mt-2 rounded-full'>Go to shop</button>
                        </div>
                    </p>
                </div>
            </Carousel>
        </header>
    );
};

export default Header;