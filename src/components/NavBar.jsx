/* eslint-disable react/prop-types */
import { useState } from 'react'
import '../App.css'

const NavBar = ({ changePage }) => {

  return (
    <>
    {/* Desktop Navigation */}
    <div className='navBarDiv'>
    <button onClick={changePage} value="home" className='navButton'>Home</button>
    <button onClick={changePage} value="about-me" className='navButton'>About Me</button>
    <button onClick={changePage} value="web-dev-portfolio" className='navButton'>Portfolio</button>
    <button onClick={changePage} value="work-experience" className='navButton'>Work Experience</button>
    {/* <button onClick={changePage} value="leadership" className='navButton'>Leadership</button> */}
    {/* <button onClick={changePage} value="hobbies" className='navButton'>Hobbies and Interests</button> */}
    </div>

    {/* Mobile Navigation */}
    
    </>
  );
};

export default NavBar;
