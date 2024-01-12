// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import {PiStrategyBold } from 'react-icons/pi'
// import {LuPackageOpen  } from 'react-icons/lu'
// import {FaTrademark } from 'react-icons/fa6'
// import {MdOutlineCoffeeMaker,MdCelebration  } from 'react-icons/md'
// import {TbReportSearch, TbTruckDelivery  } from 'react-icons/tb'

// const Howwework = () => {
//   return (
//     <div className=" w-11/12 mx-auto">
//       <div className="pt-16">
//         <h2 className="text-5xl text-center">
//           How <span className="italic">we</span> work?
//         </h2>
//         <p className="text-center pb-16">
//           35+ years experience in creating advanced cosmetic formulations.
//         </p>
//         <div>
//           <VerticalTimeline className="vertical-timeline-custom-line">
//             <VerticalTimelineElement
//               className="vertical-timeline-element--work"
//               icon={<PiStrategyBold />}
//               contentStyle={{ background: "#f6f6f6",borderRadius: '15px', color: "#000", boxShadow: 'none' }}
//               iconStyle={{ background: "#f3bb18", color: "#000", boxShadow: 'none' }}
//             >
//               <h2 className="vertical-timeline-element-title">
//               Understanding & Strategy
//               </h2>
//               <p>
//               We’ll understand your requirements and prepare a product development strategy
//               </p>
//             </VerticalTimelineElement>
//             <VerticalTimelineElement
//               contentStyle={{boxShadow: 'none', background:'#f6f6f6', borderRadius: '15px'}}
//               className="vertical-timeline-element--work"
//               icon={<LuPackageOpen  />}
//               iconStyle={{ background: "#f3bb18", color: "#000",boxShadow: 'none' }}
//             >
//               <h2 className="vertical-timeline-element-title">Packaging, Costing & Approval</h2>
//               <p>
//               We’ll understand your requirements and prepare a product development strategy
//               </p>
//             </VerticalTimelineElement>
//             <VerticalTimelineElement
//             contentStyle={{boxShadow: 'none', background:'#f6f6f6', borderRadius: '15px'}}
//               className="vertical-timeline-element--work"
//               icon={<FaTrademark />}
//               iconStyle={{ background: "#f3bb18", color: "#000", boxShadow: 'none' }}
//             >
//               <h2 className="vertical-timeline-element-title">Trademark & Branding</h2>
//               <p>We’ll understand your requirements and prepare a product development strategy</p>
//             </VerticalTimelineElement>
//             <VerticalTimelineElement
//             contentStyle={{boxShadow: 'none', background:'#f6f6f6', borderRadius: '15px'}}
//               className="vertical-timeline-element--work"
//               icon={<MdOutlineCoffeeMaker />}
//               iconStyle={{ background: "#f3bb18", color: "#000", boxShadow: 'none' }}
//             >
//               <h2 className="vertical-timeline-element-title">Production & Research</h2>
//               <p>We’ll understand your requirements and prepare a product development strategy</p>
//             </VerticalTimelineElement>
//             <VerticalTimelineElement
//             contentStyle={{boxShadow: 'none', background:'#f6f6f6', borderRadius: '15px'}}
//               className="vertical-timeline-element--education"
//               icon={<TbReportSearch />}
//               iconStyle={{ background: "#f3bb18", color: "#000", boxShadow: 'none' }}
//             >
//               <h2 className="vertical-timeline-element-title">
//                 Final Report & Inspection
//               </h2>
//               <p>We’ll understand your requirements and prepare a product development strategy</p>
//             </VerticalTimelineElement>
//             <VerticalTimelineElement
//             contentStyle={{boxShadow: 'none', background:'#f6f6f6', borderRadius: '15px'}}
//               className="vertical-timeline-element--education"
//               icon={<TbTruckDelivery />}
//               iconStyle={{ background: "#f3bb18", color: "#000", boxShadow: 'none' }}
//             >
//               <h2 className="vertical-timeline-element-title">
//                 Double Checking & Dispatch
//               </h2>
//               <p>We’ll understand your requirements and prepare a product development strategy</p>
//             </VerticalTimelineElement>
            
