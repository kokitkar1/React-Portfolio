import React from 'react'
import './home.css'
import {useTheme} from '../../context/ThemeContext.js'
import Typewriter from 'typewriter-effect';
import Resume from '../../Assets/Docs/Sagar_Kokitkar_CV.pdf'
import {BsFillMoonStarsFill,BsFillSunFill} from 'react-icons/bs'



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
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            <a className="btn btn-cv" href={Resume} download="Sagar_Kokitkar.pdf">My Resume</a>
          </div>
        </div>
      </div>   
    </>
  )
}

export default Home