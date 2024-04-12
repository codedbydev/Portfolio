import React from "react";
import Profile from "../assests/images/profile.png";
import { Styles } from "../utils/Style";
import Resume from "../assests/images/resume.pdf";
import { TiArrowDownOutline  } from "react-icons/ti";

const About = () => {
  return (
    <div
      className="flex flex-wrap justify-center items-center mt-10 p-10"
      id="Home">
      <div className="flex-1 py-4">
        <span className={Styles.heroHeadText}>
          Hi, I'm <span className="text-orange-600">Dev</span>
          <br />
          <span className={Styles.heroSubText}>
            I am a Front-end Developer &
            <br />
            UI/UX Designer
          </span>
        </span>
        <br />
        <div className="w-[14rem]">
          <a
            href={Resume}
            // download={Resume} // Download for resume
            target="_blank" 
            rel="noreferrer"
          >

            <button className=" p-4 mt-2 w-[13rem] rounded-xl text-orange-500 flex justify-center border-2 border-orange-500 hover:border-violet-500 shadow-lg hover:shadow-pink-500 ">
             <TiArrowDownOutline className="text-lg mr-3 mt-1 text-orange"></TiArrowDownOutline> Resume
            </button>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap ">
        <img src={Profile} alt="Profile..." className="element object-contain p-4" />
      </div>
    </div>
  );
}; 

export default About;
