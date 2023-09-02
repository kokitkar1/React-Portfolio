import React from 'react'
import './WorkExp.css'
import {FaNode} from 'react-icons/fa'
import {VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Jump from 'react-reveal/Jump';


const WorkExp = () => {
  return (
    <>
        <div className="container" id='workexp'>
        <div className="container experience">
          <Jump>
          <h2 className="col-12 mt-3 mb-1 text-center">Experience</h2>
          <hr />
          <p className="pb-3 text-center">
            👉 Including programming Languages, Frameworks, Database, Front-End
            and Back-End Tools and API
          </p>
          </Jump>

          
          <VerticalTimeline lineColor="gray">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "lightyellow",
                color: "black",
                borderRadius: "50px 0px",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  gray",
                marginLeft: "10px",
              }}
              date="06-2023 - 08-2023"
              iconStyle={{ background: "#aacec7", color: "black" }}
              icon={<FaNode />}
            >
              <h3 className="vertical-timeline-element-title">Backend Developer Intern</h3>
              <h6 className="vertical-timeline-element-subtitle">
                Chiefex Technologies Pvt Ltd <br /><span>Airoli, Navi Mumbai</span>
              </h6>
              {/* <h4 className="vertical-timeline-element-subtitle">
                Airoli, Navi Mumbai, IN
              </h4> */}
              <p className='desc'>
                • Responsible for server-side web application logic and integration. <br />
                • Maintaining, testing, and debugging the entire back end of an application. <br />
                • Compiling and evaluating data, codes, and processes.<br />
                • Troubleshooting issues to improve user experience. Finding areas that need improvements.<br />
                • Working together with front-end developers and other team members to fulfill objectives.<br />
              </p>
            </VerticalTimelineElement>

            {/* <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(250, 221, 225)",
                color: "black",
                borderRadius: "10px",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  gray",
                marginRight: "10px",
              }}
              date="2011 - 2012"
              iconStyle={{ background: "#aacec7", color: "black" }}
              icon={<SiJavascript />}
            >
              <h3 className="vertical-timeline-element-title">HSC</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Maharashtra State Board, IN
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement> */}

            {/* <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(250, 221, 225)",
                color: "black",
                borderRadius: "10px",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  gray",
                marginLeft: "10px",
              }}
              date="2009 - 2010"
              iconStyle={{ background: "#aacec7", color: "black" }}
              icon={<SiJavascript />}
            >
              <h3 className="vertical-timeline-element-title">SCC</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Maharashtra State Board, IN
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement> */}
          </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

export default WorkExp