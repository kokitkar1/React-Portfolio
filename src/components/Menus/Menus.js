import React from 'react'
import './Menus.css'
import {FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector} from 'react-icons/fc'
import { Link} from 'react-scroll'


const Menus = ({toggle}) => {
  return (
    <>

    {toggle ? 
    (
      <>
        <div className="navbar-profile-pic">
          <img src="/images/pic3.png" alt="Profile pic" />
        </div>
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link"> <Link to="home" spy={true}  smooth={true} offset={-100} duration={100} > <FcHome title='Home'/> Home</Link> </div>
          </div>
          <div className="nav-item">
            <div className="nav-link"> <Link to="about" spy={true} smooth={true} offset={-100} duration={100} > <FcAbout title='About'/> About</Link></div>
          </div>
          <div className="nav-item">
            <div className="nav-link"> <Link to="education" spy={true} smooth={true} offset={-100} duration={100} > <FcReadingEbook title='Education' /> Education</Link></div>
          </div>
          <div className="nav-item">
            <div className="nav-link"> <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100} > <FcBiotech title='Tech Stack' />Tech Stack</Link></div>
          </div>
          <div className="nav-item">
            <div className="nav-link"> <Link to="project" spy={true} smooth={true} offset={-100} duration={100} > <FcVideoProjector title='Project'/>Projects</Link></div>
          </div>
          <div className="nav-item">
            <div className="nav-link"> <Link to="workexp" spy={true} smooth={true} offset={-100} duration={100} > <FcPortraitMode title='Work Experience' />Work Experience</Link></div>
          </div>
          <div className="nav-item">
            <div className="nav-link"> <Link to="contact" spy={true}  smooth={true} offset={-100} duration={100} > <FcBusinessContact title='Contact' />Contact</Link></div>
          </div>
        </div>
      </>
    )
    :
    (
      <>

        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link"> <Link to="home" spy={true}  smooth={true} offset={-100} duration={100} > <FcHome title='Home'/></Link></div>
          </div>
          <div className="nav-item">
            <div className="nav-link"> <Link to="about" spy={true} smooth={true} offset={-100} duration={100} > <FcAbout title='About'/></Link></div>
          </div>
          <div className="nav-item">
            <div className="nav-link"> <Link to="education" spy={true} smooth={true} offset={-100} duration={100} > <FcReadingEbook title='Education' /></Link></div>
          </div>
          <div className="nav-item">
            <div className="nav-link"> <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100} > <FcBiotech title='Tech Stack' /></Link></div>
          </div>
          <div className="nav-item">
            <div className="nav-link"> <Link to="project" spy={true} smooth={true} offset={-100} duration={100} > <FcVideoProjector title='Project'/></Link></div>
          </div>
          <div className="nav-item">
            <div className="nav-link"> <Link to="workexp" spy={true} smooth={true} offset={-100} duration={100} > <FcPortraitMode title='Work Experience' /></Link></div>
          </div>
          <div className="nav-item">
            <div className="nav-link"> <Link to="contact" spy={true}  smooth={true} offset={-100} duration={100} > <FcBusinessContact title='Contact' /></Link></div>
          </div>
        </div>

      </>
    )
    }
    
    </>
  )
}

export default Menus