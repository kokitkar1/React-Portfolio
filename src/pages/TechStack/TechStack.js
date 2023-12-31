import React from 'react'
import './TechStack.css'
import { TechStackList } from '../../utils/TechStackList.js'
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';

const TechStack = () => {
  return (
    <>
    <div className="container techstack" id='techstack'>
        <Fade top>
        <h2 className='col-12 mt-3 mb-1 text-center'>Technologies Stack</h2>
        </Fade>
        <hr />
        <Fade bottom>
        <p className='pb-3 text-center'>👉 Including programming Languages, Frameworks, Database, Front-End and Back-End Tools and API</p>
        </Fade>
        <div className="row">
            {TechStackList.map((tech) => (
                <RubberBand>
                <div key={tech._id} className="col-md-3">
                    <div className="card m-2">
                        <div className="card-content">
                            <div className="card-body">
                                <div className="media d-flex justify-content-center">
                                    <div className="align-self-center">
                                        <tech.icon className='tech-icon'/>
                                    </div>
                                    <div className="media-body">
                                        <h5>{tech.name}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </RubberBand>
            ))}
        </div>
    </div>
    </>
  )
}

export default TechStack