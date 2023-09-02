import React from 'react'
import './Projects.css'
import Swing from 'react-reveal/Swing';
import Fade from 'react-reveal/Fade';



const Projects = () => {
  return (
    <>
    <div className="container project" id='project'>
        <Fade top>
    <h2 className='col-12 mt-3 mb-1 text-center'>Project Portfolio</h2>
        </Fade>
        <hr />
        <Fade bottom>
        <p className='pb-3 text-center'>👉 My projects portfolio with live links and Source code</p>
        </Fade>
        <div className="row" id='ads'>
        <Swing>
            <div className="col-md-4 pro">
                <div className="card rounded">
                    <div className="card-image">
                        <span className='card-notify-badge' >Full Stack</span>
                        <img src="/images/E-Wi$h.png" alt="Project1" />
                        <hr />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className='card-detail-badge'>MongoDB</span>
                        <span className='card-detail-badge'>Express</span>
                        <span className='card-detail-badge'>React</span>
                        <span className='card-detail-badge'>Node</span>
                    </div>
                    <div className="card-body">
                        <div className="ad-title m-auto">
                            <h5>E commerce Website </h5>
                        </div>
                        <a href="https://tender-cow-overalls.cyclic.app" target='blank'  className='ad-btn' >View</a>
                    </div>
                </div>
            </div>
            </Swing>
            <Swing>
            <div className="col-md-4 pro">
                <div className="card rounded">
                    <div className="card-image">
                        <span className='card-notify-badge' >Static Website</span>
                        <img src="/images/Grillgarden.png" alt="Project1" />
                        <hr />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className='card-detail-badge'>HTML</span>
                        <span className='card-detail-badge'>CSS</span>
                        <span className='card-detail-badge'>JavaScript</span>
                        {/* <span className='card-detail-badge'>Node</span> */}
                    </div>
                    <div className="card-body">
                        <div className="ad-title m-auto">
                            <h5>Restaurant Website </h5>
                        </div>
                        <a href="https://grillgarden.netlify.app"  target='blank' className='ad-btn' >View</a>
                    </div>
                </div>
            </div>
            </Swing>
            <Swing>
            <div className="col-md-4 pro">
                <div className="card rounded">
                    <div className="card-image">
                        <span className='card-notify-badge' >JavaScript</span>
                        <img src="/images/dictionary.jpg" alt="Project1" />
                        <hr />
                    </div>
                    <div className="card-image-overly m-auto mt-3">
                        <span className='card-detail-badge'>HTML</span>
                        <span className='card-detail-badge'>CSS</span>
                        <span className='card-detail-badge'>JavaScript</span>
                        {/* <span className='card-detail-badge'>Node</span> */}
                    </div>
                    <div className="card-body">
                        <div className="ad-title m-auto">
                            <h5>Portfolio using JavaScript </h5>
                        </div>
                        <a href="https://sagarkokitkar.netlify.app/" target='blank' className='ad-btn' >View</a>
                    </div>
                </div>
            </div>
            </Swing>
            
        </div>
    </div>
    </>
  )
}

export default Projects



//14.56