import React from "react";
import "./Education.css";
import { IoIosSchool } from "react-icons/io";
import {VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <>
      <div className="container" id="education">
        <div className="container education">
          <h2 className="col-12 mt-3 mb-1 text-center">Education</h2>
          <hr />
          {/* <p className="pb-3 text-center">
            👉 Including programming Languages, Frameworks, Database, Front-End
            and Back-End Tools and API
          </p> */}

          <VerticalTimeline lineColor="rgb(13, 148, 105)">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(159, 221, 159)",
                color: "black",
                borderRadius: "50px 5px 100px 5px",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  gray",
                marginLeft: "10px",
              }}
              date="2018 - 2021"
              iconStyle={{ background: "#aacec7", color: "black" }}
              icon={<IoIosSchool />}
            >
              <h3 className="vertical-timeline-element-title">Bsc IT</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Mumbai University, IN
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(159, 221, 159)",
                color: "black",
                borderRadius: "5px 30px 5px 80px",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  gray",
                marginRight: "10px",
              }}
              date="2011 - 2012"
              iconStyle={{ background: "#aacec7", color: "black" }}
              icon={<IoIosSchool />}
            >
              <h3 className="vertical-timeline-element-title">HSC</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Maharashtra State Board, IN
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(159, 221, 159)",
                color: "black",
                borderRadius: "50px 5px 100px 5px",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  gray",
                marginLeft: "10px",
              }}
              date="2009 - 2010"
              iconStyle={{ background: "#aacec7", color: "black" }}
              icon={<IoIosSchool />}
            >
              <h3 className="vertical-timeline-element-title">SCC</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Maharashtra State Board, IN
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Education;
