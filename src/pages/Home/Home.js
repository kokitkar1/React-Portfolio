import React from 'react'
import './home.css'
import {useTheme} from '../../context/ThemeContext.js'
import Typewriter from 'typewriter-effect';
import Resume from '../../Assets/Docs/Sagar_Kokitkar_CV.pdf'
import {BsFillMoonStarsFill,BsFillSunFill} from 'react-icons/bs'
import Fade from 'react-reveal/Fade';



const Home = () => {

  const [theme,setTheme] = useTheme()

  //handle theme
  const handleTheme = () =>{
    setTheme((prevState) => (prevState === 'light' ? "dark" : "light"))
  }


  return (
    <>
      <div className="container-fluid home-container" id='home'>
        <div className="theme-btn" onClick={handleTheme}>
          {theme === 'light' ? (<BsFillMoonStarsFill size={30}/>) :(<BsFillSunFill size={30}/>)}
        </div>
        <div className="container home-content">
          <Fade top>
          <h2>Hi 👋 I am</h2>
          <h1>
            <Typewriter
              options={{
              strings: ['Full Stack Developer', 'MERN Stack Developer'],
              autoStart: true,
              loop: true,
              }}
            />
          </h1>
          </Fade>
          <div className="home-buttons">
            <Fade left>
              <a href="https://api.whatsapp.com/send?phone=9757356250"  className="btn btn-hire" rel='noreferrer' target='blank'>Hire Me</a>
            {/* <button className="btn btn-hire">Hire Me</button> */}
            </Fade>
            <Fade right>
            <a className="btn btn-cv" href={Resume} download="Sagar_Kokitkar.pdf">My Resume</a>
            </Fade>
          </div>
        </div>
      </div>   
    </>
  )
}

export default Home