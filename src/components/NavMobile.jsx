import { useState, useRef } from 'react'
import { Squash as Hamburger } from "hamburger-react"
import '../App.css'

const NavMobile = ({changePage}) => {

    const [isOpen, setOpen] = useState(false)

    const handleClick = (value) => {
        changePage(value);
        setOpen(false);
    }

    return (
        <>
        <div className='navContainer'>
            <div className='hamburgerDiv'>
                <Hamburger toggled={isOpen} size={20} toggle={setOpen}/>
                {isOpen ? <div className="hamListDiv">
                    <button onClick={handleClick} value="home" className='navButtonHam'>Home</button>
                    <button onClick={handleClick} value="about-me" className='navButtonHam'>About Me</button>
                    <button onClick={handleClick} value="web-dev-portfolio" className='navButtonHam'>Portfolio</button>
                    <button onClick={handleClick} value="work-experience" className='navButtonHam'>Work Experience</button>
                </div> : ''}
            </div>
        </div>
        </>
    )
};

export default NavMobile;
