import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {PiStrategyBold } from 'react-icons/pi'
import {LuPackageOpen  } from 'react-icons/lu'
import {FaTrademark } from 'react-icons/fa6'
import {MdOutlineCoffeeMaker,MdCelebration  } from 'react-icons/md'
import {TbReportSearch, TbTruckDelivery  } from 'react-icons/tb'

const Howwework = () => {
  return (
    <div className=" w-11/12 mx-auto">
      <div className="pt-16">
        <h2 className="text-5xl text-center">
          How <span className="italic">we</span> work?
        </h2>
        <p className="text-center pb-16">
          35+ years experience in creating advanced cosmetic formulations.
        </p>
        <div>
          <VerticalTimeline className="vertical-timeline-custom-line">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              icon={<PiStrategyBold />}
              contentStyle={{ background: "#f6f6f6",borderRadius: '15px', color: "#000", boxShadow: 'none' }}
              iconStyle={{ background: "#f3bb18", color: "#000", boxShadow: 'none' }}
            >
              <h2 className="vertical-timeline-element-title">
              Understanding & Strategy
              </h2>
              <p>
              We’ll understand your requirements and prepare a product development strategy
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{boxShadow: 'none', background:'#f6f6f6', borderRadius: '15px'}}
              className="vertical-timeline-element--work"
              icon={<LuPackageOpen  />}
              iconStyle={{ background: "#f3bb18", color: "#000",boxShadow: 'none' }}
            >
              <h2 className="vertical-timeline-element-title">Packaging, Costing & Approval</h2>
              <p>
              We’ll understand your requirements and prepare a product development strategy
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            contentStyle={{boxShadow: 'none', background:'#f6f6f6', borderRadius: '15px'}}
              className="vertical-timeline-element--work"
              icon={<FaTrademark />}
              iconStyle={{ background: "#f3bb18", color: "#000", boxShadow: 'none' }}
            >
              <h2 className="vertical-timeline-element-title">Trademark & Branding</h2>
              <p>We’ll understand your requirements and prepare a product development strategy</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            contentStyle={{boxShadow: 'none', background:'#f6f6f6', borderRadius: '15px'}}
              className="vertical-timeline-element--work"
              icon={<MdOutlineCoffeeMaker />}
              iconStyle={{ background: "#f3bb18", color: "#000", boxShadow: 'none' }}
            >
              <h2 className="vertical-timeline-element-title">Production & Research</h2>
              <p>We’ll understand your requirements and prepare a product development strategy</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            contentStyle={{boxShadow: 'none', background:'#f6f6f6', borderRadius: '15px'}}
              className="vertical-timeline-element--education"
              icon={<TbReportSearch />}
              iconStyle={{ background: "#f3bb18", color: "#000", boxShadow: 'none' }}
            >
              <h2 className="vertical-timeline-element-title">
                Final Report & Inspection
              </h2>
              <p>We’ll understand your requirements and prepare a product development strategy</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            contentStyle={{boxShadow: 'none', background:'#f6f6f6', borderRadius: '15px'}}
              className="vertical-timeline-element--education"
              icon={<TbTruckDelivery />}
              iconStyle={{ background: "#f3bb18", color: "#000", boxShadow: 'none' }}
            >
              <h2 className="vertical-timeline-element-title">
                Double Checking & Dispatch
              </h2>
              <p>We’ll understand your requirements and prepare a product development strategy</p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
            icon={<MdCelebration />}
              iconStyle={{ background: "#f3bb18", color: "#000" }}
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Howwework;
