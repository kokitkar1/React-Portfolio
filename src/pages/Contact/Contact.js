import React from 'react'
import './Contact.css'
import {ImLinkedin,ImGithub,ImFacebook2} from 'react-icons/im'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';




const Contact = () => {
  return (
    <>
    <div className="container" id='contact'>
    <div className="container contact">
        <div className="card card0 border-0">
        <Fade top>
        <h2 className='text-center mt-3'>Contact us</h2> 
        </Fade> 
         <Fade right>
        <hr />  
         </Fade>
            <div className="row">
                <Zoom>
                <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                    <div className="card1">
                        <div className="row border-line">
                            <img src="/images/contactus.jpeg" alt="contact" className='image' />
                        </div>
                    </div>
                </div>
                </Zoom>

                <div className="col-md-6 col-lg-6">
                        <div className="card2 d-flex card border-0 px-4 py-5">
                            <div className="row">
                            <div className="row">

                            <h4 className='heading text-center'>Connect with 
                            <div className="head mt-2">

                                <ImLinkedin color='darkblue' size={30} className='ms-2 iconcontact' />
                                <ImGithub color='black' size={30} className='ms-2 iconcontact' />
                                <ImFacebook2 color='darkblue' size={30} className='ms-2 iconcontact' />
                            </div>
                            </h4>
                            </div>
                        <div className="row px-3 mb-4">
                            <div className="line" />
                                <small className="or text-center">OR</small>
                            <div className="line" />
                        </div>
                        <Fade left>
                        <div className="row px-3">
                            <input type="text" name="name" className="mb-3" placeholder='Enter Your Name'/>
                        </div>
                        </Fade>
                        <Fade right>
                        <div className="row px-3">
                            <input type="email" name="email" className="mb-3" placeholder='Enter Your Email'/>
                        </div>
                        </Fade>
                        <Fade left>
                        <div className="row px-3">
                            <textarea type="text" name="msg" className="mb-3" placeholder='Write Your message'/>
                        </div>
                        </Fade>
                        <Tada>
                        <div className="row px-3">
                            <button className='button' type='submit'>SEND MESSAGE</button>
                        </div>
                        </Tada>
                    </div>

                </div>
                </div>
            </div>
        </div>
    </div>
    </div>

    </>
  )
}

export default Contact
