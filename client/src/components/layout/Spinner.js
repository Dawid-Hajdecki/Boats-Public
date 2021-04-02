import React from 'react';
import spinner from '../assets/spinner.png';
import '../css/spinner.css';

const Spinner = () => (
    
    <div>
        <img 
            src={spinner}
            className="spinner"
            alt='Loading...'
        />
    </div>
);

export default Spinner;