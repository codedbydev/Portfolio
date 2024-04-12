import React from "react";
import Tilt from "react-parallax-tilt";
import { Styles } from "../utils/Style";
import { technologies, services } from "../Constants";
// import { motion } from "framer-motion";
import "./style.css";
// import { GrTechnology } from "react-icons/gr";

function Overview() {
  return (
    <div>
      <div
        className="flex-row items-center pl-5 justify-center pt-3"
        id="Overview"
      >
        <span className={Styles.sectionHeadText}>Introduction</span>
        <hr className="w-[35%]"></hr>
        <div className={Styles.sectionText}>
          I'm a skilled web developer with experience in JavaScript and
          experties in frameworks like React. I'm a quick learner and
          collaborate, scalable and user-firendly solution that solve real-world
          problems. Let's work together to bring your ideas to Life!
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {services.map((service) => (
          <div>
            <Tilt
              key={service.icon}
              className="parallax-effect-glare-scale"
              perspective={500}
              glareColor="fed7aa"
              glareEnable={true}
              glareMaxOpacity={0.5}
              scale={1.02}
              gyroscope={true}
            >
              <div className="p-3 m-3 flex flex-col justify-evenly items-center">
                <img
                  className="h-[100px] w-[100px]"
                  src={service.icon}
                  alt={service.title}
                />
                <div className="m-5 text-violet-500">{service.title}</div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="m-4 flex flex-col items-center justify-center h-[90px] w-[100px] rounded-3xl shadow-2xl border-2 border-violet-400 hover:shadow-orange-300 overflow-hidden"
            style={{ border: '2px solid violet' }}
          >
            <div className="h-[100px] w-[60px] flex items-center justify-center overflow-hidden">
              <img
                className="max-h-full max-w-full object-contain rounded-2xl"
                src={technology.icon}
                alt={technology.name}
              />
            </div>
            <div className="text-violet-600 p-1 text-center">
              {technology.name}
            </div>
          </div>
        ))}
      </div>


      {/* <div className="flex flex-wrap justify-center items-center">
  {technologies.map((technology) => (
    <div
      key={technology.name}
      className="m-4 mt-5 flex flex-col items-center justify-start h-[140px] w-[120px] rounded-3xl shadow-2xl border-2 border-violet-400 hover:shadow-orange-300 overflow-hidden"
    >
      <img
        className="h-3/5 w-full object-cover rounded-t-3xl" 
        src={technology.icon}
        alt={technology.name}
      />
      <div className="h-2/5 w-full flex items-center justify-center text-center text-violet-600 p-1"> 
        {technology.name}
      </div>
    </div>
  ))}
</div> */}

      {/* <div className="flex flex-wrap justify-center items-center">
        {technologies.map((technology) =>
        (
          <div
            key={technology.name}
            className="m-4 mt-5 h-[100px] w-[100px] rounded-3xl shadow-2xl border-[1px] border-violet-400 border-red-500 hover:shadow-orange-300" 
          >
            <img className=" p-2 h-[100%] w-[100%]  rounded-3xl" src={technology.icon} alt={technology.name} />
            <div className="text-violet-600 justify-center flex">
              {technology.name}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Overview;