//             <VerticalTimelineElement
//             icon={<MdCelebration />}
//               iconStyle={{ background: "#f3bb18", color: "#000" }}
//             />
//           </VerticalTimeline>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Howwework;




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
import { TbReportSearch, TbTruckDelivery } from "react-icons/tb";
import { motion } from "framer-motion";

const Howwework = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="pt-16">
        <h2 className="text-3xl md:text-5xl text-center">
          How <span className="italic">we</span> work?
        </h2>
        <p className="text-center pb-8 md:pb-16">
          35+ years experience in creating advanced cosmetic formulations.
        </p>
        <div>
          <VerticalTimeline className="vertical-timeline-custom-line">       
            <VerticalTimelineElement
              className="vertical-timeline-element--work cursor-pointer"
              icon={<PiStrategyBold />}
              contentStyle={{
                background: "#f6f6f6",
                borderRadius: "15px",
                color: "#000",
                boxShadow: "none",
              }}
              iconStyle={{
                background: "#f3bb18",
                color: "#000",
                boxShadow: "none",
              }}
            >       
              <h2 className="vertical-timeline-element-title">
                Understanding & Strategy
              </h2>
              <p>Delving deep into your product needs and market trends, our strategic approach aligns with your vision, tailoring solutions to meet business goals.</p>
            </VerticalTimelineElement>        
            <VerticalTimelineElement
              contentStyle={{
                boxShadow: "none",
                background: "#f6f6f6",
                borderRadius: "15px",
              }}
              className="vertical-timeline-element--work cursor-pointer"
              icon={<LuPackageOpen />}
              iconStyle={{
                background: "#f3bb18",
                color: "#000",
                boxShadow: "none",
              }}
            >
              <h2 className="vertical-timeline-element-title">
                Packaging, Costing & Approval
              </h2>
              <p>With meticulous attention to design, cost, and approvals, our transparent costing process ensures financial clarity, enhancing product appeal through innovative packaging solutions.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                boxShadow: "none",
                background: "#f6f6f6",
                borderRadius: "15px",
              }}
              className="vertical-timeline-element--work cursor-pointer"
              icon={<FaTrademark />}
              iconStyle={{
                background: "#f3bb18",
                color: "#000",
                boxShadow: "none",
              }}
            >
              <h2 className="vertical-timeline-element-title">
                Trademark & Branding
              </h2>
              <p>Elevate your brand identity with our services, guiding you through the legal intricacies to create a unique brand image resonating with your target audience.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                boxShadow: "none",
                background: "#f6f6f6",
                borderRadius: "15px",
              }}
              className="vertical-timeline-element--work cursor-pointer"
              icon={<MdOutlineCoffeeMaker />}
              iconStyle={{
                background: "#f3bb18",
                color: "#000",
                boxShadow: "none",
              }}
            >
              <h2 className="vertical-timeline-element-title">
                Production & Research
              </h2>
              <p>Backed by cutting-edge research and state-of-the-art facilities, we ensure the highest quality standards, employing advanced technologies to exceed industry benchmarks.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                boxShadow: "none",
                background: "#f6f6f6",
                borderRadius: "15px",
              }}
              className="vertical-timeline-element--education cursor-pointer"
              icon={<TbReportSearch />}
              iconStyle={{
                background: "#f3bb18",
                color: "#000",
                boxShadow: "none",
              }}
            >
              <h2 className="vertical-timeline-element-title">
                Final Report & Inspection
              </h2>
              <p>Prioritizing quality, our thorough inspections and final report guarantee a flawless product meeting stringent quality criteria at every stage.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                boxShadow: "none",
                background: "#f6f6f6",
                borderRadius: "15px",
              }}
              className="vertical-timeline-element--education cursor-pointer"
              icon={<TbTruckDelivery />}
              iconStyle={{
                background: "#f3bb18",
                color: "#000",
                boxShadow: "none",
              }}
            >
              <h2 className="vertical-timeline-element-title">
                Double Checking & Dispatch
              </h2>
              <p>Our commitment to perfection extends to the double-checking phase, ensuring your product reaches you in optimal condition, ready to leave a lasting impression in the market.</p>
            </VerticalTimelineElement>
            {/* <VerticalTimelineElement
              icon={<MdCelebration />}
              iconStyle={{ background: "#f3bb18", color: "#000" }}
            /> */}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Howwework;
