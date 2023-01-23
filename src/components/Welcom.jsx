import React from 'react';

import Navbar from './Navbar';

const Welcom = () => {
  return (
    <header className='header-sec' id='home_sec'>
        <Navbar />
        <div className='content'>
            <h1>Welcome To<br/> Golden View Dine</h1>
            <p>Explore the authentic vegan dishes with your friends and family</p>
            <a href='#' className='btn btn-full mt-4'>Read More</a>
        </div>
    </header>
  )
}

export default Welcom