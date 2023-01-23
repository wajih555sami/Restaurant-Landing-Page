import React from 'react';

import logo from '../assets/img/logo.svg';
import search from '../assets/img/search.svg';

const Navbar = () => {
  return (
    <nav className='main-nav'>
        <a href='#home_sec' className='logo'>
            <img src={logo} alt='logo'/>
        </a>
        <div className='collapse'>
            <ul>
                <li><a href='#home_sec' className='link'>Home</a></li>
                <li><a href='#about_sec' className='link'>About Us</a></li>
                <li><a href='#special_sec' className='link'>Special</a></li>
                <li><a href='#menu_sec' className='link'>Menu</a></li>
                <li><a href='#blogs_sec' className='link'>Blogs</a></li>
            </ul>
            <div className='d-flex flex-column flex-lg-row align-items-center justify-content-center'>
                <button className='search-icon d-inline-block'>
                    <img src={search} alt='icon search' className='img-fluid' />
                </button>
                <a href='##' className='btn btn-book'><span>Book Now</span></a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar