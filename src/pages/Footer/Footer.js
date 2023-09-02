import React from 'react'
import './Footer.css'
import Bounce from 'react-reveal/Bounce';



const Footer = () => {
  return (
    <>
      <Bounce>
        <div className="footer pb-3 ms-3">
            <hr />
          <h5 className="text-center">Made With ❤️ By Sagar Kokitkar &copy; 2023</h5>
        </div>
      </Bounce>
    </>
  )
}

export default Footer