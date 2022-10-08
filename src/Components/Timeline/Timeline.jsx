import React from 'react'
import './Timeline.css'
import Illustration2 from './../../Assests/illustration2.png'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {

    return (
        <div className='timeline'>
            <div className='container'>
                {/* Left */}
                <div className='left'>
                    <h2 className='blue'>TIMELINE</h2>
                    <p>
                    Here’s your guide to the ACM Recruitment process. Go through all the steps to know the exact process of the recruitment.
                    </p>
                    <img src={Illustration2} className="illustration" alt="Computer Boy"/>
                </div>

                {/* Right */}

                <div className='right'>


                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "#0F283E", color: "#fff" }}
                            contentArrowStyle={{
                                borderRight: "3px solid  #0F283E",
                            }}
                            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Recruitment Form
                            </h3>
                            <p className="mt-3 vertical-timeline-element-subtitle">
                                8 October 2022
                            </p>
                        </VerticalTimelineElement>




                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: "#0F283E", color: "#fff" }}
                        >
                            <h3 className="vertical-timeline-element-title">Form Closes</h3>
                            <h5 className=" mt-3 vertical-timeline-element-subtitle">
                                25 July
                            </h5>
                        </VerticalTimelineElement>



                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "#0F283E", color: "#fff" }}
                            contentArrowStyle={{
                                borderRight: "7px solid  #0F283E",
                            }}
                            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                        >
                            <h3 className="vertical-timeline-element-title">Emails Out</h3>
                            <h5 className=" mt-3 vertical-timeline-element-subtitle">
                                1 August
                            </h5>
                        </VerticalTimelineElement>



                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: "#0F283E", color: "#fff" }}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Direct PI form
                            </h3>
                            <h5 className=" mt-3 vertical-timeline-element-subtitle">
                                1 August
                            </h5>
                        </VerticalTimelineElement>
                      
                    </VerticalTimeline>


                </div>
            </div>

        </div>
    )
}

export default Timeline