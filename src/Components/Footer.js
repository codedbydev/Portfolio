import React from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { GrGithub, GrLinkedinOption, GrMail } from 'react-icons/gr'

function Footer() {
    return (

        <div>
        <div className="bg-black">
            <div className="flex flex-row flex-wrap  p-6 justify-around items-center">
                <a href="https://www.linkedin.com/in/codedbydev" target='_blank' className='text-lg flex flex-row text-violet-300'>
                    <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400 ">
                        <GrLinkedinOption className='text-white'></GrLinkedinOption>
                    </div>
                    <span className='text-white ml-2'>
                        www.linkedin.com/in/codedbydev
                    </span>
                </a>
    
                <a href="mailto:codedbydev@gmail.com" target='_blank' className='text-lg flex flex-row text-violet-300'>
                    <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400 ">
                        <GrMail className='text-white'></GrMail>
                    </div>
                    <span className='text-white ml-2'>
                        codedbydev@gmail.com
                    </span>
                </a>
    
                <a href="tel:+911234567890" target='_blank' className='text-lg flex flex-row text-violet-300'>
                    <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400 ">
                        <BiSolidPhoneCall className='text-white'></BiSolidPhoneCall>
                    </div>
                    <span className='text-white ml-2'>
                        +91 1234567890
                    </span>
                </a>
    
                <a href="https://github.com/codedbydev" target='_blank' className='text-lg flex flex-row text-violet-300'>
                    <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400 ">
                        <GrGithub className='text-white'></GrGithub>
                    </div>
                    <span className='text-white ml-2'>
                        https://github.com/codedbydev
                    </span>
                </a>
            </div>
        </div>


        {/*
        ********************************THIS CODE NOT WORKING**********************************************S
        <div>
            <div className="w-[sreen] bg-black">
                <div className="flex flex-row flex-wrap p-2 justify-around items-center ">
                    <a href="https://www.google.com" target='_blank' className='text-lg flex flex-row text-violet-300'>
                        <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400 ">
                            <GrLinkedinOption className='text-white'></GrLinkedinOption>
                        </div>
                        <span className='text-white ml-1 mt-[0.1rem]'>
                            www.linkedin.com/in/codedbydev
                        </span>
                    </a>
                </div>

                <div className="flex flex-row flex-wrap p-2 justify-around ">
                    <a href="https://www.google.com" target='_blank' className='text-lg flex flex-row text-violet-300'>
                        <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400 ">
                            <GrMail className='text-white'></GrMail>
                        </div>
                        <span className='text-white ml-1 mt-[0.1rem]'>
                            codedbydev@gmail.com
                        </span>
                    </a>
                </div>

                <div className="flex flex-row flex-wrap p-2 justify-around ">
                    <a href="https://www.google.com" target='_blank' className='text-lg flex flex-row text-violet-300'>
                        <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400 ">
                            <BiSolidPhoneCall className='text-white'></BiSolidPhoneCall>
                        </div>
                        <span className='text-white ml-1 mt-[0.1rem]'>
                            +91 1234567890
                        </span>
                    </a>
                </div>

                <div className="flex flex-row flex-wrap p-2 justify-around ">
                    <a href="https://www.google.com" target='_blank' className='text-lg flex flex-row text-violet-300'>
                        <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400 ">
                            <GrGithub className='text-white'></GrGithub>
                        </div>
                        <span className='text-white ml-1 mt-[0.1rem]'>
                            https://github.com/codedbydev
                        </span>
                    </a>
                </div>
            </div>
        </div> */}


    </div>
    

        
    )
}

export default Footer