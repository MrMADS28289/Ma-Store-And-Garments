import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='parent'>
            <p id="error">E<span>r</span>ror</p>
            <p id="code">4<span>0</span><span>4</span></p>
            <p className='text-lg' id="code"><span>Page </span>Not <span>Found</span> !</p>
            {/* <p>Page Not Found !</p> */}
            <button onClick={() => navigate('/')} className='text-white w-2/5 text-sm bg-[#23A455] p-1 rounded-full '>Go to Home</button>
        </div>
    );
};

export default NotFound;