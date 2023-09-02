import React from 'react'
import './About.css'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <>
        <div className="about" id='about'>
            <div className="row">
            <Fade right>
                <div className="col-md-4 col-xl-4 col-lg-4 col-xs-9 about-img">
                    <img src="/images/pic3.png" alt="Profile_Pic" />
                </div>
            </Fade>
            <Zoom>
                <div className="col-md-6 col-xl-8 col-lg-6 col-xs-12  about-content">
                    <h1>About Me</h1>
                    <hr />
                    <p>
                    I'm Sagar and I'm a Full Stack Developer
                    I am an Hard Working

                    I am able to work both in team environment as well as using own initiative. In order to complete work I am punctual and motivated and work in busy environment and produce high standards of work.

                    I always Willing to learn new skills, dedicated towards my work and I am Attentive, flexible, patient, responsive and sincere for my work and with my friends family and colleagues

                    I am capable and eager of learning new technologies with a efficient and organized way. I am Adventurous, positive and creative, always want to take risk and work in high pressure work to utilized my skill and take advantage of learn something new in that condition
                    </p>
                </div>
             </Zoom>
            </div>
        </div>
    </> 
  )
}

export default About