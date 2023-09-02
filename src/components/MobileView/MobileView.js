import React, { useState } from 'react'
import './MobileView.css'
import {CgMenuGridO} from 'react-icons/cg'
import {RiMenuUnfoldFill} from 'react-icons/ri'
import {FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector} from 'react-icons/fc'
import { Link} from 'react-scroll'
import Fade from 'react-reveal/Fade';

const MobileView = () => {

  const [open, setOpen] = useState(false)

  //Handle open
  const handleOpen = () =>{
    setOpen(!open)
  }

   //Handle close
   const handleMenuClose = () =>{
    setOpen(false)
  }


  return (
    <>
        <div className="mobile-nav">
          <Fade top>
            <div className="mobile-nav-header">
              {open ? (<RiMenuUnfoldFill size={30} className='mobile-nav-icon' onClick={handleOpen} />) : (<CgMenuGridO size={30} className='mobile-nav-icon' onClick={handleOpen}/>)}
                <span className='mobile-nav-title'>Portfolio</span>
            </div>
            </Fade>
            {open && (
              <Fade left>
              <div className="mobile-nav-menu">
              <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link"> <Link to="home" spy={true}  smooth={true} offset={-100} duration={100} onClick={handleMenuClose} > <FcHome title='Home'/> Home</Link> </div>
            </div>
            <div className="nav-item">
              <div className="nav-link"> <Link to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClose} > <FcAbout title='About'/> About</Link></div>
            </div>
            <div className="nav-item">
              <div className="nav-link"> <Link to="education" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClose} > <FcReadingEbook title='Education' /> Education</Link></div>
            </div>
            <div className="nav-item">
              <div className="nav-link"> <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClose} > <FcBiotech title='Tech Stack' />Tech Stack</Link></div>
            </div>
            <div className="nav-item">
              <div className="nav-link"> <Link to="project" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClose} > <FcVideoProjector title='Project'/>Projects</Link></div>
            </div>
            <div className="nav-item">
              <div className="nav-link"> <Link to="workexp" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClose} > <FcPortraitMode title='Work Experience' />Work Experience</Link></div>
            </div>
            <div className="nav-item">
              <div className="nav-link"> <Link to="contact" spy={true}  smooth={true} offset={-100} duration={100} onClick={handleMenuClose} > <FcBusinessContact title='Contact' />Contact</Link></div>
            </div>
          </div>
              </div>
              </Fade>
            )}
        </div>
    </>
  )
}

export default MobileView