import React from 'react'
import { Styles } from '../utils/Style'
import { projects } from '../Constants'
import Tilt from 'react-parallax-tilt'
import { SiGithub, SiNetlify } from 'react-icons/si'

function Projects() {
    return (
        <div>
            <div
                className="flex-row items-center pl-5 justify-center pt-3"
                id="Projects"
            >
                <span className={Styles.sectionHeadText}>Projects</span>
                <div className={Styles.sectionText}>
                    Following projects showcase my skills and experience through real-world examples of my work, Each project is briefly described with links to code repositories and live demos in it. It reflacts my ability to solve complex problems , work with different technologies, and manage projects effectively.
                </div>
            </div>
            <div className="flex flex-wrap p-8 justify-evenly items-center">
                {projects.map((project) => (
                    <Tilt
                        key={project.name}
                        className='w-[300px] h-[500px] flex flex-col justify-start shadow-2xl m-10 items-center hover:shadow-2xl hover:shadow-violet-400 shadow-pink-300 p-3 rounded-xl border-double border-violet-900 overflow-hidden'
                    >
                        <div className="flex flex-row justify-center space-x-3 mt-3">
                            <div className="bg-slate-50 rounded-full shadow-lg flex justify-center items-center p-2">
                                <a href={project.source_deploy_link} target='_blank' rel="noopener noreferrer">
                                    <SiNetlify className='text-3xl font-bold text-violet-600' />
                                </a>
                            </div>
                            <div className="bg-slate-50 rounded-full shadow-lg flex justify-center items-center p-2">
                                <a href={project.source_code_link} target='_blank' rel="noopener noreferrer">
                                    <SiGithub className='text-3xl font-bold text-violet-600' />
                                </a>
                            </div>
                        </div>
                        <img src={project.image} alt={project.name} className='h-[200px] w-[250px] mt-3 object-fill rounded-2xl  border-pink-200' />
                        <div className="text-2xl text-violet-500 font-extrabold mt-3">
                            {project.name}
                        </div>
                        <div className="text-orange-500 text-center px-3 mt-1">
                            {project.description}
                        </div>
                    </Tilt>
                ))}
            </div>



            {/*  *********************** THIS CODE SHOW ERRORS ****************************
            <div className=" flex flex-wrap p-8 justify-evenly items-center">
                {projects.map((project) => (
                    <Tilt
                        key={project.name} className='w-[300px] h-[500px] flex flex-col justify-evenly shadow-2xl m-10 items-center hover:shadow-2xl hover:shadow-violet-400 shadow-pink-300 p-3 rounded-xl border-double border-violet-900'
                    >
                        <div className="flex justify-center items-center">
                            <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center">
                                <a href={project.source_deploy_link} target='_blank'></a>
                                <SiNetlify className='text-3xl font-bold text-violet-600'></SiNetlify>

                            </div>

                            <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center">
                                <a href={project.source_code_link} target='_blank'>
                                    <SiGithub className='text-3xl font-bold text-violet-600'></SiGithub>
                                </a>
                            </div>
                            <img src={project.image} alt={project.name} className='h-[200] w-[250] self-center border-double border-pink-200 rounded-2xl' />
                            <div className="text-2xl text-violet-500 font-extrabold">
                                {project.name}
                        </div>
                            <div className="text-orange">
                                <span className='text-orange-500'>
                                    {project.description}
                                </span>
                            </div>
                        </div>

                    </Tilt>
                ))}
            </div> */}

        </div>
    )
}

export default Projects



