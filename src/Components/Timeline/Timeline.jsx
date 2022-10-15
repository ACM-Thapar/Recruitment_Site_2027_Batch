import React from 'react';
import './Timeline.css';
import Illustration2 from './../../Assests/illustration2.png';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="container">
        {/* Left */}
        <div className="left">
          <h2 className="blue">TIMELINE</h2>
          <p>
            Here’s your guide to the ACM Recruitment process. Go through all the steps to know the exact process of the recruitment.
          </p>
          <img
            src={Illustration2}
            className="illustration"
            alt="Computer Boy"
          />
        </div>

        {/* Right */}

        <div className="right">

          <VerticalTimeline>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{background: '#0F283E', color: '#fff'}}
              contentArrowStyle={{
                borderRight: '3px solid  #0F28E',
              }}
              iconStyle={{background: '#6ABCF8', color: '#fff'}}
            >
              <h3 className="vertical-timeline-element-title">
                Recruitment Form
              </h3>
              <p className="vertical-timeline-element-subtitle">
                11 October 2022
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{background: '#0077CB', color: '#fff'}}
            >
              <h3 className="vertical-timeline-element-title">
                {' '}RecruitmentForm Closes
              </h3>
              <p className="vertical-timeline-element-subtitle">
                16 October 2022
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{background: '#0F283E', color: '#fff'}}
              contentArrowStyle={{
                borderRight: '7px solid  #0F283E',
              }}
              iconStyle={{background: '#10293F', color: '#fff'}}
            >
              <h3 className="vertical-timeline-element-title">
                Recruitment Quiz
              </h3>
              <p className="vertical-timeline-element-subtitle">
                17 October 2022
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{background: '#0077CB', color: '#fff'}}
            >
              <h3 className="vertical-timeline-element-title">
                Quiz Results
              </h3>
              <p className="vertical-timeline-element-subtitle">
                Yet to be announced
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{background: '#0F283E', color: '#fff'}}
              contentArrowStyle={{
                borderRight: '3px solid  #0F283E',
              }}
              iconStyle={{background: '#6ABCF8', color: '#fff'}}
            >
              <h3 className="vertical-timeline-element-title">
                Personal Interview{' '}
              </h3>
              <p className="vertical-timeline-element-subtitle">
                Yet to be announced{' '}
              </p>
            </VerticalTimelineElement>

          </VerticalTimeline>

        </div>
      </div>

    </div>
  );
};

export default Timeline;
